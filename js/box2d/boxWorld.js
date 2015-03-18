b2d.Controllers = b2d.Dynamics.Controllers
b2d.Math = b2.Common.Math
b2d.Mat22 = b2d.Math.b2Mat22
b2d.Mat33 = b2d.Math.b2Mat33


b2d.wor = b2d.world =   function(a, b){

    if(U(a)){a=10}

    if(N(a)){a =  V(0, a) }

    var w = new b2d.World(a,   D(b)?b: true)

   // w.flags={}

   // w.beginHandlers=[]
   // w.endHandlers=[]
   // w.preHandlers=[]
   // w.postHandlers=[]

    w.startListening()

    return w}





w= b2d.World.prototype


w.chalk=function(){
    this.s.chalk.apply(this.s, arguments)
    return this}



//destroy
w.destroyBody = w.destroy = w.dB=function(a){ this.DestroyBody(a); return this }



w.destroy = w.destroyAll = w.destroyAllBodies=function(){var that=this

    return this.eachBody(function(b){

       that.destroy(b)

    })

}






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


w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount()
}



COUNT=function(){w=b2d.W()

    y= w.ship().XY(200,200)
    b= w.circ(300,300,50,'r')

    w.show(function(){return w.count()})}




w.getGroundBody = w.gB =w.gGB=function(){  return this.GetGroundBody()  }

w.Q=w.queryAABB=w.qAB=function(func, x1,y1, x2,y2){
    var AB = b2d.AB(x1,y1,x2,y2),
        num= 0,

    newFunc = function(fixt){num++

       return func(fixt, fixt.body(), num)
    }


    this.QueryAABB(newFunc, AB)
    return num}


TESTQ=function(){w=b2d.W()
    _.times(5, function(){w.randRects()})


    var func = function(f, b){  b.kill(); return true  }


   n= w.Q(func,  400,100,450,150)

    w.ship().XY(425, 125)

    w.pen(n + ' rects removed')

}



TRANSFORM=function(){var tf=null
    w = wor().debug()

    b = w.rect(100,100,100,200,'b')

    b2 = w.rect(200,200,100,150,'p')



   cjs.tick(function(){
       var trf = b.transform().toArr()

       if(tf){
           b2.SetTransform( b2d.tf(tf)  )
       }

       setTimeout(function(){
              tf=trf
        },1000)

    })




}

TESTPOINT=function(){var tf=null
    w = wor()

    b = w.rect(100,100,100,200,'b')



    p = w.rect(200, 200, 100, 150, 'p').stat().rot(20)

    p.fixt(

        b2d.poly(50,50,50,50, 20,'o' )
    )

    f = p.fixt()

    h = f.shape()

    hit=h.testPoint(  p.transform(),  V(200,200).div()) // true
    hit2= f.hit(200, 200, true)

}



w.click=function(func){

    $(w.s.HUD.canvas).click(function(e){

        func(e.pageX, e.pageY)

    })
return this}

w.getBodyAtPoint=function(x, y){var body = null

    this.QueryAABB(function queryFunc(fxt){

        if( !fxt.isStat() &&  fxt.testPoint(mX,mY)){

            // f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))
            body = fxt.body()
            return false}

        return true},

        b2d.AABB01(x,y))


    return body



};





(function worldCreateBodies(){var w=b2d.World.prototype

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


    w.bul= function(x, y ){var def,   body
        def=b2d.dynamicDef(x,y)
        def.bullet= true
        body = this.createBody(def)
        return body}

    w.polyBul=function(x,y, wd, ht, col){
        var bul = this.bul(x,y)
        bul.poly(wd,ht)

        if(col){
            bul.bindSprite2(

                cjs.rect(wd,ht, oO('c',col)).XY(x,y).a2(this.s)
            )
        }






        return bul}



    w.kin= function(x, y, fixtDef){var body
        if( O(x) ){fixtDef=y; y=x.y; x=x.x}
        x = N(x)?x: 500
        y = N(y)?y: 250
        body = this.A(b2d.kin(x,y), fixtDef)
        return body}

    w.stat=function(x, y, fixtDef){var body
        if( O(x) ){fixtDef=y; y=x.y; x=x.x}
        x = N(x)?x: 500
        y = N(y)?y: 250
        body = this.A(b2d.staticDef(x,y), fixtDef)
        return body}
    w.edge = function (a, b, c, d) {


        edgeFixt = function (a, b, c, d) {
            var f
            f = b2d.fixtDef()
            f.shape = new b2d.Shapes.b2PolygonShape()
            f.shape.SetAsEdge(V(a, b, '-'), V(c, d, '-'))

            return f
        }
        var edge = this.CreateBody(b2d.staticDef(0, 0))

        edge.CreateFixture(edgeFixt(a, b, c, d))

        return edge

    }
    w.ball = w.ba = function self(x, y, r) {
        var ball
        if (O(x)) {
            r = y;
            y = x.y;
            x = x.x
        }
        x = x || 100
        y = N(y) ? y : x
        r = r || 30
        ball = this.dynamic(x, y,
            b2d.circDef(r))
        ball.K('ball')
        return ball
    }
    w.bump = w.bumper = w.baa = function (x, y, r) {
        x = x || 100
        y = N(y) ? y : x
        r = r || 20
        return this.A(b2d.staticDef(x, y), b2d.circDef(r)).K('bumper')
    }
    w.box = w.bi = function (x, y, W, H) {//=brk=brick=

        x = N(x) ? x : 60;
        y = N(y) ? y : x
        W = N(W) ? W : 50;
        H = N(H) ? H : W

        return this.A(b2d.dynamicDef(x, y), b2d.polyDef(W, H)).K('box')

    }

    w.brick = w.bii = function (x, y, W, H) {//=brk=brick=

        x = N(x) ? x : 60;
        y = N(y) ? y : x
        W = N(W) ? W : 30;
        H = N(H) ? H : W

        return this.A(b2d.staticDef(x, y), b2d.polyDef(W, H).r(0)).K('brick')

    }

    w.brickSensor = function (x, y, W, H) {//=brk=brick=

        x = N(x) ? x : 60;
        y = N(y) ? y : x
        W = N(W) ? W : 30;
        H = N(H) ? H : W

        return this.A(b2d.staticDef(x, y), b2d.polyDef(W, H).r(0).sensor(true)).K('brickSensor')

    }
    w.addCirc = function (x, y, radius, color) {
        //specific to talkjs


        x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)

        y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)

        radius = N(radius) ? radius : _.random(14) + 8

        color = oO('c', color || $r())

        this.ball(x, y, radius).bindSprite2(
            cjs.circ(radius, color).XY(x, y)).linDamp(2)

    }

    w.circ = function (x, y, radius, color) {var ball, w=this

        // will err on random x,y.. dont like it. that should be with '*' (explicityly ONLY for something like this)
        var wd = this.s.W(), ht = this.s.H()
        x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
        y = N(y) ? y : 50
        radius = N(radius) ? radius : _.random(14) + 8


       ball = this.ball(x, y, radius).linDamp(2)

            .bindSprite2(

            this.s.cir(x, y, radius, color)
        )


        ball.C=function(col){

            this.sprites[0].remove()
            this.sprites= [ w.s.cir(x, y, radius, col)]

        }

        return ball

    }



    w.queryXY=function(func,x,y){var w=this

        w.QueryAABB(func,

            b2d.AABB01(x,y)

        )
    return this}

    w.bodyAt =  w.bodyAtPoint=function(x,y,func,kind){
        var w=this,
            body= null
        if(O(x)){
        kind=func;func=y;y= x.y;x= x.x}
        this.queryXY(function(f){var b = f.B()

            if(U(kind)||f.beOf(kind)){

                if(f.testPoint(x,y)){
                    body = b; return false
                }
            }



            return true

        },x,y)


        if(!body){return false}
         if(F(func)){return func(body)||w}
        return body

    }




    w.dynAt =  w.at =  w.bodyAtPoint=function(x,y){ var body= null,  func
        func=function(f){

            if( f.isDyn()  &&   f.testPoint(x,y) ){body = f.B(); return false}
            return true}
        this.queryXY(func, x,y)
        return body

    }

    w.bug=w.debugDraw=function(){

         dd = b2d.debugDraw.apply(null, arguments)

        //this.scale = dd.scale()
        this.SetDebugDraw( dd )
        return this
    }



w.Z=function(scale){
    if(U(scale)){return this.scale}
    this.scale = scale
return this}

    w.got=function(){var args=arguments,

  res = this.beg(function(cx){//trackClasses(cx)

        cx.got.apply(cx, args)

    })

    return this}




    w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
        stop1 = N(stop1) ? stop1 : 0
        stop2 = N(stop2) ? stop2 : 1
        col1 = oO('c', col1);
        col2 = oO('c', col2)
        return this.ball(x, y, r).bindSprite2(
            this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
                0, 0, 0, 0, 0, r).dc(0, 0, r))
    }
//lin damp 2????
    w.circStat = function (x, y, radius, color) {

        var wd = this.s.W(),
            ht = this.s.H()


        x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60

        y = N(y) ? y : 50

        radius = N(radius) ? radius : _.random(14) + 8

        color = oO('c', color || $r())

        return this.bump(x, y, radius).bindSprite2(
            cjs.circ(radius, color).XY(x, y)
        ).linDamp(2)

    }

    w.rect = function (x, y, wd, ht, color) {var that=this

        x = N(x) ? x : 200
        y = N(y) ? y : 50
        wd = N(wd) ? wd : 50
        ht = N(ht) ? ht : wd
        color = oO('c', color || $r())

        return this.box(x, y, wd, ht).bindSprite2(

            h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)

        ).linDamp(2)

    }



}())









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






w.rectSensor =  function(x,y, wd,ht, color){

    x= N(x) ?x: 200

    y= N(y)? y: 50

    wd = N(wd)? wd: 50

    ht = N(ht)? ht: wd

    color = oO('c', color||$r())

    return this.brickSensor(x, y, wd,ht).bindSprite2(
        cjs.rect(   wd,ht,  color ).XY(  x,y).opacity(.5)

    ).linDamp(2)

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

      this.floor=  this.rect(height, width / 2, width, 40,'o').stat().addClass('wall floor').K('floor')
       this.right= this.rect(0, height / 2, 40, height,'o').stat().addClass('wall side rightWall right').K('rightWall')
       this.roof= this.ceiling = this.rect(width / 2, 0, width, 40,'o').stat().addClass('wall ceiling roof').K('ceiling')
      this.left=  this.rect(width, height / 2, 40, height,'o').stat().addClass('wall side leftWall left').K('leftWall')
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





w.verts= function(x, y, arrs){

    var bod = this.dyn(x,y)

    _.each(arrs, function(arr){

        bod.convex( arr[0],  _.rest(arr)  )
    })

return bod}
w.vertsKin= function(x, y, arrs){

    var bod = this.kin(x,y)

    _.each(arrs, function(arr){

        bod.convex( arr[0],  _.rest(arr)  )
    })

    return bod}


//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}



w.dot=function(){

    this.s.dot.apply(this.s, arguments)

return this}

w.pen=function(){

    this.s.pen.apply(this.s, arguments)

    return this}

w.fadeTitle=function(text){text = text || 'no text provided, yo'

    setTimeout(function(){

        t= w.s.text(text, 50, 'white', 600, 100)
        t.tween([{a:0, sxy:0}, 2000])
        setTimeout(function(){ t.remove() }, 1000)

    }, 500)

return this}
w.flash=function(){

    this.s.flash.apply(this.s, arguments)

    return this}




//EACH
w.eachBody= w.each= function( func, userData ){//=w.e=w.eB
    //can pass a cb to be run on EACH body
    //can also pass a uD to restrict cb to
    //run only on bodies with that uD

    var bodies = this.GetBodyList(), kind, body

    if(S(func)){kind=func; func=userData} else {kind = userData}

    while(bodies){

        body = bodies
        bodies = bodies.next()

            if( !kind || body.is(kind) ){ func(body) }


        }

    return this}


w.eachDyn=function(func){
    w.eachBody(function(b){

        if(b.isDyn()){func(b)}
})



return this}







w.C = function(color){
    this.s.c.C(color)
return this}


//events
w.eachClick = w.bodyClick=function(func){
    this.each(function(body){
        body.click(func)
    })
    return this}
//moves all bodies ?!!
w.left=w.horiz=function(num){
    num=N(num)?num:4
    this.each(function(b){b.X( num,'-' )})}
w.up=w.vert= function(num){
    num=N(num)?num:4
    this.each(function(b){b.Y(num,'-')})}

//link for distance ropes

w.ropePiece = w.distLink=function(x, y){var link

  link = w.rect(x, y,3,5,'w').angDamp(10).rest(0)

    return link}


//add random bodies

w.randRects  = function(ob){var that=this

    ob=ob||{}

    var y = ob.y || 0,
        z= N(ob.z)?ob.z:1

    _.times(30, function(i){that.rect(

            Math.random() * 1100+20,
        (Math.random() * 150+40)+y,



        (Math.random()*30+15)*z,
            (Math.random()*30+15)*z

    ).stat().K('randomRect')})
return this}





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

w.G=function(x, y){var v, currGrav = this.GetGravity()

    if(U(x)){return  currGrav}

    if(N(x)){v= N(y)? V(x,y): V(0, x)}
    if(x=='flip'){
       v =V( -currGrav.x, -currGrav.y)
    }

    w.SetGravity(v)
    return this}


w.show=function(showWhat){var world=this, what


    I(function(){


        what =  F(showWhat)?showWhat(world): window[showWhat]

        what = F(what)? what(): what

        world.pen( what )

    }, 200)

   TEST=function(){w=b2d.W()
        num = 0
        w.show( function(){return num} )}

}



WORLD=function(){w=b2d.W({g:0})

    b = w.ball(100,100,50)
    b1 = w.ball(100,200,40)

    // w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)


    w.AddController
    w.CreateController
    w.DestroyController

    w.GetGroundBody



    w.GetProxyCount
    w.SetDestructionListener
    w.SetBroadPhase
    w.SetWarmStarting
    w.SetContinuousPhysics
    w.IsLocked


    // proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
    //  pair - a record created when two proxies overlap.
    //  manifold - the set of contact points for two convex shapes.


    w.locked=function(){
        return b2World.e_locked != 2
    }

    w.m_island
    w.m_flags




}
//  b2d.Dynamics.Controllers.b2ControllerEdge

w.co = function(co){

    this.AddController( co )
return this}
w.acc = function(){

  var  co  =  b2d.acc.apply(null, arguments)

    this.co(   co  )

return co}
w.buoy = function(){

    var  co  =  b2d.buoy.apply(null, arguments)

    this.co(   co  )

    return co}
w.force = function(){

    var  co  =  b2d.force.apply(null, arguments)

    this.co(   co  )

    return co}
w.tensor = function(){

    var  co  =  b2d.tensor.apply(null, arguments)

    this.co(   co  )

    return co}

w.grav = function(g, wantFasterR1){

    var  co  =  b2d.grav.apply(null, arguments)
    if(N(g)){co.g(g)}
    if(wantFasterR1){co.r1()}
    this.co(co)

    return co}


w.bindCo=function(){var args=arguments

    this.beg(function(cx){

    cx.bindCo.apply(cx,args)

    })

return this}

b2d.acc= function(x,y){
    var co=new b2d.Dynamics.Controllers.b2ConstantAccelController()
    if(N(x)){co.V(x,y)}
    return co}
b2d.buoy= function(nX,nY,lD,aD){var co = new b2d.Dynamics.Controllers.b2BuoyancyController()
    nX  =N(nX)?nX:  0; nY  =N(nY)?nY: -1; lD  =N(lD)?lD:  2; aD  =N(aD)?aD:  1
    return co.norm(nX,nY).drag(lD,aD)}
b2d.tensor= function(a,b,c,d){
   var co= new b2d.Dynamics.Controllers.b2TensorDampingController()
    return co}

b2d.force= function(x,y){x=N(x)?x:0;y=N(y)?y:0

    var co = new b2d.Dynamics.Controllers.b2ConstantForceController()

    co.V(x, y)

return co}

b2d.grav= function(a,b,c,d){
    var co= new b2d.Dynamics.Controllers.b2GravityController()
    return co}


co = b2d.Dynamics.Controllers.b2Controller.prototype


co.body = function(onOrMoreBodies){var co=this
    _.each(arguments, function(b){

        co.AddBody( b2d.toBody(b) )

    })
    return this}


co.remove = function(b){this.RemoveBody(b);return this}
co.next = function(){return this.GetNext()}
co.wor=function(){return this.GetWorld()}
co.bods = co.bodies = co.list= co.bodyList = function(){return this.GetBodyList()}


co.step=function(){this.step();return this}




//acc
aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
aCo.V = function(x,y){//getter is a waste!  counterproductive... think about it! :).. but for consistency..??? nah i can do better

     //applies 'gravity' by default
   this.A = U(x)? V(0,10): V(x, y)
return this}


//buoy
bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype
bCo.norm=function(x,y){this.normal.Set(x,y); return this}
bCo.os=function(os){this.offset=os;return this}
bCo.useDen=function(u){this.useDensity=u;return this}
bCo.den=function(d){
    var g=G(arguments),d=g[0]
    this.density=d;
    if(g.N){this.useDen(true)}
    return this}
bCo.linDrag=function(lD){this.linearDrag=lD||0;return this}
bCo.angDrag=function(aD){this.angularDrag=aD||0;return this}
bCo.drag=function(lD, aD){return this.linDrag(lD).angDrag(aD) }


//force
fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
fCo.V = function(x,y){
    //applies 'gravity' by default
    this.F = U(x)? V(0,10): V(x, y)
    return this}


//tensor
tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
tCo.axis = function(axis){
   this.SetAxisAligned(axis)
    return this}

//grav
gCo = b2d.Dynamics.Controllers.b2GravityController.prototype

gCo.g = gCo.grav = gCo.V = function(g){//applies 'gravity' by default
    this.G= N(g)?g : 1
    return this}


gCo.inv=function(inv){this.invSqr=inv;return this}
gCo.r2 = function(){return this.inv(true)} //this is default
gCo.r1 = function(){return this.inv(false)}


ACC=function(){b2d.W({g:0})  // Imagine that you have gusts of wind blowing sideways…  you can add your objects to a Contoller and have them pushed sideways…  then when the wind passes you could remove them from that controller.
    // now just add and remove bodies to the controller!!


    b = w.box(300, 300, 50, 60).den(1)

    co = w.acc(5,5).body(b)

    // co.A = V(x, y)

    added = true

    w.C('g')


    I(onInt, 2000)

    function onInt(){

        if(shouldChange()){
            if(added==true){added=false;w.C('u');co.remove(b)}
            else {added=true;w.C('g');co.body(b)}}



    }

    cjs.tick(function(){
        b.F(-10,-10)
    })

    function shouldChange(){return Math.random()>.5}



}
BUOY=function(){w=b2d.W().debug()

    w.rectStat(320,480,640,20)
    w.rectStat(320,340,320,20)
    w.rectStat(170,230,20,200)
    w.rectStat(470,230,20,200)
    w.rectSensor(320,245,280,170)

    co=w.buoy(0,-1,5,2).os(-6).den(2)

   cjs.tick(function(){

       w.eachDyn(function(b){


          if( b.co() ){ co.remove(  b  ) }


          for (var c=b.cx();c;c=c.next){

              var cx=c.contact
              if(cx.A().IsSensor()&& !cx.b().co() ){
                  co.body(cx.b())}
              if(cx.B().IsSensor()&&!cx.a().co()){co.body(cx.a())}
          }



    })})



    I(function(){w.circ(300,40,8,'r').den(1)})


}

CONTROLCHANGE=CHANGESCONTROLLERBASEDONSENSORBRILLIANT=function() {

    //gives u a controller-edge, which is a body-controller pair
    //it is linked both to other bodies for that controller..
    //and to other controllers of that body!!!

    //lets focus on other bodies first....

    w = b2d.W({
        //walls:0
    })//.debug().C('w')

    s1 = w.sensorBucket(320,300, 's1')
    s2 = w.sensorBucket(700,300, 's2')

    co1 = w.acc(5, -5)
    co2 = w.acc(-5, 5)

    I(function(){

        // aCo.body(

        w.circ(300,100,10,'y')

        w.circ(760,100,10,'b')
        // )

    })


    setInterval(function(){
        b.bc() //default is to kill all in its 'controller-space' (except itself)
    }, 5000)



    w.beg(function(cx){var fixt

        if(fixt = cx.with('s1')){

            $l('s1' + fixt.body().K())

            fixt.body().cancel()
            co1.body( fixt.body() )
        }


        if(fixt = cx.with('s2')){
            $l('s2' + fixt.body().K())
            fixt.body().cancel()
            co2.body(fixt.body())}})




    w.circ(150, 100, 50, 'w').den(1)
    w.circ(200, 100, 50, 'd').den(1)
    w.circ(250, 100, 50, 'r').den(1)
    b= w.ship(100,500)
    w.circ(350, 100, 50, 'g').den(1)
    w.circ(400, 100, 50, 'o').den(1)
    w.circ(450, 100, 50, 'w').den(1)

}

b2d.toBody=function(fixtOrBody){

   if( b2d.isBody(fixtOrBody) ){return fixtOrBody}

    if( b2d.isFixt(fixtOrBody) ){return fixtOrBody.body()}

    return false
}



CONTLIST=function(){//gives u a controller-edge, which is a body-controller pair
    //it is linked both to other bodies for that controller..
    //and to other controllers of that body!!!
    //lets focus on other bodies first....

    w = b2d.W({}).debug().C('p')
        .bindCo('co1','co2')
        .end(function(cx){var fixt
        if(fixt=cx.with('co2')){fixt.cancel()}})

    co1 = w.acc(0, -50)
    s1 = w.sensorBucket(320, 300, 'co1')
    co2 = w.acc(0, -50)
    s2 = w.sensorBucket(700, 300, 'co2')

    w.circ(150,100,30,'w').den(1)
    w.circ(200,100,30,'d').den(1)
    w.circ(250,100,30,'r').den(1)
    w.circ(350,100,30,'g').den(1)
    w.circ(400,100,30,'o').den(1)
    w.circ(450,100,30,'w').den(1)

    setTimeout(function(){y=w.ship(300,50)
        setInterval(function(){
            w.circ(300,100,10,'y')
            w.circ(760,100,10,'b')
            y.bc('kill')}, 1000)}, 500)

}


UPDOWN=function(){w = b2d.W({g:0}).debug().C('g')
    y = w.ship(300, 50).linDamp(5)


    co1 = w.acc(0, -50)
    co2 = w.acc(0, 50)

    s1 = w.rectSensor(250, 300, 600, 600, 'o').K('co1')
    s2 = w.rectSensor(950, 300, 600, 600, 'o').K('co2')


   w.bindCo('co1', 'co2')

    w.beg(function(){


    })

    w.end(function (cx) {var fixt

        if(fixt =  cx.with('co1')){
           // fixt.cancel()
        }

        if(fixt =  cx.with('co2')){
           // fixt.cancel()
        }

    })

    _.times(20, function(){

        w.circ(300, 300, 30,'b')
    })

}

GRAVTRAP=function(){w=b2d.W({g:0,walls:0}).C('e').pen('welcome to grav controller')


    y= w.yShip(300,300).thrustControl().shootOnSpace()
        .den(1).linDamp(10)

    gCo = w.grav().body(y,

     w.circ(320,300, 20, 'b').den(1),
     w.circ(300,320, 30, 'r').den(1),
     w.circ(340,300, 40, 'x').den(1),

        w.circ(300,340, 50, 'c').den(1),

        w.circ(320,320, 60, 'l').den(1)

    )






}
GRAVR=function(){w=b2d.W({g:0,walls:0}).C('e').pen(
    'welcome to grav controller - top balls r1, bottom r2(default)')


    y= w.yShip(300,200).thrustControl().shootOnSpace()
        .den(1).linDamp(10)

    r = 40

    gCo = w.grav(1, true).body(
        w.circ(100,600, r, 'b').den(1),
        w.circ(200,500, r, 'r').den(1),
        w.circ(300,400, r, 'x').den(1),
        w.circ(400,300, r, 'c').den(1),
        w.circ(500,200, r, 'l').den(1),
        w.circ(600,100, r, 'l').den(1)
    )


    gCo2 = w.grav().body(

        w.circ(700,600, r, 'b').den(1),
        w.circ(800,500, r, 'r').den(1),
        w.circ(900,400, r, 'x').den(1),
        w.circ(1000,300, r, 'c').den(1),
        w.circ(1100,200, r, 'l').den(1),
        w.circ(1200,100, r, 'l').den(1)

    )




}
GRAVG=function(){w=b2d.W({g:0,walls:0}).C('e').pen(
    'welcome to grav controller - top has g:2, bottom has g:1 (default)')

    y= w.yShip(300,200).thrustControl().shootOnSpace().den(1).linDamp(10)

    r=40

    gCo = w.grav(2).body(
        w.circ(100,600, r, 'b').den(1),
        w.circ(200,500, r, 'r').den(1),
        w.circ(300,400, r, 'x').den(1),
        w.circ(400,300, r, 'c').den(1),
        w.circ(500,200, r, 'l').den(1),
        w.circ(600,100, r, 'l').den(1)
    )

    gCo2 = w.grav().body(

        w.circ(700,600, r, 'b').den(1),
        w.circ(800,500, r, 'r').den(1),
        w.circ(900,400, r, 'x').den(1),
        w.circ(1000,300, r, 'c').den(1),
        w.circ(1100,200, r, 'l').den(1),
        w.circ(1200,100, r, 'l').den(1)

    )




}
GRAVGR=function(){w=b2d.W({g:0,walls:0}).C('e').pen(
    'welcome to grav controller - top has g:1,r:1, bottom has g:2,r:2 -- pinks move OUTWARDS only on bottom?')

    y= w.yShip(300,200).thrustControl().shootOnSpace().den(1).linDamp(10)

    r=40

    gCo = w.grav(1,true).body(
        w.circ(100,600, r, 'b').den(1),
        w.circ(200,500, r, 'l').den(1),
        w.circ(300,400, r, 'x').den(1),
        w.circ(400,300, r, 'x').den(1),
        w.circ(500,200, r, 'l').den(1),
        w.circ(600,100, r, 'b').den(1)
    )

    gCo2 = w.grav(4).body(

        w.circ(700,600, r, 'b').den(1),
        w.circ(800,500, r, 'l').den(1),
        w.circ(900,400, r, 'x').den(1),
        w.circ(1000,300, r, 'x').den(1),
        w.circ(1100,200, r, 'l').den(1),
        w.circ(1200,100, r, 'b').den(1)

    )




}

FORCE=function(){w=b2d.W({g:0}).C('e')
    .pen('welcome to (const) force controller')
    fCo = w.force(1,0)
    aCo = w.acc(1,0)



b=w.circ(100,100, 20, 'b').den(1)
b1=w.circ(100,200, 40, 'b').den(1)

x=w.circ(100,300, 20, 'x').den(1)
x1=w.circ(100,400, 40, 'x').den(1)

    setTimeout(function(){
        w.C('d');

        fCo.body(b, b1)
        aCo.body(x, x1)

    },2000)



}

ACCVSFORCE=function(){w=b2d.W({g:0}).C('e')
    .pen('blue has constForce(1,0)  red has constAcc(1,0)')
    fCo = w.force(1,0)
    aCo = w.acc(1,0)



    b=w.circ(100,100, 20, 'b').den(1)
    b1=w.circ(100,200, 40, 'b').den(1)

    x=w.circ(100,300, 20, 'x').den(1)
    x1=w.circ(100,400, 40, 'x').den(1)

    setTimeout(function(){
        w.C('d');

        fCo.body(b, b1)
        aCo.body(x, x1)

    },2000)



}

TENSOR=function(){w=b2d.W({g:0}).pen(
    'welcome to tensor (damping) controller - the timing here is amazing!')

    //AMAZING TIMING!!!!

    co = w.tensor().body(
        w.ball(100,100).lV(10,20),
        w.ball(500,500).lV(-10,-20),
        w.ball(300,300).lV(-10,-20)
    )

}
TENSORNEVERSETTLE=function(){w=b2d.W({g:0}).pen('welcome to tensor (damping) controller')

    co = w.tensor()

    w.debug()
    y=w.ship()

    _.times(30, function(){

        co.body(

            w.circ(400,300, 20, 'w').lV(10,20).linDamp(0)

        )
    })

}









COEDGE=function(){w=b2d.W().debug()

    w.rectStat(320,480,640,20)
    w.rectStat(320,340,320,20)
    w.rectStat(170,230,20,200)
    w.rectStat(470,230,20,200)
    w.rectSensor(320,245,280,170)

    co=w.buoy(0,-1,5,2).os(-6).den(2)

    cjs.tick(function(){

        w.each(function(b){if(b.isDyn()){

       // if(b.co()){ co.remove(b) }

        b.eachCx(function(cx){

            // if one is a sensor AND the other has no controllers
            // then add the other one to the controller

           // if(cx.A().IsSensor() && !cx.b().co() ){ co.body(cx.b()) }
           // if(cx.B().IsSensor() && !cx.a().co() ){ co.body(cx.a()) }

        })



    }})})

   // I(function(){

     b =  w.circ(300,40,8,'r').den(1)



  c= b.cx()




   // })


}



//waterCanvas = w.s.shape().f('red',.2).dr(180,160,280,170).ef()


SENSORCONTROL=function(){w = b2d.W({g:3}).debug()



    w.rectSensor(300,300, 40,40, 'o')
    w.rectSensor(540,300, 40,40, 'o')

    w.rectSensor(780,300, 40,40, 'o')


    y = w.ship(300,100).linDamp(2)

    aCo = w.acc(1000, -1000)


    w.beg(function(){
        aCo.body(y)
    })

    w.end(function(){
        aCo.remove(y)
    })

  //  The easiest approach to utilize the controllers is to create sensor fixtures
  // that test when a begin/end  event has occurred with a body.

  // In the beginContact method, add the body to the controller.
  // In the endContact method, remove the body.




}



ARRAY=function(){

    w=b2d.W()


    b = w.ball(100,100,50)

    b1 = w.ball(100,200,40)

    arr = ['hi', 'hello', 'sis']

    arr.indexOf('helloo')
}

CLASSES=function(){w=b2d.W()

    b=w.ball(100,100,50)



    b1 = w.ball(100,200,40)



}
MESSAGEPASSING=function(){w=b2d.W()
    b = ball(100,100,50)
    b1 = ball(100,200,40)
}




UNION=function(){w=b2d.W()


    b = w.brick(300,300,50,50)


    b2 = w.brick(320,320,50,50)


    _.times(20, function(){

        u= b2d.conc(

            Math.poly(b.V()).union(   Math.poly(b2.V())).verts()
        ).XY(300,100)


    })




}

TANSTAT=function(){w=b2d.W()


    b = w.brick(300,300,56,56).rot(45)




    t = b2d.conc([V(-40,20),V(0,-20),V(40,20)]).XY(280,260).rot(90).fixedRot(true).stat()

    t2 = b2d.conc([V(-40,20),V(0,-20),V(40,20)]).XY(342,321).fixedRot(true).stat()

    bt = b2d.conc([V(-80,40),V(0,-40),V(80,40)]).XY(304,220).rot(180).fixedRot(true).stat()

    bt2 = b2d.conc([V(-80,40),V(0,-40),V(80,40)]).XY(346,262).rot(270).fixedRot(true).stat()

    mt = b2d.conc([V(-56,28),V(0,-28),V(56,28)]).XY(237,324).rot(225).fixedRot(true).stat()

    p = b2d.conc([
        V(-90, 20),V(-45,-20),V(45,-20),V(0,20)

    ]).XY(240,267).rot(90)
        .fixedRot(true).stat()

}

TAN=function(){w=b2d.W({g:0})


    b = w.box(300,300,56,56).rot(45).den(1).damp(1000,1000)


    t = b2d.conc([V(-40,20),V(0,-20),V(40,20)]).XY(280,260).rot(90).den(1).damp(1000,1000)


    t2 = b2d.conc([V(-40,20),V(0,-20),V(40,20)]).XY(342,321).den(1).damp(1000,1000)

    bt = b2d.conc([V(-80,40),V(0,-40),V(80,40)]).XY(304,220).rot(180).den(1).damp(1000,1000)
    bt2 = b2d.conc([V(-80,40),V(0,-40),V(80,40)]).XY(346,262).damp(1000,1000)
        .rot(270).den(1).damp(1000,1000)

    mt = b2d.conc([V(-56,28),V(0,-28),V(56,28)])
        .XY(237,324).den(1).damp(1000,1000)

    p = b2d.conc([
        V(-90, 20),V(-45,-20),V(45,-20),V(0,20)

    ]).XY(240,267).den(1).damp(1000,1000)

}

BOOTBALL=function(){w=b2d.W({g:0})

    b = w.ball(270,500,40).rest(.5)

    r = w.brick(300,300,100,20).rot(20)

    r.fixt(b2d.poly(20,40,60,-20))

    r.XY(200,500).rot(100).dyn()//.angVel(200)

    r.den(.1)
    r.rev(w.ball(200,500,20).damp(1000,1000).den(100))
    r.damp(1000,1000)

    cjs.tick(function(){
        b.F(0, 20)
    })
}
