


GEAR=function(){
    boxMouseSetup()
    setupDebugDraw()
    makeGround2()
    makeShapeOnDblClk()

    car=w.a(bD.t(dB).xy(240/30, 350/30),fD.s(poly(6,3)))

    bWh=w.a(bx2=bD.t(dB).xy(200/30,400/30), fD.s(circ(1)))

    rj=rJt().i(car,bWh,bWh.c())

    w.j(rj)


    Wh=w.a(bx2=bD.t(dB).xy(200/30,400/30), fD.s(poly(2,2)))

    pj=prJt()
    pj.i(car, Wh,car.c(), bV(1,0)  )
    pj.localAnchorA = {x:car.c().x,y:car.c().y+5}
    pj.localAnchorB =Wh.c()
    w.j(pj)


    gj=gJt()




    gj.joint1 = rj
    gj.joint2 = pj
    gj.bodyA = bWh
    gj.bodyB = Wh


    w.j(gj)





}

GEAR2=function(){  z()
    boxMouseSetup()
    setupDebugDraw()
    makeGround2()
    makeShapeOnDblClk()



    Wh=w.a(bx2=bD.t(dB).xy(200/30,400/30), fD.s(poly(2,2)))

    pj=prJt()
    pj.i(g1, Wh, g1.c(), bV(1,0)  )
    pj.localAnchorA = g1.c()
    pj.localAnchorB =Wh.c()
    w.j(pj)






}

PRISM=function(){z()

    force=false

    boxMouseSetup(function(){if(force){car.aF(0,30000)}})

    setupDebugDraw()
    makeGround2()


    bWh=w.a(bx2=bD.t(dB).xy(200/30,400/30), fD.s(poly(2,2)))
    car=w.a(bD.t(dB).xy(240/30, 350/30), fD.s(poly(6,3)))

    p=prJt()

    p.i(car,bWh,  car.c(), bV(1,0)  )//.l(1).f(3).d(.1)

    p.lowerTranslation = -5.0
    p.upperTranslation = 2.5
    p.enableLimit = true;
    p.maxMotorForce = 10

    p.enableMotor = true;
    p.motorSpeed =10

    p.localAnchorA = {x:car.c().x,y:car.c().y+5} // a point in body A to keep on the axis line

    p.localAnchorB =bWh.c()// a point in body B to keep on the axis line

    //p.ratio =.8
    w.j(p)


    makeShapeOnDblClk()
  }







BGUN=function(){z()

    force=false

    boxMouseSetup(
        function(){if(force){car.aF(0,30000)}}
    )

    setupDebugDraw()
    makeGround2()


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

    })



}







REVOLUTE=function(){z()

    force=false

    boxMouseSetup(function(){

        if(force){car.aF(0,30000)}

    })

    setupDebugDraw()
    makeGround2()




    bWh=w.a(bx2=bD.t(dB).xy(200/30,400/30), fD.s(circ(1)))
    fWh=w.a(bD.t(dB).xy(300/30,400/30),fD.s(circ(1)))
    car=w.a(bD.t(dB).xy(240/30, 350/30), fD.s(poly(3,1)))

    w.cj(bwJ=rJt().i(car,bWh,bWh.c()))
    w.cj(fwJ=rJt().i(car,fWh,fWh.c()))

    bwJ.maxMotorTorque=100000
    bwJ.maxMotorSpeed=100000
    bwJ.enableMotor=true

    fwJ.maxMotorTorque=100000
    fwJ.maxMotorSpeed=100000
    fwJ.enableMotor=true

    bWh.SetAngularVelocity(10000)
    bWh.SetFixedRotation(10000)
    makeShapeOnDblClk()
    b=Ball()
}





BOX2D=function(){z()
    boxMouseSetup()
    setupDebugDraw()
    makeGround()
    makeStructure()
    makePlatform()
    addTenShapes()
    makeShapeOnDblClk()
    ball=Ball()}




WHEEL=function(){ z()



    boxMouseSetup()
    setupDebugDraw()
    makeGround2()
    // fiveJoints()
    fivePrisms()

    Ball();
    Ball('-')

}


HEADS=function(){z()
    boxMouseSetup()
    setupDebugDraw()
    makeGround()
    x.$$(Ball)}


IMPULSE=function(){z()

    boxMouseSetupNoGravity()

    setupDebugDraw()
    makeGround()


    bD=bB()

    bD.type=dB


    //b= w.a(bD.xy(), fD.s(circ(1)) )
    b=w.a(bD.xy(), fD.s(poly(1,1)) )

    wc=b.GetWorldCenter()



    aI=function(){

        b.ApplyImpulse(bV(10,-30), wc)
    }



    sLV=function(){

        b.SetLinearVelocity( bV(10,-60) )
    }


    aF=function(){
        b.ApplyForce(bV(100,-30),  b.GetWorldCenter())
    }

}



BOXGAME=function(){

    var mX,mY, mDown,
        selectedBody,
        mouseJoint,
        cvPx


    z()
    c=cx(600,400).a();c.q.id('canvas')  // why not just c.id('canvas')?
    s=St(c);STOP(); x=xx(c);s.ob.autoClear=false  //why not s.autoClear(0)?
    oMM=function(e){
        e=sE(e);
        mX=(e.cx- cvPx.x)/30;
        mY=(e.cy- cvPx.y)/30}
    w=bW(bV(0,40),true) //gravity, and allowSleep
    //start the ticker
    I(function(){
        setupMouse()
        w.st(1/60,10,10)
        w.ddd().cf()
        s.u()},1000/60)
    //set cvPx to canvas position
    gEP=getElementPosition=function(elem){

        var tagname='',
            x=0,y= 0,e=elem

        while(
            O(e)&&D(e.tagName)){

            y+=osT(e);
            x+=osL(e)
            tagname=uC(e.tagName)
            if(tagname=='BODY'){e=0}
            if(O(e)){if(O(osP(e))){e=osP(e)}}}
        return {x:x,y:y}}
    cvPx=getElementPosition(did()) //mouse
    // on key of 'd' : start mouse move listener
    dL('d',function(e){
        mDown=true
        oMM(e)
        dL('m',oMM,true)},b1)
    // on key of 'u' : remove mouse move listener
    dL('u',function(){

        dR('m',oMM,true)

        mDown=false
        tUd(mX,mY)},true)
    setupMouse=function(){ if(mDown&&!mouseJoint){

        var body=getBodyAtMouse(mX,mY)

        if(body){

            var md=b2MJD()
            md.bodyA=w.ggb()
            md.bodyB=body

            md.target.Set(mX,mY)
            md.cc(true).mf(300*body.GetMass())

            mouseJoint = w.cj(md)
            body.SetAwake(true)}}


        if(mouseJoint){
            if(mDown){mouseJoint.SetTarget(bV(mX,mY))}

            else{
                w.dj(mouseJoint)
                mouseJoint=null}}
    }
    setupDebugDraw()



    fD=bF().d(1).f(.5).r(.8)

    bD=b2BD()


    //create ground
    bD.type = sB
    fD.shape = poly()
    fD.sab(20, 2)
    bD.ps(10, 400 / 30 + 1.8)
    w.a(bD,fD)

    bD.ps(10, -1.8)
    w.a(bD,fD)
    fD.sab(2, 14)
    bD.ps(-1.8, 13)
    w.a(bD,fD)

    bD.ps(21.8, 13)
    w.a(bD,fD)


    //create some objects
    bD.type=dB

    pgs=new b2PolygonShape

    pgs.SetAsBox(r1(),r1())


    w.a( bD.xy(), pgs )



    ball=Ball()
}

BOXWORLD=function(){var mX,mY,v,mDown,sb,mJnt


    z()

    cx('#333333',800).q.id('canvas').a()()

    w=bW(bV(0,1),b1)

    fD=bF().d(1) //density
        .f(.5)  //friction
        .r(.5) //how bouncy
        .s(poly())  //shape
    fD.z(5,.8) //Gr-len,-thick

    w.cb(bD=b2BD().t(sB).ps(13,20)).cf(fD)//Gr-x,y

    fD.z(2,20)//gen-w,h
    w.cb(bD.ps(2,12)).cf(fD)//lft-wid,lft-y
    w.cb(bD.ps(25,8)).cf(fD)//rt x,y

    fD.z(10,3)//gen-w,h
    w.cb(bD.ps(20,12)).cf(fD)//rt x,y

    bD.t(dB)

    _t(10,function(){

        w.a( bD.xy(), fix() )

    })




    w.sdd( b=b2DD().ss(xid()).sds(20).sfa(.5).slt(1).sf(shB||jB) )





    cvPx=elPx(did())


    oMM=function(e){
        mX=(e.clientX-cvPx.x)/30;
        mY=(e.clientY-cvPx.y)/30}


    dL('d', //document.addListener('mousedown')

        function(e){mDown=true
            dL('m',oMM,true)   //document.addListener('mousemove')
            oMM(e)},true)

    dL('u',function(){
        dR('m',oMM,true)
        mDown=false
        mX=undefined
        mY=undefined},true)





    update=function(fx){

        if(isStat(fx)){return true}

        if(txPt(fx,v)){
            sb=gBod(fx) }

    }




    I(
        function(){

            var b,d
            if(mDown&&!mJnt){$l('mDown && !mJnt ')

                v=bV(mX,mY)
                sb=null

                w.q(update,  AB(mX-oo1,mY-oo1,mX+oo1,mY+oo1))

                b=sb

                if(b){


                    m=b2MJD()

                    m.bodyA=w.ggb()

                    m.bodyB=b

                    m.ts(mX,mY)

                    mJnt = w.cj(
                        m.cc(true).mf(300*b.GetMass()  )  )

                    b.SetAwake(true)}
            }


            if(mJnt){
                if(mDown){
                    mJnt.st(bV(mX,mY))}

                else {w.dj(mJnt)
                    mJnt=null}}
            w.st(1/60,10,10).ddd().cf()},

        16
    )}

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


ramp=function(){
    sc=30
    bsM={}



    bD.t(sB).xy(100/2/sc,100/2/sc).a((45*PI)/180).ud('__BODY__')



    fD.shape=poly()

    fD.sab((100-(100*0.1)/sc)/2,(10/sc)/2)



    r=w.cb(bD)

    bsM[r.GetUserData()]=r

    r.cf(fD)
}

bTest=function(iR,a,w,h,s){
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
            if(b.IsActive()&&D(b.gud())&&b.gud()!=null) {
                s[b.gud()]= getBodySpec(b)}}
        return s}
    getBodySpec=function(b){
        b.gp=b.GetPosition
        b.gwc=b.GetWorldCenter
        return {
            x:b.gp().x,
            y:b.gp().y,
            a:b.GetAngle(),
            c:{x:b.gwc().x,y:b.gwc().y}}}
    setBodies=function(be){var bD=bDef()

        for(var id in be){var e=be[id]
            e.r=e.radius
            e.a=e.angle

            bD.t(e.id=='ground'?sB
                :dB).xy(e.x,e.y).ud(e.id).a(e.a)

            var b=rgB(bD)

            if(e.r){fD.shape=circ(e.r);
                b.cf( fD)}

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
        var b1=bsM[b1i], b2=bsM[b2i],

            j=rJD().i(b1,b2,b1.GetWorldCenter())

        w.cj(j)}



    return t}






