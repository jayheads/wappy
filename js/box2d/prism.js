PrismaticJointDef = prJt=function(a,b,c,d,e,f){

    var j=SuperJointDef(new BXJ.b2PrismaticJointDef())


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

    return p}






PRISM=function(){makeWorld()

    cart=w.bi(500,200,20,20)

    ride=w.bii(540,150,180,90)

    pulleyJoint = PrismaticJointDef(

        ride,

        cart,

        bV( 1, .3 ), //.Normalize()

        bV(  ride.worldCenter().x,  ride.worldCenter().y +5),

        cart.worldCenter(),  5)


        .lT(-12)
        .uT(12.5)
        .eL(1)
        .mMF(10)
        .eM(1)
        .mS(-100000)

    j = world.createJoint( pulleyJoint)
}


PRISM2 =CHANGEPRISMLIMANDMOTOR=function(){ makeWorld()

    cart = world.bi(500,200,20,20)

    ride = world.bii(540,150,180,90)

    j = world.Prism( ride, cart,

        bV(  1, .3  ), //.Normalize()

        bV(

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

    j = world.Prism(  firstBody, secondBody, bV(1,0),  firstBody.worldCenter(),

            secondBody.worldCenter()  ).limits(-100, 100)  //j.maxForce(1).speed(100).motor(1)

    return j

}





BUMPER=function(){mW()

    w.j(
        //world.PrismaticJoint
        prJt(

            //world.DynamicCircle
            ride = w.a(
                dBD(200,500), cFx(40)).uD('ride'),

            //world.StaticRect
            cart = w.a(
                sBD(200,500), pFx(40).uD('cart'))

        ).lm(-1,2).mt(-100,1000))



    w.j(
        prJt(
              w.a(dBD(400,500), cFx(40)).uD('ride'),
              w.a(sBD(400,500), pFx(40).uD('cart'))
        ).lm(-1,2).mt(-100,1000))



    circle = w.a(dBD(600,500), cFx(40)).uD('ride')

    bindr('me',circle)

    w.j(

        prJt(

            circle

            ,

            w.a(sBD(600,500), pFx(40).uD('cart'))


        ).lm( -1, 2 ).mt( -100, 1000 )

    )



    w.oB(function(c){

            if(c.uD('cart')){

                w.e(
                    
                    function(b){

                        if(b.uD()=='ride'){

                            b.aI(0,-1000)
                        }}

                )

               // ride.aI(0,-1000)

            }})



    ba( 200, 200, 100 )}

