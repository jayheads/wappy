h =  cjs.Shape.prototype



h.clr=function(){this.graphics.clear();return this}
h.copy=h.same=function(){return $h(this)}

strokeFills=function(){
    h.c = h.f = function (c, C, l) {
        var h = this, gx = h.graphics
        if (U(c)) {
            return h
        }
        if (N(l)) {
            h.l(l).C(C)
        }
        else if (N(C)) {
            h.l(C)
        }
        else if (S(C)) {
            h.C(C)
        }
        gx.f(oO('c', c))
        return h
    }
    h.C = h.s = function (C, l) {
        var h = this, gx = h.graphics
        gx.s(oO('c', C))
        if (N(l)) {
            h.l(l)
        }
        return h
    }
    h.ss = h.l = function (l, b, c) {
        var h = this, gx = h.graphics;
        gx.ss(l || 1, b, c)
        return h
    }
    grads = function(){
        h.bRGS = function (C, S, x, y, r, X, Y, R) {
            var h = this, gx = h.graphics
            C = _.map(C, function (c) {
                return oO('c', c)
            })
            gx.beginRadialGradientStroke(C, S, x, y, r, X, Y, R)
            return h
        }
        h.bRGF = function (C, S, x, y, r, X, Y, R) {
            var h = this, gx = h.graphics
            C = _.map(C, function (c) {
                return oO('c', c)
            })
            gx.beginRadialGradientFill(
                C, S, x, y, r, X, Y, R)
            return h
        }
        h.bLGF = h.lf = h.linGrad = function (c, s, x, y, X, Y) {
            var h = this, gx = h.graphics
            c = _.map(c, function (c) {
                return oO('c', c)
            })
            gx.beginLinearGradientFill(c, s, x, y, X, Y)
            return h
        }
        h.bLGF = function (C, S, x, y, X, Y) {
            var h = this, gx = h.graphics
            C = _.map(C, function (c) {
                return oO('c', c)
            })
            gx.beginLinearGradientFill(
                C, S, x, y, X, Y)
            return h
        }
        h.bLGS = function (C, S, x, y, X, Y) {
            var h = this, gx = h.graphics
            C = _.map(C, function (c) {
                return oO('c', c)
            })
            gx.beginLinearGradientStroke(
                C, S, x, y, X, Y)
            return h
        }


        h.lg = h.lGF = function (o) {
            var h = this, gx = h.graphics, g = G(arguments), o = g[0]
            if (S(g[0])) {
                o = {c: g[0], C: g[1]}
                if (N(g[5])) {
                    o.x = g[2];
                    o.y = g[3];
                    o.X = g[4];
                    Y = g[5]
                }
                else if (N(g[4])) {
                    o.y = g[2];
                    o.X = g[3];
                    Y = g[4]
                }
                else if (N(g[3])) {
                    o.X = g[2];
                    o.Y = g[3]
                }
                else if (N(g[2])) {
                    o.Y = g[2]
                }
            }
            o = o || {}
            o.c = o.c || 'z'
            o.C = o.C || 'w'
            o.s = _.tN(o.s)
            o.S = _.tN(o.S, 1)
            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.X = _.tN(o.X)
            o.Y = _.tN(o.Y, 100)
            return h.bLGF([o.c, o.C], [o.s, o.S], o.x, o.y, o.X, o.Y)
        }
        h.lG = h.lGS = function (o) {
            var h = this, gx = h.graphics, g = G(arguments), o = g[0]
            if (S(g[0])) {
                o = {c: g[0], C: g[1]}
                if (N(g[5])) {
                    o.x = g[2];
                    o.y = g[3];
                    o.X = g[4];
                    Y = g[5]
                }
                else if (N(g[4])) {
                    o.y = g[2];
                    o.X = g[3];
                    Y = g[4]
                }
                else if (N(g[3])) {
                    o.X = g[2];
                    o.Y = g[3]
                }
                else if (N(g[2])) {
                    o.Y = g[2]
                }
            }
            o = o || {}
            o.c = o.c || 'z'
            o.C = o.C || 'w'
            o.s = _.tN(o.s)
            o.S = _.tN(o.S, 1)
            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.X = _.tN(o.X)
            o.Y = _.tN(o.Y, 100)
            return h.bLGS([o.c, o.C], [o.s, o.S], o.x, o.y, o.X, o.Y)
        }
        h.rg = h.rGF = function (o) {
            var h = this, gx = h.graphics,
                g = G(arguments),
                o = g[0]
            if (S(g[1])) {
                o = {c: g[0], C: g[1]}
                _.extend(o,
                    N(g[5]) ? {X: g[2], Y: g[3], r: g[4], R: g[5]} :
                        N(g[4]) ? {X: g[2], r: g[3], R: g[4]} :
                            N(g[3]) ? {r: g[2], R: g[3]} : {R: g[2]})
            }

            else if (S(g[0])) {
                o = {C: g[0]}
            }

            o = o || {}

            o.c = o.c || 'z'
            o.C = o.C || 'z'

            o.s = _.tN(o.s, 0)
            o.S = _.tN(o.S, 1)
            o.x = _.tN(o.x, 0)
            o.y = _.tN(o.y, 0)
            o.X = _.tN(o.X, o.x)
            o.Y = _.tN(o.Y, o.y)
            o.r = _.tN(o.r, 1)
            o.R = _.tN(o.R, 100)
            return h.bRGF([o.c, o.C], [o.s, o.S], o.x, o.y, o.r, o.X, o.Y, o.R)
        }
        h.rG = h.rGS = function (o) {
            var h = this, gx = h.graphics,
                g = G(arguments), o = g[0]
            if (S(g[1])) {
                o = {c: g[0], C: g[1]}
                _.extend(o,
                    N(g[5]) ? {X: g[2], Y: g[3], r: g[4], R: g[5]} :
                        N(g[4]) ? {X: g[2], r: g[3], R: g[4]} :
                            N(g[3]) ? {r: g[2], R: g[3]} : {R: g[2]})
            }

            else if (S(g[0])) {
                o = {C: g[0]}
            }

            o = o || {}
            o.c = o.c || 'z'
            o.C = o.C || 'w'
            o.s = _.tN(o.s, 0)
            o.S = _.tN(o.S, 1)
            o.x = _.tN(o.x, 0)
            o.y = _.tN(o.y, 0)
            o.X = _.tN(o.X, o.x)
            o.Y = _.tN(o.Y, o.y)
            o.r = _.tN(o.r, 1)
            o.R = _.tN(o.R, 100)
            return h.bRGS([o.c, o.C], [o.s, o.S], o.x, o.y, o.r, o.X, o.Y, o.R)
        }
    }
    grads()

    h.bm= h.bmF = h.bf = function (i, fn, c) {
        var h = this, gx = h.graphics

        if (S(i)){
            $.img(i, function (i) {

                gx.bf(i[0])
               if(F(fn)){fn(i[0])}

            })
        }

        else {

            if (O(fn)) {
                gx.bf(i, null, fn)
            }

            else {
                gx.bf(i, fn, c)
            }

        }

        return h
    }
    h.bM= h.bmS = function (i) {
        this.graphics.beginBitmapStroke(i)
        return this
    }

}; strokeFills()

vector=function(){
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
    h.e = function () {
        return this.ef().es()
    }
    h.cp=function(){this.graphics.cp(); return this}
    h.bez= h.bt= function(x,y,r,startA,endA,aCW){var h=this,gx= h.graphics
        h.bezierCurveTo(x,y,r,startA,endA,aCW)
        return h}
    h.quad= h.qt= function(x,y,r,startA,endA,aCW){var h=this,gx= h.graphics
        h.quadraticCurveTo(x,y,r,startA,endA,aCW)
        return h}
    h.arc=function(x,y,r,startA,endA,aCW){var h=this,gx= h.graphics
        /*
         Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
         For example, to draw a full circle with a radius of 20 centered at (100, 100):
         arc(100, 100, 20, 0, Math.PI*2)
         */

        h.arc(x,y,r,startA,endA,aCW)

        return h}
    h.arc2=function(x,y, X,Y, r){var h=this,gx= h.graphics
//Draws an arc with the specified control points and radius.
        gx.arcTo(x,y,X,Y,r)
        return h}

    h.lt= function(x,y){var h=this, gx=h.graphics, v
        if(A(x) && O(x[0])){
            return h.lt.apply(h, x)}
        if(N(x)){gx.lt(x,y); return h}
        _.each(arguments,function(v){v=V(v)
            h.lt(v.x,v.y)})
        return h}

    h.mt=h.pol=function(x,y){var h=this,
        gx= h.graphics, g=arguments, x=g[0], y=g[1], v
        if(N(x)){v=V(x,y)
            gx.mt(v.x, v.y)}
        else {
            v=V(_.first(g))
            h.mt(v.x,v.y)
            _.each(_.rest(g),function(v){v=V(v)
                h.lt(v.x, v.y)})}
        return h}



    h.poly = function(V,  c,C,l){var h=this,o  //great function

        if(A(V)){o={V:V,c:c,C:C,l:l} }

        else if(O(V)){o=V}
        o=o||{}

        o.c= o.c|| 'z'
        o.C= o.C|| 'w'

        h.ef().es()


        if(o.rg){
            h.rg(o.c,o.C,10, 20, o.r).C('z',2).lt(o.V) }

        else if(o.lg){

            h.lg(o.c, o.C,

                _.first(o.V).x,
                _.first(o.V).y,
                _.last(o.V).x,
                _.last(o.V).y

            ).C('z',2).lt(o.V) }


        else if(o.bm){
            h.bm('me', function(){
                h.C(o.C, o.l).lt(o.V) }) }

        else {h.c(o.c, o.C, o.l).lt(o.V)}

        h.cp()
        return h
    }



    LT=function(){St()

        h.c('b')
        h.l(10)
        h.C('g')
        h.ef()
        h.lt(  [[100,100],  [300,300],  [400,100],  [500,300]] )
        h.lt(450,450).mt(500,0).lt(600,100)

        h.c('o').dc(100,100,10)

        h.circ(600, 300, 'u', 'g', 10)

        h.poly({
                V: [ [300,300],[320,200],[640,400],[280,650] ],
                lg:1
            }
        )




    }


};vector()


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




shapes=function(){



    h.dc = function(x, y, r){var h = this, gx = h.graphics

        h.graphics.dc.apply(gx,
            N(y)?[x,y,_.tN(r,100)]
                : [0,0,N(x)?x:100] )

        return h
    }





    h.cir = h.circ =function(x,y,r,c,  C, l){  //nicely done

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
            h.rg(o.c,o.C,10, 20, o.r).C('z',2).dc(o.x,o.y,o.r)
        } else if(o.lg){
            h.lg(o.c,o.C, o.r*2).C('z',2).dc(o.x,o.y,o.r)
        } else if(o.bm){


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
            o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                N(g[0]) ? {w: g[0], h: g[1]} :
                    O(g[0]) ? g[0] : {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 100)
        o.h = _.tN(o.h, o.w)

        gx.dr(o.x, o.y, o.w, o.h)
        return h
    }
    h.dr2= function (x,y,W,H){var h = this
        if(U(W)){
            W=x;H=y;x=0;y=0
        }

        h.dr(-W/2+x,-H/2+y,W,H)
        return h
    }










    h.rect = function (x, y, W, H, c, C){
        var h=this
        h.c(c,C)
        h.dr2(x,y,W,H)
        return h}






    h.rexx = function (c, C, x, y, w, H, l){
        var h = this, o
        if (S(C)) {
            o = {c: c, C: C, x: x, y: y, w: w, h: H, l: l }
        }
        else if (S(c)) {
            o = {
                c: c, x: C, y: x, w: y, h: w, l: H}
        }
        else if (N(c)) {
            o = {x: c, y: C, w: x, h: y}
        }
        else if (O(c)) {
            o = c
        }
        else o = {}
        if (o.c) {
            h.c(o.c)
        }
        if (o.C) {
            h.C(o.C)
        }
        if (N(o.l)) {
            h.l(o.l)
        }
        if (o.i) {
            h.bmF(o.i, fun);
            return
        }
        if (o.lG) {
            h.lG({
                c: o.c || 'z',
                C: o.C || 'w',
                s: 0,
                S: 1,
                x: o.x - o.w / 2,
                y: o.y - o.h / 2,
                X: o.x - o.w / 2,
                Y: o.y + o.h / 2
            })
        }
        fun()
        function fun() {
            h.mt(
                [o.x - o.w / 2, o.y + o.h / 2],
                [o.x - o.w / 2, o.y - o.h / 2],
                [o.x + o.w / 2, o.y - o.h / 2],
                [o.x + o.w / 2, o.y + o.h / 2])
        }
        return h


    }


    //******** here is the problem.. gotta let h.poly also defer to rect (and circ?)





    h.rc= h.roundRectComplex= function(){
        var h=this,gx= h.graphics
        gx.drawRoundRectComplex.apply(gx,arguments)
        return h}


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
    h.drawPolygons= function(paths, C, c){
        var h=this
        h.C(C)
        if(c){h.c(c)}
        _.each(paths, function(p){h.drawPolygon(p)})
        return h}
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

}; shapes()




ROTREC=function(){St()


    //s.B = function(x,y){return this.ct(x,y).drag() }//var s=this,ct


    c = s.ct(600,300)

    c.rec({c:'r',C:'o',l:10, w:400, h:400})

    c.rec({w: 100, h:200, a:20, c: 'b', C:'w', l: 20, rg:1})

    h = c.rec({
        w: 100, h:200, a:20,
        c: 'b', C:'w', l: 20, bm:1
    }).X(100) //notice how gradient is seen behind the bm!!!


    $.in(2, function(){h.X(0)})



}





ARC=function(){s = cjs.stg('p', 1200,600).A()

    h = s.h()

    h.c('b').C('r').l(5)
   // h.arc2(20,20,500,500,120)

    h.mt(0,0)
    h.graphics.arcTo(500,500,20,20,120)

}
TESTGX=function(){s = cjs.stg('p', 1200,600).A()


    h = s.h()

    h.c('b').C('r').l(5)
    h.dc(100,100,100)
    s.dot(100,100)
    h.dr(300,200,100,50)
    s.dot(300,200)
    //h.dr2(500,200,100,50); s.dot(500,200)
    //h.rr2(500,200,100,50,50); s.dot(500,200)
    h.de2(500,200,100,50); s.dot(500,200)



}
h.drawPolygonYesNo = function(V,c,C,l){var h=this, //h.drawConnectedLines =

    n=V.length

    h.c(c,C,l)

    _.each(V, function(v){

        v.X=v.x
        v.Y=v.y

    })

    if(n >= 3){ h.mt(V[0]) //move to the FIRST//lineTo the REST

        T(n, function(i){
            h.lt(V[i%n])
        })} //just a clever way to start from 1

    return h}




// h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  } //h.cir2=



cjs.RECTx= function(c, W, H, x, y, a){$l('rect!')
    //hW = W/2; hH = H/2  //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

    var hW,hH, h, ct = cjs.ct(), o, g=G(arguments)

    if(S(c)){

        o={c:c,w:W,h:H,x:x,y:y,a:a}
    }

    //hW = W/2; hH = H/2
    o = o || O(g[0])? g[0] : {}

    o.w = _.tN(o.w,50)
    o.h = _.tN(o.h,50)
    o.x= _.tN(o.x)
    o.y= _.tN(o.y)
    o.a= _.tN(o.a)
    o.c= oO('c', o.c||'g')

    h = $h()

    h.c(c)

    h.dr2(x, y, W,H)         //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

    h.rot(a)

    h.XY(x, y)

    ct.A(  h  )

    return ct

}


h.dcWorking = function(x,y,r){var h = this, gx = h.graphics

    if (N(r)) {
        gx.dc(x,y, r)
    }

    else if (N(y)) {
        gx.dc(x,y, 100)
    }

    else if (N(x)) {
        gx.dc(0,0,x)
    }
    else {
        gx.dc(0,0,100)
    }

    return h
}

h.rrx=  function(x,y,W,H,r){
    var h=this,gx= h.graphics
    gx.drawRoundRect(x,y,W,H,r)
    return h}
h.dex= h.ellx= function(x,y,W,H){var h=this,gx= h.graphics

    gx.drawEllipse(x,y,W,H)

    return h}
h.drx=  function(x,y,W,H){
    var h=this,gx= h.graphics
    if(N(H)){gx.dr(x,y,W,H)}
    else if(N(W)){gx.dr(x,y,W,W)}
    else if(N(y)){gx.dr(0,0,x,y)}
    else if(N(x)){gx.dr(0,0,x,x)}
    else {gx.dr(0,0,100,100)}
    return h}