w.oMD=function(){
    var c = $(w.s.HUD.canvas)

    c.mousedown(function(e){

        o.dx = e.clientX-w.s.x

    })

}
// world mouse down vs canvas mouse down!!!
// canvas mouse down just uses $.oMD
w.md= function(l){var w=this
    $(w.hud.canvas).mousedown(function(e){

        l({x:w.mx, y:w.my})
    })
    return w}
w.mu= function(l){var w=this
    $(w.hud.canvas).mouseup(function(e){

        l({x:w.mx, y:w.my})
    })
    return w}
w.mm= function(l){var w=this

    $(w.hud.canvas).mousemove(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.m$= function(l){var w=this

    $(w.hud.canvas).click(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}
w.m$$= function(l){var w=this

    $(w.hud.canvas).dblclick(function(e){

        l({x:w.mx, y:w.my})
    })

    return w}


w.dev=function(){var w=this,
    d = $.div('t', 400,600).abs(1200,0).A(),
    d1 = $.div('x', 400,600).abs(1600,0).A()

    d.A(  $.h1('world stats')  )
    d1.A(  $.h1('body stats')  )

    return w}
w.mark=function(){var w=this
    w.C('z')
    _.times(50, function(i){w.S(i*200, 0, 'w', 1,10000).sensor(true)})
    _.times(50, function(i){w.S(0, i*200,   'w', 10000,1).sensor(true)})
    return w}
w.dbLayers=function(){var w=this

    w.dr( 75,75,150,150, '-')
    w.dr( 140,0,20,300)
    w.dr( 0,150,300,20)
    w.dr( 100,100,100,100, '+')
    return w}
w.dbCross=function(x,y){var w=this, c=w.cent()


    x=N(x)?x: c.x
    y=N(y)?y: c.y


    w.dr('t', -10+x,  -140+y, 20,300, '-')

    w.dr('t', -150+x,  -10+y, 300,20, '-')

    w.dot('r', x,y)
    return w


}
w.back=function(){var w=this,

    back = w.s.back

    if(!back.x){
        back.x=10000
        back.y=10000
    }
    else {
        back.x=0
        back.y=0
    }

    return w}
w.HUD=function(){var w=this,

    back = w.s.HUD

    if(!back.x){
        back.x=10000
        back.y=10000
    }
    else {
        back.x=0
        back.y=0
    }

    return w}
w.lay=function(){var w= this

    w.back().HUD().db()

    return w}


DBLAYERS=function(){
    W([1200,600,2400,1200], {  g:0 })


    w.dbLayers()

}

MARK=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit




    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0}).mark()


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    w.S(1200,600,'w',[[400,500,'-']])



    y = w.ship(200,200).rot(120).damp(1,10)

    w.track(y, 600, 300)

    w.dot(600,300)
    w.hud.dot(600,300)

    w.dot(1200,600)
    w.hud.dot(1200,600)

    y.XY(100,600).rot(90).lD(0).lV(4)


}
