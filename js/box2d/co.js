b=b2d.Body.prototype


w=b2d.World.prototype



w.co = function(co){var w=this
        w.AddController( co )
        return w}
w.acc = function(){var w=this


    b2d.acc = function (x, y) {
        var co = new b2d.ConstantAccelController
        if (N(x)) { co.V(x,y) }
        return co}

    var  co = b2d.acc.apply(b2d, arguments)

    w.co(co)

    return co
}
w.buoy = function(){

    b2d.buoy = function (nX, nY, lD, aD) {
        var co = new b2d.BuoyancyController

        nX = _.tN(nX)

        nY = _.tN(nY,-1)

        lD = _.tN(lD,2)

        aD = _.tN(aD,1)

        return co.norm(nX, nY).drag(lD, aD)

    }

    var  co  =  b2d.buoy.apply(null, arguments)


    this.co(   co  )

        return co}
w.force = function(){var w=this
    b2d.force = function (x, y) {
        x = N(x) ? x : 0;
        y = N(y) ? y : 0

        var co = new b2d.Dynamics.Controllers.b2ConstantForceController()

        co.V(x, y)

        return co
    }
        var  co  =  b2d.force.apply(null, arguments)

        w.co( co )

        return co}
w.tensor = function(){
    b2d.tensor = function (a, b, c, d) {


        var co = new b2d.Dynamics.Controllers.b2TensorDampingController()

        return co

    }
        var  co  =  b2d.tensor.apply(null, arguments)

        this.co(   co  )

        return co}
w.grav = function(g, wantFasterR1){
    b2d.grav = function (a, b, c, d) {
        var co = new b2d.Dynamics.Controllers.b2GravityController()
        return co
    }

        var  co  =  b2d.grav.apply(null, arguments)
        if(N(g)){co.g(g)}
        if(wantFasterR1){co.r1()}
        this.co(co)

        return co}
w.bindCo=function(){var args=arguments

        this.beg(function(cx){

            cx.bindCo.apply(cx,args)

        })

        return this}



co = b2d.Dynamics.Controllers.b2Controller.prototype



co.body = function (onOrMoreBodies) {
        var co = this

    _.e(arguments, function (b) {
            co.AddBody(b2d.toBody(b))
    })

    return this

}



co.remove = function (b) {var co=this
    co.RemoveBody(b)
    return co
}

co.next = function () {var co=this
        return co.GetNext()
}

co.wor = function () {var co=this
    return co.GetWorld()
}

co.bods = co.bodies = co.list = co.bodyList = function () {return this.GetBodyList()}



co.step = function () {
        this.step();
        return this
    }

b.cancel = function (co) {var b=this

    if (O(co)) { co.remove(b) }

    else if(O(b.co())){b.co().controller.remove(b)}

    return b}
b.switchTo = function (co) {var b=this

    co.body( b.cancel() )

    return b

}
b.co = function (co) {var b=this, w= b.W()
    if(U(co)){return b.GetControllerList()}
    w.co( b )  // :)
    return b
}

b.bc = b.broadcast = function (fn) {
    var b=this, origE, e, nextE

    if (fn == 'kill'){fn = function(b){b.kill()}}

    origE = b.co()

    if (!origE) {return b}


    e = origE.nextBody
    while (e) {
        nextE = e.nextBody
        fn(e.body)
        e = nextE }



    e = origE.prevBody
    while (e) {
        nextE = e.prevBody
        fn(e.body)
        e = nextE }



    return b

}



//acc
    aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
    aCo.V = function (x, y) {//getter is a waste!  counterproductive... think about it! :).. but for consistency..??? nah i can do better

        //applies 'gravity' by default
        this.A = U(x) ? V(0, 10) : V(x, y)
        return this
    }


//buoy

bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype

bCo.norm = function (x, y) {
        this.normal.Set(x, y);
        return this
    }
bCo.os = function (os) {
        this.offset = os;
        return this
    }
bCo.useDen = function (u) {
        this.useDensity = u;
        return this
    }
bCo.den = function (d) {
        var g = G(arguments), d = g[0]
        this.density = d;
        if (g.N) {
            this.useDen(true)
        }
        return this
    }
bCo.linDrag = function (lD) {
        this.linearDrag = lD || 0;
        return this
    }
bCo.angDrag = function (aD) {
        this.angularDrag = aD || 0;
        return this
    }
bCo.drag = function (lD, aD) {
        return this.linDrag(lD).angDrag(aD)
    }

//force

fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
fCo.V = function (x, y) {
        //applies 'gravity' by default
        this.F = U(x) ? V(0, 10) : V(x, y)
        return this
    }


//tensor
tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
tCo.axis = function (axis) {
        this.SetAxisAligned(axis)
        return this
    }



//grav
gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
gCo.g = gCo.grav = gCo.V = function (g) {var gco=this   //applies 'gravity' by default

    gco.G = _.tN(g,1)

    return gco

}
gCo.inv = function (inv) {
        this.invSqr = inv;
        return this
    }
gCo.r2 = function () {
        return this.inv(true)
    } //this is default
gCo.r1 = function () {
        return this.inv(false)
    }



CONTLIST=function(){//gives u a controller-edge, which is a body-controller pair
    //it is linked both to other bodies for that controller..
    //and to other controllers of that body!!!
    //lets focus on other bodies first....

    w = b2d.W({}).debug().C('p')
        .bindCo('co1','co2')
        .end(function(cx){var fixt
            if(fixt=cx.with('co2')){fixt.cancel()}})

    co1 = w.acc(0, -50)
    s1 = w.sensorBucket(320, 300, 'co1')
    co2 = w.acc(0, -50)
    s2 = w.sensorBucket(700, 300, 'co2')

    w.circ(150,100,30,'w').den(1)
    w.circ(200,100,30,'d').den(1)
    w.circ(250,100,30,'r').den(1)
    w.circ(350,100,30,'g').den(1)
    w.circ(400,100,30,'o').den(1)
    w.circ(450,100,30,'w').den(1)

    setTimeout(function(){y=w.ship(300,50)
        setInterval(function(){
            w.circ(300,100,10,'y')
            w.circ(760,100,10,'b')
            y.bc('kill')}, 1000)}, 500)

}
UPDOWN=function(){
    W({g:0}).C('g')

    y = w.ship(300, 50).linDamp(5)


    co1 = w.acc(0, -50)
    co2 = w.acc(0, 50)

    s1 = w.box(250, 300, 600, 600, 'o', '-').K('co1')
    s2 = w.box(950, 300, 600, 600, 'o', '-').K('co2')


    w.bindCo('co1', 'co2')


    w.end(function (cx) {var fixt

        if(fixt =  cx.with('co1')){
            fixt.cancel()
        }

        if(fixt =  cx.with('co2')){
            fixt.cancel()
        }

    })

    _.times(20, function(){

        w.ball(300, 300, 30,'b')
    })

}
GRAVTRAP=function(){W({g:0,w:0}).C('e').Y(300,300).pen('welcome to grav controller')


    gCo = w.grav().body(y,

        w.D(320,300, 'b', 20).den(1),
        w.D(300,320, 'r', 30).den(1),
        w.D(340,300, 'x', 40).den(1),


        w.D(300,340, 'c', 50).den(1),

        w.D(320,320, 'l', 60).den(1)

    )






}

GRAVR=function(){W({g:0, w:0}).C('e').Y(300,200).pen(
    'welcome to grav controller - top balls r1, bottom r2(default)')



    r = 40

    gCo = w.grav(1, true).body(

        w.D(100,600, 'b', r).den(1),
        w.D(200,500, 'r', r).den(1),
        w.D(300,400, 'x', r).den(1),
        w.D(400,300, 'c', r).den(1),
        w.D(500,200, 'l', r).den(1),
        w.D(600,100, 'l', r).den(1)
    )

    gCo2 = w.grav().body(

        w.D(100,600, 'b', r).den(1),
        w.D(200,500, 'r', r).den(1),
        w.D(300,400, 'x', r).den(1),
        w.D(400,300, 'c', r).den(1),
        w.D(500,200, 'l', r).den(1),
        w.D(600,100, 'l', r).den(1)

    )




}
GRAVG=function(){

    W({g:0, w:0}).C('e').Y(100,100)

    w.pen(

        'welcome to grav controller - top has g:2, bottom has g:1 (default)')

    r = 40

    gCo = w.grav(2).body(

        w.D(100,600, 'b', r).den(1),
        w.D(200,500, 'r', r).den(1),
        w.D(300,400, 'x', r).den(1),
        w.D(400,300, 'c', r).den(1),
        w.D(500,200, 'l', r).den(1),
        w.D(600,100, 'l', r).den(1)
    )

    gCo2 = w.grav().body(

        w.D(700,600,'b',r).den(1),
        w.D(800,500,'r',r).den(1),
        w.D(900,400,'x',r).den(1),
        w.D(1000,300,'c',r).den(1),
        w.D(1100,200,'l',r).den(1),
        w.D(1200,100,'l',r).den(1)

    )




}


GRAVGR=function(){

    W({g:0,w:0}).C('e').Y()//.pen( 'welcome to grav controller - top has g:1,r:1, bottom has g:2,r:2 -- pinks move OUTWARDS only on bottom?')

    //y= w.yShip(300,200).thrustControl().shootOnSpace().den(1).linDamp(10)

    r=40

    gCo = w.grav(1,true).body(
        w.ball(100,600, r, 'b').den(1),
        w.ball(200,500, r, 'l').den(1),
        w.ball(300,400, r, 'x').den(1),
        w.ball(400,300, r, 'x').den(1),
        w.ball(500,200, r, 'l').den(1),
        w.ball(600,100, r, 'b').den(1) )


    gCo2 = w.grav(4).body(
        w.ball(700,600, r, 'b').den(1),
        w.ball(800,500, r, 'l').den(1),
        w.ball(900,400, r, 'x').den(1),
        w.ball(1000,300, r, 'x').den(1),
        w.ball(1100,200, r, 'l').den(1),
        w.ball(1200,100, r, 'b').den(1) )




}




FORCE=function(){w=b2d.W({g:0}).C('e')
    .pen('welcome to (const) force controller')
    fCo = w.force(1,0)
    aCo = w.acc(1,0)

    b=w.circ(100,100, 20, 'b').den(1)
    b1=w.circ(100,200, 40, 'b').den(1)

    x=w.circ(100,300, 20, 'x').den(1)
    x1=w.circ(100,400, 40, 'x').den(1)

    setTimeout(function(){
        w.C('d');

        fCo.body(b, b1)
        aCo.body(x, x1)

    },2000)



}
ACCVSFORCE=function(){w=b2d.W({g:0}).C('e')
    .pen('blue has constForce(1,0)  red has constAcc(1,0)')
    fCo = w.force(1,0)
    aCo = w.acc(1,0)

    b=w.circ(100,100, 20, 'b').den(1)
    b1=w.circ(100,200, 40, 'b').den(1)

    x=w.circ(100,300, 20, 'x').den(1)
    x1=w.circ(100,400, 40, 'x').den(1)

    setTimeout(function(){
        w.C('d');

        fCo.body(b, b1)
        aCo.body(x, x1)

    },2000)



}
TENSOR=function(){W().G(0).pen('welcome to tensor (damping) controller - the timing here is amazing!')

    co = w.tensor().body(

        w.D(100,100, 'r', 30).lV(10,20),
        w.D(500,500, 'b', 30).lV(-10,-20),
        w.D(300,300, 'g', 30).lV(-10,-20)
    )

}
TENSORNEVERSETTLE=function(){
    W().G(0).Y().pen('welcome to tensor (damping) controller')
    co = w.tensor()
    _.times(30, function(){
        co.body( w.B(400, 300,'w', 20).L(10,20,0)  )
    })

}
COEDGE=function(){W()

    w.rectStat(320,480,640,20)
    w.rectStat(320,340,320,20)
    w.rectStat(170,230,20,200)
    w.rectStat(470,230,20,200)
    w.rectSensor(320,245,280,170)

    co=w.buoy(0,-1,5,2).os(-6).den(2)

    cjs.tick(function(){

        w.each(function(b){if(b.isDyn()){

            // if(b.co()){ co.remove(b) }

            b.eachCx(function(cx){

                // if one is a sensor AND the other has no controllers
                // then add the other one to the controller

                // if(cx.A().IsSensor() && !cx.b().co() ){ co.body(cx.b()) }
                // if(cx.B().IsSensor() && !cx.a().co() ){ co.body(cx.a()) }

            })



        }})})

    // I(function(){

    b =  w.circ(300,40,8,'r').den(1)



    c= b.cx()




    // })


}
SENSORCONTROL=function(){W({g:3})

    w.S(300,300, 'o', [[40,40,'-']])
    w.S(540,300, 'o', [[40,40,'-']])
    w.S(780,300, 'o', [[40,40,'-']])


    y = w.ship(300,100).linDamp(2)

    aCo = w.acc(1000, -1000)

    w.beg(function(){  aCo.body(y)  })

    w.end(function(){  aCo.remove(y)  })

    //  The easiest approach to utilize the controllers is to create sensor fixtures
    // that test when a begin/end  event has occurred with a body.

    // In the beginContact method, add the body to the controller.
    // In the endContact method, remove the body.


}
COCHANGE=function(){W({g:10})//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=



    //gives u a controller-edge, which is a body-controller pair
    //it is linked both to other bodies for that controller..
    //and to other controllers of that body!!!

    //lets focus on other bodies first....


    s1 = w.sensorBucket(320,300, 's1')
    s2 = w.sensorBucket(700,300, 's2')

    co1 = w.acc(5, -5)
    co2 = w.acc(-5, 5)

    I(function(){
        aCo.body(
            w.D(300,100, 'y', 10),
            w.D(760,100, 'b', 10)
        )

    })


    setInterval(function(){
        b.bc() //default is to kill all in its 'controller-space' (except itself)
    }, 5000)



    w.beg(function(cx){


        cx.with('s1', function(){var f=this, b=f.B()
            b.cancel()
            co1.body(b)
        })

        cx.with('s2', function(){var f=this, b=f.B()
            b.cancel()
            co2.body(b)
        })

    })

    w.D(150, 100, 'w', 50).den(1)
    w.D(200, 100, 'd', 50).den(1)
    w.D(250, 100, 'r', 50).den(1)

    b= w.ship(100,500)

    w.D(350, 100, 'g', 50).den(1)
    w.D(400, 100, 'o', 50).den(1)
    w.D(450, 100, 'w', 50).den(1)

}
ACC=function(){W(0).C('z').Y()


    // Imagine that you have gusts of wind blowing sideways…  you can add your objects to a Contoller and have them pushed sideways…  then when the wind passes you could remove them from that controller.

    // now just add and remove bodies to the controller!!


    b = w.D(300, 300,'b', 50, 60).den(1)

    co = w.acc(-5, -5).body(b)

    added = true

    cjs.tick(function(){  b.F(10,10)  })

    I(function(){if(R()){

        if(added==true){
            added=false

            w.C('r')
            co.remove(b)
        }

        else {added=true
            w.C('g')
            co.body(b)
        }
    }

    },2000)






}
BUOY=function(){W(20).Y()


    w.S(320,480,'r', 640,20)
    w.S(320,340,'b',320,20)
    w.S(170,230,'g',20,200)
    w.S(470,230,'y',20,200)

    /*
     w.S(320, 245,'z',[

     [280,170,'-']

     ])*/

    b=w.S(320, 245,'z')

    b.rec({

        s:1, w:280, h:170, c:'b', o:.8 // <-nice opacity example

    })



    co = w.buoy(0, -1, 5, 2).os(-6).den(2)


    cjs.tick(function(){w.eachD(function(b){


        if(b.co()){ co.remove(  b  ) }

        for (var c=b.cx(); c; c=c.next){

            var cx=c.contact
            if(cx.A().IsSensor()&& !cx.b().co() ){
                co.body(cx.b())}
            if(cx.B().IsSensor()&& !cx.a().co()){
                co.body(cx.a())
            }
        }
    })})

    I(function(){w.D(300,40,'r',8).den(1)})


}

