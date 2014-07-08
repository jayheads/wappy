MAKEWORLD=function(){
    return makeWorld()
}


BGUN=function(){z()

    force=false

    boxMouseSetup(
        function(){if(force){car.aF(0,30000)}}
    )

    setupDebugDraw()
    makeWalls()


    box=w.a(bx2=bD.t(sB).xy(200/30,400/30), fD.s(poly(2,2)))

    car=w.a(bD.t(dB).xy(240/30, 250/30), fD.s(poly(3,1)))


    w.cj(bwJ=rJt().i(car,box,

        bV(4,13)))
    x.$$(function(){

        p=car.GetPosition()

        bBod=w.b( bDef().xy(p.x+4, p.y-2).t(dB) )

        bBod.f(bF().s(circ(.4)))

       // b=w.a(bb)

        bBod.aI(40,40)

    })}

BOX2D=function(a){

  makeWorld()


    makeStructure()
    makePlatform()

    addTenShapes()
    ball=Ball()

}


BOX2D1=function(){z()
    boxMouseSetup()
    setupDebugDraw()
    makeGround()
    makeStructure()
    makePlatform()
    addTenShapes()
    makeShapeOnDblClk()
    ball=Ball()}

HEADS=function(){z()
    boxMouseSetup()
    setupDebugDraw()
    makeGround()
    x.$$(Ball)
}

IMPULSE=function(){z()

    boxMouseSetupNoGravity()

    setupDebugDraw()
    makeGround()

    w.a(
        bDf(dB).ang(2).fR(0).xy(),

        fD.s( pSh(1,1) )
    )



    b=w.a( bD=bDf(dB).ang(1).fR(.2).xy(), fD.s(pSh(1,1)) )


    wc=b.wC()
    test={
    i:function(){b.ApplyImpulse(bV(10,-30), wc)},

    v:function(){b.SetLinearVelocity( bV(10,-60) )},

    f:function() {
        I(function () {
            b.ApplyForce(bV(0, -3), wc)
        }, 100)

    }
    }

}
BOXDATA=function(){z();c=cx(600,400).a();c.q.id('canvas')
    s=St(c);STOP();x=xx(c);s.ob.autoClear=false
    var mX,mY,mV,mDn,slB,mJt,
        cvPx={x:osT(c.c),y:osL(c.c)},
        xC=cvPx.x,
        yC=cvPx.y

    w=bW(bV(0,40),true)
    w.a(bD=bB().t(sB).ps(10,400/30+1.8),
        fD=bF().d(1).f(.5).r(.8).sP().sab(20,2))

    w.a(bD.ps(10,-1.8),fD)
    w.a(bD.ps(-1.8,13),fD.sab(2,14))
    w.a(bD.ps(21.8,13),fD)



    _t(10,function(){
        w.a(bD.t(dB).xy(),
            fix())})

    //x.$$(function(x,y){var b=bD.t(yn()?dB:sB);w.a(b.xy(x/30,y/30),fix())})


    x.$$(function(x,y){

        var b=bD.t(dB), f=fix()

        b.xy(x/30,y/30)

        w.a(b,f)




    })





    w.sdd(b2DD().ss(xid()).sds(30).sfa(.5).slt(1).sf(shB||jB))





    I(function(){
        mV=b2V(mX,mY);slB=null
        w.q(function(f){if(!iSB(f)){return true}
                if(iPtM(f,mV)){slB=gBd(f)}},
            AB(mX-oo1,mY-oo1,mX+oo1,mY+oo1))



        if(mDn&&!mJt&&slB){
            mJt=w.cj(mJD().A(
                    w.ggb()).B(
                    slB.a()
                ).ts(mX,mY).cc(true).mf(
                    300*slB.m()))}

        if(mJt){if(mDn){mJt.st(bV(mX,mY))} else{w.dj(mJt);mJt=null}}
        w.st(1/60,10,10).ddd().cf();s.u()
    },1000/60)








    oMM=function(e){
        e=sE(e)
        mX=(e.cx-xC)/30
        mY=(e.cy-yC)/30}


    dL('d',function(e){mDn=b1

            oMM(e)

            dL('m',oMM,b1)},

        b1)


    dL('u',function(){mDn=b0

            dR('m',oMM,b1)

            tUd(mX,mY)},

        b1)

    ball=Ball()



    sc=30
    bsM={}



    bD.t(sB).xy(100/2/sc,100/2/sc).a((45*PI)/180).ud('__BODY__')



    fD.shape=poly()

    fD.sab((100-(100*0.1)/sc)/2,(10/sc)/2)



    r=w.cb(bD)

    bsM[r.GetUserData()]=r

    r.cf(fD)

}


ramp=function() {

    bsM = {}

    r = w.a(
        sBD(100 / 2, 100 / 2).a((45 * PI) / 180).ud('__BODY__'),
        pFx((100 - (100 * 0.1)) / 2, (10) / 2))

    bsM[r.GetUserData()] = r

return bsM}



BTEST=function(iR,a,w,h,s){
    iR=pI(iR)
    a=a
    W=w||100
    H=h||100
    sc=s
    bsM={}


    fD=b2FD().d(1).f(.5).r(.2)

    update=function(){
        var start=Date.now(),
            stepRate=(t.a)?(now- lastTimestamp)/1000:(1/ iR)
        w.st(stepRate,10,10).cf()
        return(Date.now()-start)}

    getState=function(){var s={}
        for(var b=w.GetBodyList();b;
            b=b.m_next){b.gud=b.GetUserData
            if(b.IsActive() && D(b.gud())&&b.gud()!=null){
                s[b.gud()]= getBodySpec(b)}}
        return s}


    // a body method
    getBodySpec=function(b){
        b.gp=b.GetPosition
        b.gwc=b.GetWorldCenter

        return {
            x:b.gp().x,
            y:b.gp().y,
            a:b.GetAngle(),
            c:{x:b.gwc().x, y:b.gwc().y}}
    }






    setBodies=function(be){var bD=bDef()

        for(var id in be){var e=be[id]
            e.r=e.radius
            e.a=e.angle

            bD.t(e.id=='ground'?sB
                :dB).xy(e.x,e.y).ud(e.id).a(e.a)

            var b=rgB(bD)

            if(e.r){fD.shape=circ(e.r);
                b.cf(fD)}

            else if(e.polys){

                _t(_z(e.polys),function(j){var p=e.polys[j],vs=[]

                    _e(p,function(p,i){var v=b2V()
                        v.Set(p.x,p.y);vs[i]=v})})

                fD.shape=poly()
                fD.shape.saa(vs,_z(vs))

                b.cf(fD)}

            else{fD.shape=poly()
                fD.sab(e.halfWidth,e.halfHeight);
                b.cf(fD)}}
        ready=true}



    addJoint=function(b1i,b2i){

        var b1=bsM[b1i],
            b2=bsM[b2i],

            j=rJD().i(b1,b2,b1.GetWorldCenter())

        w.cj(j)}


    return t}





SCALECIRC=function(){
    makeWorld()

    baa(400,300,40);
    baa(290,350,40);
    baa(280,220,40)

    r=350
    x=400
    y=440
    v={x:0,y:0}

    f1=function(){

        b= w.a(
            d=dBD(x,y)//.lV(v)
            ,
            f=b.cF(cFx(r)))
    }


    f2=function(){
        b.dF(f)
        r+=10
        x=b.x()
        y=b.y()
        v=b.lV()

        f1()
    }

     f1()
  //  I(f2,400)



}


RORC=function(){
    makeWorld()
    bouncy()
    bouncy()
    bouncy()
    fricky()
    fricky()
    fricky()}
CUPS=function(){
    makeWorld()
    cup(280,50)
    cup2(400,50)
    cup3(700,50)
    fluffy()
    ba()
    ba()
    ba()

    bii(150,220,50)
}
EASBOX=function(){z()

    var mX,mY,
        mDown,
        selectedBody,
        mouseJoint,
        cvPx

    goRight=true


    s=St(c=sCan().id('canvas').wh(800,600).a())

    s.bm('me', function(bm){m=bm

        SL(m)

        s.t(function(){

            if(goRight){m.x(10,'+')}else{m.x(10 ,'-')}
        })
        s.t(function(){
            if(m.x()>500){goRight=false}
            else if(m.x()<0){goRight=true}
        })
        s.t(function(){
            m.x(r.x())
            m.y(r.y())
        })





    })

    x=xx(c)

    s.ob.autoClear=false


    oMM=function(e){
        e=sE(e)
        mX=(e.cx-cvPx.x)/30;
        mY=(e.cy-cvPx.y)/30}

    w=bW(bV(0,40),true)



    s.t(function(){


        setupMouse=function(){

            if(mDown && !mouseJoint){
                var body=getBodyAtMouse(mX,mY)
                if(body){
                    var md= b2MJD ()
                    md.bodyA=w.ggb()
                    md.bodyB=body
                    md.target.Set(mX,mY)
                    md.cc(true).mf(300*body.GetMass())
                    mouseJoint = w.cj(md) //mJ = //world createJoint crJ
                    body.SetAwake(true)//body sAw
                }}


            if(mouseJoint){

                if(mDown){
                    mouseJoint.SetTarget( bV(mX,mY) )} //sTg}

                else{

                    w.dj(mouseJoint)
                    mouseJoint=null}}
        }

        setupMouse()

        w.st(1/60,10,10).ddd().cf()

    })

    gEP=getElementPosition=function(elem){

        var tagname='',   x=0,y= 0,e=elem

        while(
            O(e)&&D(e.tagName)){

            y+=osT(e);
            x+=osL(e)
            tagname=uC(e.tagName)
            if(tagname=='BODY'){e=0}
            if(O(e)){if(O(osP(e))){e=osP(e)}}}
        return {x:x,y:y}}


    cvPx=getElementPosition(did())



    dL('d',function(e){
        mDown=true
        oMM(e)
        dL('m',oMM,true)},b1)
    dL('u',function(){

        dR('m',oMM,true)

        mDown=false
        tUd(mX,mY)},true)




    w.sdd(
        debugDraw=b2DD().ss(
            xid()
        ).sds(30).sfa(.5).slt(1).sf(shB||jB) )


    makeWalls()

    r=makeStructure()


    //makePlatform()
    //addTenShapes()
    makeShapeOnDblClk()
    //ball=Ball()

}
MOVEHEAD=function(){z()

    c=sCan().id('canvas').wh(800,600).a()

    s=St(c)

    s.bm('me', function(bm){
        m=bm


        SL(m)

        s.t(function(){ m.x( 1,'+') })

    })


    makeShapeOnDblClk()

}



PULLEY=function(){makeWorld()

    x=500
    y=200

    b11= bi(300,300,200,10)

    b22= bi(500,300,200,10)

    p=pJt().i(
        b11,
        b22,
        bV(15,1), bV(25,2),
        b11.c(),b22.c(),
        1)

        .lA(8).lB(4).mLA(10).mLB(5)

    w.cJ(p)

    makeMe()
    makeTim(10)

}
