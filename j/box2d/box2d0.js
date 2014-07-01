//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs


BX=Box2D

BXc  =BX.Common
b2Dynamics =dynamics = BXD=BX.Dynamics

b2Body = dynamics.b2Body

sB=b2Body.b2_staticBody
dB=b2Body.b2_dynamicBody

b2BodyDef     =BXD.b2BodyDef
b2FixtureDef  =BXD.b2FixtureDef
b2Fixture =BXD.b2Fixture
b2World =BXD.b2World
b2DebugDraw =BXD.b2DebugDraw

shB=b2DebugDraw.e_shapeBit

jB=b2DebugDraw.e_jointBit

b2MouseJointDef=BXD.Joints.b2MouseJointDef

b2Collision=Collision=BXC=BX.Collision
b2MassData=BXC.Shapes.b2MassData

b2PolygonShape=BXC.Shapes.b2PolygonShape
b2CircleShape=BXC.Shapes.b2CircleShape
b2AABB=BXC.b2AABB
BXJ=BXD.Joints








makeWorld=function(a){

    if(a!='-'){z()}

    var w=boxMouseSetup()

    setupDebugDraw()
    setFixtures()
    makeWalls()
    makeShapeOnDblClk()

return w}



sBd  =function(b){

    b.cF=b.f=function(a){

        a=a||fix()

        return b.CreateFixture(a)
    }




    b.m  =b.gM  =function(m){if(U(m)){return b.GetMass()}}

    b.wC   =b.c=  b.gWC=function(){return b.GetWorldCenter()}

    b.aw = b.sAw  =b.a=function(){
          var g=G(arguments)
           b.SetAwake(g.n?false:true)
           return b}


    b.ps   = b.p  =function(x,y){
          var p=b.GetPosition()
          if(U(x)){return p}

        if(N(x)){
            x={x:x,y:y||p.y}}

         b.SetPosition(x)

         return b}
    b.x=function(a){
        var p= b.ps()

        if(U(a)){return p.x*30}

        b.ps(a/30, p.y)
        return b
    }
    b.y=function(a){
        var p= b.ps()

        if(U(a)){return p.y*30}

        b.ps(p.x, a/30)
        return b
    }


    //apply impulse. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aI  = b.apI=function(v,c,c2){
        if(N(c)){return b.aI(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyImpulse(v,c)
        return b}

    //apply force. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aF  =b.apF=function(v,c,c2){
        if(N(c)){return b.aF(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyForce(v,c)
        return b}



    b.gT= b.gTy= b.ty=b.GetType

    b.gTf= b.tf= b.GetTransform

    b.aV=function(a){

        if(U(a)){return b.GetAngularVelocity()}

        b.SetAngularVelocity(a)

        return b}

    b.lV=function(a){

        if(U(a)){return b.GetLinearVelocity()}

        b.SetLinearVelocity(a)

        return b}


    b.sFR= b.fR=function(a){b.SetFixedRotation(a)
    return b}


b.dF=function(a){
    b.DestroyFixture(a)

    return b
}



    return b}

sFx  =function(f){

    f.d=function(a){f.density=a;return f}
    f.f=function(a){f.friction=a;return f}
    f.r=function(a){f.restitution=a;return f}


    f.gB=  f.bd=function(){

        return sBd(f.GetBody())

    }



    f.sh= f.s=function(a){
        f.shape=a;
        return f}

    f.gSh=function(){

       return sSh(f.GetShape())
    }


    f.sSAP  =f.sP=f.setShapeAsAPoly=function(){return f.s(pSh())}

    f.set=function(x,y){
        f.shape.Set(x,y)
        return f
    }

    f.sAB=function(a,b,p,A){

        if(!p){f.shape.SetAsBox(a/30,b/30)}

        else{ f.shape.SetAsOrientedBox(a/30,b/30,p,A)}
        return f}



f.tP=f.txPt=function(m,y){
       if(N(y)){m=bV(m,y)}

        return f.gSh().tPt(  f.gB().gTf(), m)

}

    f.gT=function(a){

       var t=f.gB().gT()

        if(D(a)){return t==a}

    return t}


    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}

    f.cB=function(a){
        if(U(a)){return f.filter.categoryBits}
        f.filter.categoryBits=a; return f}

    f.mB=function(a){
        if(U(a)){return f.filter.maskBits}
        f.filter.maskBits=a; return f}

    f.iS=function(a){
        if(U(a)){return f.isSensor}
        f.isSensor =a?true:false
        return f}



    return f}

bV   =function(a,b,c){
    var g=G(arguments),
        a=g[0],b=g[1],
        b2Vec2=BXc.Math.b2Vec2

    if(g.n){a/=30;b/=30}
    return new b2Vec2(a,b)

}



//makes body defs (to pass to world (w.a(body def)))

bDf    =       bDef=bB=b2BD=function rc(a,x,y){

    var b=a


    //check if b is an instantiated body def
    //by making sure it is an object

    if(!O(b)){


        //if it is NOT an object,
        //then it could be pams

        b=rc(new b2BodyDef)
        //insantiate a new body def

        if(N(a)){b.t(a)}
        //if a is a Number, it is actually representing a type
        //(either sB or dB)
        //so set the type

        if(N(y)){b.xy(x,y)}
        //if y is a number,
        //set the location

    }


    //assume b is an instantiated body def

    b.t=function(a){
        if(U(a)){return b.type}
        b.type=a;
        return b}

    b.aV=function(a){
        if(U(a)){return b.angularVelocity}
        b.angularVelocity=a;
        return b}

    b.aD=function(a){
        if(U(a)){return b.angularDamping}
        b.angularDamping=a;
        return b}

    b.ang=function(a){
        if(U(a)){return b.angle}
        b.angle=a;
        return b}

    b.xy=function(x,y){

        b.position.x= x? x:r10()
        b.position.y= y? y:r10()

        return b}


    b.XY=function(x,y){

        b.position.x= (x?x:r10())/30
        b.position.y= (y?y:r10())/30

        return b}


    b.p=b.ps=function(x,y){
        var g=G(arguments),x=x||r10(),y=y||r10()
         x/=30;y/=30
        b.position.Set(x,y);
        return b}




    b.fR=function(a){

        b.fixedRotation=a?true:false

        return b}


    b.a=function(a){b.angle=a;return b}
    b.ud=function(a){b.userData=a;return b}
    return b}





fDf       =fDef=Fixt=FixtureDef=bF=function(){//=b2FD
    var f=new b2FixtureDef
    return sFx(f)}


bW    =World=function(a,b){
    b=D(b)?b:false

    var w=new b2World(a,b)

    w.qAB=  w.QueryAABB

    w.sDD=w.sdd=function(a){w.SetDebugDraw(a);return w}

    w.st =function(){var g=G(arguments)
         _a(w.Step,g,w);return w}

    w.dDD =w.ddd=function(){w.DrawDebugData();return w}
    w.clF =w.cf=function(){w.ClearForces();return w}


    w.cB = w.b= function(def){//=w.cb
        def=def||bDf()
        var b=w.CreateBody(def)
        b=sBd(b)
        return b}



    w.a=function(b,f){

        b=w.cB(b)

        if(f){

            if(A(f)){

                _e(f,function(f){
                    b.cF(f)})
            }

            else {b.cF(f)}

        }

        return b}




    w.sCF=w.SetContactFilter
    w.sCL=  w.SetContactListener


    w.cJ=w.j=w.cj=function(a){var j=w.CreateJoint(a)



        return sJt(j)}


    w.dB= function(a){w.DestroyBody(a);return w}


    w.dJ=w.dj=function(a){w.DestroyJoint(a);return w}

    w.gGB=w.ggb=function(){
        return w.GetGroundBody()
    }

    w.q=function(a,b){w.QueryAABB(a,b);return w}

    return w}//=b2W
AB   =function(a,b,c,d){
    var ab=new b2AABB()
    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab
}//get rectangle by two coords


//super shape
sSh   =function(s){


    s.tP=  s.tPt=s.tp=function(a,b){return s.TestPoint(a,b)}



    return s}





//poly shape
pSh   =function(x,y,P,A){

    var p=new b2PolygonShape

    p.sAB  =p.z=p.sab=function(a,b,P,A){

        var g=G(arguments),
            a=g[0], b=g[1]||a,  P=g[2], A=g[3]

        a/=30;b/=30;

       // if(g.N){

            if(A){A=tRad(A)}
      //  }

        if(!P){p.SetAsBox(a,b)}
        else {p.SetAsOrientedBox(a,b, P, A)}
        return p}



    p.sAA=p.saa=function(a,b){

        p.SetAsArray(a,b)
        return p}  //if(P){p.z(x,y,P,A);return p}


    if(x){p.sAB(x,y,P,A)}

    return p}



//circleShape
cSh   =function(a){
    var s=new b2CircleShape(a/30)
    return sSh(s)}








pFx=fP   =function(w,h,P,A){

    var g=G(arguments),
        w=g[0]||r1(),
        h=g[1]||w


    // w/=30;  h/=30

    return fDf().s(

        pSh(w,h,P,A)

    ).d(1).f(.5).r(.8)

}





cFx=fC=function(a,x,y){
a=a||r1()
x=N(x)?x:0
    y=N(y)?y:x

    dafi=cSh(a)

    dafi.SetLocalPosition(bV(x/30,y/30))


    return fDf().s(

        dafi

    ).d(1).f(.5).r(.8)
}

