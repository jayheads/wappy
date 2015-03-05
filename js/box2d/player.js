
ADDME=function(){

    w=b2d.mW()

    w.addMe()
}

//b2.onGround=false

abovePlayerGlobally=function(p){
//bullet location //try worldPoint(0, 0).. it rotates me!?
    return p.worldPoint(
        0, -p.sprite.H()/2
    )
}

SHOOTER=function(){

    //just responds to mouse clicks.. yes but how?

    b2.mW({  grav:0, debug:false })
    w.startKilling()

    p=w.addMe().XY(300).angDamp(10000)
    w.addTim(7)

    w.begin(function(cx){
        if(cx.includes('bullet')){
            cx.destroyIf('tim');cx.destroyOtherIf('player')}
        if(cx.isBetween('player','tim')){cx.destroyIf('player')}})

    $.click(function(e){
        //player movement
        var x=e.pageX-p.X(), y=e.pageY-p.Y()
        p.impulse(x/20,y/20)
        var rotation = Math.toDegrees(Math.atan(y/x)),
            adjustment = x > 0 ? 90 : 270
        p.rot(rotation + adjustment)
        //bullet
        w.bullet(abovePlayerGlobally(p)).impulse(x/40,y/40)
            .bindSprite('sun',.2)})
    //to do:  maybe u only get 10 bullets ever.. so u must chase them :) (only way to kill badguys)
}


THRUSTER = function(){z()

    w=b2.mW({
        grav:0//,  debug:false,
        //clear:false
    })//,  bg: 'space.jpg'


    w.brick(400, 200)

    p = w.player('thrust').XY(300)
    p.angDamp( 10000 )

    w.addTim(3)

    setInterval( function(){ w.bobom() }, 3000)

    w.begin(function(cx){

        var a= cx.a(),  b= cx.b()

        if (cx.includes('bullet') && cx.excludes('player')){
            a.setDestroyIf('tim')
            b.setDestroyIf('tim')
            if(a.is('bullet')){a.setDestroy()}
            else {b.setDestroy()}
        }
    })

    $.space( function(){var vec, bullet

        bullet = w.bullet( abovePlayerGlobally(p) ).bindSprite('me', 0.1)

        vec = p.GetWorldVector(b2.V(0, -100))
        bullet.impulse(vec.x/20, vec.y/20 )

    })




   // setInterval(function(){  w.stage.clear() }, 3000)
}










JUMPER=function(){
    //side ways??

    w = b2.mW()

    w.platform(800,300,100)
    w.platform(260,240,40)
    w.platform(550,250,100)
    w.platform(1350,550,100)
    w.platform(300,200,100).bindSprite('guy', [.4,1.2] )
    w.platform(300,500,60,30).bindSprite('guy',  [.4,1.2] )
    w.platform(150,400,60,30).bindSprite('guy')

    p = w.player('slidey').angDamp( 10000 )

    w.stage.bm('sun',function(sun){
        cjs.tick(function(){sun.X(450-p.X())})
    })

}


WARPER=function(){b2.mW({})

    p= w.player('jumper')//.angDamp(10000)
    p.warp=function(){ this.XY(200,100) }

    cjs.tick(function(){
        if(w.flagged('warping')){p.warp()}

        p.rot(0)
    })

    w.begin(function(cx){//bodies and fixtures both have data!!!  // $l('contact: ' +a.uD() + ' with ' + b.uD() )

        var a=cx.A().gB(), b=cx.B().gB()

        if(cx.A().uD() =='feet'){if(cx.b().uD()=='trampoline'){p.I(0,-150)}}
        if(cx.B().uD() =='feet'){if(cx.a().uD()=='trampoline'){p.I(0,-150)}}

        if(cx.A().uD() =='feet'){if(cx.b().uD()=='warp'){w.flag('warping')}}
        if(cx.B().uD() =='feet'){if(cx.a().uD()=='warp'){w.flag('warping')}}})

    w.brick(500,600,30,200)
    w.brick(600,600,30,200)
    w.brick(550,580,100,20).K('warp')
    w.box(650,580,100,20).K('trampoline')

    makeCar()}
AUTOFLAGCHECKER=function(){

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




GREENGUY=function(){

    b2d.mW({grav: 0})

    w.greenGuy(100,100)

    w.greenGuy(200,200)

    w.greenGuy(300,300)

    w.circ(100,100,30).K('bullet')

    w.debug()
}



eh = function(){   v = poly.verts()

    wd = v[1].x - v[0].x

    ht = v[2].y - v[0].y
    //sq.XY(300, 100)
    cy =   b.Y() + v[0].y + (ht/2)
    cx =   b.X() + v[0].x + (wd/2)

    w.s.dot('white', cx,cy)

    //bubble = w.rectSensor(200, 200, len,len, 'green')


    //middle = w.circStat(200, 200, 8, 'orange')

    func =function(){

        bubble.kill()
        len+= 2
        bubble = w.rectSensor(200, 200, len,len, 'green')

        middle.kill()
        middle = w.circStat(200, 200, 8, 'orange')


    }



}




