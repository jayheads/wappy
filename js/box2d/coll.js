

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






ContactListener=bCL=function(){

    var l = new BXD.b2ContactListener

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
LAVA=function(){makeWorld()

    _hit=0

    world.bii(400, 500, 40, 20).uD('platform')

    stage.tick(function(){

        if(_hit){

            world.ba(300,40).uD('ball')

            _hit = 0

        }})

    world.setContactListener(
        ContactListener().beginContact(
            function(contact){

            var d1 = contact.A().gB(),
                d2 = contact.B().gB()

            if(
                ( d1.is('ball') && d2.is('platform') )
                ||

                (
                    d2.is('ball') && d1.is('platform')

                    )

                ){  _hit = 1  }

            }))

    world.ba(300, 40).uD('ball')


}



//only breaks at high impulse
POSTSOLVE=function(){
    makeWorld()
    world.ba()

    newB=false

    stage.tick(function(){
        if(newB){world.ba()}; newB=false})

    world.setContactListener(

        ContactListener().postSolve(

            function(c, i){

                if(  $l( i.n()[0] ) > 100 ){ newB = true }

            }
        )

    )
}


//shows category and mask bits
//the big circles dont collide??
PRESOLVE=function(){

    makeWorld()
    world.ba()

    newB=false

    stage.tick(
        function(){
            if( newB ){  world.ba() }
            newB = false
        })


    world.setContactListener(

        ContactListener().preSolve(

            function( c, m ){ mm=m

             if(  m.n()[0]   > 100){ newB = true }
    })


    )}


CONTACTS=function(){makeWorld()

    var centerFx = CircleFixture(60).uD('center')

    t1= world.addBody(dBD(500,300),[

        centerFx,

        sensor1 = PolyFixture(60,90,0,40,10).sensor( 1 ).uD( 'sensor1' )

    ]).angVel(100)


    t2= world.addBody(dBD(700,300), [
        centerFx,
        sensor2 = CircleFixture(100).sensor(1).uD('sensor2')

    ]).angVel(100)

     world.setContactListener(

        ContactListener().beginContact(

            function( c, m ){

            var a = c.A()

            var b = c.B()


            $l( 'a '+ a.uD() ); $l( 'b ' + b.uD() )

            if(
                ( a.is('sensor1')  && b.is('sensor2') )

                ||

                ( a.is('sensor2')  && b.is('sensor1') )

                ){$l('!!!!!!!!')}

           // a.uD('change')
        })

     )


}


BITS=function(){makeWorld()

    cir = CircleFixture( 80 ).category(0x0002).mask(0x0005),

    rec = PolyFixture( 60, 90, 0, 40, 10 ).category(0x0003).mask(0x0003)

    world.addBody( dBD(300,300), cir )

    world.addBody( dBD(400,300), cir )

    world.addBody( dBD(300,300), rec )

    world.addBody( dBD(400,300), rec )}



GROUPINDEX=function(){

 makeWorld()

    cir = CircleFixture(80).category(0x0002).mask(0x0005)

    rec = PolyFixture(60,90,0,40,10).category(0x0003).mask(0x0003)

    world.addBody( dBD(300,300), cir )

    world.addBody( dBD(300,300), rec )

    cir = CircleFixture( 80 ).gI( -3 )

    rec = PolyFixture( 60, 90, 0, 40, 10 ).gI( -3 )

    world.addBody( dBD( 400, 300 ), cir )

    world.addBody( dBD( 400, 300 ), rec ) }



















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



