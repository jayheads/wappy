WEBMAN = function(){


     w = b2d.W({ g:40 })

   // w = wor({g:40})


    w.roof.kill();   w.right.kill();   w.left.kill()

    block(400, 100)
    block(800, 0)
    block(1100, -50)
    block(1300, -200)

    function block(x,y){return  w.rect(  x,  y,    50, 50 ,'t' ).stat().K('randomRect')}

    w.goal(1800, 0)

    p = w.webMe(394,530).den(.14).fric(1)
    p.canWeb=true

    $.key(

        {

        right:function(){
            if(cjs.Keys.down){
                p.didShoot = true
                if(!F(p.shotClock)) {p.shotClock=cjs.stopWatch()}}
            else {
                if (p.isConnected()){p.F(100,0)}
                else {p.I(8, 0)}}},
        left:function(){
            if(cjs.Keys.down){
                p.didShoot = true
                if(!F(p.shotClock)) {p.shotClock=cjs.stopWatch()}}
            if(p.isConnected()){p.F(-250,-50)}else {p.I(-8,0)}},
        up: function(){
            var web, ball, num, firstWeb=_.first(p.webs), iX, iY
            if(p.canWeb) {
                if (p.isConnected()  && !p.webs[1]){
                    web = p.web(3000)
                    ball = web.ball.XY(p.X(), p.Y() - 100)
                    num = Math.abs(p.linVel().x * 2) // p.vX | vY | vR
                    iX = cjs.Keys.right ? num : cjs.Keys.left ? -num : 0
                    iY = -30
                    ball.I(iX, iY)
                }
                else { if( !p.webs || !p.webs[0] ){



                    web = p.web(3000)
                    ball = web.ball.XY(p.X(), p.Y() - 100)

                    if (cjs.Keys.left) {
                        ball.I(-30, -40)
                    }
                    else if (cjs.Keys.right) {
                        ball.I(30, -40)
                    }
                    else {
                        ball.I(0, -70)
                    }
                }}}
            p.canWeb = false},
        RIGHT:function(){
            if( A(p.webs) && p.webs[1] ){  p.webs[1].die()   }
            if(cjs.Keys.down){p.shootRight()}},
        LEFT:function(){
            if( A(p.webs) && p.webs[1] ){  p.webs[1].die()   }
            if(cjs.Keys.down){p.shootLeft()}},
        UP: function(){
            var connected = _.reject(p.webs, function(web){return !web.connected})
            if( A(connected) && connected[0] && connected[1]   ){  _.first(connected).die()  }
            p.canWeb = true
            p.shotForce=0},
        DOWN:function(){
            if(!p.didShoot){if(p.webs[0]){_.first(p.webs).die()}}
            p.didShoot=false}

    }

    )

 


    w.beg(function(cx){var fixt, web
        if((fixt = cx.with('webBall','randomRect'))){
            //p.canWeb=true
            var ball= fixt[0].body(), rect = fixt[1].body(),
            web = _.findWhere(p.webs, {ball: ball})
            if(!web.connected){web.attach(rect)}}}).debug()

    w.s.tickX(function(){return 600- p.X()})
    w.s.tickY(function(){return 510- p.Y()})}
SPACEZOOM=function(){


    var width=600,
        height=300,
        gravity=0

    //gotta make guy heavier
    //thrust is good with grav 10 !!!!
    // , walls:b2d.miniWalls

    w = b2d.mW({
        W:width,
        H:height,
        grav:gravity,
        walls:0
    })
    earth =  northStar= w.bump(200,200,100,'pink').den(1).rest(2).K('earth') //stat?  why dont i collide?

    northStar.bindSprite('earth',.13)

    setTimeout(function(){

        earth.sprite.tweenLoop([{r: 360}, 10000])

        earth.sprite.tweenLoop([{kx:16}, 3000],[{kx:0}, 3000])

        w.s.tweenLoop([{kx:8}, 1000], [{kx:0}, 1000] , [{ky:8}, 1000], [{ky:0}, 1000]      )
        //  w.s.tweenLoop([{r: 360}, 10000])



        p.collWithKind('star', function(){

            p.sprite.tween([{kx:40},100],[{ky:40},100],[{kx:0,ky:0},100] )

        })

        earth.collWithKind('star', function(){

            w.s.flash()
        })


    }, 300)

    p= w.player(2.5, 'thrust')
        .Y(200).horizCenter()

    p.angDamp(8 )

    p.SetLinearDamping(.8)

    w.debug()

    w.s.rXY(300,150)

    _.times(80, function(){var x,y

        x= (Math.random() * 2000) - 750

        y = (Math.random() * 1600) - 600

        w.circ(x, y, 4, 'white').den(0).rest(2).K('star')

    })










    w.distColl(p, northStar).freq(.15).damp(0).len(50)



    scaleFunc = function(){var dx,dy,dst
        dx =    northStar.X()-p.X()
        dy =     northStar.Y()-p.Y()
        dst = Math.sqrt( (dx * dx) + (dy * dy) )
        //$l('distance from star :'+ dst + ' - scale: ' + w.s.scaleX)
        dst =  300 /dst
        return dst>2?2:  dst <.3? .3: dst}

    keepGuyCentered(scaleFunc)
    //instead of distance by diagnal distance, try just adding x and y distances




    cjs.tick(function(){
        w.s.alpha =scaleFunc()*2
        earth.sprite.alpha =scaleFunc()
    })

}
COINWARP=function(){

    b2d.levelWarp()

    p.linDamp(1)

    _.times(2, function() {

        w.greenGuy(Math.random()*600).marioWarping()//.I((Math.random()*20)-10,(Math.random()*20)-10)

    })

    p.K('bullet')

    setInterval(coin, 300)

    p.marioWarping()

    score=0
    badScore=0

    w.begin(function(cx){

        if(cx.with('coin')){


            if(cx.a().K( )=='coin'){
                cx.a().setDestroy()

                if(cx.b().K()=='bullet'){score++}
                if(cx.b().K()=='greenGuy'){badScore++}
            }

            if(cx.b().K( )=='coin'){
                if(cx.a().K()=='bullet'){score++}
                if(cx.a().K()=='greenGuy'){badScore++}
                cx.b().setDestroy()}

        }

    })



    w.startKilling()


    setInterval(function(){

        w.s.pen( score + ' / '+ badScore)
    }, 3000)
}


KILLEVERYTHING=function(){w=wor()

    w.s.XY(120,50).sXY(.8)

    body = w.rect(255,50, 60,15,'g').stat()
    link = body

    for ( var i = 1; i <= 10; i++ ){


        body = w.rect(255, i*30, 3, 15, 'w').den(1).fric(0).rest(0)
        w.rev(link, body)
        link = body

    }




    body = w.circ(255, 330, 20, 'd').den(1).fric(0).rest(2)
    w.rev(link, body)


    w.randRects()
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

    _.times(8, function(){m=w.addMe().den(0).XY(700,400)})
    _.times(4, function(){m=w.addMe().den(0).XY(700,300)})
    _.times(1, function(){m=w.addMe().den(0).XY(700,200)})

    y = w.ship()
    w.debug()
    f=null

    w.beg(function(cx){var fixt

        if(fixt = cx.with('bul')){f=fixt

            b = fixt.body()

            if(b != y){b.setDestroy()  }

        }

    }).startKilling()

    cjs.tick(function(){
        w.each(function(b){
            if(b.Y()> 800){b.kill()}
        })
    })

    w.show(function(){return w.GetBodyCount()
    })
}



CHEMICALS = function self(){
    w=b2d.W({
    walls: 0
}).debug()

    w.s.sXY(.8).XY(125,50)

_.times(2, function() {

    w.randRects({y:0,z:3})
    w.randRects({y:100,z:3})
    w.randRects({y:200,z:3})
    w.randRects({y:300,z:3})
    w.randRects({y:400,z:3})

})



    w.Q(function(f, b){  b.kill(); return true  },
        550, 250,

        650, 350
    )



    y = w.ship().XY(600,300).K('ship')



    w.Q(function(f, b){  b.kill(); return true}, 350,  50,    450, 150)
    _.times(80, function(){  w.circ(400, 80,8,'r').K('circ')  })


    w.Q(function(f, b){  b.kill(); return true}, 850,  50, 950, 150)
    _.times(80, function(){   w.rect(900, 100, 14,14,'b').K('rect')  })


gameOver=false


    w.beg(function(cx){var fixt,body



            if(fixt = cx.with('bul')){
                body = fixt.body()
                if(body != y){body.setDestroy()}
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



MARIOMAZE=function(){
    b2d.levelSpace()

    //ceiling.kill(); //right.kill()

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


    w.begin(function(cx){

        if(cx.with('player', 'grid')){ score--


        }})

    // grid.angDamp(1)

    p.XY(220, 70)
}

//

MARIOBIG=function(){





    w = b2.mW({
        grav:500,
        walls:0

    })


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




    w.footListener()
    w.startKilling()


    p = w.addMe().XY(300,-300)



    p.angDamp( 10000 )


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

    w.circ(100,100,50, 'a')
    w.circ(100,200,40, 'c')

    w.circ(100,100,50, 'd')
    w.circ(100,200,40, 'e')
    w.circ(100,100,50, 'f')
    w.circ(100,200,40, 'h')
    w.circ(100,100,50, 'i')
    w.circ(100,200,40, 'j')
    w.circ(100,100,50, 'k')
    w.circ(100,200,40, 'l').den(.1)

    range = w.prism(
        w.rect(600,300,220, 20, 'q').stat(),
        w.rect(600, 300,20, 250, 's').linDamp(10)
    ).lm(-100,100)

    w.show(function(){return 'Welcome to Gravity Range: Current gravity is ' + range.val()  })


    y= w.yShip().thrustControl().angDamp(1).shootOnSpace()

    cjs.tick(function(){

        w.G( range.val() )
        y.linDamp(10)

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



SHIPSPRITE=function(){

//look, no vars!
    b2d.W({g:3})
        .chalk('spritebox example')
        .spriteBox({
            "framerate":24,
            "images":["thrusty.png"],
            "frames":[
                [0, 0, 512, 512, 0, -53, -36],
                [512, 0, 512, 512, 0, -53, -36],
                [1024, 0, 512, 512, 0, -53, -36],
                [0, 512, 512, 512, 0, -53, -36],
                [512, 512, 512, 512, 0, -53, -36],
                [1024, 512, 512, 512, 0, -53, -36],
                [0, 1024, 512, 512, 0, -53, -36],
                [512, 1024, 512, 512, 0, -53, -36],
                [1024, 1024, 512, 512, 0, -53, -36],
                [0, 1536, 512, 512, 0, -53, -36],
                [512, 1536, 512, 512, 0, -53, -36]],
            "animations":{
                "die": {"speed": 1, "frames": [8, 9, 10], next:false},
                "shoot": {"speed": 1, "frames": [1,2,3,4,0], next:false},
                "thrust": {"speed": 1, "frames": [5, 6, 7,0], next:false}}
        }).thrustify()
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
