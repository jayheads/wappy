cjs.cap=function(n,    m,M){

    if( U(m) ){ return n }



    if(A(m)){
        M=m[1]
        m=m[0]
    }

    return n<m? m
        :n>M?M
        :n
}

w=b2d.World.prototype

w.makeWalls=function(walls){
    var w=this,  can=w.canvas, W=can.width,  H=can.height




    if (S(walls)) {window[  walls ]()}

    else if (F(walls)) {walls()}

    else if (A(walls)){w.boxWalls.apply(w,walls)}

    else {

        w.floor=  w.S(W/2, H,  'o',    W, 40).K('wall floor')
        w.left=   w.S(0,H/2,'o',40,H).K('wall side right')
        w.roof=  w.S(W/2,0,'o',W,40).K('wall roof')
        w.right=  w.S(W,H/2,'o',40,H).K('wall side left')
    }

    return w}
w.boxWalls=w.xW= function(col,W,h){var w=this
    w.hW =function(col,W,x,y){var w=this,g=G(arguments), cW=w.canvas.width, cH=w.canvas.height

        if(!S(col)){y=x;x=W;W=col;col='x'}

        if(U(y)){y=x;x=null}
        W=(W=='+')?cW:N(W)?W:cW/3
        x=N(x)?x:  cW/2-W/2
        y=(y=='+')?cH-10:(y=='-')?10:N(y)?y:cH/2
        y-= 10
        return w.R(col,W,20,x,y).bo(.2).K('wall')     //default bo?
    }
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


    w.rW=function(col,h){var w=this
        if(!S(col)){h=col;col='b'}
        h=N(h)?h:w.H()
        return w.S(10, w.H()- (h), col,20,h)}


    w.bW=function(col,W){var w=this
        if(!S(col)){W=col; col='b'}
        W=N(W)?W:w.W()
        return w.S((W/2), w.H()+(h/2)-10, col,W,20)}


    if(!S(col)){h=W;W=col;col='o'}
    W= N(W)?W: w.W()
    h= N(h)?h: w.H()
    bot= w.floor =  w.R(col, W,20, 0, h-20)
    right = w.right= w.R(col, 20, h, W-20, 0)
    tp = w.roof= w.R(col, W,  20, 0,0)
    left = w.left= w.R(col, 20,h,0, 0  )

    w.w=W
    w.h=h
    // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}
    return w}




w.camLims = function(xm, xM, ym, yM){var w=this
    if(A(xm)){
        w._camLimX = xm
        w._camLimY = xM}
    else {
        w._camLimX = [xm,xM]
        w._camLimY = [ym,yM]}
    return w}



w.pX =  function(x){var w=this

    if(U(x)){ return -w.s.x }


    if(w._camLimX){

        w.s.x =  -cjs.cap(x,   w._camLimX[0]* w.SCALE,  w._camLimX[1] * w.SCALE  )
    }

    else {w.s.x = -x  }


    return w}
w.pY = w.camY=function(y){var w=this

    if(U(y)){return -w.s.y}
    w.s.y = -cjs.cap(y,  w._camLimY|| [0,0] )
    return w}
w.pXY = function(x,y){var w=this
    if(U(x)){ return V(w.pX(),w.pY()) }
    return w.pX(x).pY(y)}

w.cam=function(x,y){var w=this //<-pXY
    if(U(y)){y=x;x=0}
    w.pXY(x,y)
    w._camX=x; w._camY=y
    return w}
w.pos=function(x,y){var w=this
    w.s.XY(-x,-y)
    w.cX = -x
    w.cY = -y
    if(w.SCALE){w.scl(w.SCALE)}
    return this}

w.fol= w.foll= function(b,x,y,pX){var w=this

    w.fw=function(b,x,y){var w=this


        w.S(x,y,'o', [ [40,400,'-']])

        w.dbCross(x,y)
        w.dot(x,y,'+')


        cjs.tick(function(){
            w.pX(b.X()-x)
            w.pY(b.Y()-y)
        })

    }

    w.fwBuf=function(b,x,y, pX,pY,bX,bY){var w=this

        w.s.HUD.dot('w', x, y)

        w.S(pX, w.h/2, 'b', [ [bX*2, w.h,  '-'] ] )
        w.S(w.w/2,pY, 'b', [ [w.w, bY*2,  '-'] ] )
        w.S(pX, pY, 'w',  [  [bX*2+20, bY*2+20, '-'] ] )
        w.S(pX, pY, 'r',  [  [bX*2, bY*2, '-'] ] )
        w.S(pX, pY, 'o',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)


        scale = 1

        cjs.tick(function(){

            w.pX( (pX-x)  +  cjs.adj(b.X()-pX,bX)  * scale )

            w.pY( (pY-y)  +  cjs.adj(b.Y()-pY,bY)  *scale    )


        })

    }


    if(U(pX)){
        w.fw.apply(w, arguments)
    }

    else {

        w.fwBuf.apply(w, arguments)
    }
return this}


w.inout=function(){var w=this,
    s=1,
    up=true

    setInterval(function(){
        if(up){
            if(s<2){ s+= .2; }
            else {up=false}
            w.scl(s)}
        else {
            if(s > .8){ s -= .2   }
            else {up=true}
            w.scl(s)}
    }, 100)
    return w}
w.limInout=function(){var w=this,
    s=1,
    up=true

    setInterval(function(){
        if(up){
            if(s<2){ s+= .2; }
            else {up=false}
            w.scl(s)}
        else {
            if(s > .8){ s -= .2   }
            else {up=true}
            w.limScl(s)}
    }, 100)
    return w}

w.drag=function(){var w=this

    pX=0
    pY=0

    c = $(w.s.HUD.canvas)

    c.mousedown(function(e){

        pmX=e.clientX;

        pmY=e.clientY

       // $l(pmX)
    })


    c.pressmove(function(e){
        var x=e.clientX,
            y=e.clientY
        //if(U(pmX)){pmX=x}
       // if(U(pmY)){pmY=y}

        pX = pX + (pmX -x)/ w.SCALE
        pY = pY +(pmY -y)/ w.SCALE

        pmX=x
        pmY=y

        $l(pX)
    })

    w.SCALE=N(w.SCALE)?w.SCALE:1
    w.scl(w.SCALE)

    cjs.tick(function(){
       w.pos(pX, pY)
    })


    return this}

w.dragScale=function(){var w=this,
    pX=0, pY= 0,
    pmX,
    pmY,

    c = $(w.s.HUD.canvas)

    c.mousedown(function(e){

        $l('down')

        oScl = w.sc()

        oY = e.clientY

    })


    c.pressmove(function(e){
        var x=e.clientX,
            y=e.clientY,


            newSc = oScl +  (oY - e.clientY)*.005

        newSc = newSc>5?5
            : newSc<.1?.1
            : newSc

      $l(newSc )

        w.sc(newSc)

    })



    return this}




cjs.adj = cjs.camAdj =  function( income, tax ){//tax ~ deltaLimit ~ buffer
    var income =  income || 0  ,  tax = tax || 0
    if(income > 0){return income > tax ? income - tax : 0}
    return -income > tax ? income + tax : 0


}




w.dbLayers=function(){var w=this

    w.dr( 75,75,150,150, '-')
    w.dr( 140,0,20,300)
    w.dr( 0,150,300,20)
    w.dr( 100,100,100,100, '+')
    return w}

w.dbCross=function(x,y){var w=this, c=w.cent()


    x=N(x)?x: c.x
    y=N(y)?y: c.y


    w.dr('t', -10+x,  -140+y, 20,300, '-')

    w.dr('t', -150+x,  -10+y, 300,20, '-')

    w.dot('r', x,y)
    return w


}

w.back=function(){var w=this,

     back = w.s.back

    if(!back.x){
        back.x=10000
        back.y=10000
    }
    else {
        back.x=0
        back.y=0
    }

return w}
w.HUD=function(){var w=this,

    back = w.s.HUD

    if(!back.x){
        back.x=10000
        back.y=10000
    }
    else {
        back.x=0
        back.y=0
    }

    return w}

w.lay=function(){var w= this

    w.back().HUD().db()

return w}




w.fwNoLim= function(b,x,y){var w=this, n=0
    cjs.tick(function(){
        var scl = N(w.SCALE)? w.SCALE : 1


        w.s.x =  (x-b.X())*scl     -   w.W()*(scl/2-.5)

        w.s.y =  (y-b.Y())*scl     -   w.H()*(scl/2-.5)

    })

    return w}



w.df=function(){var w=this
    return {x:w.W() /w.w,y:  w.H()/ w.h}
}
w.scl=function(n){var w=this,hW,hH
    w.SCALE=n
    w.s.sXY(n)
    w.cX=w.cX||0
    w.cY=w.cY||0
    hW=w.W()/2
    hH=w.H()/2

    w.s.X((w.cX-hW)*n + hW),
        w.s.Y((w.cY-hH)* n+hH)
    return this

}

w.limScl=function(n){var w=this,hW,hH
    w.SCALE=n
    w.cX=w.pX()
    w.cY=w.pY()
    w.s.sXY( n )

    hW=w.W()/2
    hH= w.H()/2

    w.pX( -((w.cX - hW)*n+hW))
    w.pY( -((w.cY - hH)*n+hH))

    return this
}



w.scale=function(a){var w=this
    w.s.sXY(a)
    if(a<1){w.s.XY(w.W()*(1-a)-w.W()/2,w.H()*(1-a)-w.H()/2)}
    else {w.s.XY(w.W()-(w.W()*a)/2, w.H()-(w.H()*a)/2)}}


w.sc=function(s){var w=this,

    g=G(arguments),

    s=g[0]


    if(g.d){

        s = w.df().x  // which is beigger?  .. smaller??
    }


    if(U(s)){
        w.SCALE =  N(w.SCALE)? w.SCALE : 1;return w.SCALE}


    w.SCALE=s

    w.s.sXY(s)

return w}



w.zoom = w.zm=function(z){var w=this,d=w.df().x
    if(U(z)){return w.sc()/d}
    if(!z>0){z=1}
    w.sc(d*z)
return w}
w.track =  function(b,x,y){
    var w=this, k, K,hW,kW,sX,sY //  has limits now!  and more.. tis is the ultimate!

    x=N(x)?x: w.W()/2
    y=N(y)?y: w.H()/2
    cjs.tick(function(){
        k=scl  = w.sc() //N(w.SCALE)? w.SCALE : 1
        K=function(a){return a*k}
        hW = w.W()/2
        kW = w.w*k
        sX=K(x-b.X()-hW)+hW
        w.s.x= sX>0?0 : sX<w.W()-kW?w.W()-kW: (kW/2)-hW<0?hW-(kW/2):   sX

        sY=(y - b.Y())* scl -  w.H() * (scl/2- .5 )
        if(sY>0){sY=0}
        if(sY < w.H() - w.sc()* w.h  ) { sY= w.H() - w.sc()* w.h }
        if((w.H()/2 - (w.h/2)* w.sc())>=0) {  sY =   w.H()/2 - (w.h/2)* w.sc()}
        w.s.y= sY

    })

    //i can leave the world-centering in fw//can optionally filter it with scale itself

    return w}
w.rat=function(){return {x: w.w/w.W(), y: w.h/w.H()}}


CAM=function(){
    w = b2d.G([1200,600,2400,1200], {  g:0 })

    w.dbX()

    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 500).rot(90).damp(1).mid()
    //w.cam(600);
    // w.foll(y,600,500, 300  )
    //w
    //w.platFoll(y,400,300)//, 550//,500,-300

    w.foll(y,600, 300)

    //w.SCALE=1.4

    w.dbLayers()

}
CAMLIM=function(){
    w = b2d.G([1200,600,2400,1200], {  g:0 })

    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 500).rot(90).damp(1).mid()

    cjs.tick(function(){

        w.s.sXY(w.SCALE)

        w.pXY(
                y.X()- 600,

                y.Y() - 300
        )


    })

    //w.cam(600);
    // w.foll(y,600,500, 300  )
    //w
    //w.platFoll(y,400,300)//, 550//,500,-300

    //w.foll(y,600, 300)


    w.SCALE=1


    up=true

    setInterval(function(){

        if(up){
            if(w.SCALE <1.8){ w.SCALE+= .02; }
            else {up=false} }

        else {
            if(w.SCALE > .4){ w.SCALE -= .02   }
            else {up=true}
        }

    }, 50)
}
CAMNOLIM=function(){
    w = b2d.G([1200,600,2400,1200], {  g:0 })

    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 500).rot(90).damp(1).mid()

    cjs.tick(function(){

        w.pos(    y.X()- 600,   y.Y() - 300  )
    })

    //w.cam(600);
    // w.foll(y,600,500, 300  )
    //w
    //w.platFoll(y,400,300)//, 550//,500,-300

    //w.foll(y,600, 300)

    w._camLimX=[-1000000, 10000000]
    w._camLimY=[-1000000, 100000000]
    w.SCALE=1


    up=true

    setInterval(function(){

        if(up){
            if(w.SCALE <1.2){ w.SCALE+= .01; }
            else {up=false} }

        else {
            if(w.SCALE > .8){ w.SCALE -= .01   }
            else {up=true}
        }

    }, 50)
}
STREETFIGHTER=function(){

    w = b2d.G([1200,600,1400,800], {})


    w.S(700,600,'r',400,20)

    y = w.ship(700, 700 ).linDamp(1)

    // w.cam(100, 600)

    w.foll(y, 700,500//,  200,  300
    )

    // w.follow(y,700,500,  200,  300 )

}
STREETFIGHTERBUFF=function(){

    w = b2d.G([1200, 600,1400,800], {})


    w.S(700,600,'r',400,20)

    y = w.ship(700, 700 ).linDamp(1)



    w.foll(y,600, 500,  700, 800, 350,350 )

}
ZOOM=function(){w=b2d.G(1000,1000,1000,1000)

    w.s.HUD.dot(500,500)
    y=w.ship(100, 100).rot(200)
    w.S(500,500,'o',200)
    w.S(500,500,'r',10)
    w.S(200,200,'m', 40)
    w.S(800,200,'b',60)
    w.S(800,800,'l',80)
    w.S(200,800,'g',100)



    w.inout()
    w.drag()
}

DRAGZOOM=function(){

    w = b2d.G(1000, 1000, 1000, 1000)
    w.s.HUD.dot(500, 500)
    y = w.ship(100, 100).rot(200)
    w.S(500, 500, 'o', 200)
    w.S(500, 500, 'r', 10)
    w.S(200, 200, 'm', 40)
    w.S(800, 200, 'b', 60)
    w.S(800, 800, 'l', 80)
    w.S(200, 800, 'g', 100)


    w.drag()

}

SCALEZOOM=function(){w = b2d.W({g:0,w:0}).db()
    p= w.player(200,200,2.5, 'thrust')
        .Y(200).horizCenter().den(.4).angDamp(8).linDamp(.8)


    star= w.bump(200,200,100,'pink').den(1).rest(2).bindSprite('earth',.13)

    w.distColl(p, star).freq(.15).damp(0).len(50)

    w.s.rXY(300,150)






    cjs.tick(function(){var scale=scaleFunc()

        w.s.sXY(scale)

        w.s.X( 300  -     (p.X()-300 )*scale  )

        w.s.Y(150  -      (p.Y() - 150 )* scale   )


    })



    w.cent('+')
    function scaleFunc(){var dx,dy,dst

        dx =   star.X()-p.X()
        dy =    star.Y()-p.Y()

        dst = 300 / Math.sqrt( (dx * dx) + (dy * dy) )




        return dst>2?2:  dst <.3? .3: dst

    }

}
MARIOGROUNDS =function(){w = b2d.W({w:0, g:5}).debug()
    w.s.XY(300,150)
    w.s.rXY(300, 150)

    w.ice(30,250, 400)
    w.grass(450,250,400)
    w.grass(500,100,4000)
    w.rubber(880,250,40000)

    p = w.mario().followX(600, 400)

}
SCROLLINGLEVEL=function(){w=b2d.W().debug()
    w.s.XY(300, 150).rXY(300, 150)
    w.grass(300,280,500)
    w.ice(1300, 280, 1000)
    w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 ).follow(600, 400)
}
SLIDE=function(){w=b2d.W().debug()
    w.roof.kill()
    w.s.XY(300, 150).rXY(300, 150)
    w.clouds().clouds(1000,-200)
    w.grass(300,280,500)
    w.ice(800,280, 5000)
    p = w.player(2.5, 'thrust').XY(800,-100) .angDamp( 10000 ).follow(600, 400)
    slide = w.rect(1200, 30, 1200,40, 'blue').den(1).fric(.5).rest(.5)
}
AUTOSCROLL=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.floor.kill()
    p= w.jumper()

    setup=function(){score=0
        p.XY(350, 100)
        p.linVel(0,0)
        w.s.XY(0,0)
    }

    setup()
    cjs.tick(function(){
        w.s.X(4,'-').pen(score++)
        if( p.relPos() < -100 ){setup()}})
    w.ramps()
}
RAMPS=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.s.XY(300,150)
    w.s.rXY(300, 150)
    w.ramps()
    p= w.jumper(400,100).followX(600, 400)
    cjs.tick(function(){$l(p.onGround)})
}
SCALINGLEVEL=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    p= w.jumper(1000,0)
    w.ice(800,280, 10000);
    w.rubber(50,100,300); w.rubber(-400,100,300)
    w.rect(1200,30, 600,4).stat();
    w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    w.s.XY(300, 150).rXY(300,150)
    p.calcScale=function(){return 1-((this.X()-300)/300)*.1}
    cjs.tick(function(){p.centerScale(p.calcScale())})
}
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

MOVESPACE=function(){w=b2d.G(1000,1000,2000,2000)


    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100); w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    y = w.ship(100, 100).rot(200)


    w.foll(y, 500, 500, 1000, 1000, 200,200 )

}
MOVEPLAT=function(){

    w=b2d.G(1000,1000, 2400, 1800).G(300)



    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100); w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    //y = w.ship(100, 100).rot(200)

    // p = w.mario(100,100, 4)

    p= w.jumper()

    w.foll(p, 500, 600,  1200, 1400,  400, 400 )

}
WARPSCROLL=function(){

    w=b2d.G(1000, 500,  2000, 1000)
    w.warpScroll =  function(b, x, y, fX,fY){var w=this

        y = w.H()-y

        bX =  b.X()
        bY =  b.Y()


        cjs.tick(function(){

            dX = bX-b.X()

            pX = cjs.adj(dX, fX)

            $l(pX)

            //  $l(  cjs.adj( b.X()-x,   fX  ) )


            //where is y rel to the point?

            rX = w.pX()-(b.X()-x)
            cX = cjs.adj( -rX, fX)


            //$l(cX)

            w.pX(w.pX()-pX //w.pX() + cX  // cjs.adj(b.X()-x,   fX  )

            )


            w.camY(    cjs.adj(b.Y()-y,   fY  )  )



        })

        return this}


    y = w.ship(1000, 400)

    w.warpScroll(y, 500, 300  )



    w.B(700, 300, 'r', [  [4]   ])
    w.B(800, 300, 'r', [  [4]   ])
    w.B(900, 300, 'r', [  [4]   ])

    w.B(1000, 300, 'r', [  [4]   ])

    w.B(1100, 300, 'r', [  [4]   ])
    w.B(1200, 300, 'r', [  [4]   ])
    w.B(1300, 300, 'r', [  [4]   ])

    w.s.HUD.dot('w', 500, 300)

}
ULT1=function(){
    w = b2d.G([1200,600,2400,1200], {  g:0 })
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 100).rot(120).damp(1,10)
    w.sc(5)
    w.fwNoLim(y, 600,300)
    w.dragScale()
}
ULT=function(){

// ok this is a brilliant demo of complete scrolling and zooming
// it has normal wall limits, but also centers the stage if you are zoomed out enough to see the whole thing
// but actually, i dont really need to allow the user to zoom out that much
//if you can see the whole 'world'.. zooming out more is pointless!!
// ok on to zoom min/max!!!
    w.wz = function(){var w=this

        //we never want a positive wz!! means right stage corner is visible

        return (V(   wX= w.s.x, wY= w.s.y ))


    }




    w.fwNoLim= function(b,x,y){var w=this, n=0
        cjs.tick(function(){
            var scl = N(w.SCALE)? w.SCALE : 1






            sX=(x - b.X())* scl -  w.W() * (scl/2 - .5)

            if(sX > 0){ sX = 0 }


            if(sX < w.W() - w.sc()* w.w   ) {   sX= w.W() - w.sc()* w.w  }


            //  if(w.W() * w.sc() < w.w/2){  sX =   w.W()/2 - (w.w/2)* w.sc()}



            if((w.W()/2 - (w.w/2)* w.sc())>=0) {  sX =   w.W()/2 - (w.w/2)* w.sc()}


            sY=(y - b.Y())* scl -  w.H() * (scl/2- .5 )
            if(sY>0){sY=0}

            if(sY < w.H() - w.sc()* w.h  ) {
                sY= w.H() - w.sc()* w.h
            }


            if((w.H()/2 - (w.h/2)* w.sc())>=0) {  sY =   w.H()/2 - (w.h/2)* w.sc()}


            w.s.x= sX
            w.s.y= sY

        })

        return w}


    w.rOK = function(){var w=this,sc =w.sc(); return  w.s.x + w.W()*w.sc() - 1200}

    w.bOK = function(){var w=this,sc =w.sc(); return  w.s.y + w.H()*w.sc() - 600}


    w = b2d.G([1200,600,2400,1200], {  g:0 })

    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)

    y = w.ship().XY(0,0).rot(120).damp(1,10)

    w.sc(.5)

    w.fwNoLim(y, 600,300)
    w.dragScale()



    w.dot(2350, 1150)




    w.dot(1150, 550,'+')

    w.sc(3); y.X(2190) //-> -5974
    w.sc(2); y.X(2088) //-> -3576
    w.sc(1); y.X(1790) //-> -1190


    y.XY(200,200)
    w.sc(2)



//setInterval(function(){s=((Math.random() * 5))/2; w.sc(s)}, 5000)


}
RIGHTTRACK=function(){w = b2d.G([900,300,3600,300],{g:0}).zoom(6)
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
}

SLOOM=function(){
    w = b2d.W([800,500,2400,500],{g:0}).zoom(3)
    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
    var z=3.2, up=true
    cjs.tick(function(){up=z>5?false:z<3.5?true:up
        w.zoom(z+= up?.01:-.01)})

}

ZJUMP=function(){
    w = b2d.G([1200,600,2200,2600],{g:300}).zoom(2.5)
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    y=w.jumper().Y(100).X(1175).track()}




w.wallX  =function(x,y,W,H){var w=this

    x=N(x)?x:60
    y=N(y)?y:x

    W = N(W)?W:30
    H = N(H)?H:W

    return w.S(x,y,'o',W,H).K('wall') .bo(.2)//default bo?
}
w.wallsX = function(W,H){var w=this, g=G(arguments)
    W =  N(g[0])?g[0]: 2400
    H =  N(g[1])?g[1]: 1200
    w.roof=   w.S(W/2, 0, 'y', W, 20)
    w.floor=  w.S(W/2, H, 'y', W, 20)
    w.left=   w.S(0, H/2, 'y', 20, H)
    w.right=  w.S(W, H/2, 'y', 20, H)

    w.w=W
    w.h=H

    if(g.N){
        w.camLims(  0,  w.w-w.s.W(),  0,  w.h-w.s.H()
        )

    }

    return this
}


//w.show(function(){})//not working with scroll