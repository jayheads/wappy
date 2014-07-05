//super fixture wrapper!
//depends on a fixture.. it only extends it with mets!
sFx  =function(f){

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

        return f.gSh().tPt(  f.gB().gTf(), m)

    }

    f.gT=function(a){

        var t=f.gB().gT()

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

    f.iS=function(a){
        if(U(a)){return f.isSensor}
        f.isSensor =a?true:false
        return f}

    f.uD=function(a){
        if(U(a)){return f.GetUserData()}
        f.SetUserData(a);return f}

    return f}

//makes a new super fixture
fDf=fDef=Fixt=FixtureDef=bF=function(s){//=b2FD

   var f =sFx(new b2FixtureDef).d(1)
    if(s){f.s(s)}

return f}








//makes a fixture set to a box that you specify,
// with default d,f,r
pFx   =fP=function(w,h,P,A){

    var g=G(arguments),
        w=g[0]||r1(),
        h=g[1]||w

    return fDf().s( pSh(w,h,P,A) )

        .d(1).f(.5).r(.8)

}


//makes a circle fixture
cFx =fC=function(a,x,y){
    a=a||r1()
    x=N(x)?x:0
    y=N(y)?y:x

    dafi=cSh(a)

    dafi.SetLocalPosition(bV(x/30,y/30))


    return fDf().s(

        dafi

    ).d(1).f(.5).r(.8)
}

