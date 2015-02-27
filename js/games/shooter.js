SHOOTERCAN=function(){




    function startGame (){z()


        game=true
        Coins=[]
        Aliens=[]
        Bullets=[]
        can = $.canvas('yellow', 900, 500).A()

        shooter = new Shooter()

        shooter.draw()

     //   _.times(10,function(){Coins.push(Coin())})
     //   _.times(15,function(){Aliens.push(Alien())})


        setInterval(function(){

            shooter.update()


            can.clear()
            shooter.draw()
        }, 400)
    }

    function Shooter(){
        this.x= 100
        this.y= 200
        this.vx = 2
        this.vy = 2
        this.radius = 20

        this.update =  function(){
            this.x = this.x + this.vx
            this.y = this.y + this.vy}

        this.draw =function(){

            can.circle(this.x, this.y, this.radius, 'blue')

        }
    }

    updateScreen=function(){



        can.clear()

        shooter.draw()
    }
    updateGame=function(){

        shooterUpdate()

    }

    updateGameX=function(){

        if(game){
            shooter.vx += cap(-5,5)( (e.x - shooter.x)/300 )
            shooter.vy += cap(-5,5)( (e.y - shooter.y)/300 )
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        }  else {

            alert('game over!')

            if((e.x>450)&&(e.y>290)

                &&(e.x<450 + textWidth)

                &&(e.y<290 + textHeight)){reload()}}

        can = $.canvas(800, 600)
        can.click(function(x,y){
            shooter.vx+= cap(-5,5)((x-shooter.x)/300)
            shooter.vy+= cap(-5,5)((y-shooter.y)/300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        })


        b= bad(x).d()
        c= coin(x).d()
        g= guy(x)

        I(function(){

            x.X();
            b.update().draw();
            g.update().draw()

        }, 30)




       // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
    }

    startGame()

}

function Alien(x,n,n1){

    if(N(n1)){var a=[]
        _.times(n1,function(){
            a.push(Bad(x,n))})
        return a}

    if(N(n)){return Bad(x).du(n)}

    var b={
        x: _.random(1200),
        y: _.random(600),
        radius: _.random(15),
        vx: _.random(10)-5,
        vy: _.random(10)-5
    }

    b.draw=function(){
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.circ(b.x,b.y, b.r,'g','z')
        x.circ(b.x,b.y, 15,'o','z')

        return b}


    b.update=function(){

        b.radius *= 1.005

        b.x = warp(0,1200,20)(b.x+b.dx)

        b.y = warp(0,600,20)(b.y+b.dy)

        return b}


    b.drawUpdate = b.du=function(n,n2){
        if(N(n)){
            return setInterval(function(){  b.du() },  n)
        }

        return b.draw().update()
    }

    return b}


function Coin(x,n,n1){

    if(N(n1)){
        var a=[];
        _.times(n1,function(){
            a.push( Coin(x, n) )});
        return a
    }

    if(N(n)){

        return Coin(x).du(n)
    }

    var c={
        x: _.random(1200),
        y: _.random(0,600),

        radius: 10,

        vx: _.random(0,10)-5,
        vy: _.random(0,10)-5}

    c.draw=function(){
        x.circle(this.x, this.y, this.radius, 'b', 'y')
        return this
    }

    c.update=function(){
        c.x= warp(0,1200,20)(this.x + this.vx)
        c.y= warp(0,600,20)(this.y+this.vy)
        return c}

    c.drawUpdate=function(n,n2){
        if(N(n)){return setInterval(function(){c.drawUpdate()}, n)}
        return c.draw().update()}

    return c}
//bluecircle game function //never used
coinHits=function(){

    _.each(CoinsArray,

        function(coin, coinId){

            //??? hitTest?
            if( xyc( coin.x, coin.y, game )){

                delete CoinsArray[coinId]

                game.coinScore += 1
            }
        })




    _.each(
        As,function(a,A){

            if (
                xyc(g.x,g.y,a)){
                g.h-=1}

            _.each(Bs,function(b,B){

                if (xyc(b.x,b.y,a)){
                    delete Bs[B]

                    delete As[A]

                    As.push(bad())}})

        })

}












