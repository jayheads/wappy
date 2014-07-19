
bV =function(a,b){var g=G(arguments),a=g[0],b=g[1]
    if(g.n){a/=30;b/=30}
    return new BXc.Math.b2Vec2(a,b)}



AB=function(a,b,c,d){
    var ab=new b2AABB()
    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab
}//get rectangle by two coords


AB001 =function(a,b){return AB( a-.001,b-.001, a+.001, b+.001)}


dbD  =function(){var d=new b2DebugDraw()//dbD =DebugDraw =bDD=b2DD=

    d.sp =d.sSp = d.sS=d.ss=function(a){
        if(U(a)){return d.GetSprite()}
        d.SetSprite(a);return d}

    d.dS =d.sDS =function(a){
        if(U(a)){return d.GetDrawScale()}
        d.SetDrawScale(a);return d}

    d.fA = d.sFA =function(a){
        if(U(a)){return d.GetFillAlpha()}
        d.SetFillAlpha(a);return d}

    d.lT = d.sLT =function(a){
        if(U(a)){return d.GetLineThickness()}
        d.SetLineThickness(a);return d}

    d.sF =function(a){
        d.SetFlags(a);return d}

    d.fl=function(a){
        if(U(a)){return d.GetFlags()}
        d.SetFlags(a)
        return d}


    //append flags
    //clear flags
    return d}


bW   =World=function(a,b){


    var w=new b2World(a,D(b)?b:false)

    w.e = function(f,uD){//w.eB=for each body
        //can pass a cb to be run on EACH body
        //can also pass a uD to restrict cb to
        //run only on bodies with that uD

        var a=w.bL()

        _t(w.bC()-1,

            function(){sBd(a)

                if(uD){
                      if(a.uD()==uD){f(a)}}


                    else {f(a)}

                a=a.n()

            })




    return w}




    w.bC =w.gBC=function(){return w.GetBodyCount()}

    w.dD= w.sDD=w.sdd=w.dDD=function(a){
        if(U(a)){w.DrawDebugData()}
        else{w.SetDebugDraw(a)}

        return w}





    w.st=function(){var g=G(arguments)
         _a(w.Step,g,w);return w}

    w.cF=w.clF=function(){//w.cf=
        w.ClearForces();return w}

    w.b =w.cB=function(d){
        return sBd(w.CreateBody(d||bDf()))}
    w.a =function(b,f){
        b=w.cB(b)

        if(f){
            if(A(f)){ _e(f,function(f){b.cF(f)})}

            else {b.cF(f)} }

        return b}


    w.sCF =w.SetContactFilter
    w.sCL =w.SetContactListener

    w.oB=function(f){
        w.sCL(bCL().b(f))
        return w}

    w.oE=function(f){
        w.sCL(bCL().e(f))
        return w}



    w.j=w.cJ=function(a){var j=w.CreateJoint(a)



        return sJt(j)}

    w.dB=function(a){w.DestroyBody(a);return w}
    w.dJ=w.dj=function(a){w.DestroyJoint(a);return w}

    w.gB =w.gGB=function(){return w.GetGroundBody()}

    w.Q =w.q =w.qAB=function(a,b){w.QueryAABB(a,b);return w}

    w.bL =function(){//w.gBL=
       return sBd(w.GetBodyList())}

    return w}//=b2W


aII=function(a){
    a.aI(100,100)}//for w.e testing

bXX=function(a){
    if(a.uD()=='remove'){w.dB(a)}
}

bXXX=function(){w.e(bXX)}
bXXXX=function(){s.t(bXXX)}



