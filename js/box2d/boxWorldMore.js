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



w.greenGuy = function(x,y){
    x=N(x)?x:100; y=N(y)?y:100

    var that=this,
        size=20,

        b= that.dyn(x,y).K('greenGuy'),

        centFix = b.rect(20,20).K('center').rest(2),

        f = b.rectSensor(size, size)

    setInterval(function(){f.kill(); size += 4; f= b.rectSensor(size, size)}, 500)

    that.beg(function(cx){var fix

        fix = cx.with('center', 'bullet')

        if(fix){
            if(cx.A() == centFix){size=20;b.linVel(0).angVel(0)}
            if(cx.B() == centFix){size=20;b.linVel(0).angVel(0)}
        }
    })


    return b}
SLICK=function(){ //no buffer to worry about //it lets u gradually move past the target point.. until hits limit




    W([1200,600,4800,1200],{g:0,t:0}).db().dev().mark().dot(600,300,'*').dot(1200,600,'*')
    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    w.S(1200,600,'w',[[400,500,'-']])
    y=w.ship(1250,600).damp(1,10).rot(90).lD(0)
        .rot(120).lV(1)
    w.track(y, 600, 300, '!')
    w.click(function(){if(y.lV().x){y.lV(0)} else {y.lV(1)}})
}

/*


}*/
w.front=function(i){var w=this
    if(b2d.isFixt(i)){
        i = i.img? i.img:  i.sprites? i.sprites[0] : false}
    if(i){w.s.setChildIndex(i, w.s.getNumChildren()-1)}
    return w}
w.back=function(i){var w=this
    if(b2d.isFixt(i)){
        i = i.img? i.img:  i.sprites? i.sprites[0] : false}
    if(i){w.s.setChildIndex(i,0)}
    return w}


w.gg = w.greenGuy = function(x,y){var w=this,
    x=N(x)?x: w.hW,
    y=N(y)?y: w.hH,
        z = 20,
        gG = w.D(x,y, 'gg'),

        core = gG.RECT(25,25),

        shell = gG.RECT(z, z, '-')

    shell.bindSprite(
    shell.img=w.s.RECT('g', z, z))

    core.bindSprite(
       core.img= w.s.RECT(  'o', 25, 25)
    )




    // core = gg.rect(20,20).K('core'),
    // core.C('z')
    // .K('core')



    I(500, grow)
    w.beg(beg)

    return gG

    function beg(cx){
        cx.with(core, 'pop', function(){

            z=0
             gG.lV(0).aV(0)
        })}

    function grow(){z += 4

        shell.kill();

        shell = gG.RECT(z, z, '-')

        shell.bindSprite(

            shell.img = w.s.RECT('g',z,z)

        )
        w.back(shell)
    }



}




GREEN=function(){


    W({//w:0,
    w:'@',
        g:0
    }).C('w')

        y= w.ship(400,200).K('pop').img('me')

    //mem leak?

    //I(3000, function(){
    w.gg(300,300)
   //})

    w.gg(400,400)
    w.gg(500,500)

}

