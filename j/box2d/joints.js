sJt=function(j){

    j.tg= j.sT= j.sTg= j.st=function(a,b){

        if(!O(a)){a=bV(a,b)}

        j.SetTarget(a)


        return j}


    j.i=function(){var g=G(arguments)

        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}

    j.mMS=function(a){
       j.maxMotorSpeed=a
        return j
    }


    j.mMT=function(a){
        j.maxMotorTorque=a
        return j
    }

    j.eMt=function(a){
        bwJ.enableMotor=a?true:false
        return j
    }



    return j}








fiveJoints=function(){mDJ();mRJ();mPrJ();mPJ();mWJ()}

fivePrisms=function(){mPrJ();mPrJ();mPrJ();mPrJ();mPrJ()}


bJ =BXJ.b2Joint
bJD  =BXJ.b2JointDef


bDJ=BXJ.b2DistanceJoint




mJD  =MouseJDef=b2MJD=function(a,b){

    var j=new b2MouseJointDef()

    j.tgS=j.tS=j.ts=function(a,b){

        j.target.Set(a,b)

        return j}


    j.clC= j.clCn=  j.cC=j.cc=function(a){
        j.collideConnected=a;return j}

    j.mF=j.mf=function(a){
        j.maxForce=a;return j}

    j.A=function(a){j.bodyA=a;return j}
    j.B=function(b){j.bodyB=b;return j}

    if(a){j.A(a)}
    if(b){j.B(b)}




    return j}















RevoluteJDef =rJD=function(){
    var r=new b2RevoluteJointDef()

    r.i=function(){var g=G(arguments)
        _a(r.Initialize,g)
        return r}

    return r}




bDJD=BXJ.b2DistanceJointDef
dJt=function(){
    var j=new bDJD()
    j.i=function(){var g=G(arguments)

        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}


bGJ=BXJ.b2GearJoint
bGJD=BXJ.b2GearJointDef
gJt=function(){
    var j=new bGJD()
    j.i=function(){var g=G(arguments)

        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}



bPrJD=BXJ.b2PrismaticJointDef
bPJ=BXJ.b2PrismaticJoint
prJt=function(){
    var j=new bPrJD()
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}



rJt=function(){
    var j=new BXJ.b2RevoluteJointDef()

    return sJt(j)}





bPJD =BXJ.b2PulleyJointDef
bPJ =BXJ.b2PulleyJoint
pJt=function(){
    var j=new bPJD()
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}



wJt=function(){
    var j=new BXJ.b2WeldJointDef()
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}
    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}

mDJ=function(){

    x.$$(function(x,y){

        b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())

        b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())

        w.cj(

            dJt().i(b11,b22,b11.c(),b22.c())
                .l(1).f(3).d(.1)

        )})

}



mRJ=function(){x.$$(function(x,y){

    b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
    b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
    w.cj(

        rJt().i(
            b11,b22,b11.c(),b22.c()
        ).l(1).f(3).d(.1)

    )})}






mPrJ=function(){
    x.$$(function(x,y){

        p=prJt()
        b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
        b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
        p.i(b11,b22,b11.c(), bV(1,0)  )//.l(1).f(3).d(.1)
        p.lowerTranslation = -5.0
        p.upperTranslation = 2.5
        p.enableLimit = true;
        p.maxMotorForce = 1
        p.motorSpeed =0
        p.enableMotor = true;
        p.localAnchorA =b11.c()// a point in body A to keep on the axis line
        p.localAnchorB =b22.c()// a point in body B to keep on the axis line
        p.ratio =.8
        w.cj(p)

    })}


mPJ=function(){
    x.$$(function(x,y){
        b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
        b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
        p=pJt().i(b11,b22,bV(15,1),bV(15,2),b11.c(),b22.c(),1)
        p.lengthA=8
        p.lengthB=4
        p.maxLengthA=10
        p.maxLengthB=5
        w.cj(p)})
}





mWJ=function(){x.$$(function(x,y){
    b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
    b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
    j=wJt()
    j.bodyA=b11
    j.bodyB=b22
    j.localAnchorA=bV(-.5,-.5)
    j.localAnchorB=bV(.5,.5)
    j.referenceAngle = 0 * Math.PI / 3
    w.cj(j)})}

