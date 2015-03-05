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

pj = b2d.Joints.b2PrismaticJoint.prototype
//pj.limits = function(low, up){this.SetLimits(low/30, up/30); this.enableLimit(true); return this }
pd = b2d.Joints.b2PrismaticJointDef.prototype
//pd.i=function(){this.Initialize.apply(this, G(arguments));return this}

NEWPRISM=function(){

    w=b2d.mW({grav:5})

    x = w.brick(400,300,40,40).den(1).fric(1)

    b = w.box(500, 200,200,40).den(1).K('box')

   jd = new b2d.Joints.b2PrismaticJointDef()


    jd.collideConnected=true
    //jd.motorSpeed=100
    //jd.maxMotorForce=1000
    jd.bodyA = x
    jd.bodyB = b
    jd.referenceAngle=.5
   // jd.localAxisA= V(1,1)
    //jd.upperTranslation=20


    j = w.prism([x,-30,2], b, V(1,-2), 45)
    //j =  w.J(jd)
    //j.EnableMotor(true)

    p=w.player('thrust').den(1).fric(1)

    var speed=10

    j.mot(speed)

    w.begin(function(cx){

        if(cx.with('box')){speed *= -1}

        j.mot(speed)
    })

}
MARIOELEVATOR =function(){b2d.levelScrollX()


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

b2d.prism = b2d.prismDef= function(a,b,c,d,e,f){//b2d.prismaticJointDef = PrismaticJointDef = prJt=

    var j=    new b2d.Joints.b2PrismaticJointDef()


    j.mt=function(a,b,c){

        j.mS(a)
        j.mMF(N(b)?b:100)
        if(c!='-'){j.eM(1)}
        return j

    }


    j.lm=function(a,b,c){
        j.lT(a).uT(b)

        if(c!='-'){j.eL(1)}
        return j}


    if( D(a) ){ j.A(a)}

    if( D(b) ){ j.B(b)}

    j.lXA(D(c)?c: V(0,1))

     j.lAA(D(d)?d: a.worldCenter())

    j.lAB(D(e)?e: b.worldCenter())

    if(D(f)){j.rA(f)}

    return j
}
PRISM=function(){b2d.mW()

    cart = w.box(500,200,20,20)
    ride = w.brick(540,150,180,90)

   jd = b2d.prism(
        ride,
        cart,
         V( 1, .3 ), //.Normalize()
         V(  ride.worldCenter().x,  ride.worldCenter().y +5),
        cart.worldCenter(),
        5)


   jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works


    j = w.J( jd)

}

PRISM2 =CHANGEPRISMLIMANDMOTOR=function(){ b2d.mW()


    cart = world.box(500,200,20,20)

    ride = world.brick(540,150,180,90)

    j = w.Prism(
        ride,
        cart,
        V(  1, .3  ), //.Normalize()
        V(  ride.worldCenter().x,  ride.worldCenter().y + 5  ),
        cart.worldCenter(),
        5
    )


    j.maxForce( 10000 ).speed( -100 ).motor( 1 )
    setTimeout( function(){ j.motor(false) }, 2000 )
    setTimeout( function(){ j.motor(true) }, 5000 )

}


//makes random shaped prismatic joint
RandomPrismPair = sPrJ=function(x,y){

    x = N(x)?x:100

    y = N(y)?y:x

    var firstBody = w.FixBody( x,y)

    var secondBody = w.FixBody( x,y)

    j = world.Prism(  firstBody, secondBody, b2.V(1,0),  firstBody.worldCenter(),

            secondBody.worldCenter()  ).limits(-100, 100)  //j.maxForce(1).speed(100).motor(1)

    return j

}

BUMPER=function(){w=b2d.mW()

    var circle = w.ball( 600,500,40).K('ride').bindSprite('me')


   j1= w.prism(

        w.brick( 200,500, 40).K('ride'),

        w.brick( 200,500,40,40).K('cart')

        )//.limits(-30, 60).speed(-100).motor(1).maxForce(1000)


   j2 = w.prism(

        w.ball( 400,500,40 ).K('ride'),

        w.brick(400,500,40,40).K('cart')


    )//.limits(-30, 60).speed(-100).maxForce(1000).motor(1)


    w.prism( circle,  w.brick(600,500,40, 40).K('cart')

    ).limits(-30, 60).speed(-100).motor(1).maxForce(1000)

    w.begin(   function(contact){

            if( contact.with('cart') ){

                w.each(
                    function(b){
                        if( b.is('ride') ){  b.I(0, -1000)  }  }
                )

            }})


    w.ball( 200, 200, 100 )



}



PRISMLIMITS=function(){

    w=b2d.mW({grav:5})

    x = w.brick(400,300,40,40).den(1).fric(1)

    b = w.box(500, 200,200,40).den(1).K('box')

    jd = new b2d.Joints.b2PrismaticJointDef()
    //jd.collideConnected=true
    jd.bodyA = x
    jd.bodyB = b
    jd.referenceAngle=.5

    // jd.localAxisA= V(1,1)
   // jd.upperTranslation=-200
  //  jd.lowerTranslation=200
   // j = w.prism([x,-30,2], b, V(1,-2), 45)
    j =  w.J(jd)
   //  j.EnableLimit(true)

    p=w.player('thrust').den(1).fric(1)
    p.den(0)
    var speed=10

   // j.mot(speed)


    j.U=function(u){if(U(u)){return this.GetUpperLimit()*30}
        this.SetLimits(this.L(),u/30)
        return this}

    j.L=function(l){if(U(l)){return this.GetLowerLimit()*30}
            this.SetLimits(l/30, this.U())
            return this}


    j.UL=function(u,l){return this.U(u).L(l)}
    j.LU=function(l,u){return this.L(l).U(u)}

    j.LU(-100, 300)

    //j.SetLimits(-50,10)

    j.EnableLimit(true)




}