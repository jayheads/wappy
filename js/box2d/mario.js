b2d.scaleFunc = function(b1,b2,max){max=N(max)?max:2
    var dst = 150/Math.sqrt(Math.sqr(b1.X()-b2.X())+Math.sqr(b1.Y() - b2.Y()))
    return dst > max? max: dst}
Math.sqr=function(a){return a*a}

b2d.controls={}

b2d.controls.thrust=function(p){var vec


    p.fixRot()

    if(cjs.Keys.left){p.rot( 15, '-')}
    if(cjs.Keys.right){p.rot( 15, '+')}
    if(cjs.Keys.up){
        vec = p.GetWorldVector( V(0,-100) )
        p.I(vec.x/40, vec.y/40 )}

    if(cjs.Keys.down){
        vec= p.GetWorldVector(V(0,-100))
        p.I(-vec.x/100, -vec.y/100 )}

}

b2d.controls.thrustGrav=function(p){var vec
    if(cjs.Keys.left){
        p.I(0,-5)
        p.rot(p.rot()-8)}
    if(cjs.Keys.right){
        p.I(0,-5)
        p.rot( p.rot()+ 8 )}

    if(cjs.Keys.up){
        vec = p.GetWorldVector( V(0,-100) )
        p.I(vec.x/20, vec.y/20 )
    }

    if(cjs.Keys.down){
        var vec= p.GetWorldVector(V(0,-100))
        p.I(-vec.x/100, -vec.y/100 )}}

b2d.controls.slidey=function(p){
    // if on ground
    if(b2.onGround){

        // if pushing jump
        if(cjs.Keys.up){
            if (cjs.Keys.right) {p.I(2, -6)}
            else if (cjs.Keys.left) {p.I(-2, -6)}
            else{p.I(0, -14)}}

        // if not pushing jump
        else {
            if(cjs.Keys.left) { p.dir(0);p.I(-10, -10)}
            if(cjs.Keys.right){ p.dir(1); p.I(10, -10)}}}


    // if in air !!!
    else {
        if (cjs.Keys.left){p.dir(0);p.I(-1,0)}
        if (cjs.Keys.right){p.dir(1);p.I(1,0)}}
    return p}

b2d.controls.standard=function(p){
    // if on ground
    if(b2.onGround){
        // if jumping

        if(cjs.Keys.up){
            if (cjs.Keys.right) {p.I(2, -6)}
            else if (cjs.Keys.left) {p.I(-2, -6)}
            else{p.I(0, -14)}}
        // if not jumping
        else {
            if(cjs.Keys.left) { p.dir(0);p.I(-2, 0)}
            if(cjs.Keys.right){ p.dir(1); p.I(2, 0)}}}

    // if in air !!!
    else {
        if (cjs.Keys.left){p.dir(0);p.I(-1,0)}
        if (cjs.Keys.right){p.dir(1);p.I(1,0)}}
    return p}

b2d.controls.feet=function(p){
    if(b2d.onGround){p.I(20,0)}
    else {p.I(-20,0)}}

b2d.controls.jumpjumpjump=function(p){
    if (b2d.onGround){p.I(0, -22)}
    if (cjs.Keys.right) {  p.I(2,  0) }
    else if (cjs.Keys.left) { p.I( -2,0)}}

b2d.controls.basic=function(p){
    if(b2d.onGround){
        if (cjs.Keys.up){p.I(0, -14)}}
    if (cjs.Keys.right) {  p.I(3,  0) }
    if (cjs.Keys.left) { p.I( -3,0)}}

b2d.controls.getup=function(p){
    if(b2d.onGround){
        if (cjs.Keys.up){p.I(0, -10)}}


    if (cjs.Keys.right) {  p.I(4,  1) }
    if (cjs.Keys.left) { p.I( -4,1)}


}

b2d.controls.symmetrical=function(p){

    if(cjs.Keys.left){p.I(-20,0)}
    if(cjs.Keys.right){p.I(20,0)}
    if(cjs.Keys.up){p.I(-0,-20)}
    if(cjs.Keys.down){p.I(0,20)}

    return p}

b2d.controls.trickJump=function(p){
    if(b2.onGround){
        if(cjs.Keys.up){
            if (cjs.Keys.right) {p.I(0, -10)}
            else if (cjs.Keys.left) {p.I(0, -10)}
            else {p.I(0, -30)}}
        else {$l('on ground and not jumping')
            if (cjs.Keys.left) {p.direction(0); p.I(-15, 0)}
            if (cjs.Keys.right) {p.direction(1);p.I(15, 0) }}}
    else {
        if (cjs.Keys.left) { p.dir(0);p.I(-1, 0)}
        if (cjs.Keys.right) {p.direction(1); p.I(1, 0)}}
    return p}

b2d.controls.hoppy=function(p){
    if(b2d.onGround){
        if(cjs.Keys.left){p.I(-3, -12)}
        if(cjs.Keys.right){p.I(3, -12)}}
    else{if(cjs.Keys.down){p.I(0,20)}}

}


b2d.controls.jumper=function(p){//p.rot(0)
    if(cjs.Keys.left){p.I(-4,0)}
    if(cjs.Keys.right){p.I(4,0)}
    if(cjs.Keys.up){p.I(-0,-22)}
    if(cjs.Keys.down){p.I(0,22)}
    //return p
}





TESTPLAYER=function(control){w = b2d.W({g:40
})//.random(3)

    control= _pam.toLowerCase() || control || 'jumper'

    p = w.player( control )

}
JUMP=function(){w = b2d.W({g:1500}).debug()
    w.S(100,570,'w',200,30).rest(0).fric(0)
    w.S(325,570,'g',230,30).rest(.3).fric(10)
    w.S(550,570,'r',200,30).rest(.7).fric(.3)
    w.S(100,400,'g',230,30).rest(.3).fric(10)

    p = w.mario() // mario sucks!!!

}
FRIC=function(){w = b2d.W({w:0, g:1500}).debug()
    w.S(100,270,'w',200,30).rest(0).fric(0)
    w.S(325,270,'g',230,30).rest(.3).fric(10)
    w.S(550,270,'r',200,30).rest(.7).fric(.3)
    p = w.mario()
    w.s.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f',
        'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
}
MARIOGROUNDS =function(){w = b2d.W({w:0, g:5}).debug()
    w.s.XY(300,150)
    w.s.rXY(300, 150)

    w.ice(30,250, 400)
    w.grass(450,250,400)
    w.grass(500,100,4000)
    w.rubber(880,250,40000)

    p = w.mario().followX(600, 400)

}
SCROLLINGLEVEL=function(){w=b2d.W().debug()
    w.s.XY(300, 150).rXY(300, 150)
    w.grass(300,280,500)
    w.ice(1300, 280, 1000)
    w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 ).follow(600, 400)
}
SLIDE=function(){w=b2d.W().debug()
    w.roof.kill()
    w.s.XY(300, 150).rXY(300, 150)
    w.clouds().clouds(1000,-200)
    w.grass(300,280,500)
    w.ice(800,280, 5000)
    p = w.player(2.5, 'thrust').XY(800,-100) .angDamp( 10000 ).follow(600, 400)
    slide = w.rect(1200, 30, 1200,40, 'blue').den(1).fric(.5).rest(.5)
}
MARIOCANNON=function(){w = b2d.W({g:500})
    w.platform  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W


        pd = b2d.poly(W, H).r(0)

        pd.restitution = .3

        return this.A(

            b2.staticDef(x,y),pd


        ).K('platform')

    }
    w.platform(800,500,600,100)
    w.platform(300, 530,100,100)
    w.footListener()
    w.startKilling()
    p = w.addMe().fixRot().angDamp(10000)
    cjs.tick(function(){
        if(!cjs.Keys.up){//if not holding jump
                if(cjs.Keys.right){p.I(10,0)}
                else if(cjs.Keys.left){p.I(-10,0)}}})
    $.kD('u', function(){w.ball(200,400,10).linVel(40,-80)})
    w.box(800,100).bindSprite('guy')}
OLDJUMP=function(){w = b2d.W({g: 500})

    w.bouncePlat(800,500,600,100)
    w.bouncePlat(300, 530,100,100)
    //cjs.watchKeys()
    w.footListener()
    w.startKilling()

    p = w.addMe().angDamp( 10000).fixRot()

    cjs.tick(function(){

        if(b2d.onGround){


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

RAMPS=function(){w=b2d.W().debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()

    w.s.XY(300,150)
    w.s.rXY(300, 150)
    w.ramps()
    p= w.mario()
    p.followX(600, 400)

}

AUTOSCROLL=function(){w=b2d.W().debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.floor.kill()
    p= w.mario()

    setup=function(){score=0
        p.XY(350, 100)
        p.linVel(0,0)
        w.s.XY(0,0)
    }

    setup()
    cjs.tick(function(){
        w.s.X(4,'-').pen(score++)
        if( p.relPos() < -100 ){setup()}})
    w.ramps()
}

MARIO=function(){w=b2d.W().debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.floor.kill()
    p= w.mario()
    speed=1

    setup=function(){score=0
        p.XY(350, 100)
        p.linVel(0,0)
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

SCALINGLEVEL=function(){w=b2d.W().debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    p= w.mario().XY(1000,0)
    w.ice(800,280, 10000);
    w.rubber(50,100,300); w.rubber(-400,100,300)
    w.rect(1200,30, 600,4).stat();
    w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    w.s.XY(300, 150).rXY(300,150)
    p.calcScale=function(){return 1-((this.X()-300)/300)*.1}
    cjs.tick(function(){p.centerScale(p.calcScale())})
}

