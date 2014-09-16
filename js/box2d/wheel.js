

_directionPressed  = dirPush=function(){

    pushRight = 0
    pushLeft = 0
    pushUp = 0
    pushDown = 0

    kD('l',  function(e){

            // ee = e

            pushLeft = 1

        })




    kU(  'l',  function(){pushLeft = 0} )
    kD('r',function(){pushRight=1})
    kU('r',function(){pushRight=0})
    kD('u',function(){pushUp=1})
    kU('u',function(){pushUp=0})
    kD('d',function(){pushDown=1})
    kU('d',function(){pushDown=0})

}






makeTim=function(n){
    if(U(n)){
        var b=ba().uD('tim')
        bindr('guy',b,.3)
        return b}

    _t(n,function(){
        var b=ba().uD('tim')
        bindr('guy',b,.3)})}
makeMe=function(){

    var bodyDef = DynamicBodyDef(100,100)
    var fix1 =    PolyFixture(50,100).rest(0).den()
    var fix2 =    PolyFixture(10,30,0,40).uD('feet').sensor(1)

    player = p = world.addBody(  bodyDef ,   [ fix1 , fix2 ]   ).uD( 'guy' )

    player._direction = 1

    player.direction = player.dr = function(direction){

        if(U(direction)){return this._direction}

        this._direction = direction

        return this}


    player.speed = 40

    player.moveX =  function(n){

        if (n == '-'){  return player.move( - player.speed )}

        n = N(n) ? n : player.speed

        if ( player.direction() ) {  player.aI(3,0) }  else {  player.aI(-3,0) }

        return player

    }







    player.gFL().SetFriction(1)

    bindr('me', player)

    return player}
footListener=function(){

    feetTouch = 0  // if make this local, graphics dissapear!?


    var contactListener = ContactListener()


    contactListener.beginContact(function (contact) {
        var a = contact.A(),
            b = contact.B()

        if (a.userData() == 'feet' || b.userData() == 'feet') {  feetTouch = 1  }

    })



    contactListener.endContact(function(contact){
        var a = contact.A(),
            b = contact.B()

            if (a.userData() == 'feet' || b.userData() == 'feet') {  feetTouch = 0   }

    })



    world.setContactListener( contactListener  )
}




moveListener=function(){  stage.tick(function(){


    player.rt( 0 )


    world.eachBody(

        function(body){ if(body.is('destroy')){world.destroyBody(body)}    })


    if (feetTouch) {  if (pushUp) {

                if (pushRight) {  player.aI(0, -10)   }
                else if (pushLeft) {  player.aI(0, -10)  }

                else {  player.aI(0, -10)   }

            }  else {

                if (pushLeft) {
                    player.direction( 0 )
                    player.aI( -5, 0 )  }


                if (pushRight) {
                    player.direction(1)
                    player.aI(5, 0)  }
            }  }


    else {
            if(pushLeft){
                player.direction(0)
                player.aI(-1,0)
            }

            if(pushRight){
                player.direction(1)
                player.aI(1, 0)
            }
        }






    }) }


















bindr = function( im, spr, sxy, rt ){

    sxy = sxy||.4

    rt = N(rt) ? rt : 6

    var stage = s

    stage.bm(

        im,

        function(b){

            b.rgc('+')

            if (A(sxy)){ b.sx( sxy[0] ).sy( sxy[1] ) } else { b.sxy( sxy ) }

            b.rt( rt )

            stage.tick( function(){

                b.xy(spr.x(), spr.y()); b.rt( rt + spr.rt() )

            })

            spr.killSprite = spr.kS = function(){ b.XX() }

        })
}





DEMO_IMPULSE =function(){

    mW({g:0})

    world.addBody(
        DynamicBodyDef(100,500).rt(2).fR(0) , PolyFixture(30,30))

    body =world.addBody(
        DynamicBodyDef(300,500).rt(1).fR(.2) , PolyFixture(30,30) )

    test={


        impulse: function(){

            body.ApplyImpulse(

                bV(10, -30), body.worldCenter()

            )},



        velocity: function(){body.SetLinearVelocity( bV( 10, -60 ) )},



        force: function(){

            setInterval(

                function(){

                    body.ApplyForce(   bV(0, -3),    body.worldCenter()    )

                }, 100)

        }



    }




}
DEMO_SCALE =function(){

    mW()

    world.baa(400,300,40)

    world.baa(290,350,40)

    world.baa(280,220,40)

    var body, radius=10, x=400, y=440, v={x:0,y:0}


    addBody()

    stage.tick( destroyAndAddBody )

    stage.bm( 'me' )

    function addBody(){

        body = world.addBody( DynamicBodyDef(x,y).linVel(v), fixture=CircleFixture(radius)  ) }


    function destroyAndAddBody(){

        body.destroyFixture( body.fixtureList() )//b.destroyFixture(fixture)

        radius += .1

        x = body.x()

        y = body.y()

        v = body.lV()

        addBody() }


}

PLAYER=function(){

    mW({w:'makeWallsFull',g:0, $$:0})

    player = p = makeMe().aD(10000)


    makeTim(30)


    //mouse control
    m$(
        function(){
            var xdif= MX -p.x(),
                ydif= MY -p.y(),
                po=p.wP(0,-75)

            //thrust ship
            p.aI(xdif/20, ydif/20)




            //rotate ship
            p.rt(
                    tDeg($M.atan(ydif/xdif))+(xdif >0?90:270) )


            //shoot
            ba(po.x, po.y , 10).aI(xdif/40,  ydif/40).uD('bul')


        }

    )






    //destroy bullets and guys
    w.oB(

        function(c){

            var a= c.A(),b=c.B()

            //if either obj is a bullet an neither is tim ('guy')

            if(

                (
                    a.gB().uD()=='bul' || b.gB().uD()=='bul'  )


                &&!


                (
                    a.gB().uD()=='guy'||

                    b.gB().uD()=='guy'
                    )



                )


            {


                //if it is a bullet
                //destroy it
                //if the other is tim, destory tim, too

                if(a.gB().uD()=='bul'){

                    a.gB().uD('destroy')

                    if(b.gB().uD()=='tim'){

                        b.gB().uD('destroy')

                    }
                }


                //if it is not a bullet
                //destrory it
                //if the other is tim, destory tim, too

                else {
                    b.gB().uD('destroy')
                    if(a.gB().uD()=='tim'){

                        a.gB().uD('destroy')

                    }
                }}

        })





    s.t(
        //actully do the destroying
        function(){

            w.e(function(b){if(b.uD()=='destroy'){

                w.dB(b)

            }})})

}
PLAYER1=function(){

    mW({

        w:'makeWallsFull',
        g:0,
        $$:0,
        bg:'space.jpg'

    })

    p=player = makeMe().angDamp( 10000 )

    makeTim( 3 )

    world.onBeginContact(function(contact){   var a= contact.A().gB(), b= contact.B().gB()


        // if either a or b is a bullet.. and neither is the guy
        // if a bullet hits a non-guy...
        if(   ( a.is('bul') ||  b.is('bul') )   && !a.is('guy')    &&  !b.is('guy')  )


        // destroy the bullet, and if it hit tim, destroy tim too
        { if( a.is('bul') ){

            a.uD( 'destroy' )

            if( b.is( 'tim' ) ){ b.uD( 'destroy' )  }

        }else { b.uD('destroy')

            if( a.is('tim') ){ a.uD('destroy') }

        }}


    })




    //key function! the safe way (time) to remove objects
    stage.tick(function(){

        world.eachBody(function(body){

            if(body.is('destroy')){

                body.killSprite()

                world.destroyBody( body )  }})  })

    dirPush()



    stage.tick(function(){
        if(pushLeft){p.rt(p.rt()-2)}
        if(pushRight){p.rt(p.rt()+2)}
        if(pushUp){var v= p.GetWorldVector(bV(0,-100))
            p.aI(v.x/100, v.y/100 )}
        if(pushDown){var v= p.GetWorldVector(bV(0,-100))
            p.aI(-v.x/40, -v.y/40 )}})



    kD('s', function(){
        var v= p.GetWorldVector(bV(0,-100)),
            po= p.wP(0,-75),

            b=ba(po.x,po.y,10).aI(v.x/40, v.y/40 ).uD('bul')

        bindr('me',b,.1)

    })


    // s.sx(2).sy(2)
    // s.t(function(){s.xy( 250-p.x() , -50-p.y()  )})

}
PLAYER2=function(){

    mW()
    bii(800,300,100)
    bii(260,240,40)
    bii(550,250,100)
    bii(1350,550,100)
    bindr('guy', bii(300,200,100),[.4,1.2])
    bindr('guy', bii(300,500,60,30),[.4,1.2])
    bindr('guy', bii(150,400,60,30))

     player = p = makeMe().aD( 10000 )

    dirPush()
    footListener()
    moveListener()


    //s.sx(2).sy(2)
   // s.t(function(){  // s.x( 450-p.x()  )  //  if(s.x() > 0){s.x(0) }  // s.y( -50-p.y()  ) })

}
PLAYER3=function(){mW()
    warpping=false
    p=makeMe().aD(10000)
    dirPush()
    warpp =function(){ p.sY(100);p.sX(200) }
    s.t(function(){if(warpping){warpp(); warpping=false}})
    w.sCL(bCL()
        .b(function(c){
        var a=c.A(),b=c.B()
        if(a.uD()=='feet'||b.uD()=='feet'){feetTouch=1}
        if(c.pair('feet','tramp')){p.aI(0,-150)}
        if(c.pair('feet','warp')){warpping=true}})
        .e(function(c){var a=c.A(),b=c.B();
        if(a.uD()=='feet'||b.uD()=='feet'){feetTouch=0}}))

    moveListener()
    makeTim(15)
    bii(500,600,30,200)
    bii(600,600,30,200)

    world.addBody(sBD(550,580), pFx(100,20).uD('warp'))
    world.addBody(dBD(650,580), pFx(100,20).uD('tramp'))}
PLAYER4=function(){

    mW()

    warpping=false

   player = p = makeMe().angDamp( 10000 )

    dirPush()


    warpp =function(){ player.sY(100); player.sX(200) } //setY, setX


    stage.tick(
        function(){

            if(warpping){ warpp(); warpping = false }

        })


    world.setContactListener(

        ContactListener()

        .beginContact( function( contact ){

                var a = contact.A(), b = contact.B()

                if( a.uD()=='feet' || b.uD() == 'feet' ){ feetTouch = 1 }

                if( contact.pair( 'feet', 'tramp' )){ p.aI( 0, -150 ) }

                if( contact.pair( 'feet', 'warp' )){ warpping = true }

        })

        .endContact( function( contact ){ var a = contact.A(),  b = contact.B()

                if( a.uD() == 'feet' || b.uD() == 'feet' ){ feetTouch = 0 }

            })

    )



    moveListener()


    makeCar()

}
MEMORY=function(){z()

    grid=[

        ['guy','me',0,0],
        [0,'me',0,0],
        [0,0,0,0],
        [0,'me','chicks','me']

    ]



    wGuy=function(){
        var x=0,y=0
        _e(grid,  function(row,i){
            _e(row,function(cell,j){if(cell=='guy'){ x=j, y=i}})})


        return {x:x,y:y}}


    dGuy=function(){

        var p=wGuy()

        grid[p.y][p.x]=0

        if( grid[p.y+1][p.x]=='chicks') {alert('win')}
        else if( grid[p.y+1][p.x]==0){
            grid[p.y+1][p.x]='guy'
            playerGrid()

        } else {alert('lose!')}}



    rGuy=function(){
        var p=wGuy()
        grid[p.y][p.x]=0

        if( grid[p.y][p.x+1]=='chicks') {alert('win')}
        else if( grid[p.y][p.x+1]==0) {
            grid[p.y][p.x+1]= 'guy'
            playerGrid()} else {alert('lose!')}}




    s=St(1000,1000).a()

    s.a(ct=Ct())

    _e(grid, function(row,i){
        _e(row, function(cell,j){
            ct.a(rct().xy(j*100+100,i*100+100))
            if(cell=='me'){
                ct.b('me',
                    function(b){  b.xy(j*100+100,  i*100+100 ).sxy(.1)})}})})




    playerGrid=function(){  _e(grid, function(row,i){

        _e(row, function(cell,j){

            ct.a(rct().xy(j*100+100,i*100+100))

            if(cell=='guy'||cell=='chicks'){  ct.b(cell, function(b){ b.xy(  j*100+100,  i*100+100 ).sxy(.1)})}

        })})}


    T( function(){ ct.XX()

        s.a(ct=Ct())
        playerGrid()},  3000)




    kD('d',dGuy)

    kD('r',rGuy)



}
SLING=function(){

    startpoint={}


    slingshot=Shape.new()

    addChild(self.slingshot)


    onMouseDown=function(event){

        if(ball.hitTestPoint(event.x, event.y)){
            mouseJoint = w.j( b2.createMouseJointDef(self.ground, self.ball.body, event.x, event.y, 100000) )

            startpoint.x = event.x
            startpoint.y = event.y

        }
    }


    onMouseMove=function(event){
        if(mouseJoint !=null){

            mouseJoint.setTarget(event.x, event.y)
            slingshot.clear()
            self.slingshot.setLineStyle(5, 0xff0000, 1)
            self.slingshot.beginPath()
            self.slingshot.moveTo(self.startpoint.x, self.startpoint.y)
            self.slingshot.lineTo(event.x, event.y)
            self.slingshot.endPath()}
    }


    onMouseUp=function(event){



        if (mouseJoint != null){
            w.dJ( mouseJoint)

            mouseJoint = null

            slingshot.clear()

            strength = 1

            xVect = ( startpoint.x-event.x)*strength
            yVect = ( startpoint.y-event.y)*strength

            ball.body.applyLinearImpulse(  xVect,   yVect, ball.getX(), ball.getY())

        }
    }

}
PINBALL=function(){



    mW({  w : 'makeWallsPinball'  })

    c.w( 430 )

    c.q.drg()

    baa(215,520,30)

    bii(215,100,100,10)

    ball= ba(215,90)

    bindr('sun', ball,.24)

    var leftJoint = baa(100,430)

    var leftFlip = bi(100,430, 100,25)

    var rightJoint = baa(330,430)

    var rightFlip = bi(330,430, 100,25)


    j1= w.CreateJoint(

        RevoluteJointDef(  leftJoint , leftFlip ,  0,0,  40,0  ).lm(150,250)

    )




    j2= w.CreateJoint(

        RevoluteJointDef(  rightJoint ,  rightFlip ,  0, 0, 40, 0  ).lm(-70,30)

    )


    bii(420,400,20,2000)



    $('body').on('keyup',  function(){ leftFlip.aI(100, 0);

        rightFlip.aI(-100,0)

    })



    $('body').on('keydown',  function(){ ba(rnd()*300+40  ,140,20)} )




    $('body').mousedown(function(){


        var b= ba(rnd()*300+40,140,20)

        if(Math.random() > .9) { bindr('me', b,.24)}

        leftFlip.aI(120, 0);
        rightFlip.aI(-120,0)

    })

    setInterval(function(){
        ball.rt( ball.rt() + 10)
    },100)


    pop(


        $.div(  'y').A(


            $.h1('welcome to gamey pinball'),



            $.h4('just tap (anywhere) and two things will happen:  (1) new ball (2) flippers flip '),


            $.h4('goal: knockdown the fireball'),

            $.h5('click the game to start')

        )

    )//.A().click(function(){ $(this).remove() })



}

controller=function(){



    d=$.div().A(

        $.button('left').id('left'),
        $.button('jump').id('jump'),
        $.button('right').id('right')

    ).A()




}


controllerListener=function(){



    pushRight = 0
    pushLeft = 0
    pushUp = 0


    $('#left').on('mousedown mouseover touchenter', function(e){

        pushLeft = 1

        e.preventDefault()

    })


    $('#left').on('mouseup mouseout touchleave', function(){ pushLeft = 0 })



    $('#jump').on('mousedown mouseover touchenter', function(){  pushUp=1  })

    $('#jump').on('mouseup mouseout touchleave', function(){  pushUp=0 })

    $('#right').on('mousedown mouseover touchenter', function(){  pushRight=1})

    $('#right').on('mouseup mouseout touchleave', function(){pushRight=0})




}


PHONEJUMP=function(){z()

    makeWorld({  W:300, H:400, w:function(){


            bii(10,300, 40, 600).uD('leftWall')

            bii(450,300, 40, 600).uD('rightWall')

            bii(300, 0, 2400, 40).uD('ceiling')

            bii(300, 400, 800, 40).uD('floor')


        }    })


    world.bii(200,400, 80,20)

    world.bii(300,200,80,20)


   // bindr('guy', bii(300,500,60,30),[.4,1.2])
  //  bindr('guy', bii(150,400,60,30))

    player = p = makeMe().aD( 10000 )

    dirPush()
    footListener()
    moveListener()

    controllerListener()


}











controlX=function(p){
    var player = p

    kD('l',function(){
        player.direction(0); player.move()})

    kD('r',function(){
        player.direction(1); player.move()
    })

    kD('u',function(){
        if(player.direction()==1){player.aI(5,-12)}
        if(player.direction()==0){player.aI(-5,-12)}})


    return player}

