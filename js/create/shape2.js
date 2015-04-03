
gx=cjs.Graphics.prototype
h =  cjs.Shape.prototype
ct = cjs.Container.prototype
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



gx.c = gx.cC = gx.fs = gx.fC =  function(c,C,l){var gx=this
    gx.f(oO('c',c||'z'))
    if(C){gx.s(oO('c',C))}
    gx.ss(N(l)?l:2)
    return gx}

gx.sC=function(s,w){var gx=this
    w=N(w)?w:2
    s=O(s)?s:oO('c', s||null)
    gx.s(s)
    gx.ss(w)
    return gx
}
/////////////////////////////////

h.rGx = h.radGradx=function(cols, ratios, x1,
                            y1, r1, x2, y2, r2){
    var h=this,
        gx= h.graphics,
        args = _.toArray(arguments),
        circs,
        len

    cols= _.map(cols, function(c){return oO('c',c)})

     c = circs = _.rest(args, 2)

    len = c.len  //use switch!

    x1=0; y1=0; r1=0; x2=0; y2=0; r2=50

    if(len==1){r2 = c[0]}
    else if(len==2){r1 = c[0]; r2 = c[1]}
    else if(len==3){o={
        x1:c[0],x2:c[0],y1:c[1],y1:c[1],r2:c[2]}}

    else if(len==4){o={
        x1:c[0],x2:c[0],y1:c[1],y2:c[1],r1:c[2],r2:c[3]}}

    else if(len==5){o={
        x:c[0],y:c[1],X:c[2],Y:c[3],r:c[4],R:c[4]}}

    else if(len==6){o={
        x:c[0],y:c[1],
        X:c[2],Y:c[3],
        r:c[4],R:c[5]
    }

}

    gx.beginRadialGradientFill(
       cols,ratios, x1,y1,r1,x2,y2,r2)
    return h}




h.fs=function(){
    var h=this,gx= h.graphics;
    gx.fs.apply(gx, arguments);return h
}
h.c=h.f=function(c,C,l){var h=this,gx= h.graphics

    c=oO('c',c||$r())
    gx.f(c)
    if(S(C)){gx.s(oO('c',C))}
    if(N(l)){gx.ss(l)}
    return h}

h.C=h.s=function(C,l){var h=this,gx= h.graphics
    C=oO('c',C||$r())
    gx.s(C)
    if(N(l)){gx.ss(l)}
    return h}
h.cC=function(c,C){return this.c(c).C(c)}//h.sC=function(){  var h=this,gx= h.graphics; gx.sC.apply(gx, arguments); return h}



BMFILL=function(){

    s = cjs.stage('y',1200,600).A()

    h = s.h().XY(0,0)
    h.c('b')
   // h.pol( [100,100], [300,100], [300,300]  )
    h.c('r')
  //  h.bf('me', function(){
       // h.rex({   x:600,   y:300,     w:500,    h:500   })
        //  h.rex(   400,  400,   500,  500    )
  //  })


   // h.rex({x:600,y:300,w:500,h:500,i:'me'})
    h.c('r')
    h.rex('b', 'w', 400, 400, 50, 100, 20)
    h.rex({x:200,y:300,  w:200, h:200,   l:0,  c:'b',   C:'r',   lG: 1})
    h.rex({x: 500,y:200, w:200,h:300, C:'w', l:0,  i:'guy'})





    /*
         h.bf('me', function(){

             h.dr(0,0,200,300)

             h.dr(200,300,200,300)

             h.rec(200, 300, 200, 300)

             h.c('b').rec(200,300,200,300)

         })


        h.lG('b','r',400)
         h.dr(100,100,100,300) //x,y,w,h


        h.rG({  c:'b', C:'x',x:600,  y:300,  X:600,  Y:300,   r:10,  R:100})

        h.dr(600, 300, 800, 800)
        h.dr(-100, -100, 50, 50)
        h.dr(0, 0, 50, 50)
        h.dr(0, 100, 50, 50)
        h.dr(100, 0, 50, 50)
        h.dr(100, 100, 50, 50)

        h.rec({c:'b', x:600, y:300, w:200, h:200 })

        h.rec({c:'b', x:200, y:200,  w:200, h:200 })

    */
}


h.cir= h.circ = h.circle = h.cir2=function(x,y,r,c,C,l){
//nicely done

    var h=this,
        gx=h.graphics,
        o

    if(N(y)){o={x:x, y:y, r:r,c:c,C:C,l:l}}

    else if(N(x)){o={x:0,y:0,r:x,c:y,C:r,l:c}}
    else if(S(y)){o={c:x,C:y,x:r,y:c,r:C,l:l}}
    else if(S(x)){o={c:x, x:y, y:r, l:C}}
    else if(O(x)){o=x}
    else {o={}}

    if(o.l){h.l(o.l)}
    if(o.C){h.C(o.C)}
    if(o.c){h.c(o.c)}
    gx.dc(o.x,o.y,o.r)

    return h}


CIRX=function(){z()

s= cjs.stg('b', 1200,600).A()

    h= s.h().XY(0,0)


    h.cir({
        x:0,
        y:0,
        r:100,
        c:'g'
    })
    
    h.cir({
        x: 300,
        y:300,
        r:100,
        c:'r'
    })

}



h.dc=function(x,y,r){var h=this,gx= h.graphics
    gx.dc(x,y,r)
return h}

h.z = h.clear=function(){var h=this,gx=h.graphics; gx.clear(); return h}
h.same=function(){var h=this; return cjs.shape(h)}

h.rect= h.dr= function(x,y,w,H,c,C){

    var h=this, gx=h.graphics
    if(c){h.c(c)}
    if(C){h.C(C)}
    gx.dr(x,y,w,H)
    return h
}



h.rec= function(o){var g=G(arguments),o=g[0],
    hW,hH, h=this

    if(S(o)){
        o={c:g[0], w:g[1], h:g[2],
            x:g[3], y:g[4], a:g[5]}}
    o=o||{}

    o.w =  _.tN(o.w, 50)
    o.h =  _.tN(o.h, 50)
    o.x =  _.tN(o.x)
    o.y =  _.tN(o.y)
    o.a =  _.tN(o.a)

    if(o.c){o.c = oO('c', o.c||'g')}
    if(o.C){ o.C = oO('c', o.C|| o.c)}
    o.l = _.tN(o.l, 6)

    hW = o.w/2
    hH = o.h/2
/*
    h.mt(-hW+ o.x,-hH+ o.y)
    h.lt([-hW+ o.x, hH+ o.y],
        [hW+ o.x,  hH+ o.y],
        [hW+ o.x,-hH+ o.y],
        [-hW+ o.x,-hH+ o.y]
    )*/


    h.mt(-hW ,-hH )
    h.lt([-hW , hH ],
        [hW ,  hH ],
        [hW ,-hH ],
        [-hW ,-hH ]
    )
    h.cp()

    h.rot(o.a)

    return h
}


h.poly= function(V,c,C,l){//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    
    var h=this, g=arguments
    
    h.c(c,C,l)
    
    if(A(V) && N(V[0])){

        _.each(g, function(v){

            h.lt(v[0], v[1])
        })
        
    }//verts passed in directly AS NUMBERS ??

    //if passed in array
    else {
        
        _.each(V, function(v){ h.lt(v) })
    }
      
    h.cp()
    return h}



h.drawPolygon = h.drawConnectedLines = function(V,C){
    var h=this,n=V.length
    _.each(V, function(v){
        v.X = v.x
        v.Y = v.y
    })
    if(C){h.C(C)}
    if(n >= 3){h.mt(V[0])//move to the FIRST//lineTo the REST
        T(n,function(i){h.lt(V[i%n])})} //just a clever way to start from 1
    return h}



h.drawPolygons= function(paths, C, c){
    var h=this
    h.C(C)
    if(c){h.c(c)}
    _.each(paths, function(p){h.drawPolygon(p)})
    return h}






SHAPEY=function(){z()
    s = cjs.s(1200, 600).A() //STG()
    h = s.h()

    h.l(30).cir(100, 100, 50, 'b', 'r')   //auto drags
    //h.cir('b','r',30)
    //h.cir(100,100,50)

    // h = s.cir({c:'w'})
    s.cir(200, 200, 100)
    h= s.cir({
        x:400,y: 200,
        c:'y',C:'o',
        r: 200,l: 30,
        o: 0.8})

    // s.cGr({x:300,y:300,r:100,c:'w',C:'z',X:50,Y:0})

    s.cir({
        x:300,y:300,
        r:100,
        c:'w',C:'z',
        rG:1
    })

}

ct.h = ct.shape =function(x,y,c,C,l,d){var ct=this, h,o
    //if(cjs.isShape(o.h)){return new cjs.Shape(h.graphics)} ?

    o = N(x)? {x:x, y:y, c:c,C:C,l:l,d:d} : O(o)? o : {}
    o.x = o.x || ct.W()/2
    o.y = o.y || ct.H()/2
    o.d = D(o.d)? o.d : 1

    h = new cjs.Shape().XY(o.x, o.y).a2(ct)
    if(o.c){h.c(o.c)}
    if(o.C){h.C(o.C)}
    if(o.d){h.drag()}
    return h}

ct.grC=function(x,y,r,c,C,os){var s=this, h=s.h(x,y)
    x=_.tN(os,0)

    h.rGr({
        c:c,C:C,
        s:0,S:1,
        x:x,y:0,X:0,Y:0,
        r:0,R:r
    })

    h.C('z').l(4).dc(0,0,r)
    return h}

ct.cir=function(o){var ct=this,h, o, g=G(arguments)
    if(N(g[2])){o={x:g[0],y:g[1],r:g[2],c:g[3],C:g[4]}}
    else if(N(g[0])){o={x:ct.W()/2,y:ct.H()/2,r:g[0],c:g[1],C:g[2]}}
    o.c=o.c||'w'
    o.l= N(o.l)? o.l : 4
    o.C=o.C||'z'
    o.x = N(o.x)? o.x: ct.W()/2
    o.y = N(o.y)? o.y: ct.H()/2
    o.r = N(o.r)? o.r: 40

    h = ct.h(o.x, o.y)

    h.l(o.l)

    if(o.rG){
        o.X=N(o.X)? o.X:0
        o.Y=N(o.Y)? o.Y:0

        h.rGr(o.c,o.C,o.X,o.Y, 0,o.r)

        h.dc(0, 0, o.r)
    }

    else {
        h.cir(0,0, o.r, o.c,o.C)}

    if(N(o.o)){h.opacity(o.o)}


    return  h}

ct.cGr=function(o){var ct=this,

    h=ct.h(o.x,o.y)
    h.rGr(o.c,o.C, o.X, o.Y, 0, o.r)
    h.dc(0, 0, o.r)

    return h}

ct.circ=function(c,r,x,y){var ct=this

    var h = cjs.cir(c,r,x,y)

    ct.A( h )

    return h
}


ct.lG=function(o){

    var ct=this, o=o||{}




}




ct.rect=function(x,y,w,h,c,C,l,d){
    var ct=this
    return ct.h(x,y,c,C,l,d).dr(0,0, w,h)
}


ct.RECT =function(c, w, H, x, y, a){var ct=this
    var h = cjs.RECT(c, w, H, x, y, a)
    ct.A(h)
    return h
}


ct.poly =function(){ // ?
    var h = this.h()
    h.poly.apply(h, arguments)
    return h}


ct.art = function(x,y,c,C){var ct=this, g=G(arguments)

    if(U(x)){alert('must at LEAST define x'); return}
    if(!N(x)){alert('x not a number! but must be, lah'); return}
    y= N(g[1])?g[1]:x


    c= S(g[2])?oO('c',g[2]):null
    C= S(g[2])?oO('c',g[3]):c

    var h = cjs.h(x,y,c,C)
    ct.A(h)
    if(g.p){h.drag()}
    return h
}




//canon

cjs.ballx=function(r,c,C){

    var b= cjs.circle(0,0, r,c,C)

    b.r=r

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
    return b
}

cjs.circle2x=function(r,z,x,y){
    gx = new cjs.Graphics()

    if( !S( r ) ){  return cir( 'r', r, z, x )}
    z = N(z) ? z : 32
    x = N(x) ? x : 100
    y = N(y) ? y : 100
    gx.ss( z/8 ).f( r, 'black' ).dc( 0, 0, z )

    return cjs.shape( gx ).XY( x || 100, y || 100 )

}


cjs.circle3x = function( x, y, r, c, C ){

    var  h  = cjs.shape()

    if( O(x) ){  return cir(   x.x,    x.y,   x.r,    x.fc,   x.sc  ) }

    x = x || 0

    y = y || 0

    r = r || 8

    c = c || 'w'

    C= C || 'z'

    h.cir( x, y, r, fc, sc )

    SL( h )

    return h

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
cjs.circ = cjs.circle = function(radius, fc ){

    if( !N(radius) ){return cjs.circ(8, radius)}

    fc =  oO('c', fc|| 'z')

    return cjs.shape().f(fc).dc(0, 0, radius)
}
cjs.cir= function(col, rad, x, y){

    if(!S(col)){y=x;x=rad;rad=col;col='y'}
    y=N(y)?y:0
    x=N(x)?x:0
    rad=N(rad)?rad:50

    return cjs.shape().f(col).dc(x,y,rad)
}




ct.diamond = function(x,y,W,H,c,C){
    var ct=this, h,

    W = W|| 100,
    H = H || W,
    hW = W/ 2,
    hH = H/2

   h=cjs.shape().cC(c||'g', C||'w')
        .mt(0,-hH)
        .lt([-hW,0],[0,hH],[hW,0],[0,-hH])
    h.XY(x,y)
    h.a2(ct)

    return h}



CIRGR = function(){

    s = cjs.stg('t', 1200,600).A()

    h = s.h()

    h.c('b','g',20)

    h.cir({x:300, y:400, r:100, c:'b', C:'o', l:5})

    h.cir(100, 100, 100)


    h.cir('b',200,200,100)



//    s.grC(600,300,100, 'o','r',50)


}

DIA=function(){z()

    s = cjs.stg('o', 1200, 600).A()

    //diamond
    h = s.diamond(800,100, 100,100,'r','b').drag()
    h2 = s.diamond(1000,100, 100,100,'b','r').drag()
    //s.rec({   c:'b',C:'w',l:4,  x:100,y:100,   w:100,h:300})

    h.bLGF(['r','u'],[0,1],0,20,0,120).dr(20, 20, 120, 120)

}




ct.rec= function(o){var g=G(arguments),o=g[0],
    hW,hH, h,
    ct = this

    if(S(o)){

        o={c:g[0], w:g[1], h:g[2],
            x:g[3], y:g[4], a:g[5]}
    }

    o=o||{}
    o.w =  _.tN(o.w, 50)
    o.h =  _.tN(o.h, 50)
    o.x =  _.tN(o.x)
    o.y =  _.tN(o.y)
    o.a =  _.tN(o.a)
    o.c = oO('c', o.c||'g')
    o.C = oO('c', o.C|| o.c)
    o.l = _.tN(o.l, 6)
    hW = o.w/2
    hH = o.h/2
    h = cjs.shape()
    //h.c(o.c, o.C, o.l)

    h.graphics.createLinearGradient()


    h.mt(-hW,-hH)
    h.lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])
    h.rot(o.a)
    h.XY(o.x,o.y)
    ct.A(h)
    return h.drag()
}








cjs.rect2=function(w,H, x,y, c,C){
    w = w || 100
    H = H || w

    x=N(x)?x:0;
    y=N(y)?y:0
    c=c||'green'
    C=C||'white'
   hW = hW = w/2
   hH = hH = H/2
    var h = new createjs.Shape()
    h.cC(c,C)

    h.mt(-hW+x, -hH+y)
        .lt(-hW+x,hH+y)
        .lt(hW+x, hH+y)
        .lt(hW+x,-hH+y)
        .lt(-hW+x,-hH+y)
    return h
}

cjs.rect=function(w,H,c,C){

    c=c||'g'
    C=C||'w'
    w = w || 100
    H = H || w
    hW = w/2
    hH = H/2

   return cjs.h().c(c,C)
        .mt(-hW, -hH)
        .lt([-hW,hH],[hW, hH],[hW,-hH],[-hW,-hH])
}



cjs.RECT= function(c, W, H, x, y, a){
    var hW,hH, h, ct = cjs.ct()
    W=N(W)?W:50
    H=N(H)?H:50
    x=N(x)?x:0
    y=N(y)?y:0
    a=N(a)?a:0
    c= oO('c', c||'g')
    hW = W/2
    hH = H/2
    h = cjs.shape()
    h.c(c).mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])
    ct.A( h.rot(a).XY(x,y)  )
    return ct
}







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




cjs.shape= cjs.shp= function(x,y,c,C,l,d){
    if(cjs.isShape(x)){return new cjs.Shape(x.graphics)}
    var h = new cjs.Shape()
    if(N(x)){ h.X(x) }
    if(N(y)){ h.Y(y) }
    h.c(c,C,w)
    if(d=='drag'){h.drag()}
    // use a switch statement here!  i love it!
    return h}









    cjs.cirX=function(stg,x,y,r,f,s,width,opt){
    var shp=cjs.shape(stg,x,y,f,s,width,opt) // ss = N(ss)?ss: radius/8
    shp.dc(0,0,r)
    return shp}


nip=function(){

    var h= cjs.h(10,10).al(.8).a2(s).drag()

    h.bRGF(['b','o'],[0,1],
        0,0,10,0,0,100
    ).dc(0,0,100).endFill()

    return h}




USINGLAYERSINEASEL=function(){

    Q(['me','guy'], function(q){

        s = cjs.S()

    me  = q.bm('me').a2(s).sXY(3)

    guy = q.bm('guy').a2(s).sXY(.5).drag()

    $.button('s.sXY(2)', function () {s.sXY(2)}).A()


    cjs.tick(function(){
        me.X( guy.x * 2.2 - 140)
        me.Y( guy.y * .2 )})

})



}




SHAPES=function(){z()
    s = cjs.stage(500, 500).A()
    s.can.P('a').XY(300)

    s.bm('me', 0.2, function(bm){})

    s.A(cjs.circle(100, 'blue','green').XY(100, 100).drag())

    s.circle(100, 100, 10, 'red', 'yellow' )
        .circle(10,100,100,'black','purple')
        .circle(100, 10, 100, 'blue', 'red' )
        .circle(150,150,120,'red','blue')
        .circle(30,'brown','gray')




}
EASELART=function(){z()

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


CENTERSHAPE=function(){z()

    s = cjs.stage(500,600).A()
    /*
    shape = new cjs.Shape()

    SL(shape)

    stage.A(shape)

    shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)

   // shape.RECT( 0, 0,  100, 100,   'a' )
   // shape.RECT( 0, -75,  25, 50,   'b' )
   // shape.RECT( 0, -200,  100, 100,   'r' )


    shape.circle(100,200, 40, 'z','x')

    shape.graphics.drawRoundRectComplex(  0,0, 300,300, 20,20,30,40 )
    shape.XY(200)

    //stage.bm('me', function( b ){ me=b; me.XY(200); me.sXY(.4)})
*/
}


GRAPHICSTEST=function(){
       stage = cjs.stage(800,500).A()


    canvas=stage.canvas


        // grab canvas width and height for later calculations:
        w = canvas.width
        h = canvas.height


   img=$.img('me', layout)[0]


    function layout() {
        var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
            createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]

        var padding = 5
        var _width = 155
        var _height = 155
        var cols = 4
        var space = 0


        var border = createBorder();

        _.times(arr.length, function(i){

            var tile = arr[i]()

            tile.x=    42 + (_width+padding)*(i%cols)

            tile.y=    42 + (i/cols|0)*(_height+padding)

            stage.A(tile)
        })

        stage.A(border)
        stage.update()
    }

    function createBorder(){

        var s=cjs.shape()

        s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)

        return cjs.container().A(s)
    }
    function createBitmapFill(){
        var container = createTile();
        var s = cjs.shape().XY(12,10)

        var mtx = new createjs.Matrix2D().rotate(1)
        s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
            .beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)

        return cjs.container().A(s)
    }
    function createRectGradientFill(){

        var s = cjs.shape().XY(12,10)

        s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)

        return createTile().A(s)}
    function createEllipse(){

        var s = cjs.shape().XY(40,10)

        s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
            .setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
            .drawEllipse(0,0,70,140,8)
        return createTile().A(s)
    }
    function createRadialGradientFill(){

        var s = cjs.shape().XY(80)
        s.graphics.ss(8).beginStroke("#f0f")
            .beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
        return createTile().A(s)}
    function createLineTo(){

        var s = cjs.shape()

        s.graphics.setStrokeStyle(16,"round","round").beginStroke("#f90")
            .moveTo(20, 10).lineTo(90, 90).lineTo(90,140)

        return createTile().A(s)}
    function createHex(){

        var s =  cjs.shape().XY(80,40)

        s.graphics.beginFill("pink")
            .drawPolyStar(0, 0, 40, 6)
            .drawPolyStar(0, 75, 40, 6)
            .drawPolyStar(45, 45, 20, 6)

        return createTile().A(s)}
    function createStar(){
        var s = cjs.shape().XY(80,85)
        s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
            .beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
        return createTile().A(s)
    }
    function createRoundRect(){
        var s = cjs.shape().XY(12)
        s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
        return createTile().A(s)
    }
    function createTile(){

        var bg = cjs.shape()

        bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()

        bg.alpha = 0.25

        return cjs.container().A(bg)
    }
}
RADIALGRADRECT=function(){s=cjs.S()





    x1=100
    y1=150
    r1=20
    x2=100
    y2=150
    r2=100


    h=cjs.shape(10, 10).a2(s).drag()


       change= function(){

      //  h.remove()

       // h=cjs.shape(10, 10).a2(s).drag()

        h.graphics.beginRadialGradientFill(  ["red", 'blue', "yellow"],  [0, .5, 1],

            x1,
            y1,
            r1,
            x2,
            y2,
            r2


        )


        .dr(0,0,400,400)
        .endFill()
            // x--

        r1++
      r2++
}

    setInterval(change, 1000)

    change()
 }

CIRCRG=function(){

    s=cjs.S()


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



        h.graphics.beginRadialGradientFill(

            [ 'blue', "orange"],
            [0,  1],
            x1,  y1,  r1,
            x2,  y2,  r2
        )


            .dc(0, 0,100)
            .endFill()
        // x--

       // r1++
       // r2++
    }


    setInterval(change, 1000)

    change()

    n = nip()

    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}








EASELCONVEX=function(){s=cjs.S()
    s.poly([[-100,-10],[0,100],[100,20]],
      'red','white',10).XY(200,300)
    s.poly([[-20,-80],[-100,-200],[100,5]]).XY(300, 200)
    s.poly(
      [[-40,40],[-40,-40],[40,-40], [40,30]],
      'blue', 'white').XY(200,200)}
CONVEX=function(){w=b2d.W({g:0}).debug()

    // so clearly b.convex lets me specify polygon fixtures by an array of points

    b = w.dyn(300, 300).fixRot()
    b.convex('green', [  [0,0], [0,-200], [100,0]  ]  )
    b.convex('blue', [  [0,30], [-300,-20], [100,0]  ] )
    b.convex('pink',  [ [0,30],[-30,-20],[10,0]  ]  )



    // verts creates a dyn body and lets u pass in multiple 'convex calls'
    w.verts( 300, 500,[
        ['p', [-20,-20],[0,-30],[10,10]],
        ['n',[0,0],[30,-50],[50,-10]]
    ])


    c = w.dyn(300, 300).fixRot()



    /*
    b2 = w.dyn(300, 300)
    b2.convex('red', [ [0,0],[0,-20],[10,0] ] )
    b2.convex([[0,30],[-30,-20],[10,0]] )

    b3 = w.dyn(300, 300)
    b3.convex( 'g',[[-150,0],[-120,-20],[-80, -50],[0,-30]] )
    b3.convex('r',[ [-30,-30], [-20,10], [-10,60]] )
    b3.convex('o',[ [-30, -30], [-20,-50], [ 10, -20]] )
     */



}
VERTS=function(){w=b2d.W().debug()

    thingy = [['pink',[-20,-20],[0,-30],[10,10]],
    ['brown',[0,0],[30,-50],[50,-10]]]

    _.times(100, function(){

        w.verts(Math.random()*600, Math.random()*300+200, thingy)
    })


}
PITFALL=function(){

     b2d.levelScrollX()


    turtle = [
        ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

        ,  ['yellow',[10,-10],[20,-30],[50,-15], [45,-5]]

        , ['yellow',

            [-50,10],[-50,-10],[-40,-10],[-40,10]
        ]

        , ['yellow',

            [-10,10],[-10,-10],[0,-10],[0,10]
        ]
    ]



    turtle2 = [
        ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

        ,  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ]



        , ['yellow',

            [-50,10],[-50,-10],[-40,-10],[-40,10]
        ]

        , ['yellow',

            [-10,10],[-10,-10],[0,-10],[0,10]
        ]
    ]




   t = w.vertsKin(400, 280, turtle).fixRot()
   t2 = w.vertsKin(700, 280, turtle2).fixRot()

    setInterval(function(){
        t2.linVel(5,0)
        setTimeout(function(){  t2.linVel(-5,0) },1000)
    }, 2000)

}
TURTLE=function(){w=b2d.W({g:0})//.debug()

    y = w.ship()

    turtle = [

        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10]],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5]],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10]]

    ]


   // t =  w.verts(400,280,   turtle)

    t =  w.B(400, 280, turtle)


    fs = t.fixts()
}



