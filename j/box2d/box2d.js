

bDf=function(){return new b2BodyDef}

//super body wrapper!
//depends on a body.. it only extends it with mets!
sBd=function(b){

    b.cF   =b.f=function(a){

        a=a||fix()

        return b.CreateFixture(a)
    }
    b.m    =b.gM  =function(m){if(U(m)){return b.GetMass()}}
    b.wC   =b.c=  b.gWC=function(){return b.GetWorldCenter()}
    b.aw   =function(){
        var g=G(arguments)
        b.SetAwake(g.n?false:true)
        return b}
    b.wP   =function(x,y){

        var p= b.GetWorldPoint( bV(x/30,y/30) )

        return bV(p.x*30, p.y*30)
    }
    b.ps   = b.p  =function(x,y){

        var p=b.GetPosition()

        if(U(x)){
            return {x:p.x*30, y:p.y*30}
        }

        if(N(x)){

            x={x:x, y:(N(y)?y:p.y)}
        }

        b.SetPosition(x)

        return b}



    b.x=function(a){
        var p= b.ps()

        if(U(a)){return p.x}

        b.ps(a/30, p.y)

        return b}


    b.y=function(a){var p= b.ps()
        if(U(a)){return p.y }
        b.ps(p.x, a/30)
        return b}

    b.xy=function(x,y){
        b.position.x= x? x:r10()
        b.position.y= y? y:r10()

        return b}

    b.sP=function(x,y){b.SetPosition(bV(x/30, y/30))}
    b.sX=function(x){b.sP(x,b.y())}
    b.sY=function(y){b.sP(b.x(),y)}





    b.XY=function(x,y){//dep

        b.position.x= (x?x:r10())/30
        b.position.y= (y?y:r10())/30
        return b}

    b.gFL=function(){return sFx(b.GetFixtureList())}
    b.T= b.ty=function(a){
        if(U(a)){return b.GetType()}
        b.SetType(a)
        return b}
    b.t=function(a){
        if(U(a)){return b.type}
        b.type=a;
        return b}

    b.tf=  function(a){

        if(U(a)){  return b.GetTransform() }

        b.SetTransform(a)
        return b}

    b.aV=function(a){

        if(U(a)){return b.GetAngularVelocity()}

        b.SetAngularVelocity(a)

        return b}


    b.lV=function(n1,n2){

        if(U(n1)){return b.GetLinearVelocity()}

        if(N(n1)){a=bV(n1,n2)}
        b.SetLinearVelocity(a)

        return b}

    //set fixed rotation
    b.sFR= b.fR=function(a){b.SetFixedRotation(a)
        return b}

    //get next
    b.n= b.gN=function(){return sBd(b.GetNext())}


    b.dF=function(a){
        b.DestroyFixture(a)
        return b}


    b.aV=function(a){
        if(U(a)){return b.angularVelocity}
        b.angularVelocity=a;
        return b}



    b.aD=function(a){
        if(U(a)){return b.GetAngularDamping()}
        b.SetAngularDamping(a)
        return b}

    b.lD=function(a){
        if(U(a)){return b.GetLinearDamping()}
        b.SetLinearDamping(a)
        return b}


    //fixed rotation?
    b.fR=function(a){

        b.fixedRotation=a?true:false
        return b}

    b.rt=function(a){
        if(U(a)){return tDeg(b.GetAngle())}
        b.SetAngle(tRad(a))
        return b}


    // get/set user data
    b.uD=function(a){
        if(U(a)){return b.GetUserData()}
        b.SetUserData(a);
        return b}

    //user data first fixture?
    b.uDF=function(a){
        var f= b.gFL()
        if(U(a)){return f.GetUserData()}
        f.SetUserData(a);
        return b}

    //apply impulse. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aI  = function(v,c,c2){
        if(N(c)){return b.aI(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyImpulse(v,c)
        return b}

    //apply force. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aF  = function(v,c,c2){
        if(N(c)){return b.aF(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyForce(v,c)
        return b}

    return b}


sBdD=function(d){d=d||bDf()
    d.act=function(a){
        d.active=a?true:false
        return d}
    d.aS=function(a){
        d.allowSleep=a?true:false
        return d}

    d.rt=function(a){
        if(U(a)){return d.angle}
        d.angle=a
        return d} //The world angle of the body in radians.

    d.aD=function(a){
        if(U(a)){return d.angularDamping}
        d.angularDamping=a
        return d}


    d.aV=function(a){
        if(U(a)){return d.angularVelocity}
        d.angularVelocity=a
        return d}
    d.awake=function(a){
        d.active=a?true:false
        return d}
    d.bull=function(a){
        d.bullet=a?true:false
        return d}
    d.fR=function(a){
        d.fixedRotation=a?true:false
        return d}
    d.iS=function(a){if(U(a)){return d.insertiaScale}
        d.insertiaScale=a
        return d}
    d.lD=function(a){
        if(U(a)){return d.linearDamping}
        d.linearDamping=a
        return d}
    d.lV=function(a){
        if(U(a)){return d.linearVelocity}
        d.linearVelocity=a
        return d}



    //position
    d.p=d.ps= d.xy=function(x,y){

        var g=G(arguments),
            x=N(x)?x:r10()*60,
            y=N(y)?y:r10()*60

        if(O(x)){
            d.position=x;return d
        }

        d.position.Set(x/30,y/30)
        return d}




    // d.xy=function(x,y){return d.ps(bV(x/30, y/30))}
    //  get/set type

    d.T=  function(a){
        if(U(a)){return d.type}
        d.type=a
        return d}


    d.D=d.uD=function(a){
        d.active=a?true:false
        return d}
    return d}
dBD=function(x,y){return sBdD().T(2).xy(N(x)?x:300,N(y)?y:300)}
sBD=function(x,y){return sBdD().T(0).xy(N(x)?x:300,N(y)?y:300)}
kBD=function(x,y){return sBdD().T(1).xy(N(x)?x:300,N(y)?y:300)}





//super fixture wrapper!
//depends on a fixture.. it only extends it with mets!
sFx=function(f){
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

    f.tP=function(m,y){//f.txPt=
        if(N(y)){m=bV(m,y)}

        return f.gSh().tPt(
            f.gB().tf(), m
        )}



    f.gT=function(a){

        var t=f.gB().T()

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

    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}

    f.iS=function(a){
        if(U(a)){return f.isSensor}
        f.isSensor =a?true:false
        return f}

    f.uD=function(a){
        if(U(a)){return f.GetUserData() }
        f.SetUserData(a);return f}
    return f
}

sFxD=function(f){
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

        return f.gSh().tPt(f.gB().tf(),m)}

    f.gT=function(a){
        var t=f.gB().T()
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

    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}

    f.iS=function(a){
        if(U(a)){return f.isSensor}
        f.isSensor =a?true:false
        return f}

    f.uD=function(a){
        if(U(a)){return f.userData }
        f.userData=a;return f}
    return f
}


//makes a new super fixture
fDf=function(s){//=b2FD=fDef=Fixt=FixtureDef=bF=
    var f=sFxD(new b2FixtureDef).d(1)
    if(s){f.s(s)}
    return f}


//this class is for making rectangles
//pass w=20,h=w,x=0,y=x,degrees=0
pFx=function(a,b,c,d,e){//fPS=

    var p=function(w,h,P,A){//fP=

        var g=G(arguments), w=g[0]||r1(), h=g[1]||w

        return fDf().s(  pSh(w,h,P,A) ).d(1).f(.5).r(.8)}


    return U(c)? p(a||20, N(b)?b:a)

        : p(a, b, bV(c, N(d)?d:c,'-'), e||0 )

}

aFx=function(){
    return fDf( _a(aSh,
        _m(arguments,function(a){return bV(a[0]/30, a[1]/30)})
    ))
}

//makes a circle fixture
cFx =function(a,x,y){//fC=
    a=a||r1()
    x=N(x)?x:0
    y=N(y)?y:x

    dafi=cSh(a)

    dafi.SetLocalPosition(bV(x/30,y/30))

    return fDf().s(

        dafi

    ).d(1).f(.5).r(.8)
}














