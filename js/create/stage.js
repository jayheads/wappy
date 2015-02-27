

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



   cjs.stg = cjs.stage =  function(a,b,c){var stage

    cjs.watchKeys()

    //get by canvas ID
    if(A(a)){

        stage=new cjs.Stage(a[0])}



   //if you pass it a canvas OR a $canvas object
   else if(O(a)){stage=new cjs.Stage($(a)[0])}


    //create a new canvas
    else {stage = new cjs.Stage($.canvas(a,b,c)[0])}

    stage.can=stage.c=$(stage.canvas)

return stage.tick()}






STG2=function(){z();return cjs.stage(800,300).A()}






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



p.dot=function(color, x, y){var dot, tween

    if(!S(color)){y=x; x=color; color= 'yellow'}

    if(O(x)){y= x.y;x= x.x  }

    x=N(x)?x:this.W()/2
    y=N(y)?y:this.H()/2

     dot = __dot = cjs.circle(6, oO('c', color))//.opacity(.4)

     this.A(dot.XY(x,y).drag()  )

    tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

    dot.$$(function(){tween.toggle()})
    dot.N('dot')

    return this}



p.squareDot=function(color, x, y){var squareDot, tween

    if(!S(color)){y=x; x=color; color='orange'}

    if(O(x)){y= x.y;x= x.x  }
    x= N(x)? x:300

    y= N(y)? y:300

    __squareDot = squareDot = cjs.rectangle(20, 20, oO('c', color))//.opacity(.4)

    this.A(squareDot.XY(x, y)//.drag()

    )

    //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

   // dot.$$(function(){tween.toggle()})

    return this}

p.chalk=function(){
    var height = 50,
        that=this

    _.each(arguments, function(arg){

        var text = cjs.chalk(arg).Y(height)
        height+=40
        that.A(text)

    })


}

p.eMO=function(data){
    this.enableMouseOver(data)
return this}


p.next=function(next){
    if(U(next)){return this.nextStage}
    this.nextStage=next
    return this

}

cjs.chalk=function(text, color){
    color = oO('c', color||'white')
    return new cjs.Text(text, "26px Arial", "white").XY(50,50)}



CHALK=function(){

    w= b2.mW()

    s= w.s

    s.bm('me')


    text = cjs.chalk('some information ....')

    text2=cjs.chalk('some more').XY(50, 90)


    s.A(text, text2)



}


$mugTest=function(){
    z();
    s = cjs.stage(800,800).A()
    s.mug( function(mug){ m=mug  })}



NEWSTG=function(){z()

    //three ways to make a new stage

    s = cjs.stg('r',100 ).A().bm('me')
    s.can.drag()


    c= $.canvas('b',100).A().drag().XY(400)
    s1=cjs.stg(c)
    s1.A().bm('me')


    c2= $.canvas('b',100).A().id('someId').drag().XY(300,100)

    s2=  cjs.stg(['someId'])
    s2.tick().bm('me')


}