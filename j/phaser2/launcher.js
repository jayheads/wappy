

ANGLEPOINTER=function(){

    pG(

        function preload(){g.l.i('ar','/assets/sprites/arrow.png')},


        function create(){

            g.ARC()

            s=g.sp(400,300,'ar').A(.5,.5).arc()

        },




        function update(){

            s.rTP()

            //s.mTP(200)

        },



        function render(){g.db.spI(s,32,32)}

    )



}



SHOOTPOINTER=function(){z()

    game = Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {g=$G(game).ARC()

        g.l.i('ar', '/assets/sprites/arrow.png');
        g.l.i('bullet', '/assets/sprites/purple_ball.png')


    }


    fireRate=100
    nextFire=0

    function create(){

        bs=g.gr().arc().eB(1).mult(50,'bullet')
            .sA('checkWorldBounds',true)
            .sA('outOfBoundsKill',true)

        s=g.sp(400,300,'ar').arc().aR(0).A().clWB(1)

    }



    function update(){

        //sp.rt(g.aTP(sp))

        s.rtP()

        if(g.aPD()){

            if(
                g.n()>nextFire && bs.cD()>0){

                nextFire=g.n(fireRate)

                bs.gFD().rs(s.x-8,s.y-8).mTP(500)// g.mTP(b,300)

                s.mTP(200)

            }}

    }







    function render(){
        g.db.t('Active Bullets: '+bs.countLiving()+'/'+bs.total,32,32)
        g.db.spI(s, 32, 450)}}



LAUNCHER=function(){



    pG(

        function preload(){
            catchFlag = false
            launchVelocity = 0

            g.bc('#0072bc').ARC(200)
            g.l.i('analog', '/assets/tests/fusia.png')
            g.l.i('arrow', '/assets/sprites/longarrow2.png')
            g.l.i('ball', '/assets/sprites/pangball.png')
        },

        function create(){
            gx=g.add.graphics(0,0)
            gx.beginFill(0x049e0c)
            gx.drawRect(395,350,10,250)

            analog=g.sp(400,350,'analog').arc().w(8).al(0).rt(220).A(.5,0).aGr(0)

            arrow=g.sp(400,350,'arrow').arc().A(.1,.5).aGr(0).al(0)
            arrow.body.moves=false

            //ball=g.sp(100,400,'ball').arc().A(.5,.5).clWB(1).bo(.9,.9).iE(1)

            ball=g.sp(100,400,'me').arc().A(.5,.5).clWB(1).bo(.9,.9).iE(1).w(100).h(100)

            ball.ipS(0,true).oID(set).oIU(launch)

        },


        function update(){

            arrow.rt(g.anB(arrow,ball))

            if(catchFlag==true){
                //Track the ball sprite to the mouse

                ball.x=g.iX()
                ball.y=g.iY()

                arrow.al(1)
                analog.al(.5).rt(arrow.rt()-3.14/2).h(g.dTP(arrow))
                launchVelocity=analog.h()
            }

        },




    function render(){

            g.db.text("Drag the ball and release to launch", 32, 32);

            g.db.bodyInfo(ball, 32, 64);

            // g.db.spriteInfo(ball, 32, 64);
            // g.db.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);

        })

    function set(ball,pointer){
        ball.mvs(0).vxy(0,0).aGr(0)
        catchFlag=true}


    function launch(){

        catchFlag=false
        ball.mvs(1)
        arrow.al(0)
        analog.al(0)

        Xvector=(arrow.x-ball.x)*3
        Yvector=(arrow.y-ball.y)*3


        ball.aGr(1).vxy(Xvector,Yvector)

    }



}









LAUNCHER1=function(){
    z()
    catchFlag = false
    launchVelocity = 0


    game=Game(800,600,Phaser.CANVAS,'phaser-example',{
        preload: preload, create: create, update: update, render: render

    })


    function preload(){
        g=$G(game).bc('#0072bc').ARC(200)
        g.l.i('analog', '/assets/tests/fusia.png')
        g.l.i('arrow', '/assets/sprites/longarrow2.png')
        g.l.i('ball', '/assets/sprites/pangball.png')
    }



    function create(){
        gx=g.add.graphics(0,0)
        gx.beginFill(0x049e0c)
        gx.drawRect(395,350,10,250)
        analog=g.sp(400,350,'analog').arc().w(8).al(0).rt(220).A(.5,0).aGr(0)
        arrow=g.sp(400,350,'arrow').arc().A(.1,.5).aGr(0).al(0)
        arrow.body.moves=false
        ball=g.sp(100,400,'ball').arc().A(.5,.5).clWB(1).bo(.9,.9).iE(1)
        ball.ipS(0,true).oID(set).oIU(launch)

    }


    function set(ball,pointer){
        ball.mvs(0).vxy(0,0).aGr(0)
        catchFlag=true}


    function launch(){

        catchFlag=false

        ball.mvs(1)
        arrow.al(0)
        analog.al(0)
        Xvector=(arrow.x-ball.x)*3
        Yvector=(arrow.y-ball.y)*3
        ball.aGr(1).vxy(Xvector,Yvector)
    }




    function update() {

        arrow.rt(g.anB(arrow,ball))

        if(catchFlag==true){
            //Track the ball sprite to the mouse


            ball.x=g.iX()
            ball.y=g.iY()

            arrow.al(1)
            analog.al(.5).rt(arrow.rt()-3.14/2).h(g.dTP(arrow))
            launchVelocity=analog.h()}}


    function render(){

        g.db.text("Drag the ball and release to launch", 32, 32);

        g.db.bodyInfo(ball, 32, 64);

        // g.db.spriteInfo(ball, 32, 64);
        // g.db.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);

    }
}


LAUNCHERFOLLOW=function(){z()

    game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload(){g=$G(game).ARC().bn(0,0,3400,1000)

        g.l.i('background','/assets/misc/starfield.jpg')
        g.l.i('player','/assets/sprites/phaser-dude.png')
        g.l.i('analog', '/assets/tests/fusia.png')
        g.l.i('arrow', '/assets/sprites/longarrow2.png')}



    catchFlag=false

    launchVelocity=0

    function create() {


        g.tSp(0,0,3400,1000,'background')

        analog=g.sp(200, 450, 'analog').w(8).rt(220).al(0).A(0.5, 0.0)

        arrow=g.sp(200, 450, 'arrow').A(0.1, 0.5).al(0)

        p=g.sp(150,320,'player').arc().A().clWB(1).bo(0.9).drg(20,20).iE(1).ipS().oID(set).oIU(launch);

        g.f(p,TopDown)}



    function set(p,pointer){
        catchFlag=true
        g.f(null)
        p.mvs(0).vxy(0,0)
        arrow.rs(p)
        analog.rs(p)}

    function launch() {

        catchFlag = false;
        p.mvs(1).vxy( (arrow.x-p.x)*3, (arrow.y-p.y)*3 )
        g.f(p, TopDown);

        arrow.al(0)
        analog.al(0)

    }

    function update() {


        arrow.rtB(p) // arrow.rt(  g.anB(arrow, p) )

        if(catchFlag==true){

            p.x=g.iX()
            p.y=g.iY()

            arrow.al(1)
            analog.al(.5)

            analog.rt(arrow.rt()-3.14/2)
            analog.height=g.dB(arrow,p)
            launchVelocity=analog.h()

        }}

    function render() {

        g.db.text("Drag the sprite and release to launch", 32, 32, 'rgb(0,255,0)');
        g.db.cameraInfo(g.camera, 32, 64);
        g.db.spriteCoords(p, 32, 150);
        g.db.text("Launch Velocity: " + parseInt(launchVelocity), 550, 32, 'rgb(0,255,0)')}}
