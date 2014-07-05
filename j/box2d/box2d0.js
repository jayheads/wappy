bV=function(a,b,c){
    var g=G(arguments),
        a=g[0],b=g[1],
        b2Vec2=BXc.Math.b2Vec2

    if(g.n){a/=30;b/=30}
    return new b2Vec2(a,b)

}

AB=function(a,b,c,d){
    var ab=new b2AABB()
    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab
}//get rectangle by two coords




bW   =World=function(a,b){
    b=D(b)?b:false

    var w=new b2World(a,b)





    w.e= w.eB=w.cb=function(f){//for each body
        var a=w.gBL();
        _t(w.gBC()-1,  function(){  f(a) ;    a=a.n()       })

    return w}

    aII=function(a){ a.aI(100,100) }
    bXX=function(a){if(a.uD()=='remove'){w.dB(a)}}



    w.q=w.qAB=w.QueryAABB

    w.gBC=function(){return w.GetBodyCount()}

    w.sDD=w.sdd=function(a){w.SetDebugDraw(a);return w}
    w.st=function(){var g=G(arguments)
         _a(w.Step,g,w);return w}
    w.dDD=w.ddd=function(){w.DrawDebugData();return w}
    w.clF=w.cf=function(){w.ClearForces();return w}


    w.b=w.cB=function(def){//=w.cb
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
    w.sCL=w.SetContactListener


    w.j=w.cJ=w.j=w.cj=function(a){var j=w.CreateJoint(a)



        return sJt(j)}
    w.dB=function(a){w.DestroyBody(a);return w}
    w.dJ=w.dj=function(a){w.DestroyJoint(a);return w}

    w.gGB=w.ggb=function(){
        return w.GetGroundBody()
    }

    w.q=function(a,b){w.QueryAABB(a,b);return w}

    w.gBL=function(){
       return sBd(w.GetBodyList())}

    return w}//=b2W

aII=function(a){a.aI(100,100)}//for w.e testing
bXX=function(a){if(a.uD()=='remove'){w.dB(a)}}
bXXX=function(){w.e(bXX)}
bXXXX=function(){s.t(bXXX)}



