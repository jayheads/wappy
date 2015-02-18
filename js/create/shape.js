cjs=createjs
cjs.graphics     =function(a){return new cjs.Graphics(a)}
cjs.shape =  function(a){ return new cjs.Shape(a) }



p = cjs.Shape.prototype
p.circle= p.circ =function(x,y,radius,fc, sc){
        var gx=this.graphics
        if(fc){gx.f(fc)};
        if(sc){gx.s(fc)}
        gx.dc(x,y,radius)
        return this};
p.rectangle= p.rect =function(x,y,w,h,fc, sc){
    var gx=this.graphics
    if(fc){gx.f(fc)};
    if(sc){gx.s(fc)}
    gx.dr(x,y,w,h)
    return this};
p.clear=function(){this.graphics.clear();return this}
EaselGraphicX =   function( stage ){

    var g, graphic

    graphic = g =  new createjs.Graphics()



    graphic.fs = function(a,b){

        graphic.f( oC(a) )

        if( S(b) ){ graphic.s( oC(b) ) }

        return graphic
    }


    graphic.d = function(stage){ g.draw( stage || s ) }

    graphic.dr0 = function( w, h ){

        w = N(w)? w : 100

        h = N(h)? h : w

        graphic.dr( 0, 0, w, h )

        return graphic }

    graphic.shape = graphic.H = function(){ return EaselShape( graphic ) }

    return graphic}

CAMERA=function(){


}
USINGLAYERSINEASEL=function(){z()

    s = cjs.stage(1000,300).A()

    s.bm('me', 3, function(bm){b=bm

        drawCar()

        cjs.tick(function(){
              b.XY(  (g.x * 2.2)-140 , g.y * .2  )
        })

    })

    bt = $.button('s.sXY(2)', function(){

        s.sXY(2)}).A()



    function drawCar() {s.bm('guy', 0.5, function (bm) {g = bm.drag()})

    }

}
SHAPES=function(){z()
    s = cjs.stage(500, 500).A()
    s.bm('me', 0.2, function(bm){})
    s.A(cjs.circle(100, 'blue','green').XY(100, 100).drag())
    s.circle(100, 100, 10, 'red', 'yellow' )
        .circle(10,100,100,'black','purple')
        .circle(100, 10, 100, 'blue', 'red' )
        .circle(150,150,120,'red','blue')
        .circle(30,'brown','gray')




}
RADIALGRAD=function(){z()

    cjs.stage(500,400).A().A( shape = cjs.shape().XY(20)  )

    shape.graphics.beginRadialGradientFill(
        ["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50)
     .dr(0, 0, 100, 100)
     .endFill()



}
RADIALGRADFILL=function(){
    z()

    cjs.stage(500,400).A().A(h =cjs.shape())


    h.graphics.beginRadialGradientFill(
        ["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50
    ).dc(100, 100, 50)



}
EASELART=function(){z()

    s=stage = cjs.stage(500,600).A()

    s.A( h=shape = cjs.shape() )

    h.rect( 100, 200,  0, 200, 'red' )
     .rect( 100, 100,  100, 20, 'green' )
     .rect( 145, 120,  10, 80, 'orange' )
     .circ(105, 100,20,'blue')
    .circ(105, 100,8,'black')
    .circ(200, 100,20,'blue')
   .circ(200, 100,8,'black')
  .circ(100,20,100,'green')
 .rXY(100, 300).XY(100,300).drag()


   p = function(){

       shape.tweenLoop(
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200])

     shape.tweenLoop(
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
        [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
    )}
    p()
}
CENTERSHAPE=function(){z()


    stage = cjs.stage(500,600).A()

    shape = new cjs.Shape()

    SL(shape)

    stage.A(shape)

    shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)

    shape.RECT( 0, 0,  100, 100,   'a' )

    shape.RECT( 0, -75,  25, 50,   'b' )

    shape.RECT( 0, -200,  100, 100,   'r' )

    shape.circle(100,200, 40, 'z','x')

    shape.graphics.drawRoundRectComplex(  0,0, 300,300, 20,20,30,40 )


    shape.XY(200)

    stage.bm('me', function( b ){ me=b

        me.XY(200)
        me.sXY(.4)
    })

}
SQUAREGAMES=function(){z()

   s = cjs.stage(400,400).A()


}

cjs.circ = cjs.circle = function self(radius, fc, sc){

    if(!N(radius)){return self(8,radius, fc)}
    fc=fc||'blue'
    sc=sc||'white'
    var shape = new createjs.Shape()
    shape.graphics.f(fc).s(sc||'z').ss(radius/8).dc(0, 0, radius)
    return shape

}
cjs.diamond = function self(width, height, fc,sc){

    fc=fc||'green'
    sc=sc||'white'

    width = width || 100
    height = height || width
    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth,0).lt(0,halfheight)
        .lt(halfwidth,0).lt(0,-halfheight)

    return h}
cjs.rect = cjs.rectangle = function self(width, height, fc, sc){
    width = width || 100
    height = height || width
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth,halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth,-halfheight).lt(-halfwidth,-halfheight)

    return h}

//canon
cjs.ball=function(z,fc,sc){

    var b= cjs.circle(0,0,z,fc,sc)

    b.r=z
    b.d=z+z

    b.T=function(a){
        if(U(a)){return b.y()-b.r}
        b.y(a+ b.r);return b}
    b.B=function(a){if(U(a)){return b.y()+b.r}
        b.y(a-b.r);return b}
    b.L=function(a){if(U(a)){return b.x()-b.r}
        b.x(a+b.r);return b}
    b.R=function(a){if(U(a)){return b.x()+b.r}
        b.x(a- b.r);return b}
    b.F=1
    b.fall=function(r){b.t(function(){
        if(r){if(ballBox(b,r)){b.F=0}else{b.F=1}}
        if(b.F){b.y(10,'+')}
    })}
    return b}

cjs.text =  function(words, color, font, x, y){//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
    x=N(x)? x: 100
    y=N(y)? y: x
    font=font|| '20px Arial'
    font=N(font)? font + 'px Arial' : font
    color=color||'z'

    var text= Do(  new createjs.Text(  words,  font,  oC(color) ) ).xy(x, y)
    text.baseline = text.bl = function(b){

        if( U(b) ){ return text.ob.textBaseline }

        text.ob.textBaseline = b

        return text
    }

    return text}
cjs.circle2=function(r,z,x,y){

    graphics = new cjs.Graphics()
    if( !S( r ) ){  return circle2( 'red', r, z, x )}
    z = N(z) ? z : 32
    x = N(x) ? x : 100
    y = N(y) ? y : 100
    graphics.ss( z/8 ).f( r, 'black' ).dc( 0, 0, z )
    return cjs.shape( graphics ).XY( x || 100, y || 100 )

}
cjs.circle3 = function( x, y, r, fc, sc ){

    var shape, h

    shape = h = cjs.shape()

    if( O(x) ){

        return cir0(   x.x,    x.y,   x.r,    x.fc,   x.sc  ) }

    x = x || 0

    y = y || 0

    r = r || 8

    fc = fc || 'w'

    sc = sc || 'z'

    shape.circle( x, y, r, fc, sc )

    SL( shape )

    return shape }
cjs.box=function( w, h, fc, sc ){

    w = w||200

    h = h||w

    var b=rct(

            0 - w/2, 0-h/2, w, h, fc, sc
    )

    b.wr = w/2

    b.hr = h/2

    b.wd = w

    b.hd = h


    b.top = b.T = function( a ){

        if( U(a) ){ return b.y() - b.hr }

        b.y( a + b.hr )

        return b }


    b.bottom = b.B = function(a){

        if( U(a) ){  return b.y() + b.hr   }


        b.y( a - b.hr )

        return b
    }


    b.left =b.L = function(a){

        if( U(a) ){ return b.x() - b.wr }

        b.x( a + b.wr )

        return b
    }


    b.right =b.R = function(a){

        if(U(a)){ return b.x() + b.wr }
        b.x(a- b.wr);return b}


    b.fall=function(){

        b.t(function(){

            if(b.F){b.y(40,'+')}  //****

            if(ballBox(b,r)){b.F=0}

        })}

    return b}
cjs.ballBox=function(bl,bx,buff){ buff=buff||100
    var b= bl.bottom() >= bx.top()  && bl.top()<=bx.top()+buff  &&

        bl.x()>=bx.left()  &&   bl.x()<=bx.right()

    if(b){bl.bottom(bx.top())}

    return b}

EaselRectX= function l(x,y,w,h,fc,sc){

    if(!N(w)){return l(0,0,x,y,w,h)}

    x=x||0;  y=y||0;  w=w||100;  h=h||w;

    fc= oO('c', fc||'x')
    sc= oO('c', sc||'y')

    var shape = new createjs.Shape()

    shape.graphics.beginFill(fc).beginStroke(sc).drawRect(x,y,w,h)

    return shape}
EaselShapeX =  function(graphic, funcOrStage){

    if( O( graphic ) ){ return SuperDisplayObject(  new createjs.Shape( graphic )  ) }

    var shape =  SuperDisplayObject( new createjs.Shape() )

    shape.g = shape.ob.graphics

    if( S(graphic) ){ shape.g.f( graphic ) }

    if( F( funcOrStage ) ){ funcOrStage(shape.g, shape) }

    else if( O( funcOrStage) ){ funcOrStage.a(shape) } //iSt


    shape.fillColor = shape.f  = shape.fC =  function(color){

        shape.g.f( oC(color) )

        return shape}
    shape.strokeColor = shape.s= shape.sC=function(a){shape.g.s(oC(a))
        return shape}

    shape.clear = shape.clr=function(){shape.g.clear()

        return shape}

    shape.circle = shape.c= shape.cir=function(x,y,r, c,d){

        if(!N(r)){  return shape.circle( 0,0, x,y, r ) }

        if( c ){shape.fillColor(c) }

        if( d ){shape.strokeColor(d) }

        shape.g.dc(x,y,r)

        return shape

    }
    shape.rectangle = shape.r = shape.rec = function l(x, y,wd,ht,fc,sc){

        if(!N(wd)){return l(0,0,x,y,wd,ht)}

        x=x||0; y=y||0

        wd=wd||100

        ht = ht||wd

        fc=oC(fc||'x')

        sc=oC(sc||'y')

        if(fc){shape.f(fc)}

        if(sc){shape.s(sc)}

        shape.g.r(x,y,wd,ht)

        return shape}


    shape.RECT=function(centerX, centerY, width, height, fc, sc){


        return   shape.rectangle( centerX  - (.5 * width), centerY - (.5 * height), width, height, fc, sc   )

    }
    shape.ss = function(a,b,c,d){  shape.g.ss( a, b, c, d ); return shape}

    return shape}