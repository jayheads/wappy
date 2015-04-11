w =   b2d.World.prototype

jd = b2d.RevoluteJointDef.prototype
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
jd.init =jd.i=function(){var jd=this; jd.Initialize.apply(jd, G(arguments)); return jd}

//revolute
jd.refAng=j.rA=function(a){j.referenceAngle= tRad(a); return this}
jd.maxTorque=j.mMT=function(a){
    this.maxMotorTorque=a
    return this}
jd.lowAng= jd.lA = function(a){this.lowerAngle=tRad(a); return this}
jd.upAng= jd.uA = function(a){this.upperAngle=tRad(a); return this}
jd.localA =jd.lAA=function(a){ this.localAnchorA = a; return this}
jd.localB =jd.lAB=function(a){ this.localAnchorB = a; return this}
jd.rat = jd.r=function(a){this.ratio = a; return this}
jd.axis = jd.lXA=function(a){ this.localAxisA=a; return this}

//convenience functions
jd.mot = jd.motor =  function(speed, torque, enable){
    this.speed(speed)
    this.maxTorque( N(torque)? torque : 100)
    if( enable != '-' ){
        this.enableMotor=true }
    return this }
jd.limits = jd.lm = function( lowAng, upAng, enable ){
    this.lowAng( lowAng ).upAng( upAng )
    if( enable != '-' ){
        this.enableLimit = true}
    return this }

j = b2d.RevoluteJoint.prototype
j.lm=j.lim = j.limits =  function(a, b){var g=G(arguments);

    a=g[0], b=g[1]

    if(a===true){this.EnableLimit(true); return}

    this.SetLimits(Math.toRadians(a), Math.toRadians(b))
    if(g.N){this.EnableLimit(true)}

    return this}

j.mt=j.mot = j.motor =   function(speed, torque, enable){
    this.SetMotorSpeed(speed)
    this.SetMaxMotorTorque( N(torque)? torque : 100000)
    if( enable != '-' ){this.EnableMotor(true) }
    return this
}

j.speed=function(s){var j=this

    if(U(s)){return j.GetMotorSpeed()}
    j.SetMotorSpeed(s); return j
}



w.rev=function(){var w=this,g=(arguments), jd, j,aC,bC,o

    o = O(g[0] && !b2d.isBody(g[0]))? g[0]

        : {a:g[0], b:g[1]}


    jd=new b2d.RevoluteJointDef

    jd.bodyA = o.a
    jd.bodyB = o.b

    if(N(g[3])){
        jd.localAnchorA =  V(g[2],g[3]).div()
        jd.localAnchorB =  V(g[4], g[5]).div()}

    else {
        aC = o.a.wC()
        bC = o.b.wC()
        jd.localAnchorA =  V(bC.x - aC.x, bC.y - aC.y).div()
    }


    return w.J(jd)
}




PERCHSPIN=function(){W([1200,600,1200,1200],{}).P()

    w.perch = function(c){var w=this //specific structure, birdage in sky
        c = c || 't'
        w.S(200,50, c, 300,20) //top
        w.S(200,360, c, 300,20) //bottom
        w.S(60, 240, c, 20, 260) //left
        w.S(340, 320, c, 20, 100)//right

        return w}
    w.spinner=function(x,y,s,t){var g=G(arguments)
        x = _.tN(g[0], 500)
        y = _.tN(g[1], 200)
        s = _.tN(g[2], 10)
        t = _.tN(g[3], 100)

        if(g.n){s*=-1}

        w.rev(
            dial= w.box(x, y,200,40),
            rock= w.brick(x, y,10,10)
        ).mot(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })

    }
    w.seesaw=function(x,y){var w=this

        anc = w.bii(x, y, 60,60, 'h')
        lev = w.bi(x, y, 300,20, 'g')

        w.rev(
            anc,
            lev,
            anc.wC(),
            lev.wC()
        ).lm(-30,30)

    }

    w.seesaw(600,1100)
    w.spinner(400,900)
    w.spinner(800,900,'-')
    w.seesaw(600,700)
    w.seesaw(600,500)
    w.perch()

    p.track()
}

w.link = function self(x,y){var w=this, l
    l= w.rect(x,y, 4, 20).den(4).rest(2)
    l.l= function(n){n= _.tN(n,1)
        var lk
        _.times(n, function(){
            lk =  self(l.X(), l.Y()+15)
            w.rev(l, lk)
            l = lk })
        return l.K('leaf')}

    return l}




//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}

REVJ=function(){W()
    revJoint=function(){
        return w.rev(w.B(300,300,'d', 20), w.B(300,300,'h',20,20))}
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

DEMOREV=function(){W()


    w.rev(   a= w.S(100,100,20),  b=w.B(100,100,100,40) ).motor(5, 1)


    w.rev( w.S(250,100,20), w.B(250,100,100,40) ).motor(5, 2)

    w.rev( w.S(400,100,20), w.B(400,100,100,40)) .motor(5, 10000)



    w.rev( w.baa(550,100), w.bi(550,100,100,40)) .mt(20,5)

    w.rev( w.baa(700,100), w.bi(700,100,100,40)) .mt(20, 10)


    w.rev( a2=w.baa(850, 100), b2=w.bi(850,100,100,40,'o') ).motor(20, 10000)



    w.rev( w.baa(100,220), w.bi(100,220,100,40)).limits(0, 0)

    w.rev( w.baa(250,220), w.bi(250,220,100,40)).limits(0,10)

     w.rev( w.baa(400,220), w.bi(400,220,100,40)).lm(0,180)
     w.rev( w.baa(550,220), w.bi(550,220,100,40)).lm(-180,0)
     w.rev( w.baa(700,220), w.bi(700,220,100,40)).lm(-360,180)
     w.rev( w.baa(850,220), w.bi(850,220,100,40)).lm(0,1000)

     w.rev( w.baa(100,340), w.bi(100,340,100,40)).lm(0,0).mt(5,1)
     w.rev( w.baa(250,340), w.bi(250,340,100,40)).lm(0,10).mt(5,2)
     w.rev( w.baa(400,340), w.bi(400,340,100,40)).lm(0,180).mt(5,10000)
     w.rev( w.baa(550,340), w.bi(550,340,100,40)).lm(-180,0).mt(20,5)
     w.rev( w.baa(700,340), w.bi(700,340,100,40)).lm(-360,180).mt(20,10)
     w.rev( w.baa(850,340), w.bi(850,340,100,40)).lm(0,1000).mt(20,10000)

     w.rev( w.baa(100,460), w.bi(100,460,100,40)).lm(0,0).mt(-5,1)

     w.rev( w.baa(250,460), w.bi(250,460,100,40)).lm(0,10).mt(-5,2)

     w.rev( w.baa(400,460), w.bi(400,460,100,40)).lm(0,180).mt(-5,10000)



     w.rev(
         w.baa(550,460), w.bi(550,460,100,40)
     )

     .lm(-180,0).mt(-20,5)

     w.rev( w.baa(700,460), w.bi(700,460,100,40)).lm(-360,180).mt(-20,10)


     w.rev(   w.baa( 850, 460 ), w.bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )





}


REVCHANGE=function(){W()

    j=w.rev(
       b= w.S(400,220,20),
       b2= w.B(500,220,200,40)//,  b.wC().div()
    ).lm(0, 30)

    //j.EnableLimit(true)

    setTimeout(function(){ j.limits(0,200) }, 2000)

    j2 = w.rev(
          w.S(700,280,20),
        w.B(800,280,200,40)
    ).mt(4,100000)

     setInterval(function(){j2.speed( -j2.speed()  )}, 4000)

    w.player(100,300, 'thrust')
}





CARS=function(){W()

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


  //  setTimeout(function(){car(440,350,4); car(540,350,2)   },5000)


}

DEMOGEAR=function(){W()
    w.Gear(
        w.rev( w.baa(100,220,40), w.bi(100,220,100,20) ),
        w.rev( w.baa(250,220), w.bi(250,220,100,20) ),.5)}

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
TRAPEZE=function(){W()  //marionette game?
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

VINE=function(){W()
    p= w.player(300,200)
    p.SetFixedRotation(true)
    w.vine(100,10,15)
    w.vine(200,10,12)
    w.vine(500,10)}
VINETRAP=function() {w=b2d.W()

    p= w.player(300,200).X(60)
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
        w.vine(x+90, 10, 4)}

    trap(250)
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
ROPEY=function(){W('U')
    l=b=w.rect(255,50,60,15,'g').stat()
    for(var i=1;i<=10;i++){
        w.rev(l,l=w.rect(255,i*30,3,15,'w').DFB(1,0,1.1))}
    w.rev(l, w.circ(255,330,20,'d').DFB(1,0,1.1))}
BODYREVWORKS= function(){W()
    w.floor.rest(0)
    prev = top = w.S(255,50,'g', 60,15)
    _.times(10, function(i){var next=link(255,(i+1)*30)
        prev = prev.rev(next)})
    //body.rev(body2) returns body2 !!!!!
    function link(x,y){return w.B(x,y, 'w', 3, 15).DF(1,0,0)}
    w.rev(prev,w.B(255, 330, 'd',20).den(1).rest(0))
    //ship
    y = w.ship().XY(400,170).rot(265).stat()
    w.beg(function(cx){var fixt
        if(fixt=cx.with('bul')){if(fixt.body()!=y){fixt.body().kill()}}})
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


w.debug()
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
KILLEVERYTHING=function(){W(30)

    link =  w.S(255, 50, 'g', 60,15)
    for(var i=1; i<=10; i++){
         w.rev(
             link,
             body = w.D(255, i*30+30, 'w', 3, 15).DFB(1,0,0)
         )
        link=body}
    w.rev(
        link,
        w.D(255,330,'d',20).DFB(1,0,1.1)
    )

    link =  w.S(900, 50, 'g', 60,15)
    for(var i=1; i<=10; i++){
        w.rev(
            link,
            body = w.D(900, i*30+30, 'w', 3, 15).DFB(1,0,0)
        )
        link=body}

    w.rev(
        link,
        w.D(900,330,'d',20).DFB(1,0,1.1)
    )



     w.randRects()
    _.t(8, function(){w.addMe().den(0).XY(700,400)})
    _.t(4, function(){w.addMe().den(0).XY(700,300)})
    _.t(1, function(){w.addMe().den(0).XY(700,200)})

     y=w.ship().aD(1000)

    w.beg(function(cx){cx.with('bul',function(f){if(f.B()!=y){f.B().kill()}})})


}





w.flips=w.flippers=function(x,y,x2,y2){

    if(U(y2)){y2 = y  }
    if(U(x2)){ x2 = x + 230 }

    var lf = w.lFlip(x, y),
        rf =  w.rFlip(x2, y2)

    var flip = function flip(){lf.flip(); rf.flip(); return flip}

    flip.left = lf
    flip.right = rf

    return flip}



PINBALL=function(){W()

    w.rFlip=w.rightFlipper=function(x, y){var w=this
        var rightJoint = w.S(x, y,'r', 20),
            rightFlip = w.B(x, y,'b', 100,25).DBF(1,.5,0),

            flipper =  w.rev(
                rightJoint,rightFlip ,  0,0, 40,0
            ).lim(-70, 30)


        flipper.flip=function(){
            rightFlip.I(-1000,0)}
        return flipper}
    w.lFlip= w.leftFlipper=function(x, y){var w=this

        var  fl = w.B(x,y,'b', 100,25).DBF(1,.5,0),

            flipper=w.rev(
                w.S(x,y,'r',20),   fl,

                0,0, 40,0

            ).lim(150, 250)

        flipper.flip=function(){fl.I(1000,0)}

        return flipper}
    LFLIP=function(){W()

        w.lFlip(600,300)
    }
    FLIP=function(){W()
        f1 = w.flippers(100,430)
        f2 =  w.flippers(100,230)
        f3=  w.flippers(300,130)
        flip = function(){f1();f2();f3()}}

    w.S(215, 520,'r', 30).K('bump').DBF(10,.8,0)
    w.S(215,100,'b',100,10).K('shelf')
    w.S(420,400,'w',20,2000).K('right')

    w.D(215, 90,'r', 20)
        .img('sun',.24)
        .K('sun')
        .rot(10,100)

    flip= w.flips(100,430)

    $.tap(function(){
        var b=w.B(R(300,40),160,'g',20).DBF(1,.2,2)
        if(!R(10)){b.img('me',.24)}
        flip()}
    )

}












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
w.revX = function (b1, b2, c, d, e, f) {$l('rev')
    var w=this, g=G(arguments),  aC, bC

    j=new b2d.RevoluteJointDef

    //pass in body1, body2, world-bV= body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y

    if(N(g[4])){
        j.A(g[0]).B(g[1])
            .lAA(V(g[2], g[3]).div())
            .lAB(V(g[4], g[5]).div())}

    else if(N(g[2])){
        j.init(g[0],g[1], V(g[2], g[3]).div())
    }


    else if(g[2]){  j.init(  g[0],  g[1],  g[2]) }

    else {

        aC = g[0].wC()
        bC = g[1].wC()

        j.init(   g[0],  g[1],  V(bC.x - aC.x, bC.y - aC.y).div() )
    }

    return w.J(j)
}
