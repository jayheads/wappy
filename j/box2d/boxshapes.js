
//super shape wrapper
sSh   =function(s){
    s.tP    =s.tPt=s.tp=function(a,b){return s.TestPoint(a,b)}
    return s}



//poly shape maker
//handles both box and set as box!
//x,y -> box
//x,y,P,A -> oriented box
pSh   =function(x,y,P,A){

    var p=sSh(new b2PolygonShape)

    p.sAB  =p.z=p.sab=function(a,b,P,A){

        var g=G(arguments),
            a=g[0], b=g[1]||a,
            P=g[2], A=g[3]

        if(A){A=tRad(A)}

        if(!P){p.SetAsBox(a/30,b/30)}
        else {p.SetAsOrientedBox(a/30,b/30, P, A)}

        return p}
    p.sAA=p.saa=function(a,b){

        p.SetAsArray(a,b)
        return p}  //if(P){p.z(x,y,P,A);return p}

    if(x){
        p.sAB(x,y,P,A)
    }


    return p}

//circleShape maker
// radius -> circle shape
cSh   =function(a){

    var s=sSh(new b2CircleShape(a/30))

    return s

}

aSh=function(){var g=arguments
    return pSh().sAA(g)}

aFx=function(){
   return fDf( _a(aSh,
       _m(arguments,function(a){return bV(a[0]/30, a[1]/30)})
   ))
}

tri=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(
        dBD(x,y),
        aFx([-100,0],[0,-100],[100,0])

    )

}

tri2=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(
        dBD(x,y),
        aFx([-200,0],[0,-200],[200,0])

    )

}

tri3=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(
        dBD(x,y),
        aFx([-100,0],[0,-50],[400,0])

    )

}
thi=function(x,y){
    x=N(x)?x:400
    y=N(y)?y:400

    w.a(dBD(x,y),
        aFx([-100,0],[0,-100],[100,0],[60,50]))


}

TRIANGLE=function(){makeWorld()  // f.s(h= pSh().sAA(   [bV(-1,0), bV(0,-1), bV(1,0)]  ))



tri()


 tri2()

    thi()


}
