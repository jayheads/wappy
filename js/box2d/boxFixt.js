
//SuperFixture=sFx=function(f){return f}

f=b2.Dynamics.b2Fixture.prototype

f.den=f.d=function(a){this.density=a;return this}

f.fric = f.f=function(a){this.friction=a;return this}

f.rest= f.r=function(a){
    this.restitution=a;
    return this}

f.gB=  f.bd=function(){

    return  this.GetBody()

}

f.sh= f.s=function(a){
    this.shape=a;
    return this}


f.gSh=function(){
    return  this.GetShape()
}

f.sSAP  =f.sP=f.setShapeAsAPoly=function(){return this.s(pSh())}

f.set=function(x,y){
    this.shape.Set(x,y)
    return this
}

f.sAB=function(a,b,p,A){

    if(!p){this.shape.SetAsBox(a/30,b/30)}

    else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
    return this}

f.testPoint= f.tP=function( m, y ){

    if( N(y) ){ m = b2.V(m, y) }

    return    this.GetShape().testPoint(

        this.GetBody().GetTransform(),

        m

    )
}
f.getType = f.gT=function(someType){

    var thisType =  this.GetBody() .GetType()

    return  D(someType)?  (thisType == someType) : thisType

}

f.gI=function(a){
    if(U(a)){return this.filter.groupIndex}
    this.filter.groupIndex=a; return this}

f.category = f.cB=function(a){
    if(U(a)){return this.filter.categoryBits}
    this.filter.categoryBits=a; return this}

f.mask = f.mB=function(a){
    if(U(a)){return this.filter.maskBits}
    this.filter.maskBits=a; return this}

f.gI=function(a){
    if(U(a)){return this.filter.groupIndex}
    this.filter.groupIndex=a; return this}

f.sensor = f.iS= function(a){
    if(U(a)){
        return this.isSensor
    }

    this.isSensor =a? true: false

    return this}

f.userData=f.uD=function(a){
    if(U(a)){return this.GetUserData() }
    this.SetUserData(a);return this}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SuperFixtureDef =sFxD=function(f){return f}
f=b2.Dynamics.b2FixtureDef.prototype

f.den =f.d=function(density){
    this.density = density;
    return this}


f.fric =f.f=function(a){this.friction=a;return this}
f.rest =f.r=function(a){this.restitution=a;return this}
f.getBody =f.gB =function(){

    return  this.GetBody()

}


f.setShape =f.sh= f.s=function(shape){
    this.shape=shape;
    return this}


f.getShape =f.gSh=function(){

    return  this.GetShape()
}

f.sSAP  =f.sP=f.setShapeAsAPoly=function(){

    return this.s(PolyShape())

}


f.set=function(x,y){
    this.shape.Set(x,y)
    return this
}

f.sAB=function(a,b,p,A){

    if(!p){this.shape.SetAsBox(a/30,b/30)}

    else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
    return this}


f.tP = f.txPt=function( m, y ){

    if( N( y ) ){ m = bV(m,y) }

    return sSh( this.GetShape() ).testPoint(

        this.GetBody( ).getTransform(),

        m

    )}




f.getType=f.gT=function(a){

    var t= this.GetBody() .T()

    if( D(a) ){return t==a}

    return this}

f.gI=function(a){
    if(U(a)){return this.filter.groupIndex}
    this.filter.groupIndex=a; return this}
f.category=f.cB=function(a){
    if(U(a)){return this.filter.categoryBits}
    this.filter.categoryBits=a; return this}
f.mask=f.mB=function(a){
    if(U(a)){return this.filter.maskBits}
    this.filter.maskBits=a; return this}
f.gI=function(a){
    if(U(a)){return this.filter.groupIndex}
    this.filter.groupIndex=a; return this}
f.sensor= f.iS=function(a){
    if(U(a)){return this.isSensor}
    this.isSensor =a?true:false
    return this}
f.uD=function(a){
    if(U(a)){return f.userData }
    this.userData=a;return this}


