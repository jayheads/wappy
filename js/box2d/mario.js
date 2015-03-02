SCALINGLEVEL=function(){
    b2d.level(); w.debug()
    w.ice(800,280, 10000); w.rubber(50,100,300); w.rubber(-400,100,300)
    w.rect(1200,30, 600,4).stat(); w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)

    w.s.XY(300, 150).rXY(300,150)

    p.dif=function(){
        return {x:  600 - this.X(),
                y:  400 - this.Y()}
    }



    getScale=function( ){

        var x = p.X()
        var scale = 1

        x = x - 300

        return scale -  (x/300) * .1
    }



    keepGuyCentered(getScale)


    s2 = cjs.stage(500,500).A()//

    s2.dot(300,250)
    s2.c.drag().XY(0).C('X')//.opacity(.5)


}


keepGuyCentered=function(getScaleFunc){//used in SCALING LEVEL
    //*******

    cjs.tick(function(){ if(O(p.sprite)){
        var x = p.X(),
            y = p.Y(), dif,

            scale = getScaleFunc()
        w.s.sXY(scale)
        w.s.X(300 - ((x - 300) * scale)  )
        w.s.Y(150 - ((y - 150)  ) * scale )}})

}



ZOOM= function(){z()

    s = cjs.stage(500,500).A()//
    cjs.tick(function(){$l('scale: '+ s.scaleX + ' - - - centerXY: ?')})

  //  s.bm('chicks', function(chicks){chicks.XY(0,0);  s.bm('me', function(bm){b = bm.XY(250)})  })

   // s.sXY(.1).tweenLoop(  [{sxy:5}, 3000],    [{sxy:.1}, 3000]  )
    s.XY(300, 150).rXY(300,150)

s.bm('chicks', function(chicks){

    c = chicks.XY(300,250).sXY(.3)
})


    s2 = cjs.stage(500,500).A()//


    s2.dot(300,250)
    s2.c.drag().XY(0).C('X')//.opacity(.5)



    s.chalk(' --------- - - - - ---- - - - - - - - - -- - -  ----> stage coords: 300, 150 ',
     ' --------- - - - - ---- - - - - - - -  ---->   and stage regX/Y is the same',
    '- - - - --- - - - --- - - - --- keep pc centered at 300,250 as you scale')

}




b2d.level=function(){

    var width=600,
        height=300,
        gravity=400




    w = b2d.mW({

        W:width,
        H:height,
        grav:gravity,
        walls:0 //walls:b2d.miniWalls


    })

    floor = w.rect(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
    right = w.rect(0, height / 2, 40, height, 'pink').stat().K('rightWall').fric(.5).rest(.5)

    p = w.player(2.5)

    p.trig('feet', function(){})


    cjs.tick(function(){p.rot(0)


        if(p.trig.feet && cjs.Keys.up){
            if(cjs.Keys.right){p.linVel(20, -60) }
            else if(cjs.Keys.left){p.linVel(-20, -60) }
            else {p.linVel(0, -80)}
        }

        else{

               // if (cjs.Keys.right) {p.linVel(40, -10)}
               // else if (cjs.Keys.left) {p.linVel(-40, 10)}


            if (cjs.Keys.right) {p.I(10, -5)}
            else if (cjs.Keys.left) {p.I(-10, -5)}
        }

        if (cjs.Keys.down){
            p.trig.feet='true'
            p.I(0, 20)}

    })

    //p.angDamp(100)


    p.Y(200).horizCenter().den(1).fric(.2).rest(.2)

}
b2d.levelScrollX=function(){
    b2d.level()
    right.kill()
    w.s.XY(300, 150).rXY(300, 150)
    p.followX(600, 400)
    w.debug()
}
b2d.levelScroll=function(){
    b2d.level()
    w.s.XY(300, 150).rXY(300, 150)
    p.follow(600, 400)
    w.debug()
}
b2d.levelScrollScale=function(){}


b2d.levelSpace=function(){

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


    p= w.player(2.5, 'thrust').Y(200).horizCenter()

    p.angDamp( 10000 )

    p.follow(300, 150)

    w.debug()



    _.times(30, function(){var x,y

        x= (Math.random() * 1000) - 500

        y = (Math.random() * 800) - 400

        w.circ(x, y, 2,'white').den(0).rest(2)

    })

}



b2d.levelJet=function(){

    var width=600,
        height=300,
        gravity=10

    w = b2d.mW({

        W:width,
        H:height,
        grav:gravity,
        walls: b2d.miniWalls


    })

    floor = w.rect(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
    right = w.rect(0, height / 2, 40, height, 'pink').stat().K('rightWall').fric(.5).rest(.5)


    p= w.player(2.5,'thrust')
    //p.angDamp(100)


    p.Y(200).horizCenter().den(1).fric(.2).rest(.2)



}




b2d.levelAutoScroll=function(num){
    num=num||4
    b2d.level()
    right.kill()

    setup=function(){
        score=0
        p.XY(150, 100)
        p.linVel(0,0)
        w.s.XY(0,0)}

    setup()
    cjs.tick(function(){
        w.s.X(num,'-').pen(score++)
        if( p.relPos() < -100 ){setup()}})

    w.debug()
}


MARIOORBIT=function(){
    b2d.levelSpace()

   var northStar= w.circStat(200,200,10,'pink')

    w.spring(p, northStar).freq(.2).damp(4)}



MARIOSPACEZOOM=function(){


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


    p= w.player(2.5, 'thrust').Y(200).horizCenter()

    p.angDamp( 10000 )


    w.debug()

    w.s.rXY(300,150)

    _.times(30, function(){var x,y

        x= (Math.random() * 1000) - 500

        y = (Math.random() * 800) - 400

        w.circ(x, y, 2,'white').den(0).rest(2)

    })

    var northStar= w.circStat(200,200,10,'pink')
    w.spring(p, northStar).freq(.25).damp(2)

    keepGuyCentered(function(){var dx,dy,dst

         dx =    northStar.X()-p.X()
         dy =     northStar.Y()-p.Y()

        dst = Math.sqrt( (dx * dx) + (dy * dy) )
        $l('distance from star :'+ dst + ' - scale: ' + w.s.scaleX)
        return 300/dst


        //instead of distance by diagnal distance, try just adding x and y distances

    })





}













LEVELFRICTION=function(){b2d.level()

    w.rectStat(100,270,200,30,'white').rest(0).fric(0) //ice
    w.rectStat(325,270,230,30,'green').rest(.3).fric(.3)
    w.rectStat(550,270,200,30,'red').rest(.7).fric(.3) //rubber

    w.s.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f',
        'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')} //convert to groundsprites
GROUNDSPRITES =function(){

    b2d.levelScrollX()

    w.ice(30,250,400)
    w.grass(450,250,400)
    w.grass(500,100,4000)
    w.rubber(880,250,40000)

}
SCROLLINGLEVEL=function(){

    b2d.levelScroll()
    w.grass(300,280,500)
    w.ice(1300, 280, 1000)
    w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
}
SLIDE=function(){
    b2d.levelScroll()
    w.clouds().clouds(-500,-200)//.clouds(1000,-200)
    w.grass(300,280,500)
    w.ice(800,280, 5000)
    slide = w.rect(900, 30, 1200,40, 'blue').den(1).fric(.5).rest(.5)
    p.Y(0)}
SCALINGLEVEL2=function(){


    b2d.level()
    w.s.rXY(300,150)
    w.s.XY(300, 150)


    p.dif=function(){



        return {

            x:  600 - this.X(),
            y:  400 - this.Y()

        }
    }

    w.debug()






    w.rect(1200,30, 600,4).stat()

    //w.circ(200,130, 6).stat()
    //w.circ(100,200, 6).stat()


    w.clouds(500,-200)
        .clouds(1000,-200)
        .clouds(-500,-200)

    corr =function(){

        //cjs.Tween.removeAllTweens()


        var sc=w.s.scaleX


        if(sc > 1) {

            w.s.X( p.dif().x / (sc *.9))

            w.s.Y( p.dif().y / (sc * 1.1))

        }






        else if(sc < 1) {
            w.s.X(p.dif().x * sc)

            w.s.Y(p.dif().y * sc)

        }



        // w.s.tween(  [{x: p.dif().x},  000]   )
        // w.s.tween(  [{y: p.dif().y},  1000]   )

        //  cjs.Tween.get(w.s, {override:true}).to({y: p.dif().y}, 5000)

        // cjs.Tween.get(w.s , {override:true}  ).to({  y: p.dif().y * w.s.scaleY }, 2000)

    }

    /// 0:1,  300:1.1, 600:1.2


    getScale=function(y){var sc

        sc=1

        y = y-300

        sc -=  (y/300)*.1


        return sc}


    //  cjs.Tween.get(w.s).to({scaleX:1.3,scaleY:1.3}, 2000).to({scaleX:.7,scaleY:.7}, 6000).to({scaleX:1,scaleY:1}, 3000)

    cjs.tick(function(){

        if(O(p.sprite)){
            corr()
            w.s.sXY( getScale(p.X()) )
        }//

    })



    w.ice(800,280, 10000)
    //iceGround(  800   )
    // grassGround(  300   )
    w.rubber(50,100,300); w.rubber(-400,100,300)
}

GAMEBOX=function(){z()



    d=$.div('yellow', 500,40).A().pad(2)
    data = d.data=function(str){
        if(U(str)){str='data'}
        this.E($.h4(str))}

    w = b2d.mW({

        z:false,

        // H:600, W:400

        W:1000,  H:500, grav:10  , walls:b2d.miniWalls

    })

    p= w.player(3,'thrust')

}



b2d.miniWorld=function(){z()
    d = $.div('yellow', 500,40).A().pad(2)
    w=  b2d.mW({ grav:10, W:500, H:400, walls:b2d.miniWalls})
    p = w.player(2, 'thrust')

    data=function(str){
        if(U(str)){str='data'}
        d.E($.h4(str))
    }

    return w}


rayLine=function(x1, y1, x2, y2){
    x1=N(x1)?x1:0
    y1=N(y1)?y1:0
    x2=N(x2)?x2:100
    y2=N(y2)?y2:100
    if(line){line.remove(); line=null}
    line = cjs.shape()
    line.graphics.s('white').mt(x1,y1).lt( x2,y2)
    w.s.A(line)}
removeDots=function(){
    getDots=function(){


        var arr=[]

        _.each( w.s.children, function(c){

            if(c.N() == 'dot'){

                arr.push(c)}

        })

        return arr
    }
    dots = getDots()

    _.each(dots, function(dot){dot.remove()})

}



RAYCAST=function(){

    b2d.miniWorld()

    firstPoint = secondPoint = line = null

    w.brick(200,200,40,20)

    w.s.on('stagemousedown', function(ev){e=ev;x = e.rawX; y= e.rawY

        if(firstPoint == null){firstPoint = {x: x, y:y}}

        else {
            if(secondPoint == null){secondPoint = {x: x, y:y}}
            else{firstPoint = secondPoint; secondPoint = {x: x, y:y}}
            removeDots()
            w.s.dot('blue', firstPoint.x, firstPoint.y)
            w.s.dot('red', secondPoint.x, secondPoint.y)
            rayLine(firstPoint.x, firstPoint.y,secondPoint.x, secondPoint.y )

            n = 0
            w.rayCast(function(fixt){
                    n=n+1; f=fixt; b=fixt.GetBody()
                    w.s.dot( b.X(), b.Y())},
                firstPoint, secondPoint)
            data(n + ' guys')
        }})
}

BADDIE=function(){

    b2d.miniWorld()


    b = w.ball(300,100,12)

    g = b.bindSprite('guy',.2)

    cjs.tick(function(){
        g.rot(0)
    })

}

DENSITY=function(){z()

    w=b2d.mW({
        grav:0,
        W:600,
        H:500
    })


      w.ball(200,100, 10)
      w.ball(100,100, 5.65)
      w.ball(300, 200, 40)


    w.box(200,200, 10,10)
    w.box(200,200, 100,100)

   // w.s.dot(100,100)

    w.bodyClick(function(){
        $l('mass: ' + this.mass().toFixed(3))
    })


}



MARIOSHOOT=function(){



    w = b2.mW({grav:500})


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



    //cjs.watchKeys()

    w.footListener()
    w.startKilling()


    p = w.addMe()



    p.angDamp( 10000 )

    cjs.tick(function(){
        p.rot(0)




        if(cjs.Keys.up){//if holding jump


            //
        }



        else{
            if(cjs.Keys.right){p.impulse(10,0)}
            else if(cjs.Keys.left){p.impulse(-10,0)}

        }
    })

    $.kD('u', function(){
        w.ball(200,400,10).linVel(40,-80)
    })

    w.box(800,100).bindSprite('guy')

}

MARIOJET=function(){



    w = b2.mW({grav:500})


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



    //cjs.watchKeys()

    w.footListener()
    w.startKilling()


    p = w.addMe()



    p.angDamp( 10000 )

    cjs.tick(function(){
        p.rot(0)


        if(b2.onGround){


            if(cjs.Keys.up){//if holding jump

                if(cjs.Keys.right){p.linVel(20,-80)}
                else if(cjs.Keys.left){p.linVel(-20,-80)}
                else{p.linVel(0,-90)}

            }




            else{



                if (cjs.Keys.left) {// p.dir(0);
                    if(cjs.Keys.down){p.impulse(-4,0)}
                    else {p.linVel(-40, 0)}
                }

                if (cjs.Keys.right) {//p.dir(1);
                    if(cjs.Keys.down){p.impulse(4,0)}
                    else{p.linVel(40, 0)}
                }
            }



        }


        else{
            if(cjs.Keys.right){p.impulse(10,0)}
            else if(cjs.Keys.left){p.impulse(-10,0)}

        }
    })


    w.box(800,100).bindSprite('guy')

}






RAMPS=function(){b2d.levelScrollX(); w.ramps()}
AUTOSCROLL=function(){b2d.levelAutoScroll(); w.ramps()}
MARIO=function(){
    b2d.levelAutoScroll(1)
    w.rectStat(200,200,100,100,'yellow')
    w.rectStat(240,150,180,30)
    w.rectStat(420,30,180,30)
    w.rectStat(560,150,300,30)
    w.rectStat(600, 100, 180,30)
    w.goomba(800).fric(0)}





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


