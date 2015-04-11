b2d.weld=function(a,b,   ancA, ancB, ang, c,d){

     // can set 2 local anchor points and a reference angle

    var jd =  new b2d.Joints.b2WeldJointDef()
    jd.bodyA=a
    jd.bodyB=b
     if(N(ancA)){
         ancA=V(ancA,ancB)
         ancB=V(ang,c)
         ang=d
         return jd}
     if(ancA){jd.localAnchorA = ancA.div()}
     if(ancB){jd.localAnchorB = ancB.div()}
     if(N(ang)){jd.referenceAngle = Math.toRadians(ang)}
     return jd
 }
WELDS=function(){W()


    w.weld(

            w.S(100,100,'r', 30),

            w.D(100,100, 'b', 30),

        0,0
    )



    w.weld( w.S(200,100,'x',30), w.D(200,100,'v',30),0,10)
   w.weld( w.S(300,100,'l',30), w.D(300,100,'x',30),0,-10)

    w.weld( w.S(400,100,'g',30), w.D(400,100,'x',30),10,10)



/*
    w.J(weld(w.S(500,100,'x',30), w.D(500,100,'v',30),10,-10))
    w.J(weld(w.S(600,100,'x',30), w.D(600,100,'v',30),10,-20))
    w.J(weld(w.S(700,100,'x',30), w.D(700,100,'v',30),10,-30))
    w.J(weld(w.S(800,100,'x',30), w.D(800,100,'v',30),-10,-40))
    w.J(weld(w.S(900,100,'x',30), w.D(900,100,'v',30),-10,-50))

    w.J(weld(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)) //
    w.J(weld(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10))
    w.J(weld(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10))
    w.J(weld(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10))
    w.J(weld(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10))
    w.J(weld(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20))
    w.J(weld(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30))
    w.J(weld(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40))
    w.J(weld(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50))

    w.J(weld(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0))

     w.weld( w.D(200,500,'x',30), w.S(200,500,'v',30) ) //


    w.weld(
        w.D(300,500, 'o', 30),
        w.D(300,500,'g', 50,50),

        V(0,-10)
    )

    w.weld(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
    w.weld(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
   w.weld(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
   w.weld(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
  w.weld(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
   w.weld(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
*/
}
REWELDING=function(){W({w:'L'}).C('p').P().P().P().P().P()

     j = w.weld(
         w.D(100, 200, 'x', 100,200).bo(1),
         w.D(200, 100, 'u', 200,100).bo(1)
     )

     I(2, function(){
         if(j.destroyed){j=j.form()}
         else{j.destroy()}
     })
 }
BLACKGLUEBALLS=function(){w=W(0).Y(500)
     w.glueBall = function(x,y){var w=this
         var bl = w.B(x,y,'z',20).K('bl')
         w.beg(function(cx){
             cx.with('bl', function(zF){var bl=this.B()
                 if( !bl.GetJointList() ){ bl.glue(zF.B()) }
             })})
         return bl}

     bl = w.glueBall(400, 500)
     w.glueBall(300, 500)
     w.glueBall(400, 300)
     w.glueBall(300, 100)
     w.glueBall(400, 200)
     w.glueBall(100, 300)
     w.glueBall(300, 300)
 }
LUMPS=function(){W(0).Y()

    y.coll(_.throttle(function(){
        var yx= y.X(),
            yy= y.Y()
        setTimeout(function(){
            w.S(yx, yy, 'b',  25)}, 1000)
    }, 200))
}

w= b2d.World.prototype


b2d.edge= function(x1,y1, x2,y2){
    var fd = b2d.poly()
    fd.shape.SetAsEdge(V(x1, y1).div(),  V(x2, y2).div())
    return fd}


w.edgeD = function(x1,y1,x2,y2){var w=this, l,e
    l = w.line(x1, y1, x2, y2)
    e = w.D(0, 0, b2d.edge(x1,y1,x2,y2)).den(1)
    e.bS2(l)
    return e}


w.edgeChain = function(){
    var w=this,
        g=G(arguments),
        X=0,
        Y= 0,
        x =w.D(X,Y, 'z', [[100,100, 400,400, '-']]),
        x2 =w.D(2000, 1200, 'z', [[400,400,  '-']])

    if(A(g[0])){
        //  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
        //  w.weld(x,b)
        // X=g[0][0]
        // Y=g[0][1]
    }

    _.e(g, function(e){
        if(A(e)){e = w.edgeD.apply(w,e)}
        w.weld(e,x)
    })
    //  w.weld(x2  , x)
    w.dot(300, 300)
    return x2}



w.edgesD=function(ptArr){var w=this

    ptArr = ptArr || []

    i = V( ptArr.shift() )

    i2 = V( ptArr.shift() )

    w.edge(i.x, i.y, i2.x, i2.y)

    _.e(ptArr, function(v){
        i = i2
        i2 = V(v)
        w.edge(i.x, i.y, i2.x, i2.y)})}


w.edge= function(x1,y1,x2,y2){var w=this
    // you would always want a single stat?
    w.line(x1, y1, x2, y2)
    return w.S(0, 0, b2d.edge(x1,y1,x2,y2)) }



w.edges=function(ptArr){var w=this,e
    ptArr = ptArr || []
    i = V( ptArr.shift() )
    i2 = V( ptArr.shift() )
    e = w.edge(i.x, i.y, i2.x, i2.y)
    _.each(ptArr, function(v){
        i = i2
        i2 = V(v)
        e.glue(
            w.edge(i.x, i.y, i2.x, i2.y))})}

w.edgeArr = function(){
    var w=this,
        g=G(arguments),
        X=0,
        Y= 0,
        x =w.D(400, 400,'z', [ [50, 50,  '-']])//.den(10)
    _.e(g, function(e){
        e =  w.edgeD(e[0], e[1], e[2], e[3])
        w.weld(e,x,V(g[0][0], g[0][1]))
    })


    return x}




ASEDGE=function(){ W()
    w.edge(100,500,1000,0)
    w.edge(50,50,100,500)
    w.edge(0,0,1000,100)
    w.D(410,100, 'w', 30)
    w.player('standard').XY(300,200)

}


HILLS = function(){W().P()
    w.edge(100,100, 500,300)
    w.edge(100,200, 500,400)
    w.edge(100,300, 500,500)
    w.edge(1000,100, 600,300)
    w.edge(1000, 200, 600, 400)
    w.edge(1000, 300, 600, 500)
    w.D(410,100, 'r', 20)




}







w.weld = function () {
    return this.J(
        b2d.weld.apply(null, arguments)
    )
}

w.sTW=w.sToW= w.gTL= function(x,y){ //works
    var w=this,
        x=x/w.z - w.s.x/ w.z,
        y=y/w.z - w.s.y/w.z

    //w.dot(x,y,'*') // cool
    return {x: x  ,y: y}}

w.wTS=w.wToS= w.lTG = function(x,y){//also works!
    var w=this,

        x=  (x +w.s.x/w.z)*   w.z  ,
        y=  (y+ w.s.y/w.z)*w.z

    //w.dot(x,y,'*') // cool
    return {x: x  ,y: y}}
WELDFUN=function(){
    W(1200, 600, 1600)
    w.weld( w.B(100,200,'x', 100,200).rest(1), w.B(200,100, 'u', 200,100).rest(1))
    w.weld( w.D(300,400,'w',50,100), w.D(300,400,'v', 100,50))
}

CONEDGE = WORLDCLICK= WELDEDGE= function(){W([1200,600,2400,600], {g:10})

    w.Y(450,400)
    w.edges([

        [100,300],  [500, 500],   [600,400],   [300,250], [100,300]

    ])
    x = w.edgeArr([400,400, 500, 200],
        [500,200, 550,600],
        [550,600,400, 400]).X(1200).track()
    w.D(700,350, 'b', 20)
    w.D(700,350, 'r', 20)
    w.D(700,350, 'y', 20)


    w.$(function(x, y){var v = w.sToW(x,y)
        w.S(v.x, v.y ,'z', [[10,10,'-']])
    })

    cjs.tick(function(){$l(w.mx + ', ' + w.my) })
}



// https://developer.chrome.com/devtools/docs/workspaces !!!!!