
makeGround=function(){$l('makeGround')

    bD=bDf().t(sB)
    fD=fDf().d(1).f(.5).r(.8).sh(  pSh()  )



    g1=w.a(  bD.ps(10,  400/30 +1.8), fD.sAB(20,2)  )


    g2=w.a(  bD.ps(10, -1.8), fD)


    g3=w.a(  bD.ps(-1.8, 13), fD.sAB(2,14) )


    g4= w.a(  bD.ps(21.8, 13), fD)

}

makeGround2=function(){

    bD=bDf().t(sB).ps(10, 800/30 + 1.8)

    fD=fDf().d(1).f(.5).r(.8).sP().sAB(20,2)


    w.a( bD, fD )

    w.a( bD.ps(1,-1.8), fD )

    w.a( bD.ps(-1.8,13), fD.sAB(2, 24) )

    w.a( bD.ps(21.8,13), fD )

}

makePlatform=function(){
    brick(300,300,200,20)
    brick(300,300,20,80)
}
makePlatform1=function(){

    w.a(

        bDf(sB).p(300,300,'-'),

        pFx(3000,300 )
    )

    w.a(
        bDf(sB).p(300,300,'-'),
        fP(300,1200 ))
}



//this class is for making rectangles
//pass w=20,h=w,x=0,y=x,degrees=0
fPS=function(a,b,c,d,e){


    if(U(c)){

        return fP(a||20,N(b)?b:a)
    }

    e=e||0

    d=N(d)?d:c

   return fP().s(
       pSh().sAB(a,b,bV(c,d,'-'),e))

    }













strStar=function(){




    return w.a(

        dBf(300,200),

        [
            fPS(10,10),

            fC(20)//.set(300,300)
            ,

            fPS(4,80,0,0,135),
            fPS(4,80,0,0,45),
            fPS(4,80,100,0, 90),
            fPS(4,80,0,0,180),





        ]
    )

}
fricky=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).f(0).r(0),
            b=fPS(20,40,0,0,180).f(0).r(0),])

}
bouncy=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).r(.9).f(1),
            b=fPS(20,40,0,0,180).r(.9).f(1),])

}
massy=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).d(2).f(1),
            b=fPS(20,40,0,0,180).d(2).f(1),])

}
fluffy=function(){

    return w.a(

        dBf(300,200),

        [
            fPS(10,10),
            a=fPS(20,40,0,0, 90).d(.1).f(1),
            b=fPS(20,40,0,0,180).d(.1).f(1),])

}
cup=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    return w.a(

        dBf(x||300,y||800),[

            fPS(10,10).d(5),
            fPS(50,20,0,40,0),
            fPS(100,20,-80,-40,260) ,
            fPS(100,20,80,-40,-80)]

    )}

makeStruct=function(){


    return w.a(

        bDf().p(300,200,'-').t(dB),

        [


            fP(50,10),

            fP(600, 600),
            fPS(60, 30,   0,0, 40),
            fPS(120, 30,  0,0,  29),
            fPS(60,10, 0,50 ,60),
            fPS(84,10, 15,80 , -120 )


        ]
    )

}
makeStructure=function(){

    return w.a(

        bDf().p(300,200,'-').t(dB),


        [

            fP( 50,10 ),


            fP().s(    pSh().sAB(20,20)  ),


            fP().s(    pSh().sAB(20,10, bV(0,0,'-'), 10 )),

            fP().s(    pSh().sAB(40,10, bV(50,0,'-'),45 ) ),

            fP().s(    pSh().sAB(84,10, bV(15,80,'-'), -120 )),

            fP().s(

                pSh().sAB(60,10, bV(0,50,'-'),60 )


            )

        ]
    )

}




cup2=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    return w.a(

        dBf(x||300,y||800),

        [

            fPS(10,10).d(5),
            fPS(50,20,0,40,0),
            fPS(100,20,-80,-40,260) ,
            fPS(100,20,80,-40,-80),

            cFx(100)

        ]

    )}




cup3=function(x,y){
    x=N(x)?x:100
    y=N(y)?y:x

    return w.a(

        dBf(x||300,y||800),

        [

            fPS(10,10).d(5),
            fPS(50,20,0,40,0),
            fPS(100,20,-80,-40,260) ,
            fPS(100,20,80,-40,-80),

            cFx(34,-80,-130),

            cFx(34,80,-130)

        ]

    )}
