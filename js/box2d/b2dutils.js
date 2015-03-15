(function v(){
    V=function(x,y,x2,y2){

        var g=G(arguments),
            x=g[0],y=g[1],x2=g[2],y2=g[3],
            vec

        if(A(x)){y2=x[3];x2=x[2];y=x[1];x=x[0]}
        if(N(y2)){x=(x-x2)/2;y=(y-y2)/2}//for dist difs?

        else if(O(x)){
            y=F(x.Y)?x.Y():x.y
            x=F(x.X)?x.X():x.x}
        x = N(x) ? x : 0
        y = N(y) ? y : x
        vec = new b2d.Common.Math.b2Vec2(x, y)
        if(g.n||g.d){vec=vec.div()}
        if(g.p||g.m){vec=vec.mult()}
        return vec}
    var v=b2d.Common.Math.b2Vec2.prototype
    v.mult = function (num) {
        num = N(num) ? num : 30
        var v = _.clone(this)
        v.Multiply(num)
        return v
    }
    v.div = function (num) {
        num = N(num) ? num : 30
        return this.mult(1 / num)
    }
    v.add = function (x, y) {

        if (O(x)) {
            y = x.y;
            x = x.x
        }

        x = N(x) ? x : 1
        y = N(y) ? y : x

        var v = V(this.x + x, this.y + y)
        return v
    }
    v.sub = function (x, y) {
        if (O(x)) {
            y = x.y;
            x = x.x
        }
        x = N(x) ? x : 1;
        y = N(y) ? y : x
        var v = V(this.x - x, this.y - y)
        return v
    }

    v.toFixed = function(n){n=N(n)?n:2
        var v=V(
            Number(this.x.toFixed(n)),
            Number(this.y.toFixed(n)))
    return v}

}())



b2d.pollute=function(){

    b2Vec2 = Box2D.Common.Math.b2Vec2
    b2AABB = Box2D.Collision.b2AABB
    b2BodyDef = Box2D.Dynamics.b2BodyDef
    b2Body = Box2D.Dynamics.b2Body
    b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    b2Fixture = Box2D.Dynamics.b2Fixture
    b2World = Box2D.Dynamics.b2World
    b2MassData = Box2D.Collision.Shapes.b2MassData
    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
    b2Shape = Box2D.Collision.Shapes.b2Shape
    b2Joint = Box2D.Dynamics.Joints.b2Joint
    b2Settings = Box2D.Common.b2Settings

}



b2d.isV=function(v){if(v){return v.constructor.name == "b2Vec2"}}



b2d.AB = b2d.AABB= function(x1,y1,x2,y2){

    var ab = new b2d.Collision.b2AABB()

    ab.lowerBound.Set(x1/30, y1/30)
    ab.upperBound.Set(x2/30, y2/30)

    return ab

}


b2d.AABB=function(a,b,c,d){//this is the one that works!

    var  aabb = new b2AABB()

    aabb.lowerBound.Set(a,b)

    aabb.upperBound.Set(c,d)

    return aabb}


b2d.AABB01 = function(a,b){return this.AABB( a-.001, b-.001, a+.001, b+.001 )}


b2d.AB0001 = AB001 =function(a,b){return AB( a-.001, b-.001, a+.001, b+.001 )}


b2d.isShape=function(h){
    var typ

    if(O(h)){

        typ = h.constructor.name
        return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")

    }
}




b2d.canWorld=function(color, wd, ht, grav, mJoints){
 var can = $.can(color, wd, ht).A(),
    w = can.wor(grav).tick().Z(30)
    if(mJoints != false){
        w.mouseJoints()  }
return w}


b2d.stgWorld=function(color, grav, wd, ht, mouseJoints){ var w
    if(!S(color)){
        mouseJoints=ht;
        ht=wd;
        wd=grav;
        grav=color;
        color='black'
    }
        grav= N(grav)?grav:10
        wd = wd||1200
        ht= ht||600

    w = b2d.world(V(0,grav)).Z(30).tripleStage(color,wd,ht)
    w.bug(w.ctx, 30, '*', .6 )

    if(S(mouseJoints)){
        w.mouseJoints(mouseJoints)
    }
    else if(mouseJoints!=false){
        w.mouseJoints()
    }




        cjs.tick(function(){
            w.draw(.1)
            w.s.update()})
        cjs.watchKeys()

    return w
    }
b2d.mat22=function(v1,v2){
    var m = new b2d.Mat22()
    m.SetVV(v1,v2)
    return m}


b2d.tf=function(v1,v2,v3){

    if(U(v1)){
        return new b2d.Math.b2Transform()
    }
    if(A(v1)){
        return b2d.tf(
            V(v1[0],v1[1]),
            V(v1[2],v1[3]),
            V(v1[4],v1[5]))}

    var tf= new b2d.Math.b2Transform(v1, b2d.mat22(v2,v3))



    return tf}

b2d.Common.Math.b2Transform.prototype.toArr = function(){var tf=this
    var pos=tf.position,
        R=tf.R,
        col1= R.col1,
        col2 = R.col2

    return [pos.x,pos.y,col1.x,col1.y, col2.x, col2.y]
}