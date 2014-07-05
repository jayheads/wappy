





makeWorld=function(a){

    if(a!='-'){z()}

    a=ob(a)

    var w=boxMouseSetup(a)
    setupDebugDraw()
    setFixtures()
    makeWalls()
    makeShapeOnDblClk()

    return w}
