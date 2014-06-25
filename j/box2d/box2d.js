
BX=Box2D

BXc  =BX.Common;

bV=function(a,b){
    var g=G(arguments),
        a=g[0],b=g[1],
        b2Vec2=BXc.Math.b2Vec2

    if(g.n){a/=30;b/=30}

    return new b2Vec2(a,b)}


b2Dynamics =dynamics = BXD=BX.Dynamics
b2Body = dynamics.b2Body

sB=b2Body.b2_staticBody
dB=b2Body.b2_dynamicBody

b2BodyDef     =BXD.b2BodyDef
b2FixtureDef  =BXD.b2FixtureDef
b2Fixture =BXD.b2Fixture
b2World =BXD.b2World
b2DebugDraw =BXD.b2DebugDraw
shB=b2DebugDraw.e_shapeBit
jB=b2DebugDraw.e_jointBit

b2MouseJointDef=BXD.Joints.b2MouseJointDef

b2Collision=Collision=BXC=BX.Collision
b2MassData=BXC.Shapes.b2MassData
b2PolygonShape=BXC.Shapes.b2PolygonShape
b2CircleShape=BXC.Shapes.b2CircleShape
b2AABB=BXC.b2AABB

BXJ=BXD.Joints
bJ =BXJ.b2Joint
bJD  =BXJ.b2JointDef

bDJD=BXJ.b2DistanceJointDef
bDJ=BXJ.b2DistanceJoint

bPrJD=BXJ.b2PrismaticJointDef
bPJ=BXJ.b2PrismaticJoint

bPJD =BXJ.b2PulleyJointDef
bPJ =BXJ.b2PulleyJoint

bGJD=BXJ.b2GearJointDef
bGJ=BXJ.b2GearJoint

dJt=function(){
    var j=new bDJD()
    j.i=function(){var g=G(arguments)

        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}

gJt=function(){
    var j=new bGJD()
    j.i=function(){var g=G(arguments)

        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}
prJt=function(){
    var j=new bPrJD()
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}
rJt=function(){
    var j=new BXJ.b2RevoluteJointDef()
    j.i=function(){var g=G(arguments)

        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}


    return j}
pJt=function(){
    var j=new bPJD()
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}

    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}
    return j}
wJt=function(){
    var j=new BXJ.b2WeldJointDef()
    j.i=function(){var g=G(arguments)
        _a(j.Initialize,g,j)
        return j}
    j.f=function(a){j.frequencyHz=a;return j}
    j.l=function(a){j.length=a;return j}
    j.d=function(a){j.dampingRatio=a;return j}

    return j}
iSB=function(f){return f.GetBody().GetType()!=sB}
iPtM=function(f,m){
    return f.GetShape().TestPoint(f.GetBody().GetTransform(),m)
}
mDJ=function(){x.$$(function(x,y){
    b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
    b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
    w.cj(dJt().i(b11,b22,b11.c(),b22.c())
        .l(1).f(3).d(.1))})}



mRJ=function(){x.$$(function(x,y){

    b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
    b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
    w.cj(

        rJt().i(
            b11,b22,b11.c(),b22.c()
        ).l(1).f(3).d(.1)

    )})}






mPrJ=function(){
    x.$$(function(x,y){

        p=prJt()
        b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
        b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
        p.i(b11,b22,b11.c(), bV(1,0)  )//.l(1).f(3).d(.1)
        p.lowerTranslation = -5.0
        p.upperTranslation = 2.5
        p.enableLimit = true;
        p.maxMotorForce = 1
        p.motorSpeed =0
        p.enableMotor = true;
        p.localAnchorA =b11.c()// a point in body A to keep on the axis line
        p.localAnchorB =b22.c()// a point in body B to keep on the axis line
        p.ratio =.8
        w.cj(p)

    })}


mPJ=function(){
    x.$$(function(x,y){
        b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
        b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
        p=pJt().i(b11,b22,bV(15,1),bV(15,2),b11.c(),b22.c(),1)
        p.lengthA=8
        p.lengthB=4
        p.maxLengthA=10
        p.maxLengthB=5
        w.cj(p)})}
mWJ=function(){x.$$(function(x,y){
    b11=w.a(bx1=bD.t(dB).xy(x/30,y/30),fix())
    b22=w.a(bx2=bD.t(dB).xy(x/30,y/30),fix())
    j=wJt()
    j.bodyA=b11
    j.bodyB=b22
    j.localAnchorA=bV(-.5,-.5)
    j.localAnchorB=bV(.5,.5)
    j.referenceAngle = 0 * Math.PI / 3
    w.cj(j)})}
mBodies=function(){
    _t(10,
        function(){
            w.a(
                bD.t(dB).xy(),
                fix())})}

mBody=function(){
    x.$$(function(x,y){
        var b=bD.t(yn()?dB:sB);
        w.a(b.xy(x/30,y/30),
            fix())


    })}





bDef=bB=b2BD=function(b){
    b=b||new b2BodyDef
    b.t=function(a){b.type=a;return b}

    b.xy=function(x,y){
        b.position.x=x||r10()
        b.position.y=y||r10()
        return b}

    b.p=b.ps=function(x,y){
        var g=G(arguments),x=x||r10(),y=y||r10()
        if(g.n){x/=30;y/=30}
        b.position.Set(x,y);
        return b}

    b.a=function(a){b.angle=a;return b}
    b.ud=function(a){b.userData=a;return b}
    return b}





fDef=Fixt=FixtureDef=bF=function(){//=b2FD
    var f=new b2FixtureDef

    f.d=function(a){f.density=a;return f}
    f.f=function(a){f.friction=a;return f}
    f.r=function(a){f.restitution=a;return f}

    f.s=function(a){
        f.shape=a;
        return f}

    f.setShapeAsAPoly=f.sP=function(){return f.s(poly())}

    f.setAsBox=f.z=f.sab=function(a,b,p,A){
        if(!p){
            f.shape.SetAsBox(a,b)}

        else{
            f.shape.SetAsOrientedBox(a,b,p,A)}
        return f}

    return f}


World=bW=function(a,b){b=b||true
    var w=new b2World(a,b)


    w.sdd=function(a){w.SetDebugDraw(a);return w}
    w.st=function(){ var g=G(arguments)
        _a(w.Step,g,w);return w}
    w.ddd=function(){w.DrawDebugData();return w}
    w.cf=function(){w.ClearForces();return w}


    w.b=function(def){//=w.cb
        var b=w.CreateBody(def)

        b.f=b.cf=function(a){return b.CreateFixture(a)}
        b.m=function(m){if(U(m)){return b.GetMass()}}
        b.c=function(){return b.GetWorldCenter()}
        b.a=function(){var g=G(arguments)
            b.SetAwake(g.n?false:true)
            return b}


        b.p=b.ps=function(x,y){
            var p=b.GetPosition()
            if(U(x)){return p}
            if(N(x)){x={x:x,y:y||p.y}}
            b.SetPosition(x)

            return b}

        //apply impulse. pass impulse as two nums, or obj
        //and pass in location, defaults to body center
        b.aI=function(v,c,c2){
            if(N(c)){return b.aI(bV(v,c),c2)}
            if(U(c)){c=b.c()}
            b.ApplyImpulse(v,c)
            return b}
        //apply force. pass impulse as two nums, or obj
        //and pass in location, defaults to body center
        b.aF=function(v,c,c2){
            if(N(c)){return b.aF(bV(v,c),c2)}
            if(U(c)){c=b.c()}
            b.ApplyForce(v,c)
            return b}
        return b}


    w.a=function(b,f){
        b=w.b(b)
        if(f){if(A(f)){
                _e(f,function(f){b.f(f)})}
            else{b.f(f)}}

    return b}


    w.j=w.cj=function(a){var j=w.CreateJoint(a)

        j.st=function(a){j.SetTarget(a);return j}
        return j}

    w.dj=function(a){w.DestroyJoint(a);return w}
    w.ggb=function(){return w.GetGroundBody()}
    w.q=function(a,b){w.QueryAABB(a,b);return w}

    return w}//=b2W



AB=function(a,b,c,d){var ab=new b2AABB()
    ab.lowerBound.Set(a,b)
    ab.upperBound.Set(c,d)
    return ab}

DebugDraw =bDD=b2DD=function(){var d=new b2DebugDraw()
    d.ss=function(a){d.SetSprite(a);return d}
    d.sds=function(a){d.SetDrawScale(a);return d}
    d.sfa=function(a){d.SetFillAlpha(a);return d}
    d.slt=function(a){d.SetLineThickness(a);return d}
    d.sf=function(a){d.SetFlags(a);return d}
    return d}
MouseJDef =mJD=b2MJD=function(){

    var j=new b2MouseJointDef()

    j.ts=function(a,b){
        j.target.Set(a,b);return j}

    j.cc=function(a){
        j.collideConnected=a;return j}

    j.mf=function(a){
        j.maxForce=a;return j}

    j.A=function(a){j.bodyA=a;return j}
    j.B=function(b){j.bodyB=b;return j}


    return j}

RevoluteJDef =rJD=function(){
    var r=new b2RevoluteJointDef()

    r.i=function(){var g=G(arguments)
        _a(r.Initialize,g)
        return r}

    return r}

PolyShape =poly=function(x,y,P,A){//=b2PS
    var p=new b2PolygonShape

    p.z=p.sab=function(a,b,P,A){

        var g=G(arguments),
            a=g[0],
            b=g[1]||a,
            P=g[2],
            A=g[3]

        if(g.n){
            a/=30;b/=30;
            if(A){A=tRad(A)}
        }

        if(!P){p.SetAsBox(a,b)}

        else{p.SetAsOrientedBox(a,b,P,A)}

        return p}

    p.saa=function(a,b){
        p.SetAsArray(a,b)
        return p}

    //if(P){p.z(x,y,P,A);return p}


    if(x){p.z(x,y)}

    return p}
CircShape=circ=b2CS=function(a){return new b2CircleShape(a)}
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

getBody=gBd=gBod=function(a){return a.GetBody()}
getType=gTy=function(a){return gBod(a).GetType()}
getTransform=gTF=function(a){return gBod(a).GetTransform()}

getShape=gSh=function(a){var s=a.GetShape()
    s.tp=function(a,b){return s.TestPoint(a,b)}
    return s}
isStat=function(a){return gTy(a)==sB}
txPt=function(a,b){ return gSh(a).tp( getTransform(a), b)}
CircFixt=fC=function(){return bF().d(1).f(.5).r(.8).s(circ(r1()))}

PolyFixt=fP=function(w,h,P,A){

    var g=G(arguments), w=g[0]||r1(), h=g[1]||w

    if(g.n){w/=30;h/=30}

    return bF().d(1).f(.5).r(.8).s(poly(w,h,P,A))}
CircOrPolyFixt=fix=function(){

    return fD.s(

        yn()?
        poly(r1(),r1()):circ(r1())

    )}


getBodyAtMouse=function(mX,mY){

    var selectedBody,

        cb=function(f){
            if(f.GetBody().GetType()!=sB && f.GetShape().TestPoint(
                f.GetBody().GetTransform(),
                bV(mX,mY))){
                selectedBody=f.GetBody()
                return false}
            return true},

        box=AB(mX-.001,mY-.001,mX+.001,mY+.001)

    w.QueryAABB(cb,box)
    return selectedBody}
makeStructure=function(){
    //make shape somehow
    fP=PolyFixt


    w.a(bD.p(300,200,'-').t(dB),//dynamicBody

        [
            fP().s(

                poly().z(50,10,'-')
            ),

            fP().s(poly().z(20,20,'-')),
            fP().s(poly().z(20,10, bV(0,0,'-'),10,'-')),
            fP().s(poly().z(40,10, bV(50,0,'-'),45,'-')),
            fP().s(poly().z(84,10, bV(15,80,'-'),-120,'-')),
            fP().s(poly().z(60,10, bV(0,50,'-'),60,'-'))

        ])}
makeGround=function(){

    //GROUND
    bD=bB()  //bodyDef=
    bD.type=sB // set it to static //create ground
    bD.ps(10,400/30+1.8)
    fD=bF().d(1).f(.5).r(.8) //fixureDef=
    fD.shape=poly() //set it to polyShape
    fD.sab(20,2);
    g1=w.a(bD,fD)//world add

    bD.ps(10,-1.8);
    g2=w.a(bD,fD)//world add

    fD.sab(2,14);
    bD.ps(-1.8,13);
    g3=w.a(bD,fD)//world add
    bD.ps(21.8,13);
    g4=w.a(bD,fD)//world add
}



makeGround2=function(){




    bD=bB().t(sB).ps(10, 800/30 + 1.8)

    fD=bF().d(1).f(.5).r(.8).sP().sab(20,2)

    w.a(bD, fD)

    w.a(bD.ps(1,-1.8),
        fD)

    w.a(bD.ps(-1.8,13),
        fD.sab(2,24))

    w.a(bD.ps(21.8,
        13),
        fD)


   }





makePlatform=function(){
    w.a(bD.p(300,300,'-').t(sB),fP(100,10,'-'))
    w.a(bD.p(300,300,'-').t(sB),fP(10,40,'-'))}

addTenShapes=function(){
    //add ten!!!
    bD.type=dB
    _t(10,function(){
        w.a(

            bD.xy(),fix()

        )})  // w.a( bD.xy(), fD.s(circ(r1())) )
}


makeShapeOnDblClk=function(bodyDf){

    bodyDf=bodyDf||bD

    // on doubleclk:randomly return a dynamic OR static bodyDef (at the specified location)


    x.$$(function(x,y){

       bodyDf.t(yn()?dB:sB)

        w.a(bodyDf.xy(x/30,y/30), fix())

    })}






setupDebugDraw=function(){w.sdd(debugDraw=b2DD().ss(xid()).sds(30).sfa(.5).slt(1).sf(shB||jB) )}
//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs

fiveJoints=function(){mDJ();mRJ();mPrJ();mPJ();mWJ()}

fivePrisms=function(){ mPrJ();mPrJ();mPrJ();mPrJ();mPrJ(); }



Ball=function(x,y){var g=G(arguments)
    x=g[0]||100;
    y=g[1]||100

    var b={}

    bD.t(g.n?sB:dB)

    b.v=bm('me').wh(100).rxy(100,170)

    //b.b=w.a(bD.xy(x/30,y/30),fD.s(circ(50/30)))
    b.b=w.a(bD.xy(x/30,y/30),fD.s(circ(25/30)))

    //b.b=w.cb(bD.xy(x/30,y/30))

    s.b('me',
        function(jj){j=jj

            jj.wh(100).rxy(100,170).xy(200)

            I(function(){
                jj.xy(b.b.ps().x *30, b.b.ps().y*30)
                jj.rt(b.b.GetAngle())},100)})



    return b}


 makeWorld=function(X,Y){

     c=cx(X,Y).a();
     c.q.id('canvas')  // why not just c.id('canvas')?
     s=St(c);STOP();
     x=xx(c);
     s.ob.autoClear=false  //why not s.autoClear(0)?
}



boxMouseSetup=function(cb){
    var mX,mY, mDown,
        selectedBody,
        mouseJoint,
        cvPx


   // makeWorld(600,400)
    makeWorld(600,800)
    oMM=function(e){
        e=sE(e);
        mX=(e.cx- cvPx.x)/30;
        mY=(e.cy- cvPx.y)/30}


    w=bW(bV(0,40),true) //gravity, and allowSleep


    //start the ticker
    I(function(){
        setupMouse()

        w.st(1/60, 10,10)


        w.ddd().cf()


            if(F(cb)){cb()}
            s.u()},

        1000/60)

    //set cvPx to canvas position


    gEP=getElementPosition=function(elem){

        var tagname='',
            x=0,y= 0,e=elem

        while(
            O(e)&&D(e.tagName)){

            y+=osT(e);
            x+=osL(e)
            tagname=uC(e.tagName)
            if(tagname=='BODY'){e=0}
            if(O(e)){if(O(osP(e))){e=osP(e)}}}
        return {x:x,y:y}}

    cvPx=getElementPosition(did()) //mouse
    // on key of 'd' : start mouse move listener
    dL('d',function(e){
        mDown=true
        oMM(e)
        dL('m',oMM,true)},b1)
    // on key of 'u' : remove mouse move listener
    dL('u',function(){

        dR('m',oMM,true)

        mDown=false
        tUd(mX,mY)},true)
    setupMouse=function(){ if(mDown&&!mouseJoint){

        var body=getBodyAtMouse(mX,mY)

        if(body){

            var md=b2MJD()
            md.bodyA=w.ggb()
            md.bodyB=body

            md.target.Set(mX,mY)
            md.cc(true).mf(300*body.GetMass())

            mouseJoint = w.cj(md)
            body.SetAwake(true)}}


        if(mouseJoint){
            if(mDown){mouseJoint.SetTarget(bV(mX,mY))}

            else{
                w.dj(mouseJoint)
                mouseJoint=null}}
    }}





boxMouseSetupNoGravity=function(){
    var mX,mY, mDown,
        selectedBody,
        mouseJoint,
        cvPx

    c=cx(600,400).a();c.q.id('canvas')  // why not just c.id('canvas')?
    s=St(c);STOP(); x=xx(c);s.ob.autoClear=false  //why not s.autoClear(0)?
    oMM=function(e){
        e=sE(e);
        mX=(e.cx- cvPx.x)/30;
        mY=(e.cy- cvPx.y)/30}
    w=bW(bV(0,0),true) //gravity, and allowSleep
    //start the ticker
    I(function(){
        setupMouse()
        w.st(1/60,10,10)
        w.ddd().cf()
        s.u()},1000/60)
    //set cvPx to canvas position
    gEP=getElementPosition=function(elem){

        var tagname='',
            x=0,y= 0,e=elem

        while(
            O(e)&&D(e.tagName)){

            y+=osT(e);
            x+=osL(e)
            tagname=uC(e.tagName)
            if(tagname=='BODY'){e=0}
            if(O(e)){if(O(osP(e))){e=osP(e)}}}
        return {x:x,y:y}}
    cvPx=getElementPosition(did()) //mouse
    // on key of 'd' : start mouse move listener
    dL('d',function(e){
        mDown=true
        oMM(e)
        dL('m',oMM,true)},b1)
    // on key of 'u' : remove mouse move listener
    dL('u',function(){

        dR('m',oMM,true)

        mDown=false
        tUd(mX,mY)},true)
    setupMouse=function(){ if(mDown&&!mouseJoint){

        var body=getBodyAtMouse(mX,mY)

        if(body){

            var md=b2MJD()
            md.bodyA=w.ggb()
            md.bodyB=body

            md.target.Set(mX,mY)
            md.cc(true).mf(300*body.GetMass())

            mouseJoint = w.cj(md)
            body.SetAwake(true)}}


        if(mouseJoint){
            if(mDown){mouseJoint.SetTarget(bV(mX,mY))}

            else{
                w.dj(mouseJoint)
                mouseJoint=null}}
    } }

