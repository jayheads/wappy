w=p=b2d.World.prototype
///////////////
///////////////




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

                 if(!f.isSen() )   {
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
    ship = this.dyn(x,y)

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

        bullet=w.circ(
                y.X() + dist.x,
                y.Y() + dist.y,
            6,
            'w'
        ).K(kind).addClass('bul bullet')

        bullet.I( y.GetWorldVector( V(0, -100) ).div(4) )

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

    return ship.den(.5).K('ship')
}

w.ship = function(x,y){x=N(x)?x:300; y=N(y)?y:x

    return this.yShip(x,y).thrustControl().shootOnSpace().damp(2)
}


w.webMe=function(x,y){


   sw = cjs.stopWatch()


    var p= this.addMe(4).XY(x,y).rest(0).den(.1).fric(100).fixRot().K('player')


    p.isConnected=function(){var res, that=this
        if( !A( this.webs )){ return false }
        res = _.findWhere( that.webs, {connected:true} )
        return true && res && true}
    p.bulRight=function(x,y){
        var bul = this.wor().circ(this.X()+80, this.Y()-20, 6, 'w')
        if(N(y)){bul.I(x,y)}
        return this}
    p.bulLeft=function(x,y){

        var bul = this.wor().circ(this.X()-80, this.Y()-20, 6, 'w')

        if(N(y)){bul.I(x,y)}

        return this}

    p.getTime = function(){var p=this,  time =  p.shotClock()
        p.shotClock.reset()

        return time}

    p.getForce = function(){

        var time = p.getTime(),

            force =  (time > 2500) ? 2000 : (time > 500)? time - 500: 0

        force = force  / 30

        if( force > 66){force = 66}
        return force}
    p.shootRight=function(){
        var  force = this.getForce(),
            iX= 100-(force*1.5),
            iY= -force
        //$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
        this.bulRight(iX,iY)}
    p.shootLeft=function(){
        var  force = this.getForce(),
            iX= -100 + (force*1.5),
            iY= -force

        //$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
        this.bulLeft(iX, iY)

    }

    return p}






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
w.coin = function(x,y){var w=this
    x=N(x)?x:Math.random()* 600
    y = N(y)?y:Math.random()* 300
    return w.circ(x, y, 6, 'yellow').K('coin').rest(0).den(0).warp2().linDamp(0).I((Math.random()* 15)-5,(Math.random()* 15)-5)}
w.stars=function(num){var w=this,x,y
    num=N(num)?num:30
    _.times(num, function(){
        x= (Math.random() * 1000) - 500
        y = (Math.random() * 800) - 400
        w.circ(x, y, 2,'white').den(0).rest(2)
    })

return this}


w.sun=function(x,y){
    x=N(x)?x:300
    y=N(y)?y:150

   return this.S(300,150, 20,'p',10).den(1).rest(.5).bindSprite('sun',.2)

}

w.startKilling=function(){var that=this

    cjs.tick(function(){

        that.each(function(body){

            if(body.is('destroy')){

                body.K('destroyed')
                body.kill()
            }
        })
    })

    return this}
w.addTim=function(num){
    var that=this
    if(U(num)){return that.ball().K('tim').bindSprite('guy', .3)}
    _.times(num, function(){that.addTim()})
    return this}
w.platform2  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.S(x,y,W,H).r(0).K('platform')

}
w.plat = w.platform  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.body(   b2d.stat(x,y),  b2d.poly(W,H).r(.3)

    ).K('plat platform')

}
w.bullet=function self(x,y,r){//radius






//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}

    var bullet

    // can pass in (x,y or {x:x,y:y}), and radius
    if( O(x) ){
        r=y; y=x.y; x=x.x}
    x = x || 100
    y = N(y) ? y : x
    r = r || 10

    bullet= this.B(x,y,r)

    bullet.addClass('bullet bul').K('bullet')

    return bullet}

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

    var z= w.K(x,y, 80,140) //make sensor?
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
        w.fireBall(x+50, y,'l')}

    z.fireBallsAtInt=function(ms){var z=this

        setInterval(function(){
            z.fireBalls()
        }, ms)
    return this}


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
w.ramp=function(x, y, wd, h, rot){

    x = x || 300
    y = y || 300
    wd = wd ||100
    h = h || 100
    rot = rot|| 10//Math.toRadians(45)

    var ramp =  this.S(x, y,  wd, h) .rot(rot)
        ramp.bindSprite2( cjs.rect(wd, h,'yellow')).fric(1)
return ramp}


w.ramps=function() {

    this.ramp(400, 350, 200, 300, 100)
    this.ramp(500, 350, 300, 300, 60)
    this.ramp(600, 350, 200, 300, 100)
    this.ramp(700, 350, 300, 300, 60)
    this.ramp(800, 350, 200, 300, 100)
    this.ramp(1000, 350, 300, 300, 60)
    this.ramp(1030, 350, 200, 300, 100)
    this.ramp(1200, 350, 300, 300, 60)
return this}
w.goomba=function(x,y){
    y=N(y)?y:100
    w.box(x,y).bindSprite('guy').K('goomba')

}
w.bobom=function(){

    var that=this,
        bobom = this.dyn( 100, 100),
        body = bobom.poly(20).den(1),//.rest(1)

        sensor =   bobom.poly(25, 5, 30, 0,'-')




    sensor.coll('player',function(){this.B().kill()})



    return bobom

}
w.link = function self(x,y){
    var that=this,   l

    l= this.rect(x, y, 4, 20).den(4).rest(2)

    l.l= function(num){num=N(num)?num:1
        var lk

        _.times(num, function(){
            lk =  self(l.X(), l.Y()+15)
            that.rev(l, lk)
            l = lk })

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

    bouncer =  this.B(xloc, 200, 'b',200,20).fixRot()
        .den(0).rest(rest).fric(0)

    j = w.dist(
        w.S(xloc,280,'w', 20, 20), bouncer  ).len(115).freq(freq).damp(damp)
    w.S(xloc- 120,290,'b',40,300).fric(0)
    w.S(xloc+120,290,'b',40,300).fric(0)

return j}


w.bridge=function(x,y){var that=this
    x = N( x ) ? x : 400
    y = N( y ) ? y : 100

    var  b1 = this.S(x, y, 10),

        b2 = wood(),
        b3 = wood(),
        b4 = wood(),
        b5 = wood(),
        b6 = wood(),
        b7 = wood(),
        b8 = wood(),
        b9 = wood(),

        b10=this.circStat(x+700, y, 10)

    pieces([b1, b2],[b2,b3],[b3,b4],[b4,b5],[b5,b6],[b6,b7],[b7,b8],[b8,b9],[b9,b10])

    function wood(){return that.rect(100,100,90,60).den(1).fixedRot(true) }
    function piece(a,b){that.distColl(a, b).len(6).freq(5) }
    function pieces(){_.each(arguments,function(arg){piece(arg[0],arg[1])})}


}
w.elev= w.elevator =function(x){

    var elev={}

    elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
        .coll(function(){elev.flip()})
        .collWithKind('player', function(p){p.linVel(0)})

    elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)

    elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

    elev.speed = 2
    elev.j.mot(elev.speed)
    elev.flip =  _.throttle( function(){
        this.j.mot(this.speed*=-1)}, 200, {trailing:false})

    return elev}
w.greenGuy = function(x,y){
    x=N(x)?x:100; y=N(y)?y:100

    var that=this,
        size=20,

        b= that.dyn(x,y).K('greenGuy'),

        centFix = b.rect(20,20).K('center').rest(2),

        f = b.rectSensor(size, size)

    setInterval(function(){f.kill(); size += 4; f= b.rectSensor(size, size)}, 500)

    that.begin(function(cx){var fix
        fix = cx.with('center', 'bullet')
        if(fix){
            if(cx.A() == centFix){size=20;b.linVel(0).angVel(0)}
            if(cx.B() == centFix){size=20;b.linVel(0).angVel(0)}
        }
    })

    __greenGuy = b
    return b}
w.car =function(){

    var car = w.rect(150, 150,90,30, 'black')

    j1 = w.Rev(
        w.circ( 200, 150, 30 ,'red').fric(0).den(1),
        car
    )

        j1.speed(120)
    j1.EnableMotor(true)
    j1.SetMaxMotorTorque(1000000)

   j2 = w.Rev(  w.circ( 100, 150,30, 'blue').fric(0).den(1),  car   )//.speed(-500).torque(40).motor(true)

    j2.speed(150)
    //j2.EnableMotor(true)
    j2.SetMaxMotorTorque(1000000)

    return car}
w.roller =function(){

    var car = w.rect(250, 150,90,30, 'black')

    j1 = w.Rev(
        w.circ( 300, 150, 30 ,'red' ),
        car
    )

    j1.speed(6)
    j1.EnableMotor(true)
    j1.SetMaxMotorTorque(1000000)





    j2 = w.Rev(  w.circ( 200, 150,30,'red'),  car   ).speed(-500).torque(40).motor(true)

    return car}

w.rFlip=w.rightFlipper=function(x, y){var w=this
    var rightJoint = w.S(x, y,'r', 20),
        rightFlip = w.B(x, y,'b', 100,25).DBF(1,.5,0)
    var flipper =  w.rev(  rightJoint ,  rightFlip ,  0, 0, 40, 0  ).lim(-70, 30)

    flipper.flip=function(){
        rightFlip.I(-1000,0)}

    return flipper}

w.lFlip=w.leftFlipper=function(x, y){var w=this
    var  leftFlip = w.B(x,y,'b', 100,25).DBF(1,.5,0),
        leftJoint = w.S(x,y,'r',20)



    var flipper = __leftFlipper =  w.rev(  leftJoint ,  leftFlip ,  0, 0, 40, 0  ).lim(150, 250)

    flipper.flip=function(){leftFlip.I(1000,0)}

    return flipper}

w.flips=w.flippers=function(x,y,x2,y2){
    if(U(y2)){y2 = y  }
    if(U(x2)){ x2 = x + 230 }

    var  lf = w.lFlip(x, y),
         rf =  w.rFlip(x2, y2)

    var flip = function flip(){lf.flip(); rf.flip(); return flip}

    flip.left = lf
    flip.right = rf

    return flip}



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

    b=w.ball(x,y,60).bindSprite2(this.s.shape(x,y) )


    b.draw=function(frame){
        this.sprite.rG(['r','g'], [frame[0],frame[1]], 60).dc(0,0, 60)}

    b.h=b.health=100
    b.coll(function(){b.h--})
    b.K('badGuy')

    funcId = I(function update(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){
            clearInterval(funcId)
            b.kill()}
        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]}}
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

    x=N(x)?x:320
    y=N(y)?y:245

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


BADDIES=function(){w=b2d.W(); w.goomba(); w.bobom(200,200)}
ROLLERS=function(){b2d.levelScrollX()
    // _.times(3, function(){w.roller()})
    setInterval(function(){w.roller()}, 1000)
    p.X(1750)
}

RACE=function(){b2d.levelScrollX()
    car = w.car()
    w.dist(p, car).len(0)
    floor.fric(.1)

}
