  b2.either = function(ob1,ob2, is1,is2){
    return (ob1.is(is1) && ob2.is(is2))||
        (ob1.is(is2) && ob2.is(is1))}

b2.L = b2.listener=b2.contactListener= function(){
    var l = new b2.Dynamics.b2ContactListener
    return l}


///////
l = b2.Dynamics.b2ContactListener.prototype
l.begin = l.beginContact= l.b =function(func){
    this.BeginContact = func
    return this}
l.end = l.endContact= l.e =function(func){
    this.EndContact=func; return this}
l.pre = l.preSolve = l.p  =function(func){
    this.PreSolve = func; return this}
l.post = l.postSolve=l.P=function(func){
    this.PostSolve=func; return this}


///////


c = b2.Dynamics.Contacts.b2Contact.prototype



c.filtering =c.fFF=function(){this.FlagForFiltering(); return contact}// Flag this contact for filtering.// Filtering will occur the next time step.
c.A=function(){return this.GetFixtureA()  }
c.B=function(){return this.GetFixtureB()  }
c.manifold =c.gM=function(){return this.GetManifold()}
c.localPlaneNormal =c.lPN=function(){return this.gM().m_localPlaneNormal}
c.localPoint =c.lP=function(){return this.gM().m_localPoint}
c.pointCount = c.pC=function(){return this.gM().m_pointCount}
c.points =c.p=function(){return this.gM().m_points}
c.type =c.t=function(){return this.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
c.next =c.gN=function(){return this.GetNext()}//Get the next contact in the world's contact list.



  c.worldManifold =  function(){

      return this.GetWorldManifold()

  }



  c.continuous =c.iC=function(){return this.IsContinuous()}//Does this contact generate TOI events for continuous simulation
c.iE=function(){return this.IsEnabled()}//Has this contact been disabled?
c.enabled = c.sE=function(a){this.SetEnabled(a?true:false);return contact} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
c.sensor = c.iS=function(){return this.IsSensor()}//Is this contact a sensor?
c.setSensor  =c.sS=function(a){this.SetSensor(a?true:false);return contact}// Change this to be a sensor or-non-sensor this.
c.touching = c.iT=function(){return this.IsTouching()}//Is this contact touching.


  c.includes =c.involves= c.eitherIs=c.userData = c.uD=function( u){
    return this.A().uD() == u  || this.B().uD() ==u}

  c.isBetween = c.touching =c.pair=function(p1, p2){
      var c1= this.A().gB().uD(),

          c2= this.B().gB().uD()


      return (c1==p1 && c2==p2)||(c2==p1 && c1==p2)

  }


  ISBETWEEN=function(){z()

      w= b2.mW()

      bl = w.ba().uD('bl')

      br = w.bi().uD('br')


      w.begin(function(contact){

          c=contact
          if(contact.isBetween('bl','br')){alert('hit')}
      })


  }


  // SuperContact = sCon=function(contact){  var  c=contact ;return contact}







  //makes a contact listener
//touch ball to 'button.' hit triggers new ball.

  LAVA5=function(){z()

      w=b2.mW()

      w.platform(400,500,40,20)
      w.ball(300,40)


      cjs.tick(function(){

        if(b2.flagged('hit')){w.ball(300,40,10)}

      })



      w.begin(function(contact){
          if(contact.isBetween('ball','platform')){
              b2.flag('hit')}
      })


      // if two kinds make contact, do something when safe



    }
  LAVA4=function(){z()


      w=b2.mW()

      w.platform(400,500,40,20)
      w.ball(300,40)

      cjs.on('hit', function(){
              w.ball(300,40,10)
          })


      w.begin(function(contact){
          if(contact.isBetween('ball','platform')){
             cjs.emit('hit')}
      })


      // if two kinds make contact, do something when safe



  }
  LAVA3=function(){z()
      w=b2.mW()
      w.platform(400,500,40,20)
      w.ball(300,40)
      cjs.on('hit', function(){ w.ball(300,40,10) })
      w.bindCollide('ball','platform','hit')}










POSTSOLVE=function(){//only breaks at high impulse

    w=b2.mW()

    b = w.ba()

    cjs.tick(function(){
        if(STATE.newBall){w.ba()}
        STATE.newBall=false
    })


    w.post(function(contact, contactImpulse){ d = contactImpulse


        n = normalImpulses = contactImpulse.normalImpulses
        nX =  Math.floor(normalImpulses[0])
        nY =  Math.floor(normalImpulses[1])

        t = tangentImpulses = contactImpulse.tangentImpulses
       tX = Math.floor( t[0])
        tY = Math.floor(t[1]  )


         $l('normal: '+ tX + ', '+ tY + ' tangent: ' + nX + ', '+ nY  )


        if(nX > 100){ STATE.newBall = true }

    })


  //we can get the 'normal vector' of the contact btwn fixtures

}




//shows category and mask bits
//the big circles dont collide??

PRESOLVE =function(){

    b2.mW()

    w.ba()

    cjs.tick(
        function(){
            if(STATE.newBall){w.ba()}
            STATE.newBall=false})

    w.pre( function( contact, manifest ){  c=contact;  m=manifest })

    //second pam is really info about previous collision manfest?  may be usesless?!!!!

}



CONTACTS=function(){makeWorld()

    var centerFx = b2.circDef(60).uD('center')

    t1 = w.A(
        b2.dynamicDef(500,300), [
        centerFx,  b2.polyDef(60,90,0,40,10).uD('sensor1').sensor(true)
    ]).angVel(100)


    t2= w.A(b2.dynamicDef(700,300), [
        centerFx, b2.circDef(100).sensor(true).uD('sensor2')
    ]).angVel(100)


     w.listen(b2.listener().begin(onBegin))


    function onBegin( c, m ){

    var a = c.A(), b = c.B()


    $l( 'a '+ a.uD() ); $l( 'b ' + b.uD() )

    if(
        ( a.is('sensor1')  && b.is('sensor2') )

        ||

        ( a.is('sensor2')  && b.is('sensor1') )

        ){$l('!!!!!!!!')}

      a.uD('change')
}

}
BITS=function(){b2.mW()
    cir = b2.circDef(80).category(0x0002).mask(0x0005),
    rec = b2.polyDef( 60, 90, 0, 40, 10 ).category(0x0003).mask(0x0003)
    w.A( b2.dynamicDef(300,300), cir )
    w.A( b2.dynamicDef(400,300), cir )
    w.A( b2.dynamicDef(300,300), rec )
    w.A( b2.dynamicDef(400,300), rec )}
GROUPINDEX=function(){b2.mW()
    cir = b2.circDef(80).category(0x0002).mask(0x0005)
    rec = b2.polyDef(60,90,0,40,10).category(0x0003).mask(0x0003)
    world.A(b2.dynamicDef(300,300), cir)
    world.A(b2.dynamicDef(300,300), rec)
    cir = b2.circDef( 80 ).gI( -3 )
    rec = b2.polyDef( 60, 90, 0, 40, 10 ).gI( -3 )
    world.A( b2.dynamicDef( 400, 300 ), cir)
    world.A( b2.dynamicDef( 400, 300 ), rec)}


//do any of these get used? i think filterData does
b2.manager = b2.contactManager = b2.cM=function(){//used?
    var m= new BXD.b2ContactManager
    m.c= m.cl= m.Collide
    m.a= m.aP=m.AddPair
    m.f= m.fNC= m.FindNewContacts
    m.d= m.ds= m.Destroy
    return m}
b2.filter = b2.f= function(){//used?
    var f=new BXD.b2ContactFilter
    f.rC =f.RayCollide
    f.sC =f.ShouldCollide
    return f}
b2.filterData = b2.fD=function(d){//used?

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


b2.superManifold =  function(m){//used????

      m.lPN = m.m_localPlaneNormal

    m.lP=m.m_localPoint

    m.pC=m.m_pointCount

    m.p=m.m_points

    m.t=m.m_type

    return m}
function SuperImpulses(impulses){
    impulses.n= impulses.nI=function(){
        return impulses.normalImpulses}
    impulses.t= impulses.tI=function(){
        return impulses.tangentImpulses}
    return impulses}


  b2.manifold = function(){
      return new b2.Collision.b2WorldManifold()
  }


WORLDMANIFOLD=function(){

   w= b2.mW()

    w.ba()

    numPoints = 1000000

  //  setInterval(function(){ $l(numPoints) }, 100)

    w.begin(function(c){

        contact = c



        manifold = c.GetManifold()
        //normal manifold contains all info...

      //  numPoints = manifold.m_pointCount

        //...world manifold is helpful for getting locations

 //   m =  c.GetWorldManifold( manifold )



     //   _.times(numPoints,function(i){   w.stage.dot(   worldManifold.points[i].x,   worldManifold.points[i].y  )   })


    })

}

ONEWAYWALL=function(){z()

    w=b2.mW()

    p = w.player('jumper')



  //  Both PreSolve and PostSolve give you a b2Contact pointer, so we have access to the same points and normal information we just looked at for BeginContact. PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated, or even to cancel the response altogether, and from PostSolve we can find out what the collision response was.

   //     Here are the alterations you can make to the contact in PreSolve:

  //SetEnabled(bool flag);//non-persistent - need to set every time step


    c.SetFriction( friction)  // persists for duration of contact
    c.SetRestitution(  restitution)   //persists for duration of contact
    c.SetEnabled(false)

    // will disable the contact,
    // meaning that the collision response that normally would have been applied will be skipped.
    // You can use this to temporarily allow objects to pass through each other
    // . A classic example of this is the one-way wall or platform,
    // where the player is able to pass through an otherwise solid object,
    // depending on various criteria that can only be checked at runtime,
    // like the position of the player and which direction direction they are heading, etc.



    //    It's important to note that the contact will revert back to being enabled in the next time step,
    // so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.



}

WORLDMAN=function(){
contact = {}


    contact.GetWorldManifold= function (worldManifold) {
         bodyA = this.m_fixtureA.GetBody();
       bodyB = this.m_fixtureB.GetBody();
        shapeA = this.m_fixtureA.GetShape();
        shapeB = this.m_fixtureB.GetShape();

        worldManifold.Initialize(
            this.m_manifold,
            bodyA.GetTransform(),
            shapeA.m_radius,
            bodyB.GetTransform(),
            shapeB.m_radius
        )

    }
}
