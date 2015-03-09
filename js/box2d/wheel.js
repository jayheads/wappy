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


FLOCKING=function(){

    //these just thrust and dont
    //otherwise apply forces to neighbors.  but what if
    //they 'SUCKED' instead of 'thrusted' ?
    //is that the same as having a gravitational inwards force?

    var w=b2d.W({g:0})


    //  y = $ys(300, 200, 3).angDamp(0).linDamp(1)


    var n = 0
    _.times(40, function(){window['y'+ n++]= w.yShip().chug()})

    y = w.yShip('o').thrustControl()

    _.times(40, function(){window['y'+ n++]= w.yShip().chug()})


    I(function(){

        if(y.going()){ w.s.c.C('p') } else { w.s.c.C('z') }


    },100)

    w.debug()}


GRAVITYRANGE=function(){w=b2d.W({g:10})

    w.ball(100,100,50)
    w.ball(100,200,40)

    w.ball(100,100,50)
    w.ball(100,200,40)
    w.ball(100,100,50)
    w.ball(100,200,40)
    w.ball(100,100,50)
    w.ball(100,200,40)
    w.ball(100,100,50)
    w.ball(100,200,40)

    range = w.prism(
        w.brick(600,300,220, 20),
        w.box(600, 300,20, 250).linDamp(10)
    ).lm(-100,100)

    w.show(function(){return 'Welcome to Gravity Range: Current gravity is ' + range.val()  })


    y= w.yShip().thrustControl().angDamp(1).shootOnSpace()

    cjs.tick(function(){

        w.grav( range.val() )
        y.linDamp(10)

    })
}

