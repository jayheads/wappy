
b2d.body = b2d.bodyDef = BodyDef = bDf =function(x, y){

    var bodyDef = new b2BodyDef()
    x=N(x)?x:300
    y=N(y)?y:300
    bodyDef.xy(x,y)

    return bodyDef}
b2d.dyn = b2d.dynamic = b2d.dynamicDef = b2d.dynamicBodyDef = dBD=function(x,y){return b2d.bodyDef(x,y).T(2)}
b2d.stat = b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=function(x,y){return b2d.bodyDef(x,y).T(0)}
b2d.kin = b2d.kinematic = KinematicBodyDef = kBD=function(x,y){return b2d.bodyDef(x,y).T(1)}




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
b =p=b2.Dynamics.b2Body.prototype


p.mass =  function(m){if(U(m)){

    return (this.GetMass()*900)/100


}}
p.wCent=  p.wC=  p.worldCenter= p.gWC= function(){
    return this.GetWorldCenter()}
p.cent=function(){

    var c = this.GetWorldCenter()

return V(c.x*30, c.y*30)}

        p.W=p.world=function(){return this.GetWorld()}

p.joint = function(){ return this.GetJointList().joint }
p.dot=function(){

    this.W().s.dot(this.cent())

}
p.sens=function(){this.list().sensor(true); return this}
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

    if(N(vel)){ vel = V(vel,n2) }

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



p.type =p.T= p.ty= p.t= function(a){
    if(U(a)){return this.GetType()}
    this.SetType(a)
    return this}
p.transform = p.tf=  function(tf){
    if(U(tf)){  return this.GetTransform() }
    this.SetTransform(tf)
    return this}
p.next = p.n = p.gN =function(){ return  this.GetNext()   }
p.destroyFixt= p.destroyFixture=p.dF=function(fixt){
    this.DestroyFixture(fixt)
    return this}
p.is=function(kind){
    //this is an OR statement.  at least one must be true
var that=this, is = false

        _.each(arguments, function(kind){

            if( that.K() == kind ){
                is=true
            }
        })

        return is}
p.not= p.notAny = function(kind){ //this is an AND: ALL MUST BE FALSE

    var that = this,
        not = true

        _.each(kind, function(kind){
           if( that.is(kind) ){
               not = false
           }
        })

        return not}
p.fixtData =p.fixtListUserData =p.uDF=function(userData){
    var fixtList= this.fixtureList()
    if(U(userData)){
        return fixtList.GetUserData()}
    fixtList.SetUserData(userData)
    return this}//user data first fixture?
//apply impulse. pass impulse as two nums, or obj
//and pass in location, defaults to body center
p.imp = p.I =p.impulse = p.applyImpulse = p.aI  = function self(impulse, point, point2){



    if(N(point)){
        impulse = V(impulse, point)
        point = point2}

    if(U(point)){
        point = this.GetWorldCenter()}


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
p.click=function(func){var body = this


    body.GetWorld().stage.on('stagemouseup',


        function(ev){



            w.queryPoint(

                function(fixt){

                    if(fixt.gB()==body){

                        _.bind(func,body)(fixt)
                    }
                },




                ev.rawX, ev.rawY  )



    })


  //

}
p.dot=function(){
    this.W().s.dot(this.X(), this.Y())
return this}
p.coll = function(func){var that=this

    w.begin(function(cx){
        if(cx.a() ==  that){ func(cx.a()) }
        if(cx.b() ==  that){ func(cx.b()) }})
return this}
p.collWithKind = function(kind, func) {var that = this

    this.W().begin(function (cx) {

        if (cx.a() == that && cx.b().is(kind)) {
            func(  cx.b())
        }


        if (cx.b() == that && cx.a().is(kind)) {
            func(  cx.a())
        }

    })
return this}




isBody=function(b){
  if(O(b)){
      return b.constructor.name=='b2Body'
  }
}

p.towards=function self(x,y,speedRat){

    //if(isBody(x)){return self(x.X(), x.Y(), y)}


    speedRat = speedRat || 100
    this.linVel( (x- this.X())/speedRat, (y- this.Y())/speedRat)
    //more realistic to accelerate, via forces?
return this}
p.shoot= function(){var vec, bullet

    bullet = this.GetWorld().bullet( abovePlayerGlobally(this) ).bindSprite('me', 0.15)

    vec = this.GetWorldVector(b2.V(0, -100))
    bullet.impulse(vec.x/20, vec.y/20 )


}
p.worldVec=function(vec, y){

    if(N(vec)){
        vec = V(vec,y)
    }

    return this.GetWorldVector(vec)
}
p.horizCenter=function(){

    var s = this.world().s

    return this.X(s.W()/2    )
return this}
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



p.bindSprite2=function(obj, startingRotation, x,y ){

    var body=this,
        stage=body.GetWorld().stage

    stage.A(obj)

    startingRotation = N( startingRotation) ?  startingRotation : 0

    body.sprites = body.sprites || []
    body.sprites.push(obj)
    body.sprite = obj


    updateSprite()

    cjs.tick(updateSprite)

        function updateSprite(){
            if(!body.sprite){return}


            _.each(body.sprites,function(sprite){
                 sprite.XY(body.X()+(x||0),body.Y()+(y||0))
                 sprite.rotation=body.rot()+startingRotation
            })





        }

    return body}


p.convex = function(arr, arr2){ /// color?

    var arrDef, shape, fixt, that=this

    if(!arr2){
    arrDef = b2d.Arr.apply(null,arr)
    fixt =this.fixt( arrDef )
    shape = w.s.poly(arr, 'blue','blue')
    this.bindSprite2(shape)
    return fixt
    }

    _.each(arguments, function(arg){
        that.convex(arg)
    })

return this

}





p.stat = function(){this.type(0);return this}
p.kin = function(){return this.type(1)}
p.dyn = function(){return this.type(2)}

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
p.when=function(){

    var body =this,
        w=body.GetWorld()//, listener=b2d.listener()

    return {contacts:function(kind, func){
        w.begin(function(cx){
            if(cx.with(kind)){func()}
            w.startListening()
        })

        return {after:function(func){
            w.end(function(cx){
                if(cx.with(kind)){func()}})
            w.startListening()
        }}}}

}
p.relPos=function(){

    return this.X() + this.world().s.X()
}
p.byImp=function(imp){
    if(cjs.Keys.right){this.I(imp,0)}
    else if(cjs.Keys.left){this.I(-imp,0)}
    return this}
p.byVel=function(vel){
    if (cjs.Keys.right) { p.linVel(vel, 0)}
    else  if (cjs.Keys.left) { p.linVel(-vel, 0)}

return this}
p.jumping=function(y, x){
    if(cjs.Keys.up) {
        if (cjs.Keys.right) {
            this.linVel(x, -(y - x))
        }
        else if (cjs.Keys.left) {
            this.linVel(-x, -(y - x))
        }
        else {
            this.linVel(0, -y)
        }
    }
return this}
p.trig = p.fixtListener =p.listener=  function(kind, func){var body=this

    body.when()
        .contacts(kind, function(){
            body.trig[kind]=true
        })

        .after(function(){
            body.trig[kind]=false
        })



    if(F(func)){

        cjs.tick(
            function(){
                if(body.trig[kind]){
                    _.bind(func, body)(  body.trig[kind] )
                }
            }



        )
    }

    return this}
p.den=function(den){

    if(U(den)){return this.list().GetDensity()}

    this.each(function(f){
        f.SetDensity(den)
    })

    this.ResetMassData()
    return this}
p.fric=function(fric){


    if(U(fric)){return this.list().GetFriction()}

    this.each(function(f){
        f.SetFriction(fric)
    })
     return this
}
p.rest=function(rest){


    if(U(rest)){return this.list().GetRestitution()}

    this.each(function(f){
        f.SetRestitution(rest)
    })
     return this

}
p.diff= p.dif = function(x, y){

    var ob = {

        x: x - this.X(),

        y: y - this.Y()

    }

    return ob}
p.cam = function(x, y){

        var v = this.diff(x,y)

        w.s.XY(v.x, v.y)

return this}
p.camX = function(x, y){

    var v = this.diff(x,y)

    w.s.X(v.x)

    return this}
p.followX=function(x,y){var that=this
    cjs.tick(function(){
        if(O(that.sprite)){
            that.camX(x,y)
        }})

return this}
p.follow=function(x,y){var that=this
    cjs.tick(function(){
        if(O(that.sprite)){
            that.cam(x,y)
        }})

    return this}

p.list=p.fixtList = p.fixtureList=p.gFL=function(){return this.GetFixtureList()}

p.each = p.eachFixt = function(func){

   var fl = this.GetFixtureList()


   var withList = function self(list, func){

        func(list)

        list = list.GetNext()

        if(list){return self(list, func)}}

    withList(fl, func)


}



p.fixt= p.createFixture = p.cF =  function(fixtData){


    if(U(fixtData)){return this.list()}
    //fixtData = fixtData|| b2.randomFixture()
    return this.CreateFixture(fixtData)
}



p.rect = function(wd, ht, x, y){x=N(x)?x:0; y=N(y)?y:0
var that=this

   var rect=b2d.poly(wd, ht, x, y)

   var fixt = this.fixt(rect)
    fixt.density = 1

  var r = cjs.rect2(wd, ht, x, y)


    r.XY(this.X(), this.Y())

    w.s.A(r)


    cjs.tick(function(){
        r.rot( that.rot() )
        r.XY(that.X(), that.Y()  )
    })


    return fixt}




p.rectSensor = function(wd, ht, x, y){x=N(x)?x:0; y=N(y)?y:0
    var that=this

    var rect = b2d.poly(wd, ht, x, y)

    rect.isSensor = true


    var fixt = this.fixt(rect)

    fixt.den(.00000001)


    var r = cjs.rect2(wd, ht, x, y)


    r.XY(this.X(), this.Y())

    w.s.A(r)

    r.opacity(.3)

    cjs.tick(function(){
        r.rot( that.rot() )
        r.XY(that.X(), that.Y()  )
    })

    fixt.sprite = r

    return fixt}



p.poly = function(){

    var fix =  this.fixt(  b2d.poly.apply(null, arguments)   )

return fix}


p.circ = function(){

    var fix =  this.fixt(  b2d.circ.apply(null, arguments)   )

    return fix}


//p.feetListener =function(){return this.listener('feet')}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

b2d.isBody=function(fixt){
    if(!fixt){return false}
    return fixt.constructor.name=="b2Body"}

TESTBODY=function(){

    b2.mW()

    m = w.ba()

}
FIXVSDEF=function(){w=b2d.W()

    fd = b2d.poly(10, 40)

    //  b = w.CreateBody( b2d.dyn(100,100)  )

    f = b.CreateFixture(fd)
}


TESTBINDBM=function(){z()
    w=b2.mW()
    b = w.ba().bindSprite('me')
    w.ba().bindSprite('me')
    w.ba().bindSprite('me')
}



FORCES=function(){


  w = b2d.mW({
      grav:0
  })


    b = w.box(400, 400, 200, 200).bindSprite('me')


  f=function(){

        b.I(0,-400, b.GetWorldPoint( b2d.V(100/30, -100/30) ))
    }

    f2=function(){

        cjs.tick(f)
    }

    w.player('thrust')
}




LINVEL3=function(){


    w = b2d.mW({
        //grav:0
    })


    b = w.box(400, 400, 200, 200).bindSprite('me')


    f=function(){

        b.SetLinearVelocity(b2d.V(-1,-1))

    }

    f2=function(){

        cjs.tick(f)
    }

  //  w.player('thrust')
}



LINVEL=function(){

    w = b2d.mW({
        g:0
    })


    _.times(10, function(){

        w.ball()

    })


   f=function(){

       w.each(function(body){

               body.SetLinearVelocity(b2d.V(0, 20))

           })

   }



    setInterval( f, 1000 )


    //cjs.tick(function(){})


}








p.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile=function(){
    var body = this


    var listener = b2d.listener()
        .begin(function(cx){var bod
            if(fixt = cx.with('feet')){
                fixt.gB().trig.onGround = true}
        })

        .end(function(cx){
            if(cx.with('feet')){
                body.trig.onGround=false }
        })

    this.GetWorld().listen(listener)

    return this}


