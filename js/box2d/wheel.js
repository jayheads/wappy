//joints
BOXCANNON=function(){


    w=b2d.mW() // hmm.. want to matchs screen size

    a= w.bumper(300,600, 200)

    b= w.box(300,400, 100,100)

    w.Rev( a, b  )

}
EASELCANNON=function(){z()

    cjs.stage(600,600).A().A(
        cjs.circ(200, 'red','brown').rXY(100).XY(400,700),
        cjs.rect( 100, 100, 'blue', 'orange' ).XY(300, 600).rXY(50, 250))

    RTT(rect)
}
EASELBOXCANNON=function(){z();w=b2d.mW() // hmm.. want to matchs screen size

    w.Rev(
        dome = w.baa(300,600, 200),
        cannon = w.bi(300,400, 100,100))



    w.stage.A(

    cjs.circ( 200, 'red', 'blue' ).rXY(100).XY(400,700),

    rect=cjs.rect( 100, 100, 'blue', 'red' ).XY(300,600).rXY(50,250)

    )

cjs.tick(function(){

    if(rect.rt()>60){rect.rt(60)  }
    if(rect.rt()<-60){rect.rt(-60)  }


    cannon.aF( V( 0, -420 ),    cannon.worldCenter()    )

})
    RTT( rect )

}



GRAVITY=function(){

    //force not working?

    w=b2d.mW({
        grav:0
    })


   bi1= w.ball(100,100,100)
   bi2= w.ball(100,100,100)


   cjs.tick(function(){

        bi2.aF( 0, -200000 )

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




TESTBINDER = function(){b2d.mW()

    b = w.box(200,200,30,100)
    w.s.bindr('me', b)
    w.s.bindr('chicks', w.box(200,200,200,200))
    w.s.bindr('guy', w.brick())
}
















BINDSHAPE=function(){


    // why doesnt the ball (the body) bind the shape ITSELF QQQ!!!!!  it should of course - fix it

    b2d.mW()

    w.bindShape(  cjs.circ(20, 'red','blue'),   w.ball()   )

    w.bindShape( cjs.circ(20, 'pink','blue'), w.ball(100,100,20)  )

    w.bindShape( cjs.circ(20, 'purple','blue'), w.ball() )

    w.debug()

}








DEMO_IMPULSE =function(){

    b2d.mW({ grav: 0 })

    w.A( b2d.dynamic(100,500).rot(2).fixedRot(false) , b2d.poly(30,30))

    body = w.A( b2d.dynamic(300,500).rot(1).fixedRot(.2) , b2d.poly(30,30) )

    test={


        impulse: function(){

            body.ApplyImpulse(

                V(10, -30), body.worldCenter()

            )},



        velocity: function(){body.SetLinearVelocity(  V( 10, -60 ) )},



        force: function(){

            setInterval(

                function(){

                    body.ApplyForce(   V( 0, -3 ),    body.worldCenter()    )

                }, 100)

        }



    }




}



DEMO_SCALE =function(){b2d.mW()

    var  radius=10, x=400, y=440, v={x:0, y:0}

    //mouse joints messed up

   w.bumper(400,300,40)
     w.bumper(290,350,40)
    w.bumper(280,220,40)


    addBody()

    cjs.tick( destroyAndAddBody )



    function addBody(){

        body = w.A( b2d.dynamic(x,y).linVel(v),  b2d.circ(radius)  ) }


    function destroyAndAddBody(){

        body.destroyFixture( body.fixtureList() )//b.destroyFixture(fixture)

        radius += .1

        x = body.X()

        y = body.Y()

        v = body.lV()

        addBody() }


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
        _.each(grid,  function(row,i){
            _.each(row,function(cell,j){
                if(cell=='guy'){ x=j, y=i}})})


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




    s = cjs.stg(1000,1000).A()

    s.a(ct=Ct())

    _.each(grid, function(row,i){
        _.each(row, function(cell,j){
            ct.a(rct().xy(j*100+100,i*100+100))
            if(cell=='me'){
                ct.b('me',
                    function(b){  b.XY(j*100+100,  i*100+100 ).sXY(.1)})}})})




    playerGrid=function(){_.each(grid, function(row,i){

        _.each(row, function(cell,j){

            ct.A( rct().XY(j*100+100, i*100+100))

            if(cell=='guy'||cell=='chicks'){  ct.b(cell, function(b){ b.xy(  j*100+100,  i*100+100 ).sXY(.1)})}

        })})}



    T( function(){

        ct.remove()

        s.A( ct = cjs.cont())
        playerGrid()},  3000)




    $.kD('d',dGuy)

    $.kD('r',rGuy)



}


SLING=function(){

    startpoint={}


    slingshot = Shape.new()

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




$.joystick  =function(){



    $('#left').on('mousedown mouseover touchenter', function(e){
        cjs.Keys.left = true
        e.preventDefault()
    })

    $('#left').on('mouseup mouseout touchleave', function(){
        cjs.Keys.left = false})

    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })

    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })

    $('#right').on('mousedown mouseover touchenter', function(){

       cjs.Keys.right = true


    })


    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })

}


PHONEJUMP=function(){b2d.mW({W:300, H:400,
        walls:function(){
            w.brick(10,300, 40, 600).K('leftWall')
            w.brick(450,300, 40, 600).K('rightWall')
            w.brick(300, 0, 2400, 40).K('ceiling')
            w.brick(300, 400, 800, 40).K('floor')}})

    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)


     p = w.addMe()//.angDen( 10000 )


    $.joystick()

    cjs.tick(function(){

        if(cjs.Keys.up){p.I(0,-100)}
        if(cjs.Keys.left){p.I(-20, 0)}
        if(cjs.Keys.right){p.I(20, 0)}
    })

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

