b2d.scaleFunc = function(b1,b2,max){max=N(max)?max:2
    var dst = 150/Math.sqrt(Math.sqr(b1.X()-b2.X())+Math.sqr(b1.Y() - b2.Y()))
    return dst > max? max: dst}
Math.sqr=function(a){return a*a}
abovePlayerGlobally=function(p){return p.worldPoint(0, -p.sprite.H()/2)}    //bullet location //try worldPoint(0, 0).. it rotates me!?
abovePlayerGlobally=function(p){return p.worldPoint(0, -100)}


b2d.controls={}

b2d.controls.thrust=function(p){var k=cjs.Keys, vec=p.GetWorldVector(V(0,-100))//p.fixRot()
    if(k.left){p.rot( 15, '-')}
    if(k.right){p.rot( 15, '+')}
    if(k.up){ p.I( vec.div(40))}
    if(k.down){p.I( vec.div(100))}}
TESTPLAYERZEROG=function(control){w = b2d.W({
    g:0//300
})//.random(3)
    control= _pam.toLowerCase() || control || 'jumper'
    $l(control)
    p = w.player( control )
}



b2d.controls.thrustgrav=function(p){
    var k=cjs.Keys, vec= p.GetWorldVector(V(0,-100))

    p.fixRot()

    if(k.left){p.rot(8,'-').I(0,-5)
    }

    if(k.right){p.rot(8,'+').I(0,-5)
    }
    p.I(
         k.up? vec.div(1): k.down?vec.div(-100): V(0,0)
    )

}


b2d.controls.slidey=function(p){var k =cjs.Keys
    // if on ground
    if(p.onGround){

        // if pushing jump
        if(k.up){
            if(k.right){p.I(20, -600)}
            else if(k.left) {p.I(-20, -600)}
            else{p.I(0,-700)}}
        // if not pushing jump
        else {
            if(k.left) { p.dir(0); p.I(-100, -100)}
            if(k.right){ p.dir(1); p.I(100, -100)}}
    }

    // if in air !!!

    else {
        if (k.left){ p.dir(0); p.I(-100,0)}
        if (k.right){ p.dir(1); p.I(100,0)}
    }

    return p}
b2d.controls.standard=function(p){var k=cjs.Keys

    if(p.onGround){

        // if jumping
        if(k.up){
            if (k.right) {p.I(20, -60)}
            else if (k.left) {p.I(-20, -60)}
            else{p.I(0, -700)}}
        // if not jumping
        else {
            if(k.left) { p.dir(0);p.I(-20, 0)}
            if(k.right){ p.dir(1); p.I(20, 0)}}
    }

    // if in air !!!
    else {
        if (k.left){p.dir(0);p.I(-10,0)}
        if (k.right){p.dir(1);p.I(10,0)}}
    return p}
b2d.controls.basic=function(p){var k=cjs.Keys,

    i = p.onGround && k.up ? V(0, -700)

        : k.right ? V(30, 0)

        : k.left ? V(-30, 0)

        : V(0, 0)

    p.I(i)
}
b2d.controls.getup=function(p){var k=cjs.Keys,

    i = p.onGround && k.up ? V(0,-600)
        : k.right?V(40,10)
        : k.left?V(-40,10)
        : V(0,0)

    p.I(i)

    p.fixedRot(false)
}


b2d.controls.symmetrical=function(p){var k=cjs.Keys

    if(k.left){p.I(-20,0)}
    if(k.right){p.I(20,0)}
    if(k.up){p.I(-0,-20)}
    if(k.down){p.I(0,20)}

    return p}

b2d.controls.trickjump=function(p){var k=cjs.Keys

    if(p.onGround){

        if(k.up){
            if (k.right) {p.I(0, 100)}
            else if (k.left) {p.I(0, -100)}
            else {p.I(0, -800)}
        }

        else{
            if (k.left) {p.direction(0); p.I(-105, 0)}
            if (k.right) {p.direction(1);p.I(150, 0) }}
    }

    else {
        if (k.left) { p.dir(0);p.I(-10, 0)}
        if (k.right) {p.direction(1); p.I(10, 0)}
    }

    return p}



b2d.controls.hoppy=function(p){var k=cjs.Keys
    if(p.onGround){
        if(k.left){p.I(-3, -12)}
        if(k.right){p.I(3, -12)}}
    else{if(k.down){p.I(0,20)}}

}

b2d.controls.jumper=function(p){var k=cjs.Keys//p.rot(0)

    if(k.left){p.I(-4,0)}
    if(k.right){p.I(4,0)}
    if(k.up){p.I(-0,-22)}
    if(k.down){p.I(0,22)}
    //return p
}

b2d.controls.jump=function(p){

    if(p.up && p.onGround){p.lV(p.lV().x,-80)}
    p.lV(p.right? 30: p.left? -30: 0,p.lV().y)

}







TESTPLAYER=function(control){w = b2d.W({g:300})//.random(3)

    control= _pam.toLowerCase() || control || 'jumper'

    $l(control)

    p = w.player(400,400, 4, control )


}




JUMP=function(){w = b2d.W({g:300}).debug()
    w.S(100,570,'w',200,30).rest(0).fric(0)
    w.S(325,570,'g',230,30).rest(.3).fric(10)
    w.S(550,570,'r',200,30).rest(.7).fric(.3)
    w.S(100,400,'g',230,30).rest(.3).fric(10)
    p = w.jumper()
    cjs.tick(function(){$l( p.onGround )})}


FRIC=function(){w = b2d.W({w:0, g:1500}).debug()
    w.S(100,270,'w',200,30).rest(0).fric(0)
    w.S(325,270,'g',230,30).rest(.3).fric(10)
    w.S(550,270,'r',200,30).rest(.7).fric(.3)
    p = w.mario()
    w.s.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f',
        'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
}


MARIO=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.floor.kill()
    p= w.jumper()
    speed=1

    setup=function(){score=0
        p.XY(350, 100)
        p.lV(0,0)
        w.s.XY(0,0)
    }

    setup()
    cjs.tick(function(){
        w.s.X(speed,'-').pen(score++)
        if( p.relPos() < -100 ){setup()}})

    w.rectStat(200,500,100,100 )
    w.rectStat(240,450,180,30 )
    w.rectStat(420,500,180,30,'yellow')
    w.rectStat(560,450,300,30,'yellow')
    w.rectStat(600,500, 180,30,'yellow')
    w.rectStat(960,450,300,30 )
    w.rectStat(900,500, 180,30 )
    w.goomba(800).fric(0)

}

SHOOTER=function(){w=b2d.W({g:0}) //w.startKilling()
    p=w.addMe().XY(300).angDamp(10000)
    w.addTim(7)
    w.beg(function(cx){ //not working
        if(cx.with('bullet')){
            cx.destroyIf('tim')
            cx.destroyOtherIf('player')}
        else if(cx.with('player','tim')){ cx.destroyIf('player') }
    })
    $.click(function(e){
        var x=e.pageX-p.X(),y=e.pageY-p.Y(),rot,adj
        rot = Math.toDegrees(Math.atan(y/x))
        adj = x>0?90:270
        p.rot(rot+adj).I(x/20,y/20)
        w.bullet( abovePlayerGlobally(p) ).I(x/40, y/40).bindSprite('sun',.2)})
    //to do:  maybe u only get 10 bullets ever.. so u must chase them :) (only way to kill badguys)
}
THRUSTER = function(){w=b2d.W({
        g:0,
        //clear:false,
        bg: 'space.jpg' }).debug()

    w.brick(400, 200)
    p = w.player('thrust').XY(300).angDamp( 10000 )
    w.addTim(3)

    setInterval( function(){
        w.bobom()
       //w.s.clear()
    }, 3000)

    w.beg(function(cx){var a=cx.a(),b= cx.b()
        if (cx.with('bullet') && !cx.with('player')){
            a.setDestroyIf('tim')
            b.setDestroyIf('tim')
            if(a.is('bullet')){a.setDestroy()}
            else {b.setDestroy()}
        }})

    $.space( function(){
      w.bullet( abovePlayerGlobally(p) ).bindSprite('me', 0.1)
          .I( p.GetWorldVector(V(0, -100)).div(20) )})


}

JUMPER=function(){w = b2d.W({g:300})
    // cliff jump... feet dont cover entire bottom of player
    w.platform(800,300,100)
    w.platform(260,240,60)
    w.platform(550,250,100)
    w.platform(1350,550,100)
    w.platform(300,200,100)
    w.platform(300,500,60,30)
    w.platform(150,400,60,30)
    p = w.jumper()

    cjs.tick(function(){$l(p.onGround)})

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


GREENGUY=function(){w=b2d.W({g: 0}).debug()
    w.greenGuy(100,100)
    w.greenGuy(200,200)
    w.greenGuy(300,300)}

AUTOFLAGCHECKER=function(){w= b2d.W()
    p = w.jumper()
    p.FLAGS={}

    p.flagHandlers = {
        warp: function(p){p.XY(200, 100)},
        log: function(){$l('haha')}}

    cjs.tick(function flag(p){
        _.each(p.FLAGS, function(valkey){
                if (val===true) {
                    p.flagHandlers[key](p)
                    p.FLAGS.warp=false
                    p.FLAGS[key]=false}}
        )})
}


CONTROLS=function(){w = b2d.W({g:300})
    w.platform(800,300,100)
    w.platform(260,240,60)
    w.platform(550,250,100)
    w.platform(1350,550,100)
    w.platform(300,200,100)
    w.platform(150,400,60,30)
    p = w.jumper()
    cjs.tick(function(){$l(p.onGround)})

}

MARIOCANNON=function(){w = b2d.W({g:300})

    w.platform  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W


        pd = b2d.poly(W, H).r(0)

        pd.restitution = .3

        return this.stat(x,y, pd).K('platform')

    }
    w.platform(800,500,600,100)
    w.platform(300, 530,100,100)


    p = w.jumper()

    cjs.tick(function(){var k=cjs.Keys
        if(!k.up){//if not holding jump
            if(k.right){p.I(10,0)}
            else if(k.left){p.I(-10,0)}}})
    $.kD('u', function(){w.ball(200,400,10).lV(40,-80)})
    w.box(800,100).bindSprite('guy')}



OLDJUMP=function(){w = b2d.W({g: 500})

    w.bouncePlat(800,500,600,100)
    w.bouncePlat(300, 530,100,100)
    
  

    p = w.jumper()


    cjs.tick(function(){var k=cjs.Keys

        if(p.onGround ){


            if(k.up){
                if(k.right){p.lV(20,-80)}
                else if(k.left){p.lV(-20,-80)}
                else {p.lV( 0, -90 )}

            }

            else {
                if (k.left) {
                    if(k.down){p.I(-4,0)}
                    else {p.lV(-40, 0)}
                }

                if (k.right) {
                    if(k.down){p.I(4, 0)}
                    else{p.lV(40, 0)}
                }
            }

        }


        else{
            
            if(k.right){p.I(10,0)}
            else if(k.left){p.I(-10,0)}

        }
    })


    w.box(800,100).bindSprite('guy')

}


