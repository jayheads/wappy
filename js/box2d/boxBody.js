d=b2.Dynamics.b2BodyDef.prototype //SuperBodyDef= sBdD=function(a){return a|| b2.bodyDef() }
d.XY = d.p=d.ps=d.xy=function(x,y){
    var args=G(arguments)
    args[0]=x; args[1]=y;
    if(x==='*'){ x= Math.random()*10*60}
    if(y==='*'){ y= Math.random()*10*60}
    var pos=this.position
    if(U(x)){return {x:pos.x*30, y:pos.y*30}}
    //if(O(x)){this.position=x;return this}
    this.position.Set(x/30,y/30)
    return this}
d.X =  function(x){
    var pos = this.XY()
    if(U(x)){return pos.x}
    return this.XY(x, pos.y)}
d.Y =  function(y){
    var pos = this.XY()
    if(U(y)){return pos.y}
    return this.XY(pos.x,y)}
//
d.T=d.kind =   function(type){
    if(U(type)){return this.type}
    this.type=type
    return this}
d.linVel = d.lV=function(vel){
    if(U(vel)){return this.linearVelocity}
    this.linearVelocity=vel;return this}
d.angVel = d.aV=function(vel){
    if(U(a)){return this.angularVelocity}
    this.angularVelocity=vel
    return this}
d.linDamp = d.lD=function(damp){
    if(U(damp)){return this.linearDamping}
    this.linearDamping=damp;return this}
d.angDamp =d.aD=function(damp){
    if(U(damp)){return this.angularDamping}
    this.angularDamping=damp; return this}
d.rot = d.ang =  function(ang){
    //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?

    if(U(ang)){return d.angle}
    this.angle=ang; return this}
d.fixedRot = d.fR=function(isFixed){
    if(U(isFixed)){return this.fixedRotation}
    this.fixedRotation=isFixed; return this}
d.inertia=function(inertia){
    if(U(inertia)){return this.insertiaScale}
    this.insertiaScale=inertia; return this}
//
d.act=d.setActive=function(isActive){
    this.active =isActive? true:false
    return this}
d.sleepy = d.aS = function(canSleep){
    this.allowSleep=canSleep?true:false
    return this}
d.bul = d.bull = d.fR=function(isBul){
    if(U(isBul)){return this.bullet}
    this.bullet=isBul; return this}
d.data=function(){}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



p=b2.Dynamics.b2Body.prototype
p.fixt= p.createFixture = p.cF =  function(fixtData){
    fixtData = fixtData|| b2.randomFixture()
    return this.CreateFixture(fixtData)
}
p.mass =  function(m){if(U(m)){return this.GetMass()}}
p.wCent=  p.wC=  p.worldCenter= p.gWC= function(){
    return this.GetWorldCenter()}
p.awake= function(){
    var g=G(arguments)
    this.SetAwake(g.n? false:true)
    return this}
p.wPoint= p.worldPoint = p.wP   =function(x,y){
    var pt = this.GetWorldPoint( b2.V(x/30,y/30) )
    return b2.V(pt.x*30, pt.y*30)}
p.XY= p.xy = function(x,y){

    if(x==='*'){x =Math.random()*10 }
    if(y==='*'){y =Math.random()*10 }
    if(U(x)){var pos = this.GetPosition()
        return {x:parseInt(pos.x*30), y:parseInt(pos.y*30)}}
    y=N(y)?y:x
    this.SetPosition({ x:x/30, y:y/30 })
    return this}

p.X =  function(x){
    var pos = this.XY()
    if(U(x)){return pos.x}
    return this.XY(x, pos.y)}
p.Y =  function(y){
    var pos = this.XY()
    if(U(y)){return pos.y}
    return this.XY(pos.x,y)}


p.angVel=   p.aV= function(vel){
    if(U(vel)){return this.GetAngularVelocity() }
    this.SetAngularVelocity(vel)
    return this}
p.linVel =p.linearVelocity=p.lV=function(vel, n2){

    if(U(vel)){return this.GetLinearVelocity()}

    if(N(vel)){ vel = b2.V(vel,n2) }

    this.SetLinearVelocity(vel)

    return this}
p.angDamp=  p.aD= function(damp){
    if(U(damp)){return this.GetAngularDamping()}
    this.SetAngularDamping(damp)
    return this}
p.linDamp=  p.lD= function(damp){
    if(U(damp)){return this.GetLinearDamping()}
    this.SetLinearDamping(damp)
    return this}
p.rot = p.rT = p.rt= p.rotation = p.angle = p.ang = function(angle){
    if(U(angle)){return Math.toDegrees(this.GetAngle())}
    this.SetAngle(Math.toRadians(angle))
    return this}

p.K = p.addClass = p.kind = p.kind = p.data = p.userData = p.uD= function(data){
    if(U(data)){return this.GetUserData()}
    this.SetUserData(data)
    return this}




p.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}

p.fixtList = p.fixtureList=p.gFL=function(){
    return this.GetFixtureList()}



p.type =p.T= p.ty= p.t= function(a){
    if(U(a)){return this.GetType()}
    this.SetType(a)
    return this}
p.transform = p.tf=  function(tf){
    if(U(tf)){  return this.GetTransform() }
    this.SetTransform(tf)
    return this}
p.next = p.n = p.gN =function(){ return  b.GetNext()   }
p.destroyFixt= p.destroyFixture=p.dF=function(fixt){
    this.DestroyFixture(fixt)
    return this}
p.is=function(userData){return this.uD() == userData} //dep
p.fixtData =p.fixtListUserData =p.uDF=function(userData){
    var fixtList= this.fixtureList()
    if(U(userData)){
        return fixtList.GetUserData()}
    fixtList.SetUserData(userData)
    return this}//user data first fixture?
//apply impulse. pass impulse as two nums, or obj
//and pass in location, defaults to body center
p.imp = p.I =p.impulse = p.applyImpulse = p.aI  = function self(impulse , point, point2){

    if(N(point)){
        impulse = b2.V(impulse , point)
        point = point2}

    if(U(point)){point = this.wCent()}

    this.ApplyImpulse(impulse, point)

    return this}


p.hop=function(){
    return this.aI(0,-30)}
//apply force. pass impulse as two nums, or obj
//and pass in location, defaults to body center
p.applyForce = p.aF  = function(v,c,c2){

    if(N(c)){return this.aF(

        b2.bV(v, c), c2

    )}

    if( U(c) ){ c = this.worldCenter() }

    this.ApplyForce(v, c)

    return this}
p.click=function(func){



}

p.bindSprite=function( img,   scale,  startingRotation ){

    var body=this, stage = body.GetWorld().stage
    //img is an image name
    //rotation is in degerees!
    scale = scale||.4

    startingRotation = N( startingRotation) ?  startingRotation : 6

    stage.bm(img, function(bm){//b=bm  //bm.rCenter('+')
        if( A(scale) ){  bm.sXY( scale[0] , scale[1] )} else { bm.sXY(scale) }
        body.sprite = bm
        updateSprite()

        cjs.tick(updateSprite)

        function updateSprite(){
            bm.XY(body.X(),body.Y())
            bm.rotation=body.rot()+startingRotation}



    },'-')



    return body}


p.world=function(){return this.GetWorld()}

p.kill=function(){
    if(this.sprite){
        this.sprite.remove()
    }
    this.sprite=null
    this.destroy()}


p.destroy=function(){
    $l('destroy!')
    this.world().DestroyBody(this)}

p.setDestroy=function(){return this.uD('destroy')}
p.setDestroyIf=function(data){
    if(this.is(data)){this.setDestroy()}
}



p.warpToTopLeft=function(){ this.XY(200, 100);  return this } //setY, setX



p.bindKeyboard = function(cont){ //p.moveListener=
    var that=this

    control = (b2.controls[cont] || b2.controls.trickJump )

    control()

    cjs.tick(function(){
        that.rot(0)
        that.world().each(
            function(body){
                if(body.is('destroy')){body.destroy()}}
        )})}



p.controlMe= function(control){
    var that =this
    cjs.tick(function(){
        b2.controls[control||'standard'](that)
    })

    return this}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



TESTBODY=function(){

    b2.mW()

    m = w.ba()

}


TESTBINDBM=function(){z()
    W=b2.mW()
    b = w.ba().bindSprite('me')
    w.ba().bindSprite('me')
    w.ba().bindSprite('me')
}







