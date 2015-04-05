

TURTLE=function(){W(0).Y()

    turtle =[
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12],
        ['u', 30,40, 75,-12]
    ]

    w.B(400, 280,turtle, '-')  //this changes the data object for future uses !!!


    w.B(600, 280, [
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12, '-'],
        ['u', 30,40, 75,-12 ,'-']
    ])

    w.S(300,300,'o', 10)

    w.B(300,100,'b',50)
    w.B(300,200,'y',50,'-')
    w.B(300,400,[['b',50,50,0,'-'],['y',50]])
    w.B(700,100,'b',50,50)
    w.B(700,200,'y',50,50,'-')
    w.B(700,400,[['b',50,50,50,0,'-'],['y',50,50]])


    // t =  w.verts(400,280,   turtle) // fs = t.fixts()


    r = w.S(600,300,'r',12 ,'-')

    b = w.dyn(300,400)
    b.cir({r:100, c:'w', rg:1})
    b.cir({r:100, x:500, c:'w', lg:1, s:1})




    b = w.B(500,400,  {r:100, c:'y', t:'c'}  )


    //  {r:100, x:100, c:'w', lg:1, s:1, t:'c'}  ])





    f = r.fixt()


/*
    r.cir('b', 30, 100,200,'-')
    r.cir({  c:'g', r:30, x:100 ,s:1 }, '-')
    r.cir({  c:'w', r:30  })
    r.cir({  c:'z', y:-100  })
    r.cir(['y', 30, 200, 100])
*/


}





CURTLE=function(){W(0).Y()

    turtle =[
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12],
        ['u', 30,40, 75,-12]]

    /*
    w.B(400, 280,turtle )

     w.dyn(400,300).rec(
     {w:300,h:300, x:100,y:100, bm:1},
     {w:200,h:200, lg:1, l:15},

     {w:10,h:40,c:'r'},

     {w:40, h:40, x: 100, c:'z'  },
     {w:40, h:40, x: 200, c:'b', C:'o', l:10  },
     {w:200, h:20, c:'g', y: 200, s:1 , lg:1 })


*/


    w.dyn(300,200).cir(
        {r:20,y:-20},
        {r:20},
        {r:20, x:20, lg:1, c:'b',y:30},
        {x:50, s:1, rg:1},
        {x:100,r:50,c:'r',C:'x',l:10, s:1},
        {y:-100, r:50, bm:1})



    b= w.dyn(800, 300)


    b.pol({
        c:'x',  C:'o',
        //l:5,

        bm:1,

        v:[  [-100,0],[0,-100],[100,50]   ]

    })



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

ct = cjs.Container.prototype

ct.h= ct.shape=function(x,y,c,C,l,opt){var ct=this,


    h= cjs.h(x,y,c, C, l,opt).a2(ct)

    return h
}


ct.cir=function(x,y,r,c,C,l,opt){var ct=this
    return ct.shape(x,y,c,C,l,opt).dc(0,0,r)}
ct.circ =function(c,r,x,y){var ct=this
    return cjs.cir(c,r,x,y).a2(ct)}



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
    if(!N(r)){return cjs.circ(8,r)}
    c=oO('c',c||'z')
    return cjs.shape().f(c).dc(0,0,r)
}
cjs.cir = function(col, rad, x, y){
    if(!S(col)){y=x;x=rad;rad=col;col='y'}
    y=N(y)?y:0
    x=N(x)?x:0
    rad=N(rad)?rad:50
    return cjs.shape().f(col).dc(x,y,rad)
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
cjs.ball=function(z,fc,sc){//canon

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




USINGLAYERSINEASEL=function(){Q(['me','guy'],function(q){s=cjs.S()

    me  = q.bm('me').a2(s).sXY(3)
    guy = q.bm('guy').a2(s).sXY(.5).drag()
    $.button('s.sXY(2)', function () {s.sXY(2)}).A()
    cjs.tick(function(){
        me.X( guy.x * 2.2 - 140)
        me.Y( guy.y * .2 )})

})}






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

St=function(){z()
    s = cjs.stg(1200,600).A()
    h = cjs.h(0,0).a2(s)
    SL(h)
}


CENTERSHAPE=function(){St()

    h.rect(100,100,100,100,'y')
    h.rect(200,200,100,100,'b')

    h.c('o').polyStar(300,100,
        50,5,0.6,-90)

    h.c('w').C('z')
        .roundRectComplex(400,300,
      300,300, 20,20,30,40 )

    h.circ(500,200,40,'b','z')
}




SHAPES=function(){St()

    s.can.P('a').XY(300)
    s.bm('me', 0.2, function(bm){})
    s.A(cjs.circle(100, 'blue','green').XY(100, 100).drag())
    s.circle(100, 100, 10, 'red', 'yellow' )
        .circle(10,100,100,'black','purple')
        .circle(100, 10, 100, 'blue', 'red' )
        .circle(150,150,120,'red','blue')
        .circle(30,'brown','gray')

}


cjs.M=function(rot){
    var m= new cjs.Matrix2D()
    if(N(rot)){m.rotate(rot)}
return m}

GRAPHICSTEST=function(){St(); img = $.img('me',function(){s.ct().h().bmS(img).ss(32).dr(20,20,920,360); _.each([

        function recGrF(){return $h(12,10)
            .lGF('b','g',130).dr(130)},

        function ell(){return $h(40, 10,'b',16)
                 .lGS('r','w',70,140).de(70,140)},

        function bmF(){return $h(12,10,18)
            .bf(img, cjs.M(1) ).rGS('b','g',30,130).dr(130)},


        function radGrF(){return $h(80,80).C('b',8)
                 .rGF('w','y',40).dc(40)},

        function roundRec(){return $h(12,12,'g','r',8)
            .rr(130,30)}, //w(h) and r


        function star(){return $h(80,85,'y','b',3)
            .pStr(0,0,80,5,.8,-95)},
        function hex(){return $h(80,40,'p')
            .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)},

        function lt(){return $h().C('o')
                 .ss(16,'round','round')
                 .mt([40,10],[90,90],[90,140])}

    ],

         function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
             s.A(tile(cont()).XY(
                     42+(W+P)*(i%C),
                     42+(i/C|0)*(H+P)))})})[0]




    tile=createTile=function(x,y){var bg,til
        bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
        til = cjs.ct().A(bg)
        if(N(x)){  til.X(x) }
        if(N(y)){  til.Y(y)  }
        if(O(x)){ til.A(x) }

    return til}


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


RADIALGRADCIRC=function(){s=cjs.S()





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

        h.graphics.beginRadialGradientFill(  [ 'blue', "orange"],  [0,  1],

            x1,
            y1,
            r1,
            x2,
            y2,
            r2


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



VERTS=function(){W()

    thingy = [['p',[-20,-20],[0,-30],[10,10]],
        ['n',[0,0],[30,-50],[50,-10]]]

    _.times(100, function(){
        w.verts(R(600),R(300,200),thingy)})

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

