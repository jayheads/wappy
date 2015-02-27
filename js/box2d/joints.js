j=b2.Joints.b2Joint.prototype

j=   b2.Joints.b2JointDef.prototype

j.bA=j.A=function(a){this.bodyA=a; return this}
j.bB=j.B=function(b){this.bodyB=b; return this}
j.bAB=function(a,b){return this.bA(a).bB(b)}

j.init = function(){//joint.i=
    this.Initialize.apply(this,arguments)
    return this}


j.collide = j.cC = function(a){
    j.collideConnected = a? true : false; return j
}


//mouse
j.target = j.sT  =function(a,b){
    if( !O(a) ){ a = b2.V(a,b) }
    this.SetTarget(a)
    return this}

//distance
j.freq=j.f=function(a){this.frequencyHz=a;return this}

j.len=function(len){
    if(U(len)){return this.length*30}
    this.length=len/30
    return this}


j.dampRat= j.d= function(a){j.dampingRatio=a;return this}

//revolute
j.refAng=j.rA=function(a){j.referenceAngle= tRad(a); return this}
j.maxTorque=j.mMT=function(a){
    this.maxMotorTorque=a
    return this}
j.lowAng= j.lA = function(a){this.lowerAngle=tRad(a); return this}
j.upAng= j.uA = function(a){this.upperAngle=tRad(a); return this}
j.localA =j.lAA=function(a){ this.localAnchorA = a; return this}
j.localB =j.lAB=function(a){ this.localAnchorB = a; return this}
j.rat = j.r=function(a){this.ratio = a; return this}
j.axis = j.lXA=function(a){ this.localAxisA=a; return this}

//slider
j.maxForce= j.mMF=function(a){
    this.maxMotorForce = a; return this
}

//slider and revolute
j.speed=j.mS=function(a){
    this.motorSpeed = a; return this}
j.motor=j.eM=function(a){
    this.enableMotor = a?true:false; return this}
j.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }

//LIMITS
j.lowTrans=j.lT=function(a){ this.lowerTranslation=a;return this}
j.upTrans=j.uT=function(a){ this.upperTranslation=a;return this}
j.limits=j.eL=function(a){ this.enableLimit=a?true:false;return this}

j.init=j.i=function(){
    this.Initialize.apply(this,G(arguments))
    return this}



SuperJointDef =sJD=function(joint){

    var j=joint

    joint.init = joint.i=function(){

        joint.Initialize.apply(joint, G(arguments))

        return j}

    joint.A=function(bodyA){ joint.bodyA = bodyA; return j }
    joint.B=function(bodyB){ joint.bodyB = bodyB; return j }
    joint.collide = joint.cC=function(a){ j.collideConnected = a? true : false; return j }

    //mouse
    j.target = j.sT  =function(a,b){

        if( !O(a) ){ a = bV(a,b) }

        j.SetTarget(a)

        return j}

    //distance
    j.freq=j.f=function(a){j.frequencyHz=a;return j}
    j.len=j.l=function(a){
        j.length=a/30
        return j
    }
    j.dampRat=j.d=function(a){j.dampingRatio=a;return j}

    //revolute
    j.refAng=j.rA=function(a){j.referenceAngle= tRad(a); return j}
    j.maxTorque=j.mMT=function(a){
        j.maxMotorTorque=a
        return j}
    j.lowAng= j.lA = function(a){j.lowerAngle=tRad(a);return j}
    j.upAng= j.uA = function(a){j.upperAngle=tRad(a);return j}
    j.localA =j.lAA=function(a){ j.localAnchorA = a; return j }
    j.localB =j.lAB=function(a){ j.localAnchorB = a; return j }
    j.rat = j.r=function(a){j.ratio = a; return j }

    j.axis = j.lXA=function(a){ j.localAxisA=a; return j }

    //slider
    j.maxForce= j.mMF=function(a){
        j.maxMotorForce = a;return j
    }

    //slider and revolute
    j.speed=j.mS=function(a){
        j.motorSpeed = a; return j}
    j.motor=j.eM=function(a){
        j.enableMotor = a?true:false; return j}
    j.maxSpeed =j.mMS=function(a){ j.maxMotorSpeed=a; return j }

    //LIMITS
    j.lowTrans=j.lT=function(a){ j.lowerTranslation=a;return j}
    j.upTrans=j.uT=function(a){ j.upperTranslation=a;return j}
    j.limits=j.eL=function(a){
        j.enableLimit=a?true:false;return j}


    j.init=j.i=function(){
        j.Initialize.apply(j, G(arguments))
        return j}
    return j
}

Joints={}
Stuff={}

JOINTPROTO= function(){b2.mW()

    a =  w.ba(150,150)
    b = w.bi(180, 150)

    jd = new b2.Joints.b2DistanceJointDef()

    jd.bAB(a,b).len(200) //jd.bodyA=a; jd.bodyB=b


    f=function(){
        j= w.CreateJoint(jd)
    }


 f()
}





//DISTANCE JOINTS
//makes a distance joint def
b2.distDef =b2.distanceDef = DistanceJoint  =  Joints.distance =  dJt =function(o){

    var j= SuperJointDef( new b2.Joints.b2DistanceJointDef() )

    //this initialize function for distance, not revolute
    j.init = j.i=function(a,b,c,d){

        if( U(c) ){ c = a.worldCenter()}

        if( U(d) ){ d = b.worldCenter()}

        j.Initialize(a,b,c,d)

        return j}

    //set length, freq, damp to a default
    //j.l(1).f(3).d(.1)

    if( O(o) ){

        if(o.i){ j.init.apply(j, o.i)  }

        if(N(o.l) ){ j.len( o.l ) } else { j.len(1) }

        if(N(o.f) ){ j.freq( o.f ) } else { j.freq(3) }

        if(N(o.d ) ){  j.dampRat( o.d ) } else { j.dampRat( .1 ) }

        if((o.c) ){ j.collide( 1 ) }  else { j.collide( 0 ) }

        return w.joint( j )

    }

    return j}




b2.rod = Joints.rod = Rod = rod =function(a, b){
    return b2.distanceDef().init(a,b) }
b2.spring = Joints.spring = Spring = spring =function(a,b){

    return b2.distanceDef().init( a, b ).len(1).freq(3).dampRat(.1)

}

RandomDistanceJoint = function(x, y){//sDJ=
    w.joint(
        b2.spring(
            world.A( b2.dynamicBodyDef(x,y), fix() ),
            world.A( b2.dynamicBodyDef(x,y), fix() )))}


RandomDistanceJoint.$$=function(){ $.dblclick( RandomDistanceJoint ) }


Stuff.Bridge = Stuff.bridge = bridge=function(x,y){

    x = N( x ) ? x : 400
    y = N( y ) ? y : 300

    var  b1 = baa(x, y),

        b2 = bi(), b3 = bi(),
        b4 = bi(), b5 = bi(),
        b6 = bi(), b7 = bi(),
        b8 = bi(), b9 = bi(),

        b10 = baa(x+300, y)

    w.cJ(
        b2.distDef().init(b1, b2).len(10).freq(5).d(.01)  )

    w.cJ(
        b2.distDef().i(b2, b3).l(10).f(5).d(2))

    w.cJ(
        b2.distDef().i(b3, b4 ).l(10).f(5).d(.1))

    w.cJ(
        b2.distDef().i(b4, b5 ).l(10).f(5).d(2))

    w.cJ(    b2.distDef().i(b5, b6 ).l(10).f(5).d(2))

    w.cJ(   b2.distDef().i(b6, b7 ).l(10).f(5).d(2) )

    w.cJ(
        b2.distDef().i( b7, b8 ).l(10).f(5).d(2))

    w.cJ(
        b2.distDef().i( b8, b9 ).l(10).f(5).d(2))

    w.cJ(
        b2.distDef().i( b9, b10 ).l(10).f(5).d(2))

}

CHANGEDISTJOINT=function(){

    z()

    b2.mW()


   j1 = w.joint(

       j0= b2.distDef().init( ba(), bi() ).len(200).freq(5).dampRat(.1)

    )


    setInterval( function(){ j1.len2( j1.len2()-1) }   ,100 )


    j2 = w.joint(

          Spring( ba(), bi() ).len(20).freq(5).dampRat(.1).collide(0)

    )//.collideConnected=false

    j3 = w.joint(

        b2.spring( ba(), bi() ).len(20).freq(5).dampRat(.1).collide(1)

    )//.collideConnected=true

}

BRIDGE=function(){b2.makeWorld()
    b2.bridge(100,200)
    b2.bridge(500,200)}




DEMO_DIST=function(){

    w = b2.mW()


   j= w.cJ(

        b2.distDef().i(ba(), ba()).l(100).f(1).d(.01)

    )

   // w.cJ( b2.distDef().i(ba(),ba()).l(100).f(1).d(2) )
   // w.cJ( b2.distDef().i(bi(),bi()).l(100).f(5).d(.1) )
   // w.cJ( b2.distDef().i(bi(),bi()).l(100).f(5).d(2) )

    //  w.cJ( b2.distDef().i(ba(),ba()).l(4).f(3).d(.1) )
    //  w.cJ( b2.distDef().i(ba(),ba()).l(8).f(3).d(.1) )
    //  w.cJ( b2.distDef().i(ba(),ba()).l(16).f(3).d(.1) )
    //  w.cJ( b2.distDef().i(ba(),ba()).l(32).f(1).d(.1) )
    //  w.cJ( b2.distDef().i(ba(),ba()).l(200).f(1).d(.8) )

    cup2()

}


DEMO_COLLIDE=function(){mW()

    w.joint(
        b2.distDef().init(  ba( 200, 200, 50 ), ba( 300, 200, 40 ) )
            .len( 50 ) .freq( 3 ) .dampRat( .1 ))
    w.joint(b2.distDef().init(
        ba(200,200,50), ba(300,200,60))
        .len(50).freq(3).dampRat(.1).collide(1))
    w.joint(
        b2.distDef().init(
            bi(200,200,50), bi(300,200,40))
            .len( 50 ).freq( 3 ).dampRat( .1 ))
    w.joint(b2.distDef().init(
        bi(200,200,50), bi(300,200,60))
        .len(50).freq(3).dampRat(.1).collide(1))

}

RAGD = function(){


    b2.mW()

    //world.Spring =
    w.joint(
        b2.spring( body1 = w.ba(100,100,30), w.ba(100,200,40)))


    //world.Rod =
    w.joint(
        b2.rod( body2 = w.bi(100, 400, 30), w.bi(100, 500, 40)   ))

    player = w.addMe()
    w.joint(b2.spring(body1, player))
    w.joint(b2.spring( body2, player))




}




PulleyJoint =pJt =function(){

    bPJD =BXJ.b2PulleyJointDef
    bPJ =BXJ.b2PulleyJoint

    var j = SuperJoint( new BXJ.b2PulleyJointDef() )


    j.init= j.i=function(){
         j.Initialize.apply(j,  G(arguments))
        return j}

    j.lenA = j.lA=function(a){j.lengthA=a;return j}
    j.lenB = j.lB=function(a){j.lengthB=a;return j}

    j.maxLenA = j.mLA=function(a){j.maxLengthA=a;return j}
    j.maxLenB = j.mLB=function(a){j.maxLengthB=a;return j}

    return j}
SuperPulleyJoint = sPJ= function(x,y){


    x=N(x)?x:100
    y=N(y)?y:x

    b11 = w.A( bx1 = b2.dynamicDef(x,y), fix() )
    b22 = w.A( bx2 = b2.dynamicDef(x,y), fix() )


    var pulley = PulleyJoint()

        .init(

        b11,

        b22,

        b2.V(15,1),

        b2.V(15,2),

        b11.worldCenter(),

        b22.worldCenter(),

        1
    )

        .lenA(8)
        .lenB(4)
        .maxLenA(10)
        .maxLenB(5)

    w.joint(pulley)

}


//SuperPulleyJoint.$$=function(){x.$$(sPJ)}


PULLEY=function(){b2.mW()

    body1= bi(300,300,200,10)
    body2= bi(500,300,200,10)

    var pulley = PulleyJoint().init(
        body1,  body2,
        b2.V(20, 1), b2.V(25, 2),
        body1.worldCenter(),
        body2.worldCenter(),

        1 ).lenA( 8 ).lenB( 4 ).maxLenA( 10 ).maxLenB( 5 )

   w.joint( pulley )

    //makeMe()
    //makeTim(10)
    //makeCar()

}





//MOUSE JOINTS
b2.mouseDef = MouseJointDef=mJD=function(a,b){//MouseJDef=b2MJD=

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
        j.bodyA=a
        return j}

    j.B=function(b){

        j.bodyB=b

        return j }

    if(a){ j.A(a) }
    if(b){ j.B(b) }

    return j}


