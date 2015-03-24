fd= b2d.Dynamics.b2FixtureDef.prototype
fd.H=   fd.setShape=function(shape){
        if(U(shape)){return this.shape}
        this.shape=shape;
        return this}
fd.den =fd.d=function(den){if(U(den)){return this.density}
        this.density = den;
        return this}
fd.frc =fd.fric =fd.f=function(fric){if(U(fric)){return this.friction}
        this.friction=fric;return this}
fd.rst = fd.rest =fd.r=function(rest){if(U(rest)){return this.restitution}
        this.restitution=rest;return this}
fd.grp = fd.group = fd.index=fd.gI=function(a){
        if(U(a)){return this.filter.groupIndex}
        this.filter.groupIndex=a; return this}
fd.cat= fd.category=fd.cB=function(a){
        if(U(a)){return this.filter.categoryBits}
        this.filter.categoryBits=a; return this}
fd.msk =fd.mask=fd.mB=function(a){
        if(U(a)){return this.filter.maskBits}
        this.filter.maskBits=a; return this}
fd.bit = fd.bits=function(cat, mask){
        return this.cat(cat).mask(mask)
    }
fd.vrt= fd.verts =function( ){

        var shape = this.shape,

            verts = shape.m_vertices,

            verts= [
                verts[0].mult(),
                verts[1].mult(),
                verts[2].mult(),
                verts[3].mult()]

        return $l(verts)
    }
fd.sen = fd.sensor= fd.iS=function(isSensor){
        if(U(isSensor)){return this.isSensor}
        this.isSensor =isSensor?true:false
        return this}
fd.box=fd.sAB=function(a,b,p,A){
    if(!p){this.shape.SetAsBox(a/30, b/30)}
    else {this.shape.SetAsOrientedBox(a/30, b/30, p, A)}
    return this}
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
fd.K = fd.addClass = function(clas){
    if(U(clas)){return this.getClass()
    }

    this.classes = this.classes || []
    this.classes.push(clas)
    return this
}


fd.getClasses = fd.getClass=function(){
    var g=G(arguments),classes

    this.classes= this.classes||[]

    classes=this.classes.join(' ')
    if(g.p){
        classes += ' : ' + this.body().getClasses()
    }


    return classes}


fd.D = fd.data =function(data){
    if(U(data)){return this.userData }
    this.userData=data;return this}


FDEF=function(){w=b2d.W()


x = w.brick(400,400,200,300)

    b = w.dyn(200, 400,

        b2d.poly(100,200).K('fffffff sf')

    )


}








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

f = b2d.Dynamics.b2Fixture.prototype
f.classCount=function(){
    if(!A(this.classes)){return 0}
    return this.classes.length

}
f.K = f.addClass = function(clas){


    this.classes = this.classes || []
    var that=this,func


        if(U(clas)){return this.getClasses()}



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
f.getClasses= f.getClass=function(){
    var g=G(arguments),classes

    this.classes= this.classes||[]

    classes=this.classes.join(' ')
    if(g.p){
        classes += ' : ' + this.body().getClasses()
    }


    return classes}
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



f.hasClass = f.hasClasses=function self(clas){
    var fixt=this,
        hasClass,
        g=G(arguments)

    fixt.classes=fixt.classes||[]

    if(!clas){return true}

    if( A(clas) ){ g=clas }

    _.each(g, function(clas){

        if(!clas||_.contains(fixt.classes, clas.trim())){
                hasClass=true}
    })

    return hasClass}





f.hasAllClasses=function(clas){if(U(clas)||clas==''){return false}

    var body=this,anyYes=null, anyNo=null

    _.each(arguments, function(clas){


        if(body.hasClass(clas)){anyYes=true}

        else if(!body.hasClass(clas)){anyNo=true}



    })

    return (anyYes && !anyNo)


}
f.is=function(a){return S(a)?this.hasClass(a):this==a }


f.ofClass=function(clas){    var fixt=this,  body = fixt.body(),
    g=G(arguments)


    return fixt.hasClass(g) || body.hasClass(g)

}

f.of = function(a){
    var fixt=this,
        body=fixt.body()
    return S(a)? fixt.ofClass(a) : (fixt==a || body==a)}
f.near= function(what){var body = this.GetBody()
        //return (this.K()==what) || (body.K()==what)
        // if has sibling fixture that matches, return IT!
    return false}
f.among=function(){}
f.D = f.data =function(data){
    if(U(data)){
        return this.GetUserData() }
    this.SetUserData(data);return this}


f.remove = function(){this.B().destroyFixt(this)} //can combine with kill?

f.setRemove = function(){var f=this
    setTimeout(function(){
        f.B().destroyFixt(f)
    },10)

} //can combine with kill?


f.kill= function(){if(this.sprite  ){this.sprite.remove()}
    this.remove(); return}
f.dot = function(col){

    if(S(col)){return this.B().W().s.dot(col, this.center() ) }

    return this.B().W().s.dot( this.center() )


}
f.setDestroy=function(){

    this.B().K('destroy')

return this}

f.setKill=function(){var that=this
    var flagNum = Math.random()
    this.B().W().flag( flagNum )
    cjs.tick(function(){   if(w.flagged(flagNum)){ that.kill()     }      })}


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
    return this}






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
f.rot=function(rot,g){return this.B().rot(rot,g)}
f.verts= function(){

    var shape = this.GetShape(),

        verts = shape.m_vertices

    return _.map(verts, function(v){
        return v.mult()
    })

}
f.V = f.rotVerts=function(){//rotated but local
    newX= function(x, y, rot){

        var rad = Math.toRadians(rot)


        x = x *   Math.cos(rad).toFixed(3)


        y= y *   Math.sin(rad).toFixed(3)

        return x-y
    }
    newY= function(x,y,rot){
        var rad = Math.toRadians(rot)
        return (x*Math.sin(rad))+(y*Math.cos(rad))}
    var verts = this.verts(),b=this.B()
    return _.map(verts, function(v){
        var x= v.x, y= v.y
        return V(
            newX(x,y, b.rot()) + b.X(),
            newY(x,y, b.rot()) + b.Y())})
}
f.polyVerts=function(){
  return  Math.poly( this.V() )
}
b2d.isGPoly=function(a){return O(a) && F(a.isHole)}
b2d.hasVerts=function(poly){return poly.m_List.get(0)}

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

f.sub =f.DIF = f.DIFF=function(b2){

    var f=this, g=G(arguments), b2=g[0]

    f.body().conc( f.minus(b2)  )
    f.kill()
    if(g.n){b2.kill()}
    return this}



SUBPOLYCIRC=function(){w=b2d.W()

    b = w.B(300, 300, 100,100).stat()






    b.minusPolyCirc(400,300,100,10)




}






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





DIF=function(){w=b2d.W()
    b= w.stat(300,400 , b2d.poly(100,100) )
    b2 = w.B(300, 400, 'r', [-100,10],[-80, -40],[0,-200],[100,0])
    b.sub( b2 )}



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







MINUS=function(){w=b2d.W()

    b = w.dyn(300,400).stat()
    f = b.fixt( b2d.poly(100,100) )


    b2 = w.B(300, 380, [
        ['r', [-100,10],[-80, -40],[0,-200],[100,0]],

        ['b', 40, 70, 20, -20],

        ['o', 40, 70, -20,20]

    ]).rot(-20).stat()


    fs = b2.fixts()


    p = f.minus( fs[0], fs[1], fs[2] )

   // p = Math.poly(p).difference(  b2.fixts()[1].polyVerts() )

    w.dyn(500, 400).stat().sep( p )

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



GLUE=function(){w=b2d.W({g:0})


/*

     b= w.B(300,200, 40,140,20,0,20).stat()

    b2= w.B(400,400, 140,40).stat()

   b.glue(b2)

    setTimeout(function(){    b.dyn();  b2.dyn()  },1000)

*/

    w.glueBall = function(x,y){var w=this
       var bl = w.B(x,y,20).K('bl')
        w.beg(function(cx){
            cx.with('bl', function(othF){var bl=this.B()
            if(!bl.GetJointList()){
                bl.glue( othF.B() )
            }
        })})

    return bl}


    bl = w.glueBall(400, 500)

    w.glueBall(300, 500)
    w.glueBall(400, 300)
    w.glueBall(300, 100)
    w.glueBall(400, 200)
    w.glueBall(100, 300)
    w.glueBall(300, 300)

    y = w.ship()

}

GLUE2=function(){w=b2d.W({g:0})


    /*

     b= w.B(300,200, 40,140,20,0,20).stat()

     b2= w.B(400,400, 140,40).stat()

     b.glue(b2)

     setTimeout(function(){    b.dyn();  b2.dyn()  },1000)

     */



    y = w.ship()

    w.beg(function(cx){

        cx.with('ship','wall', function(){

            w.B(y.X(), y.Y(), 30).stat()

        })

    })

}







f.area=function(){

return Math.poly( this.V() ).getArea()

}
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


f.color=function(c1,c2){ c1=c1||'b'; c2=c2||c1

shape = this.m_shape
    verts = shape.m_vertices
    verts = _.map(verts, function(v){
        return [v.x*30, v.y*30]
    })

    // b.bindSprite2(
    body=this.body()
    h = w.s.shape().poly(verts, c1,c2, 1)
    this.bindSprite2(h)

    // )

}




f.B=  f.body = f.gB = f.getBody=function(){return this.GetBody()}
f.isStat=function(){return this.B().isStat()}
f.isDyn=function(){return this.B().isDyn()}
f.isKin=function(){return this.B().isKin()}
f.dyn=function(){var body = this.body()
    body.dyn.apply(body, arguments)
    return this}
f.kin=function(){var body = this.body()
    body.kin.apply(body, arguments)
    return this}
f.stat=function(){var body = this.body()
    body.stat.apply(body, arguments)
    return this}

f.bindSprite2=function(obj, startingRotation, x, y ){

    //takes any display object.  right now, just used for shapes
    //because bindSprite fetches the bm's by string.
    //but when i set up preloader, then i would use this i suppose :)
    x=N(x)?x:0;
    y=N(y)?y:0
    var f=this,
        body=this.body(),
        stage = body.wor().s

    startingRotation = N( startingRotation) ?  startingRotation : 0
    f.sprite = obj
    f.sprite.a2(stage)
    //updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
    cjs.tick(function(){//if(!f.sprite){return}
        f.sprite.XY(
                    body.X() + (x||0),
                    body.Y() + (y||0)
            )
        f.sprite.rotation=body.rot() + startingRotation

    })

    return this}

f.isCirc=function(){
   return this.shape().m_type==0
}



b2d.polySens = function(kind){
    var poly= b2d.poly.apply(null, _.rest(arguments))
        poly.sensor(true).K(kind)
    return poly}
b2d.fixtParse=function(arr){

//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture


    var func = function(fixt){var len

        if( !A(fixt) ){ return fixt }

        if( fixt.isSensor ){return b2d.polySens.apply(null, fixt)}


        len = fixt.length
        return (len==1)? b2d.circ(fixt[0])
            :(len==2)? b2d.poly.apply(null,fixt)
            :(len==3)? b2d.circ.apply(null,fixt)
            :b2d.poly.apply(null, fixt)
    }



    return _.map(arr, func)

      }
b2d.fixt = function(shape){
    var g=G(arguments), len=g.length

    var fixt= new b2d.Dynamics.b2FixtureDef()

    if( b2d.isShape(shape) ){ fixt.shape = shape }

    else if( A(shape) || len==2 || len > 3 ){

        fixt.shape = b2d.polyH.apply(b2d,g)
    }

    else if(len==1 || len==3){
        fixt.shape = b2d.circH.apply(b2d, g)
    }

    return fixt
}


b2d.poly = function(){var g=G(arguments),
// SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?

        polyH = b2d.polyH.apply(null, g),

        fixt = b2d.fixt( polyH  )

    fixt.density= 1
    fixt.friction= .2
    fixt.restitution = .2
    if(g.n){ fixt.isSensor = true }
    return  fixt}


b2d.circ = function(rad,x,y){
    var g= G(arguments),fixt,circ
    rad = N(g[0])?g[0]:50
    x=N(g[1])?g[1]:0
    y=N(g[2])?g[2]:0
    circ = b2d.circH(rad).xy(x,y)
    fixt = b2d.fixt(circ)
    if(g.n){fixt.isSensor=true}
    return fixt.den(1)
}
b2d.rec = function(wd,ht,x,y,rot){
    var g= G(arguments),fixt,rec

    wd = N(g[0])?g[0]:50
    ht = N(g[1])?g[1]:50

    x=N(g[2])?g[2]:0
    y=N(g[3])?g[3]:0
    rot=N(g[4])?g[4]:0

    rec = b2d.polyH(wd,ht,x,y,rot)

    fixt = b2d.fixt(rec)
    if(g.n){fixt.isSensor=true}
    return fixt.den(1)
}










b2d.isFixt=function(fixt){
    if(!fixt){return false}
    return fixt.constructor.name=="b2Fixture"}
FSPRITE=function(){w = b2d.W()

    b = w.ball(100,200,100)

    f= b.fixts()[0]

    w.s.cir(100,100,50, 'r')

    w.s.rect(400,200,30,50, 'b')

    w.s.poly([[200,100],[300,200],[50,400]],'y')

}

CIRCS=function(){ w=b2d.W({g:0})

    b = w.dyn(300, 300)

    b.circ('o', 20)
    b.circ('b', 100, 140, 0)
    b.circ('r', 20, 100, 100)
    b.RECT('g', 100,100)
    b.RECT('y', 100,100,50,50)
    b.RECT('p', 100,100,-150,-150,45)

    b2 = w.dyn(300, 300)

    b2.circ(  20)
    b2.circ(  100, 140, 0)
    b2.circ(  20, 100, 100)
    b2.RECT(  100,100)
    b2.RECT(  100,100, 50, 50)
    b2.RECT(  100,100,-150,-150,45)

}
NEWFX1=function(){w=b2d.W()

    b = w.dyn(500, 300)
    b.fixt(  b2d.fixt(20) ) //circ
    b.fixt(  b2d.fixt(20, 100, 100)  ) //circ
    b.fixt(  b2d.fixt(100, 50) ) //rect
    b.fixt(  b2d.fixt(100, 50, -100,-100) ) //rect
    b.fixt(  b2d.fixt(100, 50, -100,0,25) ) //rect
    b.fixt(  b2d.fixt( [-100,0],[0,-100],[100,40]   ) ) //poly


    b2 = w.dyn(200, 300)

    b2.shape(20)   //circ
    b2.shape(20, 100, 100)    //circ
    b2.shape(100, 50)   //rect
    b2.shape(100, 50, -100,-100)   //rect
    b2.shape(100, 50, -100,0,25)   //rect
    b2.shape([-100,0], [0,-100], [100,40]   )   //poly


}
NEWFX=function(){w=b2d.W()


    b = w.dyn(500, 300)
    b.fixt( [ [20] ] ) //circ


  //  b.fixt( [20, 100, 100]  ) //circ
  //  b.fixt( [100, 50] ) //rect
  //  b.fixt( [100, 50, -100,-100] ) //rect
  //  b.fixt( [100, 50, -100,0,25] ) //rect
   // b.fixt( [ [-100,0],[0,-100],[100,40]   ] ) //poly


}







VERTS=function(){w=b2d.W()

    b = w.brick(140,140,100,100).rot(20)

    b2 = w.brick(100,100,100,100).rot(45)


    t = b.tf()
    v = b.verts()

    wV = b.wVerts()


    //first vertex:  x: -50, y: -50,

    // b2d.conc( b.dff(b2).verts() ).stat().X(500)

    b.DIFF(b2, '-')

    setTimeout(function(){b.dyn()},3000)


    // w.dot('b',100,30);w.dot('o',170,100);w.dot('b',30,100); w.dot('p',100,170)


}
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
FIXTDIFF=function(){w=b2d.W()

    b= w.stat(300,300)
    f = b.poly( 100,100  )
    f2 = b.poly( 100,100, 0, 0, 45  )

    b2= w.brick(400,400,200,200)

    // f.DIFF(b2);f2.DIFF(b2)

    b.DIF(b2,'-')


}
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
FIXTURES1=function(){z()

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
FIXTURES=function(){w=b2d.W({
    //walls:false
})



    guyInBed= [[30],[20, 30,30],[100,30]]

    dick = [[50, 300, 0,-100],[50, 100, 150],[50, -100, 150]]
    //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]




    //w.dyn(400,300, b2d.fixtParse(dick) )
    //w.A(  b2d.dyn(300,300), guyInBed ) // have to fix w.dyn

    fd = b2d.poly(30,100).sensor(true)


     b = w.dyn(300,300, [   [40]  ]).K('man')

    f= b.fixt( fd )

    f.K('arm')



    w.beg(function(cx){

      //  $l('a body: ' + cx.a().K() + ' - a fixt: ' + cx.A().K()   )
       // $l('b body: ' + cx.b().K() + ' - b fixt: ' + cx.B().K()   )

        if( cx.with('arm') ){$l('arm!')

            b.I(50,50)

        }

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

b2d.overlapping=function(b1, b2){

    var v1=b1.polyVerts(),
        v2=b2.polyVerts()

    var p = v1.union(  v2 )

    return !(_.isEqual(p.verts(),v1.verts()) || _.isEqual(p.verts(),v2.verts()))
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
b2d.polyDot=function(p){
    p=A(p)?p: p.verts()
    _.each(p,
        function(v){w.dot(V(v) )})

}

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

CLONE=function(){w=b2d.W()

    w.roof.kill()

    // x = w.B(400,400, 50,200).stat().poly(200,20)


     b = w.B(400,400, [

         [20],
         [20,100,0],
         [20,0,100],
         [100,200]

     ])


    setInterval(function(){

        b.I(0,-1000)
        b.clone()

    }, 3000)

    w.ship()


}


PUZZLE=function(){w=b2d.W().debug()

    _.times(10,function(){

        w.B(400,400, [

            ['r',20],
            ['b',20,100,0],
            ['y',20,0,100]


        ])
    })
}

CIRCTOPOLY=function(){w=b2d.W()

    b = w.S(300, 300, 50)
    r = b.fixt().shape().m_radius*30
    b2  = w.S(600, 400)

    c = b2d.polyCirc(r, 10)

    c = _.map(c, function(v){return [v.x, v.y]})

    b2.poly.apply(b2, c)


    h  = b2.fixt().shape()

    b2.dyn()
}


