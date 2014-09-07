
//super shape wrapper
SuperShape=sSh   =function(s){

    s.tP    =s.tPt=s.tp=function(a,b){return s.TestPoint(a,b)}
    return s}


//poly shape maker
//handles both box and set as box!
//x,y -> box
//x,y,P,A -> oriented box
//x,y,p1,p2,A ->oriented box
pSh   =function(x,y,P,A,A2){

    var p=sSh(new b2PolygonShape)

    p.sAB=function(a,b,P,A,A2){//p.z=p.sab=

        var g=G(arguments),
            a=g[0], b=g[1]||a,
            P=g[2], A=g[3]

        if(A){A=tRad(A)}

        if(U(P)){p.SetAsBox(a/30/2,b/30/2)}

        else if(N(P)){p.SetAsOrientedBox(a/30, b/30, bV(P/30,A/30), A2)}

        else {p.SetAsOrientedBox(a/30,b/30, P, A)}

        return p}

    p.sAA=p.saa=function(a,b){

        p.SetAsArray(a,b)
        return p}  //if(P){p.z(x,y,P,A);return p}

    if(N(x)){p.sAB(x,y,P,A,A2)}


    return p}

//circleShape maker
// radius -> circle shape
cSh   =function(a){

    var s=sSh(new b2CircleShape(a/30))

    return s

}

aSh=function(){var g=arguments
    return pSh().sAA(g)}

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
