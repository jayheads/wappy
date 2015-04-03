bodyDef=function() {
    bd = d = b2.Dynamics.b2BodyDef.prototype //SuperBodyDef= sBdD=function(a){return a|| b2.bodyDef() }
    bd.XY = d.p = d.ps = d.xy = function (x, y) {
        var args = G(arguments)
        args[0] = x;
        args[1] = y;
        if (x === '*') {
            x = Math.random() * 10 * 60
        }
        if (y === '*') {
            y = Math.random() * 10 * 60
        }
        var pos = this.position
        if (U(x)) {
            return {x: pos.x * 30, y: pos.y * 30}
        }
        //if(O(x)){this.position=x;return this}
        this.position.Set(x / 30, y / 30)
        return this
    }
    bd.X = function (x) {
        var pos = this.XY()
        if (U(x)) {
            return pos.x
        }
        return this.XY(x, pos.y)
    }

    bd.Y = function (y) {
        var pos = this.XY()
        if (U(y)) {
            return pos.y
        }
        return this.XY(pos.x, y)
    }

    bd.lV = bd.linVel = function (vel) {
        var v = this.linearVelocity
        if (U(vel)) {
            return v
        }
        this.linearVelocity = vel
        return this
    }


    bd.aV = bd.angVel = function (vel) {
        if (U(a)) {
            return this.angularVelocity
        }
        this.angularVelocity = vel
        return this
    }
    bd.lD = bd.linDamp = function (damp) {
        if (U(damp)) {
            return this.linearDamping
        }
        this.linearDamping = damp;
        return this
    }
    bd.aD = bd.angDamp = function (damp) {
        if (U(damp)) {
            return this.angularDamping
        }
        this.angularDamping = damp;
        return this
    }
    bd.rot = d.ang = function (ang) {
        //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
        if (U(ang)) {
            return d.angle
        }
        this.angle = ang;
        return this
    }
    bd.fixedRot = d.fR = function (isFixed) {
        if (U(isFixed)) {
            return this.fixedRotation
        }
        this.fixedRotation = isFixed;
        return this
    }
    bd.inertia = function (inertia) {
        if (U(inertia)) {
            return this.insertiaScale
        }
        this.insertiaScale = inertia;
        return this
    }
    bd.act = d.setActive = function (isActive) {
        this.active = isActive ? true : false
        return this
    }
    bd.sleepy = d.aS = function (canSleep) {
        this.allowSleep = canSleep ? true : false
        return this
    }
    bd.bul = d.bull = d.fR = function (isBul) {
        if (U(isBul)) {
            return this.bullet
        }
        this.bullet = isBul;
        return this
    }
    bd.T = d.typ = bd.kind = function (type) {
        if (U(type)) {
            return this.type
        }
        this.type = type
        return this
    }
    bd.dyn = function () {
        return this.T(2)
    }
    bd.stat = function () {
        return this.T(0)
    }
    bd.kin = function () {
        return this.T(1)
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body

}; bodyDef()

b = p = b2.Dynamics.b2Body.prototype

b.wor = b.W =b.world=function(){return this.GetWorld()}


b.wake = b.wakeUp=function(){ this.SetAwake(true); return this}
b.awake= function(){
    var g=G(arguments)
    this.SetAwake(g.n? false:true)
    return this}
b.sleep=function(){ this.SetAwake(false); return this}


b.X=function(x){var g=G(arguments),pos=this.XY()
    if(U(x=g[0])){return pos.x}
    this.XY($.update(pos.x,x,g),pos.y)
    return this}
b.Y=function(y){var g=G(arguments),pos=this.XY()
    if(U(y=g[0])){return pos.y}
    this.XY(pos.x, $.update(pos.y,y,g))
    return this}
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
type=function() {

    b.type = p.T = p.ty = p.t = function (a) {
        if (U(a)) {
            return this.GetType()
        }
        this.SetType(a)
        return this
    }
    b.stat = function () {
        var v = this.linVel()
//huh??? oh can get/set type of body
        this._linVel = V(v.x, v.y)
        this.type(0)
        return this
    }
    b.kin = function () {
        return this.type(1)
    }
    b.dyn = function (resumeVel) {
        this.type(2)

        if (resumeVel == true && O(this._linVel)) {
            this.linVel(this._linVel)

        }
        this._linVel = null

        return this
    }
    b.isDyn = function () {
        return this.GetType() == 2
    }
    b.isKin = function () {
        return this.GetType() == 1
    }
    b.isStat = function () {
        return this.GetType() == 0
    }


}; type()


b.lV=b.linVel=function(lV,y){var v=this.GetLinearVelocity()
    if(U(lV)){return v}
    if( N(y) ){lV=V(lV,y)}
    else if( N(lV) ){lV=V(lV,v.y)}
    this.SetLinearVelocity(lV)
    return this.wakeUp()
}
b.vX=function(x){
    if(U(x)){return this.lV().x}
    return this.lV(x, this.lV().y)}
b.vY=function(y){
    if(U(y)){return this.lV().y}
    return this.lV(this.lV().x,y)}
//lin vel from world point
b.lVW = b.linVelWor = function(v,y){v = V(v,y)
    return this.GetLinearVelocityFromWorldPoint( v.div() ).mult().dec(2)}
//lin vel from local point ... use case?
b.lVL = b.linVelLoc = function(v, y){v = V(v,y)
    return  this.GetLinearVelocityFromLocalPoint( v.div() ).mult().dec(2)}
b.aV=b.angVel= function(vel){
    if(U(vel)){return this.GetAngularVelocity() }
    this.SetAngularVelocity(vel)
    return this}



b.rot =function(angle,ms){var b=this,g=G(arguments),r=g[0],ms=g[1],
    a=Math.toDegrees(b.GetAngle()) //currAng
    if(U(r)){return a}

    if(N(ms)){b.stop= I(function(){b.rot(r,'+')}, ms)}
    else {b.SetAngle(Math.toRadians(g.p?a+r:g.n?a-r:g.m?a*r:g.d?a/r:r))}
    return b}


ROT=function(){w=b2d.W()

    y = w.ship().XY(300,300).stat().rot(1,10)


}




b.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}
b.fixRot=function(){ return this.fixedRot(true) }


b.lD = b.linDamp=  function(damp){
    if(U(damp)){return this.GetLinearDamping()}
    this.SetLinearDamping(damp)
    return this}
b.aD = b.angDamp=   function(damp){
    if(U(damp)){return this.GetAngularDamping()}
    this.SetAngularDamping(damp)
    return this}

b.damp=function(l,a){
    l=N(l)?l:1000
    a=N(a)?a:l
    this.lD(l).aD(a)
return this}

p.I = function self(impulse, point, point2){//p.impulse = p.applyImpulse = p.aI  =

    if(U(impulse)){ impulse =  this.worldVec().div(40) }

    if(N(point)){
        impulse = V(impulse, point)
        point = point2
    }

    if(U(point)){  point = this.GetWorldCenter()}

    this.ApplyImpulse(impulse, point)
    return this}//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
b.F = b.constF= function(v, c, c2){//b.applyForce = p.aF  =
    var b=this, g=G(arguments), v=g[0],c=g[1],c2=g[2]

    if( N(c) ){ return b.F(  V(v,c), c2  ) }

    if( U(c) ){ c = b.worldCenter() } // gotta adjust this

    b.ApplyForce(v,c)

    if(g.p){
        cjs.tick(function(){  b.ApplyForce(v,c)  })
    }

    return b}      //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center

b.mass = function(m){

    if( U(m) ){  return ( this.GetMass() * 900 ) / 100 }

}


//world center
 b.wCent=   p.wC= b.cent=function(){var b=this,w= b.wor()
     var g=G(arguments)

     if(g.P){return b.GetWorldCenter().mult() }    //  p.worldCenter= p.gWC= function(){return this.GetWorldCenter()}

     b.XY(
         w.W()/2, w.H()/2
     )
 return b}


  b.worldCenter=  function(){ return this.GetWorldCenter()  } //  p.worldCenter= p.gWC= function(){return this.GetWorldCenter()}



//world point
b.wPt = b.wPoint = p.worldPoint = p.wP   =function(x,y){return this.GetWorldPoint(  V(x,y).div()  ).mult()}

// world vector
b.wV = b.worldVec=function(v, y){

    if( N(v) && N(y) ){ v = V(v, y) }

    if( U(v) ){ v = V(0, -100) }

    return this.GetWorldVector( v )

}

//transform
b.transform = p.tf=  function(tf){
    if(U(tf)){return this.GetTransform() }
    this.SetTransform(tf)
    return this}

//next
b.next = p.n = p.gN =function(){ return  this.GetNext()   }


b.L= function linear(vx, vy, damp){var b=this
    if(U(vx)){b.lV(0,0).lD(0)}
    else {
        b.vX(vx)
        if(N(vy)){b.vY(vy)}
        if(N(damp)){b.lD(damp)}}

return b}



b.XX = b.destroy = b.kill = function(){

    if(this.sprite){this.sprite.remove()}

    _.each(this.fixts(), function(f){

        f.removeSprites()
        //if(f.sprite){f.sprite.remove()}

    })

    this.sprite=null
    this.SetActive(false)

    this.wor().DestroyBody(this)

}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}








classes=function() {

    b.data = b.D = function (data) {
        if (U(data)) {
            return this.GetUserData()
        }
        this.SetUserData(data)
        return this
    }
    b.classCount = function () {
        if (!A(this.classes)) {
            return 0
        }
        return this.classes.length
    }
    b.addClass = function (clas) {
        var that = this, func
        this.classes = this.classes || []

        if (U(clas)) {
            $l('need to provide a class!');
            return this
        }

        if (F(clas)) { // use case??
            func = _.bind(clas, that)
            this.addClass(func(that.getClasses()))
            return this
        }

        _.each(arguments, function (clas) {
            if (S(clas)) {
                _.each(clas.trim().split(' '), function (clas) {
                    clas = clas.trim()
                    if (clas != '' && !that.hasClass(clas)) {
                        that.classes.push(clas)
                    }
                })
            }
        })

        return this
    }
    b.getClass = b.getClasses = function () {
        this.classes = this.classes || []
        return this.classes.join(' ')
    }
    b.K = function (k) {
        var that = this
        if (U(k)) {
            return this.getClasses()
        }
        _.each(arguments, function (k) {
            that.addClass(k)
        })
        return this
    }

    b.has = b.hasClass = b.ofClass = b.hasClasses = function self(clas) {
        var body = this, hasClass;
        body.classes = body.classes || []
        if (!clas) {
            return true
        }
        if (A(clas)) {
            return self.apply(body, clas)
        }
        _.each(arguments, function (clas) {
            if (!clas || _.contains(body.classes, clas.trim())) {
                hasClass = true
            }
        })
        return hasClass
    }
    b.hasAllClasses = function (clas) {
        if (U(clas) || clas == '') {
            return false
        }

        var body = this, anyYes = null, anyNo = null

        _.each(arguments, function (clas) {


            if (body.hasClass(clas)) {
                anyYes = true
            }

            else if (!body.hasClass(clas)) {
                anyNo = true
            }


        })

        return (anyYes && !anyNo)


    }
    b.is = b.be = function (kindOrBody) {//this is an OR statement.  at least one must be true
        var that = this, is = false
        if (b2d.isBody(kindOrBody)) {
            return this == kindOrBody
        }
        _.each(arguments, function (kind) {
            if (that.hasClass(kind)) {
                is = true
            }
        })

        return is
    }
    b.not = p.notAny = function (kind) {
//this is an AND: ALL MUST BE FALSE
        var that = this, not = true
        _.each(kind, function (kind) {
            if (that.is(kind)) {
                not = false
            }
        })
        return not
    }
    b.toggleClass = function (clas) {
        if (U(clas) || clas == '') {
            return false
        }

        if (this.hasClass(clas)) {
            this.removeClass(clas)
        } else {
            this.addClass(clas)
        }

        return this
    }
    b.removeClass = function (clas) {
        var ix
        this.classes = this.classes || []
        if (S(clas)) {

            if (this.hasClass(clas)) {

                ix = this.classes.indexOf(clas)

                this.classes[ix] = null

                this.classes = _.compact(this.classes)


            }


        }
        return this
    }




    b.contains = function (clas) {

        var fs = this.fixts(), contains = false

        _.each(fs, function (f) {
            if (f.hasClass(clas)) {
                contains = true
            }
        })

        return contains
    }
    b.among = function () {
    }


}; classes()
fixts=function(){


    b.hit=function(x,y,dot){var hit

        if(dot==true){this.wor().dot(x,y)}

        this.eachFixt(function(f){

            if(f.hit(x,y)){hit=true}

        })

        return hit}


    b.num = b.count=function(){return this.m_fixtureCount}


    b.DFR= b.DFB=function(d,f,r){return this.den(d).fric(f).rest(r)}

    b.DBF=function(d,r,f){var b=this
        b.den(d)
        if(N(r)){this.rest(r)}
        if(N(f)){b.fric(f)}
        return b}



    b.destroyFixt= p.destroyFixture=p.dF=function(fixt){
        this.DestroyFixture(fixt)
        return this}


//fixts
b.fixt = b.list = function(fD){//p.createFixture = p.cF = b.fixt1 = b.shape =
    var b=this,f;

    if(U(fD)){return this.GetFixtureList()}

    // can pass a CODED array of fixts (will get parsed)
    if( A(fD) ){

        _.each(b2d.fixtParse(fD),

            function(fd){ b.fixt(fd) })

        return b}


    if(!b2d.isFixtDef(fD)){
        fD=b2d.fixt.apply(b2d, arguments)
    }

    //create the fixt
    f = this.CreateFixture(fD)


    //assign it classes specified in the fixt def
    if(A(fD.classes)){
        _.each(fD.classes,
            function(clas){
                f.K(clas)})}

    return f}






b.fixts = b.each = p.eachFixt = function(func){

    var fl=this.fixt(), arr=[],
        g=G(arguments), func=g[0]

    while(fl){arr.push(fl);fl=fl.GetNext()}

    //order by biggest
    if(g.p){arr = arr.sort(function(a,b){return b.area() -a.area()})}
    //order by smallest
    if(g.n){arr = arr.sort(function(a,b){return a.area() -b.area()})}

    if(F(func)){
        _.each(arr, func); return this
    }

    return arr}
b.empty = b.clear = function(){return this.fixts(function(f){f.kill()})}


//new fixts
b.rect = function(wd, ht, x, y){
    x=N(x)?x:0;
    y=N(y)?y:0
    var that=this,
        rect = b2d.poly(wd,ht, x, y),
        fixt = this.fixt(rect).den(1),
        r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())

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


















// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)


    ////
    ////
    ////


    // i need a func to check if my points are convex or not ! // can check my current libs first!! :)




    b.polyArr =   b.convex =    function( col, arr, str ){var b=this,   w= b.wor(), h, f,


    //when and if should i call .conc/.sep ?
    // i could auto-conc it.. but ill lose track of the fixts?



        g=G(arguments)


        if(g.length>2){ //passing points direclty: ([],[],[]) or ('r',[],[],[])

            if(S(col)){arr=_.rest(g)}

            else {col='p';arr=g}}



        if(!S(col)){   // ['c', [[],[]] ]   or [[],[]]


            if( S(col[0]) ){

                arr=_.rest(col); col=col[0]
            }


        else {arr=col; col=null}

        }



        if(S(_.last(arr))){str = arr.pop()}


        f = b.poly.apply(b,arr)


        if(str){ f.K(str) }
        if(col){ f.bindSprite(

            w.s.poly(arr, col, col)

        )}


        return f


    }


    ////
    ////
    ////


    b2d.poly =function(){var g=G(arguments),

        polyH = b2d.polyH.apply(null, g),

        fixt = b2d.fixt(polyH).den(1).fric(.2).rest(.2)

        if(g.n){ fixt.isSensor = true }

        return fixt}











    b.poly= function(){var b=this
        b2d.poly =function(){var g=G(arguments),  //SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?//but can not pass den? who cares!
            polyH = b2d.polyH.apply(null, g),
            fixt = b2d.fixt(polyH).den(1).fric(.2).rest(.2)
            if(g.n){fixt.isSensor = true}
            return fixt}
        return b.fixt(
            b2d.poly.apply(null, arguments)
        )
    }

b.RECT= function(col, wd, ht, x, y, rot){

    var g= G(arguments),b=this,
        fd,
        fixt,
        h,
        str,
        alpha=1
    col=g[0];
    wd=g[1];
    ht=g[2]
    x=g[3];
    y=g[4];
    rot=g[5]
    if(S(rot)){str=rot;rot=null}
    if(S(y)){str=y;y=null}
    if(S(x)){str=x;x=null}
    if(S(ht)){str=ht;ht=null}
    if(!S(col)){rot=y;y=x;x=ht;ht=wd;wd=col}
    fd = b2d.rec(wd, ht, x, y, rot)
    if(g.n){
        fd.isSensor=true
        alpha=.2
    }
    fixt =  b.fixt(  fd  )
    if(str){ fixt.K(str) }
    if(S(col)){
        fixt.bS(
            w.s.RECT(col, wd, ht,
                x, y, rot),
            0, 0, 0, alpha)}
    return fixt
}







b.CIRC = b.circ = function(col, rad, x, y){ var g= G(arguments),  fixt, h,str


    col=g[0];rad=g[1];x=g[2];y=g[3];

    if(S(y)){str=y;y=null}
    if(S(x)){str=x;x=null}
    if(S(rad)){str=rad;rad=null}
    if(!S(col)){y=x;x=rad;rad=col}

    fixt =  this.fixt(  b2d.circ(rad,x,y)   )
    if(str){ fixt.K(str) }
    if(S(col)){ fixt.bindSprite( w.s.circ(col,rad,x,y)) }
    return fixt

}








b.H= function(arg){var g=G(arguments), arg=g[0],

        b=this,
        len=length(g)

    if(U(arg)){return b}


    //passing a single array, suggest MULTIPLE fixts
    //[f1,f2,..]
    if( A(g[0]) && U(g[1]) ){
        _.each(g[0],
            function(a){
                b.H.apply(b, a)})}



    //[col,[f1,f2,..]]
    else if( S(g[0]) && A(g[1] ) && U(g[2]) ){

        _.each(g[1],function(f){

            if(b2d.isFixtDef(f)){
                b.fixt(f).C(g[0])
            }

            else {

                if(!S(f[0])){f.unshift(g[0])}//f= _.map(f, function(a){return a})

                if(b2d.isFixtDef(f[1])){
                    b.fixt(f[1]).C(f[0])
                }

                else {b.H.apply(b,f)}}})
    }

    //fixtDef
    else if(b2d.isFixtDef(g[0])){ b.fixt(g[0]) }

    //['color', fixtDef]
    else if(S(g[0]) && b2d.isFixtDef(g[1])){ b.fixt(g[1]).C(g[0]) }

    //verts
    else if(O(g[1])){
        if(g.n){g.push('-')}

        b.conc(g)
        //b.convex(g)
    }

    //circ
    else if(len == 1 || len == 3){ if(g.n){  g.push('-')  }
       // b.CIRC.apply(b, g)

        b.cir.apply(b, g)

    }



    //rect
    else {
        if(g.n){g.push('-')}
         b.RECT.apply(b, g)
    }


    function length(arr){
        var len = arr.length
        if(S(_.first(arr))){len--}
        if(S(_.last(arr))){len--}
        return len}

    return b}







BH=function(){w=b2d.W()

    /*
     w.ball()

     b = w.dyn(400,300)//.stat()
     b.H('o', 50)
     b.H('r', 50,50)
     b.H('b', 50,50,50)
     b.H('g', 50,50,50,50)
     b.H('w', 50, 50, 50, 50, 50)
     b.H('u', [-100,0], [0,-50], [200,-10] )



     b2 = w.dyn(600,300).H([
     ['o', 50],
     ['r', 50,50],
     ['b', 50,50,50],
     ['g', 50,50,50,50],
     ['w', 50, 50, 50, 50, 50],
     ['u', [-100,0], [0,-50], [200,-10]]
     ])

     */


    b3 = w.dyn(600,300)

    b3.H('y',[

        [  50],
        [  50,50],
        [  50,50,50],
        ['g', 50,50,50,50],
        ['w', 50, 50, 50, 50, 50],
        ['u',[-100,0], [0,-50], [200,-10]]

    ])

}


//fixt proxy methods
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
    b.bo =b.rest=function(rest){


    if(U(rest)){return this.list().GetRestitution()}

    this.each(function(f){
        f.SetRestitution(rest)
    })
    return this

}
b.grp = function(i){f = this.fixt()
    if(U(i)){return f.grp()}
    f.grp( i ); $l('set to ' + i)
    return this}
b.sensor = b.iS = function( isSensor ){
    var f=this.fixt()
    if( U(isSensor) ){ return f.m_isSensor }
    f.m_isSensor = isSensor
    return this}
//turns on
b.sense = b.sens=function(){this.list().sensor(true); return this}
//toggles
b.sen=function(){return this.sensor(!this.sensor())}



    b.fixtClass=function(clas){var f=this.fixt()
    if(U(clas)){return f.getClass()}
    f.K(clas)
    return this}
b.shp = b.shape = b.getShape=function(){return this.fixt().shape()}
b.rad = function(){return this.shp().m_radius * 30}





b.C=function(col){

    this.each(function(f){f.C(col)})

return this}















}; fixts()
contacts =function(){
    b.contacts = b.cx = function(){return this.GetContactList()}
    b.coll =  function(clas, func){var body=this, w= body.wor()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
        // if body collides with ANYTHING
        // if body collides with body/fixt of specific kind
        // if body collides with specific body
        // if body collides with specific fixt
        // but always pass fixt into the cb
        if(F(clas)){func=clas; clas=''} //if clas NOT passed in
        w.beg(function(cx){var fA=cx.A(),fB=cx.B(),bA=cx.a(),bB=cx.b()
            if(body.is(bA) && fB.of(clas)){_.bind(func,fA)(fB,cx)}
            if(body.is(bB) && fA.of(clas)){_.bind(func,fB)(fA,cx)}})
        return this}
// uses contact list
    b.col2 =   function(func){ //brilliant   =b.eachCx =b.withFixtsCollidingWithMe
        //uses the OTHER way to check contacts !!!!!!
        var body = this, contacts  = body.cx(),
            next, fixt, notMyFixt, fA,fB
        if(!contacts){ $l('no contacts'); return false }
        c=contacts = contacts.contact
        n=0
        while(contacts){n++
            next = contacts.GetNext()
            fA=contacts.A()
            fB=contacts.B()
            bA=contacts.a()
            notMyFixt = body.is(bA)?fB:fA  //find the fixture whose body is not me
            $l(notMyFixt.K() + ' - '+ notMyFixt.B().K())
            _.bind(func,body)(notMyFixt,contacts)   //and call func on IT (along with the actual cx)
            contacts=next}
    }
    BCOL2=function(){w=b2d.W().startKilling()



        y= w.ship()
        _.times(10, function(){

            w.ball(100,100,20).K('ball')
        })

        b = w.ball(400,300,20).K('ball').stat()


        y.coll('ball', function(b){ $l('coll with ball')

            y.col2( function(a){
                if( a != b ){  a.B().dot()  }
            })


        })

        // cjs.tick(function(){ y.col2( function(a){    a.B().setDestroy()   })  })

    }
    b.when1=function(){var body =this, w=body.wor(),ob={}

        ob.contacts=function(kind, func){
            w.beg(kind,func)
            return { after: function(func){w.end(kind,func)} }
        }

        return ob}
    b.when=function(what, bFunc, eFunc){
        var b=this,
            w=b.wor()
        w.when(b,what,bFunc,eFunc)
        return this}
    WHEN=function(){w=b2d.W()

        b = w.ball(500,200,30).K('z')
        b.when('z',
            function(){$l('beg')},
            function(){$l('end')}
        )

    }
    b.trig2=function(act, func){var body=this,
        w=body.wor()

        w.when(body,
            function(){ body.trig[act] = true },
            function(){ body.trig[act] = false}
        )

        if(F(func)){
            func=_.bind(func, body)
            cjs.tick(function(){
                if(body.trig[act]){func()}
            })}


        return this


    }
    b.trig=function(fixtKind, func){var b=this,w= b.wor()


        var touching = false

        w.beg(function(cx){

            cx.with(b, function(){

                if( this.hasClass(fixtKind) ){

                    if(F(func)) { _.bind(func, this)() }
                }

                //$l('BODY: ' + this.B().K() + ' |FIXT: '+ this.K() )
            })
        })

        cjs.tick(function(){
            if(touching){func()}
        })


        return this}
    b.while=function(what, func){
        var body=this,
            w=body.wor()
        w.while(body, what, func)
        return this}
    WHILE=function(){w=b2d.W({g:0}).debug()

        y = w.ship()

        //  w.beg(y, function(){$l('aha')}

        y.while( function(){ $l('aha')  }  )

    }

}; contacts()
joints=function() {

    b.joint = function(){ return this.GetJointList().joint }

    b.rev = function (nextBody) {
         var body = this

         this.wor().rev(body, nextBody)

         return nextBody
     }
     b.dist = function (nextBody) {
         var body = this

         this.wor().dist(body, nextBody)

         return nextBody
     }


    b.destroyAllJoints = function () {
         var b = this, toDestroy = [],
             je = b.GetJointList()
         while (je) {
             toDestroy.push(je.joint)
             je = je.next
         }
         _.each(toDestroy, function (j) {
             w.DestroyJoint(j)
         })
         return this
     }





     b.glue = function (b2) {

         return this.wor().weld(this, b2, b2.X() - this.X(), b2.Y() - this.Y())

     }





     b.mJ = b.mouse = b.mouseJ = b.mouseJoint = function(x,y){

         var b = this, w= b.wor(),
             v=V(x,y),

         mj = w.mouseJ(b,v)

         return mj
     }


 }; joints()








b.mid=function(){var b=this,w= b.wor()

 return   b.XY(w.w/2, w.h/2)

}


b.web = function (shouldKill) {

    //when a web is created it gets web.connected=false
    //when it hits certain things and forms a joint, then connected->true
    //then it just dies
    //pressing DOWN should release the most recent of the connectedWebs
    //non connected Webs can be shot off!


    var p=this, w=p.wor(),

        y=p.Y()-100,
        x=p.X(),
        piece,
        web

    p.webs = p.webs || []

    p.webs.push( web = Web(p,shouldKill))

    piece = web.addPiece(p, web.Piece(x,y))   //add first piece to player

    T(9, function (i) {
        piece = piece.add(web.Piece(x, y-i))
    })  //add rest to each other


    piece.add(
        web.ball=w.circ(x,y-100,10,'d').K('webBall').den(1).rest(0).fric(100))
    return web




    function Web(p, shouldKill){


        var web={
            player: p,
            connected: false,
            pieces: [],

            addPiece: function (toWhat, newPiece){
                w.tightDist(toWhat, newPiece)
                this.pieces.push(newPiece)
                return newPiece},


            Piece: function(x,y){var web = this,
                    piece = w.ropePiece(x, y).K('webPiece')
                piece.add = function (newPiece){return web.addPiece(this, newPiece)}
                return piece},

            delPieces: function(){_.each(this.pieces, function (piece) {piece.kill()})
                this.pieces = []},


            die: function(){var that = this
                this.delPieces()
                this.player.webs = _.reject(this.player.webs, function (web) {
                    return that === web})},

            attach: function (toWhat) {
                this.connected = true
                w.tightDist(toWhat, this.ball)
                return this}

        }




        if (shouldKill) {

            shouldKill = N(shouldKill) ? shouldKill : 1000

            setTimeout(function () {    if (!web.connected) {  web.die()  }  }, shouldKill)

        }




        return web}


}

















controllers = function() {


     b.cancel = function (cntr) {

         if (O(cntr)) { cntr.remove(this) }

         else if (O(this.co())) {

             this.co().controller.remove(this)
         }

     }



     b.switchTo = function (co) {
         this.cancel()
         co.body(this)
         return this
     }





     b.co = function (co) {
         if (U(co)) {
             return this.GetControllerList()
         }
         this.wor().co(this)  // :)
         return this
     }
     b.bc = b.broadcast = function (func) {
         var origEdge, edge, nextEdge

         if (func == 'kill') {
             func = function (b) {
                 b.kill()
             }
         }

         origEdge = this.co()
         if (!origEdge) {
             return this
         }
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
         return this
     }


 }; controllers()




easel = function() {

    b.stg = function(){return this.wor().s}

    b.click = function(func){var b=this, w=this.wor()
        w.s.on('stagemouseup', function(e){
            w.queryPoint(function(f){if(b==f.B()){_.bind(func,b)(f)}},
                e.rawX, e.rawY)})}
    b.dot=function(col){//b.dot() // dots the center of mass, not xy ??!!!
        var b=this,
            s= b.stg(),
            g= G(arguments)
        col= oO('c', g[0]||'y')
        if(g.p){s.dot(col,b.cent())}
        else {s.dot(col, b.X(),b.Y())}

        return this}

//move to x-middle of stage
    b.horizCenter=function(){return this.X( this.wor().s.W() / 2  )}

    b.img= b.bS=b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
        var body = this, stage = body.wor().s
        scale = scale || .4
        startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????

        stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
            if (A(scale)) {
                bm.sXY(scale[0], scale[1])
            } else {
                bm.sXY(scale)
            }


            body.sprite = bm  //only one???

            updateSprite()
            cjs.tick(updateSprite)

            function updateSprite() {
                bm.XY(body.X(), body.Y()) //can simplify?

                bm.rotation = body.rot() + startingRotation
            }


        }, '-') // what is this negative doing ?????

        return body
    }



    b.bS2= b.bindSprite2 = function (obj, startingRotation, x, y) {
        //takes any display object.  right now, just used for shapes
        //because bindSprite fetches the bm's by string.
        //but when i set up preloader, then i would use this i suppose :)
        x = N(x) ? x : 0;
        y = N(y) ? y : 0
        var body = this,
            stage = body.GetWorld().stage
        //  stage.A( displayObject = obj )
        startingRotation = N(startingRotation) ? startingRotation : 0
        body.sprites = body.sprites || []
        body.sprites.push(obj)
        body.sprite = obj
        body.sprite.a2(stage)
        //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
        cjs.tick(function () {

            if (!body.sprite) {
                return
            }

            _.each(body.sprites, function (sprite) {

                sprite.XY(
                        body.X() + (x || 0),
                        body.Y() + (y || 0)
                )

                sprite.rotation = body.rot() + startingRotation
            })


        })
        return body
    }
    b.p = function (a, b, c, d) {
        if (O(this.sprite)) {
            this.sprite.p(a, b, c, d)
        }
        return this
    }
    b.s = function (a, b, c, d) {
        if (O(this.sprite)) {
            this.sprite.s(a, b, c, d)
        }
        return this
    }


    b.centerScale = function(z){var b= this, w=b.wor(),s= b.stg()

       s.sXY(z)


        s.X(w.hW - ((b.X() - w.hW) *z))

        s.Y(w.hH - ((b.Y() - w.hH))*z)


        return b
    }





    b.color = function (c1, c2) {
        c1 = c1 || 'b';
        c2 = c2 || c1

        _.each(this.fixts(), function (f) {
            f.color(c1, c2)
        })
    }
}; easel()







player=function() {
    b.moveInCircle = function(rad, speed){

        var g=G(arguments),rad=N(g[0])?g[0]:100,
            speed=N(g[1])?g[1]:2,
            toRad=Math.toRadians, cos=Math.cos,  sin=Math.sin,
            b=this,
            ang=0,
            x=b.X(),
            y=b.Y(),
            bX,
            bY

        cjs.tick(function(){
            ang += toRad(speed)

            bX= rad * cos(ang)
            bY= rad * sin(ang)

            if(g.p){bY*=2}
            if(g.n){bX*=2}


            b.XY(bX+ x, bY+ y)
        })

        return this}

//b.relPos=function(){return this.X() + this.stg().X()}



    b.byI =b.byImp=function(i){var k=cjs.Keys
        if(k.right){this.I(i,0)}
        else if(k.left){this.I(-i,0)}
        return this}

    b.byV =b.byVel=function(v){var k = cjs.Keys
        if (k.right) { p.lV(v,0) }
        else  if (k.left) { p.lV(-v,0) }
        return this}

//move towards x,y (or body?)
    b.towards=function(x,y,speed){  //if(isBody(x)){return self(x.X(), x.Y(), y)}

        speed = !N(speed)?5 : speed>10?10:speed
        speed = (11 - speed)*20


        var b=this,

            lV=V(
                    x - b.X(),
                    y - b.Y()

            ).div( speed  )

        return this.lV(lV)

        //more realistic to accelerate, via forces?

    }
    TOWARDS=function(){w=b2d.W({g:0})

        b = w.B(500,300,100)

        y = w.ship()


        cjs.tick(function(){

            b.towards( y.X(), y.Y(),9  )

        })

    }

    b.marioJumping = function () {
        var p = this, k = cjs.Keys

        p.fixRot().trig('feet')

        cjs.tick(function () {

            if (p.trig.feet && k.up) {
                if (k.right) {
                    p.lV(20, -60)
                }
                else if (k.left) {
                    p.lV(-20, -60)
                }
                else {
                    p.lV(0, -80)
                }
            }

            if (k.right) {
                p.lV(40, -10)
            } else if (k.left) {
                p.lV(-40, 10)
            }

            if (k.down) {
                p.trig.feet = 'true'
                p.I(0, 20)
            }

        })

        return this
    }
    b.jumping = function (y, x) {
        var k = cjs.Keys
        if (k.up) {
            if (k.right) {
                this.lV(x, -(y - x))
            }
            else if (k.left) {
                this.lV(-x, -(y - x))
            }
            else {
                this.lV(0, -y)
            }
        }
        return this
    }
    b.polyBul = function () {

        var vec = this.GetWorldVector(V(0, -100)),

            point = this.worldPoint(0, -50)

        bullet = this.W()
            .polyBul(point.x, point.y, 4, 4, 'w')
            .den(1)
            .lD(0)
            .lV(vec.div(5))


        w.end(function (cx) {
            cx.destroyIf('polyBul')
        })

        return bullet.K('polyBul')
    }
    b.thrustify = function () {
        var p = this //takes a spritebox!//uses cjs.watchKeys()

        this.angDamp(.5)

        cjs.Keys({
            l: function () {
                p.rot(8, '-')
            },
            r: function () {
                p.rot(8, '+')
            },
            d: function () {
                p.I().p('thrust')
            },
            u: function () {
                p.p('shoot')
            }})

        return this
    }
    b.thrustControl = function () {
        var body = this
        cjs.tick(function () {
            b2d.controls.thrust(body)
        })
        return body
    }
    b.shoot = function () {
        var vec, bullet

        bullet = this.wor().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)

        vec = this.GetWorldVector(V(0, -100))
        bullet.I(vec.div(20))


    }
    b.bindKeyboard = function (cont) { //p.moveListener=
        var that = this

        control = (b2d.controls[cont] || b2d.controls.trickJump )

        control()

        cjs.tick(function () {
            that.rot(0)
            that.world().each(
                function (body) {
                    if (body.is('destroy')) {
                        body.destroy()
                    }
                }
            )
        })
    }  //b.warpToTopLeft=function(){ return this.XY(200, 100)}
    b.controlMe = function (control) {
        var that = this

        cjs.tick(function () {
            b2d.controls[control || 'standard'](that)
        })

        return this
    }
    b.marioWarping = function () {
        var p = this
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
        return this
    }
    b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
        var body = this


        var listener = b2d.listener()
            .begin(function (cx) {
                var bod
                if (fixt = cx.with('feet')) {
                    fixt.gB().trig.onGround = true
                }
            })

            .end(function (cx) {
                if (cx.with('feet')) {
                    body.trig.onGround = false
                }
            })

        this.GetWorld().listen(listener)

        return this
    }//b.feetListener =function(){return this.listener('feet')}

    b.warp =  function(p){
        var b=this,w=b.W()
        cjs.tick(function(){
            if(b.Y()<0){b.Y(w.H)}
            if(b.Y()>w.W){b.Y(0)}
            if(b.X()<0){b.X(w.W)}
            if(b.X()>w.W){b.X(0)}})
        return b}

    b.mario = function () {
        var b = this
        b.canJump = true
        b.onGround = false

        b.fixRot()

        cjs.tick(function () {
            var k = cjs.Keys
            if (b.onGround) {// if on ground
                if (k.up) {// if jumping
                    if (b.canJump == true) {
                        b.p('jump').I(0, -44);
                        b.canJump = false
                    }
                }
                else { // if not jumping
                    if (k.left) {
                        b.I(-20, 0)
                    } // p.dir(0)
                    if (k.right) {
                        b.I(20, 0)
                    }
                }
            } //p.dir(1)
            else {// if in air !!!
                if (k.left) {
                    b.dir(0);
                    b.I(-1, 0)
                }
                if (k.right) {
                    b.dir(1);
                    b.I(1, 0)
                }
            }
        })

        b.wor().beg(function () {  // ???
            b.canJump = true
            b.p('walk')
        })


        return this

    }
    b.arrowMove = function () {
        var body = this

        $.key({

            l: function () {
                body.dir('left').move()
            },
            r: function () {
                body.dir('right').move()
            },
            u: function () {
                if (body.dir() == 'left') {
                    body.I(5, -12)
                }
                else if (body.dir() == 'right') {
                    body.I(-5, -12)
                }
            }

        })

        return this
    }
    b.diff = b.dif = function (x, y) { // compare with DIF  - achtung!
        return {
            x: x - this.X(),
            y: y - this.Y()
        }
    }
    b.cam = function (x, y) {
        this.stg().XY(this.diff(x, y))
        return this
    }
    b.follow = function (x, y) {
        var b = this
        cjs.tick(function () {
            if (O(b.sprite)) {
                b.cam(x, y)
            }
        })
        return this
    }


}; player()
geometry=function() {
    b.verts = function () {//return this.union()

        //it used to just get from the FIRST fixt,
        //but now it unions them all together :)
        //b.verts = function(){ return this.fixt().verts() }

        var num = this.num(), fs, p
        if (num == 0) {
            return
        }

        fs = this.fixts()
        p = fs[0]

        if (num == 1) {
            return p.union(p)
        }

        _.each(_.rest(fs), function (f) {
            f = Math.poly(f)
            p = Math.poly(p.union(f))
        })

        return p
    }
    b.polygon = function () {
        return Math.poly(this.verts())
    }
    newX = function (x, y, rad) {
        rad = Math.toRadians(rad)
        return x * Math.cos(rad) - y * Math.sin(rad)
    }
    newY = function (x, y, rad) {
        rad = Math.toRadians(rad)
        return x * Math.sin(rad) + y * Math.cos(rad)
    }
    b.rotVerts = function () {//rotated but local

        var verts = this.verts(),
            b = this

        return _.map(verts, function (v) {
            var x = v.x,
                y = v.y

            return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
        })

    }
    b.V = b.rotWorVerts = function () {
        var b = this

        return _.map(b.rotVerts(), function (v) {
            return V(v.x + b.X(), v.y + b.Y())
        })
    }
    BODYVERTS = function () {
        w = b2d.W()

        w.ball()

        b = w.stat(300, 300)
        f1 = b.poly(100, 50)
        f2 = b.poly(50, 100)


        //p =   f1.union(f2)

        p = b.verts()

        w.stat(600, 200).sep(p)


    }
    b.dff = function (b2) {
        var b = this
        var p = Math.poly(b.V())
        return p.difference(Math.poly(b2.V()))
    }
    b.DIFF = function (b2) {

        var g = G(arguments),
            b2 = g[0],
            b = this, f = b.fixt(),

            dffV = b.dff(b2).verts()

        b2d.conc(b,
            _.map(dffV, function (v) {
                return V(v[0] - b.X(), v[1] - b.Y())
            }))
        f.kill()
        b.rot(0)

        if (g.n) {
            b2.kill()
        }
        return this
    }

    b.DIF = function (b2) {
        var g = G(arguments),
            b2 = g[0]

        this.eachFixt(function (f) {
            f.DIFF(b2)
        })

        if (g.n) {
            b2.kill()
        }
        return this
    }
    b.wVerts = function () {
        var p = this.transform().position.mult()

        return    _.map(this.verts(), function (vert) {
            return vert.add(p)
        })


    }
    b.wPolygon = function () {
        return Math.poly(this.wVerts())
    }
    b.polyVerts = function () {

        return  Math.poly(this.V())
    }




    b.conc=  b.sep= function(verts){


        var g = G(arguments),
            verts=g[0],
            col,
            b=this,
            fs, n1,n2, newFixts

        if(U(verts)){return}

        if(S(verts[0])){ col = verts.shift() }
        if(g.n){b.clear()}
        n1=b.num()
        b2d.sep(b, verts)

        if(S(col)){

            n2=b.num()
            fs=b.fixts()
            newFixts=_.first(fs,n2-n1)

            _.each(newFixts,
                function(f){f.C(col)})

        }


        return this
    }



    b.conc2=   function(col){


        var g = G(arguments),col=g[0],verts,
            b=this, fs, n1,n2, newFixts

        if(U(col)){return}
        verts=S(col)?_.rest(g):g

        if(g.n){b.clear()}
        n1=b.num()

        b2d.sep(b, verts)



        if(S(col)){
            n2=b.num()
            fs=b.fixts()
            newFixts=_.first(fs,n2-n1)
            _.each(newFixts,function(f){f.C(col)})}

        return this
    }












    b.minusPolyCirc = function (x, y, rad, sides) {
        var b = this

        poly = Math.poly(_.map(b2d.polyCirc(rad, sides),
            function (v) {
                return [v.x + x, v.y + y]
            }))
        verts = b.rel(b.polyVerts().difference(poly))

        b.clear().conc(verts)
        return this
    }


    b.union = function () {

        var num = this.num(),
            fs = this.fixts()

        if (num == 0) {
            return
        }
        if (num == 1) {
            return fs[0].polyVerts()
        }

        return fs[0].union(_.rest(fs))

    }
    b.minus = function (fOrB) {
        return this.rel(
            this.polyVerts().difference(fOrB.polyVerts())
        )
    }
    b.sub = function (a) {

        var p = this.minus(a)
        this.clear()
        this.conc(p)
    }
    b.subtract = function (a) {
        var g = G(arguments), a = g[0]

        _.each(this.fixts(),

            function (f) {
                f.sub(a)
            })

        if (g.n) {
            a.kill()
        }

        return this
    }
    b.rel = function (gPoly) {
        var b = this

        //my poly operations can only work with POSITIVE vertices
        //but box2d needs fixt vertices specified relative to a body
        //so this allows the body that the operation was based on to take responsibility
        //for converting them back

        //you can pass in the verts, or the gPoly itself!
        var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly

        return _.map(verts,
            function (v) {
                return V(v[0] - b.X(), v[1] - b.Y())
            })

    }
    b.polyClone = function (x, y, rot) {
        x = N(x) ? x : this.X()
        y = N(y) ? y : this.Y()
        rot = N(rot) ? rot : this.rot()

        var that = this,


            b = w.B(x, y).type(that.type()).rot(rot)

        _.each(that.fixts(), function (f) {

            b.poly.apply(b, _.map(f.verts(), function (v) {
                return [v.x, v.y]
            }))

        })

        return b

    }
    b.clone = function (x, y, rot) {


        x = N(x) ? x : this.X()
        y = N(y) ? y : this.Y()
        rot = N(rot) ? rot : this.rot()

        var that = this,

            b = w.B(x, y).type(that.type()).rot(rot)

        _.each(that.fixts(), function (f) {
            var h, x, y, r

            if (f.isCirc()) {
                h = f.shape()
                x = h.m_p.x * 30
                y = h.m_p.y * 30
                r = h.m_radius * 30
                b.circ(r, x, y)
            }
            else {
                b.poly(f.verts())
            }

        })

        return b

    }
    BCONVEX = function () {
        w = b2d.W()
        w.ball()
        b = w.dyn(400, 400)
        b.polyArr('r', [
            [-100, 0],
            [0, -100],
            [100, -50]
        ])
        b.polyArr([
            [-10, 0],
            [0, -100],
            [100, -50]
        ])


        b.polyArr(['b', [-200, 0], [0, -100], [10, 150]  ])

        b.polyArr('o', [-300, 0], [0, -100], [10, 150])


    }
}; geometry()


b2d.body = b2d.bodyDef = BodyDef = bDf =function(x,y){
    var bodyDef = new b2BodyDef()
    x=N(x)?x:300
    y=N(y)?y:300
    bodyDef.xy(x,y)
    return bodyDef
}


b2d.dyn = function(x,y){ return b2d.body(x,y).dyn() }



b2d.stat = function(x,y){//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=

    return b2d.body(x,y).stat()
}
b2d.kin = b2d.kinematic = KinematicBodyDef = kBD=function(x,y){return b2d.bodyDef(x,y).T(1)}
b2d.isBody = isBody=function(b){if(O(b)){return b.constructor.name=='b2Body'}}





DESTROYJOINT= function(){w=b2d.W()
    //w.startKilling();

    w.floor.rest(0)

    y = w.ship().XY(400,170).rot(265).stat()



     w.beg(function(cx){
         cx.with('bul', function(f){var b=f.B()
     this.B().kill()
     if(b!=y){b.kill()}
         })})


    base=w.S(255,50, 'r', 60,15)

    body=link(255,60)

    base.rev(body)


    /*

    prev= body

    w.rev(prev, body= link(255,90)  ); prev=body
    w.rev(prev, body= link(255,120)  ); prev=body

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

       */


    function link(x,y,col){col=col||'w'
        return w.B(x,y,col,10,15).den(1).fric(0).rest(0)}


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





FORCES=function(){w=b2d.W({g:0}).db()
    b = w.B(400,400,'o',200,200).bindSprite('me')
    cjs.tick(function(){b.I(0,-400, b.GetWorldPoint(V(100,-100).div()))})
    w.player('thrust')
}
LINVEL=function(){w=b2d.W({g:0}).db()
    _.times(10,function(){w.B(300,300,'y',50)})
    setInterval(function(){w.each(function(b){b.lV(0,20)})},1000)}

GRAVITY=function(){w=b2d.W({g:0}); w.B(100,100,10).constF(5000,-200000)}

IMP=function(){w=b2d.W({g:0})
    w.B(100,500,30,30).rot(2)
    b = w.B(300,500,30,30).rot(1).fixedRot(.2)

    t={i: function(){b.I(V(10, -30), b.worldCenter())},
        v: function(){b.lV(10,-60)},
        f: function(){setInterval(function(){b.F(V(0,-3),b.worldCenter())}, 100)}}

}
SCALE =function() {w = b2d.W() //hurts mouse joint
    var x = 400, y = 440, v = {x: 0, y: 0}
    w.S(400, 300, 40); w.S(290, 350, 40); w.S(280, 220, 40)
    rad = 10
    b = w.B(x, y, rad).lV(v)
    cjs.tick(function () {b.fixt().kill()
        x = b.X(); y = b.Y();v = b.lV();rad += .1
        b = w.B(x, y, rad).lV(v)})
}
CLONE=function(){w=b2d.W()
    w.roof.kill()
    b = w.B(400,400, [[20],[20,100,0],[20,0,100],[100,200]])
    setInterval(function(){b.I(0,-1000).clone()}, 3000)
    w.ship()}
MASSCLICKJUMP=function(){w=b2d.W({g:100}).db() //funny
    _.each([
            w.B(100,200,'r',150,100).den(.5),
            w.B(100,10,'b',30,60).den(.5).rest(2),
            w.B(500,400,'y',50,100).den(.5)
        ],

        function(b){b.click(function(){this.I(0,-50)})

    })




}
//
BODVERTS=function(){w=b2d.W()


    b = w.B(200,200,100,100).stat()

    b.poly(20,200)

    fs = b.fixts()

    f1=fs[0]
    f2=fs[1]

    p = f1.polyVerts().union(   f2.polyVerts()  )

    b2d.polyDot(p)

    relP = b.rel(p)

    b2d.polyDot(  relP )



    w.B(400,200).conc(  relP )

    w.B(500,400, [-100,0],[0,-100],[100,50]  )

    w.B(500,430).conc( [[-100,0],[0,-100],[100,50]]  )

    //make conc happen automatically whenever array of points specified
    //conCAVE hull??
    //union of 2 non overlapping fixtures, can just result in a body with two fixtures.. yea, why are unions not just creating bodies with all the fixtures?  no need combine two fixtures into one, right???!


}
BODMINUS=function(){w=b2d.W()

    b= w.dyn(300,400).stat()

    f = b.fixt( b2d.poly(100,100) )

    b2 = w.B(300, 400, [
        ['r', [-100,10],[-80, -40],[0,-200],[100,0]],
        ['b', 20,50]
    ]).stat()

    w.dyn(500, 400).stat().sep(  b2.minus(b)   )

}
REDUCE=function(){w=b2d.W()

    b = w.dyn(300, 400).stat()
    f = b.poly(100,200)
    f1 = b.poly(200,100, 100,0)
    f2 = b.poly(200, 100, 100,0,36)
    f3 = b.poly(20,20, 200, 0)

    // u =  f.union( [f1,f2] )

    u=b.union()

    b2 = w.stat(600,300).conc(  u).dyn()

    // body.polyVerts() does an automatic union of ALL its verts! i think :)

}
UNIONNOTTOUCHING=function(){w=b2d.W()


    b = w.B(200,200,100,100).stat()
    b2 = w.B(400,400,100,100).stat()

    p = b.polyVerts().union( b2.polyVerts()  )
    _.each(p.verts(), function(v){w.dot(v[0],v[1])})
    v1=b2.polyVerts().verts()
    v2=p.verts()
    _.isEqual(v1,v2) // true

    p2 = b2.polyVerts().union( b.polyVerts()  )
    _.each(p2.verts(), function(v){w.dot('r',v[0],v[1])})



    b3 = w.B(500,200,100,100).stat()
    b4 = w.B(550,250,100,100).stat()

    p3 = b3.polyVerts().union( b4.polyVerts()  )

    _.each(p3.verts(), function(v){w.dot(v[0],v[1])})


    b5 = w.B(700,200,100,100).stat()
    b6 = w.B(800,200,100,100).stat()

    p4 = b5.polyVerts().union( b6.polyVerts()  )

    _.each(p4.verts(),
        function(v){w.dot(v[0],v[1])})


}

