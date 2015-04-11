b =  b2.Dynamics.b2Body.prototype


b.stg=function(){return this.wor().s}


b.$=    b.click= function(func){var b=this, w=this.wor()
        w.s.on('stagemouseup', function(e){

            w.queryPoint(function(f){
                    if(b==f.B()){_.bind(func,b)(f)}
                },
                e.rawX, e.rawY)
        })

    return b}






b.dot=function(c){//b.dot() // dots the center of mass, not xy ??!!!

    var b=this,
            s= b.stg(),
            g= G(arguments)

        c = oO('c', g[0]||'y')

        if(g.p){ s.dot(c, b.cent()) }  else { s.dot(c, b.X(),b.Y()) }

    return b

}



b.horizCenter=function(){return this.X( this.wor().s.W() / 2  )} //move to x-middle of stage


b.img= b.bS=b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
        var body = this, b=this, stage = body.wor().s, g=G(arguments)
        if(!S(g[0])){return b.bS2.apply(b,g)}
        scale = scale || .4
        startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
        stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
            if (A(scale)) {
                bm.sXY(scale[0], scale[1])
            } else {
                bm.sXY(scale)
            }


            body.sprite = bm  //only one???

            updateSprite()
            cjs.tick(updateSprite)

            function updateSprite() {
                bm.XY(body.X(), body.Y()) //can simplify?

                bm.rotation = body.rot() + startingRotation
            }


        }, '-') // what is this negative doing ?????
        return body
    }



b.bS2= b.bindSprite2 = function (obj, startingRotation, x, y) {
        //takes any display object.  right now, just used for shapes
        //because bindSprite fetches the bm's by string.
        //but when i set up preloader, then i would use this i suppose :)
        x = N(x) ? x : 0;
        y = N(y) ? y : 0
        var body = this,
            stage = body.GetWorld().stage
        //  stage.A( displayObject = obj )
        startingRotation = N(startingRotation) ? startingRotation : 0
        body.sprites = body.sprites || []
        body.sprites.push(obj)
        body.sprite = obj
        body.sprite.a2(stage)

        //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
        cjs.tick(function(){
            if(!body.sprite){return}

            _.e(body.sprites, function (sprite) {
                sprite.XY(
                        body.X() + (x || 0),
                        body.Y() + (y || 0)
                )

                sprite.rotation = body.rot() + startingRotation

            })})

        return body
    }



b.p= b.play = function (a, b, c, d) {var b=this
        if(O(b.sprite)){b.sprite.p(a, b, c, d)}
        return b}



b.s= b.stop=function (a, b, c, d) {var b=this
        if (O(b.sprite)){b.sprite.s(a,b,c,d) }
        return b}



b.centerScale = function(z){var b= this, w=b.wor(),s= b.stg()

        s.sXY(z)
        s.X(w.hW - ((b.X() - w.hW) *z))
        s.Y(w.hH - ((b.Y() - w.hH))*z)
        return b
    }


    b.color = function (c1, c2) {var b=this

        c1 = c1 || 'b'
        c2 = c2 || c1

        _.e(b.fixts(), function(f){ f.color(c1,c2) })
    return b}







SHIPSPRITE=function(){W(3) .chalk('spritebox example')


    w.spriteBox({
            framerate: 24,
            images: ["thrusty.png"],
            frames:[
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
            animations:{
                die: {speed: 1, frames: [8, 9, 10], next:false},
                shoot: {speed: 1, frames: [1,2,3,4,0], next:false},
                thrust: {speed: 1, frames: [5, 6, 7,0], next:false}}
        }).thrustify()

}


