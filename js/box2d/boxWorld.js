b2d.world =b2d.W = function(a,b){

    var w = new b2d.World(a, D(b)?b:false)

   // w.flags={}

   // w.beginHandlers=[]
   // w.endHandlers=[]
   // w.preHandlers=[]
   // w.postHandlers=[]

    w.startListening()

    return w}







w= b2d.World.prototype




w.body = w.A = w.addBody= w.createBody= function(bodyDef, fixDef){//w.a = w.add   =

    //w.createBody = w.b  = w.cB=function(def){return this.CreateBody( def  || BodyDef()  )}

    var body

    body = this.CreateBody(bodyDef)

    if(fixDef){

        if(A(fixDef)){



        _.each( b2d.fixtParse(fixDef),



            function(fd){
                body.createFixture(fd)
            } )

        }



    else { body.createFixture(fixDef) }

    }

    return body}



w.dyn=w.dynamic=function(x, y, fixtDef){var body
    if( O(x) ){fixtDef=y; y=x.y; x=x.x}
    x = N(x)?x: 500
    y = N(y)?y: 250
    body = this.A(b2d.dynamicDef(x,y), fixtDef)
    return body}


w.stat=function(x, y, fixtDef){var body
    if( O(x) ){fixtDef=y; y=x.y; x=x.x}
    x = N(x)?x: 500
    y = N(y)?y: 250
    body = this.A(b2d.staticDef(x,y), fixtDef)
    return body}


//destroy
w.destroyBody = w.destroy = w.dB=function(a){ this.DestroyBody(a); return this }
w.destroy = w.destroyAll = w.destroyAllBodies=function(){
    return this.eachBody(function(b){ this.destroy(b)  })}


//fetch all
w.getBodyList = w.bL =function(){

    return this.GetBodyList()

}
//fetch at point
w.queryPoint=function(func,x,y){



    this.QueryPoint(

        function(f){

            _fixt = f
            _body = _fixt.GetBody()
            func(f)
        },

        V(x,y,'-')
    )

    return this}

w.getBodyCount = w.bC = w.gBC=function(){  return this.GetBodyCount()  }
w.getGroundBody = w.gB =w.gGB=function(){  return this.GetGroundBody()  }


w.queryAABB=w.Q=w.qAB=function(a,b){//= w.q
    this.QueryAABB(a, b); return this
}


w.getBodyAtPoint=function(x, y){
    var selectedBody = null

    this.QueryAABB( queryFunc,
        AB( x-.001, y-.001, x+.001, y+.001 )
    )




    return selectedBody? selectedBody: false

    function queryFunc(fxt){
        var fixtIsStatic =  fxt.getType( b2Body.b2_staticBody )
        if( !fixtIsStatic &&  fxt.testPoint( mX, mY )){

             // f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))

            selectedBody = fxt.gB()
            return false}
        return true}

}



w.eachBody= w.each= function( func, userData ){//=w.e=w.eB
    //can pass a cb to be run on EACH body
    //can also pass a uD to restrict cb to
    //run only on bodies with that uD

    var bodies = this.GetBodyList(), kind

    if(S(func)){kind=func; func=userData} else {kind = userData}

    _.times(this.GetBodyCount() - 1,
        function(){
            if( !kind || bodies.is(kind) ){ func(bodies) }
            bodies =   bodies.GetNext()})

    return this}




//events
w.eachClick = w.bodyClick=function(func){
    this.each(function(body){
        body.click(func)
    })
return this}





w.edge=function(a,b,c,d){


    edgeFixt=function(a,b,c,d){var f
        f = b2d.fixtDef()
        f.shape = new b2d.Shapes.b2PolygonShape()
        f.shape.SetAsEdge(V(a,b,'-'), V(c,d,'-'))

        return f
    }
    var edge = this.CreateBody(  b2d.staticDef(0,0))

    edge.CreateFixture( edgeFixt(a,b,c,d)  )

    return edge

}


w.ball= w.ba  =function self(x,y,r){var ball
    if(O(x)){r=y; y=x.y; x=x.x}
    x = x || 100
    y = N(y) ? y : x
    r = r || 30
    ball = this.dynamic(x,y,
        b2d.circDef(r))
    ball.K('ball')
return ball}



w.bump = w.bumper= w.baa =function(x,y,r){
    x = x || 100
    y = N(y) ? y : x
    r = r || 20
    return this.A(b2d.staticDef(x,y),b2d.circDef(r)).K('bumper')}
w.box = w.bi =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 50; H = N(H) ? H : W

    return this.A(   b2d.dynamicDef(x,y),    b2d.polyDef(W, H) ).K('box')

}
w.brick = w.bii =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.A(   b2d.staticDef(x,y),    b2d.polyDef(W, H).r(0)).K('brick')

}


  w.addCirc=function(x,y,radius, color){
      //specific to talkjs


    x=N(x)?x: parseInt(Math.random() *2200-1000)

    y=N(y)?y: parseInt(Math.random() *1600-1000)

    radius = N(radius)? radius: _.random(14)+8

    color = oO('c', color||$r())

    this.ball(x, y, radius).bindSprite2(
        cjs.circ(   radius,  color ).XY(  x,y)).linDamp(2)

}




w.circ =  function(x,y,radius, color){

    var wd = this.s.W(),
        ht=this.s.H()


    x= N(x) ? x: parseInt(Math.random() * (wd-100) )+60

    y= N(y)? y: 50

    radius = N(radius)? radius: _.random(14)+8

    color = oO('c', color||$r())

    return this.ball(x, y, radius).bindSprite2(
        cjs.circ(   radius,  color ).XY(  x,y)).linDamp(2)

}
//lin damp 2????
w.circStat =  function(x,y,radius, color){

    var wd = this.s.W(),
        ht=this.s.H()


    x= N(x) ? x: parseInt(Math.random() * (wd-100) )+60

    y= N(y)? y: 50

    radius = N(radius)? radius: _.random(14)+8

    color = oO('c', color||$r())

    return this.bump(x, y, radius).bindSprite2(
        cjs.circ(   radius,  color ).XY(  x,y)
    ).linDamp(2)

}




w.rect =  function(x,y, wd, ht, color){

    x= N(x) ?x: 200

    y= N(y)? y: 50

    wd = N(wd)? wd: 50

    ht = N(ht)? ht: wd

    color = oO('c', color||$r())

    return this.box(x, y, wd,ht).bindSprite2(
        cjs.rect(   wd,ht,  color ).XY(  x,y)).linDamp(2)

}


w.rectStat =  function(x,y, wd,ht, color){

    x= N(x) ?x: 200

    y= N(y)? y: 50

    wd = N(wd)? wd: 50

    ht = N(ht)? ht: wd

    color = oO('c', color||$r())

    return this.brick(x, y, wd,ht).bindSprite2(
        cjs.rect(   wd,ht,  color ).XY(  x,y)

    ).linDamp(2)

}

w.left=function(num){num=N(num)?num:4
    this.each(function(body){
        body.X(body.X()-num)
    })
}


w.horiz=function(num){

    num=N(num)?num:4


    this.each(function (body) {

        body.X(body.X() - num)
    })


}

w.vert=function(num){

    num=N(num)?num:4

    this.each(function (body) {

        body.Y(body.Y() - num)
    })


}





w.bindShape = function( shape, spr   ){

    this.stage.A( shape )

    cjs.tick(

        function(){   shape.XY(  spr.X(), spr.Y()    )    }

    )

}



w.makeWalls=function(walls){

    var width = this.canvas.width,
        height = this.canvas.height

    if(D(walls)){

        if (S(walls)) {
            window[  walls ]()}
        if (F(walls)) {
            walls()}
    }

    else {

        this.wall(height, width / 2, width, 40).K('floor')
        this.wall(0, height / 2, 40, height).K('rightWall')

        this.wall(width / 2, 0, width, 40).K('ceiling')
        this.wall(width, height / 2, 40, height).K('leftWall')
    }
}


w.wall  =function(x,y,W,H){ /// changed rest 0 -> .4

    x = N(x) ? x : 60;
    y = N(y) ? y : x
    W = N(W) ? W : 30;
    H = N(H) ? H : W


 var wall= this.stat(
     x, y,
        b2d.polyDef(W,H).rest(.4)
    )


    wall.K('wall')

return wall}







//plugins
w.addRandomBody = w.randomFixture=function(){
    var body= this.dynamic(Math.random() * 1000, 100,
        b2d.randomFixture())
    return body}

w.random=w.addRandomBodies=function(howMany){
    howMany=howMany||10; var that=this
    _.times( howMany, function(num){
        that.addRandomBody()})
    return this}

w.addTenBalls=function(num){
    num=num||10;var that=this
    _.times(num, function(i){
        that.ball(100 + (i*80), 200)})
    return this}

w.addHundBalls=function(num){num=num||100;var that=this
    _.times(num, function(i){
        that.circ( 100  +(i*8),  50, 10) })
    return this}










//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}

