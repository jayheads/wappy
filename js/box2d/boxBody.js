bd = d=b2.Dynamics.b2BodyDef.prototype //SuperBodyDef= sBdD=function(a){return a|| b2.bodyDef() }
bd.XY = d.p=d.ps=d.xy=function(x,y){
    var args=G(arguments)
    args[0]=x; args[1]=y;
    if(x==='*'){ x= Math.random()*10*60}
    if(y==='*'){ y= Math.random()*10*60}
    var pos=this.position
    if(U(x)){return {x:pos.x*30, y:pos.y*30}}
    //if(O(x)){this.position=x;return this}
    this.position.Set(x/30,y/30)
    return this}
bd.X=  function(x){

    var pos = this.XY()
    if(U(x)){return pos.x}

    return this.XY(x, pos.y)
}
bd.Y=  function(y){
    var pos = this.XY()
    if(U(y)){return pos.y}
    return this.XY(pos.x,y)}

bd.linVel = d.lV=function(vel){
    var v=this.linearVelocity
    if(U(vel)){  return v }
    this.linearVelocity = vel
    return this}
bd.angVel = d.aV=function(vel){
    if(U(a)){return this.angularVelocity}
    this.angularVelocity=vel
    return this}
bd.linDamp = d.lD=function(damp){
    if(U(damp)){return this.linearDamping}
    this.linearDamping=damp;return this}
bd.angDamp =d.aD=function(damp){
    if(U(damp)){return this.angularDamping}
    this.angularDamping=damp; return this}
bd.rot = d.ang =  function(ang){
    //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?

    if(U(ang)){return d.angle}
    this.angle=ang; return this}
bd.fixedRot = d.fR=function(isFixed){
    if(U(isFixed)){return this.fixedRotation}
    this.fixedRotation=isFixed; return this}

bd.inertia=function(inertia){
    if(U(inertia)){return this.insertiaScale}
    this.insertiaScale=inertia; return this}
bd.act=d.setActive=function(isActive){
    this.active =isActive? true:false
    return this}
bd.sleepy = d.aS = function(canSleep){
    this.allowSleep=canSleep?true:false
    return this}
bd.bul = d.bull = d.fR=function(isBul){
    if(U(isBul)){return this.bullet}
    this.bullet=isBul; return this}

bd.T=d.typ= bd.kind=function(type){
    if(U(type)){return this.type}
    this.type=type
    return this}

bd.dyn=function(){
    return this.T(2)
}
bd.stat=function(){
    return this.T(0)
}

bd.kin=function(){
    return this.T(1)
}


bd.data=function(){}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body



b=p=b2.Dynamics.b2Body.prototype


b.wor = b.W =b.world=function(){return this.GetWorld()}



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
b.angVel=p.aV= function(vel){
    if(U(vel)){return this.GetAngularVelocity() }
    this.SetAngularVelocity(vel)
    return this}

b.linVel=p.linearVelocity=p.lV=function(vel, n2){

    var v=this.GetLinearVelocity()

        if(U(vel)){return v}
    if(N(vel)){ vel = V(vel, n2) }
    this.SetLinearVelocity(vel)

    return this.wakeUp()
}

b.vX=function(x){
    if(U(x)){return this.lV().x}
    return this.lV(x, this.lV().y)
}

b.vY=function(y){
    if(U(y)){return this.lV().y}
    return this.lV(this.lV().x,y)
}





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
b.mass =function(m){if(U(m)){return (this.GetMass()*900)/100}}

b.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}
b.fixRot=function(){
    return this.fixedRot(true)
}



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
b.F = b.applyForce = p.aF  = function(v,c,c2){
    if(N(c)){return this.F(  V(v,c), c2  )}
    if( U(c) ){ c = this.worldCenter() }
    this.ApplyForce(v, c)
    return this}    //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center
b.type =p.T= p.ty= p.t= function(a){
    if(U(a)){return this.GetType()}
    this.SetType(a)
    return this}
b.stat = function(){var v=this.linVel()
//huh??? oh can get/set type of body
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
b.wCent=  p.wC=  p.worldCenter= p.gWC= function(){
    return this.GetWorldCenter()}
b.cent=function(){

    var c = this.GetWorldCenter()

return V(c.x*30, c.y*30)}
b.joint = function(){ return this.GetJointList().joint }



b.dot=function(col){
    var b=this,
        s= b.stg(),
        g= G(arguments)
    col= oO('c', g[0]||'y')
    if(g.p){s.dot(col,b.cent())}
    else {s.dot(col, b.X(),b.Y())}
return this}


//b.dot() // dots the center of mass, not xy ??!!!


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
b.stg=function(){ return this.wor().stage }

b.bindSprite=function( img,   scale,  startingRotation ){ //img is an image name  //rotation is in degerees!
    var body=this, stage = body.wor().s
    scale = scale||.4
    startingRotation = N( startingRotation) ?  startingRotation : 6 // why not zero ?????

    stage.bm(img, function(bm){//b=bm  //bm.rCenter('+')
        if( A(scale) ){  bm.sXY( scale[0] , scale[1] )} else { bm.sXY(scale) }


        body.sprite = bm  //only one???

        updateSprite()
        cjs.tick(updateSprite)

        function updateSprite(){
            bm.XY( body.X(), body.Y() ) //can simplify?

            bm.rotation = body.rot() + startingRotation }


    }, '-') // what is this negative doing ?????

    return body}

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
b.hit=function(x,y,dot){var hit
if(dot==true){this.wor().dot(x,y)}
    this.eachFixt(function(f){
        if(f.hit(x,y)){hit=true}
    })

    return hit}
b.kill=function(){

    if(this.sprite){this.sprite.remove()}

    _.each(this.fixts(), function(f){
        if(f.sprite){f.sprite.remove()}
    })

    this.sprite=null
    this.SetActive(false)
    this.destroy()

}


b.num = b.count=function(){
    return this.m_fixtureCount
}



b.verts=function(){//return this.union()

    //it used to just get from the FIRST fixt,
    //but now it unions them all together :)
    //b.verts = function(){ return this.fixt().verts() }

    var num = this.num(),fs,p
    if(num==0){return}

    fs = this.fixts()
    p = fs[0]

    if(num == 1){ return p.union(p) }

    _.each( _.rest(fs), function(f){
        f = Math.poly(f)
        p =  Math.poly( p.union( f )  )
    })

    return p
}







b.polygon=function(){
    return Math.poly (this.verts())
}

newX= function(x,y,rad){rad=Math.toRadians(rad)
    return x*Math.cos(rad)-y*Math.sin(rad)}
newY= function(x,y,rad){rad = Math.toRadians(rad)
    return x*Math.sin(rad) + y*Math.cos(rad)}

b.rotVerts=function(){//rotated but local

    var verts = this.verts(),
        b=this

    return _.map(verts, function(v){
        var x=v.x,
            y=v.y

        return V( newX(x,y,b.rot()), newY(x,y,b.rot())     )
    })

}




b.V = b.rotWorVerts = function(){var b=this

    return _.map(b.rotVerts(), function(v){
        return V(v.x + b.X(), v.y + b.Y()  )
    })
}







BODYVERTS=function(){w=b2d.W()

    w.ball()

    b= w.stat(300, 300)
   f1= b.poly(100,50)
   f2 = b.poly(50,100)


    //p =   f1.union(f2)

    p = b.verts()

    w.stat(600,200).sep( p )


}






b.dff=function(b2){var b=this
    var p = Math.poly(b.V())
    return p.difference( Math.poly(b2.V()))
}
b.DIFF=function(b2){

    var g=G(arguments),
        b2=g[0],
        b=this, f=b.fixt(),

        dffV = b.dff(b2).verts()

    b2d.conc(b,
        _.map(dffV, function(v){
            return V(v[0] - b.X(), v[1]- b.Y())}))
    f.kill()
    b.rot(0)

    if(g.n){b2.kill()}
    return this}
b.DIF=function(b2){
    var g=G(arguments),
        b2=g[0]

    this.eachFixt(function(f){f.DIFF(b2)})

    if(g.n){b2.kill()}
return this}
b.wVerts=function(){
   var p =  this.transform().position.mult()

  return    _.map( this.verts() , function(vert){
        return vert.add(p)
    })


}
b.wPolygon=function(){
    return Math.poly (this.wVerts())
}
b.destroy=function(){

    this.wor().DestroyBody(this)
}

b.setDestroy=function(){return this.K('destroy')}



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








b.diff= b.dif = function(x, y){

     var ob = {    x: x - this.X(),   y: y - this.Y()  };

     return ob}//compare with DIF  - achtung!
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


b.fixt= p.createFixture = p.cF =  function(fD){var b=this,f;  if(U(fD)){return this.list()}

    if( A(fD) ){
        _.each(b2d.fixtParse(fD),
            function(fd){b.fixt(fd)})
    return b}

 f = this.CreateFixture(fD)

  if( A(fD.classes) ){
      _.each(fD.classes,
          function(clas){f.K(clas)})}

    return f}




b.fixt1 = b.shape=function(){
    var fixt = b2d.fixt.apply(b2d, arguments)
    this.fixt(fixt)
return fixt}





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

b.poly = function(){

    var fix =  this.fixt(  b2d.poly.apply(null, arguments)   )

return fix}





b.CIRC = b.circ = function(col, rad, x, y){ var g= G(arguments),  fixt, h
    col=g[0];  rad=g[1];  x=g[2];  y=g[3];
    if(!S(col)){y=x;x=rad;rad=col}
    fixt =  this.fixt(  b2d.circ(rad,x,y)   )
    if(S(col)){ fixt.bindSprite2( w.s.circ(col,rad,x,y)) }
    return fixt}



b.RECT = function(col, wd, ht, x, y, rot){ var g= G(arguments),  fixt, h

    col=g[0];
    wd=g[1];
    ht=g[2]
    x=g[3];
    y=g[4];
    rot=g[5]

    if(!S(col)){rot=y;y=x;x=ht;ht=wd;wd=col}

    fixt =  this.fixt(  b2d.rec(wd,ht,x,y,rot)  )

    if(S(col)){ fixt.bindSprite2(

        w.s.RECT(col, wd, ht, x, y, rot)

    ) }


    return fixt}





b.getShape=function(){
    return this.fixts()[0].shape()}

b.rad = function(){return this.fixts()[0].shape().m_radius * 30}
b.C=function(col){
    var rad=this.rad(),
        x=  this.getShape().m_p.x,
        y= this.getShape().m_p.y
    this.sprites[0].remove()
    this.sprites=[w.s.cir(x,y,rad,col)]
}


//takes an array of points (or of one color and a bunch of points)
b.polyArr = b.convex = function( col, arr ){
    var b=this,   w= b.wor(), h, f,g=G(arguments)


    if( g.length > 2){

        if( S(col) ){ arr = _.rest(g) }
        else {col = 'p'; arr =g}
    }

    if(!S(col) ){

        if( S(col[0]) ){
            arr= _.rest(col)
            col = col[0];
        }

        else {
            arr=col;
            col=null
         }

    }


    f = b.poly.apply(b, arr)

    if(col){
        f.bindSprite2( w.s.poly(arr, col, col)  )
    }

    return f
}


b.polyVerts=function(){

    return  Math.poly( this.V() )
}




b.conc = b.sep=function(verts ){var g=G(arguments), verts=g[0]

   if(verts){

    var a=  b2d.sep(this, verts)

       //if(g.n){this.clear() }
       return a
   }

}



b.minusPolyCirc=function(x,y,rad,sides){var b=this

    poly = Math.poly(_.map(b2d.polyCirc(rad,sides) ,
        function(v){return [v.x+ x, v.y+ y]}))
    verts = b.rel(  b.polyVerts().difference(poly)    )

    b.clear().conc( verts )

    return this}



b.union=function(){

    var num =this.num(),
        fs = this.fixts()

    if(num==0){return}
    if(num==1){return fs[0].polyVerts()}

    return fs[0].union( _.rest(fs)  )

}







b.clear=function(){
    _.each(this.fixts(), function(f){f.kill()}  )
return this}



b.minus=function(fOrB){
    return this.rel(

        this.polyVerts().difference( fOrB.polyVerts() )
    )
}




b.sub=function(a){

    var p = this.minus( a )
    this.clear()
    this.conc( p )
}



b.subtract=function(a){var g=G(arguments),a=g[0]

    _.each(this.fixts(),

        function(f){

            f.sub( a )

        })

    if(g.n){a.kill()}

return this}







b.rel=function(gPoly){var b=this

    //my poly operations can only work with POSITIVE vertices
    //but box2d needs fixt vertices specified relative to a body
    //so this allows the body that the operation was based on to take responsibility
    //for converting them back

    //you can pass in the verts, or the gPoly itself!
    var verts = b2d.isGPoly(gPoly)? gPoly.verts(): gPoly

    return _.map(verts,
        function(v){
            return V(v[0]-b.X(), v[1]-b.Y())
        })

}









BCONVEX=function(){w=b2d.W()
    w.ball()
    b = w.dyn(400,400)
    b.polyArr('r', [  [-100,0], [0,-100], [100,-50]  ] )
    b.polyArr(  [ [-10,0], [0,-100], [100,-50]  ] )


    b.polyArr(  ['b', [-200,0], [0,-100], [10,150]  ]   )

    b.polyArr(  'o',    [-300,0],[0,-100],[10,150]      )


}







b.H = function(){
    var b=this,
        g=G(arguments),
        len = length(g)

    $l('len: '+len)
    //passing a single array, suggest MULTIPLE fixts

    if( A(g[0]) && U(g[1]) ){
        _.each(g[0],  function(a){ b.H.apply(b,a) })
        return b
    }

   // b.polyArr( g )
    else if( S(g[0]) && A(g[1]) && U(g[2]) ){

        _.each( g[1] ,
            function(a){

            if(!S(a[0])){  a.unshift( g[0] )  }

            b.H.apply(b, a)

        })

        return b
    }


    else if( A(g[1]) ){   b.convex(g)  }

    //circle
    else if(len==1 || len==3){  b.CIRC.apply(b,g)   }

    else {  b.RECT.apply(b,g)  }

    function length(arr){
        var len=arr.length
        if(S(arr[0])){len--}
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






b.glue=function(b2){

 return this.wor().weld(this, b2, b2.X() - this.X(), b2.Y() - this.Y())

}



b.fixts=function(){
    var fl=this.GetFixtureList(),
        arr=[]

    while(fl){
        arr.push(fl)
        fl = fl.GetNext()
    }

    arr = arr.sort(function(a, b){
        return  b.area() -a.area()

    })

    return arr
}
b.list=p.fixtList = p.fixtureList=p.gFL=function(){return this.GetFixtureList()}
b.each = p.eachFixt = function(func){

    var fl=this.GetFixtureList(),
        arr=[]

    while(fl){
        arr.push(fl)
        fl = fl.GetNext()
    }

    _.each(arr, func)

return this}


//easel
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


//game
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
            if (p.Y() < 0) {p.Y(300)}
            if (p.Y() > 300) {p.Y(0)}
            if (p.X() < 0) {p.X(600)}
            if (p.X() > 600) {p.X(0)}})
        return this}
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
b.warp2 = function(p) {var p=this
    cjs.tick(function () {
        if (p.Y() < 0) {
            p.Y(600)
        }
        if (p.Y() > 600) {
            p.Y(0)
        }
        if (p.X() < 0) {
            p.X(1200)
        }
        if (p.X() > 1200) {
            p.X(0)
        }
    })

    return this}
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


b.data = b.D = function(data){
    if(U(data)){return this.GetUserData()}
    this.SetUserData(data)
    return this}


b.classCount=function(){
    if(!A(this.classes)){return 0}
    return this.classes.length}

b.addClass = function(clas){var that=this, func
    this.classes = this.classes || []

    if(U(clas)){
        $l('need to provide a class!');
        return this}

    if(F(clas)){ // use case??
        func= _.bind(clas, that)
        this.addClass( func( that.getClasses() ) )
        return this}

    _.each(arguments,  function(clas){
        if( S(clas) ){
        _.each(clas.trim().split(' '), function(clas){
                clas = clas.trim()
                if(clas!='' && !that.hasClass(clas)){
                    that.classes.push(clas)}
            })
        }
    })

    return this}
b.getClass=b.getClasses=function(){
    this.classes= this.classes||[]
    return this.classes.join(' ')}


b.K=function(k){var that=this
    if(U(k)){return this.getClasses()}
    _.each(arguments, function(k){
        that.addClass(k)
    })
    return this}



b.hasClass=b.hasClasses=function self(clas){
    var body=this,hasClass; body.classes=body.classes||[]
    if(!clas){return true}
    if(A(clas)){return self.apply(body, clas)}
    _.each(arguments, function(clas){
        if(!clas||_.contains(body.classes, clas.trim())){
            hasClass=true}})
    return hasClass}




b.hasAllClasses=function(clas){if(U(clas)||clas==''){return false}

    var body=this,anyYes=null, anyNo=null

    _.each(arguments, function(clas){


        if(body.hasClass(clas)){anyYes=true}

        else if(!body.hasClass(clas)){anyNo=true}



    })

    return (anyYes && !anyNo)


}
b.is= b.be = function(kindOrBody){//this is an OR statement.  at least one must be true
    var that=this, is=false
    if(b2d.isBody(kindOrBody)){return this == kindOrBody}
    _.each(arguments, function(kind){
        if(that.hasClass(kind)){
            is=true }})

    return is}
b.not= p.notAny = function(kind){
//this is an AND: ALL MUST BE FALSE
    var that=this, not=true
    _.each(kind, function(kind){
        if(that.is(kind)){not=false}
    })
    return not}



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

b.of=function(){}

b.contains = function(clas){

    var fs = this.fixts(), contains=false

    _.each(fs, function(f){
        if(f.hasClass(clas)){contains=true}
    })

return contains}


b.among=function(){}




b.color=function(c1, c2){c1=c1||'b'; c2=c2||c1

    _.each(this.fixts(), function(f){
        f.color(c1,c2)
    })
}




b.contacts = b.cx = function(){return this.GetContactList()}
b.isDyn = function(){return this.GetType()==2}
b.isKin = function(){return this.GetType()==1}
b.isStat = function(){return this.GetType()==0}





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

//contacts




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


b.linVelWor = function(x, y){var v, lv
    if(N(y)){ x = V(x, y)  }
    v = V(x)

    lv= this.GetLinearVelocityFromWorldPoint( x.div() ).mult()



    lv = V(  Number( lv.x.toFixed(2) ),  Number( lv.y.toFixed(2) ))




return lv}




b.linVelLoc = function(x, y){var v, lv
    if(N(y)){ x = V(x, y)  }
    v = V(x)

    lv = this.GetLinearVelocityFromLocalPoint( x.div() ).mult()

    lv = V(  Number( lv.x.toFixed(2) ),  Number( lv.y.toFixed(2) ))




    return lv}







//fixts
b.fixtData = function(userData){
    var fixtList = this.fixtureList()
    if(U(userData)){  return fixtList.GetUserData() }
    fixtList.SetUserData(userData)
    return this
}//user data first fixture?


b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}

//controllers
b.cancel=function(cntr){
    if(O(cntr)){cntr.remove(this)}
    else if(O(this.co())){this.co().controller.remove(this)}}
b.switchTo=function(co){
    this.cancel()
    co.body(this)
    return this}

b.co = function(co){
    if(U(co)){return this.GetControllerList()}
    this.wor().co(this)  // :)
    return this}
b.bc = b.broadcast = function(func){
    var origEdge, edge, nextEdge

    if(func=='kill'){func = function(b){b.kill()}}

    origEdge = this.co()
    if(!origEdge){return this}
    edge = origEdge.nextBody
    while (edge) {nextEdge = edge.nextBody
        func(edge.body)
        edge = nextEdge}
    edge = origEdge.prevBody
    while (edge) {
        nextEdge = edge.prevBody
        func(edge.body)
        edge = nextEdge}
    return this}






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
b.web=function(shouldKill){
    //when a web is created it gets web.connected=false
//when it hits certain things and forms a joint, then connected->true
//then it just dies
//pressing DOWN should release the most recent of the connectedWebs
//non connected Webs can be shot off!


    var p=this, w=this.wor(),

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


b2d.body = b2d.bodyDef = BodyDef = bDf =function(x,y){
    var bodyDef = new b2BodyDef()
    x=N(x)?x:300
    y=N(y)?y:300
    bodyDef.xy(x,y)
    return bodyDef
}


b2d.dyn = function(x,y){      //b2d.dynamic = b2d.dynamicDef=  dBD=
    return b2d.body(x,y).dyn()
}


b2d.stat = function(x,y){//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=

    return b2d.body(x,y).stat()
}



b2d.kin = b2d.kinematic = KinematicBodyDef = kBD=function(x,y){return b2d.bodyDef(x,y).T(1)}
b2d.isBody = isBody=function(b){if(O(b)){return b.constructor.name=='b2Body'}}




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
