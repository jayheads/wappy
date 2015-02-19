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
p.X = p.x=function(x){
    var pos = this.XY()
    if(U(x)){return pos.x}
    return this.XY(x, pos.y)}
p.Y = p.y=function(y){
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

p.data = p.userData = p.uD=function(data){
    if(U(data)){return this.GetUserData()}
    this.SetUserData(data)
    return this}

p.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}

p.fixtList = p.fixtureList=p.gFL=function(){return sFx(this.GetFixtureList())}
p.type =p.T= p.ty= p.t= function(a){
    if(U(a)){return this.GetType()}
    this.SetType(a)
    return this}
p.transform = p.tf=  function(tf){
    if(U(tf)){  return this.GetTransform() }
    this.SetTransform(tf)
    return this}
p.next = p.n = p.gN =function(){ return SuperBoxBody(b.GetNext())  }
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

p.applyImpulse = p.aI  = function self(impulse , point, point2){

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

    var body  =this
    //img is an image name
    //rotation is in degerees!
    scale = scale||.4

    startingRotation = N( startingRotation) ?  startingRotation : 6

    var stage = this.GetWorld().stage

    stage.bm(img,   function(bm){//b=bm  //bm.rCenter('+')

        if( A(scale) ){  bm.sXY( scale[0] , scale[1] )} else { bm.sXY(scale) }

        bm.rotation =  startingRotation

        cjs.tick( function(){
            bm.XY(body.X(),body.Y())
            bm.rotation =  body.rot() +  startingRotation
        })

        body.sprite =bm
    })

    return body}
p.kill=function(){
    if(this.sprite){
        this.sprite.remove()}
    this.sprite=null
    this.destroy()}
p.destroy=function(){
    this.GetWorld().destroy(this)
    return this}

TESTBODY=function(){

    b2.mW()

    m = w.ba()

}

TESTBINDBM=function(){z()
    b2.mW()
    b =w.ba().bindSprite('me')
    w.ba().bindSprite('me')
    w.ba().bindSprite('me')}

SuperBodyDef= sBdD=function(d){

    d=d||BodyDef()

    d.act=function(a){
        d.active=a?true:false
        return d}

    d.aS=function(a){

        d.allowSleep=a?true:false
        return d
    }


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
        return d
    }


    d.iS=function(a){
        if(U(a)){return d.insertiaScale}
        d.insertiaScale=a
        return d}

    d.lD=function(a){
        if(U(a)){return d.linearDamping}
        d.linearDamping=a
        return d
    }

    d.linVel = d.lV=function(a){
        if(U(a)){return d.linearVelocity}
        d.linearVelocity=a
        return d
    }



    //position
    d.p=d.ps= d.xy=function(x,y){

        var g=G(arguments),
            x=N(x)?x:Math.random()*10*60,
            y=N(y)?y:Math.random()*10*60

        if(O(x)){
            d.position=x;return d
        }

        d.position.Set(x/30,y/30)
        return d}




    // d.xy=function(x,y){return d.ps(bV(x/30, y/30))}
    //  get/set type

    d.type=d.T=  function(a){
        if(U(a)){return d.type}
        d.type=a
        return d
    }


    d.userData= d.D = d.uD=function(a){
        d.active=a?true:false
        return d}
    return d}

