DB=function(x,y){
    x=N(x)?x:300
    y=N(y)?y:100

    var b= bDf(dB)


    b.xy(x/30,y/30)

return b}
SB=function(x,y){
    x=N(x)?x:300
    y=N(y)?y:100
    var b=bDf(sB)
    b.xy(x/30,y/30)

    return b}

newDB=function(x,y){

    return w.a(DB(x,y))

}



newSB=function(x,y){
    return w.a(SB(x,y))}



SCALECIRC=function(){z()
    boxMouseSetup()
    setupDebugDraw()
    makeGround2()
    makeShapeOnDblClk()


    r=50
    x=400
    y=440
    v={x:0,y:0}

    f1=function(){
        fd=fDf().s(cSh(r/30))
        a=newDB(x,y)
        a.lV(v)
        f=a.cF(fd)}
    f2=function(){
        a.dF(f)
        r+=1
        x=a.x()
        y=a.y()

        v=a.lV()
        f1()
    }

    f1()
    I(f2,400)






}





