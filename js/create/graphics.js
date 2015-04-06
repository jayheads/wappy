h =  cjs.Shape.prototype
ct=cjs.Container.prototype

b2d.grad=function(o){o=o||{}
    o.c1 = oO('c', o.c1 || 'z'); o.c2 = oO('c', o.c2 || 'w')
    o.s1 = _.tN(o.s1); o.s2 = _.tN(o.s2, 1)
    o.x1 = _.tN(o.x1); o.y1 = _.tN(o.y1)
    return o}
h.lg=function me(){var h=this,gx=h.graphics,g=G(arguments),o
    if(A(g[0])){return me.apply(null, g[0])}

    o = O(g[0]) ? g[0]
        :_.extend({c1:g[0], c2:g[1]},
        N(g[5])?{x1:g[2],y1:g[3],x2:g[4],y2:g[5]}
            :N(g[4])?{y1:g[2],x2:g[3],y2:g[4]}
            :N(g[3])?{x2:g[2],y2:g[3]}:{y2:g[2]})

    o.c1 = oO('c', o.c1 || 'z'); o.c2 = oO('c', o.c2 || 'w')
    o.s1 = _.tN(o.s1); o.s2 = _.tN(o.s2, 1)
    o.x1 = _.tN(o.x1); o.y1 = _.tN(o.y1)
    o.x2 =_.tN(o.x2);
    o.y2 = N(o.y2)?o.y2:N(o.r)?o.r*2:100

    return o
}
h.rg=function(o){ var h = this, gx = h.graphics,  g = G(arguments),
    o = O(g[0]) ? g[0] :
        S(g[1]) ? _.extend({c1: g[0], c2: g[1]},
            N(g[5]) ? {x2: g[2], y2: g[3], r1: g[4], r2: g[5]} :
                N(g[4]) ? {x2: g[2], r1: g[3], r2: g[4]} :
                    N(g[3]) ? {r1: g[2], r2: g[3]} : {r2: g[2]}) :
            S(g[0]) ? {c2: g[0]} : {}
    b2d.grad(o)
    o.x2 = _.tN(o.x2, o.x1)
    o.y2 = _.tN(o.y2, o.y1)
    o.r1 = _.tN(o.r1, 1);
    o.r2 = _.tN(o.r2, 100)
    return o}
cjs.me=function(fn){
    Q(['me'],
        function(q){
            fn(q.getResult('me'))})
}

h.z = h.clr=function(){this.graphics.clear();return this}
h.c= h.f=function(c,C,l){  var h=this,  gx=h.graphics,  g= _.toArray(arguments), o


    o = O(g[0])? g[0]:

        g[0]=='*'? {c:'*'}:
                g[0]=='**'? {c:'**'}:
                        g[0]=='*'? {c:'***'}:
            U(g[0])? {c:'z',C:'w',l:6}:

                N(g[1])? {c:g[0],l:g[1]}:
                    N(g[0])? {l:g[0],C:g[1]}://?
                    {c:g[0], C:g[1], l:g[2]}



    if(A(o.c)){
        if( N(o.c[1]) ){o.l = o.c[1]; o.c  = o.c[0]}
        else if (N(o.c[0])){o.l=o.c[0]; o.C= o.c[1]}
        else {o.l=o.c[2]; o.C=o.c[1]; o.c=o.c[0]}}

    if(A(o.C)){
        o.l= o.C[1];o.C= o.C[0]
    }

    if(o.c==0){gx.f(null);o.c='X'}
    if(o.C==0){gx.s(null);o.C='X'}

    if(o.c==00){gx.f(null);gx.s(null);o.c='X';o.C='X'}


    if(o.c=='*'){o.c=$r()}
    if(o.C=='*'){o.C=$r()}
    if(o.c=='**'){o.c=$r();o.C=$r()}

    if(o.c=='***'){$l('***')

        o.c = $r(); o.C=$r(); o.l = R(20)}

    if(S(o.c)){gx.f(oO('c', o.c))}
    if(S(o.C)){gx.s(oO('c', o.C))}
    if(N(o.l)){h.l(o.l)}

    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.r = _.tN(o.r)

    if(o.lf){

        o.lf = O(o.lf)? o.lf : {}

        if(o.r){
            o.lf.x1 = _.tN(o.lf.x1) + o.x - o.r
            o.lf.y1 = _.tN(o.lf.y1) + o.y - o.r
            o.lf.x2 = _.tN(o.lf.x2) + o.x - o.r
            o.lf.y2 = _.tN(o.lf.y2) + o.y + o.r
            /*
            $l('r: ' + o.r)
            $l('x: ' + o.x)
            $l('y: ' + o.y)
            $l('x1: '+ o.lf.x1)
            $l('y1: '+ o.lf.y1)
            $l('x2: '+ o.lf.x2)
            $l('y2: '+ o.lf.y2)

            */
        }

        h.lf(o.lf)
    }



    if(o.ls){o.ls = O(o.ls)? o.ls : {}
        if(o.r){
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r}
        h.ls(o.ls)}

    if(o.rf){o.rf = O(o.rf)? o.rf : {}
        if(o.r){
            o.rf.x1 = _.tN(o.rf.x1) + o.x
            o.rf.y1 = _.tN(o.rf.y1) + o.y
            o.rf.x2 = _.tN(o.rf.x2) + o.x
            o.rf.y2 = _.tN(o.rf.y2) + o.y
            o.rf.r2 = _.tN(o.rf.r2) + o.r}
        h.rf(o.rf)}



    if(o.rs){o.rs = O(o.rs)? o.rs : {}
        if(o.r){
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r}
        h.rs(o.rs)}



    if(o.bs){h.bs(o.bs)}

    if(o.bf){h.bf(o.bf)}

    return h

}
h.C= h.s=function (C, l) {var h=this,gx=h.graphics

    gx.s(oO('c', C))

    if(N(l)){h.l(l)}

    return h

}
h.l= h.ss=function (l, b, c) {
        var h = this, gx = h.graphics;
        gx.ss(l || 1, b, c)
        return h}
h.bf=  function(i,fn,c){var h = this, gx = h.graphics



        if(S(i)){

            $.img(i,function(i){
                gx.bf(i[0])
                if(F(fn)){fn(i[0])}
            }) }


        else {

            if(O(fn)){gx.bf(i,null,fn)} else{gx.bf(i,fn,c)} }



        return h
    }
h.bs=  function (i) {
        this.graphics.beginBitmapStroke(i)
        return this
    }
h.ef = function () {
        var h = this, gx = h.graphics
        gx.endFill()
        return h
    }
h.es = function () {
        var h = this, gx = h.graphics
        gx.endStroke()
        return h
    }
h.cp=function(){this.graphics.cp(); return this}
h.lt= function(x,y){var h=this, gx=h.graphics, v
        if(A(x) && O(x[0])){
            return h.lt.apply(h, x)}
        if(N(x)){gx.lt(x,y); return h}
        _.each(arguments,function(v){v=V(v)
            h.lt(v.x,v.y)})
        return h}
h.mt=function(x,y){//h.pol=
    var h=this,
        gx= h.graphics, g=arguments, x=g[0], y=g[1], v


    if(A(g[0]) && O(g[0][0])){
        _.e(g,function(v){
        h.mt.apply(h,v)
    });return h}



    if(N(x)){v=V(x,y); gx.mt(v.x, v.y)}

    else {v=V(_.first(g))
            h.mt(v.x,v.y)
            _.e(_.r(g),function(v){v=V(v)
                h.lt(v.x, v.y)})}

    return h
}
h.poly= function(V,c,C,l){//***

    var h=this, g=G(arguments),
        o = A(g[0])?  {v:g[0],c:g[1],C:g[2],l:g[3]} :           //array must come first b/c its an obj
        O(g[0])? g[0] : {}

    b2d.oDef(o)

    h.ef().es()
    h.c(o)


    if(o.bf){h.bf('me', function(){   h.lt(o.v).cp()  })}

    else {h.lt(o.v).cp()}

    return h
}

h.bmCir=function(o){var h=this
    o=o||{}
    o.i = o.i || 'me'
    o.circs= o.circs||[]
    $.img(o.i,function(i){i=i[0]
        _.each(o.circs, function(c){
            h.bf(i)
            h.dc(c)
            h.ef()
        })})
    return h}

h.bmV=function(o){var h=this
    o=o||{}
    o.i = o.i || 'me'

    $.img(o.i, function(i){i=i[0]
        _.each(o.v, function(v){
            h.bf(i)
            h.lt(v)
            h.ef().cp()
        })})
    return h}

h.dc= function(x,y,r){var h=this,gx=h.graphics,
    g=G(arguments),o



    if(A(g[0])&&O(g[1])){
        _.e(g, function(c){
            h.dc(c)
        }); return h}

    if(A(g[0])){
        return h.dc.apply(h,g[0])
    }

    o=O(g[0])? g[0]:
        N(g[2])? {x:g[0],y:g[1],r:g[2]}:
            N(g[0])? {r:g[0]} : {}

    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.r = _.tN(o.r,100)

    //h.mt(o.x, o.y).cp()

    gx.dc(o.x, o.y, o.r)
    h.C()
    return h

}

h.cir= function(x,y,r,c,C,l){  //h.circ =

//nicely done

    var h=this, gx=h.graphics, o

    h.ef().es()

    if(N(r)){o = {x:x, y:y, r:r, c:c, C:C, l:l}}
    else if(N(y)){ o = {x:x, y:y, r:50,c:r,C:c,l:C}  }
    else if(N(x)){  o  = {x:0,y:0,r:x, c:y,C:r,l:c}  }
    else if(O(x)){o=x}
    else {o={}}


    o.x = _.tN(o.x);
    o.y = _.tN(o.y);
    o.r = _.tN(o.r, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.l = _.tN(o.l, 4)


    if(o.rf){h.rf(o.c, o.C, 10, 20, o.r).C('z',2).dc(o)}

    else if(o.lf){
        h.lf(o.c,  o.C,
                -o.r *.5,
                -o.r *.5,
                -o.r *.5,
                o.r *.5
        ).C('z',2).dc(o)
    }


    else if(o.bf){
        h.bf('me', function(){h.C(o.C, o.l)
            .dc(o.x, o.y, o.r)})}

    else {
        h.c(o.c,o.C, o.l)
        h.dc(o.x,o.y,o.r)
    }


    // o = N(y) ?  {x:0,y:0,  r:x,c:y,C:r,l:c} : S(y) ?  {c:x,C:y,x:r,y:c,r:C,l:l} :   S(x) ?    {c:x, x:y, y:r, l:C} :     O(x) ? x : {}
    // return h.c(o.c, o.C, o.l).dc(o.x, o.y, o.r)

    return h
}
h.circle=function(o){var h=this
    h.c(o).dc(o)
    return h}


h.dr= function(){
    var h = this,
        gx = h.graphics,
        g = G(arguments),
        o = N(g[2])? {x:g[0],y:g[1],w:g[2],h:g[3]} :
            N(g[0])?{w:g[0],h:g[1]} :
                O(g[0])?g[0]:{}


    o.x=_.tN(o.x)
    o.y=_.tN(o.y)
    o.w=_.tN(o.w,100)
    o.h=_.tN(o.h,o.w)

    gx.dr(o.x,o.y,o.w,o.h)
    return h

}
h.dr2=function(x,y,W,H){var h=this,g=G(arguments),o


    if( O(g[0]) && O(g[1]) ){
        _.each(g, function(r){
            h.dr2(r)
        })
    return h}

    o= O(g[0])?g[0]:
        U(g[2])?{w:g[0],h:g[1]}:
        {x:g[0],y:g[1],w:g[2],h:g[3]}

    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w,50)
    o.h = _.tN(o.h,o.w)


    h.dr(-o.w/2+o.x,-o.h/2+o.y,o.w,o.h)
    return h
}
h.rect= function(x,y,W,H,c,C){


    var o = {
        x:x, y:y, w:W, h:H, c:c,C:C
    }

    return this.c(o).dr2(o.x, o.y, o.W, o.H)

}
h.rec=function(c,C,x,y,w,H,l){var h=this,g=G(arguments)//h.rexx=
    o=O(c)? c:
        S(C)? {c:c, C:C, x:x, y:y, w:w, h:H, l:l}:
            S(c)? {c:c, x:C, y:x, w:y, h:w, l:H}:
            {x:c, y:C, w:x, h:y}
    h.c(o)
    if(o.i){h.bmF(o.i,fun); return}
    if(o.lG){
        h.lG({
            c:o.c||'z',C:o.C||'w',s:0,S:1,
            x:o.x-o.w/2,
            y:o.y-o.h/2,
            X:o.x-o.w/2,
            Y:o.y+o.h/2
        })}
    fun()
    return h
    function fun(){h.mt( // same as dr2??
            [o.x-o.w/2, o.y+o.h/2],
            [o.x-o.w/2, o.y-o.h/2],
            [o.x+o.w/2, o.y-o.h/2],
            [o.x+o.w/2, o.y+o.h/2])}
}


h.lf=function me(){var h=this,gx= h.graphics,g=G(arguments),o

    if(A(g[0])){return me.apply(h,g[0])}

    o = h.lg.apply(h,g)

    gx.lf([o.c1, o.c2],[o.s1,o.s2],o.x1,o.y1,o.x2,o.y2)

    return h
}
h.ls=function me(){var h=this, gx= h.graphics, g=G(arguments),o
    if(A(g[0])){return me.apply(h,g[0])}
    o= h.lg.apply(h, g)
    gx.ls([o.c1, o.c2],[o.s1,o.s2],o.x1,o.y1,o.x2,o.y2)
    return h}
h.rs=function me(){var h=this, gx=h.graphics, g=G(arguments),o
    if(A(g[0])){return me.apply(h,g[0])}
    o=h.rg.apply(h,g)
    gx.rs([o.c1,o.c2],[o.s1,o.s2], o.x1,o.y1,o.r1,o.x2,o.y2,o.r2)
    return h}
h.rf=function me(){var h=this, gx=h.graphics,g=G(arguments),o
    if(A(g[0])){return me.apply(h,g[0])}
    o = h.rg.apply(h, g)
    gx.rf([o.c1,o.c2],[o.s1,o.s2],o.x1, o.y1, o.r1,o.x2, o.y2, o.r2)
    return h}
















more=function(){

    h.dr2x=function(x,y,W,H){var h=this



        if(U(W)){
            W=x;H=y;x=0;y=0
        }

        h.dr(-W/2+x,-H/2+y,W,H)


        return h
    }



    // s.B = function(x,y){return this.ct(x,y).drag() }

    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */
    h.C2= function (C, l) {var h=this,gx=h.graphics,g=G(arguments)
        o=O(g[0]) ? g[0]
            :
        {C:[0], l:g[1]}
        gx.s(o.C?  oO('c',o.C): null)
        if(N(o.l)){h.l(o.l)}
        return h

    }


    h.copy=h.same=function(){return $h(this)}


    //******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
        return h
    }
    h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
        var h = this, gx = h.graphics,

            g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

        o = N(g[3]) ? {
            x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]} :

            N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

                O(g[0]) ? g[0] : {}

        o.a = _.tN(o.a)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.p = cjs.cap(o.p, 0, .99)

        gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
        return h
    }
    h.drawPolygons = function (paths, C, c) {
        var h = this
        h.C(C)
        if (c) {
            h.c(c)
        }
        _.each(paths, function (p) {
            h.drawPolygon(p)
        })
        return h
    }
    h.de = h.ell = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),
            o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                N(g[0]) ? {w: g[0], h: g[1]} :
                    O(g[0]) ? g[0] : {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)
        gx.drawEllipse(o.x, o.y, o.w, o.h)
        return h
    }
    h.de2 = function (x, y, W, H, r) {
        var h = this
        h.de(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }
    h.rr = function () {
        var h = this,
            gx = h.graphics,
            g = G(arguments),

            o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
                N(g[1]) ? {w: g[0], r: g[1]} :
                    N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                        O(g[0]) ? g[0] : {}


        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)

        gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
        return h
    }
    h.rr2 = function (x, y, W, H, r) {
        var h = this
        h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
        return h
    }


    ROUNDREC = function () {
        St()
        h.c('b', 'r', 5).dc(100, 100, 100)
        h.dr(300, 200, 100, 50)
        h.dr2(500, 200, 100, 50)
        h.rr2(500, 200, 100, 50, 50)
        h.de2(500, 200, 100, 50)

        s.dot(100, 100)
        s.dot(300, 200)
        s.dot(500, 200)
        s.dot(500, 200)
        s.dot(500, 200)
    }


    h.drawPolygonYesNo = function (V, c, C, l) {
        var h = this, //h.drawConnectedLines =

            n = V.length

        h.c(c, C, l)

        _.each(V, function (v) {

            v.X = v.x
            v.Y = v.y

        })

        if (n >= 3) {
            h.mt(V[0]) //move to the FIRST//lineTo the REST

            T(n, function (i) {
                h.lt(V[i % n])
            })
        } //just a clever way to start from 1

        return h
    }

// h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  } //h.cir2=
    h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.bezierCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.quadraticCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.arc = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        /*
         Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
         For example, to draw a full circle with a radius of 20 centered at (100, 100):
         arc(100, 100, 20, 0, Math.PI*2)
         */

        h.arc(x, y, r, startA, endA, aCW)

        return h
    }
    h.arc2 = function (x, y, X, Y, r) {
        var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
        gx.arcTo(x, y, X, Y, r)
        return h
    }






///////

    cjs.RECTx = function (c, W, H, x, y, a) {
        $l('rect!')
        //hW = W/2; hH = H/2  //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

        var hW, hH, h, ct = cjs.ct(), o, g = G(arguments)

        if (S(c)) {

            o = {c: c, w: W, h: H, x: x, y: y, a: a}
        }

        //hW = W/2; hH = H/2
        o = o || O(g[0]) ? g[0] : {}

        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, 50)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.c = oO('c', o.c || 'g')

        h = $h()

        h.c(c)

        h.dr2(x, y, W, H)         //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

        h.rot(a)

        h.XY(x, y)

        ct.A(h)

        return ct

    }


    h.dcWorking = function (x, y, r) {
        var h = this, gx = h.graphics

        if (N(r)) {
            gx.dc(x, y, r)
        }

        else if (N(y)) {
            gx.dc(x, y, 100)
        }

        else if (N(x)) {
            gx.dc(0, 0, x)
        }
        else {
            gx.dc(0, 0, 100)
        }

        return h
    }

    h.rrx = function (x, y, W, H, r) {
        var h = this, gx = h.graphics
        gx.drawRoundRect(x, y, W, H, r)
        return h
    }
    h.dex = h.ellx = function (x, y, W, H) {
        var h = this, gx = h.graphics

        gx.drawEllipse(x, y, W, H)

        return h
    }
    h.drx = function (x, y, W, H) {
        var h = this, gx = h.graphics
        if (N(H)) {
            gx.dr(x, y, W, H)
        }
        else if (N(W)) {
            gx.dr(x, y, W, W)
        }
        else if (N(y)) {
            gx.dr(0, 0, x, y)
        }
        else if (N(x)) {
            gx.dr(0, 0, x, x)
        }
        else {
            gx.dr(0, 0, 100, 100)
        }
        return h
    }

};more()