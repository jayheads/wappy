h =  cjs.Shape.prototype
ct=cjs.Container.prototype
gx=cjs.Graphics.prototype
gx.poly=function(verts, f, s,width){var that = this
    //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
    if(N(verts[0])){

        _.each(arguments,function(vert){
            that.lt(vert[0],vert[1])});
        this.cp()
    }
    else {
        this.fs(f,s,width)
        _.each(verts,function(vert){
            that.lt(vert[0],vert[1])});
        this.cp()
    }
    return this}
gx.fC= gx.fs=function(c,C,l){var gx=this
    gx.f(oO('c',c||'z'))
    gx.s(oO('c',C||null))
    gx.ss(N(l)?l:2)
    return gx
}
gx.sC=function(s,w){var gx=this

    w=N(w)?w:2

    s=O(s)?s:oO('c', s||null)

    gx.s( s)

    gx.ss(w)

    return gx
}



$h = cjs.h= cjs.shape= cjs.shp= function(x,y,c,C,l){
    var g=G(arguments),
        x=g[0],
        y=g[1],
        c=g[2],
        C=g[3],
        l=g[4],
        h

    if(cjs.isShape(x)){return new cjs.Shape(x.graphics)}

    h = new cjs.Shape()

    if(S(x)){ h.c(x,y,c) }

    else {

    if(N(x)){h.X(x)}
    if(N(y)){h.Y(y)}

        if(S(c)){h.c(c,C,l)}


        else if(N(c)){h.l(c)}
}
    //if(g.N){h.drag()}
    return h}


b2d.oDef = oDefaults=function(o){
    o=o||{}

    o.x= _.tN(o.x)
    o.y= _.tN(o.y)
    o.a= _.tN(o.a)

    o.c= o.c ||'z'
    o.C= o.C ||'w'

    o.w= _.tN(o.w,50)
    o.h= _.tN(o.h,50)

    return o}
b2d.cov = function(x,y,c,C,l,l2){var g=G(arguments),x=g[0],y=g[1],c=g[2],C=g[3],l=g[4],l2=g[5],

    o = N(c)? {x:x, y:y, a:c, c:C, C:l, l:l2}
         : N(x)? {x:x, y:y, c:c, C:C, l:l}
         : x,
    h = new cjs.Shape()

    b2d.oDef(o)

    h.XY(o.x,o.y).rot(o.a).c(o.c,o.C,o.l)

    if(o.d){h.drag()}

    return h
}


ct.h= ct.shape=function(x,y,c,C,l,opt){var ct=this,


    h= cjs.h(x,y,c, C, l,opt).a2(ct)

    return h.drag()
}






ct.cir=function(x,y,r,c,C,l,opt){
    var ct=this
    return ct.h(x,y,c,C,l,opt).dc(r)
}

ct.circ =function(c,r,x,y){var ct=this

    return cjs.cir(c,r,x,y).a2(ct)
}


ct.rec= function(c,W,H,x,y,a){
    var ct=this, ct2, h,
        o = O(c)? c:
            S(c)? {c:c, w:W, h:H, x:x, y:y, a:a}:
                N(c)? {w:c, h:W, x:H, y:x, a:y}
            : {}

    oDefaults(o)

    ct2 = ct.ct()

    h = ct2.h()
        .XY(o.x, o.y)
        .rot(o.a)
        .c(o.c, o.C, o.l)


    if(N(o.o)){

        $l('op: '+ o.o)
        h.opacity(o.o)
    }

    if(o.rg){h.rg(o.c,o.C)}
    if(o.lg){h.lg(o.c,o.C)}
    if(o.bm){h.bm('me', function(){h.dr2(o.w,o.h)})}
    else {h.dr2(o.w,o.h)}
    return ct2
}



cjs.isShape=function(h){
    return O(h) && h.graphics
}
cjs.graphics= function(a){return new cjs.Graphics(a)}
cjs.isCont=function(cont){
    if(O(cont)){
        if(cont.addContainer){return true}
        else {return false }
    }
}
cjs.rulers=function() {
    var d1=$.div('b', 100, 100).drag().opacity(.3)
    $.div('r', 100, 300).drag().opacity(.3)
    return d1}

cjs.circ = cjs.circle = function(r,c){
    if(!N(r)){c=r;r=8}
    c = oO('c', c||'z')
    return cjs.h().c(c).dc(r)
}


cjs.cir = function(c,r,x,y){
    if(!S(c)){
        y=x;x=r;r=c;c='y'
    }
    y= _.tN(y)
    x= _.tN(x)
    r= _.tN(r,50)
    return cjs.h().c(c).dc(x,y,r)
}


cjs.circle2=function(r,z,x,y){
    gx= new cjs.Graphics()
    if( !S( r ) ){  return cjs.circle2( 'red', r, z, x )}
    z = _.tN(z,32)
    x = _.tN(x,100)
    y = _.tN(y,100)
    gx.ss( z/8 ).f(r,'black').dc(z)
    return cjs.h( gx).XY(x,y)
}

cjs.circle3 = function( x, y, r, c,C ){

    var   h = cjs.shape()
    if(O(x)){
        return cjs.circle3(x.x,x.y,x.r,x.c,x.C)}

    x=_.tN(x)
    y=_.tN(y)
    r=_.tN(r,8)

    h.cir(x,y,r, c||'w', C||'z')
    SL(h)
    return h}

cjs.ball=function(r,c,C){//canon

    var b= cjs.circle(0,0,r,c,C)

    b.d=r+r

    b.T=function(a){
        if(U(a)){return b.y()-b.r}
        b.y(a+ b.r);return b}

    b.B=function(a){

        if(U(a)){return b.y()+b.r}

        b.y(a-b.r)

        return b
    }


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
cjs.rect2   = function self(width, height, x, y, fc, sc){
    width = width || 100
    height = height || width

    x=N(x)?x:0; y=N(y)?y:0
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth+x, -halfheight+y)
        .lt(-halfwidth+x,halfheight+y)
        .lt(halfwidth+x, halfheight+y)
        .lt(halfwidth+x,-halfheight+y)
        .lt(-halfwidth+x,-halfheight+y)

    return h}
cjs.rect= function self(width, height, fc, sc){
    width = width || 100
    height = height || width
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new cjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth,halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth,-halfheight).lt(-halfwidth,-halfheight)

    return h}

cjs.box=function( w, h, fc, sc ){

    w = w||200

    h = h||w

    var b= rct(

            0 - w/2, 0-h/2, w, h, fc, sc
    )

    b.wr = w/2

    b.hr = h/2

    b.wd = w

    b.hd = h


    b.top = b.T = function(a){
        if(U(a)){ return b.y() - b.hr }

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
    var b = bl.bottom() >= bx.top()  && bl.top()<=bx.top()+buff  &&
        bl.x()>=bx.left()  &&   bl.x()<=bx.right()
    if(b){bl.bottom(bx.top())}
    return b}







///
//////
///////////



cjs.RECT= function(c, W, H, x, y, a){var  g=G(arguments),    ct = cjs.ct(), h, o; if(O(c)){o=c} else if(S(c)){o={ c:c, w:W, h:H, x:x, y:y, a:a } }
    o = oDefaults(o)


    h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot( o.a )
    if(o.bm){h.bm('me', function(){h.dr2(o.x, o.y, o.w, o.h)}); return h}
    if(o.rg){h.rg(o.c,o.C)}
    if(o.lg){h.lg(o.c,o.C)}
    h.dr2(o.x, o.y, o.w, o.h)

    return h}



//////////////
/////
///




ct.poly =function(){var ct=this // ?

    var h = ct.shape()
    h.poly.apply(h, arguments)
    return h}



ct.art = function(x,y,c,C){var g=G(arguments),ct=this,h
    if(U(x)){alert('must at LEAST define x'); return}
    if(!N(x)){alert('x not a number! but must be, lah'); return}

    y= N(g[1])?g[1]:x
    c= S(g[2])?oO('c',g[2]):null
    C= S(g[2])?oO('c',g[3]):c
    h = cjs.h(x,y,c,C).a2(ct)
    if(g.p){h.drag()}
    return h}





cjs.cirX=function(stg,x,y,r,f,s,width,opt){
    var shp=cjs.shape(stg,x,y,f,s,width,opt) // ss = N(ss)?ss: radius/8
    shp.dc(0,0,r)
    return shp}



 T=function(){z()

    s=stage = cjs.stage(500,600).A()

    s.can.P('a').XY(300)

    s.A( h = shape = cjs.shape() )


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

St=function(){z()
    s = cjs.stg(1200,600).A()
    h = cjs.h(0,0).a2(s)
    SL(h)
}



cjs.M=function(rot){
    var m= new cjs.Matrix2D()
    if(N(rot)){m.rotate(rot)}
    return m}



CIRCRG=function(){St()
    nip=function(){
        x1=0
        y1=0
        r1=10
        x2=0
        y2=0
        r2=100
        var h= cjs.shape(10, 10).a2(s).drag().opacity(.8)
        h.graphics.beginRadialGradientFill(  [ 'blue', "orange"],  [0,  1],
            x1,   y1,   r1,     x2,    y2,    r2   )
            .dc(0, 0,100)
            .endFill()
        return h}

    x1=0
    y1=0
    r1=10
    x2=0
    y2=0
    r2=100

    h=cjs.shape(10, 10).a2(s).drag()

    change= function(){
        //  h.remove()
        // h=cjs.shape(10, 10).a2(s).drag()

        h.graphics.rf(   [ 'blue', "orange"],  [0,  1],   x1,  y1,  r1,   x2,  y2,  r2  ).dc(0, 0,100).endFill()

        // x--

        // r1++
        // r2++
    }


    setInterval(change, 1000)

    change()

    n = nip()

    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}

RAD1=function(){St()

    s.h(600,300).graphics.rf(
        ['blue',"orange"],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()

    s.h(600,100).graphics.rf(
        ['CornflowerBlue',"orange"],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()

    s.h(800,300).rf(
        ['blue',"orange"],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()

    s.h(400,300).rf(
        ['b','o'],  [0,1],  0,0,10,   0,0,100
    ).dc(0, 0,100).ef()




    s.h().cir(0,0,10)
}




h.col= h.fs= function(){
    this.graphics.fs.apply(
        this.graphics, arguments)
    return this}
h.sC=function(){this.graphics.sC.apply(this.graphics, arguments)
    return this}

h.rGx= h.radGrad=function(cols, ratios, x1, y1, r1, x2, y2, r2){

    var args = _.toArray(arguments),circs,len

    cols= _.map(cols,
        function(col){
            return oO('c',col)
        })



    circs = _.rest([1,2,3,4,5], 2)
    len = circs.len  //use switch!

    x1=0; y1=0; r1=0; x2=0; y2=0; r2=50

    if(len==1){r2 = circs[0]}

    else if(len==2){r1 = circs[0]; r2 = circs[1]}

    else if(len==3){
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r2 = circs[2]
    }

    else if(len==4){
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r1 = circs[2]
        r2 = circs[3]
    }

    else if(len==5){
        x1=circs[0]; y1=circs[1]; x2 = circs[2]; y2 = circs[3]
        r2 = circs[4]
    }

    else if(len==6){
        x1 = circs[0]; y1 = circs[1]; x2 = circs[2]; y2 = circs[3]
        r1 = circs[4]; r2 = circs[5]
    }

    this.graphics.beginRadialGradientFill( cols, ratios, x1, y1, r1, x2,y2,r2)

    return this}
h.lGx= h.linGrad=function(){

    var args = _.toArray(arguments)

    args[0]= _.map(args[0], function(col){ return oO('c',col) })

    this.graphics.beginLinearGradientFill.apply(
        this.graphics, args)
    return this}



cjs.RECTx= function self(col, wd,ht, x, y, rot){var halfW,halfH, h, ct = cjs.ct()

    wd=N(wd)?wd:50
    ht=N(ht)?ht:50
    x=N(x)?x:0
    y=N(y)?y:0
    rot=N(rot)?rot:0
    col= oO('c', col||'g')

    halfW = wd/2
    halfH = ht/2

    h = cjs.h().c(col,col)
        .mt(-halfW, -halfH )
        .lt(-halfW,halfH )
        .lt(halfW, halfH )
        .lt(halfW,-halfH )
        .lt(-halfW,-halfH )

    ct.A( h.rot(rot).XY(x,y)  )

    return ct}

ct.RECTx =function(c, W,H, x,y, a){
    var ct=this, h

    //return cjs.RECT(c, w, h, x, y, a).a2(ct)


    return ct.rec({

        c:c,   w:W,    h:H,   x:x,   y:y,   a:a

    })


}


ct.rectx=function(x,y,w,h,c,C,l,opt){
    var ct=this


    return ct.h(x,y,c,C,l,opt).dr(0,0,w,h)
}

