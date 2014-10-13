createjs.stage = $stage = function(a,b,c){

    return new createjs.Stage( $.canvas(a, b, c)[0] )

}




$tick = function(func){
    createjs.Ticker.addEventListener('tick', func)
    return createjs.Ticker
}

$mugTest=function(){
    z();
 s=$stage(800,800).A().tick().mug(function(mm){m=mm})
}


//LOADQUEUE
p=createjs.LoadQueue.prototype

p.fileload=function(func){
    this.addEventListener("fileload", func)
return this}

p.complete=function(func){
    this.addEventListener("complete", func)
    return this}

p.manifest=function(manifest){
    this.loadManifest(  manifest  )

    return this}



//EVENT DISPATCHER
p=createjs.EventDispatcher.prototype
p.init=function(){
    this.initialize.apply(this, arguments)
    return this
}


//TEXT
p=createjs.Text.prototype
p.lW=function(w){this.lineWidth=w;return this}
p.lH=function(h){this.lineHeight=h;return this}

p.lWH=function(w,h){if(U(h)){h=w};return this.lW(w).lH(h)}
p.tA=function(textAlign){this.textAlign=textAlign;return this}
p.tB=function(textBaseline){this.textBaseline=textBaseline;return this}





//DISPLAY OBJECT
p=createjs.DisplayObject.prototype
p.grow = function(){ EaselTween(this, [{sxy:10},10000]);return this }
p.drag = function(){

    SL(this)

return this}

p.rotate = function(){

    RT(this)

    return this}
p.bounds=function(a,b,c,d) {
    this.nominalBounds = new createjs.Rectangle(a,b,c,d)
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

    x=this.W()/2,  y=this.H()/2

        if(g.p){

            this.rX( x,  '+' )
            this.rY( y,  '+' )

        }

        else {
            this.rX( x )
            this.rY( y )
        }

    return this}
p.X=function(x){this.x=x;return this}
p.Y=function(y){this.y=y;return this}
p.XY=function(x,y){if(U(y)){y=x}; return this.X(x).Y(y)}
p.move=function(){
    var g=G(arguments), that =this

    if(g.p){  $tick( function(){   that.move()   } )}

    if(this.vx){ this.X( this.x + this.vx ) }

    if(this.vy){ this.Y( this.y + this.vy) }

    return this}
p.warp=function(n){

    n = N(n)? n:50

    var dm = this.getStage().getBounds()

    var that=this

    $tick(
        function(){

        that.X(  wrp(n, dm.width - n )(that.x)   )
        that.Y(  wrp(n, dm.height - n )(that.y)   )

    })

    return this}
p.dx=function(a){
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
p.N=function(name){
    if(U(name)){return this.name}
    this.name=name;return this
}


p.dy=function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}




p.bounce=function(n){  n=N(n)?n:0
    var that=this,

        dm= this.getStage().getBounds(),

        h= dm.height,

        w= dm.width



    $tick(

        function(){
            var x=that.x,
                y=that.y

        if(x> w - that.W() -n  || x<(n ) ){ that.dx('-') }

        if(y> h - that.H() -n|| y<(n )){  that.dy('-')  }

    })


    return this}


p.centerX=function(a){
    if(U(a)){return this.x + this.W()/2 }

    return this.X( a- this.W()/2)
}

p.centerY=function(a){
    if(U(a)){return this.y + this.H()/2 }

    return this.Y( a- this.H()/2)
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





//CONTAINER
p=createjs.Container.prototype


p.bm = function(img, func){

    var that =this

    $.img(img, function(image){

        var bm = new createjs.Bitmap( image )
        that.addChild( bm );
        if(func){func( bm )}

    })

    return this}




p.tick = function(){
    createjs.Ticker.addEventListener('tick', this)
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
p.mug=function(func){

    $wMb( func, this )

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






p = createjs.Tween.prototype


p = createjs.Sprite.prototype






p = createjs.SpriteSheet.prototype
p.addFlipped=function(a, b, c){

    createjs.SpriteSheetUtils.addFlippedFrames(this,  a||true, b||false, c||false )

    return this}







p = createjs.MovieClip.prototype





EASELPLUGIN=function(){


    canvas=$.canvas(500, 500).A()[0]
    s=new createjs.Stage(canvas)
    createjs.Ticker.on('tick',s)



    s.bm('me', function(bm){

            b=bm

            bm.grow().drag()

        })

}





