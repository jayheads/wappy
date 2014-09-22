
//this is actually the 'lettering' plugin


(function($){
    function injector(t, splitter, klass, after) {
        var text = t.text()
            , a = text.split(splitter)
            , inject = '';
        if (a.length) {
            $(a).each(function(i, item) {
                inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
            });
            t.attr('aria-label',text)
                .empty()
                .append(inject)

        }
    }


    var methods = {
        init : function() {

            return this.each(function() {
                injector($(this), '', 'char', '');
            });

        },

        words : function() {

            return this.each(function() {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines : function() {

            return this.each(function() {
                var r = "eefec303079ad17405c889e092e105b0";
                // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                // (of the word "split").  If you're trying to use this plugin on that
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function( method ) {
        // Method calling logic
        if ( method && methods[method] ) {
            return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
        } else if ( method === 'letters' || ! method ) {
            return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
        }
        $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
        return this;
    };

})(jQuery)

CAMERA=function(){


}



USINGLAYERSINEASEL=function(){z()



    s = SuperStage(500).A()


    s.bm('me', function(bm){

        b=bm
        bm.sxy(3)

        drawCar()



        s.tick(function(){

            b.x(  -1 * (g.x()  *2)  )
            b.y(  -1 * (g.y()  *2)  )

        })

    })

    bt = $.button('safd', function(){

        s.sxy(2)

    }).A()



    function drawCar() {


        s.bm('guy', function (bm) {

            g = bm
            bm.sxy(.5)

            SL(bm)
        })

    }

}

LETTERING=function(){

    z()

    span = $.span( 'hello' ).A()

    span.lettering() // wrap <span class="charx"/ > around each character within header

    $spans = span.find( 'span' )

    $('.dropped span').css({transition: 'all 0.3s ease-in'})


}






FALLING=function(){z()
    //this goes in css

        $header2 = $.span('hello').A()

        $header2.lettering() // wrap <span class="charx"/ > around each character within header

    $spans = $header2.find('span')

    delay = 0

    $header2.on('click', function(){


        $spans.each(function(){
                $(this).css({transitionDelay: delay+'s'}) // apply sequential trans delay to each character

                delay += 0.1
        })


        $header2.addClass('dropped') // Add "dropped" class to header to apply transition

        setTimeout(function(){ // reset header code

            $spans.each(

                function(){

                    $(this).css({
                        transitionDelay: '0ms'
                    })

                })



                // set transition delay to 0 so when 'dropped' class is removed,
                // letter appears instantly

                $header2.removeClass('dropped') // remove class at the "end" to reset header.
                delay = 0

        }, 1800) // 1800 is just rough estimate of time transition will finish, not the best way

    })

}





Shape = EaselShape = Hx = function(graphic, funcOrStage){

    if( O( graphic ) ){ return SuperDisplayObject(  new createjs.Shape( graphic )  ) }

    var shape =  SuperDisplayObject( new createjs.Shape() )

    shape.g = shape.ob.graphics

    if( S(graphic) ){ shape.g.f( graphic ) }

    if( F( funcOrStage ) ){ funcOrStage(shape.g, shape) }

    if( iSt( funcOrStage) ){ funcOrStage.a(shape) }

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




SHAPES=function(){z()


    s =stage=SuperStage(500, 500).a()


    //s.bm('me', function(bm){ bm.sxy(.2)   })


    s.Shape().circle( 100, 100, 100,'b','g').fn( SL )

    s.Circle( 100, 100, 10, 'r', 'y' ).fn( SL )

    s.Circle( 10,100,100,'z','x').fn(SL)

    s.Circle( 100, 10, 100, 'a', 'c' ).fn(SL)

    s.Shape().circle(150,150,120,'c','d').fn(SL).circle(30,'x','x')




}


RADIALGRAD1=function(){z()


    $('<canvas width=500 height=400 id="canvas">').appendTo( $('body') )


    stage = new createjs.Stage( "canvas", 420, 500, 30)


    shape = new createjs.Shape()

    shape.x = 20

    shape.y = 20

    stage.addChild( shape )

    shape.graphics.beginRadialGradientFill(

        ["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50
    )

    shape.graphics.drawRect(0, 0, 100, 100)

    shape.graphics.endFill()

    stage.update()

}
RADIALGRAD=function(){z()


    stage = SuperStage(500, 500).A()

    shape = stage.Shape().xy(40)

    shape.g

     // .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )


    .rf([oC('r'),oC('b'),oC('o')], [.1,.4,.9],   50, 50, 0, 50, 50, 50)



    .drawRect(0, 0, 100, 100)

        .drawCircle(180, 180, 100, 100)

}






RADIALGRADFILL=function(){z()

    $('<canvas width=500 height=400 id="canvas">').appendTo( $('body') )

  stage = new createjs.Stage("canvas", 420, 500, 30)

// 2 colors
    shape = new createjs.Shape()
    shape.x = 20
    shape.y = 20


    shape.graphics.beginRadialGradientFill(

        [oC('b'),oC('r')],

        [.1, 1],     50,   50,   0,   50,    50,  50

    )


    shape.graphics.drawRect(0, 0, 100, 100)
    shape.graphics.endFill()
    stage.addChild(shape)


// 3 colors
    shape = new createjs.Shape();
    shape.x = 20;
    shape.y = 140;
    shape.graphics.beginRadialGradientFill([oC('b'),oC('r'),oC('y')], [.1,.5, 1],    50, 50, 0, 50, 50, 50);

    shape.graphics.drawRect(0, 0, 100, 100);
    stage.addChild(shape);


// alpha
    shape = new createjs.Shape();
    shape.x = 20;

    shape.y = 260;
    shape.graphics.beginRadialGradientFill([oC('b'),oC('r')], [1, 0],   50, 50, 0, 50, 50, 50);
    shape.graphics.drawRect(0, 0, 100, 100);
    shape.graphics.endFill();
    stage.addChild(shape);


}


RADIALGRADFILL2=function(){
    z()

    $('<canvas width=500 height=400 id="canvas">').appendTo( $('body') )

    stage = new createjs.Stage("canvas", 420, 500, 30)


    stage.addChild(

        h = new createjs.Shape()
    )


    h.graphics.beginRadialGradientFill(

        ["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50

    ).drawCircle(100, 100, 50)

    stage.update()

}

EASELART=function(){z()

    stage = SuperStage(500,600).A()


    shape = stage.Shape()

    shape.rectangle( 100, 200,  0, 200, 'a' )
    shape.rectangle( 100, 100,  100, 20, 'g' )
    shape.rectangle( 145, 120,  10, 80, 'o' )

    shape.circle(105, 100,20,'b')
    shape.circle(105, 100,8,'x')
    shape.circle(200, 100,20,'b')
    shape.circle(200, 100,8,'x')

    //shape.circle(100,20,100,'g')
    SL(shape)

    shape.rx(100).ry(300).x(100).y(300)


   p = function(){

       EaselTween([shape, {l:1}],

       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
       [{r:25}, 200],[{r:-25},400],[{r:0}, 200]

   )

    EaselTween([shape, {l:1}],

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


    stage = SuperStage(500,600).A()


    shape = stage.Shape(); SL(shape)


    shape.RECT( 0, 0,  100, 100,   'a' )

    shape.RECT( 0, -75,  25, 50,   'b' )

    shape.RECT( 0, -200,  100, 100,   'r' )

    shape.circle(100,200, 40, 'z','x')

    shape.g.drawRoundRectComplex(  0,0, 300,300, 20,20,30,40 )

    shape.g.beginFill("orange").drawPolyStar(
        100, 100, 50, 5, 0.6, -90)

    shape.xy(200)

    stage.bm('me', function( b ){ me=b
        me.rgc()
        me.xy(200)
        me.sxy(.4)
    })

}






SQUAREGAMES=function(){z()

   s = SuperStage(400,400).A()


}


MARGINAUTO=function(){z()

    o = outer = $.div( 'b', 500, 500).A()
    o.A(  i = inner = $.div( 'r', 100, 100) )
    i.mar('auto')
    o.mar('auto')}


MOBILEHEADERS=function(){



}













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
