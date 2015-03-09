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

/////////////////////////////////////////////

cx =c = b2d.Dynamics.Contacts.b2Contact.prototype
cx.filtering =c.fFF=function(){this.FlagForFiltering(); return contact}// Flag this contact for filtering.// Filtering will occur the next time step.
cx.A=function(){return this.GetFixtureA()  }
cx.B=function(){return this.GetFixtureB()  }

cx.a=function(){ return this.A().gB()   }

cx.b=function(){ return this.B().gB()   }

cx.destroy = cx.destroyBoth = function(){

    this.a().setDestroy()
    this.b().setDestroy()
return this}


cx.bindCo = function(what){var cx=this,fixt

    //if any fixt collides with a certain kind
    //switch to the controller with that name

    _.each(arguments,
        function(what){

        if(fixt = cx.with(what)){
            fixt.switchTo(window[what])
        }

    })


}





// ??? do i use any of below???
c.manifold =c.gM=function(){return this.GetManifold()}
c.localPlaneNormal =c.lPN=function(){return this.gM().m_localPlaneNormal}
c.localPoint =c.lP=function(){return this.gM().m_localPoint}
c.pointCount = c.pC=function(){return this.gM().m_pointCount}
c.points =c.p=function(){return this.gM().m_points}
c.type =c.t=function(){return this.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
c.next =c.gN=function(){return this.GetNext()}//Get the next contact in the world's contact list.




c.wM = c.worMan=c.worldManifold=function(){
    var m=b2d.worldManifold()
    this.GetWorldManifold(m)
    return m
}

c.norm = function(){var norm

    norm = this.worMan().m_normal.toFixed(2)

return norm}

c.V = function(){
   return this.worMan().m_points[0].mult()
}

//gets the linVel at time of collision!
c.vA=function(){
   return this.a().GetLinearVelocityFromWorldPoint( this.V() )

}

c.vB=function(){

    return this.b().GetLinearVelocityFromWorldPoint( this.V() )

}






c.continuous =c.iC=function(){return this.IsContinuous()}//Does this contact generate TOI events for continuous simulation
c.iE=function(){return this.IsEnabled()}//Has this contact been disabled?
c.enabled = c.sE=function(a){
    this.SetEnabled(a?true:false);return this
} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
c.sensor = c.iS=function(){return this.IsSensor()}//Is this contact a sensor?
c.setSensor  =c.sS=function(a){this.SetSensor(a?true:false);return contact}// Change this to be a sensor or-non-sensor this.

c.touching = c.iT=function(){
    return this.IsTouching()
}//Is this contact touching.






c.between = c.isBetween =  function(p1, p2){
      var a= this.A(), b= this.B()


    if (a.of(p1) && b.of(p2)) {return [a,b]}

    if (b.of(p1) && a.of(p2)) {return [b,a]}

}
//c.eitherIs= c.eitherBodyIs = function( u){return this.a().K() == u  || this.b().K() ==u}
c.includes = c.eitherOf=  function( u){
    if(this.A().of(u)){ return this.B()}
    if(this.B().of(u)){ return this.A()}
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

   return this.worldManifold().m_points[0].mult()

}



WITH=function(){w= b2d.mW()

        w.ball()

       w.brick(500)



      w.beg(function(cx){
          if(cx.with('ball','brick')){alert('hit')}
      })



  }








COLLIDE=  function(){w=b2d.W()


    w.platform(400,500,40,20)
    w.ball(440,100,50).K('dot')
    w.ball(440,200,20)

    w.coll('ball', 'platform', function(){w.box(300,20)})

    w.coll('box', 'platform', function(){w.ball(300, 20 )})


    w.coll('dot',

        function(cx){

            collX = cx.b().X()

            collY = cx.b().Y()

            w.stage.dot(collX, collY)

        })



    // w.collide('box', 'platform')
    //  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}


BEGIN=function(){w=b2d.W()

    w.ball()

    w.on('new',
        function(){
            w.ball(300,100,2)})

    w.beg(function(){

        w.flag('new')

    })

}





//post
POSTSOLVE=function(){//only breaks at high impulse

    w=b2d.mW()

    b = w.ball()

    cjs.tick(function(){

        if(w.flagged('newBall')){
            w.ball()
        }


    })


    w.post(

        function(contact, contactImpulse){ //second arg??


            d = contactImpulse

        n = normalImpulses = contactImpulse.normalImpulses
        nX =  Math.floor(normalImpulses[0])
        nY =  Math.floor(normalImpulses[1])

        t = tangentImpulses = contactImpulse.tangentImpulses
       tX = Math.floor( t[0])
        tY = Math.floor(t[1]  )


         $l('normal: '+ tX + ', '+ tY + ' tangent: ' + nX + ', '+ nY  )


        if(nX > 200){w.flag('newBall') }

    }

    )


  //we can get the 'normal vector' of the contact btwn fixtures

}
CONTACTS=function(){makeWorld()

    var centerFx = b2d.circ(80).K('center')

    w.A(b2d.dynamic(500,300),[
            centerFx,
            b2d.poly(60,90,0,40,10).sensor(true).K('sensor1')
        ]).angVel(100)

    w.A(b2d.dynamic(700,300),[
        centerFx,
        b2d.circ(100).sensor(true).K('sensor2')
    ]).angVel(100)


    w.coll('sensor1','sensor2',
        function(){
            w.ball()
        })  //w.begin(function(cx){if(cx.with('sensor1','sensor2')){w.flag('new')}}) //w.on('new', function(){w.ball()})

}


BITS=function(){b2d.mW()

    var cir = b2d.circ(80).bits(2, 5), //collides with 4,1

        rec = b2d.poly(60,90).bits(4,7)  // collides with 4,2,1


    w.dyn(300,300, cir)
    w.dyn(400,30,  cir)
    w.dyn(300,300, rec)
    w.dyn(400,300, rec)

}



GROUP=function(){b2d.mW()


    w.dyn(300,300, b2d.circ(80).bits(2, 5))  // colls 4,1

    w.dyn(300,300, b2d.poly(60,90,0,40,10).bits(8, 3)) //colls 2,1


    w.dyn(400,300 ,  b2d.circ(80).cat(2).group(-3)) //cat 1

    w.dyn(400,300 ,  b2d.poly( 60, 90, 0, 40, 10 ).group( -3 )) //cat 1

}




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

            if(con.with('brick')){//w.flag('moveBrick')

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

POINTY=function(){b2d.W()

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

            if(con.with('brick')){//w.flag('moveBrick')

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
            if(con.with('bumper')){
                a=con.A()
                b= con.B()
                w.s.dot(b.center())
                w.s.squareDot( a.center() )
                w.s.dot('b',con.center())}}})}

COLLCENTER=function(){w = b2d.W()

    ball = w.ball(300,300, 200)

    brick = w.bumper(700, 320)

    time = 0
    setInterval(function(){time++}, 1000)
    lastTime=-1
    change = 0

    w.begin(function(con){
        if(lastTime!=time){lastTime=time;
            $l(change++)

            if(con.with('bumper')){

                    a=con.A();  b= con.B()
                w.s.dot(b.center())
                w.s.squareDot( a.center() )
                w.s.dot('b',con.center())
            }}})



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
        p    = m.m_points[0].mult()



        //$l(n.x + ' - ' + n.y)


        if(c.isBetween('ball', 'ball')){
            w.s.dot(c.point())
        }



    })

    w.s.chalk('so finding the actual contact point aint hard after all..')
}





NORMAL=function(){w=b2d.W({g:0}).beg(begFunc)
    .chalk(
    'm:  worlManifold',
    'n:  m.m_normal',
    'p:  m.m_points[0].mult()'
)



    w.bump(300, 300,60).K('ball')

    a1 = w.bump(50, 545).K('ball')
    a2 = w.bump(1150,50).K('ball')

    tim = w.ball(500,300).bindSprite('guy').K('tim')

    me = w.ball(700,300).bindSprite('me').K('me')


    function begFunc(cx){if(cx.with('tim', 'ball')){c = cx

        w.dot('green', cx.point())

        worMan  = cx.worMan()

        norm  = cx.norm()

        collV = cx.V()

        w.dot('w', collV)



        //a3.I(n.x*10, n.y*10  )
        //a2.I(-n.x*20, -n.y*10  )
        //a1.I(-n.x*200, -n.y*100)

        Math.abs(collV.x *= 30)
        Math.abs(collV.y *= 30)



        //this gets th actual velocity of body A
        //at moment of collision !!!!!!!


        v = cx.vA()


        $l(v)
       // w.dot(  v )

        me.linVel(v.x, v.y)  // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!

    }}






}



WORVEL=function(){b2d.W({g:0})



    b = w.ball(100, 100)
    b2 = w.ball(400, 400)

   // w.dot(200,200)


   cjs.tick(function(){

v =b.velWor(b2.X(), b2.Y())
       b2.linVel(
           v.div(4)

       )


     //  w.pen(v.x + '      ' + v.y)


       $l(b.linVel())
   })


}




VEL=function(){

    b2d.W()

    b= w.ball(100,100)



    cjs.tick(function(){

        v = b.linVel()
        vw = b.velWor()
        vl = b.GetLinearVelocityFromLocalPoint()

        $l('vel: ' + v.x)
        $l('velW: ' + vw.x)
        $l('velL: ' + vl.x)
    })

}






YELLOWSHIP2=function(){

        var w=b2d.W({g:4})



     var   y = $ys(300, 400, 3).rot(90)


     var   y1 = $ys(600, 400,3).rot(90)

    var    onInt=function(){
            y.I(0, -.7).rot(4, '+')
            y1.linVel(0, -3).rot(4,'+')
        }
      //  setInterval(onInt,500)

      var  onTime=function(){

            y.I(0,-4)
            y1.I(4,0)
            //  .I(0.-4)

        }

       setTimeout(onTime, 500)



    }

YELLOWSHIPWATCH=function(){

//ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
    I(YELLOWSHIP, 1000)
}






TOURNEY=function(){var n = 0, x=50, Y=50

   w=b2d.W({g:0})
    .startKilling()//.debug()
    .beg(function(cx){

        if(cx.with('guyBul','bad')){

            cx.a().K('destroy')
            cx.b().K('destroy')
        }



        if(cx.with('badBul','guy')){



             cx.a().K('destroy')
             cx.b().K('destroy')

        }})



    y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
        .rest(0).fric(1).K('guy')
        .shootOnSpace('guyBul')
        .thrustControl()


    _.times(6, function(){

        window['y'+ n++] =  w.yShip(x+=50, Y+=50,3).chug(5)
            .K('bad').shootOnInt(1000, 'badBul').rot(45)

    })



}

SPACEBALL=function(){

    w=b2d.W({g:0})
        .startKilling()//.debug()
        .beg(function(cx){

            if(cx.with('guyBul','bad')){

                cx.a().K('destroy')
                cx.b().K('destroy')
            }})





    y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
        .rest(0).fric(1).K('guy')
        .shootOnInt(200)
        .thrustControl()

      //    b=  w.ball(200,200, 80).den(1)

    b=  w.rect(200,200, 150, 150).den(1)


}


WAR=function(){var n = 0, x=50, Y=50

    w=b2d.W({g:0})
        .startKilling()//.debug()
        .beg(function(cx){

            if(cx.with('bul','bad')){

                cx.a().K('destroy')
                cx.b().K('destroy')
            }})


    _.times(100, function(){

        window['y'+ n++] =  w.yShip(x+=1, Y+=1, 3).chug(5)
            .K('bad').shootOnInt(300, 'bul').rot(45)

    })



}



YELLOWSHIPWTF=function(){

    var w=b2d.W({g:3})



    y = $ys(300, 400, 3)


    y.dir=function(){

        var v = this.GetWorldVector( V(Math.toRadians(0),  Math.toRadians(90)) )

        v.x = Math.toDegrees( v.x )
        v.y = Math.toDegrees( v.y )

        return v}





    I(function(){

        var v = y.dir()


        $l( v )

        y.I(0, v.y/100)

        y.rot(1, '+')




    }, 100)


}
