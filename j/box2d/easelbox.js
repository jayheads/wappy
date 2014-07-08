


makeMe=function(){
    p = bi(100, 100, 60, 110)
    p.direction = 1
    p.dr = function (a) {
        if (U(a)) {
            return p.direction
        }
        p.direction = a;
        return p}
    p.speed = 40
    p.mv = function (n) {
        if (n == '-') {
            return p.mv(-p.speed)
        }

        n = N(n) ? n : p.speed

        if (p.dr() == "1") {//p.x(p.x()+n)

//p.aI(3,0)

            p.lV(10, 0)
        }
        else {//p.x(p.x()-n)

            //p.aI(-3,0)
            p.lV(-10, 0)
        }


        return p
    }
    p.gFL().SetFriction(1)
    bindr('me', p)
}




makeTim=function(n){

    if(U(n)){  var b=ba()

        bindr('guy', b,.3)
   return b }



    _t(n,function(){

        var b=ba()
        bindr('guy', b,.3)

    })


}


control=function(p){

    kD('l',function(){p.dr(0);p.mv()})
    kD('r',function(){p.dr(1); p.mv() })
    kD('u',function(){
        if(p.dr()==1){p.aI(5,-12)}
        if(p.dr()==0){p.aI(-5,-12)}})


return p}

SAVETIM=function(){makeWorld() // s.b('me', function(mm){m=mm.rgc('+').sxy(.4).rt(6);s.t(function(){m.xy(p.x(),p.y())})})
    makeTim(10);  control(p)}



PLAYER=function(){makeWorld() // s.b('me', function(mm){m=mm.rgc('+').sxy(.4).rt(6);s.t(function(){m.xy(p.x(),p.y())})})

    makeTim(3)

    kD('l', function(){p.dr(0);p.mv() })
    kD('r',function(){ p.dr(1); p.mv() })
    kD('u',function(){

        if(p.dr()==1){p.aI(5,-12)}
        if(p.dr()==0){p.aI(-5,-12)}  })

    kD('d',function(){p.dr(1); p.mv() })

}
POOl=function(){z()

    var w=boxMouseSetup({g:0})


    setupDebugDraw()
    setFixtures()



    bii(10, 300, 20, 460) //left


    bii(990,300, 20, 460)//right


    bii(250, 0, 400, 20)//top
    bii(730, 0, 400, 20)//top

    bii(250, 590, 400, 20)//b
    bii(730, 590, 400, 20)//b




    makeShapeOnDblClk()
    //makeMe()
    //makeTim(500)

}

SHIPBOX=function(){z()

    var w=boxMouseSetup({g:0})


    setupDebugDraw()
    setFixtures()



        bii(10, 300, 20, 460) //left


    bii(990,300, 20, 460)//right


    bii(250, 0, 400, 20)//top
    bii(730, 0, 400, 20)//top

    bii(250, 590, 400, 20)//b
    bii(730, 590, 400, 20)//b




    makeShapeOnDblClk()
    //makeMe()
    //makeTim(500)

}


RAGD=function(){makeWorld()


    w.cJ(spring(
        b11=ba(100,100,30),
        b22=ba(100,200,40)
    ))


    w.cJ(rod(
        b33=bi(100,400,30),
        b44=bi(100,500,40)
    ))



    makeMe()
    w.cJ(spring(b11,p))

    w.cJ(spring(b33,p))




}