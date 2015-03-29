w= b2d.World.prototype

STGW=function(){z()

    w=b2d.stgWorld()

    w.S(500,600,'y',1000, 20)

    w.B(500,200, 'o', 40)
}

$t = function(a, b){if(b2d.test){
    var g=G(arguments),
        a=g[0],
        b=g[1],str




         if(D(b)){

             str='||'
             _.each(g, function(s){

                 str+=  ' '  + s.toString() + ' |'

             })

             str += '|'
         }

    else {
             str = a.toString()
         }


    $l(str)



        }; return a}



TOMAKETOUCHWORKAGAIN=function(){

    /*

    //  w._mouseJoint = null //  w._mouseIsDown = false

    w.mouseJoints()

     $.touchstart(function(e){

     w._mouseIsDown = true

     recordMouseCoords(e)
     $.touchmove(recordMouseCoords)
     function recordMouseCoords(e){
     var touch = e.originalEvent.touches[0]
     mX = (touch.clientX-w.x)/30
     mY = (touch.clientY-w.y)/30
     }


     }).touchend( function(){w._mouseIsDown = false})



    setInterval(function(){//handleMouseJoints()
        w.draw(1/60)
        if(F(ops.cb)){ops.cb()}
        w.stage.update()
    }, 1000/60) */
}

W = b2d.W =  function(W,H,wW,wH){ //cjs.Ticker.removeAllEventListeners()

        var o = N(W) ? { W:W, H:H, wW:wW, wH:wH } :

            A(W) ? _.extend(H, { W:W[0], H:W[1], wW:W[2] ,wH:W[3] }) :

                O(W) ? W : {}


    __o = o

    o.W=o.W   ||  1200
    o.H=o.H   ||  600
    o.wW=o.wW ||  o.W
    o.wH=o.wH ||  o.H
    o.w=o.w   ||  ['o', o.wW, o.wH]

    o.g = N(o.g) ? V(0,o.g) : o.g? V(o.g) : V(0, 300)

    if(o.z != false){z()}


    w = b2d.world( o.g )

    w.s = w.stage = cjs.tripleStage('z', o.W, o.H).noAutoClear(); w.s.back.A(); w.s.A(); w.s.HUD.A()

    w.canvas = w.stage.canvas; w.can = w.c = $(w.canvas).id('canvas'); w.ctx = w.context = w.can.ctx('2d')


    if(o.clear !==false){
        w.debug( b2d.debugDraw(w.context, 30).flags(shB || jB).alpha(.6).line(3000) )} // w.bug(w.ctx, 30, '*', .6 )

    cjs.watchKeys()



    w.mJ()

    $.oMD(function(x,y){

        w.XY(x,y,

            function(f){

            if(   f.ofClass(o.m)  ){

                w.mj = w.m(f.body(), _ )
            }





        })})


    $.oMU(function(){ w.M() })


    w.SCALE=1

    setInterval(function(){
        w.draw(1/60)
        if(F(o.cb)){o.cb()}
        w.s.update()
    }, 1000/60)


    if(o.i){w.s.bm(o.i)}

    w.makeWalls(o.w)

    w.o = o

    return w.db()

}


b2d.G = function(cW, cH, wW, wH){var ob={}


    if(A(cW)){ob=cH; wH=cW[3]; wW=cW[2]; cH=cW[1]; cW=cW[0]}
    cW=N(cW)?cW:1200
    cH=N(cH)?cH:600
    wW = N(wW) ? wW:cW;
    wH = N(wH) ? wH:cH
    w=b2d.W({g:N(ob.g)?ob.g:0,  W:cW,  H:cH,  w:[ 'o', wW, wH ] })
    w.camLims([0,wW-cW], [0,wH-cH])
    return w

}











b2d.canWorld=function(color, wd, ht, grav, mJoints){
    var can = $.can(color, wd, ht).A(),
        w = can.wor(grav).tick().Z(30)
    if(mJoints != false){
        w.mouseJoints()  }
    return w}





w.mouseJ=function(b, target, damp, maxForce){var w=this

    b.wakeUp()

    return w.J(

        b2d.mouseJ(

            w.GetGroundBody(),

            b,
            target,
            damp,
            maxForce
        )


    )}





w.removeMouseJoint=function(){var w=this

    if(O(w._mouseJoint)){
        w.j(w._mouseJoint)
        this._mouseJoint = false

    }


    return this}


w.updateMouseJoint=function(point, kind){var w=this

    var mJ = w._mouseJoint

    w._mouseJoint = mJ ?   mJ.target(point)  :

       w.mouseJAt( point, kind )


    return w}





w.tripleStage= function(color, wd,ht){
    var w=this

    w.s = w.stage = cjs.tripleStage('black', wd, ht).noAutoClear()
    w.s.back.A()
    w.s.A()
    w.s.HUD.A()
    w.canvas = w.s.canvas
    w.c = w.can = $(w.canvas)
    w.ctx =  w.can.ctx()

    return w}




cjs.stageHUD = cjs.stageHUD = cjs.HUD=function(a,b,c){var stage, can1, can2

    can1 = $.canvas(a,b,c)
    can2 = $.canvas('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
    stage=new cjs.Stage(can1[0]).tick()
    stage.c=can1
    stage.HUD = new cjs.Stage(can2[0]).tick()
    return stage}


cjs.tripleStage =  function(col, w, h){

    var g=G(arguments),
        col=g[0],
        w=g[1],
        h=g[2]

    var can1 =  can('X')

    s = new cjs.Stage(can1[0]).tick()

    s.can = s.c = can1

    s.back = new cjs.Stage( can(col)[0] ).tick()

    s.back.linGrad=function(c1,c2){var s=this,h =s.H(), w=s.W()

        c1=oO('c', c1||'b')
        c2=oO('c', c2||'r')


        // s.SHAPE.linGrad([$r(),$r()],[0,1],0,h/2,w,h/2).dr(0,0,w,h)

        s.SHAPE.linGrad([c1,c2],[0,1],w,h,0,0).dr(0,0,w,h)




    }

    s.back.SHAPE = s.back.shape(0,0,'w')

    if(g.N){  s.back.linGrad('z','w') }

    s.HUD = new cjs.Stage( can('X')[0] ).tick()

    s.HUD.shape().fs($r()).rect( 0,0,5000,5000).opacity(.3)

    return s

    function can(col){ return $.can(col, w, h ).P('a').XY(0,0) }

}





w.mouseJoints=function(kind){
    var w = this,

        can= (w.s && w.s.HUD)?$(w.s.HUD.canvas):  w.can,

        scale = this.scale || 1


    can.mouseup(function(){
        w.removeMouseJoint()
    })


    can.pressmove(function (e) {

        w.updateMouseJoint(

            can.mousePoint(e, scale),
            kind
        )
    })

    return this}








w.tick=function(draw){var w=this,
    can = w.can,
    ctx= w.ctx
    draw= N(draw)? draw: 0.1
    ctx.tick(function(){
        this.trans(0,0).Z(1,1);
        w.draw(draw)

    })


    return this}





w.mouseJAt=function(p, kind){var w=this, mj

    if(N(p)){p = V(p,kind)}


    w.XY(p.x, p.y, function(f){


        mj  =   f.body().mouseJoint(p)

    })//, kind



    return mj

}





wor= function(o){o = o||{}

    var color= oO('c', o.C||'z'),
        grav= N(o.g)?o.g:10,
        wd= N(o.W)?o.W:1200,
        ht= N(o.H)?o.H:600,

        mouseJoints = D(o.mJ)? o.mJ: true,

        walls = D(o.w)?o.w:D(o.walls)?o.walls: true


    return  b2d.W({C:color, g:grav, W:wd,  H:ht,  m: mouseJoints, w:walls})



}









BALL=function(){var w=  b2d.W()

    w.B(400, 300, 'x', 150)

}




b2d._w = function(){}
b2d._W = function(){}





b2d.w=function(o){o=o||{}
    cjs.watchKeys()
    w=b2d.world(V(0,0))


    w.s = cjs.tripleStage('b',o.W||1200,o.H||600)
    w.s.back.A()
    w.s.A()
    w.s.HUD.A()

    w.s.noAutoClear()

    w.canvas = w.s.canvas
    w.can = w.c = $(w.canvas)
    w.ctx = w.context = w.can.ctx('2d')

    if(o.i){w.s.bm(o.i)}//background img

    var canPos = w.can._getPosition()
    w.x = canPos.x
    w.y = canPos.y

    w.makeWalls(o.w)

    w.mouse=null
    w.mDown=false



    $.mouseup(function(){w.mDown=false})


    $.mousedown(function(e){
        var x=w.x,
            y=w.y
        w.mDown = true

        recordMouseCoords(e)
        $.mousemove(recordMouseCoords)

        function recordMouseCoords(e){
            mX=(e.clientX-x)/30;
            mY=(e.clientY-y)/30
        }
    })



    setInterval(function(){



        if(w.mDown ){
            w.mouse=w.mouse||b2d.mouseJoint(w.getBodyAtPoint(mX,mY))
            if(w.mouse){w.mouse.target(V(mX,mY))} }


        else {
            if(O(w.mouse)){w.j(w.mouse); w.mouse=false}
        }


        w.draw(1/60)
        w.s.update()

    }, 1000/60)

    $.touchstart(function(e){w.mDown=true
            logMouse(e)
            $.touchmove(logMouse)
            function logMouse(e){
                var t=e.originalEvent.touches[0]
                mX=(t.clientX-w.x)/30; mY=(t.clientY-w.y)/30;
                MM=V(t.clientX-w.x,t.clientY-w.y).div()}}).touchend(function(){w.mDown=false})





    w.debug(b2d.debugDraw(w.context, 30)).db()



    return w

}

b2d.WW=function(o){
    o=o||{}
    cjs.watchKeys()
    w=b2d.world(V(0,300))

    w.s = cjs.tripleStage('z', o.W||600, o.H||900)
    w.s.back.A()
    w.s.A()
    w.s.HUD.A()

    w.s.noAutoClear()

    w.canvas = w.s.canvas
    w.can = w.c = $(w.canvas)
    w.ctx = w.context = w.can.ctx('2d')

    if(o.i){w.s.bm(o.i)}//background img

    var canPos = w.can._getPosition()
    w.x = canPos.x
    w.y = canPos.y

    w.makeWalls(o.w)

    w.mouse=null
    w.mDown=false



    $.mouseup(function(){w.mDown=false})


    $.mousedown(function(e){
        var x=w.x,
            y=w.y
        w.mDown = true

        recordMouseCoords(e)
        $.mousemove(recordMouseCoords)

        function recordMouseCoords(e){
            mX=(e.clientX-x)/30;
            mY=(e.clientY-y)/30
        }
    })



    setInterval(function(){



        if(w.mDown ){
            w.mouse=w.mouse||b2d.mouseJoint(w.getBodyAtPoint(mX,mY))
            if(w.mouse){w.mouse.target(V(mX,mY))} }


        else {
            if(O(w.mouse)){w.j(w.mouse); w.mouse=false}
        }


        w.draw(1/60)
        w.s.update()

    }, 1000/60)

    $.touchstart(function(e){w.mDown=true
        logMouse(e)
        $.touchmove(logMouse)
        function logMouse(e){
            var t=e.originalEvent.touches[0]
            mX=(t.clientX-w.x)/30; mY=(t.clientY-w.y)/30;
            MM=V(t.clientX-w.x,t.clientY-w.y).div()}}).touchend(function(){w.mDown=false})





    w.debug(b2d.debugDraw(w.context, 30)).db()






    return w

}


Wx=function(){w=b2d.WW();b= w.B(300,500,'g', 40).bo(.5)}



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
MOUSE=function(){w=b2d.W()  //mousejoints work for all

b = w.circ(400,400,100,'b')

  // j = w.J( b2d.mJ(b, 500, 0 ) ) //needed?


    b.SetAwake(true) //unnessary?


    w.circ(400,400,100,'r')

}
MOUSEYSTILLWORKING2x=function(){z()  // mouse NOT working

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
MOUSEYSTILLWORKINGx=function(){  // but not!
    z()

    w =  b2d.canWorld( 'y', 1200, 600, 10)
    w.box(  200, 120, 60,60).DFR(1,1,.5).damp(0,0)
    w.box(  550, 120, 60,60).DFR(1,1,.5).damp(0,0)
    w.brick(  350, 560, 880 , 30 ).DFR(1,1,.5).damp(0,0)
    b=w.ball(250 ,100, 100).DFR(1,.5,.5).damp(0,0)

}
MOUSEYx=function(){z(); b2d.pollute()

    w = b2d.canWorld('y', 1200, 600, 10)


    w.boxesStat([350,560,880,30])
        .boxes([200,120,60,60],[550,120,60,60])

    w.ball(250,100,100).DFR(1,.5,.5).damp(0,0)

}






STACKTHREE=  function(){W({m:'ball',w:0})



    w.S(500,600,'y',1000, 20)
    b =  w.B(500,200, 'o', 40).K('ball')
    w.boxesStat([350, 260, 880, 30])
    w.B(310,120,'t',60,60)
    w.B(320,120,'t',60,60)
    w.B(340,120,'t',60,60)
    w.B(350,120,'t',60,60)
    w.B(370,120,'t',60,60)
    w.B(380,120,'t',60,60)
    w.B(550,120,'t',60,60)
    w.B(570,120,'t',60,60)
    w.B(580,120,'t',60,60)
    w.S( 1000,400,'x',200,200)
    w.S( 1200,200,'x',200,200)


w.db()}





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

    mouseDef.target.Set(mX/30, mY/30)

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







setFixturesX =function(){

    bD = b2d.staticDef()

    fD = b2d.fixtDef().d( 1 ).f( .5 ).r( .8).setShape( b2d.polyDef() )

}







w.makeWallsX = function(){var w=this
    w.left = w.bii(10,300, 40, 600).K('leftWall')
    w.right = w.bii(990,300, 40, 600).K('rightWall')
    w.roof = w.bii(300, 0, 2400, 40).K('ceiling')
    w.floor = w.bii(300, 590, 2400, 40).K('floor')

return w}








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







