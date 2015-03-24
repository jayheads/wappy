

// OLD:
b2d.marioWorld=function(){
    return  b2d.W({
        W: 600,
        H: 300,
        g: 400,
        w:0
    })
}
b2d.miniMarioWorld=function(){
    return  b2d.W({W: 600, H: 300, g: 400,
        w:  b2d.miniWalls
    })
}
b2d.level = function(){
    w = b2d.marioWorld()
    w.marioWalls()
    return p= w.mario()
}

b2d.levelScrollX=function(){
    b2d.level()

    w.right.kill()

    w.s.XY(300,150)
    w.s.rXY(300, 150)

    p.followX(600, 400)


    w.debug()}
b2d.levelScrollY=function(){b2d.level()

    w.s.XY(300, 150).rXY(300, 150)
    p.followY(600, 400)
    w.debug()
    right.kill()

}
b2d.levelScroll=function(){
    b2d.level()
    w.s.XY(300, 150).rXY(300, 150)
    p.follow(600, 400)
    w.debug()
}
b2d.levelWarp=function(){

    w = b2d.W({
        W:600,
        H:300,
        g:4,
        w:0})

    p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 )


    w.debug()

}
b2d.levelSpace=function(){

    //gotta make guy heavier
    //thrust is good with grav 10 !!!!
    // , walls:b2d.miniWalls

    w = b2d.mW({W:600,H:300,g:0,w:0
    }).debug()
    p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 ).follow(300, 150)
    _.times(30, function(){var x,y
        x= (Math.random() * 1000) - 500
        y = (Math.random() * 800) - 400
        w.circ(x, y, 2,'white').den(0).rest(2)
    })

}

b2d.levelJet=function(){

    var width=600,
        height=300,
        gravity=10

    w = b2d.mW({

        W:width,
        H:height,
        grav:gravity,
        walls: b2d.miniWalls


    })

    floor = w.rect(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
    right = w.rect(0, height / 2, 40, height, 'pink').stat().K('rightWall').fric(.5).rest(.5)


    p= w.player(2.5,'thrust')
    //p.angDamp(100)


    p.Y(200).horizCenter().den(1).fric(.2).rest(.2)



}

b2d.levelAutoScroll=function(num){
    num=num||4
    b2d.level()
    right.kill()

    setup=function(){
        score=0
        p.XY(150, 100)
        p.linVel(0,0)
        w.s.XY(0,0)}

    setup()
    cjs.tick(function(){
        w.s.X(num,'-').pen(score++)
        if( p.relPos() < -100 ){setup()}})

    w.debug()
}



b2d.poly2= function(wd, ht, xy, ang,ang2){//b2d.polyDef=b2d.polyFixt=pFx=
    var g= G(arguments),
        fixt

    wd=g[0];
    ht=g[1];
    xy=g[2];
    ang=g[3];
    ang2=g[4]


    if( A(wd) ){
        return b2d.Arr.apply(null, arguments)
    }
    //if(b2d.isShape(wd)){fixt.shape = wd; return shape}
    //you can make a poly
    wd=wd||100

    ht=N(ht)?ht:wd

    fixt = b2d.fixt(  b2d.polyH( wd, ht, xy, ang, ang2)

    )




    fixt.density=1
    fixt.friction=.2
    fixt.restitution = .2
    if(g.n){fixt.isSensor=true}
    return  fixt

}


