//weld seems to hurt mouse drag.  but sJt is ok?!


wJt =function(a,b,c,d,e){var j=sJt(new BXJ.b2WeldJointDef())

    j.i=function(){
        var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    if(a){j.bodyA=a}
    if(b){j.bodyB=b}
    if(c){j.localAnchorA=c}
    if(d){j.localAnchorB=d}
    if(N(e)){j.referenceAngle = tRad(e)}

    return j}
sWJ=function(x,y){

    x=N(x)?x:100
    y=N(y)?y:x

    b11=w.a(dBD(x,y),fix())

    b22=w.a(dBD(x,y),fix())

    j=wJt(b11,b22, bV(-.5,-.5), bV(.5,.5), 9)

    w.cJ(j)}
mWJ=function(){x.$$(sWJ)}

weld=function(a,b,c,d,e,f,g){c=c||0;d=d||0; e=e||0; f=f||0
    var j=wJt(a,b, bV(c/30,d/30), bV(e/30 , f/30), g||10)
    return j}

WELD=function(){makeWorld()

    w.j(weld(baa(100,100),ba(100,100),0,0))
    w.j(weld(baa(200,100),ba(200,100),0,10))
    w.j(weld(baa(300,100),ba(300,100),0,-10))
    w.j(weld(baa(400,100),ba(400,100),10,10))
    w.j(weld(baa(500,100),ba(500,100),10,-10))
    w.j(weld(baa(600,100),ba(600,100),10,-20))
    w.j(weld(baa(700,100),ba(700,100),10,-30))
    w.j(weld(baa(800,100),ba(800,100),-10,-40))
    w.j(weld(baa(900,100),ba(900,100),-10,-50))

    w.j(weld(baa(100,200),bi(100,200),0,0))
    w.j(weld(baa(200,200),bi(200,200),0,10))
    w.j(weld(baa(300,200),bi(300,200),0,-10))
    w.j(weld(baa(400,200),bi(400,200),10,10))
    w.j(weld(baa(500,200),bi(500,200),10,-10))
    w.j(weld(baa(600,200),bi(600,200),10,-20))
    w.j(weld(baa(700,200),bi(700,200),10,-30))
    w.j(weld(baa(800,200),bi(800,200),-10,-40))
    w.j(weld(baa(900,200),bi(900,200),-10,-50))

    w.j(weld(ba(100,500),bi(100,500),0,0))
    w.j(weld(ba(200,500),bi(200,500),0,10))
    w.j(weld(ba(300,500),bi(300,500),0,-10))
    w.j(weld(ba(400,500),bi(400,500),10,10))
    w.j(weld(ba(500,500),bi(500,500),10,-10))
    w.j(weld(ba(600,500),bi(600,500),10,-20))
    w.j(weld(ba(700,500),bi(700,500),10,-30))
    w.j(weld(ba(800,500),bi(800,500),-10,-40))
    w.j(weld(ba(900,500),bi(900,500),-10,-50))

}