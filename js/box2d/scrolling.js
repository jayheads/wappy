w = b2d.World.prototype

w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

    cjs.tick(function(){
        K=function(n){return n*w.sc()}
        cW = w.cW()
        wW = w.w
        cH = w.cH()
        wH = w.h
        MULT = .9//1.1 //1//4 //zoom
        sX = cW/2 + cjs.adj( b.X()-cW, 0) * MULT //sX=K(b.X()-x) + (K(cW)-cW)/2
        w.s.x = -cjs.cap(sX, 0, K(wW)-cW )
        sY = cH/2 + cjs.adj( b.Y()-cH,  0)//  * MULT //sY=K(b.Y()-y) + (K(cH)-cH)/2
        w.s.y = -cjs.cap(sY,0, K(wH)-cH )
    })

    return w}



ULTBUF=function(){


    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})


    w.wz = function(){var w=this

        //we never want a positive wz!! means right stage corner is visible

        return (V(   wX= w.s.x, wY= w.s.y ))


    }
    w.rOK = function(){var w=this,sc =w.sc(); return  w.s.x + w.W()*w.sc() - 1200}
    w.bOK = function(){var w=this,sc =w.sc(); return  w.s.y + w.H()*w.sc() - 600}

    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)


    w.dot(1200,600)
    w.hud.dot(1200,600)


    y.dX=function(){var y=this
      return  cjs.adj( y.X()-1200, 200)
    }
    y.cX=function(){var y=this, w= y.wor()

         return y.X() - w.pX()
    }

    y.XY(1400,600).rot(90).lD(0).lV(1)

   // cjs.tick(function(){  var x =    y.cX().toFixed(0)-600; if(x>0){  $l(x)  }  })
}



w.warpScroll =  function(b, x, y, fX,fY){var w=this

    y = w.H() - y

    bX =  b.X()
    bY =  b.Y()

    fX=0
    fY=0

    cjs.tick(function(){

        dX = bX- b.X()

        pX = cjs.adj(dX, fX)

        //$l(pX)

        //  $l(  cjs.adj( b.X()-x,   fX  ) )

        //where is y rel to the point?

        rX = w.pX()-(b.X()-x)
        cX = cjs.adj( -rX, fX)

        //$l(cX)

        w.pX(w.pX()-pX) //w.pX() + cX  // cjs.adj(b.X()-x,   fX  )

        w.pY(    cjs.adj(b.Y()-y,   fY  )  )


    })

    return this}


WARPSCROLL=function(){

    W([1000, 500,  2000, 1000], {t:0})


    y = w.ship(1000, 400)

     w.warpScroll(y, 500, 300  )



    w.B(700, 300, 'r', [  [4]   ])
    w.B(800, 300, 'r', [  [4]   ])
    w.B(900, 300, 'r', [  [4]   ])

    w.B(1000, 300, 'r', [  [4]   ])

    w.B(1100, 300, 'r', [  [4]   ])
    w.B(1200, 300, 'r', [  [4]   ])
    w.B(1300, 300, 'r', [  [4]   ])

    w.s.HUD.dot('w', 500, 300)

}

SMARTSCROLL=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit


    w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){

            K=function(n){return n*w.sc()}
            cW = w.cW()
            wW = w.w
            cH = w.cH()
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom

            sX = cW/2 +   (b.X()-cW)  * MULT       //sX=K(b.X()-x) + (K(cW)-cW)/2

            w.s.x = -cjs.cap(sX, 0, K(wW)-cW )


            sY = cH/2 +  ( b.Y()-cH )   * MULT      //sY=K(b.Y()-y) + (K(cH)-cH)/2

            w.s.y = -cjs.cap(sY,0, K(wH)-cH )

        })

        return w}





        W([1200, // x
            600,
            4800, // x
            1200
        ],{g:0, t:0})


        w.wz = function(){var w=this

            //we never want a positive wz!! means right stage corner is visible

            return (V(   wX= w.s.x, wY= w.s.y ))


        }
        w.rOK = function(){var w=this,sc =w.sc(); return  w.s.x + w.W()*w.sc() - 1200}
        w.bOK = function(){var w=this,sc =w.sc(); return  w.s.y + w.H()*w.sc() - 600}

        w.S(1200,300,'r',400,100)
        w.S(1200,900,'r',400,100)


        w.S(1200,600,'w',[[400,500,'-']])



        y = w.ship(200,200).rot(120).damp(1,10)

        w.follow(y, 600, 300)

        w.dot(600,300)
        w.hud.dot(600,300)


        w.dot(1200,600)
        w.hud.dot(1200,600)




        y.XY(1400,600).rot(90).lD(0).lV(1)


}

MARK=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit


    w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){

            K=function(n){return n*w.sc()}
            cW = w.cW()
            wW = w.w
            cH = w.cH()
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom

            sX = cW/2 +   (b.X()-cW)  * MULT       //sX=K(b.X()-x) + (K(cW)-cW)/2

            w.s.x = -cjs.cap(sX, 0, K(wW)-cW )


            sY = cH/2 +  ( b.Y()-cH )   * MULT      //sY=K(b.Y()-y) + (K(cH)-cH)/2

            w.s.y = -cjs.cap(sY,0, K(wH)-cH )

        })

        return w}





    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0}).mark()


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)

    w.dot(1200,600)
    w.hud.dot(1200,600)

    y.XY(100,600).rot(90).lD(0).lV(4)


}

w.mark=function(){var w=this
    w.C('z')
    _.times(50, function(i){w.S(i*200, 0, 'w', 1,10000).sensor(true)})
    _.times(50, function(i){w.S(0, i*200,   'w', 10000,1).sensor(true)})
    return w}

STATS=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit


    w.follow= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){

            K=function(n){return n*w.sc()}
            cW = w.cW()
            wW = w.w
            cH = w.cH()
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom

            sX = cW/2 +   (b.X()-cW)  * MULT       //sX=K(b.X()-x) + (K(cW)-cW)/2

            w.s.x = -cjs.cap(sX, 0, K(wW)-cW )


            sY = cH/2 +  ( b.Y()-cH )   * MULT      //sY=K(b.Y()-y) + (K(cH)-cH)/2

            w.s.y = -cjs.cap(sY,0, K(wH)-cH )

        })

        return w}





    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0}).mark()


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.follow(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)

    w.dot(1200,600)
    w.hud.dot(1200,600)

    y.XY(100,600).rot(90).lD(0).lV(4)

    d = $.div('t', 400,600).abs(1200,0).A()
    d.A(  $.h1('world stats')  )


    d1 = $.div('x', 400,600).abs(1600,0).A()
    d1.A(  $.h1('body stats')  )
}
