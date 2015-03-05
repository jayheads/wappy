
DENROT=function(){
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
    //something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
    //however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...

    w=b2d.mW({grav:0})

    r= w.rect(300,300,400,20,'yellow').rest(.5)
    r2= w.rect(300,300,400,10,'white')
    r3= w.rect(300,300,400,10,'white')

    r4= w.rect(300,300,400,10,'white')

    r5= w.rect(300,300,400,10,'white')


    flipStage()
    setInterval(function(){


      flipDen(r); flipDen(r2);flipDen(r3);flipStage()

    }, 6000)




}

flipDen=function(r){
    var d = r.den()
    if(d==0){r.den(1)} else {r.den(0)}}

flipStage=function(){
   if(w.s.X()==0  && w.s.Y()==0){w.s.XY(10000,10000)}
    else {w.s.XY(0,0)}}




b2d.colorBalls=function(){

    r = w.circ(300, 300, 12, 'red').rest(1).den(1).fric(.1)
    b = w.circ(400, 300, 12, 'blue').rest(1).den(1).fric(.1)
    y = w.circ(500, 300, 12, 'yellow').rest(1).den(1).fric(.1)
    g = w.circ(600, 300, 12, 'green').rest(1).den(1).fric(.1)
    p = w.circ(700, 300, 12, 'pink').rest(1).den(1).fric(.1)
    o = w.circ(800, 300, 12, 'orange').rest(1).den(1).fric(.1)

}


j = jd=b2d.Joints.b2JointDef.prototype

jd.A=function(a){this.bodyA=a; return this}
jd.B=function(b){this.bodyB=b; return this}
j.AB=function(a,b){return this.A(a).B(b)}

jd.init = function(){//joint.i=
    this.Initialize.apply(this,arguments)
    return this}


jd.coll = jd.collide = jd.cC = function(a){
    this.collideConnected = a; return this}


//mouse
jd.target = j.sT  =function(a,b){
    if( !O(a) ){ a = b2d.V(a,b) }
    this.SetTarget(a)
    return this}

//distance
jd.freq=  function(a){
    if(U(a)){return this.frequencyHz}
    this.frequencyHz=a;return this
}

jd.len=function(len){
    if(U(len)){return this.length*30}
    this.length=len/30
    return this}



jd.damp = function(a){if(U(a)){return this.dampingRatio}
    this.dampingRatio=a;return this}

//revolute
jd.refAng=j.rA=function(a){j.referenceAngle= tRad(a); return this}
jd.maxTorque=j.mMT=function(a){
    this.maxMotorTorque=a
    return this}
jd.lowAng= j.lA = function(a){this.lowerAngle=tRad(a); return this}
jd.upAng= j.uA = function(a){this.upperAngle=tRad(a); return this}
jd.localA =j.lAA=function(a){ this.localAnchorA = a; return this}
jd.localB =j.lAB=function(a){ this.localAnchorB = a; return this}
jd.rat = j.r=function(a){this.ratio = a; return this}
jd.axis = j.lXA=function(a){ this.localAxisA=a; return this}

//slider
jd.maxForce= j.mMF=function(a){
    this.maxMotorForce = a; return this
}

//slider and revolute
jd.speed=j.mS=function(a){
    this.motorSpeed = a; return this}
jd.motor=j.eM=function(a){
    this.enableMotor = a?true:false; return this}
jd.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }

//LIMITS
jd.lowTrans=j.lT=function(a){ this.lowerTranslation=a;return this}
jd.upTrans=j.uT=function(a){ this.upperTranslation=a;return this}
jd.limits=j.eL=function(a){ this.enableLimit=a?true:false;return this}
Joints={}
Stuff={}





j=   b2d.Joints.b2Joint.prototype
j.init =  function(){

        joint.Initialize.apply(joint, G(arguments))

        return j}
j.init=j.i=function(){
    j.Initialize.apply(j, G(arguments))
    return j}


j.A=function(a){
    if(U(a)){ return this.GetBodyA() }
    else {alert ('j.A cannot set')}}
j.B=function(a){
    if(U(a)){ return this.GetBodyB() }
    else {alert ('j.B cannot set')}}
j.a=function(a){
    if(U(a)){ return this.GetAnchorA().mult() }
    else {alert ('j.A cannot set')}}
j.b=function(a){
    if(U(a)){ return this.GetAnchorB().mult() }
    else {alert ('j.B cannot set')}}
j.freq= function(a){if(U(a)){return this.GetFrequency()}
    this.SetFrequency(a)
    return this}
j.len= function(a){
    if(U(a)){return this.GetLength()*30}
    this.SetLength(a/30)
    return this}
j.damp= function(a){if(U(a)){return this.GetDampingRatio()}
    this.SetDampingRatio(a)
    return this}

// can change collideConnected dynamically?  if not i could replace the joint with a new one dynaically!!!!!
// is it smart enough to know all its properties??? // it should be



j.target = j.sT  =function(a,b){

    if( !O(a) ){ a = bV(a,b) }

    j.SetTarget(a)

    return j}
j.target = j.sT    = function(a,b){
    if(!O(a)){a=V(a,b)}
    j.SetTarget(a)

    return j}

//motor
j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
    j.maxMotorSpeed=a
    return j}

//motor rev

j.mt=j.motor =j.enableMotor = j.eM = function(a){
    j.EnableMotor( a ? true : false )
    return j}

j.speed = j.motorSpeed=j.mS=function(speed){
    if(U(speed)){return this.GetMotorSpeed()}
    this.SetMotorSpeed(speed)
    return this}


j.torque = function(torq){
    if(U(torq)){return this.GetMotorTorque()}
    this.SetMaxMotorTorque(torq)
    return this}

j.maxTorq =j.maxTorque = j.mMT=  j.mT=function(a,b,c){
    this.SetMaxMotorTorque(a,b,c);
    return this}



j.maxForce =j.mMF=j.mF=function(a,b,c){
    this.SetMaxMotorForce(a,b,c); return this}




j.lm= j.limits =j.setLimits = j.sL = function(a,b){

    a = N( a ) ? a : 20

    b = N( b ) ? b : 180

    j.SetLimits( tRad(a), tRad(b) )

    return j}

j.enableLimits= j.enableLimit = j.eL=function(a){
    this.EnableLimit( a?true:false)
    return this}


j.W=function(){
   return this.GetBodyA().GetWorld()
}

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

j.enabMot=function(a){this.EnableMotor(a); return this}


j.mot=function(speed, maxForce){if(speed=='-'){this.EnableMotor(false); return this}
    speed=N(speed)?speed:100
    maxForce = N(maxForce)?maxForce:10000000
    this.enabMot(true).maxForce(maxForce).speed(speed)}

//slider

//j.maxForce= j.mMF=function(a){j.maxMotorForce = a;return j}

    //slider and revolute

j.speed=function(speed){//j.mS
    this.SetMotorSpeed(speed)
    return this}
j.motor=j.eM=function(a){
        j.enableMotor = a?true:false; return j}

j.maxSpeed =j.mMS=function(a){ j.maxMotorSpeed=a; return j }

    //LIMITS

j.lowTrans=j.lT=function(a){ j.lowerTranslation=a;return j}

j.upTrans=j.uT=function(a){ j.upperTranslation=a;return j}

j.limits=j.eL=function(a){
        j.enableLimit=a?true:false;return j}



j.wind=function(){var that=this, wound=false

    cjs.tick(function(){

        if(wound==false){  that.len( that.len() * 0.99 ) }
        else {  that.len( that.len() * 1.01 ) }

        that.W().s.pen('len: '+ that.len())

        if (that.len()<5){wound=true}
        if (that.len()>200){wound=false}


    })
}







JOINTPROTO = function(){b2d.mW()

    jd = new b2d.Joints.b2DistanceJointDef()

    b = w.brick(180,150)
    a = w.ball(150,150)

    j= w.J(  jd.AB(a,b).len(200)    )

}
b2d.dJ = b2d.distJ = b2d.distDef =b2d.distanceDef = DistanceJoint  =  Joints.distance =  dJt =function(o){

    var jd = new b2d.Joints.b2DistanceJointDef()

    //this initialize function for distance, not revolute

    jd.init = function(b1, b2, b1V, b2V){

        if( U(b1V) ){ b1V = b1.worldCenter()}
        if( U(b2V) ){ b2V = b2.worldCenter()}
        this.Initialize(b1, b2, b1V, b2V)
        return this}

    if( O(o) ){ // ever used?
        if(o.init){ j.init.apply(j, o.init)  }
        if(N(o.len) ){ j.len( o.len ) } else { j.len(1) }
        if(N(o.freq) ){ j.freq( o.freq ) } else { j.freq(3) }
        if(N(o.damp) ){  j.dampRat( o.damp) } else { j.dampRat( .1 ) }
        if((o.coll) ){ j.collide( true ) }  else { j.collide( false ) }

        return w.J( jd )
    }
// dont ever set a dJ().len(0)
    return jd }
DISTPOINTS=function(){b2d.mW()

    x = w.rectStat(500, 300, 200, 200)
    b = w.circ(300, 400, 20, 'red')
    j = w.dist(x, b, V(100,100) ).len(50)

    cjs.tick(function(){w.s.dot([j.a(),j.b()])})
    setInterval( function(){ b.I(-10000,0) }, 2000)

    w.dist(x,  w.circ(300, 400, 20, 'blue'),  V(-100,100))
        .len(50)

    w.dist(x,  w.circ(600, 300, 20, 'green'), V(100,-100))
        .len(50)

    o= w.distColl(x,  w.circ(300, 400, 20, 'orange'),  V(-100,-100))
        .len(50)

}
DISTPOINTSMORE=function(){b2d.mW()

    // ok, so the 'points' are relative to the WORLD

    x = w.brick(  550,200,  400,100)
    b2d.colorBalls()


   // here there are no default lengths, they are set to actual distance apart at time of joint creation!!!


    j0 =  w.dist(b, r)     //  previously:  j0 =  w.J(   b2d.dJ().init(b,r)   )



    f = function(){

        w.s.flash()
        j1 = w.dist(x, o)

        xc = x.worldCenter()

        gc = g.worldCenter()

        j = w.dist(x, g, xc, gc)


      cjs.tick(function(){  w.s.dot( j.a()  ); w.s.dot( j.b()  ) })

    }


    // i want to be able to specify how much to offset the anchor point, relative from its own center!!!!




    setTimeout(f, 200)


}

WINDUP=function(){var wound=false
    b2d.level()


    j = w.distColl(
        w.bump(450,40,40),
        w.box(400,200,20,60), 200
    )

    k = w.dist(
        w.bump(450,40,40),
        w.box(400,200,20,60), 200
    )

    w.stat(0, 40,  b2d.poly(400,100).sensor(true).K('sensor') ) //can get triggered many many times?

    w.begin(function(cx){
        if(cx.with('sensor')){
            j.wind();k.wind()

        }})





    // game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
}



RODS=function(){


    // here i bind bodies with fixtures that are alredy out of line

    b2d.level()

  b2d.rod(
      w.ball(300,100,20),
      w.dyn(300,150, b2d.poly(20, 20, 15, 15, 45) ),
      1)


    b2d.rod(
        w.ball(350,100,20),
        w.dyn(350,150, b2d.poly(20, 20, -15, -15, 300) ),
        1)


    b2d.rod(
        w.ball(380,100,20),
        w.dyn(380,150,
            b2d.poly(20, 20, -15, -15, 225) ),
        1)



    b2d.rod(
        w.ball(400,100,20),
        w.dyn(400,150, b2d.poly(20, 20, 15, 15, 225) ),
        1)


    b2d.rod(
        w.ball(100,100,20),
        w.box(110,120,20,20), 30
    )

    b2d.rod(w.bump(200,200,20),
        w.box(200,200,20,20), 2
    )
}


ONLYGRAVITYONMARIO=function(){}
SPRINGS=function(){
    b2d.levelScrollX()
    right.kill()

   //freq is SPEED of oscillation
    //damp is STRENGTH of oscillation



    // so bodies cant rotate if they dont have density???

   j = w.spring(
       w.circStat(200, 100, 10).sens(),

       w.rect(200,250,250,10).K('rect')
   )


        .freq(3).damp(.1)

    w.spring(w.circStat(500, 100, 10).sens(),
        w.rect(500,250,250,10).K('rect'))
        .freq(3).damp( 1)

    w.spring(w.circStat(800, 50, 10).sens(),w.rect(800,200,250,10).K('rect'))
        .freq(2).damp(50)

    w.spring(w.circStat(1200, 125, 10).sens(), w.rect(1200, 275,250,10).K('rect'))
        .freq(10).damp(.5)




    w.begin(function(cx){

        f = cx.with('rect')

        if( f ) {


            b = f.body()

            j = b.joint()

            w.s.pen($l('freq: '+ j.freq() + ', dampening: '+ j.damp()))
        }
    })
}


SPRINGS3=function(){b2d.levelScroll()

    softPlat=function(x,y) {

        x=N(x)?x:300
        y=N(y)?y:60

        j = w.spring(
            w.bump(x,y, 4 ).sens(true),
            w.rect(x,y, 100, 30).den(1).fixedRot(true).rest(0)
        ).damp(1)
    }


    softPlat(300,100)
    softPlat(500,80)
    softPlat(700,40)
    softPlat(900,120)

}




SPRINGINSPACE=function(){b2d.mW({grav:0})
   var spring=function(bx,by){ var x, b,j

        bx = N(bx)?bx: 480
        by = N(by)?by: 300

        j = w.dist(
            x = w.brick(500, 300, 40,200),

            b = w.bump(bx,by))

        w.s.dot(500,300)
        w.s.dot(bx, by)
        w.s.dot('red',
                500 - ((500-bx)/2),
                300 - ((300-by)/2))

        $.dblclick(function(){ b.dyn() })
        return j}
    //try with and without grav

    ball = w.ball(200,200,50) // notice it bounces off wall, but NOT off x (neither have rest by default)
    rect = w.brick(200,250,250,10)


    j = spring(480, 300)




    j.freq(2).damp(1)//.len(20)

    // ok so freq is how much strngth u need to pull it??
    // as freq gets low.. u can pull it farther away
    // its the strength of the spring


}
BOUNCESPRING=function(){
    b2d.levelScrollX()

//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
    //ok.. now keep going down..
    // eventually it is too loose to fight against gravity
    // hahaha then its just flat and usesless
    // ok all this assumed a default damp of 0.
    // now set the freq to a good oscillation (3 or 4)
    // then play with the damp
    // damp is like a tightner on your looseness
    // it makes you less stretchy?
    // just leave damp at 0 for now, and play with freq

    w.tramp(200,0, 6)// not bouncy
    w.tramp(500, 1.2,6)// too bouncy
    w.tramp(800,.75, 6)// mid bouncy, mid freq
    w.tramp(1100,.75, 2)//low freq
    w.tramp(1400,.75, 12)//high freq

    p.XY(285,0)

   setInterval(function(){p.I(0,-150)}, 1000)//game:: he autojumps.  u jump to give him a double jump!
   setTimeout(function(){w.s.flash(); w.addHundBalls()},30000)
}
SPRINGS2=function(){

    z()

    b2d.mW()


   j1 = w.J(

       jd = b2d.distDef().init(

           w.circ(30,200, 20, 'red'), w.box()

       ).len(200).freq(5).damp(.1)

    )


    cjs.tick( function(){
        if (j1.len()>1){
            j1.len( j1.len()-1)
        }
    })


    j2 = w.J(

          b2d.spring(

              w.circ(100,300,30,'white'), w.box()

          ).len(20).freq(5).damp(.1).coll(false)

    )

    j3 = w.J(

        b2d.spring(
            w.circ(130,250,30,'blue'),
            w.brick()
        ).len(120).freq(5).damp(0).coll(true)

    )

}
BRIDGE=function(){
    b2d.levelScrollX();
    p.XY(-100,0)
    w.bridge(100, 10)
    setTimeout(function(){w.s.flash();p.XY(500,0)},10000)}
DEMO_COLLIDE=function(){b2d.mW()


    w.dist(w.ball(200,200,50), w.ball(300,200,40))
        .len(50).freq(3).damp(.1)
    w.dist(w.box(200,200,50), w.box(300,200,40))
        .len( 50 ).freq( 3 ).damp(.1)
    w.distColl( w.ball(200,200,50), w.ball(300,200,60))
        .len(50).freq(3).damp(.1)
    j = w.distColl(w.rect(200,200,50,50),w.rect(300,200,60))
        .len(50).freq(3).damp(.1)

}












//
//
//
RAGD = function(){b2d.mW()

    // world.Spring =
    w.J(

        b2d.spring(
            body1 = w.ball(100,100,30),
            w.ball(100,200,40)
        )
    )



    //world.Rod =
    w.J(

        b2d.rod(
            body2 = w.box(100, 400, 30),
            w.box(100, 500, 40)   )
    )

    player = w.addMe()

    w.J(

        b2d.spring(
            body1, player)
    )


    w.J(
        b2d.spring( body2, player))

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

    b11 = w.A( bx1 = b2d.dynamicDef(x,y), fix() )
    b22 = w.A( bx2 = b2d.dynamicDef(x,y), fix() )


    var pulley = PulleyJoint()

        .init(

        b11,

        b22,

        b2d.V(15,1),

        b2d.V(15,2),

        b11.worldCenter(),

        b22.worldCenter(),

        1
    )

        .lenA(8)
        .lenB(4)
        .maxLenA(10)
        .maxLenB(5)

    w.J(pulley)

}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}
PULLEY=function(){b2d.mW()

    body1= bi(300,300,200,10)
    body2= bi(500,300,200,10)

    var pulley = PulleyJoint().init(
        body1,  body2,
        b2d.V(20, 1), b2d.V(25, 2),
        body1.worldCenter(),
        body2.worldCenter(),

        1 ).lenA( 8 ).lenB( 4 ).maxLenA( 10 ).maxLenB( 5 )

   w.J( pulley )

    //makeMe()
    //makeTim(10)
    //makeCar()

}
//MOUSE JOINTS
b2d.mouseDef = MouseJointDef=mJD=function(a,b){//MouseJDef=b2MJD=

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


