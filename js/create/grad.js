CIRCTEST=function(){St()

    s.h().drag().cir({r:100,c:'b',C:'X',l:20,lf:1}, //why cant set lf to {}?
        [{x:250,y:300 }, {x:450,y:300 }, {x:250,y:500}])

    s.h().drag().cir({C:'X',lf:{X1:650,X2:220,Y1:950,Y2:520},r:100},
        [{x:750,y:300},{x:950,y:300 },{x:750,y:500}])

}



CIRS=function(){W(10).Y()
   w.D(200,160).cir(   {r:120, rf:{c1:'r',c2:'b'}},  {r:100, C:'y', l:2, bf:'me'})

    w.D(100,100).cir({r:35,lf:{c1:'o',c2:'y'}})


    w.D(300,200).cir({r:50,  x:0,   y:0,   lf: {c1:'o', c2:'b', X1:400 } })
        .cir({r:100, x:200, y:0,   lf: {c1:'o', c2:'b'} })
        .cir({r:100, x:100, y:100, lf: {c1:'o', c2:'b'} })


    w.s.h().dc([50],[200,0,100],[100,100,100]).c({ l:20,C:0,ls:1}).dc([50],[200,0,100],[100,100,100])

}
LT=function(){St()


    h.c('y').dc(100,100,30).c('o').dc(100,100,10)
         .c('X','g',8)
         .mt([
             [100,100],[300,300],[400,100],
             [500,300],[450,450]],[[500,0],[600,100]
         ])
    h.cir(600,300, 'u', 'g', 10)


    lf={c1:'b',c2:'o',y1:200,y2:700}
    v=[[300,300],[320,200],[640,400],[280,650]]
    //two ways to make the same thing
    s.h().poly({
        v:v,
        lf:lf
    })
    s.h(250,50).lf(lf).mt(v)
}
HPOLY=function(){St()
    v=[[-100,0],[0,-100],[100,50]]
    s.h(600, 300).poly({v:v, bf:'me'})
    s.h(900, 300).poly({v:v, lf:1})
    s.h(800, 300).poly({v:v, rf:1})
    h=s.h(200,300).drag().bf('me', function(){
        h.dc([150],[200,0,150])
    })
}



CIRCSTROKE=function(){St()

    gx= h.graphics

    h.c('b', 'r',10).XY(-100,-100)


    h.dc([200,200,50],[400,200,50],[600,200,50])






    /*  h.dc(300,300,50)
     gx.dc(400,400,50)
     h.dc(500,500,50)
     gx.dc(600,600,50)
     */

}
ROTREC=function(){St()

    ct = s.ct(600, 300)

    ct.rec({ w:400,h:400, c:'r',C:'o',l:10,a:-5 })
    ct.rec({ w:100,h:200, c:'b',C:'w',l:20,a:20, rg:1 })
    h = ct.rec({
        w: 100, h:200, a:20,
        c: 'b', C:'w', l: 20, bm:1
    }).X(100)
    $.in(8, function(){h.X(0)}) //notice how gradient is seen behind the bm!!!

}
TWORECS=function(){St()

    ct = s.ct(1000, 300).drag()
    ct.rec({ w:400,h:200, c:'r',C:'o',l:10,a:-5 })
    h1 = ct.rec({ w:200, h:400, c:'r', C:'o', l:10, a:5 })
    // h is another container.. to clr ->  h1.children[0].clr()

    h= s.h().dr2()
    //.rec({  })

}



BMH=function(){St()
    v=[[-100,0],[0,-100],[100,50]]

    s.h(100,300).drag().bmCir({
        circs:[{r:150},
            {x:200,r:150},
            [300,100,100],[400,100,100]]})

    s.h(700,300).drag().bmV({v:[
        [[-100,0],[0,-100],[100,50]],
        [[-200,0],[-100,-100],[0,50]],
        [[0,200],[0,-200],[400,-300],[400,300]]]})

}





CIRCS=function(){St()
   // h.dc(100,100,50) -> no color


    h.c().dc(100,100,50) // black fill, l4 white stroke
    h.c('*').dc(100,200,50).dc(100,250,50)
    h.c('***').dc(200,200,50).dc(200,250,50)
    h.c({C:'r'}).dc(300,300,50)
    h.circle({
        r:50, x:200, y:200,
        C:['y',10],
        lf: {c1:'u',c2:'o',y1:100,x2:100},
        ls: {c1:'u',c2:'o'}
    })
    h.circle({
        r:50, x:500, y:200,
        C:['y',2],
        rf: {c1:'u',c2:'o',x1:10,y1:10,  r2:30}, //, y1:100,x2:100},
        rs: {c1:'y', c2:'u', x1:-20,  y1:-20,  r1:40, r2:40    }
    })

    h = s.h().drag().lf({}).dc()
        .c('b','g',10).lf({  y2:400  }).dc(300,300,50)


    cjs.me(function(i){
        h.c({

            l:200,
            rf: ['w', 'u', 800],
            rs: {c1:'w', c2:'x', r2:800}

        }).dc({x: 0, y:0, r:200})

        s.h().c({
            l:200,
            lf: {c1:'w',c2:'u',y2:200},
            ls: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200}
        }).dc({x: 0, y:0, r:200}).drag()

        s.h().lf('y','r',10).dc({r:200}).c({
            l:0,
            c:'y',
            //lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
            bs:i,bf:i
        }).dc({r:200}).drag()
        s.h(40,10,'b',8).rf({c1:'r',c2:'d',r2:100}).dc(0,50,40).drag()
    })
}


OVALS=function(){St()
    h=s.h(40, 10,'b',16).drag()
    h.c({C:['o',5],lf:{c1:'g',c2:'r',x2:100,y2:400}}).de(100, 400)

    h.c({C:'b',
        lf:{c1:'g',c2:'r',x2:400, y2:100}}).de(400,100)

    h.l(30).lf({c1:'b',c2:'y', x1:100, y1:100, x2:500,  y2:400 })
        .de(100, 200, 500,300)


    h.ls('r','w',300,100,400,140).de(300,0,300,500)

}
GRAPHTEST=function(){St(); img = $.img('me',function(){s.ct().h().bmS(img).ss(32).dr(20,20,920,360); _.each([

        function(){return $h(12,10)
            .lf('b','g',130).dr(130)},

        function(){return $h(40, 10,'b',16)
            .ls('r','w',70,140).de(70,140)},

        function(){return $h(80,80)
            .C('b',8).rf('w','y',40).dc(40)} ,

        function(){return $h(12,10,18)
            .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






        function(){return $h(12,12,'g','r',8)
            .rr(130,30)}, //w(h) and r


        function lt(){return $h().C('o')
            .ss(16,'round','round')
            .mt([40,10],[90,90],[90,140])},

        function star(){return $h(80,85,'y','b',3)
            .pStr(0,0,80,5,.8,-95)},



        function hex(){return $h(80,40,'p')
            .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


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

MICK=function(){St()
    ct.mick=function(x,y,lf){var ct=this,

        h= ct.h(x,y).drag()
        .c({ l:20,  C:0,   lf: lf||1  })
        .dc([50],[200,0,100],[100,100,100])

        ct.h(x,y).drag().c({ l:20,  C:0,   ls: lf||1 }).dc([50],[200,0,100],[100,100,100])
        return h}


    s.mick(500,200)
    s.mick(700,100, { c1:'b', c2:'X' })
    s.mick(700,300, { c2:'b' })
    s.mick(100,100, { y2:10 })
    s.mick(100,200, { y2:200 })
    s.mick(100,300, { x2:100 })


}


REC=function(){
    St()
    h=s.h(480,270).drag()
    h.C('z',2).lf({x:-100, c1:'r',c2:'y'})
        .dr2({w:300,h:100,x:0,y:-100},
        {w:100, h:300})

    s.h(180,270).drag()

        .lf({c1:'r', c2:'y', x1:-100}).dr2(
        {w:300,h:100,x:0,y:-100},
        {w:100, h:300})

}




CONVEX=function(){W(0)

    // so clearly b.convex lets me specify polygon fixtures by an array of points

    b = w.D(300, 300).fixRot()

    b.convex('g', [  [0,0], [0,-200], [100,0]  ]  )

    b.convex('b', [  [0,30], [-300,-20], [100,0]  ] )

    b.convex('p',  [ [0,30],[-30,-20],[10,0]  ]  )



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


    _.times(100, function(){
        w.verts(R(600), R(300,200), [['p',[-20,-20],[0,-30],[10,10]],
            ['n',[0,0],[30,-50],[50,-10]]])
    })

}



PITFALL=function(){W([1200,600,3400,600],{}).P()

    //b2d.levelScrollX()
    p.track()

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



    t = w.vertsKin(400, 570, turtle).fixRot()
    t2 = w.vertsKin(700, 570, turtle2).fixRot()

    I(1, function(){
        t2.lV(5,0)
        setTimeout(function(){t2.lV(-5,0)})
    }, 2000)


}



CENTERSHAPE=function(){St()

    h.rec(100,100,100,100,'y')
    h.rec(200,200,100,100,'b')

    h.c('o').polyStar(300,100,
        50,5,0.6,-90)

    h.c('w','z')
        .roundRectComplex(400,300,
        300,300, 20,20,30,40 )

    h.cir(500,200,40,'b','x',10)
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

    w.D(400, 280,turtle )



     w.D(400,300).rec(
     {w:300,h:300, x:100,y:100, bf:'me'},
     {w:200,h:200, lg:1, l:15},
     {w:10,h:40,c:'r'},
     {w:40, h:40, x: 100, c:'y'  },
     {w:40, h:40, x: 200, c:'b', C:'o', l:10  },
     {w:200, h:20,  y: 200, s:1 , lf:{c1:'g',c2:'y'} })



    w.D(300,200).cir(
        {r:20,y:-20},
        {r:20},
        {r:20, x:20, lf:{ c1:'b' },y:30},
        {x:50, s:1, rf:1},
        {x:100,r:50,c:'r',C:'x',l:10, s:1},
        {y:-100, r:50, bf:'me'})



    b= w.D(800, 300)


    b.pol({
        c:'x',  C:'o',  l:5,

        bm:1,

        v:[  [-100,0],[0,-100],[100,50]   ]

    })



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

        h.graphics.rf(["red", 'blue', "yellow"],[0,.5,1],x1,y1,r1,x2,y2,r2).dr(0,0,400,400).ef()


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

        h.rf( 'b', "o",  x1,
            y1,
            r1,
            x2,
            y2,
            r2     )


            .dc(0, 0,100)
            .ef()
        // x--

        // r1++
        // r2++
    }

    setInterval(change, 1000)

    change()

    n = nip()
    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
USINGLAYERSINEASEL=function(){Q(['me','guy'],function(q){s=cjs.S()

    me  = q.bm('me').a2(s).sXY(3)
    guy = q.bm('guy').a2(s).sXY(.5).drag()
    $.button('s.sXY(2)', function () {s.sXY(2)}).A()
    cjs.tick(function(){
        me.X( guy.x * 2.2 - 140)
        me.Y( guy.y * .2 )})

})}





//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
