cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)} //= SS$
ss = cjs.SpriteSheet.prototype
ss.addFlipped=function(a, b, c){
    cjs.SpriteSheetUtils.addFlippedFrames(this,  a||true, b||false, c||false )
    return this}
///////////////////////////////////////////////////////////////////////////////




cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

    if(spriteSheet.images){

        spriteSheet=cjs.parseZoe(spriteSheet)
        spriteSheet=new cjs.SpriteSheet(spriteSheet)
    }


    return new cjs.Sprite( spriteSheet )

}
cjs.sprite100 = function(a){

    var spr = cjs.sprite(a)
    spr.rXY(50)
        .opacity(.8)
    return spr}


s=cjs.Sprite.prototype
s.p = function(what){
    if(U(what)){this.play()}
    else {this.gotoAndPlay(what)}
    return this}
s.s= s.P=function(what){if(U(what)){this.stop()}
    else {this.gotoAndStop(what)};return this}
s.skip=s.adv=function(num){this.advance(num);return this}
s.cA = s.cAn = s.currAnim=function(){return this.currentAnimation}
s.cAF= currAnimFrame = function(){return this.currentAnimationFrame}
s.cF = s.cFr = s.currFrame=function(){return this.currentFrame}
s.fR = s.rate = function(rate){
    if(U(rate)){return this.framerate}
    this.framerate=rate
    return this
}
s.end=function(func){

    func=func||function(){

        n = N(window['n'])?n:0

        $l('frame! '+ n++)}


    this.on('animationend', func)
return this}










showSprite=function(sprite){z()
    spr=cjs.sprite(sprite)
    s = cjs.stg(1000).A()
    s.A(spr.drag())
}






ZOE=function(){z()

    spr = cjs.sprite({

        "framerate":24,
        "images":["/zoetest.png"],
        "frames":[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]
        ],
        "animations": {}
    })

    s = cjs.stg(1000).A()
    s.A(spr)

}
ZOESPRITE=function(){z()



    spr = cjs.sprite({
        "framerate":24,
        "images":["/sprite2.png"],
        "frames":[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]
        ],
        "animations":{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    })


    anis = spr.spriteSheet._animations

    aniNames = _.keys(anis  )


    // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })





    s = cjs.stg(1000).A()
    s.A(spr.drag())
}


CHAR0=function(){showSprite(Sprites.char)}


CHAR=function(){z()

    w=b2.mW()


    spr=cjs.sprite(Sprites.char)

    //s = cjs.stg(1000).A()

    w.s.A(spr.drag())

    b= w.ball(200,200,60)
    b.bindSprite2(spr)
    spr.rXY(275,220)

   w.brick(100,500,100,100).K('hurt').bindSprite('guy',.6)

    w.brick(500,500,100,100).K('fly').bindSprite('guy',.6)


    w.begin(function(cx){

        if(cx.involves('hurt')){
            spr.p('hurt')
            b.I(400,-800)
        }

    if(cx.involves('fly')){
        spr.p('fly')
        b.I(-400,-800)
    }

})

    w.debug()

}




CHAR2=function(){z()

    w=b2.mW()


    spr=cjs.sprite(Sprites.char2)

    w.s.A(spr.drag())

    b= w.ball(200,200,60)
    b.bindSprite2(spr)
    //spr.rXY(275,220)

    w.brick(100,500,100,100).K('hurt').bindSprite('guy',.6)

    w.brick(500,500,100,100).K('fly').bindSprite('guy',.6)


    w.begin(function(cx){

        if(cx.involves('hurt')){
            spr.p('hurt')
            b.I(400,-800)
        }

        if(cx.involves('fly')){
            spr.p('fly')
            b.I(-400,-800)
        }

    })

    w.debug()

}


cjs.parseZoe=function(sprObj){


    //fix source (needs a '/')
    sprObj.images[ 0 ] = _.ensureSlash( sprObj.images[0] )

    //set next to false, on all anims
    //_.each(sprObj.animations, function(anim){anim.next = false})


    //to do: parse it! (get rid of unnecessary json strings in keys)


    return sprObj}

SQUARE=function(){z()

    w=b2.mW()

  o= {

        "framerate":24,
        "images":["square.png"],
        "frames":[[0, 0, 256, 128, 0, -208, -169]],
        "animations":{}

    }


    spr=cjs.sprite(o)

    w.brick(100,200, 400,20)
    //spr.rXY(  280,237     ) //spr.rXY(  200,200     )


    b = w.box(100,100, 100, 100).bindSprite2(spr)


    w.s.chalk(
        'spr.rXY(  258, 220  )',
        'box 100 x 100',
        'spr 256 x 128'
    )}



SQUARE2=function(){z()

    w=b2.mW()


    spr=cjs.sprite100({

        "framerate":24,

            "images":["square2.png"],

            "frames":[[0, 0, 128, 128, 0, 0, 0]], //x,y,w,h,imgIndex, rX,rY

            "animations":{}})

    w.brick(100,300, 400,20)

    b = w.box(200,100, 100, 100).bindSprite2(spr)

    w.s.chalk('hello')


    i= $.img100().A().drag()



}




cjs.spriteBox=function(data,x,y){var sp,b

    //400 x 400 flash squares

    x=N(x)?x:300
    y=N(y)?y:x

    b=w.box(x,y, 100, 100).bindSprite2(
        cjs.sprite(data).rXY(200).sXY(.5)
    )

    return b}


SHIPSPRITE=function(){z()
    w=b2.mW({grav:3})
    data={
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
            "thrust": {"speed": 1, "frames": [5, 6, 7,0], next:false}}}
    b=cjs.spriteBox(data);
    thrustify(b)

    w.s.chalk('spritebox example')

}


STICK=function(){z()
    w=b2.mW({grav:3})
    data={

        "framerate":4,

        "images":["stick.png"],
        "frames":[
            [0, 0, 512, 512, 0, -22, -2],
            [512, 0, 512, 512, 0, -22, -2],
            [1024, 0, 512, 512, 0, -22, -2],
            [0, 512, 512, 512, 0, -22, -2],
            [512, 512, 512, 512, 0, -22, -2],
            [1024, 512, 512, 512, 0, -22, -2],
            [0, 1024, 512, 512, 0, -22, -2],
            [512, 1024, 512, 512, 0, -22, -2],
            [1024, 1024, 512, 512, 0, -22, -2],
            [0, 1536, 512, 512, 0, -22, -2],
            [512, 1536, 512, 512, 0, -22, -2],
            [1024, 1536, 512, 512, 0, -22, -2]
        ],
        "animations":{
            "die": {"frames": [8, 9, 10], "speed": .1,next:false},
            "walk": {"frames": [1, 2, 3, 4], "speed": .1},
            "jump": {"frames": [5, 6, 7,0], "speed": .1,next:false}
        }
    }
    b=cjs.spriteBox(data);
    b.sprite.sXY(.25)

    w.s.chalk('spritebox example')


    mario(b)



    w.box(600,200)
    w.ball(600,100)

    //w.debug()




}

mario=function(p){
    canJump=true

    //cjs.watchKeys()

    cjs.tick(function(){

        p.rot(0)
        b2.onGround=true
        // if on ground
        if(b2.onGround){
            // if jumping

            if(cjs.Keys.up){
                if(canJump==true){

                p.sprite.p('jump')


                p.impulse(0, -44)

                canJump=false
            }}

            // if not jumping
            else {
                if(cjs.Keys.left) {// p.dir(0);
                    p.impulse(-20, 0)}
                if(cjs.Keys.right){
                    //p.dir(1);
                    p.impulse(20, 0)
                }}
        }

        // if in air !!!
        else {
            if (cjs.Keys.left){p.dir(0);p.impulse(-1,0)}
            if (cjs.Keys.right){p.dir(1);p.impulse(1,0)}}
        })

    p.GetWorld().begin(function(){
        canJump=true
        p.sprite.p('walk')
    })

return p}








thrustify=function(p){//takes a spritebox!
    //cjs.watchKeys()

    var spr= p.sprite
    cjs.tick(function () {

        if (cjs.Keys.left) {
            p.rot(p.rot() - 8)
        }
        if (cjs.Keys.right) {
            p.rot(p.rot() + 8)
        }
        if (cjs.Keys.down) {
             spr.p('thrust')
            vec = p.GetWorldVector(b2.V(0, -100))
            p.impulse(vec.x / 40, vec.y / 40)
        }

        if (cjs.Keys.up) {
             spr.p('shoot')

        }


    })

}





$.img100=function(){
    return $.img('me').XY(300,200).C('y').opacity(.9).WH(100)
}




String.prototype.ensureSlash=function(){
    var hasSlash = this[0] = '/'
    return hasSlash? this: '/'+this}

_.slash =_.ensureSlash=function(str){
    var hasSlash = str[0] == '/'
    return hasSlash? str: '/'+str}











Sprites={}

Sprites.char={
    framerate:24,
    images:["/char.png"],
    frames:[
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]],

    animations:{
        df: {"frames":[0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1,next:false},
        die: {"frames": [4,5], speed: .1, next:false},
        hurt: {"frames": [4,4,4,5,5,5,4,4,5,5,4,5,0], speed:.4, next:false},
        fly:{"frames":[6,6,7,8,9  ], speed:.3},
        nuts:{frames:[3,8,2,9,2,4,5,6,5,4,5,3]}

    }}


Sprites.char2={
    framerate:24,
    images:["/char2.png"],

    "frames":[
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]
    ],

    animations:{
        df: {"frames":[0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1,next:false},
        die: {"frames": [4,5], speed: .1, next:false},
        hurt: {"frames": [4,4,4,5,5,5,4,4,5,5,4,5,0], speed:.4, next:false},
        fly:{"frames":[6,6,7,8,9  ], speed:.3},
        nuts:{frames:[3,8,2,9,2,4,5,6,5,4,5,3]}

    }}

