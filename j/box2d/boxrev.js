rev1=function() {
    gg = G(arguments)

}


rev =function(a,b, c,d, e,f){var g=G(arguments)

    var j=sJD(new BXJ.b2RevoluteJointDef())

    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.mt=function(a,b,c){
        j.mS(a)
        j.mMT(N(b)?b:100)
        if(c!='-'){j.eM(1)}
        return j}

    j.lm=function(a,b,c){
        j.lA(a).uA(b)

        if(c!='-'){j.eL(1)}
        return j}

    if(U(c)){c=a.c()}
    if(O(c)){j.i(a,b,c)}

    else if(N(e)){
        j.A(a).B(b)
            .lAA(bV(c/30,d/30)).lAB(bV(e/30,f/30))}

    else if(N(c)){j.i(a,b,bV(c/30,d/30))}

    return sJD(j)

}




rJt =function(o){//rJD=

    var j=sJD(new BXJ.b2RevoluteJointDef())

    j.i=function(a,b,c,d,e,f){
        var g=G(arguments)

        if(U(c)){c=a.c()}
        j.Initialize(a,b,c)

        return j}

    if(O(o)){

        if(o.i){  _a(j.i, o.i, j  )}


        if(N(o.l)){j.l(o.l)} else {j.l(1)}
        if(N(o.f)){j.f(o.f)} else {j.f(3)}
        if(N(o.d)){j.d(o.d)} else {j.d(.1)}
        if((o.c)){j.cC(1)}  else {j.cC(0)}
        if(o.lAA){j.lAA(o.lAA)}
        if(o.lAB){j.lAB(o.lAB)}
        if(o.rA){j.rA(o.rA)}
        if(o.eL){j.eL(o.eL)}
        if(o.lA){j.lA(o.lA)}
        if(o.uA){j.uA(o.uA)}
        if(o.eM){j.eM(o.eM?true:false)}

        if(o.mS){j.mS(o.mS)}
        if(o.mMT){j.mMT(o.mMT)}

        //localAnchorA - the point in body A around which it will rotate
        //localAnchorB - the point in body B around which it will rotate
        //referenceAngle - an angle between bodies considered to be zero for the joint angle
        //enableLimit - whether the joint limits will be active
        //lowerAngle - angle for the lower limit
        //upperAngle - angle for the upper limit
        //enableMotor - whether the joint motor will be active
        //motorSpeed - the target speed of the joint motor
        //maxMotorTorque - the maximum allowable torque the motor can use

        return w.cJ(j)}

    return sJt(j)

}



REVYY=function(){makeWorld()
    a=ba()
    b=bi()

   r=rJt({i:[a,b ]})


    c=baa(400,200)
    d=bi(400,200,200)


    r0 = rev(c,d)

    //r0.lm(-50,100)

     r0.mt(200 )

    r1=w.cJ( r0 )

}


REVDEMO=function(){makeWorld()

    w.j(rev( baa(100,100), bi(100,100,200,40)) .mt(5,1))
    w.j(rev( baa(250,100), bi(250,100,200,40)) .mt(5,2))
    w.j(rev( baa(400,100), bi(400,100,200,40)) .mt(5,10000))
    w.j(rev( baa(550,100), bi(550,100,200,40)) .mt(20,5))
    w.j(rev( baa(700,100), bi(700,100,200,40)) .mt(20,10))
    w.j(rev( baa(850,100), bi(850,100,200,40)) .mt(20,10000))

    w.j(rev( baa(100,220), bi(100,220,200,40)).lm(0,0) )
    w.j(rev( baa(250,220), bi(250,220,200,40)).lm(0,10)  )
    w.j(rev( baa(400,220), bi(400,220,200,40)).lm(0,180)  )
    w.j(rev( baa(550,220), bi(550,220,200,40)).lm(-180,0)  )
    w.j(rev( baa(700,220), bi(700,220,200,40)).lm(-360,180)  )
    w.j(rev( baa(850,220), bi(850,220,200,40)).lm(0,1000)  )

    w.j(rev( baa(100,340), bi(100,340,200,40)).lm(0,0).mt(5,1) )
    w.j(rev( baa(250,340), bi(250,340,200,40)).lm(0,10).mt(5,2)  )
    w.j(rev( baa(400,340), bi(400,340,200,40)).lm(0,180).mt(5,10000)  )
    w.j(rev( baa(550,340), bi(550,340,200,40)).lm(-180,0).mt(20,5)  )
    w.j(rev( baa(700,340), bi(700,340,200,40)).lm(-360,180).mt(20,10)  )
    w.j(rev( baa(850,340), bi(850,340,200,40)).lm(0,1000).mt(20,10000)  )

    w.j(rev( baa(100,460), bi(100,460,200,40)).lm(0,0).mt(-5,1) )
    w.j(rev( baa(250,460), bi(250,460,200,40)).lm(0,10).mt(-5,2)  )
    w.j(rev( baa(400,460), bi(400,460,200,40)).lm(0,180).mt(-5,10000)  )
    w.j(rev( baa(550,460), bi(550,460,200,40)).lm(-180,0).mt(-20,5)  )
    w.j(rev( baa(700,460), bi(700,460,200,40)).lm(-360,180).mt(-20,10)  )
    w.j(rev( baa(850,460), bi(850,460,200,40)).lm(0,1000).mt(-20,10000)  )

}


spinner=function(x,y){x=N(x)?x:500;y=N(y)?y:200

    dial=w.a(dBD(x,y), pFx(200,40))
    rock=w.a(sBD(x,y), pFx(10,10))

    return w.cJ(

        rJt({

            i:[rock, dial, dial.c()],
            eM:1,
            mS:-10,
            mMT:100



        })


    )}
spinner1=function(x,y){x=N(x)?x:500;y=N(y)?y:x

    dial=w.a(dBD(x,y), pFx(200,40))
    rock=w.a(sBD(x,y), pFx(10,10))

    return w.cJ(

        rJt().i(rock,dial, dial.c())


    )}
sRJ=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    b11=w.a(  bx1=dBD(x,y),fix())

    b22=w.a(  bx2= dBD(x ,y ) ,fix())

    w.cJ(

        rJt().i( b11,b22,  b11.c(),b22.c() )//.l(10).f(3).d(.1)//.cC(1)

    )

}
mRJ=function(){x.$$(sRJ)}
REVOLUTE=function(){makeWorld()


    bWh=w.a(dBD(200,400), cFx(30))
    fWh=w.a(dBD(300,400), cFx(30))
    car=w.a(dBD(240,350), pFx(90,30))

    w.cJ( rJt().i(car, fWh, fWh.c()) )

    j=w.cJ( rJt().i(car,bWh, bWh.c()) )

        .mS(10).mMT(20).mMS(100000).eM(1)

    //bWh.aV(10000).fR(10000)

    d=spinner(500,400).sL(20,240).eL(1).mS(40).mMT(100).eM(1)

}
WHEEL=function(){ z()

    makeWorld()

    fivePrisms()

    Ball();
    Ball('-')

}
gear=function(bA, bB, ratio){
    ratio=N(ratio)?ratio:1

    j= new BXJ.b2GearJointDef()
    j.joint1=bA
    j.joint2=bB
    j.ratio=ratio

    j.bodyA= bA.GetBodyA()
        j.bodyB= bB.GetBodyA()
    return j}
GEARRY=function(){makeWorld()

    j1=w.j(rev( baa(100,220), bi(100,220,200,40)))


    j2=w.j(rev( baa(250,220), bi(250,220,200,40)))


    w.j(
        gear(j1,j2,1)

    )


}
GEAR=function(){z()

    makeWorld()

    car=w.a(

        bDf().t(dB).xy(240,350), fD.s(pSh(6,3) )

    )

    bWh=w.a(bx2=bD.t(dB).xy(200 ,400 ), fD.s(cSh(1)))

    rj=rJt().i(car,bWh,bWh.c())

    w.j(rj)


    Wh=w.a(bx2=bD.t(dB).xy(200 ,400 ), fD.s(pSh(2,2)))

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


    w.j(gj)}
GEAR2=function(){  z()
    boxMouseSetup()
    setupDebugDraw()
    makeWalls()
    makeShapeOnDblClk()



    Wh=w.a(bx2=bD.t(dB).xy(200/30,400/30), fD.s(poly(2,2)))

    pj=prJt()
    pj.i(g1, Wh, g1.c(), bV(1,0)  )
    pj.localAnchorA = g1.c()
    pj.localAnchorB =Wh.c()
    w.j(pj)






}
WINDMILL=function(){
    makeWorld()

    anc=bi(400,300,60,60)
    lev=bi(400,300,300,20)

    w.cJ(

        rJt().i(
            anc,lev,anc.c(),lev.c()
        ).cC(false)//.l(1).f(3).d(.1)

    )






}


