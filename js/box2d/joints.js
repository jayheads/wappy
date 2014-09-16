SuperJointDef =sJD=function(joint){var j=joint


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

    j.limits=j.eL=function(a){ j.enableLimit=a?true:false;return j}

    j.init=j.i=function(){
        j.Initialize.apply(j,G(arguments))
        return j}

    return j}

SuperJoint = sJt=function(j){


    //shared
    j.init= j.i  = j.i1=function(){


       j.Initialize.apply(j,  G(arguments))

        return j}


    j.collide = j.cC=function(a){
        j.collideConnected=a?true:false; return j
    }

    //pops
    j.target = j.sT    = function(a,b){
        if(!O(a)){a=bV(a,b)}
        j.SetTarget(a)

        return j}

    j.freq =j.f  =function(a){j.frequencyHz=a;return j}

    j.len = j.l  =function(a){
        j.length=a/30
        return j}


    j.len2 =function(len){

        if( U(len) ){ return j.GetLength() * 30 }

        j.SetLength( len/30 )

        return j

    }


    j.dampRat =j.d  =function(a){j.dampingRatio=a;return j}


    //motor
    j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
        j.maxMotorSpeed=a
        return j}

    //motor rev

    j.speed = j.motorSpeed=j.mS=function(a){
        j.SetMotorSpeed(a)
        return j}

    j.mt=j.motor =j.enableMotor = j.eM = function(a){
        j.EnableMotor( a ? true : false )
        return j}



    j.maxTorque = j.mMT=  j.mT=function(a,b,c){
        j.SetMaxMotorTorque(a,b,c); return j}

    j.maxForce = j.mMF=  j.mF=function(a,b,c){
        j.SetMaxMotorForce(a,b,c); return j}

    j.lm= j.limits =j.setLimits = j.sL = function(a,b){

        a = N( a ) ? a : 20

        b = N( b ) ? b : 180

        j.SetLimits( tRad(a), tRad(b) )

        return j}


    j.enableLimits= j.enableLimit = j.eL=function(a){
        j.EnableLimit( a?true:false)
        return j}


    return j}




Joints={}

Stuff=Complex={}

//DISTANCE JOINTS
//makes a distance joint def
Joints.distance = DistanceJoint = dJt =function(o){

    var j=SuperJoint( new BXJ.b2DistanceJointDef() )

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

        return world.createJoint( j )

    }

    return j}

Joints.rod = Rod = rod =function(a, b){ return DistanceJoint().init(a,b) }

Joints.spring = Spring = spring =function(a,b){

    return DistanceJoint().init( a, b ).len(1).freq(3).dampRat(.1)

}











RandomDistanceJoint = sDJ=function(x, y){

    world.createJoint(

        spring(

        world.add( DynamicBodyDef(x,y), fix() ),

        world.add( DynamicBodyDef(x,y), fix() )

    ))
}





RandomDistanceJoint.$$=function(){ x.$$(sDJ) }


Stuff.Bridge = Stuff.bridge = bridge=function(x,y){

    x = N( x ) ? x : 400
    y = N( y ) ? y : 300

    var  b1 = baa(x, y),

        b2 = bi(), b3 = bi(),
        b4 = bi(), b5 = bi(),
        b6 = bi(), b7 = bi(),
        b8 = bi(), b9 = bi(),

        b10 = baa(x+300, y)

    w.cJ(   DistanceJoint().init(b1, b2).len(10).freq(5).d(.01)  )

    w.cJ(  DistanceJoint().i(b2, b3).l(10).f(5).d(2)
    )

    w.cJ(    DistanceJoint().i(b3, b4 ).l(10).f(5).d(.1))

    w.cJ(   DistanceJoint().i(b4, b5 ).l(10).f(5).d(2))

    w.cJ(    DistanceJoint().i(b5, b6 ).l(10).f(5).d(2))

    w.cJ(   DistanceJoint().i(b6, b7 ).l(10).f(5).d(2) )

    w.cJ(
        DistanceJoint().i( b7, b8 ).l(10).f(5).d(2))

    w.cJ(
        DistanceJoint().i( b8, b9 ).l(10).f(5).d(2))

    w.cJ(
        DistanceJoint().i( b9, b10 ).l(10).f(5).d(2))

}


CHANGEDISTJOINT=function(){

    z()

    makeWorld()


   j1 = world.createJoint(

       j0= DistanceJoint().init( ba(), bi() ).len(200).freq(5).dampRat(.1)

    )


    setInterval( function(){ j1.len2( j1.len2()-1) }   ,100 )


    j2 = world.createJoint(

          Spring( ba(), bi() ).len(20).freq(5).dampRat(.1).collide(0)

    )//.collideConnected=false

    j3 = world.createJoint(

        Spring( ba(), bi() ).len(20).freq(5).dampRat(.1).collide(1)

    )//.collideConnected=true

}














BRIDGE=function(){makeWorld()
    bridge(100,200)
    bridge(500,200)}




DEMO_DIST=function(){makeWorld()


    w.cJ( DistanceJoint().i(ba(),ba()).l(100).f(1).d(.01) )
    w.cJ( DistanceJoint().i(ba(),ba()).l(100).f(1).d(2) )


    w.cJ( DistanceJoint().i(bi(),bi()).l(100).f(5).d(.1) )
    w.cJ( DistanceJoint().i(bi(),bi()).l(100).f(5).d(2) )




    //  w.cJ( DistanceJoint().i(ba(),ba()).l(4).f(3).d(.1) )
    //  w.cJ( DistanceJoint().i(ba(),ba()).l(8).f(3).d(.1) )
    //  w.cJ( DistanceJoint().i(ba(),ba()).l(16).f(3).d(.1) )
    //  w.cJ( DistanceJoint().i(ba(),ba()).l(32).f(1).d(.1) )
    //  w.cJ( DistanceJoint().i(ba(),ba()).l(200).f(1).d(.8) )


    cup2()



}


DEMO_COLLIDE=function(){

    makeWorld()


    world.createJoint(

        DistanceJoint().init(


            ba( 200, 200, 50 ),

            ba( 300, 200, 40 )



        )

            .len( 50 ) .freq( 3 ) .dampRat( .1 )

    )








    world.createJoint(DistanceJoint().init(

        ba(200,200,50),

        ba(300,200,60)

    )
        .len(50).freq(3).dampRat(.1).collide(1))




    world.createJoint(

        DistanceJoint().init(

            bi(200,200,50),

            bi(300,200,40)

        )

        .len( 50 ).freq( 3 ).dampRat( .1 )

    )






    world.createJoint(DistanceJoint().init(
        bi(200,200,50),
        bi(300,200,60)
    )
        .len (50).freq(3).dampRat(.1).collide(1))

}

RAGD = function(){


    makeWorld()

    //world.Spring =
    world.createJoint(

        Spring(

            b11=ba(100,100,30),    b22=ba(100,200,40)
        )
    )


    //world.Rod =
    world.createJoint(

        Rod(

            b33=bi(100, 400, 30),
            b44=bi(100, 500, 40)

        )

    )



    player = makeMe()

    world.createJoint(
        Spring( b11, player )
    )

    world.createJoint(
        Spring( b33, player)
    )




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

    b11 = world.addBody( bx1 = DynamicBodyDef(x,y), fix() )

    b22 = world.addBody( bx2 = DynamicBodyDef(x,y), fix() )



    var pulley = PulleyJoint()

        .init(

        b11,

        b22,

        bV(15,1),

        bV(15,2),

        b11.worldCenter(),

        b22.worldCenter(),

        1
    )

        .lenA(8)
        .lenB(4)
        .maxLenA(10)
        .maxLenB(5)

    world.createJoint(pulley)

}

SuperPulleyJoint.$$=function(){x.$$(sPJ)}


PULLEY=function(){
    makeWorld()

    x=500
    y=200

    b11= bi(300,300,200,10)

    b22= bi(500,300,200,10)


    var pulley = PulleyJoint().init(

        b11,  b22,  bV(15,1), bV(25,2),   b11.worldCenter(),  b22.worldCenter(), 1
    )

        .lenA(8).lenB(4).maxLenA( 10 ).maxLenB( 5 )

   world.createJoint( pulley )

    makeMe()
    makeTim(10)
    makeCar()

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
        j.bodyA=a
        return j}

    j.B=function(b){

        j.bodyB=b

        return j }

    if(a){ j.A(a) }
    if(b){ j.B(b) }

    return j}


