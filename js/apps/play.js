
isolated=function(){
r= b.row;
    c= b.col
    if(
        //grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
            //&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
        grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
        ){return true}
}



//pass in colors or default to white/black
//makes a tile
isoTile=function(a,a2){
    a=a||'w'
    a2=a2||'z'

    var h=Hx().f(a).s(a2).xy(300).ry(0).rx(40)//.dx(1).dy(1)
    h.g.mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
    h.coin=false

    h.bTo=function(){
        if(h.wasOn==true){
            //ISO()
            location=location}

        b.x(h.x()-20)
        b.y(h.y()-50)
        b.tile=h
        b.col=h.col
        b.row=h.row
        if(h.coin){h.coin.XX()}
        if(h.bad){location=location}
        h.wasOn=true

    //if(isolated()){alert('!')}
    }

    h.addCoin=function(){

        h.coin= tileCoin()
        s.a(h.coin)
        h.coin.x(h.x()-0)
        h.coin.y(h.y()-10)

    }



    h.addBad=function(){

        h.bad= tileBad()
        s.a(h.bad)
        h.bad.x(h.x()-0)
        h.bad.y(h.y()-10)

    }

    return h}

tileCoin=function(){
    var h=Hx().f('y').s('z')//.ry(15).rx(15)
    h.g.dc(0,0,15)
    return h}

tileBad=function(){
    var h=Hx().f('g').s('z')//.ry(15).rx(15)
    h.g.dc(0,0,15)
    return h}

isoRow=function(r,n,x,y){
    x=x||0;
    y=y||0
    var row=[]
    _t(n,function(i){
        x=x+ 40
        y=y- 20
        var t=isoTile().xy(x,y);s.a(t);SL(t)
        t.col=i
        t.row=r
    row.push(t)

    })

return row}

isoGrid=function(n1,n2,x,y){
    x=x||0;
    y=y||0

    var grid=[]

    _t(n2,function(i){
        x=x+40
        y=y+20

        var tile=isoRow(i,n1,x,y)



        grid.push(tile)

    })




return grid}

ISO=function(levNum){z()

    s=St(900,500).a()

   // h=Hx().f('o').s('z').xy(100).ry(20).rx(20)//.dx(1).dy(1)
    //h.g.mt(0,0).lt(0,40).lt(40,40).lt(40,0).lt(0,0);s.a(h)


    grid=isoGrid(10,10,0,240)


    //s.a(TR(isoTile()))
    //s.a(TR(isoTile()))

    s.b('me',function(me){
        b=me
        b.sxy(.2).xy(220,70);SL(b)

        b.right=function(){
            b.tile.XX()
            grid[b.row][b.col]=null
            grid[b.row][b.col+1].bTo()
        }

        b.left=function(){

            b.tile.XX()
            b.tile.exists=false
            //b.tile=null
            grid[b.row][b.col]=null
            grid[b.row][b.col-1].bTo()
        }

        b.down=function(){
            b.tile.XX()
            grid[b.row+1][b.col].bTo()}

        b.up=function(){
            b.tile.XX()
            grid[b.row-1][b.col].bTo()}

        grid[5][5].bTo()


        kD('u','b.up()')
        kD('d','b.down()')
        kD('l','b.left()')
        kD('r','b.right()')

kD('s','location=location')

    })



lev1=function(){
    grid[3][5].XX()
    grid[4][4].XX()
    grid[6][6].XX()
    grid[7][1].XX()
    grid[0][3].addCoin()
    grid[1][3].addCoin()
    grid[3][4].addCoin()
    grid[5][2].addCoin()
    grid[8][8].addCoin()
}
lev2=function(){
    grid[0][0].addCoin()
    grid[0][9].addCoin()
        grid[0][3].addCoin()
        grid[1][3].addCoin()
    grid[1][6].addCoin()
    grid[2][1].addCoin()
        grid[3][4].addCoin()
        grid[3][8].addCoin()
    grid[4][7].addCoin()
    grid[5][2].addCoin()
    grid[6][5].addCoin()
    grid[6][9].addCoin()
    grid[8][8].addCoin()
    grid[8][2].addCoin()


    grid[8][4].addCoin()
    grid[9][0].addCoin()
    killTile=function(a,b){
        grid[a][b].XX()
        grid[a][b].wasOn=true

    }

    killTile(1,2)
    killTile(2,2)
    killTile(2,6)
    killTile(2,7)
    killTile(2,8)
    killTile(4,0)
    killTile(4,3)

    killTile(4,4)
    killTile(4,6)
    killTile(4,9)
    killTile(6,1)
    killTile(6,2)
    killTile(7,1)
    killTile(7,3)

    killTile(7,4)
    killTile(7,9)

    killTile(8,6)
    killTile(8,7)
    killTile(8,9)







    }
lev3=function(){

        grid[0][0].addBad()
        grid[0][9].addBad()
        grid[0][3].addBad()

        grid[1][6].addBad()
        grid[2][1].addBad()
        grid[3][4].addBad()
        grid[3][8].addBad()

        grid[5][2].addBad()
        grid[6][5].addBad()
        grid[6][9].addBad()
        grid[8][8].addBad()
        grid[8][2].addBad()

    }


lev4=function(){


        grid[2][9].addCoin()
    grid[5][0].addCoin()

        grid[2][3].addCoin()
        grid[5][6].addCoin()
    grid[9][3].addCoin()
    grid[3][1].addCoin()
        grid[4][4].addCoin()
        grid[0][8].addCoin()
        grid[6][7].addCoin()
    grid[5][8].addCoin()
    grid[9][6].addCoin()
    grid[2][2].addBad()
        grid[0][0].addBad()
        grid[0][9].addBad()
        grid[5][3].addBad()
    grid[2][6].addBad()
    grid[4][5].addBad()
    grid[9][0].addBad()
    grid[9][7].addBad()
        grid[3][8].addBad()


        grid[6][5].addBad()
        grid[6][9].addBad()

        grid[8][2].addBad()

    }

    if(levNum){$w['lev'+levNum]()}
    else if(pam){$w['lev'+pam]()}

//lev1()

}



SPACE=function(){wMs(function(b,s){
    s.wh(2000).bgi('/space.jpg')
    b.sxy(.2).fn(RT,SL)})}

BOXES=function(){CT(ROW(s=St(800,600),
        d=_d().P(20).c('y')(h1('controls'),

            bt('fall',function(){b.fall(r)}),
            bt('fall+',function(){K(nb,1000)})),'+'))



    kD('r',function(){r.x(10,'+')})
    kD('l',function(){r.x(10,'-')})



    s.a(r=box().xy(300,450))

    s.a(b=ball(40,'r','o').xy(300,100))
    nb=function(){
        var b=ball(40,'r','o').xy(
            _r(600),100).ap(s);b.fall(r)}

}




ship=function(s){

    var t=Hx().f('o').s('z').xy(100).ry(20).dx(1).dy(1);

    t.g.mt(0,0).lt(0,40).lt(80,20).lt(0,0)

     //kD('d',function(){t.rt(6,'+')})
    //kD('u',function(){t.rt(6,'-')})

    if(s){

        t.ap(s)

        s.o('D', function(s,e){
        t.dx((e.X- t.x())/10,'+')
        t.dy((e.Y- t.y())/10,'+')
        if(t.dx()>10){t.dx(10)}
        if(t.dy()>10){t.dy(10)}})}


    K(function(){

        t.x(t.dx(),'+').y(t.dy(),'+').rt(
            dg(t))
    },100)


    return t}

dg=function(y,x){if(O(y)){return dg(y.dy(), y.dx())}


    var d=tDeg(atan(y/x))

    if(x<0){d=abs(d)+90;if(y<0){d=abs(d)+90}}
    return d}

SHIP=function(){


    PL=1;
    aA=[]

    CT(ROW(s=St(800,600),
        d=_d().P(20).c('y')(h1('controls'),

            b1=bt('start',function(){PL=1;b1.hd();b2.sh()}).hd(),
            b2=bt('stop',function(){PL=0;b2.hd();b1.sh()}),

            bt('sgun',function(){sgun(g)})
        ),'+')

    )

    g=ship(s)

    kD('s',function(){ $l('bang')})


    _t(100,function(){var a=ast();a.a();a.p()})

    s.t(function(){ if(PL){  _e(aA,function(a){  a.u()  })}} )

    sgun(g)

}

SOLAR=function(){


    wMs(  function(b,s){

            CT( ROW(  _d()(  br(), br(), br(), br(),  s)))



         b.sxy(.4).x(400);
            SL(b);
            b.wrp()





            s.bm('sun',function(b){

                sun=b;
                SL(b)

                b.mv('+');
                b.bnc(0);
                b.dxy(_r(10)+1,_r(10)+1).xy(_r(800),_r(600))

            })


            s.bm('sun',function(b){lsun=b;  SL(b)

                b.mv('+');b.wrp(0);
                b.dxy(3,3).sxy(.2)


                    I(function(){
                        if(sunIn()){b.sxy(.04,'+')
                            b.dx(.2,'+')
                            b.dy(.2,'+')
                        }},100)})


            s.bgi('/space.jpg')





        }



    )}

SHOOTY=function(){

    wM(

        function(a){ x=xx()
            x.q.c('X')
            x.f(a)})


    wMs(function(b,s){

        CT(s).w(800)

        b.wh(150).xy(100, s.h()-200).fn(SL)

        key(b,'-')


        ugun(b)


    })}



HIT=function(){z()
//hitTest ( x  y ) Boolean

//Tests whether the display object intersects the specified local point
// (ie. draws a pixel with alpha > 0 at the specified position).
// This ignores the alpha, shadow and compositeOperation of the display object,
// and all transform properties including regX/Y.
    //  Example



//x Number
//The x position to check in the display object's local coordinates.
//y Number
//The y position to check in the display object's local coordinates.
//Returns:

    //Boolean: A Boolean indicting whether a visible portion of the DisplayObject intersect the specified local Point.

    stage = St(1000).a()

    stage.mg(

        function(mug){

        SL(mug)


        stage.b('flame', function(fireBall){

            SL(fireBall)

            fireBall.sxy(.1).rx(fireBall.w()/2).ry(500).xy(400)



            //this works, but must click on SOMETHING on the stage
            stage.o('$$',

                function(g, e){

                fireBall.xy(e.X, e.Y)

            })



            stage.o('D', function(g,e){

                localCoords= mug.gTL(e.X, e.Y)

                hit = mug.ht(localCoords.x, localCoords.y)



                if( $l(hit) ){   stage.c('r'); $l(e.X+ ' '+ e.Y)   }

                else {stage.c('y')}


            })





            stage.o('M', function(g,e) {


                localCoords = mug.gTL(fireBall.x(), fireBall.y())


                hit = mug.hT(localCoords.x, localCoords.y)


                if( $l(hit)  ){ stage.c('r'); $l(e.X+ ' '+ e.Y)}


                else {
                    stage.c('y')}

            })


        })

    })



    stage.b('me', function(b){
            b.sxy(.4).xy(300)

            b=b.ob


            C$.Tween.get(b, {loop:true})
                .wait(100)
                .wait(300)
                .to({x:450}, 1200, C$.Ease.backInOut)
                .wait(100)
                .wait(300)
                .to({x:50}, 1200, C$.Ease.backInOut)

        })
}





HITCIRCLES=function(){


    stage=St(1000).a()

    holder = stage.addChild(new createjs.Container())


    holder.x = holder.y = 150

                        for (var i=0; i<25; i++) {
                        var shape = new createjs.Shape();
                        shape.graphics.beginFill(createjs.Graphics.getHSL(Math.random()*360,100,50)).drawCircle(0,0,30);
                        shape.x = Math.random()*300-150;
                        shape.y = Math.random()*300-150;
                        holder.addChild(shape)}

                        createjs.Ticker.on("tick", tick)


                    function tick(event) {
                        holder.rotation += 3;
                        var l = holder.getNumChildren();
                        for (var i = 0; i < l; i++) {
                            var child = holder.getChildAt(i);
                            child.alpha = 0.1;
                            var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
                            if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)) {
                                child.alpha = 1;
                            }
                        }

                        stage.update(event);


}
}


canon=function(r,x,y){

    x= x||r.x()||100;
    y= y||r.y()||500



    var vx,vy,

        c = ball(12).xy(x,y).ap(s)


    if(r.rt()>0){
        vx=8*(1+rad(r.rt()))
        vy=16*(1-rad(r.rt()))}


    else{
        vx= 8*(-1+rad(r.rt()))
        vy=16*(1+rad(r.rt()))}


    s.t(function(){

        vy-=.5

        c.x(vx,'+')

        c.y(vy,'-')


    })

}



CANON=function(){

    s=St(1000,600).a()

    r=box(20,100).ap(s).x(500).B(600)


    kD('l',function(){r.rt(4,'-')})

    kD('r',function(){r.rt(4,'+')})

    kD('d',function(){r.rt(0)})

    kD('s',function(){
        canon(r)
    })


   I(function(){
       var d=rad(r.rt())
       canon(r, (500 + acos(d) * 30)+ r.x()-540,
           (500 + asin(d) * 30)+ r.y() -540)},500)



}








