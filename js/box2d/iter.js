w = b2d.World.prototype

w.e=  w.eB=w.each=w.eachBody=function(l,uD){var w=this,

    bs = w.GetBodyList(), k, b

    //can pass a cb to be run on EACH body
    //can also pass a uD to restrict cb to
    //run only on bodies with that uD

    if(S(l)){k=l; l=uD} else {k=uD}

    while(bs){
        b  = bs
        bs = bs.next()
        if(b.has(k)){l(b)}
    }

    return w}

w.eD=  w.eachD=w.eachDyn=function(l){var w=this

    w.e(function(b){

        if(b.isDyn()){ l(b) }

    })

    return w}

w.e$=  w.each$=w.eachClick=w.bodyClick=function(fn){var w=this

    w.e(function(b){b.$(fn)})

    return w}

//runs fn on all f in AABB. fn passed f,b,n
w.AB =w.queryXY =w.qAB=w.Q= w.queryAABB = function (fn, x1, y1, x2, y2){var w=this,

    AB = b2d.AB(x1, y1, x2, y2),

    n = 0

    if(U(x2)){

    }

    w.QueryAABB(
        function(f){
            n++
            return fn(f, f.B(), n)},
        AB)
    return n}
w.qXY=function(x,y,fn){var w=this, v

    //function on TOPMOST fixt FIRST
    //then goes down, but only if function returns 'true'
    //great way to work with fixts/bods at a certain x,y point

    o=F(x)? {v:V(y,fn), fn:x}
    : O(x)? {fn:y, v:V(x)}
    :       {v:V(x,y), fn:fn}
    w.QueryAABB(o.fn, b2d.AABB01(o.v))
    return w
}


w.XY = function (x, y, fn, k) {
    var w = this, fixt = false // - -> bottom, + all ? :)
    if (O(x)) { k = fn; fn = y; y = x.y; x = x.x}

    w.qXY(x,y,function(f){
        if(f.ofClass(k)&&f.tP(x,y)){fixt=f; return}  //k null -> true // doesnt need to div, because qXY will div
        return true
    }) //stops at top most fixt

    return (fixt && F(fn))? (_.b(fn, fixt)(fixt) || w) : fixt
     // or w? //makes sense actually
}
queryXY=function(fn,x,y){
    w.QueryAABB(fn, b2d.AABB01(x, y))//does not divide
    return w }

w.bodyAt=w.bodyAtPoint=function(x,y,fn,k){var w=this,
    b
    //does not div
    if (O(x)) {k = fn; fn = y; y = x.y; x = x.x}
    w.qXY(function (f) {
        if ((U(k) || f.of(k)) && f.tP(x, y)) { b = f.B(); return}
        return true
    }, x, y)
    return !b? false : F(fn)? (fn(b) || w) : b

}

//query a point of specific kind,
// more options on fixts

//query bodies
w.bXY = function (x, y, fn, k) {var w = this, b = false

    if(O(x)){k = fn; fn = y; y = x.y; x = x.x}
    w.qXY(x, y, function (f) {
        if (f.ofClass(k) && f.tP(x, y)) { b = f.B(); return } //cycles through all the fixts to find the first
        return true
    })

    return !F(fn)? b: _.b(fn, b)(fn(b)) || w

}//**

w.dAt=w.at= w.dynAt= w.bodyAtPoint= function(x,y){var w=this,
    b=null

    w.AB(
        function(f){
            if(f.isDyn() && f.testPoint(x,y)){b=f.B(); return}
            return true},

        x, y)

    return b}


BODYAT=function(){W()


    b = w.S(470, 270, 'y', 100)
    b1 = w.S(500, 300, 'r', 100)
    b2 = w.S(530, 330, 'o', 100)

    w.dot('z', 575, 300)

    w.qXY(
        575,
        300,
        function(f){
            $.in(5, function(){
                f.C('r')
                f.B().dyn().bS('me') })
            return true} )
}



old=function(){
w.queryPointX = function (fn, x, y) {var w = this
    w.QueryPoint(fn, V(x, y, '-'))
    return w
}
w.getBodyAtPointX = function(x,y){var w=this,
    b=null
    //no longer using mX/mY
    w.QueryAABB(function(f){
            if (!f.isStat() && f.test(mX*30, mY*30)) {
                b=f.B()
                return false}
            return true},
        b2d.AABB01(x, y))
    return b
}
}