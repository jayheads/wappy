
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






MARIO=function(){





    w = b2.mW({
        grav:500,
        walls:0

    })


    w.platform  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W


        pd = b2.polyDef(W, H).r(0)

        pd.restitution = .3

        return this.A(

            b2.staticDef(x,y),pd


        ).K('platform')

    }



    w.platform(800,500,600,100)

    w.platform(300, 530,100,100)


    w.platform(1400,300,600,100)

    w.platform(1800,500,1000,100)

    w.platform(1900,200,600,100)




    //cjs.watchKeys()

    w.footListener()
    w.startKilling()


     p = w.addMe().XY(300,-300)



    p.angDamp( 10000 )

    f=function(){

        w.each(function(body){

            body.X( body.X()-1  )
        })

    }

    cjs.tick(function(){
        f()

        if(p.Y()>2000){ p.XY(300,-300)}


        p.rot(0)


        if(b2.onGround){


        if(cjs.Keys.up){//if holding jump

                if(cjs.Keys.right){p.linVel(20,-80)}
                else if(cjs.Keys.left){p.linVel(-20,-80)}
                else{p.linVel(0,-90)}

        }




        else{



                if (cjs.Keys.left) {// p.dir(0);
                    if(cjs.Keys.down){p.impulse(-4,0)}
                    else {p.linVel(-40, 0)}
                }

                if (cjs.Keys.right) {//p.dir(1);
                    if(cjs.Keys.down){p.impulse(4,0)}
                else{p.linVel(40, 0)}
                }
            }



        }


        else{
            if(cjs.Keys.right){p.impulse(10,0)}
            else if(cjs.Keys.left){p.impulse(-10,0)}

        }
    })


    w.box(800,100).bindSprite('guy')

}

MARIOSHOOT=function(){



    w = b2.mW({grav:500})


    w.platform  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W


        pd = b2.polyDef(W, H).r(0)

        pd.restitution = .3

        return this.A(

            b2.staticDef(x,y),pd


        ).K('platform')

    }



    w.platform(800,500,600,100)

    w.platform(300, 530,100,100)



    //cjs.watchKeys()

    w.footListener()
    w.startKilling()


    p = w.addMe()



    p.angDamp( 10000 )

    cjs.tick(function(){
        p.rot(0)




            if(cjs.Keys.up){//if holding jump


               //
            }



        else{
            if(cjs.Keys.right){p.impulse(10,0)}
            else if(cjs.Keys.left){p.impulse(-10,0)}

        }
    })

    $.kD('u', function(){
        w.ball(200,400,10).linVel(40,-80)
    })

    w.box(800,100).bindSprite('guy')

}

MARIOJET=function(){



    w = b2.mW({grav:500})


    w.platform  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W


        pd = b2.polyDef(W, H).r(0)

        pd.restitution = .3

        return this.A(

            b2.staticDef(x,y),pd


        ).K('platform')

    }



    w.platform(800,500,600,100)

    w.platform(300, 530,100,100)



    //cjs.watchKeys()

    w.footListener()
    w.startKilling()


    p = w.addMe()



    p.angDamp( 10000 )

    cjs.tick(function(){
        p.rot(0)


        if(b2.onGround){


            if(cjs.Keys.up){//if holding jump

                if(cjs.Keys.right){p.linVel(20,-80)}
                else if(cjs.Keys.left){p.linVel(-20,-80)}
                else{p.linVel(0,-90)}

            }




            else{



                if (cjs.Keys.left) {// p.dir(0);
                    if(cjs.Keys.down){p.impulse(-4,0)}
                    else {p.linVel(-40, 0)}
                }

                if (cjs.Keys.right) {//p.dir(1);
                    if(cjs.Keys.down){p.impulse(4,0)}
                    else{p.linVel(40, 0)}
                }
            }



        }


        else{
            if(cjs.Keys.right){p.impulse(10,0)}
            else if(cjs.Keys.left){p.impulse(-10,0)}

        }
    })


    w.box(800,100).bindSprite('guy')

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











