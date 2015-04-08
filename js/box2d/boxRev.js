jd = joint = b2d.Joints.b2RevoluteJointDef.prototype
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah


jd.init =joint.i=function(){var jd=this
    jd.Initialize.apply(jd, G(arguments))
    return jd}







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

$.inASec=function(func){return setTimeout(func, 1000)}
cjs.waitFor=function(time){time=N(time)?time:1000
    cjs.wait = true
    setTimeout(function(){cjs.wait = false}, time)}

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

makeCar=function(){

    var car = w.rect(240,350,90,30)

    w.rev(    w.circ( 300, 400, 30  ),  car  ).mot(4)

    w.rev(  w.circ( 200, 400,30),  car    ).mot(4)

    return car}
shrink = function(){_.each(ropeJoints, function(j){j.shrink()})}

REVJ=function(){w=b2d.W().db()


    revJoint=function(){return w.rev(w.B(300,300,'d', 20), w.B(300,300,'h',20,20))}
    revJoint()

    box = w.B(150,150,'n', 40)

    w.rev(w.S(20,20,'w',20), box)



    w.rev(box, w.B(130,130,'p',50))


    j=w.rev(
        w.S(400,200,'o',100).den(1),
        w.B(400,200,'o',100,100).den(1)
    )

    j.motor(true).speed(2000)
    j.EnableMotor(true)
    j.SetMaxMotorTorque(10000000)
    j.SetMotorSpeed(-2)

    w.rev(
        w.B( 120, 50,'y', 50,50),
        w.B( 100, 50, 'x', 50,50)
    ).motor(2)



    w.rev(
        w.B(400,30,'g',30,50),
        w.B(400,30,'g',30,50)).motor(3)


    fido =w.rev(
        w.B( 400,30,'u',10,80),
        w.B( 400,30,'r',20,160 )
    ).motor(10)



    w.rev(
        w.B( 400,30,'p', 50  ),
        w.B( 400,30, 'o', 20,160 )
    ).motor(7)




}
ROULETTE=function(){w=b2d.W().db()

    b = w.B(300,300, 'r',[ [50], [10,80, 20,160] ])

    b2= w.S(300,300, 'y', 100)

    j  = w.rev(b,b2)

}
DEMOREV=function(){w=b2d.W()



    w.rev(
        w.S(100,100,20),
        w.B(100,100,100,40)
    ).motor(5, 1)


    /*
     w.rev( w.S(250,100,20), w.B(250,100,100,40) ).motor(5, 2) )
     w.rev( w.S(400,100,20), w.B(400,100,100,40)) .motor(5, 10000)



     w.rev( baa(550,100), bi(550,100,100,40)) .mt(20,5))
     w.rev( baa(700,100), bi(700,100,100,40)) .mt(20, 10))
     w.rev( baa(850,100), bi(850,100,100,40)) .mt(20, 10000) )

     w.rev( baa(100,220), bi(100,220,100,40)).limits(0, 0) )
     w.rev( baa(250,220), bi(250,220,100,40)).limits(0,10)  )

     w.rev( baa(400,220), bi(400,220,100,40)).lm(0,180)  )
     w.rev( baa(550,220), bi(550,220,100,40)).lm(-180,0)  )
     w.rev( baa(700,220), bi(700,220,100,40)).lm(-360,180)  )
     w.rev( baa(850,220), bi(850,220,100,40)).lm(0,1000)  )

     w.rev( baa(100,340), bi(100,340,100,40)).lm(0,0).mt(5,1) )
     w.rev( baa(250,340), bi(250,340,100,40)).lm(0,10).mt(5,2)  )
     w.rev( baa(400,340), bi(400,340,100,40)).lm(0,180).mt(5,10000)  )
     w.rev( baa(550,340), bi(550,340,100,40)).lm(-180,0).mt(20,5)  )
     w.rev( baa(700,340), bi(700,340,100,40)).lm(-360,180).mt(20,10)  )
     w.rev( baa(850,340), bi(850,340,100,40)).lm(0,1000).mt(20,10000)  )


     w.rev( baa(100,460), bi(100,460,100,40)).lm(0,0).mt(-5,1) )

     w.rev( baa(250,460), bi(250,460,100,40)).lm(0,10).mt(-5,2)  )

     w.rev( baa(400,460), bi(400,460,100,40)).lm(0,180).mt(-5,10000)  )



     w.rev(
     baa(550,460), bi(550,460,100,40)
     )
     .lm(-180,0).mt(-20,5)  )

     w.rev( baa(700,460), bi(700,460,100,40)).lm(-360,180).mt(-20,10)  )


     w.rev(   baa( 850, 460 ), bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )

     )
     */


}
CHANGELIMITS=function(){w=b2d.W()

    j=w.rev(
        w.S(400,220,20),
        w.B(500,220,200,40) )

    j.limits(0, 30)
    j.EnableLimit(true)

    setTimeout(function(){ j.limits(0,200) }, 2000)


}
CHANGEMOTOR=function(){w=b2d.W()

    j = w.rev(
        w.S(400,280,20),
        w.B(500,280,200,40))

    j.speed(4).torque(1000000).motor(1)

    setInterval(function(){
        j.speed( -j.speed()  )
    }, 4000)



    w.player('thrustgrav')
}
CARS=function(){w=b2d.W()

    car= function (x,y, wheel1, wheel2){

        wheel1=wheel1||2
        wheel2=wheel2||wheel1

        var car = w.B(x,y,90,30).bindSprite('me')

        w.rev(
            w.B( x-40,  y+50, 30),  car
        ).mot(wheel1)

        w.rev(
            w.B( x +60, y+50, 30  ),
            car
        ).mot(wheel2)

        return car

    }

    car(100,350,-2,2)

    car(440,350, 2,-2)


    setTimeout(function(){
        car(440,350,4)

        car(540,350,2)

    },5000)


}
DEMOGEAR=function(){
    makeWorld()

    world.Gear(
        w.rev( w.baa(100,220,40), w.bi(100,220,100,20) ),
        w.rev( w.baa(250,220), w.bi(250,220,100,20) ),
        .5
    )
}
REVPRISMGEAR=function(){


}
LEASH=function(){ w=b2d.W()
    p= w.player(300,200)

    link = function(x,y){
        var l= w.B(x,y,'y', 5, 10).den(1).rest(.5)

        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+15)
                w.rev(l, lk)
                l = lk })
            return l}
        return l}

    base = link(300,20).stat()
    l =  base.l(10)

    w.rev(l,p)}
TRAPEZE=function(){ w=b2d.W().db() //marionette game?
    p= w.player(300,200)
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
FIREFLY=function(){w=b2d.W().db()
    p= w.player(300,200)


    link = function(x,y){
        var l= w.B(x,y,'y', 5, 10).den(4).rest(2)
        l.l= function(num){num=N(num)?num:1


            _.times(num, function(){l =   link(l.X(), l.Y()+20)   })


            return l}
        return l}
    base = link(100, 20).stat()
    l =  base.l(10)
    w.rev(l, p.XY(l.X(), l.Y()))

}
BLINDS=function(){ w=b2d.W()
    p= w.player(500,200)
    link = function(x,y){
        var l= w.rect(x,y, 50, 10).den(4).rest(2)
        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+24)
                r=  w.rev(l, lk)

                r.collideConnected=false
                l = lk })
            return l}
        return l}
    base = link(300, 20).stat()
    l =  base.l(10)
    // w.Rev(l, p.XY(l.X(), l.Y()))

    link = function(x,y){
        var l= w.B(x,y, 50, 10 ).den(4).rest(2)
        l.l= function(num){num=N(num)?num:1
            var lk
            _.times(num, function(){
                lk =  link(l.X(), l.Y()+24)
                r= w.rev(l, lk)
                r.collideConnected=true
                l = lk })
            return l}
        return l}
    base = link(100, 20).stat()
    l =  base.l(10)

    w.rev(l, p.XY(l.X(), l.Y()))


}
VINE=function(){w=b2d.W()
    p= w.player(300,200)
    p.SetFixedRotation(true)
    w.vine(100,10,15)
    w.vine(200,10,12)
    w.vine(500,10)}
VINETRAP=function() {w=b2d.W()

    p= w.player(300,200)

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

    a= w.S(300,600, 200)

    b= w.B(300,400, 100,100)

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
BIONIC=function(){

    w=b2d.W().randRects()

    isHooked=false
    distJ=false


    hero= w.rect(320,460,20,20,'b')

    $can = superCanvas($(w.s.HUD.canvas))

    $can.MD(function(x,y){w.QueryPoint(function(fixture){

        var touchedBody = fixture.body()
        if(touchedBody.isStat()){
            distJ=w.dist( hero, touchedBody, hero.GetWorldCenter(), V(x,y).div() ) //collideConnected=true
            isHooked = true}
        return false

    },  V(x,y).div())

    }) //if(distJ){w.DestroyJoint(distJ)}

    $can.MU(function(){
        if(distJ){w.DestroyJoint(distJ)}
    })   // if I release the mouse, I destroy the distance joint


    cjs.tick(function(){// as long as the hook is active, I shorten a bit joint distance

        if(isHooked){

            hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
            distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
        }
    })


}
ROPEY=function(){w=b2d.W().dg()

    w.roof.kill()



    body = w.rect(255,50, 60,15,'g').stat()
    link = body
    for ( var i = 1; i <= 10; i++ ){func(i)}
    function func(i){
        body = w.rect(255, i*30, 3, 15, 'w').den(1).fric(0).rest(2)
        w.rev(link, body)//, V(255,i*30-15))
        link = body}
    body = w.circ(255, 330, 20, 'd').den(1).fric(0).rest(2)
    w.rev(link, body)


}
BODYREVWORKS= function(){w=b2d.W().db(); w.floor.rest(0)

    prev = top = w.B(255,50,'g', 60,15).stat()

    _.times(10, function(i){
        var next = link( 255, (i+1)*30 )
        prev = prev.rev(next)

    })




    //body.rev(body2) returns body2 !!!!!



    function link(x,y){
        return  w.B(x,y, 'w', 3, 15).den(1).fric(0).rest(0)
    }



    w.rev(prev,
        w.B(255, 330, 'd',20).den(1).rest(0)
    )




    //ship
    y = w.ship().XY(400,170).rot(265).stat()

    w.beg(function(cx){var fixt
        if(fixt=cx.with('bul')){if(fixt.body()!=y){
            fixt.body().kill()
        }}})

}
WEBO1=function(){w=b2d.W().randRects()

    p = w.rect(400,500, 40,40,'o').rest(0).den(.1).fric(100).fixRot().K('player')

    p.hanging = false

    p.makeWeb=function(){var p=this, w=p.wor(), y=p.Y()-1, x=p.X(), piece


        p.ropePieces = []

        piece = w.ropePiece(x, y)

        w.tightDist(p, piece )
        p.ropePieces.push(piece)

        T(9, function(i){var newPiece
            newPiece = w.ropePiece(x, y-i)
            w.tightDist(piece, newPiece)
            p.ropePieces.push(newPiece)
            piece = newPiece})

        p.web = w.circ(x, y-10, 10, 'd').K('web').den(1).rest(0).fric(100)

        w.tightDist(piece, p.web )


return p}







    p.destroyWeb =function(){var p=this

        p.web.kill()
        _.each(p.ropePieces, function(piece){
            piece.kill()
        })

    }


    $.key({

        left:function(){p.I(-100,0)},

        right:function(){p.I(100,0)},

        down:function(){

            if(p.hanging){
                p.destroyWeb()
                p.hanging = false
            }
        },



        up: function(){
                if(!p.hanging){
                    p.makeWeb()
                    p.web.I(0, -100)
                }

                else {p.I(0,-100)}}})





    w.beg(function(cx){var fixt


        if((fixt=cx.with('web','randomRect'))  && !p.hanging){
                p.hanging=w.tightDist(fixt[1].body(), p.web )}




        if(cx.with( 'web', 'floor')){


             p.destroyWeb();p.hanging=false
        }
    })




}
WEBOBEARD=function(){w=b2d.W().randRects()


    p = w.addMe(4).XY(300,300).rest(0).den(.1).fric(100).fixedRot(true).K('player')

    p.isConnected=function(){var res, that=this

        if( !A( this.webs )){ return false }

        res = _.findWhere( that.webs, {connected:true} )

    return true && res && true}





    $.key({

        left:function(){
            if( p.isConnected() ){ p.I(-2,0)}

        else { p.I(-20,0) }

        },

        right:function(){
            if( p.isConnected() ){ p.I(2,0)}

            else { p.I(20,0) }

        },

        down:function(){var connectedWebs


           if( p.isConnected() ){

               connectedWebs   =  _.where(p.webs, {connected:true})

               _.last(connectedWebs).die()

           }


        },

        up: function(){

            if(!p.isConnected()){ p.web().ball.I(0, -100)   }



           else {p.I(0,-10)}

        }})



    p.web().ball.I(0, -100)
    w.floor.kill()

    w.beg(function(cx){var fixt, web
        if((fixt = cx.with('webBall','randomRect'))){var ball= fixt[0].body(), rect = fixt[1].body(),
            web = _.findWhere(p.webs, {ball: ball})
            if(!web.connected){web.attach(rect)}}


        if(cx.with( 'web', 'floor')){

        }
    })


    w.show(function(){
        return 'is p connected?... ' + p.isConnected()
    })


}
WEBO=function(){w=b2d.W()

    w.roof.kill()
    w.right.kill()
    w.left.kill()

    _.times(40, function(i){
        w.rect(Math.random()*1100+20, Math.random()* 1000 - 950,
                Math.random()*30+15, Math.random()*30+15
        ).stat().K('randomRect')})


    p = w.addMe(4).XY(300,300).rest(0).den(.1).fric(100).fixedRot(true).K('player')
    p.isConnected=function(){var res, that=this
        if( !A( this.webs )){ return false }
        res = _.findWhere( that.webs, {connected:true} )
        return true && res && true}


    p.killWebs=function(){


    }


    $.key({
        left:function(){   if( p.isConnected() ){ p.F(-100,0) }  else { p.I(-20,0) }   },
        right:function(){  if( p.isConnected() ){ p.F(100,0)}  else { p.I(20,0) } },
        down:function(){var connectedWebs; if( p.webs[0] ){    _.last(p.webs).die()  }  },
        up: function(){if(!p.isConnected()){ p.web().ball.I(0, -100)   } else {p.I(0,-10)}}
    })

    w.beg(function(cx){var fixt, web
        if((fixt = cx.with('webBall','randomRect'))){var ball= fixt[0].body(), rect = fixt[1].body(),
            web = _.findWhere(p.webs, {ball: ball})
            if(!web.connected){web.attach(rect)}}})

    //p.web().ball.I(0, -100)

cjs.tick(function(){

    w.s.Y(510- p.Y()  )
})


w.debug()}



//Stuff={}
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
