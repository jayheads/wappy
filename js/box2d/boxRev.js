jd = joint = b2d.Joints.b2RevoluteJointDef.prototype
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
jd.init =joint.i=function(){
    this.Initialize.apply(this,  G(arguments) )
    return this}

//convenience functions
jd.mot = jd.motor =  function(speed, torque, enable){
    this.speed(speed)
    this.maxTorque( N(torque)? torque : 100)
    if( enable != '-' ){
        this.enableMotor=true }
    return this }

jd.limits = joint.lm = function( lowAng, upAng, enable ){
    this.lowAng( lowAng ).upAng( upAng )
    if( enable != '-' ){
        this.enableLimit = true}
    return this }


j = b2d.Joints.b2RevoluteJoint.prototype

j.lim = j.limits =  function(a, b){var g=G(arguments);

    a=g[0], b=g[1]

    if(a===true){this.EnableLimit(true); return}

    this.SetLimits(Math.toRadians(a), Math.toRadians(b))
    if(g.N){this.EnableLimit(true)}

    return this}



j.mot = j.motor =   function(speed, torque, enable){
    this.SetMotorSpeed(speed)
    this.SetMaxMotorTorque( N(torque)? torque : 100000)
    if( enable != '-' ){
        this.EnableMotor(true) }
    return this }





RevoluteJointDefX = revX = function(a,b, c,d, e,f){var g=G(arguments)

    //pass in body1, body2, world-bV = body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


    var j=   new BXJ.b2RevoluteJointDef()

    var joint = j

    joint.init =joint.i = function(){
        joint.Initialize.apply(joint,  G(arguments) )
        return joint}

    //convenience functions
    joint.motor = joint.mt = function(speed, torque, enable){

        joint.speed(speed)

        joint.maxTorque( N(torque)? torque : 100)

        if( enable != '-' ){ joint.enableMotor=true }

        return joint }

    joint.limits = joint.lm= function( lowAng, upAng, enable ){

        joint.lowAng( lowAng ).upAng( upAng )

        if( enable != '-' ){ joint.enableLimit = true}

        return joint }

    if( U(c) ){ c = a.worldCenter() }

    if( O(c) ){  joint.init( a, b, c )}

    else if(N(e)){   joint.A(a).B(b).lAA( V(c/30,d/30)).lAB( V(e/30,f/30)) }

    else if(N(c)){    joint.init(a,b, V(c/30,d/30)) }

    //SuperJointDef( joint )

    return joint}




REVJOINT=function(){b2d.W()


    revJoint=function(){

        return w.rev(w.ball(), w.box())
    }
    revJoint()

    box = w.box(150,150)
    w.rev(w.bump(200,200), box)
    w.rev(box, w.ball(130,130))


   j=w.rev(
        w.bump(400, 200, 100).den(1),

        w.box(400, 200, 100).den(1)
    )

        //j.motor(true).speed(2000)

        j.EnableMotor(true)
        j.SetMaxMotorTorque(10000000)
        j.SetMotorSpeed(-2)





        w.rev(
            w.rect( 120, 50, 50,50, 'yellow' ),
            w.rect( 100, 50, 50,50,'black' )
        ).motor(2)



     w.rev(
        w.rect( 400, 30, 30, 50 ),
        w.rect( 400, 30, 30, 50 ) ).motor(3)

  fido =w.rev(

            w.rect( 400,30,10,80, 'purple' ),

           w.box( 400,30,20,160 )

        ).motor(10)


    w.rev(

        w.circ( 400,30,50, 'purple' ),

        w.rect( 400,30,20,160 ,'orange')

    ).motor(7)





}





Stuff={}


w.spinner=spinner=function(x,y,s,t){

    x = N(x)? x : 500

    y = N(y)? y : 200

    s = N(s)? s : 100

    t = N(t)? t : 100

    dial= w.box(x,y,200,40)//w.a(dBD(x,y), pFx(200,40))

    rock= w.brick(x,y,10,10)//w.a(sBD(x,y), pFx(10,10))

    return w.rev( dial, rock ).mot(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}


w.seesaw= seesaw=function(){

    anc = world.bi(400,300,60,60)

    lev = world.bi(400,300,300,20)

    world.createJoint(

        RevoluteJointDef(

            anc,  lev,  anc.worldCenter(),  lev.worldCenter()

        ).collide(0)
    )}





makeCar=function(){

    var car = w.rect(240,350,90,30)

    w.rev(    w.circ( 300, 400, 30  ),  car  ).mot(4)

    w.rev(  w.circ( 200, 400,30),  car    ).mot(4)

    return car}



ROULETTE=function(){

    mW()

    //Dynamic
    var body =  world.addBody(   DynamicBodyDef(300,300),
        [
            CircleFixture(50) ,
            PolyFixture(10,80,20,160)
        ])

    world.Rev( world.baa(300,300,100), body )}

DEMO_REV=function(){
    makeWorld()

    w.j( rev( baa(100,100), bi(100,100,100,40) ).motor(5, 1) )
    w.j( rev( baa(250,100), bi(250,100,100,40) ).motor(5, 2) )
    w.j(
        rev( baa(400,100), bi(400,100,100,40)) .motor(5, 10000)
    )

    w.j( rev( baa(550,100), bi(550,100,100,40)) .mt(20,5))
    w.j( rev( baa(700,100), bi(700,100,100,40)) .mt(20, 10))
    w.j( rev( baa(850,100), bi(850,100,100,40)) .mt(20, 10000) )

    w.j(rev( baa(100,220), bi(100,220,100,40)).limits(0, 0) )
    w.j(rev( baa(250,220), bi(250,220,100,40)).limits(0,10)  )

    w.j(rev( baa(400,220), bi(400,220,100,40)).lm(0,180)  )
    w.j(rev( baa(550,220), bi(550,220,100,40)).lm(-180,0)  )
    w.j(rev( baa(700,220), bi(700,220,100,40)).lm(-360,180)  )
    w.j(rev( baa(850,220), bi(850,220,100,40)).lm(0,1000)  )

    w.j(rev( baa(100,340), bi(100,340,100,40)).lm(0,0).mt(5,1) )
    w.j(rev( baa(250,340), bi(250,340,100,40)).lm(0,10).mt(5,2)  )
    w.j(rev( baa(400,340), bi(400,340,100,40)).lm(0,180).mt(5,10000)  )
    w.j(rev( baa(550,340), bi(550,340,100,40)).lm(-180,0).mt(20,5)  )
    w.j(rev( baa(700,340), bi(700,340,100,40)).lm(-360,180).mt(20,10)  )
    w.j(rev( baa(850,340), bi(850,340,100,40)).lm(0,1000).mt(20,10000)  )

    w.j(
        rev( baa(100,460), bi(100,460,100,40)).lm(0,0).mt(-5,1) )

    w.j(
        rev( baa(250,460), bi(250,460,100,40)).lm(0,10).mt(-5,2)  )

    w.j(
        rev( baa(400,460), bi(400,460,100,40)).lm(0,180).mt(-5,10000)  )



    world.createJoint(
        rev(
            baa(550,460), bi(550,460,100,40)
        )
            .lm(-180,0).mt(-20,5)  )

    world.createJoint(

        rev( baa(700,460), bi(700,460,100,40)).lm(-360,180).mt(-20,10)  )


    world.createJoint(

        rev(   baa( 850, 460 ), bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )

    )



}

CHANGELIMITS=function(){makeWorld()

    j=world.Rev( baa(400,220), bi(500,220,200,40) )
    j.limits(0, 30)
    j.EnableLimit(true)


 setTimeout(function(){ j.limits(0,200) }, 2000)


}


CHANGEMOTOR=function(){makeWorld()

    j = w.Rev(
            w.baa(400,280),
            w.bi(500,280,200,40))

    j.speed(4).torque(1000000).motor(1)

    setInterval(function(){  j.speed( -j.speed()  )  }, 4000)


    w.player('thrustGrav')
}


car= function(x,y, wheel1, wheel2){

    wheel1=wheel1||2
    wheel2=wheel2||wheel1

    var car = w.box(x,y,90,30).bindSprite('me')

    w.rev(
        w.circ( x-40,  y+50, 30),  car    ).mot(wheel1)
    w.rev(
        w.circ( x +60, y+50, 30  ),  car  ).mot(wheel2)

return __car = car

}



CARS=function(){b2d.W()


    car(100,350,-2,2)
    car(440,350,2,-2)


    setTimeout(function(){
        car(440,350,4)

        car(540,350,2)

    },5000)
}




DEMO_GEAR=function(){
    makeWorld()

    world.Gear(
        w.rev( w.baa(100,220,40), w.bi(100,220,100,20) ),
        w.rev( w.baa(250,220), w.bi(250,220,100,20) ),
        .5
    )
}


REVPRISMGEAR=function(){


}

LEASH=function(){ b2d.level()
    link = function(x,y){
        var l= w.rect(x,y, 5, 10,'y').den(1).rest(.5)
        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+15)
                w.Rev(l, lk)
                l = lk })
        return l}
    return l}
    base = link(300, 20).stat()
    l =  base.l(10)
    w.Rev(l,p)}

TRAPEZE=function(){ b2d.level()

    link = function(x,y){
        var l= w.rect(x,y, 5, 10,'y').den(4).rest(2)
        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+20)
                r= w.rev(l, lk)
                r.collideConnected=true
                l = lk })
            return l}
        return l}


    base = link(300, 20).stat()
    l =  base.l(10)
    w.rev(l, p.XY(l.X(), l.Y()))


    base = link(100, 20).stat()
    l =  base.l(10)
    w.rev(l, p.XY(l.X(), l.Y()))

}


FIREFLY=function(){ b2d.level()


    link = function(x,y){
        var l= w.rect(x,y, 5, 10,'y').den(4).rest(2)
        l.l= function(num){num=N(num)?num:1


            _.times(num, function(){l =   link(l.X(), l.Y()+20)   })


            return l}
        return l}
    base = link(100, 20).stat()
    l =  base.l(10)
    w.rev(l, p.XY(l.X(), l.Y()))

}

WINDOWBLINDS=function(){ b2d.level()

    link = function(x,y){
        var l= w.rect(x,y, 50, 10).den(4).rest(2)
        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+24)
                r=  w.Rev(l, lk)

                r.collideConnected=false
                l = lk })
            return l}
        return l}
    base = link(300, 20).stat()
    l =  base.l(10)
   // w.Rev(l, p.XY(l.X(), l.Y()))

    link = function(x,y){
        var l= w.rect(x,y, 50, 10 ).den(4).rest(2)
        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+24)
                r= w.Rev(l, lk)
                r.collideConnected=true
                l = lk })
            return l}
        return l}
    base = link(100, 20).stat()
    l =  base.l(10)

    //w.Rev(l, p.XY(l.X(), l.Y()))


}


w.link = function self(x,y){var that=this, l

    l= w.rect(x,y, 4, 20).den(4).rest(2)

    l.l= function(num){num=N(num)?num:1
        var lk

        _.times(num, function(){
            lk =  self(l.X(), l.Y()+15)
            that.Rev(l, lk)
            l = lk })

        return l.K('leaf')}

    return l}





VINE=function(){ b2d.level()
    p.SetFixedRotation(true)
    w.vine(100,10,15)
    w.vine(200,10,12)
    w.vine(500,10)}


VINETRAP=function() {
    b2d.level()

    p.X(60)

    trap=function(x) {
        w.vine(x, 10, 12)
        w.vine(x+10, 10, 4)
        w.vine(x+20, 10, 6)
        w.vine(x+30, 10, 8)
        w.vine(x+40, 10, 10)
        w.vine(x+50, 10, 12)
        w.vine(x+60, 10, 10)
        w.vine(x+70, 10, 8)
        w.vine(x+80, 10, 6)
        w.vine(x+90, 10, 4)
    }

    trap(200)
    //trap(300)

}



BOXCANNON=function(){w=b2d.W() // hmm.. want to matchs screen size

    a= w.bumper(300,600, 200)

    b= w.box(300,400, 100,100)

    w.rev( a, b  )

}


EASELCANNON=function(){s=cjs.S().A(

    cjs.circ(200, 'red','brown').rXY(100).XY(400,700),
    rect= cjs.rect( 100, 100, 'blue', 'orange' ).XY(300, 600).rXY(50, 250)
)

    RTT(rect)
}

EASELBOXCANNON=function(){w=b2d.W()

    w.rev(
        dome = w.baa(300,600, 200),
        cannon = w.bi(300,400, 100,100))

    w.s.A(


        cjs.circ( 200, 'red', 'blue' ).rXY(100).XY(400,700),

        rect = cjs.rect( 100, 100, 'blue', 'red' ).XY(300,600).rXY(50,250)

    )

    RTT( rect )

    cjs.tick(function(){

        if(rect.rot()> 60){rect.rot(60)  }
        if(rect.rot()< -60){rect.rot(-60)  }

        cannon.aF( V(0,-420),    cannon.worldCenter()    )

    })



}
