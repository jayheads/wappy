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

d.X=  function(x){

    var pos = this.XY()
    if(U(x)){return pos.x}

    return this.XY(x, pos.y)
}




d.Y=  function(y){
    var pos = this.XY()
    if(U(y)){return pos.y}
    return this.XY(pos.x,y)}



d.T=d.kind =   function(type){
    if(U(type)){return this.type}
    this.type=type
    return this}

d.linVel = d.lV=function(vel){
    var v=this.linearVelocity
    if(U(vel)){  return v }
    this.linearVelocity = vel
    return this}







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









b2d.isBody = isBody=function(b){if(O(b)){return b.constructor.name=='b2Body'}}


b=p=b2.Dynamics.b2Body.prototype

b.mass =function(m){if(U(m)){return (this.GetMass()*900)/100}}
b.wor = b.W =b.world=function(){return this.GetWorld()}


b.XY=function(x,y){var newPos
    if(x==='*'){x =Math.random()*10 }
    if(y==='*'){y =Math.random()*10 }
    if(U(x)){
        var pos = this.GetPosition()
        return pos.mult()} //used to parseInt.. necessary?
    y=N(y)?y:x
    newPos= V( x/30, y/30 )
    this.SetPosition(newPos)
    return this}





b.X=function(x){var g=G(arguments),pos=this.XY()
    if(U(x=g[0])){return pos.x}
    this.XY($.update(pos.x,x,g),pos.y)
    return this}
b.Y=function(y){var g=G(arguments),pos=this.XY()
    if(U(y=g[0])){return pos.y}
    this.XY(pos.x, $.update(pos.y,y,g))
    return this}





b.angVel=   p.aV= function(vel){
    if(U(vel)){return this.GetAngularVelocity() }
    this.SetAngularVelocity(vel)
    return this}

b.linVel =p.linearVelocity=p.lV=function(vel, n2){

    var v=this.GetLinearVelocity()

        if(U(vel)){return v}
    if(N(vel)){ vel = V(vel, n2) }
    this.SetLinearVelocity(vel)

    return this}



b.angDamp=  p.aD= function(damp){
    if(U(damp)){return this.GetAngularDamping()}
    this.SetAngularDamping(damp)
    return this}
b.linDamp=  p.lD= function(damp){
    if(U(damp)){return this.GetLinearDamping()}
    this.SetLinearDamping(damp)
    return this}




b.rot =function(angle){   //= p.rT=p.rt=p.rotation=p.angle=p.ang

    var g=G(arguments),
        ang=g[0],
        newAng,
        currAng=Math.toDegrees(this.GetAngle())

    if(U(ang)){return currAng}

    if(g.p){newAng = currAng+ang}
    else if(g.n){newAng =currAng - ang}
    else if(g.m){  newAng =currAng * ang}
    else if(g.d){ newAng =currAng / ang}
    else {newAng = ang}

    this.SetAngle( Math.toRadians(newAng) )
    return this}





b.K = p.addClass = p.kind = p.kind = p.data = p.userData = p.uD= function(data){
    if(U(data)){return this.GetUserData()}
    this.SetUserData(data)
    return this}
b.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}
p.I =p.impulse = p.applyImpulse = p.aI  = function self(impulse, point, point2){


    if(U(impulse)){
        impulse =  this.worldVec().div(40)
    }

    if(N(point)){
        impulse = V(impulse, point)
        point = point2}

    if(U(point)){  point = this.GetWorldCenter()}


    this.ApplyImpulse(impulse, point)

    return this}//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center



b.velWor=function(x,y){
    var v = V(x, y).div()
        return this.GetLinearVelocityFromWorldPoint(v)}





b.F = b.applyForce = p.aF  = function(v,c,c2){
    if(N(c)){return this.F(  V(v,c), c2  )}
    if( U(c) ){ c = this.worldCenter() }
    this.ApplyForce(v, c)
    return this}    //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center

b.is=function(kind){
    //this is an OR statement.  at least one must be true
    var that=this, is = false

    _.each(arguments, function(kind){

        if( that.K() == kind ){
            is=true
        }
    })

    return is}
b.not= p.notAny = function(kind){ //this is an AND: ALL MUST BE FALSE

    var that = this,
        not = true

    _.each(kind, function(kind){
        if( that.is(kind) ){
            not = false
        }
    })

    return not}

b.type =p.T= p.ty= p.t= function(a){
    if(U(a)){return this.GetType()}
    this.SetType(a)
    return this}

//huh??? oh can get/set type of body
b.stat = function(){var v=this.linVel()

    this._linVel = V(v.x, v.y)
    this.type(0)

    return this}






b.kin = function(){return this.type(1)}

b.dyn = function(resumeVel){this.type(2)

    if(resumeVel==true && O(this._linVel)){
        this.linVel(this._linVel)

    }
    this._linVel=null

    return this
}




b.den=function(den){

    if(U(den)){return this.list().GetDensity()}

    this.each(function(f){
        f.SetDensity(den)
    })

    this.ResetMassData()
    return this}
b.fric=function(fric){


    if(U(fric)){return this.list().GetFriction()}

    this.each(function(f){
        f.SetFriction(fric)
    })
    return this
}
b.rest=function(rest){


    if(U(rest)){return this.list().GetRestitution()}

    this.each(function(f){
        f.SetRestitution(rest)
    })
    return this

}


///////////

b.wCent=  p.wC=  p.worldCenter= p.gWC= function(){
    return this.GetWorldCenter()}
b.cent=function(){

    var c = this.GetWorldCenter()

return V(c.x*30, c.y*30)}
b.joint = function(){ return this.GetJointList().joint }

b.dot=function(color){color= oO('c', color||'y')

    this.stg().dot(color,  this.cent() ) //  this.X(), this.Y()


}










b.polyBul = function(){
    var vec=this.GetWorldVector( V(0,-100)), point=this.worldPoint(0, -50)
    bullet = this.W().polyBul(point.x, point.y, 4, 4,'w').K('polyBul')
        .den(1).linDamp(0).linVel(vec.x/5,vec.y/5)

    w.end(function(cx){cx.destroyIf('polyBul')})
    return bullet}


b.sens=function(){this.list().sensor(true); return this}

b.awake= function(){
    var g=G(arguments)
    this.SetAwake(g.n? false:true)
    return this}

b.wPoint= p.worldPoint = p.wP   =function(x,y){

    var pt = this.GetWorldPoint( V(x,y).div() )
    return V(pt.x, pt.y).mult()

}




b.transform = p.tf=  function(tf){
    if(U(tf)){  return this.GetTransform() }
    this.SetTransform(tf)
    return this}
b.next = p.n = p.gN =function(){ return  this.GetNext()   }

b.destroyFixt= p.destroyFixture=p.dF=function(fixt){
    this.DestroyFixture(fixt)
    return this}

b.fixtData =p.fixtListUserData =p.uDF=function(userData){
    var fixtList= this.fixtureList()
    if(U(userData)){
        return fixtList.GetUserData()}
    fixtList.SetUserData(userData)
    return this}//user data first fixture?




b.thrustify=function(){
    var p=this
    //takes a spritebox!
    //uses cjs.watchKeys()
        this.angDamp(.5)
    cjs.Keys({
        l :function(){p.rot(8,'-')},
        r :function(){p.rot(8,'+')},

        d :function(){p.I().p('thrust')},
        u :function(){p.p('shoot')}})

return this}


b.thrustControl = function(){var body=this

    cjs.tick(function(){b2d.controls.thrust(body)})
return body}




//b.hop=function(){return this.I(0,-30)}

b.click=function(func){var body = this


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





b.coll = b.collWithKind = function(func, func2){
    //merged these 2, but the the fixt 'coll' met is more complete/flexible
    var that=this

    if(S(func) && F(func2)){

       this.wor().begin(function (cx) {

            if (cx.a() == that && cx.b().is(func)) {
                func2(  cx.b())
            }


            if (cx.b() == that && cx.a().is(func)) {
                func2(  cx.a())
            }

        })


    }

    else {

        w.begin(function (cx) {
            if (cx.a() == that) {
                func(cx.a())
            }
            if (cx.b() == that) {
                func(cx.b())
            }
        })
    }

    return this}





b.towards=function self(x,y,speedRat){

    //if(isBody(x)){return self(x.X(), x.Y(), y)}

    speedRat = speedRat || 100
    this.linVel( (x- this.X())/speedRat, (y- this.Y())/speedRat)
    //more realistic to accelerate, via forces?
return this}



b.shoot= function(){var vec, bullet

    bullet = this.GetWorld().bullet( abovePlayerGlobally(this) ).bindSprite('me', 0.15)

    vec = this.GetWorldVector(b2.V(0, -100))
    bullet.impulse(vec.x/20, vec.y/20 )


}


b.worldVec=function(vec, y){

    if( N(vec) && N(y) ){ vec = V(vec,y) }

    if(U(vec)){vec = V(0,-100)}

    return this.GetWorldVector(vec)
}



b.horizCenter=function(){

    var s = this.world().s

    return this.X(s.W()/2    )
return this}
b.bindSprite=function( img,   scale,  startingRotation ){

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

b.stg=function(){ return this.wor().stage }


b.bindSprite2=function(obj, startingRotation, x, y ){

    //takes any display object.  right now, just used for shapes
    //because bindSprite fetches the bm's by string.
    //but when i set up preloader, then i would use this i suppose :)


    x=N(x)?x:0;
    y=N(y)?y:0

    var body=this,

        stage = body.GetWorld().stage

  //  stage.A( displayObject = obj )



    startingRotation = N( startingRotation) ?  startingRotation : 0

    body.sprites = body.sprites || []
    body.sprites.push(obj)
    body.sprite = obj
    body.sprite.a2(stage)


            //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!

    cjs.tick(function(){

        if(!body.sprite){return}

            _.each(body.sprites, function(sprite){

                 sprite.XY(
                         body.X() + (x||0),
                         body.Y() + (y||0)
                 )

                 sprite.rotation=body.rot() + startingRotation
            })


        })

    return body}

b.mJ = b.mouse = b.mouseJ = b.mouseJoint=function(point){var body=this, mj

           mj = body.wor().mouseJ(body, point)

return mj}

b.damp=function(l,a){
    this.linDamp(l)
    if(N(a)){this.angDamp(a)}
return this}

b.DFR=function(d,f,r){
    return this.den(d).fric(f).rest(r)

}

b.wakeUp=function(){ this.SetAwake(true); return this}
b.sleep=function(){ this.SetAwake(false); return this}

b.got=function(thus, func){var body=this

    this.wor().beg(function(cx){

        cx.got(body, thus, func)

    })

    return this}





b.kill=function(){

    if(this.sprite){this.sprite.remove()}


    this.sprite=null
    this.SetActive(false)
    this.destroy()

}



b.count=function(){
    return this.m_fixtureCount
}


b.destroy=function(){

    this.wor().DestroyBody(this)
}

b.setDestroy=function(){return this.K('destroy')}

b.setDestroyIf=function(data){

    if(this.is(data)){this.setDestroy()}

}


//b.warpToTopLeft=function(){ return this.XY(200, 100)}

b.bindKeyboard = function(cont){ //p.moveListener=
    var that=this

    control = (b2.controls[cont] || b2.controls.trickJump )

    control()

    cjs.tick(function(){
        that.rot(0)
        that.world().each(
            function(body){
                if(body.is('destroy')){body.destroy()}}
        )})}
b.controlMe= function(control){
    var that =this
    cjs.tick(function(){
        b2d.controls[control||'standard'](that)
    })

    return this}


b.when=function(){

    var body =this,
        w=body.wor()//, listener=b2d.listener()

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



b.relPos=function(){return this.X() + this.stg().X()}

b.byImp=function(imp){
    if(cjs.Keys.right){this.I(imp,0)}
    else if(cjs.Keys.left){this.I(-imp,0)}
    return this}
b.byVel=function(vel){
    if (cjs.Keys.right) { p.linVel(vel, 0)}
    else  if (cjs.Keys.left) { p.linVel(-vel, 0)}

return this}


b.jumping=function(y, x){
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


b.trig = p.fixtListener = p.listener=  function(kind, func){var body=this

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


 b.diff= b.dif = function(x, y){

     var ob = {    x: x - this.X(),   y: y - this.Y()  };

     return ob}


b.cam = function(x, y){


        this.stg().XY( this.diff(x,y)    )

return this}





b.constF=function(a,b){var body=this

    cjs.tick(function(){  body.F(a,b )  })

return this}

b.camX = function(x, y){

    var v = this.diff(x,y)

    this.stg().X( v.x )

    return this}


b.followX=function(x,y){var that=this
    cjs.tick(function(){
        if(O(that.sprite)){
            that.camX(x,y)
        }})

return this}

b.follow=function(x,y){var that=this
    cjs.tick(function(){
        if(O(that.sprite)){
            that.cam(x,y)
        }})

    return this}








b.fixt= p.createFixture = p.cF =  function(fixtData){


    if(U(fixtData)){return this.list()}
    //fixtData = fixtData|| b2.randomFixture()
    return this.CreateFixture(fixtData)
}


b.rect = function(wd, ht, x, y){x=N(x)?x:0; y=N(y)?y:0
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
b.rectSensor = function(wd, ht, x, y){x=N(x)?x:0; y=N(y)?y:0
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
b.poly = function(){

    var fix =  this.fixt(  b2d.poly.apply(null, arguments)   )

return fix}


b.circ = function(){

    var fix =  this.fixt(  b2d.circ.apply(null, arguments)   )

    return fix}

b.convex = function( col, arr, arr2){ /// color?

    var arrDef, shape, fixt, that=this

    if(!S(col)){
        arr2=arr; arr=col; col='yellow'}


    // if(arr2){  _.each(arguments, function(arg){   that.convex(arg)  });return this  }


    arrDef = b2d.Arr.apply(null,arr)
    fixt =this.fixt( arrDef )
    shape = w.s.poly(arr, col, col)
    this.bindSprite2(shape)
    return fixt

    return this

}




b.list=p.fixtList = p.fixtureList=p.gFL=function(){return this.GetFixtureList()}
b.each = p.eachFixt = function(func){

    var fl = this.GetFixtureList()


    var withList = function self(list, func){

        func(list)

        list = list.GetNext()

        if(list){return self(list, func)}}

    withList(fl, func)


}












b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile=function(){
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

    return this}//b.feetListener =function(){return this.listener('feet')}



b.warp = function(p) {var p=this
    cjs.tick(function () {
        if (p.Y() < 0) {
            p.Y(300)
        }
        if (p.Y() > 300) {
            p.Y(0)
        }
        if (p.X() < 0) {
            p.X(600)
        }
        if (p.X() > 600) {
            p.X(0)
        }
    })

    return this}

b.mario=function(){
    var p=this, that=this

    this.canJump = true


    cjs.tick(function(){

        that.rot(0)

        that.onGround=true

        // if on ground
        if(that.onGround){// if jumping

            if(cjs.Keys.up){
                if(that.canJump==true){
                    that.p('jump').I(0, -44); that.canJump=false }}


            else { // if not jumping
                if(cjs.Keys.left){that.I(-20, 0)} // p.dir(0)
                if(cjs.Keys.right){  that.I(20, 0) }} //p.dir(1)

        }

        // if in air !!!
        else {
            if (cjs.Keys.left){
                that.dir(0);that.I(-1,0)}
            if (cjs.Keys.right){
                that.dir(1);that.I(1,0)}}
    })


    that.GetWorld().begin(function(){
        that.canJump=true
        that.p('walk')
    })


    return this}


b.arrowMove=function(){var body=this

    $.kD({
        l: function(){body.dir('left').move()},
        r:function(){body.dir('right').move()},
        u :function(){
            if(body.dir()=='left'){body.I(5,-12)}
            else if(body.dir()=='right'){body.I(-5,-12)}}

    })

    return this}


//easel ss

b.p=function(a,b,c,d){
    if(O(this.sprite)){this.sprite.p(a,b,c,d)}
    return this}
b.s=function(a,b,c,d){
    if(O(this.sprite)){this.sprite.s(a,b,c,d)}
    return this}


b.centerScale=function(scale){var body=this

  body.stg().sXY(scale)
        .X(300-((body.X()-300) * scale))
        .Y(150-((body.Y()-150)) * scale)

return this}

b.marioJumping= function(){

    var p=this


    p.trig('feet')
    cjs.tick(function(){
        p.rot(0)

        if(p.trig.feet && cjs.Keys.up){
            if(cjs.Keys.right){p.linVel(20, -60) }
            else if(cjs.Keys.left){p.linVel(-20, -60) }
            else {p.linVel(0, -80)}
        }

        else{   if (cjs.Keys.right) {p.I(10, -5)}   else if (cjs.Keys.left) {p.I(-10, -5)}      }  // if (cjs.Keys.right) {p.linVel(40, -10)}  // else if (cjs.Keys.left) {p.linVel(-40, 10)}

        if (cjs.Keys.down){
            p.trig.feet='true'
            p.I(0, 20)}

    })

return this}

b.marioWarping=function(){var p=this


        cjs.tick(function () {
            if (p.Y() < 0) {
                p.Y(300)
            }
            if (p.Y() > 300) {
                p.Y(0)
            }
            if (p.X() < 0) {
                p.X(600)
            }
            if (p.X() > 600) {
                p.X(0)
            }
        })

        return this}



b.classCount=function(){
    if(!A(this.classes)){return 0}
return this.classes.length

}
b.addClass = function(clas){if(U(clas)){alert('need to provide a class!'); return false}
    this.classes = this.classes || []
    var that=this,func

    if(F(clas)){
        func=_.bind(clas, that)
        this.addClass( func( that.getClasses()) )
        return this}

    _.each(arguments,  function(clas){if( S(clas) ){clas=clas.trim()

            _.each(clas.split(' '),
                function(clas){clas=clas.trim()

                    if(clas!='' && !that.hasClass(clas)){

                    that.classes.push(clas)
                }
            })


        }})
    return this}
b.getClass=b.getClasses=function(){this.classes= this.classes||[]

    return this.classes.join(' ')

}
b.hasClass=b.hasClasses=function(clas){
    if( U(clas) ){   return false}

    var body = this, hasClass

    this.classes = this.classes || []

    _.each(arguments, function(clas){

        if( S(clas) && clas ){clas = clas.trim()

            if( _.contains( body.classes, clas)){hasClass = true}

        }

    })

return hasClass



}
b.hasAllClasses=function(clas){if(U(clas)||clas==''){return false}

    var body=this,anyYes=null, anyNo=null

    _.each(arguments, function(clas){


    if(body.hasClass(clas)){anyYes=true}

   else if(!body.hasClass(clas)){anyNo=true}



    })

    return (anyYes && !anyNo)


}
b.toggleClass=function(clas){
    if(U(clas)||clas==''){return false}

    if(this.hasClass(clas)){
        this.removeClass(clas)
    } else {this.addClass(clas)}

return this}
b.removeClass=function(clas){var ix
    this.classes = this.classes||[]
    if( S(clas) ){

        if(this.hasClass(clas)){

            ix = this.classes.indexOf(clas)

           this.classes[ix] = null

            this.classes = _.compact( this.classes )


        }



    }
    return this}

b.ofClass=function(){var body= this.body()
    return this.hasClass.apply(this, arguments) ||
        body.hasClass.apply(body, arguments)}

b.be=function(kindOrFixt){
    if(S(kindOrFixt)){return this.hasClass(kindOrFixt)}
    if(b2d.isFixt(kindOrFixt)){return this == kindOrFixt}
    return false}

b.beOf=function(){}
b.beAbove=function(){}
b.beNear=function(){}






b.co = function(co){

    if(U(co)){
        return this.GetControllerList()
    }

    this.wor().co(this)  // :)
return this}

b.cx=function(){
  return this.GetContactList()
}

b.isDyn = function(){
   return this.GetType() == b2d.Dynamics.b2Body.b2_dynamicBody
}
b.isKin = function(){
    return this.GetType() == b2d.Dynamics.b2Body.b2_kinematicBody
}
b.isStat = function(){
    return this.GetType() == b2d.Dynamics.b2Body.b2_staticBody
}

b.bc = b.broadcast = function (func) {
    var origEdge, edge, nextEdge

    if(func=='kill'){func = function(b){b.kill()}}

    origEdge = this.co()
    if(!origEdge){return this}

    edge = origEdge.nextBody
    while (edge) {



        nextEdge = edge.nextBody


        func(edge.body)
        edge = nextEdge
    }

    edge = origEdge.prevBody
    while (edge) {
        nextEdge = edge.prevBody
        func(edge.body)
        edge = nextEdge
    }
    return this}



b.cancel=function(cntr){if(O(cntr)){cntr.remove(this)}

    else if(O(this.co())){

        this.co().controller.remove(this)
    }

    }

b.switchTo=function(co){
    this.cancel()
    co.body(this)
return this}




b.col2 = b.eachCx = b.withFixtsCollidingWithMe= function(func){ //brilliant
    //uses the OTHER way to check contacts !!!!!!
    var b = this, next, fixt, isMe, cx
    cx = this.cx()
    if(!cx){ $l('no contacts'); return false }
    cx=cx.contact
    while(cx){
        next = cx.GetNext()
        isMe = cx.a()==b  //find the fixture whose body is not me
        func( (isMe? cx.B(): cx.A()), cx )   //and call func on IT (along with the actual cx)
        cx=next}}

//joints

b.rev = function(nextBody){var body=this

      this.wor().rev( body, nextBody  )

    return nextBody
}



b.dist = function(nextBody){
    var body=this

    this.wor().dist( body, nextBody  )

    return nextBody
}




b.destroyAllJoints = function(){
    var b=this, toDestroy=[],
          je=b.GetJointList()
    while(je){
        toDestroy.push(je.joint)
        je=je.next}
    _.each(toDestroy, function(j){w.DestroyJoint(j)})
    return this}


//player body stuff.. weapons, etc

b.web=function(shouldKill){var p=this, w=this.wor(),

    y=this.Y()-100,  x=this.X(), piece,web

    this.webs = this.webs||[]
    this.webs.push(web = Web(this, shouldKill))

    piece = web.addPiece(p, web.Piece(x,y))   //add first piece to player

    T(9, function(i){ piece = piece.add( web.Piece(x, y - i) ) })  //add rest to each other

    piece.add(web.ball = w.circ(x, y - 100, 10, 'd').K('webBall').den(1).rest(0).fric(100))


    function Web(p, shouldKill){



        var web={
        player:p,
        connected:false,
        pieces:[],
        addPiece: function(toWhat, newPiece){
            w.tightDist(toWhat, newPiece)
            this.pieces.push(newPiece)
            return newPiece},
        Piece: function(x, y){var web=this,
              piece = w.ropePiece(x, y).K('webPiece')

            piece.add = function(newPiece){
                return web.addPiece(this, newPiece)
            }

            return piece},
        delPieces:function(){
            _.each(this.pieces, function(piece){
                piece.kill()

            })

            this.pieces=[]},
        die:function(){var that=this
            this.delPieces()
           this.player.webs = _.reject(this.player.webs, function(web){return that === web})},
        attach:function(toWhat){
            this.connected=true
              w.tightDist(toWhat, this.ball)
        return this}}

        if(shouldKill){

            shouldKill=N(shouldKill)?shouldKill:1000

            setTimeout(function(){
                if(!web.connected){web.die()}
            }, shouldKill)
        }


    return web}

    return web}

//when a web is created it gets web.connected=false
//when it hits certain things and forms a joint, then connected->true
//then it just dies

//pressing DOWN should release the most recent of the connectedWebs
//non connected Webs can be shot off!




WEB=function(){w=b2d.W()


p = w.ship().XY(500,300)


}


DESTROYJOINT= function(){w=b2d.W().startKilling(); w.floor.rest(0)
    y = w.ship().XY(400,170).rot(265).stat()
    w.beg(function(cx){var fixt; if(fixt=cx.with('bul')){if(fixt.body()!=y){
        fixt.body().setDestroy()}}})


    base = w.rect(255,50, 60,15,'r').stat()
    w.rev(base, body = link(255,60 )  ); prev= body
    w.rev(prev, body=link(255,90)  ); prev=body
    w.rev(prev, body=link(255,120)  ); prev=body







    bef =  body = link( 255, 150,'b' )

     w.rev(prev, body); prev=body

    red = body = link( 255, 180,'r' )
   j1= w.rev(prev, body); prev=body

    aft = body = link( 255, 210 ,'a')
   j2= w.rev(prev, body); prev=body



    je = aft.GetJointList()







    w.rev(prev, body=link(255,240)  ); prev=body
    w.rev(prev, body=link(255,270)  ); prev=body
    w.rev(prev, body=link(255,300)  ); prev=body
    w.rev(prev, body=link(255,330)  ); prev=body
    ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)


    function link(x,y,color){color=color||'w'

        return  w.rect(x,y, 10, 15, color).den(1).fric(0).rest(0)
    }
}


/*



 A joint edge:
 -connects bodies and joints together in a joint graph
 (each body is a node and each joint is an edge)

 -belongs to a doubly linked list maintained in each attached body
 (Each joint has two joint nodes, one for each attached body)


 //these are all obj refs, not functions

 .joint
 .other(other body)
 .prev(b2JointEdge):the previous joint edge in the body's joint list
 .next(b2JointEdge):the next joint edge in the body's joint list
 */




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
