CRAZYSHIPS=function(){W(1200,600).G(0)

    _.t(10,function(){

        w.ship(R(500,50), R(500,50))

    })

    w.beg(function(cx){
        cx.with('ship','bul', function(bul,cx){
            this.kill()})
    })


}



PUZZLE=function(){W(0)

    w.ship().track()

     _.t(10,function(){

         w.D(400,400,
             [
                 ['r', 20,0,0],
                 ['b', 20, 100, 0],
                 ['y', 20, 0, 100]   ])})


}







CATAPULT=function(){



    cat = world.a(

        DynamicBodyDef(350,200),[

            pFx(125,20,0,0,0),

            pFx(20,60,-80,-40,200 )

        ])




    cat_arm  = w.a(dBD(210,210),[

        pFx(150, 10,  0,0,0 ,1),
        pFx(10, 20,  -140,-30 ,0 ,1)

    ])



    joint=w.cJ( rev(cat,cat_arm,bV(0,0)) )

        .eM(1).eL(1)
        .lAA(bV(-80,-90))
        .lAB(bV(60,0))
        .sMS(1000)
        .sL(-180,60)
        .sMMT(1)

    cannonball =w.a(dBD(90,90), cFx(10,20))

    // s.$(fire=function(e){ the_joint.sMMT(10000)})

//  draw_box=function(px,py,w,h,d,ud):void {
//
//   ground = new dBD(px,py)
//
//ground.position.Set(px, py);
//if (d) {
//    ground.type=b2Body.b2_dynamicBody;
//}
//
//my_box = pSh().sAB(w/2, h/2)
//
//  my_fixture  = fDf(my_box)
//
//
//
//the_ground =w.cB(ground);
//
//the_ground.sUD(ud);
//the_ground.cF(my_fixture);

}

















CHEMICALS = function self(){
  W({ w: 0,g:20
})

    w.s.sXY(.8).XY(125,50)

_.times(2, function() {

    w.randRects({y:0,z:3})
    w.randRects({y:100, z:3})


    w.randRects({y:200, z:3})
    w.randRects({y:300, z:3})
    w.randRects({y:400, z:3})

})



    w.Q(function(f, b){  b.kill(); return true  },
        550, 250,

        650, 350
    )



    y = w.ship().XY(600,300).K('ship')

    w.Q(function(f, b){
        b.kill(); return true}, 350,  50,    450, 150)

    _.times(50, function(){
        w.circ(400, 80,8,'r').K('circ')  })


    w.Q(function(f, b){
        b.kill(); return true
    }, 850,  50, 950, 150)


    _.times(50, function(){

        w.rect(900, 100, 14,14,'b').K('rect')

    })




gameOver=false


    w.beg(function(cx){var fixt,body

            if(fixt = cx.with('bul')){
                body = fixt[1].body()
                if(body != y){body.kill()}
            }

            if(cx.with('ship','circ') || cx.with('ship', 'rect') ) {lose() }



        if(cx.with('circ','rect')){

            w.pen('you win')
            y.stat()
            w.each(function(b){  if(b!=y){b.kill()} })
            setTimeout(self, 1000)

        }



    })



    w.startKilling()
    function lose() {
        w.pen('you lose')
        y.stat()
        w.each(function (b) {
            if (b != y) {
                b.kill()
            }
        })
        setTimeout(self, 1000)
    }


}


TENSORSTAB=function(){w=b2d.W({g:0}).debug();

    co = w.tensor()

    _.times(100, function(){
        co.body(w.circ(400,300, 10, 'b').lV(10,20).linDamp(0))
    })

    w.rect(200, 200,50,260  ).stat()
    w.rect(140,200,140,50  ).stat()


    w.rect(640,200,200, 50 ,'o' )

    w.circ(500, 200,80, 'm')

    y=w.ship().K('ship').linDamp(5)

    bg = w.yShip('blue',500,300).den(3).linDamp(2).K('bg').angDamp(.2)

    bg.rotTowards=function(y){
        var yX=y.X(),
            yY= y.Y(),
            bgX= this.X()
            ,bgY=this.Y(),
            dX = yX-bgX ,dY = yY-bgY,
            ang = -Math.toDegrees(Math.atan(dX/dY))
        if(y.Y()>this.Y()){ang+=180}

        this.rot(   ang + ((Math.random()*40)-20)     )}


    I(function(){bg.angVel(0)
        bg.rotTowards(y);


    },500)

    cjs.tick(function(){
        bg.I()
    })
    hits=0

    w.beg(function(cx){

        if(cx.with('ship', 'bg')){

            impX = cx.worldManifold().m_points[0].x * 30
            impY = cx.worldManifold().m_points[0].y * 30


            if(
                Math.lineDistance( V(impX,impY), V(y.X(),y.Y()))
                > Math.lineDistance( V(impX,impY), V(bg.X(),bg.Y())

            )){

                setTimeout(function(){

                    hits++
                    w.C('g')
                    bg.XY(300,300)
                    y.XY(700,400)

                }, 100)
            } else {

                // y.setDestroy()

                setTimeout(function(){
                    w.C('p')
                    bg.XY(700,400)
                    y.XY(100) }, 100)
            }


        }



    }).startKilling()

    w.show(function(){return 'hits: '+ hits})

    //setTimeout(function(){  alert('time is up') }, 60000)
}


YELLOWGAME=function(){

   KILLEVERYTHING()

    setTimeout(CHEMICALS, 10000)

    setTimeout(TENSORSTAB, 20000)



}



MARIOMAZE=function(){W({g:0,w:0})

    p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 ).follow(300, 150)

    _.times(30, function(){var x,y
        x= (Math.random() * 1000) - 500
        y = (Math.random() * 800) - 400
        w.circ(x, y, 2,'white').den(0).rest(2)
    })


    grid= w.grid([
        [1,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1],
        [1,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1,1,1],
        [1,0,1,0,1,0,0,0,1],
        [1,0,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1]


    ],  100, -100, 14, 40)
    score=100

    cjs.tick(function(){
        grid.angVel(.2)
        w.s.HUD.pen(score)
    })


    w.beg(function(cx){

        if(cx.with('player', 'grid')){ score--


        }})

    // grid.angDamp(1)

    p.XY(220, 70)
}



//

BIG=function(){w = b2d.W({g:300, w:0 })

    w.platform  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W


        pd = b2.polyDef(W, H).r(0)

        pd.restitution = .3

        return this.A(

            b2.staticDef(x,y),pd


        ).K('platform')

    }
    w.platform(800,500,600,100)
    w.platform(300, 530,100,100)
    w.platform(1400,300,600,100)
    w.platform(1800,500,1000,100)
    w.platform(1900,200,600,100)




    //w.footListener()
    //w.startKilling()


    p = w.addMe().XY(300,-300).angDamp( 10000 )


    cjs.tick(function(){
        p.rot(0)

        w.left(4)

        if(p.Y() > 2000){ p.XY(300,-300) } //comeback

        if(b2d.onGround){
            if(cjs.Keys.up){p.jumping(180,30)} else {p.byVel(40)}}
        else { p.byImp(10) }
    })
    w.box(800,100).bindSprite('guy')

}



BILLIARDS=function(){

    b2d.W({

        g:0,
        walls: function(){}
    })


    w.rectStat(10,300,40,920) //left

    w.rectStat(1100, 280, 40, 400)//right

    w.rectStat(250, 0, 800, 40)//top
    w.rectStat(730, 0, 800, 40)//top
    w.rectStat(250, 590, 800, 40)//b
    w.rectStat(730, 590, 800, 40)//b

    w.addMe()

    w.addTim(15)

}


GRAVITYRANGE=function(){w=b2d.W({g:10})

    w.circ(100,100,50, 'a').den(1)
    w.circ(100,200,40, 'c').den(1)

    w.circ(100,100,50, 'd').den(1)
    w.circ(100,200,40, 'e').den(1)
    w.circ(100,100,50, 'f').den(1)
    w.circ(100,200,40, 'h').den(1)
    w.circ(100,100,50, 'i').den(1)
    w.circ(100,200,40, 'j').den(1)
    w.circ(100,100,50, 'k').den(1)
    w.circ(100,200,40, 'l').den(1)


    range = w.prism(
        w.rect(600,300,220, 20, 'q').stat(),
        w.rect(600, 300,20, 250, 's').lD(10)
    ).lm(-100,100)


    w.show(function(){return 'Welcome to Gravity Range: Current gravity is ' + range.val()  })


    y= w.yShip().thrustControl().angDamp(1).shootOnSpace().linDamp(10)


    cjs.tick(function(){
        w.G(range.val())
        w.each(function(b){b.I(0,.1)})
    })

}


STABTRAP=function(){w=wor({g:0}).debug()

    co=w.tensor();

    //  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})



    y=w.ship()
    rot = 45
    bg = w.yShip('blue', 500,300).stat().shootOnInt(200)

    bg.rotTowardsShip=function(){
        var yX=y.X(), yY= y.Y(),
            bgX= bg.X(),bgY=bg.Y(),
            dX = yX-bgX ,dY = yY-bgY,
            ang = -Math.toDegrees(Math.atan(dX/dY))
        if(y.Y()>this.Y()){ang+=180}
        this.rot(ang)}




    cjs.tick(function(){

        bg.rotTowardsShip()

    })


}




FLOCKING=function(){

    //these just thrust and dont
    //otherwise apply forces to neighbors.  but what if
    //they 'SUCKED' instead of 'thrusted' ?
    //is that the same as having a gravitational inwards force?

    var w=b2d.W({g:0})


    //  y = $ys(300, 200, 3).angDamp(0).linDamp(1)


    var n = 0
    _.times(40, function(){window['y'+ n++]= w.yShip('o').chug()})

    y = w.yShip('y').thrustControl()

    _.times(40, function(){window['y'+ n++]= w.yShip('o').chug()})


    I(function(){

        if(y.going()){ w.s.c.C('p') } else { w.s.c.C('z') }


    },100)

    w.debug()}


JAYFALL=function(){w=b2d.W({g:10})
    w.debug()
    w.left.kill()
    w.s.sX(.95)
    num=0; heads=0

    y=w.ship()//.den(.3)

    setInterval(function(){
        w.addMe().data('head')

        num++
    }, 1000)


    w.show(function(){return num + ' - ' + heads  })

game=true

    tickFunc=function(){
/*
        if(num > 30){
            $.pop('score: '+heads)
            num=0
            heads=0
            w.each(function(b){
                if(b.data() == 'head'){
                    b.kill()
                    heads++}})}
                    */
if(game){
        if(num > 60){
            game=false
            $.pop('score: '+heads) }
        else {

            w.each(function(b){

                if(b.data() == 'head' && b.Y()>600){b.kill();heads++}
            })
        }


    }}
     cjs.tick(tickFunc)

}



SEB=function(){w=b2d.W({g:1})//w.show(function(){return b.num()})
    b = w.B(800,300,'r',200, 800).stat().K('terr')

    y = w.ship().linDamp(3).X(1100)
    p =  w.player().XY(200,400).K('jason'); setTimeout(function(){p.sprite.sXY(.5)},1000)
    can=true


    w.beg(function(cx){var fixt, j,bull,terr,bX,bY,br

        if(fixt = cx.with('bul', 'terr') ){//w.s.flash()
            bull = fixt[0].B()
            terr = fixt[1].B()
            bX = bull.X()
            bY = bull.Y()
            bull.kill()

            if(can){can = false

               // b.minusPolyCirc(bX, bY, 100, 7)

               poly = Math.poly(
                   _.map(b2d.polyCirc(100,7), function(v){return [v.x+ b.X(), v.y+ b.Y()]
                   }))

              // verts = b.sub(poly)

                br =  w.polyCirc(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(


               b.subtract( br,   '-' ) // br.kill()

              //  b.color('r')
                can = true
            }
        }



       else if(fixt = cx.with('jason','bul')){
             $l('bullet hit jason!!!!');j= fixt[0].body(); j.sprite.tween([{sxy:20, r:100}, 1000])}
    })




    f=function(){

        v = h.verts()
        v.unshift('b')
        v.unshift(200)
        v.unshift(200)
        w.B.apply(w,v)
    }



    killIfSmall=function(f){var area=f.area();if(area<20){$l('too small: '+area); f.kill()}}

    w.db()
}

BREAKWALL=function(){W({g:1}).db()
    y = w.ship().linDamp(3).X(1100).rot(260)
    terr = w.B(800,300,'r',200, 800).stat()
    terr.coll('bul', function(bul){
            var bull=bul.B(),bX=bull.X(),bY=bull.Y()
            bull.kill()
            poly = Math.poly(

                _.map(b2d.polyCirc(50,4),

                    function(v){return [v.x+ bX, v.y+ bY]}))
            terr.subtract(poly)
        })
}

ARM=function(){w=b2d.W()

    y= w.ship(500,200)

 b=w.S(300,300,20,200)

    a= w.S(300,300,[

        ['b',200,50,100,0]
    ])


    setInterval(function(){
        a.rot(1,'+')
    },100)


}
FUNNYBADGUY=function(){w=b2d.W()

    y= w.ship(500,200)

    b=w.B( 300,300, 'r', 20,300)

    a = w.B(300,300,[

        ['b',100 ],
        ['y', 50,10,100,0]
    ])


   j= w.rev(a,b)


j.mot(10)
    w.debug()
}

CLIMBER=function(){
    w=b2d.W({

})


    //y= w.ship(500,200)


    dir = 10

    car= w.B( 300,300, 'r',  200,20)


    w1 = w.rev(
        w.B(250,300,'b', 40).den(5).bindSprite('me'),
        car).mot(10)

    w2 = w.rev(w.B(350,300,'b', 40).den(5).bindSprite('me')
        ,car).mot(10)


    x = function(){
        dir*=-1
        w1.mot(dir)
        w2.mot(dir)
    }



    w.click(x)

    setInterval(function(){
        w.B(300,500,'y',20)
    }, 1000)

    w.debug()}



STANDMEUP=function(){


        w=b2d.W({

        })


        //y= w.ship(500,200)


        dir = 12

        car= w.B( 300,300, 'r',  200,45)


        w1 = w.rev(

            w.B(250,300,'b',  [_.map(b2d.polyCirc(45,10),
                    function(v){return [v.x, v.y]}
                )]
            ).den(5) ,


            car).mot(10)



        w2 = w.rev(w.B(350,300,'b',

               [_.map(b2d.polyCirc(45,10),
                    function(v){return [v.x, v.y]}
                )]



            ).den(5)
            ,car).mot(10)


        x = function(){
            dir*=-1
            w1.mot(dir)
            w2.mot(dir)
        }



        w.click(x)


}

TANKWHEELS=function(){
    w=b2d.W({g:0})
    grv = V( 0, 1000 )
    dir = 12
    car= w.B( 300,300, 'r',  100, 5)
    w1 = w.rev(   w.B(250,300,'b',  [_.map(b2d.polyCirc(45,10),
                function(v){return [v.x, v.y]}
            )]  ).den(5),   car).mot(10)
    w2 = w.rev( w.B( 350, 300, 'b', [_.map(b2d.polyCirc(45,10),
                function(v){return [v.x, v.y]}
            )]).den(5), car ).mot(10)
    w.click(function(){
        dir*=-1
        w1.mot(dir); w2.mot(dir)
        grv = V(-grv.x,-grv.y) })
    cjs.tick(function(){car.F( grv )})
    w.right.coll(function(){grv=V(-1000,0)})
    w.left.coll(function(){grv=V(1000,0)})
    w.roof.coll(function(){grv=V(0,-1000)})
    w.floor.coll(function(){grv=V(0,1000)})

}



MOVEINCIRC=function(){w=b2d.W({g:0})


     w.dot(300,300); w.dot(600,300); w.dot(900,300)

//rad,speed
     w.B(300,300,50,100).moveInCircle('+') //high oval
   w.B(600,300,50,100).moveInCircle()
    w.B(900,300,100,50).moveInCircle('-') //long oval




}




ZILLA=function(){$l('zilla')
    W({g:0,w:0})
    health=100

     y = w.ship().warp().coll(function(){health-=5})



    z = w.zilla(600, 300).fireBallsAtInt(4000)


     w.show(function(){return 'health: '+ health + ', hits: ' + z.hits})
}








ZILLASCROLL=function(){w=b2d.W({g:0,w:0}).debug()
    health=100


    y = w.ship().coll(function(){
        health-=5
    }) // insert message passing here!




    z = w.zilla(600, 300).fireBallsAtInt(4000)

    //w.follow(y)
    y.cam()


    w.show(function(){return 'health: '+ health + ', hits: ' + z.hits})


}



RAYCAST=function(){W=b2d.W(); var p1,p2,line
    w.addMe()
    w.brick(200,200,40,20)
    w.s.HUD.on('stagemousedown',  function(ev){var v=V(ev.rawX,ev.rawY)
        if(!p1){p1=v; return}
        if(!p2){p2=v} else {p1=p2;p2=v}
        w.s.each(function(c){if(c.N() == 'dot'){c.remove()}})
        w.dot('b',p1); w.dot('r',p2)
        if(line){line.remove(); line=null}
        line = w.s.shape().s('w').mt(N(p1.x)?p1.x:0,N(p1.y)?p1.y:0).lt(N(p2.x)?p2.x:100,N(p2.y)?p2.y:100)
        w.rayCast(function(f){var b=f.B(); w.dot( b.X(),b.Y())},p1,p2)})}
DENSITYBODYCLICK=function(){ w=b2d.W({g:0,W:600,H:500})
    w.ball(200,100, 10)
    w.ball(100,100, 5.65)
    w.ball(300, 200, 40)
    w.box(200,200, 10,10)
    w.box(200,200, 100,100)
    w.bodyClick(function(){$l('mass: ' + this.mass().toFixed(3))})}

MINIWORLD = function(){

    W({ g:10, W:1000, H:800})

    d = $.div('yellow', 1500,40).A().abs(200,200).pad(2)
    p = w.player(2, 'thrust').X(300)

    data=function(str){
        if(U(str)){str='data'}
        d.E($.h4(str))
    }

}



TALKJS=function(){   w = b2d.W({   g:0,   w:0   }).startKilling().debug()
    score=0
    shots=0

    p= w.addMe(500,300).stat()


    w.addCirc= function (x, y, radius, color) {//specific to talkjs
        x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)
        y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)
        radius = N(radius) ? radius : _.random(14) + 8
        color = oO('c', color || $r())
        this.ball(x, y, radius).bindSprite2(
            cjs.circ(radius, color).XY(x, y)).linDamp(2)

    }
    _.times(100, function(){

        w.addCirc()


    })


    $.space(function(){//can double on on shots!!!
        setInterval(function(){
            p.shoot(); shots++ }, 200)
    })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)

    w.beg(function(cx){
        if(cx.with('ball','bullet')){
            score++;
            cx.destroy()
        }})

    cjs.tick(function(){
        p.XY(500, 300)
        if(cjs.Keys.left){p.rot(8,'-')}
        if(cjs.Keys.right){p.rot(8,'+')}
        if(cjs.Keys.up){
            w.each(function(body){
                if(body.not('bullet', 'player')){
                    body.I(p.worldVec(0,-100).div(-50))}})}
    })


}



ORBIT=function(){w = b2d.W({g:0,w:0}).debug()
    w.stars()
    w.spring(
        p = w.thrustPlayer().follow(600, 300),
        star = w.sun(200,200)
    ).freq(.2).damp(4)}

SUNZOOM=function(){W({g:0,w:0})
    w.stars(10)
    w.s.rXY(600,300)
    w.s.XY(600,300)


    p = w.thrustPlayer()

    sun = w.sun()
    setTimeout(function(){ sun.sprite.tweenLoop([{r: 360}, 10000]) }, 300) //preload to the rescue ??


    w.distColl(p, sun).freq(.2).damp(0).len(150)
    green(400,100); green(400,200); green(200,100); green(200,200)

    function green(x,y,freq){
        freq=N(freq)?freq:.1
        w.distColl(   w.greenGuy(x,y), sun).freq(freq).damp(0).len(150)
    }

    cjs.tick(function(){
        w.s.sXY(
            b2d.scaleFunc(sun,p,2) )
        p.centerScale( b2d.scaleFunc(sun,p,2) )
    })

}


SLING=function(){s=cjs.S()

    startpoint={}

    slingshot = cjs.shape().a2(s)

    onMouseDown=function(event){

        if(ball.hitTestPoint(event.x, event.y)){
            mouseJoint = w.J(

                b2d.createMouseJointDef(
                    w.ground, //?

                    ball.body,
                    event.x, event.y, 100000
                )
            )

            startpoint.x = event.x
            startpoint.y = event.y

        }
    }


    onMouseMove=function(event){
        if(mouseJoint !=null){
            mouseJoint.setTarget(event.x, event.y)
            slingshot.clear()
            slingshot.setLineStyle(5, 0xff0000, 1)
            slingshot.beginPath()
            slingshot.mt(self.startpoint.x, self.startpoint.y)
            slingshot.lt(event.x, event.y)
            slingshot.ep()
        }
    }


    onMouseUp=function(event){



        if (mouseJoint != null){
            w.dJ( mouseJoint)

            mouseJoint = null

            slingshot.clear()

            strength = 1

            xVect = ( startpoint.x-event.x)*strength
            yVect = ( startpoint.y-event.y)*strength

            ball.body.applyLinearImpulse(  xVect,   yVect, ball.getX(), ball.getY())

        }
    }

}
PHONEJUMP=function(){b2d.W({W:300, H:400,
    walls:function(){
        w.brick(10,300, 40, 600).K('leftWall')
        w.brick(450,300, 40, 600).K('rightWall')
        w.brick(300, 0, 2400, 40).K('ceiling')
        w.brick(300, 400, 800, 40).K('floor')}})

    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)

    p = w.addMe()

    $.joystick()

    cjs.tick(function(){

        if(cjs.Keys.up){     p.I(0,-100)}
        if(cjs.Keys.left){   p.I(-20, 0)}
        if(cjs.Keys.right){  p.I(20, 0)}

    })

}
MEMORY=function(){  s = cjs.S().A(ct= cjs.ct())



    grid=[

        ['guy','me',0,0],
        [0,'me',0,0],
        [0,0,0,0],
        [0,'me','chicks','me']

    ]


    wGuy=function(){
        var x=0,y=0
        _.each(grid,  function(row,i){
            _.each(row,function(cell,j){
                if(cell=='guy'){ x=j, y=i}})})
        return {x:x,y:y}}


    dGuy=function(){

        var p=wGuy()

        grid[p.y][p.x]=0
        if( grid[p.y+1][p.x]=='chicks') {alert('win')}
        else if( grid[p.y+1][p.x]==0){
            grid[p.y+1][p.x]='guy'
            playerGrid()

        } else {alert('lose!')}}



    rGuy=function(){
        var p=wGuy()
        grid[p.y][p.x]=0
        if( grid[p.y][p.x+1]=='chicks') {alert('win')}
        else if( grid[p.y][p.x+1]==0) {
            grid[p.y][p.x+1]= 'guy'
            playerGrid()} else {alert('lose!')}}




    _.each(grid, function(row,i){
        _.each(row, function(cell,j){
            ct.A(
                cjs.rect(30,40).XY(j*100+100,i*100+100))
            if(cell=='me'){
                ct.bm('me',
                    function(b){
                        b.XY(j*100+100,  i*100+100
                        ).sXY(.1)})}})})




    playerGrid=function(){
        _.each(grid, function(row,i){

            _.each(row, function(cell,j){

                ct.A( cjs.rect(30,40).XY(j*100+100, i*100+100))

                if(cell=='guy'||cell=='chicks'){
                    ct.b(cell, function(b){
                        b.xy(  j*100+100,  i*100+100 ).sXY(.1)})}

            })})}



    setTimeout( function(){
        ct.remove()
        s.A( ct = cjs.ct())
        playerGrid()},  3000)



    $.kD('d', dGuy)

    $.kD('r', rGuy)



}


BIRD=function(){w=b2d.W({w:0,g:50})
    w.S( 800,500,'o',100,600).K('plat')
    w.S( 1200,0,'o',100,600).K('plat')
    w.S( 1600,500,'o',100,600).K('plat')
    w.S( 2000,0,'o',100,600).K('plat')
    game=true
    p = w.me(300,0).fixRot().coll('plat',function(){
        if(game){$.pop('you suck!');game=false}})
    cjs.tick(function(){  p.lV(3); w.left(4) }) // odd way?  uses 'w.left' ???
    w.click(function(){p.I(0,-180)})}


