

b2d.edge= function(x1,y1, x2,y2) {
    var fd = b2d.poly()
    fd.shape.SetAsEdge(V(x1, y1).div(),  V(x2, y2).div())
    return fd}
w= b2d.World.prototype
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


    _.each(g, function(e){
        if(A(e)){e = w.edgeD.apply(w,e)}
        w.weld(e,x)
    })

    //  w.weld(x2  , x)

    w.dot(300, 300)

    return x2}

w.edge= function(x1,y1,x2,y2){var w=this, e

    // you would always want a single stat?

    w.line(x1, y1, x2, y2)

    e = w.S(0, 0, b2d.edge(x1,y1,x2,y2))

    return  e}


w.edgeD = function(x1,y1,x2,y2){var w=this, l,e

    l = w.line(x1, y1, x2, y2)

    e = w.D(0, 0, b2d.edge(x1,y1,x2,y2)).den(1)

    e.bindSprite2(l)

    return  e}



w.edges=function(ptArr){var w=this,e
    ptArr = ptArr || []
    i = V( ptArr.shift() )
    i2 = V( ptArr.shift() )

    e = w.edge(i.x, i.y, i2.x, i2.y)

    _.each(ptArr, function(v){
        i = i2
        i2 = V(v)

        e.glue(
            w.edge(i.x, i.y, i2.x, i2.y)
        )

    })}



w.edgesD=function(ptArr){var w=this
    ptArr = ptArr || []
    i = V( ptArr.shift() )
    i2 = V( ptArr.shift() )
    w.edge(i.x, i.y, i2.x, i2.y)
    _.each(ptArr, function(v){
        i = i2
        i2 = V(v)
        w.edge(i.x, i.y, i2.x, i2.y)
    })}
w.edgeArr = function(){
    var w=this,
        g=G(arguments),
        X=0,
        Y= 0,


        x =w.D(400, 400,'z', [ [50, 50,  '-']])//.den(10)


    _.each(g, function(e){

        e =  w.edgeD(e[0], e[1], e[2], e[3])

        w.weld(e,x,V(g[0][0], g[0][1]))

    })


    return x}

ASEDGE=function(){ b2d.mW()

    w.edge(100,500,1000,0)
    w.edge(50,50,100,500)
    w.edge(0,0,1000,100)

    w.ball(410,100)
    w.player('standard')

}

HILLS = function(){W().P().db()


    w.edge(100,100, 500,300)

    w.edge(100,200, 500,400)
    w.edge(100,300, 500,500)

    w.edge(1000,100, 600,300)

    w.edge(1000, 200, 600, 400)
    w.edge(1000, 300, 600, 500)

    w.D(410,100, 'r', 20)




}


CONEDGE=function(){W(10).Y(450,400)


    w.edges([

        [100,300],  [500, 500],   [600,400],   [300,250], [100,300]

    ])



}

WELDFUN=function() {
    W(1200, 600, 1600)

      w.weld( w.B(100,200,'x', 100,200).rest(1), w.B(200,100, 'u', 200,100).rest(1))


      w.weld( w.D(300,400,'w',50,100), w.D(300,400,'v', 100,50))
}




WELDEDGE1=function(){

    W({ g:0, w:0  })

   // e  = w.edgeD(600,300,650,100); e1 = w.edgeD(700,300,750,100); e2 = w.edgeD(700,100,750,400); e3 = w.edgeD(500,200,950,10); w.f(e,e1,e2,e3)


   // b = w.B(450,350, 'y', 10)

   //  w.ship(450,350)

    x = w.edgeChain(
        [400,400, 500, 200],
        [500,200, 550,600]   ,
        [550,600,400, 400]
    )



}


WELDEDGE=function(){
    W([1200,600,2400,600],{

    })

   // W({w:0})
    w.G(100)//.zm(1)

    w.roof.kill()


    w.D(480, 400, 'r', 30)
    w.D(480, 400, 'b', 30)
    w.D(480, 400, 'y', 30)

    x = w.edgeArr(
        [400,400, 500, 200],

        [500,200, 550,600]   ,

        [550,600,400, 400]
    ).track()




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


WORLDCLICK= function(){W([1200,600,2400,600], {g:100 }) //.zm(1)

    w.roof.kill()

    //w.D(480, 400, 'r', 30); w.D(480, 400, 'b', 30); w.D(480, 400, 'y', 30)

    x = w.edgeArr([400,400, 500, 200],[500,200, 550,600],[550,600,400, 400]).track()

    b = w.D(100,100,'b', 20)


    w.$(function(x, y){

       // var sX= x,  sY= y,  wX   , wY

        var v = w.sToW(x,y)

        //w.S(  sX/1.5    + w.pX()/1.5,sY/1.5 + w.pY()/1.5 ,'z',  [  [10,10,'-']]  )

        w.S(v.x, v.y ,'z',  [  [10,10,'-']]  )

    }) // $l('sX: '+ sX +', '+ 'sY: '+ sY + ' - wX: '+ wX +', '+ 'wY: '+ wY)





    w.sc(1.5)
    x.X(1200)

    cjs.tick(function(){
        $l(w.mx + ', ' + w.my)
    })
}


// https://developer.chrome.com/devtools/docs/workspaces !!!!!