
//makes a fixture set to a box that you specify,
// with default d,f,r
pFx1   =function(w,h,P,A){//fP=

    var g=G(arguments),

        w=g[0]||r1(),

        h=g[1]||w

    return fDf().s(

        pSh(w,h,P,A)

    )

        .d(1).f(.5).r(.8)

}

//makes a dynamic body at given x,y
//dBf=function(x,y){return bDf(dB).p(N(x)?x:300,N(y)?y:300)}
//makes a static body at a given x,y
//sBf=function(x,y){return bDf(sB).p(  N(x)?x:300, N(y)?y:300 )}
