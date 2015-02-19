p=b2.World.prototype


p.draw=function(){this.DrawDebugData();return this}
p.debugData  =p.dD=p.sDD=p.sdd=p.dDD=function(data){
    if( U(data) ){ this.draw() }  //sloppy!!
    else{  this.SetDebugDraw(data) }
    return this}






p.step = p.st=function(){
    var args=G(arguments)
    this.Step.apply(this, args)
    return this}
p.clearForces = p.cF =p.clF=function(){  this.ClearForces(); return this }
p.createBody = p.b  = p.cB=function(def){
    return this.CreateBody( def  || BodyDef()  )}

p.A = p.addBody = p.add = p.a =function(b,f){
    b=this.createBody(b)

    if(f){   if(A(f)){
        _.each( f, function(f){   b.createFixture(f)   } )}
    else { b.createFixture(f) } }
    return b}


p.destroyBody = p.destroy = p.dB=function(a){ this.DestroyBody(a); return this }
p.destroy = p.destroyAll = p.destroyAllBodies=function(){
    return this.eachBody(function(b){ this.destroy(b)  })}
p.getBodyList = p.bL =function(){

    return this.GetBodyList()

}
p.eachBody = p.each =  p.e = function( func, userData ){

    //this.eB=for each body
    //can pass a cb to be run on EACH body
    //can also pass a uD to restrict cb to
    //run only on bodies with that uD

    var a = this.GetBodyList()

    _.times( this.GetBodyCount() - 1,

        function(){

        a

            if( !userData ){ func(a) }

            else { if( a.GetUserData() == userData ){ func(a) } }

            a =   a.GetNext()

        })

    return this}
p.getBodyCount = p.bC = p.gBC=function(){  return this.GetBodyCount()  }
p.createJoint=p.j=p.cJ=function(a){

    var SuperJoint = sJt=function(j){


        //shared
        j.init= j.i  = j.i1=function(){


            j.Initialize.apply(j,  G(arguments))

            return j}

        j.collide = j.cC=function(a){
            j.collideConnected=a?true:false; return j
        }

        //pops
        j.target = j.sT    = function(a,b){
            if(!O(a)){a=bV(a,b)}
            j.SetTarget(a)

            return j}

        j.freq =j.f  =function(a){j.frequencyHz=a;return j}

        j.len = j.l  =function(a){
            j.length=a/30
            return j}

        j.len2 =function(len){

            if( U(len) ){ return j.GetLength() * 30 }

            j.SetLength( len/30 )

            return j

        }

        j.dampRat =j.d  =function(a){j.dampingRatio=a;return j}


        //motor
        j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
            j.maxMotorSpeed=a
            return j}

        //motor rev



        j.mt=j.motor =j.enableMotor = j.eM = function(a){
            j.EnableMotor( a ? true : false )
            return j}

        j.speed = j.motorSpeed=j.mS=function(speed){
            if(U(speed)){return this.GetMotorSpeed()}
            this.SetMotorSpeed(speed)
            return this}

        j.torque = function(torq){
            if(U(torq)){
                return this.GetMotorTorque()}
            this.SetMaxMotorTorque(torq)
            return this}

        j.maxTorque = j.mMT=  j.mT=function(a,b,c){
            j.SetMaxMotorTorque(a,b,c); return j}

        j.maxForce = j.mMF=  j.mF=function(a,b,c){
            j.SetMaxMotorForce(a,b,c); return j}


        j.lm= j.limits =j.setLimits = j.sL = function(a,b){

            a = N( a ) ? a : 20

            b = N( b ) ? b : 180

            j.SetLimits( tRad(a), tRad(b) )

            return j}


        j.enableLimits= j.enableLimit = j.eL=function(a){
            j.EnableLimit( a?true:false)
            return j}


        return j}


    var j=this.CreateJoint(a)

    return SuperJoint(j)

}
p.destroyJoint=p.dJ=p.dj=function(a){ this.DestroyJoint(a); return this}
p.setContactFilter = p.sCF = p.SetContactFilter
p.setContactListener = p.sCL = p.SetContactListener
p.onBeginContact = p.oB=function(f){

    this.sCL(
        ContactListener().b(f)
    )

    return this
}
p.onEndContact = p.oE = function(func){

    this.setContactListener(

        ContactListener().endContact( func ) )

    return this}
p.getGroundBody = p.gB =p.gGB=function(){  return this.GetGroundBody()  }
p.queryAABB = p.Q =p.q =p.qAB=function(a,b){  this.QueryAABB(a,b); return this}
p.Revolute = function(a,b, c,d, e,f){var g=G(arguments)

    //pass in body1, body2, world-bV = body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


    var j= SuperJointDef( new b2.Joints.b2RevoluteJointDef() )

    var joint = j

    joint.init =joint.i = function(){
        joint.Initialize.apply(joint,  G(arguments) )
        return joint}

    //convenience functions
    joint.motor = joint.mt = function(speed, torque, enable){

        joint.speed(speed)

        joint.maxTorque( N(torque)? torque : 100)

        if( enable != '-' ){ joint.enableMotor(1) }

        return joint }


    joint.limits= joint.lm= function( lowAng, upAng, enable ){

        joint.lowAng( lowAng ).upAng( upAng )

        if( enable != '-' ){ joint.enableLimits(1) }

        return joint }


    if( U(c) ){ c = a.worldCenter() }

    if( O(c) ){  joint.init( a, b, c )}

    else if(N(e)){   joint.A(a).B(b).lAA( bV(c/30,d/30)).lAB( bV(e/30,f/30)) }

    else if(N(c)){    joint.init(a,b, bV(c/30,d/30)) }



    this.createJoint( joint )
    return joint}
p.Rev=function(a,b,c,d){

    return this.createJoint(

        RevoluteJointDef( a, b, c, d)

    )}
p.Prism=function(a,b,c,d,e,f,g,h){

    var joint= world.createJoint(

        PrismaticJointDef( a, b, c, d,e,f,g,h)

    )

    return SuperPrismatic(joint)}
p.Gear=function(a,b,c){

    return world.createJoint( Gear(a,b,c) )
    function Gear(bA, bB, ratio){
        var gearJoint = new b2.Joints.b2GearJointDef()
        gearJoint.joint1 = bA
        gearJoint.joint2 = bB
        gearJoint.bodyA = bA.GetBodyA()
        gearJoint.bodyB = bB.GetBodyA()
        gearJoint.ratio = N(ratio)? ratio : 1
        return gearJoint}}
p.FixBody=function(x,y){

    return this.addBody(  dBD(x,y),fix())
}
p.makeWalls=function(ops) {

    var width = this.canvas.width,
        height = this.canvas.height


    if (ops) {
        if (S(ops.walls)) {
            window[ ops.walls ]()}
        if (F(ops.walls)) {
            ops.walls()}}

    else {
        this.bii(height, width / 2, width, 40).uD('floor')
        this.bii(width / 2, 0, width, 40).uD('ceiling')
        this.bii(0, height / 2, 40, height).uD('rightWall')
        this.bii(width, height / 2, 40, height).uD('leftWall')
    }
}
p.getBodyAtPoint=function( x,y ){
    var selectedBody=null
    this.QueryAABB( queryFunc, AB( x-.001, y-.001, x+.001, y+.001 ) )
    return selectedBody? selectedBody: false

    function queryFunc(fxt){
        var fixtIsStatic = SuperFixture(fxt).getType( sB )
        if( !fixtIsStatic &&  fxt.testPoint(mX, mY)){       // f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))
            selectedBody = fxt.gB()
            return false}
        return true}}
p.ba  =function(x,y,r){

        x = x || 100

        y = N(y) ? y : x

        r = r || 20

        return this.addBody(

            DynamicBodyDef( x, y ),

            CircleFixture( r )

        )

    }
p.baa =function(x,y,r){
        x=x||100
        y=N(y)?y:x
        r=r||20

        return this.addBody( StaticBodyDef(x,y), CircleFixture(r) )

    }
p.bi  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W

        return this.addBody(

            DynamicBodyDef(x,y),    PolyFixture(W, H).r(0))

    }
p.bii =function(x,y,W,H){//brk2=brick=

        x=N(x)?x:60;
        y=N(y)?y:x
        W=N(W)?W:30; H=N(H)?H:W

        return this.addBody(StaticBodyDef(x,y),   PolyFixture(W, H).r(0) )

    }
p.addRandomBody = p.randomFixture=function(){
        var body= this.A( b2.dynamicDef().xy(), b2.randomFixture() )
        return body}
p.addRandomBodies=function(howMany){howMany=howMany||10; var that=this
        _.times( howMany, function(){that.addRandomBody( b2.dynamicDef().xy(), b2.randomFixture() )})
        return this}
p.addTenBalls=function(num){num=num||10;var that=this
        _.times(num, function(i){
            that.ba(100 + (i*80), 200)
        })

        return this}
p.addHundBalls =function(num){num=num||100;var that=this
        _.times(num, function(i){
            that.ba( 100  +(i*8),  50, 10) })
        return this}
p.addTim=function(num){var that=this
        if(U(num)){return that.ba().uD('tim').bindSprite('guy', .3)}
        _.times(num, function(){that.addTim()})
        return this}
b2.world =b2.W = function(a,b){
    var world = new b2.World(a, D(b)?b:false)
    return world}



p=b2.Dynamics.b2DebugDraw.prototype
p.sprite =p.sp=p.sSp=p.sS=p.ss=function(sprite){
    if(U(sprite)){return this.GetSprite()}
    this.SetSprite(sprite)
    return this}
p.scale = p.drawScale =p.dS=p.sDS=function(scale){
    if(U(scale)){return this.GetDrawScale()}
    this.SetDrawScale(scale)
    return this}
p.fillAlpha = p.fA=p.sFA=function(a){
    if(U(a)){return this.GetFillAlpha()}
    this.SetFillAlpha(a)
    return this}
p.lineThickness =p.lT=p.sLT=function(lt){
    if(U(lt)){
        return this.GetLineThickness()}
    this.SetLineThickness(lt)
    return this}
p.flags = p.fl =p.sF = function(flags){
    if(U(flags)){return this.GetFlags()}
    this.SetFlags(flags)
    return this} //append flags  //clear flags
b2.debugDraw=function(sprite, scale){ //=DebugDraw=dbD
    var dd = new b2DebugDraw(), d=dd  //dbD =DebugDraw =bDD=b2DD=
    if(sprite){dd.sprite(sprite)}
    if(scale){dd.scale(scale)}
    return dd}




