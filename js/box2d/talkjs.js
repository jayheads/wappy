TALKJS=function(){   w = b2d.W({   g:0,   w:0   }).startKilling().debug()
    score=0
    shots=0

   p= w.addMe(500,300).stat()

    _.times(100, function(){
        w.addCirc()
    })


    $.space(function(){//can double on on shots!!!
        setInterval(function(){
            p.shoot(); shots++ }, 200)
    })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)

    w.beg(function(cx){
        if(cx.with('ball','bullet')){
            score++;
            cx.destroy()
        }})

    cjs.tick(function(){
        p.XY(500, 300)
        if(cjs.Keys.left){p.rot(8,'-')}
        if(cjs.Keys.right){p.rot(8,'+')}
        if(cjs.Keys.up){
            w.each(function(body){
                if(body.not('bullet', 'player')){
                    body.I(p.worldVec(0,-100).div(-50))}})}
    })


}




// OLD:


b2d.poly2= function(wd, ht, xy, ang,ang2){//b2d.polyDef=b2d.polyFixt=pFx=
    var g= G(arguments),
        fixt

    wd=g[0];
    ht=g[1];
    xy=g[2];
    ang=g[3];
    ang2=g[4]


    if( A(wd) ){
        return b2d.Arr.apply(null, arguments)
    }
    //if(b2d.isShape(wd)){fixt.shape = wd; return shape}
    //you can make a poly
    wd=wd||100

    ht=N(ht)?ht:wd

    fixt = b2d.fixt(  b2d.polyH( wd, ht, xy, ang, ang2)

    )




    fixt.density=1
    fixt.friction=.2
    fixt.restitution = .2
    if(g.n){fixt.isSensor=true}
    return  fixt

}


b2d.ArrX = b2d.AX = function(){
    var shape = b2d.AShape.apply( null, arguments ),
        poly = b2d.fixt( shape ).den(.1)
    return poly} //DEP FOR b2d.poly


b2d.AShapeX=function(){//dep .. use polyH

    var arr = _.map(arguments, function(vert){

            return V(vert[0], vert[1], '-')

        }),

        shape = b2d.polyH()

    shape.sAA( arr )

    return shape}

