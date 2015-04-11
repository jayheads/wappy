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