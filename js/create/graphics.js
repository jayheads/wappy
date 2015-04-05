h =  cjs.Shape.prototype
h.clr=function(){this.graphics.clear();return this}

h.c= h.f=function(c,C,l){var h = this, gx = h.graphics, g=G(arguments), o

    o = O(g[0])? g[0]:
        N(g[1])? {c:g[0],l:g[1]}:
        N(g[0])? {l:g[0],C:g[1]}://?
        {c:g[0], C:g[1], l:g[2]}

    if(o.c=='*'){o.c=$r()}
    if(o.c=='**'){o.c=$r();o.C=$r()}
    if(o.c){gx.f(oO('c',o.c))}
    if(o.C){h.C(o.C)}
    if(o.l){h.l(o.l)}
    if(o.rg){h.rg(o)}
    if(o.lg){ h.lg(o) }
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








h.bm=   h.bf=function(i,fn,c){var h = this, gx = h.graphics



        if(S(i)){

            $.img(i,function(i){
                gx.bf(i[0])
                if(F(fn)){fn(i[0])}
            }) }


        else {

            if(O(fn)){gx.bf(i,null,fn)} else{gx.bf(i,fn,c)} }



        return h
    }
h.bM= h.bmS = function (i) {
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


    if(o.bm){h.bm('me', function(){   h.lt(o.v).cp()  })}

    else {h.lt(o.v).cp()}

    return h
}
h.bmCir=function(o){var h=this
    o=o||{}
    o.i = o.i || 'me'
    o.circs= o.circs||[]
    $.img(o.i,function(i){i=i[0]
        _.each(o.circs, function(c){
            h.bm(i)
            h.dc(c)
            h.ef()
        })})
    return h}
h.bmV=function(o){var h=this
    o=o||{}
    o.i = o.i || 'me'

    $.img(o.i, function(i){i=i[0]
        _.each(o.v, function(v){
            h.bm(i)
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
h.cir= h.circ =function(x,y,r,c,C,l){  //nicely done

    var h=this, gx=h.graphics, o

    h.ef().es()

    if(N(r)){
        o = {x:x, y:y, r:r, c:c, C:C, l:l}
    }

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


    if(o.rg){
        h.rg(o.c, o.C, 10, 20, o.r).C('z',2).dc(o)
    }

    else if(o.lg){
        h.lg(

            o.c,

            o.C,
                -o.r *.5,
                -o.r *.5,
                -o.r *.5,
                o.r *.5

        ).C('z',2).dc(o)
    }

    else if(o.bm){


        h.bm('me', function(){
            h.C(o.C, o.l).dc(o.x, o.y, o.r)
        })


    }
    else {

        h.c(o.c,o.C, o.l)

        h.dc(o.x,o.y,o.r)
    }


    // o = N(y) ?  {x:0,y:0,  r:x,c:y,C:r,l:c} : S(y) ?  {c:x,C:y,x:r,y:c,r:C,l:l} :   S(x) ?    {c:x, x:y, y:r, l:C} :     O(x) ? x : {}
    // return h.c(o.c, o.C, o.l).dc(o.x, o.y, o.r)

    return h
}

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




LT=function(){St()

       h.c('y').dc(100,100,30)
        .c('o').dc(100,100,10)
        .ef()
           .C('g',8)
           .mt([[100,100],[300,300],[400,100],
            [500,300],[450,450]],[[500,0],[600,100]])


    h.cir(600,300,'u','g',10)


    lgO={c:'b',C:'o',y:200,Y:700}
    v=[[300,300],[320,200],[640,400],[280,650]]


   // h.lg(lgO)//.mt(v)


    h.poly({

        v:  v,
       lg:  lgO,
        c: 'b',
        C: 'r'
    })



}
CIRCSTROKE=function(){St()

    gx= h.graphics

    h.c('b', 'r',10).XY(-100,-100)


    h.dc([200,200,50],[400,200,50],[600,200,50])






  /*  h.dc(300,300,50)
    gx.dc(400,400,50)
    h.dc(500,500,50)
    gx.dc(600,600,50)
*/

}
ROTREC=function(){St()

    ct = s.ct(600, 300)

    ct.rec({ w:400,h:400, c:'r',C:'o',l:10,a:-5 })
    ct.rec({ w:100,h:200, c:'b',C:'w',l:20,a:20, rg:1 })
    h = ct.rec({
        w: 100, h:200, a:20,
        c: 'b', C:'w', l: 20, bm:1
    }).X(100)
    $.in(8, function(){h.X(0)}) //notice how gradient is seen behind the bm!!!

}
TWORECS=function(){St()

    ct = s.ct(1000, 300).drag()
    ct.rec({ w:400,h:200, c:'r',C:'o',l:10,a:-5 })
    h1 = ct.rec({ w:200, h:400, c:'r', C:'o', l:10, a:5 })
    // h is another container.. to clr ->  h1.children[0].clr()

    h= s.h().dr2()
   //.rec({  })

}
HPOLY=function(){St()
    v=[[-100,0],[0,-100],[100,50]]
    s.h(600,300).poly({v:v,bm:1})
    s.h(700,400).poly({v:v,bm:{}})

    h=s.h(200,300)
    h.bm('me', function(){
        h.dc(0,0,150)
        h.dc(200,0,150)
    })
    s.h(800, 300).poly({v:v,rg:1})
    s.h(900, 300).poly({v:v,lg:1})
}
BMH=function(){St()
    v=[[-100,0],[0,-100],[100,50]]
    s.h(100,300).drag().bmCir({
        circs:[{r:150},
        {x:200,r:150},
        [300,100,100],[400,100,100]]})
    s.h(700,300).drag().bmV({v:[
        [[-100,0],[0,-100],[100,50]],
        [[-200,0],[-100,-100],[0,50]],
        [[0,200],[0,-200],[400,-300],[400,300]]
    ]})
}









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