
Shape = EaselShape = Hx = function(graphic, funcOrStage){

    if( O( graphic ) ){ return SuperDisplayObject(  new createjs.Shape( graphic )  ) }

    var shape =  SuperDisplayObject( new createjs.Shape() )

    shape.g = shape.ob.graphics

    if( S(graphic) ){ shape.g.f( graphic ) }
    if( F( funcOrStage) ){ funcOrStage(shape.g, shape) }
    if( iSt( funcOrStage) ){ funcOrStage.a(shape) }

    shape.fillColor = shape.f  = shape.fC =  function(color){

        shape.g.f( oC(color) )

        return shape}
    shape.strokeColor = shape.s= shape.sC=function(a){shape.g.s(oC(a))
        return shape}
    shape.clear = shape.clr=function(){shape.g.clear()
        return shape}
    shape.circle = shape.c= shape.cir=function(x,y,r,c,d){

        if(!N(r)){return shape.c( 0,0, x,y,r )}

        if(c){shape.f(c)}

        if(d){shape.s(d)}

        shape.g.dc(x,y,r)

        return shape

    }
    shape.rectangle = shape.r = shape.rec = function l(x,y,wd,ht,fc,sc){

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

    shape.ss = function(a,b,c,d){  shape.g.ss( a, b, c, d ); return shape}

    return shape}





Graphic = EaselGraphic = Gx = function( stage ){

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



EaselRect=rct=function l(x,y,w,h,fc,sc){

    if(!N(w)){return l(0,0,x,y,w,h)}

    x=x||0;
    y=y||0;
    w=w||100;
    h=h||w;

    fc=oC(fc||'x');
    sc=oC(sc||'y')

    var sh = EaselShape()//.fn(SL)

    sh.g.f(fc).s(sc).r(x,y,w,h)

    return sh}

EaselCircle = cir=function p(x,y,r,fc,sc){

    var gx=Gx()

    if(O(x)){
        return p(
            x.x,
            x.y,
            x.r,
            x.fc,
            x.sc)}

    r=N(r)?r : 8
    x=N(x)?x : 100
    y=N(y)?y : 100

    gx.ss(r/8).fs(fc,sc||'z').dc(0,0,r)


    return EaselShape( gx ).xy(x||100,y||100)

}




//canon
ball=function(z,fc,sc){

    var b=cir(0,0,z,fc,sc)

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



box=function( w, h, fc, sc ){

    w = w||200

    h = h||w

    var b=rct(

        0 - w/2, 0-h/2, w, h, fc, sc
    )

    b.wr = w/2

    b.hr = h/2

    b.wd = w

    b.hd = h


    b.T = function( a ){

        if( U(a) ){ return b.y() - b.hr }

        b.y( a + b.hr )

        return b }


    b.B = function(a){

        if( U(a) ){  return b.y() + b.hr   }


        b.y( a - b.hr )

        return b
    }


    b.L = function(a){

        if( U(a) ){ return b.x() - b.wr }

        b.x( a + b.wr )

        return b
    }


    b.R = function(a){

        if(U(a)){ return b.x() + b.wr }
        b.x(a- b.wr);return b}


    b.fall=function(){

        b.t(function(){

            if(b.F){b.y(40,'+')}  //****

            if(ballBox(b,r)){b.F=0}

        })}

    return b}



ballBox=function(bl,bx,buff){ buff=buff||100
    var b= bl.B()>=bx.T()  && bl.T()<=bx.T()+buff  &&

        bl.x()>=bx.L()  &&   bl.x()<=bx.R()

    if(b){bl.B(bx.T())}

    return b}


EaselText = TX=function(words, color, font, x, y){//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
    x=N(x)? x: 100
    y=N(y)? y: x
    font=font|| '20px Arial'
    font=N(font)? font + 'px Arial' : font
    color=color||'z'

    var text=Do(  new createjs.Text(  words,  font,  oC(color) ) ).xy(x, y)
    text.baseline = text.bl = function(b){

        if( U(b) ){ return text.ob.textBaseline }

        text.ob.textBaseline = b

        return text
    }

    return text}



//shooty  //b=circle('w', 8, j.x()+75, j.y())
circle2=function(r,z,x,y){

    var graphic = EaselGraphic()

    if( !S( r ) ){  return circle2( 'r', r, z, x )}

    z = N(z) ? z : 32

    x = N(x) ? x : 100

    y = N(y) ? y : 100

    graphic.ss( z/8 ).fs( r, 'z' ).dc( 0, 0, z )

    return EaselShape( graphic ).xy( x || 100, y || 100 )

}





cir0 = function( x, y, r, fc, sc ){

    var shape, h

    shape = h = EaselShape()

    if( O(x) ){  return cir0(   x.x,    x.y,   x.r,    x.fc,   x.sc  ) }

    x = x || 0

    y = y || 0

    r = r || 8

    fc = fc || 'w'

    sc = sc || 'z'

    shape.circle( x, y, r, fc, sc )

    SL( shape )

    return shape }
