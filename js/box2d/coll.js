l = b2d.Dynamics.b2ContactListener.prototype
l.begin = l.beginContact= l.b =function(func){
    this.BeginContact = func
    return this

}


l.end = l.endContact= l.e =function(func){
    this.EndContact=func; return this}
l.pre = l.preSolve = l.p  =function(func){
    this.PreSolve = func; return this}
l.post = l.postSolve=l.P=function(func){
    this.PostSolve=func; return this}
b2d.either = function(ob1,ob2, is1,is2){
    return (ob1.is(is1) && ob2.is(is2))||
        (ob1.is(is2) && ob2.is(is1))}
b2d.L = b2d.listener=b2d.contactListener= function(){
    var l = new b2d.Dynamics.b2ContactListener
    return l}



c = b2d.Dynamics.Contacts.b2Contact.prototype
c.filtering =c.fFF=function(){this.FlagForFiltering(); return contact}// Flag this contact for filtering.// Filtering will occur the next time step.
c.A=function(){return this.GetFixtureA()  }
c.B=function(){return this.GetFixtureB()  }

c.a=function(){ return this.A().gB()   }

c.b=function(){ return this.B().gB()   }


c.manifold =c.gM=function(){return this.GetManifold()}
c.localPlaneNormal =c.lPN=function(){return this.gM().m_localPlaneNormal}
c.localPoint =c.lP=function(){return this.gM().m_localPoint}
c.pointCount = c.pC=function(){return this.gM().m_pointCount}
c.points =c.p=function(){return this.gM().m_points}
c.type =c.t=function(){return this.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
c.next =c.gN=function(){return this.GetNext()}//Get the next contact in the world's contact list.
c.worldManifold =c.gWM=function(){return this.GetWorldManifold()}
c.continuous =c.iC=function(){return this.IsContinuous()}//Does this contact generate TOI events for continuous simulation
c.iE=function(){return this.IsEnabled()}//Has this contact been disabled?
c.enabled = c.sE=function(a){
    this.SetEnabled(a?true:false);return this
} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).

c.sensor = c.iS=function(){return this.IsSensor()}//Is this contact a sensor?
c.setSensor  =c.sS=function(a){this.SetSensor(a?true:false);return contact}// Change this to be a sensor or-non-sensor this.
c.touching = c.iT=function(){return this.IsTouching()}//Is this contact touching.



c.between = c.isBetween = c.touching =c.pair=function(p1, p2){
      var a= this.A(), b= this.B()


    if (a.of(p1) && b.of(p2)) {return [a,b]}

    if (b.of(p1) && a.of(p2)) {return [b,a]}

}


//c.eitherIs= c.eitherBodyIs = function( u){return this.a().K() == u  || this.b().K() ==u}
c.includes = c.eitherOf=  function( u){
    if( this.A().of(u)  ){return this.A() }

    if( this.B().of(u) ){return this.B() }
}


// ******!!!!!!
c.with=function(a,b){
    if(!b){return this.includes(a)}
    return this.between(a,b)
}
///**!!!!!



c.excludes=function(u){return !this.includes(u)}
c.destroyIf=function(kind){
    this.a().setDestroyIf(kind);
    this.b().setDestroyIf(kind)

}
c.destroyOtherIf=function(kind){

    var a=this.a(), b=this.b()

    if(a.is(kind)){
        b.setDestroy()}

    else if(b.is(kind)){
        a.setDestroy()}

}
b2d.neither = function(body1, body2){
    return{is: function(data){return !body1.is(data)&&!body2.is(data)}}
}
b2d.either = function(body1, body2){
    return {is: function(data){return body1.is(data) || body2.is(data)}}}

c.center=function(){


        var centerA =  this.A().center(),
            centerB =  this.B().center()
        return Math.lineCenter(centerA, centerB)

}
c.point=function(){

   return this.worldManifold().m_points[0].$()

}
c.worldManifold=function(){
var m =b2d.worldManifold()
    c.GetWorldManifold(m)
return m}



ISBETWEEN=function(){z()

      w= b2d.mW()

      bl = w.ba().uD('bl')

      br = w.bi().uD('br')


      w.begin(function(contact){

          c=contact
          if(contact.isBetween('bl','br')){alert('hit')}
      })


  }


  // SuperContact = sCon=function(contact){  var  c=contact ;return contact}

//begin
LAVACOLLIDE=  function(){z()
    w=b2d.mW()
    w.platform(400,500,40,20)
    w.ball(440, 40 )


    w.collide('ball', 'platform', function(){w.box(300,40)})
    w.collide('box', 'platform', function(){w.ball(300, 40 )})

    // w.collide('box', 'platform')
    //  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}
COLLIDEANY=  function(){z()
    w=b2d.mW()
    w.platform(400,500,40,20)
    w.ball(440,200)
    w.collideAny('ball',
        function(cx){c=cx
            collX=cx.B().gB().X()
            collY=cx.B().gB().Y()
            w.stage.dot(collX, collY)})


    // w.collide('box', 'platform')
    //  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}


//post
POSTSOLVE=function(){//only breaks at high impulse

    w=b2d.mW()

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

    b2d.mW()

    w.ba()

    cjs.tick(
        function(){
            if(STATE.newBall){w.ba()}
            STATE.newBall=false})

    w.pre( function( contact, manifest ){  c=contact;  m=manifest })

    //second pam is really info about previous collision manfest?  may be usesless?!!!!

}



CONTACTS=function(){makeWorld()

    var centerFx = b2d.circDef(60).uD('center')

    t1 = w.A(
        b2d.dynamicDef(500,300), [
        centerFx,  b2d.polyDef(60,90,0,40,10).uD('sensor1').sensor(true)
    ]).angVel(100)


    t2= w.A(b2d.dynamicDef(700,300), [
        centerFx, b2d.circDef(100).sensor(true).uD('sensor2')
    ]).angVel(100)


     w.listen(b2d.listener().begin(onBegin))


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
BITS=function(){b2d.mW()
    cir = b2d.circDef(80).category(0x0002).mask(0x0005),
    rec = b2d.polyDef( 60, 90, 0, 40, 10 ).category(0x0003).mask(0x0003)
    w.A( b2d.dynamicDef(300,300), cir )
    w.A( b2d.dynamicDef(400,300), cir )
    w.A( b2d.dynamicDef(300,300), rec )
    w.A( b2d.dynamicDef(400,300), rec )}
GROUPINDEX=function(){b2d.mW()
    cir = b2d.circDef(80).category(0x0002).mask(0x0005)
    rec = b2d.polyDef(60,90,0,40,10).category(0x0003).mask(0x0003)
    world.A(b2d.dynamicDef(300,300), cir)
    world.A(b2d.dynamicDef(300,300), rec)
    cir = b2d.circDef( 80 ).gI( -3 )
    rec = b2d.polyDef( 60, 90, 0, 40, 10 ).gI( -3 )
    world.A( b2d.dynamicDef( 400, 300 ), cir)
    world.A( b2d.dynamicDef( 400, 300 ), rec)}


//do any of these get used? i think filterData does
b2d.manager = b2d.contactManager = b2d.cM=function(){//used?
    var m= new BXD.b2ContactManager
    m.c= m.cl= m.Collide
    m.a= m.aP=m.AddPair
    m.f= m.fNC= m.FindNewContacts
    m.d= m.ds= m.Destroy
    return m}
b2d.filter = b2d.f= function(){//used?
    var f=new BXD.b2ContactFilter
    f.rC =f.RayCollide
    f.sC =f.ShouldCollide
    return f}
b2d.filterData = b2d.fD=function(d){//used?

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


b2d.superManifold =  function(m){//used????

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


  b2d.manifold = function(){
      return new b2d.Collision.b2WorldManifold()
  }





WORLDMANIFOLD=function(){

   w= b2d.mW()

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

    w=b2d.mW()

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
        )}
}
ONEWAYPLATFORM=function(){w=b2d.mW()
    pf=w.platform(300, 300, 500, 40  )
    p=w.player('symmetrical')
    w.ball()
    cjs.tick(function(){p.rot(0)})
    w.pre(function(cx){c=cx
        if(cx.isBetween('platform','player')){
            if(p.Y()>pf.Y()){cx.SetEnabled(false)}}})}
THROTTLE=function(){z()


    w = b2d.mW()

    ball = w.ball(300,300, 100)
    brick = w.brick(300,500)
    q = w.s.squareDot(400,100)
    
    
    
    time = 0

    setInterval(function(){time++}, 1000)
    cjs.tick(function(){
        if(w.flagged('moveBrick')){
            brick.X(brick.X()+20)}})


    lastTime=0
    change = 0
    w.begin(function(con){
        if(con.involves('brick')){
            if(lastTime!=time){lastTime=time;
                w.flag('moveBrick')}}


        c    = con
        m    = c.GetManifold()
        lpn  = m.m_localPlaneNormal
        lp   = m.m_localPoint
        pc   = m.m_pointCount
        p    = m.m_points
        t    = m.m_type
        a = c.A()
        b = c.B()



      //  point = getWorldPoint(a)

    })




    function getWorldPoint(fixt){

        ab = fixt.GetAABB()

        lb = ab.lowerBound
        up= ab.upperBound

        lx = 30*lb.x
        ly = 30*lb.y

        ux = 30*up.x
        uy = 30*up.y

        dx = ux - lx
        dy = uy -ly


        setInterval(function(){
        w.stage.dot('r', dx,dy )
        w.stage.dot('b', ux, uy)
        w.stage.dot('p', lx,ly)

    },1000)

    }

}
markAABB=function(fixt, shape) {

    shape = shape || 'circle'

    ab = fixt.GetAABB()

    lb = ab.lowerBound
    up = ab.upperBound
    lx = 30 * lb.x
    ly = 30 * lb.y
    ux = 30 * up.x
    uy = 30 * up.y
    dx = ux - lx
    dy = uy - ly

    if (shape == 'circle') {
        w.stage.dot('r', dx, dy)
        w.stage.dot('b', ux, uy)
        w.stage.dot('p', lx, ly)
    }

    if (shape == 'square') {
        w.stage.squareDot('r', dx, dy)
        w.stage.squareDot('b', ux, uy)
        w.stage.squareDot('p', lx, ly)
    }

}
POINTY2=function(){z()


    w = b2d.mW()

    ball = w.ball(300,300, 100)

    brick = w.brick(600,320)

    time = 0

    setInterval(function(){time++}, 1000)
    cjs.tick(function(){
        if(w.flagged('moveBrick')){

            brick.X(brick.X()+20)

            w.flag('draw')

        }})


    lastTime=-1
    change = 0


    w.begin(function(con){

        if(lastTime!=time){lastTime=time;$l(change++)

            if(con.involves('brick')){//w.flag('moveBrick')

            c    = con
            m    = c.GetManifold()


                lpn  = m.m_localPlaneNormal
            lp   = m.m_localPoint
            pc   = m.m_pointCount
            p    = m.m_points
            t    = m.m_type



                markAABB(c.A(), 'square')
                markAABB(c.B())
        }
    }


    })



    function getWorldPoint(fixt){ }

}
POINTY=function(){z()


    w = b2d.mW()

    ball = w.box(300,300, 60,160)

    brick = w.brick(600,320)

    time = 0

    setInterval(function(){time++}, 1000)
    cjs.tick(function(){
        if(w.flagged('moveBrick')){

            brick.X(brick.X()+20)

            w.flag('draw')

        }})


    lastTime=-1
    change = 0


    w.begin(function(con){

        if(lastTime!=time){lastTime=time;$l(change++)

            if(con.involves('brick')){//w.flag('moveBrick')

                c    = con
                m    = c.GetManifold()


                lpn  = m.m_localPlaneNormal
                lp   = m.m_localPoint
                pc   = m.m_pointCount
                p    = m.m_points
                t    = m.m_type


                c.A().GetAABB()

                markAABB(c.A(), 'square')
                markAABB(c.B())
            }
        }


    })



    function getWorldPoint(fixt){ }

}
COLLCENTER2=function(){z()
    w = b2d.mW()
    ball = w.box(300,300, 60,160)
    brick = w.bumper(600,320)

    time = 0
    setInterval(function(){time++}, 1000)
    lastTime=-1
    change = 0
    w.begin(function(con){
        if(lastTime!=time){lastTime=time;$l(change++)
            if(con.involves('bumper')){
                c = con, a=con.A(),  b= con.B()
                w.s.dot(b.center())
                w.s.squareDot( a.center() )
                w.s.dot('b',con.center())}}})}

COLLCENTER=function(){z()
    w = b2d.mW()

    ball = w.ball(300,300, 200)

    brick = w.bumper(700, 320)

    time = 0
    setInterval(function(){time++}, 1000)
    lastTime=-1
    change = 0
    w.begin(function(con){
        if(lastTime!=time){lastTime=time;$l(change++)
            if(con.involves('bumper')){
                c = con, a=con.A(),  b= con.B()
                w.s.dot(b.center())
                w.s.squareDot( a.center() )
                w.s.dot('b',con.center())}}})



w.s.chalk('here you can clearly see that the center of the two fixtures',
'is not necessarily the same as the contact point,',
'and can only represent collision center if fixtures are similar size.',
'..perhaps halfway between this and the actual contact point would be nice')

}


b2d.worldManifold = function(){
    return new b2d.Collision.b2WorldManifold()}


MANIF=function(){

    w=mW()

    b= w.ball()

    w.ball()
    w.ball()
    w.ball()
    w.ball()

    br = w.brick(200,500,200,50)

    w.begin(function(con){

        c=con
        m= c.worldManifold()
        n   = m.m_normal
        p    = m.m_points[0].$()



        //$l(n.x + ' - ' + n.y)


        if(c.isBetween('ball', 'ball')){
            w.s.dot(c.point())
        }



    })

    w.s.chalk('so finding the actual contact point aint hard after all..')
}

NORMAL=function(){

    w=mW({grav:0})

    a1 = w.ball(150,150)

    a2 = w.ball(300,300)
    a3 = w.ball(500,300).bindSprite('guy')

    w.begin(function(con){

        c=con
        m= c.worldManifold()
        n   = m.m_normal
        p    = m.m_points[0].$()

        //$l(n.x + ' - ' + n.y)

        if(c.isBetween('ball', 'ball')){

            w.s.dot('green', c.point())
            a3.I(n.x*10, n.y*10  )
            a2.I(-n.x*20, -n.y*10  )
            a1.I(-n.x*200, -n.y*100  )}

        coords = m.m_points[0]

        Math.abs(coords.x*=30)
        Math.abs(coords.y*=30)

      v=  c.a().GetLinearVelocityFromWorldPoint(coords)

        w.s.dot(v)


    })

    w.s.chalk('')
}

b2d.Common.Math.b2Vec2.prototype.$=function(){

    return {x:this.x*30, y:this.y*30}
}
