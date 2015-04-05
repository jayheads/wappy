l = b2d.Dynamics.b2ContactListener.prototype
l.begin = l.beginContact= l.b =function(func){
    this.BeginContact = func
    return this}
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
cx.A=function(){return this.GetFixtureA()}
cx.B=function(){return this.GetFixtureB()}
cx.a=function(){return this.A().body()}
cx.b=function(){return this.B().body()}

cx.includes=function(what,func){
    var cx=this,
        fA = cx.A(),
        fB = cx.B()

    if( F(func) ){

        if(fA.of(what)){

              _.bind(func,fA)(fB, cx)
        }

        else if(fB.of(what)){
             _.bind(func,fB)(fA, cx)
        }
    return this}


    if(fA.of(what)){ return [fA, fB] }
    if(fB.of(what)){ return [fB, fA] }

return false}


cx.between=function(p1,p2,func){
    var cx=this, fA= cx.A(), fB=cx.B()
    if( F(func) ){

        if(fA.of(p1) && fB.of(p2)){

            return _.bind(func, fA)(fB, cx) || cx
        }

        if(fB.of(p1) && fA.of(p2)){
            return _.bind(func,fB)(fA, cx) || cx
        }
    }
    if(fA.of(p1) && fB.of(p2)){return [fA,fB]}
    else if(fB.of(p1) && fA.of(p2)){return [fB,fA]}
return false}

cx.with=function(a,b,c){
    if(U(b) || F(b) ){return this.includes(a,b)}
    return this.between(a,b,c)}
//cx.excludes=function(u){return !this.includes(u)}







TAG=function(){w=b2d.W({g:0}).debug().fadeTitle('i like how the ball bounces')  //w.show(function(){ return y.getClasses() + ' (' + y.classCount() + ')'})



    y = w.ship(100,100)

    _.times(10,function(){
        w.circ(600,300,40,'b').rest(.8).linDamp(.1).addClass('blueBall')
    })

    w.with('blueBall', function(other){var vel

        if(other.of('ship')){

            w.each(function(b){
                    if(b.isStat() &&  b.hasClass('ball') ){
                        b.dyn(true)
                        b.C('b') }
                }

            )}

        if(other.of('bul')){
            this.stat()
            this.body().C('p')
        }

    })

}




cx.destroy = cx.destroyBoth = function(){
    this.a().setDestroy()
    this.b().setDestroy()
    return this
}
cx.destroyIf=function(kind){
    this.a().setDestroyIf(kind);
    this.b().setDestroyIf(kind)
}
cx.destroyOtherIf=function(kind){
    var a=this.a(), b=this.b()
    if(a.is(kind)){b.setDestroy()}
    else if(b.is(kind)){a.setDestroy()}
}



cx.bCo =cx.bindCo = cx.bindController = function(what){var cx=this,fixt
    //if any fixt collides with a certain kind
    //switch to the controller with that name
    _.each(arguments,
        function(what){
            if(fixt = cx.with(what)){
                fixt.switchTo(window[what])}})


}



cx.man = cx.wM = cx.worMan = cx.worldManifold=function(){
    var m = b2d.worldManifold()
    this.GetWorldManifold( m )
    return m
}

//*** this is the collision center!!!!
cx.point=cx.V = function(){return this.man().m_points[0].mult()}

cx.norm = function(){var norm
    norm = this.man().m_normal.toFixed(2)
    return norm}

cx.linVel = function(bod){
    return bod.linVelWor(this.point())
}

//By convention in Box2d, the collision normal (for both the world manifold and the contact manifold) points from A to B -


//gets the linVel at time of collision!
cx.vA = function(){return this.linVel( this.a() )}
cx.vB = function(){return this.linVel( this.b() )}



cx.iE=function(){return this.IsEnabled()}//Has this contact been disabled?



// ??? do i use any of below???
cx.continuous =c.iC=function(){return this.IsContinuous()}//Does this contact generate TOI events for continuous simulation


cx.enabled = c.sE=function(a){
    this.SetEnabled(a?true:false);return this
} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
cx.sensor = c.iS=function(){return this.IsSensor()}//Is this contact a sensor?
cx.setSensor  =c.sS=function(a){this.SetSensor(a?true:false);return contact}// Change this to be a sensor or-non-sensor this.

cx.touching = c.iT=function(){
    return this.IsTouching()
}//Is this contact touching.
//cx.manifold =c.gM=function(){return this.GetManifold()}
cx.localPlaneNormal =c.lPN=function(){return this.gM().m_localPlaneNormal}
cx.localPoint =c.lP=function(){return this.gM().m_localPoint}
cx.pointCount = c.pC=function(){return this.gM().m_pointCount}
cx.points =c.p=function(){return this.gM().m_points}
cx.type =c.t=function(){return this.gM().m_type}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
cx.next =c.gN=function(){return this.GetNext()}//Get the next contact in the world's contact list.




cx.filtering =c.fFF=function(){//whats the point?
    this.FlagForFiltering();
    return contact}// Flag this contact for filtering.
// Filtering will occur the next time step.



cx.center=function(){
        var centerA =  this.A().center(),
            centerB =  this.B().center()
        return Math.lineCenter(centerA, centerB)}






b2d.neither = function(body1, body2){
    return {
        is: function(data){return !body1.is(data) && !body2.is(data)}
    }
}

b2d.either = function(body1, body2){
    return {is: function(data){return body1.is(data) || body2.is(data)}}}



COLLIDE=  function(){w=b2d.W()

    w.platform(400,500,40,20)
    w.ball(440,100,50).K('dot')

    w.coll('ball', 'platform', function(){ w.box(300,20) })
    w.coll('box', 'platform', function(){w.ball(300, 20 )})
    w.coll('dot',   function(cx){ cx.b().dot() })

    // w.collide('box', 'platform')
    //  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}



BEGIN=function(){w=b2d.W()

    w.ball()

    w.on('new',
        function(){
            w.ball(300,100,2)
        })

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

    w.dyn(500,300,[
            centerFx,
            b2d.poly(60,90,0,40,10).sensor(true).K('sensor1')
        ]).angVel(100)

    w.dyn(700,300,[
        centerFx,
        b2d.circ(100).sensor(true).K('sensor2')
    ]).angVel(100)

    w.coll('sensor1','sensor2',
        function(){
            w.ball(100,100,100)
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



DYNAMICFILTER=function(){w=b2d.W().debug()

    //Changing the collision filter at run-time
        //You can change each of the categoryBits, maskBits, groupIndex
        // by setting a new b2Filter in the fixture.
        // Quite often you only want to change one of these,
        // so it's handy to be able to get the existing filter first,
        // change the field you want, and put it back.
        // If you already have a reference to the fixture you want to change, this is pretty easy:

    //get the existing filter

   b= w.circ(300,300, 200,'b').rest(4).I(100,0)

    fixt = b.list()

    setTimeout(function(){
        filter = fixt.GetFilterData()
        filter.categoryBits = 0
        // filter.maskBits = ...;
        // filter.groupIndex = ...;
        fixt.SetFilterData(filter)  //and set it back
        w.dot(100,100)
    }, 2000)



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

b2d.cxFilt = b2d.filter = b2d.f= function(){//used?
    var f=new BXD.b2ContactFilter
    f.rC =f.RayCollide
    f.sC =f.ShouldCollide
    return f}


b2d.filt =b2d.filterData =  function(){
    var d = new b2d.Dynamics.b2FilterData()
    d.gI=function(a){

        if(U(a)){return d.groupIndex}

        d.groupIndex=a; return d}
    d.cat=function(a){
        if(U(a)){return d.categoryBits}
        d.categoryBits=a; return d}
    d.mask=function(a){

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
    impulses.n= impulses.nI=function(){return impulses.normalImpulses}
    impulses.t= impulses.tI=function(){return impulses.tangentImpulses}
    return impulses}








//****
ONEWAYPLATFORM=function(){W().P()
    //  Both PreSolve and PostSolve give you a b2Contact pointer,
    // so we have access to the same points and normal information we just looked at for BeginContact.
    // PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated,
    // or even to cancel the response altogether,
    // and from PostSolve we can find out what the collision response was.


    //     Here are the alterations you can make to the contact in PreSolve:


    //  c.SetFriction( friction)  // persists for duration of contact
    //  c.SetRestitution(  restitution)   //persists for duration of contact

    //  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
    // will disable the contact,
    // meaning that the collision response that normally would have been applied will be skipped.
    // You can use this to temporarily allow objects to pass through each other
    // . A classic example of this is the one-way wall or platform,
    // where the player is able to pass through an otherwise solid object,
    // depending on various criteria that can only be checked at runtime,
    // like the position of the player and which direction direction they are heading, etc.
    // It's important to note that the contact will revert back to being enabled in the next time step,
    // so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.

    pf = w.S(300, 300, 'o', 500, 40).K('platform')

   // p = w.player('symmetrical').fixRot()
    p.K('player')
   // w.ball()
    w.pre(function(cx){$l('pre')

        cc=cx
        //if(cx.with('platform','player')){
         //   if( p.Y() > pf.Y() ){
                cx.SetEnabled(false)// }
       // }
    })
}


//***
THROTTLE=function(){ w = b2d.W()
    ball = w.ball(300,300, 100)
    brick = w.brick(300,500)

    time = 0

    setInterval(function(){time++}, 1000)
    cjs.tick(function(){
        if(w.flagged('moveBrick')){
            brick.X( 20 , '+' )
        }})

    lastTime=0
    change = 0
    w.begin(function(con){
        if(con.with('brick')){
            if(lastTime!=time){lastTime=time;
                w.flag('moveBrick')}}


    })



}

POINTY=function(){w = b2d.W()

      w.ball(300,300, 100)
      w.ball(300,300, 100)
     w.brick(600,320)

    w.begin(function(cx){


                markAABB(cx.A())
                markAABB(cx.B())




    })


   function markAABB(fixt){

        ab = fixt.GetAABB()

        lb = ab.lowerBound
        up = ab.upperBound

        lx =   lb.x* 30
        ly =  lb.y * 30
        ux =  up.x* 30
        uy =   up.y* 30
        dx = ux - lx
        dy = uy - ly


        w.dot('b', ux, uy)
        w.dot('p', lx, ly)

    }





}

COLLCENTER=function(){w = b2d.W()

    ball = w.ball(300,300, 200)

    brick = w.bumper(700, 320)

    w.beg(function(cx){var fA = cx.A(), fB = cx.B()

                w.dot( fB.center())
                w.dot(  fA.center() )
                w.dot('b', cx.center())
             })


w.chalk('here you can clearly see that the center of the two fixtures',
'is not necessarily the same as the contact point,',
'and can only represent collision center if fixtures are similar size.',
'..perhaps halfway between this and the actual contact point would be nice')

}

b2d.man=b2d.manifold = b2d.worldManifold = function(){return new b2d.Collision.b2WorldManifold()}

CONTACTPOINT=function(){w=b2d.W()
    w.ball()
    w.ball()
    w.ball()
    w.ball()
    w.brick(200,500,200,50)
    w.beg(function(cx){w.dot(cx.point())})
    w.chalk('so finding the actual contact point aint hard after all..')}

VEL=function(){w=b2d.W({g:1})


    w.ball(500,300,10).K('tim').den(1)

    me = w.ball(700,300, 80).K('me').den(1)

    w.beg( function(cx){

        cx.with('tim', function(other,cx){

            if( cx.a().is('tim') ){   me.linVel( cx.vA()  )  }

            else {  me.linVel( cx.vB()  )  }

        })




        //this gets th actual velocity of body A at moment of collision !!!!!!!

        // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!

        })








}
VEL1=function(){b2d.W({g:2})

    b = w.ball(100, 100).den(1)
    b.poly(20,100).den(1)

    b2 = w.ball(400, 400).den(1)

    b3= w.ball(100,100,10)

    cjs.tick(function(){

        v = b.linVelWor( b )

        b2.linVel( v.div(10)   )

        //$l(b.linVel())

      //  v = b3.linVel()
      //  vw = b3.linVelWor()
     //   vl = b3.GetLinearVelocityFromLocalPoint()
        //$l('vel: ' + v.x)
        //$l('velW: ' + vw.x)
       // $l('velL: ' + vl.x)
    })
}

NORM=function(){w=b2d.W({g:0}).startKilling()

    n = V()

    w.ball(300,300).K('stat').stat()
    w.ball()
    w.box()

    w.beg(function(cx){

        if( cx.with('stat') ){

            m = cx.man()
            n = m.m_normal

            setTimeout(function(){
                w.ball(600,300,10).I(n)
            }, 100)
        }


    })

  //  w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })

}



IMPACTVELSTAT=function(){w=b2d.W({g:0}).startKilling()

    n = V()
    b=w.ball()

    b1=w.ball(300,300).K('stat').stat()


    w.beg(function(cx){

        if( cx.with('stat') ){

            m = cx.man()
            n = m.m_normal
            p = cx.point()

            v1 = b.GetLinearVelocityFromWorldPoint( p )
            v2 = b1.GetLinearVelocityFromWorldPoint( p )
            impactVelocity = V(
                v1.x - v2.x,
                v1.y - v2.y
            )

            setTimeout(function(){
                w.ball(600,300,10).I(impactVelocity)
            }, 100)
        }

    })

}


IMPACTVEL=function(){w=b2d.W({g:0}).startKilling()

    n = V()

    b = w.ball()

    b1 = w.ball(300,300)


    w.beg(function(cx){

        if( cx.with(b,b1) ){

            m = cx.man()
            n = m.m_normal
            p = cx.point()

            v1 = b.GetLinearVelocityFromWorldPoint( p )
            v2 = b1.GetLinearVelocityFromWorldPoint( p )
            impactVelocity = V(
                    v1.x - v2.x,
                    v1.y - v2.y
            )

            setTimeout(function(){
               var temp= w.ball(600,300,10).I(impactVelocity)


                setTimeout(function(){
                    temp.kill()

                }, 500)

            }, 100)
        }

    })

}

WORLDVEL=function(){
    w=wor({
        mJ:false,

        g:0
})

  b=  w.ball(300, 300,150).den(1)
b2=w.ball(300,300,10)
    w.rev(b,b2

    )

    p1 = V(300,300)
    p2 = V(360,360)
    p3 = V(450,450)

    w.dot(p1)
    w.dot(p2)
    w.dot(p3)

  //  b.ApplyTorque(10)

  //  b.linVel(.2,0)

    w.click(function(x,y){

      v =  b.linVelWor(x, y)

        $l(v.x  + ' '  + v.y )

    })

    b.angVel(1)
}










YELLOWSHIP=function(){

        var w=b2d.W({g:4}).debug()



     var   y = w.yShip(300, 400, 3).rot(90)


     var   y1 = w.yShip(600, 400,3).rot(90)

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
        .startKilling().debug()
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

    w=b2d.W({g:0}).debug().startKilling().beg(function(cx){

            if(cx.with('bul','bad')){
                cx.a().K('destroy')
                cx.b().K('destroy')
            }

    })


    _.times(100, function(){

        window['y'+ n++] =  w.yShip(x+=4,Y+=2, 3).chug(5)
            .K('bad').shootOnInt(300, 'bul').rot(45)

    })



}



YELLOWSHIPWTF=function(){

    var w=b2d.W({g:3}).debug()

    y = w.yShip(300, 400, 3)

    y.dir=function(){

        var v = this.GetWorldVector(
            V(
                Math.toRadians(0),
                Math.toRadians(90)
            )
        )

        v.x = Math.toDegrees( v.x )
        v.y = Math.toDegrees( v.y )

        return v}

    I(function(){

        var v = y.dir()

        $l( v )

        y.I(0, v.y/100) .rot(1, '+')

    }, 100)


}





FILTDAT=function(){w = b2d.W()

    w.B(400,400,30).grp(-1)
    w.B(400,400,40).grp(-1)
    w.B(400,400,50).grp(-1)

    w.B(400,400,50,50).grp(-2)
    w.B(400,400,60,60).grp(-2)
    w.B(400,400,70,70).grp(-2)

    //w.right.grp(-1)

}




FILTSENS =function(){w = b2d.W()

    b = w.B(400,400,30).sen()



    //w.right.grp(-1)

}
