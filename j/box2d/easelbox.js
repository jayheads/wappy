//single fixture(shape) bodies!!!


//dynamic circle
ba     =function(x,y,r){//fCS=

    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( dBD(x,y),  cFx(r)  )

}




//static circle
baa    =function(x,y,r){//=ba2
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( sBD(x,y), cFx(r) )

}

//dynamic rect
bi     =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return w.a(

        dBD(x,y),    pFx(W/2, H/2))

}



//static rect
bii    =function(x,y,W,H){//brk2=brick=

    x=N(x)?x:60; y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return w.a(  sBD(x,y),   pFx(W/2, H/2) )

}





tenBalls=function(){_t(10, function(i){ ba(100 + (i*80), 200) })}
hundBalls=function(){_t(100, function(i){ ba( 100  +(i*8),  50, 10) })}

//FORCES

//forces - impulse
sImp=function(i){
    i.n= i.nI=function(){return i.normalImpulses}
    i.t= i.tI=function(){return i.tangentImpulses}
    return i}





//CONTACTS AND SENSORS

//contact
sCon=function(c){
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
    return c}

//advanced
sMf=function(m){
    m.lPN=m.m_localPlaneNormal
    m.lP=m.m_localPoint
    m.pC=m.m_pointCount
    m.p=m.m_points
    m.t=m.m_type
    return m}


bCL=function(){var l= new BXD.b2ContactListener
    l.b=l.bC=function(f){
        l.BeginContact=function(c){f(sCon(c))}; return l}
    l.e=l.eC=function(f){l.EndContact=function(con){
        c=sCon(con)
        f(c)}; return l}

    l.p=l.pS =function(f){
        l.PreSolve=function(c,m){
        f(sCon(c),sMf(m))};
        return l}


    l.P=l.PS=function(f){
        l.PostSolve=function(c,i){f(sCon(c),sImp(i))};
        return l}


    return l}
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


LAVA=function(){

    hit=0

    makeWorld()
    p=bii(300,500,400,20).uD('platform')
    b=ba(300,40).uD('ball')
bi()
    bi()
    s.t(function(){
        if(hit){
            // ba(300,40).uD('ball')

        }})

    w.sCL(bCL().b(function(c){

       var d1=c.A().uD(),
           d2=c.B().uD()

      if(d1!='ball' && d1!='platform'  ){

          $l('!!!')
          hit=1 }

        // if($l(i.n()[0])>100){newB=true}

    }))
}

bindr=function(im,spr,sxy,rt){
    sxy=N(sxy)?sxy:.4
    rt=N(rt)?rt:6

    s.b(im, function(b){

        b.rgc('+').sxy(sxy).rt(rt)

        s.t(function(){
            b.xy(spr.x(),spr.y())
        })})
}

makeMe=function(){
    p = bi(100, 100, 60, 110)
    p.direction = 1
    p.dr = function (a) {
        if (U(a)) {
            return p.direction
        }
        p.direction = a;
        return p}
    p.speed = 40
    p.mv = function (n) {
        if (n == '-') {
            return p.mv(-p.speed)
        }

        n = N(n) ? n : p.speed

        if (p.dr() == "1") {//p.x(p.x()+n)

//p.aI(3,0)

            p.lV(10, 0)
        }
        else {//p.x(p.x()-n)

            //p.aI(-3,0)
            p.lV(-10, 0)
        }


        return p
    }
    p.gFL().SetFriction(1)
    bindr('me', p)
}


makeTim=function(n){

    if(U(n)){  var b=ba()

        bindr('guy', b,.3)
   return b }



    _t(n,function(){
var b=ba()
        bindr('guy', b,.3)})


}
control=function(p){

    kD('l',function(){p.dr(0);p.mv()})
    kD('r',function(){p.dr(1); p.mv() })
    kD('u',function(){
        if(p.dr()==1){p.aI(5,-12)}
        if(p.dr()==0){p.aI(-5,-12)}})


return p}

SAVETIM=function(){makeWorld() // s.b('me', function(mm){m=mm.rgc('+').sxy(.4).rt(6);s.t(function(){m.xy(p.x(),p.y())})})
    makeTim(10);  control(p)}



PLAYER=function(){makeWorld() // s.b('me', function(mm){m=mm.rgc('+').sxy(.4).rt(6);s.t(function(){m.xy(p.x(),p.y())})})

    makeTim(3)

    kD('l', function(){p.dr(0);p.mv() })
    kD('r',function(){ p.dr(1); p.mv() })
    kD('u',function(){

        if(p.dr()==1){p.aI(5,-12)}
        if(p.dr()==0){p.aI(-5,-12)}  })

    kD('d',function(){p.dr(1); p.mv() })

}
POOl=function(){z()

    var w=boxMouseSetup({g:0})


    setupDebugDraw()
    setFixtures()



    bii(10, 300, 20, 460) //left


    bii(990,300, 20, 460)//right


    bii(250, 0, 400, 20)//top
    bii(730, 0, 400, 20)//top

    bii(250, 590, 400, 20)//b
    bii(730, 590, 400, 20)//b




    makeShapeOnDblClk()
    //makeMe()
    //makeTim(500)

}

SHIPBOX=function(){z()

    var w=boxMouseSetup({g:0})


    setupDebugDraw()
    setFixtures()



        bii(10, 300, 20, 460) //left


    bii(990,300, 20, 460)//right


    bii(250, 0, 400, 20)//top
    bii(730, 0, 400, 20)//top

    bii(250, 590, 400, 20)//b
    bii(730, 590, 400, 20)//b




    makeShapeOnDblClk()
    //makeMe()
    //makeTim(500)

}


RAGD=function(){makeWorld()


    w.cJ(spring(
        b11=ba(100,100,30),
        b22=ba(100,200,40)
    ))


    w.cJ(rod(
        b33=bi(100,400,30),
        b44=bi(100,500,40)
    ))



    makeMe()
    w.cJ(spring(b11,p))

    w.cJ(spring(b33,p))




}