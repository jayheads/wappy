//prevent iphone/ipad default scrolling

$(function(){

    $('body').on('touchmove', function(e){ e.preventDefault() })


})


handleJointsAlt = 0



makeWorld = mW = function(o){

    o = ob(o)

    var options = o

    options.gravityY = options.g
 
    _mouseJoint = 0

    _mouseIsDown = 0
   

    if( options.z !=0 ){z()}

    options.gravityY = N( options.gravityY )? options.gravityY : 40

    world= w = World( bV( 0 , options.gravityY ) )

    
    makeStage( 1200 , 600 , options )


    canvasPosition = _getPosition(  $('#canvas')[0]  )

    setInterval( function(){//start the ticker

                if( handleJointsAlt == true ){ handleJoints2() }  else { handleJoints() }

                world.Step( 1/60, 10, 10 )

                world.DrawDebugData()

                world.ClearForces()

                if( F(options.cb) ){ options.cb() }

                s.u()},

                1000/60 )

    checkMouseDown()

    setupDebugDraw()

    setFixtures()

    if( D ( options.w ) ){  $w[options.w]()  } else {  makeWalls() }

    if( ! options.$$ == 0 ){  makeShapeOnDblClk() }

    return world}


makeStage=function(X, Y, options){

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

    debugDraw.SetSprite( $('#canvas')[0].getContext("2d") )
    debugDraw.dS( 30 )

    debugDraw.SetFillAlpha( .6 )

    //debugDraw.SetLineThickness( 3000 )

    debugDraw.SetFlags(  shB||jB   )
    w.dD(
debugDraw


    )
}






setFixtures =function(){

    // dep?

    bD = StaticBodyDef()

    fD = SuperFixtureDef( new b2FixtureDef ).d( 1 ).f( .5 ).r( .8 )

    fD.shape = PolyShape()

}




makeWalls =function(){

    bii(10,300, 40, 600).uD('leftWall') //left

    bii(990,300, 40, 600).uD('rightWall')//right

    bii(300, 0, 2400, 40).uD('ceiling')//top

    bii(300, 590, 2400, 40).uD('floor')//bottom

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



