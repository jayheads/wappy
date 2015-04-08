/*
localAxisA - the axis (line) of movement (relative to bodyA)
referenceAngle - the angle to be enforced between the bodies


localAnchorA - a point in body A to keep on the axis line
localAnchorB - a point in body B to keep on the axis line


enableLimit - whether the joint limits will be active
lowerTranslation - position of the lower limit
upperTranslation - position of the upper limit

enableMotor - whether the joint motor will be active
motorSpeed - the target speed of the joint motor
maxMotorForce - the maximum allowable force the motor can use
*/
pJ = b2d.Joints.b2PrismaticJoint.prototype
//pj.limits = function(low, up){this.SetLimits(low/30, up/30); this.enableLimit(true); return this }
pJ.lm =  function(lowerLimit, upperLimit){var g=G(arguments),l=g[0],u=g[1]
    this.SetLimits( l/30, (u+1) /30  )
    if(g.N){ this.EnableLimit(true)   }
    return this}
pJ.val = function(val){
    if(U(val)){
        return parseInt(this.GetJointTranslation()*30)
    }

}
pd = b2d.Joints.b2PrismaticJointDef.prototype
//pd.i=function(){this.Initialize.apply(this, G(arguments));return this}



RandomPrismPair = sPrJ=function(x,y){

    x = N(x)?x:100

    y = N(y)?y:x

    var firstBody = w.FixBody( x,y)

    var secondBody = w.FixBody( x,y)

    j = world.Prism(  firstBody, secondBody, b2.V(1,0),  firstBody.worldCenter(),

            secondBody.worldCenter()  ).limits(-100, 100)  //j.maxForce(1).speed(100).motor(1)

    return j

}//makes random shaped prismatic joint
function JointGetJointTranslation(){

    var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
        p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
        p2 = this.m_bodyB .GetWorldPoint(this.m_localAnchor2)
    return axis.x*(p2.x-p1.x)  +  axis.y*(p2.y-p1.y) }//box2d source
w =   b2d.World.prototype
w.elev= w.elevator =function(x){

    var elev={}

    elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
        .coll(function(){elev.flip()})
        .collWithKind('player', function(p){p.linVel(0)})

    elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)

    elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

    elev.speed = 2
    elev.j.mot(elev.speed)
    elev.flip =  _.throttle( function(){
        this.j.mot(this.speed*=-1)}, 200, {trailing:false})

    return elev}



b2d.prism = b2d.prismDef= function(b1, b2, lXA, lAA, lAB, rA){//b2d.prismaticJointDef = PrismaticJointDef = prJt=

    var j=    new b2d.Joints.b2PrismaticJointDef()

    j.mt=function(a,b,c){
        j.mS(a)
        j.mMF(N(b)?b:100)
        if(c!='-'){j.eM(1)}
        return j}

    j.lm=function(lT,uT, enableLimit){
        j.lT(lT).uT(uT)
        if(enableLimit!='-'){ j.eL(true) }
        return j}

    if( D(b1) ){ j.A(b1)}
    if( D(b2) ){ j.B(b2)}

    //local direction A ? the angle of the actual slider joint
    j.lXA(D(lXA)?lXA: V(0,1))


    //local axis A
    j.lAA( D(d)? lAA : b1.worldCenter())
    //local axis B
    j.lAB( D(e)? lAB : b2.worldCenter())


    // something with rotation
    if( D(rA) ){  j.rA(rA)   }

    return j
}
w.Prism = function (a, b, c, d, e, f, g, h) {
    var joint = this.J(b2d.prism(a, b, c, d, e, f, g, h))
    return  joint
}


w.prism = function(a,b,x,y,rot){var w=this, jd, j
    jd=new b2d.Joints.b2PrismaticJointDef()
    jd.rA=function(a){var jd=this
        if(N(a)){jd.referenceAngle=Math.toRadians(a)}
        return jd}
    jd.lAA=function(){var jd=this,g=G(arguments),
        v= O(g[0])? g[0]: V(g[0],g[1])
        jd.localAxisA.Set(v.x,v.y)
        jd.localAxisA.Normalize()
    return jd}

    if(A(a)){jd.bodyA = a[0];
        jd.localAnchorA = (O(a[1])?a[1]:V(_.tN(a[1]),_.tN(a[2]))).div()}
    else {jd.bodyA = a}
    if(A(b)){jd.bodyB = b[0];
        jd.localAnchorB = (O(b[1])?b[1]:V(_.tN(b[1]),_.tN(b[2]))).div()}
    else {jd.bodyB = b}

    jd.lAA(x,y).rA(O(x)?y:rot)
    return w.J(jd)
}





NEWPRISM=function(){W(5)
    p= w.player(500,200,'thrust').den(1).fric(1)


    j = w.prism(
        [ w.S(400,300,'s',40,40).den(1).fric(1),   -30, 2 ],
        w.D(500, 200,'d',200,40).den(1).K('box'),
        V(1,-2),
        45 )

    speed=10
    j.mot(speed)
    w.beg(function(cx){
        cx.with('box',
            function(){speed *= -1})
        j.mot(speed)
    })

}






ELEV =function(){ W([1200,600,2400,1200]).P()


    w.elev(200)
    w.elev(400)
    w.elev(600)


    w.elev(750)
    w.elev(900)
    w.elev(1000)

    w.elev(1100)
    w.elev(1200)
    w.elev(1300)
    w.elev(1400)
    w.elev(1500)
    w.elev(1600)
    w.elev(1700)
    w.elev(1800)
    w.elev(1900)
    w.elev(2000)

    //these fall into the abyss when there is no floor (or ceiling)
    w.elev(2100)
    w.elev(2200)
    w.elev(2300)
    w.elev(2400)
    w.elev(2500)
    w.elev(2600)
    w.elev(2700)
    w.elev(2800)
    w.elev(2900)
    w.elev(2000)


}

PRISM=function(){W()

    cart = w.D(500,200,'d',20,20)
    ride = w.S(540,150,'s',180,90)

    rC = ride.wC()

    jd = w.prism(
        [ride, V(rC.x, rC.y+5) ],
        [cart,  cart.wC()],
        V(1,.3),
        5)

    //jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works

    j = w.J( jd)

}


PRISM2 =CHANGEPRISMLIMANDMOTOR=function(){W()


    cart = w.D(500,200,'d',20,20)

    ride = w.S(540,150,'s',180,90)

    j = w.prism(
        ride,
        cart,
        V(1,.3),
        V(ride.wC().x,   ride.wC().y + 5  ),  cart.wC(),
        5 )

    j.maxForce( 10000 ).speed( -100 ).motor( 1 )

    setTimeout( function(){ j.motor(false)}, 2000 )
    setTimeout( function(){ j.motor(true) }, 5000 )

}


BUMPER=function(){W()

    var circle = w.D( 600,500,'d',40).K('ride').bS('me')

    j1= w.prism(
        w.S( 200,500, 's', 40,40).K('ride'),
        w.S( 200,500,'s',40,40).K('cart')

    )//.limits(-30, 60).speed(-100).motor(1).maxForce(1000)

    j2 = w.prism(
        w.D( 400,500,'d',40 ).K('ride'),
        w.S(400,500,'s',40,40).K('cart')
    )//.limits(-30, 60).speed(-100).maxForce(1000).motor(1)
    w.prism( circle,  w.S(600,500,'s',40, 40).K('cart')).limits(-30, 60).speed(-100).motor(1).maxForce(1000)

    w.beg(function(cx){cx.with('cart',function(){

            w.each(function(b){if(b.is('ride')){b.I(0, -1000)}})

    })})

    w.D( 200, 200,'g', 100 )


}

PRISMLIMITS=function(){W(5)
    x = w.S(400,300,'s',40,40).den(1).fric(1)

    b = w.D(500, 200,'d',200,40).den(1).K('box')

    jd = new b2d.Joints.b2PrismaticJointDef()
    //jd.collideConnected=true
    jd.bodyA = x
    jd.bodyB = b
    jd.referenceAngle=.5

    // jd.localAxisA= V(1,1)
    // jd.upperTranslation=-200
    //  jd.lowerTranslation=200
    // j = w.prism([x,-30,2], b, V(1,-2), 45)
    j =  w.prism(x,b,0.5)
    //  j.EnableLimit(true)

    speed=10
    // j.mot(speed)


    j.U=function(u){var j=this
        if(U(u)){return j.GetUpperLimit()*30}
        j.SetLimits(j.L(),u/30)
        return j}

    j.L=function(l){var j=this
        if(U(l)){return j.GetLowerLimit()*30}
        j.SetLimits(l/30, j.U())
        return j}
    j.UL=function(u,l){return this.U(u).L(l)}
    j.LU=function(l,u){return this.L(l).U(u)}
    j.U(200/30)

    j.L(-100)


    //j.SetLimits(-50,10)


    j.EnableLimit(true)

}
