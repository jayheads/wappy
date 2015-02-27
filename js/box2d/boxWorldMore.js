
w=p=b2d.World.prototype

w.draw=function(){this.DrawDebugData();return this}

w.debug =   function(data){

    //p.debugDraw  =p.dD= p.sDD=


    if(U(data)){

        this.s.autoClear = this.s.autoClear?false:true;return this
    }

    if(data===true){   this.s.autoClear=false;return this }


    if (data===false){ this.s.autoClear=true;return this}

    this.SetDebugDraw(data)

    return this}
w.step =  function(){
    var args=G(arguments)
    this.Step.apply(this, args)
    return this}
w.clear = p.clearForces = p.cF = function(){  this.ClearForces(); return this }



w.rayCast=function(func,v1,v2){

    return this.RayCast(func, V(v1,'-'), V(v2,'-') )
}


//joints

w.joint =p.createJoint=p.j=p.cJ=function(a){

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
w.destroyJoint=p.dJ=p.dj=function(a){ this.DestroyJoint(a); return this}
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
    })}


//
//
//
///contacts!!!!
w.listen = p.setContactListener = p.sCL = p.SetContactListener

w.startListening = function(){var that=this

    this.listener = b2d.listener()
    this.beginHandlers = this.beginHandlers ||[]
    this.preHandlers = this.preHandlers ||[]
    this.postHandlers = this.postHandlers ||[]
    this.endHandlers = this.endHandlers ||[]

    this.listener.BeginContact = function(cx){
        _.each(that.beginHandlers,
            function(func){func(cx)})
    }

    this.listener.PreContact = function(cx){
        _.each(that.preHandlers,
            function(func){func(cx)})}
    this.listener.PostContact = function(cx){
        _.each(that.postHandlers,
            function(func){func(cx)})}
    this.listener.EndContact = function(cx){
        _.each(that.endHandlers,
            function(func){func(cx)})}

    this.listen(this.listener)
}

//ADDS one or more handlers to beginHandlers array
w.onBegin=function(){var that = this
    _.each(arguments, function(func){
        that.beginHandlers.push(func)
    })
}
w.onPre=function(){var that = this
    _.each(arguments, function(func){
        that.preHandlers.push(func)
    })}
w.onPost=function(){var that = this
    _.each(arguments, function(func){
        that.postHandlers.push(func)
    })
}
w.onEnd=function(){var that = this
    _.each(arguments, function(func){
        that.endHandlers.push(func)
    })}


w.collide=function(k1,k2,flag){

    var that=this, name=k1+k2

    this.onBegin(function(cx){
        if(cx.isBetween(k1,k2)){
            that.flag(name, cx)}
    })

    cjs.tick(function(){
        var cx=that.flagged(name)
        if(cx){flag(cx)}})
}
w.collideAny=function(kind, flag){
    var that=this
    this.onBegin(function(cx){
        if(cx.includes(kind)){that.flag(kind,cx)}})
    cjs.tick(function(){var cx=that.flagged(kind)
        if(cx){flag(cx)}})
}







/// shortcuts.. but each one will completely override the listener
// only for simple use cases (one type of listener, specified once)
w.begin=w.onBeginContact = w.oB=function(func){//=w.contactBegin
    this.listen(b2d.listener().begin(func))
    return this}
w.end=w.onEndContact = w.oE =function(func){

    this.listen( b2d.listener().end( func )  )

    return this}
w.pre=function(func){

    this.listen( b2d.listener().pre( func )  )

    return this}
w.post=function(func){

    this.listen( b2d.listener().post( func )  )

    return this}

//////


w.setContactFilter = w.sCF = w.SetContactFilter

