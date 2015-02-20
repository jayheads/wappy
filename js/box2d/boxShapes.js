p = b2.Shapes.b2Shape.prototype
p.testPoint = p.tP = function(x,y){return this.TestPoint(x,y)}
//////////////////////////////////////////////////////////////////////////////////////////
p = b2.PolygonShape.prototype
p.setAsBox = p.sAB = function( a, b, P, A, A2 ){
//handles both box and set as box!
//x,y -> box
//x,y,P,A -> oriented box
//x,y,p1,p2,A ->oriented box

    var g=G(arguments),   a=g[0],  b=g[1]||a,   P=g[2],    A=g[3]

    if(A){ A = Math.toRadians(A) }

    if( U(P) ){ this.SetAsBox(a/30/2,b/30/2) }

    else if( N(P) ){ this.SetAsOrientedBox( a/30, b/30, b2.V( P/30, A/30 ), A2 ) }

    else { this.SetAsOrientedBox( a/30, b/30, P, A ) }

    return this}
p.setAsArray = p.sAA=  function(a,b){

    this.SetAsArray(a,b)

    return this}  //if(P){p.z(x,y,P,A);return p}
//////////////////////////////////////////////////////////////////////////////////////////
b2.polyShape = b2.poly = b2.polygonShape = b2.polyShape = b2.pSh   =function( x, y, P, A, A2 ){
    var p =   new b2.PolygonShape
    if( N(x) ){ p.sAB( x, y, P, A, A2 ) }
    return p}
b2.circleShape =   b2.cSh   =function(radius){return  new b2.CircleShape(radius/30)}
b2.AShape =   b2.aSh=function(){return b2.polygonShape().sAA(arguments)}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//must be LAST!!!!!
b2.triangleFixt =   b2.AFixture([-100,0], [0,-100 ], [100,0] )
b2.triangleFixt2 =  b2.AFixture([-200,0],[0,-200],[200,0])
b2.triangleFixt3 =  b2.AFixture( [-100,0],  [0,-50], [400,0] )
//
b2.testTriangles= function( x, y ){
    z()
    b2.makeWorld()
    x = N(x)? x : 400; y = N(y)? y : 400

    _.times(2, function(){
        world.A(b2.dynamicDef(x,y), b2.triangleFixt)
        world.A(b2.dynamicDef(x,y), b2.triangleFixt2)
        world.A(b2.dynamicDef(x,y), b2.triangleFixt3)
    })

}
b2.somePolyFixt=function(){return b2.AFixture([-100,0],[0,-100],[100,0],[60,50])}
b2.testSomePolyFixt = function(x,y){b2.makeWorld()
    x=N(x)?x:400
    y=N(y)?y:400

    world.A(b2.dynamicDef(x,y),b2.somePolyFixt())}
b2.randomCircleFixture = function(){return b2.circleShape(  Math.random()*50+ 8 )}
b2.randomPolygonFixture = function(){


    var fixt, width, height


    width = Math.random() * 100 + 14

    height =Math.random() * 100 + 14 //12000/width

    fixt= b2.polygonShape(
            width, height

    )



return fixt}
b2.randomFixture = fix=function(){

    return fD.setShape(

        _.random(1)?  b2.randomPolygonFixture()


            : b2.randomCircleFixture()
    )

}


 b2.ba= ba =function(x, y, radius){
    x = x || 100
    y = N(y) ? y : x
    radius = radius || 20
    return world.A(
        b2.dynamicDef( x, y ),
        b2.circDef( radius ) )}


b2.ball=function(x,y,radius){


    return b2.ba(x,y,radius).K('ball')
}

b2.bumper=function(x,y,radius){


    return b2.baa(x,y,radius).K('bumper')
}


b2.brick=function(x,y,w,h){

    return b2.bii(x,y,radius).K('brick')
}

b2.box=function(x,y,w,h){

    return b2.bi(x,y,radius).K('box')
}




b2.baa = baa  =function(x,y,r){//=ba2
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.addBody( b2.staticDef(x,y), b2.circDef(r) )

}
b2.bi = bi   =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return w.addBody(  b2.dynamicDef(x,y),     b2.polyDef(W, H).r(0))

}


b2.bii = bii  =function(x,y,W,H){

    x=N(x)?x:60;
    y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return w.A( b2.staticDef(x,y),  b2.polyDef(W, H).r(0) )

}




b2.compoundShape = function(){return world.A(b2.dynamicDef(300,200), [
        b2.polyDef(50,10),
        b2.polyDef(60,30,0,0,40),
        b2.polyDef(120,30,0,0,29),
        b2.polyDef(60,10,0,50,60),
        b2.polyDef(84,10,15,80,-120)

    ])}
b2.compoundShape2 =  function(){

   var body = w.A(

       b2.dynamicDef(300,200),  [

            b2.polyDef(50,10),

            b2.polyDef(20,20),

            b2.polyDef(20,10, 0,0, 10),

            b2.polyDef(40,10, 50,0,  45),

            b2.polyDef(84,10, 15,80, -120),

            b2.polyDef(60,10, 0,50, 60 )


        ]      )

return body}
b2.compoundStar=function(){return world.A(

   b2.dynamicDef(300,200),
    [
        b2.polyDef(10,10),
        b2.circDef(20),
        b2.polyDef(4,80,300, 300,   135),
        b2.polyDef(4,80,0,0,45),
        b2.polyDef(4,80,100,0, 90),
        b2.polyDef(4,80,0,0,180)]

)}
b2.platform =  function(){
    w.bii(300,300,200,20)
    w.bii(300,300,20,80)}
b2.fricky=function(){return w.A(b2.dynamicDef(300,200),
    [
        b2.polyDef(10,10),
        b2.polyDef(20,40,0,0, 90).f(0).r(0),

        b2.polyDef(20,40,0,0,180).f(0).r(0)])}
b2.bouncy=function(){return w.A(b2.dynamicDef(300,200),[b2.polyDef(10,10),
        b2.polyDef(20,40,0,0, 90).r(.9).f(1),
        b2.polyDef(20,40,0,0,180).r(.9).f(1)])}
b2.massy=function(){return w.A(b2.dynamicDef(300,200),
    [b2.polyDef(10,10),
        b2.polyDef(20,40,0,0, 90).d(2).f(1),
        b2.polyDef(20,40,0,0,180).d(2).f(1)])}
b2.fluffy=function(){
    return world.A(
        b2.dynamicDef(300,200),[
            b2.polyDef(10,10),
            b2.polyDef(20,40,0,0,90).d(.1).f(1),
            b2.polyDef(20,40,0,0,180).d(.1).f(1)]


    )}
cup=function(x,y){x=N(x)?x:100;y=N(y)?y:x
    return w.A(b2.dynamicDef(x,y),[
        b2.polyDef(10,10).d(5),
        b2.polyDef(50,20,0,40,0),
        b2.polyDef(100,20,-80,-40,260),
        b2.polyDef(100,20,80,-40,-80)])}
cup2=function(x,y){
    x=N(x)?x:100//300
    y=N(y)?y:x//800

    return w.A(
        b2.dynamicDef(x,y), [
            b2.polyDef(10,10).d(5),
            b2.polyDef(50,20,0,40,0),
            b2.polyDef(100,20,-80,-40,260),
            b2.polyDef(100,20,80,-40,-80),
            b2.circDef(100)
        ])}
cup3=function(x,y){

    x=N(x)?x:100;y=N(y)?y:x
    return w.A(b2.dynamicDef(x,y),
        [b2.polyDef(10,10).d(5),
            b2.polyDef(50,20,0,40,0),
            b2.polyDef(100,20,-80,-40,260),
            b2.polyDef(100,20,80,-40,-80),
            b2.circDef(34,-80,-130),
            b2.circDef(34,80,-130)])}
makeWalls2=function(){
    bii(10, 300, 20, 460) //left
    bii(990,300, 20, 460)//right
    bii(250, 0, 400, 20)//top
    bii(730, 0, 400, 20)//top
    bii(250, 590, 400, 20)//b
    bii(730, 590, 400, 20)//b
} //bas in the canvas size?
makeWallsTiny=function(){

    bii(10, 300, 20, 600) //left
    bii(990, 300, 20, 600)//right
    bii(300, 0, 1200, 20)//top
    bii(300, 590, 1200, 20)}
makeWallsFull=function(){
    bii(10, 300, 20, 1200) //left
    bii(990, 300, 20, 1200)//right
    bii(300, 0, 3000, 20)//top
    bii(300, 590, 3000, 20)}
makeWallsLong=function(){


    bii(10, 300, 20, 1200) //left
    bii(1600, 300, 20, 1200)//right
    bii(300, 0, 3000, 20)//top
    bii(300, 590, 3000, 20)//bottom
}
//custom walls
BILLIARDS=function(){

    b2.mW({

        g:0,
        walls: function(){}
    })


    bii(10,300,40,920) //left

    bii(1100, 280, 40, 400)//right

    bii(250, 0, 800, 40)//top
   bii(730, 0, 800, 40)//top
   bii(250, 590, 800, 40)//b
   bii(730, 590, 800, 40)//b

    w.addMe()

    w.addTim(15)

}
MAKEWORLD=function(){return makeWorld()}
BOX2D=function(a){b2.mW()
    b2.compoundShape()
    b2.platform()
    w.addTenBalls()
    w.addMe();w.addMe();w.addMe()}
b2.testBounceFrict=function(){
    b2.mW()
    b2.bouncy()
    b2.bouncy()
    b2.bouncy()
    b2.fricky()
    b2.fricky()
    b2.fricky()
}
CUPS=function(){
    b2.makeWorld()

    cup(280,50)
    cup2(400,50)
    cup3(700,50)

    b2.fluffy()

    w.ba()
    w.ba()
    w.ba()
    w.bii(150,220,50)
}
//walls/setup
//show static bricks
STAIRS=function(){
    b2.makeWorld()
    w.bii(500,500,600,100)
    w.bii(500,400,500,100)
    w.bii(500,300,500,100)
    w.bii(500,350,450,100)
    w.bii(320,400,50,600)
    w.ba()


}

