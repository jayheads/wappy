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

f.B=  f.body=f.gB=f.getBody=function(){return this.GetBody()}
f.K= f.uD=function(data){
        if(U(data)){
            return this.GetUserData() }
        this.SetUserData(data);return this}
f.is= function(kindOrFixt){
    if(S(kindOrFixt)){return this.K() == kindOrFixt}
    if(b2d.isFixt(kindOrFixt)){return this == kindOrFixt}
    return false}
f.of= function(what){
    return  this.is(what) || (this.B().K()==what)
    return false}
f.near= function(what){var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
    return false}
f.klass= function(klass){this.klasses = this.klasses || []
    this.klasses.push(klass)
return this}

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
f.testPoint= f.tP=function( point, y ){var success
    if(N(point)){point = V(point, y)}
    success =  this.H().testPoint(this.B().GetTransform(), point)
    return __success = success}


f.verts= function(){

    var shape = this.GetShape(),

        verts = shape.m_vertices

    return [ verts[0].mult(), verts[1].mult(), verts[2].mult(), verts[3].mult()]}

f.radius = function(){
    var shape = this.GetShape(),
        radius = shape.radius


        return radius*30}

T=function(){b2d.W()




    b = w.dyn(300, 300)

    r=  b.rect(300, 200)
    cc = b.circ(100)


}


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

    w=b2d.mW({
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
