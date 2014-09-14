RevoluteJointDef = rev =function(a,b, c,d, e,f){var g=G(arguments)

    //pass in body1, body2, world-bV
    //world-bV defaults to body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


    var j= SuperJointDef( new BXJ.b2RevoluteJointDef() )


    j.i = function(){var g=G(arguments)

       j.Initialize.apply(j,g)

        return j}



    j.mt = function(a,b,c){

        j.mS(a)

        j.mMT(N(b)?b:100)

        if(c!='-'){j.eM(1)}

        return j
    }




    j.lm=function( a, b, c ){

        j.lA(a).uA(b)

        if(c!='-'){j.eL(1)}

        return j

    }


    if(U(c)){c=a.c()}

    if(O(c)){j.i(a,b,c)}

    else if(N(e)){ j.A(a).B(b).lAA( bV(c/30,d/30)).lAB( bV(e/30,f/30)) }

    else if(N(c)){ j.i(a,b, bV(c/30,d/30)) }

    SuperJointDef(j)

    return j}






revJoint=function(){

    //world.createRevoluteJoint

    return world.createJoint(

        RevoluteJointDef( ba(), bi() )

)


}



revJoint1=function(){return world.createJoint(

    RevoluteJointDef(

    baa(400, 200),
    bi(400, 200, 200)

).mt(200 ) )

}



revJoint2=function(){return w.j( rev(bi(400,50,50), bi(400,50,50)).mt(10 ) )}
revJoint3=function(){return w.j( rev(bi(400,30,30,50), bi(400,30,30,50)).mt(10 ) )}


revJoint4=function(){

    return w.j(

        rev(

            bi(400,30,10,80),   bi(400,30,20,160)

        ).mt(10 )




    )




}




spinner=function(x,y,s,t){
    $l('spinner')

    x=N(x)?x:500
    y=N(y)?y:200
    s=N(s)?s: 100
    t=N(t)?t: 100

    dial= bi(x,y,200,40)//w.a(dBD(x,y), pFx(200,40))
    rock= bii(x,y,10,10)//w.a(sBD(x,y), pFx(10,10))

    return w.cJ(

        rev( dial, rock ).mt(s,t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })

    )}
seesaw=function(){

    anc=bi(400,300,60,60)
    lev=bi(400,300,300,20)

    w.j(

        rev(

            anc,  lev,  anc.c(),  lev.c()

        ).cC(0)

    )


}
refFix=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    b11=w.a(  bx1=dBD(x,y),fix())

    b22=w.a(  bx2= dBD(x ,y ) ,fix())

    w.j(

        rev( b11,b22,  b11.c(),b22.c() )//.l(10).f(3).d(.1)//.cC(1)

    )

}
makeCar=function(){
    var car = w.a(dBD(240, 350), pFx(90,30)),
        bWh = w.a(dBD(200, 400), cFx(30)),
        fWh = w.a(dBD(300, 400), cFx(30))

    w.j(rev(fWh, car))
    w.j(rev(bWh, car).mt(-10, 20))

    return car}


RABBIT=function(){

    mW()

    world.createJoint(


        rev(

        baa(300,300,100),


            //world.addDynamicBody

            world.addBody(   DynamicBodyDef(300,300),   [  CircleFixture(50) ,   PolyFixture(10,80,20,160)   ]  )


        )


    )


}
REVDEMO=function(){makeWorld()

    w.j(rev( baa(100,100), bi(100,100,100,40)) .mt(5,1))
    w.j(rev( baa(250,100), bi(250,100,100,40)) .mt(5,2))
    w.j(rev( baa(400,100), bi(400,100,100,40)) .mt(5,10000))
    w.j(rev( baa(550,100), bi(550,100,100,40)) .mt(20,5))
    w.j(rev( baa(700,100), bi(700,100,100,40)) .mt(20,10))
    w.j(rev( baa(850,100), bi(850,100,100,40)) .mt(20,10000))

    w.j(rev( baa(100,220), bi(100,220,100,40)).lm(0,0) )
    w.j(rev( baa(250,220), bi(250,220,100,40)).lm(0,10)  )
    w.j(rev( baa(400,220), bi(400,220,100,40)).lm(0,180)  )
    w.j(rev( baa(550,220), bi(550,220,100,40)).lm(-180,0)  )
    w.j(rev( baa(700,220), bi(700,220,100,40)).lm(-360,180)  )
    w.j(rev( baa(850,220), bi(850,220,100,40)).lm(0,1000)  )

    w.j(rev( baa(100,340), bi(100,340,100,40)).lm(0,0).mt(5,1) )
    w.j(rev( baa(250,340), bi(250,340,100,40)).lm(0,10).mt(5,2)  )
    w.j(rev( baa(400,340), bi(400,340,100,40)).lm(0,180).mt(5,10000)  )
    w.j(rev( baa(550,340), bi(550,340,100,40)).lm(-180,0).mt(20,5)  )
    w.j(rev( baa(700,340), bi(700,340,100,40)).lm(-360,180).mt(20,10)  )
    w.j(rev( baa(850,340), bi(850,340,100,40)).lm(0,1000).mt(20,10000)  )

    w.j(rev( baa(100,460), bi(100,460,100,40)).lm(0,0).mt(-5,1) )
    w.j(rev( baa(250,460), bi(250,460,100,40)).lm(0,10).mt(-5,2)  )
    w.j(rev( baa(400,460), bi(400,460,100,40)).lm(0,180).mt(-5,10000)  )
    w.j(rev( baa(550,460), bi(550,460,100,40)).lm(-180,0).mt(-20,5)  )
    w.j(rev( baa(700,460), bi(700,460,100,40)).lm(-360,180).mt(-20,10)  )
    w.j(rev( baa(850,460), bi(850,460,100,40)).lm(0,1000).mt(-20,10000)  )}
CAR=function(){mW()

    makeCar()

    d=spinner(500,400)
        .sL(20,240).eL(1)
        .mS(40).mMT(100).eM(1)


}


SuperGearJoint=function(gearJoint){


return gearJoint}






gear=function(bA, bB, ratio){

    ratio = N(ratio)? ratio : 1

   var gearJoint = new BXJ.b2GearJointDef()

    gearJoint.joint1 = bA
    gearJoint.joint2 = bB
    gearJoint.ratio = ratio

    gearJoint.bodyA= bA.GetBodyA()
    gearJoint.bodyB= bB.GetBodyA()

    return gearJoint

}







DEMO_GEAR=function(){makeWorld()

    //world.Joint()
    //world.Gear()
    world.createJoint(

        gear(

            j1 = world.createJoint(

                rev(
                    baa(100,220),
                    bi(100,220,100,20)
                )

            ),



            j2 = world.createJoint(

                rev( baa(250,220), bi(250,220,100,20))

            ),

            1
    )


    )

}








rJtX=function(o){

    var j=SuperJointDef(new BXJ.b2RevoluteJointDef())

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

        if(o.uA){ j.uA(o.uA) }


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

