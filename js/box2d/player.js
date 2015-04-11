w=b2d.World.prototype


w.me=   w.addMe=function(x,y,scale){var Z=scale||4
    p = this.body(b2d.dyn(x,y), [
        b2d.poly(Z*12.5, Z*25).rest(0).fric(.1).den(.8).K('head'),
        b2d.poly(Z*10, Z*10, 0, Z*10).K('feet').sensor(true),
        b2d.poly(Z*2, Z*6, 0, -Z*12).K('hat').sensor(true),
        b2d.poly(Z*8, Z*2, Z*8, 0).K('right').sensor(true),
        b2d.poly(Z*8, Z*2, -Z*8, 0).K('left').sensor(true)
    ]).den(1).rest(0).fixRot()
    p.bindSprite('me', Z/10)
    return p.K('p player')
}

w.player = function(x,y,scale, onEachTick, enemy){
    var w=this
    if(!N(scale)){enemy=onEachTick;onEachTick=scale;scale = 4}
    var p = this.addMe(x,y,scale), func

    if(S(onEachTick)){onEachTick = b2d.controls[onEachTick]}
    if(F(onEachTick)){cjs.tick(function(){onEachTick(p, enemy) })}

    p.speed=40
    p._direction = 'right'
    p.dir = p.direction =  function(dir){
        if(U(dir)){return this._direction}
        this._direction = dir
        return this}
    p.moveInDir =  function(n){
        if (n == '-'){  return p.move( - p.speed )}
        n = N(n) ? n : p.speed
        if (p.direction()){p.I(3,0)}else{p.I(-3,0)}
        return p}
    p.onGround=false
    p.right=false
    p.left=false
    p.up=false

    $.key({
        u:function(){p.up=true},
        U:function(){p.up=false},
        r:function(){p.right=true},
        R:function(){p.right=false},
        l:function(){p.left=true},
        L:function(){p.left=false}
    })


    w.beg(function(cx){
        cx.with('feet',
            function(f){
                if(!f.isSen()){
                    this.B().onGround=true
                }
            })})

    w.end(function(cx){
        cx.with('feet',
            function(f){
                if(!f.isSen() )   {
                    this.B().onGround=false}

            })

    })


    // if(w.floor){  w.floor.rest(0) }


    return p}

w.jumper = function(x,y){

    x=N(x)?x:200;y=N(y)?y:500

    var p = this.player(x,y)
    cjs.tick(function(){b2d.controls.jump(p)})
    return p}

w.mario=function(x,y,scale){

    x=N(x)?x:100
    y=N(y)?y:100
    scale=N(scale)?scale:2.5

    return this.player(x,y,scale).horizCenter()
        .fric(.2).rest(.2).marioJumping()
}
w.thrustPlayer=function(){
    return this.player(0,200,2.5,'thrust').horizCenter()
        .linDamp(.8).angDamp(10000)
}
w.yShipEquilateral = function(color, x,y,scale){var halfSide, side, ship
    if(!S(color)){scale=y;y=x;x=color;color='y'}
    color=oO('c',color)
    scale = N(scale)?scale:4
    halfSide = scale * 4
    side = halfSide * 2
    ship =this.D(x,y)

    ship.convex(color, [  [ -side , halfSide ],[0, -side ],[side , halfSide ]  ])

    ship.poly(4,20,0,-side )  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?




    // ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))

//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )



    /////////////




    ship.dir=function(){return this.GetWorldVector(V(0,-1))}
    //methods
    ship.push=function(n){var k,dir
        n = N(n)?n: 1
        k = 0.1
        dir = this.dir()
        this.I(
                dir.x * n * k,
                dir.y * n * k
        );return this}

    ship.chug=function(n){var that=this

        I(function(){
            that.push(n)}, 100)



        return this}
    ship.going=function(){

        var lv = this.linVel(), x = lv.x, y=lv.y, a = this.angVel()


        return   (Math.abs(x) > 0.5) || (Math.abs(y) > 0.5)  || ( Math.abs(a) > 0.5)
    }



    ship.shoot=function(kind){kind = kind||'bul'
        var vec, bullet, dist, y=this
        dist =  y.dir().mult(100)
        bullet = w.circ(y.X()+dist.x, y.Y()+dist.y,6, 'w').addClass(kind).K(kind)

        bullet.addClass('bullet bul')

        vec = y.GetWorldVector( V(0, -100))
        bullet.impulse(vec.x/4, vec.y/4 )
        setTimeout(function(){ bullet.kill()  }, 400)
        return bullet}


    ship.shootOnSpace= function(kind){
        var y=this
        $.space(function(){
            y.shoot(kind)
        })
        return this}




    ship.shootOnInt= function(int, kind){
        var y=this, int = N(int)?int:1000


        setInterval(function(){

            if( y.IsActive()) {y.shoot(kind)}

        }, int)

        return this}





    return ship}
w.yShip = function(color, x,y,scale){var halfSide, side, ship

    if(!S(color)){scale=y;y=x;x=color;color='y'}

    color=oO('c',color)
    scale = N(scale)?scale:4
    halfSide = scale * 4
    side = halfSide * 2

    ship = this.dyn(x,y)

    ship.convex(color,[[-halfSide,halfSide],[0,-side*2 ],[halfSide,halfSide]])

    ship.dir = function(){
        return this.GetWorldVector(V(0,-1))
    }

    //methods
    ship.push=function(n){n=N(n)?n:1
        this.I(this.dir().mult(n * 0.1))
        return this}

    ship.chug=function(n){var that=this
        I(function(){that.push(n)}, 100)
        return this}

    ship.going=function(){

        var lv = this.lV(),
            x = lv.x,
            y=lv.y,
            a = this.angVel(),
            abs=Math.abs

        return   (abs(x)>0.5)||(abs(y)>0.5)||(abs(a)>0.5)
    }


    ship.shoot=function(kind){kind = kind||'bul'
        var bullet, dist, y=this
        dist =  y.dir().mult(100)

        bullet=w.circ(y.X() + dist.x, y.Y() + dist.y,
            6,'w').K(kind).addClass('bul bullet')

        bullet.I( y.GetWorldVector( V(0, -100) ).div(4) )

        setTimeout(function(){ bullet.kill()  }, 400)

        return bullet}


    ship.shootOnSpace= function(k){var y=this
        $.space(function(){y.shoot(k)})
        return this}

    ship.shootOnInt= function(int, kind){
        var y=this, int = N(int)?int:1000


        setInterval(function(){

            if( y.IsActive()) {y.shoot(kind)}

        }, int)

        return this}

    return ship.den(.5).K('ship')
}
w.ship = function(x,y){x=N(x)?x:300; y=N(y)?y:x

    return this.yShip(x,y).thrustControl().shootOnSpace().damp(2)
}


///////////////
///////////////
w.footListener=function(){
//sets b2d.onGround setter
//requires a body that has userData 'feet',
//and it simply see if it is colliding with anything
    b2d.onGround = false
    w.beg(function(cx){if(cx.with('feet')){b2d.onGround=true}})
    w.end(function(cx){if(cx.with('feet')){b2d.onGround=false}})
    return this}
w.bouncePlat  =function(x,y,W,H){//=brk=brick=
    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W
    return this.S(x,y,W,H).K('plat boucePlat').rest(.8)}

w.coin = function(x,y){var w=this,c

    x=  _.tN(x, R(600))
    y = _.tN(y, R(300))


    c= w.D(x,y, 'y', 20).K('coin').bo(0).den(0).lD(0)

    c.I(  R(15,-5),  R(15,-5)  )
    c.warp()

return c}




w.stars=function(n){var w=this
    _.t(_.tN(n,30),function(){
        w.D(R(1000,-500),R(800,-400),'w',2).den(0).rest(2)})
    return w}


w.sun=function(x,y){
    x=N(x)?x:300
    y=N(y)?y:150

    return this.S(300,150, 20,'p',10).den(1).rest(.5).bindSprite('sun',.2)

}

w.startKillingX=function(){var w=this
    cjs.tick(function(){
        w.each(function(b){
            if(b.is('destroy')){
                b.K('destroyed')
                b.kill()}
        })
    })

    return this}

w.addTim=function(n){var w=this

    if(U(n)){

        return w.D(300,300,'w',15).K('tim').bS('guy', .3)
    }

    _.t(n, function(){w.addTim()})
    return w
}



w.plat= w.platform=function me(x,y,W,H){
    var w=this, g=G(arguments)
    if(A(g[0])){
        _.e(g, function(g){me.apply(w,g)})
        return w}

    x = _.tN(x,60)
    y = _.tN(y,x)
    W = _.tN(W,30)
    H = _.tN(H,W)
    return w.S(x,y,'s',W,H).bo(0.3).K('plat platform')
}




w.bullet=function self(x,y,r){//radius

//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}

    var bullet // can pass in (x,y or {x:x,y:y}), and radius

    if( O(x) ){r=y; y=x.y; x=x.x}
    x = x || 100
    y = N(y) ? y : x
    r = r || 10

    bullet= this.D(x, y,'w', r)

    return bullet.K('bullet bul')

}
w.fireBall=function(x,y,vX,vY){
    var v=8
    if(vX=='l'){vX=v;vY=0}
    if(vX=='r'){vX=-v;vY=0}
    if(vX=='u'){vX=0;vY=-v}
    if(vX=='d'){vX=0;vY=v}
    if(vX=='ul'){vX=v;vY=-v}
    if(vX=='ur'){vX=-v;vY=-v}
    if(vX=='dl'){vX=v;vY=v}
    if(vX=='dr'){vX=-v;vY=v}
    vX=N(vX)?vX:0
    vY=N(vY)?vY:0

    return this.K(x,y, 'r', 18).bindSprite('sun',.2)
        .lV(vX,vY)
}



w.zilla=function(x,y){var w=this

    var z= w.K(x, y, 80, 140)  //make sensor?

        .fixRot()
        .bindSprite('guy', [.8,1])
        .moveInCircle('-')
        .coll('bul',
        function(bul){
            bul.B().kill()
            z.hits++
        })



    z.hits=0


    z.fireBalls=function(){
        var x= this.X(),
            y= this.Y()
        w.fireBall(x+50, y-80,'ul')
        w.fireBall(x+50, y+80,'dl')
        w.fireBall(x-50, y-80,'ur')
        w.fireBall(x-50, y+80,'dr')
        w.fireBall(x, y-80,'u')
        w.fireBall(x, y+80,'d')
        w.fireBall(x-50, y,'r')
        w.fireBall(x+50, y,'l')
    }


    z.fireBallsAtInt=function(ms){var z=this
        setInterval(function(){  z.fireBalls()  }, ms)
        return this
    }


    return z}

w.clouds=function(leftPoint, y){var that=this

    leftPoint = N(leftPoint)? leftPoint: 100

    y=N(y)?y:75

    _.times(100,function(){

        that.S(

                Math.random() * 400 + leftPoint,
            y,
                Math.random()*30

        )

    })

    return this}
w.grass=function(x, y, len){x += len/2
    var grass = this.S(x,y,'g',len,20).fric(.3).rest(.3)
    return grass}
w.ice=function(x, y, len){x += len/2
    var ice = this.S(  x, y, 'w', len, 20).fric(0).rest(0)
    return ice}

w.rubber=function(x, y, len){
    x += len/2
    var rub = this.rectStat(  x, y, len, 20, 'red').fric(.3).rest(.7)
    return rub}


w.ramp=function me(x, y, W,H,a){
    var w=this, g=G(arguments)

    if(A(g[0])){
        _.e(g, function(args){
            me.apply(w, args)
        })

    return w}

    o = O(g[0])?g[0]: {x:g[0],y:g[1],w:g[2],h:g[3],a:g[4]}
    o.x = _.tN(o.x, 300)
    o.y = _.tN(o.y, 300)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, 100)
    o.a = _.tN(o.h, 10)
    o.c = o.c || 'y'

    return  w.S(o.x, o.y, o.c, o.w, o.h).rot(a).DFB(1,0,0)
}







BALLS=function(){W({g:100,w:0})

    w.ramp(
        [250, 700, 500, 200, -40],
        [250, 640, 500, 200, -20],
    [270, 620, 500, 200, -10],
    [200, 600, 500, 200, 11],
    [-70, 350, 500, 200, 85],
    [-70, 375, 500, 200, 75],
    [-70, 400, 500, 200, 65],
    [-70, 425, 500, 200, 55],
    [-70, 450, 500, 200, 45],
    [-70, 475, 500, 200, 35],
    [-70, 500, 500, 200, 25],
    [-70, 525, 500, 200, 17])

    var force

    $.kD({
        d: function(){force=force||10},
        D: function(){
            w.D(20,300,'w',12).DFB(1,0,0).bS('me',0.2).I(0,force)
            force=0}
    })



    I(function(){force *= 1.2}, 100)

    w.S(900,550,'w',120,15).fric(0).K('ledge')

    w.with('ledge', function(p){p.B().lV(0)})


}





w.goomba=function(x,y){
    y=N(y)?y:100
    w.box(x,y).bS('guy').K('goomba')}

w.bobom=function(x,y){var w=this,
    bobom = w.D(x,y,'d', [
        [40, 'body'],
        [40, 5, 30,0, 'bobomSens', '-']
    ])

    w.beg(function(cx){

        cx.with( 'bobomSens', function(){
            this.B().kill()
        })
    })
   // body = bobom.rec(20, 20).den(1), //.rest(1)

   // sensor =  bobom.rec( )




    //sensor.coll('player',function(){w.B().kill()})

    return bobom}



w.link = function me(x,y){
    var w=this, l
    l= w.D(x, y,'d', 4, 20).den(4).rest(2)
    l.l= function(n){_.t(_.tN(n,1), function(){
        w.rev(l,l=me(l.X(),l.Y()+15))
    })
        return l.K('leaf')}

    return l}

w.vine = function(x,y,len){len=len||10

    var that = this,
        base = this.link(x,y).stat(),
        l =  base.l(len)


    this.begin(function(cx){
        if(cx.with('player', 'leaf')){
            var j =  that.rev(l, p.XY(l.X(), l.Y()))
            $.kD('down', function(){that.DestroyJoint(j)})

        }})}

w.tramp=function(xloc, rest,freq,damp){
    var bouncer, j,w=this
    xloc= N(xloc)?xloc:290
    rest=N(rest)?rest:.75
    freq=N(freq)?freq:6
    damp=N(damp)?damp:0
    bouncer =  this.B(xloc, 200, 'b',200,20).fixRot().den(0).rest(rest).fric(0)
    j = w.dist(
        w.S(xloc,280,'w', 20, 20), bouncer  ).len(115).freq(freq).damp(damp)
    w.S(xloc- 120,290,'b',40,300).fric(0)
    w.S(xloc+120,290,'b',40,300).fric(0)
    return j}



w.bridge=function(x,y){var w=this
    x = N( x ) ? x : 400
    y = N( y ) ? y : 100

    var  b1 = w.S(x, y, 10),
        b2 = wood(),
        b3 = wood(),
        b4 = wood(),
        b5 = wood(),
        b6 = wood(),
        b7 = wood(),
        b8 = wood(),
        b9 = wood(),

        b10 = w.S(x+700, y,'b', 10)

    pieces([b1, b2],[b2,b3],[b3,b4],[b4,b5],[b5,b6],[b6,b7],[b7,b8],[b8,b9],[b9,b10])
    function wood(){
        return w.D(100, 100, 'd', 90, 60).den(1).fixRot()
    }
    function piece(a,b){w.dist({a:a, b:b, coll:1, l:6, f:5})  }

    function pieces(){_.e(arguments,function(arg){
        piece(arg[0],arg[1])
    })}
}





w.car =function(){
    var car = w.D(150,150,'z',90,30)

    j1 = w.rev(
        w.circ( 200, 150, 30 ,'red').fric(0).den(1),
        car)

    j1.speed(120)
    j1.EnableMotor(true)
    j1.SetMaxMotorTorque(1000000)
    j2 = w.rev(  w.circ( 100, 150,30, 'blue').fric(0).den(1),  car   )//.speed(-500).torque(40).motor(true)

    j2.speed(150)
    //j2.EnableMotor(true)
    j2.SetMaxMotorTorque(1000000)
    return car}


w.roller =function(){

    var car = w.rect(250, 150,90,30, 'black')

    j1 = w.rev(
        w.circ( 300, 150, 30 ,'red' ),
        car
    )

    j1.speed(6)
    j1.EnableMotor(true)
    j1.SetMaxMotorTorque(1000000)

    j2 = w.rev(
        w.circ( 200, 150,30,'red'),  car
    ).speed(-500).torque(40).motor(true)

    return car}



w.grid = w.drawGrid = function(grid, x,y,len,spacing){
    var that=this, body


    var gridDrawer=function(x,y,len, spacing){
            body = that.dyn(x, y)
            len = N(len)?len: 30; spacing = N(spacing)?spacing: 20
            return function(x, y){
                body.rect(len, len, x * spacing, y * spacing)
                    .den(1).fric(0.5).rest(.2)
                return body}},

        drawWall=gridDrawer(x, y, len, spacing)

    _.times(grid.length, function (row) {
        _.times(grid[0].length, function (col) {
            if (grid[col][row]){
                drawWall(row, col)}})})

    return body.K('grid')}


w.badGuy=function(x,y){var that=this,w=this


    b = w.D(x, y,'d', 60).K('badGuy').bS2(w.s.shape(x,y) )


    b.draw=function(frame){
        this.sprite.rf(['r','g'], [frame[0], frame[1]], 60).dc(60)
    }

    b.h = b.health = 100
    b.coll(function(){b.h--})


    funcId = I(function update(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){
            clearInterval(funcId)
            b.kill()}

        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]}
        }

    }, 300)

    return b}

w.marioWallsX=function(){

    var width=600, height=300, gravity=400

    w.left =  left = w.rect(0, height / 2, 40, height, 'pink').stat().K('leftWall').fric(.5).rest(.5)
    w.right = right = w.rect(width, height / 2, 40, height).K('rightWall')
    w.floor =  floor = w.rect(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
    w.ceiling =  ceiling = w.rect(height, 0, width*5, 40, 'orange').stat().K('ceiling').fric(.2).rest(.2)

    return this}

w.goal=function(x,y){

    w.S(x-20,y-15, 'y',10,40)
    w.S(x,y,'y',40,10)
    w.S(x+20,y-15,'y',10,40)

}


w.sensorBucket=function(x,y,k){
    var w=this, sens

    x= _.tN(x,320)
    y= _.tN(y,245)

    k=k||'sensorBucket'

    w.S(x-150, y-15, 'r', 20, 200)
    w.S(x+150, y-15, 'r', 20, 200 )
    w.S(x-200, y-120 , 'r', 320, 20, 200,200 )
    sens = w.S(x,y,'d', [[280, 170 ,'-']]).K(k)

    return sens}


cjs.stopWatch=function(){
    var watch = function self(reset){
        var res = new Date().getTime()  - self.time
        if(reset == '/'){self.reset()}
        return  res
    }
    watch.reset=function(){this.time = new Date().getTime()}
    watch.reset()
    return watch

}







b2d.scaleFunc = function(b1,b2,max){max=N(max)?max:2
    var dst = 150/Math.sqrt(Math.sqr(b1.X()-b2.X())+Math.sqr(b1.Y() - b2.Y()))
    return dst > max? max: dst}
Math.sqr=function(a){return a*a}

abovePlayerGlobally=function(p){

    return p.worldPoint(0, -p.sprite.H()/2)

}    //bullet location //try worldPoint(0, 0).. it rotates me!?


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

        if(k.l){p.I(-3, -12)}
        if(k.r){p.I(3, -12)}
    }

    else{if(k.d){p.I(0,20)}}

}

b2d.controls.jumper=function(p){var k=cjs.Keys//p.rot(0)

    i=    k.l? [-4,0]  : k.r?[4, 0]
        : k.u? [0,-22] : k.d? [0,22] : [0,0]

    p.I(i)

    //return p
}



b2d.controls.jump=function(p){

    if(p.up && p.onGround){
        p.lV(p.lV().x,-80)
    }

    p.lV(p.right? 30: p.left? -30: 0,p.lV().y)

}








TESTPLAYER=function(control){w = b2d.W({g:300})//.random(3)

    control= _pam.toLowerCase() || control || 'jumper'

    $l(control)

    p = w.player(400,400, 4, control )


}





BADDIES=function(){W(); w.goomba(); w.bobom(200,200)}



ROLLERS=function(){W({w: 'L'}).P()
    // _.times(3, function(){w.roller()})
    setInterval(function(){w.roller()}, 1000)
    p.X(1750)
}


RACE=function(){W({w: 'L'}).P()
    car = w.car()
    w.dist(p, car).len(0)
    w.floor.fric(.1)

}



FRIC=function(){w = b2d.W({w:0, g:1500}).debug()
    w.S(100,270,'w',200,30).rest(0).fric(0)
    w.S(325,270,'g',230,30).rest(.3).fric(10)
    w.S(550,270,'r',200,30).rest(.7).fric(.3)
    p = w.mario()
    w.s.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f',
        'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
}


MARIO=function(){W({g:300})
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
        //if( p.relPos() < -100 ){setup()}

    })

    w.S(200,500,'w',100,100 )
    w.S(240,450,'w',180,30 )
    w.S(420,500,'y', 180,30)
    w.S(560,450,'y',300,30)
    w.S(600,500, 'y',180,30)
    w.S(960,450,'w',300,30 )
    w.S(900,500, 'w',180,30 )

    w.goomba(400).fric(0)

}

SHOOTER=function(){W({g:0}) //w.startKilling()


    p = w.addMe().XY(800, 300).angDamp(10000)

    w.addTim(7)

    w.beg(function(cx){ //not working
        cx.with('bullet', 'tim', function(t){t.B().kill()})
        cx.with('bullet', p, function(){this.B().kill()})
        cx.with('tim', p, function(){ p.kill() })
    })


    $.click(function(e){

        var x = e.pageX-p.X(),
            y = e.pageY-p.Y(),
            rot,
            adj

        rot = Math.toDegrees(Math.atan(y/x))

        adj = x>0?90:270

        p.rot(rot+adj).I(x/20,y/20)

        w.bullet(
            abovePlayerGlobally(p)
        ).I(x/40, y/40).bS('sun',.2)

    })

    //to do:  maybe u only get 10 bullets ever.. so u must chase them :) (only way to kill badguys)

}






THRUSTER = function(){W({ g:0})   //clear:false,  bg: 'space.jpg' })

    w.S(400, 200,'s', 40,40)

    p = w.player(300,300,'thrust').aD( 10000 )

    w.addTim(3)

   setInterval( function(){
       w.bobom(R(300), R(300))
   }, 3000) //w.s.clear()

    w.beg(function(cx){
        cx.with('bullet', function(f){if(f.B()!=p){this.B().kill()}})
        cx.with('bullet', 'tim', function(t){t.B().kill()})
    })


    $.space( function(){
      w.bullet( abovePlayerGlobally(p) )
          .bS('me', 0.1)
          .I( p.GetWorldVector(V(0, -100)).div(20) )
    })


}


JUMP=function(){w = b2d.W({g:300}).debug()


    cjs.tick(function(){$l( p.onGround )})
}

JUMPER=function(){W(300)
    w.S(100,570,'w',200,30).rest(0).fric(0)
    w.S(325,570,'g',230,30).rest(.3).fric(10)
    w.S(550,570,'r',200,30).rest(.7).fric(.3)
    w.S(100,400,'g',230,30).rest(.3).fric(10)


    w.plat([800,300,100],
        [260,240,60],

        [550,250,100],
   [1350,550,100],
  [300,200,100],
  [300,500,60,30],
  [150,400,60,30])

    p = w.jumper()

    cjs.tick(function(){$l(p.onGround)})

}

WARPER=function(){W().P(200,100)


    w.S(500,600,'s',30,200)
    w.S(600,600,'s',30,200)
    w.S(550,580,'s', 100,20).K('warp')
    w.D(650,580,'d', 100,20).K('tramp')


    makeCar=function(){
        var car = w.rect(240,350,90,30)
        w.rev(    w.circ( 300, 400, 30  ),  car  ).mot(4)
        w.rev(  w.circ( 200, 400,30),  car    ).mot(4)
        return car}
    makeCar()

    p.warp=function(){this.XY(200,100)}
    p.coll('tramp', function(){  p.I(0, -650)  })
    p.coll('warp', function(){   p.warp()  })

}




GREENGUY=function(){W({g: 0})

    w.greenGuy(100,100)
    w.greenGuy(200,200)
    w.greenGuy(300,300)

}




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

w.greenGuy = function(x,y){
    x=N(x)?x:100; y=N(y)?y:100

    var that=this,
        size=20,

        b= that.dyn(x,y).K('greenGuy'),

        centFix = b.rect(20,20).K('center').rest(2),

        f = b.rectSensor(size, size)

    setInterval(function(){f.kill(); size += 4; f= b.rectSensor(size, size)}, 500)

    that.beg(function(cx){var fix

        fix = cx.with('center', 'bullet')

        if(fix){
            if(cx.A() == centFix){size=20;b.linVel(0).angVel(0)}
            if(cx.B() == centFix){size=20;b.linVel(0).angVel(0)}
        }
    })


    return b}


w.gG = w.greenGuy = function(x,y){var w=this,

    x=_.tN(x,w.hW), y=_.tN(y,w.hH),  z=80,

    gG = w.D(x,y, 'gG'),

    shell = gG.rec('g', z, z, '-'),

    core = gG.rec('r', 25, 25)

    core.coll('pop', function(){
        z=0

        gG.lV(0).aV(0)

    })



   // shell.bS(shell.img = w.s.rec('g', z, z))

   // core.bS(core.img= w.s.rec(  'o', 25, 25) )


    // core = gg.rect(20,20).K('core'),
    // core.C('z')
    // .K('core')


    I(500,function grow(){z += 4
        shell.kill()

        shell = gG.rec('g', z, z, '-')  // shell.bS(   shell.img = w.s.rec('g', z, z) )

        w.back(shell)

    })





    return gg
}




GREEN=function(){W({w:'@',g:0}).C('w')

    y= w.ship(400,200).K('pop').img('me')
    //mem leak?
    w.gg(400,400)


}


COINWARP=function(){W({g:0, w:0})

    score=0
    badScore=0


   // p = w.ship().K('player pop').warp()

     p= w.player(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()

     gg = w.greenGuy( 300,300 ).warp()

    //setInterval(function(){w.coin()},  1000)


/*

    w.beg(function(cx){var fixt
        cx.with('coin','player', function(){this.B().kill()
            score++})
        cx.with('coin','greenGuy', function(){
            this.B().kill()
            badScore++
        })
    })
*/

    // w.coll('coin','player', function(){this.B().kill(); score++})
    // w.coll('coin','gg', function(){this.B().kill();badScore++})


     /*


    // w.class('coin')
    //   .with('player', function(c){c.setDestroy();score++})
    // .with('greenGuy', function(c){c.setDestroy();badScore++})


    w.class('coin').with({
        player: function(){score++; return true},
        greenGuy: function(){badScore++; return true}
    })

    */

   setInterval(function(){w.s.pen( score + ' / '+ badScore)}, 3000)

}


