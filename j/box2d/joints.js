sJD=function(j){

    j.i=function(){
        var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.A=function(a){j.bodyA=a; return j}

    j.B=function(a){j.bodyB=a; return j}

    j.cC=function(a){j.collideConnected=a?true:false; return j}

    //pops
    j.sT    =j.tg=j.sTg=j.st=function(a,b){
        if(!O(a)){a=bV(a,b)}
        j.SetTarget(a)

        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a/30;return j}
    j.d=function(a){j.dampingRatio=a;return j}

    j.rA=function(a){j.referenceAngle= tRad(a); return j}

    j.lAA=function(a){j.localAnchorA=a; return j}

    j.lAB=function(a){j.localAnchorB=a; return j}

    j.r=function(a){j.ratio=a; return j}

    j.lXA=function(a){j.localAxisA=a; return j}


    //MOTOR
    j.mMS=function(a){j.maxMotorSpeed=a;return j}
    j.mMT=function(a){
        j.maxMotorTorque=a
        return j}
    j.mMF=function(a){j.maxMotorForce=a;return j}
    j.mS=function(a){j.motorSpeed=a; return j}
    j.eM=function(a){j.enableMotor=a?true:false; return j}

    //LIMITS
    j.lA=function(a){j.lowerAngle=tRad(a);return j}

    j.uA=function(a){j.upperAngle=tRad(a);return j}

    j.lT=function(a){j.lowerTranslation=a;return j}
    j.uT=function(a){j.upperTranslation=a;return j}
    j.eL=function(a){j.enableLimit=a?true:false;return j}

    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}



    return j}




sJt=function(j){


    //shared
    j.i  =function(){
        var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.cC=function(a){j.collideConnected=a?true:false; return j}

    j.i1=function(){
        var g=G(arguments)
        _a(j.Initialize,g,j);
        return j}

    //pops
    j.sT    =j.tg=j.sTg=j.st=function(a,b){
        if(!O(a)){a=bV(a,b)}
        j.SetTarget(a)

        return j}


    j.f  =function(a){j.frequencyHz=a;return j}
    j.l  =function(a){j.length=a/30;return j}
    j.d  =function(a){j.dampingRatio=a;return j}

    //motor
    j.mMS=function(a){
        j.maxMotorSpeed=a
        return j}



    //motor rev

    j.mS=function(a){

        j.SetMotorSpeed(a)

        return j}

    //j.eM=function(a){bwJ.enableMotor=a?true:false;return j}

    j.eM=function(a){
        j.EnableMotor( a?true:false)
        return j}


    j.mMT=j.mT=function(a,b,c){j.SetMaxMotorTorque(a,b,c); return j}
    j.mMF=j.mT=function(a,b,c){j.SetMaxMotorForce(a,b,c); return j}


    j.sL=function(a,b){
        a=N(a)?a:20
        b=N(b)?b:180
        j.SetLimits(tRad(a),tRad(b))

        return j}

    j.eL=function(a){
        j.EnableLimit( a?true:false)
        return j}





    return j}



//DISTANCE JOINTS
//makes a distance joint def
dJt =function(o){

    var j=sJt(new BXJ.b2DistanceJointDef())

    //this initialize function for distance, not revolute
    j.i=function(a,b,c,d){
        if(U(c)){c=a.c()}
        if(U(d)){d=b.c()}
        j.Initialize(a,b,c,d)
        return j}

    //set length, freq, damp to a default

    //j.l(1).f(3).d(.1)



    if(O(o)){

        if(o.i){_a(j.i,o.i,j)}
        if(N(o.l)){j.l(o.l)} else {j.l(1)}
        if(N(o.f)){j.f(o.f)} else {j.f(3)}
        if(N(o.d)){j.d(o.d)} else {j.d(.1)}
        if((o.c)){j.cC(1)}  else {j.cC(0)}

        return w.cJ(j)

    }



    return j}
rod =function(a,b){return dJt().i(a,b)}
spring =function(a,b){return dJt().i(a,b).l(1) .f(3) .d(.1)}
sDJ=function(x,y){
    w.cJ(

        spring(

        w.a( dBD(x,y), fix() ),

        w.a( dBD(x,y), fix() )

    ))
}
mDJ=function(){x.$$(sDJ)}
bridge=function(x,y){

    x=N(x)?x:400
    y=N(y)?y:300

    var  b1 = baa(x, y),
        b2 = bi(),
        b3 = bi(),
        b4 = bi(),
        b5 = bi(),
        b6 = bi(),
        b7 = bi(),
        b8 = bi(),
        b9 = bi(),

        b10 = baa(x+300, y)

    w.cJ(dJt().i(b1, b2).l(10).f(5).d(.01))
    w.cJ(dJt().i(b2, b3).l(10).f(5).d(2))
    w.cJ(dJt().i(b3, b4).l(10).f(5).d(.1))
    w.cJ(dJt().i(b4, b5).l(10).f(5).d(2))
    w.cJ(dJt().i(b5, b6).l(10).f(5).d(2))
    w.cJ(dJt().i(b6, b7).l(10).f(5).d(2))
    w.cJ(dJt().i(b7, b8).l(10).f(5).d(2))
    w.cJ(dJt().i(b8, b9).l(10).f(5).d(2))
    w.cJ(dJt().i(b9, b10).l(10).f(5).d(2))
}
BRIDGE=function(){makeWorld()



    bridge(100,200)
    bridge(500,200)





}
DIST=function(){makeWorld()


    w.cJ( dJt().i(ba(),ba()).l(100).f(1).d(.01) )
    w.cJ( dJt().i(ba(),ba()).l(100).f(1).d(2) )


    w.cJ( dJt().i(bi(),bi()).l(100).f(5).d(.1) )
    w.cJ( dJt().i(bi(),bi()).l(100).f(5).d(2) )




    //  w.cJ( dJt().i(ba(),ba()).l(4).f(3).d(.1) )
    //  w.cJ( dJt().i(ba(),ba()).l(8).f(3).d(.1) )
    //  w.cJ( dJt().i(ba(),ba()).l(16).f(3).d(.1) )
    //  w.cJ( dJt().i(ba(),ba()).l(32).f(1).d(.1) )
    //  w.cJ( dJt().i(ba(),ba()).l(200).f(1).d(.8) )


    cup2()



}
CANCOLLIDE=function(){makeWorld()
    w.cJ(dJt().i(ba(200,200,50),
        ba(300,200,40))
        .l(50).f(3).d(.1))
    w.cJ(dJt().i(ba(200,200,50),ba(300,200,60))
        .l(50).f(3).d(.1).cC(1))
    w.cJ(dJt().i(bi(200,200,50),bi(300,200,40))
        .l(50).f(3).d(.1))
    w.cJ(dJt().i(bi(200,200,50),bi(300,200,60))
        .l(50).f(3).d(.1).cC(1))}
RAGD=function(){makeWorld()


    w.cJ(spring(
        b11=ba(100,100,30),
        b22=ba(100,200,40)
    ))


    w.cJ(rod(
        b33=bi(100,400,30),
        b44=bi(100,500,40)
    ))



    makeMe()
    w.cJ(spring(b11,p))

    w.cJ(spring(b33,p))




}

//PULLEY JOINTS
pJt =function(){

    bPJD =BXJ.b2PulleyJointDef
    bPJ =BXJ.b2PulleyJoint

    var j=sJt(new bPJD())
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.lA=function(a){j.lengthA=a;return j}
    j.lB=function(a){j.lengthB=a;return j}
    j.mLA=function(a){j.maxLengthA=a;return j}
    j.mLB=function(a){j.maxLengthB=a;return j}



    return j}
sPJ= function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    b11=w.a(bx1= dBD(x,y),fix())
    b22=w.a(bx2= dBD(x,y),fix())

    p=pJt().i(b11,b22,bV(15,1),bV(15,2),b11.c(),b22.c(),1)
        .lA(8).lB(4).mLA(10).mLB(5)

    w.cJ(p)}
mPJ=function(){x.$$(sPJ)}

PULLEY=function(){makeWorld()

    x=500
    y=200

    b11= bi(300,300,200,10)

    b22= bi(500,300,200,10)

    p=pJt().i(
        b11,
        b22,
        bV(15,1), bV(25,2),
        b11.c(),b22.c(),1)

        .lA(8).lB(4).mLA(10).mLB(5)

    w.cJ(p)

    makeMe()
    makeTim(10)

}


//MOUSE JOINTS
MouseJointDef=mJD=function(a,b){//MouseJDef=b2MJD=

    var j=new b2MouseJointDef()

    j.sT=function(a,b){//=j.tS=    j.tg=j.tgS=j.ts=
        j.target.Set(a,b)
        return j}


    j.cC=   j.clC= j.clCn=  j.cc=function(a){
        j.collideConnected= a ? true:false
        return j}



    j.mF=j.mf=function(a){
        j.maxForce=a;return j}

    j.A=function(a){
        j.bodyA=a;
        return j}

    j.B=function(b){
        j.bodyB=b;
        return j}

    if(a){j.A(a)}
    if(b){j.B(b)}

    return j}


