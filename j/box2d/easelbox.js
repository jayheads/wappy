//brilliant!!!!

ba    =fCS=function(x,y,r){
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a(

        dBf(x,y), cFx(r)

    )


}



baa   =ba2 =function(x,y,r){
    x=x||100
    y=N(y)?y:x
    r=r||20

    return w.a(

        sBf(x,y), cFx(r)

    )


}



bi    =brk=brick=function(x,y,W,H) {

    x = N(x) ? x : 60
    y = N(y) ? y : x
    W = N(W) ? W : 30
    H = N(H) ? H : W

    var br = bDf(dB).XY(x, y)

    var f = fDf().s(pSh(W / 2, H / 2))

    return w.a(br, f)


}

bii    =brk2=brick=function(x,y,W,H){

    x=N(x)?x:60
    y=N(y)?y:x
    W=N(W)?W:30
    H=N(H)?H:W

    var br=bDf(sB).XY(x, y)

    var f=fDf().s( pSh(W/2, H/2)   )

    return w.a(br,f)

}


bCL=function(){
    var l= new BXD.b2ContactListener
    l.bC =function(f){l.BeginContact=f; return l}
    l.eC =function(f){l.EndContact=f; return l}
    l.pS =function(f){l.PreSolve=f; return l}
    l.PS=function(f){l.PostSolve=f; return l}
    return l}

bCM=function(){var m= new BXD.b2ContactManager
    m.c= m.cl= m.Collide
    m.a= m.aP=m.AddPair
    m.f= m.fNC= m.FindNewContacts
    m.d= m.ds= m.Destroy
    return m}


bCF=function(){
    var f=new BXD.b2ContactFilter
    f.rC =f.RayCollide
    f.sC =f.ShouldCollide
    return f}



bCI=function(){var i= new BXD.b2ContactImpulse
    i.n= i.nI=function(){return i.normalImpulses}
    i.t= i.tI=function(){return i.tangentImpulses}
    return i}
bFD=function(d){var d= new BXD.b2FilterData

    d.gI=function(a){
        if(U(a)){return d.groupIndex}
        d.groupIndex=a; return d}

    d.cB=function(a){
        if(U(a)){return d.categoryBits}
        d.categoryBits=a; return d}

    d.mB=function(a){
        if(U(a)){return d.maskBits}
        d.maskBits=a; return d}

    return d}


//triggers listeners!
LISTENER=function(){
    _bC=0
    _eC=0
    _pS=0
    _PS=0

    makeWorld()

    ba()
b1=function(){bi()}

   var bb=bCL()
        .bC(function(){

           b1()
           // $l('bC: '+_bC++)

        })
        .eC(function(){
           // $l('eC: '+_eC++)
            //ba()
        })
         .pS(function(){
           // $l('pS: '+_pS++)
      // ba()
        })
         .PS(function(){
           // bi()
        //    $l('PS: '+_PS++)
        })

    w.sCL(bb)

}


LISTENER1=function(){makeWorld()

    w.sCL(bCL().bC(ba))
    ba()

}




//shows category and mask bits
//the big circles dont collide??
CONTACTS=function(){

    makeWorld()

    f1=cFx(80).cB(2).mB(1)
    f2=cFx(60).cB(3).mB(1|3)

    f3=pFx(60,90,0,40,10).iS(1)
    f4=cFx(100).iS(1)

    w.a( dBf(300,300),  f1)
    w.a( dBf(400,300),  f1)


    t1= w.a( dBf(500,300), [f2,f3]).aV(100)

    t2= w.a( dBf(700,300), [f2,f4]).aV(100)





}


tenBalls=function(){
    _t(10, function(i){ ba(100 + (i*80), 200) })
}




hundBalls=function(){

    _t(100, function(i){ ba( 100  +(i*8),  50, 10) })

}




