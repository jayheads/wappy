w=b2d.World.prototype
b=b2.Dynamics.b2Body.prototype

b.isConnected=function(){var res, b=this
    return A(b.webs) &&
        _.findWhere(b.webs, {connected:true} )

}
b.bulRight=function(x,y){var b=this,w=b.W()
    var bul=w.circ(
            b.X()+80,
            b.Y()-20,
        6,
        'w')


    if(N(y)){bul.I(x,y)}

    return b}
b.bulLeft=function(x,y){var b=this,w=b.W()
    var bul = w.circ(b.X()-80, b.Y()-20, 6, 'w')
    if(N(y)){bul.I(x,y)}
    return b}
b.getTime = function(){
    var b=this,  T =  b.shotClock()
    b.shotClock.reset()
    return T}
b.getForce = function(){var b=this, T,F
    T = b.getTime(),
        F =  (T>2500)?2000
            :(T>500)?T-500
            :0
    F= F/30
    if(F>66){F = 66}
    return F}
b.shootRight=function(){var b=this, F = b.getForce()
    b.bulRight(-F, 100-F*1.5)}
b.shootLeft=function(){var b=this, F=b.getForce()
    b.bulLeft(F*1.5-100, -F)}



w.webMe=function(x,y){var w=this
    var b= w.addMe(4).XY(x,y).rest(0).den(.1).fric(100).fixRot().K('player')
    sw = cjs.stopWatch()
    return b}

w.ropePiece = w.distLink=function(x, y){var w=this
    //link for distance ropes

    return w.D(x,y,'w',3,5).aD(10).rest(0)
}




w.web=function(b, K){
    $l('w.web') //K=shouldKill

    var w=this,web

    web={
        player: b,
        connected: false,
        pieces:[]
    }



    web.Piece= function(x,y){
        var web=this, p


        p = w.ropePiece(x,y).K('webPiece')

        p.add = function(p){
            return web.addPiece(this, p)
        }

        return p

    }


    web.addPiece=function(toWhat,p){
        w.tightDist(toWhat,p)
        this.pieces.push(p)
        return p
    }
    web.delPieces= function(){_.e(this.pieces, function(i){i.kill()}); this.pieces=[]}
    web.die= function(){var e=this
        e.delPieces()
        e.player.webs = _.reject(e.player.webs, function(w){return e===w})}
    web.attach= function (toWhat) {
        this.connected = true
        w.tightDist(toWhat, this.ball)
        return this}
    if(K){
        setTimeout(function(){
            if(!web.connected){web.die()}
        },_.tN(K,1000))
    }
    return web
}



b.web=function(K){
    //when a web is created it gets web.connected=false
    //when it hits certain things and forms a joint, then connected->true
    //then it just dies

    //pressing DOWN should release the most recent of the connectedWebs
    //note: non connected Webs can be shot off!

    var p=this,b=this,w=b.W(),
        y=b.Y()-100,
        x=b.X(),
        piece, web

    b.webs = b.webs||[]
    web = w.web(b,K)

    piece = web.addPiece(b, web.Piece(x,y))   //add first piece to player
    _.t(9, function(i){ piece = piece.add(web.Piece(x,y-i)) })  //add rest to each other
    piece.add(
        web.ball = w.circ(x, y-100, 10, 'd').K('webBall')
            .den(1).rest(0).fric(100))
    b.webs.push(web)
    return web
}





TESTWB=function(){W()

    $l('testwb')

    b = w.D(600,300)
    web=w.web(b)
    p=web.Piece()
    web.addPiece(b, p)


}
TWEB=function(){W()

    b  = w.S(600,300, 100)

    $l('-----')
    b.web()

}

WEBMAN = function(){

    W({ g:30 ,w:'_'})

    w.goal(1800, 0)

    block(400, 100)
    block(800, 0)
    block(1100, -50)
    block(1300, -200)
    function block(x,y){return  w.rect(  x,  y,    50, 50 ,'t' ).stat().K('randomRect')}

    p = w.webMe(394,530).den(.14).fric(1)
    p.canWeb = true
    $.key({
        r:function(){

            if(cjs.Keys.down){
                p.didShoot = true
                if(!F(p.shotClock)) {p.shotClock=cjs.stopWatch()}}

            else {
                if (p.isConnected()){p.F(100,0)}
                else {p.I(8, 0)}}},
        l:function(){
            if(cjs.Keys.down){
                p.didShoot = true
                if(!F(p.shotClock)) {p.shotClock=cjs.stopWatch()}}
            if(p.isConnected()){p.F(-250,-50)}else {p.I(-8,0)}},

        u: function(){var web, ball, num, firstWeb= _.f(p.webs), iX, iY

            if(p.canWeb) {$l('p.canWeb')

                if (p.isConnected()  && !p.webs[1]){
                    web = p.web(3000)
                    ball = web.ball.XY(p.X(), p.Y() - 100)
                    num = Math.abs(p.linVel().x * 2) // p.vX | vY | vR
                    iX = cjs.Keys.right ? num : cjs.Keys.left ? -num : 0
                    iY = -30
                    ball.I(iX, iY)
                }

                else { $l('else')

                    if( !p.webs || !p.webs[0] ){$l('w')


                        web = p.web(3000)
                        ball = web.ball.XY(p.X(), p.Y() - 100)
                        if(cjs.Keys.left){ball.I(-30, -40)}
                        else if (cjs.Keys.right){ball.I(30, -40)}
                        else {ball.I(0, -70)}
                    }

                }}

            p.canWeb = false

        },


        R:function(){
            if( A(p.webs) && p.webs[1] ){  p.webs[1].die()   }
            if(cjs.Keys.down){p.shootRight()}},
        L:function(){
            if( A(p.webs) && p.webs[1] ){  p.webs[1].die()   }
            if(cjs.Keys.down){p.shootLeft()}},
        U: function(){
            var connected = _.reject(p.webs, function(web){return !web.connected})
            if( A(connected) && connected[0] && connected[1]   ){  _.first(connected).die()  }
            p.canWeb = true
            p.shotForce=0},
        D:function(){
            if(!p.didShoot){if(p.webs[0]){_.first(p.webs).die()}}
            p.didShoot=false}
    })
    w.beg(function(cx){var fixt, web
        if((fixt = cx.with('webBall','randomRect'))){
            //p.canWeb=true
            var ball= fixt[0].body(), rect = fixt[1].body(),
                web = _.findWhere(p.webs, {ball: ball})
            if(web && !web.connected){web.attach(rect)}}})
    w.s.tickX(function(){return 600- p.X()})
    w.s.tickY(function(){return 510- p.Y()})

}