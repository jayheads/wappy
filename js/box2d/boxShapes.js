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


    if(U(xy)){this.SetAsBox(wd, ht)}

    else if(N(xy)){this.SetAsOrientedBox(wd, ht, V(xy/30,ang/30), Math.toRadians(ang2||0) )}
    else { this.SetAsOrientedBox(wd, ht, xy.div(), Math.toRadians(ang||0) ) }

    return this}

p.setAsArray = p.sAA=  function(a,b){
    this.SetAsArray(a,b)
    return this}  //if(P){p.z(x,y,P,A);return p}
//////////////////////////////////////////////////////////////////////////////////////////


b2d.polyH =b2d.polyShape =  b2d.pSh   =function( wd, ht, xy, ang, ang2 ){
    var poly=new b2d.PolygonShape()
      poly.setAsBox( wd, ht, xy, ang, ang2 )
    return poly}






TESTPOLY=function(){b2d.W()


    circShape = b2d.circShape(100, 200)

    circShape.rad=function(rad){
        if(U(rad)){return this.GetRadius()*30}
        this.SetRadius(rad/30)

    return this}

    circFixt =  b2d.fixt(  circShape   )





     polyShape = b2d.polyShape(100, 200)

    polyFixt =  b2d.fixt( polyShape )






      body = w.dyn(200,100)

         pf =  body.fixt( polyFixt )

    ph = pf.shape()

  cf=  body.fixt( circFixt )

    ch = cf.shape()
}



b2d.circH = b2d.circShape = b2d.circleShape =   b2d.cSh   =function(radius){
    radius = radius ||25
    return  new b2d.CircleShape(radius/30)
}//b2d.circle =




b2d.AShape=function(){
    //in b2dWEB use CW, not CCW
    var shape = b2d.polyShape()

    var arr = _.map(arguments, function(vert){
        return V(vert[0], vert[1], '-')})

    shape.sAA(arr, arr.length)

    return shape}




//must be LAST! really now ??
//b2d.triangleFixt =   b2d.A([-100,0], [0,-100 ], [100,0] )
//b2d.triangleFixt2 =  b2d.A([-200,0],[0,-200],[200,0])
//this is a premade fixture
b2d.triangle3 =  b2d.A(  [-100,0],  [0,-50],  [400,0]  )




TRIANGLES=function(){w=b2d.W()

     //long way
    shape = b2d.AShape([-100,0],[0,-100],[100,-20], [50,20])
    fd = b2d.fixt( shape )
    b =  w.dyn(400, 400, b2d.circ(30))
    f =  b.fixt( fd )

    w.dyn(200, 200, b2d.triangle3)

    //short way
    w.dyn(400, 400,  b2d.A( [-100,0], [0,-100], [100,-20]  )  )


    //shortest way ?
    //  w.poly(400, 400, [-100,0],[0,-100],[100,-20] ) ??


}





TRIANGLES2 = function(  ){w=b2d.W()


    w.dyn(100, 200, b2d.poly(50, 50))


     //tri =   b2d.A([-100,0], [0,-100 ], [100,0] )

    var shape = b2d.polyShape()

     shape.sAA([V(-100, 0,'-'), V(0,-100,'-'), V(100, -20,'-')], 3)

    fd = b2d.fixt(shape)

    b =  w.dyn(400, 400)

    f =  b.fixt( fd )

   // w.dyn(x,y, b2d.triangleFixt2)

    //w.dyn(x,y, b2d.triangleFixt3)


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

    return b2d.bii(x,y,w,h).K('brick')
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



MAZE=function(){w=b2d.W()

    maze=[
        [1,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1],
        [1,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1,1,1],
        [1,0,1,0,1,0,0,0,1],
        [1,0,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1]]

    w.grid(maze, 100, 200, 20,30)
    w.bump(400, 200, 10)
}

MARIOMAZE=function(){
    b2d.levelSpace()

 //ceiling.kill(); //right.kill()

   grid= w.grid([
            [1,0,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,0,1],
            [1,0,0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1,1,1],
            [1,0,1,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1]


        ],  100, -100, 14, 40)
    score=100

   cjs.tick(function(){
       grid.angVel(.2)
       w.s.HUD.pen(score)
   })


    w.begin(function(cx){

        if(cx.with('player', 'grid')){ score--


        }})

   // grid.angDamp(1)

    p.XY(220, 70)
}

RDP=function() {

    function RDPsd(points, epsilon) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];
        if (points.length < 3) {
            return points;
        }
        var index = -1;
        var dist = 0;
        for (var i = 1; i < points.length - 1; i++) {
            var cDist = distanceFromPointToLine(points[i], firstPoint, lastPoint);

            if (cDist > dist) {
                dist = cDist;
                index = i;
            }
        }
        if (dist > epsilon) {
            // iterate
            var l1 = points.slice(0, index + 1);
            var l2 = points.slice(index);
            var r1 = RDPsd(l1, epsilon);
            var r2 = RDPsd(l2, epsilon);
            // concat r2 to r1 minus the end/startpoint that will be the same
            var rs = r1.slice(0, r1.length - 1).concat(r2);
            return rs;
        } else {
            return [firstPoint, lastPoint];
        }
    }


// this is the implementation with perpendicular Distance
    function RDPppd(points, epsilon) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];
        if (points.length < 3) {
            return points;
        }
        var index = -1;
        var dist = 0;
        for (var i = 1; i < points.length - 1; i++) {
            var cDist = findPerpendicularDistance(points[i], firstPoint, lastPoint);
            if (cDist > dist) {
                dist = cDist;
                index = i;
            }
        }
        if (dist > epsilon) {
            // iterate
            var l1 = points.slice(0, index + 1);
            var l2 = points.slice(index);
            var r1 = RDPppd(l1, epsilon);
            var r2 = RDPppd(l2, epsilon);
            // concat r2 to r1 minus the end/startpoint that will be the same
            var rs = r1.slice(0, r1.length - 1).concat(r2);
            return rs;
        } else {
            return [firstPoint, lastPoint];
        }
    }

    function findPerpendicularDistance(p, p1, p2) {

        // if start and end point are on the same x the distance is the difference in X.
        var result;
        var slope;
        var intercept;
        if (p1[0] == p2[0]) {
            result = Math.abs(p[0] - p1[0]);
        } else {
            slope = (p2[1] - p1[1]) / (p2[0] - p1[0]);
            intercept = p1[1] - (slope * p1[0]);
            result = Math.abs(slope * p[0] - p[1] + intercept) / Math.sqrt(Math.pow(slope, 2) + 1);
        }

        return result;
    }


// code as suggested by Edward Lee

    var distanceFromPointToLine = function (p, a, b) {
        // convert array to object to please Edwards code;
        p = {x: p[0], y: p[1]};
        a = {x: a[0], y: a[1]};
        b = {x: b[0], y: b[1]};
        return Math.sqrt(distanceFromPointToLineSquared(p, a, b));
    }

//This is the difficult part. Commenting as we go.
    var distanceFromPointToLineSquared = function (p, i, j) {
        var lineLength = pointDistance(i, j);//First, we need the length of the line segment.
        if (lineLength == 0) {	//if it's 0, the line is actually just a point.
            return pointDistance(p, a);
        }
        var t = ((p.x - i.x) * (j.x - i.x) + (p.y - i.y) * (j.y - i.y)) / lineLength;

        //t is very important. t is a number that essentially compares the individual coordinates
        //distances between the point and each point on the line.

        if (t < 0) {	//if t is less than 0, the point is behind i, and closest to i.
            return pointDistance(p, i)}	//if greater than 1, it's closest to j.
        if (t > 1) {
            return pointDistance(p, j)}
        return pointDistance(p, { x: i.x + t * (j.x - i.x), y: i.y + t * (j.y - i.y)});
        //this figure represents the point on the line that p is closest to.
    }

//returns distance between two points. Easy geometry.
    var pointDistance = function (i, j) {return sqr(i.x - j.x) + sqr(i.y - j.y)}


function sqr(x){return x * x}

}