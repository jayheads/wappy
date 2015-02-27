

b2d.miniWorld=function(){z()
    d = $.div('yellow', 500,40).A().pad(2)
    w=  b2d.mW({ grav:40, W:500, H:400, walls:b2d.miniWalls})
    p = w.player(2, 'thrust')

    data=function(str){
        if(U(str)){str='data'}
        d.E($.h4(str))
    }

    return w}


rayLine=function(x1, y1, x2, y2){
    x1=N(x1)?x1:0
    y1=N(y1)?y1:0
    x2=N(x2)?x2:100
    y2=N(y2)?y2:100
    if(line){line.remove(); line=null}
    line = cjs.shape()
    line.graphics.s('white').mt(x1,y1).lt( x2,y2)
    w.s.A(line)}
removeDots=function(){
    getDots=function(){


        var arr=[]

        _.each( w.s.children, function(c){

            if(c.N() == 'dot'){

                arr.push(c)}

        })

        return arr
    }
    dots = getDots()

    _.each(dots, function(dot){dot.remove()})

}




RAYCAST=function(){

    b2d.miniWorld()

    firstPoint = secondPoint = line = null

    w.brick(200,200,40,20)

    w.s.on('stagemousedown', function(ev){e=ev;x = e.rawX; y= e.rawY

        if(firstPoint == null){firstPoint = {x: x, y:y}}

        else {
            if(secondPoint == null){secondPoint = {x: x, y:y}}
            else{firstPoint = secondPoint; secondPoint = {x: x, y:y}}
            removeDots()
            w.s.dot('blue', firstPoint.x, firstPoint.y)
            w.s.dot('red', secondPoint.x, secondPoint.y)
            rayLine(firstPoint.x, firstPoint.y,secondPoint.x, secondPoint.y )

            n = 0
            w.rayCast(function(fixt){
                    n=n+1; f=fixt; b=fixt.GetBody()
                    w.s.dot( b.X(), b.Y())},
                firstPoint, secondPoint)
            data(n + ' guys')
        }})
}



BADDIE=function(){

    b2d.miniWorld()


    b = w.ball(300,100,12)
    g=b.bindSprite('guy',.2)

    cjs.tick(function(){
        g.rot(0)
    })

}



DENSITY=function(){z()

    w=b2d.mW({
        grav:0,
        W:600,
        H:500
    })


      w.ball(200,100, 10)
      w.ball(100,100, 5.65)
      w.ball(300, 200, 40)


    w.box(200,200, 10,10)
    w.box(200,200, 100,100)

   // w.s.dot(100,100)

    w.bodyClick(function(){
        $l('mass: ' + this.mass().toFixed(3))
    })


}





