//single fixture(shape) bodies!!!

//dynamic circle
ba     =function(x,y,r){//fCS=

    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( dBD(x,y),  cFx(r)  )

}

//static circle
baa    =function(x,y,r){//=ba2
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( sBD(x,y), cFx(r) )

}

//dynamic rect
bi     =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return w.a(

        dBD(x,y),    pFx(W/2, H/2))

}

//static rect
bii    =function(x,y,W,H){//brk2=brick=

    x=N(x)?x:60;
    y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return w.a(sBD(x,y),   pFx(W/2, H/2) )

}

tenBalls=function(){_t(10, function(i){ ba(100 + (i*80), 200) })}
hundBalls=function(){_t(100, function(i){ ba( 100  +(i*8),  50, 10) })}

str1=function(){return w.a(dBD(300,200),
    [pFx(50,10),
        pFx(60,30,0,0,40),
        pFx(120,30,0,0,29),
        pFx(60,10,0,50,60),
        pFx(84,10,15,80,-120)])}
str2=function(){

    return w.a(dBD(300,200),  [

        pFx(50,10),

        pFx(20,20),

        pFx(20,10, 0,0, 10),

        pFx(40,10, 50,0,  45),

        pFx(84,10, 15,80, -120),

        pFx(60,10, 0,50, 60 )]      )}
strStar=function(){return w.a(dBD(300,200),[
    pFx(10,10),cFx(20),
    pFx(4,80,0,0,135),
    pFx(4,80,0,0,45),
    pFx(4,80,100,0, 90),
    pFx(4,80,0,0,180)])}
platform=function(){
    bii(300,300,200,20)
    bii(300,300,20,80)}
fricky=function(){return w.a(dBD(300,200),
        [pFx(10,10),
             pFx(20,40,0,0, 90).f(0).r(0),
             pFx(20,40,0,0,180).f(0).r(0)])}
bouncy=function(){return w.a(dBD(300,200),
        [pFx(10,10),
             pFx(20,40,0,0, 90).r(.9).f(1),
            pFx(20,40,0,0,180).r(.9).f(1)])}
massy=function(){return w.a(dBD(300,200),
        [pFx(10,10),
            pFx(20,40,0,0, 90).d(2).f(1),
            pFx(20,40,0,0,180).d(2).f(1)])}
fluffy=function(){return w.a(dBD(300,200),[
            pFx(10,10),
            pFx(20,40,0,0,90).d(.1).f(1),
            pFx(20,40,0,0,180).d(.1).f(1)])}
cup=function(x,y){x=N(x)?x:100;y=N(y)?y:x
    return w.a(dBD(x,y),[
            pFx(10,10).d(5),
            pFx(50,20,0,40,0),
            pFx(100,20,-80,-40,260),
            pFx(100,20,80,-40,-80)])}
cup2=function(x,y){
    x=N(x)?x:100//300
    y=N(y)?y:x//800

    return w.a(
        dBD(x,y), [
            pFx(10,10).d(5),
            pFx(50,20,0,40,0),
            pFx(100,20,-80,-40,260),
            pFx(100,20,80,-40,-80),
            cFx(100)])}
cup3=function(x,y){x=N(x)?x:100;y=N(y)?y:x
    return w.a(dBD(x,y),
        [pFx(10,10).d(5),
            pFx(50,20,0,40,0),
            pFx(100,20,-80,-40,260),
            pFx(100,20,80,-40,-80),
            cFx(34,-80,-130),
            cFx(34,80,-130)])}




//makes a dynamic body at given x,y
//dBf=function(x,y){return bDf(dB).p(N(x)?x:300,N(y)?y:300)}
//makes a static body at a given x,y
//sBf=function(x,y){return bDf(sB).p(  N(x)?x:300, N(y)?y:300 )}

