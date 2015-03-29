(function v(){

    V=function(x,y,x2,y2){

        var g=G(arguments), x=g[0],y=g[1],x2=g[2],y2=g[3],v

        if(A(x)){y2=x[3];x2=x[2];y=x[1];x=x[0]}

        if(N(y2)){x=(x-x2)/2;y=(y-y2)/2}//for dist difs?

        else if(O(x)){
            y= F(x.Y)? x.Y() : x.y
            x= F(x.X)? x.X() : x.x
        }

        x = N(x) ? x : 0
        y = N(y) ? y : x


        v = new b2d.Common.Math.b2Vec2(x, y)

        if(g.n||g.d){ v=v.div() }

        if(g.p||g.m){ v=v.mult() }


        return v}




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


    v.add = function(vec,y){var v=this
        vec=U(vec)?V(1,1):V(vec,y)
        return V(v.x+vec.x, v.y+vec.y)
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

    v.dec = v.toFixed = function(n){n=N(n)?n:2
        var v=V(
            Number(this.x.toFixed(n)),
            Number(this.y.toFixed(n)))
    return v}

    v.rot=function(rot){var x=this.x, y=this.y,
        rot=Math.toRadians(rot),
        cos=Math.cos, sin=Math.sin
        return V(
                x*cos(rot)-y*sin(rot),
                x*sin(rot)+y*cos(rot)
        ).dec(3)}

}())


b2d.mult = function(v){return V(v).mult()}
b2d.div = function(v){return V(v).div()}

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

b2d.verts=function(){
    //all this does is to 'scale down' a series of points
    //can pass in pts naked OR in an array
    var g=G(arguments)
    if(g[1]){//passed in verts ([],[],[])
        return _.map(g, b2d.div)   }
    return _.map(g[0], b2d.div) //passed an array [[],[],[]]
}
Math.poly=function(points){//gpcas
    var poly= new PolyDefault()
    poly.addPoints(points)
    return poly}


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


b2d.AABB01 = function(x,y){//now used div
    var v=V(x,y).div(),
        x=v.x,
        y=v.y
    return this.AABB(x-.001, y-.001, x+.001, y+.001 )}






b2d.AB0001 = AB001 =function(a,b){return AB( a-.001, b-.001, a+.001, b+.001 )}


b2d.isShape=function(h){
    var typ

    if(O(h)){

        typ = h.constructor.name
        return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")

    }
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



dd= p=b2d.Dynamics.b2DebugDraw.prototype

dd.sprite = dd.spr = function(spr){  //it is looking for  a context?
    if(U(spr)){return this.GetSprite()}
    this.SetSprite( spr )
    return this}

dd.scale = dd.drawScale =p.dS= function(scale){
    if(U(scale)){return this.GetDrawScale()}
    this.SetDrawScale(scale)
    return this}

dd.alpha = dd.fillAlpha = dd.fA= function(a){
    if(U(a)){return this.GetFillAlpha()}
    this.SetFillAlpha(a)
    return this}

dd.line =dd.lineThickness =dd.lT= function(lt){
    if(U(lt)){return this.GetLineThickness()}
    this.SetLineThickness(lt); return this
}


dd.flags = p.fl =  function(flags){var DD=b2DebugDraw
    if(U(flags)){return this.GetFlags()}
    if(flags=='*'){
        flags=  (DD.e_shapeBit|DD.e_jointBit|DD.e_pairBit|DD.e_aabbBit|DD.e_centerOfMassBit|DD.e_controllerBit)}
    this.SetFlags(flags);return this}








b2d.debugDraw = function(sprite, scale, flags, alpha,line){

    var dd = new b2d.DebugDraw()

    //can pass in either canvas or context
    if($.isCan(sprite)){ sprite = sprite.ctx() }

    if(sprite){dd.sprite( sprite ) }

    if(scale){ dd.scale(scale) }

    if(flags){ dd.flags(flags)}

    dd.alpha( N(alpha)?alpha:0.5 )

    // dd.line( N(line)? line :1 )
    // dd.SetLineThickness(1)


    return dd}


b2d.F =  function(k){var arr=[]

    w.each(function(b){
        b.each(function(f){
            if(f.is(k)){arr.push(f)}
        })
    })

    return arr}
b2d.B =  function(k){var arr=[]
    w.each(function(b){if(b.is(k)){arr.push(b)}})
    return arr}
