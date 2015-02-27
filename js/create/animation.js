
p = cjs.MovieClip.prototype

////////////////////////////////////////////////////////////


Timeline = EaselTimeline = Tl=function(l){

    l=sTW(l)

    l.ad=function(a,b){var t=this;
        if(iS(a)){t.addLabel(a,b)}
        if(iO(a)){t.addTween(a,b)}
        return t}

    l.currentLabel = l.cL=function(){return this.getCurrentLabel()}


    l.labels = l.lb=function(a){
        var t=this;
        if(U(a)){return this.getLabels()}
        if(O(a)){this.setLabels(a);return this}
        if(N(a) || S(a)){return resolve(a)}
        return this
    }



    l.remove = l.rm = function(a){ this.removeTween(a); return this }


    l.duration = l.uD=function(a){

        if( U(a) ){ this.updateDuration() }

        if( N(a) ){ this.tick(a) }

        return this
    }


    return l

}
SuperTimeline =sTl=function(l){

    l =sTW(l)

    l.ad=function(a,b){var t=this;
        if(iS(a)){t.addLabel(a,b)}
        if(iO(a)){t.addTween(a,b)}
        return t}

    l.cL=function(){return t.getCurrentLabel()}

    l.lb=function(a){var t=this;
        if(a===undefined){return t.getLabels()}
        if(iO(a)){t.setLabels(a);return t}
        if(iN(a)||iS(a)){return resolve(a)}
        return t}

    l.rm=function(a){this.removeTween(a);return this}

    l.uD=function(a){var t=this;
        if(a===undefined){t.updateDuration()}
        if(iN(a)){t.tick(a)}
        return t}
    return l}
TIMELINE=function(){z()

    s =  createjs.stage(500).A().tick()

    s.bm('me', function(bm) {

        s.bm('guy', function (guy) {

            g = guy
            b = bm


            timeline = new createjs.Timeline()

            tween = EaselTween(
                bm, [{sx: 2}, 10000 ])

            tween2 = EaselTween(
                bm, [   {sy: 2}, 10000  ])

            tween3 = EaselTween(
                guy, [{r: 20},10000], [{r: 0},10000]   )

            //the tweens dont have stops!
            stop = function(){  tween.stop(); tween2.stop()  }

            timeline.addTween(tween)
            //   timeline.addTween(tween2)
            timeline.addTween(tween3)

        })   })



}





PIXELPICKSCROLLING=function(){z()

    game =  Game(800, 600, Phaser.CANVAS, 'phaser-example',
        {preload: preload, create: create,  update: update,
            render: render });

    function preload() {
        camSpeed=4

        g = $G(game).ARC().bn(0,0, 4000, 2000)

        g.l.ss('mummy', '/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18)

        g.l.i('stars', '/assets/misc/starfield.jpg')}





    function create() {



        //  Scrolling background
        s = g.tSp(0, 0, 4000, 600, 'stars')
        b=g.sp(0, 300, 'mummy').arc()


        b.scale.set(10)
        b.smoothed = false
        b.an.a('walk')
        b.play('walk', 5, true)


        b.vxy(50, 0)

        //  Listen for input events on this sprite
        b.inputEnabled = true

        //  Check the pixel data of the sprite
        b.input.pixelPerfectClick=true

        b.events.onInputDown.add(tint,this)}

    function tint() {b.tint=Math.random()*0xffffff}

    function update(){

        if (g.iD(Left)){
            g.cm.x-=camSpeed
            if(!g.cm.atLimit.x){
                s.tilePosition.x += camSpeed}}

        if (g.iD(Right)){
            g.cm.x += camSpeed;
            if (!g.cm.atLimit.x){s.tilePosition.x -= camSpeed}}

        if(g.iD(Up)){
            g.cm.y -= camSpeed;
            if(!g.cm.atLimit.y){s.tilePosition.y += camSpeed}}

        if(g.iD(Down)){g.cm.y += camSpeed;

            if (!g.cm.atLimit.y){
                s.tilePosition.y -= camSpeed
            }
        }

    }




    function render(){g.db.spriteInputInfo(b, 32, 32)}
}


MUMMYFLIP=function(){z()

   // s = cjs.stage('green', 1000).A()

      //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW()

    sp = cjs.sprite( Mummy ).drag()

    w.s.A( sp )

    sp.sXY( 2 ).XY( 200 )

    sp.gotoAndPlay('walk')


    sp.rXY( 20, 22 )

    b = b2.box( 100, 100, 50, 88).uD('mummy')

    b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){

        b.rT(0)

        if(direction=='right'){b.I(4, -2)}
         if(direction=='left'){b.I(-4, -2)}

    })

  tr=  w.A( b2.dynamicDef(), b2.triangleFixt    )

    $.kD('u', function(){b.I(0,-80)})

    $.kD('l', function(){
        sp.sX(-2)
        direction='left'

      //  b.I(-6, -2)

    })

    $.kD('r', function(){
        sp.sX(2)
        direction='right'
       // b.I(6, -2)
    })


    move =function(){

        w.eachBody(function(body){
            if(body.uD()!='mummy'){body.X( body.X()+10  )   } })

    }

}

MUMMYSCROLL=function(){z()

    // s = cjs.stage('green', 1000).A()

    //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW()

    sp = cjs.sprite( Mummy ).drag()

    w.s.A( sp )

    sp.sXY( 2 ).XY( 200 )

    sp.gotoAndPlay('walk')


    sp.rXY( 20, 22 )

    b = b2.box( 100, 100, 50, 88).uD('mummy')

    b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){

        b.rT(0)

       // if(direction=='right'){b.I(4, -2)}
       // if(direction=='left'){b.I(-4, -2)}
        b.X(500)
    })

    tr=  w.A( b2.dynamicDef(), b2.triangleFixt    )

    $.kD('u', function(){b.I(0,-80)})

    $.kD('l', function(){
        sp.sX(-2)
        direction='left'

        moveLeft()
        //  b.I(-6, -2)

    })

    $.kD('r', function(){
        sp.sX(2)
        direction='right'
        // b.I(6, -2)
        moveRight()
    })


    moveLeft=function(){

        w.eachBody(function(body){
            if(body.uD()!='mummy'){body.X( body.X()+10  )   } })

    }
    moveRight=function(){

        w.eachBody(function(body){
            if(body.uD()!='mummy'){ body.X( body.X()-10  )   } })

    }
}


THRUSTSCROLL = function(){z()

    // s = cjs.stage('green', 1000).A()

    //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW({grav:0})

     p = w.player('thrust')
    //sp = cjs.sprite( Mummy ).drag()

   // w.s.A( sp )

   // sp.sXY( 2 ).XY( 200 )

  //  sp.gotoAndPlay('walk')


   // sp.rXY( 20, 22 )

   // b = b2.box( 100, 100, 50, 88).uD('mummy')

   // b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){


        w.eachBody(function(body){
            if(body.uD()!='player'){

                body.X(  body.X()+ p.X()  )

            } })

    })



    tr=w.A( b2.dynamicDef(), b2.triangleFixt    )




    moveLeft=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){body.X( body.X()+10  )   } })

    }
    moveRight=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){ body.X( body.X()-10  )   } })

    }
}


butGuy=function() {

    $.kD('l', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {    body.X(body.X()+20)   }})})


    $.kD('r', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {

                body.X( body.X() - 20)
            }
        })
    })


    $.kD('d', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() - 20)
            }
        })
    })


    $.kD('u', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() + 20)
            }
        })
    })

}




BUTME=function(){z()



    w = b2.mW({
        grav:0,
        walls:[]
    })


    //p = w.player('thrust').XY(500,100)

     w.bumper(200,200,100)
    w.bumper(600,300,100)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

   butGuy()

}


BUTME2=function(){

    w = b2.mW({


        grav:0,


        walls:[]


    })



    //p = w.player('thrust').XY(500,100)

    w.brick(100,300,200,30).rT(30)
    w.brick(400,200,400,100).rT(30)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    butGuy()

    cjs.tick(function(){
       // w.each(function(b){ b.rT(  b.rT() + 10) })


        g.XY(400,300)

    })



}



cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

    ssb = new createjs.SpriteSheetBuilder()
    if(mc){ssb.A(mc)}

return ssb}


b = cjs.SpriteSheetBuilder.prototype

b.Z=function(sc){

    if(U(sc)){return this.scale}
    this.scale=sc;return this
}


b.maxW=function(sc){
    if(U(sc)){return this.maxWidth}
    this.maxWidth=sc;return this
}

b.A=function(mc){
    this.addMovieClip(mc)
return this}

b.complete=function(func){
    this.on("complete", func)
return this}


 b.async=function(funcNum,num){
     if(F(funcNum)){
         this.complete(funcNum)
         this.buildAsync(num)
     }

    else{this.buildAsync(funcNum)}


return this}



