b=b2.Dynamics.b2Body.prototype
b.track=function(x,y,z){var b=this,w= b.wor()
    w.track(b,x,y,z)
    return b}



w = b2d.World.prototype
w.track=  function(t,cX,cY, bf){var w=this    //i can leave the world-centering in fw//can optionally filter it with scale itself //  has limits now!  and more.. tis is the ultimate!

    if(U(t)){t = w._trackee}

    w.t=t
    cX=N(cX)?cX:w.W/2;
    cY=N(cY)?cY:w.H/2  //option to set based on t's CURRENT X/Y?

    if(O(bf)){
        bf.x = N(bf.x)? bf.x : w.w/2
        bf.y = N(bf.y)? bf.y: w.h/2
        bf.w=  N(bf.w)? bf.w:  0
        bf.h=  N(bf.h)? bf.h:   0
        bf.mX = N(bf.mX)? bf.mX : 1
        bf.mY = N(bf.mY)? bf.mY: 1
//

        //from foll:
        w.s.HUD.dot('w', bf.x, bf.y)
        w.s.HUD.dot('w', cX, cY)
        w.S(bf.x, bf.y, 'r',  [  [bf.w, bf.h, '-'] ] )
        w.S(bf.x, bf.y, 'w',  [  [bf.w+20, bf.h+20, '-'] ] )
        w.S(bf.x, bf.y, 'b', [ [bf.w, w.h,  '-'] ] )
        w.S(bf.x, bf.y, 'b', [ [w.w,  bf.h,  '-'] ] )
        w.S(bf.x, bf.y, 'z',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)



        //


        w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']])
        w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
        w.dot(bf.x+bf.w/2, bf.y-bf.h/2    ,'+')
        w.dot(bf.x+bf.w/2, bf.y+bf.h/2         ,'+')
        w.dot(bf.x-bf.w/2, bf.y+bf.h/2 , '+')
        w.dot(bf.x, bf.y, '*')
        w.dot('z', 600,600,'+')

        cjs.tick(function(){var sX,sY
            // sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
            sX =  bf.x - w.hW  + cjs.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
            sY = (bf.y- w.hH)   + cjs.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
            w.sXY( sX,  sY)})

    }
    else if(bf=='!'){
        cjs.tick(function(){var sX,sY
            sX = w.z*(t.X()-cX)
            sX =  sX  *   1  / ( 1 + w.hW/w.w )
            sY = w.z*(t.Y()-cY)
            sY = sY /  (1+ w.hH/w.h)
            w.sXY(sX,sY)})
    }

    else if(bf=='-'){
        cjs.tick(function(){
            w.s.x =  (cX-t.X())* w.z     -   w.W*(w.z/2-.5)
            w.s.y =  (cY-t.Y())*w.z     -   w.H*(w.z/2-.5)
        })
    }

    else {


        //w.S(cX,cY,'o',[ [40,400,'-']])
        // w.dbCross(cX,cY)
        w.dot(cX,cY,'+')

        cjs.tick(function(){
            if(F(w.t.cb)){w.t.cb()}
            else if(F(w.track.cb)){w.track.cb()}
            var dX=t.X()-cX, dY=t.Y()-cY
            w.sXY(w.z*w.hW+w.z*dX-w.hW, w.z*(w.hH+dY)-w.hH)})}
    return w}




SLOOM=function(){

    W([800,500,2400,500],{g:0}).Z(1.5).Y(200,200).showOff().bricks(
        [400,300,'r',200,100],[800,300,'z',100,100],
        [1200,300,'b',300,100],[1600,300,'z',100,100],
        [2000,300,'r',200,100])

    y.damp(1,10)
    y.track()

   //$.in(10,"y.img('me',.5)")

}




STREETFIGHTER=function(){


    W([1200, 600, 1400,1200], {g:300,t:0}).P()


    p.XY(700, 600)

    w.S(700,1000,'r',800,20)

    w.S(500, 800,'g',200,20)
    w.S(900, 600,'x',200,20)

    // y = w.ship( 700, 400 ).lD(1)


    // w.foll(y,600, 500,  700, 500, 350,50 )   //this is nice

    w.track(p,
        600, 400,  {x:700, y:1000, w:700, h:600,
            mX:1.5//,  mY:1.1
        }
    )


}
SPACEBUFF=function(){W(1000,1000,2000,2000).G(0)


    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100); w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    y = w.ship(100, 100).rot(200)


    w.track(y, 500, 500 ,{x:1000, y:1000, w:400, h:400} )

    BUFFER=function(){


        W([1200,600,4800,1600],{g:0,t:0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')

        y=w.ship(100,100).damp(1,10).rot(90).lD(2).aD(2)
            .rot(120)//.lV(1)

        w.bufFoll (y, 600, 300, {
            x: 800, y: 300, mX:.8, mY:.8,  w: 200, h: 200  })



        // w.Z(.8)
    }

}
SLIDEROOMS=function(){W([1200, 600,2400, 1000],{g:300}).P()
    w.right.kill(); w.left.kill()
    w.track(p,300,400, {
        x:1200,y:700,
        w:800,h:500,
        mX:10,mY:10
    })
}

KISS=function(){

    W([  1200, 600, 2400, 600 ],{g:10})


    _.times(10, function(i){

        w.D(100+i*100, 100).cir({
            c:$r(), C:$r(), r:25, lg:1
        }).den(.1)}) //  w.D(100+i*100, 100, $r(), 35).den(.1)

    _.times(10, function(i){
        w.D(100+i*140, 160).cir({  c:$r(), C:$r(), r:35, rg:1
        }).den(.1)
    })


    w.D(800, 300).cir({
         C:'y', l:2,
        r:120, bm:1
    }).den(.1)



    y = w.ship(50,50).C('d').mid()
    y2 = w.ship(100, 300).C('x').rot(180)


    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


    w.tRightLeft()

    w.showOff()


      I(function changeT(){
            if( w.t == y2){w.C('b'); w.t=y } else {w.C('z');w.t= y2}
        }, 5000)


}







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



w.tRightLeft=function(){var w=this, left

    cjs.tick(function(){
        if(!left){

           w.tX(10,'+')

           if(w.tX() > 2000){left=1}
        }

        else {
            w.tX(10,'-')
            if(w.tX() < 400){left=0}

        }})

    return w}
w.tX=function(t){var w=this
    if(U(t)){return w.tSpr.X()}
    w.tSpr.X.apply(w.tSpr, arguments)
    return w}
w.tY=function(t){var w=this
    if(U(t)){return w.tSpr.Y()}
    w.tSpr.Y.apply(w.tSpr,arguments)
    return w}
w.tXY=function(x,y){var w=this
    if(U(x)){return {x: w.tX(), y: w.tY()}}
    y=N(y)?y:x
    return w.tX(x).tY(y)}

w.Z = function(s){//w.sc=
    var w=this; if(U(s)){return w.z} // will dep
    w.z = s=='-'? w.mS : cjs.cap(s, w.mS)
    w.s.sXY(w.z)
    return w}
w.zoomOut=function(){ //knows when to stop :)
    var w=this
    w.tCb= function(){ w.Z( cjs.cap( w.z*=.98, w.mS))  }
return w}
w.zoomIn=function(){//ok
    var w=this

    w.tCb= function(){ w.Z( cjs.cap( w.z*=1.02,0,4))   }
return w}
w.inout=function(){var w=this, // now it works!!!!
    s=1,
    up=true

    w.t.cb = function(){
        if(up){
            if(s<2){ s+= .2; }
            else {up=false}
            w.Z(s)
        }

        else {
            if(s > .8){ s -= .2   }
            else {up=true}
            w.Z(s)
        }
    }

    return w}
w.dragScale=function(){var w=this,
    pX=0, pY= 0,  pmX,  pmY, o = {}

    c = $(w.s.HUD.canvas)

    c.mousedown(function(e){
        o.Scl = w.z
        o.Y = e.clientY

    })

    c.pressmove(function(e){
        var x=e.clientX,
            y=e.clientY,
            newSc = o.Scl +  (o.Y - e.clientY) * .005

        newSc = newSc>5?5  : newSc <.8 ?.8  : newSc
        w.Z( newSc )
    })

    return this}
w.sXCap=function(s){var w=this; return cjs.cap(s,0,w.w*w.z-w.W)}
w.sYCap=function(s){var w=this; return cjs.cap(s,0,w.h*w.z-w.H)}




w.sX=function(x){
    var w=this;
    if(U(x)){return -w.s.x}
    w.s.x = -w.sXCap(x); return w}
w.sY=function(y){
    var w=this;
    if(U(y)){return -w.s.y}
    w.s.y = -w.sYCap(y); return w}
w.sXY=function(x,y){var w=this; return w.sX(x).sY(y)}
w.pan=function(o){
    var  w=this,  g=G(arguments),  o=g[0],
        mZ = w.mZ ,
        MZ= mZ*3,
        z= w.mZ*3,  up=true,
        l
    if(g.m){
        l=function(){

            up = z > w.mZ*3? false :
                    z < w.mZ ? true:
                        up

            z *= up? 1.01 : .9
            w.Z(z / w.mZ)
        }
    }
    else {l=function(){

        up = z > w.mZ*3? false : z < mZ? true: up
        z += up? .03 : -.03
        w.Z(z / w.mZ)
    }}
    w.track.cb=l
    return w}

w.showOff=function(){var w=this
    zin()
    function zout(){setTimeout(zin, 10000);w.zoomOut()}
    function zin(){setTimeout(zout, 4000);w.zoomIn()}
    return w}

SCALESPACEZOOM=function(){W({g:0,w:0})
    w.cent('+')
    w.s.rXY(w.hW, w.hH)
    w.distColl(
        p= w.player(200,200,2.5, 'thrust').horizCenter().den(.4).aD(8).lD(.8),
        star= w.S(200, 200, 'p', 100).den(1).bo(2).bindSprite('earth',.13)
    ).freq(.15).damp(0).len(50)
    cjs.tick(function(){trans(cjs.cap(300/Math.dist(star,p),.3,2))})
    function trans(Z){w.s.sXY(Z)
        w.s.XY(w.hW-(p.X()-w.hW)*Z,
                w.hH-(p.Y()-w.hH)*Z)}}

w.bricks=function(){var w=this
    _.each(arguments, function(g){w.S.apply(w, g)})
    return w}
$.in=function(s,f){return setTimeout(_v(f), s*1000)}

CUPBALL=function(){//should zoom in when near cup
    CUPS()
    b = w.D(w.W/2, w.H/2, 'w', [[10  ]]).rest(.8).track()
    cjs.tick(function(){b.F(0, -20)})
    w.showOff()}
SCROLLNOLIM=function(){W([1200,600,2400,1200], {  g:0 })
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 100).rot(120).damp(1,10)

    w.Z(.8)

    w.track(y, 600,300,'-')

    w.dragScale()
}
TRACKEE=function(){

    W([  1200, 600, 2400, 600 ],{g:10})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})

    y = w.ship(50,50).mid()
    y2 = w.ship(100, 300).C('x').rot(180)


    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


    w.tRightLeft()

    w.showOff()


    setTimeout(function(){setInterval(function changeT(){if( w.t == y2){w.C('b'); w.t=y } else {w.C('z');w.t= y2}}, 5000)},5000)


}
CAMBALL=function(){

    W([1200,600,2400,600],{g:[10,10]}).Y()

    w.t =  b = w.D(300,300, 'r', 80).bo(.8).den(.1)



}
ZOOMSCALE=function(){

    W([1000, 1000], {g: 0, t: 0
    })

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
FOLLOWERS=function(){W(500, 500, 1600, 1000).G(0)
    a = w.ship().C('b')
    b  = w.ship(400,400).C('o').track()
    I(5, function(){
        if(w.follA){b.track(); w.follA=0}
        else {a.track(); w.follA=1}

    })


}
BASICSCROLL=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit

    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])

    y = w.ship(200,200).rot(120).damp(1,10)

    w.track(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)


    w.dot(1200,600)
    w.hud.dot(1200,600)




    y.XY(1400,600).rot(90).lD(0).lV(1)


}
SHORTLONG=function(){
    W([900,300,3600,300],{g:0}).Z(3)
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
}
TRACKEECB=function(){W([1200,600, 2400, 1200],{g:300})

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.B(100+i*100, 100,$r(), 35).den(.1)})

    w.Z('-')



    w.t=w.jumper().Y(100).X(1175) // no need to call track?

    setTimeout(function(){


        w.C('x')
        w.t.cb= function(){w.Z(w.z + .001)}
        }, 3000)




}
SHOWOFF=function(){W([1200, 600, 2400, 600], {g:10})

    y=w.ship(50,50).track()//.P(100,1000)

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.B(100+i*100, 100,$r(), 35).den(.1)})
    w.showOff()

}
WORLDPAN=function(){W([1200, 600, 2400, 600],{g:0})
    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)

    b= w.D(100,100, 'b', 30).lV(-10,-20).rest(.2)
    co = w.tensor().body( b.track())
    _.times(10, function(i){co.body( w.D(100 + 30*i,100, 'r', 30).lV(10,20).rest(.2) ) })

    y = w.ship(100,100).rot(120).aD(100)

    w.pan('*')

}










MARIOGROUNDS =function(){
    W([1200,600, 4000,1200], {w:'L',
        g:200})
    //w.s.XY(300,150)
    //w.s.rX(600)
    w.s.rY(-200)

    w.Z(.5)

    w.ice(30,250, 400)
    w.grass(450,250,400)
    w.grass(500,100,1000)
    w.rubber(880,250,1000)

   p= w.jumper(400,-100).track(600,400)

}

SCROLLINGLEVEL=function(){W()
    w.s.XY(300, 150)//.rXY(300, 150)
    w.grass(300,280,500)
    w.ice(1300, 280, 1000)

    w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    //p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 )
    w.ship().track(600, 400)
}

SLIDE=function(){W()
    w.roof.kill()
    w.s.XY(300, 150).rXY(300, 150)
    w.clouds().clouds(1000,-200)
    w.grass(300,280,500)
    w.ice(800,280, 5000)
    p = w.player(2.5, 'thrust').XY(800,-100)
        .aD( 10000 ).track(600, 400)
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

    W({w:'_',g:150}).P(1000,0)
    w.ice(800,280, 10000);
    w.rubber(50,100,300); w.rubber(-400,100,300)
    w.rect(1200,30, 600,4).stat();
    w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    w.s.XY(300, 150).rXY(300,150)



    cjs.tick(function(){

        p.centerScale(
                1-( (p.X()- w.hH)/ w.hH)*.1
        )

    })
}














//DEP TO TRACK
w.folx= w.follx= function(b,x,y,pX){var w=this

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


w.follRatio=function(t,cX,cY){
    //he reaches length of screen at same time as end of world!!!

    var w=this
    cjs.tick(function(){var sX,sY
        sX = w.z*(t.X()-cX)
        sX =  sX  *   1  / ( 1 + w.hW/w.w )
        sY = w.z*(t.Y()-cY)
        sY = sY /  (1+ w.hH/w.h)
        w.sXY(sX,sY)})


    return w}

//DEP TO TRACK
w.bufFoll =function(t,cX,cY,bf){ var w=this

    bf=bf||{}
    bf.x = N(bf.x)? bf.x : w.w/2
    bf.y = N(bf.y)? bf.y: w.h/2
    bf.w=  N(bf.w)? bf.w:  0
    bf.h=  N(bf.h)? bf.h:   0
    bf.mX = N(bf.mX)? bf.mX : 1
    bf.mY = N(bf.mY)? bf.mY: 1

    w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']])


    w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

    w.dot(bf.x+bf.w/2, bf.y-bf.h/2    ,'+')

    w.dot(bf.x+bf.w/2, bf.y+bf.h/2         ,'+')

    w.dot(bf.x-bf.w/2, bf.y+bf.h/2 , '+')


    w.dot(bf.x, bf.y, '*')
    w.dot('z', 600,600,'+')

    w.track(t,cX,cY,bf)
    /*
     cjs.tick(function(){var sX,sY
     // sX = (bf.x-w.hW)   + cjs.adj( (t.X()-bf.x),  bf.w/2)/w.z
     sX =  bf.x - w.hW  + cjs.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
     sY = (bf.y- w.hH)   + cjs.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
     w.sXY( sX,  sY)})
     */
    return w}


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

w.zoomx= w.zmx= function(z){var w=this,  g=G(arguments), z=g[0]

    if(U(z)){return w.z * w.mZ}


    z = g.n?  w.mZ : cjs.cap(z, 0)

    $l(  z / w.mZ )
    w.Z(z / w.mZ)

    // if(g.P){w.Z(cjs.cap(z, 0, w.mZ) / w.mZ); return w}

    return w}
w.sclx=function(s){var w=this // scale and translate to keep centered
    w.z = s
    w.cX= w.cX||0;
    w.cY= w.cY||0

    w.s.X( w.W/2 +  ( w.cX- w.W/2 ) * s    )
    w.s.Y( w.H/2 +  ( w.cY- w.H/2 ) * s    )

    return w}
w.limSclx=function(n){var w=this,hW,hH
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
w.scalex=function(a){var w=this
    w.s.sXY(a)
    if(a<1){w.s.XY(w.W*(1-a)-w.W/2,w.H*(1-a)-w.H/2)}
    else {w.s.XY(w.W-(w.W*a)/2, w.H-(w.H*a)/2)}}
w.ratx=function(){return {x: w.w/w.W, y: w.h/w.H}}
w.followx= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

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
