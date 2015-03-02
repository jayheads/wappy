
b2d.fixt = b2d.fixtDef=function(){return new b2d.Dynamics.b2FixtureDef()}

b2d.poly = b2d.polyDef = b2d.polyFixt =  pFx=function(wd, ht,xy,ang,ang2){

    var fixt = b2d.fixt()//.den(1).f(.5).rest(.8)
    if(b2d.isShape(wd)){
        fixt.shape=wd}

    else {fixt.shape =  b2d.polyShape(wd, ht, xy, ang, ang2)}
    return fixt}

TESTPOLYF=function(){z()

    w=b2d.mW()


    f =  b2d.polyDef(100,200)



    w.dynamic(400,400,[

        b2d.circDef(200),

        f
    ])

}
b2d.A = b2d.ADef =   b2d.AFixt  =     function(){
    return b2d.polyDef(
        b2d.AShape.apply(null,
            _.map(arguments, function(a){
                return b2d.V(a[0]/30, a[1]/30)})
        ))}

b2d.circ = b2d.circDef = b2d.circFixt =  cFx=function(radius, x, y){//fC=

    radius = radius|| Math.random()+.1

    x=N(x)?x:0
    y=N(y)?y:x

    var circle = b2d.circleShape(radius)

    circle.SetLocalPosition( V(x/30, y/30)  )

    return b2d.fixtDef().setShape(circle)//.d(1).f(.5).r(.8)

}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


fd=f=b2d.Dynamics.b2FixtureDef.prototype
fd.H=   f.setShape =f.sh= f.s= function(shape){
    if(U(shape)){return this.shape}
    this.shape=shape;
    return this}
fd.den =f.d=function(den){if(U(den)){return this.density}
    this.density = den;
    return this}
fd.fric =f.f=function(fric){if(U(fric)){return this.friction}
    this.friction=fric;return this}
fd.rest =f.r=function(rest){if(U(rest)){return this.restitution}
    this.restitution=rest;return this}
fd.sSAP  = f.setShapeAsAPoly=function(){

    return this.H( b2d.polyShape())

}
fd.K=fd.uD=function(data){
    if(U(data)){return this.userData }
    this.userData=data;return this}

fd.group = fd.index=f.gI=function(a){
    if(U(a)){return this.filter.groupIndex}
    this.filter.groupIndex=a; return this}

fd.cat= fd.category=f.cB=function(a){
    if(U(a)){return this.filter.categoryBits}
    this.filter.categoryBits=a; return this}
fd.mask=f.mB=function(a){
    if(U(a)){return this.filter.maskBits}
    this.filter.maskBits=a; return this}

fd.bits=function(cat, mask){
    return this.cat(cat).mask(mask)
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



f.sensor= f.iS=function(isSensor){
    if(U(isSensor)){return this.isSensor}
    this.isSensor =isSensor?true:false
    return this}

FIXVSDEF=function(){

    w=b2d.mW()

    fd = b2d.fixt()

    b =   w.CreateBody( b2d.dyn()  )

    f = b.CreateFixture(fd)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f=b2d.Dynamics.b2Fixture.prototype

f.K= f.uD=function(data){
    if(U(data)){
        return this.GetUserData() }
    this.SetUserData(data);return this}

f.is=function(what){
    if(!S(what)){return}
    return this.K()==what}


f.of=function(what){var body
    if(!S(what)){return}
    body = this.GetBody()
    return (this.K()==what) || (body.K()==what)}


f.with=function(what){var body
    if(!S(what)){return}
    body = this.GetBody()
    //return (this.K()==what) || (body.K()==what)

    // if has sibling fixture that matches, return IT!
}


f.remove = function(){

    this.GetBody().destroyFixt(this)

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




f.H = f.shape = function(shape){
    if(U(shape)) {return  this.GetShape()}
    this.m_shape =shape //not sure if this works
    return this}
f.den =f.d=function(den){if(U(den)){return this.GetDensity()}
    this.SetDensity(den)
    return this}
f.fric =f.f=function(fric){if(U(fric)){return this.GetFriction()}
    this.SetFriction(fric);return this}
f.rest =f.r=function(rest){if(U(rest)){return this.GetRestitution()}
    this.SetRestitution(rest);return this}
f.body=f.gB= f.getBody =function(){return this.GetBody()}
f.sSAP   =f.setShapeAsAPoly=function(){return this.H(b2d.polyShape())}
f.center=function(){


    var aBounds = this.GetAABB(),

        aLower = aBounds.lowerBound,
        alx = aLower.x * 30,
        aly = aLower.y * 30,

        aUpper = aBounds.upperBound,
        aux = aUpper.x * 30,
        auy = aUpper.y * 30,

        center = Math.lineCenter(alx, aly, aux, auy)


    return center}




f.index= function(a){
    if(U(a)){return this.GetFilterData().groupIndex}
    this.SetFilterData() // this.filter.groupIndex=a;  ????
    return this
}
f.set=function(x,y){
    this.shape.Set(x,y)
    return this
}
f.sAB=function(a,b,p,A){

    if(!p){this.shape.SetAsBox(a/30,b/30)}

    else{ this.shape.SetAsOrientedBox(a/30,b/30,p,A)}
    return this}
f.testPoint= f.tP=function( m, y ){

    if( N(y) ){ m = b2d.V(m, y) }

    return    this.GetShape().testPoint(

        this.GetBody().GetTransform(),

        m

    )
}
f.getType = f.gT=function(someType){

    var thisType =  this.GetBody() .GetType()

    return  D(someType)?  (thisType == someType) : thisType

}

f.sensor= f.iS=function(isSensor){
    if(U(isSensor)){return this.m_isSensor}
    this.m_isSensor =isSensor?true:false
    return this}



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



