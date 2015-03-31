w = b2d.World.prototype

/*
w.cam=function(x,y){var w=this //<-pXY
    if(U(y)){y=x;x=0}
    w.pXY(x,y)
    w._camX=x; w._camY=y
    return w}

w.camLims = function(xm, xM, ym, yM){var w=this
    if(A(xm)){
        w._camLimX = xm
        w._camLimY = xM}
    else {
        w._camLimX = [xm,xM]
        w._camLimY = [ym,yM]}
    return w}
*/

w.pX =  function(x){var w=this
    if(U(x)){ return -w.s.x }
    //if(w._camLimX){w.s.x =  -cjs.cap(x,   w._camLimX[0]* w.z,  w._camLimX[1] * w.z  )}
    else {w.s.x = -x  }
    return w}


w.pY =  function(y){var w=this

    if(U(y)){return -w.s.y}
    w.s.y = -cjs.cap(y,  w._camLimY|| [0,0] )

    return w}


w.pXY = function(x,y){var w=this
    if(U(x)){ return V(w.pX(),w.pY()) }
    return w.pX(x).pY(y)}




w.pos=function(x,y){var w=this
    w.s.XY(-x,-y)
    w.cX = -x
    w.cY = -y
    if(w.z){ w.scl(w.z) }
    return this}

w.scl=function(s){var w=this

    w.z = s

    w.cX= w.cX||0; w.cY= w.cY||0

    w.s.X( w.W/2 +  ( w.cX- w.W/2 ) * s    )
    w.s.Y( w.H/2 +  ( w.cY- w.H/2 ) * s    )

    return w

}






TRACKEE=function(){W([  1200, 600, 2400, 600 ],{g:10})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})
    y=w.ship(50,50).mid()


    w.tRightLeft=function(){var w=this
        var left
        cjs.tick(function(){
            if(!left){
                w.t.X(10,'+')
                if(w.t.X() > 2000){left=1}
            }
            else {
                w.t.X(10,'-')
                if(w.t.X() < 400){left=0}
            }
        })
        return w}

    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?

    w.tX=function(){    }

    w.tY=function(){    }

    w.tRightLeft().showOff()


}



w.oMD=function(){
    var c = $(w.s.HUD.canvas)

    c.mousedown(function(e){

        o.dx = e.clientX-w.s.x

    })

}
// world mouse down vs canvas mouse down!!!
// canvas mouse down just uses $.oMD
w.dragX = function(){var w=this,d
   w.hud.c.m({
        mD: function(x){d = x-w.s.x},
        pM: function(x){w.s.x = x-d}
   })
    return w}
w.dragY = function(){var w=this,d
    w.hud.c.m({
        mD: function(x,y){d = y - w.s.y},
        pM: function(x,y){w.s.y = y - d}
    })
    return w}
w.drag=function(){return this.dragX().dragY()}
w.drgX = function(){var w=this,d

    w.hud.c.m({
        mD: function(x){ d = x - w.s.x },
        pM: function(x){ w.s.x =  x-d  }
    })

    return w}
w.drgY = function(){var w=this,d
    w.hud.c.m({
        mD: function(x,y){d = y - w.s.y},
        pM: function(x,y){w.s.y = y - d}
    })
    return w}
w.drg=function(){return this.drgX().drgY()}

w.limScl=function(n){var w=this,hW,hH
    w.z=n
    w.cX=w.pX()
    w.cY=w.pY()
    w.s.sXY( n )

    hW=w.W/2
    hH= w.H/2

    w.pX( -((w.cX - hW)*n+hW))
    w.pY( -((w.cY - hH)*n+hH))

    return this
}
w.scale=function(a){var w=this
    w.s.sXY(a)
    if(a<1){w.s.XY(w.W*(1-a)-w.W/2,w.H*(1-a)-w.H/2)}
    else {w.s.XY(w.W-(w.W*a)/2, w.H-(w.H*a)/2)}}
w.Z = w.sc=function(s){var w=this; if(U(s)){return w.z} // will dep
    w.z = s=='-'? w.mS : cjs.cap(s, w.mS)
    w.s.sXY(w.z)
    return w}
w.minZoomX = function(){

    var w=this, z,

        W=w.W,  H=w.H,

        wMin =   W/w.w    ,

        hMin =   H/ w.h



    $l('wMin: ' + wMin  + ' - '+'hMin: ' + hMin )


    if(wMin >  hMin){

        z= wMin
    }


    else {

        z= hMin
    }

    return z



}
w.minZoom=function(t){ return this.mZ } //track uses it
w.minZ=function(t){
    var w=this,

        mH=    w.h/w.H,
        mW=    w.w/w.W,
        z

    if(t){$l(mW + ', '+ mH)}

    z=mH>mW? mH: mW

    if(z<1){z=1}
    return z}
w.mz=function(){var w=this

    w.zoom(w.minZ(true),'+')
    return w}
w.zoom= w.zm= function(zoom){var w=this,  g=G(arguments),  zoom=g[0]

    if(g.n){return w.zoom(w.mZ) }

    if(U(zoom)){ return w.z * w.mZ }

    zoom = cjs.cap(zoom, 0)

    w.Z( zoom/w.mZ )      // for later: if(g.P){w.Z(cjs.cap(z,0,w.mZ)/w.mZ);return w}

    return w}
w.zoomOut=function(){

    var w=this, min = w.mS,


        z = w.z

    w.track.cb= function(){ z*= .98;  w.Z(z)   }

}
w.zoomIn=function(){
    var w=this, max = 4,
        z = w.z
    w.track.cb= function(){ z*= 1.02;  w.Z(z)}}
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
w.dragScale=function(){var w=this,
    pX=0, pY= 0,  pmX,  pmY,

    c = $(w.s.HUD.canvas)

    c.mousedown(function(e){

        oScl = w.z

        oY = e.clientY

    })


    c.pressmove(function(e){
        var x=e.clientX,
            y=e.clientY,

            newSc = oScl +  (oY - e.clientY)*.005

        newSc = newSc>5?5
            : newSc<.1?.1
            : newSc



        w.Z( newSc )

    })



    return this}
w.fwNoLim= function(b,x,y){var w=this, n=0
    cjs.tick(function(){
        var scl = N(w.z)? w.z : 1


        w.s.x =  (x-b.X())*scl     -   w.W*(scl/2-.5)

        w.s.y =  (y-b.Y())*scl     -   w.H*(scl/2-.5)

    })

    return w}
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
w.track=  function(b,x,y){
    var w=this,
        k, K,hW,kW,sX,sY //  has limits now!  and more.. tis is the ultimate!

    if(U(b)){return w.track(w.trackee)}

    x=N(x)?x: w.W/2
    y=N(y)?y: w.H/2

    cjs.tick(function(){

        if(F(w.track.cb)){w.track.cb()}

        k = scl  = w.z //N(w.z)? w.z : 1
        K = function(a){return a*k }
        cW = w.W
        wW = w.w

        sX=K(b.X()-x) + (K(w.W)- w.W)/2

        w.s.x=   -cjs.cap(sX,  0, K(wW)- w.W  )

        sY=  K(y-b.Y())  +  w.H/2 - K(w.H/2)

        sY = cjs.cap(sY, sY= w.H -  K(w.h),0  )

        if((w.H/2 - K(w.h/2) )>=0) {  sY =  w.H/2 - K(w.h/2) }

        w.s.y= sY

    })




    //i can leave the world-centering in fw//can optionally filter it with scale itself

    return w}
w.rat=function(){return {x: w.w/w.W, y: w.h/w.H}}
w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

    cjs.tick(function(){
        K=function(n){return n*w.z}
        cW = w.cW()
        wW = w.w
        cH = w.cH()
        wH = w.h
        MULT = .9//1.1 //1//4 //zoom
        sX = cW/2 + cjs.adj( b.X()-cW, 0) * MULT //sX=K(b.X()-x) + (K(cW)-cW)/2
        w.s.x = -cjs.cap(sX, 0, K(wW)-cW )
        sY = cH/2 + cjs.adj( b.Y()-cH,  0)//  * MULT //sY=K(b.Y()-y) + (K(cH)-cH)/2
        w.s.y = -cjs.cap(sY,0, K(wH)-cH )
    })

    return w}
w.warpScroll =  function(b, x, y, fX,fY){var w=this

    y = w.H - y

    bX =  b.X()
    bY =  b.Y()

    fX=0
    fY=0

    cjs.tick(function(){

        dX = bX- b.X()

        pX = cjs.adj(dX, fX)

        //$l(pX)

        //  $l(  cjs.adj( b.X()-x,   fX  ) )

        //where is y rel to the point?

        rX = w.pX()-(b.X()-x)
        cX = cjs.adj( -rX, fX)

        //$l(cX)

        w.pX(w.pX()-pX) //w.pX() + cX  // cjs.adj(b.X()-x,   fX  )

        w.pY(    cjs.adj(b.Y()-y,   fY  )  )


    })

    return this}
w.mark=function(){var w=this
    w.C('z')
    _.times(50, function(i){w.S(i*200, 0, 'w', 1,10000).sensor(true)})
    _.times(50, function(i){w.S(0, i*200,   'w', 10000,1).sensor(true)})
    return w}
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
w.md= function(l){var w=this

    $(w.hud.canvas).mousedown(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.mu= function(l){var w=this

    $(w.hud.canvas).mouseup(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.mm= function(l){var w=this

    $(w.hud.canvas).mousemove(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.m$= function(l){var w=this

    $(w.hud.canvas).click(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.m$$= function(l){var w=this

    $(w.hud.canvas).dblclick(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.pan=function(o){
    var  w=this,g=G(arguments),
        o=g[0],
        mZ = w.minZoom(),

        MZ= mZ* 3,
        z=mZ,
        up=true, l
    if(g.m){
        l=function(){
            up = z > MZ? false : z < mZ? true: up

            z *= up? 1.01 : .9

            w.zoom(z)
        }
    }
    else {l=function(){
        up = z > MZ? false : z < mZ? true: up
        z += up? .03 : -.03
        w.zoom(z)}}
    w.track.cb=l
    return w}
w.showOff=function(){var w=this
    zin()
    function zout(){setTimeout(zin, 10000);w.zoomOut()}
    function zin(){setTimeout(zout, 4000);w.zoomIn()}
    return w}


ZOOM=function() {

    W([1000, 1000], {g: 0, t: 0
    })


    w.s.HUD.dot(500, 500)
    y = w.ship(100, 100).rot(200)
    w.S(500, 500, 'o', 200)
    w.S(500, 500, 'r', 10)
    w.S(200, 200, 'm', 40)
    w.S(800, 200, 'b', 60)
    w.S(800, 800, 'l', 80)
    w.S(200, 800, 'g', 100)

    //w.inout()
    w.drag()


    r = $.range().A()

    r.abs(775,500)
    r.css(  'transform', 'rotate(90deg)'  )
    r.W(500).val(0)


    cjs.tick(function(){

        w.Z( r.val()/25+1 )

    })




}
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

    W(1200,600,1400,800)


    w.S(700,600,'r',400,20)

    y = w.ship(700, 700 ).linDamp(1)

    // w.cam(100, 600)

    w.foll(y, 700,500//,  200,  300
    )

    // w.follow(y,700,500,  200,  300 )

}
STREETFIGHTERBUFF=function(){


    W([1200, 600,1400,1500], {g:0,t:0})


    w.S(700,600,'r',400,20)

    y = w.ship( 700, 400 ).lD(1)


    w.foll(y,600, 500,  700, 500, 350,50 )




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
ULTBUF=function(){


    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})





    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)


    w.dot(1200,600)
    w.hud.dot(1200,600)


    y.dX=function(){var y=this
        return  cjs.adj( y.X()-1200, 200)
    }
    y.cX=function(){var y=this, w= y.wor()

        return y.X() - w.pX()
    }

    y.XY(1400,600).rot(90).lD(0).lV(1)

    // cjs.tick(function(){  var x =    y.cX().toFixed(0)-600; if(x>0){  $l(x)  }  })
}
FOLLOWERS=function(){W(500, 500, 1600, 1000).G(0)

    a = w.ship().C('b')

    b  = w.ship(400,400).C('o').track()



    I(5, function(){

        if(w.follA){
            b.track()
            w.follA=0
        }
        else {a.track()
            w.follA=1
        }

    })


}
WARPSCROLL=function(){

    W([1000, 500,  2000, 1000], {t:0})


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
SMARTSCROLL=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit


    w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){

            K=function(n){return n*w.z}
            cW = w.cW()
            wW = w.w
            cH = w.cH()
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom

            sX = cW/2 +   (b.X()-cW)  * MULT       //sX=K(b.X()-x) + (K(cW)-cW)/2

            w.s.x = -cjs.cap(sX, 0, K(wW)-cW )


            sY = cH/2 +  ( b.Y()-cH )   * MULT      //sY=K(b.Y()-y) + (K(cH)-cH)/2

            w.s.y = -cjs.cap(sY,0, K(wH)-cH )

        })

        return w}





    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)


    w.dot(1200,600)
    w.hud.dot(1200,600)




    y.XY(1400,600).rot(90).lD(0).lV(1)


}
MARK=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit


    w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){

            K=function(n){return n*w.z}
            cW = w.cW()
            wW = w.w
            cH = w.cH()
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom

            sX = cW/2 +   (b.X()-cW)  * MULT       //sX=K(b.X()-x) + (K(cW)-cW)/2

            w.s.x = -cjs.cap(sX, 0, K(wW)-cW )


            sY = cH/2 +  ( b.Y()-cH )   * MULT      //sY=K(b.Y()-y) + (K(cH)-cH)/2

            w.s.y = -cjs.cap(sY,0, K(wH)-cH )

        })

        return w}





    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0}).mark()


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)

    w.dot(1200,600)
    w.hud.dot(1200,600)

    y.XY(100,600).rot(90).lD(0).lV(4)


}
STATS=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit


    w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){

            K=function(n){return n*w.z}

            cW = w.W

            wW = w.w
            cH = w.H
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom

            sX = cW/2 +   (b.X()-cW)  * MULT       //sX=K(b.X()-x) + (K(cW)-cW)/2

            w.s.x = -cjs.cap(sX, 0, K(wW)-cW )


            sY = cH/2 +  ( b.Y()-cH )   * MULT      //sY=K(b.Y()-y) + (K(cH)-cH)/2

            w.s.y = -cjs.cap(sY,0, K(wH)-cH )

        })

        return w}





    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0}).mark()


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)

    w.dot(1200,600)
    w.hud.dot(1200,600)

    y.XY(100,600).rot(90).lD(0).lV(4)

    d = $.div('t', 400,600).abs(1200,0).A()
    d.A(  $.h1('world stats')  )


    d1 = $.div('x', 400,600).abs(1600,0).A()
    d1.A(  $.h1('body stats')  )
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
RAMPS=function(){

    w=W(300).P(300,0)

    w.right.kill()
    w.left.kill()
    w.roof.kill()


    w.s.XY(300,150)
    w.s.rXY(300, 150)
    w.ramps()

    //.followX(600, 400)


    cjs.tick(function(){$l(p.onGround)})

}
SCALINGLEVEL=function(){

    W({w:'_'}).P(1000,0)


    w.ice(800,280, 10000);
    w.rubber(50,100,300); w.rubber(-400,100,300)
    w.rect(1200,30, 600,4).stat();
    w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    w.s.XY(300, 150).rXY(300,150)
    p.calcScale=function(){return 1-((this.X()-300)/300)*.1}
    cjs.tick(function(){p.centerScale(p.calcScale())})
}
MOVESPACE=function(){W(1000,1000,2000,2000)


    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100); w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    y = w.ship(100, 100).rot(200)


    w.foll(y, 500, 500, 1000, 1000, 200,200 )

}
MOVEPLAT=function(){

    w=b2d.W([1000,1000, 2400, 1800], {t:0}).G(300)

    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100); w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    //y = w.ship(100, 100).rot(200)

    // p = w.mario(100,100, 4)

    p= w.jumper()

    w.fwBuf=function(b,x,y, pX,pY,bX,bY){var w=this

        w.s.HUD.dot('w', x, y)

        w.S(pX, w.h/2, 'b', [ [bX*2, w.h,  '-'] ] )
        w.S(w.w/2,pY, 'b', [ [w.w, bY*2,  '-'] ] )
        w.S(pX, pY, 'w',  [  [bX*2+20, bY*2+20, '-'] ] )
        w.S(pX, pY, 'r',  [  [bX*2, bY*2, '-'] ] )
        w.S(pX, pY, 'o',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)


        scale = w.sc()//1

        cjs.tick(function(){

            w.pX( (pX-x)  +  cjs.adj(b.X()-pX,bX) // * scale
            )

            w.pY( (pY-y)  +  cjs.adj(b.Y()-pY,bY)  //*scale
            )



        })

    }

    w.fwBuf(p, 500, 600,  1200, 1400, 50,50
        // 400, 400
    )

    w.sc(.5)
}
ULT1=function(){W([1200,600,2400,1200], {  g:0 })
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


    W([1200,600,2400,1200],{g:0, t:0})

    w.wz = function(){var w=this

        //we never want a positive wz!! means right stage corner is visible

        return (V(   wX= w.s.x, wY= w.s.y ))


    }
    w.fwNoLim= function(b,x,y){var w=this, n=0
        cjs.tick(function(){
            var scl = N(w.SCALE)? w.SCALE : 1



            sX=(x - b.X())* scl -  w.W * (scl/2 - .5)

            if(sX > 0){ sX = 0 }


            if(sX < w.W - w.sc()* w.w   ) {   sX= w.W - w.sc()* w.w  }


            //  if(w.W * w.sc() < w.w/2){  sX =   w.W/2 - (w.w/2)* w.sc()}



            if((w.W/2 - (w.w/2)* w.sc())>=0) {  sX =   w.W/2 - (w.w/2)* w.sc()}


            sY=(y - b.Y())* scl -  w.H * (scl/2- .5 )
            if(sY>0){sY=0}

            if(sY < w.H - w.sc()* w.h  ) {
                sY= w.H - w.sc()* w.h
            }


            if((w.H/2 - (w.h/2)* w.sc())>=0) {  sY =   w.H/2 - (w.h/2)* w.sc()}


            w.s.x= sX
            w.s.y= sY

        })

        return w}
    w.rOK = function(){var w=this,sc =w.sc(); return  w.s.x + w.W*w.sc() - 1200}
    w.bOK = function(){var w=this,sc =w.sc(); return  w.s.y + w.H*w.sc() - 600}

    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)

    y = w.ship().XY(0,0).rot(120).damp(1,10)

    w.Z(.5)

    w.fwNoLim(y, 600,300)
    //w.dragScale()

    w.dot(2350, 1150)

    w.dot(1150, 550,'+')

    w.sc(3); y.X(2190) //-> -5974
    w.sc(2); y.X(2088) //-> -3576
    w.sc(1); y.X(1790) //-> -1190


    y.XY(200,200)
    w.sc(2)



//setInterval(function(){s=((Math.random() * 5))/2; w.sc(s)}, 5000)


}
RIGHTTRACK=function(){

    W([900,300,3600,300],{g:0}).zoom(6)
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
}
WORLDPAN=function(){

    W([1200, 600, 2400, 600],{g:0}).pan('*')


    y = w.ship(100,100).rot(120).aD(100)//.stat()

    b= w.D(100,100, 'b', 30).lV(-10,-20).rest(.2)
    co = w.tensor().body( b.track())
    _.times(10, function(i){
        co.body( w.D(100 + 30*i,100, 'r', 30).lV(10,20).rest(.2) ) })



    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)

}
SLOOM=function(){
    w = b2d.W([800,500,2400,500],{g:0}).zoom(3)
    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)

    y = w.ship(200,200).rot(120).damp(1,10)

    w.track(y)

    w.showOff()
    // w.pan()

    setTimeout(function(){
        y.bindSprite('me',.5)
    }, 10000)

}
WDOWN=function(){

    W([1200,600,2400,600],  {g:10, m:'m'  })

    w.B(300,400, 'r', 50,50); w.B(800,400, 'r', 50,50);
    w.B(1200,400, 'r', 50,50);
    w.B(1600,400, 'y', 100,100).K('m')

    y= w.ship().track()



}
ZJUMP=function(){

    W([1200,600, 2400, 1200],{g:300})

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)


    _.times(10, function(i){ w.B(100+i*100, 100,$r(), 35).den(.1)})



    //w.zoom(100); w.track.cb= function(){var z=w.zoom(),mZ=w.minZoom(); if(z>mZ ){w.zoom(z*.9)}}


    w.zoom('-')

    y=w.jumper().Y(100).X(1175).track()

}
NEWZOOM=function(){W([

    1200, 600, 2400, 600


],{g:10})

    y=w.ship(50,50).track()//.P(100,1000)

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)


    _.times(10, function(i){ w.B(100+i*100, 100,$r(), 35).den(.1)})



    // w.s.scaleX=3


    w.in=function(z){

        var base = 1

        if(U(z)){



        }

    }



w.showOff()


}












/*

w.sW=function(W){
    var w=this, wW=w.W

    if(U(W)){return wW * w.s.scaleX}
    w.s.scaleX=W/wW
    return w}


w.sWM=function(m){var w=this,cW=w.cW()
    if(U(m)){return w.sW()/cW}
    w.sW(  cW * m  )
    return this}

w.fit=function(){var w=this

    w.s.scaleX = w.cW()/ w.w;
    w.s.scaleY = w.cY()/ w.h;
}

w.xX=function(X){

    var w=this,

        m = w.sWM()


    if(U(X)){return m-1}

    w.sWM(X+1)

    return w}


w.zX=function(z){var w=this,

    zX=w.s.scaleX - 1

    if(U(z)){return zX}

    if(z>=0){ w.s.scaleX=z+1}

    else {

        cW = w.cW()

        half = cW/2

        newW =  cW + half*( -(z-1) )

        newSc = cW/newW

        w.s.scaleX = newSc
    }




    return w}




*/
//w.MIN = function(){var w=this; return w.Ww > w.Hh ? w.Ww : w.Hh }
//w.wz = function(){var w=this; return (V(   wX= w.s.x, wY= w.s.y ))} //we never want a positive wz!! means right stage corner is visible
//w.rOK = function(){var w=this; return  w.s.x + w.W*w.z - 1200}
//w.bOK = function(){var w=this; return w.s.y + w.H*w.z - 600}
////w.df=function(){var w=this; return {   x: w.Ww,  y: w.Hh }}
