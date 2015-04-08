w=b2d.World.prototype

// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'



b2d.dJ= b2d.distJ= function(){var g=G(arguments),
    jd=new b2d.Joints.b2DistanceJointDef()
    jd.init = function(a, b, aV, bV){var jd=this, g=G(arguments),o
        o=(O(g[0]) && !b2d.isBody(g[0]))?g[0]
            :{a:g[0], b:g[1], aV:g[2], bV:g[3]}
        o.aV=o.av?o.a.wC().add(o.av||V()):(o.aV||o.a.wC())
        if(o.bv){o.bV= o.b.wC().add(o.bv||V())} else {o.bV=o.bV||o.b.wC()}
        if(g.n){o.aV=o.aV.div(); o.bV= o.bV.div()}
        jd.Initialize(o.a,o.b,o.aV,o.bV); return jd}
    if(g[0]){jd.init(g[0],'-')}
    if(o.coll){jd.coll(true)}
    return jd}

w.dist = function(a,b, aXY,bXY, l,f,d){
    var w=this,g=G(arguments),jd,j,o
    o = (O(g[0]) && !b2d.isBody(g[0]))? g[0]
        :_.x({a:g[0],b:g[1]},O(g[3])?
    {av:g[2],bv:g[3],l:g[4],f:g[5],d:g[6]}
        :O(g[2])?{av:g[2],l:g[3],f:g[4],d:g[5]}
        :{l:g[2],f:g[3],d:g[4]})
    jd=b2d.dJ(o)
    if(o.coll){jd.coll(true)}
    j=w.J(jd).freq(_.tN(o.f)).damp(_.tN(o.d))
    if(N(o.l)){j.len(o.l)}
    return j}



DIST=function(){W()
    b = w.S(500,200,'r', 10)
    b2 = w.D(500,400,'g',100)
    j=w.dist(b,b2)
}





w.webMe=function(x,y){var w=this
    var b= w.addMe(4).XY(x,y).rest(0).den(.1).fric(100).fixRot().K('player')
    sw = cjs.stopWatch()
    return b}
w.ropePiece = w.distLink=function(x, y){var w=this
    //link for distance ropes

    return w.D(x,y,'w',3,5).aD(10).rest(0)
}
w.tightDist = function(piece, newPiece){var w=this
    return w.dist(piece,newPiece, 1, 1000,1000)
}



w.web=function(b, K){//K=shouldKill

    var w=this,web

    web={

        player: b,
        connected: false,
        pieces:[]

    }


    web.Piece= function(x,y){
        var web=this, b

        b = w.ropePiece(x,y).K('webPiece')

        b.add = function(b2){
            var b=this;
            return web.addPiece(b, b2)
        }

        return b
    }


    web.addPiece=function(b1,b2){var web=this
        w.tightDist(b1,b2)
        web.pieces.push(b2)
        return b2
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

    piece = web.addPiece( b, web.Piece(x,y) )   //add first piece to player


    _.t(9, function(i){

        piece = piece.add( web.Piece(x,y-i) )

    })  //add rest to each other


    web.ball = w.cir(x, y-100, 10, 'd').K('webBall').den(1).rest(0).fric(100)


    piece.add( web.ball )



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



SPACEZOOM=function(){


    w = b2d.W({//W:600, H:300,
        g:0,w:0})

    w.s.rXY(300,150)
    _.times(80, function(){var x,y
        x= (Math.random() * 2000) - 750
        y = (Math.random() * 1600) - 600
        w.circ(x, y, 4, 'white').den(0).rest(2).K('star')}) //stars


    p= w.player(200,200,2.5, 'thrust').Y(200).horizCenter().den(.4).angDamp(8).linDamp(.8)


    earth =  northStar= w.bump(200,200,100,'pink').den(1).rest(2).bindSprite('earth',.13).K('earth')


    setTimeout(function(){
        w.s.tweenLoop([{kx:8}, 1000], [{kx:0}, 1000] , [{ky:8}, 1000], [{ky:0}, 1000]      ) //  w.s.tweenLoop([{r: 360}, 10000])
        p.coll('star', function(){p.sprite.tween([{kx:40},100],[{ky:40},100],[{kx:0,ky:0},100])})
        earth.sprite.tweenLoop([{r: 360}, 10000])
        earth.sprite.tweenLoop([{kx:16}, 3000],[{kx:0}, 3000])
        earth.coll('star', function(){w.s.flash()})
    }, 300)

    w.dist({a:p, b:northStar,
        l:50, f:0.15,
        coll:true})

    scaleFunc = function(){var dx,dy,dst
        dx =    northStar.X()-p.X()
        dy =     northStar.Y()-p.Y()
        dst = Math.sqrt( (dx * dx) + (dy * dy) )
        dst =  300 /dst
        return dst>2?2:  dst <.3? .3: dst}

    keepGuyCentered=function(getScaleFunc){//removed but brought back for spacezoom
        //used in SCALING LEVEL
        //*******
        cjs.tick(function(){ if(O(p.sprite)){
            var x = p.X(),
                y = p.Y(), dif,

                scale = scaleFunc()
            w.s.sXY(scale)
            w.s.X(300 - ((x - 300) * scale)  )
            w.s.Y(150 - ((y - 150)  ) * scale )}})}

    keepGuyCentered(scaleFunc)

    setTimeout(function(){
        cjs.tick(function(){

            w.s.alpha =scaleFunc()*2

            earth.sprite.alpha = scaleFunc()
        })

    },1000)


}


w.distCollx=function(){var w=this, g=G(arguments)
    return w.dist({a:g[0],b:g[1],av:g[2],bv:g[3],coll:true})}
w.distCollxx=function(){var w=this,
    g=G(arguments)

    return w.J(b2d.dJ({
        a:g[0],  b:g[1],  av:g[2],   bv:g[3]
    }).coll(true))

}
w.rodx = function(a,b,l){var w=this
    return w.dist({
        a: a|| w.D(150,150,'b',50),
        b: b|| w.S(180,150,'w',50,50),
        l: _.tN(l, 200),
        coll:true
    })}


w.springx = function(a,b){var w=this;
    return w.dist({a:a|| w.D(150,150,'b',50),b:b|| w.S(180,150,'w',50,50), l:1, f:2 })}
