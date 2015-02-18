
BASICWORLD=function(){

z()


    world = w =    World(  bV(0, 40) )

    canvas = c = $.canvas('X', 500, 500).id('canvas').A()[0]


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




//prevent iphone/ipad default scrolling

$(function(){

    $('body').on('touchmove', function(e){ e.preventDefault() })


})

handleJointsAlt = 0


mW2 = function(){z()
      canvas = $.canvas('z', 1200, 600 ).A().id( 'canvas' )[0]
      context = canvas.getContext("2d")
      stage=new createjs.Stage( canvas )
      stage.autoClear = false

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

      }, 1000/60)
      world.bii(400,400, 600, 40)
      b=world.ba()
      stage.bm('me', function(bitmap){
          bm=bitmap.rCenter()
          createjs.Ticker.on('tick', function(){bm.XY(b.x(), b.y())}) })

      return world}















makeWorld = mW = function(options){var o=options

    if(!O(options)){options={}}

    options.gravityY = options.g

    //if( options.z !=0 ){ z() }



    _mouseJoint = 0

    _mouseIsDown = 0
   

    options.gravityY = N( options.gravityY )? options.gravityY : 40

    world = w =    World(  bV(0, options.gravityY) )

    makeStage(

            options.W || 1200 ,
            options.H|| 600 ,

        options  )

    canvasPosition = _getPosition(  $('#canvas')[0]  )

    setInterval( function(){//start the ticker

                if( handleJointsAlt == true ){ handleJoints2() }  else { handleJoints() }


                world.Step(1/60, 10, 10)
                world.DrawDebugData()
                world.ClearForces()
                if( F(options.cb) ){ options.cb() }
                s.update()
        },

                1000/60 )

    checkMouseDown()

    setupDebugDraw()

    setFixtures()

    if( D ( options.w ) ){


        if( S( options.w ) ){   $w[ options.w ]() }

        if( F( options.w ) ){     options.w() }


    }


    else {  makeWalls() }

  controller()


    if( ! options.$$ == 0 ){  makeShapeOnDblClk() }

    return world}




makeStage=function(X, Y, options){

    canvas = $.canvas('z', X, Y ).A().id( 'canvas' )

    s = stage = new createjs.Stage( canvas[0] )

    stage.autoClear = false

    createjs.Ticker.removeAllEventListeners()

    if(options.backgroundImage){
        stage.bm(options.backgroundImage)
    }

}








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

//=getElementPosition//osP=offsetParent
    var x=0,  y= 0

    while( E(e) ){ //O(e)&&D(e.tagName)

        y += e.offsetTop

        x += e.offsetLeft

        if( isBodyElement(e)  ){ e = 0 }

        e = e.offsetParent || e
    }

    return { x:x, y:y }


    function isBodyElement(e){

        return O(e) && uC(e.tagName) == 'BODY'

    }//isBodyElement



}//just gets the TOTAL offset of ANY element








mouseJoint =function(b){

    var m = MouseJointDef(  w.gB(),  b.aw(1)  )

    m.target.Set( mX, mY )

    m.maxForce=( 300 * b.m() )

    m.collideConnected = true

    return w.cJ(m)

}//create mouse joint with a body




  getBodyAtMouse=  function( mX, mY ){

      var _selectedBody

      var queryFunc= function(fxt){


          if( !SuperFixture(fxt).gT( sB ) &&  fxt.testPoint( mX , mY )){       // f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))

              _selectedBody = fxt.gB()

              return false
          }

          return true}



      w.QueryAABB( queryFunc, AB( mX-.001, mY-.001, mX+.001, mY+.001 ) )

    if( O( _selectedBody ) ){  return SuperBoxBody(_selectedBody)  }

  }









handleJoints=function(){

    //if there is no current joint
        // but the mouse is down.. then this is a potential selection..

    if( _mouseIsDown && ! _mouseJoint ){

        //if there is a body at the mouse location..
        //then make a joint from that body ( stored at _mouseJoint )

        var body = getBodyAtMouse( mX, mY )


        if(body){ _mouseJoint = mouseJoint( body)//.aw(1) )
        }

    }

    //if there IS a joint
        //if mouse is down, then set the mouseJoint's 'target' to the mouse location (wherever it is!)

    if( _mouseJoint ){

        if( _mouseIsDown ){ _mouseJoint.SetTarget( bV(mX, mY) )  }

        //but if mouse was lifted up, then release any potential joint

        else{

            w.DestroyJoint(_mouseJoint)

            _mouseJoint=null

        }


    }
}








checkMouseDown =function(){


    $('body').on('mousedown', function(event){

            _mouseIsDown = true


            MX = event.clientX - canvasPosition.x
            MY = event.clientY - canvasPosition.y
            mX = MX / 30
            mY = MY / 30

            $('body').on('mousemove',  function(event){

                MX = event.clientX - canvasPosition.x
                MY = event.clientY - canvasPosition.y

                mX = MX / 30
                mY = MY / 30
            })

    })


    $('body').on('touchstart', function(event){

        _mouseIsDown = true


        MX =  event.originalEvent.touches[0].clientX - canvasPosition.x
        MY =  event.originalEvent.touches[0].clientY
        mX = MX / 30
        mY = MY / 30

        $('body').on('touchmove',  function(event){

            MX = event.originalEvent.touches[0].clientX - canvasPosition.x
            MY = event.originalEvent.touches[0].clientY - canvasPosition.y

            mX = MX / 30
            mY = MY / 30
        })




    })

    $('body').on('mouseup', function(){   _mouseIsDown = false})
    $('body').on('touchend', function(){   _mouseIsDown = false})


}










setupDebugDraw =function(){

    debugDraw = DebugDraw()


    debugDraw.SetSprite(

        $('#canvas')[0].getContext("2d")

    )

    debugDraw.dS( 30 )


    debugDraw.SetFillAlpha( .6 )
    //debugDraw.SetLineThickness( 3000 )

    debugDraw.SetFlags(  shB||jB   )


    w.dD(  debugDraw )

}







setFixtures =function(){

    // dep?

    bD = StaticBodyDef()

    fD = SuperFixtureDef( new b2FixtureDef ).d( 1 ).f( .5 ).r( .8 )

    fD.shape = PolyShape()

}




makeWalls =function(){

    bii(10,300, 40, 600).uD('leftWall')

    bii(990,300, 40, 600).uD('rightWall')

    bii(300, 0, 2400, 40).uD('ceiling')

    bii(300, 590, 2400, 40).uD('floor')

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

        if(b){   _mouseJoint = mouseJoint(b.aw(1))   }

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




