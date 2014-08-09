//DEMO
IMPULSE =function(){mW({g:0})


    w.a(dBD(100,500).rt(2).fR(0) , pFx(30,30))

    b=w.a(dBD(300,500).rt(1).fR(.2) ,  pFx(30,30) )


    test={
    i:function(){b.ApplyImpulse(bV(10,-30), b.wC())},

    v:function(){
        b.SetLinearVelocity( bV(10,-60) )},

    f:function(){
        I(function(){
            b.ApplyForce(bV(0, -3), b.wC())
        }, 100)

    }
    }

}
SCALECIRC =function(){
    mW()

    baa(400,300,40);
    baa(290,350,40);
    baa(280,220,40)

    r=10
    x=400
    y=440
    v={x:0,y:0}

    f1=function(){

        b=w.a(
             dBD(x,y)//.lV(v)
            ,
             f=cFx(r)
        )}

    f2=function(){

        b.dF( b.gFL() )//b.dF(f)
        r+=.1
        x=b.x()
        y=b.y()
        v=b.lV()

        f1()
    }

     f1()
    s.t(f2)

}


bindr=function(im,spr,sxy,rt){
    sxy= sxy||.4


    rt= N(rt)?rt:6


    s.b(im,

        function(b){

            b.rgc('+')

            if (A(sxy)){ b.sx(sxy[0]).sy(sxy[1]) } else { b.sxy(sxy) }

            b.rt(rt)

            s.t(function(){ b.xy(spr.x(),spr.y()); b.rt(rt + spr.rt() )})

            spr.kS=function(){b.XX()}

        })


}



control=function(p){

    kD('l',function(){
        p.dr(0);p.mv()})

    kD('r',function(){
        p.dr(1); p.mv()
    })

    kD('u',function(){
        if(p.dr()==1){p.aI(5,-12)}
        if(p.dr()==0){p.aI(-5,-12)}})


    return p}




dirPush=function(){
    pushRight=0
    pushLeft=0
    pushUp=0
    pushDown=0
    kD('l',function(e){
        ee=e
        pushLeft=1})
    kU('l',function(){pushLeft=0})
    kD('r',function(){pushRight=1})
    kU('r',function(){pushRight=0})
    kD('u',function(){pushUp=1})
    kU('u',function(){pushUp=0})
    kD('d',function(){pushDown=1})
    kU('d',function(){pushDown=0})}



makeTim=function(n){
    if(U(n)){
        var b=ba().uD('tim')
        bindr('guy',b,.3)
        return b}

    _t(n,function(){
        var b=ba().uD('tim')
        bindr('guy',b,.3)})}

makeMe=function(){

    p= w.a(dBD(100,100),[
        pFx(50,100).r(0).d(),
        pFx(10,30,0,40).iS(1).uD('feet')
    ]).uD('guy')

    p.direction=1
    p.dr=function(a){
        if(U(a)){return p.direction}
        p.direction = a;
        return p}
    p.speed=40
    p.mv=function(n){
        if (n=='-'){  return p.mv(-p.speed)}
        n = N(n) ? n : p.speed

        if (p.dr()) {  p.aI(3,0) }
        else {  p.aI(-3,0) }
        return p}
    p.gFL().SetFriction(1)
    bindr('me',p)

    return p}



PLAYER=function(){

    mW({w:'makeWallsFull',g:0, $$:0})

    p=makeMe().aD(10000)


    makeTim(30)


    //mouse control
    m$(
        function(){
            var xdif= MX -p.x(),
                ydif= MY -p.y(),
                po=p.wP(0,-75)

        //thrust ship
        p.aI(xdif/20, ydif/20)




        //rotate ship
        p.rt(
                tDeg($M.atan(ydif/xdif))+(xdif >0?90:270) )


        //shoot
        ba(po.x, po.y , 10).aI(xdif/40,  ydif/40).uD('bul')


        }

    )






    //destroy bullets and guys
    w.oB(

        function(c){

            var a= c.A(),b=c.B()

        //if either obj is a bullet an neither is tim ('guy')

        if(

            (
                a.gB().uD()=='bul' || b.gB().uD()=='bul'  )


            &&!


            (
                a.gB().uD()=='guy'||

                    b.gB().uD()=='guy'
                )



            )


        {


            //if it is a bullet
            //destroy it
            //if the other is tim, destory tim, too

            if(a.gB().uD()=='bul'){

                a.gB().uD('destroy')

                if(b.gB().uD()=='tim'){

                    b.gB().uD('destroy')

                }
            }


            //if it is not a bullet
            //destrory it
            //if the other is tim, destory tim, too

            else {
                b.gB().uD('destroy')
                if(a.gB().uD()=='tim'){

                    a.gB().uD('destroy')

                }
            }}

    })





    s.t(
        //actully do the destroying
        function(){

            w.e(function(b){if(b.uD()=='destroy'){

        w.dB(b)

    }})})

}







PLAYER1=function(){mW({w:'makeWallsFull',g:0, $$:0,bg:'space.jpg'})

    p=makeMe().aD(10000)
    makeTim(3)


    w.oB(function(c){
        var a= c.A(),
            b= c.B()

        if(

            (a.gB().uD()=='bul' ||  b.gB().uD()=='bul' )

            && !(  a.gB().uD()=='guy' ||  b.gB().uD()=='guy' )

            )


        {


            if(a.gB().uD()=='bul'){
                a.gB().uD('destroy')

                if(b.gB().uD()=='tim'){
                    b.gB().uD('destroy')}}

            else {b.gB().uD('destroy')
                if(a.gB().uD()=='tim'){

                    a.gB().uD('destroy')}

            }}


    })

    s.t(function(){
        w.e(function(b){

            if(b.uD()=='destroy'){

                b.kS()
                w.dB(b)

            }})})

    dirPush()


    s.t(function(){
        if(pushLeft){p.rt(p.rt()-2)}
        if(pushRight){p.rt(p.rt()+2)}
        if(pushUp){var v= p.GetWorldVector(bV(0,-100))
            p.aI(v.x/100, v.y/100 )}
        if(pushDown){var v= p.GetWorldVector(bV(0,-100))
            p.aI(-v.x/40, -v.y/40 )}})


   kD('s', function(){
       var v= p.GetWorldVector(bV(0,-100)),
           po= p.wP(0,-75),

           b=ba(po.x,po.y,10).aI(v.x/40, v.y/40 ).uD('bul')

       bindr('me',b,.1)

   })


   // s.sx(2).sy(2)
   // s.t(function(){s.xy( 250-p.x() , -50-p.y()  )})

}

footListener=function(){feetTouch=0
    w.sCL(bCL().b(function (c) {
        var a = c.A(), b = c.B()
        if (a.uD() == 'feet' || b.uD() == 'feet') {
            feetTouch = 1
        }
    }).e(function (c) {
        var a = c.A(), b = c.B();
        if (a.uD() == 'feet' || b.uD() == 'feet') {
            feetTouch = 0
        }
    }))
}
moveListener=function(){
    s.t(function () {
        p.rt(0)
        w.e(function (b) {
            if (b.uD() == 'destroy') {
                w.dB(b)
            }
        })
        if (feetTouch) {
            if (pushUp) {
                if (pushRight) {
                    p.aI(0, -10)
                }
                else if (pushLeft) {
                    p.aI(0, -10)
                }
                else {
                    p.aI(0, -10)
                }
            }
            else {
                if (pushLeft) {
                    p.dr(0);
                    p.aI(-5, 0)
                }
                if (pushRight) {
                    p.dr(1);
                    p.aI(5, 0)
                }
            }
        } else {
            if (pushLeft) {
                p.dr(0);
                p.aI(-1, 0)
            }
            if (pushRight) {
                p.dr(1);
                p.aI(1, 0)
            }
        }
    })
}



PLAYER2=function(){

    mW()

    p=makeMe().aD(10000)

    dirPush()
    footListener()
    moveListener()

    bindr('guy', bii(300,200,100),[.4,1.2])
    bindr('guy',bii(300,500,60,30),[.4,1.2])
    bindr('guy', bii(150,400,60,30))
   // bindr('guy',
        bii(800,300,100)
       // ,[.4,1.2])
    //bindr('guy',
        bii(260,240,40)
    //)
    //bindr('guy',
        bii(550,250,100)
            //,[1.8,1.2])

    //bindr('guy',
        bii(1350,550,100),[1.8,1.2]
    //)

    //s.sx(2).sy(2)
   // s.t(function(){  // s.x( 450-p.x()  )  //  if(s.x() > 0){s.x(0) }  // s.y( -50-p.y()  ) })

}


PLAYER3=function(){mW()
    warpping=false
    p=makeMe().aD(10000)
    dirPush()
    warpp =function(){ p.sY(100);p.sX(200) }
    s.t(function(){if(warpping){warpp(); warpping=false}})
    w.sCL(bCL()
        .b(function(c){
        var a=c.A(),b=c.B()
        if(a.uD()=='feet'||b.uD()=='feet'){feetTouch=1}
        if(c.pair('feet','tramp')){p.aI(0,-150)}
        if(c.pair('feet','warp')){warpping=true}})
        .e(function(c){var a=c.A(),b=c.B();
        if(a.uD()=='feet'||b.uD()=='feet'){feetTouch=0}}))

    moveListener()
    makeTim(15)
    bii(500,600,30,200)
    bii(600,600,30,200)

    w.a(sBD(550,580), pFx(100,20).uD('warp'))
    w.a(dBD(650,580), pFx(100,20).uD('tramp'))}



PLAYER4=function(){mW()
    warpping=false
    p=makeMe().aD(10000)
    dirPush()
    warpp =function(){ p.sY(100);p.sX(200) }
    s.t(function(){if(warpping){warpp(); warpping=false}})
    w.sCL(bCL()

        .b(function(c){
            var a=c.A(),b=c.B()
            if(a.uD()=='feet'||b.uD()=='feet'){feetTouch=1}
            if(c.pair('feet','tramp')){p.aI(0,-150)}
            if(c.pair('feet','warp')){warpping=true}
        })

        .e(function(c){var a=c.A(),b=c.B();
            if(a.uD()=='feet'||b.uD()=='feet'){feetTouch=0}
        }))

    moveListener()


    makeCar()

}




