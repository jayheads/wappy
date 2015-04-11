w = b2d.World.prototype

b2d.iBD=b2d.isBDef=function(bd){return O(bd) && F(bd.b2BodyDef)}
b2d.tB = b2d.toBody=function(fOrB){
    return b2d.isBody(fOrB)? fOrB
        : b2d.isFixt(fOrB)? fOrB.B()
        : false
}



w.getGroundBody = w.gB =w.gGB=function(){  return this.GetGroundBody()  }
w.getBodyList = w.bL = function(){return this.GetBodyList()}
w.destroyBody = w.destroy = w.dB=w.destroy = w.destroyAll = w.destroyAllBodies=function(b){var w=this
    if(U(b)){w.each(function(b){w.destroy(b)})}
    else {w.DestroyBody(b)}
    return w}
w.count = w.getBodyCount = w.bC = w.gBC=function(){
    return this.GetBodyCount()
}
w.cent=function(){
    var w=this,g=G(arguments),
    v=V(w.s.W()/2, w.s.H()/2)
    if(g.p){w.dot(v)}
    return v
}
w.G=function(x, y){var w=this,
    v, currG = w.GetGravity()
    if(U(x)){return  currG}
    if(N(x)){v=N(y)? V(x,y): V(0,x)}
    else if(x=='flip'){
       v =V( -currG.x, -currG.y)}
    w.SetGravity(v)
    return w}
w.rC=w.rayCast=function(func,v1,v2){

    return this.RayCast(func, V(v1,'-'), V(v2,'-') )
}








w.Y=function(x,Y){var w=this; y = w.ship(x,Y); return w}
w.P=function(x,y){var w=this
    x=N(x)?x:300
    y=N(y)?y:500
    p= w.jumper(x,y)
    return w}

moveAllBods=function() {
    w.left = w.horiz = function (n) {
        n = N(n) ? n : 4
        this.each(function (b) {
            b.X(n, '-')
        })
    }
    w.up = w.vert = function (n) {
        n = N(n) ? n : 4
        this.each(function (b) {
            b.Y(n, '-')
        })
    }
}; moveAllBods()

mouse=function() {
    w.mouseJAt = function (p, kind) {
        var w = this, mj

        if (N(p)) {
            p = V(p, kind)
        }


        w.XY(p.x, p.y, function (f) {


            mj = f.body().mouseJoint(p)

        })//, kind


        return mj

    }
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
    w.$ = w.click = function (func) {
        var w = this

        $(w.hud.canvas).click(function (e) {

            func(e.pageX, e.pageY)

        })

        return w
    }
    w.$$ = function (func) {
        var w = this

        $(w.hud.canvas).dblclick(function (e) {
            func(e.pageX, e.pageY)
        })

        return w
    }
}; mouse()
debug=function() {

    w.bug=w.debugDraw=function(){

        dd = b2d.debugDraw.apply(null, arguments)

        //this.scale = dd.scale()
        this.SetDebugDraw( dd )
        return this
    }

    w.draw = function (n) {
        if (N(n)) {
            this.step(n)
        }
        this.DrawDebugData()
        this.clearForces()
        return this
    }
    w.db = w.debug = function (data) {

        //p.debugDraw  =p.dD= p.sDD=


        if (U(data)) {

            this.s.autoClear = this.s.autoClear ? false : true;
            return this
        }

        if (data === true) {
            this.s.autoClear = false;
            return this
        }


        if (data === false) {
            this.s.autoClear = true;
            return this
        }

        this.SetDebugDraw(data)

        return this
    }
    w.step = function (time, a, b) {

        a = N(a) ? a : 8
        b = N(b) ? b : 3
        this.Step(time, a, b)

        return this
    }
    w.clear = w.clearForces = w.cF = function () {
        this.ClearForces();
        return this
    }

}; debug()
stage=function() {
    w.tick=function(draw){var w=this
        w.ctx.tick(function(){

            w.trans(0,0).Z(1,1);
            w.draw(_.tN(draw,.1))

        })
        return w}
    w.C= function(col){var w=this
        w.c.C(col)
        return w}
    w.bH = w.bindShape = function( shape, spr   ){

        this.stage.A( shape )

        cjs.tick(

            function(){   shape.XY(  spr.X(), spr.Y()    )    }

        )

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
    w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!


        x = N(x) ? x : 300;
        y = N(y) ? y : x //weird defaults - not intuitive


        var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)


        if (N(scale)) {
            sprite.sXY(scale)
        }

        return this.box(x, y, 100, 100).bindSprite2(
            sprite
        )


    }

    w.dr = function (col, x, y, W, h) {
        var w = this,
            g = G(arguments),
            col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]
        if (g.p) {

            if (!S(col)) {
                h = W;
                W = y;
                y = x;
                x = col;
                col = 'b'
            }

            w.s.HUD.shape().fs(col).rect(x, y, W, h)
        }
        else if (g.n) {

            if (!S(col)) {
                h = W;
                W = y;
                y = x;
                x = col;
                col = 'r'
            }

            w.s.back.shape().fs(col).rect(x, y, W, h)
        }
        else {
            if (!S(col)) {
                h = W;
                W = y;
                y = x;
                x = col;
                col = 'w'
            }

            w.s.shape().fs(col).rect(x, y, W, h)
        }
    }


//w.s.shape().fs('y').rect(100,100,100,100)
//w.s.HUD.shape().fs('o').rect(100,200,100,100)
    w.line = function (col, x1, y1, x2, y2) {
        var w = this,
            g = G(arguments),
            col = g[0],
            x1 = g[1], y1 = g[2],
            x2 = g[3], y2 = g[4]


        if (g.p) {

            if (!S(col)) {
                y2 = x2;
                x2 = y1;
                y1 = x1;
                x1 = col;
                col = 'b'
            }

            h = w.s.HUD.shape()

            return h.sC(col, 8).mt(x1, y1).lt(x2, y2)
        }


        else if (g.n) {
            if (!S(col)) {
                y2 = x2;
                x2 = y1;
                y1 = x1;
                x1 = col;
                col = 'x'
            }

            return  w.s.back.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
        }


        else {
            if (!S(col)) {
                y2 = x2;
                x2 = y1;
                y1 = x1;
                x1 = col;
                col = 'w'
            }


            return w.s.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)


        }


    }


    w.sH = function (h) {
        var w = this, wH = w.H()
        if (U(h)) {
            return wH * w.s.scaleY
        }
        w.s.scaleY = h / wH
        return w
    }
}; stage()





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

    _.t(5, function(){w.randRects()})
    n = w.qAB(function(f, b){b.kill(); return true}, 400,100,450,150)
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
BALL=function(){

    W().D(400, 300, 'x', 150).den(.1)

}
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

  W(1000, 500,  2000, 1000)


    y = w.ship(1000, 400).track()//w.H()-100



    //w.pXY(500,0)




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
    y= w.ship().track()

}

//
//
//
old=function(){

    w.dbX=function(){var w=this

        w.line(0,0, w.W(), w.H(),'+')

        w.line(0,w.W(), w.H(),0, '+')

        if(N(w.w) && N(w.h)){
            w.line(0,0, w.w, w.h)
            w.line(0,w.W(), w.H(),0 )}}


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


}