b2.onGround=false

PLAYER=function(){

    //just responds to mouse clicks.. yes but how?

    b2.mW({  grav:0, debug:false })

    p=w.addMe().XY(300).angDamp(10000)
    w.addTim(7)


    $.click(function(e){

           var x=e.pageX-p.X(), y=e.pageY-p.Y()

            p.impulse(x/20,y/20)



        var rotation = Math.toDegrees(Math.atan(y/x)),
            adjustment = x > 0 ? 90 : 270

        p.rot(rotation + adjustment)


        
 w.bullet( abovePlayerGlobally(p) ).impulse(x/40,y/40).bindSprite('sun',.2)

        })

    w.begin(function(cx){
        if(cx.includes('bullet')){
            cx.destroyIf('tim')
            cx.destroyOtherIf('player')}
        if(cx.isBetween('player','tim')){cx.destroyIf('player')}})

   w.startKilling()

    //to do:  maybe u only get 10 bullets ever.. so u must chase them :) (only way to kill badguys)
}


THRUSTER = function(){

    w=b2.mW({
        grav:0//,  debug:false,
        //clear:false
    })//,  bg: 'space.jpg'


    w.brick(400, 200)

    p = w.player('thrust').XY(300)
    p.angDamp( 10000 )

    w.addTim(3)

    w.begin(function(cx){

        var a= cx.a(),  b= cx.b()

        if (cx.includes('bullet') && cx.excludes('player')){
            a.setDestroyIf('tim')
            b.setDestroyIf('tim')
            if(a.is('bullet')){a.setDestroy()}
            else {b.setDestroy()}
        }
    })



    $.kD('s', function(){var vec, bullet

        bullet = w.bullet( abovePlayerGlobally(p) ).bindSprite('me', 0.1)

        vec = p.GetWorldVector(b2.V(0, -100))
        bullet.impulse(vec.x/20, vec.y/20 )


    })

   // setInterval(function(){  w.stage.clear() }, 3000)
}


function abovePlayerGlobally(p){//bullet location //try worldPoint(0, 0).. it rotates me!?
    return p.worldPoint(0, -p.sprite.H())}

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















