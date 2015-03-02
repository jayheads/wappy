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




w.addMe=function(scale){//var bodyDef,head,foot,p

    scale = scale || 4   //? -> mini should be 4

    var bodyDef = b2d.dynamicDef(100, 100)

    var head

    var p = this.A(bodyDef ,   [

        head = b2d.polyDef(scale * 12.5, scale * 25).rest(0).fric(.1).den(.8),

          b2d.polyDef(scale*2, scale*10, 0, scale*9).K('feet').sensor(true),

        b2d.polyDef(scale*2, scale*6, 0, -scale*12).K('hat').sensor(true),
          b2d.polyDef(scale*8, scale*2,  scale*8, 0).K('right').sensor(true),
          b2d.polyDef(scale*8, scale*2,  -scale*8, 0).K('left').sensor(true)

    ]  ).K( 'player' )




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
            if(body.is('destroy')){body.kill()}
        })
    })

}



w.addTim=function(num){
    var that=this
    if(U(num)){return that.ball().K('tim').bindSprite('guy', .3)}
    _.times(num, function(){that.addTim()})
    return this
}



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





w.meX=function(onEachTick,enemy){


    this.footListener()

    this.startKilling()

    var   func

    var bodyDef = b2d.dynamicDef(100,100)
    var fix1 =    b2d.polyDef(35,60).rest(0).den()
    var fix2 =    b2d.polyDef(10,30,0,40).uD('feet').sensor(1)

    me = p = player = this.A(bodyDef ,   [fix1 ,
        // fix2
    ]   ).K('player')

    p._direction = 1
    p.dir = p.direction = p.dr = function(direction){
        if(U(direction)){return this._direction}
        this._direction = direction
        return this}
    p.speed = 40
    p.moveX =  function(n){
        if (n == '-'){  return player.move( - player.speed )}
        n = N(n) ? n : player.speed
        if ( player.direction() ) {  player.aI(3,0) }  else {  player.aI(-3,0) }
        return player}
    p.fixtList().SetFriction(1)

    p.bindSprite('me', .25)

    if(S(onEachTick)){onEachTick=b2d.controls[onEachTick]}

    if(F(onEachTick)){

        cjs.tick(function(){onEachTick(player, enemy) })}

    return player}






p.platform  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.A(   b2d.staticDef(x,y),    b2d.polyDef(W, H).r(0)).K('platform')

}



w.platform  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W


    pd = b2.polyDef(W, H).r(0)

    pd.restitution = .3

    return this.A(

        b2.staticDef(x,y),pd


    ).K('platform')

}


p.bullet=function self(x,y,r){//radius


//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}

    var bullet

    // can pass in (x,y or {x:x,y:y}), and radius
    if( O(x) ){
        r=y; y=x.y; x=x.x}
    x = x || 100
    y = N(y) ? y : x
    r = r || 10
    bullet= this.dynamic(x, y, b2d.circDef(r))
    bullet.K('bullet')

    return bullet}






//clouds

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


w.ramp=function(x,y,wd,h,rot){
    return this.stat(x, y,  b2d.poly(wd, h) ).rT(rot)
        .bindSprite2( cjs.rect(wd, h,'yellow')).fric(1)
}

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


w.bobom=function(){var that=this
    bobom = this.A( b2d.dynamic(), [ [20], ['bobomWick',30,5,10,0].sensor() ])
    bobom.trig('bobomWick', function(){that.destroy()})
    return bobom.rest(1).den(1)}



w.link = function self(x,y){
    var that=this,   l

    l= this.rect(x, y, 4, 20).den(4).rest(2)

    l.l= function(num){num=N(num)?num:1
        var lk

        _.times(num, function(){
            lk =  self(l.X(), l.Y()+15)
            that.Rev(l, lk)
            l = lk })

        return l.K('leaf')}

    return l}


w.vine = function(x,y,len){len=len||10

    var that = this,
        base = w.link(x,y).stat(),
        l =  base.l(len)


    this.begin(function(cx){
        if(cx.with('player', 'leaf')){
            var j =  that.Rev(l, p.XY(l.X(), l.Y()))

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

