b2.onGround=false

PLAYER=function(){

    //just responds to mouse clicks.. yes but how?

    b2.mW({  g:0, debug:false })


    player = p = w.addMe()//.angDamp(1000000)

    w.addTim(7)

    //mouse control
    $.click(
        function(e){   //  po= p.wP(0, -75)

            xdif=    e.pageX   -  p.X()
            ydif=   e.pageY  -    p.Y()


            //thrust ship
            p.impulse(xdif/20, ydif/20)

            //rotate ship
            p.rot( Math.toDegrees(Math.atan(ydif/xdif))+(xdif >0?90:270) )


            //shoot
            w.ba(p.X(),  p.Y() , 10).aI(xdif/40,  ydif/40).uD('bul').bindSprite('sun',.2)

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





    s.tick(
        //actully do the destroying
        function(){

            w.e(function(b){if(b.uD()=='destroy'){

                w.dB(b)

            }})})

}


THRUSTER = function(){

    w=b2.mW({
        grav:0,
        debug:false,
        clear:false})


    //,  bg: 'space.jpg'

    p = w.player('thrust').angDamp( 10000 )

    w.addTim(3)

    w.begin(function(cx){

        c=cx

        var a= cx.a(),  b= cx.b()   // if either a or b is a bullet.. and neither is the guy (if a bullet hits a non-guy...) // destroy the bullet, and if it hit tim, destroy tim too

        if(cx.includes('bul')  &&  b2.neither(a,b).is('guy')){
            if( a.is('bul') ){ a.setDestroy(); b.setDestroyIf('tim')}
            else { b.setDestroy(); a.setDestroyIf('tim')}}

    })



    $.kD('s', function(){var vec, b, pt
        pt = p.worldPoint(0,-75)
        b = w.ba(pt.x, pt.y, 10).uD('bul').bindSprite('me', 0.1)
        vec = p.GetWorldVector(b2.V(0,-100))
        b.impulse(vec.x/40, vec.y/40 )})


    setInterval(function(){  w.stage.clear() }, 3000)
}








PLAYER2=function(){

    w = b2.mW()

    bii(800,300,100)
    bii(260,240,40)
    bii(550,250,100)
    bii(1350,550,100)
    bii(300,200,100).bindSprite('guy', [.4,1.2] )
    bii(300,500,60,30).bindSprite('guy',  [.4,1.2] )
    bii(150,400,60,30).bindSprite('guy')

    player = p = w.player('standard').angDamp( 10000 )

    //s.sx(2).sy(2)
    // s.t(function(){  // s.x( 450-p.x()  )  //  if(s.x() > 0){s.x(0) }  // s.y( -50-p.y()  ) })

}

FLAG=function() {

    FLAGS = {}

    flag = function (player) {
        _.each(FLAGS, function (val, key) {

           // $l(key + ' ' + val)

            if (val === true) {

               flagHandlers[key](p)

                FLAGS.warp=false


                FLAGS[key] = false

            }})
    }


    flagHandlers = {

        warp: function(p){
            p.XY(200, 100)
        },

        log: function(){$l('haha')}

    }
    z()
    w= b2.mW()
    p = w.player('hoppy')

    cjs.tick(flag)

}








PLAYER3=function(){b2.mW()

    var p= w.player('jumper').angDamp(10000)

 //   cjs.tick(function(){  if(STATE.warping){p.XY(200,100); STATE.warping=false}})


    w.begin(function(c){

        var a=c.A(),b=c.B()

             //  if(c.touching('feet','trampoline') ){p.I(0,-150)}

               if(c.touching('feet','warp')){

                 //  p.XY(200,100)

               //    STATE.warping=true

               }})


    bii(500,600,30,200)
    bii(600,600,30,200)

    w.A( b2.staticDef(550,580), b2.polyDef(100,20).uD('warp'))

    w.A( b2.dynamicDef(650,580), b2.polyDef(100,20).uD('trampoline'))

}








PLAYER4=function(){

    w=b2.mW()

    player = p =  w.player('standard').angDamp( 10000 )

   cjs.tick( function(){
            if(STATE.warping){p.warpToTopLeft();STATE.warping=false}
        })


    w.begin ( function( contact ){

                var a = contact.A(), b = contact.B()
                if( contact.pair( 'feet', 'tramp' )){p.impulse(0,-150)}
                if( contact.pair( 'feet', 'warp' )){ STATE.warping=true }

            })

    makeCar()

}















