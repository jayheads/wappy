w =   b2d.World.prototype

pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype

pJD.aV= function(){var pJD=this, g=G(arguments)
    pJD.localAnchorA =  V(g[0],g[1]).div()
    return pJD}

pJD.bV= function(){var pJD=this, g=G(arguments)
    pJD.localAnchorB =  V(g[0],g[1]).div()
    return pJD}

pJD.ax = pJD.axis= jd.lAA=function(){var pJD=this, g=G(arguments),
    v = V(g[0],g[1])
    pJD.localAxisA.Set(v.x, v.y)
    pJD.localAxisA.Normalize()
    return pJD}
pJD.rA= pJD.ang=function(a){var pJD=this
    if(N(a)){pJD.referenceAngle=Math.toRadians(a)}
    return pJD}



pJ = b2d.Joints.b2PrismaticJoint.prototype


pJ.lm= pJ.limits=function(l,u){
    var pJ=this,g=G(arguments),
        v = V(g[0], g[1]).div(),
        l= v.x,
        u= v.y
    pJ.SetLimits(l,u) // ? pJ.SetLimits(l/30, (u+1)/30) ?
    if(g.N){pJ.EnableLimit(true) }
    return pJ
}



pJ.val = function(val){
    if(U(val)){
        return parseInt(
                this.GetJointTranslation()*30)
    }

}

/*

 Prismatic Joint
 A prismatic joint allows for relative translation of two bodies along a specified axis. A prismatic joint prevents relative rotation. Therefore, a prismatic joint has a single degree of freedom.

 prismaticJoint.gif

 The prismatic joint definition is similar to the revolute joint description; just substitute translation for angle and force for torque. Using this analogy provides an example prismatic joint definition with a joint limit and a friction motor:


 worldAxis  = V(1,0)

 jointDef  = new b2PrismaticJointDef()

 jointDef.Initialize(b1, b2, b1.wC(), worldAxis)

 jointDef.lowerTranslation = -5
 jointDef.upperTranslation = 2.5
 jointDef.enableLimit      = true


 jointDef.maxMotorForce    = 1
 jointDef.motorSpeed       = 0
 jointDef.enableMotor      = true

 The revolute joint has an implicit axis coming out of the screen.
 The prismatic joint needs an explicit axis parallel to the screen.
 This axis is fixed in the two bodies and follows their motion.
 Like the rJ, the pJ translation is zero when the joint is created using Initialize().
 So be sure zero is between your lower and upper translation limits.


 localAnchorA - a point in body A to keep on the axis line
 localAnchorB - a point in body B to keep on the axis line

 localAxisA - the axis (line) of movement (relative to bodyA)

 referenceAngle - the angle to be enforced between the bodies


enableLimit - whether the joint limits will be active
lowerTranslation - position of the lower limit
upperTranslation - position of the upper limit


enableMotor - whether the joint motor will be active
motorSpeed - the target speed of the joint motor
maxMotorForce - the maximum allowable force the motor can use

*/

w.pris=function(){w=this,
    jd = new b2d.PrismaticJointDef,
    g=G(arguments),o

    if(O(g[0]) && !b2d.isBody(g[0])){
        o=g[0]
    }
    else {
        o={a:g[0], b:g[1], ax:g[2]}
    }


    o.aV = o.aV || [0, 0]
    o.bV = o.bV || [0, 0]
    o.ax = o.ax || [0, 1]
    o.rA = o.rA ||  0
    jd.bodyA=o.a
    jd.bodyB=o.b
    jd.aV(o.aV); jd.bV(o.bV)
    jd.ax(o.ax)
    jd.rA(o.rA)
    j = w.J(jd)
    if(o.lm){ j.lm(o.lm) }

return j}


PRIS=function(){

    W( [1200, 600, 2400,1200], {}).P(100, w.h-200)

    b=w.D(500, w.h-300,'d',200,40).den(.1).K('ele')
    j = w.pris({
        a : w.S(400, w.h-200,'s',[[40,40,'-']]).den(1).fric(1),
        b : b,
        lm: [-100, 100]
    })
    p.den(.1).fric(1).track()

    speed=10
    j.mot(speed)
    fun= function(){$l('hit')
        j.mot(speed *= -1)}
    fn= _.throttle(fun, 200, {trailing:false})
    fn2= _.debounce(fun, 200, true)
    w.beg(function(cx){
        cx.with('ele',  fn2)
    })


}



DEBOUNCE=function(){W()

    s=0
    u=0
    d=0
    l=0
    r=0


    b= w.S(600, 300, 'b', 100)

    $.space(_.debounce(function(){$l('space ' + s++)}, 1000))

    $.kD('u', _.debounce(function(){$l('up '+u++)}, 1000, true))



}



w.prism11 = function(a,b, x,y, rot){var w=this, jd, j
    jd=new b2d.Joints.b2PrismaticJointDef()

    jd.axis = jd.lAA=function(){var jd=this,g=G(arguments),
        v= O(g[0])? g[0]: V(g[0],g[1])
        jd.localAxisA.Set(v.x,v.y)
        jd.localAxisA.Normalize()
        return jd}

    jd.ang=jd.rA=function(a){var jd=this
        if(N(a)){jd.referenceAngle=Math.toRadians(a)}
        return jd}

    a = A(a) ? a : [a]
    jd.bodyA = a[0]
    jd.localAnchorA =  O(a[1])  ?  a[1].div()  :  V(a[1],a[2],'-')

    b = A(b) ? b : [b]
    jd.bodyB = b[0]

    jd.localAnchorB =  O(b[1])  ?  b[1].div()  :  V(b[1],b[2],'-')
    jd.axis(x,y)
    jd.ang(O(x)? y: rot)

    return w.J(jd)
}

w.prism1 = function(o){var w=this, g=G(arguments),
    jd, j

    jd=new b2d.Joints.b2PrismaticJointDef()
    jd.axis = jd.lAA=function(){var jd=this,g=G(arguments),
        v= O(g[0])? g[0]: V(g[0],g[1])
        jd.localAxisA.Set(v.x,v.y)
        jd.localAxisA.Normalize()
        return jd}
    jd.ang=jd.rA=function(a){var jd=this
        if(N(a)){jd.referenceAngle=Math.toRadians(a)}
        return jd}


/*
    o = O(g[0] && !b2d.isBody(g[0]))? g[0]
        : _.extend( {b1:g[0], b2:g[0]},
        O(g[2])? {axis:g[2], a:g[3]}  : {axis: V(g[2], g[3]), a:g[4]})
    g[0] = A(g[0]) ? g[0] : [g[0]]
    g[1] = A(g[1]) ? g[1] : [g[1]]
    o.A = g[0][0]
    o.aV =  O(g[0][1])  ?  g[0][1].div()  :  V(g[0][1], g[0][2],'-')
    o.B = g[1][0]
    o.bV =  O(g[1][1])  ?  g[1][1].div()  :  V(g[1][1], g[1][2],'-')
    jd.axis = V(g[2], g[3])
    jd.a =  O(g[2])? g[3]: g[4]
        */

    if(A(o.a)){
        o.aV= V(o.a[1],o.a[2])
        o.a=o.a[0]}
    if(A(o.b)){
        o.bV= V(o.b[1], o.b[2])
        o.b = o.b[0]}

    o.aV = o.aV  || o.a.wC().mult()
    o.bV = o.bV  || o.b.wC().mult()



    jd.bodyA=o.a
    jd.localAnchorA= o.aV.div()
    jd.bodyB=o.b
    jd.localAnchorB= o.bV.div()

    //jd.axis(o.ax)

    //jd.ang(o.rA)

    return w.J(jd)
}

w.prism = function (a, b, x, y, rot) {
    var jd = new b2d.PrismaticJointDef,
        j

    if(A(a)){
        jd.bodyA = a[0]
        if (O(a[1])) {jd.localAnchorA = a[1]}
        else if (N(a[1])) {
            jd.localAnchorA = V(a[1],a[2],'-')}}
    else {jd.bodyA = a}
    if (A(b)) {
        jd.bodyB = b[0]
        if (O(b[1])) {jd.localAnchorB = b[1]}
        else if (N(a[1])) {jd.localAnchorB = V(b[1], b[2],'-')}
    }
    else {jd.bodyB = b}


    if (N(x)){jd.ax(x, y).rA(rot)}
    else if(O(x)){jd.ax(x.x, x.y).rA(y)}



    return this.J(jd)
}
PRISM=function(){W(5)
    p= w.player(500,200,'thrust').den(1).fric(1)

    a=w.S(400,300,'s',40,40).den(1).fric(1)
    b= w.D(500, 200,'d',200,40).den(1).K('box')


    j = w.pris({
        a:a ,
        aV:[-30,2],
        b:b,
        ax: V(0,1),
        rA:45
    })



    speed=10
     j.mot(speed)
    w.beg(function(cx){
        cx.with('box', function(){speed *= -1}); j.mot(speed)})

}



w.elev =function(x, yy, H){
    var w=this,
        y=w.h-yy,
        elev,
        speed= 5,
        j,
        wire

    j=w.pris(

        wire=w.S(x,y-H/2, 'w', [[4, H, '-']]),

        elev= w.D(x,y, 'd', 200,40).K('elev'),

        V(0, 1)

    ).lm(-H/2, H/2)

    elev.coll(

        _.throttle(
        function flip(){j.mot(speed*=-1)},   200, {trailing:false})
    )

    elev.coll('player', function(p){p.B().lV(0)})
}



PRISM0=function(){W(5)
    p= w.player(500,200,'thrust').den(1).fric(1)


    j = w.pris({
        a: w.S(400,300,'s',40,40).den(1).fric(1),
        aV:[-30, 2 ],
        b:w.D(500, 200,'d',200,40).den(1).K('box'),
        ax: V(1,-2),
        rA: 45})
    speed=10
    j.mot(speed)
    w.beg(function(cx){
        cx.with('box',
            function(){speed *= -1})
        j.mot(speed)
    })

}




    //jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works


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
PRISMCHANGE=function(){W()


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

    j1= w.pris(
        w.S( 200,500, 's', 40,40).K('ride'),
        w.S( 200,500,'s',40,40).K('cart')

    ).lm(-30, 60).speed(-100).motor(1).maxForce(1000)



    j2 = w.pris(
        w.D( 400,500,'d',40 ).K('ride'),
        w.S(400,500,'s',40,40).K('cart')
    )

    //.limits(-30, 60).speed(-100).maxForce(1000).motor(1)

    w.pris(
        circle,
        w.S(600,500,'s',40, 40).K('cart')
    ).limits(-30, 60).speed(-100).motor(1).maxForce(1000)

    w.beg(function(cx){cx.with('cart',function(){

            w.each(function(b){if(b.is('ride')){b.I(0, -1000)}})

    })})

    w.D( 200, 200,'g', 100 )


}


ELEV=function(){W([1200, 600, 2400,1200],{g:300}).P()
    p.XY(100, 1150).track()
    w.elev(300,100,300)
    w.elev(600,100,500)
    w.elev(900,300,400)
}


ELEVS =function(){ W([1200,600,2400,1200]).P()


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



////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////////////////////////


JTRAN=function(){W({g:300}).P()
    p.XY(100, 550).track()


    j= w.pris(
        w.D(200, 500,'s', 140,240).K('cart'),
        w.D(200, 100,'b', 40, 40).K('ride')


    )
    j.tran=function(){return this.GetJointTranslation()*30}

    function JointGetJointTranslation(){
        var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
            p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
            p2 = this.m_bodyB .GetWorldPoint(this.m_localAnchor2)
        return axis.x*(p2.x-p1.x)  +  axis.y*(p2.y-p1.y)
    }//box2d source


}



b2d.prism = function(b1, b2, lXA, lAA, lAB, rA){//b2d.prismaticJointDef = PrismaticJointDef = prJt=

    var j=new b2d.Joints.b2PrismaticJointDef()
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
w.Prism = function (a, b, c, d, e, f, g, h) {return this.J(b2d.prism(a, b, c, d, e, f, g, h))}
w.elevx=function(x){
    var elev={}
    elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
        .coll(function(){elev.flip()})
        .collWithKind('player', function(p){p.linVel(0)})
    elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)
    elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

    elev.speed = 2
    elev.j.mot(elev.speed)
    elev.flip =  _.throttle(function(){
        this.j.mot(this.speed*=-1)
    }, 200, {trailing:false})
    return elev

}

