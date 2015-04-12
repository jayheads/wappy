w= b2d.World.prototype


b = b2d.Body.prototype


b.dwp = function(x,y){var b=this, g=G(arguments)//=b.dotWorldPoint

    w.dot( b.wP(x,y) )

    if(g.p){cjs.tick(function(){
        w.dot( b.wP(x,y) )
    })}

return b}

w.chalk=function(){var w=this

    w.s.chalk.apply(w.s,arguments)
    return w


}



w.dot=function(col,x,y){
    var w=this,
        g=G(arguments),
        col=g[0], x=g[1], y=g[2]


    if(g.m){
        w.dot(col,x,y); w.dot(col,x,y,'+')
    }

    if(g.p){

        if(!S(col)){y=x;x=col;col='b'}
        w.hud.dot(col,x,y)
        //w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
    }

    else {
        if(!S(col)){y=x;x=col;col='w'}

        w.s.dot(col,x,y)
    }




    return w}

w.show=function(showWhat){var world=this, what


    I(function(){

        what =  F(showWhat)?showWhat(world): window[showWhat]
        what =   F(what)? what(): what
        world.pen( what )

    }, 200)

    TEST=function(){w=b2d.W()
        num = 0
        w.show( function(){return num} )}

}

w.pen=function(){var w=this

    w.s.pen.apply(w.s, arguments)

    return w}


w.fadeTitle=function(text){text = text || 'no text provided, yo'

    setTimeout(function(){

        t= w.s.text(text, 50, 'white', 600, 100)
        t.tween([{a:0, sxy:0}, 2000])
        setTimeout(function(){ t.remove() }, 1000)

    }, 500)

    return this}
w.flash=function(){

    this.s.flash.apply(this.s, arguments)

    return this}



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

