


BOXCANNON=function(){


    b2.mW() // hmm.. want to matchs screen size

    a= world.baa(300,600, 200)

    b= world.bi(300,400, 100,100)

    world.Rev( a,b  )

}







EASELCANNON=function(){z()


    stage = createjs.stage(600,600).tick().A()


    circle  =  createjs.shape().circle(200, 'r','b').rXY(100).XY(400,700)

    rect =  createjs.shape().rect( 100, 100, 'b', 'r' ).XY(300, 600).rXY(50, 250)

    stage.A(circle)
    stage.A(rect)

    RTT(rect)

}


EASELBOXCANNON=function(){

    b2.mW() // hmm.. want to matchs screen size

    world.Rev(

        dome = world.baa(300,600, 200),

        cannon = world.bi(300,400, 100,100)

     )



    //stage = SuperStage( 600, 600 ).A()

    circle = Shape().circle( 200, 'r', 'b' ).rxy(100).xy(400,700)

    rect = Shape().rectangle( 100, 100, 'b', 'r' ).x(300).y(600).rx(50).ry(250)

    stage.A( circle )

    stage.A( rect )
stage.tick(function(){

    if(rect.rt()>60){rect.rt(60)  }
    if(rect.rt()<-60){rect.rt(-60)  }


    cannon.aF(   bV( 0, -420 ),    cannon.worldCenter()    )

})
    RTT( rect )

}

EASELBOXCANNON1=function(){

    b2.mW({g:0}) // hmm.. want to matchs screen size

    world.Rev(
        dome = world.baa(300,600, 200),
        cannon = world.bi(300,400, 100,100))




    //stage = SuperStage( 600, 600 ).A()

    circle = Shape().circle( 200, 'r', 'b' ).rxy(100).xy(400,700)

    rect = Shape().rectangle( 100, 100, 'b', 'r' ).x(300).y(600).rx(50).ry(250)

    ball = ba()

    stage.A( circle )

    stage.A( rect )
    stage.tick(function(){

        if(rect.rt()>60){rect.rt(60)  }
        if(rect.rt()<-60){rect.rt(-60)  }


       ball.aF(   bV( 0, 100 )  )

        cannon.rt(  rect.rt()   )

    })


    RTT( rect )




}

GRAVITY=function(){

    makeWorld()


   bi1= ba(100,100,100)
   bi2= ba(100,100,100)


    stage.tick(function(){

        bi2.aF( 0,-20000 )

    })
}




GRAVITY0=function(){
    b2.mW({g:0})


    bi1= ba(100,100,100)
    bi2= ba(100,100,100)


    stage.tick(function(){

        bi2.aF( 0, 2000 )

    })
}













makeTimX=function(num){
    var tim

    if(U(num)){
        var tim = ba().uD('tim')
        bindr('guy', tim,.3)
        return tim}

    _.times(num, function(){

        var ti= ba().uD('tim')
        bindr('guy', tim,.3)
    })

    return world}









bindrX = function( im, spr, sxy, rt ){

    sxy = sxy||.4

    rt = N(rt) ? rt : 6

    stage.bm(  im,
        function(b){bb=b
             b.rCenter('+')
             if ( A(sxy) ){  b.sX( sxy[0] ).sY( sxy[1] ) }
             else { b.sXY( sxy ) }
            b.rotation=  rt

         cjs.tick( function(){

             b.XY( spr.x(), spr.y());    b.rotation= rt + spr.rt()

         })

            // spr.killSprite = spr.kS = function(){  b.XX() }

        })
}



p=cjs.Container.prototype
p.bindr = function( img, body, sxy, startingRotation ){
    //img is an image name
    //rotation is in degerees!
    sxy = sxy||.4
    startingRotation = N( startingRotation) ?  startingRotation : 6
    this.bm(img,
           function(bm){//b=bm  //bm.rCenter('+')

               if ( A(sxy) ){  bm.sXY( sxy[0] , sxy[1] )} else { bm.sXY(sxy) }
               bm.rotation =  startingRotation
               cjs.tick( function(){
                   bm.XY(body.X(),body.Y())
                   bm.rotation =  body.rot() +  startingRotation
               })

               body.killSprite = body.kS = function(){  bm.remove() }})

    return body}




b2.testBinder = function(){z()

    b2.mW()

    b = w.bi(200,200,30,100)

    stage.bindr('me', b)
    stage.bindr('chicks', w.bi(200,200,200,200))
    stage.bindr('guy', w.bii())
}




STAGR=function(){

    z()

    canvas = $.canvas('red', 400, 400).A()

    stage = new cjs.Stage( canvas[0])

    stage.tick()

    stage.bm('me', function(me){  m=me    })
}



// fix .X(), .Y()


BINDR=function(){

    z()

     makeStage()

   //w= makeWorld()

  //  b= w.ba()

    s.tick()


   s.bm('me', function(me){

        m=me

    })



}



BINDD=function(){


    z()

    c = $.canvas( 'y',  500,  500 ).A()
    s = new createjs.Stage( c[0]  )
    s.bm('me', function(){
        s.update()
    })







}







bindShape = function( shape, spr  ){

    stage.A( shape )

    stage.tick(

        function(){   shape.XY(  spr.x(), spr.y()    )    }

    )

}






BINDSHAPE=function(){z()

makeWorld()

    bindShape( Shape().circle(20, 'x','b'), ba() )

    bindShape( Shape().circle(20, 'p','b'), ba() )

    bindShape( Shape().circle(20, 'u','b'), ba() )

}








DEMO_IMPULSE =function(){

    makeWorld({ gravity: 0 })

    world.A(

        b2.dynamicDef(100,500).rt(2).fR(0) , b2.polyDef(30,30))

    body =world.A(

        b2.dynamicDef(300,500).rt(1).fR(.2) , b2.polyDef(30,30)

    )

    test={


        impulse: function(){

            body.ApplyImpulse(

                bV(10, -30), body.worldCenter()

            )},



        velocity: function(){body.SetLinearVelocity( bV( 10, -60 ) )},



        force: function(){

            setInterval(

                function(){

                    body.ApplyForce(   bV( 0, -3 ),    body.worldCenter()    )

                }, 100)

        }



    }




}


DEMO_SCALE =function(){

    makeWorld()

    world.baa(400,300,40)

    world.baa(290,350,40)

    world.baa(280,220,40)

    var body, radius=10, x=400, y=440, v={x:0,y:0}


    addBody()

    stage.tick( destroyAndAddBody )

    stage.bm( 'me' )

    function addBody(){

        body = world.A( b2.dynamicDef(x,y).linVel(v), fixture=CircleFixture(radius)  ) }


    function destroyAndAddBody(){

        body.destroyFixture( body.fixtureList() )//b.destroyFixture(fixture)

        radius += .1

        x = body.x()

        y = body.y()

        v = body.lV()

        addBody() }


}

makeMeX=function(){

    var bodyDef = b2.dynamicDef(100,100)
    var fix1 =    b2.polyDef(50,100).rest(0).den()
    var fix2 =    b2.polyDef(10,30,0,40).uD('feet').sensor(1)
    var player = world.A(bodyDef ,   [ fix1 , fix2 ]   ).uD( 'guy' )
    player._direction = 1
    player.dir = player.direction = player.dr = function(direction){
        if(U(direction)){return this._direction}
        this._direction = direction
        return this}
    player.speed = 40
    player.moveX =  function(n){
        if (n == '-'){  return player.move( - player.speed )}
        n = N(n) ? n : player.speed
        if ( player.direction() ) {  player.aI(3,0) }  else {  player.aI(-3,0) }
        return player}
    player.fixtList().SetFriction(1)
    player.bindSprite('me')

    return player}

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



controller=function(){
    return $.gameController().A()
}




$.startControllerListener = controllerListener=function(){
    pushRight = 0
    pushLeft = 0
    pushUp = 0

    $('#left').on('mousedown mouseover touchenter', function(e){
        pushLeft = 1
        e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){
        pushLeft = 0 })
    $('#jump').on('mousedown mouseover touchenter', function(){  pushUp=1  })
    $('#jump').on('mouseup mouseout touchleave', function(){  pushUp=0 })

    $('#right').on('mousedown mouseover touchenter', function(){

       cjs.Keys.right=true


    })


    $('#right').on('mouseup mouseout touchleave', function(){pushRight=0})

}






PHONEJUMP=function(){z()

    makeWorld({

        W:300, H:400,
        walls:function(){


            bii(10,300, 40, 600).uD('leftWall')

            bii(450,300, 40, 600).uD('rightWall')

            bii(300, 0, 2400, 40).uD('ceiling')

            bii(300, 400, 800, 40).uD('floor')

        }

    })

    world.bii(200,400, 80,20)

    world.bii(300,200,80,20)


   // bindr('guy', bii(300,500,60,30),[.4,1.2])
  //  bindr('guy', bii(150,400,60,30))

    player = p = w.addMe().aD( 10000 )



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

