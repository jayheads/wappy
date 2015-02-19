b2 =Box2D// BX=


//BXc  = b2.Common

//BXD   =b2Dynamics =dynamics = b2.Dynamics


b2B =b2Body= b2.Dynamics.b2Body

sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody
b2.Joints = BXJ=b2.Dynamics.Joints


b2.bodyDef = b2BodyDef  =b2.Dynamics.b2BodyDef
b2.fixtureDef = b2FixtureDef  =b2.Dynamics.b2FixtureDef
b2.fixture = b2Fixture   =b2.Dynamics.b2Fixture

b2.World = b2World   =b2.Dynamics.b2World


b2.debugDraw = b2DebugDraw   =b2.Dynamics.b2DebugDraw
    shB = b2DebugDraw.e_shapeBit
    jB = b2DebugDraw.e_jointBit
b2.joint = bJ =  b2.Joints.b2Joint
b2.jointDef = bJD = b2.Joints.b2JointDef
b2.distanceJoint =bDJ =b2.Joints.b2DistanceJoint
b2.mouseJointDef = b2MouseJointDef=b2.Dynamics.Joints.b2MouseJointDef


//BXC  =b2Collision=Collision= b2.Collision

b2.massData = b2MassData =b2.Collision.Shapes.b2MassData
b2.AABB = b2AABB=b2.Collision.b2AABB
b2.Shapes = b2.Collision.Shapes //BXS=
b2.PolygonShape = b2PolygonShape= b2.Shapes.b2PolygonShape
b2.CircleShape = b2CircleShape= b2.Shapes.b2CircleShape



b2.V = b2.vec =    bV =function(a,b){
    var g=G(arguments),
        a=g[0],
        b=g[1]
    if(g.n){a/=30;b/=30}
    return new b2.Common.Math.b2Vec2(a,b)}


b2.AB = AB=function(a,b,c,d){
    var ab=new b2AABB()
    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab}//get rectangle by two coords
b2.AB0001 = AB001 =function(a,b){return AB( a-.001, b-.001, a+.001, b+.001 )}









b2.testBodyPosition=function(){

    b2.mW()

    b = w.ba()



}




b2.bodyDef =BodyDef= bDf=function(){return new b2BodyDef}


b2.dynamicDef = b2.dynamicBodyDef =DynamicBodyDef=dBD=function(x,y){
    return SuperBodyDef().type(2).xy( N(x)?x:300, N(y)?y:300 )}


b2.staticDef = b2.staticBodyDef =StaticBodyDef=sBD=function(x,y){
    return SuperBodyDef().type(0).xy( N(x)?x:300, N(y)?y:300 )
}



b2.kinematicBodyDef = KinematicBodyDef=kBD=function(x,y){

    return SuperBodyDef().type(1).xy(
        N(x)?x:300, N(y)?y:300
    )

}

//makes a new super fixture
b2.fixtDef = b2.fixtureDef = fDf=function(shape){



    var f= SuperFixtureDef( new b2FixtureDef ).d(1)

    if(shape){ f.setShape(shape) }

    return f}

//this class is for making rectangles
//pass w=20,h=w,x=0,y=x,degrees=0

b2.polyDef = b2.polyFixtDef = b2.polyFixt =b2.polyFixture =b2.polygonFixture= PolyFixture=pFx=function(a,b,c,d,e){//fPS=

    var p=function(w,h,P,A){//fP=

        var g=G(arguments), w=g[0]|| Math.random()+.1, h=g[1]||w

        return b2.fixtureDef().setShape(
            PolyShape(w,h,P,A)

        ).d(1).f(.5).r(.8)}


    return U(c)? p(a||20, N(b)?b:a)

        : p(a, b, bV(c, N(d)?d:c,'-'), e||0 )

}

b2.ADef = b2.AFixtDef = b2.AFixt =b2.AFixture =      AFixture=aFx=function(){
    return b2.fixtDef(
        AShape.apply(null,
        _.map(arguments, function(a){
            return b2.V(a[0]/30, a[1]/30)})
        )

    )
}

//makes a circle fixture
b2.circDef = b2.circFixtDef = b2.circFixt = b2.circleFixture = CircleFixture =cFx=function(radius, x, y){//fC=

    radius = radius|| Math.random()+.1

    x=N(x)?x:0
    y=N(y)?y:x

    var circle = b2.circleShape(radius)

   circle.SetLocalPosition( b2.vec(x/30, y/30)  )

    return b2.fixtureDef().setShape(circle).d(1).f(.5).r(.8)

}








//aII=function(a){a.aI(100,100)}//for w.e testing
//bXX=function(a){if(a.uD()=='remove'){w.dB(a)}}
//bXXX=function(){w.e(bXX)}
//bXXXX=function(){s.t(bXXX)}

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
