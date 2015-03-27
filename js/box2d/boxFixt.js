fixtDef=function() {
    fd = b2d.Dynamics.b2FixtureDef.prototype
    fd.H = fd.setShape = function (shape) {
        if (U(shape)) {
            return this.shape
        }
        this.shape = shape;
        return this
    }
    fd.den = fd.d = function (den) {
        if (U(den)) {
            return this.density
        }
        this.density = den;
        return this
    }
    fd.frc = fd.fric = fd.f = function (fric) {
        if (U(fric)) {
            return this.friction
        }
        this.friction = fric;
        return this
    }
    fd.rst = fd.rest = fd.r = function (rest) {
        if (U(rest)) {
            return this.restitution
        }
        this.restitution = rest;
        return this
    }

    fd.grp = fd.group = fd.index = fd.gI = function (a) {
        if (U(a)) {
            return this.filter.groupIndex
        }
        this.filter.groupIndex = a;
        return this
    }
    fd.cat = fd.category = fd.cB = function (a) {
        if (U(a)) {
            return this.filter.categoryBits
        }
        this.filter.categoryBits = a;
        return this
    }
    fd.msk = fd.mask = fd.mB = function (a) {
        if (U(a)) {
            return this.filter.maskBits
        }
        this.filter.maskBits = a;
        return this
    }
    fd.bit = fd.bits = function (cat, mask) {
        return this.cat(cat).mask(mask)
    }
    fd.vrt = fd.verts = function () {

        var shape = this.shape,

            verts = shape.m_vertices,

            verts = [
                verts[0].mult(),
                verts[1].mult(),
                verts[2].mult(),
                verts[3].mult()]

        return $l(verts)
    }
    fd.sen = fd.sensor = fd.iS = function (isSensor) {
        if (U(isSensor)) {
            return this.isSensor
        }
        this.isSensor = isSensor ? true : false
        return this
    }
    fd.box = fd.sAB = function (a, b, p, A) {
        if (!p) {
            this.shape.SetAsBox(a / 30, b / 30)
        }
        else {
            this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
        }
        return this
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
//fd.sSAP  = fd.setShapeAsAPoly=function(){
// return this.H( b2d.polyShape())}
    fd.K = fd.addClass = function (clas) {
        if (U(clas)) {
            return this.getClass()
        }

        this.classes = this.classes || []
        this.classes.push(clas)
        return this
    }


    fd.getClasses = fd.getClass = function () {
        var g = G(arguments), classes

        this.classes = this.classes || []

        classes = this.classes.join(' ')
        if (g.p) {
            classes += ' : ' + this.body().getClasses()
        }


        return classes
    }


    fd.D = fd.data = function (data) {
        if (U(data)) {
            return this.userData
        }
        this.userData = data;
        return this
    }


    FDEF=function(){w=b2d.W()


        x = w.brick(400,400,200,300)

        b = w.dyn(200, 400,

            b2d.poly(100,200).K('fffffff sf')

        )


    }


}; fixtDef()
f = b2d.Dynamics.b2Fixture.prototype

classes=function() {
    f.classCount = function () {
        if (!A(this.classes)) {
            return 0
        }
        return this.classes.length

    }

    f.K = f.addClass = function (clas) {


        this.classes = this.classes || []
        var that = this, func


        if (U(clas)) {
            return this.getClasses()
        }


        if (F(clas)) {
            func = _.bind(clas, that)
            this.addClass(func(that.getClasses()))
            return this
        }

        _.each(arguments, function (clas) {
            if (S(clas)) {
                clas = clas.trim()

                _.each(clas.split(' '),
                    function (clas) {
                        clas = clas.trim()

                        if (clas != '' && !that.hasClass(clas)) {

                            that.classes.push(clas)
                        }
                    })


            }
        })
        return this
    }
    f.getClasses = f.getClass = function () {
        var g = G(arguments), classes

        this.classes = this.classes || []

        classes = this.classes.join(' ')
        if (g.p) {
            classes += ' : ' + this.body().getClasses()
        }


        return classes
    }
    f.toggleClass = function (clas) {
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
    f.removeClass = function (clas) {
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
    f.hasClass = f.hasClasses = function self(clas) {
        var fixt = this,
            hasClass,
            g = G(arguments)

        fixt.classes = fixt.classes || []

        if (!clas) {
            return true
        }

        if (A(clas)) {
            g = clas
        }

        _.each(g, function (clas) {

            if (!clas || _.contains(fixt.classes, clas.trim())) {
                hasClass = true
            }
        })

        return hasClass
    }
    f.hasAllClasses = function (clas) {
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
    f.is = function (a) {
        return S(a) ? this.hasClass(a) : this == a
    }
    f.ofClass = function (clas) {
        var fixt = this, body = fixt.body(),
            g = G(arguments)


        return fixt.hasClass(g) || body.hasClass(g)

    }
    f.of = function (a) {
        var fixt = this,
            body = fixt.body()
        return S(a) ? fixt.ofClass(a) : (fixt == a || body == a)
    }
    f.near = function (what) {
        var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
        return false
    }
    f.among = function () {
    }
    f.D = f.data = function (data) {
        if (U(data)) {
            return this.GetUserData()
        }
        this.SetUserData(data);
        return this
    }

}; classes()

f.next= function(){return this.GetNext()}
f.den =f.d=function(den){if(U(den)){return this.GetDensity()}
    this.SetDensity(den)
    this.body().ResetMassData()
    return this}
f.fric =f.f=function(fric){if(U(fric)){return this.GetFriction()}
    this.SetFriction(fric);return this}
f.rest =f.r=function(rest){if(U(rest)){return this.GetRestitution()}
    this.SetRestitution(rest);return this}

f.kill = f.remove = function(){ // if(this.sprite  ){this.sprite.remove()}

    this.removeSprites()
    this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
}


f.removeSprites=function(){var f=this

    f.sprites = f.sprites||[]

    _.each(f.sprites,

        function(s){
            if(O(s) && s.parent ){
                s.remove()
        }}
    )

    f.sprites=[]
    return this}





f.sen = f.sensor = function(sen){var f=this
    if(U(sen)){sen=!f.m_isSensor}
    f.m_isSensor = sen
    return this}
f.isSen=function(isSensor){return this.m_isSensor}
f.grp =  function(i){
    var fl=this.GetFilterData()
    if(U(i)){return fl.groupIndex}
    fl.groupIndex=i
    this.SetFilterData(fl)
return this} //get/set for groupIndex
f.cent = f.center = function(){var bounds = this.GetAABB()
    return Math.lineCenter(bounds.lowerBound, bounds.upperBound).mult()}//center point of its BOUNDING BOX
f.test = f.hit=f.testPoint= f.tP=function(pt,y){var f=this,b=f.body(), w=b.wor(),
    g=G(arguments), v=V(g[0],g[1])
    if(g.p){b.wor().dot(v)}
    return f.H().testPoint(b.transform(), v.div())}//is a point within the fixture // very accurate
f.coll = function(what,func){var that=this, fixt=this, beginFunc //ultimate func for FIXTURE COLL
    // you can specify what happens when a fixture hits:
    //ANYTHING
    // body/fixt of certain kind
    // specific fixt
    // specific body
    //but it its callback ALWAYS passed back the other fixt that was actually hit
    // and 'this' is set to THIS fixt within the cb
    //should cover class AND fixt AND body cases!!!
    if(F(what)){func=what;what=''}
    func=_.bind(func,fixt)
    w.beg(function(cx){var fA=cx.A(),fB=cx.B()
        if(fixt.is(fA) && fB.of(what)){func(fB,cx)}
        if(fixt.is(fB) && fA.of(what)){func(fA,cx)}})
    return this
}
f.shp = f.H= f.shape=function(h){//should let user specify dimensions of shape, not just have to pass formed shape in
    if(U(h)) {return  this.GetShape()}
    this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
    return this
}
f.hType=function(){return this.shp().m_type}
f.isCirc=function(){return this.hType()==0}

f.rad = function(){return this.shp().m_radius*30}
f.pos = function(){var h=this.shp()
    return V(h.m_p.x, h.m_p.y).mult()
}// for circs


f.verts= function(){var f=this, b=this.body(), g=G(arguments)
    //local verts
    var verts = _.map(f.shp().m_vertices, b2d.mult)
    //local verts rotated locally by body's rotation
    if(g.p){verts = _.map(verts, function(v){ return v.rot(b.rot()) })}
    return verts}
f.wVerts = f.V=function(){var f=this, b=f.body(),
    g=G(arguments)
    //give world verts of fixt rotated (or optionally, not rotated for some reason)
    var verts = g.N?  f.verts('+')  : f.verts()
    return _.map(verts, function(v){return v.add(b)})}
f.poly = f.polyVerts=function(){return  Math.poly( this.V() )}
f.sub =f.DIF = f.DIFF=function(b2){

    var f=this, g=G(arguments), b2=g[0]

    f.body().conc( f.minus(b2)  )
    f.kill()
    if(g.n){b2.kill()}
    return this}
f.minus= f.diff= function(bOrF){var f=this,b=f.body(), verts,poly
    //can handle a fixt OR a body! or even a gPoly itself!


    poly = f.polyVerts().difference(  b2d.isGPoly(bOrF)? bOrF : bOrF.polyVerts()  )


    _.each(_.rest(arguments), function(bOrF){

        poly = poly.difference(  b2d.isGPoly(bOrF)? bOrF : bOrF.polyVerts()  )

    })


    if(b2d.hasVerts(poly)){
        return  b.rel( poly )
    }

}
f.union = function(f2){



    var f=this,
        b=f.body(),p //can handle a fixt OR a body!

    if(A(f2)){
        return this.union.apply(this, f2)
    }


    p = f.polyVerts().union(

        f2.polyVerts()
    )

    _.each( _.rest(arguments), function(f){

        p = p.union( f.polyVerts() )

    })



    return  b.rel(p)

}
f.area=function(){

    return Math.poly( this.V() ).getArea()

}


//easel
f.stg = function(){return this.wor().s}
f.dot = function(col){var f=this, w= f.wor(), cent=f.cent()

    if(S(col)){   w.dot(col, cent) } else{w.dot(cent)}

return this}


f.dots=function(){
    b2d.polyDot( this.wVerts() )
return this}


f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}

f.C = f.color = function(c1,c2){
    var f=this,b=f.body(),
        w=b.wor(),shape,rad,pos
    c1=c1||'b'
    c2=c2||c1

    if(f.isCirc()){
        rad= f.rad()
        pos= f.pos()
        shape = w.s.shape().cir( rad, pos.x, pos.y, c1 )}

    else {shape = w.s.shape().poly(f.verts(), c1, c2, 1)}


    f.removeSprites()

   f.bindSprite(shape)

   // return this
}








f.gx = f.spr = f.bindSprite =f.bindSprite2=function(obj, startingRotation, x, y, alpha ){

    var g=G(arguments)
    gg=g

    alpha=N(alpha)? alpha :1



    obj.opacity(alpha)

    //takes any display object.  right now, just used for shapes
    //because bindSprite fetches the bm's by string.
    //but when i set up preloader, then i would use this i suppose :)
    x=N(x)?x:0;
    y=N(y)?y:0
    var f=this,
        body=this.body(),
        stage = body.wor().s

    startingRotation = N( startingRotation) ?  startingRotation : 0

    //f.sprite = obj
    //f.sprite.a2(stage)

      o = obj.a2( stage )





    f.sprites= f.sprites||[]

    f.sprites.push(obj)

    //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!

    cjs.tick(function(){//if(!f.sprite){return}


            obj.XY( body.X() + (x||0),body.Y() + (y||0))
             obj.rotation=body.rot() + startingRotation



    })


    return this}





//proxy to BODY methods
f.B=  f.body = f.gB = f.getBody=function(){return this.GetBody()}
f.wor = function(){return this.body().wor()}
f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}
f.isStat=function(){return this.B().isStat()}
f.isDyn=function(){return this.B().isDyn()}
f.isKin=function(){return this.B().isKin()}
f.bType=function(){return this.B().GetType()}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
f.isBType = f.isType = function(t){if(t){return this.bType()==t}}
f.rot=function(rot, g){ return this.B().rot(rot, g) }
f.killBody=function(){this.B().kill()}

f.cancel=function(){this.body().cancel(); return this}
f.switchTo=function(co){this.body().switchTo(co); return this}


b2d.isFixtDef=function(fD){return O(fD) && fD.b2FixtureDef}
b2d.isFixt=function(fixt){
    if(!fixt){return false}
    return fixt.constructor.name=="b2Fixture"}
b2d.isGPoly=function(a){return O(a) && F(a.isHole)}


//make a circ fixture
b2d.circ = function(rad,x,y,den){// neg-> sensor
    var g= G(arguments),
        rad=N(g[0])?g[0]:50,
        x=N(g[1])?g[1]:0,
        y=N(g[2])?g[2]:0,
        den=N(den)?den:1

    fixt=b2d.fixt(
        b2d.circH(rad).xy(x,y)
    ).den(den)
    if(g.n){fixt.isSensor=true}
    return fixt
    //hmm.. fixt doesnt have a rel loc.. its shape does
    //what if u want to change 'shape' of shape, but keep its rel loc?
}


//make a rec (or orientedRec) fixture
b2d.rec = function(wd, ht, x, y, rot, den){
    var g=G(arguments),rec,fixt
    wd=N(g[0])?g[0]:50
    ht=N(g[1])?g[1]:50
    x=N(g[2])?g[2]:0
    y=N(g[3])?g[3]:0
    rot=N(g[4])?g[4]:0
    den=N(g[5])?g[5]:1
    rec = b2d.polyH(wd,ht,x,y,rot),
    fixt = b2d.fixt(rec).den(den)
    if(g.n){fixt.isSensor=true}
    return fixt}



//makes a fixture using b2d.polyH

b2d.poly =function(){var g=G(arguments),
    //SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
    //but can not pass den? who cares!

    polyH = b2d.polyH.apply(null, g),

    fixt = b2d.fixt(polyH).den(1).fric(.2).rest(.2)

    if(g.n){ fixt.isSensor = true }

    return fixt}






b2d.polySens = function(kind){//necessary?
    var poly= b2d.poly.apply(null, _.rest(arguments))
    poly.sensor(true).K(kind)
    return poly}


// compare fixt vs fixtParse
b2d.fixt = function(shape){var g=G(arguments), shape=g[0], len=g.length, fixt= new b2d.Dynamics.b2FixtureDef()

    // simply makes one fixt,
    // tries to set its shape
    // and returns it

    //you can pass in a pre-made shape
    if( b2d.isShape(shape) ){ fixt.shape = shape }

    //or..

    // if you pass it an array, it makes a polyH from it
    // from verts/arr (confirmed)

    else if( A(shape) ){  fixt.shape = b2d.polyH.apply(b2d, g)  }

    // or if you passed in anything (number(s))
    // it makes a circle or poly shape, depending on how many numbers you passed

    else if(len==1 || len==3){ fixt.shape = b2d.circH.apply(b2d, g) }
    else if( len==2 || len > 3 ){ fixt.shape = b2d.polyH.apply(b2d,g) }

    return fixt

}
b2d.fixtC = function(shape){var g=G(arguments), shape=g[0], len=g.length, fixt= new b2d.Dynamics.b2FixtureDef()

    if( b2d.isShape(shape) ){ fixt.shape = shape }

    else if( A(shape) ){  fixt.shape = b2d.polyH.apply(b2d, g)  }

    else if(len==1 || len==3){ fixt.shape = b2d.circH.apply(b2d, g) }

    else if( len==2 || len > 3 ){ fixt.shape = b2d.polyH.apply(b2d,g) }

    return fixt

}
b2d.fixtParse=function(arr){

//takes array of arrays

//if something in array is NOT array, it assumes it is already a fixt

//but if it IS an array, it makes it into a fixture


    var func = function(fixt){var len

        if( !A(fixt) ){ return fixt }


        if( fixt.isSensor ){// weird
            return b2d.polySens.apply(null, fixt)}

        len = fixt.length

        return (len==1)? b2d.circ(fixt[0])
            :(len==2)? b2d.poly.apply(null,fixt)
            :(len==3)? b2d.circ.apply(null,fixt)
            :b2d.poly.apply(null, fixt)}


    return _.map(arr, func)

}
//
b2d.hasVerts=function(poly){return poly.m_List.get(0)}
b2d.overlapping=function(b1, b2){
    var v1=b1.polyVerts(),
        v2=b2.polyVerts()
    var p = v1.union(  v2 )
    return !(_.isEqual(p.verts(),v1.verts()) || _.isEqual(p.verts(),v2.verts()))}
b2d.polyDot=function(verts){// see f.dots

    var t = 0
    _.each(

        A(verts)? verts : verts.verts(), //combine with b2d.verts

        function(v){
          setTimeout(function(){
              w.dot(V(v))}, t)
            t+=100
        }
    )

}

FIXTS=function(){ w=b2d.W({g:0})
    b = w.dyn(300, 300)
    b.CIRC('o', 20)
    b.CIRC('b', 100, 140, 0)
    b.CIRC('r', 20, 100, 100)
    b.RECT('g', 100,100)
    b.RECT('y', 100,100,50,50)
    b.RECT('p', 100,100,-150,-150,45)

    b2 = w.B(800, 300)

    b2.fixt(20).C('r')   //circ

    b2.fixt(20, 100, 100).C('b')  //circ

    b2.fixt(100, 50)   //rect
    b2.fixt(100, 50, -100,-100)   //rect
    b2.fixt(100, 50, -100,0,25)   //rect

    b2.fixt([[-100,0], [0,-100], [100,40]]   )   //poly


    b3 = w.B(1000, 300)

    b3.fixt(  b2d.fixt(20) ) //circ
    b3.fixt(  b2d.fixt(20, 100, 100)  ) //circ
    b3.fixt(  b2d.fixt(100, 50) ) //rect
    b3.fixt(  b2d.fixt(100, 50, -100,-100) ) //rect
    b3.fixt(  b2d.fixt(100, 50, -100,0,25) ) //rect
    b3.fixt(  b2d.fixt( [-100,0],[0,-100],[100,40]   )).C('g') //poly

    w.B(400,500, 'o', [ ['w',[30,30],[20,40],[10,10]] ])

}
DIF=function(){w=b2d.W()


    b = w.S(140,140,100,100).rot(20).DIFF(
        w.S(100,100,100,100).rot(45), '-')




    b3 = w.S(300,400,'w',100,100)
    b3.sub(//does not keep color!
         w.B(300,400, 'r', [-100,10],[-80, -40],[0,-200],[100,0])
     )


    w.S(450,300,'w',100,100).minusPolyCirc(550,300, 100,20)




    fs = w.S(600, 380, [['r', [-100,10],[-80, -40],[0,-200],[100,0]],['b', 40, 70, 20, -20],['o', 40, 70, -20,20]
    ]).rot(-20).fixts()

    w.S(720,400).sep(

        w.S(600,400).fixt( b2d.poly(100,100) ).minus(fs[0],fs[1],fs[2]))


    b2= w.S(830,300)
    b2.poly( 100,100  )
    b2.poly( 100,100, 0, 0, 45  )
    b2.DIF(w.S(930,400,200,200),'-')

    ///
    ///
    setTimeout(function(){
        b.dyn(); b2.dyn()
    },3000)

}
CIRCTOPOLY=function(){w=b2d.W()
    b = w.S(300, 300, 50)
    w.B(600,400).poly( b2d.polyCirc(b.fixt().rad(),10))}
BODYEACH=function(){w = b2d.mW()//works

    b= w.B(100,100,[[40], [100,200,100], [50,200], [200,200,300,400]])
    b.each(function(f){ //bind to this.. when u have time
            //f.SetSensor(true) //works
            // f.remove()
            // f.K('destroy')
            $l('shape type: ' + f.GetShape().m_type)})
}
GUYINBED=function(){w = b2d.W()

    dick = [
        [50, 300, 0, -100],
        [50, 100, 150],
        [50, -100, 150]
    ]
    guyInBed = [
        [30],
        [20, 30, 30],
        [100, 30]
    ]
    w.B(400, 100, 'y', guyInBed)
    w.B(100, 100, 'r', [
        [guyInBed]
    ])
    w.B(100, 100, 'b', [
        [guyInBed],
        ['w', dick]
    ])
    w.B(400, 100, guyInBed)

}
COLSENCLAS=function(){w=b2d.W()

    b = w.B(300, 300,'r', [[40],['b',30,100,'arm', '-']] ) //BEAUTIFUL !!!

    w.beg(function(cx){
        if(cx.with('arm')){b.I(50,50)}
        if(cx.with('arm', w.right)){w.C('w')}})}




FDOT=function(){w=b2d.W()

    b1 = w.S(400,400,50)
    f1 = b1.fixt()
    f1.dot()

    b2 = w.S(800,400,80,80)
    f2 = b2.fixt()
    f2.dot()
    f2.C('p')


    verts = [ [-100,0], [0,100], [100,-20] ]

    b=w.S(200, 200, [verts]).rot(25)

    f=b.fixt()

    w.S(400, 200, [f.verts()])
    w.S(600, 200, [f.verts('+')])

    v = f.wVerts()
    _.each(v, function(v){w.dot(v)})

    //need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
    //its a VertsArr

    b = w.S(100,500, 50,50)
    f= b.fixt()
    fh= f.shp()

    h= b2d.polyH(100,50)

    f.shp(h)
}
TESTPOLYF=function(){w=b2d.W(); $l('testpolyf')

    w.S(700,200, 'o', [
        b2d.circ(40),
        b2d.circ(5).bits(1,2), //cat is 1, but will only collide with 2's
        b2d.circ(10, 100, 100, '-'),
        ['w', b2d.circ(10, 100, -100) ],
        b2d.poly(10,300,'-') , //sets as sensor
        ['b', b2d.poly(300,10)],
        [ 'w', [100,0], [150,-100], [200,20]  ],
        [ [200,0], [250,-100], [300,20], 'arr'],
        [ 'p', 50, 'pink' ]])

    b = w.S(300,400,'r', [
            b2d.poly(200,100),
            ['g',b2d.circ(40,100,100).K('excited') ],
            [5,100, 200,0,'orgasmic excited']
    ])


    //apparently b.fixt is LIFO

    f = b.fixt().K('happy').dot('b')
    $l('f is f: ' + f.is(f))
    $l('f is happy: ' + f.is('happy'))
    $l('f.next is excited: ' + f.next().is('excited'))
    $l('f is orgasmic: ' + f.is('orgasmic'))

    w.db()



}
MASS=function(){w = b2d.W({g:0}).db()
    y = w.B(400,200, 'y', 50).den(.1).lV(10)
    r = w.B(200,500, 'r', 40).den(1)
    b = w.B(200,500, 'b', 25).den(100)
    p = w.B(800,200, 'p', 10).den(1000).lV(-10)
}







//destructable terrain
DEST=function(){w=b2d.W({g:1})
    y= w.ship().linDamp(10)
    b = w.brick(800,300,200,800).K('terr')
    can=true
    w.s.X(5000)
    w.beg(function(cx){var fixt

        if(fixt=cx.with('bul','terr')){

            bull = fixt[0].B()
            terr = fixt[1].B()
            bX= bull.X()
            bY= bull.Y()
            bull.kill()


            if(can){can=false

                setTimeout(function(){// br =  w.brick(bX,bY,60,60).rot(45)

                    br=b2d.conc(

                        b2d.polyCirc(20,7)

                    ).XY(bX,bY)

                    b.each(function(f){

                        f.DIFF(br)

                    })


                    br.kill()



                    can=true}, 10)


                killIfSmall=function(f){var area=this.area()

                    if( area < 20){
                        $l('too small: ' +area )
                        f.kill()  }

                }

            }

        }

    })
    w.show(function(){return b.num()})


}
DEST1=function(){w=b2d.W({g:0})
    y= w.ship()
    b = w.brick(400,400,300,300).K('terr')


    w.beg(function(cx){var fixt

        if(fixt=cx.with('bul','terr')){

            bull = fixt[0].B()
            bX= bull.X()
            bY= bull.Y()

            terrF = fixt[1]

            setTimeout(function(){

                br =  w.brick(bX,bY,100,100).rot(45)

                terrF.DIFF(br)

            },100)

            // w.brick(bull.X(), bull.Y(), 50, 50)
        }

    })

}












//OLD
f.setKill=function(){var f=this, b= f.body(), w=b.wor()
    w.flag( flagNum = Math.random() )
    cjs.tick(function(){    if(w.flagged(flagNum)){ f.kill()     }      })
}//clever use of flagging.. but not needed
f.Vold = function(){//f.rotVerts=

    return this.wVerts()

    newX= function(x,y, rot){
        rot = Math.toRadians(rot)
        x *= Math.cos(rot).toFixed(3)
        y *= Math.sin(rot).toFixed(3)
        return x - y
    }
    newY= function(x,y,rot){
        rot = Math.toRadians(rot)
        return (x*Math.sin(rot))+(y*Math.cos(rot))

    }
    var verts = this.verts(),b=this.B()
    return _.map(verts, function(v){
        var x= v.x, y= v.y
        return V(
                newX(x,y, b.rot()) + b.X(),
                newY(x,y, b.rot()) + b.Y())})
}//this becomes wVerts
f.DIFFold=function(b2){
    var f=this,b=f.B(),g=G(arguments),b2=g[0]//,diff


    // diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )

    diff = f.minus(b2)

    //if( ! b2d.hasVerts(diff) ){ f.kill(); return }

    // b.conc(   b.rel(diff) )

    b.conc(   diff )
    f.kill()
    if(g.n){b2.kill()}

    return this}