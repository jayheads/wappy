cjs.cap=function(n,m,M){
    if(U(m)){return n}
    return n<m?m:n>M?M:n}

// woo hoo scrolling module!
w=b2d.World.prototype
w.walls = function(wd,ht){

    var w = this, g=G(arguments)
    wd = N(g[0])?g[0]: 2400; ht=N(g[1])?g[1]:1200
    w.camLims=function(xm,xM,ym,yM){
        this._camLimX=[xm,xM]
        this._camLimY=[ym,yM]
        return this}

    hWd = wd/2
    hHt = ht/2
    w.roof=w.S(hWd, 0, 'y', wd,40)
    w.floor=w.S(hWd, ht, 'y', wd, 40)
    w.left=w.S(0, hHt, 'y', 40, ht)
    w.right=w.S(wd, hHt, 'y', 40, ht)
    w.w=wd; w.h=ht
    if(g.N){w.camLims(0,w.w-w.s.W(),0,w.h-w.s.H())}
    return this}
w.cam=function(x,y){var w=this
    w.camX=function(x){
        var lX = this._camLimX = this._camLimX||[0,0]
        if(U(x)){return -this.s.x}
        this.s.x = -cjs.cap(x,lX[0],lX[1])
        return this}
    w.camY=function(y){
        var lY = this._camLimY = this._camLimY||[0,0]
        if(U(y)){return -this.s.y}
        this.s.y = -cjs.cap(y,lY[0],lY[1])
        return this}
    w.camXY=function(x,y){
        if(U(x)){ return V(this.camX(),this.camY()) }
        return this.camX( x  ).camY( y  )}

    if(U(y)){y=x; x=0}
    this._camX=x;
    this._camY=y
    this.camXY(x, y)
    return this}
w.follow=function(b,bX,bY,bufX,bufY){var w=this //the stage movements COUNTERACT the player movements!! //(it pulls him back..so he looks still) //subtract 200 but dont go negative (stop at zero)
    //how far is x from where it is supposed to be?
    //bodyXBeWhere is where bodyX should be if camX was 0
    //as camX shifts, bodyX will need to move, to stay with it
    if(N(bufX)&&U(bufY)){bufY=bufX;bufX=0} //can pass in x,y or JUST y

    cjs.tick(function(){
        w.camXY(
                w._camX  +  camAdj(b.X()-(bX+w._camX),bufX),
                w._camY  +  camAdj(b.Y()-(bY+w._camY),bufY)
        )})
    function camAdj(n,l){var n=-(n||0),l=N(l)?l:0
        return (n>0)?(n<l?0:l-n):(n=n>-l?0:-n-l)}

return this}


CAM=function(){

    w = b2d.W({w:0,g:0}).debug()
        .walls(2400,1200)//sets limits automatically!
         //start cam at this y
    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)
    y=w.ship(100, 1100 ).rot(90).linDamp(1)

    w.cam(600).follow(y,600,  500,  300 )}
CAMHUGE=function(){

    w = b2d.W({w:0,g:0})
        .walls(10000,800)//sets limits automatically!

    w.S(1200,700,'r',400,100)
    y = w.ship(100, 700 ).rot(90).linDamp(1)
    w.cam(600) //start cam at this y
    w.follow( y,  600,  500,  300 )
    w.debug()}
STREETFIGHTER=function(){

    w = b2d.W({w:0}).debug()
        .walls(1400, 800)//sets limits automatically!
    //start cam at this y
    w.S(700,600,'r',400,20)

    y = w.ship(700, 700 ).linDamp(1)

    w.cam(100, 600)

    w.follow(y,700,500,
        200,
        300
    )

}





MARIOGROUNDS =function(){w = b2d.W({w:0, g:5}).debug()
    w.s.XY(300,150)
    w.s.rXY(300, 150)

    w.ice(30,250, 400)
    w.grass(450,250,400)
    w.grass(500,100,4000)
    w.rubber(880,250,40000)

    p = w.mario().followX(600, 400)

}

SCROLLINGLEVEL=function(){w=b2d.W().debug()
    w.s.XY(300, 150).rXY(300, 150)
    w.grass(300,280,500)
    w.ice(1300, 280, 1000)
    w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    p= w.player(2.5, 'thrust').Y(200).horizCenter().angDamp( 10000 ).follow(600, 400)
}
SLIDE=function(){w=b2d.W().debug()
    w.roof.kill()
    w.s.XY(300, 150).rXY(300, 150)
    w.clouds().clouds(1000,-200)
    w.grass(300,280,500)
    w.ice(800,280, 5000)
    p = w.player(2.5, 'thrust').XY(800,-100) .angDamp( 10000 ).follow(600, 400)
    slide = w.rect(1200, 30, 1200,40, 'blue').den(1).fric(.5).rest(.5)
}

AUTOSCROLL=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.floor.kill()
    p= w.jumper()

    setup=function(){score=0
        p.XY(350, 100)
        p.linVel(0,0)
        w.s.XY(0,0)
    }

    setup()
    cjs.tick(function(){
        w.s.X(4,'-').pen(score++)
        if( p.relPos() < -100 ){setup()}})
    w.ramps()
}



RAMPS=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    w.s.XY(300,150)
    w.s.rXY(300, 150)
    w.ramps()
    p= w.jumper(400,100).followX(600, 400)
    cjs.tick(function(){$l(p.onGround)})
}


SCALINGLEVEL=function(){w=b2d.W({g:300}).debug()
    w.right.kill()
    w.left.kill()
    w.roof.kill()
    p= w.jumper(1000,0)
    w.ice(800,280, 10000);
    w.rubber(50,100,300); w.rubber(-400,100,300)
    w.rect(1200,30, 600,4).stat();
    w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    w.s.XY(300, 150).rXY(300,150)
    p.calcScale=function(){return 1-((this.X()-300)/300)*.1}
    cjs.tick(function(){p.centerScale(p.calcScale())})
}















//w.show(function(){})//not working with scroll