prJt=function(a,b,c,d,e,f){

    var j=sJD(new BXJ.b2PrismaticJointDef())

    j.i=function(){
        var g=G(arguments)
        _a(j.Initialize,g,j)
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

    j.lXA(D(c)?c:bV(0,1))
    j.lAA(D(d)?d:a.c())
    j.lAB(D(e)?e:b.c())
    if(D(f)){j.rA(f)}

    return j}



PRISM=function(){makeWorld()

    cart=w.a(dBD(500,200), pFx(20,20))

    ride=w.a(sBD(540,150), pFx(180,90))

    p=prJt(

        ride,
        cart,
        bV(1,.3), //.Normalize()
        bV(ride.c().x,ride.c().y +5),
        cart.c(),
        5)

        .lT(-12).uT(12.5).eL(1)
        .mMF(10).eM(1).mS(-100000)

    j=w.j(p)}

//makes random shaped prismatic joint
sPrJ=function(x,y){

    x=N(x)?x:100
    y=N(y)?y:x

    b11=w.a(bx1=dBD(x,y),fix())
    b22=w.a(bx2=dBD(x,y),fix())

    p=prJt(b11, b22, bV(1,0), b11.c(), b22.c())

        .r(.8)
        .lT(-5.0).uT(2.5).eL(1)
        .mMF(1).mS(0).eM(1)

    j=w.j(p)

}



BUMPER=function(){mW()

    w.j(
        prJt(
            ride=w.a(dBD(200,500), cFx(40)).uD('ride'),
            cart=w.a(sBD(200,500), pFx(40).uD('cart'))
        ).lm(-1,2).mt(-100,1000))


    w.j(
        prJt(
              w.a(dBD(400,500), cFx(40)).uD('ride'),
              w.a(sBD(400,500), pFx(40).uD('cart'))
        ).lm(-1,2).mt(-100,1000))

    w.j(
        prJt(
            w.a(dBD(600,500), cFx(40)).uD('ride'),
            w.a(sBD(600,500), pFx(40).uD('cart'))
        ).lm(-1,2).mt(-100,1000))

    w.oB(function(c){
            if(c.uD('cart')){

                w.e(function(b){
                        if(b.uD()=='ride'){
                            b.aI(0,-1000)
                        }}

                )

               // ride.aI(0,-1000)

            }})

    ba(200,200,100)}

