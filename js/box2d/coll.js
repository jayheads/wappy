

//CONTACTS AND SENSORS

pair=function(c, p1, p2){//is

    var a = c.A(),

        b = c.B(),

        aD=a.uD(),

        bD= b.uD()

    return  (  aD==p1 && bD==p2  )
        ||

        (   bD==p1 && aD==p2  )

}








SuperContact = sCon=function(contact){  var  c=contact

    contact.pair=function(a,b){return pair(contact,a,b)}
    contact.filtering =contact.fFF=function(){contact.FlagForFiltering(); return contact}// Flag this contact for filtering.// Filtering will occur the next time step.

    contact.A=function(){return SuperFixture( contact.GetFixtureA() )}
    contact.B=function(){return SuperFixture( contact.GetFixtureB() )}

    contact.manifold =contact.gM=function(){return contact.GetManifold()}

    contact.localPlaneNormal =contact.lPN=function(){return contact.gM().m_localPlaneNormal}

    contact.localPoint =contact.lP=function(){return contact.gM().m_localPoint}

    contact.pointCount = contact.pC=function(){return contact.gM().m_pointCount}

    contact.points =contact.p=function(){return contact.gM().m_points}

    contact.type =contact.t=function(){return contact.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D

    contact.next =contact.gN=function(){return contact.GetNext()}//Get the next contact in the world's contact list.

    contact.worldManifold =contact.gWM=function(){return contact.GetWorldManifold()}

    contact.continuous =contact.iC=function(){return contact.IsContinuous()}//Does this contact generate TOI events for continuous simulation

    contact.iE=function(){return contact.IsEnabled()}//Has this contact been disabled?

    contact.enabled = contact.sE=function(a){contact.SetEnabled(a?true:false);return contact} // Enable/disable this contact.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).


    contact.sensor = contact.iS=function(){return contact.IsSensor()}//Is this contact a sensor?
    contact.setSensor  =contact.sS=function(a){contact.SetSensor(a?true:false);return contact}// Change this to be a sensor or-non-sensor contact.


    contact.touching = contact.iT=function(){return contact.IsTouching()}//Is this contact touching.


    contact.involves= contact.eitherIs=contact.userData = contact.uD=function( u){

        return contact.A().uD() == u

            ||

            contact.B().uD() ==u

    }

    return contact}




b2.contactListener= ContactListener=bCL=function(){

    var l = new b2.Dynamics.b2ContactListener

    l.beginContact=l.b  =function(func){
        l.BeginContact=function(c){ func( SuperContact(c) ) }
        return l}

    l.endContact= l.e  =function(func){
        l.EndContact=function(contact){

        func( SuperContact(contact)  ) }; return l}

    l.preSolve = l.p  =function(func){

        l.PreSolve = function(contact,manifold){

            func(

                SuperContact(contact),

                SuperManifold(manifold)
            )
       }

        return l}


    l.postSolve=l.P=function(func){

        l.PostSolve=function(contact,impulses){
            func(
                SuperContact(contact),
                SuperImpulses(impulses)
            )}
        return l}

    function SuperImpulses(impulses){
        impulses.n= impulses.nI=function(){return impulses.normalImpulses}
        impulses.t= impulses.tI=function(){return impulses.tangentImpulses}
        return impulses}


    return l}


//makes a contact listener
//touch ball to 'button.' hit triggers new ball.
LAVA=function(){z()


    b2.makeWorld()

    world.bii(400, 500, 40, 20).uD('platform')
    world.ba(300,40).uD('ball')
    world.setContactListener(

        b2.contactListener().beginContact(onContact)

    )

    _hit=0
    cjs.tick(function(){
        if(_hit){
            world.ba(300,40).uD('ball')
            _hit = 0}})

    function onContact(contact){
        if( _.either(contact.A().gB(), contact.B().gB(),
                     'ball', 'platform')){
            $l('hit!')
            _hit = 1}}}




//only breaks at high impulse
POSTSOLVE=function(){

    b2.makeWorld()

    world.ba()

    newBall =false

    cjs.tick(function(){
        if(newBall){world.ba()};
        newBall=false})

    world.setContactListener(
        b2.contactListener().postSolve(  onSolve ))

    function onSolve(c,i){
        if(  $l( i.n()[0] ) > 100 ){ newBall = true }}}



//shows category and mask bits
//the big circles dont collide??
PRESOLVE=function(){

    makeWorld()
    world.ba()

    newBall =false

    cjs.tick(
        function(){
            if( newBall ){  world.ba() }
            newBall = false
        })


    world.setContactListener(

        b2.contactListener().preSolve(

            function( c, m ){

           //  if(  m.n()[0]   > 100 ){ newBall = true }
    })


    )}





CONTACTS=function(){makeWorld()

    var centerFx = b2.circleFixture(60).uD('center')

    t1 = world.addBody(

        b2.dynamicBodyDef(500,300), [

        centerFx, b2.polyFixture(60,90,0,40,10).uD('sensor1').sensor(1)

    ]).angVel(100)


    t2= world.addBody(b2.dynamicBodyDef(700,300), [
        centerFx, b2.circleFixture(100).sensor(1).uD('sensor2')

    ]).angVel(100)



     world.setContactListener(

        b2.contactListener().beginContact(

            onBegin

     ))



function onBegin( c, m ){

    var a = c.A()

    var b = c.B()


    $l( 'a '+ a.uD() ); $l( 'b ' + b.uD() )

    if(
        ( a.is('sensor1')  && b.is('sensor2') )

        ||

        ( a.is('sensor2')  && b.is('sensor1') )

        ){$l('!!!!!!!!')}

    // a.uD('change')
}

}


BITS=function(){makeWorld()

    cir = b2.circleFixture( 80 ).category(0x0002).mask(0x0005),

    rec = b2.polyFixture( 60, 90, 0, 40, 10 ).category(0x0003).mask(0x0003)

    world.A( b2.dynamicBodyDef(300,300), cir )

    world.A( b2.dynamicBodyDef(400,300), cir )

    world.A( b2.dynamicBodyDef(300,300), rec )

    world.A( b2.dynamicBodyDef(400,300), rec )}




GROUPINDEX=function(){


    b2.makeWorld()

    cir = b2.circleFixture(80).category(0x0002).mask(0x0005)

    rec = b2.polyFixture(60,90,0,40,10).category(0x0003).mask(0x0003)

    world.A(
        b2.dynamicBodyDef(300,300),
        cir
    )

    world.A(
        b2.dynamicBodyDef(300,300),
        rec
    )



    cir = b2.circleFixture( 80 ).gI( -3 )
    rec = b2.polyFixture( 60, 90, 0, 40, 10 ).gI( -3 )

    world.A( b2.dynamicBodyDef( 400, 300 ), cir )

    world.A( b2.dynamicBodyDef( 400, 300 ), rec )
}




















//do any of these get used? i think filterData does
ContactManager = bCM=function(){//used?
    var m= new BXD.b2ContactManager
    m.c= m.cl= m.Collide
    m.a= m.aP=m.AddPair
    m.f= m.fNC= m.FindNewContacts
    m.d= m.ds= m.Destroy
    return m}

ContactFilter =bCF=function(){//used?
    var f=new BXD.b2ContactFilter
    f.rC =f.RayCollide
    f.sC =f.ShouldCollide
    return f}

FilterData = bFD=function(d){//used?

    var d = new BXD.b2FilterData


    d.gI=function(a){

        if(U(a)){return d.groupIndex}

        d.groupIndex=a; return d}


    d.category=d.cB=function(a){
        if(U(a)){return d.categoryBits}
        d.categoryBits=a; return d}

    d.mask=d.mB=function(a){

        if(U(a)){  return d.maskBits}

        d.maskBits=a; return d

    }


    return d}




SuperManifold = sMf=function(m){//used????

      m.lPN = m.m_localPlaneNormal

    m.lP=m.m_localPoint

    m.pC=m.m_pointCount

    m.p=m.m_points

    m.t=m.m_type

    return m}



_.either=function(ob1, ob2, is1, is2){

    return ( ob1.is(is1) && ob2.is(is2) )

        ||

        (
            ob2.is(is1) && ob1.is(is2)


            )
}
