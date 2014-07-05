

sRJ=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    b11=w.a(
        bx1=dBD(x,y),fix())

    b22=w.a(
        bx2= dBD(x ,y ) ,fix())

    w.cJ(

        rJt().i( b11,b22,  b11.c(),b22.c()
        )//.l(10).f(3).d(.1)//.cC(1)

    )

}







rJt =rJD=function(o){

    var j=sJD(new BXJ.b2RevoluteJointDef())

    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    if(O(o)){
        if(o.i){_a(j.i,o.i,j)}

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

        if(o.eM){j.eM(o.eM)}
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

    sJt(j)


    return j

}



spinner=function(x,y){x=N(x)?x:500;y=N(y)?y:x

    dial=w.a(dBD(x,y), pFx(100,20))
    rock=w.a(sBD(x,y), pFx(10,10))
    return w.cJ( rJt().i(rock,dial, dial.c()) )}













mRJ=function(){x.$$(sRJ)}


