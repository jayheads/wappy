b2.prismDef= b2.prismaticJointDef = PrismaticJointDef = prJt=function(a,b,c,d,e,f){

    var j=SuperJointDef(
        new b2.Joints.b2PrismaticJointDef()
    )


    j.i=function(){

        j.Initialize.apply(j, G(arguments))

        return j}

    j.mt=function(a,b,c){
        j.mS(a)
        j.mMF(N(b)?b:100)
        if(c!='-'){j.eM(1)}
        return j}

    j.lm=function(a,b,c){
        j.lT(a).uT(b)

        if(c!='-'){j.eL(1)}
        return j}

    if(D(a)){j.A(a)}

    if(D(b)){j.B(b)}

    j.lXA(D(c)?c: bV(0,1))

    j.lAA(D(d)?d: a.c())

    j.lAB(D(e)?e: b.c())

    if(D(f)){j.rA(f)}

    return j
}

SuperPrismatic=function(p){

    p.limits = function(low, up){
        this.SetLimits(low/30, up/30)
        this.enableLimit(true)
        return this }

    //p.maxForce=function(){}

    return p}

PRISM=function(){

    b2.makeWorld()

    cart = w.bi(500,200,20,20)
    ride = w.bii(540,150,180,90)

    pulleyJoint = b2.prismaticJointDef(
        ride,
        cart,
        b2.V( 1, .3 ), //.Normalize()
        b2.V(  ride.worldCenter().x,  ride.worldCenter().y +5),
        cart.worldCenter(),
        5)

    pulleyJoint.lT(-12).uT(12.5).eL(1).mMF(10).eM(1).mS(-100000)

    j = world.createJoint( pulleyJoint)

}




PRISM2 =CHANGEPRISMLIMANDMOTOR=function(){ makeWorld()

    cart = world.bi(500,200,20,20)

    ride = world.bii(540,150,180,90)

    j = world.Prism( ride, cart,

        b2.V(  1, .3  ), //.Normalize()

        b2.V(

            ride.worldCenter().x,

                ride.worldCenter().y + 5
        ),

        cart.worldCenter(),

        5 )

    j.maxForce( 10000 ).speed( -100 ).motor( 1 )
    setTimeout( function(){ j.motor(0) }, 2000 )
    setTimeout( function(){ j.motor(1) }, 5000 )

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


BUMPER=function(){
    b2.makeWorld()
    circle = w.ba( 600,500,40).uD('ride')

    bindr('me', circle)

    world.Prism(

        w.ba( 200,500, 40).uD('ride'),

        w.bii( 200,500,40,40).uDF('cart')

        ).limits(-30, 60).speed(-100).motor(1).maxForce(1000)


    world.Prism(     w.ba( 400,500,40 ).uD('ride'),  w.bii(400,500,40,40).uDF('cart')

    ).limits(-30, 60).speed(-100).maxForce(1000).motor(1)


    world.Prism( circle,  w.bii(    600,500,40, 40).uDF('cart')

    ).limits(-30, 60).speed(-100).motor(1).maxForce(1000)

    world.onBeginContact(   function(contact){

            if( contact.involves('cart') ){

                world.eachBody(
                    function(b){ if( b.is('ride') ){  b.aI(0,-1000)  }  }
                )

            }})


    w.ba( 200, 200, 100 )



}

