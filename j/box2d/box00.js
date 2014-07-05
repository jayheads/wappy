

BX   =Box2D

BXc  =BX.Common

BXD   =b2Dynamics =dynamics = BX.Dynamics

b2B =b2Body=BXD.b2Body

sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody

b2BodyDef     =BXD.b2BodyDef
b2FixtureDef  =BXD.b2FixtureDef

b2Fixture   =BXD.b2Fixture
b2World     =BXD.b2World
b2DebugDraw   =BXD.b2DebugDraw


BXJ=BXD.Joints
bJ =  BXJ.b2Joint
bJD = BXJ.b2JointDef
bDJ =BXJ.b2DistanceJoint

b2MouseJointDef=BXD.Joints.b2MouseJointDef

shB=b2DebugDraw.e_shapeBit
jB=b2DebugDraw.e_jointBit


BXC  =b2Collision=Collision=BX.Collision

b2MassData =BXC.Shapes.b2MassData

b2AABB=BXC.b2AABB

BXS=BXC.Shapes

b2PolygonShape=BXS.b2PolygonShape
b2CircleShape=BXS.b2CircleShape



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

