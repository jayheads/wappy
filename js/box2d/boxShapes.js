
//super shape wrapper
SuperShape=sSh   =function(s){

    s.tP    =s.tPt=s.tp=function(a,b){return s.TestPoint(a,b)}
    return s}

//poly shape maker
//handles both box and set as box!
//x,y -> box
//x,y,P,A -> oriented box
//x,y,p1,p2,A ->oriented box
PolyShape = pSh   =function(x,y,P,A,A2){

    var p=sSh(new b2PolygonShape)

    p.sAB=function(a,b,P,A,A2){//p.z=p.sab=

        var g=G(arguments),
            a=g[0], b=g[1]||a,
            P=g[2], A=g[3]

        if(A){A=tRad(A)}

        if(U(P)){p.SetAsBox(a/30/2,b/30/2)}

        else if(N(P)){p.SetAsOrientedBox(a/30, b/30, bV(P/30,A/30), A2)}

        else {p.SetAsOrientedBox(a/30,b/30, P, A)}

        return p}

    p.sAA=p.saa=function(a,b){

        p.SetAsArray(a,b)
        return p}  //if(P){p.z(x,y,P,A);return p}

    if(N(x)){p.sAB(x,y,P,A,A2)}


    return p}

//circleShape maker
// radius -> circle shape
CircleShape=cSh   =function(a){

    var s=sSh(new b2CircleShape(a/30))

    return s

}

AShape=aSh=function(){   return pSh().sAA(arguments) }

Triangle=tri=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(
        dBD(x,y),
        aFx([-100,0],[0,-100],[100,0])

    )

}

Triangle2=tri2=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(
        dBD(x,y),
        aFx([-200,0],[0,-200],[200,0])

    )

}

Triangle3=tri3=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(
        dBD(x,y),
        aFx([-100,0],[0,-50],[400,0])

    )

}

Polygon=thi=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(dBD(x,y),
        aFx([-100,0],[0,-100],[100,0],[60,50]))


}

//single fixture(shape) bodies!!!
tenBalls=function(){_.times(10, function(i){ ba(100 + (i*80), 200) })}
hundBalls=function(){_.times(100, function(i){ ba( 100  +(i*8),  50, 10) })}
addShapes=addTenShapes=mBodies=function(n){_.times(n||10,function(){

    world.a( DynamicBodyDef().xy(), fix() )

})}
fix=function(){

    return fD.s(

        yn()?  PolyShape(

                r1() * 30,
                r1() * 30

        )

            : CircleShape( r1() * 30 )
    )

}

ba   =function(x,y,r){//fCS=

    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( DynamicBodyDef(x,y),  cFx(r)  )

}//dynamic circle
baa  =function(x,y,r){//=ba2
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a( StaticBodyDef(x,y), cFx(r) )

}//static circle
bi   =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return w.a(

        DynamicBodyDef(x,y),    PolyFixture(W, H).r(0))

}//dynamic rect
bii  =function(x,y,W,H){//brk2=brick=

    x=N(x)?x:60;
    y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return w.a(StaticBodyDef(x,y),   PolyFixture(W, H).r(0) )

}//static rect
str1=function(){

    return world.a(DynamicBodyDef(300,200), [

        PolyFixture(50,10),
        PolyFixture(60,30,0,0,40),
        PolyFixture(120,30,0,0,29),
        PolyFixture(60,10,0,50,60),
        PolyFixture(84,10,15,80,-120)

    ])}
str2=function(){

    return world.a(

        DynamicBodyDef(300,200),  [

            PolyFixture(50,10),

            PolyFixture(20,20),

            PolyFixture(20,10, 0,0, 10),

            PolyFixture(40,10, 50,0,  45),

            PolyFixture(84,10, 15,80, -120),

            PolyFixture(60,10, 0,50, 60 )


        ]      )}
strStar=function(){return world.a(

    DynamicBodyDef(300,200),[
        PolyFixture(10,10),cFx(20),
        PolyFixture(4,80,0,0,135),
        PolyFixture(4,80,0,0,45),
        PolyFixture(4,80,100,0, 90),
        PolyFixture(4,80,0,0,180)
    ])}
platform=function(){
    bii(300,300,200,20)
    bii(300,300,20,80)}
fricky=function(){return w.a(DynamicBodyDef(300,200),
    [PolyFixture(10,10),
        PolyFixture(20,40,0,0, 90).f(0).r(0),
        PolyFixture(20,40,0,0,180).f(0).r(0)])}
bouncy=function(){return w.a(DynamicBodyDef(300,200),[PolyFixture(10,10),
        PolyFixture(20,40,0,0, 90).r(.9).f(1),
        PolyFixture(20,40,0,0,180).r(.9).f(1)])}
massy=function(){return w.a(DynamicBodyDef(300,200),
    [PolyFixture(10,10),
        PolyFixture(20,40,0,0, 90).d(2).f(1),
        PolyFixture(20,40,0,0,180).d(2).f(1)])}
fluffy=function(){return w.a(DynamicBodyDef(300,200),[
    PolyFixture(10,10),
    PolyFixture(20,40,0,0,90).d(.1).f(1),
    PolyFixture(20,40,0,0,180).d(.1).f(1)])}
cup=function(x,y){x=N(x)?x:100;y=N(y)?y:x
    return w.a(DynamicBodyDef(x,y),[
        PolyFixture(10,10).d(5),
        PolyFixture(50,20,0,40,0),
        PolyFixture(100,20,-80,-40,260),
        PolyFixture(100,20,80,-40,-80)])}
cup2=function(x,y){
    x=N(x)?x:100//300
    y=N(y)?y:x//800

    return w.a(
        DynamicBodyDef(x,y), [
            PolyFixture(10,10).d(5),
            PolyFixture(50,20,0,40,0),
            PolyFixture(100,20,-80,-40,260),
            PolyFixture(100,20,80,-40,-80),
            cFx(100)])}
cup3=function(x,y){
    x=N(x)?x:100;y=N(y)?y:x
    return w.a(DynamicBodyDef(x,y),
        [PolyFixture(10,10).d(5),
            PolyFixture(50,20,0,40,0),
            PolyFixture(100,20,-80,-40,260),
            PolyFixture(100,20,80,-40,-80),
            CircleFixture(34,-80,-130),
            CircleFixture(34,80,-130)])}



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

TRIANGLE=function(){makeWorld()  // f.s(h= pSh().sAA(   [bV(-1,0), bV(0,-1), bV(1,0)]  ))



    tri()


    tri2()

    thi()


}
BILLIARDS=function(){

    z()

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
STAIRS=function(){mW()

    bii(500,500,600,100)

    bii(500,400,500,100)
    bii(500,300,500,100)

    bii(500,350,450,100)
    bii(320,400,50,600)
    ba()


}

