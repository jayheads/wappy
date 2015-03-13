
w=p=b2d.World.prototype

w.draw=function(num){
    if(N(num)){this.step(num)}
    this.DrawDebugData();
    return this}

w.debug =   function(data){

    //p.debugDraw  =p.dD= p.sDD=


    if(U(data)){

        this.s.autoClear = this.s.autoClear?false:true;return this
    }

    if(data===true){   this.s.autoClear=false;return this }


    if (data===false){ this.s.autoClear=true;return this}

    this.SetDebugDraw(data)

    return this}

w.step=function(time, a, b){

    a=N(a)?a:8
    b=N(b)?b:3
    this.Step(time,a,b)

    return this}





w.clear = p.clearForces = p.cF = function(){  this.ClearForces(); return this }



w.rayCast=function(func,v1,v2){

    return this.RayCast(func, V(v1,'-'), V(v2,'-') )
}


//joints

w.J=w.joint = p.createJoint= p.cJ=function(a){

    var j=this.CreateJoint(a)

    return  j

}

w.j = w.destroyJoint=p.dJ= function(a){ this.DestroyJoint(a); return this}




w.dist=function(a, b, b1OffV, b2OffV, len, freq, damp){
//location pams are optional, and be default to their center ponts
// note: if you passe them in, pass them as relative(local to body) coords
//BOX2D requires them as WORLD points - for some reason.. (but i think my way has more use cases)
//there is also distColl for 'collideConnected=true' joints
    var b1V = a.worldCenter().mult(),
        b2V = b.worldCenter().mult(),
        jd = b2d.dJ(), j

    if(O(b1OffV)){b1V =  b1V.add(b1OffV)  }
    if(O(b2OffV)){b2V = b2V.add(b2OffV)}

    jd.init(a, b,  b1V.div(), b2V.div() )
    j = w.J(jd)

    if(N(b1OffV)){damp=len; freq=b2OffV; len=b1OffV}


    if(N(len)){j.len(len)}

    if(N(freq)){j.freq(freq)}

    if(N(damp)){j.damp(damp)}



    return j}

w.tightDist=function(piece, newPiece){
    return this.dist(piece, newPiece,1,1000,1000)

}




w.distColl=function(a, b, b1OffV, b2OffV){

    var b1V = a.worldCenter().mult(),

        b2V = b.worldCenter().mult(),

        jd = b2d.dJ(), j


    if (O(b1OffV)){b1V =  b1V.add(b1OffV)  }

    if (O(b2OffV)){b2V = b2V.add(b2OffV)}

    jd.init(a, b,  b1V.div(), b2V.div()).coll(true)

    j = w.J(jd)

    return j}
w.rod = function(a,b,len){
    a = a || this.ball(150,150)
    b = b || this.brick(180,150)
    len = N(len)? len :200
    return this.distColl(a,b).len(len)}


w.spring=function(a,b){
    return this.dist(a,b).len(1).freq(2)//.damp(.1)
}



w.mouseJ=function(body,target,damp,maxForce){

    body.wakeUp()
    var ground = this.GetGroundBody()

    return this.J(b2d.mouseJ(ground,
            body,target,damp,maxForce)
    )

}

w.removeMouseJoint=function(){var w=this

    if(O(w._mouseJoint)){
        w.j(w._mouseJoint)
        this._mouseJoint = false

    }


    return this}

w.updateMouseJoint=function(point, kind){var w=this

    var mJ = w._mouseJoint

    w._mouseJoint = mJ ? mJ.target(point) : this.mouseJAt( point, kind )

return this}


w.tripleStage= function(color, wd,ht){
    var w=this
    w.s = w.stage = cjs.tripleStage('black', wd, ht).noAutoClear()
    w.s.back.A()
    w.s.A()
    w.s.HUD.A()
    w.canvas = w.s.canvas
    w.c = w.can = $(w.canvas)
    w.ctx =  w.can.ctx()

    return w}


w.mouseJoints=function(kind){var w = this,
    can= (w.s && w.s.HUD)?$(w.s.HUD.canvas):  w.can,
    scale = this.scale || 1
    can.mouseup(function(){
        w.removeMouseJoint()
    })

    can.pressmove(function (e) {
        w.updateMouseJoint(
            can.mousePoint(e, scale), kind
        )
    })

    return this}





w.tick=function(draw){var w=this,
    can = w.can,
    ctx= w.ctx
    draw= N(draw)? draw: 0.1
    ctx.tick(function(){
        this.trans(0,0).Z(1,1);
        w.draw(draw)

    })


    return this}



w.boxes=function(){var w=this

    _.each(arguments, function(arg){

        w.box.apply(w, arg)
    })

return this}

w.boxesStat=function(){var w=this

    _.each(arguments, function(arg){

        w.box.apply(w, arg).stat()
    })

    return this}

w.mouseJAt=function(p, kind){var w=this, mj

    w.bodyAt(p, function(b){

        mj = b.mouseJoint(p)

    }, kind)



        return mj

}




w.Revolute = function(a,b, c,d, e,f){var g=G(arguments)

    //pass in body1, body2, world-bV = body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


    var j= SuperJointDef( new b2d.Joints.b2RevoluteJointDef() )

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
w.Rev=function(a,b,c,d){

    return this.createJoint(

        RevoluteJointDef( a, b, c, d)

    )}
  w.Prism=function(a,b,c,d,e,f,g,h){
    var joint= this.J(b2d.prism( a, b, c, d,e,f,g,h))
    return  joint }

w.rev = function(body1, body2, c,d, e,f){var g=G(arguments)

    //pass in body1, body2, world-bV = body1-center
    //can also pass body1, body2, world-x, world-y
    //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y

    var joint =   new BXJ.b2RevoluteJointDef()

    __jd = joint


    if( U(c) ){ c = body1.worldCenter() }
    if( O(c) ){
        joint.init( body1, body2, c )}
    else if(N(e)){
        joint.A(body1).B(body2).lAA( V(c/30,d/30)).lAB( V(e/30,f/30)) }
    else if(N(c)){
        joint.init(body1, body2, V(c/30,d/30)) }

    //SuperJointDef( joint )
     __joint = joint = this.J(joint)


    return joint}




w.prism = function(a,b,x,y, rot){
    var jd = new b2d.Joints.b2PrismaticJointDef(),j

    if(A(a)){jd.bodyA = a[0]
        if(O(a[1])){jd.localAnchorA = a[1]}
        else if(N(a[1])){jd.localAnchorA = V(a[1]/30, (a[2]||0)/30)}}
    else {jd.bodyA=a}

    if(A(b)){jd.bodyB = b[0]
        if(O(b[1])){jd.localAnchorB = b[1]}
        else if(N(a[1])){jd.localAnchorB = V(b[1]/30, (b[2]||0)/30)}}
    else {jd.bodyB=b}

    if(N(x)){jd.localAxisA.Set(x,y||0);jd.localAxisA.Normalize()
        if(rot){jd.referenceAngle= Math.toRadians(rot)}}

    if(O(x)){jd.localAxisA.Set(x.x||0, x.y||0);jd.localAxisA.Normalize()
        if(y){jd.referenceAngle= Math.toRadians(y)}}

    __joint = j = this.J(jd)

    return  j}

w.Gear=function(a,b,c){

    return world.createJoint( Gear(a,b,c) )
    function Gear(bA, bB, ratio){
        var gearJoint = new b2d.Joints.b2GearJointDef()
        gearJoint.joint1 = bA
        gearJoint.joint2 = bB
        gearJoint.bodyA = bA.GetBodyA()
        gearJoint.bodyB = bB.GetBodyA()
        gearJoint.ratio = N(ratio)? ratio : 1
        return gearJoint}}

///////////////////////////////////////////////////////////////////



//flags!!!!!
w.flag=function(flag, val){
    this.flags= this.flags||{}
    if(U(val)){val=true}
    this.flags[flag]=val
    return this}
w.flagged= function(flag){
    this.flags= this.flags||{}
    var wasFlagged = this.flags[flag]
    if(wasFlagged){this.flags[flag]=false}
    return wasFlagged}
w.on=function(onWhat, func){
    //this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)


    var that=this

    //interesting default !!!!!!!
    //func=func||function(val){val()}

    cjs.tick(function(){
        var val = that.flagged(onWhat)
        if(val){ func(val) }
    })

return this}


//
//
//
///contacts!!!!
w.listen = p.setContactListener = p.sCL = p.SetContactListener

w.startListening = function(){var that=this

    this.listener = this.listener || b2d.listener()

    this.beginHandlers = this.beginHandlers ||[]
    this.preHandlers = this.preHandlers ||[]
    this.postHandlers = this.postHandlers ||[]
    this.endHandlers = this.endHandlers ||[]

    this.listener.BeginContact = function(cx){
        _.each(that.beginHandlers,
            function(func){func(cx)})
    }

    this.listener.PreSolve = function(cx){
        _.each(that.preHandlers,
            function(func){func(cx)})}

    this.listener.PostSolve = function(cx, pam2){

        _.each(that.postHandlers,

            function(func){

                func(cx, pam2) //second arg???????

            })
    }


    this.listener.EndContact = function(cx){
        _.each(that.endHandlers,
            function(func){func(cx)})}

    this.listen(this.listener)
}


//ADDS one or more handlers to beginHandlers array

w.beg = w.begin = w.onBegin=function(){var that = this
    _.each(arguments, function(func){
        that.beginHandlers.push(func)
    })
return this}



w.pre = w.onPre=function(){var that = this
    _.each(arguments, function(func){
        that.preHandlers.push(func)
    })
return this}
w.post = w.onPost=function(){var that = this
    _.each(arguments, function(func){
        that.postHandlers.push(func)
    })
return this}

w.end = w.onEnd=function(){var that = this
    _.each(arguments, function(func){
        that.endHandlers.push(func)
    })
return this}



w.when = w.coll = w.collide=function(k1,k2,flag){

    var that=this,
        name=k1+k2

    if(F(k2)){
        return this.collideAny(k1,k2)}

    this.begin(function(cx){
        if(cx.with(k1, k2)){
            that.flag(name, cx)}
    })

    cjs.tick(function(){
        var cx = that.flagged(name)
        if(cx){ flag(cx) }
    })
}


w.collideAny=function(kind, flag){//can combine this with above
    var that=this
    this.begin(function(cx){
        if(cx.with(kind)){that.flag(kind,cx)}})
    cjs.tick(function(){
        var cx=that.flagged(kind)
        if(cx){flag(cx)}})
}






//should deprecate!!!!!
/// shortcuts.. but each one will completely override the listener
// only for simple use cases (one type of listener, specified once)
w.beginX=w.onBeginContact = w.oB=function(func){//=w.contactBegin
    this.listen(b2d.listener().begin(func))
    return this}
w.endX=w.onEndContact = w.oE =function(func){

    this.listen( b2d.listener().end( func )  )

    return this}
w.preX=function(func){

    this.listen( b2d.listener().pre( func )  )

    return this}
w.postX=function(func){

    this.listen( b2d.listener().post( func )  )

    return this}

//////


w.setContactFilter = w.sCF = w.SetContactFilter

//sensor


w.while1= w.whileSensor = function(kind, func){

    var push=false

    this.begin(function(cx){

        if(cx.with(kind)){
            push=true
        }
    })

    this.end(function(cx){

        if(cx.with(kind)){
            push=false
        }
    })


    cjs.tick(function(){
        if(push){
            func()
        }
    })


return this}

w.while = w.while2 =function(kind, kind2, func){



    var push=false

    if(F(kind2)){
        return this.while1(kind, kind2)
    }

    this.begin(function(cx){

        if(cx.with(kind, kind2)){
            push=true
        }
    })

    this.end(function(cx){

        if(cx.with(kind, kind2)){
            push=false
        }
    })


    cjs.tick(function(){
        if(push){
            func()
        }
    })


    return this}





w.spriteBox=function(data, x, y, scale){ //for 400 x 400 flash squares !!!


    x=N(x)?x:300;  y=N(y)?y:x //weird defaults - not intuitive


    var sprite =  cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)



    if(N(scale)){sprite.sXY(scale)}

    return this.box(x,y,100,100).bindSprite2(

        sprite
    )



}


