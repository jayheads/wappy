
b2d.edge = b2.edgeShape = function(v1, v2){

    v1 = v1 || V(10,10)

    v2 = v2 || V(1,100)


    var edge = new b2d.Shapes.b2EdgeShape(v1, v2)
    return edge}




b2d.chainDef = function(){
    return new b2d.Shapes.b2EdgeChainDef()

}





CHAINDEF=function(){  w = b2d.W({
        g: 0
    })


    b = w.ball()

    chainDef = new b2d.chainDef()

    //es = new b2d.Shapes.b2EdgeShape()


    chainDef.friction = 0.5
    chainDef.restitution = 0.0
    chainDef.isALoop = true
    chainDef.vertices.length = 0
    chainDef.userData = "vertex"
    ratio = 1

    vertexList = [
        {x: 120, y: 548},
        {x: 267, y: 480},
        {x: 484, y: 561},
        {x: 532, y: 328},
        {x: 602, y: 520},
        {x: 337, y: 608}
    ]

    _.each(vertexList, function (vertex) {
        chainDef.vertices.push( V(vertex)  )
    })



    chainDef.vertexCount = chainDef.vertices.length

    gb=w.GetGroundBody()

    edgeshape = gb.CreateShape(chainDef)

    w.DestroyBody( edgeshape.GetBody() )

}


CHAINDEF2=function(){
    z()


    w = b2d.W({g: 0})

    b = w.ball(600,100)

    ec = new b2d.Shapes.b2EdgeChainDef()
    ec.vertices.push(V(100,100))
    ec.vertices.push(V(200,200))
    ec.friction = 0.5
    ec.restitution = 0.0
    ec.isALoop = true
    ec.vertices.length = 0
    ec.userData = "vertex"


   e = w.dyn(100,100, fd= b2d.fixt(ec)  )



}


EDGES=function() {
    z()


    w = b2d.mW({grav: 0})


    b = w.ball(600,100)



 //  es = new b2d.Shapes.b2EdgeShape()

  //  edge.Set(v1, v2);




  createEdgeBody=function( world,  bodyType, x1,y1,x2,y2){


      bx=(x1+x2)/2
      by=(y1+ y2)/2
        bodyDef = b2d.dynamicDef(

            bx,by
        )
       

      


 
      len=  Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))



        bodyDef.angle=0;

        body = w.createBody(bodyDef)


//ADD EDGE FIXTURE TO BODY
        MakeEdgeShape(body,len,bodyType,1,0,1)

//CALCULATE ANGLE OF THE LINE SEGMENT
        body.setTransform(bx, by, MathUtils.atan2(y2-y1, x2-x1));

        return body
    }







  edge = function(body, len, BodyDef, bodyType, density,  restitution,  friction){

       fixtureDef=new FixtureDef()
        fixtureDef.density=density
        fixtureDef.restitution=restitution
        fixtureDef.friction=friction

         es=new EdgeShape()

//SET LENGTH IN BOX COORDINATES
          boxLen=ConvertToBox(len)
//SETTING THE POINTS AS OFFSET DISTANCE FROM CENTER
        es.set(-boxLen/2,0,boxLen/2,0);
        fixtureDef.shape=es;

        body.createFixture(fixtureDef);
        fixtureDef.shape.dispose();
    }

}



EDGESHAPE=function(){z()

    patch2()

    b2d.mW()

    bd = b2d.staticDef()
    b = w.CreateBody(bd)


    f = b2d.fixtDef()

   // es = b2d.edge(V(10,10 ,'-'), V(1,100,'-'))


    es = new b2d.Shapes.b2EdgeShape(

        V(100,100,'-'),

        V(200,200,'-'),

        V(0,0,'-'),

        V(10,20,'-'),
        V(250,106,'-'),

        V(10,20,'-')

    ) //m_v1, m_v2

    /*
    es.m_cornerDir1=V(100,100)
    es.m_cornerDir2=V(200,10)
    es.m_coreV1=V(100,100)
    es.m_coreV2=V(200,10)
    es.m_v1=V(100,100)
    es.m_v2=V(200,10)

*/


    f.shape =es
    f.m_shape = es

    //f.shape = b2d.circle()



    b.CreateFixture(f)


    w.ball()

}





//***** works!!!!!
ASEDGE=function(){ b2d.mW()

    w.edge(100,500,1000,0)
    w.edge(50,50,100,500)
    w.edge(0,0,1000,100)

    w.ball(410,100)
    w.player('standard')

}
HILLS = function(){z()


    b2d.mW()

    w.edge(100,100,500,300)
    w.edge(100,200,500,400)
    w.edge(100,300,500,500)

    w.edge(1000,100,600,300)

    w.edge(1000,200,600,400)
    w.edge(1000,300,600,500)



    w.ball(410,100)
    w.player('standard')


}






// https://developer.chrome.com/devtools/docs/workspaces !!!!!