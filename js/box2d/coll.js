

//CONTACTS AND SENSORS

pair=function(c, p1, p2){

    var a=c.A(), b=c.B(), aD=a.uD(), bD= b.uD()

    return  (p1==aD && p2==bD) || (p1==bD && p2==aD)

}


//super contact
sCon=function(c){
    c.pair=function(a,b){return pair(c,a,b)}
    c.fFF=function(){c.FlagForFiltering(); return c}// Flag this contact for filtering.// Filtering will occur the next time step.
    c.A=function(){return sFx(c.GetFixtureA())}
    c.B=function(){return sFx(c.GetFixtureB())}
    c.gM=function(){return c.GetManifold()}
    c.lPN=function(){return c.gM().m_localPlaneNormal}
    c.lP=function(){return c.gM().m_localPoint}
    c.pC=function(){return c.gM().m_pointCount}
    c.p=function(){return c.gM().m_points}
    c.t=function(){return c.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
    c.gN=function(){return c.GetNext()}//Get the next contact in the world's contact list.
    c.gWM=function(){return c.GetWorldManifold()}
    c.iC=function(){return c.IsContinuous()}//Does this contact generate TOI events for continuous simulation
    c.iE=function(){return c.IsEnabled()}//Has this contact been disabled?
    c.iS=function(){return c.IsSensor()}//Is this contact a sensor?
    c.iT=function(){return c.IsTouching()}//Is this contact touching.
    c.sE=function(a){c.SetEnabled(a?true:false);return c} // Enable/disable this contact.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
    c.sS=function(a){c.SetSensor(a?true:false);return c}// Change this to be a sensor or-non-sensor contact.


    c.userData = c.uD=function( u){
        return c.A().uD()==u || c.B().uD()==u
    }

    return c}



//forces - impulse
sImp=function(i){
    i.n= i.nI=function(){return i.normalImpulses}
    i.t= i.tI=function(){return i.tangentImpulses}
    return i}

ContactListener=bCL=function(){var l= new BXD.b2ContactListener

    l.beginContact=l.b  =function(f){
        l.BeginContact=function(c){
            f(sCon(c))}
        return l}

    l.endContact=l.e  =function(f){
        l.EndContact=function(con){
        c=sCon(con)
        f(c)}; return l}


    l.preSolve=l.p  =function(f){
        l.PreSolve=function(c,m){
            f(sCon(c),sMf(m))}
        return l}

    l.postSolve=l.P=function(f){
        l.PostSolve=function(c,i){
            f(sCon(c),sImp(i))}
        return l}

    return l}


//makes a contact listener
//touch ball to 'button.' hit triggers new ball.
LAVA=function(){makeWorld()

    p=bii(400,500,40,20).uD('platform')
    b=ba(300,40).uD('ball')
    hit=0

    s.t(function(){
        if(hit){ba(300,40).uD('ball'); hit=0}})

    w.sCL(
        bCL().b(function(c){
            var d1=c.A().gB().uD(),
                d2=c.B().gB().uD()
        if((d1=='ball' && d2=='platform')||(d2=='ball' && d1=='platform')){
            hit=1
            $l('hit')}}))}


//only breaks at high impulse
POSTSOLVE=function(){
    makeWorld();ba()
    newB=false
    s.t(function(){if(newB){ba()}; newB=false})
    w.sCL(bCL().P(function(c,i){if($l(i.n()[0])>100){newB=true}}))
}


//triggers listeners!
LISTENER=function(){
    _bC=0
    _eC=0
    _pS=0
    _PS=0

    makeWorld()

    ba()
    b1=function(){bi()}

    var bb=bCL()
        .bC(function(){

            b1()
            // $l('bC: '+_bC++)

        })
        .eC(function(){
            // $l('eC: '+_eC++)
            //ba()
        })
        .pS(function(){
            // $l('pS: '+_pS++)
            // ba()
        })
        .PS(function(){
            // bi()
            //    $l('PS: '+_PS++)
        })

    w.sCL(bb)

}




//shows category and mask bits
//the big circles dont collide??
PRESOLVE=function(){makeWorld();ba()
    newB=false
    s.t(function(){if(newB){ba()}; newB=false})

    w.sCL(

        bCL().p(function(c,m){

            if($l(i.n()[0])>100){newB=true}
    }))

}



CONTACTS=function(){makeWorld()

    centerFx=cFx(60).uD('center')

    t1= w.a(dBD(500,300),[
        centerFx,
        sensor1=pFx(60,90,0,40,10).iS(1).uD('sensor1')

    ]).aV(100)

    t2= w.a(dBD(700,300),[
        centerFx,
        sensor2=cFx(100).iS(1).uD('sensor2')
    ]).aV(100)

     w.sCL(

        bCL().b(function(c,m){
            a=c.A()

            b=c.B()


            $l('a '+a.uD()); $l('b '+b.uD())

            if( (a.uD()=='sensor1'  && b.uD()=='sensor2') ||
                (a.uD()=='sensor2'  && b.uD()=='sensor1')

                ){$l('!!!!!!!!')}

           // a.uD('change')
        })

     )


}




BITS=function(){makeWorld()


    var cir=cFx(80)
            .cB(0x0002).mB(0x0005),

        rec=pFx(60,90,0,40,10)
            .cB(0x0003).mB(0x0003)

    cir=cFx(80)
        .cB(0x0002).mB(0x0005)

    rec=pFx(60,90,0,40,10)
        .cB(0x0004).mB(0x0003)

    w.a(dBD(300,300),cir)
    w.a(dBD(400,300),cir)
    w.a(dBD(300,300),rec)
    w.a(dBD(400,300),rec)

}
GROUPINDEX=function(){

 makeWorld()


        var cir=cFx(80)
                .cB(0x0002).mB(0x0005),

            rec=pFx(60,90,0,40,10)
                .cB(0x0003).mB(0x0003)

        cir=cFx(80).gI(-3)
            //.cB(0x0002).mB(0x0005)

        rec=pFx(60,90,0,40,10).gI(-3)
            //.cB(0x0004).mB(0x0003)

        w.a(dBD(300,300),cir)
        w.a(dBD(400,300),cir)
        w.a(dBD(300,300),rec)
        w.a(dBD(400,300),rec)}




bCM=function(){var m= new BXD.b2ContactManager
    m.c= m.cl= m.Collide
    m.a= m.aP=m.AddPair
    m.f= m.fNC= m.FindNewContacts
    m.d= m.ds= m.Destroy
    return m}


bCF=function(){
    var f=new BXD.b2ContactFilter
    f.rC =f.RayCollide
    f.sC =f.ShouldCollide
    return f}


bFD=function(d){var d= new BXD.b2FilterData

    d.gI=function(a){
        if(U(a)){return d.groupIndex}
        d.groupIndex=a; return d}

    d.cB=function(a){
        if(U(a)){return d.categoryBits}
        d.categoryBits=a; return d}

    d.mB=function(a){
        if(U(a)){return d.maskBits}
        d.maskBits=a; return d}

    return d}



//advanced
sMf=function(m){
    m.lPN=m.m_localPlaneNormal
    m.lP=m.m_localPoint
    m.pC=m.m_pointCount
    m.p=m.m_points
    m.t=m.m_type
    return m}
