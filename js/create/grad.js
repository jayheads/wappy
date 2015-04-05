ct=cjs.Container.prototype
h =  cjs.Shape.prototype

b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}


b2d.gDf = function(o){o=o||{}

    o.c = o.c || 'z'

    o.C = o.C || 'w'

        o.s = _.tN(o.s);
        o.S = _.tN(o.S, 1)
        o.x = _.tN(o.x);
        o.y = _.tN(o.y)
        return o
    }




b2d.rgDf = function (o) {
        o = b2d.gDf(o)
        o.X = _.tN(o.X, o.x);
        o.Y = _.tN(o.Y, o.y)
        o.r = _.tN(o.r, 1);
        o.R = _.tN(o.R, 100)
        return o
    }


b2d.lgDf=function(o){o=b2d.gDf(o)
    o.X=_.tN(o.X);
    o.Y=N(o.Y)?o.Y
        :N(o.r)?o.r*2
        :100

        return o}


b2d.lgO=function(){var g=G(arguments),o
    if(A(g[0])){return b2d.lgO.apply(null, g[0])}
    if(O(g[0])){o=g[0]}
    else{o=_.extend({c:g[0],C:g[1]},
            N(g[5])?{x:g[2],y:g[3],X:g[4],Y:g[5]}
                :N(g[4])?{y:g[2],X:g[3],Y:g[4]}
                :N(g[3])?{X:g[2],Y:g[3]}
                :{Y:g[2]})}
    return b2d.lgDf(o)
}



h.lg=function(){var h=this,gx=h.graphics,g=G(arguments),
    o=b2d.lgO(g)

    h.C('X')
    h.bLGF=function(c,s,x,y,X,Y){var h=this,gx=h.graphics
            gx.beginLinearGradientFill(b2d.colMap(c),s,x,y,X,Y); return h}
    return h.bLGF([o.c,o.C],[o.s,o.S],o.x,o.y,o.X,o.Y)
}




h.lG=function(){var h=this,gx=h.graphics,g=G(arguments),

    o=b2d.lgO(g)



    h.bLGS=function(C,S,x,y,X,Y){var h=this,gx=h.graphics
            gx.beginLinearGradientStroke(b2d.colMap(C),S,x,y,X,Y)
            return h}
    return h.bLGS([o.c,o.C],[o.s,o.S],o.x,o.y,o.X,o.Y)
}




h.rg=function (o) {
        var h = this, gx = h.graphics,
            g = G(arguments),
            o = g[0]
        if (S(g[1])) {
            o = {c: g[0], C: g[1]}
            _.extend(o,
                N(g[5]) ? {X: g[2], Y: g[3], r: g[4], R: g[5]} :
                    N(g[4]) ? {X: g[2], r: g[3], R: g[4]} :
                        N(g[3]) ? {r: g[2], R: g[3]} : {R: g[2]})}
        else if (S(g[0])) {o = {C: g[0]}}



        b2d.rgDf(o)
        h.bRGF=function(C,S,x,y,r,X,Y,R){var h=this, gx=h.graphics
            gx.beginRadialGradientFill(b2d.colMap(C),S,x,y,r,X,Y,R)
            return h}
        return h.bRGF([o.c,o.C],[o.s,o.S],o.x,o.y,o.r,o.X,o.Y,o.R)

    }


h.rG=function () {
        var h = this, gx = h.graphics, g = G(arguments),
            o = O(g[0]) ? g[0] :
                S(g[1]) ? _.extend({c: g[0], C: g[1]},
                    N(g[5]) ? {X: g[2], Y: g[3], r: g[4], R: g[5]} :
                        N(g[4]) ? {X: g[2], r: g[3], R: g[4]} :
                            N(g[3]) ? {r: g[2], R: g[3]} : {R: g[2]}) :
                    S(g[0]) ? {C: g[0]} : {}

    b2d.rgDf(o)
        h.bRGS = function (C, S, x, y, r, X, Y, R) {var h = this, gx = h.graphics
            gx.beginRadialGradientStroke(b2d.colMap(c), S, x, y, r, X, Y, R)
            return h}
        return h.bRGS([o.c, o.C], [o.s, o.S], o.x, o.y, o.r, o.X, o.Y, o.R)
    }



REC=function(){St()
    h=s.h(480,270).drag()
    h.c('**',40).dr2({ w:900,h:500  })
    h.lg({x:-100, c:'r',C:'y'})
    h.dr2(
        {w:300,h:100,x:0,y:-100},
        {w:100, h:300})}





MICK=function(){St()
    ct.mick=function(x,y,lg){var ct=this,
        h=ct.h(x,y).drag()

        h.lg(lg)
        h.dc([50],[200,0,100],[100,100,100])
        return h
    }

    s.mick(500,200)
    s.mick(700,100,{c:'b',C:'X'})
    s.mick(700,300,{C:'b'})
    s.mick(100,100,{Y:10})
    s.mick(100,200,{Y:200})
    s.mick(100,300,{X:100})

}

LGSTROKE=function(){


    St()
    h=s.h(480,270).drag()

    h.c('**',40)
        .dr2({ w:900,h:500  })


    h.lG({x:-100, c:'r',C:'y'})

    h.c('g')

    h.dr2(
        {w:300,h:100,x:0,y:-100},
        {w:100, h:300})


}

