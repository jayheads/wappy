b=b2d.Body.prototype



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
b.f=b.fixt= b.list= function(fD){var b=this,f;if(U(fD)){return b.GetFixtureList()}    // can pass a CODED array of fixts (will get parsed)           //p.createFixture = p.cF = b.fixt1 = b.shape =

    if(A(fD)){_.each(b2d.fixtParse(fD),
        function(fd){b.fixt(fd)})
        return b}


    if(!b2d.isFixtDef(fD)){
        fD=b2d.fixt.apply(b2d, arguments)}


    f=b.CreateFixture(fD)


    if(A(fD.classes)){_.each(fD.classes,
        function(k){f.K(k)})}//?


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




b.polyArr =   b.convex =    function(c,V,k){var b=this,   w= b.wor(), h, f,
//when and if should i call .conc/.sep ?
// i could auto-conc it.. but ill lose track of the fixts?
    g=G(arguments)
    if(g.length>2){ if(S(c)){V=_.r(g)} else {c='p';V=g}}//passing points direclty: ([],[],[]) or ('r',[],[],[])
    if(!S(c)){if(S(c[0])){V=_.r(c); c=c[0]}// ['c', [[],[]] ]   or [[],[]]
    else {V=c;c=null}}
    if(S(_.l(V))){k =V.pop()}
    f = b.poly.apply(b,V)
    if(k){ f.K(k) }
    if(c){f.bS(w.s.poly(V, c,c))}
    return f
}




////
////
////


b2d.pH=  b2d.polyH= function(W,H,x,y,a){var g=G(arguments),

    p = new b2d.PolygonShape()

    if(N(g[0])){p.box(W,H,x,y,a)}
    else if(O(W)){p.arr.apply(p,g)}
    return p}


b2d.poly =function(){var g=G(arguments),

    pH=b2d.pH.apply(null, g),

    f = b2d.fixt(pH).den(1).fric(.2).rest(.2)

    if(g.n){f.isSensor = true}

    return f}



b.poly= function(){var b=this











    return b.f(
        b2d.poly.apply(null, arguments)
    )
}





b.CIRCx = b.circx = function(col, rad, x, y){ var g= G(arguments),  fixt, h,str
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








b.H= function(arg){var g = G(arguments),
    arg=g[0],
    b=this,
    len=length(g)

    if(U(arg)){return b}

    if( A(g[0]) && U(g[1]) ){                                       //passing a single array, suggest MULTIPLE fixts //[f1,f2,..]
        _.e(g[0], function(a){
            if(g.n){a.push('-')}
            b.H.apply(b,a)
        })}

    else if(S(g[0]) && A(g[1]) && U(g[2])){                                             //[col,[f1,f2,..]]
        _.each(g[1], function(f){
            if(b2d.isFD(f)){b.f(f).C(g[0])}
            else {
                if(!S(f[0])){f.unshift(g[0])}                                     //f= _.map(f, function(a){return a})
                if(b2d.isFD(f[1])){b.f(f[1]).C(f[0])} else {b.H.apply(b,f)}}
        })
    }



    else if(b2d.isFD(g[0])){b.f(g[0])}                                                   //fixtDef
    else if(S(g[0]) && b2d.isFD(g[1])){
        b.f(g[1]).C(g[0])
    }                               //['color', fixtDef]

    else if(O(g[1])){  //  if(g.n){g.push('-')}  //  b.fig(g)
        o= S(g[0])? {c:_.f(g),v:_.r(g)}  : {v: g}
        if(g.n){o.s=1}
        b.fig(o)}

    // else if(O(g[0])){$l('o');o=g[0]
    //    if(o.t=='c'){  b.cir(o) }}

    else if(len==1||len==3){
        o={c:g[0],r:g[1],x:g[2],y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)}


    else {
        if(g.n){g.push('-')};
        b.RECT.apply(b,g)
    }//rect

    function length(arr){
        var len = arr.length
        if(S(_.first(arr))){len--}
        if(S(_.last(arr))){len--}
        return len}

    return b}





b.fig  =b.conc=b.sep=function(V){var b=this,g=G(arguments),

    V=g[0], n=b.num(), c

    if(U(g[0])){return}

    if(A(g[0])){
        if(g.n){b.clear()}
        if(S(g[0][0])){c = g[0].shift()}
        o = {v:V, c:c}}

    else o = g[0]
    b2d.fig(b, o.v)

    if(S(o.c)){
        _.e(_.f(b.fixts(),b.num()-n),
            function(f){f.C(o.c)})}
    if(o.s){
        _.e(_.f(b.fixts(),b.num()-n),
            function(f){f.SetSensor(true)})}

    return b}





BH=function(){w=b2d.W()

    w.ball()

    b = w.S(400,300)
    b.H('o', 50)
    b.H('r', 50,50)
    b.H('b', 50,50,50)
    b.H('g', 50,50,50,50)
    b.H('w', 50, 50, 50, 50, 50)
    b.H('u', [-100,0], [0,-50], [200,-10] )



    b2 = w.D(600,300).H([
        ['o', 50],
        ['r', 50,50],
        ['b', 50,50,50],
        ['g', 50,50,50,50],
        ['w', 50, 50, 50, 50, 50],
        ['u', [-100,0], [0,-50], [200,-10]]
    ])




    b3 = w.D(600,300).H('y', [
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





b.fixtClass=function(k){var b=this, f=b.fixt()
    if(U(k)){return f.getClass()}
    f.K(k); return b}


b.shp = b.shape = b.getShape=function(){return this.fixt().shape()}
b.rad = function(){return this.shp().m_radius * 30}

b.C=function(c){return this.each(function(f){f.C(c)})}











