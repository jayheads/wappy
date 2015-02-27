b2d = b2 = Box2D



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





b2B =b2Body= b2d.Dynamics.b2Body

sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody

b2d.Joints = BXJ=b2d.Dynamics.Joints
b2d.bodyDef = b2BodyDef  =b2d.Dynamics.b2BodyDef

  b2FixtureDef  = b2d.Dynamics.b2FixtureDef

b2d.fixture = b2Fixture   =b2d.Dynamics.b2Fixture
b2d.World = b2World   =b2d.Dynamics.b2World

b2d.DebugDraw = b2DebugDraw   =b2d.Dynamics.b2DebugDraw
shB = b2d.DebugDraw.e_shapeBit
jB = b2d.DebugDraw.e_jointBit


b2d.joint = bJ =  b2d.Joints.b2Joint
b2d.jointDef = bJD = b2d.Joints.b2JointDef
b2d.distanceJoint =bDJ =b2d.Joints.b2DistanceJoint
b2d.mouseJointDef = b2MouseJointDef=b2d.Dynamics.Joints.b2MouseJointDef

b2d.massData = b2MassData =b2d.Collision.Shapes.b2MassData
b2d.AABB = b2AABB=b2d.Collision.b2AABB
b2d.Shapes = b2d.Collision.Shapes //BXS=
b2d.PolygonShape = b2PolygonShape= b2d.Shapes.b2PolygonShape

b2d.CircleShape = b2CircleShape= b2d.Shapes.b2CircleShape






