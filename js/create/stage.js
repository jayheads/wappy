

//CONTAINER ////////////////////////////////////////////////////////////////
cjs.container = cjs.ct  =function(a){return new cjs.Container(a)}


ct= cjs.Container.prototype

ct.clr=function(){var ct=this,arr=[]

    ct.each(function(x){ x.remove()})


    return ct}





ct.circle = function(x,y,rad,color){

    this.A(
        cjs.circle(x,y,rad,color)
    )

    return this}
ct.text = function(text, font, color, x, y){


    var text,
        centX= this.stg().center().x

    if(N(x) && U(y)){y=x;x=centX}
    else if(U(x)){x=centX; y=100}

     text = cjs.text(text,font,color).XY(x, y)

    this.A(text)

    return text

}
ct.center=function(){
    return V(this.W()/2, this.H()/2)
}

ct.ct= function(x,y){//=ct.addContainer

    var c=this,
        g=G(arguments),
        x=g[0],
        y=g[1]

        ct= new cjs.Container()

    c.A(ct)

    if(F(x)){x(ct,c)}
    else if(N(x)){ ct.XY(x,y) }

    if(g.p){cjs.bindSlide(ct)}

    return ct}


ct.bm= function self(img, scale, func){

    var that =this, args = G(arguments),
        img=args[0], scale=args[1], func=args[2], bm


    if(!N(scale)){func = scale; scale = 1}

    if(O(img)){


      bm = this.A( cjs.bitmap(img) )

        return bm
    }



    $.img(img,   function(image){
        var bm = new cjs.Bitmap( image[0] )
        bm.rCenter()
        bm.sXY(scale)



        //bm.XY( that.W()/2, that.H()/2 )  //works with stage i guess.. but fucks with 'container' - cant check bounds


        if(args.n){ bm.XY(-1000) }

        that.addChild( bm );
        if(func){func( bm )}
    })




    return this}
ct.mc=function(){

  var mc =  cjs.mc.apply(null, arguments)

   this.A(mc)

return mc}
ct.bmRegCenterX = ct.bm0X= function(img, func){

    var that =this

    $.img(img, function(image){

        var bm = new cjs.Bitmap( image[0] )
        bm.regX = bm.W()/2
        bm.regY = bm.H()/2

        that.addChild( bm );
        if(func){func( bm )}

    })

    return this}
ct.tick = function(){
    cjs.Ticker.addEventListener('tick', this)
    return this
}
ct.A=function(arg,y){var that=this

    if(U(arg)){

        $('body').append(this.canvas)
    }

    else if(N(arg)){
        $('body').append(this.canvas).abs(arg,y)
    }

   else { _.each(arguments, function(arg){
        that.addChild(arg)
    })}

    return this}
ct.bData=function(data){

    var bm = cjs.bm( $.img().src($.parseJSON(data)) )
    this.A(

        bm
    )

    return bm}
// **** works!!!!
ct.mug=function(scale, func){
    var that = this


    $.get('/myMug', function(mug){
        that.bm(mug, scale,  func)
    })

    return this}
ct.backgroundImage=function(image){
    var that =this

    this.bm(image, function(b){

            that.setChildIndex(b, 0)

        }
    )
    return this

}
ct.backgroundColor=function(c){

    $( this.canvas ).C(c)
    return this}
ct.each=function(func){
    var children=[]

   _.each(this.children, function(child){
        children.push(child)
    })


    _.each(

        children,

        function(child){
              func(child)
        }
    )

return this}
ct.removeAll=function(){
  this.each(function(child){
      child.remove()
  })

return this}
ct.noAutoClear=function(){
    this.autoClear = false
return this}




cjs.s= cjs.stg = cjs.stage =  function(a,b,c,d,e){var stage

    cjs.watchKeys()

    //get by canvas ID.. eh, a sloppy hack?? it ok
    if(A(a)){  stage = new cjs.Stage(a[0]) }

   //if you pass it a canvas OR a $canvas object
   else if(O(a)){stage = new cjs.Stage($(a)[0])}


    //create a new canvas
    else {stage = new cjs.Stage(

        $.canvas(a, b,c,d,e) [0]
    )}

    stage.can = stage.c = $(stage.canvas)

return stage.tick()

}
cjs.S= function(col){z()

    col=col||'pink'
    s = cjs.stg(col, 800, 500).A()

return s}


HUD=function(){z()


    s = cjs.HUD('r', 500, 500).A()

    s.bm('guy')

    s.HUD.A().bm('me',function(b){  TR(b)  })


}



STG2=function(){z();return cjs.stage(800,300).A()}






mockStage = function(){z()
    return s = stage = cjs.stage(800,500).tick().A()}
STG = function(){
    z();s = cjs.stage(1000,500).A()
    s.bm('me',
        function(bb){b=bb.drag() })}

s=p = cjs.Stage.prototype
s.snap = function(f){

    $.post('/img', {

        d: this.toDataURL()//, dats: o.x.dats

    })

    sec(f)

    return this}
s.W=function(a){if(U(a)){return this.canvas.width}
    this.canvas.width = a
    return this}
s.H=function(a){if(U(a)){return this.canvas.height}
    this.canvas.height=a
    return this}

s.abs=function(x,y){
    this.can.abs(x,y)
return this}




p.dot=function(c, x, y){
    var that = this,
        s=this,
        dot,
        tween

    if(b2d.isGPoly(c)){
        _.each(c.verts(), function(v){ s.dot(V(v))  })
    return this}

    if(A(c)){

        _.each(c,
            function(G){
            if(A(G)){s.dot.apply(s, G)}
           else{s.dot(G)}
        })

    return }

    if(!S(c)){y=x; x=c; c='y'}

    if(O(x)){y=x.y; x=x.x}

    x = N(x)?x : s.W()/2
    y = N(y)?y : s.H()/2

     //dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)

    //dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)

    dot =   s.h(x,y).circ(8, c,c).drag()

    tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

     dot.$$(function(){tween.toggle()})

     dot.N('dot')

    return s}




p.squareDot=function(color, x, y){var squareDot, tween

    if(!S(color)){y=x; x=color; color='orange'}

    if(O(x)){y= x.y;x= x.x  }
    x= N(x)? x:300

    y= N(y)? y:300

    __squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)

    this.A(squareDot.XY(x, y)//.drag()

    )

    //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

   // dot.$$(function(){tween.toggle()})

    return this}

p.chalk=function(){
    var height = 50,
        that=this,
        text

    _.each(arguments, function(arg){

        text = cjs.chalk(arg).Y(height).X(50 - that.X())
        height+=40
        that.A(text)

    })


return text}



p.pen = function self(arg){

    var that=this


    if(O(self.text)){
        self.text.remove()
    }

        self.text = cjs.chalk(arg).Y(50).X(50 - that.X())

        that.A(self.text)


    return self.text}






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

    if(O(text)){
        text = 'x: ' + text.x + ', ' + 'y: ' + text.y
    }
    return new cjs.Text(text, "26px Arial", "white").XY(50,50)
}




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