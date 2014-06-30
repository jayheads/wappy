EASBOX=function(){z()


    //the stage
    s=St('y',800,600).a()
    s.ob.canvas.id='canvas'

    SCALE=30

    //setup physics
    w=bW(bV(0,50),true)

    bD=bDef().t(sB).p(400/SCALE, 600/SCALE)

    fD=fDef().d(1).f(.5)
    fD.shape=poly()
    fD.sab(400/SCALE,20/SCALE)

    w.a(bD,fD)

    w.sdd(b2DD().ss(xid()).sds(30).sfa(.5).slt(1).sf(shB||jB) )

    s.t(function(){
       $l('tick!')
        w.st(1/60,10,10).ddd().cf()


    })


    makeShapeOnDblClk()
}





EASBOX1=function(){z()

        var mX,mY,
            mDown,
            selectedBody,
            mouseJoint,
            cvPx

    goRight=true


    s=St(c=sCan().id('canvas').wh(800,600).a())

    s.bm('me', function(bm){m=bm

            SL(m)

            s.t(function(){

                if(goRight){m.x(10,'+')}else{m.x(10 ,'-')}
               })
            s.t(function(){
                if(m.x()>500){goRight=false}
                else if(m.x()<0){goRight=true}
            })
            s.t(function(){
                m.x(r.x())
                m.y(r.y())
            })





        })

    x=xx(c)

    s.ob.autoClear=false


    oMM=function(e){
        e=sE(e)
        mX=(e.cx-cvPx.x)/30;
        mY=(e.cy-cvPx.y)/30}

        w=bW(bV(0,40),true)



    s.t(function(){


        setupMouse=function(){

            if(mDown && !mouseJoint){
                var body=getBodyAtMouse(mX,mY)
                if(body){
                    var md= b2MJD ()
                    md.bodyA=w.ggb()
                    md.bodyB=body
                    md.target.Set(mX,mY)
                    md.cc(true).mf(300*body.GetMass())
                    mouseJoint = w.cj(md) //mJ = //world createJoint crJ
                    body.SetAwake(true)//body sAw
                }}


            if(mouseJoint){

                if(mDown){
                    mouseJoint.SetTarget( bV(mX,mY) )} //sTg}

                else{

                    w.dj(mouseJoint)
                    mouseJoint=null}}
        }

        setupMouse()

        w.st(1/60,10,10).ddd().cf()

    })

    gEP=getElementPosition=function(elem){

            var tagname='',   x=0,y= 0,e=elem

            while(
                O(e)&&D(e.tagName)){

                y+=osT(e);
                x+=osL(e)
                tagname=uC(e.tagName)
                if(tagname=='BODY'){e=0}
                if(O(e)){if(O(osP(e))){e=osP(e)}}}
            return {x:x,y:y}}


    cvPx=getElementPosition(did())



    dL('d',function(e){
            mDown=true
            oMM(e)
            dL('m',oMM,true)},b1)
    dL('u',function(){

            dR('m',oMM,true)

            mDown=false
            tUd(mX,mY)},true)




        w.sdd(
            debugDraw=b2DD().ss(
                xid()
            ).sds(30).sfa(.5).slt(1).sf(shB||jB) )


    makeGround()

    r=makeStructure()


    //makePlatform()
    //addTenShapes()
    makeShapeOnDblClk()
    //ball=Ball()

}



EASBOX0=function(){z()

    c=sCan().id('canvas').wh(800,600).a()

    s=St(c)

    s.bm('me', function(bm){
        m=bm


        SL(m)

        s.t(function(){ m.x( 1,'+') })

    })


   makeShapeOnDblClk()

}