w= p=b2d.World.prototype



w.chalk=function(){
    this.s.chalk.apply(this.s,arguments)
    return this}

w.getGroundBody = w.gB =w.gGB=function(){  return this.GetGroundBody()  }
w.getBodyList = w.bL = function(){return this.GetBodyList()}
w.destroyBody = w.destroy = w.dB=w.destroy = w.destroyAll = w.destroyAllBodies=function(b){var w=this
    if(U(b)){w.each(function(b){w.destroy(b)})}
    else {w.DestroyBody(b)}
    return w}


w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount()
}

w.qAB = w.Q=w.queryAABB=function(func, x1,y1,x2,y2){

    var w=this,
        AB = b2d.AB(x1,y1,x2,y2),
        num= 0

    w.QueryAABB(function(f){num++

        return func(f, f.B(), num)

    }, AB)

    return num}



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


w.$=w.click=function(func){var w=this

    $(w.hud.canvas).click(function(e){

        func(e.pageX, e.pageY)

    })

    return w}

w.$$= function(func){var w=this

    $(w.hud.canvas).dblclick(function(e){
        func(e.pageX, e.pageY)
    })

    return w}


w.queryXY=function(func, x, y){var w=this  //does not divide
    w.QueryAABB(func, b2d.AABB01(x, y))
    return w}

w.getBodyAtPoint=function(x, y){var body = null

    this.QueryAABB(function queryFunc(fxt){

        if( !fxt.isStat() &&  fxt.test(
            mX * 30,
            mY * 30
        )){


            body = fxt.body()

            return false}

        return true},


        b2d.AABB01(x, y))


    return body}
w.bodyAt =  w.bodyAtPoint=function(x,y,fn,k){var w=this,b //does not div
    if(O(x)){k=fn;fn=y;y= x.y;x= x.x}
    w.qXY(function(f){
        if(U(k)||f.of(k)){
            if(f.test(x,y)){
                b= f.B()
                return false}}
        return true
    },x,y)

    if(!b){return false}
    if(F(fn)){return fn(b)||w}
    return b}


w.qXY=function(x,y,fn){var w=this,v
    //function on TOPMOST fixt FIRST
    // then goes down, but only if function returns 'true'
    //great way to work with fixts/bods at a certain x,y point
    if(F(x)){v=V(y,fn);fn=x}
    else if(O(x)){fn=y;v=(V(x))}
    else(v=V(x,y))
    w.QueryAABB(fn,b2d.AABB01(v))
    return w}
//query a point of specific kind,
// more options on fixts

w.XY=function(x,y,fn,k){var w=this, fixt=false // - -> bottom, + all ? :)
    if(O(x)){k=fn;fn=y;y=x.y;x= x.x}

    w.qXY(x,y, function(f){

            if(f.ofClass(k) &&  f.test(x,y)){  //k null -> true // doesnt need to div, because qXY will div
                fixt = f; return false}
            return true
    }) //stops at top most fixt

    if( fixt && F(fn) ){

        fn = _.bind(fn, fixt)
        return fn(fixt) || w
    } // or w? //makes sense actually

    return fixt}
//query bodies
w.bXY=function(x,y,fn,k){var w=this,
    b=false
    if(O(x)){k=fn;fn=y;y=x.y;x= x.x}

    w.qXY(x,y,function(f){

            if( f.ofClass(k)  &&  f.test(x,y) ){
                 b= f.B();
                 return false} //cycles through all the fixts to find the first
            return true})


    if(F(fn)){return _.bind(fn,b)(fn(b))||w}

    return b



}//**


BODYAT=function(){w=b2d.W({g:0})

    b = w.S(470,270, 'y', 100)

    b1 = w.S(500,300, 'r', 100)

     b2 = w.S(530,330, 'o', 100)

    w.qXY(500, 300,
        function(f){f.C('w')
         return true})


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

b2d.isBDef=function(bd){return O(bd) && F(bd.b2BodyDef)}
;(function worldCreateBodies(){var w=b2d.World.prototype



    w.R=function(c,W,H,x,y){
        var w=this,wC=w.cent(),
            r,
            g=G(arguments)
        if(!S(g[0])){y=x;x=H;H=W;W=c;c='x'}
        if(U(W)){

            W=200
            H=200
            x=wC.x-W/2
            y=wC.y-H/2

        }

        else if(U(H)){

            H=W
            x=wC.x-W/2
            y=wC.y-H/2

        }

        else if(U(x)){

            x=wC.x-W/2
            y=wC.y-H/2

        }

        y=N(y)?y:x

        /*
         x=N(g[0])?g[0]:wC.x
         y=N(y)?y:N(g[0])?N(g[0]):wC.y
         W=N(W)?W:100
         H=N(H)?H:W
         */
        r = w.S(x+(W/2), y+(H/2),c,W,H)
        return r}






    w.dyn=w.body=w.A=function(x, y, fD){var w=this, b,bd

     //pass body def
     if(b2d.isBDef(x)){ bd=x; fD=y }

     //make body def
     else {
            if(O(x)){fD=y; y=x.y; x=x.x}
            x=N(x)?x:500
            y=N(y)?y:250
            bd=b2d.dyn(x,y)
     }

        b = w.CreateBody(bd)

     // pass in one fixture or an ARRAY( of fixts )

     if(fD){ b.fixt( fD ) }

     return b}













    w.perch = w.skyPerch = function(col){var w=this
        col = col || 't'
        w.S(200,50, col, 300,20) //top
        w.S(200,360, col, 300,20) //bottom
        w.S(60, 240, col, 20, 260) //left
        w.S(340, 320, col, 20, 100)//right

        return w}


w.B=w.D=function(x,y){var g=G(arguments),x=g[0],y=g[1],
        w=this, bd, b, fixts, clas


    //can pass color at END
    if(S(_.last(g))){

        clas= g.pop()
    }


    if(N(x)){bd=b2d.dyn(x,y); fixts=_.rest(g,2)}

    else {

        if(b2d.isBDef(x)){bd=x}

        else {x=V(x); bd=b2d.dyn(x.x,x.y)}

        fixts = _.rest(g)
    }


    b = w.CreateBody(bd)

    b.H.apply(b, fixts)

    if(clas){b.K(clas)}

    return b

}





















    w.S=function(x,y){var w=this,

        g=G(arguments),
        x=g[0], y=g[1],
        bd, b, fixts,clas

    if(S(_.last(g))){clas= g.pop()}


    if(N(x)){
            bd=b2d.stat(x,y)
            fixts=_.rest(g,2)}
        else {
            if(b2d.isBDef(x)){bd=x}
            else {x=V(x); bd=b2d.stat(x.x,x.y)}
            fixts=_.rest(g)}

        b = w.CreateBody(bd)

        if(fixts.length){

            b.H.apply(b,


                fixts
                //   _.map(fixts, function(f){   return A(f)?f:[f]  })

            )

        }

    if(clas){b.K(clas)}
        return b}






    w.ball= w.ba=function(x,y,r){var w=this,

        ball

        if(O(x)){

            r=N(x.r)? x.r:y; y=x.y; x=x.x
        }

        x=N(x)?x:100 //change to center x

        y=N(y)?y:x

        r = N(r)?r:30


        ball = w.dyn(

            x, y, b2d.circ(r)
        )

        return ball.K('ball')
    }




    w.bul= function(x,y){var def,body
        def=b2d.dyn(x,y)
        def.bullet=true

        body=this.createBody(def)
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
        body = this.A(b2d.stat(x,y), fixtDef)
        return body}


    w.bump = w.bumper = w.baa = function (x, y, r) {
        x = x || 100
        y = N(y) ? y : x
        r = r || 20
        return this.A(b2d.stat(x, y), b2d.circ(r)).K('bumper')
    }
    w.box = w.bi = function (x, y, W, H) {//=brk=brick=

        x = N(x) ? x : 60;
        y = N(y) ? y : x
        W = N(W) ? W : 50;
        H = N(H) ? H : W

        return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')

    }
    w.brick = w.bii = function (x, y, W, H) {//=brk=brick=

        x = N(x) ? x : 60;
        y = N(y) ? y : x
        W = N(W) ? W : 30;
        H = N(H) ? H : W

        return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')

    }
    w.brickSensor = function (x, y, W, H) {//=brk=brick=

        x = N(x) ? x : 60;
        y = N(y) ? y : x
        W = N(W) ? W : 30;
        H = N(H) ? H : W

        return this.A(b2d.stat(x, y),
            b2d.poly(W, H).r(0).sensor(true))
            .K('brickSensor')

    }



    w.addCirc = function (x, y, radius, color) {//specific to talkjs

        x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)

        y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)

        radius = N(radius) ? radius : _.random(14) + 8

        color = oO('c', color || $r())

        this.ball(x, y, radius).bindSprite2(
            cjs.circ(radius, color).XY(x, y)).linDamp(2)

    }
    w.circ = function (x, y, rad, col) {var ball, w=this

        // will err on random x,y.. dont like it. that should be with '*' (explicityly ONLY for something like this)
        var wd = this.s.W(),
            ht = this.s.H()
        x=N(x)?x:parseInt(Math.random()*(wd-100))+60
        y=N(y)?y:50
        rad=N(rad)?rad:_.random(14)+8

        ball = w.ball(x,y,rad).linDamp(2)

        ball.bindSprite2( w.s.cir(x,y,rad,col) )

        return ball

    }








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












    w.polyCirc=function(x, y, rad, sides){
        var b = this.dyn(x,y),
            pc = b2d.polyCirc(rad, sides)

        b.poly.apply(b,pc)
        return b}



    w.verts= function(x,y,  arrs ){

        var bod = this.dyn(x, y)

        _.each(arrs, function(fixt){
// bod.convex( arr[0],  _.rest(arr)  )
            //  bod.convex( fixt )

            bod.convex.apply(bod, fixt)

        })

        return bod}





    w.vertsKin= function(x, y, arrs){

        var bod = this.kin(x,y)

        _.each(arrs, function(arr){
            bod.convex(arr[0],  _.rest(arr))
        })

        return bod}

    w.K=function(){return this.B.apply(this,arguments).kin()}

    //link for distance ropes

    w.ropePiece = w.distLink=function(x, y){var w=this

        return w.B(x,y, 'w', 3,5).aD(10).rest(0)}


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



}())
w.bindShape = function( shape, spr   ){

    this.stage.A( shape )

    cjs.tick(

        function(){   shape.XY(  spr.X(), spr.Y()    )    }

    )

}
w.cent=function(){var w=this,g=G(arguments),
    v=V(w.s.W()/2, w.s.H()/2)
    if(g.p){w.dot(v)}
    return v}
w.tick=function(draw){var w=this,
    can = w.can,
    ctx= w.ctx
    draw= N(draw)? draw: 0.1
    ctx.tick(function(){
        this.trans(0,0).Z(1,1);
        w.draw(draw)

    })


    return this}
w.mouseJAt=function(p, kind){var w=this, mj

    if(N(p)){p = V(p,kind)}


    w.XY(p.x, p.y, function(f){


        mj  =   f.body().mouseJoint(p)

    })//, kind



    return mj

}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}

w.dot=function(col,x,y){
    var w=this,
        g=G(arguments),
        col=g[0], x=g[1], y=g[2]


    if(g.m){
        w.dot(col,x,y); w.dot(col,x,y,'+')
    }

    if(g.p){

        if(!S(col)){y=x;x=col;col='b'}
        w.hud.dot(col,x,y)
        //w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
    }

    else {
        if(!S(col)){y=x;x=col;col='w'}

        w.s.dot(col,x,y)
    }




return w}

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
w.each  = w.eachBody= function(l,uD){//=w.e=w.eB
    //can pass a cb to be run on EACH body
    //can also pass a uD to restrict cb to
    //run only on bodies with that uD

    var w=this,
bs = w.GetBodyList(),k, b

    if(S(l)){k=l; l=uD} else {k = uD}

    while(bs){
        b = bs
        bs = bs.next()
        if(b.has(k)){l(b)}}
    return w}


w.eachD = w.eachDyn=function(l){var w=this; w.each(function(b){if(b.isDyn()){l(b)}})

return w}


w.C= function(col){var w=this
    w.c.C(col)
return w}


//events
w.each$ = w.eachClick = w.bodyClick=function(l){var w=this

    w.each(function(b){b.click(l)})

    return w}


//moves all bodies ?!!
w.left=w.horiz=function(num){
    num=N(num)?num:4
    this.each(function(b){b.X( num,'-' )})}
w.up=w.vert= function(num){
    num=N(num)?num:4
    this.each(function(b){b.Y(num,'-')})}
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

        what =   F(what)? what(): what

        world.pen( what )


    }, 200)






   TEST=function(){w=b2d.W()
        num = 0
        w.show( function(){return num} )}

}
w.with= w.collWith=function(a,b,c){var w=this
    w.beg(function(cx){cx.with(a,b,c)})
return this}
w.class=function(k){var w=this

    var ob={
        class:k,k:k,
        world:w,w:w}

    ob.with=ob.collWith=function(k,func){var ob=this

        if(O(k)){
            _.each(k, function(fun,k){
                ob.with(k,fun)}
            )}

        else {w.with(this.class, k, func)}
        return this}

    return ob}
w.bods=function(){// a real analog to the jquery obj ?

}
controllers=function() {
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


    b2d.acc = function (x, y) {
        var co = new b2d.Dynamics.Controllers.b2ConstantAccelController()
        if (N(x)) {
            co.V(x, y)
        }
        return co
    }
    b2d.buoy = function (nX, nY, lD, aD) {
        var co = new b2d.Dynamics.Controllers.b2BuoyancyController()
        nX = N(nX) ? nX : 0;
        nY = N(nY) ? nY : -1;
        lD = N(lD) ? lD : 2;
        aD = N(aD) ? aD : 1
        return co.norm(nX, nY).drag(lD, aD)
    }
    b2d.tensor = function (a, b, c, d) {
        var co = new b2d.Dynamics.Controllers.b2TensorDampingController()
        return co
    }
    b2d.force = function (x, y) {
        x = N(x) ? x : 0;
        y = N(y) ? y : 0

        var co = new b2d.Dynamics.Controllers.b2ConstantForceController()

        co.V(x, y)

        return co
    }
    b2d.grav = function (a, b, c, d) {
        var co = new b2d.Dynamics.Controllers.b2GravityController()
        return co
    }


    co = b2d.Dynamics.Controllers.b2Controller.prototype


    co.body = function (onOrMoreBodies) {
        var co = this
        _.each(arguments, function (b) {

            co.AddBody(b2d.toBody(b))

        })
        return this
    }


    co.remove = function (b) {
        this.RemoveBody(b);
        return this
    }
    co.next = function () {
        return this.GetNext()
    }
    co.wor = function () {
        return this.GetWorld()
    }
    co.bods = co.bodies = co.list = co.bodyList = function () {
        return this.GetBodyList()
    }


    co.step = function () {
        this.step();
        return this
    }


//acc
    aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
    aCo.V = function (x, y) {//getter is a waste!  counterproductive... think about it! :).. but for consistency..??? nah i can do better

        //applies 'gravity' by default
        this.A = U(x) ? V(0, 10) : V(x, y)
        return this
    }


//buoy
    bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype
    bCo.norm = function (x, y) {
        this.normal.Set(x, y);
        return this
    }
    bCo.os = function (os) {
        this.offset = os;
        return this
    }
    bCo.useDen = function (u) {
        this.useDensity = u;
        return this
    }
    bCo.den = function (d) {
        var g = G(arguments), d = g[0]
        this.density = d;
        if (g.N) {
            this.useDen(true)
        }
        return this
    }
    bCo.linDrag = function (lD) {
        this.linearDrag = lD || 0;
        return this
    }
    bCo.angDrag = function (aD) {
        this.angularDrag = aD || 0;
        return this
    }
    bCo.drag = function (lD, aD) {
        return this.linDrag(lD).angDrag(aD)
    }


//force
    fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
    fCo.V = function (x, y) {
        //applies 'gravity' by default
        this.F = U(x) ? V(0, 10) : V(x, y)
        return this
    }

//tensor
    tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
    tCo.axis = function (axis) {
        this.SetAxisAligned(axis)
        return this
    }

//grav
    gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
    gCo.g = gCo.grav = gCo.V = function (g) {//applies 'gravity' by default
        this.G = N(g) ? g : 1
        return this
    }
    gCo.inv = function (inv) {
        this.invSqr = inv;
        return this
    }
    gCo.r2 = function () {
        return this.inv(true)
    } //this is default
    gCo.r1 = function () {
        return this.inv(false)
    }

}; controllers()
b2d.toBody=function(fixtOrBody){

    if( b2d.isBody(fixtOrBody) ){return fixtOrBody}

    if( b2d.isFixt(fixtOrBody) ){return fixtOrBody.body()}

    return false
}
w.draw=function(num){
    if(N(num)){this.step(num)}
    this.DrawDebugData()
    this.clearForces()
    return this}
w.db =w.debug =   function(data){

    //p.debugDraw  =p.dD= p.sDD=


    if(U(data)){

        this.s.autoClear = this.s.autoClear?false:true;return this
    }

    if(data===true){   this.s.autoClear=false;return this }


    if (data===false){ this.s.autoClear=true;return this}

    this.SetDebugDraw(data)

    return this}
w.step=function(time, a, b){

    a=N(a)?a:8
    b=N(b)?b:3
    this.Step(time,a,b)

    return this}
w.clear = p.clearForces = p.cF = function(){  this.ClearForces(); return this }
w.rC=   w.rayCast=function(func,v1,v2){

    return this.RayCast(func, V(v1,'-'), V(v2,'-') )
}
joints=function() {


    w.cJ = w.J = w.joint = w.createJoint = function (a) {

        var j = this.CreateJoint(a)

        return  j

    }
    w.dJ = w.j = w.destroyJoint = function (a) {
        this.DestroyJoint(a);
        return this
    }
    w.dist = function (a, b, b1OffV, b2OffV, len, freq, damp) {
//location pams are optional, and be default to their center ponts
// note: if you passe them in, pass them as relative(local to body) coords
//BOX2D requires them as WORLD points - for some reason.. (but i think my way has more use cases)
//there is also distColl for 'collideConnected=true' joints
        var b1V = a.wCent(),
            b2V = b.wCent(),
            jd = b2d.dJ(), j

        if (O(b1OffV)) {
            b1V = b1V.add(b1OffV)
        }
        if (O(b2OffV)) {
            b2V = b2V.add(b2OffV)
        }

        jd.init(a, b, b1V.div(), b2V.div())
        j = w.J(jd)

        if (N(b1OffV)) {
            damp = len;
            freq = b2OffV;
            len = b1OffV
        }


        if (N(len)) {
            j.len(len)
        }

        if (N(freq)) {
            j.freq(freq)
        }

        if (N(damp)) {
            j.damp(damp)
        }


        return j
    }
    w.tightDist = function (piece, newPiece) {
        return this.dist(piece, newPiece, 1, 1000, 1000)

    }
    w.fixts = function (x, y, f) {
        var w = this

        f = b2d.fixts[f]

        return w.B(x, y, f)
    }
    w.distColl = function (a, b, b1OffV, b2OffV) {

        var b1V = a.wCent(),

            b2V = b.wCent(),

            jd = b2d.dJ(), j


        if (O(b1OffV)) {
            b1V = b1V.add(b1OffV)
        }

        if (O(b2OffV)) {
            b2V = b2V.add(b2OffV)
        }

        jd.init(a, b, b1V.div(), b2V.div()).coll(true)

        j = w.J(jd)

        return j
    }
    w.rod = function (a, b, len) {
        a = a || this.ball(150, 150)
        b = b || this.brick(180, 150)
        len = N(len) ? len : 200
        return this.distColl(a, b).len(len)
    }
    w.spring = function (a, b) {
        return this.dist(a, b).len(1).freq(2)//.damp(.1)
    }
    w.boxes = function () {
        var w = this

        _.each(arguments, function (arg) {

            w.box.apply(w, arg)
        })

        return this
    }
    w.boxesStat = function () {
        var w = this

        _.each(arguments, function (arg) {

            w.box.apply(w, arg).stat()
        })

        return this
    }
    w.Revolute = function (a, b, c, d, e, f) {
        var g = G(arguments)

        //pass in body1, body2, world-bV = body1-center
        //can also pass body1, body2, world-x, world-y
        //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


        var j = SuperJointDef(new b2d.Joints.b2RevoluteJointDef())

        var joint = j

        joint.init = joint.i = function () {
            joint.Initialize.apply(joint, G(arguments))
            return joint
        }

        //convenience functions
        joint.motor = joint.mt = function (speed, torque, enable) {

            joint.speed(speed)

            joint.maxTorque(N(torque) ? torque : 100)

            if (enable != '-') {
                joint.enableMotor(1)
            }

            return joint
        }


        joint.limits = joint.lm = function (lowAng, upAng, enable) {

            joint.lowAng(lowAng).upAng(upAng)

            if (enable != '-') {
                joint.enableLimits(1)
            }

            return joint
        }


        if (U(c)) {
            c = a.wCent()
        }

        if (O(c)) {
            joint.init(a, b, c)
        }

        else if (N(e)) {
            joint.A(a).B(b).lAA(bV(c / 30, d / 30)).lAB(bV(e / 30, f / 30))
        }

        else if (N(c)) {
            joint.init(a, b, bV(c / 30, d / 30))
        }


        this.createJoint(joint)
        return joint
    }
    w.Rev = function (a, b, c, d) {

        return this.createJoint(
            RevoluteJointDef(a, b, c, d)
        )
    }
    w.Prism = function (a, b, c, d, e, f, g, h) {
        var joint = this.J(b2d.prism(a, b, c, d, e, f, g, h))
        return  joint
    }
    w.rev = function (body1, body2, c, d, e, f) {
        var g = G(arguments)

        //pass in body1, body2, world-bV = body1-center
        //can also pass body1, body2, world-x, world-y
        //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y

        var joint = new BXJ.b2RevoluteJointDef()

        __jd = joint


        if (U(c)) {
            c = body1.worldCenter()
        }
        if (O(c)) {
            joint.init(body1, body2, c)
        }
        else if (N(e)) {
            joint.A(body1).B(body2).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
        }
        else if (N(c)) {
            joint.init(body1, body2, V(c / 30, d / 30))
        }

        //SuperJointDef( joint )
        __joint = joint = this.J(joint)


        return joint
    }
    w.weld = function () {

        return this.J(
            b2d.weld.apply(null, arguments)
        )
    }
    w.prism = function (a, b, x, y, rot) {
        var jd = new b2d.Joints.b2PrismaticJointDef(), j

        if (A(a)) {
            jd.bodyA = a[0]
            if (O(a[1])) {
                jd.localAnchorA = a[1]
            }
            else if (N(a[1])) {
                jd.localAnchorA = V(a[1] / 30, (a[2] || 0) / 30)
            }
        }
        else {
            jd.bodyA = a
        }

        if (A(b)) {
            jd.bodyB = b[0]
            if (O(b[1])) {
                jd.localAnchorB = b[1]
            }
            else if (N(a[1])) {
                jd.localAnchorB = V(b[1] / 30, (b[2] || 0) / 30)
            }
        }
        else {
            jd.bodyB = b
        }

        if (N(x)) {
            jd.localAxisA.Set(x, y || 0);
            jd.localAxisA.Normalize()
            if (rot) {
                jd.referenceAngle = Math.toRadians(rot)
            }
        }

        if (O(x)) {
            jd.localAxisA.Set(x.x || 0, x.y || 0);
            jd.localAxisA.Normalize()
            if (y) {
                jd.referenceAngle = Math.toRadians(y)
            }
        }

        __joint = j = this.J(jd)

        return  j
    }
    w.Gear = function (a, b, c) {

        return world.createJoint(Gear(a, b, c))
        function Gear(bA, bB, ratio) {
            var gearJoint = new b2d.Joints.b2GearJointDef()
            gearJoint.joint1 = bA
            gearJoint.joint2 = bB
            gearJoint.bodyA = bA.GetBodyA()
            gearJoint.bodyB = bB.GetBodyA()
            gearJoint.ratio = N(ratio) ? ratio : 1
            return gearJoint
        }
    }
}; joints()
contacts=function() {
    w.listen = w.setContactListener = w.sCL = w.SetContactListener
    w.beg = w.begin = function (what, what2, func) {
        var w = this
        if (F(what)) {
            _.each(arguments, function (func) {
                w.beginHandlers.push(func)
            })
        }
        else if (F(what2)) {
            func = what2
            w.beginHandlers.push(function (cx) {
                if (cx.with(what)) {
                    func(cx)
                }
            })
        }
        else if (F(func)) {
            w.beginHandlers.push(function (cx) {
                if (cx.with(what, what2)) {
                    func(cx)
                }
            })
        }
        return this
    }//ADDS one or more handlers to beginHandlers array
    w.pre = function () {
        var that = this
        _.each(arguments, function (func) {
            that.preHandlers.push(func)
        })
        return this
    }
    w.post = function () {
        var that = this
        _.each(arguments, function (func) {
            that.postHandlers.push(func)
        })
        return this
    }
    w.end = function (what, what2, func) {
        var w = this
        if (F(what)) {
            _.each(arguments, function (func) {
                w.endHandlers.push(func)
            })
        }
        else if (F(what2)) {
            func = what2
            w.endHandlers.push(function (cx) {
                if (cx.with(what)) {
                    func(cx)
                }
            })
        }
        else if (F(func)) {
            w.endHandlers.push(function (cx) {
                if (cx.with(what, what2)) {
                    func(cx)
                }
            })
        }
        return this
    }
    w.collideAny = function (what, func) {
        return this.beg(what, function (cx) {
            $.do(function () {
                func(cx)
            })
        })
    }
    w.coll = function (k1, k2, func) {

        var that = this,
            w = this,
            name = k1 + k2

        if (F(k2)) {
            return this.collideAny(k1, k2)
        }

        this.beg(function (cx) {
            if (cx.with(k1, k2)) {
                that.flag(name, cx)
            }
        })

        cjs.tick(function () {
            var cx = that.flagged(name)
            if (cx) {
                func(cx)
            }
        })
    }
    w.flag = function (flag, val) {
        this.flags = this.flags || {}

        if (U(val)) {
            val = true
        }
        this.flags[flag] = val
        return this
    }
    w.flagged = function (flag) {
        this.flags = this.flags || {}
        var wasFlagged = this.flags[flag]
        if (wasFlagged) {
            this.flags[flag] = false
        }
        return wasFlagged
    }
    w.on = function (onWhat, func) {
        //this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)


        var that = this

        //interesting default !!!!!!!
        //func=func||function(val){val()}

        cjs.tick(function () {
            var val = that.flagged(onWhat)
            if (val) {
                func(val)
            }
        })

        return this
    }
    w.when = function (what, what2, bFunc, eFunc) {
        var w = this

        if (F(what)) {
            eFunc = what2
            bFunc = what
            w.beg(bFunc)
            if (eFunc) {
                w.end(eFunc)
            }
        }

        else if (F(what2)) {
            eFunc = bFunc
            bFunc = what2
            w.beg(what, bFunc)
            if (eFunc) {
                w.end(what, eFunc)
            }
        }

        else if (F(bFunc)) {
            w.beg(what, what2, bFunc)
            if (eFunc) {
                w.end(what, what2, eFunc)
            }
        }

        return this
    }
    w.setContactFilter = w.sCF = w.SetContactFilter
    w.while = function (kind, kind2, func) {

        var w = this

        var push = false

        if (F(func)) {

            w.when(kind, kind2,
                function () {
                    push = true
                },
                function () {
                    push = false
                })

            cjs.tick(function () {
                if (push) {
                    func()
                }
            })
        }


        else if (F(kind2)) {

            w.when(kind,
                function () {
                    push = true
                },
                function () {
                    push = false
                })

            cjs.tick(function () {
                if (push) {
                    kind2()
                }
            })
        }

        return this

    }

}; contacts()
w.spriteBox=function(data, x, y, scale){ //for 400 x 400 flash squares !!!


    x=N(x)?x:300;  y=N(y)?y:x //weird defaults - not intuitive


    var sprite =  cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)



    if(N(scale)){sprite.sXY(scale)}

    return this.box(x,y,100,100).bindSprite2(

        sprite
    )



}
w.dbX=function(){var w=this

    w.line(0,0, w.W(), w.H(),'+')

    w.line(0,w.W(), w.H(),0, '+')

    if(N(w.w) && N(w.h)){
        w.line(0,0, w.w, w.h)
        w.line(0,w.W(), w.H(),0 )}}
w.dr=function(col,x,y,W,h){
    var w=this,
        g=G(arguments),
        col=g[0],x=g[1],y=g[2],W=g[3],h=g[4]


    if(g.p){

        if(!S(col)){h=W;W=y;y=x;x=col; col='b'}

        w.s.HUD.shape().fs(col).rect(x, y, W, h )
    }


    else if(g.n){

        if(!S(col)){h=W;W=y;y=x;x=col; col='r'}

        w.s.back.shape().fs(col).rect(x, y, W, h )
    }

    else {if(!S(col)){h=W;W=y;y=x;x=col;col='w'}

        w.s.shape().fs(col).rect(x, y, W, h)
    }


}

w.Y=function(x,Y){var w=this; y = w.ship(x,Y); return w}

//w.s.shape().fs('y').rect(100,100,100,100)
//w.s.HUD.shape().fs('o').rect(100,200,100,100)
w.line=function(col,x1,y1,x2,y2){
    var w=this,
        g=G(arguments),
        col=g[0],
        x1=g[1],y1=g[2],
        x2=g[3],y2=g[4]



    if(g.p){

        if(!S(col)){y2=x2; x2=y1;y1=x1;x1=col;col='b'}

        h =w.s.HUD.shape()

       return h.sC(col,8).mt(x1, y1).lt(x2,y2)
    }


    else if(g.n){if(!S(col)){y2=x2; x2=y1;y1=x1;x1=col;col='x'}

      return  w.s.back.shape().sC(col,8).mt(x1, y1).lt(x2,y2)
    }


    else {if(!S(col)){y2=x2; x2=y1;y1=x1;x1=col;col='w'}


       return w.s.shape().sC(col,8).mt(x1, y1).lt(x2,y2)


    }


}


BODY=function(){W(10)

    w.S(600,600, 20,1000)

    w.D(100,400, 'z', [ [50], [10,300,'-'] ])

    w.D(100,300, 'b', 50)

    w.D(700,300, 'b', 50)


    b=w.D(700,400,'y', [

         [50] ,
        ['r',  10, 300,'-' ],

        ['o',50,100,0]

    ])

}
LAYERS=function(){W(0).Y()

    y.cent('+')

    w.dr( 100,100,100,100)
    w.dr( 100,200,100,100, '+')
    l1=w.line(0,100,5000,100,'-')
    l2= w.line(0,200,5000,200)
    l3 = w.line(0, 300, 5000, 300, '+')

    y2= w.ship().cent('+')

}
SHOWCOUNT=function(){ W().Y(200,200)

    b = w.D(300,300,'r', 50)

    w.show(function(){return w.count()})
}
BEGEND=function(){W(0)

    b = w.B(500,300,'w', 50)




     w.beg(b,  function(){w.B(R(1000,50),R(500,50),'y',5).rest(.8)} )

    w.end(b,
        function(){w.B(R(1000,50),R(500,50),'z',5).rest(.8)}
    )


}


WORLD=function(){W(0)

    b = w.D(100,100,'r',50)
    b1 = w.D(100,200,'b',40)

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


    w.locked=function(){return b2World.e_locked != 2}

    w.m_island
    w.m_flags




}


TESTQ = function(){W(2).Y(400,500)

    _.times(5, function(){w.randRects()})


    n = w.qAB(function(f, b){

        b.kill(); return true

    },  400,100,450,150)



    w.pen(n + ' rects removed')

}



FOLLOWTF =function(){W()

    var tf = null
    b = w.D(100,100,'b', 100,200)
    b2 = w.D(200,200, 'p', 100,150)

    cjs.tick(function(){var trf

        trf = b.transform().toArr()

        if(tf){   b2.SetTransform( b2d.tf(tf)  )   }

        setTimeout(function(){
            tf = trf
        }, 1000)

    })




}



TESTPOINT=function(){W(50)

    var tf=null


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

COCHANGE=function(){//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=

    W({g:20})

    //gives u a controller-edge, which is a body-controller pair
    //it is linked both to other bodies for that controller..
    //and to other controllers of that body!!!

    //lets focus on other bodies first....


    s1 = w.sensorBucket(320,300, 's1')
    s2 = w.sensorBucket(700,300, 's2')

    co1 = w.acc(5, -5)
    co2 = w.acc(-5, 5)

    I(function(){

          aCo.body(

        w.D(300,100, 'y', 10),

        w.D(760,100, 'b', 10)


          )

    })


    setInterval(function(){
        b.bc() //default is to kill all in its 'controller-space' (except itself)
    }, 5000)



    w.beg(function(cx){


       cx.with('s1', function(){var f=this, b=f.B()
            b.cancel()
            co1.body(b)
        })

        cx.with('s2', function(){var f=this, b=f.B()
            b.cancel()
            co2.body(b)
        })

    })

    w.D(150, 100, 'w', 50).den(1)
    w.D(200, 100, 'd', 50).den(1)
    w.D(250, 100, 'r', 50).den(1)

    b= w.ship(100,500)

    w.D(350, 100, 'g', 50).den(1)
    w.D(400, 100, 'o', 50).den(1)
    w.D(450, 100, 'w', 50).den(1)

}





ACC=function(){W(0).C('z')


 // Imagine that you have gusts of wind blowing sideways…  you can add your objects to a Contoller and have them pushed sideways…  then when the wind passes you could remove them from that controller.

    // now just add and remove bodies to the controller!!


    b = w.D(300, 300,'b', 50, 60).den(1)

    co = w.acc(-5, -5).body(b)


    added = true

    cjs.tick(function(){
        b.F(10,10)
    })

    I(function(){if(R()){

            if(added==true){
                added=false
                w.C('r')
                co.remove(b)
            }

            else {added=true

                w.C('g')
                co.body(b)
            }}

    },2000)






}

BUOY=function(){W()


    w.S(320,480,'r', 640,20)
    w.S(320,340,'b',320,20)
    w.S(170,230,'g',20,200)
    w.S(470,230,'y',20,200)

    w.S(320, 245, 'z', [ [280,170,'-'] ])

    co = w.buoy(0, -1, 5, 2).os(-6).den(2)


    cjs.tick(function(){w.eachD(function(b){


            if(b.co()){ co.remove(  b  ) }

            for (var c=b.cx(); c; c=c.next){

                var cx=c.contact
                if(cx.A().IsSensor()&& !cx.b().co() ){
                    co.body(cx.b())}

                if(cx.B().IsSensor()&& !cx.a().co()){
                    co.body(cx.a())
                }
            }

        })})



    I(function(){w.D(300,40,'r',8).den(1)})


}



BALL=function(){W().B(400,300,'x',150).den(.1)}
STACKTHREE=function(){W({m:'ball',w:0})



    w.S(500,600,'y',1000, 20)
    b =  w.B(500,200, 'o', 40).K('ball')
    w.boxesStat([350, 260, 880, 30])
    w.B(310,120,'t',60,60)
    w.B(320,120,'t',60,60)
    w.B(340,120,'t',60,60)
    w.B(350,120,'t',60,60)
    w.B(370,120,'t',60,60)
    w.B(380,120,'t',60,60)
    w.B(550,120,'t',60,60)
    w.B(570,120,'t',60,60)
    w.B(580,120,'t',60,60)
    w.S( 1000,400,'x',200,200)
    w.S( 1200,200,'x',200,200)


    w.db()}
TINYREDBALLS=function(){

    w=b2d.G(1000, 500,  2000, 1000)


    y = w.ship(1000, 400//w.H()-100
    )


    //w.pXY(500,0)


    w.fw(y, 500, 300  )


    // w.S(500,400,'b',20,200) //why sensor not working any more??


    w.B(700, 300, 'r', [  [4]   ])
    w.B(800, 300, 'r', [  [4]   ])
    w.B(900, 300, 'r', [  [4]   ])

    w.B(1000, 300, 'r', [  [4]   ])

    w.B(1100, 300, 'r', [  [4]   ])
    w.B(1200, 300, 'r', [  [4]   ])
    w.B(1300, 300, 'r', [  [4]   ])

    w.s.HUD.dot('w', 500, 300)


    w.s.HUD.dot('w', 700, 300)
    w.s.HUD.dot('w', 1100, 300)

}
w.P=function(x,y){var w=this
    x=N(x)?x:300
    y=N(y)?y:500
    p= w.jumper(x,y)
    return w}



w.sH=function(h){var w=this, wH= w.H()
    if(U(h)){return wH * w.s.scaleY}
    w.s.scaleY = h/ wH
return w}






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

GRAVTRAP=function(){W({g:0,w:0}).C('e').Y(300,300).pen('welcome to grav controller')


    gCo = w.grav().body(y,

     w.D(320,300, 'b', 20).den(1),
     w.D(300,320, 'r', 30).den(1),
     w.D(340,300, 'x', 40).den(1),


        w.D(300,340, 'c', 50).den(1),

        w.D(320,320, 'l', 60).den(1)

    )






}

GRAVR=function(){W({g:0, w:0}).C('e').Y(300,200).pen(
    'welcome to grav controller - top balls r1, bottom r2(default)')



    r = 40

    gCo = w.grav(1, true).body(

        w.D(100,600, 'b', r).den(1),
        w.D(200,500, 'r', r).den(1),
        w.D(300,400, 'x', r).den(1),
        w.D(400,300, 'c', r).den(1),
        w.D(500,200, 'l', r).den(1),
        w.D(600,100, 'l', r).den(1)
    )

    gCo2 = w.grav().body(

        w.D(100,600, 'b', r).den(1),
        w.D(200,500, 'r', r).den(1),
        w.D(300,400, 'x', r).den(1),
        w.D(400,300, 'c', r).den(1),
        w.D(500,200, 'l', r).den(1),
        w.D(600,100, 'l', r).den(1)

    )




}

GRAVG=function(){

     W({g:0, w:0}).C('e').Y(100,100)

    w.pen(

        'welcome to grav controller - top has g:2, bottom has g:1 (default)')

    r = 40

    gCo = w.grav(2).body(

        w.D(100,600, 'b', r).den(1),
        w.D(200,500, 'r', r).den(1),
        w.D(300,400, 'x', r).den(1),
        w.D(400,300, 'c', r).den(1),
        w.D(500,200, 'l', r).den(1),
        w.D(600,100, 'l', r).den(1)
    )

    gCo2 = w.grav().body(

        w.D(700,600,'b',r).den(1),
        w.D(800,500,'r',r).den(1),
        w.D(900,400,'x',r).den(1),
        w.D(1000,300,'c',r).den(1),
        w.D(1100,200,'l',r).den(1),
        w.D(1200,100,'l',r).den(1)

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

TENSOR=function(){W().G(0).pen('welcome to tensor (damping) controller - the timing here is amazing!')

    co = w.tensor().body(

        w.D(100,100, 'r', 30).lV(10,20),
        w.D(500,500, 'b', 30).lV(-10,-20),
        w.D(300,300, 'g', 30).lV(-10,-20)
    )

}




TENSORNEVERSETTLE=function(){

     W().G(0).Y().pen('welcome to tensor (damping) controller')


    co = w.tensor()

    _.times(30, function(){

        co.body( w.B(400, 300,'w', 20).L(10,20,0)  )
    })

}


COEDGE=function(){W()

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


SENSORCONTROL=function(){W({g:3})



    w.S(300,300, 'o', [[40,40,'-']])
    w.S(540,300, 'o', [[40,40,'-']])

    w.S(780,300, 'o', [[40,40,'-']])


    y = w.ship(300,100).linDamp(2)

    aCo = w.acc(1000, -1000)


    w.beg(function(){  aCo.body(y)  })

    w.end(function(){  aCo.remove(y)  })

  //  The easiest approach to utilize the controllers is to create sensor fixtures
  // that test when a begin/end  event has occurred with a body.

  // In the beginContact method, add the body to the controller.
  // In the endContact method, remove the body.




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
TANGRAMSSTAT=function(){w=b2d.W()


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
TANGRAMS=function(){W({g:0})


    b = w.B(300,300,'t',56,56).rot(45).den(1).damp(1000,1000)

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
BOOTBALL=function(){W({g:0})

    b = w.B(270, 500, 'o', 40).rest(.5)

    r = w.S(300,300, 'g', 100,20).rot(20)

    r.fixt(b2d.poly(20,40,60,-20))
    r.XY(200,500).den(.1).damp(1000,1000).rot(100).dyn()//.angVel(200)
    r.rev(w.B(200,500, 'w', 20).damp(1000,1000).den(100))

    cjs.tick(function(){b.F(0,20)})
}
ULTMJ=function(){W([1200,600,2400,600],  {g:10, m:'m'  })

    w.B(300,400, 'r', 50,50); w.B(800,400, 'r', 50,50);
    w.B(1200,400, 'r', 50,50);
    w.B(1600,400, 'y', 100,100).K('m')
    y= w.ship().track()}

//
//
//

w.rWx=function(col,h){var w=this
    if(!S(col)){h=col;col='b'}
    h=N(h)?h:w.H()
    return w.S(10, w.H()- (h), col,20,h)}
w.bWx=function(col,W){var w=this
    if(!S(col)){W=col; col='b'}
    W=N(W)?W:w.W()
    return w.S((W/2), w.H()+(h/2)-10, col,W,20)}
w.hWx =function(col,W,x,y){var w=this,g=G(arguments), cW=w.canvas.width, cH=w.canvas.height

    if(!S(col)){y=x;x=W;W=col;col='x'}

    if(U(y)){y=x;x=null}
    W=(W=='+')?cW:N(W)?W:cW/3
    x=N(x)?x:  cW/2-W/2
    y=(y=='+')?cH-10:(y=='-')?10:N(y)?y:cH/2
    y-= 10
    return w.R(col,W,20,x,y).bo(.2).K('wall')     //default bo?
}
w.boxWallsx=w.xWx= function(col,W,h){var w=this

    if(!S(col)){ h=W; W=col; col='o' }
    W= N(W)?  W: w.W()
    h= N(h)?  h: w.H()
    w.floor =  w.R(col, W,20, 0, h-20)
    w.right =  w.R(col, 20, h, W-20, 0)
    w.roof  =  w.R(col, W,  20, 0,0)
    w.left  =  w.R(col, 20,h,0, 0  )
    w.w = W
    w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}

    return w
}
b2d.setupDebugDrawx =setupDebugDrawx =function(){
    debugDraw = DebugDraw()
    debugDraw.SetSprite( w.context )
    debugDraw.dS( 30 )
    debugDraw.SetFillAlpha( .6 )
    //debugDraw.SetLineThickness( 3000 )
    debugDraw.SetFlags(  shB||jB   )
    w.dD(  debugDraw )}


w.bodyX=w.AX=function(bD, fD){var w=this, b

    if(b2d.isBDef(bD)){b = w.CreateBody(bD)}



    if(fD){b.fixt(fD)}

    //b.den(1)

    return b
}
w.dynX= w.dynamicX=function(x,y, fD ){var w=this, body

    if(O(x)){fD=y;y=x.y;x=x.x}
    x =N(x)?x: 500
    y =N(y)?y: 250

    return w.body( b2d.dyn(x,y), fD )}


