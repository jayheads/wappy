AB001=function(a,b){return AB( a-.001,b-.001, a+.001, b+.001)}

gBAM  =getBodyAtMouse=function(mX,mY){var slBody


    w.qAB(

        function(f){
            f=sFx(f)

            if(!f.gT(sB) && f.tP(mX,mY) ){   //  f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))
                slBody=f.gB();
                return false }
           return true},

        AB001(mX,mY))

    if(O(slBody)){return sBd(slBody)}

}

elPx=function(e){ee=e

    var t='',x=0,y=0;

    while(O(e)&&D(tN(e))){

        x+=osL(e)
        y+=osT(e)

        t=uC(tN(e))

        e=(t=='BODY')?0
            :O(e)&&O(
            osP(e))?osP(e):e}

    return {x:x,y:y}}

DbD =dbD =DebugDraw =bDD=b2DD=function(){var d=new b2DebugDraw()
    d.sSp = d.sS=d.ss=function(a){d.SetSprite(a);return d}
    d.sDS =d.sDrSc =d.sds=function(a){d.SetDrawScale(a);return d}
    d.sFA =d.sFAl=d.sfa=function(a){d.SetFillAlpha(a);return d}
    d.sLT =d.slt=function(a){d.SetLineThickness(a);return d}
    d.sF  =d.sf=function(a){d.SetFlags(a);return d}
    return d}

fix=function(){

    return fD.s(

        yn()?  pSh(

            r1()*30,
                r1()*30

        )

            : cSh( r1()*30 )
    )

}

setFixtures=function() {
    bD = bDf().t(sB)
    fD = fDf().d(1).f(.5).r(.8).sh(pSh())
}

makeWalls=function() {
    brick(10, 300, 20, 600) //left

    brick(990, 300, 20, 600)//right

    brick(300, 0, 1200, 20)//top
    brick(300, 590, 1200, 20)//bottom
}
//DEMO: add 10 dynamic sq or cir to world

mBodies=function(){var bD=bDf(dB)
    _t(10,
        function(){w.a(bD.xy(), fix())})}


brk=brick=function(x,y,W,H){

    x=N(x)?x:60
    y=N(y)?y:x
    W=N(W)?W:30
    H=N(H)?H:W

    var br=bDf(sB).XY(x, y)

    var f=fDf().s( pSh(W/2, H/2)   )

    return w.a(br,f)

}
bal=function(x,y,r){
    x=N(x)?x:100
    y=N(y)?y:x
    r=r||20
    var br=bDf(sB).XY(x, y)
    var f=fDf().s(cSh(r))
    return w.a(br,f)}



//DEMO: add a 'fix' on $$
mBody=function(){

    x.$$(function(x,y){

        w.a(
            bDf(yn()?dB:sB).xy(x,y),

            fix())


    })}
//Demo



//Demo
addShapes=addTenShapes=function(n){n=n||10
    //add ten!!!


    _t(n,function(){

        w.a(

            bDf(dB).xy(), fix()

        )})  // w.a( bD.xy(), fD.s(circ(r1())) )
}
//Demo
// on doubleclk:randomly return a dynamic OR
// static bodyDef
// (at the specified location)

makeShapeOnDblClk=function(bodyDf){

    bodyDf=bodyDf || bD

    x.$$(

        function(x,y){

        bodyDf.t(yn()?dB:sB)

        w.a(


            bodyDf.xy(x/30,y/30),

            fix()
        )

    })}
setupDebugDraw=function(){

    w.sdd(

        debugDraw=b2DD()

            .ss(xid())
            .sds(30)
            .sfa(.5)
            .slt(1)
            .sf(shB||jB)

    )
}
Ball=function(x,y){var g=G(arguments)

    x=g[0]||100
    y=g[1]||100

    var b={}


    bD=bDf(g.n? sB: dB )

    b.v = bm('me').wh(100).rxy(100,170)

    x=100
    y=100

    b.b=w.a(
        bD.xy(
                x/30,
                y/30
        ),

        fD.s(cSh(50/30)

        )
    )


    s.bm('me',
        function(jj){j=jj
            jj.wh(100).rxy(100,170).xy(200)
            I(function(){
                jj.xy(b.b.ps().x *30, b.b.ps().y*30)
                jj.rt(b.b.GetAngle())},100)})

    return b}
makeStage=function(X,Y){

    c=cx(X,Y).a()

    c.q.id('canvas')  // why not just c.id('canvas')?

    s=St(c)
    
    STOP()
    x=xx(c)
    s.ob.autoClear=false  //why not s.autoClear(0)?

    cvPx=gEP(did())
}
gEP=getElementPosition=function(e){

    var tagname='',  x=0,y= 0

    while(
        O(e)&&D(e.tagName)){

        y+=osT(e);
        x+=osL(e)
        tagname=uC(e.tagName)
        if(tagname=='BODY'){e=0}
        if(O(e)){if(O(osP(e))){e=osP(e)}}}
    return {x:x,y:y}}
setupMouse=function(){var b

    if(mDown&&!mJoint){

        if(b=gBAM(mX,mY)){

            mJoint=w.cJ(

                mJD().A(w.gGB()).B(b)
                    .tS(mX,mY)
                    .cLCn(true).
                    mF(300* b.m()))

            b.aw(1)
        }}


    if(mJoint){
        if(mDown){
            mJoint.SetTarget(bV(mX,mY))}

        else{
            w.dJ(mJoint)
            mJoint=null
        }}
}
oMM=function(e){e=sE(e)
    mX=(e.cx-  cvPx.x)/30;
    mY=(e.cy- cvPx.y)/30}
checkMouseDown=function(){



    dL('d',function(e){ mDown=true
        oMM(e)
        dL('m',oMM,true)},b1)

    dL('u',function(){

        dR('m',oMM,true)

        mDown=false
        tUd(mX,mY)},true)

}
mouseBodyFrom=function(b){
   return w.cJ(
        mJD(w.gGB(),b)

            .tgS(mX,mY).clC(true).mF(300*b.m())

    )
}
noJointExists=function() {
    var b = getBodyAtMouse(mX, mY)

    if (b) {

        mJoint = mouseBodyFrom(b)
        b.aw(1)
    }
}
jointExists=function() {
    if (mDown) {
        mJoint.sTg(mX, mY)
    }

    else {

        w.dJ(mJoint);
        mJoint = null
    }
}
handleJoints=function() {
    if (mDown && !mJoint) {
        noJointExists()
    }
    if (mJoint) {
        jointExists()
    }
}
debugWorld=function(){w.st(1/60,10,10).dDD().clF()}
startLoop=function(cb) {
    I(function () {//start the ticker
        handleJoints()
        debugWorld()
        if (F(cb)) {
            cb()
        }
        s.u()
    }, 1000 / 60)}
boxMouseSetup=function(cb){var slBody
    makeStage(1000,600)

    mJoint=0
    mDown=0

    w=bW(bV(0,40),true)  //gravity, and allowSleep
   
    startLoop(cb)
    checkMouseDown()


return w}
boxMouseSetupNoGravity=function(cb){var slBody

    mJoint=0
    mDown=false
    makeStage(600,800)
    w=bW(bV(0,0),true) //gravity, and allowSleep
    startLoop(cb)
    checkMouseDown()}
boxMouseSetupNoGravity1=function(){var mX,mY, mDown,   slBody,   mJoint, cvPx

    c=cx(600,400).a();c.q.id('canvas')  // why not just c.id('canvas')?

    s=St(c);STOP();
    x=xx(c);
    s.ob.autoClear=false  //why not s.autoClear(0)?



    w=bW(bV(0,0),true) //gravity, and allowSleep
    //start the ticker

    I(function(){

        setupMouse()

        w.st(1/60,10,10)
        w.ddd().cf()
        s.u()},1000/60)

   //all this does is get the canvas position
    gEP=getElementPosition=function(e){

        var tagname='',
            x=0,y= 0

        while(
            O(e)&&D(e.tagName)){

            y+=osT(e);
            x+=osL(e)

            tagname=uC(e.tagName)
            if(tagname=='BODY'){e=0}
            if(O(e)){if(O(osP(e))){e=osP(e)}}}

        return {x:x,y:y}}
    cvPx=gEP(did())



    //mouse
    // on key of 'd' : start mouse move listener

    dL('d',  function(e){
            mDown=true
            oMM(e)
            dL('m',oMM,true)
    },b1)
    // on key of 'u' : remove mouse move listener
    dL('u',  function(){
        dR('m',oMM,true)

            mDown=false
            tUd(mX,mY)

    },true)




}


