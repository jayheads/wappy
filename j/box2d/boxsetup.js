handleJointsAlt=0

mW=makeWorld=function(o){o=ob(o)

    //var slBody
    mJoint=0
    mDown=0;

    if(o.z !=0){ z()}

    o.g=N(o.g)?o.g:40

    w=bW(bV(0,o.g))

    makeStage(1200, 600,o)

    cvPx=gEP(did())
    startLoop(o.cb)
    checkMouseDown()
    setupDebugDraw()
    setFixtures()


    if(D(o.w)){$w[o.w]()} else {makeWalls()}


if(!o.$$==0){
    makeShapeOnDblClk()
}


    return w}




makeStage=function(X,Y,o){

    c = $can(X,Y).a().bc('z')

    c.q.id('canvas')  // why not just c.id('canvas')?

    s=St(c)
    STOP()
    x=xx(c)
    s.ob.autoClear=false

if(o.bg){s.b(o.bg)}

}




     //why not s.autoClear(0)?
gEP=function(e){

    iBE=function(e){return O(e) && uC(e.tagName)=='BODY'}//isBodyElement


//=getElementPosition//osP=offsetParent
    var x=0,y= 0
    while(E(e)){ //O(e)&&D(e.tagName)
        y+=osT(e);x+=osL(e)
        if(iBE(e)){e=0}
        e=osP(e)||e}
    return {x:x,y:y}

}//just gets the TOTAL offset of ANY element
mouseJoint =function(b){return w.cJ(
    m=mJD(w.gB(),b.aw(1))
        .cC(1)
        .sT(mX,mY)
        .mF(300*b.m()))}//create mouse joint with a body




  gBAM=function(mX,mY){var slBody  //getBodyAtMouse=

    w.Q(

        function(f){f=sFx(f)
            if(!f.gT(sB) && f.tP(mX,mY)){       // f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))
                slBody=f.gB()
                return false}
            return true},

        AB001(mX,mY))

    if(O(slBody)){return sBd(slBody)}}


handleJoints=function(){

    if(mDown && !mJoint){

        var b=gBAM(mX,mY)

        if(b){

            mJoint=mouseJoint(b.aw(1)) }
    }

    if(mJoint){ if(mDown){ mJoint.sT(mX,mY) }

        else{

            w.dJ(mJoint);
            mJoint=null

        }}}




startLoop =function(cb){

    var debugWorld=function(){w.st(1/60,10,10).dD().cF()}

    I(function(){//start the ticker

        if(handleJointsAlt==true){handleJoints2()} else {handleJoints()}


        debugWorld()

        if (F(cb)){cb()}
        s.u()

    }, 1000/60)}



checkMouseDown =function(){

    var oMM=function(e){e=sE(e)
        MX=e.cx-cvPx.x
        mX=MX/30
        MY=e.cy-cvPx.y
        mY=MY/30}

    dL('d',
        function(e){
            mDown=true
            oMM(e)
            dL('m',
                oMM,true)},
        true)


    dL('u',function(){mDown=false
            //dR('m',oMM,true)
            //tUd(mX,mY)
        }, true)}


setupDebugDraw =function(){

    w.dD(

        debugDraw=dbD()

            .sp(xid())
            .dS(30)
            .fA(.6)
            .lT(1)
            .sF(

                shB||jB
        ))
}

setFixtures =function(){
    bD = sBD()
    fD = fDf().d(1).f(.5).r(.8).sh(pSh())}

makeWalls =function(){

    bii(10,300, 40, 600).uD('leftWall') //left
    bii(990,300, 40, 600).uD('rightWall')//right
    bii(300, 0, 2400, 40).uD('ceiling')//top
    bii(300, 590, 2400, 40).uD('floor')//bottom

}




mBody =makeShapeOnDblClk=function(){//DEMO: add a 'fix' on $$ //DEMO: add 10 dynamic sq or cir to world
    x.$$(function(x,y){
        w.a(  yn()?dBD(x,y):  sBD(x,y),  fix())
    })}






handleJoints2=function(){// so far unchanged.. need to think

    if(mDown && !mJoint){

        var b=gBAM(mX,mY)

        bb=b

        if(b){

            mJoint=mouseJoint(b.aw(1)) }
    else {

            bb.aI(10000,10000)}

    }

    if(mJoint){

        if(mDown){

       // mJoint.sT(mX,mY)

    }

    else {

        bb.aI(

                bbb.x()- MX,
                bbb.y()- MY
        )

        w.dJ(mJoint);
        mJoint=null

    }

    }

}

makeWallsPinball=function(){


    bii(10, 300, 20, 1200) //left
    bii(990, 300, 20, 1200)//right
    bii(300, 0, 3000, 20)//top

   // bii(300, 590, 3000, 20)//bottom
}

SLINGSHOT=function(){


handleJointsAlt = true


    mW({
        w:'makeWallsFull',
        g:0
    })

    bbb=ba(300,300,30).lD(4).aD(10)
    ba(300,300,10).lD(4).aD(10);
    ba(300,300,10).lD(4).aD(10);
    ba(300,300,10).lD(4).aD(10)
   // ba(300,300,30).lD(4).aD(10)

}




