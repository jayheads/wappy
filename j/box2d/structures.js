//single fixture(shape) bodies!!!

ba   =function(x,y,r){//fCS=

    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( dBD(x,y),  cFx(r)  )

}//dynamic circle
baa  =function(x,y,r){//=ba2
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( sBD(x,y), cFx(r) )

}//static circle
bi   =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return w.a(

        dBD(x,y),    pFx(W, H).r(0))

}//dynamic rect

bii  =function(x,y,W,H){//brk2=brick=

    x=N(x)?x:60;
    y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return w.a(sBD(x,y),   pFx(W, H).r(0) )

}//static rect

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

makeWalls2=function(){
    bii(10, 300, 20, 460) //left
    bii(990,300, 20, 460)//right
    bii(250, 0, 400, 20)//top
    bii(730, 0, 400, 20)//top
    bii(250, 590, 400, 20)//b
    bii(730, 590, 400, 20)//b

}
makeWallsTiny=function(){

    bii(10, 300, 20, 600) //left
    bii(990, 300, 20, 600)//right
    bii(300, 0, 1200, 20)//top
    bii(300, 590, 1200, 20)//bottom
}
makeWallsFull=function(){


    bii(10, 300, 20, 1200) //left
    bii(990, 300, 20, 1200)//right
    bii(300, 0, 3000, 20)//top
    bii(300, 590, 3000, 20)//bottom
}

makeWallsLong=function(){


    bii(10, 300, 20, 1200) //left
    bii(1600, 300, 20, 1200)//right
    bii(300, 0, 3000, 20)//top
    bii(300, 590, 3000, 20)//bottom
}


BILLIARDS=function(){z()

    mJoint=0;mDown=0;
    w=bW(bV(0,0))
    makeStage(1000,600)
    cvPx=gEP(did())

    startLoop()
    checkMouseDown()
    setupDebugDraw()

    bii(10,300,40,920) //left
    bii(990,300, 40, 920)//right
    bii(250, 0, 800, 40)//top
    bii(730, 0, 800, 40)//top
    bii(250, 590, 800, 40)//b
    bii(730, 590, 800, 40)//b

    makeMe()
    makeTim(15)

}
MAKEWORLD=function(){return makeWorld()}
BOX2D=function(a){

    makeWorld()


    str1()
    platform()

    addTenShapes()
    makeMe()

}
RORC=function(){mW()
    bouncy()
    bouncy()
    bouncy()
    fricky()
    fricky()
    fricky()}
CUPS=function(){
    makeWorld()
    cup(280,50)
    cup2(400,50)
    cup3(700,50)
    fluffy()
    ba()
    ba()
    ba()

    bii(150,220,50)
}

tenBalls=function(){_t(10, function(i){ ba(100 + (i*80), 200) })}
hundBalls=function(){_t(100, function(i){ ba( 100  +(i*8),  50, 10) })}
addShapes=addTenShapes=mBodies=function(n){ _t(n||10,function(){ w.a(dBD().xy(), fix()) })}
fix=function(){

    return fD.s(

        yn()?  pSh(

                r1()*30,
                r1()*30

        )

            : cSh( r1()*30 )
    )

}


STAIRS=function(){mW()

    bii(500,500,600,100)

    bii(500,400,500,100)
    bii(500,300,500,100)

    bii(500,350,450,100)
    bii(320,400,50,600)
    ba()


}

