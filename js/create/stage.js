

//CONTAINER ////////////////////////////////////////////////////////////////
cjs.container = cjs.ct  =function(a){return new cjs.Container(a)}
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

    var args = G(arguments), img=args[0], scale=args[1], func=args[2]

    var that =this

    if(!N(scale)){
        func = scale
        scale = 1}

    $.img(img, function(image){

        var bm = new cjs.Bitmap( image[0] )
        bm.rCenter()
        bm.sXY(scale)
        bm.XY( that.W()/2, that.H()/2 )

        if(args.n){ bm.XY(-1000) }

        that.addChild( bm );
        if(func){func( bm )}

    })

    return this}

p.bmRegCenterX = p.bm0X= function(img, func){

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




cjs.stage =  function(a,b,c){
    if(O(a)){ return new cjs.Stage(a) }
    return new cjs.Stage( $.canvas(a, b, c)[0]).tick()}
cjs.stg=function(){z();return cjs.stage(800,300).A()}
mockStage = function(){z()
    return s = stage = cjs.stage(800,500).tick().A()}
STG = function(){
    z();s = cjs.stage(1000,500).A()
    s.bm('me',
        function(bb){b=bb.drag() })}
p = cjs.Stage.prototype
p.snap = function(f){

    $.post('/img', {

        d: this.toDataURL()//, dats: o.x.dats

    })

    sec(f)

    return this}
p.W=function(a){if(U(a)){return this.canvas.width}
    this.canvas.width = a
    return this}
p.H=function(a){if(U(a)){return this.canvas.height}
    this.canvas.height=a
    return this}

p.dot=function(x, y){var dot, tween
    x=N(x)?x:this.W()/2
    y=N(y)?y:this.H()/2

     dot = __dot = cjs.circle()

     this.A(dot.XY(x,y).drag()  )

    tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

    dot.$$(function(){tween.toggle()})

    return this}


$mugTest=function(){
    z();
    s = cjs.stage(800,800).A()
    s.mug( function(mug){ m=mug  })}


