wor = function(ob){ob = ob||{}
    var color, grav, wd, ht, mouseJoints, walls
    color = oO('c', ob.C||'z')
    grav = N(ob.g)?ob.g:10
    wd = N(ob.W)?ob.W:1200
    ht = N(ob.H)?ob.H:600
    walls = D(ob.w)?ob.w:D(ob.walls)?ob.walls: true
    mouseJoints = D(ob.mJ)? ob.mJ: true
    w = b2d.stgWorld(color, grav, wd, ht, mouseJoints)
    if(walls){w.makeWalls()}
    return w}


BALL=function(){b2d.W().ball()}


b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function(ops){

    //make a world with a stage.. well with three stages!!!!

    var width,height,gravX,gravY
    if(!O(ops)){ops={}}
    if(ops.z!=false){z()}

    width = ops.W||1200; height= ops.H||600

    if( U(ops.grav) && D(ops.g) ){ops.grav = ops.g}


    gravX=0;
    gravY=40
    if(N(ops.grav)){gravY = ops.grav }
    else if(A(ops.grav)){gravX = ops.grav[0]; gravY = ops.grav[1]} //else {ops.gravityY = ops.g;ops.gravityY = N(ops.gravityY) ? ops.gravityY : 40;world = w = b2d.world(V(0, ops.gravityY))}
    w = b2d.world(V(gravX, gravY))


    cjs.watchKeys()

    w.s =  w.stage  =   cjs.tripleStage('black',
        width,
        height)

    w.s.back.A()
    w.s.A()
    w.s.HUD.A()

      //cjs.Ticker.removeAllEventListeners()


    w.s.noAutoClear()
    w.canvas = w.stage.canvas
    w.can = w.c = $(w.canvas)
    //canvas = $(w.canvas).id('canvas')
    w.ctx = w.context = w.can.ctx('2d')
    if(ops.backgroundImage){
        w.s.bm(ops.backgroundImage)}

    var canvasPosition = w.can._getPosition()
    w.x = canvasPosition.x
    w.y = canvasPosition.y

    $.joystick()

    w._mouseJoint = null
    w._mouseIsDown = false

    setInterval(function(){
        handleMouseJoints()
        w.draw(1/60)
        if(F(ops.cb)){ops.cb()}
        w.stage.update()
    }, 1000/60)

    //w.mouseJoints()

    $.mousedown(function(e){// *** need to change to pagex(so can scroll page?).. but i think it messes up for mobile
        var x=w.x,
            y=w.y
        w._mouseIsDown = true

        recordMouseCoords(e)
        $.mousemove(recordMouseCoords)



        function recordMouseCoords(e){
            mX=(e.clientX-x)/30;
            mY=(e.clientY-y)/30
        }
    })
        .mouseup( function(){w._mouseIsDown = false})
        .touchstart(function(e){
            w._mouseIsDown = true
            recordMouseCoords(e)
            $.touchmove(recordMouseCoords)
            function recordMouseCoords(e){
                var touch = e.originalEvent.touches[0]
                mX = (touch.clientX-w.x)/30
                mY = (touch.clientY-w.y)/30
            }
        }).touchend( function(){w._mouseIsDown = false})



    if(ops.clear !==false) {

            w.debug(

                b2d.debugDraw(w.context, 30).flags(shB || jB).alpha(.6).line(3000)
            )



    }

    w.makeWalls(D(ops.w)?ops.w:ops.walls )

    return w



    function handleMouseJoints(){

        if( w._mouseIsDown ){

         w._mouseJoint = w._mouseJoint ||

             b2d.mouseJoint( w.getBodyAtPoint(mX, mY) )

            if(w._mouseJoint){ w._mouseJoint.target( V(mX, mY) ) }
        }


        else { w.removeMouseJoint() }
    }




}




$W =  function(grav,wd,ht){z()
   var w = b2d.stgWorld('black', grav, wd, ht)
    w.makeWalls()
return w
}



TESTWW=function(){

    w = $W()

    b= w.ball(100,100,100).addClass('ball')
    b2= w.circ(100,100,100,'o').addClass('ball')

}







MOUSE=function(){w=b2d.W()

b = w.circ(400,400,100,'b')
    w.show(function(){return _mouseIsDown })


b2d.mJ=function(body, tX,tY){
    if(O(tX)){tY=tX.y;tX=tX.x}
    var md = new b2d.Joints.b2MouseJointDef
    md.bodyA = w.GetGroundBody()
    md.bodyB = body
    md.target = V(tX, tY)
    md.collideConnected = true
    md.maxForce = 1000 * body.GetMass()
    md.dampingRatio = 0

return md}


   j = w.J( b2d.mJ(b, 500, 0 ) )

    b.SetAwake(true)

}



MOUSEYSTILLWORKING2=function(){z()

    b2d.pollute()

      var canvas_height
    mouse_pressed = false
      mouseJ = false
      scale = 30


    canvas = $.can('y', 1200, 600).id('canvas').A()


    ctx = canvas[0].getContext('2d')  // ctx = canvas.ctx()

    //get internal dimensions of the canvas

    canvas_width = parseInt(canvas.attr('width'))     // canvas.W()

    canvas_height = parseInt(canvas.attr('height'))   // canvas.H()

    canvas_height_m = canvas_height / scale

   w = world = new b2World(V(0, -10)  , true)
    box(  200, 120, 60,60, { user_data  : {border_color : '#555' }})
    box(  550, 120, 60,60, { user_data  : {fill_color : 'blue' ,  border_color  : 'black' }})
   b= ball( 250 ,100, 100 , { user_data  : {fill_color: 'green' ,  border_color  : 'black' }})


    var debugDraw = new b2DebugDraw()
    debugDraw.SetSprite(  ctx )
    debugDraw.SetDrawScale(scale)
    debugDraw.SetFillAlpha(0.5)
    debugDraw.SetLineThickness(1 )
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit)
    w.SetDebugDraw(debugDraw)


    ground = box(  350, 60, 880 , 30,{   user_data  : {fill_color : 'red' , border_color  : 'black' }}).stat()


        //If mouse is moving over the thing
        $(canvas).mousemove(function(e){var v,p

            v = V(e.pageX/scale, e.pageY/scale)

              p =  V(v.x, canvas_height_m - v.y)


            mouse_x = p.x
            mouse_y = p.y

            if(mouse_pressed && !mouseJ){

                w.bodyAt(p, function(body){

                    mouseJ = w.mouseJ(body, p)

                })



            }



            if( mouseJ ){   mouseJ.SetTarget(p)
            }

        })

        $(canvas).mousedown(function(){mouse_pressed = true })

        /*
         When mouse button is release, mark pressed as false and delete the mouse joint if it exists
         */



        $(canvas).mouseup(function(){mouse_pressed = false
            if(mouseJ){w.j(mouseJ); mouseJ=false}})

        //start stepping
       step()




    /*
     Draw a world
     this method is called in a loop to redraw the world
     */
    function draw_world(world, context){
        //convert the canvas coordinate directions to cartesian coordinate direction by translating and scaling
        ctx.save();
        ctx.translate(0 , canvas_height);
        ctx.scale(1 , -1);
        world.DrawDebugData();
        ctx.restore();

        ctx.font = 'bold 18px arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.fillText('Box2d MouseJoint example in Javascript', canvas_width/2, 20);
        ctx.font = 'bold 14px arial';
        ctx.fillText('Click on any object and drag it', canvas_width/2, 40);
    }




    function ball(x, y, radius, options){return  w.ball(x,y,radius).den(options.density||1).fric(.5).rest(0.5)
        .linDamp(0).angDamp(0).K(options.user_data)}


    function box(x,y,width, height, options){
        options = $.extend(true, {
            density: 1.0 ,
            friction: 1.0 ,
            restitution: 0.5
        }, options)

        return  w.box(x,y,width,height).den(options.density).fric(options.friction).rest(options.restitution)
            .linDamp(0).angDamp(0).K(options.user_data)

    }

    /*
     This method will draw the world again and again
     called by settimeout , self looped
     */
    function step(){
        var fps = 60;
        var timeStep = 1/(fps * 0.8)

        //move the box2d world ahead
        w.Step(timeStep , 8 , 3)
        w.ClearForces();

        //redraw the world
        draw_world(w, ctx)

        //call this function again after 1/60 seconds or 16.7ms
        setTimeout(step , 1000 / fps)
    }

//Convert coordinates in canvas to box2d world



}



MOUSEYSTILLWORKING=function(){z()

    w =  b2d.canWorld( 'y', 1200, 600, 10)
    w.box(  200, 120, 60,60).DFR(1,1,.5).damp(0,0)
    w.box(  550, 120, 60,60).DFR(1,1,.5).damp(0,0)
    w.brick(  350, 560, 880 , 30 ).DFR(1,1,.5).damp(0,0)
    b=w.ball(250 ,100, 100).DFR(1,.5,.5).damp(0,0)

}


MOUSEY=function(){z(); b2d.pollute()

    w = b2d.canWorld('y', 1200, 600, 10)


    w.boxesStat([350,560,880,30])
        .boxes([200,120,60,60],[550,120,60,60])

    w.ball(250,100,100).DFR(1,.5,.5).damp(0,0)

}






STACKTHREE= MOUSEGAME=function(){z()

    w = wor({mJ:'ball', w:0})


    w.boxesStat([350, 260, 880, 30])
    w.box(310,120,60,60)
    w.box(320,120,60,60)
    w.box(340,120,60,60)
    w.box(350,120,60,60)
    w.box(370,120,60,60)
    w.box(380,120,60,60)
    w.box(550,120,60,60)
    w.box(570,120,60,60)
    w.box(580,120,60,60)
    b = w.ball(400, 50, 30).DFR(1,.5,.5).damp(0,0).addClass('ball')

    w.brick( 1000,400,200,200)
    w.brick( 1200,200,200,200)

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








b2d.miniWalls=function(){
    w.brick(200,50, 300,20) //top
    w.brick(200,360, 300,20) //bottom
    w.brick(60, 240, 20, 260) //left
    w.brick(340, 320, 20, 100)} //right

WALLDESIGNER=function(){


}
