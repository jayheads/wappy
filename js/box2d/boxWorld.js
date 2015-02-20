b2 =Box2D// BX=
//BXc  = b2.Common
//BXD   =b2Dynamics =dynamics = b2.Dynamics
b2B =b2Body= b2.Dynamics.b2Body
sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody
b2.Joints = BXJ=b2.Dynamics.Joints
b2.bodyDef = b2BodyDef  =b2.Dynamics.b2BodyDef
b2.fixtureDef = b2FixtureDef  =b2.Dynamics.b2FixtureDef
b2.fixture = b2Fixture   =b2.Dynamics.b2Fixture
b2.World = b2World   =b2.Dynamics.b2World

b2.DebugDraw = b2DebugDraw   =b2.Dynamics.b2DebugDraw
    shB = b2.DebugDraw.e_shapeBit
    jB = b2.DebugDraw.e_jointBit



b2.joint = bJ =  b2.Joints.b2Joint
b2.jointDef = bJD = b2.Joints.b2JointDef
b2.distanceJoint =bDJ =b2.Joints.b2DistanceJoint
b2.mouseJointDef = b2MouseJointDef=b2.Dynamics.Joints.b2MouseJointDef
//BXC  =b2Collision=Collision= b2.Collision
b2.massData = b2MassData =b2.Collision.Shapes.b2MassData
b2.AABB = b2AABB=b2.Collision.b2AABB
b2.Shapes = b2.Collision.Shapes //BXS=
b2.PolygonShape = b2PolygonShape= b2.Shapes.b2PolygonShape

b2.CircleShape = b2CircleShape= b2.Shapes.b2CircleShape


b2.V = b2.vec =    bV =function(a,b){
    var g=G(arguments),
        a=g[0],
        b=g[1]
    if(g.n){a/=30;b/=30}
    return new b2.Common.Math.b2Vec2(a,b)}
b2.AB = AB=function(a,b,c,d){
    var ab=new b2AABB()
    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab}//get rectangle by two coords
b2.AB0001 = AB001 =function(a,b){return AB( a-.001, b-.001, a+.001, b+.001 )}
b2.testBodyPosition=function(){

    b2.mW()

    b = w.ba()



}
b2.bodyDef =BodyDef= bDf=function(){return new b2BodyDef}
b2.dynamicDef = b2.dynamicBodyDef =DynamicBodyDef=dBD=function(x,y){
    return b2.bodyDef().T(2).xy( N(x)?x:300, N(y)?y:300 )}
b2.staticDef = b2.staticBodyDef =StaticBodyDef=sBD=function(x,y){
    return b2.bodyDef().T(0).xy( N(x)?x:300, N(y)?y:300 )
}


b2.kinematicBodyDef = KinematicBodyDef=kBD=function(x,y){

    return b2.bodyDef().T(1).xy(
        N(x)?x:300, N(y)?y:300
    )

}
b2.fixtDef = b2.fixtureDef = function(shape){
    var fixtDef=   new b2FixtureDef().den(1)

    if(shape){ fixtDef.setShape(shape) }

    return fixtDef} // fDf=
//this class is for making rectangles
//pass w=20,h=w,x=0,y=x,degrees=0


b2.polyFixtDef = b2.polyDef = b2.polyFixt =b2.polyFixture =b2.polygonFixture= PolyFixture=pFx=function(a,b,c,d,e){//fPS=

    var p=function(w,h,P,A){//fP=

        var g=G(arguments), w=g[0]|| Math.random()+.1, h=g[1]||w

        return b2.fixtureDef().setShape(

            b2.polyShape(w,h,P,A)

        ).d(1).f(.5).r(.8)}


    return U(c)? p(a||20, N(b)?b:a)

        : p(a, b, bV(c, N(d)?d:c,'-'), e||0 )

}


b2.ADef = b2.AFixtDef = b2.AFixt = b2.AFixture =     function(){
    return b2.fixtDef(
        b2.AShape.apply(null,
        _.map(arguments, function(a){
            return b2.V(a[0]/30, a[1]/30)})
        )

    )


}


//makes a circle fixture
b2.circDef = b2.circFixtDef = b2.circFixt = b2.circleFixture = CircleFixture =cFx=function(radius, x, y){//fC=

    radius = radius|| Math.random()+.1

    x=N(x)?x:0
    y=N(y)?y:x

    var circle = b2.circleShape(radius)

   circle.SetLocalPosition( b2.vec(x/30, y/30)  )

    return b2.fixtureDef().setShape(circle).d(1).f(.5).r(.8)

}




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



p=b2.World.prototype


p.draw=function(){this.DrawDebugData();return this}

p.debug =p.debugDraw  =p.dD= p.sDD=  function(data){
     this.SetDebugDraw(data)
    return this}







p.step =  function(){
    var args=G(arguments)
    this.Step.apply(this, args)
    return this}



p.clear = p.clearForces = p.cF = function(){  this.ClearForces(); return this }

p.createBody = p.b  = p.cB=function(def){
    return this.CreateBody( def  || BodyDef()  )}

p.body =p.A = p.addBody = p.add = p.a =function(b,f){
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
p.joint =p.createJoint=p.j=p.cJ=function(a){

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

p.listen = p.setContactListener = p.sCL = p.SetContactListener

p.onBeginContact = p.oB=function(f){

    this.listen(
        b2.listener().begin(f)
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
p.makeWalls=function(walls){

    var width = this.canvas.width,
        height = this.canvas.height

    if(D(walls)){

        if (S(walls)) {
            window[  walls ]()}
        if (F(walls)) {
            walls()}
    }

    else {
        this.bii(height, width / 2, width, 40).uD('floor')
        this.bii(width / 2, 0, width, 40).uD('ceiling')
        this.bii(0, height / 2, 40, height).uD('rightWall')
        this.bii(width, height / 2, 40, height).uD('leftWall')
    }
}

p.addMe=function(){
    var bodyDef = b2.dynamicDef(100,100)
    var fix1 =    b2.polyDef(50,100).rest(0).den()
    var fix2 =    b2.polyDef(10,30,0,40).uD('feet').sensor(1)
    var player = this.A(bodyDef ,   [ fix1 , fix2 ]   ).uD( 'player' )
    player._direction = 1
    player.dir = player.direction = player.dr = function(direction){
        if(U(direction)){return this._direction}
        this._direction = direction
        return this}
    player.speed = 40
    player.moveX =  function(n){
        if (n == '-'){  return player.move( - player.speed )}
        n = N(n) ? n : player.speed
        if ( player.direction() ) {  player.aI(3,0) }  else {  player.aI(-3,0) }
        return player}
    player.fixtList().SetFriction(1)
    player.bindSprite('me')
    return player}

p.getBodyAtPoint=function( x,y ){
    var selectedBody=null
    this.QueryAABB( queryFunc, AB( x-.001, y-.001, x+.001, y+.001 ) )
    return selectedBody? selectedBody: false

    function queryFunc(fxt){
        var fixtIsStatic =  fxt.getType( sB )
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

        b2.dynamicDef(x,y),    b2.polyFixtDef(W, H).r(0))

}
p.bii =function(x,y,W,H){//brk2=brick=

    x=N(x)?x:60;
    y=N(y)?y:x
    W=N(W)?W:30; H=N(H)?H:W

    return this.addBody(StaticBodyDef(x,y),   b2.polyFixtDef(W, H).r(0) )

}

p.ball  =function self(x,y,r){

    if(O(x)){r=y; y=x.y; x=x.x}

    x = x || 100

    y = N(y) ? y : x

    r = r || 30

    return this.A(b2.dynamicDef(x,y), b2.circDef(r)).K('ball')
}



//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}

p.bullet=function self(x,y,r){
    if(O(x)){r=y; y=x.y; x=x.x}
    x = x || 100
    y = N(y) ? y : x
    r = r || 10
    return this.A(b2.dynamicDef(x,y), b2.circDef(r))
        .K('bullet')}

p.bumper  =function(x,y,r){
    x = x || 100
    y = N(y) ? y : x
    r = r || 20
    return this.A(b2.staticDef(x,y),b2.circDef(r)).K('bumper')}
p.box  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 50; H = N(H) ? H : W

    return this.A(   b2.dynamicDef(x,y),    b2.polyDef(W, H).r(0)).K('box')

}
p.brick  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.A(   b2.staticDef(x,y),    b2.polyDef(W, H).r(0)).K('brick')

}
p.wall  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.A(   b2.staticDef(x,y),    b2.polyDef(W, H).r(0)).K('wall')

}
p.platform  =function(x,y,W,H){//=brk=brick=

    x = N(x) ? x : 60; y = N(y) ? y : x
    W = N(W) ? W : 30; H = N(H) ? H : W

    return this.A(   b2.staticDef(x,y),    b2.polyDef(W, H).r(0)).K('platform')

}















p.addRandomBody = p.randomFixture=function(){
    var body= this.A(

        b2.dynamicDef().X(Math.random()*1000),

        b2.randomFixture() )
    return body}



p.random=p.addRandomBodies=function(howMany){howMany=howMany||10; var that=this
    _.times( howMany, function(num){

        that.addRandomBody()

    })

    return this}

p.startKilling=function(){var that=this

    cjs.tick(function(){
        that.each(function(body){
            if(body.is('destroy')){body.kill()}})
    })

}

p.begin=function(func){

   this.listen( b2.listener().begin( func )  )

return this}
p.end=function(func){

    this.listen( b2.listener().end( func )  )

    return this}
p.pre=function(func){

    this.listen( b2.listener().pre( func )  )

    return this}
p.post=function(func){

    this.listen( b2.listener().post( func )  )

    return this}
//////


p.flag=function(flag, cx){
    this.flags[flag]=cx||true; return this}
p.flagged=function(flag){
    var wasFlagged = this.flags[flag]
    if(wasFlagged){this.flags[flag]=false; }
    return wasFlagged}
p.on=function(onWhat, func){var that=this
    cjs.tick(function(){
        if(that.flagged(onWhat)){func()}})}


p.onBegin=function(){var that=this
    _.each(arguments, function(func){
        that.beginHandlers.push(func)})}

p.collide=function(k1,k2,flag){
    var that=this, name=k1+k2
    this.onBegin(function(cx){
        if(cx.isBetween(k1,k2)){that.flag(name,cx)}})
    cjs.tick(function(){var cx=that.flagged(name)
        if(cx){flag(cx)}})}

p.collideAny=function(kind, flag){var that=this
    this.onBegin(function(cx){
        if(cx.includes(kind)){that.flag(kind,cx)}})
    cjs.tick(function(){var cx=that.flagged(kind)
        if(cx){flag(cx)}})}



p.startListening = function(){
    var that=this
    this.listener=b2.listener()
    this.listen(this.listener)
    this.listener.BeginContact=function(cx){
        _.each(that.beginHandlers,
            function(func){func(cx)})}}







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



p.footListener=function(){

    //footListener?
//sets b2.onGround setter
//requires a body that has userData 'feet', and it simply see if it is colliding with anything


    b2.onGround = false    // if make this local, graphics dissapear!?

    var listener = b2.listener()

    listener.begin(function(contact){

            var a = contact.A(),
                b = contact.B()
            if (a.userData() == 'feet' || b.userData() == 'feet') {  b2.onGround =true}
        })

    listener.end(function(contact){
            var a = contact.A(),
                b = contact.B()
            if (a.userData() == 'feet' || b.userData() == 'feet') {b2.onGround=false}})

    this.listen(listener)

    return this}



p.player=function(onEachTick,enemy){

    cjs.watchKeys()
    this.footListener()
    this.startKilling()

    var pl=this.addMe(),
        func
    if(S(onEachTick)){onEachTick=b2.controls[onEachTick]}

    if(F(onEachTick)){

       cjs.tick(function(){  onEachTick(pl, enemy) })
    }

return pl}


///////  ///////  ///////  ///////  ///////  ///////  ///////  ///////  ///////  ///////

b2.world =b2.W = function(a,b){
    var world = new b2.World(a, D(b)?b:false)
    world.flags={}
    world.beginHandlers=[]
    world.endHandlers=[]
    world.preHandlers=[]
    world.postHandlers=[]
    world.startListening()
    return world}

//aII=function(a){a.aI(100,100)}//for w.e testing
//bXX=function(a){if(a.uD()=='remove'){w.dB(a)}}
//bXXX=function(){w.e(bXX)}
//bXXXX=function(){s.t(bXXX)}

//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs
