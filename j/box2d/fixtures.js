

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









//makes a fixture set to a box that you specify,
// with default d,f,r
pFx1   =function(w,h,P,A){//fP=

    var g=G(arguments),

        w=g[0]||r1(),

        h=g[1]||w

    return fDf().s(

        pSh(w,h,P,A)

    )

        .d(1).f(.5).r(.8)

}
