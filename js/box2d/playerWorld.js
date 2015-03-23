w=p=b2d.World.prototype
w.footListener=function(){

    //footListener?
//sets b2d.onGround setter
//requires a body that has userData 'feet', and it simply see if it is colliding with anything


    b2d.onGround = false    // if make this local, graphics dissapear!?



    var listener = b2d.listener()

    listener.begin(function(cx){
        if(cx.with('feet')){
            b2d.onGround=true
        }})


    listener.end(function(cx){
        if(cx.with('feet')){b2d.onGround=false}

    })




    this.listen(listener)

    return this}
w.addMe=function(x,y, scale){//var bodyDef,head,foot,p

    scale = scale || 4   //? -> mini should be 4

    var bodyDef = b2d.dyn(x,y)

    var head

    var p = this.body(bodyDef , [

        head = b2d.poly(scale * 12.5, scale * 25).rest(0).fric(.1).den(.8),

          b2d.poly(scale*2, scale*10, 0, scale*9).K('feet').sensor(true),

        b2d.poly(scale*2, scale*6, 0, -scale*12).K('hat').sensor(true),
          b2d.poly(scale*8, scale*2,  scale*8, 0).K('right').sensor(true),
          b2d.poly(scale*8, scale*2,  -scale*8, 0).K('left').sensor(true)

    ]  ).K('p player')

    //p.fixtList().SetFriction(1)

    p.bindSprite('me', scale/10)


    //??
    p._direction = 'right'
    p.dir = p.direction =  function(dir){
        if(U(dir)){return this._direction}
        this._direction = dir
        return this}
    p.speed = 40
    p.moveInDir =  function(n){
        if (n == '-'){  return p.move( - p.speed )}
        n = N(n) ? n : p.speed
        if ( p.direction() ) {  p.aI(3,0) }  else {  p.aI(-3,0) }
        return p}

    return p}


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
w.player=function(scale, onEachTick, enemy){
    if(!N(scale)){
        enemy=onEachTick
        onEachTick=scale
        scale = 4}

    //cjs.watchKeys()

    //this.footListener()
     this.startKilling()

    var pl=this.addMe(scale), func
    if(S(onEachTick)){onEachTick=b2d.controls[onEachTick]}

    if(F(onEachTick)){

        cjs.tick(function(){
            onEachTick(pl, enemy) })
    }

    return pl}
w.platform2  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.A(   b2d.staticDef(x,y),    b2d.poly(W, H).r(0)).K('platform')

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
    bullet= this.dynamic(x, y, b2d.circDef(r))
    bullet.addClass('bullet bul').K('bullet')

    return bullet}
w.clouds=function(leftPoint, y){var that=this

    leftPoint = N(leftPoint)? leftPoint: 100

    y=N(y)?y:75

    _.times(100,function(){

        that.circStat(

                Math.random() * 400 + leftPoint,
            y,
                Math.random()*30

        )

    })

return this}
w.grass=function(x, y, len){x += len/2
    var grass = this.rectStat(x,y,len,20,'green').fric(.3).rest(.3)
    return grass}
w.ice=function(x, y, len){x += len/2
    var ice = this.rectStat(  x, y, len, 20, 'white').fric(0).rest(0)
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

    var ramp =  this.stat(x, y,  b2d.poly(wd, h) ).rot(rot)
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
        body = bobom.circ(20),

        sensor =   bobom.poly(25, 5, 30, 0,'-')


            body.den(1)//.rest(1)

    sensor.coll('player',function(){


       this.B().setDestroy()

    })



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

            $.kD('down', function(){
                that.DestroyJoint(j)
            })
        }})}
w.tramp=function(xloc, rest,freq,damp){

    var bouncer, j

    xloc= N(xloc)?xloc:290

    rest=N(rest)?rest:.75
    freq=N(freq)?freq:6
    damp=N(damp)?damp:0

    bouncer =  this.rect(xloc, 200, 200,20, 'pink')
        .den(0).fixedRot(true).rest(rest).fric(0)



    j = this.dist(
        this.rectStat(xloc,280, 20, 20,'white'), bouncer  ).len(115).freq(freq).damp(damp)

    this.rectStat(xloc- 120,290,40,300,'blue').fric(0)
    this.rectStat(xloc+120,290,40,300,'blue').fric(0)

return j}
w.bridge=function(x,y){var that=this
    x = N( x ) ? x : 400
    y = N( y ) ? y : 100

    var  b1 = this.circStat(x, y, 10),

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
w.rightFlipper=function(x, y){
    var rightJoint = w.circStat(x, y,20,'red'),
        rightFlip = w.rect(x, y, 100,25, 'blue')
    var flipper = __rightFlipper =  w.rev(  rightJoint ,  rightFlip ,  0, 0, 40, 0  ).lim(-70, 30)

    flipper.flip=function(){rightFlip.I(-120,0)}

    return flipper



}
w.leftFlipper=function(x, y){
    var  leftFlip = w.rect(x,y, 100,25, 'blue'),
        leftJoint = w.circStat(x,y,20,'red')



    var flipper = __leftFlipper =  w.rev(  leftJoint ,  leftFlip ,  0, 0, 40, 0  ).lim(150, 250)

    flipper.flip=function(){leftFlip.I(120,0)}

    return flipper}
w.flippers=function(x,y,x2,y2){
    if(U(y2)){y2 = y  }
    if(U(x2)){ x2 = x + 230 }

    var  lf = w.leftFlipper(x, y),
        rf =  w.rightFlipper(x2, y2)

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
w.badGuy=function(x,y){var that=this,

    b=w.ball(x,y,60)
        .bindSprite2(this.s.shape(x,y) )

    b.draw=function(frame){
        this.sprite
            .rG(['r','g'], [frame[0],frame[1]], 60)
            .dc(0,0, 60)}

    b.health=100

    b.coll(function(){b.health--})
    b.K('badGuy')

    funcId = I(update, 300)

    function update(){

        b.draw(frameByHealth(b ) )



        if(b.health<=0){
            clearInterval(funcId)
            b.kill()} //$l('dead')

        function frameByHealth(b){

            if(b.health<0){b.health=0}
            if(b.health>100){b.health=100}
            if(b.health<50){ return [ 1-((b.health/50)),1 ] }
            else {return [0, 1-((b.health-50)/50)  ]}

        }}


    return b}



w.marioWalls=function(){

    var width=600, height=300, gravity=400
    w.left =  left = w.rect(0, height / 2, 40, height, 'pink').stat().K('leftWall').fric(.5).rest(.5)
    w.right = right = w.rect(width, height / 2, 40, height).K('rightWall')
    w.floor =  floor = w.rect(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
    w.ceiling =  ceiling = w.rect(height, 0, width*5, 40, 'orange').stat().K('ceiling').fric(.2).rest(.2)

return this}
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

    ship.convex(color, [  [ -halfSide , halfSide ], [0, -side*2 ], [halfSide , halfSide ]  ])





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
        bullet = w.circ(y.X()+dist.x, y.Y()+dist.y,6, 'w').K(kind).addClass('bul bullet')
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





    return ship.K('ship')
}
w.ship = function(x, y){

    x=N(x)?x:300
    y=N(y)?y:x

  return this.yShip(x, y).thrustControl().shootOnSpace()
        .den(.5)

}
w.webMe=function(x,y){


    sw = cjs.stopWatch()


  var p= this.addMe(4).XY(x,y).rest(0).den(.1).fric(100).fixedRot(true).K('player')


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


    p.getTime = function(){
       var time =  this.shotClock()
        this.shotClock.reset()

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
w.goal=function(x,y){

    w.rect(x-20, y-15,  10, 40,  'y').stat()
    w.rect(x, y,  40,10,  'y').stat()
    w.rect(x+20,y-15,  10, 40,  'y').stat()

}
w.sensorBucket=function(x,y,kind){
    var w=this,sens

    x=N(x)?x:320
    y=N(y)?y:245
    kind=kind||'sensorBucket'

    w.rectStat(x, y+95, 320, 20, 200  , 'o')

    w.rectStat(x-150, y-15, 20, 200, 'o')
    w.rectStat(x+150, y-15, 20, 200, 'o')

    sens = w.rectSensor(x, y, 280, 170, 'b').K(kind)

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
BADDIES=function(){
    w=b2d.W()

    w.goomba()

    w.bobom(200,200)

}
ROLLERS=function(){b2d.levelScrollX()


    // _.times(3, function(){w.roller()})


    setInterval(  function(){
        w.roller()

    }, 1000)


    p.X(1750)

}
RACE=function(){b2d.levelScrollX()


    car = w.car()

    w.dist(p, car).len(0)


    floor.fric(.1)

}
