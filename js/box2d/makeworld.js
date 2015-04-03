w= p=b2d.World.prototype


b2d.world = function(g, sleep){     //b2d.wor =  W ???

    g = U(g)? V(0,10): N(g)?V(0, g): g

    s = U(sleep)? true: sleep

    var w = new b2d.World(g, sleep)

    w.SCALE = 1

    return w
}

w.mJ=function(o){var w=this
    if(o.m==0){return w}

    o=o||{}

    $.M()
    cjs.tick(function(){if(w.mj){w.mj.tg(_) }})
    $.oMU(function(){ w.M() })
    $.oMD(function(x,y){w.XY(x,y,
        function(f){if(f.ofClass(o.m)){w.mj = w.m(f.body(), _ )}
        })})

    return w}

w.wMouse=function(){var w=this


    $.oMD(function(x, y){
        var p = w.sToW(x,y)
        w.mx= p.x;
        w.my= p.y
    })



    $.oMM(function(x,y){
        var p = w.sToW(x,y)
        w.mx= p.x;
        w.my= p.y })
    //  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})

    return w}
w.wMouseJ=function(o){var w=this
    w.md(function(e){ w.XY(e.x, e.y,function(f){
        if(f.ofClass(o.m)){w.mj = w.m(f.body(), e.x, e.y )}})})
    cjs.tick(function(){if(w.mj){w.mj.tg(w.mx, w.my)}})
    $.oMU(function(){ w.M() })
    return w}



w.dd=function(o){var w=this
    if(o.clear !==false){

        w.debug(

            b2d.debugDraw(
                w.context, 30).flags(shB || jB).alpha(.6).line(3000) )
    } // w.bug(w.ctx, 30, '*', .6 )



    return w}


w.update = w.u = function(o){var w=this
    setInterval(function(){w.draw(1/60)
        if(F(o.cb)){o.cb()}
        w.s.update()
    }, 1000/60)
    return w}



w.vW =function(col,H,x,y){var w=this,g=G(arguments), cW=w.canvas.width, cH=w.canvas.height

    if(!S(col)){y=x;x=H;H=col;col='x'}

    H = (H=='+')? cH :N(H)?H: cH/2-10
    if(U(x)){x= cW/2; y=cH/2-H/2}
    else if(U(y)){
        x=(x=='+')? cW-20: (x=='-')? 0: x
        y=cH/2 - H/2}
    //x-=10?

    return w.R(col,20,H, x,y).bo(.2).K('wall')

}

w.walls=function(o){

    var w=this,
        can=w.canvas,
        W=can.width,
        H=can.height,

        wa =o.w,

        col,h


    if(wa==0){return w}
    if(wa=='@'){w.warp(); return w}

    if (F(wa)) {wa()}

    else if ( A(wa) ){

        col = wa[0]
        W=wa[1]
        h=wa[2]
        if(!S(col)){ h=W; W=col; col='o' }
        W= N(W)?  W: w.W()
        h= N(h)?  h: w.H()
        w.floor =  w.R(col, W,20, 0, h-20)
        w.right =  w.R(col, 20, h, W-20, 0)
        w.roof  =  w.R(col, W,  20, 0,0)
        w.left  =  w.R(col, 20,h,0, 0  )



    }


    else if (wa=='_'){
        w.floor=  w.S(W/2, H, 'o', W, 40).K('wall floor')
    }

    else if (wa=='L'){


        w.left=   w.S(0,H/2,'o',40,H).K('wall side right')

        w.floor=  w.S(W/2, H, 'o', W, 40).K('wall floor')
    }

    else if (wa=='U'){

        w.left=   w.S(0,H/2,'o',40,H).K('wall side right')

        w.right=  w.S(W,H/2,'o',40,H).K('wall side left')

        w.floor=  w.S(W/2, H, 'o', W, 40).K('wall floor')
    }

    else if (wa=='='){

        w.roof=   w.S(W/2,0,'o',W,40).K('wall roof')
        w.floor=  w.S(W/2, H, 'o', W, 40).K('wall floor')
    }

    else {

        w.floor=  w.S(W/2, H, 'o', W, 40).K('wall floor')
        w.left=   w.S(0,H/2,'o',40,H).K('wall side right')

        w.right=  w.S(W,H/2,'o',40,H).K('wall side left')

        w.roof=   w.S(W/2,0,'o',W,40).K('wall roof')

    }



    w.$$(function(){

        w.S(w.mx, w.my, 'x',  [[10,10 ,'-']]  )
    })

    return w}


w.gx=function(o){var w=this,W=o.W,H=o.H

    w.bg =   new cjs.Stage($.can(o.C||'z',W,H).P('a').XY(0,0)[0] ).A().tick(); w.bg.linGrad=function(c1,c2){
        var s=this, H=s.H(), W=s.W()
        c1=oO('c', c1||'b')

        c2=oO('c', c2||'r')




        if(R()){$l('=')

            if(R()){ s.SHAPE.linGrad([c1,c2],[0,1],0,0,0,H).dr(0,0,W,H)   }

            else { s.SHAPE.linGrad([c1,c2],[0,1],0,0,W,0).dr(0,0,W,H)  }

        }

        else {$l('/')

            if(R()){

                if(R()){   s.SHAPE.linGrad([c1,c2],[0,1],W,H, 0,0).dr(0,0,W,H) }

                else {s.SHAPE.linGrad([c1,c2],[0,1],  0,0, W,H).dr(0,0,W,H)}

            }

            else {
                if(R()) {
                    s.SHAPE.linGrad([c1, c2], [0, 1], W,0, 0, H).dr(0, 0, W, H)
                }
                else {
                    s.SHAPE.linGrad([c1,c2],[0,1],0,H, W,0).dr(0,0,W,H)
                }
            }


        }
    }



    w.bg.SHAPE = w.bg.shape(0,0,'w')

    w.bg.linGrad('z', 'w')


    w.s =  w.stage =   new cjs.Stage( $.can('X',W,H).P('a').XY(0,0)[0] ).A().noAutoClear().tick()
    w.canvas = w.s.canvas
    w.c = w.can=$(w.canvas).id('canvas')
    w.ctx = w.context = w.c.ctx('2d')


    w.hud = new cjs.Stage($.can('X',W,H).P('a').XY(0,0)[0]).A().tick()


    w.hud.h  = w.hud.shape().fs( $r() ).rect( 0, 0, 5000, 5000).opacity(.3)

    w.hud.c = $(w.hud.canvas)



    w.s.back = w.bg
    w.s.HUD = w.hud
    return w}

w.startListening = function(){var w=this
    w.listener = w.listener || b2d.listener()
    w.beginHandlers = w.beginHandlers ||[]
    w.preHandlers = w.preHandlers ||[]
    w.postHandlers = w.postHandlers ||[]
    w.endHandlers = w.endHandlers ||[]
    w.listener.BeginContact = function(cx){
        _.each(w.beginHandlers, function(func){$.do(function(){  func(cx) })   })}
    w.listener.PreSolve = function(cx){
        _.each(w.preHandlers,
            function(func){


                $.do(function(){
                    func(cx)
                })

            })}
    w.listener.PostSolve = function(cx, pam2){

        _.each(w.postHandlers,

            function(func){



                $.do(function(){
                    func(cx,pam2)
                })  //second arg???????

            })
    }
    w.listener.EndContact = function(cx){
        _.each(w.endHandlers,
            function(func){
                $.do(function(){
                    func(cx)
                }) })
    }

    w.SetContactListener(w.listener)

    return w}
w.setBg=function(o){var w=this;  if(o.i){ w.s.bm(o.i) }; return w}



w.startTracking=function(cX, cY){
    var w=this,
    cX=N(cX)?cX:w.W/2;
    cY=N(cY)?cY:w.H/2

    cjs.tick(track)

    function track(){var t
        w._t = w._t || w.S(cX,cY,'w',[[10,10,'-']]).bo(.8)
        t = w.t = w.t || w._t
            hW= w.W/2,  hH= w.H/2,
            dX=t.X()-cX,
            dY=t.Y()-cY
        if(F(t.cb)){t.cb()}
        else if(F(w.tCb)){w.tCb()}
        w.s.x = -w.sXCap( (dX+hW)*w.z - hW  )
        w.s.y = -w.sYCap( (dY+hH)*w.z - hH  )}
    return w

}

w.tGuy=function(){var w=this


    w.tSpr =  cjs.ct().XY(w.t.X(), w.t.Y()).drag()


    w.hud.A( w.tSpr )

     w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)

    cjs.tick(function(){

        if(w.t == w._t){
            w.t.XY(  w.tSpr.X(), w.tSpr.Y())
            w.s.rot(w.tSpr.rot())
        }


    })

    return w}





cjs.adj = cjs.camAdj =  function( income, tax ){//tax ~ deltaLimit ~ buffer
    var income =  income || 0  ,  tax = tax || 0
    if(income > 0){return income > tax ? income - tax : 0}
    return -income > tax ? income + tax : 0}
cjs.cap=function(n,m,M){

    if( U(m) ){ return n }



    if(A(m)){
        M=m[1]
        m=m[0]
    }

    return n<m? m
        :n>M?M
        :n
}
b2d.mJ=function(body, tX,tY){
    if(O(tX)){tY=tX.y;tX=tX.x}
    var md = new b2d.Joints.b2MouseJointDef
    md.bodyA = w.GetGroundBody()
    md.bodyB = body
    md.target = V(tX, tY)
    md.collideConnected = true
    md.maxForce = 1000 * body.GetMass()
    md.dampingRatio = 0
    return md}

w.eachEvery=function(l){var w=this

    cjs.tick(function(){
        w.each(l)
    })

    return w}

w.warp=function(){var w=this
    $l('warp')

    w.eachEvery(function(b) {
        if (b.X() < 10) {
            b.X(w.W-10)
        }
        if (b.X() > w.W-10 ) {
            b.X(10)
        }


        if (b.Y() < 10) {
            b.Y(w.H-10)
        }
        if (b.Y() > w.H-10) {
            b.Y(10)
        }

    })

    return w}




w.coords=function(){var w=this


    w.eachEvery(function(b){var p

        b.wX = b.X()
        b.wY= b.Y()

        p = w.wTS(b.wX, b.wY)

        b.sX = p.x;b.sY= p.y


    })
    return w}

W= b2d.W=  function(W, H, wW, wH){//cjs.Ticker.removeAllEventListeners() //w.show(function(){})//not working with scroll



    var o = N(H) ? { W:W, H:H, wW:wW, wH:wH } :
        N(W)? {g: W}  :
            A(W) ? _.extend(H, { W:W[0], H:W[1], wW:W[2] ,wH:W[3] }) :
                O(W) ? W : {}

    o.W=o.W   ||  1200
    o.H=o.H   ||  600
    o.wW=o.wW ||  o.W
    o.wH=o.wH ||  o.H

    o.w = o.w==0 ? 0: o.w ? o.w :     ['o', o.wW, o.wH]

    o.g = N(o.g) ? V(0,o.g) : o.g? V(o.g) : V(0, 300)

    cjs.watchKeys()
     w.coords()

    w=b2d.world( o.g ); w.o = o

     if(o.z != false){ z() }



     w.gx(o)

    w.setBg(o)

    w.dd(o)
    w.db()

    w.startListening()

     w.wMouse()

     w.wMouseJ(o)

    w.update(o)



    w.w  = o.wW
    w.h  = o.wH
    w.W = o.W
    w.H = o.H
    w.Ww = w.W/w.w
    w.wW = w.w/w.W
    w.Hh = w.H/ w.h
    w.hH = w.h/ w.H
    w.mZ = w.hH > w.wW? w.hH : w.wW
    w.mS = w.Ww > w.Hh ? w.Ww : w.Hh // ?
    w.z = 1 //scale
    w.hW = w.W/2
    w.hH = w.H/2

     w.walls(o)



    if(o.t!==0){
         w.startTracking()
         w.tGuy()
    }

     //w.tracker(o) //relies on some of above prop setting
    return w}





w.trackerX=function(o){
    var w=this, t, x, y
    if(o.t==0){return w}
    x=w.w/2; y=w.h/2
    t = w.S(x,y,'w',[[10,10,'-']]).bo(.8)
    w.t = w.trackee = w._t = w._trackee = t
    w.t.track()
    return w}
