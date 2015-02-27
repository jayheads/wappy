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

        head = b2d.polyDef(scale * 12.5, scale * 25).rest(0),

          b2d.polyDef(scale*2, scale*6, 0, scale*12).K('feet').sensor(true),
          b2d.polyDef(scale*2, scale*6, 0, -scale*12).K('hat').sensor(true),

          b2d.polyDef(scale*8, scale*2,  scale*8, 0).K('right').sensor(true),
          b2d.polyDef(scale*8, scale*2,  -scale*8, 0).K('left').sensor(true)

    ]  ).K( 'player' )




    p.fixtList().SetFriction(1)

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

    this.footListener()
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



