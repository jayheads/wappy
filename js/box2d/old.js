
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
