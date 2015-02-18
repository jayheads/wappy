cjs=createjs
cjs.stage =  function(a,b,c){
    if(O(a)){ return new cjs.Stage(a) }
    return new cjs.Stage( $.canvas(a, b, c)[0]).tick()}
cjs.bm = cjs.bitmap = function(img){ return new cjs.Bitmap(img)}
cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)} //= SS$
cjs.loadQueue    =function(){return new cjs.LoadQueue(true)}
cjs.tween     =cjs.Tween
cjs.container  cjs.ct  =function(a){return new cjs.Container(a)}
cjs.DOMElement     =function(){return cjs.DOMElement}
cjs.graphics     =function(a){return new cjs.Graphics(a)}
cjs.shape =  function(a){ return new cjs.Shape(a) }
cjs.bm =  function(a){ return new cjs.Bitmap(a).rCenter() }
cjs.sprite = function(spriteSheet){
//EaselSprite= J$=

    if( spriteSheet.images ){

        spriteSheet = new cjs.SpriteSheet(spriteSheet)   }

    return new cjs.Sprite( spriteSheet )

}
cjs.blurFilter = function(x,y,c){return new cjs.BlurFilter(x,y,c)}

cjs.tick2 = function(func){
    cjs.Ticker.addEventListener('tick', func)
    return cjs.Ticker
}

cjs.stg=function(){z()
    return cjs.stage(800,300).A()
}

$mugTest=function(){
    z();
    s = cjs.stage(800,800).A()
    s.mug( function(mug){ m=mug  })

}

//EVENT DISPATCHER
p=cjs.EventDispatcher.prototype
p.init=function(){
    this.initialize.apply(this, arguments)
    return this}



//TEXT //////////////////////////////////////////////////////////////////////////////
p = cjs.Text.prototype
p.lW=function(w){this.lineWidth=w;return this}
p.lH=function(h){this.lineHeight=h;return this}
p.lWH=function(w,h){if(U(h)){h=w};return this.lW(w).lH(h)}
p.tA=function(textAlign){this.textAlign=textAlign;return this}
p.tB=function(textBaseline){this.textBaseline=textBaseline;return this}


//DISPLAY OBJECT /////////////////////////////////////////////////////////////////////
p=cjs.DisplayObject.prototype

p.remove=function(){
    this.parent.removeChild(this)
return this}

//can add easing :)
p.X=function(x,duration){
    var g=G(arguments)
    if(U(x)){return this.x}
    if(g.p){
        x = this.x+x }
    else if(g.n){$l('n')
        x=this.x-x}
    else if(g.m){$l('m')
        x=this.x*x}
    else if(g.d){$l('d')
        x=this.x/x}


    if(N(duration)){
        tw([this], [{x:x}, duration ])
    }

    else{this.x=x}
    return this}

testX=function(){z()
    s=cjs.stage(800,400).tick().A()
    s.bm('me', function(bm){b=bm})}

//make same same x
p.Y=function(y,duration){
    var g=G(arguments)
    if(U(y)){return this.y}
    if(g.p){
        y = this.y+y }
    else if(g.n){
        y=this.y-y}
    else if(g.m){
        y=this.y*y}
    else if(g.d){
        y=this.y/y}


    if(N(duration)){
        tw([this], [{y:y}, duration ])
    }

    else{this.y=y}
    return this}

p.XY=function(x,y){
    if(U(x)){return {x:this.x, y:this.y}}
    if(U(y)){y=x};
    return this.X(x).Y(y)}
p.Xx=function(a){
    var g=G(arguments)
    if(U(a)){return ob.x}

    if(g.p){ ob.x = ob.x+a }

    else if(g.n){ob.x=ob.x-a}
    else if(g.m){ob.x=ob.x*a}
    else if(g.d){ob.x=ob.x/a}
    else{ob.x=a}

    return o}
p.grow = function(){ EaselTween(this, [{sxy:10},10000]);return this }
p.drag = function(){

    SL(this)

return this}
p.rotate = function(){

    RT(this)

    return this}
p.bounds=function(a,b,c,d) {
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this

}
p.transform=function(){

    this.setTransform.apply(

        this,  G(arguments))

    return this
}
p.sX=function(scaleX){
    this.scaleX=scaleX;return this}
p.sY=function(scaleY){
    this.scaleY=scaleY;return this}
p.sXY=function(x,y){if(U(y)){y=x};  return this.sX(x).sY(y)}
p.rX=function(regX){var g=G(arguments)
    if(g.p){this.X( this.x + (regX - this.regX)  )}
    this.regX=regX;
    return this}
p.rY=function(regY){var g=G(arguments)

    if(g.p){this.Y( this.y + (regY - this.regY)  )}

    this.regY=regY;return this
}

p.rXY=function(x,y){return this.rX(x).rY(y)}

p.rZero=function(a){
    var g=G(arguments),

        x=this.W()/2,
        y=this.H()/2

    if(g.p){

        this.rX( 0, '+')

        //this.X(a, this.regX()-a, '+')

        this.rY( 0, '+')

    }


    else {

        this.rX( 0 )
        this.rY( 0 )   }

return this}
p.rCenter=function(){
    var g=G(arguments),

    x=this.W()/2,
        y=this.H()/2

        if(g.p){

            this.rX( x,  '+' )
            this.rY( y,  '+' )

        }

        else {
            this.rX( x )
            this.rY( y )
        }

    return this}

p.rgc=function(){var g=G(arguments),

    x=this.W()/2,
    y=this.H()/2

    if(g[0]===0){
        if(g.p){this.rXY(0,0,'+')}
        else{this.rXY(0,0)}
    }

    else{
        if(g.p){this.rXY(x,y,'+')}
        else{this.rXY(x,y)
        }}

    return this}



p.warpX=function(low,high,cush){var that = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){that.x =warp(that.x)})


return this}
p.warpY=function(low,high,cush){var that = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){that.y =warp(that.y)})
    return this}


p.tween = function(){

    args = G(arguments)

    args.unshift(this)

   cjs.tween.apply(null, args)


}

p.tweenLoop = function(){

    args = G(arguments)

    args.unshift([this, 'l'])

    cjs.tween.apply(null, args)


}

p.spin = function(){this.tweenLoop([{r:360}, 4000]); return this}

p.getSetRotation = p.rT = p.rt = function(rotation){
    var args=G(arguments);
    rotation = args[0]

    if( args.p ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation + rotation )  }
    if( args.n ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation - rotation )  }

    if(U(rotation)){return this.rotation}
    this.rotation = rotation
    return this}


p.underMouse = function( ){

    var stage = this.getStage()
    if(stage.mouseInBounds){

        var pt = this.globalToLocal(stage.mouseX, stage.mouseY)

        return this.hitTest(pt.x, pt.y)
    }

}



p.move=function(){
    return this.X(this.vx||0,'+').Y(this.vy||0,'+')}

p.accelerate=function(){
    return this.vX(this.ax||0,'+').vY(this.ay||0,'+')}

p.jerk=function(){
    return this.aX(this.jx||0,'+').aY(this.jy||0,'+')}


p.warp=function(n){n=n||0
    var stage = this.getStage()
    this.warpX(0, stage.W(), n)
    this.warpY(0, stage.H(), n)
    return this}



p.vX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

    else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
p.vY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
p.vXY=function(x,y){return this.vX(x).vY(y)}
p.aX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
p.aY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
p.jX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
p.jY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}


p.N=function(name){
    if(U(name)){return this.name}
    this.name=name;return this
}


p.bounce=function(n){  n=N(n)?n:0
    var that=this,

        stage = this.getStage() ,
        h=stage.H(),
        w=stage.W()

    cjs.tick(

        function(){var x=that.x, y=that.y

        if(x > w - that.W() - n  || x <(n ) ){ that.vX('-') }

            if(y> h - that.H() -n|| y<(n )){ that.vY('-')  }

    })


    return this}


p.shootBullet = function(){
    var shooter = this
        var stage = shooter.getStage()

        var bullet = cjs.circle()

    var x = shooter.x //shooter.cX()
    var y = shooter.y //shooter.cY()


    bullet.XY(  x, y   )


    stage.A(bullet)


    bullet.startMoving(

                (shooter.vx||1)*1.5, (shooter.vy||1) *1.5
        )



}

p.centerX= p.cX=function(a){
    if(U(a)){return this.x + this.W()/2 }

    return this.X( a- this.W()/2)
}
p.centerY= p.cY = function(a){
    if(U(a)){return this.y + this.H()/2 }

    return this.Y( a- this.H()/2)
}

p.toR =p.moveRight=function(num){
    num=num||20
    this.X(num,'+')
    return this}



p.toL = p.moveLeft=function(num){
    num=num||20
    this.X(num,'-')
    return this}

p.toU =p.moveDown=function(num){num=num||20
    this.Y(num,'-')
    return this}

p.toD =p.moveDown=function(num){num=num||20

    this.Y(num,'+')
    return this}
p.keyControls = function(num){
    var args=G(arguments),
        that=this

    if(args.P){
        $.kD('left', function(){that.toL(num)})
        $.kD('right', function(){that.toR(num)})}

    if(args.N){
        $.kD('up', function(){that.toU(num)})
        $.kD('down',   function(){that.toD(num)} )}
}






p.hitByBullet = function(bullet){var args=G(arguments), bullet=args[0],

    didHit = Math.pointInRectangle(
        bullet.cX(),
        bullet.cY(),

        {x:this.cX(),y:this.cY(),w:this.W(),h:this.H()}

    )

    if(args.n){

        if(didHit){
            this.remove()
        }}

    return didHit}
//chick for hits and remove if a hit
p.killAllIAmHitting = function(){
    var that=this,
        stage = this.getStage()

    _.each(stage.children, function(obj){

        if(that != obj){

          obj.hitByBullet(that, '-')

        }})

}
p.makeMeAKiller =function(){
    var that = this
    cjs.tick(function(){
        that.killAllIAmHitting()
    })
    return this}








p.inStage =  function(){var args=G(arguments),
    x= this.x,
    y= this.y,
    stage = this.getStage(),
    w=stage.W()-100,
    h=stage.H()-100,
    withinStage = x>0 && x<w && y>0 && y<h

    if(args.n){
        if(!withinStage){this.remove()}}

    return withinStage}



testInStage = function(){

    s = cjs.stg()

    s.bm('me', function(b){me=b

    me.startMoving(10, 10)

        cjs.tick(function(){ $l(me.inStage()) })

    })

}




p.W=function(a){
    if(U(a)){ return this.getBounds().width * this.scaleX  }
    this.sX(  this.scaleX * a / this.W() )
    return this}
p.H=function(a){

    if(U(a)){ return this.getBounds().height * this.scaleY  }

    this.sY( this.scaleY * a / this.H() )

    return this

}
p.WH=function(w,h){return this.W(w).H(h||w)}
p.startMoving=function(x,y){

    if(x){this.vX(x)}
    if(y){this.vY(y)}
    var that=this
    cjs.Ticker.on('tick', function(){
        that.X(  that.X() + (that.vx ||0)  )
        that.Y(  that.Y() + (that.vy ||0)  )
    })

    return this}


p.brake=function(){

    this.vx = this.vy = 0

}

p.toFront = function(){

    numChildren = this.parent.children.length

    this.parent.setChildIndex(this,numChildren-1)

    return this
}



//CONTAINER ////////////////////////////////////////////////////////////////
p=cjs.Container.prototype
p.circle = function(x,y,rad,color){

    this.A(
        cjs.circle(x,y,rad,color)
    )

    return this}
p.text = function(text, font, color, x, y){

    var text =  new cjs.Text(text, font, color).XY(x, y)

    this.A(text)

return this}
p.addContainer = p.ct =function(func){
    var g=G(arguments),
        f=g[0],

        container= new cjs.Container()

    this.A(container)

    if(func){func(container, this)}

    if(g.p){cjs.bindSlide(container)}
    return this}
p.bm= function self(img, scale, func){

    var that =this

     if(!N(scale)){
         func = scale
         scale = 1}

    $.img(img, function(image){

        var bm = new cjs.Bitmap( image[0] )
        bm.rCenter()
        bm.sXY(scale)
        bm.XY( that.W()/2, that.H()/2 )
        that.addChild( bm );
        if(func){func( bm )}

    })

    return this}
p.bmRegCenter = p.bm0= function(img, func){

    var that =this

    $.img(img, function(image){

        var bm = new cjs.Bitmap( image[0] )
        bm.regX = bm.W()/2
        bm.regY = bm.H()/2

        that.addChild( bm );
        if(func){func( bm )}

    })

    return this}
p.tick = function(){
    cjs.Ticker.addEventListener('tick', this)
    return this
}
p.A=function(arg){var that=this

    if(U(arg)){

        $('body').append(this.canvas);return this
    }

    _.each(arguments, function(arg){
        that.addChild(arg)
    })

    return this}
p.bData=function(data){

    var bm = cjs.bm( $.img().src($.parseJSON(data)) )
   this.A(

       bm
       )

    return bm}
// **** works!!!!
p.mug=function(scale, func){
    var that = this


    $.get('/myMug', function(mug){
        that.bm(mug, scale,  func)
    })

    return this}
p.backgroundImage=function(image){
var that =this

    this.bm(image, function(b){

           that.setChildIndex(b, 0)

        }
    )
    return this

}
p.backgroundColor=function(c){

    $( this.canvas ).C(c)
    return this}

p = cjs.Stage.prototype
p.snap = function(f){

        $.post('/img', {

            d: this.toDataURL()//, dats: o.x.dats

        })


        if(f){if(S(f)){ f=ldr(f)};sec(f)};

        return this}
p.W=function(a){if(U(a)){return this.canvas.width}
    this.canvas.width = a
    return this}
p.H=function(a){if(U(a)){return this.canvas.height}
   this.canvas.height=a
    return this}



p = cjs.Tween.prototype


p = cjs.Sprite.prototype


p = cjs.SpriteSheet.prototype
p.addFlipped=function(a, b, c){

    cjs.SpriteSheetUtils.addFlippedFrames(this,  a||true, b||false, c||false )

    return this}







p = cjs.MovieClip.prototype





EASELPLUGIN=function(){


    canvas=$.canvas(500, 500).A()[0]
    s=new cjs.Stage(canvas)
    cjs.Ticker.on('tick',s)



    s.bm('me', function(bm){

            b=bm

            bm.grow().drag()

        })

}


STG = function(){
    z();s = cjs.stage(2000,1000).tick().A()
    s.bm('me',function(bb){b=bb})
}



dragFrame=function(a){a=a||$div()

    var theDiv =$div().c('b').drg().P(10).a()

    //stopPropogation
    a.o('d',  function(q, e){  e.sp()  })

    theDiv(a)

    return theDiv

}

$.dragFrame=function(a){a=a|| $.div()

    var theDiv = $.div().C('b').drag().pad(10).A()

    a.on('mousedown',  function(e){  e.stopPropagation()  })

    theDiv.A(a)

    return theDiv

}



dragStage=function(x,y){

    var canvas = $.canvas('green', 400, 400)

    var stage =  cjs.stage(canvas[0])

    $.dragFrame( canvas  )

    c = canvas

    return s = stage

    //return SuperStage(stage)

}


$.dragStage=function(x,y){

    var canvas = $.canvas('g', 400)

    var stage = new cjs.Stage( canvas.canvas )

    $.dragFrame( canvas )

    c=canvas

    s=stage

    return stage

}

ImagesDiv=function(stage) {

    theDiv = $div().a().drg().c('y')

    eaI(function (img) {
        theDiv($imageSizeFuncCan(img.d, 1, function () {
            stage.bm(img.d, function (bm) {

                SL(bm.sxy(.4))

            }, '+')
        }))
    })


}

$.imagesDiv=function(stage) {

    $.getJSON('/img',  function(img){

        theDiv = $.div().A().drag().C('y')

        _.each(img, function(img){

            theDiv.A(

                $.canvas(100, 100).fit(img.d).click(function () {

                    stage.bm(img.d, function (bm) {  bm.sXY(.4).drag() } )

                })
            )


        })})











}

FANTASTIC=function(x,y){


    z()


    canvas = $.canvas('g', 400)

    stage = new cjs.Stage( canvas.canvas )

    frame = $.dragFrame( theSpan = $.span() )


    theSpan.A(

        $.button('X', function(){frame.remove }),

        $.button('pics',  function(){ $.imagesDiv(stage)  }),

        $.button('transform'),

        $.button('text'),

        $.button('paint', function(){

            _paintColor='#0FF'

            var size=10,oX=0,oY= 0,shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(

                stage.du(), //?

                function(m){


                    m.XY(40).sXY(.4)


                    stagePainter(paintStage)


                })



        }),


        $.button('cut'),

        $.button('save')   )

    theSpan.A( $br(), canvas )

    theSpan.A($.div().A(

        $.button('clear', function(){stage.rm()}) ,

        $.button('flat', function(){

            stage.rm()

            stage.bm( stage.du(), function(bm){  bm.drag()   })

        }),

        $.button('clone', function(){



            var newSpan= $span()

            var newStage= dragStage( newSpan )



            newStage.bm( stage.du(), function(bm){
                SL(bm)

            })

        }),

        $.button('recur',function(){

            stage.bm( stage.du(), function(bm){

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $.button('copy', function(){

            _copy=stage.du()



        }),

        $.button('paste',function(){stage.bm( _copy, function(bm){   bm.drag()  })  }),

        $.button('replace',function(){

            stage.rm()
            stage.bm( _copy, function(bm){ bm.drag() })

        })

    ))

    theSpan.dblclick(  function(){ $('button').toggle() }   )




}

FANTASTICX=function(x,y){


    z()


    canvas = $can('g', 400)

    stage = SuperStage( new cjs.Stage( canvas.canvas ))

    frame = dragFrame( theSpan=$span() )

    theSpan($button('X', function(){frame.X() }),

        $button('pics',  function(){ ImagesDiv(stage)  }),

        $button('transform'),  $button('text'),

        $button('paint', function(){

            _paintColor='#0FF'

            var size=10,oX=0,oY= 0,shape

            var paintStage = dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(stage.du(), function(m){

                m.xy(40).sxy(.4)

                stagePainter(paintStage)


            })



        }),


        $button('cut'),

        $button('save')   )

    theSpan( $br(), canvas )

    theSpan($div()(

        $button('clear', function(){stage.rm()}) ,

        $button('flat', function(){

            stage.rm()

            stage.bm( stage.du(), function(bm){


                SL(bm)

            })

        }),

        $button('clone', function(){



            var newSpan= $span()

            var newStage= dragStage( newSpan )



            newStage.bm( stage.du(), function(bm){
                SL(bm)

            })

        }),

        $button('recur',function(){

            stage.bm( stage.du(), function(bm){

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $button('copy', function(){

            _copy=stage.du()



        }),


        $button('paste',function(){   stage.bm( _copy, function(bm){   SL(bm)  })  }),


        $button('replace',function(){

            stage.rm()
            stage.bm( _copy, function(bm){ SL(bm) })

        })



    )).$$(


        function(){ $('button').toggle() }
    )




}


COLOR=function(){z()

    colorPicker =  $(' <input id="color" name="color" type="color">').appendTo($('body'))

    colorPicker.change(function(){


        $l(colorPicker.val())

    })

}

mockStage = function(){z()
    return s = stage = cjs.stage(800,500).tick().A()}
testImgRegCenter=function(){


    mockStage()

    s.bm0('me', function(bm){b1=bm

        bm.drag()

        bm.spin()

    })

    s.bm0('me', function(bm){b2=bm
        bm.drag()

        bm.spin()

        bm.scaleX=.5
        bm.scaleY=.3
        //bm.sXY(.5)

    })


    s.A(c = circle(4).XY(200) )}

//T$ = cjs.Ticker  //dep
cjs.stopListening=function(){
    cjs.Ticker.removeAllEventListeners()}
cjs.ticker = tt=function(a,b,c){

    var g=G(arguments),
        t=true,
        f=false,
        a=g[0],
        b=g[1],
        c=g[2]

    if(F(a)){

        return aEL(T$,'tick',
            g.N? a
                :function(e){

                if(!e.paused){ a(e) }
            })

    }



    if(O(a)){
        return aEL(T$,'tick',a)}

    if(a=='?'){return !T$.getPaused()}
    if(a=='p'){T$.setPaused(f);return tt('?')}

    if(a=='s'){T$.setPaused(t);
        return tt('?')}

    if(a=='g'){return tt(

        tt('?')? 's': 'p'

    )}


    if(a=='@'){
        return T$.init()}

    if(a=='!'){
        return T$.reset()}

    if(a=='e'){return T$.getEventTime(g.p?t:f)}

    if(a=='t'){return T$.getTime(g.p?t:f)}

    if(a=='#'){return T$.getTicks(g.n?t:f)}

    if(a=='md'){return t$.maxDelta}

    if(a=='M'){return T$.timingMode}

    if(a=='i'){
        if(N(b)){T$.setInterval(g.m?b*1000:b)
            return tt('i')}
        if(U(b)){return T$.getInterval()}}

    if(a=='f'){
        if(N(b)){T$.setFPS(b);return tt}
        if(U(b)){return T$.getFPS()}}

    if(a=='r'){if(b>10){
        tt('f',b)} else {tt('i',b,'*')}}


    if(a=='m'){
        return N(b)?T$.getMeasuredFPS(b)
            :T$.getMeasuredFPS()}

    if(a=='tk'){return Ed(T$)}

}
tickX=function(e){
    j.Y(e.delta/1000*100,'-' )}
timeStamp2 = function(s, j, pxPerSec){
    var fn=function(s,e){

        if(!N(j.ts)){j.ts=0;j.lts=e.ts}

        else{j.ts= e.ts-j.lts;j.lts=e.ts

            j.y((j.ts/1000) * pxPerSec,'-')  }}
    return s.t(fn)}

cjs.tick =function(func){cjs.Ticker.on('tick', func)}
cjs.bulletHit = function(bullet, inWhat){

    var x=bullet.centerX(),
        y=bullet.centerY()

    var res= Math.pointInCircle(x, y, {x:inWhat.x, y:inWhat.y, radius:inWhat.H()/2})

    if(res == true){ $l('hit!') }
    return res
}


rgcX =function(){
    var g=G(arguments),

        x=o.W()/2,
        y=o.H()/2

    if(g[0]===0){
        if(g.p){

            o.rxy(0,0,'+')
        }

        else {o.rxy(0,0)}}

    else{
        if(g.p){o.rxy(x,y,'+')}
        else{o.rxy(x,y)
        }}

    return o}
testSlide = function(){
    z()

    s = cjs.stage('red', 300, 800).A().tick()

    s.bm('me', function(bb){ b=bb
        KK(bb )
    })
}

cjs.bindSlide = SL=function(b,b2){

    var g=G(arguments),

        b=g[0],  b2= g[1]||b

    return b.on('mousedown',

        function(e){
            var bx=b2.x- e.rawX, by=b2.y- e.rawY

            b.on('pressmove', function(e){

                if(g.P){b2.x=bx+e.rawX}
                if(g.N){b2.y=by+e.rawY}
            })}

    )}
cjs.bindReverseSlide = LS=function(b,b2){var g=G(arguments),
    b= g[0] ,

    b2= g[1] ,
    d=oE('d'),
    pm=oE('pm'),
    b2=b2||b

    return b.on(d, function(e){
        var bx=b2.x+rX(e), by=b2.y+rY(e)

        b.on(pm, function(e){

            if(g.P){b2.x=bx-rX(e)}
            if(g.N){b2.y=by-rY(e)}

        })})}
cjs.bindRotate = RT=function(b, b2){


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g=G(arguments),  b =   g[0]  ,  b2 =  g[1]   || b


    if(g.p){
        //b.rgc( '+' )
    }

    return b.on(  'mousedown',

        function(e){

            var X= e.rawX,  Y= e.rawY,  r = b2.rotation

            b.on('pressmove',   function(e){


                b2.rotation =    r - (   (e.rawY - Y) / 500   ) -  (   e.rawX - X  )


            })})

}
cjs.bindRotate2 = RTT=function(b, b2){


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g=G(arguments),  b =   g[0]  ,  b2 =   g[1]   || b



    if(g.p){  // b.rgc( '+' )
    }

    return b.on(  'mousedown',

        function(e){

            var X= e.rawX,  Y= e.rawY,  r = b2.rotation

            b.on('pressmove',   function(e){


                b2.rotation =    r + (   (e.rawY - Y) / 500   ) +  (   e.rawX - X  )


            })})

}
cjs.bindScale = SC=function(b,b2){
    var g=G(arguments),b= g[0] ,b2= g[1] ,
        d=oE('d'),pm=oE('pm'),b2=b2|| b,
        cp=function(n){return n<.2?.2:n>2?2:n}

    return b.on(d,

        function(e){var X= e.rawX,Y= e.rawY,
            sx=b2.scaleX,
            sy=b2.scaleY

            b.on(pm,

                function(e){if(g.n){
                    b2.sXY( cp(sx+(
                        (e.rawX-X)/200)),
                        cp(sy-((e.rawX-X)/200))
                    )

                }

                else if(g.p){
                    cXY(b2,sx+((rX(e)-X)/50),sy-((rY(e)-Y)/50))
                    cXY(b2,sy-((rY(e)-Y)/50)),sx+((rX(e)-X)/50)}

                else{ b2.sXY(sx-((e.rawX-X)/50),sy-((e.rawY-Y)/50))}})}

    )}
cjs.bindSkew = SK=function(b){var g=G(arguments),b= g[0] ,b2= g[1] ,d=oE('d'),pm=oE('pm'),b2=b2||b

    return b.on(d,
        function(e){
            var X=rX(e),Y=rY(e)
            b.on(pm,function(e){
                kXY(b2,(rY(e)-Y)*.5,
                        rX(e)-X*.5)})
        })}
cjs.bindTransform = TR=function TR(b,b2,m){

    var g=G(arguments),
        b= g[0],
        b2= g[1],

        b2=b2||b,  m=g[2]||'SL'

    if(m=='SL'){
        cjs.bindSlide(b,b2);
        m='SC'}

    else if(m=='SC'){
        cjs.bindScale(b,b2);
        m='RT'}

    else if(m=='RT'){
        cjs.bindRotate(b,b2);
        m='SL'}

    return b.on('pressup', function(e){

        b.removeAllEventListeners();

        TR(b, b2, m)

    })}
cjs.reggy = reggy=function(o,s){

    s = s||o.parent

    s.bm('me',  function(b){

        b.W(40).H(40)

        I(function(){   b.XY(  o.x + o.regX, o.y + o.regY )  },  100)

    }  )


}
cjs.bindSlideAndRotate = KK=function(b,b2){

    var g=G(arguments), b=g[0],
        b2= g[1]||b
    cjs.bindSlide(b);
    cjs.bindRotate(b,b2)
    if(g.p){

        b.rgc('+')
    }

    if(g.N){
        //    reggy(b,b2)
    }
}
cjs.bindRotateThenSkew =RK=function(b,b2,m){
    var g=G(arguments),b= g[0] ,b2= g[1] ,
        d=oE('d'),
        pm=oE('pm'),
        b2=b2|| b,
        m=g[2]||'RT'


    //if(g.p){var s=St('y',1000)
    //    _t(b||5,function(i){s.a().bm(
    //        function(bm){bm.xy(i*50);TR(bm)})});return s}

    if(m=='RT'){RT(b,b2);m='SK'}

    else if(m=='SK'){
        SK(b,b2);m='RT'}

    return b.on(oE('pu'),
        function(e){Do(b).O();
            RK(b,b2,m)})
}


$sprite = function(dataObjOrSprite){//EaselSpriteSheet = jss=
    var spriteSheet
    if( dataObjOrSprite.images ){ // then it is a dataObj
        spriteSheet = new cjs.SpriteSheet( dataObjOrSprite )}
    else {//it must be a sprite sheet already
        spriteSheet = dataObjOrSprite}
    return new cjs.Sprite(spriteSheet)}



//important for ipad
touchEnable = tch=function(s){  cjs.Touch.enable(s.ob); return s }




HSL=function(a,b,c){
    if(U(a)){return HSL(rnd()*360,100,50)}
    return cjs.Graphics.getHSL(a,b,c)
}




//LOADQUEUE
p=cjs.LoadQueue.prototype
p.fileload=function(func){
    this.addEventListener("fileload", func)
    return this}
p.complete=function(func){this.addEventListener("complete", func)
    return this}
p.manifest=function(manifest){
    this.loadManifest(  manifest  )
    return this}

cjs.handleFileLoad=function(e){
    if (e.item.type=="image"){
        images[e.item.id]=e.result}
}
cjs.manifest = cjs.mf =  function(a){var g=G(arguments),mf=[]
    _.each(g, function(v){
        mf.push({

            src: Graphics.toSource(v),
            id: v

        })})

    return mf}
cjs.makeManifest =cjs.makeMan =  function(a){
    return  cjs.manifest.apply(null, _.map(a.images, function(i){
            return Graphics.fromSource(i)
        })
    )
}


