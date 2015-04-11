b=b2d.Body.prototype
w=b2d.World.prototype


w.ball= w.ba=w.cir= w.circ=function(x, y, r, c){var w=this, g=G(arguments), b,o

    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        r:g[2],
        c:g[3]

    } : {r:g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.r  = _.tN(o.r, 40)
    o.c  = o.c || $r()

    b= w.D(o.x, o.y, o.c, o.r).K('ball').DFB(0.5, 0, 0.5)

    if(g.n){b.sensor(true)}
    return b}
w.bump =  w.baa = function () {var w=this, g=G(arguments), b,o

    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        r:g[2]

    } : {r:g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.r  = _.tN(o.r, 40)
    o.c  = o.c || $r()

  b= w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)

    if(g.n){b.sensor(true)}
return b}
w.box = w.bi = w.rect = function (x, y, W, H, c) {var w=this, g=G(arguments), b,o

    o = O(g[0])? g[0] : N(g[1])? {

        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3],c:g[4]

    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

  b= w.D(o.x, o.y,  o.c, o.w, o.h).K('box').DFB(0.5, 0.5, 0)

    if(g.n){b.sensor(true)}
return b}
w.brick = w.bii = function (x, y, W, H) {var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {
        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3]
    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y,  o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if(g.n){b.sensor(true)}
    return b}
w.R=function(c,W,H,x,y){//used in makeworld
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

    else if(U(x)){x=wC.x-W/2; y=wC.y-H/2 }

    y=N(y)?y:x

    /*
     x=N(g[0])?g[0]:wC.x
     y=N(y)?y:N(g[0])?N(g[0]):wC.y
     W=N(W)?W:100
     H=N(H)?H:W
     */
    r = w.S(x+(W/2), y+(H/2),c,W,H)
    return r

}
w.dyn=w.body=w.A=function(x, y, fD){var w=this, b,bd

        //pass body def
        if(b2d.isBDef(x)){bd=x; fD=y}

        //make body def
        else {
            if(O(x)){fD=y; y=x.y; x=x.x}

            x= _.tN(x, w.hW)
            y= _.tN(y, w.hH)

            bd=b2d.dyn(x,y)}

        b = w.CreateBody(bd)

        // pass in one fixture or an ARRAY( of fixts )
        if(fD){b.fixt(fD)}
        return b}
w.D=w.B=function(x,y){var w=this,
        g=G(arguments), x=g[0],y=g[1],
        bD, b, fs, k


        if(S(_.l(g))){
            k=g.pop()} //can pass color at END  ?  //if(b2d.iBD(x)){bD=x; fs=_.r(g)}

        if(O(x)){$l('O(x)')

            bD=b2d.D(x); fs=_.r(g)}
        else {

            bD = b2d.D(x,y);
            fs= _.r(g, 2)
        }

        // w.D(600,300, [
        //   ['b', 40,0, 100]
        // ])

        b = w.CreateBody(bD)

        if(A(g[0]) && U(g[1])){$l('A(g[0]) && U(g[1])')
            _.e(fs,function(f){
                if(g.n){b.H(f, '-')} else {b.H(f)}
            })} //b.H.apply(b,fs)
        else {
            if(g.n){fs.push('-')}

            fss=fs
            b.H.apply(b,fs)
        }

        if(k){b.K(k)}
        return b}
w.K=function(){return this.B.apply(this,arguments).kin()}
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
w.randRects  = function(ob){var w=this, x, y, z, r


    ob = O(ob)? ob : {}


    y = _.tN(ob.y)


    z= _.tN(ob.z, 1)

    _.t(30, function(i){
         rr= r=  w.rect(  R(1100,20),  R(150,40+y),   R(30, 15)*z,   R(30, 15)*z )

            r.stat().K('randomRect')

        })


    return w}
w.addTenBalls=function(n){var w=this

    _.t(n||10, function(i){

           w.ball(100 + (i*80), 200)})

    return w}
w.addHundBalls=function(n){var w=this
        _.t(n||100, function(i){
            w.ball( 100  +(i*8),  50, 10) })
        return w}



b2d.fixtPams=function(o){o=o||{}
    o.q = D(q)? o.q: true
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.r = _.tN(o.r,40)
    o.w = _.tN(o.w,50)
    o.h = _.tN(o.h, o.w||100)
    o.a = _.tN(o.a)
    o.d = _.tN(o.d, 0.5)
    o.b = _.tN(o.b, 0.5)
    o.f = _.tN(o.f, 0.5)
    o.s = D(o.s)? o.s: 0
    o.o = _.tN(o.o,1)
    return o} /*

 //will set cols unless you pass in 0
 if(o.c==0){o.c=null}
 if(o.c==00){o.c=null;o.C=null}
 if(o.c=='*'){o.c=$r()}
 if(o.c=='**'){o.c=$r();o.C=$r()}

 o.c =o.c||'z'
 o.C =o.C||'w'
 o.l = _.tN(o.l,4)

 o.c1 = o.c1||'z'
 o.c2 = o.c2||'w'
 o.s1= _.tN(o.s1)
 o.s2= _.tN(o.s2,1)
 //
 o.x1 = _.tN(o.x1)
 o.y1 = _.tN(o.y1)
 o.x2 =_.tN(o.x2);
 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
 o.r1=_.tN(o.r1)
 o.r2=_.tN(o.r2,200)
 // o.i image
 //o.k kind
 // o.p  layer position


 //o.bm//o.bM
 //o.g gradient

 //o.m mass
 //o.t type
 // o.v = o.v || [] //verts
 //o.X
 //o.z clr
 */
b2d.rec = b2d.polyFixt = function(W,H,x,y,a,d){var g=G(arguments),r,f,o,v,
    p = new b2d.PolygonShape()
    if( O(g[0]) && O(g[1]) ){
        v = _.map(g, function(v){return V(v).div()})
        p.SetAsArray(v, v.length)}
    else {
        o=O(g[0])?g[0]
            :{w:g[0],h:g[1],x:g[2],y:g[3],a:g[4],d:g[5]}
        b2d.oDef(o)//60?
        p.SetAsOrientedBox(o.w/60,o.h/60,V(o.x,o.y).div(),Math.toRadians(o.a))}
    f=new b2d.Dynamics.b2FixtureDef()
    f.den(o.d||.5)
    if(g.n){f.isSensor=true}
    f.shape = p
    return f
}


b2d.polyCirc=function(rad,prec){
    rad = N(rad)?rad:20
    prec = N(prec)?prec:20
    var arr=[],
        ang= 2 * Math.PI/prec
    _.times(prec,function(i){
        arr.push(V( rad*Math.cos(ang*i),rad*Math.sin(ang*i)))})
    return arr}

b.cir= function(o){
    var b=this,fd,h,f,g=G(arguments),o=g[0]
    if(A(g[0])){return b.cir.apply(b,g[0])}
    if(O(g[1])){_.each(g, function(c){b.cir(c)}); return b}

    o = O(g[0])?g[0]
        :S(g[1])?{c:g[0],C:g[1],r:g[2],x:g[3],y:g[4]}
        :S(g[0])?{c:g[0],r:g[1],x:g[2],y:g[3]}
        :{r:g[0],x:g[1],y:g[2],c:g[3],C:g[4]}



    o.q = D(q)? o.q: true
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.r = _.tN(o.r,40)
    o.w = _.tN(o.w,50)
    o.h = _.tN(o.h, o.w||100)
    o.a = _.tN(o.a)
    o.d = _.tN(o.d, 0.5)
    o.b = _.tN(o.b, 0.5)
    o.f = _.tN(o.f, 0.5)
    o.s = D(o.s)? o.s: 0; if(g.n){o.s=1}


    fd = new b2d.FixtureDef
    fd.den(o.d).rest(o.b).fric(o.f)
    fd.shape = new b2d.CircleShape(o.r/30);
    fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    fd.isSensor = o.s? true : g.n? true: false
    f = b.fixt(fd)
    if(o.k){  f.K(o.k)  }

    if(o.c!=0){
        f.bS(

            w.s.h().cir(o) //.circle(o)


        )}

    return b
}
b.rec = b.RECT= function(c, W, H, x, y, a){var b=this,w= b.wor(),
    g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],
    fD,f,h,k, o,p
    if(A(g[0])){return b.rec.apply(b,arguments)}
    if(O(g[1])){
        _.each(arguments, function(g){
            b.rec(g)
        })
        return b}
    if(O(g[0])){o=g[0]} else {
        if (N(g[0])) {
            g.unshift(null)
        }
        o = _.extend({c: g[0], w: g[1]},
            S(g[2]) ? {k: g[2]} :
                S(g[3]) ? {h: g[2], k: g[3]} :
                    S(g[4]) ? {h: g[2], x: g[3], k: g[4]} :
                        S(g[5]) ? {h: g[2], x: g[3], y: g[4], k: g[5]} :
                        {h: g[2], x: g[3], y: g[4], a: g[5]})}
    b2d.oDef(o)
    fD = new b2d.FixtureDef()
    fD.den(o.d||.5)
    p = new b2d.PolygonShape()
    p.SetAsOrientedBox(o.w/60,o.h/60,V(o.x,o.y).div(),
        Math.toRadians(o.a))
    fD.shape = p
    if(o.s||g.n){
        fD.isSensor = true;
        o.o= _.tN(o.o, 0.8)
    }

    f = b.f(fD)
    if(o.k){f.K(o.k)}

    if(S(o.c)){f.bS(w.s.rec(o))}
    return f

}


b.pol=function(o){var b=this,v,h,f,fd,n,fs, h,mult
    o=b2d.fixtPams(o)
    if(o.X){b.clear()}
    if(o.q==false){
        h= new b2d.PolygonShape()
        v = _.map(o.v, b2d.div)
        h.SetAsArray(v, v.length)
        fd = new b2d.Dynamics.b2FixtureDef()
        fd.shape = h
        fd.den(o.d).rest(o.b).fric(o.f)
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(o.C){f.C(o.C)}
        return f}

    n = b.num()

    if(O(o.v[0][0])){
        _.e(o.v,function(v){b2d.fig(b,v)}) }
    else {b2d.fig(b, o.v); o.v=[o.v]}

    fs = _.f(b.fixts(),b.num()-n)

    _.e(fs,function(f){
        f.den(o.d).rest(o.b).fric(o.f)

        f.m_isSensor = sen = o.s ? true : false

        if(o.k){f.K(o.k)}

        ///////////////////////////////

        // should be: f.c(o).lt(o.v)
        // w.s.h() ?

        if(o.c){
            f.C(o.c,o.C,o.l)}
        if(o.lf){f.bS(
            w.s.h().lf(o).lt(o.v))}

        if(o.rf){f.bS(

            //w.s.h().c(o).lt(o.v) // w.s.h().poly(o)
            w.s.h().rf(o).lt(o.v)
        )}

        ///////////////////////////////

    })

    if(o.bm){b.bS(w.s.h().bmV(o))}

    return fs.length>1?fs:fs[0]}

CIR=function(){W().C('y'); cjs.rulers()
    b = w.ball(600,300,10)

     f0= b.cir({k:'cir', r:100, x:200,  y:-100, d:.2, b:.8, f:100, C:'x'})

    f = b.cir({    x:200,  y:100,C:'w'   })
    f2 = b.rec({
        x:200,  y:-100,
        w:400,  h:20,   C:'x' })



    b1=w.D(600,300)
    b1.cir(100)
    b1.cir(80, 0,-60)
    b1.cir(60, 0, -140)
    b1.cir('*','*', 20,0,-140)



}

POL=function(){W([1200,600,2400,600],{g:0}).C('z').Y()

    y.track()

    cjs.rulers()
    b=w.D(100,300)
    pf = b.pol({s:1, C:'y',v:[[-200,-100],[0,-200],[100, -100]] })
    pfs =  b.pol({s:1, C: 'o',  v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
    cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
    rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})

    w.D(200,300).pol({
        v:[[0,100],[0,-100],[200,-150],[200,150]],
        c:'y',C:'w',l:5,
        bm:1
    })
    w.D(800,300).pol({
        v:[
            [[5,100],[0,-100],[200,-150],[200,150]],
            [[-50,50],[-50,-100],[450,-50],[450,50]]
        ],
        c:'b',C:'X',
        bm:1
    })
}

notSureIfUsedOrNeeded=function(){

    b.cirs=function(){var b=this
        _.each(arguments, function(o){o=V(o)
            b.cir({
                x: o.x,
                y: o.y,
                C:'*'
            })
        })
        return b}
    b.recs=function(){var b=this


        return b}

    w.rect1 = function (x, y, W,H, c) {var w = this,b
        x = _.tN(x,200)
        y = _.tN(y,50)
        W = _.tN(W,50)
        H = _.tN(H,W)
        b = w.box({
            c:c,x:x,y:y, w:W,h:H
        }).lD(2)
        return b}

    b._rec=function(o){var b=this,fd, f,h
        o=b2d.fixtPams(o)
        fd = new b2d.Dynamics.b2FixtureDef()
        fd.den(o.d).rest(o.b).fric(o.f)
        h = new b2d.PolygonShape()
        fd.shape = h
        h.SetAsOrientedBox(o.w/2/30,o.h/2/30,
            V(o.x, o.y).div(),
            Math.toRadians(o.r))
        //fd.isSensor=o.s?true:false
        f = b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(o.C){f.bindSprite(w.s.RECT(o.C, o.w, o.h,o.x, o.y, o.r),0, 0, 0, o.a)}
        return f}
    w.addRandomBody = w.randomFixture=function(){
        var body= this.dynamic(Math.random() * 1000, 100,
            b2d.randomFixture())
        return body}
    w.random=w.addRandomBodies=function(howMany){
        howMany=howMany||10; var that=this
        _.times( howMany, function(num){
            that.addRandomBody()})
        return this}

    b.RECT1 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],

        fd,
        f,
        h,
        k,
        al= 1

        if(S(a)){k=a;a=null}
        if(S(y)){k=y;y=null}
        if(S(x)){k=x;x=null}
        if(S(H)){k=H;H=null}
        if(!S(c)){a=y;y=x;x=H;H=W;W=c}

        fd=b2d.rec(W,H,x,y,a)

        if(g.n){fd.isSensor=true; al=.2}
        f=b.fixt(fd)

        if(k){f.K(k)}

        if(S(c)){f.bS(w.s.rec(c,W,H,x,y,a),0,0,0,al)}

        return f

    }



    b.RECT0 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],

        fd,
        f,
        h,
        k

        if(S(a)){k=a;a=null}
        if(S(y)){k=y;y=null}
        if(S(x)){k=x;x=null}
        if(S(H)){k=H;H=null}
        if(!S(c)){a=y;y=x;x=H;H=W;W=c}

        o = {c:c, w:W, h:H, x:x,y:y,a:a,k:k }
        o.o= 1
        fd=b2d.rec(o.w, o.h, o.x, o.y, o.a)
        if(g.n){fd.isSensor=true; o.o=.2}
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(S(o.c)){f.bS(w.s.rec(o.c, o.w, o.h, o.x, o.y, o.a),0,0,0, o.o)}
        return f
    }


    b.RECT00 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],
        fd,  f,  h,  k

        if(N(c)){a=y;y=x;x=H;H=W;W=c;c=null}

        if(S(a)){o = {c:c, w:W, h:H,x:x,y:y, k:a}}
        else if(S(y)){o = {c:c, w:W, h:H,x:x, k:y}}
        else if(S(x)){o = {c:c, w:W, h:H, k:x}}
        else if(S(H)){   o = {c:c, w:W, k:H}}
        else {o = {c:c, w:W, h:H, x:x, y:y, a:a  }}

        o.o= 1
        fd=b2d.rec(o.w, o.h, o.x, o.y, o.a)
        if(g.n){fd.isSensor=true; o.o=.2}
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(S(o.c)){f.bS(w.s.rec(o.c, o.w, o.h, o.x, o.y, o.a),0,0,0, o.o)}
        return f
    }



    b.RECT000 = function(c, W, H, x, y, a){var b=this,w= b.wor(),g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],
        fd,f,h,k,o

        if(O(c)){o=c}

        else {
            if(N(c)){a=y;y=x;x=H;H=W;W=c;c=null}
            o = S(a)? {c:c, w:W, h:H,x:x,y:y, k:a} :
                S(y)? {c:c, w:W, h:H,x:x, k:y} :
                    S(x)?{c:c, w:W, h:H, k:x}
                        :S(H)?{c:c, w:W, k:H}:
                    {c:c,w:W,h:H,x:x,y:y,a:a}}

        o=o||{}
        b2d.oDef(o)
        fd=b2d.rec(o.w, o.h, o.x, o.y, o.a)
        if(g.n){fd.isSensor=true; o.o=.2}
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(S(o.c)){

            f.bS(
                w.s.rec(o.c, o.w, o.h, o.x, o.y, o.a),

                0,
                0,
                0,
                o.o

            )}
        return f

    }

    b._cir=function(C, r, x, y){var c=''
        var b=this,  g= G(arguments),
            C=g[0];r=g[1];x=g[2];y=g[3];
        if(S(y)){c=y;y=null}
        if(S(x)){c=x;x=null}
        if(S(r)){c=r;r=null}
        if(!S(C)){y=x; x=r; r = C}

        return  {
            x:x,  y:y,  r:r,  C:C,
            s: g.n?1:0
        }
    }

    w.bul = function (x, y) {
        var def, body
        def = b2d.dyn(x, y)
        def.bullet = true
        body = this.createBody(def)
        return body
    }


    w.polyBul = function (x, y, wd, ht, col) {
        var bul = this.bul(x, y)
        bul.poly(wd, ht)

        if (col) {
            bul.bindSprite2(
                cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
            )
        }


        return bul
    }

    w.kin= function(x, y, fixtDef){var body
        if( O(x) ){fixtDef=y; y=x.y; x=x.x}
        x = N(x)?x: 500
        y = N(y)?y: 250
        body = this.A(b2d.kin(x,y), fixtDef)
        return body}
    w.stat=function(x, y, fD){var w=this, b
        if( O(x) ){fD=y; y=x.y; x=x.x}
        x = N(x)?x: 500
        y = N(y)?y: 250
        return  w.A(b2d.stat(x,y), fD)}

    w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
        stop1 = N(stop1) ? stop1 : 0
        stop2 = N(stop2) ? stop2 : 1
        col1 = oO('c', col1);
        col2 = oO('c', col2)
        return this.ball(x, y, r).bS2(
            this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
                0, 0, 0, 0, 0, r).dc(0, 0, r))
    }


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


    w.rectStat = function (x, y, wd, ht, color) {

        x = N(x) ? x : 200

        y = N(y) ? y : 50

        wd = N(wd) ? wd : 50

        ht = N(ht) ? ht : wd

        color = oO('c', color || $r())

        return this.brick(x, y, wd, ht).bindSprite2(
            cjs.rect(wd, ht, color).XY(x, y)
        ).linDamp(2)

    }
    w.rectSensor = function (x, y, wd, ht, color) {

        x = N(x) ? x : 200

        y = N(y) ? y : 50

        wd = N(wd) ? wd : 50

        ht = N(ht) ? ht : wd

        color = oO('c', color || $r())

        return this.brickSensor(x, y, wd, ht).bindSprite2(
            cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
        ).linDamp(2)

    }

    w.cirx= w.circx= function(x,y,r,c){

        //takes x,y before r?
        //try and avoid this func for now
        // will err on random x,y.. dont like it.
        // that should be with '*'
        // (explicityly ONLY for something like this)

        var w=this,g=G(arguments),
            b,
            H= w.s.H(),
            W= w.s.W(),o
        o=O(g[0])?g[0]: {x:x,y:y,r:r,c:c}

        o.x= _.tI(o.x, R(W-100,60))
        o.y= _.tN(o.y, 50)
        o.r= _.tN(o.r, R(14,8))

        b = w.D(o.x, o.y).cir({r: o.r, c:o.c})

        return b}



}