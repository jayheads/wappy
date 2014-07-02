ba    =fCS=function(x,y,r){
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a(

        dBf(x,y), cFx(r)

    )


}
baa   =ba2 =function(x,y,r){
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a(

        sBf(x,y), cFx(r)

    )


}
bi    =brk=brick=function(x,y,W,H) {

    x = N(x) ? x : 60
    y = N(y) ? y : x
    W = N(W) ? W : 30
    H = N(H) ? H : W

    var br = bDf(dB).XY(x, y)

    var f = fDf().s(pSh(W / 2, H / 2))

    return w.a(br, f)


}
bii    =brk2=brick=function(x,y,W,H){

    x=N(x)?x:60
    y=N(y)?y:x
    W=N(W)?W:30
    H=N(H)?H:W

    var br=bDf(sB).XY(x, y)

    var f=fDf().s( pSh(W/2, H/2)   )

    return w.a(br,f)

}
tenBalls=function(){_t(10, function(i){ ba(100 + (i*80), 200) })}
hundBalls=function(){_t(100, function(i){ ba( 100  +(i*8),  50, 10) })}

sImp=function(i){
    i.n= i.nI=function(){return i.normalImpulses}
    i.t= i.tI=function(){return i.tangentImpulses}
    return i}

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