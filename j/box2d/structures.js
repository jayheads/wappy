

//this class is for making rectangles
//pass w=20,h=w,x=0,y=x,degrees=0
fPS=function(a,b,c,d,e){


    if(U(c)){
        a=a||20;
        b=N(b)?b:a
        return fP(a,b)}

    e=e||0
    d=N(c)?c:d

   return fP().s(
       pSh().sAB(a,b,bV(c,d,'-'),e))

    }



dBf=function(x,y){return bDf(dB).p(300,200)}
sBf=function(x,y){return bDf(sB).p(300,200)}













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

strFrict=function(){

    return w.a(

        dBf(300,200),

        [fPS(10,10),
            a=fPS(20,40,0,0, 90).f(0),
            b=fPS(20,40,0,0,180).f(1),])

}



strBouncy=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).r(0),
            b=fPS(20,40,0,0,180).r(1),])

}



fricky=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).f(0),
            b=fPS(20,40,0,0,180).f(0),])

}


massy=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).m(0),
            b=fPS(20,40,0,0,180).m(5),])

}



bouncy=function(){

    return w.a(
        dBf(300,200),
        [fPS(10,10),
            a=fPS(20,40,0,0, 90).r(1),
            b=fPS(20,40,0,0,180).r(1),])

}












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




