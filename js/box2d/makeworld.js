

b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function(ops){

    //make a world with a stage.. well with three stages!!!!

    var width,height,gravX,gravY
    if(!O(ops)){ops={}}
    if(ops.z!=false){z()}
    width = ops.W||1200; height= ops.H||600
    if( U(ops.grav) && D(ops.g) ){ops.grav = ops.g}
    gravX=0; gravY=40
    if(N(ops.grav)){ gravY = ops.grav }
    else if(A(ops.grav)){gravX = ops.grav[0]; gravY = ops.grav[1]} //else {ops.gravityY = ops.g;ops.gravityY = N(ops.gravityY) ? ops.gravityY : 40;world = w = b2d.world(V(0, ops.gravityY))}


    w = b2d.world(V(gravX, gravY))
    cjs.watchKeys()

    w.stage  = w.s =  cjs.tripleStage('black',
        width,
        height)

    w.stage.back.A()
    w.stage.A()
    w.stage.HUD.A()

      //cjs.Ticker.removeAllEventListeners()


    w.stage.autoClear=false
    w.canvas = w.stage.canvas;
    w.c =w.can = $(w.canvas)
    canvas = $(w.canvas).id('canvas')
    w.context = w.canvas.getContext('2d')
    if(ops.backgroundImage){stage.bm(ops.backgroundImage)}
    var canvasPosition = $(w.canvas)._getPosition()
    w.x = canvasPosition.x
    w.y = canvasPosition.y

    // $.gameController().A();
    $.joystick()

    _mouseJoint = _mouseIsDown = 0

    setInterval( function(){
        handleMouseJoints(); handleDebug()
    }, 1000/60 )

    $.mousedown(function(e){// *** need to change to pagex(so can scroll page?).. but i think it messes up for mobile
        var x = w.x, y = w.y
        _mouseIsDown = true
        recordMouseCoords(e)
        $.mousemove(recordMouseCoords)
        function recordMouseCoords(e){mX=(e.clientX-x)/30; mY=(e.clientY-y)/30}}).mouseup( function(){   _mouseIsDown = false})
        .touchstart(function(e){

            _mouseIsDown = true
            recordMouseCoords(e)
            $.touchmove(recordMouseCoords)
            function recordMouseCoords(e){
                var touch = e.originalEvent.touches[0]
                mX = (touch.clientX- w.x)/30
                mY = (touch.clientY- w.y)/30}}).touchend( function(){   _mouseIsDown = false})



    if(ops.clear !==false) {

        if (ops.debug == false) {

            w.debug(
                b2d.debugDraw(w.context, 30)//.flags(shB || jB).alpha(.6).line(3000)
            )
        }

        else {
            w.debug(
                b2d.debugDraw(w.context, 30).flags(shB || jB).alpha(.6).line(3000)
            )
        }

    }


    w.bD  = b2d.staticDef()//= bD
    w.fD = fD = b2d.fixtDef().d( 1 ).f( .5 ).r( .8).setShape( b2d.polyDef() )

    w.makeWalls(ops.walls )

    //w.startListening()

    return w      //if( ! ops.$$ == 0 ){ makeShapeOnDblClk() }

    function handleDebug(){
        w.step(1/60, 10, 10).draw().clearForces()
        if(F(ops.cb)){ops.cb()}
        w.stage.update()
    }


    function handleMouseJoints(){

        if(_mouseIsDown){
            _mouseJoint=_mouseJoint||b2d.mouseJoint(w.getBodyAtPoint(mX,mY))
            if(_mouseJoint){_mouseJoint.SetTarget( V(mX, mY) )}}

        else if(_mouseJoint ){_mouseJoint.destroy(); _mouseJoint=null}

    }




}













BASICWORLD=function(){

z()


    world = w =    b2d.world(  V(0, 40) )

    world.can = $.canvas('X', 500, 500).id('canvas').A()

    canvas = c = world.can[0]



    stage = s = new createjs.Stage(canvas)

    debugDraw = DebugDraw()


    debugDraw.SetSprite(  $('#canvas')[0].getContext("2d")  )


    debugDraw.dS( 30 )

    debugDraw.SetFillAlpha( .6 )
        //debugDraw.SetLineThickness( 3000 )


    debugDraw.SetFlags(  shB||jB   )

    w.dD(  debugDraw )


    w.bii(300, 200)

}


CATAPULT=function(){



    cat = world.a(

        DynamicBodyDef(350,200),[

            pFx(125,20,0,0,0),

            pFx(20,60,-80,-40,200 )

        ])




    cat_arm  = w.a(dBD(210,210),[

        pFx(150, 10,  0,0,0 ,1),
        pFx(10, 20,  -140,-30 ,0 ,1)

    ])



    joint=w.cJ( rev(cat,cat_arm,bV(0,0)) )

        .eM(1).eL(1)
        .lAA(bV(-80,-90))
        .lAB(bV(60,0))
        .sMS(1000)
        .sL(-180,60)
        .sMMT(1)

    cannonball =w.a(dBD(90,90), cFx(10,20))

    // s.$(fire=function(e){ the_joint.sMMT(10000)})

//  draw_box=function(px,py,w,h,d,ud):void {
//
//   ground = new dBD(px,py)
//
//ground.position.Set(px, py);
//if (d) {
//    ground.type=b2Body.b2_dynamicBody;
//}
//
//my_box = pSh().sAB(w/2, h/2)
//
//  my_fixture  = fDf(my_box)
//
//
//
//the_ground =w.cB(ground);
//
//the_ground.sUD(ud);
//the_ground.cF(my_fixture);

}


handleJointsAlt = 0


b2d.fullWorld = function(){z()
      canvas = $.canvas('z', 1200, 600 ).A().id( 'canvas' )[0]


      context = canvas.getContext("2d")
      stage = new createjs.Stage( canvas )

     // stage.autoClear = false

      world=World(  bV(0, 40) )

      debugDraw = DebugDraw()
      debugDraw.SetSprite(  context )
      debugDraw.dS( 30 )
      debugDraw.SetFillAlpha( .6 )
      debugDraw.SetFlags(  shB||jB   )
      world.dD( debugDraw )

      setInterval(function(){
              world.ClearForces()
              world.Step(1/60, 10, 10)
              //this must clear the screen?
              //that's why i don't need the stage to autoclear
              world.DrawDebugData()
          stage.update()
          stage.HUD.update()

      }, 1000/60)


      world.bii(400,400, 600, 40)
      b=world.ba()
      stage.bm('me', function(bitmap){
          bm=bitmap.rCenter()
          createjs.Ticker.on('tick', function(){bm.XY(b.x(), b.y())}) })

      return world}






























makeStage1=function(X, Y, options){



    canvas = c = $can( X, Y ).a().bc( 'z' )

    canvas.id( 'canvas' )

    stage = s = SuperStage( canvas )

    T$.removeAllEventListeners()

    ctx = x = xx( canvas )

    stage.ob.autoClear = false

    if( options.bg ){  stage.b( options.bg )  }

}



isBodyElement=function(e){

    e = $(e)[0]

    return O(e) && uC( e.tagName ) == 'BODY'

}//isBodyElement




//doesnt work YET
$.fn.getPosition = $.fn.getTotalOffset = function(){

    var e = this, x=0,  y= 0

    while( E( e ) && e.tagName ){

        y += e.offsetTop

        x += e.offsetLeft

        if( isBodyElement(e)  ){ e = 0 }

        e = e.offsetParent || e
    }

    return { x: x, y: y }




}//just gets the TOTAL offset of ANY element



     //why not s.autoClear(0)?
_getPosition = gEP = function( e ){

return $(e)._getPosition()

}





b2d.mouseJoint = mouseJoint = function(body){
    if(!body){return false}
//create mouse joint from a body
    var mouseDef=b2d.mouseDef(  w.gB(),  body.awake(1)  )
    mouseDef.target.Set(mX, mY)
    mouseDef.maxForce=( 300 * body.mass() )
    mouseDef.collideConnected = true
    return w.createJoint(mouseDef)}






  getBodyAtMouse=  function( mX, mY ){

  return w.getBodyAtPoint(mX, mY)}






b2d.Joints.b2Joint.prototype.destroy=function(){
    this.GetBodyA().GetWorld().DestroyJoint(this)
}




handleJoints=function(){

    //if mouse is dont.. make a new mouse joint, if there is none

    if(_mouseIsDown) {
        $l('mouseIsDown')

        if (_mouseJoint ) { mj =_mouseJoint
          //  _mouseJoint.SetTarget(V(mX, mY))
        }

       else { _mouseJoint = _mouseJoint || b2d.mouseJoint(w.getBodyAtPoint(mX, mY)) }


    }

    else { $l('mouseIsDown')

        if( _mouseJoint ){

        _mouseJoint.destroy(); _mouseJoint = null}}
}








checkMouseDown =function(){




}





b2d.setupDebugDraw =setupDebugDraw =function(){

    debugDraw = DebugDraw()
    debugDraw.SetSprite( w.context )
    debugDraw.dS( 30 )
    debugDraw.SetFillAlpha( .6 )
    //debugDraw.SetLineThickness( 3000 )
    debugDraw.SetFlags(  shB||jB   )
    w.dD(  debugDraw )

}







setFixtures =function(){

    bD = b2d.staticDef()

    fD = b2d.fixtDef().d( 1 ).f( .5 ).r( .8).setShape( b2d.polyDef() )

}







makeWalls =function(){

    w.bii(10,300, 40, 600).uD('leftWall')

    w.bii(990,300, 40, 600).uD('rightWall')

    w.bii(300, 0, 2400, 40).uD('ceiling')

    w.bii(300, 590, 2400, 40).uD('floor')

}








makeShapeOnDblClk = function(){//DEMO: add a 'fix' on $$ //DEMO: add 10 dynamic sq or cir to world

    x.$$(function( x, y ){

        world.a(

            yn()?  DynamicBodyDef(x,y) :  StaticBodyDef(x,y),  fix()

        )

    })

}



handleJoints2=function(){// so far unchanged.. need to think

    if(_mouseIsDown && !_mouseJoint){

        var b = getBodyAtMouse ( mX, mY )

        bb = b

        if(b){   _mouseJoint = mouseJoint(b.awake(1))   }

        else { bb.aI( 10000, 10000 ) }

    }

    if( _mouseJoint){

        if(_mouseIsDown){

       // _mouseJoint.sT(mX,mY)

    }

    else {

        bb.aI(

                bbb.x()- MX,
                bbb.y()- MY
        )

        w.dJ( _mouseJoint )

            _mouseJoint = null

    }

    }

}


makeWallsPinball=function(){


    bii(10, 300, 20, 1200) //left
    bii(990, 300, 20, 1200)//right
    bii(300, 0, 3000, 20)//top

   // bii(300, 590, 3000, 20)//bottom
}





SLINGSHOT=function(){


 handleJointsAlt = true


    mW({

        w: 'makeWallsFull',

        g: 0
    })

    bbb=ba(300,300,30).lD(4).aD(10)

    ba(300,300,10).lD(4).aD(10);
    ba(300,300,10).lD(4).aD(10);
    ba(300,300,10).lD(4).aD(10)

   // ba(300,300,30).lD(4).aD(10)

}




