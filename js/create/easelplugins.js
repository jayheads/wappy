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


p=createjs.EventDispatcher.prototype
p.init=function(){
    this.initialize.apply(this, arguments)
    return this
}



p=createjs.DisplayObject.prototype
p.grow = function(){ EaselTween(this, [{sxy:10},10000]);return this }
p.drag = function(){

    SL(this)

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





p=createjs.Container.prototype
p.bm = function(img, func){var that =this
    $img(img,function(image){var bm = new createjs.Bitmap( image )
        that.addChild( bm ); if(func){func( bm )}})
    return this}
p.A=function(){var that=this
    _.each(arguments, function(arg){
        that.addChild(arg)
    })

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





