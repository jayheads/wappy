



makeWallsTiny=function(){

    bii(10, 300, 20, 600) //left
    bii(990, 300, 20, 600)//right
    bii(300, 0, 1200, 20)//top
    bii(300, 590, 1200, 20)//bottom
}


addShapes=addTenShapes=mBodies=function(n){
    _t(n||10,function(){ w.a(dBD().xy(), fix()) })}





Ball=function(x,y){var g=G(arguments)

    x=g[0]||100
    y=g[1]||100

    var b={}

    bD=g.n? sBD(): dBD()

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








boxMouseSetupNoGravity=function(cb){var slBody

    mJoint=0
    mDown=false
    makeStage(600,800)
    w=bW(bV(0,0),true) //gravity, and allowSleep
    startLoop(cb)
    checkMouseDown()}

setupMouse=function(){var b

    if(mDown&&!mJoint){

        if(b=gBAM(mX,mY)){

            mJoint=mouseJoint(b)


        }}


    if(mJoint){
        $l('jjj')
        if(mDown){
            m=mJoint
            mJoint.sT(bV(mX,mY))

        }

        else{
            w.dJ(mJoint)
            mJoint=null
        }}
}

bindr=function(im,spr,sxy,rt){
    sxy=N(sxy)?sxy:.4

    rt=N(rt)?rt:6

    s.b(im, function(b){

        b.rgc('+').sxy(sxy).rt(rt)

        s.t(function(){

            b.xy(  spr.x(), spr.y() )

        })})}


fix=function(){

    return fD.s(

        yn()?  pSh(

                r1()*30,
                r1()*30

        )

            : cSh( r1()*30 )
    )

}
