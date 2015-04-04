b=b2.Dynamics.b2Body.prototype




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


b.RECT = function(c, W, H, x, y, a){var b=this,w= b.wor(),

    g= G(arguments),c=g[0],W=g[1],H=g[2],x=g[3],y=g[4],a=g[5],

    fd,f,h,k,o

    if(O(g[0])){o=g[0]}//passing in object (o)

    else{//passing in pams directly
        if(N(g[0])){g.unshift(null)}
         o={c:g[0],w:g[1]}
        _.extend(o,
            S(g[2])? {k:g[2]}:
            S(g[3])? {h:g[2],k:g[3]}:
            S(g[4])? {h:g[2],x:g[3],k:g[4]}:
            S(g[5])? {h:g[2],x:g[3],y:g[4],k:g[5]}:
                     {h:g[2],x:g[3],y:g[4],a:g[5]})}

    o=b2d.oDef(o)


    fd = b2d.rec(o.w,o.h,o.x,o.y,o.a)


    if(g.n){fd.isSensor=true;o.o=.2}

    f=b.fixt(fd)
    if(o.k){f.K(o.k)}


    if(S(o.c)){f.bS(w.s.rec(o))}

    return f
}












b2d.fixtPams=function(o){o=o||{}

    o.a = N(o.a)? o.a: 0 //angle
    o.b = N(o.b)? o.b: 0.5//rest

    o.cc = D(o.cc)? o.cc: true //separate

    o.c = o.c==0? null : (o.c||'w')
    o.C = o.C==0? null : (o.C||'z')

    o.d = N(o.d)? o.d: 0.5//density

    o.f = N(o.f)? o.f: 0.5//fric   o.x = N(o.x)? o.x: 0//x
    o.g// gradient
    o.h = N(o.h)? o.h: 30//height
    o.i //image
    o.k // kind

    o.l = N(o.l)? o.l: 4 // line thickness

    o.m //mass

    o.o = N(o.o)? o.o: 1 //opacity
    o.p // layer position
    o.q //query for conc?
    o.r = N(o.r)? o.r: 40//radius
    o.s = D(o.s)? o.s: 0//sesor
    o.t //type
    o.v = o.v || [] //verts
    o.w = N(o.w)? o.w: 40//width

    o.X
    o.x = N(o.x)? o.x: 0
    o.y = N(o.y)? o.y: 0//y
    o.z  //clr

    return o
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





TESTB=function(){W(0);cjs.rulers()

    b = w.D(600,300)
    b.cir(100)
    b.cir(80, 0,-60)
    b.cir(60, 0, -140)
    b.cir('*','*', 20,0,-140)

}



b.cir=function(o){var b=this,fd,h,f,g=G(arguments),o=g[0]
    if(A(g[0])){return b.cir.apply(b, arguments)}
    if(S(g[1])){o={c:g[0], C:g[1], r:g[2], x:g[3], y:g[4]}}
    else if(S(g[0])){o={c:g[0], r:g[1], x:g[2], y:g[3]}}
    else if(S(g[3])){o={r:g[0], x:g[1], y:g[2],c:g[3], C:g[4]}}
    else if(N(g[0])){
        o={r:g[0],x:g[1],y:g[2]}}

    o=b2d.fixtPams(o)
    fd=new b2d.FixtureDef; fd.den(o.d).rest(o.b).fric(o.f)
    fd.shape = new b2d.CircleShape(o.r/30); fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    fd.isSensor= o.s? true : false
    f = b.fixt(fd)
    if(o.k){f.K(o.k)}
    if(o.c){f.bS(w.s.h().cir(o))}

    return b}




b.rec=function(o){o=b2d.fixtPams(o); var b=this,fd
    fd = new b2d.Dynamics.b2FixtureDef()
    fd.den(o.d).rest(o.b).fric(o.f)
    h = new b2d.PolygonShape()
    fd.shape = h
    h.SetAsOrientedBox(o.w/2/30,o.h/2/30,V(o.x, o.y).div(),Math.toRadians(o.r))
    fd.isSensor=o.s?true:false
    f = b.fixt(fd)
    if(o.k){f.K(o.k)}
    if(o.C){f.bindSprite(w.s.RECT(o.C, o.w, o.h,o.x, o.y, o.r),0, 0, 0, o.a)}
    return f}

b.pol=function(o){o=b2d.fixtPams(o); var b=this,v,h,f,fd,n,fs
    if(o.X){b.clear()}
    if(o.cc){n=b.num()
        b2d.sep(b,o.v)
        fs = _.first(b.fixts(), b.num()-n)
        _.each(fs, function(f){
            f.den(o.d).rest(o.b).fric(o.f)
            f.m_isSensor = sen=o.s? true: false
            if(o.k){f.K(o.k)}
            if(o.C){f.C(o.C)}
        })
        f=fs.length>1?fs:fs[0]}
    else {
        h= new b2d.PolygonShape()
        v=_.map(o.v, b2d.div)
        h.SetAsArray(v,v.length)
        fd=new b2d.Dynamics.b2FixtureDef()
        fd.shape = h
        fd.den(o.d).rest(o.b).fric(o.f)
        f=b.fixt(fd)
        if(o.k){f.K(o.k)}
        if(o.C){f.C(o.C)}

    b.cirs=function(){var b=this
    _.each(arguments, function(o){o=V(o)
        b.cir({
            x: o.x,
            y: o.y,
            C:'*'
        })
    })
    return b}

}
return f}









POL=function(){W({g:0}).C('z').db(); cjs.rulers()
    b = w.D(600,300) //w.ball(600,300,10)
    pf = b.pol({s:1, C:'y',v:[[-200,-100],[0,-200],[100, -100]] })
    pfs =  b.pol({s:1, C: 'o',  v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
    cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
    rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})

}




b2d.polyCirc=function(rad,prec){
    rad = N(rad)?rad:20
    prec = N(prec)?prec:20
    var arr=[],
        ang= 2 * Math.PI/prec
    _.times(prec,function(i){
        arr.push(V( rad*Math.cos(ang*i),rad*Math.sin(ang*i)))})
    return arr}




CIR=function(){W().C('z').db()
    b = w.ball(600,300,10)


    // f = b.cir({k:'cir', r:100, x:200,  y:-100, d:.2, b:.8, f:100, C:'x'})


    f = b.cir({    x:200,  y:100,C:'w'   })

    f2 = b.rec({
        x:200,  y:-100,

        w:10,  h:100,   C:'x'
    })



    cjs.rulers()
    // w.Z(1.4)

}




b.recs=function(){var b=this


    return b}
b.pols=function(){var b=this


    return b}



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
