p = b2d.Shapes.b2Shape.prototype
p.testPoint = p.tP = function(x,y){return this.TestPoint(x,y)}
//////////////////////////////////////////////////////////////////////////////////////////
p = b2d.PolygonShape.prototype
p.setAsBox = p.sAB = function(wd,ht, xy, ang, ang2 ){

//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box

    var g=G(arguments),

        wd = (g[0]||100)/60,

        ht= (g[1]||wd)/60,

        xy=g[2],
        ang=g[3], ang2=g[4]


    if(U(xy)){this.SetAsBox(wd,ht)}
    else if(N(xy)){this.SetAsOrientedBox(wd, ht, V(xy/30,ang/30), Math.toRadians(ang2||0) )}
    else { this.SetAsOrientedBox(wd, ht, xy, Math.toRadians(ang||0) ) }

    return this}
p.setAsArray = p.sAA=  function(a,b){

    this.SetAsArray(a,b)

    return this}  //if(P){p.z(x,y,P,A);return p}
//////////////////////////////////////////////////////////////////////////////////////////


b2d.polyH =b2d.polyShape =  b2d.pSh   =function( wd, ht, xy, ang, ang2 ){
    var poly=new b2d.PolygonShape()
      poly.setAsBox( wd, ht, xy, ang, ang2 )
    return poly}




TESTPOLY=function(){z()

    w=b2d.mW()

    h=b2d.polyShape(100, 200)

    f =  b2d.polyDef()

    f.shape=h

   w.dynamic(400,400,[

       b2d.circDef(200),

       f
   ])

}






b2d.circH = b2d.circShape = b2d.circleShape =   b2d.cSh   =function(radius){
    radius = radius ||25
    return  new b2d.CircleShape(radius/30)
}//b2d.circle =

b2d.AH =b2d.AShape =   b2d.aSh=function(){return b2d.polyShape().sAA(arguments)}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//must be LAST!!!!!
b2d.triangleFixt =   b2d.AFixt([-100,0], [0,-100 ], [100,0] )
b2d.triangleFixt2 =  b2d.AFixt([-200,0],[0,-200],[200,0])
b2d.triangleFixt3 =  b2d.AFixt( [-100,0],  [0,-50], [400,0] )
//
b2d.testTriangles= function( x, y ){
    z()
    b2d.makeWorld()
    x = N(x)? x : 400; y = N(y)? y : 400

    _.times(2, function(){
        world.A(b2d.dynamicDef(x,y), b2d.triangleFixt)
        world.A(b2d.dynamicDef(x,y), b2d.triangleFixt2)
        world.A(b2d.dynamicDef(x,y), b2d.triangleFixt3)
    })

}
b2d.somePolyFixt=function(){return b2d.AFixt([-100,0],[0,-100],[100,0],[60,50])}
b2d.testSomePolyFixt = function(x,y){b2d.makeWorld()
    x=N(x)?x:400
    y=N(y)?y:400

    world.A(b2d.dynamicDef(x,y),b2d.somePolyFixt())}
b2d.randomCircleFixture = function(){return b2d.circShape(  Math.random()*50+ 8 )}
b2d.randomPolygonFixture = function(){


    var fixt, width, height


    width = Math.random() * 100 + 14

    height =Math.random() * 100 + 14 //12000/width

    fixt= b2d.polygonShape(
            width, height

    )



return fixt}
b2d.randomFixture = fix=function(){

    return fD.setShape(

        _.random(1)?  b2d.randomPolygonFixture()


            : b2d.randomCircleFixture()
    )

}


 b2d.ba= ba =function(x, y, radius){
    x = x || 100
    y = N(y) ? y : x
    radius = radius || 20
    return world.A(
        b2d.dynamicDef( x, y ),
        b2d.circDef( radius ) )}


b2d.ball=function(x,y,radius){


    return b2d.ba(x,y,radius).K('ball')
}

b2d.bumper=function(x,y,radius){


    return b2d.baa(x,y,radius).K('bumper')
}

b2d.brick=function(x,y,w,h){

    return b2d.bii(x,y,radius).K('brick')
}

b2d.box=function(x,y,w,h){

    return b2d.bi(x,y,w,h).K('box')
}




b2d.baa = baa  =function(x,y,r){//=ba2
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.addBody( b2d.staticDef(x,y), b2d.circDef(r) )

}
b2d.bi = bi   =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return w.addBody(  b2d.dynamicDef(x,y),     b2d.polyDef(W, H).r(0))

}


b2d.bii = bii  =function(x,y,W,H){

    x=N(x)?x:60;
    y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return w.A( b2d.staticDef(x,y),  b2d.polyDef(W, H).r(0) )

}




b2d.compoundShape = function(){return world.A(b2d.dynamicDef(300,200), [
        b2d.polyDef(50,10),
        b2d.polyDef(60,30,0,0,40),
        b2d.polyDef(120,30,0,0,29),
        b2d.polyDef(60,10,0,50,60),
        b2d.polyDef(84,10,15,80,-120)

    ])}
b2d.compoundShape2 =  function(){

   var body = w.A(

       b2d.dynamicDef(300,200),  [

            b2d.polyDef(50,10),

            b2d.polyDef(20,20),

            b2d.polyDef(20,10, 0,0, 10),

            b2d.polyDef(40,10, 50,0,  45),

            b2d.polyDef(84,10, 15,80, -120),

            b2d.polyDef(60,10, 0,50, 60 )


        ]      )

return body}
b2d.compoundStar=function(){return world.A(

   b2d.dynamicDef(300,200),
    [
        b2d.polyDef(10,10),
        b2d.circDef(20),
        b2d.polyDef(4,80,300, 300,   135),
        b2d.polyDef(4,80,0,0,45),
        b2d.polyDef(4,80,100,0, 90),
        b2d.polyDef(4,80,0,0,180)]

)}
b2d.platform =  function(){
    w.bii(300,300,200,20)
    w.bii(300,300,20,80)}
b2d.fricky=function(){return w.A(b2d.dynamicDef(300,200),
    [
        b2d.polyDef(10,10),
        b2d.polyDef(20,40,0,0, 90).f(0).r(0),

        b2d.polyDef(20,40,0,0,180).f(0).r(0)])}
b2d.bouncy=function(){return w.A(b2d.dynamicDef(300,200),[b2d.polyDef(10,10),
        b2d.polyDef(20,40,0,0, 90).r(.9).f(1),
        b2d.polyDef(20,40,0,0,180).r(.9).f(1)])}
b2d.massy=function(){return w.A(b2d.dynamicDef(300,200),
    [b2d.polyDef(10,10),
        b2d.polyDef(20,40,0,0, 90).d(2).f(1),
        b2d.polyDef(20,40,0,0,180).d(2).f(1)])}
b2d.fluffy=function(){
    return world.A(
        b2d.dynamicDef(300,200),[
            b2d.polyDef(10,10),
            b2d.polyDef(20,40,0,0,90).d(.1).f(1),
            b2d.polyDef(20,40,0,0,180).d(.1).f(1)]


    )}
cup=function(x,y){x=N(x)?x:100;y=N(y)?y:x
    return w.A(b2d.dynamicDef(x,y),[
        b2d.polyDef(10,10).d(5),
        b2d.polyDef(50,20,0,40,0),
        b2d.polyDef(100,20,-80,-40,260),
        b2d.polyDef(100,20,80,-40,-80)])}
cup2=function(x,y){
    x=N(x)?x:100//300
    y=N(y)?y:x//800

    return w.A(
        b2d.dynamicDef(x,y), [
            b2d.polyDef(10,10).d(5),
            b2d.polyDef(50,20,0,40,0),
            b2d.polyDef(100,20,-80,-40,260),
            b2d.polyDef(100,20,80,-40,-80),
            b2d.circDef(100)
        ])}
cup3=function(x,y){

    x=N(x)?x:100;y=N(y)?y:x
    return w.A(b2d.dynamicDef(x,y),
        [b2d.polyDef(10,10).d(5),
            b2d.polyDef(50,20,0,40,0),
            b2d.polyDef(100,20,-80,-40,260),
            b2d.polyDef(100,20,80,-40,-80),
            b2d.circDef(34,-80,-130),
            b2d.circDef(34,80,-130)])}
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

    b2d.mW({

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
BOX2D=function(a){b2d.mW()
    b2d.compoundShape()
    b2d.platform()
    w.addTenBalls()
    w.addMe();w.addMe();w.addMe()}
b2d.testBounceFrict=function(){
    b2d.mW()
    b2d.bouncy()
    b2d.bouncy()
    b2d.bouncy()
    b2d.fricky()
    b2d.fricky()
    b2d.fricky()
}
CUPS=function(){
    b2d.makeWorld()

    cup(280,50)
    cup2(400,50)
    cup3(700,50)

    b2d.fluffy()

    w.ba()
    w.ba()
    w.ba()
    w.bii(150,220,50)
}
//walls/setup
//show static bricks
STAIRS=function(){
    b2d.makeWorld()
    w.bii(500,500,600,100)
    w.bii(500,400,500,100)
    w.bii(500,300,500,100)
    w.bii(500,350,450,100)
    w.bii(320,400,50,600)
    w.ba()


}


ORIENTED=function(){z()


    w=b2.mW()

    body = b2d.dynamicDef(200,200)

    f = b2d.polyDef()

    foot = b2d.polyDef(8, 14, 30, 140)

   // f.shape.SetAsOrientedBox(100,200)


   //  w.A(body, [foot, b2d.polyDef(100,100)] )


    //w.dynamic( 100,200,b2d.circDef(30) )




    w.dynamic(500,400,[

        f1=b2d.polyDef(20,20,-100,50,60),

        f2=b2d.polyDef(100,120, 0, 0,100),

        b2d.polyDef(100, 20),


        b2d.polyDef(10, 300)

    ])





}

