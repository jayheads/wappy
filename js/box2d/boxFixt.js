fd= b2d.Dynamics.b2FixtureDef.prototype  //fd.sSAP  = fd.setShapeAsAPoly=function(){return this.H( b2d.polyShape())}
fd.H=   fd.setShape=function(shape){
        if(U(shape)){return this.shape}
        this.shape=shape;
        return this}
fd.den =fd.d=function(den){if(U(den)){return this.density}
        this.density = den;
        return this}
fd.fric =fd.f=function(fric){if(U(fric)){return this.friction}
        this.friction=fric;return this}
fd.rest =fd.r=function(rest){if(U(rest)){return this.restitution}
        this.restitution=rest;return this}
fd.K=fd.uD=function(data){
        if(U(data)){return this.userData }
        this.userData=data;return this}
fd.group = fd.index=fd.gI=function(a){
        if(U(a)){return this.filter.groupIndex}
        this.filter.groupIndex=a; return this}
fd.cat= fd.category=fd.cB=function(a){
        if(U(a)){return this.filter.categoryBits}
        this.filter.categoryBits=a; return this}
fd.mask=fd.mB=function(a){
        if(U(a)){return this.filter.maskBits}
        this.filter.maskBits=a; return this}
fd.bits=function(cat, mask){
        return this.cat(cat).mask(mask)
    }
fd.verts =function( ){

        var shape = this.shape,

            verts = shape.m_vertices,

            verts= [
                verts[0].mult(),
                verts[1].mult(),
                verts[2].mult(),
                verts[3].mult()]

        return $l(verts)
    }
/*
 f.set=function(x,y){//dep?
 this.shape.Set(x,y)
 return this
 }

 f.sAB=function(a,b,p,A){//dep?
 if(!p){this.shape.SetAsBox(a/30,b/30)}
 else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
 return this}
 */
fd.sen = fd.sensor= fd.iS=function(isSensor){
        if(U(isSensor)){return this.isSensor}
        this.isSensor =isSensor?true:false
        return this}



fd.sAB=function(a,b,p,A){//?

    if(!p){this.shape.SetAsBox(a/30,b/30)}

    else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
    return this}

fd.klass =function(klass){this.klasses = this.klasses || []
    this.klasses.push(klass)
    return this}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

f = b2d.Dynamics.b2Fixture.prototype
f.classCount=function(){
    if(!A(this.classes)){return 0}
    return this.classes.length

}
f.addClass = function(clas){if(U(clas)){alert('need to provide a class!'); return false}
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
f.getClasses= f.getClass=function(){this.classes= this.classes||[]

    return this.classes.join(' ')

}

f.toggleClass=function(clas){
    if(U(clas)||clas==''){return false}

    if(this.hasClass(clas)){
        this.removeClass(clas)
    } else {this.addClass(clas)}

    return this}
f.removeClass=function(clas){var ix
    this.classes = this.classes||[]
    if( S(clas) ){

        if(this.hasClass(clas)){

            ix = this.classes.indexOf(clas)

            this.classes[ix] = null

            this.classes = _.compact( this.classes )


        }



    }
    return this}




f.hasClass=f.hasClasses=function(clas){
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
f.hasAllClasses=function(clas){if(U(clas)||clas==''){return false}

    var body=this,anyYes=null, anyNo=null

    _.each(arguments, function(clas){


        if(body.hasClass(clas)){anyYes=true}

        else if(!body.hasClass(clas)){anyNo=true}



    })

    return (anyYes && !anyNo)


}


f.ofClass=function(){var body= this.body()
    return this.hasClass.apply(this, arguments) ||
       body.hasClass.apply(body, arguments)}

f.be=function(kindOrFixt){
    if(S(kindOrFixt)){return this.hasClass(kindOrFixt)}
    if(b2d.isFixt(kindOrFixt)){return this == kindOrFixt}
    return false}
f.beOf=function(kindOrFixt){
    if(S(kindOrFixt)){return this.ofClass(kindOrFixt)}
    if(b2d.isFixt(kindOrFixt)){return this == kindOrFixt}
    if(b2d.isBody(kindOrFixt)){return this.body() == kindOrFixt}
    return false}
f.beAmong=function(){}
f.beNear=function(){}



f.dyn=function(){var body = this.body()
    body.dyn.apply(body, arguments)
    return this}
f.kin=function(){var body = this.body()
    body.kin.apply(body, arguments)
    return this}
f.stat=function(){var body = this.body()
    body.stat.apply(body, arguments)
    return this}

f.B=  f.body=f.gB=f.getBody=function(){return this.GetBody()}
f.K= f.uD=function(data){
        if(U(data)){
            return this.GetUserData() }
        this.SetUserData(data);return this}

f.is= function(kindOrFixt){

    if(S(kindOrFixt)){
        return this.K() == kindOrFixt
    }

    if(b2d.isFixt(kindOrFixt)){
        return this == kindOrFixt}

    return false
}

f.of= function(what){
    return  this.is(what) || (this.B().K()==what)
    return false}
f.near= function(what){var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
    return false}



f.remove = function(){this.B().destroyFixt(this)} //can combine with kill?
f.kill= function(){if(this.sprite  ){this.sprite.remove()}
    this.remove(); return}

f.dot = function(col){

    if(S(col)){return this.B().W().s.dot(col, this.center() ) }

    return this.B().W().s.dot( this.center() )


}
f.setKill=function(){var that=this
    var flagNum = Math.random()
    this.B().W().flag( flagNum )
    cjs.tick(function(){   if(w.flagged(flagNum)){ that.kill()     }      })}
f.coll=function(what, func){

    //ultimate func for FIXTURE COLL
    // you can specify what happens when a fixture hits:
    //ANYTHING
    // body/fixt of certain kind
    // specific fixt
    // specific body
    //but it its callback ALWAYS passed back the other fixt that was actually hit
    // and 'this' is set to THIS fixt within the cb



    var that = this,  beginFunc

    if(F(what)){func=what


        func = _.bind(func, this)
        beginFunc=function(cx){
            //if first fixt is THIS fixt, run the func on the second fixt
            if(cx.A()==that){func(cx.B())}
            //if second fixt is THIS fixt, run the func on the first fixt
            if(cx.B() ==  that){func(cx.A())}}
        w.begin(beginFunc)
        return this


    }

    func = _.bind(func, this)
    if(S(what)){

        beginFunc=function(cx){
            if(cx.A()==that && cx.B().of(what) ){func(cx.B())}
            if(cx.B()==that &&  cx.A().of(what)){func(cx.A())}}

    }
    else if(b2d.isFixt(what)) {


        beginFunc = function (cx) {
            if (cx.A() == that && cx.B() == what) {
                func(cx.B())
            }
            if (cx.B() == that && cx.A() == what) {
                func(cx.A())
            }
        }

    }
    else if(b2d.isBody(what)){

        //still pass back fixt


        beginFunc = function (cx) {
            if (cx.A() == that && cx.b() == what) {
                func(cx.B())
            }
            if (cx.B() == that && cx.a() == what) {
                func(cx.A())
            }
        }

    }
    w.begin(beginFunc)

    return this


}
f.next= function(){return this.GetNext()}
f.den =f.d=function(den){if(U(den)){return this.GetDensity()}
        this.SetDensity(den)
        return this}
f.fric =f.f=function(fric){if(U(fric)){return this.GetFriction()}
        this.SetFriction(fric);return this}
f.rest =f.r=function(rest){if(U(rest)){return this.GetRestitution()}
        this.SetRestitution(rest);return this}
f.center=function(){
    var aBounds = this.GetAABB(),
        aLower = aBounds.lowerBound,
        alx = aLower.x*30, aly = aLower.y*30,
        aUpper = aBounds.upperBound,
        aux = aUpper.x*30, auy = aUpper.y*30,
        center = Math.lineCenter(alx, aly, aux, auy)
    return __center = center}
f.getType = f.gT=function(someType){// confusing with this matcher
        var thisType =  this.B().GetType()
        return  D(someType)?  (thisType == someType) : thisType}
f.isType = function(typ){return this.getType() == typ}


f.H= f.shape=function(shape){
    if(U(shape)) {return  this.GetShape()}
    this.m_shape =shape //not sure if this works
    return this}
f.sensor= f.iS=function(isSensor){
        if(U(isSensor)){return this.m_isSensor}
        this.m_isSensor = isSensor? true:false
        return this}

f.index= function(a){
    if(U(a)){return this.GetFilterData().groupIndex}
    this.SetFilterData() // this.filter.groupIndex=a;  ????
    return this}

f.isStat=function(){

    return this.B().isStat()
}
f.isDyn=function(){

    return this.B().isDyn()
}
f.isKin=function(){

    return this.B().isKin()
}




f.testPoint= f.tP=function( point, y ){var success
    if(N(point)){point = V(point, y)}
    success =  this.H().testPoint(
        this.B().transform(),
        point)

    return __success = success}


f.hit=function(x, y, dot){
    if(dot==true){w.dot(x,y)}
    if(O(x)){y= x.y;x= x.x}
    var h = this.shape(),
        b=this.body(),
        tf= b.transform(),
        v = V(x,y).div()
    return h.TestPoint(tf,v)}


f.verts= function(){

    var shape = this.GetShape(),

        verts = shape.m_vertices

    return [ verts[0].mult(), verts[1].mult(), verts[2].mult(), verts[3].mult()]}

f.radius = function(){
    var shape = this.GetShape(),
        radius = shape.radius


        return radius*30}

f.cancel=function(){

    this.body().cancel()
return this}

f.switchTo=function(co){
    this.body().switchTo(co)
    return this}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

FIXVSDEF=function(){

    w=b2d.mW()

    fd = b2d.fixt()

    b =   w.CreateBody( b2d.dyn()  )

    f = b.CreateFixture(fd)
}
TESTPOLYF=function(){w=b2d.W(); $l('testpolyf')

    w.dyn(400,400, [

        b2d.circ(20),
        b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
        b2d.circ(10, 100, 100, '-'),
        b2d.circ(10, 100, -100),

        poly = b2d.poly(10, 300, '-'), //sets as sensor
        poly2 = b2d.poly(300, 10)

    ])

    body =  w.dyn(300, 400, [
        polyFD =  b2d.poly(200,100),
        circFD =  b2d.circ(40)
    ])

    circF = body.fixt().K('happy')
    polyF = circF.next()

    $l(circF.is('sad'))  //false
    $l(circF.is('happy'))  //true
    $l(circF.is(polyF))  //false
    $l(circF.is(circF))  //true
}



b2d.fixtParse=function(arr){


    return _.map(arr, function(fixt){
        var len

        if(!A(fixt)){return fixt}

        if(fixt.isSensor){


            b2d.polySens = function(kind){//dep? still used!!!~~~~~~
                return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
            }

            return b2d.polySens.apply(null, fixt)

            return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
        }

        len = fixt.length

        if(len==1){return b2d.circ(fixt[0])}
        else if(len==2){return b2d.poly.apply(null,fixt)}
        else if(len==3){return b2d.circ.apply(null,fixt)}
        return b2d.poly.apply(null,fixt)

    })


}


FIXTURES=function(){z()



    guyInBed= [[30],[20, 30,30],[100,30]]

    dick = [[50, 300, 0,-100],[50, 100, 150],[50, -100, 150]] //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]

    w=b2d.mW({
        //walls:false
    })


    //w.dyn(400,300, b2d.fixtParse(dick) )
    //w.A(  b2d.dyn(300,300), guyInBed ) // have to fix w.dyn

    b = w.A(b2d.dyn(300,300), [

        [40],

        b2d.poly(30,100).sensor(true).K('arm')

    ])

    b.K('man')


    w.begin(function(cx){

        //$l('a body: ' + cx.a().K() + ' - a fixt: ' + cx.A().K()   )

        if(cx.with('arm')){

            b.I(50,50)
            $l('arm!') }

        if(cx.with('arm','brick')){ $l('ok this is cool!')}
    })


    w.brick(500,200,40,40)

}

JUMPERS=function(){



    w=b2d.mW({grav:100})


    a=  w.dyn(100,200, b2d.poly(150,100 )).den(.5)




    c=  w.dyn(500,400, b2d.poly(50,100 )).den(.5)

    b=    w.dyn(100,10, b2d.poly(30,60 )).den(.5).rest(2)



    _.each([a,b,c], function(b){

        b.click(function(){

            this.I(0, -50)})
    })



}
MASS=function(){w = b2d.mW(
    {
        grav:0
    }
)




    r = w.circ(  200, 200,  50, 'red'  )
    r.ResetMassData()


    b = w.circ(  200, 200,  50, 'blue'  )
    b.GetFixtureList().SetDensity(1)


    y = w.circ(  200, 200,  50, 'yellow'  )
    y.GetFixtureList().SetDensity(1)
    y.ResetMassData()



    p = w.circ(  200, 200,  50, 'pink'  )
    p.GetFixtureList().SetDensity(10000)
    p.ResetMassData()




}
FIXTLIST=function(){//works

    w = b2d.mW()


    b=w.dyn(100,100,[

        [40], [100,200,100], [50,200], [200,200,300,400]

    ])


    f = b.GetFixtureList()

    w.startKilling()

    b.each(

        function(f){ //bind to this.. when u have time

            //f.SetSensor(true) //works

            // f.remove()

            // f.K('destroy')

            $l('shape type: ' + f.GetShape().m_type)

        }
    )


}
TESTASHAPE=function(){w=b2d.W()

//not working

    w.A(
        w.dyn(400,400, [

            b2d.A([30,30],[20,40],[10,10])
        ])
    )

}



b2d.Arr = b2d.A = function(){

    var shape = b2d.AShape.apply(null, arguments),

    poly = b2d.fixt(shape).den(.1)

return poly}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

b2d.fixt = b2d.fixtDef=function(shape){
    var fixt= new b2d.Dynamics.b2FixtureDef()
    if(b2d.isShape(shape)){fixt.shape = shape}
    return fixt}



b2d.poly = b2d.polyDef=b2d.polyFixt=pFx=function(wd, ht, xy, ang,ang2){
    var g= G(arguments), fixt



    wd=g[0]; ht=g[1]; xy=g[2]; ang=g[3]; ang2=g[4]


    if(A(wd)){
        return b2d.Arr.apply(null, arguments)
    }
    //if(b2d.isShape(wd)){fixt.shape = wd; return shape}
    //you can make a poly
    wd=wd||100

    ht=N(ht)?ht:wd




    fixt = b2d.fixt(
        __polyShape= b2d.polyShape(wd, ht, xy, ang, ang2)
    )


    fixt.density=1    // ??
    fixt.friction=.2
    fixt.restitution = .2

    if(g.n){fixt.isSensor=true}
    return __fixt = fixt

}




b2d.circ = b2d.circDef=b2d.circFixt=cFx=function(radius, x, y){//fC=
    var g= G(arguments), fixt

    radius=g[0]; x=g[1]; y=g[2];

    radius = radius|| Math.random()+.1

    x=N(x)?x:0
    y=N(y)?y:x

    var circle = b2d.circleShape(radius)

    __circleShape = circle

    circle.SetLocalPosition( V(x,y,'-')  )

    fixt = b2d.fixt(circle) //.d(1).f(.5).r(.8)

    if(g.n){fixt.isSensor=true


    }
    return fixt
}



b2d.isFixt=function(fixt){
    if(!fixt){return false}
    return fixt.constructor.name=="b2Fixture"}
b2d.fixtParse=function(arr){


    return _.map(arr, function(fixt){
        var len

        if(!A(fixt)){return fixt}

        if(fixt.isSensor){


            b2d.polySens = function(kind){//dep? still used!!!~~~~~~
                return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
            }

            return b2d.polySens.apply(null, fixt)

            return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
        }

        len = fixt.length

        if(len==1){return b2d.circ(fixt[0])}
        else if(len==2){return b2d.poly.apply(null,fixt)}
        else if(len==3){return b2d.circ.apply(null,fixt)}
        return b2d.poly.apply(null,fixt)

    })


}



FIXTURES=function(){z()

    guyInBed= [[30],[20, 30,30],[100,30]]

    dick = [[50, 300, 0,-100],[50, 100, 150],[50, -100, 150]] //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]

    w=b2d.W({
        //walls:false
    })


    //w.dyn(400,300, b2d.fixtParse(dick) )
    //w.A(  b2d.dyn(300,300), guyInBed ) // have to fix w.dyn

    w.dyn(100,100, b2d.fixtParse(guyInBed) )


    b = w.A(b2d.dyn(300,300), [

        [40],

        b2d.poly(30,100).sensor(true).K('arm')

    ])

    b.K('man')


    w.begin(function(cx){

        //$l('a body: ' + cx.a().K() + ' - a fixt: ' + cx.A().K()   )

        if(cx.with('arm')){

            b.I(50,50)
            $l('arm!') }

        if(cx.with('arm','brick')){ $l('ok this is cool!')}
    })


    w.brick(500,200,40,40)

}


GRAVITY=function(){  w=b2d.W({g:0})

    b = w.ball(100,100,100).constF(5000, -200000 )

}

DEMO_IMPULSE =function(){

    b2d.mW({ grav: 0 })

    w.A( b2d.dynamic(100,500).rot(2).fixedRot(false) , b2d.poly(30,30))

    body = w.A( b2d.dynamic(300,500).rot(1).fixedRot(.2) , b2d.poly(30,30) )

    test={


        impulse: function(){

            body.ApplyImpulse(

                V(10, -30), body.worldCenter()

            )},



        velocity: function(){body.SetLinearVelocity(  V( 10, -60 ) )},



        force: function(){

            setInterval(

                function(){

                    body.ApplyForce(   V( 0, -3 ),    body.worldCenter()    )

                }, 100)

        }



    }




}

DEMO_SCALE =function(){b2d.mW()

    var  radius=10, x=400, y=440, v={x:0, y:0}

    //mouse joints messed up

    w.bumper(400,300,40)
    w.bumper(290,350,40)
    w.bumper(280,220,40)


    addBody()

    cjs.tick( destroyAndAddBody )



    function addBody(){

        body = w.A( b2d.dynamic(x,y).linVel(v),  b2d.circ(radius)  ) }


    function destroyAndAddBody(){

        body.destroyFixture( body.fixtureList() )//b.destroyFixture(fixture)

        radius += .1

        x = body.X()

        y = body.Y()

        v = body.lV()

        addBody() }


}

MEMORY=function(){  s = cjs.S().A(ct= cjs.ct())



    grid=[

        ['guy','me',0,0],
        [0,'me',0,0],
        [0,0,0,0],
        [0,'me','chicks','me']

    ]


    wGuy=function(){
        var x=0,y=0
        _.each(grid,  function(row,i){
            _.each(row,function(cell,j){
                if(cell=='guy'){ x=j, y=i}})})
        return {x:x,y:y}}


    dGuy=function(){

        var p=wGuy()

        grid[p.y][p.x]=0
        if( grid[p.y+1][p.x]=='chicks') {alert('win')}
        else if( grid[p.y+1][p.x]==0){
            grid[p.y+1][p.x]='guy'
            playerGrid()

        } else {alert('lose!')}}



    rGuy=function(){
        var p=wGuy()
        grid[p.y][p.x]=0
        if( grid[p.y][p.x+1]=='chicks') {alert('win')}
        else if( grid[p.y][p.x+1]==0) {
            grid[p.y][p.x+1]= 'guy'
            playerGrid()} else {alert('lose!')}}




    _.each(grid, function(row,i){
        _.each(row, function(cell,j){
            ct.A(
                cjs.rect(30,40).XY(j*100+100,i*100+100))
            if(cell=='me'){
                ct.bm('me',
                    function(b){
                        b.XY(j*100+100,  i*100+100
                        ).sXY(.1)})}})})




    playerGrid=function(){
        _.each(grid, function(row,i){

            _.each(row, function(cell,j){

                ct.A( cjs.rect(30,40).XY(j*100+100, i*100+100))

                if(cell=='guy'||cell=='chicks'){
                    ct.b(cell, function(b){
                        b.xy(  j*100+100,  i*100+100 ).sXY(.1)})}

            })})}



    setTimeout( function(){
        ct.remove()
        s.A( ct = cjs.ct())
        playerGrid()},  3000)



    $.kD('d', dGuy)

    $.kD('r', rGuy)



}

SLING=function(){s=cjs.S()

    startpoint={}

    slingshot = cjs.shape().a2(s)

    onMouseDown=function(event){

        if(ball.hitTestPoint(event.x, event.y)){
            mouseJoint = w.J(

                b2d.createMouseJointDef(
                    w.ground, //?

                    ball.body,
                    event.x, event.y, 100000
                )
            )

            startpoint.x = event.x
            startpoint.y = event.y

        }
    }


    onMouseMove=function(event){
        if(mouseJoint !=null){
            mouseJoint.setTarget(event.x, event.y)
            slingshot.clear()
            slingshot.setLineStyle(5, 0xff0000, 1)
            slingshot.beginPath()
            slingshot.mt(self.startpoint.x, self.startpoint.y)
            slingshot.lt(event.x, event.y)
            slingshot.ep()
        }
    }


    onMouseUp=function(event){



        if (mouseJoint != null){
            w.dJ( mouseJoint)

            mouseJoint = null

            slingshot.clear()

            strength = 1

            xVect = ( startpoint.x-event.x)*strength
            yVect = ( startpoint.y-event.y)*strength

            ball.body.applyLinearImpulse(  xVect,   yVect, ball.getX(), ball.getY())

        }
    }

}

PHONEJUMP=function(){b2d.mW({W:300, H:400,
    walls:function(){
        w.brick(10,300, 40, 600).K('leftWall')
        w.brick(450,300, 40, 600).K('rightWall')
        w.brick(300, 0, 2400, 40).K('ceiling')
        w.brick(300, 400, 800, 40).K('floor')}})

    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)

    p = w.addMe()

    $.joystick()

    cjs.tick(function(){

        if(cjs.Keys.up){     p.I(0,-100)}
        if(cjs.Keys.left){   p.I(-20, 0)}
        if(cjs.Keys.right){  p.I(20, 0)}

    })

}

