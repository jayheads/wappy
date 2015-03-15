h =  b2d.Shapes.b2Shape.prototype

h.testPoint = h.tP=function(tf, vec){
    return this.TestPoint(tf, vec)
}








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
    //w=wor()

    w= wor()

    cup(280,500)
    cup2(400,500)
    cup3(700,500)

    //b2d.fluffy()

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

    w.ship()
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

TERRAIN1=function(){z()

    s= stage = cjs.stg(1600, 600).A()

    h = s.shape()
    h.f('b').dc(200, 200, 10)

    h2 = s.shape().X(700)
    h2.f('b').dc(0,0,10)

    tile = function(i,j){
        return [
            V(-5+i,130+j),
            V(-5+i,80+j),
            V(45+i,80+j),
            V(45+i,130+j)
        ]}   // lower left //upper left//upper right//lower right


draw=function(){terr=[]
    _.times(13,function(i){
        _.times(8,function(j){
        terr.push(tile(i*50,j*50))
    })})

    h.drawPolygons(terr,'b','r')
}

    draw()

    t= Math.poly(terr[101])

      doExplosion= function(e){

          v = V(e.stageX,e.stageY)

          exP = circ(v,100 )
          h.drawPolygon(exP,'z')

          c  = Math.poly(exP)
    // for each existing terrain polygon, check the difference between the polygon itself and the
    // explosion polygon. This should be optimized in some way, checking only for terrain polygons
    // which are actually affected by the explosion.
    // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
    // difference is calculated.

          iX = c.intersection(t)
          h2.drawPolygon(iX.verts())
    for (var i=terr.length-1; i>=0; i--) {


     // resultPolygons =   terr[i].intersection(exP)

        totalArea=0
       // terr.splice(i,1)
       // for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}

    }

   // draw()
}

     circ=function(v,rad,prec){ prec = N(prec)?prec:20

        arr=[]

         ang= 2 * Math.PI/prec

          _.times(prec , function(i){

           pX = v.x + rad * Math.cos(ang*i)
            pY = v.y + rad * Math.sin(ang*i)

           // $l('pX: ' + pX + ', pY: '+ pY)

            arr.push( V(pX,pY) )

          })

          return arr

      }

    // listeners: basically we destroy the terrain with a mouse click or a mouse drag

    // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
    // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})


    stage.on('click', doExplosion)



   vv= [V(645,480), //lower right
       V(595,480),  //lower left
       V(595,430), //upper left
       V(645,430)] //upper right

    h.drawPolygon(vv, 'z')


vvv = [

    V(645,380),
    V(595,380),
    V(595,372),
    V(617,369),
    V(645,373)
]

   //h.drawPolygon(vvv, 'z')
     h.drawPolygon(vvv, 'z')



}


GPCLIB=function(){
    gpcas =  {};
    gpcas.util = {};
    gpcas.geometry = {};

//////////

//Object.prototype.equals = function(x) {
    function equals(x1, x) {

        var p;
        for(p in x1) {
            if(typeof(x[p])=='undefined') {return false;}
        }

        for(p in x1) {
            if (x1[p]) {
                switch(typeof(x1[p])) {
                    case 'object':
                        if (!equals(x1[p], x[p])) { return false; } break;
                    case 'function':
                        if (typeof(x[p])=='undefined' ||
                            (p != 'equals' && x1[p].toString() != x[p].toString()))
                            return false;
                        break;
                    default:
                        if (x1[p] != x[p]) { return false; }
                }
            } else {
                if (x[p])
                    return false;
            }
        }

        for(p in x) {
            if(typeof(x1[p])=='undefined') {return false;}
        }

        return true;
    }
///point
    var Point = function(x,y) {
        this.x = x;
        this.y = y;
    };
////////////// CLASS ArrayHelper ////////////////////////////////////
    gpcas.util.ArrayHelper = function() {};
    var static = gpcas.util.ArrayHelper;

    static.create2DArray = function(x,y){
        var a = [];
        for (var i=0; i<x; i++){
            a[i]= [];
        }
        return a;
    };
    static.valueEqual = function(obj1, obj2) {
        if (obj1==obj2) return true;
        if(equals(obj1, obj2)) return true;

        return false;
    }
    static.sortPointsClockwise = function(vertices) {
        var isArrayList  = false;

        if (vertices instanceof ArrayList){
            vertices= vertices.toArray();
            isArrayList=true;
        }

        //point
        var maxTop   = null;
        var maxBottom  = null;
        var maxLeft   = null;
        var maxRight  = null;


        var maxLeftIndex;
        var newVertices = vertices;



        for (var i  = 0; i<vertices.length; i++){
            var vertex  = vertices[i] ;

            if ((maxTop==null)||(maxTop.y>vertex.y)||((maxTop.y==vertex.y)&&(vertex.x<maxTop.x))){
                maxTop=vertex;
            }
            if ((maxBottom==null)||(maxBottom.y<vertex.y)||((maxBottom.y==vertex.y)&&(vertex.x>maxBottom.x))){
                maxBottom=vertex;
            }
            if ((maxLeft==null)||(maxLeft.x>vertex.x)||((maxLeft.x==vertex.x)&&(vertex.y>maxLeft.y))){
                maxLeft=vertex;
                maxLeftIndex=i;
            }
            if ((maxRight==null)||(maxRight.x<vertex.x)||((maxRight.x==vertex.x)&&(vertex.y<maxRight.y))){
                maxRight=vertex;
            }
        }

        if (maxLeftIndex>0){
            newVertices = []
            var j = 0;
            for (var i=maxLeftIndex; i<vertices.length;i++){
                newVertices[j++]=vertices[i];
            }
            for (var i=0; i<maxLeftIndex; i++){
                newVertices[j++]=vertices[i];
            }
            vertices=newVertices;
        }


        var reverse  = false;
        for(var i=0 ; i<vertices.length;i++) {
            var vertex = vertices[i];
            if (equals(vertex, maxBottom)){
                reverse=true;
                break;
            } else if (equals(vertex, maxTop)){
                break;
            }
        }
        if (reverse){
            newVertices=[]
            newVertices[0]=vertices[0];
            var j =1;
            for (var i=vertices.length-1; i>0; i--){
                newVertices[j++]=vertices[i];
            }
            vertices=newVertices;
        }

        return (isArrayList?(new ArrayList(vertices)):(vertices));
    }

/////////////// END ArrayHelper  ////////////////////////////////////////////////

    var ArrayHelper = gpcas.util.ArrayHelper;
////////////////// CLASS ArrayList  /////////////////////////

    gpcas.util.ArrayList = function(arr) {
        this._array = [];
        if(arr != null) {
            this._array=arr;
        }

    };
    var p = gpcas.util.ArrayList.prototype;

    p.add = function(value) {
        this._array.push(value);
    };
    p.get = function(index) {
        return this._array[index];
    };
    p.size = function() {
        return this._array.length;
    };
    p.clear = function() {
        this._array  = [];

    };
    p.equals = function(list) {
        if (this._array.length != list.size()) return false;

        for (var i = 0; i<this._array.length ; i++){
            var obj1  = this._array[i];
            var obj2  = list.get(i);

            if (!ArrayHelper.valueEqual(obj1,obj2)){
                return false;
            }
        }
        return true;
    }
    p.hashCode = function(){
        return 0;
    };
    p.isEmpty = function() {
        return (this._array.length == 0);
    }
    p.toArray = function(){
        return this._array;
    }
///////////////// END ArrayList ////////////////////////






    gpcas.geometry.Clip = function(){};
    gpcas.geometry.Clip.DEBUG = false;
    gpcas.geometry.Clip.GPC_EPSILON = 2.2204460492503131e-016;
    gpcas.geometry.Clip.GPC_VERSION = "2.31";
    gpcas.geometry.Clip.LEFT = 0;
    gpcas.geometry.Clip.RIGHT = 1;
    gpcas.geometry.Clip.ABOVE = 0;
    gpcas.geometry.Clip.BELOW = 1;
    gpcas.geometry.Clip.CLIP = 0;
    gpcas.geometry.Clip.SUBJ = 1;



    var p = gpcas.geometry.Clip.prototype;
    var static = gpcas.geometry.Clip;

// ----------------------
// --- Static Methods ---
// ----------------------

    /**
     * Return the intersection of <code>p1</code> and <code>p2</code> where the
     * return type is of <code>polyClass</code>.  See the note in the class description
     * for more on <ocde>polyClass</code>.
     *
     * @param p1        One of the polygons to performt he intersection with
     * @param p2        One of the polygons to performt he intersection with
     * @param polyClass The type of <code>Poly</code> to return
     */

    static.intersection = function(p1, p2, polyClass) {
        if(polyClass==null || polyClass==undefined) {
            polyClass = "PolyDefault";
        }
        return Clip.clip( OperationType.GPC_INT, p1, p2, polyClass );
    };



    /**
     * Return the union of <code>p1</code> and <code>p2</code> where the
     * return type is of <code>polyClass</code>.  See the note in the class description
     * for more on <ocde>polyClass</code>.
     *
     * @param p1        One of the polygons to performt he union with
     * @param p2        One of the polygons to performt he union with
     * @param polyClass The type of <code>Poly</code> to return
     */
    static.union = function(p1, p2, polyClass) {

        if(polyClass==null || polyClass==undefined) {
            polyClass = "PolyDefault";
        }

        return Clip.clip( OperationType.GPC_UNION, p1, p2, polyClass );
    };


    /**
     * Return the xor of <code>p1</code> and <code>p2</code> where the
     * return type is of <code>polyClass</code>.  See the note in the class description
     * for more on <ocde>polyClass</code>.
     *
     * @param p1        One of the polygons to performt he xor with
     * @param p2        One of the polygons to performt he xor with
     * @param polyClass The type of <code>Poly</code> to return
     */
    static.xor = function( p1, p2, polyClass) {
        if(polyClass==null || polyClass==undefined) {
            polyClass = "PolyDefault";
        }
        return Clip.clip( OperationType.GPC_XOR, p1, p2, polyClass );
    };


    /**
     * Return the difference of <code>p1</code> and <code>p2</code> where the
     * return type is of <code>polyClass</code>.  See the note in the class description
     * for more on <ocde>polyClass</code>.
     *
     * @param p1        Polygon from which second polygon will be substracted
     * @param p2        Second polygon
     * @param polyClass The type of <code>Poly</code> to return
     */
    static.difference = function ( p1, p2, polyClass) {
        if(polyClass==null || polyClass==undefined) {
            polyClass = "PolyDefault";
        }
        return Clip.clip(OperationType.GPC_DIFF, p2, p1, polyClass );
    }
    static.intersection = function( p1, p2) {
        return Clip.clip(OperationType.GPC_INT, p1, p2, "PolyDefault.class" );
    }


// -----------------------
// --- Private Methods ---
// -----------------------

    /**
     * Create a new <code>Poly</code> type object using <code>polyClass</code>.
     */
    static.createNewPoly = function ( polyClass) {
        /* TODO :
         try
         {
         return (Poly)polyClass.newInstance();
         }
         catch( var e:Exception)
         {
         throw new RuntimeException(e);
         }*/
        if (polyClass=="PolySimple"){
            return new PolySimple();
        }
        if (polyClass=="PolyDefault"){
            return new PolyDefault();
        }
        if (polyClass=="PolyDefault.class"){
            return new PolyDefault();
        }

        return null;
    }

    /**
     * <code>clip()</code> is the main method of the clipper algorithm.
     * This is where the conversion from really begins.
     */
    static.clip = function ( op, subj, clip, polyClass) {
        var result = Clip.createNewPoly( polyClass ) ;

        /* Test for trivial NULL result cases */
        if( (subj.isEmpty() && clip.isEmpty()) ||
            (subj.isEmpty() && ((op == OperationType.GPC_INT) || (op == OperationType.GPC_DIFF))) ||
            (clip.isEmpty() &&  (op == OperationType.GPC_INT)) )
        {
            return result ;
        }



        /* Identify potentialy contributing contours */
        if( ((op == OperationType.GPC_INT) || (op == OperationType.GPC_DIFF)) &&
            !subj.isEmpty() && !clip.isEmpty() )
        {
            Clip.minimax_test(subj, clip, op);
        }

        //console.log("SUBJ " + subj);
        //console.log("CLIP " + clip);



        /* Build LMT */
        var lmt_table = new LmtTable();
        var sbte = new ScanBeamTreeEntries();
        var s_heap= null ;
        var c_heap= null ;



        if (!subj.isEmpty())
        {
            s_heap = Clip.build_lmt(lmt_table, sbte, subj, Clip.SUBJ, op);
        }
        if( Clip.DEBUG )
        {
            //console.log("");
            //console.log(" ------------ After build_lmt for subj ---------");
            lmt_table.print();
        }
        if (!clip.isEmpty())
        {
            c_heap = Clip.build_lmt(lmt_table, sbte, clip, Clip.CLIP, op);
        }
        if( Clip.DEBUG )
        {
            //console.log("");
            //console.log(" ------------ After build_lmt for clip ---------");
            lmt_table.print();
        }

        /* Return a NULL result if no contours contribute */
        if (lmt_table.top_node == null)
        {
            return result;
        }

        /* Build scanbeam table from scanbeam tree */
        var sbt = sbte.build_sbt();



        var parity= [];
        parity[0] = Clip.LEFT ;
        parity[1] = Clip.LEFT ;

        /* Invert clip polygon for difference operation */
        if (op == OperationType.GPC_DIFF)
        {
            parity[Clip.CLIP]= Clip.RIGHT;
        }

        if( Clip.DEBUG )
        {
            //console.log(sbt);
        }

        var local_min = lmt_table.top_node ;

        var out_poly = new TopPolygonNode(); // used to create resulting Poly

        var aet = new AetTree();
        var scanbeam = 0;



        /* Process each scanbeam */
        while( scanbeam < sbt.length )
        {
            /* Set yb and yt to the bottom and top of the scanbeam */
            var yb = sbt[scanbeam++];
            var yt = 0.0;
            var dy = 0.0;
            if( scanbeam < sbt.length )
            {
                yt = sbt[scanbeam];
                dy = yt - yb;
            }



            /* === SCANBEAM BOUNDARY PROCESSING ================================ */

            /* If LMT node corresponding to yb exists */
            if (local_min != null )
            {
                if (local_min.y == yb)
                {
                    /* Add edges starting at this local minimum to the AET */
                    for( var edge= local_min.first_bound; (edge != null) ; edge= edge.next_bound)
                    {
                        Clip.add_edge_to_aet( aet, edge );
                    }

                    local_min = local_min.next;
                }
            }

            if( Clip.DEBUG )
            {
                aet.print();
            }
            /* Set dummy previous x value */
            var px = -Number.MAX_VALUE;

            /* Create bundles within AET */
            var e0 = aet.top_node ;
            var e1 = aet.top_node ;



            /* Set up bundle fields of first edge */
            aet.top_node.bundle[Clip.ABOVE][ aet.top_node.type ] = (aet.top_node.top.y != yb) ? 1: 0;
            aet.top_node.bundle[Clip.ABOVE][ ((aet.top_node.type==0) ? 1: 0) ] = 0;
            aet.top_node.bstate[Clip.ABOVE] = BundleState.UNBUNDLED;

            for (var next_edge= aet.top_node.next ; (next_edge != null); next_edge = next_edge.next)
            {
                var ne_type= next_edge.type ;
                var ne_type_opp= ((next_edge.type==0) ? 1: 0); //next edge type opposite

                /* Set up bundle fields of next edge */
                next_edge.bundle[Clip.ABOVE][ ne_type     ]= (next_edge.top.y != yb) ? 1: 0;
                next_edge.bundle[Clip.ABOVE][ ne_type_opp ] = 0;
                next_edge.bstate[Clip.ABOVE] = BundleState.UNBUNDLED;

                /* Bundle edges above the scanbeam boundary if they coincide */
                if ( next_edge.bundle[Clip.ABOVE][ne_type] == 1)
                {
                    if (Clip.EQ(e0.xb, next_edge.xb) && Clip.EQ(e0.dx, next_edge.dx) && (e0.top.y != yb))
                    {
                        next_edge.bundle[Clip.ABOVE][ ne_type     ] ^= e0.bundle[Clip.ABOVE][ ne_type     ];
                        next_edge.bundle[Clip.ABOVE][ ne_type_opp ]  = e0.bundle[Clip.ABOVE][ ne_type_opp ];
                        next_edge.bstate[Clip.ABOVE] = BundleState.BUNDLE_HEAD;
                        e0.bundle[Clip.ABOVE][Clip.CLIP] = 0;
                        e0.bundle[Clip.ABOVE][Clip.SUBJ] = 0;
                        e0.bstate[Clip.ABOVE] = BundleState.BUNDLE_TAIL;
                    }
                    e0 = next_edge;

                }
            }

            var horiz= [] ;
            horiz[Clip.CLIP]= HState.NH;
            horiz[Clip.SUBJ]= HState.NH;

            var exists= [] ;
            exists[Clip.CLIP] = 0;
            exists[Clip.SUBJ] = 0;

            var cf= null ;

            /* Process each edge at this scanbeam boundary */
            for (var edge= aet.top_node ; (edge != null); edge = edge.next )
            {
                exists[Clip.CLIP] = edge.bundle[Clip.ABOVE][Clip.CLIP] + (edge.bundle[Clip.BELOW][Clip.CLIP] << 1);
                exists[Clip.SUBJ] = edge.bundle[Clip.ABOVE][Clip.SUBJ] + (edge.bundle[Clip.BELOW][Clip.SUBJ] << 1);

                if( (exists[Clip.CLIP] != 0) || (exists[Clip.SUBJ] != 0) )
                {
                    /* Set bundle side */
                    edge.bside[Clip.CLIP] = parity[Clip.CLIP];
                    edge.bside[Clip.SUBJ] = parity[Clip.SUBJ];

                    var contributing= false ;
                    var br=0;
                    var bl=0;
                    var tr=0;
                    var tl=0;
                    /* Determine contributing status and quadrant occupancies */
                    if( (op == OperationType.GPC_DIFF) || (op == OperationType.GPC_INT) )
                    {
                        contributing= ((exists[Clip.CLIP]!=0) && ((parity[Clip.SUBJ]!=0) || (horiz[Clip.SUBJ]!=0))) ||
                            ((exists[Clip.SUBJ]!=0) && ((parity[Clip.CLIP]!=0) || (horiz[Clip.CLIP]!=0))) ||
                            ((exists[Clip.CLIP]!=0) && (exists[Clip.SUBJ]!=0) && (parity[Clip.CLIP] == parity[Clip.SUBJ]));
                        br = ((parity[Clip.CLIP]!=0) && (parity[Clip.SUBJ]!=0)) ? 1: 0;
                        bl = ( ((parity[Clip.CLIP] ^ edge.bundle[Clip.ABOVE][Clip.CLIP])!=0) &&
                            ((parity[Clip.SUBJ] ^ edge.bundle[Clip.ABOVE][Clip.SUBJ])!=0) ) ? 1: 0;
                        tr = ( ((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP]!=HState.NH)?1:0)) !=0) &&
                            ((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ]!=HState.NH)?1:0)) !=0) ) ? 1: 0;
                        tl = (((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP]!=HState.NH)?1:0) ^ edge.bundle[Clip.BELOW][Clip.CLIP])!=0) &&
                            ((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ]!=HState.NH)?1:0) ^ edge.bundle[Clip.BELOW][Clip.SUBJ])!=0))?1:0;
                    }
                    else if( op == OperationType.GPC_XOR )
                    {
                        contributing= (exists[Clip.CLIP]!=0) || (exists[Clip.SUBJ]!=0);
                        br= (parity[Clip.CLIP]) ^ (parity[Clip.SUBJ]);
                        bl= (parity[Clip.CLIP] ^ edge.bundle[Clip.ABOVE][Clip.CLIP]) ^ (parity[Clip.SUBJ] ^ edge.bundle[Clip.ABOVE][Clip.SUBJ]);
                        tr= (parity[Clip.CLIP] ^ ((horiz[Clip.CLIP]!=HState.NH)?1:0)) ^ (parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ]!=HState.NH)?1:0));
                        tl= (parity[Clip.CLIP] ^ ((horiz[Clip.CLIP]!=HState.NH)?1:0) ^ edge.bundle[Clip.BELOW][Clip.CLIP])
                            ^ (parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ]!=HState.NH)?1:0) ^ edge.bundle[Clip.BELOW][Clip.SUBJ]);
                    }
                    else if( op == OperationType.GPC_UNION )
                    {
                        contributing= ((exists[Clip.CLIP]!=0) && (!(parity[Clip.SUBJ]!=0) || (horiz[Clip.SUBJ]!=0))) ||
                            ((exists[Clip.SUBJ]!=0) && (!(parity[Clip.CLIP]!=0) || (horiz[Clip.CLIP]!=0))) ||
                            ((exists[Clip.CLIP]!=0) && (exists[Clip.SUBJ]!=0) && (parity[Clip.CLIP] == parity[Clip.SUBJ]));
                        br= ((parity[Clip.CLIP]!=0) || (parity[Clip.SUBJ]!=0))?1:0;
                        bl= (((parity[Clip.CLIP] ^ edge.bundle[Clip.ABOVE][Clip.CLIP])!=0) || ((parity[Clip.SUBJ] ^ edge.bundle[Clip.ABOVE][Clip.SUBJ])!=0))?1:0;
                        tr= ( ((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP]!=HState.NH)?1:0))!=0) ||
                            ((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ]!=HState.NH)?1:0))!=0) ) ?1:0;
                        tl= ( ((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP]!=HState.NH)?1:0) ^ edge.bundle[Clip.BELOW][Clip.CLIP])!=0) ||
                            ((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ]!=HState.NH)?1:0) ^ edge.bundle[Clip.BELOW][Clip.SUBJ])!=0) ) ? 1:0;
                    }
                    else
                    {
                        //console.log("ERROR : Unknown op");
                    }

                    /* Update parity */
                    parity[Clip.CLIP] ^= edge.bundle[Clip.ABOVE][Clip.CLIP];
                    parity[Clip.SUBJ] ^= edge.bundle[Clip.ABOVE][Clip.SUBJ];

                    /* Update horizontal state */
                    if (exists[Clip.CLIP]!=0)
                    {
                        horiz[Clip.CLIP] = HState.next_h_state[horiz[Clip.CLIP]][((exists[Clip.CLIP] - 1) << 1) + parity[Clip.CLIP]];
                    }
                    if( exists[Clip.SUBJ]!=0)
                    {
                        horiz[Clip.SUBJ] = HState.next_h_state[horiz[Clip.SUBJ]][((exists[Clip.SUBJ] - 1) << 1) + parity[Clip.SUBJ]];
                    }

                    if (contributing)
                    {
                        var xb= edge.xb;



                        var vclass= VertexType.getType( tr, tl, br, bl );
                        switch (vclass)
                        {
                            case VertexType.EMN:
                            case VertexType.IMN:
                                edge.outp[Clip.ABOVE] = out_poly.add_local_min(xb, yb);
                                px = xb;
                                cf = edge.outp[Clip.ABOVE];
                                break;
                            case VertexType.ERI:
                                if (xb != px)
                                {
                                    cf.add_right( xb, yb);
                                    px= xb;
                                }
                                edge.outp[Clip.ABOVE]= cf;
                                cf= null;
                                break;
                            case VertexType.ELI:
                                edge.outp[Clip.BELOW].add_left( xb, yb);
                                px= xb;
                                cf= edge.outp[Clip.BELOW];
                                break;
                            case VertexType.EMX:
                                if (xb != px)
                                {
                                    cf.add_left( xb, yb);
                                    px= xb;
                                }
                                out_poly.merge_right(cf, edge.outp[Clip.BELOW]);
                                cf= null;
                                break;
                            case VertexType.ILI:
                                if (xb != px)
                                {
                                    cf.add_left( xb, yb);
                                    px= xb;
                                }
                                edge.outp[Clip.ABOVE]= cf;
                                cf= null;
                                break;
                            case VertexType.IRI:
                                edge.outp[Clip.BELOW].add_right( xb, yb );
                                px= xb;
                                cf= edge.outp[Clip.BELOW];
                                edge.outp[Clip.BELOW]= null;
                                break;
                            case VertexType.IMX:
                                if (xb != px)
                                {
                                    cf.add_right( xb, yb );
                                    px= xb;
                                }
                                out_poly.merge_left(cf, edge.outp[Clip.BELOW]);
                                cf= null;
                                edge.outp[Clip.BELOW]= null;
                                break;
                            case VertexType.IMM:
                                if (xb != px)
                                {
                                    cf.add_right( xb, yb);
                                    px= xb;
                                }
                                out_poly.merge_left(cf, edge.outp[Clip.BELOW]);
                                edge.outp[Clip.BELOW]= null;
                                edge.outp[Clip.ABOVE] = out_poly.add_local_min(xb, yb);
                                cf= edge.outp[Clip.ABOVE];
                                break;
                            case VertexType.EMM:
                                if (xb != px)
                                {
                                    cf.add_left( xb, yb);
                                    px= xb;
                                }
                                out_poly.merge_right(cf, edge.outp[Clip.BELOW]);
                                edge.outp[Clip.BELOW]= null;
                                edge.outp[Clip.ABOVE] = out_poly.add_local_min(xb, yb);
                                cf= edge.outp[Clip.ABOVE];
                                break;
                            case VertexType.LED:
                                if (edge.bot.y == yb)
                                    edge.outp[Clip.BELOW].add_left( xb, yb);
                                edge.outp[Clip.ABOVE]= edge.outp[Clip.BELOW];
                                px= xb;
                                break;
                            case VertexType.RED:
                                if (edge.bot.y == yb)
                                    edge.outp[Clip.BELOW].add_right( xb, yb );
                                edge.outp[Clip.ABOVE]= edge.outp[Clip.BELOW];
                                px= xb;
                                break;
                            default:
                                break;
                        } /* End of switch */
                    } /* End of contributing conditional */
                } /* End of edge exists conditional */
                if( Clip.DEBUG )
                {
                    out_poly.print();
                }
                out_poly.print();
            } /* End of AET loop */



            /* Delete terminating edges from the AET, otherwise compute xt */
            for (var edge= aet.top_node ; (edge != null); edge = edge.next)
            {
                if (edge.top.y == yb)
                {
                    var prev_edge= edge.prev;
                    var next_edge= edge.next;

                    if (prev_edge != null)
                        prev_edge.next = next_edge;
                    else
                        aet.top_node = next_edge;

                    if (next_edge != null )
                        next_edge.prev = prev_edge;

                    /* Copy bundle head state to the adjacent tail edge if required */
                    if ((edge.bstate[Clip.BELOW] == BundleState.BUNDLE_HEAD) && (prev_edge!=null))
                    {
                        if (prev_edge.bstate[Clip.BELOW] == BundleState.BUNDLE_TAIL)
                        {
                            prev_edge.outp[Clip.BELOW]= edge.outp[Clip.BELOW];
                            prev_edge.bstate[Clip.BELOW]= BundleState.UNBUNDLED;
                            if ( prev_edge.prev != null)
                            {
                                if (prev_edge.prev.bstate[Clip.BELOW] == BundleState.BUNDLE_TAIL)
                                {
                                    prev_edge.bstate[Clip.BELOW] = BundleState.BUNDLE_HEAD;
                                }
                            }
                        }
                    }
                }
                else
                {
                    if (edge.top.y == yt)
                        edge.xt= edge.top.x;
                    else
                        edge.xt= edge.bot.x + edge.dx * (yt - edge.bot.y);
                }
            }

            if (scanbeam < sbte.sbt_entries )
            {
                /* === SCANBEAM INTERIOR PROCESSING ============================== */

                /* Build intersection table for the current scanbeam */
                var it_table= new ItNodeTable();
                it_table.build_intersection_table(aet, dy);



                /* Process each node in the intersection table */

                for (var intersect= it_table.top_node ; (intersect != null); intersect = intersect.next)
                {


                    e0= intersect.ie[0];
                    e1= intersect.ie[1];

                    /* Only generate output for contributing intersections */

                    if ( ((e0.bundle[Clip.ABOVE][Clip.CLIP]!=0) || (e0.bundle[Clip.ABOVE][Clip.SUBJ]!=0)) &&
                        ((e1.bundle[Clip.ABOVE][Clip.CLIP]!=0) || (e1.bundle[Clip.ABOVE][Clip.SUBJ]!=0)))
                    {
                        var p= e0.outp[Clip.ABOVE];
                        var q= e1.outp[Clip.ABOVE];
                        var ix= intersect.point.x;
                        var iy= intersect.point.y + yb;

                        var in_clip= ( ( (e0.bundle[Clip.ABOVE][Clip.CLIP]!=0) && !(e0.bside[Clip.CLIP]!=0)) ||
                            ( (e1.bundle[Clip.ABOVE][Clip.CLIP]!=0) &&  (e1.bside[Clip.CLIP]!=0)) ||
                            (!(e0.bundle[Clip.ABOVE][Clip.CLIP]!=0) && !(e1.bundle[Clip.ABOVE][Clip.CLIP]!=0) &&
                                (e0.bside[Clip.CLIP]!=0) && (e1.bside[Clip.CLIP]!=0) ) ) ? 1: 0;

                        var in_subj= ( ( (e0.bundle[Clip.ABOVE][Clip.SUBJ]!=0) && !(e0.bside[Clip.SUBJ]!=0)) ||
                            ( (e1.bundle[Clip.ABOVE][Clip.SUBJ]!=0) &&  (e1.bside[Clip.SUBJ]!=0)) ||
                            (!(e0.bundle[Clip.ABOVE][Clip.SUBJ]!=0) && !(e1.bundle[Clip.ABOVE][Clip.SUBJ]!=0) &&
                                (e0.bside[Clip.SUBJ]!=0) && (e1.bside[Clip.SUBJ]!=0) ) ) ? 1: 0;

                        var tr=0
                        var tl=0;
                        var br=0;
                        var bl=0;
                        /* Determine quadrant occupancies */
                        if( (op == OperationType.GPC_DIFF) || (op == OperationType.GPC_INT) )
                        {
                            tr= ((in_clip!=0) && (in_subj!=0)) ? 1: 0;
                            tl= (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP])!=0) && ((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ])!=0))?1:0;
                            br= (((in_clip ^ e0.bundle[Clip.ABOVE][Clip.CLIP])!=0) && ((in_subj ^ e0.bundle[Clip.ABOVE][Clip.SUBJ])!=0))?1:0;
                            bl= (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP] ^ e0.bundle[Clip.ABOVE][Clip.CLIP])!=0) &&
                                ((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ] ^ e0.bundle[Clip.ABOVE][Clip.SUBJ])!=0) ) ? 1:0;
                        }
                        else if( op == OperationType.GPC_XOR )
                        {
                            tr= in_clip^ in_subj;
                            tl= (in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP]) ^ (in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ]);
                            br= (in_clip ^ e0.bundle[Clip.ABOVE][Clip.CLIP]) ^ (in_subj ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]);
                            bl= (in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP] ^ e0.bundle[Clip.ABOVE][Clip.CLIP])
                                ^ (in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ] ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]);
                        }
                        else if( op == OperationType.GPC_UNION )
                        {
                            tr= ((in_clip!=0) || (in_subj!=0)) ? 1: 0;
                            tl= (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP])!=0) || ((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ])!=0)) ? 1: 0;
                            br= (((in_clip ^ e0.bundle[Clip.ABOVE][Clip.CLIP])!=0) || ((in_subj ^ e0.bundle[Clip.ABOVE][Clip.SUBJ])!=0)) ? 1: 0;
                            bl= (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP] ^ e0.bundle[Clip.ABOVE][Clip.CLIP])!=0) ||
                                ((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ] ^ e0.bundle[Clip.ABOVE][Clip.SUBJ])!=0)) ? 1: 0;
                        }
                        else
                        {
                            //console.log("ERROR : Unknown op type, "+op);
                        }

                        var vclass = VertexType.getType( tr, tl, br, bl );
                        switch (vclass)
                        {
                            case VertexType.EMN:
                                e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
                                e1.outp[Clip.ABOVE] = e0.outp[Clip.ABOVE];
                                break;
                            case VertexType.ERI:
                                if (p != null)
                                {
                                    p.add_right(ix, iy);
                                    e1.outp[Clip.ABOVE]= p;
                                    e0.outp[Clip.ABOVE]= null;
                                }
                                break;
                            case VertexType.ELI:
                                if (q != null)
                                {
                                    q.add_left(ix, iy);
                                    e0.outp[Clip.ABOVE]= q;
                                    e1.outp[Clip.ABOVE]= null;
                                }
                                break;
                            case VertexType.EMX:
                                if ((p!=null) && (q!=null))
                                {
                                    p.add_left( ix, iy);
                                    out_poly.merge_right(p, q);
                                    e0.outp[Clip.ABOVE]= null;
                                    e1.outp[Clip.ABOVE]= null;
                                }
                                break;
                            case VertexType.IMN:
                                e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
                                e1.outp[Clip.ABOVE]= e0.outp[Clip.ABOVE];
                                break;
                            case VertexType.ILI:
                                if (p != null)
                                {
                                    p.add_left(ix, iy);
                                    e1.outp[Clip.ABOVE]= p;
                                    e0.outp[Clip.ABOVE]= null;
                                }
                                break;
                            case VertexType.IRI:
                                if (q!=null)
                                {
                                    q.add_right(ix, iy);
                                    e0.outp[Clip.ABOVE]= q;
                                    e1.outp[Clip.ABOVE]= null;
                                }
                                break;
                            case VertexType.IMX:
                                if ((p!=null) && (q!=null))
                                {
                                    p.add_right(ix, iy);
                                    out_poly.merge_left(p, q);
                                    e0.outp[Clip.ABOVE]= null;
                                    e1.outp[Clip.ABOVE]= null;
                                }
                                break;
                            case VertexType.IMM:
                                if ((p!=null) && (q!=null))
                                {
                                    p.add_right(ix, iy);
                                    out_poly.merge_left(p, q);
                                    e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
                                    e1.outp[Clip.ABOVE]= e0.outp[Clip.ABOVE];
                                }
                                break;
                            case VertexType.EMM:
                                if ((p!=null) && (q!=null))
                                {
                                    p.add_left(ix, iy);
                                    out_poly.merge_right(p, q);
                                    e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
                                    e1.outp[Clip.ABOVE] = e0.outp[Clip.ABOVE];
                                }
                                break;
                            default:
                                break;
                        } /* End of switch */
                    } /* End of contributing intersection conditional */

                    /* Swap bundle sides in response to edge crossing */
                    if (e0.bundle[Clip.ABOVE][Clip.CLIP]!=0)
                        e1.bside[Clip.CLIP] = (e1.bside[Clip.CLIP]==0)?1:0;
                    if (e1.bundle[Clip.ABOVE][Clip.CLIP]!=0)
                        e0.bside[Clip.CLIP]= (e0.bside[Clip.CLIP]==0)?1:0;
                    if (e0.bundle[Clip.ABOVE][Clip.SUBJ]!=0)
                        e1.bside[Clip.SUBJ]= (e1.bside[Clip.SUBJ]==0)?1:0;
                    if (e1.bundle[Clip.ABOVE][Clip.SUBJ]!=0)
                        e0.bside[Clip.SUBJ]= (e0.bside[Clip.SUBJ]==0)?1:0;

                    /* Swap e0 and e1 bundles in the AET */
                    var prev_edge= e0.prev;
                    var next_edge= e1.next;
                    if (next_edge != null)
                    {
                        next_edge.prev = e0;
                    }

                    if (e0.bstate[Clip.ABOVE] == BundleState.BUNDLE_HEAD)
                    {
                        var search= true;
                        while (search)
                        {
                            prev_edge= prev_edge.prev;
                            if (prev_edge != null)
                            {
                                if (prev_edge.bstate[Clip.ABOVE] != BundleState.BUNDLE_TAIL)
                                {
                                    search= false;
                                }
                            }
                            else
                            {
                                search= false;
                            }
                        }
                    }
                    if (prev_edge == null)
                    {
                        aet.top_node.prev = e1;
                        e1.next           = aet.top_node;
                        aet.top_node      = e0.next;
                    }
                    else
                    {
                        prev_edge.next.prev = e1;
                        e1.next             = prev_edge.next;
                        prev_edge.next      = e0.next;
                    }
                    e0.next.prev = prev_edge;
                    e1.next.prev = e1;
                    e0.next      = next_edge;
                    if( Clip.DEBUG )
                    {
                        out_poly.print();
                    }
                } /* End of IT loop*/

                /* Prepare for next scanbeam */
                for ( var edge= aet.top_node; (edge != null); edge = edge.next)
                {
                    var next_edge= edge.next;
                    var succ_edge= edge.succ;
                    if ((edge.top.y == yt) && (succ_edge!=null))
                    {
                        /* Replace AET edge by its successor */
                        succ_edge.outp[Clip.BELOW]= edge.outp[Clip.ABOVE];
                        succ_edge.bstate[Clip.BELOW]= edge.bstate[Clip.ABOVE];
                        succ_edge.bundle[Clip.BELOW][Clip.CLIP]= edge.bundle[Clip.ABOVE][Clip.CLIP];
                        succ_edge.bundle[Clip.BELOW][Clip.SUBJ]= edge.bundle[Clip.ABOVE][Clip.SUBJ];
                        var prev_edge= edge.prev;
                        if ( prev_edge != null )
                            prev_edge.next = succ_edge;
                        else
                            aet.top_node = succ_edge;
                        if (next_edge != null)
                            next_edge.prev= succ_edge;
                        succ_edge.prev = prev_edge;
                        succ_edge.next = next_edge;
                    }
                    else
                    {
                        /* Update this edge */
                        edge.outp[Clip.BELOW]= edge.outp[Clip.ABOVE];
                        edge.bstate[Clip.BELOW]= edge.bstate[Clip.ABOVE];
                        edge.bundle[Clip.BELOW][Clip.CLIP]= edge.bundle[Clip.ABOVE][Clip.CLIP];
                        edge.bundle[Clip.BELOW][Clip.SUBJ]= edge.bundle[Clip.ABOVE][Clip.SUBJ];
                        edge.xb= edge.xt;
                    }
                    edge.outp[Clip.ABOVE]= null;
                }
            }
        } /* === END OF SCANBEAM PROCESSING ================================== */

        /* Generate result polygon from out_poly */
        result = out_poly.getResult(polyClass);
        //console.log("result = "+result);

        return result ;
    }

    static.EQ = function(a, b) {
        return (Math.abs(a - b) <= Clip.GPC_EPSILON);
    }

    static.PREV_INDEX = function( i, n) {
        return ((i - 1+ n) % n);
    }

    static.NEXT_INDEX = function(i, n) {
        return ((i + 1) % n);
    }

    static.OPTIMAL = function ( p, i) {
        return (p.getY(Clip.PREV_INDEX (i, p.getNumPoints())) != p.getY(i)) ||
            (p.getY(Clip.NEXT_INDEX(i, p.getNumPoints())) != p.getY(i)) ;
    }

    static.create_contour_bboxes = function (p)
    {
        var box= [] ;

        /* Construct contour bounding boxes */
        for ( var c= 0; c < p.getNumInnerPoly(); c++)
        {
            var inner_poly= p.getInnerPoly(c);
            box[c] = inner_poly.getBounds();
        }
        return box;
    }

    static.minimax_test = function ( subj, clip, op){
        var s_bbox= Clip.create_contour_bboxes(subj);
        var c_bbox= Clip.create_contour_bboxes(clip);

        var subj_num_poly= subj.getNumInnerPoly();
        var clip_num_poly= clip.getNumInnerPoly();
        var o_table = ArrayHelper.create2DArray(subj_num_poly,clip_num_poly);

        /* Check all subject contour bounding boxes against clip boxes */
        for( var s= 0; s < subj_num_poly; s++ )
        {
            for( var c= 0; c < clip_num_poly ; c++ )
            {
                o_table[s][c] =
                    (!((s_bbox[s].getMaxX() < c_bbox[c].getMinX()) ||
                        (s_bbox[s].getMinX() > c_bbox[c].getMaxX()))) &&
                    (!((s_bbox[s].getMaxY() < c_bbox[c].getMinY()) ||
                        (s_bbox[s].getMinY() > c_bbox[c].getMaxY())));
            }
        }

        /* For each clip contour, search for any subject contour overlaps */
        for( var c= 0; c < clip_num_poly; c++ )
        {
            var overlap= false;
            for( var s= 0; !overlap && (s < subj_num_poly) ; s++)
            {
                overlap = o_table[s][c];
            }
            if (!overlap)
            {
                clip.setContributing( c, false ); // Flag non contributing status
            }
        }

        if (op == OperationType.GPC_INT)
        {
            /* For each subject contour, search for any clip contour overlaps */
            for ( var s= 0; s < subj_num_poly; s++)
            {
                var overlap= false;
                for ( var c= 0; !overlap && (c < clip_num_poly); c++)
                {
                    overlap = o_table[s][c];
                }
                if (!overlap)
                {
                    subj.setContributing( s, false ); // Flag non contributing status
                }
            }
        }
    }

    static.bound_list = function( lmt_table, y) {
        if( lmt_table.top_node == null )
        {
            lmt_table.top_node = new LmtNode(y);
            return lmt_table.top_node ;
        }
        else
        {
            var prev= null ;
            var node= lmt_table.top_node ;
            var done= false ;
            while( !done )
            {
                if( y < node.y )
                {
                    /* Insert a new LMT node before the current node */
                    var existing_node= node ;
                    node = new LmtNode(y);
                    node.next = existing_node ;
                    if( prev == null )
                    {
                        lmt_table.top_node = node ;
                    }
                    else
                    {
                        prev.next = node ;
                    }
                    //               if( existing_node == lmt_table.top_node )
                    //               {
                    //                  lmt_table.top_node = node ;
                    //               }
                    done = true ;
                }
                else if ( y > node.y )
                {
                    /* Head further up the LMT */
                    if( node.next == null )
                    {
                        node.next = new LmtNode(y);
                        node = node.next ;
                        done = true ;
                    }
                    else
                    {
                        prev = node ;
                        node = node.next ;
                    }
                }
                else
                {
                    /* Use this existing LMT node */
                    done = true ;
                }
            }
            return node ;
        }
    }

    static.insert_bound = function ( lmt_node, e) {
        if( lmt_node.first_bound == null )
        {
            /* Link node e to the tail of the list */
            lmt_node.first_bound = e ;
        }
        else
        {
            var done= false ;
            var prev_bound= null ;
            var current_bound= lmt_node.first_bound ;
            while( !done )
            {
                /* Do primary sort on the x field */
                if (e.bot.x <  current_bound.bot.x)
                {
                    /* Insert a new node mid-list */
                    if( prev_bound == null )
                    {
                        lmt_node.first_bound = e ;
                    }
                    else
                    {
                        prev_bound.next_bound = e ;
                    }
                    e.next_bound = current_bound ;

                    //               EdgeNode existing_bound = current_bound ;
                    //               current_bound = e ;
                    //               current_bound.next_bound = existing_bound ;
                    //               if( lmt_node.first_bound == existing_bound )
                    //               {
                    //                  lmt_node.first_bound = current_bound ;
                    //               }
                    done = true ;
                }
                else if (e.bot.x == current_bound.bot.x)
                {
                    /* Do secondary sort on the dx field */
                    if (e.dx < current_bound.dx)
                    {
                        /* Insert a new node mid-list */
                        if( prev_bound == null )
                        {
                            lmt_node.first_bound = e ;
                        }
                        else
                        {
                            prev_bound.next_bound = e ;
                        }
                        e.next_bound = current_bound ;
                        //                  EdgeNode existing_bound = current_bound ;
                        //                  current_bound = e ;
                        //                  current_bound.next_bound = existing_bound ;
                        //                  if( lmt_node.first_bound == existing_bound )
                        //                  {
                        //                     lmt_node.first_bound = current_bound ;
                        //                  }
                        done = true ;
                    }
                    else
                    {
                        /* Head further down the list */
                        if( current_bound.next_bound == null )
                        {
                            current_bound.next_bound = e ;
                            done = true ;
                        }
                        else
                        {
                            prev_bound = current_bound ;
                            current_bound = current_bound.next_bound ;
                        }
                    }
                }
                else
                {
                    /* Head further down the list */
                    if( current_bound.next_bound == null )
                    {
                        current_bound.next_bound = e ;
                        done = true ;
                    }
                    else
                    {
                        prev_bound = current_bound ;
                        current_bound = current_bound.next_bound ;
                    }
                }
            }
        }
    }

    static.add_edge_to_aet = function ( aet, edge) {
        if ( aet.top_node == null )
        {
            /* Append edge onto the tail end of the AET */
            aet.top_node = edge;
            edge.prev = null ;
            edge.next= null;
        }
        else
        {
            var current_edge= aet.top_node ;
            var prev= null ;
            var done= false ;
            while( !done )
            {
                /* Do primary sort on the xb field */
                if (edge.xb < current_edge.xb)
                {
                    /* Insert edge here (before the AET edge) */
                    edge.prev= prev;
                    edge.next= current_edge ;
                    current_edge.prev = edge ;
                    if( prev == null )
                    {
                        aet.top_node = edge ;
                    }
                    else
                    {
                        prev.next = edge ;
                    }
                    //               if( current_edge == aet.top_node )
                    //               {
                    //                  aet.top_node = edge ;
                    //               }
                    //               current_edge = edge ;
                    done = true;
                }
                else if (edge.xb == current_edge.xb)
                {
                    /* Do secondary sort on the dx field */
                    if (edge.dx < current_edge.dx)
                    {
                        /* Insert edge here (before the AET edge) */
                        edge.prev= prev;
                        edge.next= current_edge ;
                        current_edge.prev = edge ;
                        if( prev == null )
                        {
                            aet.top_node = edge ;
                        }
                        else
                        {
                            prev.next = edge ;
                        }
                        //                  if( current_edge == aet.top_node )
                        //                  {
                        //                     aet.top_node = edge ;
                        //                  }
                        //                  current_edge = edge ;
                        done = true;
                    }
                    else
                    {
                        /* Head further into the AET */
                        prev = current_edge ;
                        if( current_edge.next == null )
                        {
                            current_edge.next = edge ;
                            edge.prev = current_edge ;
                            edge.next = null ;
                            done = true ;
                        }
                        else
                        {
                            current_edge = current_edge.next ;
                        }
                    }
                }
                else
                {
                    /* Head further into the AET */
                    prev = current_edge ;
                    if( current_edge.next == null )
                    {
                        current_edge.next = edge ;
                        edge.prev = current_edge ;
                        edge.next = null ;
                        done = true ;
                    }
                    else
                    {
                        current_edge = current_edge.next ;
                    }
                }
            }
        }
    }

    static.add_to_sbtree = function ( sbte, y) {
        if( sbte.sb_tree == null )
        {
            /* Add a new tree node here */
            sbte.sb_tree = new ScanBeamTree( y );
            sbte.sbt_entries++ ;
            return ;
        }
        var tree_node= sbte.sb_tree ;
        var done= false ;
        while( !done )
        {
            if ( tree_node.y > y)
            {
                if( tree_node.less == null )
                {
                    tree_node.less = new ScanBeamTree(y);
                    sbte.sbt_entries++ ;
                    done = true ;
                }
                else
                {
                    tree_node = tree_node.less ;
                }
            }
            else if ( tree_node.y < y)
            {
                if( tree_node.more == null )
                {
                    tree_node.more = new ScanBeamTree(y);
                    sbte.sbt_entries++ ;
                    done = true ;
                }
                else
                {
                    tree_node = tree_node.more ;
                }
            }
            else
            {
                done = true ;
            }
        }
    }


    static.build_lmt = function( lmt_table,
                                 sbte,
                                 p,
                                 type, //poly type SUBJ/Clip.CLIP
                                 op) {
        /* Create the entire input polygon edge table in one go */
        var edge_table= new EdgeTable();

        for ( var c= 0; c < p.getNumInnerPoly(); c++)
        {
            var ip= p.getInnerPoly(c);
            if( !ip.isContributing(0) )
            {
                /* Ignore the non-contributing contour */
                ip.setContributing(0, true);
            }
            else
            {


                /* Perform contour optimisation */
                var num_vertices= 0;
                var e_index= 0;
                edge_table = new EdgeTable();
                for ( var i= 0; i < ip.getNumPoints(); i++)
                {
                    if( Clip.OPTIMAL(ip, i) )
                    {
                        var x= ip.getX(i);
                        var y= ip.getY(i);
                        edge_table.addNode( x, y );

                        /* Record vertex in the scanbeam table */
                        Clip.add_to_sbtree( sbte, ip.getY(i) );

                        num_vertices++;
                    }
                }

                /* Do the contour forward pass */

                for ( var min= 0; min < num_vertices; min++)
                {
                    /* If a forward local minimum... */
                    if( edge_table.FWD_MIN( min ) )
                    {
                        /* Search for the next local maximum... */
                        var num_edges= 1;
                        var max= Clip.NEXT_INDEX( min, num_vertices );
                        while( edge_table.NOT_FMAX( max ) )
                        {
                            num_edges++;
                            max = Clip.NEXT_INDEX( max, num_vertices );
                        }

                        /* Build the next edge list */
                        var v= min;
                        var e= edge_table.getNode( e_index );
                        e.bstate[Clip.BELOW] = BundleState.UNBUNDLED;
                        e.bundle[Clip.BELOW][Clip.CLIP] = 0;
                        e.bundle[Clip.BELOW][Clip.SUBJ] = 0;

                        for ( var i= 0; i < num_edges; i++)
                        {
                            var ei= edge_table.getNode( e_index+i );
                            var ev= edge_table.getNode( v );

                            ei.xb    = ev.vertex.x;
                            ei.bot.x = ev.vertex.x;
                            ei.bot.y = ev.vertex.y;

                            v = Clip.NEXT_INDEX(v, num_vertices);
                            ev = edge_table.getNode( v );

                            ei.top.x= ev.vertex.x;
                            ei.top.y= ev.vertex.y;
                            ei.dx= (ev.vertex.x - ei.bot.x) / (ei.top.y - ei.bot.y);
                            ei.type = type;
                            ei.outp[Clip.ABOVE] = null ;
                            ei.outp[Clip.BELOW] = null;
                            ei.next = null;
                            ei.prev = null;
                            ei.succ = ((num_edges > 1) && (i < (num_edges - 1))) ? edge_table.getNode(e_index+i+1) : null;
                            ei.pred = ((num_edges > 1) && (i > 0)) ? edge_table.getNode(e_index+i-1) : null ;
                            ei.next_bound = null ;
                            ei.bside[Clip.CLIP] = (op == OperationType.GPC_DIFF) ? Clip.RIGHT : Clip.LEFT;
                            ei.bside[Clip.SUBJ] = Clip.LEFT ;
                        }
                        Clip.insert_bound( Clip.bound_list(lmt_table, edge_table.getNode(min).vertex.y), e);
                        if( Clip.DEBUG )
                        {
                            //console.log("fwd");
                            lmt_table.print();
                        }
                        e_index += num_edges;
                    }
                }

                /* Do the contour reverse pass */
                for ( var min= 0; min < num_vertices; min++)
                {
                    /* If a reverse local minimum... */
                    if ( edge_table.REV_MIN( min ) )
                    {
                        /* Search for the previous local maximum... */
                        var num_edges= 1;
                        var max= Clip.PREV_INDEX(min, num_vertices);
                        while( edge_table.NOT_RMAX( max ) )
                        {
                            num_edges++;
                            max = Clip.PREV_INDEX(max, num_vertices);
                        }

                        /* Build the previous edge list */
                        var v= min;
                        var e= edge_table.getNode( e_index );
                        e.bstate[Clip.BELOW] = BundleState.UNBUNDLED;
                        e.bundle[Clip.BELOW][Clip.CLIP] = 0;
                        e.bundle[Clip.BELOW][Clip.SUBJ] = 0;

                        for (var i= 0; i < num_edges; i++)
                        {
                            var ei= edge_table.getNode( e_index+i );
                            var ev= edge_table.getNode( v );

                            ei.xb    = ev.vertex.x;
                            ei.bot.x = ev.vertex.x;
                            ei.bot.y = ev.vertex.y;

                            v= Clip.PREV_INDEX(v, num_vertices);
                            ev = edge_table.getNode( v );

                            ei.top.x = ev.vertex.x;
                            ei.top.y = ev.vertex.y;
                            ei.dx = (ev.vertex.x - ei.bot.x) / (ei.top.y - ei.bot.y);
                            ei.type = type;
                            ei.outp[Clip.ABOVE] = null;
                            ei.outp[Clip.BELOW] = null;
                            ei.next = null ;
                            ei.prev = null;
                            ei.succ = ((num_edges > 1) && (i < (num_edges - 1))) ? edge_table.getNode(e_index+i+1) : null;
                            ei.pred = ((num_edges > 1) && (i > 0)) ? edge_table.getNode(e_index+i-1) : null ;
                            ei.next_bound = null ;
                            ei.bside[Clip.CLIP] = (op == OperationType.GPC_DIFF) ? Clip.RIGHT : Clip.LEFT;
                            ei.bside[Clip.SUBJ] = Clip.LEFT;
                        }
                        Clip.insert_bound( Clip.bound_list(lmt_table, edge_table.getNode(min).vertex.y), e);
                        if( Clip.DEBUG )
                        {
                            //console.log("rev");
                            lmt_table.print();
                        }
                        e_index+= num_edges;
                    }
                }
            }
        }
        return edge_table;
    }


    static.add_st_edge = function( st, it, edge, dy) {
        if (st == null)
        {
            /* Append edge onto the tail end of the ST */
            st = new StNode( edge, null );
        }
        else
        {
            var den= (st.xt - st.xb) - (edge.xt - edge.xb);

            /* If new edge and ST edge don't cross */
            if( (edge.xt >= st.xt) || (edge.dx == st.dx) || (Math.abs(den) <= Clip.GPC_EPSILON))
            {
                /* No intersection - insert edge here (before the ST edge) */
                var existing_node= st;
                st = new StNode( edge, existing_node );
            }
            else
            {
                /* Compute intersection between new edge and ST edge */
                var r= (edge.xb - st.xb) / den;
                var x= st.xb + r * (st.xt - st.xb);
                var y= r * dy;

                /* Insert the edge pointers and the intersection point in the IT */
                it.top_node = Clip.add_intersection(it.top_node, st.edge, edge, x, y);

                /* Head further into the ST */
                st.prev = Clip.add_st_edge(st.prev, it, edge, dy);
            }
        }
        return st ;
    }



    static.add_intersection = function ( it_node,
                                         edge0,
                                         edge1,
                                         x,
                                         y) {
        if (it_node == null)
        {
            /* Append a new node to the tail of the list */
            it_node = new ItNode( edge0, edge1, x, y, null );
        }
        else
        {
            if ( it_node.point.y > y)
            {
                /* Insert a new node mid-list */
                var existing_node= it_node ;
                it_node = new ItNode( edge0, edge1, x, y, existing_node );
            }
            else
            {
                /* Head further down the list */
                it_node.next = Clip.add_intersection( it_node.next, edge0, edge1, x, y);
            }
        }
        return it_node ;
    }


/////////// AetTree ////////////////////////////////////
    gpcas.geometry.AetTree = function(){
        this.top_node = null; //EdgeNode
    };
    gpcas.geometry.AetTree.prototype.print = function() {
        //console.log("aet");
        for( var edge= this.top_node ; (edge != null) ; edge = edge.next ) {
            //console.log("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
        }
    }


///////////////  BundleState  //////////////////////////////
    gpcas.geometry.BundleState = function(state){
        this.m_State = state ; //String
    };
    gpcas.geometry.BundleState.UNBUNDLED = new gpcas.geometry.BundleState("UNBUNDLED");
    gpcas.geometry.BundleState.BUNDLE_HEAD = new gpcas.geometry.BundleState("BUNDLE_HEAD");
    gpcas.geometry.BundleState.BUNDLE_TAIL = new gpcas.geometry.BundleState("BUNDLE_TAIL");
    gpcas.geometry.BundleState.prototype.toString = function() {
        return this.m_State;
    };

/////////////// EdgeNode ////////////////////////////
    gpcas.geometry.EdgeNode = function(){
        this.vertex= new Point(); /* Piggy-backed contour vertex data  */
        this.bot= new Point(); /* Edge lower (x, y) coordinate      */
        this.top= new Point(); /* Edge upper (x, y) coordinate      */
        this.xb;           /* Scanbeam bottom x coordinate      */
        this.xt;           /* Scanbeam top x coordinate         */
        this.dx;           /* Change in x for a unit y increase */
        this.type;         /* Clip / subject edge flag          */
        this.bundle = ArrayHelper.create2DArray(2,2);      /* Bundle edge flags                 */
        this.bside= [];         /* Bundle left / right indicators    */
        this.bstate= []; /* Edge bundle state                 */
        this.outp= []; /* Output polygon / tristrip pointer */
        this.prev;         /* Previous edge in the AET          */
        this.next;         /* Next edge in the AET              */
        this.pred;         /* Edge connected at the lower end   */
        this.succ;         /* Edge connected at the upper end   */
        this.next_bound;   /* Pointer to next bound in LMT      */
    };



////////////////   EdgeTable /////////////////////////////////////////


    gpcas.geometry.EdgeTable = function() {
        this.m_List = new ArrayList();
    };
    gpcas.geometry.EdgeTable.prototype.addNode = function(x,y){
        var node= new EdgeNode();
        node.vertex.x = x ;
        node.vertex.y = y ;
        this.m_List.add( node );

    }
    gpcas.geometry.EdgeTable.prototype.getNode = function (index) {
        return this.m_List.get(index);
    }
    gpcas.geometry.EdgeTable.prototype.FWD_MIN = function(i) {
        var m_List = this.m_List;

        var prev= (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
        var next= (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
        var ith= (m_List.get(i));

        return ((prev.vertex.y >= ith.vertex.y) &&
            (next.vertex.y >  ith.vertex.y));
    }
    gpcas.geometry.EdgeTable.prototype.NOT_FMAX = function ( i) {
        var m_List = this.m_List;

        var next= (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
        var ith= (m_List.get(i));
        return(next.vertex.y > ith.vertex.y);
    }
    gpcas.geometry.EdgeTable.prototype.REV_MIN = function ( i) {
        var m_List = this.m_List;

        var prev= (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
        var next= (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
        var ith= (m_List.get(i));
        return ((prev.vertex.y >  ith.vertex.y) && (next.vertex.y >= ith.vertex.y));
    }
    gpcas.geometry.EdgeTable.prototype.NOT_RMAX = function (i) {
        var m_List = this.m_List;

        var prev= (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
        var ith= (m_List.get(i));
        return (prev.vertex.y > ith.vertex.y) ;
    }


/////////////////////   HState   //////////////////////////////////////
    gpcas.geometry.HState = function(){};
    gpcas.geometry.HState.NH = 0; /* No horizontal edge                */
    gpcas.geometry.HState.BH = 1; /* Bottom horizontal edge            */
    gpcas.geometry.HState.TH = 2; /* Top horizontal edge               */

    var NH = gpcas.geometry.HState.NH;
    var BH = gpcas.geometry.HState.BH;
    var TH = gpcas.geometry.HState.TH;

    /* Horizontal edge state transitions within scanbeam boundary */
    gpcas.geometry.HState.next_h_state =
        [
            /*        ABOVE     BELOW     CROSS */
            /*        L   R     L   R     L   R */
            /* NH */ [BH, TH,   TH, BH,   NH, NH],
            /* BH */ [NH, NH,   NH, NH,   TH, TH],
            /* TH */ [NH, NH,   NH, NH,   BH, BH]
        ];



///////////////////////    	  IntersectionPoint /////////////////////////////
    gpcas.geometry.IntersectionPoint = function(p1,p2,p3){
        this.polygonPoint1 = p1; /* of Point */;
        this.polygonPoint2 = p2;  /* of Point */;
        this.intersectionPoint = p3 ;
    };
    gpcas.geometry.IntersectionPoint.prototype.toString = function (){
        return "P1 :"+polygonPoint1.toString()+" P2:"+polygonPoint2.toString()+" IP:"+intersectionPoint.toString();
    }


///////////////////////////    ItNode   ///////////////
    gpcas.geometry.ItNode = function(edge0, edge1, x, y, next){
        this.ie= [];     /* Intersecting edge (bundle) pair   */
        this.point= new Point(x,y); /* Point of intersection             */
        this.next=next;                         /* The next intersection table node  */

        this.ie[0] = edge0 ;
        this.ie[1] = edge1 ;

    };


///////////////////////////    ItNodeTable   ///////////////
    gpcas.geometry.ItNodeTable = function(){
        this.top_node;
    }
    gpcas.geometry.ItNodeTable.prototype.build_intersection_table = function (aet, dy) {
        var st= null ;

        /* Process each AET edge */
        for (var edge= aet.top_node ; (edge != null); edge = edge.next)
        {
            if( (edge.bstate[Clip.ABOVE] == BundleState.BUNDLE_HEAD) ||
                (edge.bundle[Clip.ABOVE][Clip.CLIP] != 0) ||
                (edge.bundle[Clip.ABOVE][Clip.SUBJ] != 0) )
            {
                st = Clip.add_st_edge(st, this, edge, dy);
            }


        }
    }

////////////// Line //////////////////////////
    gpcas.geometry.Line = function(){
        this.start;
        this.end;
    }

////////////   LineHelper /////////////////////

    gpcas.geometry.LineHelper = function(){};
    gpcas.geometry.LineHelper.equalPoint = function (p1,p2){
        return ((p1[0]==p2[0])&&(p1[1]==p2[1]));
    }
    gpcas.geometry.LineHelper.equalVertex = function(s1,e1,s2,e2) {
        return (
            ((gpcas.geometry.LineHelper.equalPoint(s1,s2))&&(gpcas.geometry.LineHelper.equalPoint(e1,e2)))
            ||
            ((gpcas.geometry.LineHelper.equalPoint(s1,e2))&&(gpcas.geometry.LineHelper.equalPoint(e1,s2)))
            );
    }
    gpcas.geometry.LineHelper.distancePoints = function(p1, p2){
        return Math.sqrt((p2[0]-p1[0])*(p2[0]-p1[0]) + (p2[1]-p1[1])*(p2[1]-p1[1]));
    }
    gpcas.geometry.LineHelper.clonePoint = function(p){
        return [p[0],p[1]];
    }
    gpcas.geometry.LineHelper.cloneLine = function(line){
        var res  = [];
        for (var i = 0; i<line.length; i++){
            res[i]=[line[i][0],line[i][1]];
        }
        return res;
    }
    gpcas.geometry.LineHelper.addLineToLine = function(line1,line2) {
        for (var i = 0; i<line2.length; i++){
            line1.push(clonePoint(line2[i]));
        }
    }
    gpcas.geometry.LineHelper.roundPoint = function(p) {
        p[0]=Math.round(p[0]);
        p[1]=Math.round(p[1]);
    }
//---------------------------------------------------------------
//Checks for intersection of Segment if as_seg is true.
//Checks for intersection of Line if as_seg is false.
//Return intersection of Segment "AB" and Segment "EF" as a Point
//Return null if there is no intersection
//---------------------------------------------------------------
    gpcas.geometry.LineHelper.lineIntersectLine = function(A,B,E,F,as_seg)
    {
        if(as_seg == null) as_seg = true;
        var ip;
        var a1;
        var a2;
        var b1;
        var b2;
        var c1;
        var c2;

        a1= B.y-A.y;
        b1= A.x-B.x;
        c1= B.x*A.y - A.x*B.y;
        a2= F.y-E.y;
        b2= E.x-F.x;
        c2= F.x*E.y - E.x*F.y;

        var denom=a1*b2 - a2*b1;
        if(denom == 0){
            return null;
        }
        ip=new Point();
        ip.x=(b1*c2 - b2*c1)/denom;
        ip.y=(a2*c1 - a1*c2)/denom;

        //---------------------------------------------------
        //Do checks to see if intersection to endpoints
        //distance is longer than actual Segments.
        //Return null if it is with any.
        //---------------------------------------------------
        if(as_seg){
            if(Math.pow((ip.x - B.x) + (ip.y - B.y), 2) > Math.pow((A.x - B.x) + (A.y - B.y), 2)){
                return null;
            }
            if(Math.pow((ip.x - A.x) + (ip.y - A.y), 2) > Math.pow((A.x - B.x) + (A.y - B.y), 2)){
                return null;
            }

            if(Math.pow((ip.x - F.x) + (ip.y - F.y), 2) > Math.pow((E.x - F.x) + (E.y - F.y), 2)){
                return null;
            }
            if(Math.pow((ip.x - E.x) + (ip.y - E.y), 2) > Math.pow((E.x - F.x) + (E.y - F.y), 2)){
                return null;
            }
        }
        return new Point(Math.round(ip.x),Math.round(ip.y));
    }


//////////////  LineIntersection  ///////////////////////
    gpcas.geometry.LineIntersection = function(){};
    gpcas.geometry.LineIntersection.iteratePoints = function(points, s1, s2,e1,e2) {
        var direction=true;
        var pl = points.length;
        var s1Ind = points.indexOf(s1);
        var s2Ind = points.indexOf(s2);
        var start = s1Ind;

        if (s2Ind>s1Ind) direction=false;
        var newPoints  = [];
        var point  ;

        if (direction){
            for (var i =0; i<pl; i++){
                point=(i+start<pl)?points[i+start]:points[i+start-pl];
                newPoints.push(point);
                if ((equals(point, e1))||(equals(point, e2))){
                    break;
                }
            }
        } else {
            for (var i =pl; i>=0; i--){
                point=(i+start<pl)?points[i+start]:points[i+start-pl];
                newPoints.push(point);
                if ((equals(point, e1))||(equals(point, e2))){
                    break;
                }
            }
        }

        return newPoints;
    }

    gpcas.geometry.LineIntersection.intersectPoly = function(poly, line /* of Points */){
        var res = [];
        var numPoints = poly.getNumPoints();

        //points
        var ip ;
        var p1 ;
        var p2 ;
        var p3 ;
        var p4 ;
        var firstIntersection  = null;
        var lastIntersection   = null;
        var firstIntersectionLineIndex=-1;
        var lastIntersectionLineIndex=-1;
        var firstFound  = false;

        for (var i  = 1; i<line.length; i++){
            p1=line[i-1];
            p2=line[i];
            var maxDist  = 0;
            var minDist	 = Number.MAX_VALUE;
            var dist  = -1;
            for (var j  = 0; j<numPoints; j++){
                p3=poly.getPoint(j==0?numPoints-1:j-1);
                p4=poly.getPoint(j);
                if ((ip=LineHelper.lineIntersectLine(p1,p2,p3,p4))!=null){
                    dist=Point.distance(ip,p2);

                    if ((dist>maxDist)&&(!firstFound)){
                        maxDist=dist;
                        firstIntersection=new IntersectionPoint(p3,p4,ip);
                        firstIntersectionLineIndex=i;
                    }
                    if (dist<minDist){
                        minDist=dist;
                        lastIntersection=new IntersectionPoint(p3,p4,ip);
                        lastIntersectionLineIndex=i-1;
                    }
                }
            }
            firstFound=(firstIntersection!=null);
        }
        /*
         Alert.show(firstIntersection.toString());
         Alert.show(lastIntersection.toString());*/
        if ((firstIntersection!=null)&&(lastIntersection!=null)){
            var newLine /* of Point */ = [];
            newLine[0]=firstIntersection.intersectionPoint;
            var j  = 1;
            for (var i = firstIntersectionLineIndex; i<=lastIntersectionLineIndex; i++){
                newLine[j++] = line[i];
            }
            newLine[newLine.length-1]=lastIntersection.intersectionPoint;
            if (
                (
                    (equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint1))&&
                    (equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint2))
                    )||
                (
                    (equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint2))&&
                    (equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint1))
                    )
                ){
                var poly1 = new PolySimple();
                poly1.add(newLine);
                var finPoly1  = poly.intersection(poly1);
                var finPoly2  = poly.xor(poly1);
                if ((checkPoly(finPoly1))&&(checkPoly(finPoly2))){
                    return [finPoly1,finPoly2];
                }
            } else {
                var points1 = iteratePoints(poly.getPoints(),firstIntersection.polygonPoint1,firstIntersection.polygonPoint2, lastIntersection.polygonPoint1, lastIntersection.polygonPoint2);
                points1=points1.concat(newLine.reverse());
                var points2 = iteratePoints(poly.getPoints(),firstIntersection.polygonPoint2,firstIntersection.polygonPoint1, lastIntersection.polygonPoint1, lastIntersection.polygonPoint2);
                points2=points2.concat(newLine);
                var poly1  = new PolySimple();
                poly1.add(points1);
                var poly2  = new PolySimple();
                poly2.add(points2);
                var finPoly1  = poly.intersection(poly1);
                var finPoly2  = poly.intersection(poly2);

                if ((checkPoly(finPoly1))&&(checkPoly(finPoly2))){
                    return [finPoly1,finPoly2];
                }
            }
        }
        return null;
    }
    gpcas.geometry.LineIntersection.checkPoly = function(poly) {
        var noHoles =0;
        for (var i  = 0; i<poly.getNumInnerPoly(); i++){
            var innerPoly  = poly.getInnerPoly(i);
            if (innerPoly.isHole()){
                return false;
            } else {
                noHoles++;
            }
            if (noHoles>1) return false;
        }
        return true;
    }


///////////  LmtNode //////////////////////////

    gpcas.geometry.LmtNode = function(yvalue) {
        this.y = yvalue;            /* Y coordinate at local minimum     */
        this.first_bound;  /* Pointer to bound list             */
        this.next;         /* Pointer to next local minimum     */
    };

////////////// LmtTable ///////////////

    gpcas.geometry.LmtTable = function(){
        this.top_node;
    };
    gpcas.geometry.LmtTable.prototype.print = function() {
        var n= 0;
        var lmt= this.top_node ;
        while( lmt != null )
        {
            //console.log("lmt("+n+")");
            for( var edge= lmt.first_bound ; (edge != null) ; edge = edge.next_bound )
            {
                //console.log("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
            }
            n++ ;
            lmt = lmt.next ;
        }
    }

/////////////   OperationType //////////////////////////////////
    gpcas.geometry.OperationType = function(type){
        this.m_Type = type;
    }
    gpcas.geometry.OperationType.GPC_DIFF= new gpcas.geometry.OperationType( "Difference" );
    gpcas.geometry.OperationType.GPC_INT= new gpcas.geometry.OperationType( "Intersection" );
    gpcas.geometry.OperationType.GPC_XOR= new gpcas.geometry.OperationType( "Exclusive or" );
    gpcas.geometry.OperationType.GPC_UNION= new gpcas.geometry.OperationType( "Union" );

//////////// Poly  /////////////////////
// ---> an interface


/////////////// PolyDefault  /////////////////////
    /**
     * <code>PolyDefault</code> is a default <code>Poly</code> implementation.
     * It provides support for both complex and simple polygons.  A <i>complex polygon</i>
     * is a polygon that consists of more than one polygon.  A <i>simple polygon</i> is a
     * more traditional polygon that contains of one inner polygon and is just a
     * collection of points.
     * <p>
     * <b>Implementation Note:</b> If a point is added to an empty <code>PolyDefault</code>
     * object, it will create an inner polygon of type <code>PolySimple</code>.
     *
     * @see PolySimple
     *
     * @author  Dan Bridenbecker, Solution Engineering, Inc.
     */
    gpcas.geometry.PolyDefault = function(isHole) {
        if(isHole == null) isHole = false;

        /**
         * Only applies to the first poly and can only be used with a poly that contains one poly
         */
        this.m_IsHole= isHole ;
        this.m_List= new ArrayList();
    }
    /**
     * Return true if the given object is equal to this one.
     */
    gpcas.geometry.PolyDefault.prototype.equals = function ( obj) {
        if(!(obj instanceof PolyDefault)){
            return false;
        }
        var that = obj;

        if( this.m_IsHole != that.m_IsHole ) return false ;
        if( !equals(this.m_List, that.m_List ) ) return false ;

        return true ;
    }
    /**
     * Return the hashCode of the object.
     *
     * @return an integer value that is the same for two objects
     * whenever their internal representation is the same (equals() is true)
     **/
    gpcas.geometry.PolyDefault.prototype.hashCode = function () {
        var m_List = this.m_List;

        var result= 17;
        result = 37*result + m_List.hashCode();
        return result;
    }
    /**
     * Remove all of the points.  Creates an empty polygon.
     */
    gpcas.geometry.PolyDefault.prototype.clear = function() {
        this.m_List.clear();
    }

    gpcas.geometry.PolyDefault.prototype.add = function(arg0,arg1) {
        var args = [];

        args[0] = arg0;
        if(arg1) {
            args[1] = arg1;
        }
        if (args.length==2){
            this.addPointXY(args[0], args[1]);
        } else if (args.length==1){
            if (args[0] instanceof Point){
                this.addPoint(args[0]);
            } else if (args[0] instanceof gpcas.geometry.PolySimple){
                this.addPoly(args[0]);
            } else if (args[0] instanceof Array){
                var arr  = args[0];
                if ((arr.length==2)&&(arr[0] instanceof Number)&&(arr[1] instanceof Number)){
                    this.add(arr[0] ,arr[1] )
                } else {
                    for(var i=0; i<args[0].length ; i++) {
                        this.add(args[0][i]);
                    }
                }
            }
        }
    }
    /**
     * Add a point to the first inner polygon.
     * <p>
     * <b>Implementation Note:</b> If a point is added to an empty PolyDefault object,
     * it will create an inner polygon of type <code>PolySimple</code>.
     */
    gpcas.geometry.PolyDefault.prototype.addPointXY = function(x, y) {
        this.addPoint(new Point( x, y ));
    }
    /**
     * Add a point to the first inner polygon.
     * <p>
     * <b>Implementation Note:</b> If a point is added to an empty PolyDefault object,
     * it will create an inner polygon of type <code>PolySimple</code>.
     */
    gpcas.geometry.PolyDefault.prototype.addPoint = function( p) {


        var m_List = this.m_List;

        if( m_List.size() == 0)
        {
            m_List.add(new PolySimple());
        }
        (m_List.get(0)).addPoint(p);
    }
    /**
     * Add an inner polygon to this polygon - assumes that adding polygon does not
     * have any inner polygons.
     *
     * @throws IllegalStateException if the number of inner polygons is greater than
     * zero and this polygon was designated a hole.  This would break the assumption
     * that only simple polygons can be holes.
     */
    gpcas.geometry.PolyDefault.prototype.addPoly = function( p) {

        var m_IsHole = this.m_IsHole;
        var m_List = this.m_List;

        if( (m_List.size() > 0) && m_IsHole )
        {
            alert("ERROR : Cannot add polys to something designated as a hole.");
        }
        m_List.add( p );
    }
    /**
     * Return true if the polygon is empty
     */
    gpcas.geometry.PolyDefault.prototype.isEmpty = function() {
        return this.m_List.isEmpty();
    }
    /**
     * Returns the bounding rectangle of this polygon.
     * <strong>WARNING</strong> Not supported on complex polygons.
     */
    gpcas.geometry.PolyDefault.prototype.getBounds = function () {
        var m_List = this.m_List;
        if( m_List.size() == 0)
        {
            return new Rectangle();
        }
        else if( m_List.size() == 1)
        {
            var ip= this.getInnerPoly(0);
            return ip.getBounds();
        }
        else
        {
            console.log("getBounds not supported on complex poly.");
        }
    }
    /**
     * Returns the polygon at this index.
     */
    gpcas.geometry.PolyDefault.prototype.getInnerPoly = function(polyIndex) {
        return this.m_List.get(polyIndex);
    }
    /**
     * Returns the number of inner polygons - inner polygons are assumed to return one here.
     */
    gpcas.geometry.PolyDefault.prototype.getNumInnerPoly = function() {
        var m_List = this.m_List;
        return m_List.size();
    }
    /**
     * Return the number points of the first inner polygon
     */
    gpcas.geometry.PolyDefault.prototype.getNumPoints = function () {
        return (this.m_List.get(0)).getNumPoints() ;
    }

    /**
     * Return the X value of the point at the index in the first inner polygon
     */
    gpcas.geometry.PolyDefault.prototype.getX = function(index) {
        return (this.m_List.get(0)).getX(index) ;
    }
    gpcas.geometry.PolyDefault.prototype.getPoint = function(index){
        return (this.m_List.get(0)).getPoint(index) ;
    }

    gpcas.geometry.PolyDefault.prototype.getPoints = function(){
        return (this.m_List.get(0)).getPoints();
    }


    gpcas.geometry.PolyDefault.prototype.isPointInside = function (point) {
        var m_List = this.m_List;
        if (!(m_List.get(0)).isPointInside(point)) return false;

        for (var i  = 0; i<m_List.size(); i++){
            var poly  = m_List.get(i);
            if ((poly.isHole())&&(poly.isPointInside(point))) return false;
        }
        return true;
    }
    /**
     * Return the Y value of the point at the index in the first inner polygon
     */
    gpcas.geometry.PolyDefault.prototype.getY = function (index) {
        var m_List = this.m_List;
        return (m_List.get(0)).getY(index) ;
    }

    /**
     * Return true if this polygon is a hole.  Holes are assumed to be inner polygons of
     * a more complex polygon.
     *
     * @throws IllegalStateException if called on a complex polygon.
     */
    gpcas.geometry.PolyDefault.prototype.isHole = function () {
        var m_List = this.m_List;
        var m_IsHole = this.m_IsHole;

        if( m_List.size() > 1)
        {
            alert( "Cannot call on a poly made up of more than one poly." );
        }
        return m_IsHole ;
    }

    /**
     * Set whether or not this polygon is a hole.  Cannot be called on a complex polygon.
     *
     * @throws IllegalStateException if called on a complex polygon.
     */
    gpcas.geometry.PolyDefault.prototype.setIsHole = function(isHole) {
        var m_List = this.m_List;
        if( m_List.size() > 1)
        {
            alert( "Cannot call on a poly made up of more than one poly." );
        }
        this.m_IsHole = isHole ;
    }

    /**
     * Return true if the given inner polygon is contributing to the set operation.
     * This method should NOT be used outside the Clip algorithm.
     */
    gpcas.geometry.PolyDefault.prototype.isContributing = function( polyIndex) {
        var m_List = this.m_List;
        return (m_List.get(polyIndex)).isContributing(0);
    }

    /**
     * Set whether or not this inner polygon is constributing to the set operation.
     * This method should NOT be used outside the Clip algorithm.
     *
     * @throws IllegalStateException if called on a complex polygon
     */
    gpcas.geometry.PolyDefault.prototype.setContributing = function( polyIndex, contributes) {
        var m_List = this.m_List;
        if( m_List.size() != 1)
        {
            alert( "Only applies to polys of size 1" );
        }
        (m_List.get(polyIndex)).setContributing( 0, contributes );
    }

    /**
     * Return a Poly that is the intersection of this polygon with the given polygon.
     * The returned polygon could be complex.
     *
     * @return the returned Poly will be an instance of PolyDefault.
     */
    gpcas.geometry.PolyDefault.prototype.intersection = function(p) {
        return Clip.intersection( p, this, "PolyDefault");
    }

    /**
     * Return a Poly that is the union of this polygon with the given polygon.
     * The returned polygon could be complex.
     *
     * @return the returned Poly will be an instance of PolyDefault.
     */
    gpcas.geometry.PolyDefault.prototype.union = function(p) {
        return Clip.union( p, this, "PolyDefault");
    }

    /**
     * Return a Poly that is the exclusive-or of this polygon with the given polygon.
     * The returned polygon could be complex.
     *
     * @return the returned Poly will be an instance of PolyDefault.
     */
    gpcas.geometry.PolyDefault.prototype.xor = function(p) {
        return Clip.xor( p, this, "PolyDefault" );
    }

    /**
     * Return a Poly that is the difference of this polygon with the given polygon.
     * The returned polygon could be complex.
     *
     * @return the returned Poly will be an instance of PolyDefault.
     */
    gpcas.geometry.PolyDefault.prototype.difference = function(p){
        return Clip.difference(p,this,"PolyDefault");
    }

    /**
     * Return the area of the polygon in square units.
     */
    gpcas.geometry.PolyDefault.prototype.getArea = function() {
        var area= 0.0;
        for( var i= 0; i < getNumInnerPoly() ; i++ )
        {
            var p= getInnerPoly(i);
            var tarea = p.getArea() * (p.isHole() ? -1.0: 1.0);
            area += tarea ;
        }
        return area ;
    }

    // -----------------------
    // --- Package Methods ---
    // -----------------------
    gpcas.geometry.PolyDefault.prototype.toString = function() {
        var res  = "";
        var m_List = this.m_List;
        for( var i= 0; i < m_List.size() ; i++ )
        {
            var p = this.getInnerPoly(i);
            res+=("InnerPoly("+i+").hole="+p.isHole());
            var points = [];
            for( var j= 0; j < p.getNumPoints() ; j++ )
            {
                points.push(new Point(p.getX(j),p.getY(j)));
            }
            points = ArrayHelper.sortPointsClockwise(points) ;

            for(var k =0 ; k< points.length ; k++) {
                res+=points[k].toString();
            }

        }
        return res;
    }

///////////////  Polygon   /////////////////////////////////
    gpcas.geometry.Polygon = function(){
        this.maxTop ;
        this.maxBottom ;
        this.maxLeft ;
        this.maxRight ;
        this.vertices  /* of Point */;
    };
    gpcas.geometry.Polygon.prototype.fromArray = function(v) {
        this.vertices = [];

        for(var i=0 ; i<v.length ; i++) {
            var pointArr = v[i];
            this.vertices.push(new Point(pointArr[0],pointArr[1]));
        }
    }

    /*Normalize vertices in polygon to be ordered clockwise from most left point*/
    gpcas.geometry.Polygon.prototype.normalize = function() {
        var maxLeftIndex ;
        var vertices = this.vertices;
        var newVertices = this.vertices;

        for (var i  = 0; i<vertices.length; i++){
            var vertex  = vertices[i];

            if ((maxTop==null)||(maxTop.y>vertex.y)||((maxTop.y==vertex.y)&&(vertex.x<maxTop.x))){
                maxTop=vertex;
            }
            if ((maxBottom==null)||(maxBottom.y<vertex.y)||((maxBottom.y==vertex.y)&&(vertex.x>maxBottom.x))){
                maxBottom=vertex;
            }
            if ((maxLeft==null)||(maxLeft.x>vertex.x)||((maxLeft.x==vertex.x)&&(vertex.y>maxLeft.y))){
                maxLeft=vertex;
                maxLeftIndex=i;
            }
            if ((maxRight==null)||(maxRight.x<vertex.x)||((maxRight.x==vertex.x)&&(vertex.y<maxRight.y))){
                maxRight=vertex;
            }
        }

        if (maxLeftIndex>0){
            newVertices = [];
            var j = 0;
            for (var i=maxLeftIndex; i<vertices.length;i++){
                newVertices[j++]=this.vertices[i];
            }
            for (var i=0; i<maxLeftIndex; i++){
                newVertices[j++]=this.vertices[i];
            }
            vertices=newVertices;
        }
        var reverse   = false;
        for(var k=0; k<this.vertices.length ; k++) {
            var vertex  =  this.vertices[k];
            if (equals(vertex, maxBottom)){
                reverse=true;
                break;
            } else if (equals(vertex, maxTop)){
                break;
            }
        }
        if (reverse){
            newVertices= [];
            newVertices[0]=vertices[0];
            var j =1;
            for (var i=vertices.length-1; i>0; i--){
                newVertices[j++]=this.vertices[i];
            }
            vertices=newVertices;
        }
    }
    gpcas.geometry.Polygon.prototype.getVertexIndex = function(vertex){
        for (var i=0; i<this.vertices.length; i++){
            if (equals(vertices[i], vertex)){
                return i;
            }
        }
        return -1;
    }
    gpcas.geometry.Polygon.prototype.insertVertex = function(vertex1,vertex2, newVertex){
        var vertex1Index  = getVertexIndex(vertex1);
        var vertex2Index  = getVertexIndex(vertex2);
        if ((vertex1Index==-1)||(vertex2Index==-1)){
            return false;
        }

        if (vertex2Index<vertex1Index){
            var i  = vertex1Index;
            vertex1Index=vertex2Index;
            vertex2Index=i;
        }
        if (vertex2Index==vertex1Index+1){
            var newVertices  = [];
            for (var i =0; i<=vertex1Index; i++){
                newVertices[i]=this.vertices[i];
            }
            newVertices[vertex2Index]=newVertex;
            for (var i =vertex2Index; i<this.vertices.length; i++){
                newVertices[i+1]=this.vertices[i];
            }
            this.vertices=newVertices;
        } else if ((vertex2Index==vertices.length-1)&&(vertex1Index==0)){
            this.vertices.push(newVertex);
        }
        return true;
    }
    gpcas.geometry.Polygon.prototype.clone = function() {
        var res = new Polygon();
        res.vertices=vertices.slice(this.vertices.length-1);
        return res;
    }
    gpcas.geometry.Polygon.prototype.toString = function() {
        var vertices = this.vertices;
        var res  = "[";
        for (var i  =0; i<vertices.length; i++){
            var vertex  = vertices[i];
            res+=(i>0?",":"")+"["+vertex.x+","+vertex.y+"]";
        }
        res+="]";
        return res;
    }


////////////////////  PolygonNode ///////////////////////////
    gpcas.geometry.PolygonNode = function(next, x, y) {


        this.active;                 /* Active flag / vertex count        */
        this.hole;                /* Hole / external contour flag      */
        this.v= [] ; /* Left and right vertex list ptrs   */
        this.next;                   /* Pointer to next polygon contour   */
        this.proxy;                  /* Pointer to actual structure used  */

        /* Make v[Clip.LEFT] and v[Clip.RIGHT] point to new vertex */
        var vn= new VertexNode( x, y );

        this.v[Clip.LEFT ] = vn ;
        this.v[Clip.RIGHT] = vn ;

        this.next = next ;
        this.proxy = this ; /* Initialise proxy to point to p itself */
        this.active = 1; //TRUE
    }
    gpcas.geometry.PolygonNode.prototype.add_right = function( x, y) {
        var nv= new VertexNode( x, y );

        /* Add vertex nv to the right end of the polygon's vertex list */
        this.proxy.v[Clip.RIGHT].next= nv;

        /* Update proxy->v[Clip.RIGHT] to point to nv */
        this.proxy.v[Clip.RIGHT]= nv;
    }
    gpcas.geometry.PolygonNode.prototype.add_left = function( x, y) {
        var proxy = this.proxy;

        var nv= new VertexNode( x, y );

        /* Add vertex nv to the left end of the polygon's vertex list */
        nv.next= proxy.v[Clip.LEFT];

        /* Update proxy->[Clip.LEFT] to point to nv */
        proxy.v[Clip.LEFT]= nv;
    }


//////////////////   PolySimple ////////////////

    /**
     * <code>PolySimple</code> is a simple polygon - contains only one inner polygon.
     * <p>
     * <strong>WARNING:</strong> This type of <code>Poly</code> cannot be used for an
     * inner polygon that is a hole.
     *
     * @author  Dan Bridenbecker, Solution Engineering, Inc.
     */
    gpcas.geometry.PolySimple = function(){
        /**
         * The list of Point objects in the polygon.
         */
        this.m_List= new ArrayList();

        /** Flag used by the Clip algorithm */
        this.m_Contributes= true ;
    };

    /**
     * Return true if the given object is equal to this one.
     * <p>
     * <strong>WARNING:</strong> This method failse if the first point
     * appears more than once in the list.
     */
    gpcas.geometry.PolySimple.prototype.equals = function(obj) {
        if( !(obj instanceof PolySimple) )
        {
            return false;
        }

        var that= obj;

        var this_num= this.m_List.size();
        var that_num= that.m_List.size();
        if( this_num != that_num ) return false ;


        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!! WARNING: This is not the greatest algorithm.  It fails if !!!
        // !!! the first point in "this" poly appears more than once.    !!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if( this_num > 0)
        {
            var this_x= this.getX(0);
            var this_y= this.getY(0);
            var that_first_index = -1;
            for( var that_index= 0; (that_first_index == -1) && (that_index < that_num) ; that_index++ )
            {
                var that_x= that.getX(that_index);
                var that_y= that.getY(that_index);
                if( (this_x == that_x) && (this_y == that_y) )
                {
                    that_first_index = that_index ;
                }
            }
            if( that_first_index == -1) return false ;
            var that_index= that_first_index ;
            for( var this_index= 0; this_index < this_num ; this_index++ )
            {
                this_x = this.getX(this_index);
                this_y = this.getY(this_index);
                var that_x= that.getX(that_index);
                var that_y= that.getY(that_index);

                if( (this_x != that_x) || (this_y != that_y) ) return false;

                that_index++ ;
                if( that_index >= that_num )
                {
                    that_index = 0;
                }
            }
        }
        return true ;
    }

    /**
     * Return the hashCode of the object.
     * <p>
     * <strong>WARNING:</strong>Hash and Equals break contract.
     *
     * @return an integer value that is the same for two objects
     * whenever their internal representation is the same (equals() is true)
     */
    gpcas.geometry.PolySimple.prototype.hashCode = function() {
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!! WARNING:  This hash and equals break the contract. !!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var result= 17;
        result = 37*result + this.m_List.hashCode();
        return result;
    }

    /**
     * Return a string briefly describing the polygon.
     */
    gpcas.geometry.PolySimple.prototype.toString = function() {
        return "PolySimple: num_points="+getNumPoints();
    }

    // --------------------
    // --- Poly Methods ---
    // --------------------
    /**
     * Remove all of the points.  Creates an empty polygon.
     */
    gpcas.geometry.PolySimple.prototype.clear = function() {
        this.m_List.clear();
    }


    gpcas.geometry.PolySimple.prototype.add = function(arg0,arg1) {
        var args = [];
        args[0] = arg0;
        if(arg1) {
            args[1] = arg1;
        }

        if (args.length==2){
            this.addPointXY(args[0] , args[1] );
        } else if (args.length==1){
            if (args[0] instanceof Point){
                this.addPoint(args[0]);
            } else if (args[0] instanceof Poly){
                this.addPoly(args[0]);
            } else if (args[0] instanceof Array){
                for(var k=0 ; k<args[0].length ; k++) {
                    var val = args[0][k];
                    this.add(val);
                }
            }
        }
    }


    /**
     * Add a point to the first inner polygon.
     */
    gpcas.geometry.PolySimple.prototype.addPointXY = function(x, y) {
        this.addPoint( new Point( x, y ) );
    }

    /**
     * Add a point to the first inner polygon.
     */
    gpcas.geometry.PolySimple.prototype.addPoint = function(p) {
        this.m_List.add( p );
    }

    /**
     * Throws IllegalStateexception if called
     */
    gpcas.geometry.PolySimple.prototype.addPoly = function(p) {
        alert("Cannot add poly to a simple poly.");
    }

    /**
     * Return true if the polygon is empty
     */
    gpcas.geometry.PolySimple.prototype.isEmpty = function() {
        return this.m_List.isEmpty();
    }

    /**
     * Returns the bounding rectangle of this polygon.
     */
    gpcas.geometry.PolySimple.prototype.getBounds = function() {
        var xmin=  Number.MAX_VALUE ;
        var ymin=  Number.MAX_VALUE ;
        var xmax= -Number.MAX_VALUE ;
        var ymax= -Number.MAX_VALUE ;

        for( var i= 0; i < this.m_List.size() ; i++ )
        {
            var x= this.getX(i);
            var y= this.getY(i);
            if( x < xmin ) xmin = x;
            if( x > xmax ) xmax = x;
            if( y < ymin ) ymin = y;
            if( y > ymax ) ymax = y;
        }

        return new Rectangle( xmin, ymin, (xmax-xmin), (ymax-ymin) );
    }

    /**
     * Returns <code>this</code> if <code>polyIndex = 0</code>, else it throws
     * IllegalStateException.
     */
    gpcas.geometry.PolySimple.prototype.getInnerPoly = function(polyIndex) {
        if( polyIndex != 0)
        {
            alert("PolySimple only has one poly");
        }
        return this ;
    }

    /**
     * Always returns 1.
     */
    gpcas.geometry.PolySimple.prototype.getNumInnerPoly = function() {
        return 1;
    }

    /**
     * Return the number points of the first inner polygon
     */
    gpcas.geometry.PolySimple.prototype.getNumPoints = function() {
        return this.m_List.size();
    }

    /**
     * Return the X value of the point at the index in the first inner polygon
     */
    gpcas.geometry.PolySimple.prototype.getX = function(index) {
        return (this.m_List.get(index)).x;
    }

    /**
     * Return the Y value of the point at the index in the first inner polygon
     */
    gpcas.geometry.PolySimple.prototype.getY = function(index) {
        return (this.m_List.get(index)).y;
    }

    gpcas.geometry.PolySimple.prototype.getPoint = function(index){
        return (this.m_List.get(index));
    }

    gpcas.geometry.PolySimple.prototype.getPoints = function() {
        return this.m_List.toArray();
    }

    gpcas.geometry.PolySimple.prototype.isPointInside = function(point) {
        var points  = this.getPoints();
        var j  = points.length - 1;
        var oddNodes = false;

        for (var i  = 0; i < points.length; i++)
        {
            if (points[i].y < point.y && points[j].y >= point.y ||
                points[j].y < point.y && points[i].y >= point.y)
            {
                if (points[i].x +
                    (point.y - points[i].y)/(points[j].y - points[i].y)*(points[j].x - points[i].x) < point.x)
                {
                    oddNodes = !oddNodes;
                }
            }
            j = i;
        }
        return oddNodes;
    }


    /**
     * Always returns false since PolySimples cannot be holes.
     */
    gpcas.geometry.PolySimple.prototype.isHole = function() {
        return false ;
    }

    /**
     * Throws IllegalStateException if called.
     */
    gpcas.geometry.PolySimple.prototype.setIsHole =function(isHole) {
        alert("PolySimple cannot be a hole");
    }

    /**
     * Return true if the given inner polygon is contributing to the set operation.
     * This method should NOT be used outside the Clip algorithm.
     *
     * @throws IllegalStateException if <code>polyIndex != 0</code>
     */
    gpcas.geometry.PolySimple.prototype.isContributing = function(polyIndex) {
        if( polyIndex != 0)
        {
            alert("PolySimple only has one poly");
        }
        return this.m_Contributes ;
    }

    /**
     * Set whether or not this inner polygon is constributing to the set operation.
     * This method should NOT be used outside the Clip algorithm.
     *
     * @throws IllegalStateException if <code>polyIndex != 0</code>
     */
    gpcas.geometry.PolySimple.prototype.setContributing = function( polyIndex, contributes) {
        if( polyIndex != 0)
        {
            alert("PolySimple only has one poly");
        }
        this.m_Contributes = contributes ;
    }

    /**
     * Return a Poly that is the intersection of this polygon with the given polygon.
     * The returned polygon is simple.
     *
     * @return The returned Poly is of type PolySimple
     */
    gpcas.geometry.PolySimple.prototype.intersection = function(p) {
        return Clip.intersection( this, p,"PolySimple");
    }

    /**
     * Return a Poly that is the union of this polygon with the given polygon.
     * The returned polygon is simple.
     *
     * @return The returned Poly is of type PolySimple
     */
    gpcas.geometry.PolySimple.prototype.union = function(p) {
        return Clip.union( this, p, "PolySimple");
    }

    /**
     * Return a Poly that is the exclusive-or of this polygon with the given polygon.
     * The returned polygon is simple.
     *
     * @return The returned Poly is of type PolySimple
     */
    gpcas.geometry.PolySimple.prototype.xor = function(p) {
        return Clip.xor( p, this, "PolySimple");
    }

    /**
     * Return a Poly that is the difference of this polygon with the given polygon.
     * The returned polygon could be complex.
     *
     * @return the returned Poly will be an instance of PolyDefault.
     */
    gpcas.geometry.PolySimple.prototype.difference = function(p){
        return Clip.difference(p,this,"PolySimple");
    }

    /**
     * Returns the area of the polygon.
     * <p>
     * The algorithm for the area of a complex polygon was take from
     * code by Joseph O'Rourke author of " Computational Geometry in C".
     */
    gpcas.geometry.PolySimple.prototype.getArea = function() {
        if( this.getNumPoints() < 3)
        {
            return 0.0;
        }
        var ax= this.getX(0);
        var ay= this.getY(0);

        var area= 0.0;
        for( var i= 1; i < (this.getNumPoints()-1) ; i++ )
        {
            var bx= this.getX(i);
            var by= this.getY(i);
            var cx= this.getX(i+1);
            var cy= this.getY(i+1);
            var tarea= ((cx - bx)*(ay - by)) - ((ax - bx)*(cy - by));
            area += tarea ;
        }
        area = 0.5*Math.abs(area);
        return area ;
    }

    /////////////////////// Rectangle  ///////////////////
    gpcas.geometry.Rectangle = function(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
    }
    gpcas.geometry.Rectangle.prototype.getMaxY = function(){
        return this.y+this.h;
    }
    gpcas.geometry.Rectangle.prototype.getMinY = function(){
        return this.y;
    }
    gpcas.geometry.Rectangle.prototype.getMaxX = function() {
        return this.x+this.w;
    }
    gpcas.geometry.Rectangle.prototype.getMinX = function(){
        return this.x;
    }
    gpcas.geometry.Rectangle.prototype.toString = function(){
        return "["+x.toString()+" "+y.toString()+" "+w.toString()+" "+h.toString()+"]";
    }

/////////////////// ScanBeamTree //////////////////////
    gpcas.geometry.ScanBeamTree = function(yvalue) {
        this.y = yvalue;         /* Scanbeam node y value             */
        this.less;         /* Pointer to nodes with lower y     */
        this.more;         /* Pointer to nodes with higher y    */
    }

///////////////////////// ScanBeamTreeEntries /////////////////
    gpcas.geometry.ScanBeamTreeEntries = function(){
        this.sbt_entries=0;
        this.sb_tree;
    };
    gpcas.geometry.ScanBeamTreeEntries.prototype.build_sbt = function() {
        var sbt= [];

        var entries= 0;
        entries = this.inner_build_sbt( entries, sbt, this.sb_tree );

        //console.log("SBT = "+this.sbt_entries);

        if( entries != this.sbt_entries )
        {
            //console.log("Something went wrong buildign sbt from tree.");
        }
        return sbt ;
    }
    gpcas.geometry.ScanBeamTreeEntries.prototype.inner_build_sbt = function( entries, sbt, sbt_node) {
        if( sbt_node.less != null )
        {
            entries = this.inner_build_sbt(entries, sbt, sbt_node.less);
        }
        sbt[entries]= sbt_node.y;
        entries++;
        if( sbt_node.more != null )
        {
            entries = this.inner_build_sbt(entries, sbt, sbt_node.more );
        }
        return entries ;
    }

///////////////////////////  StNode
    gpcas.geometry.StNode = function( edge, prev) {
        this.edge;         /* Pointer to AET edge               */
        this.xb;           /* Scanbeam bottom x coordinate      */
        this.xt;           /* Scanbeam top x coordinate         */
        this.dx;           /* Change in x for a unit y increase */
        this.prev;         /* Previous edge in sorted list      */

        this.edge = edge ;
        this.xb = edge.xb ;
        this.xt = edge.xt ;
        this.dx = edge.dx ;
        this.prev = prev ;
    }

/////////////////////   TopPolygonNode /////////////////
    gpcas.geometry.TopPolygonNode = function(){
        this.top_node;
    };
    gpcas.geometry.TopPolygonNode.prototype.add_local_min = function( x, y) {
        var existing_min= this.top_node;
        this.top_node = new PolygonNode( existing_min, x, y );
        return this.top_node ;
    }
    gpcas.geometry.TopPolygonNode.prototype.merge_left = function( p, q) {
        /* Label contour as a hole */
        q.proxy.hole = true ;
        var top_node = this.top_node;

        if (p.proxy != q.proxy) {
            /* Assign p's vertex list to the left end of q's list */
            p.proxy.v[Clip.RIGHT].next= q.proxy.v[Clip.LEFT];
            q.proxy.v[Clip.LEFT]= p.proxy.v[Clip.LEFT];

            /* Redirect any p.proxy references to q.proxy */
            var target= p.proxy ;
            for(var node= top_node; (node != null); node = node.next)
            {
                if (node.proxy == target)
                {
                    node.active= 0;
                    node.proxy= q.proxy;
                }
            }
        }
    }
    gpcas.geometry.TopPolygonNode.prototype.merge_right = function( p, q) {
        var top_node = this.top_node;
        /* Label contour as external */
        q.proxy.hole = false ;

        if (p.proxy != q.proxy)
        {
            /* Assign p's vertex list to the right end of q's list */
            q.proxy.v[Clip.RIGHT].next= p.proxy.v[Clip.LEFT];
            q.proxy.v[Clip.RIGHT]= p.proxy.v[Clip.RIGHT];

            /* Redirect any p->proxy references to q->proxy */
            var target= p.proxy ;
            for (var node = top_node ; (node != null ); node = node.next)
            {
                if (node.proxy == target)
                {
                    node.active = 0;
                    node.proxy= q.proxy;
                }
            }
        }
    }
    gpcas.geometry.TopPolygonNode.prototype.count_contours = function() {
        var nc= 0;

        for ( var polygon= this.top_node; (polygon != null) ; polygon = polygon.next)
        {
            if (polygon.active != 0)
            {
                /* Count the vertices in the current contour */
                var nv= 0;
                for (var v= polygon.proxy.v[Clip.LEFT]; (v != null); v = v.next)
                {
                    nv++;
                }

                /* Record valid vertex counts in the active field */
                if (nv > 2)
                {
                    polygon.active = nv;
                    nc++;
                }
                else
                {
                    /* Invalid contour: just free the heap */
//                  VertexNode nextv = null ;
//                  for (VertexNode v= polygon.proxy.v[Clip.LEFT]; (v != null); v = nextv)
//                  {
//                     nextv= v.next;
//                     v = null ;
//                  }
                    polygon.active= 0;
                }
            }
        }
        return nc;
    }
    gpcas.geometry.TopPolygonNode.prototype.getResult = function(polyClass) {

        var top_node = this.top_node;
        var result= Clip.createNewPoly( polyClass );
//console.log(polyClass);


        var num_contours = this.count_contours();

        if (num_contours > 0)
        {
            var c= 0;
            var npoly_node= null ;
            for (var poly_node= top_node; (poly_node != null); poly_node = npoly_node)
            {
                npoly_node = poly_node.next;
                if (poly_node.active != 0)
                {

                    var poly = result ;


                    if( num_contours > 1)
                    {
                        poly = Clip.createNewPoly( polyClass );
                    }
                    if( poly_node.proxy.hole )
                    {
                        poly.setIsHole( poly_node.proxy.hole );
                    }

                    // ------------------------------------------------------------------------
                    // --- This algorithm puts the verticies into the poly in reverse order ---
                    // ------------------------------------------------------------------------
                    for (var vtx= poly_node.proxy.v[Clip.LEFT]; (vtx != null) ; vtx = vtx.next )
                    {
                        poly.add( vtx.x, vtx.y );
                    }
                    if( num_contours > 1)
                    {
                        result.addPoly( poly );
                    }
                    c++;
                }
            }

            // -----------------------------------------
            // --- Sort holes to the end of the list ---
            // -----------------------------------------
            var orig= result ;
            result = Clip.createNewPoly( polyClass );
            for( var i= 0; i < orig.getNumInnerPoly() ; i++ )
            {
                var inner= orig.getInnerPoly(i);
                if( !inner.isHole() )
                {
                    result.addPoly(inner);
                }
            }
            for( var i= 0; i < orig.getNumInnerPoly() ; i++ )
            {
                var inner= orig.getInnerPoly(i);
                if( inner.isHole() )
                {
                    result.addPoly(inner);
                }
            }
        }
        return result ;
    }
    gpcas.geometry.TopPolygonNode.prototype.print = function() {
        //console.log("---- out_poly ----");
        var top_node = this.top_node;
        var c= 0;
        var npoly_node= null ;
        for (var poly_node= top_node; (poly_node != null); poly_node = npoly_node)
        {
            //console.log("contour="+c+"  active="+poly_node.active+"  hole="+poly_node.proxy.hole);
            npoly_node = poly_node.next;
            if (poly_node.active != 0)
            {
                var v=0;
                for (var vtx= poly_node.proxy.v[Clip.LEFT]; (vtx != null) ; vtx = vtx.next )
                {
                    //console.log("v="+v+"  vtx.x="+vtx.x+"  vtx.y="+vtx.y);
                }
                c++;
            }
        }
    }

    ///////////    VertexNode  ///////////////
    gpcas.geometry.VertexNode = function( x, y) {
        this.x;    // X coordinate component
        this.y;    // Y coordinate component
        this.next; // Pointer to next vertex in list

        this.x = x ;
        this.y = y ;
        this.next = null ;
    }

/////////////   VertexType   /////////////
    gpcas.geometry.VertexType = function(){};
    gpcas.geometry.VertexType.NUL=  0; /* Empty non-intersection            */
    gpcas.geometry.VertexType.EMX=  1; /* External maximum                  */
    gpcas.geometry.VertexType.ELI=  2; /* External left intermediate        */
    gpcas.geometry.VertexType.TED=  3; /* Top edge                          */
    gpcas.geometry.VertexType.ERI=  4; /* External right intermediate       */
    gpcas.geometry.VertexType.RED=  5; /* Right edge                        */
    gpcas.geometry.VertexType.IMM=  6; /* Internal maximum and minimum      */
    gpcas.geometry.VertexType.IMN=  7; /* Internal minimum                  */
    gpcas.geometry.VertexType.EMN=  8; /* External minimum                  */
    gpcas.geometry.VertexType.EMM=  9; /* External maximum and minimum      */
    gpcas.geometry.VertexType.LED= 10; /* Left edge                         */
    gpcas.geometry.VertexType.ILI= 11; /* Internal left intermediate        */
    gpcas.geometry.VertexType.BED= 12; /* Bottom edge                       */
    gpcas.geometry.VertexType.IRI= 13; /* Internal right intermediate       */
    gpcas.geometry.VertexType.IMX= 14; /* Internal maximum                  */
    gpcas.geometry.VertexType.FUL= 15; /* Full non-intersection             */
    gpcas.geometry.VertexType.getType = function( tr, tl ,br ,bl) {
        return tr + (tl << 1) + (br << 2) + (bl << 3);
    }

////////////////// WeilerAtherton  /////////////
    gpcas.geometry.WeilerAtherton = function(){};

    gpcas.geometry.WeilerAtherton.prototype.merge = function(p1,p2) {
        p1=p1.clone();
        p2=p2.clone();
    }

    PolyDefault = gpcas.geometry.PolyDefault ;
    ArrayList = gpcas.util.ArrayList;
    PolySimple = gpcas.geometry.PolySimple;
    Clip = gpcas.geometry.Clip;
    OperationType = gpcas.geometry.OperationType;
    LmtTable = gpcas.geometry.LmtTable;
    ScanBeamTreeEntries = gpcas.geometry.ScanBeamTreeEntries;
    EdgeTable = gpcas.geometry.EdgeTable;
    EdgeNode = gpcas.geometry.EdgeNode;
    ScanBeamTree = gpcas.geometry.ScanBeamTree;
    Rectangle = gpcas.geometry.Rectangle;
    BundleState = gpcas.geometry.BundleState;
    LmtNode = gpcas.geometry.LmtNode;
    TopPolygonNode = gpcas.geometry.TopPolygonNode;
    AetTree = gpcas.geometry.AetTree;
    HState = gpcas.geometry.HState;
    VertexType = gpcas.geometry.VertexType;
    VertexNode = gpcas.geometry.VertexNode;
    PolygonNode = gpcas.geometry.PolygonNode;
    ItNodeTable = gpcas.geometry.ItNodeTable;
    StNode = gpcas.geometry.StNode;
    ItNode = gpcas.geometry.ItNode;



    p = gpcas.geometry.PolyDefault.prototype
    p.addPoints=function(points){var poly=this
        if(A(points)){
            _.times(points.length,function(i){

                var pt=points[i],x,y
                if(A(pt)){x=pt[0]; y=pt[1]}
                else if(O(pt)){x=pt.x; y=pt.y}
                poly.addPoint(V(x,y))

            })
        }
        return this}



    p.num = p.numPoints=function(){return this.getNumPoints()}
    p.verts= function(){

        var poly=this,

            verts=[]

        _.times(poly.getNumPoints(), function(i){

            verts.push([
                poly.getX(i),
                poly.getY(i)
            ])
        })

        return verts


    }
    p = gpcas.geometry.PolySimple.prototype
    p.num = p.numPoints=function(){return this.getNumPoints()}
    p.verts= function(){

        var poly=this,

            verts=[]

        _.times(poly.getNumPoints(), function(i){

            verts.push([
                poly.getX(i),
                poly.getY(i)
            ])
        })

        return verts


    }



}
GPCLIB()

TERRAINWORKS=function(){w=b2d.W()

    s= stage = cjs.stg(1600, 600).A()

    h = s.shape()
    h.f('b').dc(200, 200, 10)
    h2 = s.shape().X(700)
    h2.f('b').dc(0,0,10)

    tile = function(i,j){

        return [

            V(-5+i,130+j), V(-5+i,80+j), V(45+i,80+j), V(45+i,130+j)
        ]
    }


    sep = b2d.separator()



    sep([
        V(-20,20), V(-20,-20),
        V(20,-20), V(20,20)
    ]).XY(20, 300)


    w.ball(300,300)
    draw=function(){terr=[]
        _.times(13,function(i){
            _.times(8,function(j){

                til = w.brick( (i*25)+420, (j*25)+200, 20, 20 )

                terr.push( {
                    bod:til,

                    poly: Math.poly([


                        V(  ((i*25)+420)-10,  ((j*25)+200)  +10  ),

                        V(  ((i*25)+420)-10,  ((j*25)+200)  -10  ),
                        V(  ((i*25)+420)+10,  ((j*25)+200)  -10  ),

                        V(  ((i*25)+420)+10,  ((j*25)+200)  +10  )


                    ])

                })


               // sep(til).stat()

            })})


       // h.drawPolygons(terr,'b','r')
    }

    draw()

    t=  terr[103]


    doExplosion= function(e){$l('explode')

        v = V(e.stageX, e.stageY)

        exP = circ(v,100 )
        h.drawPolygon(exP,'z')

        c  = Math.poly(exP)


        // for each existing terrain polygon, check the difference between the polygon itself and the
        // explosion polygon. This should be optimized in some way, checking only for terrain polygons
        // which are actually affected by the explosion.
        // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
        // difference is calculated.

        iX = c.intersection(t)
        h2.drawPolygon(iX.verts())


        for (var i=terr.length-1; i>=0; i--) {


            // resultPolygons =   terr[i].intersection(exP)

            //totalArea=0
            // terr.splice(i,1)
            // for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}

        }

        // draw()
    }

    circ =function(v,rad,prec){ prec = N(prec)?prec:20

        arr=[]

        ang= 2 * Math.PI/prec

        _.times(prec , function(i){

            pX = v.x+rad  * Math.cos(ang*i)
            pY = v.y+rad  * Math.sin(ang*i)

            // $l('pX: ' + pX + ', pY: '+ pY)

            arr.push( V(pX, pY) )

        })

        return arr

    }

    // listeners: basically we destroy the terrain with a mouse click or a mouse drag

    // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
    // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})


    w.can.click(doExplosion)

   // w.click(function(x,y){  w.bump(x,y,40)  })


    explosion=function(x,y){var cir,bod

          cir= Math.poly( circ(V(x,y),30,5) )

       bod= sep(circ(V(0,0),30,5)).XY(x,y)

    return {
        cir:cir,
        bod:bod
    }}

   exp = explosion(740,395)
    Math.poly(exp.cir)


    dif = t.poly.difference(
        exp.cir
    )

    t.bod.fixt().remove()

    bb= sep( t.bod, dif.verts() ).stat().XY(0,0)



   // sep(dif.verts()).XY(100,100).stat()

    vv= [V(645,480), //lower right
        V(595,480),  //lower left
        V(595,430), //upper left
        V(645,430)] //upper right

    h.drawPolygon(vv, 'z')


    vvv = [

        V(645,380),
        V(595,380),
        V(595,372),
        V(617,369),
        V(645,373)
    ]

    //h.drawPolygon(vvv, 'z')
    h.drawPolygon(vvv, 'z')



}

TERRAIN=function(){w=b2d.W()
    sep = b2d.separator()
    terr=[]
    circ=function(v,rad,prec){ prec = N(prec)?prec:20
        arr=[]
        ang= 2 * Math.PI/prec
        _.times(prec , function(i){
            pX = v.x+rad  * Math.cos(ang*i)
            pY = v.y+rad  * Math.sin(ang*i)
            arr.push(V(pX,pY))})
        return arr}
    explosion=function(x,y){var cir,bod
        cir= Math.poly( circ(V(x,y),30,5) )
        bod= sep(circ(V(0,0),30,5)).XY(x,y)
        return {  cir:cir,  bod:bod }}
    _.times(13,function(i){_.times(8,function(j){
var bod=w.brick(  i*25 +420,  j*25 +200,     20, 20 )
        terr.push({

            bod: bod,

            verts:   bod.fixt().verts()  ,

            poly: Math.poly([
                V(  i*25+410,  j*25+210  ),
                V(  i*25+410,  j*25+190  ),
                V(  i*25+430,  j*25+190  ),
                V(  i*25+430,  j*25+210  )
            ])

        })

    })})
    w.dot(420,200)
    w.dot(410,210)

    t=terr[103]

   s = sep(

       t.bod.fixt().verts()

   ).stat()//.XY(100,100)



    exp=explosion(740,395)

    Math.poly(exp.cir)
    dif = t.poly.difference(exp.cir)
    t.bod.fixt().remove()
    bb= sep( t.bod, dif.verts() ).stat().XY(0,0)

    setTimeout( function(){ t.bod.X(20) }, 2000)
}







Math.poly=function(points){
    var poly=new PolyDefault()
    poly.addPoints(points)
    return poly}



GPC=function(){
    canvas =  can = $.can('y', 400,500).A()
    context = ctx = can.ctx()
    poly1 = Math.poly([
        [61,68],
        [145,122],
        [186,94],
        [224,135],
        [204,211],
        [105,200],
        [141,163],
        [48,139],
        [74,117]
    ])

    poly2 = Math.poly([
        [131,84],
        [224,110],
        [174,180],
        [120,136],
        [60,167],
    ])

    reset=(function self(){

        ctx.clearRect(0,0,400,400)
        ctx.drawPolys(poly1,'b', 0, -30 )
           .drawPolys(poly2,'r', 0, -30 )

        return self}())

    button=function(name,poly){
        $.button(name, function(e) {
            reset()
            ctx.drawPolys(poly,'g', 0,150)
        }).A()}


    button('difference',  poly1.difference(poly2) )
    button('intersection', poly1.intersection(poly2) )
    button('union', poly1.union(poly2) )
    button('xor',  poly1.xor(poly2) )



}

POLYS=function(){z();s=cjs.stg('y',800,500).A()

    poly = Math.poly([  [61,68],  [145,122],  [186,94],  [224,135],  [204,211],  [105,200],  [141,163],  [48,139],  [74,117]  ])




}

b2d.separator=function(){
    /*
     //This class is specifically for non-convex polygons.
     // If you want to create a convex polygon, you don't need to use this class
     // - Box2D's <code>b2PolygonShape</code> class allows you to create convex shapes with the <code>setAsArray()</code>/<code>setAsVector()</code> method.</li>
     //The vertices must be in clockwise order.</li>
     //No three neighbouring points should lie on the same line segment
     //There must be no overlapping segments and no "holes"


     @param body The b2Body, in which the new fixtures will be stored.
     * @param fixtureDef A b2FixtureDef, containing all the properties (friction, density, etc.) which the new fixtures will inherit.
     * @param verticesVec The vertices of the non-convex polygon, in clockwise order.
     * @param scale <code>[optional]</code> The scale which you use to draw shapes in Box2D. The bigger the scale, the better the precision. The default value is 30.
     * @see b2PolygonShape
     * @see b2PolygonShape.SetAsArray()
     * @see b2PolygonShape.SetAsVector()
     * @see b2Fixture
     * */
    /**
     * Checks whether the vertices in <code>verticesVec</code> can be properly distributed into the new fixtures (more specifically, it makes sure there are no overlapping segments and the vertices are in clockwise order).
     * It is recommended that you use this method for debugging only, because it may cost more CPU usage.
     * <p/>
     * @param verticesVec The vertices to be validated.
     * @return An integer which can have the following values:
     * <ul>
     * <li>0 if the vertices can be properly processed.</li>
     * <li>1 If there are overlapping lines.</li>
     * <li>2 if the points are <b>not</b> in clockwise order.</li>
     * <li>3 if there are overlapping lines <b>and</b> the points are <b>not</b> in clockwise order.</li>
     * </ul>
     * */


    Separate=function(body,verts,scale){

        var g=G(arguments)
        body=g[0]
        verts=g[1]
        scale=N(g[2])?g[2]:30

        if(A(body)){
            scale=verts;
            verts=body;

            body= g.p? w.ball(300,300,4): w.dyn(300,300)
        }


        var i,j,  m, figsVec,  polyShape,  n


        //pass in an array of points
        //each will get scaled and then, calcShapes is applied to it
        //and then for EACH OF THE SHAPES!! ....

        _.each(calcShapes(

                _.map(verts, function(vert){

                    return V(vert)

                })


            ),

            function(vec){var polyShape= new b2d.Shapes.b2PolygonShape

                polyShape.SetAsVector(_.map(vec,function(v){return V(v).div(scale)}) )

                fixtureDef = b2d.fixt()

                fixtureDef.shape = polyShape

                body.CreateFixture(fixtureDef)

            })


        return body.den(1)
    }



    Validate=function(verticesVec){
        var i,n=verticesVec.length,j,j2,i2,i3,d,ret=0;
        var fl ,fl2 =false
        _.times(n, function(i){
            i2= (i<n-1)? i+1: 0
            i3= (i>0)? i-1: n-1
            fl=false
            _.times(n, function(j){
                if ( j!=i  && j!=i2 ) {
                    if (! fl) {
                        d=det(verticesVec[i].x,verticesVec[i].y,verticesVec[i2].x,verticesVec[i2].y,verticesVec[j].x,verticesVec[j].y);
                        if  (d>0)  {  fl=true }}
                    if ((j!=i3)) {
                        j2=(j<n-1)?j+1:0;
                        if (hitSegment(verticesVec[i].x,verticesVec[i].y,verticesVec[i2].x,verticesVec[i2].y,verticesVec[j].x,verticesVec[j].y,verticesVec[j2].x,verticesVec[j2].y)) {
                            ret=1;
                        }}}})
            if (! fl) { fl2=true }})
        if (fl2){ if(ret==1){ret=3} else {ret=2} }
        return ret }

    calcShapes=function(verts){
        var vec
        var i,n,j
        var d,t,dx,dy,minLen
        var i1,i2,i3,p1 ,p2,p3
        var j1,j2,v1 ,v2 ,k,h
        var vec1 ,vec2
        var v ,hitV
        var isConvex
        var figsVec =[], queue


        queue =[]

        queue.push(verts)


        while (queue.length){
            vec = queue[0]

            n=vec.length

            isConvex=true

            _.times(n, function(i){

                i1 = i

                i2 = (i<n-1)?i+1:i+1-n

                i3=(i<n-2)?i+2:i+2-n

                p1= vec[i1]
                p2= vec[i2]
                p3= vec[i3]

                d=det(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y)


                if ( d<0)  {
                    isConvex=false
                    minLen = Number.MAX_VALUE

                    _.times(n, function(j){
                        if(j!=i1 &&  j!=i2 ){
                            j1=j;
                            j2=(j<n-1)?j+1:0;
                            v1=vec[j1];
                            v2=vec[j2];
                            v=hitRay(p1.x,p1.y,p2.x,p2.y,v1.x,v1.y,v2.x,v2.y);

                            if(v){

                                dx = p2.x-v.x; dy=p2.y-v.y; t=dx*dx+dy*dy

                                if(t<minLen){

                                    h=j1
                                    k=j2
                                    hitV=v
                                    minLen=t

                                }}}
                    })

                    vec1=[]
                    vec2=[]

                    j1=h; j2=k;
                    v1=vec[j1];
                    v2=vec[j2];

                    if (! pointsMatch( hitV.x, hitV.y,  v2.x,v2.y)) {vec1.push(hitV)}
                    if (! pointsMatch( hitV.x, hitV.y,  v1.x,v1.y)) {vec2.push(hitV)}


                    h=-1
                    k=i1


                    while(true){

                        if(k == j2){ //if( h<0|| h>=n ){err()}

                            if (!isOnSegment(
                                v2.x,
                                v2.y,
                                vec[h].x,
                                vec[h].y,
                                p1.x,
                                p1.y )){  vec1.push( vec[k] )  }

                            break

                        }  else { vec1.push(vec[k]) }

                        h=k
                        k=(k<1)?n-1:k-1
                    }

                    vec1=vec1.reverse()

                    h=-1
                    k=i2
                    while (true) {


                        if ( k==j1 ){//  if   ( h<0  || h>=n)  {  err()   }
                            if ( k==j1  && ! isOnSegment(v1.x,v1.y,vec[h].x,vec[h].y,p2.x,p2.y)){  vec2.push(vec[k])   }
                            break}

                        else  {
                            vec2.push(vec[k]);
                        }
                        h=k
                        if ( k+1 > n-1 ) { k=0 }  else {k++}
                    }

                    queue.push(vec1,vec2)
                    queue.shift()

                }
            })



            if (isConvex) {figsVec.push(queue.shift())}
        }

        return figsVec
    }

    hitRay=function(x1,y1,x2,y2,x3,y3,x4,y4)  {
        var t1=x3-x1,t2=y3-y1,t3=x2-x1,t4=y2-y1,t5=x4-x3,t6=y4-y3,t7=t4*t5-t3*t6,a;

        a=(((t5*t2)-t6*t1)/t7);
        var px=x1+a*t3,py=y1+a*t4;
        var b1 =isOnSegment(x2,y2,x1,y1,px,py);
        var b2 =isOnSegment(px,py,x3,y3,x4,y4);

        if ((b1&&b2)) {
            return V(px,py);
        }

        return null;
    }

    hitSegment=function(x1,y1,x2,y2,x3,y3,x4,y4)  {
        var t1=x3-x1,t2=y3-y1,t3=x2-x1,t4=y2-y1,t5=x4-x3,t6=y4-y3,t7=t4*t5-t3*t6,a;

        a=(((t5*t2)-t6*t1)/t7);
        var px=x1+a*t3,py=y1+a*t4;
        var b1 =isOnSegment(px,py,x1,y1,x2,y2);
        var b2 =isOnSegment(px,py,x3,y3,x4,y4);

        if ((b1&&b2)) {
            return V(px,py);
        }

        return null;
    }

    isOnSegment=function(px,py,x1,y1,x2,y2) {

        var b1 =   (  (x1+0.1)>=px &&px>=x2-0.1)  ||  (   (x1-0.1)  <= px  &&   px <= x2+0.1   )

        var b2 =  ( (y1+0.1)>=py && py>=y2-0.1)  ||  (   (y1-0.1) <=py   &&   py <= y2+0.1   )


        return  b1&&b2  &&   isOnLine(px,py,x1,y1,x2,y2)
    }

    pointsMatch=function(x1,y1,x2,y2)  {
        var dx=(x2>=x1)?x2-x1:x1-x2,dy=(y2>=y1)?y2-y1:y1-y2;
        return   dx<0.1  && dy<0.1
    }

    isOnLine=function(px,py,x1,y1,x2,y2) {
        if (  (x2-x1)>0.1    ||    x1-x2>0.1  ) {
            var a=(y2-y1)/(x2-x1),
                possibleY=a*(px-x1)+y1,
                diff=(possibleY>py)? possibleY-py: py-possibleY

            return (diff<0.1)
        }

        return (((px-x1)<0.1)||x1-px<0.1)
    }

    det=function(x1,y1,x2,y2,x3,y3) {return x1*y2+x2*y3+x3*y1-y1*x2-y2*x3-y3*x1}

    // err=function(){throw new Error("A problem has occurred. Use the Validate() method to see where the problem is.")}

    return Separate
}

 SEPARATOR1=function(){

sep = b2d.separator()

     w = b2d.W()

     b = w.ball(300,300,20)
     sep(b, [

         V(-100,100).div(),
         V(-100,-100).div(),
         V(100,100).div(),
         V(50,0).div(),
         V(250,20).div(),
         V(100,100).div()

     ])
}

SEPARATOR=function(){w = b2d.W();


    sep = b2d.separator()


    _.times(30, function(i){

        sep([  V(-20,20),  V(0,-80),  V(20,20),  V(0,-40) ]).XY(100+(i*30), 300)})

     sep([
         V(-20,20), V(-20,-20),
         V(20,-20), V(20,20)
     ]).XY(500, 300)


}



cjs.rulers=function() {
    var d1=$.div('b', 100, 100).drag().opacity(.3)
    $.div('r', 100, 300).drag().opacity(.3)
    return d1}