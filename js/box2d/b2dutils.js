V=b2d.V=function(a,b){
    var g=G(arguments),  a=g[0],  b=g[1]

    if(O(a)){
        b= a.y
        a= a.x
    }

    if(g.n){a/=30;b/=30}
    return new b2d.Common.Math.b2Vec2(a,b)}
Math.V = $V = function self(a,b,c,d){//returns coords needed for centering

    var g=G(arguments),o,
        a=g[0]

    if(N(d)){

        return self( (a-c)/2, (b-d)/2
        )  }

    if(A(a)){return self.apply(null, a)}

    if(O(a)){

        return self(
            F(a.x)? a.x(): a.x,
            F(a.y)? a.y(): a.y
        )}

    a=a||0
    b=b||a||0

    return {x:a, y:b}

}

b2d.AB = AABB = AB=function(a,b,c,d){

    var ab=new b2AABB() // ??

    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab

}//get rectangle by two coords
b2d.AB0001 = AB001 =function(a,b){return AB( a-.001, b-.001, a+.001, b+.001 )}





b2d.isShape=function(h){
    var typ

    if(O(h)){

        typ = h.constructor.name
        return typ == "b2PolygonShape"
    }
}
