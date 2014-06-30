MULTIBALL=function(){z()

    game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render })

    function preload() {

        g=$G(game).bc('#2d2d2d').ARC(1400)

        g.l.i('atari', '/assets/sprites/atari130xe.png')

        g.l.ss('bs','/assets/sprites/balls.png',17,17)
        g.tx(16,16,'Left/Right to move',
            {font:'18px Arial',fill:'#ffffff'})

        cu=g.K()}



    function create(){

        bs=g.gr().mult(250,'bs',0,false)

        g.eA()

        p=g.sp(300,450,'atari').arc().aGr(0)//.imm(1)

        g.lp(150,
            function fire(){var b=bs.gFE(0)
                if(b){b.fr(g.rI(0,6)).ex(1).rs(g.rX(),0).bY(.8)}},
            this)}

    function update(){
        g.col(p,bs,null,function reflect(a,b){
            if(b.y>(p.y+5)){return true}
            else{
                b.vx(p.vx())
                b.vy(b.vy()*-(b.bY()))
                return false
            }},
            this)


         p.vx(0).vy(0)

        if(cu.L()){p.vx(-200)}
        if(cu.R()){p.vx(200)}
        if(cu.U()){p.vy(-200)}
        if(cu.D()){p.vy(200)}

        bs.fEA(function checkBounds(b){if(b.y>500){b.k()}},this)}







    function render(){}}


GROUPVSGROUP=function(){z()

    bTime=0

    shoot=function(){var b
        if(g.n()>bTime){
            if(b=bs.gFE(0))
            {b.rs(s.x+6,s.y-8).vy(-300)
                bTime=g.n(150)}}}


    pG(
      function preload(){
          g.l.i('phaser', '/assets/sprites/phaser-dude.png')
          g.l.i('bullet', '/assets/misc/bullet0.png')
          g.l.ss('vs', '/assets/sprites/fruitnveg32wh37.png', 32, 32)},


        function create(){

                        s=g.sp(400,520,'me').arc().w(80).h(80)

                        vs=g.gr().eB(1).arc()
                        _t(50,function(){
                            vs.cr(g.rX(),rnd()*500,'vs',
                                g.r.integerInRange(0,36))})

                        bs=g.gr().eB(1).arc()
                        _t(5,function(){
                            bs.cr(0,0,'bullet').ex(0).cWB(1)
                                .oOOB(function(b){b.kill()})})

                        cu=g.K() },


        function update(){
          g.ol(bs,vs,
                            function(b,v){
                                b.kill();v.kill()},
                            null,this)

                        s.vxy(0,0)
                        if(cu.L()){s.vx(-300)}
                        if(cu.R()){s.vx(300)}

                        if(g.iD(Spacebar)){shoot()}})


}



SNAKE=function(){z()

      game=Game(800, 600, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create, update: update,render : render });


     section = []
    snakePath = []
    numSections=20
    spacer=2

    function preload(){g=$G(game).ARC(200).bn(0,0,800,600); cu=g.K()
        g.l.i('ball','/me.png')

    g.l.i('guy','/guy.png')}

    function create(){

        head=g.sp(400,300,'ball').arc().A().sc(.1,.1).clWB(1)

        guy=g.sp(200,200,'guy').arc().A().sc(1,1).clWB(1).bo(.8)
        me=g.sp(400,400,'ball').arc().A().sc(1,1).aGr(0)


        for(var i=1; i<=numSections-1; i++){

            section[i]=g.sp(400,300,'ball').arc().A().sc(.1,.1)
        }

       // section[9].sc(.5,.5)

        for(var i=0; i<=numSections*spacer; i++){snakePath[i]=Pnt(400,300)}

    }


    function update(){

        //for(var i=1; i<=numSections-1; i++){g.col(guy,section[i])}
        me.vxy(0,0)
        g.col(guy,me)
        g.col(guy,head)


        head.vxy(0,0)


        head.aV(cu.L()?-300:cu.R()?300:0)

      //  if(cu.U()){

            snakePath.unshift(  snakePath.pop().sT(head.vFA(300))  )


            for(var i=1; i<= numSections-1; i++){

                section[i].vxy(head.vx(),head.vy())
               section[i].xy(snakePath[ i*spacer ])
                g.col(guy, section[i])
            }
    //    }

    }




    function render(){g.db.spriteInfo(head, 32, 32)}


}



GROUPVSGROUP1=function(){z()

    game=Game(800, 600, Phaser.CANVAS, 'phaser-example', {preload:preload, create:create, update:update})

              function preload(){  g=$G(game).bc('red')


                  g.l.i('phaser', '/assets/sprites/phaser-dude.png')
                  g.l.i('bullet', '/assets/misc/bullet0.png')
                  g.l.ss('vs', '/assets/sprites/fruitnveg32wh37.png', 32, 32)}

              bTime=0

              function create(){

                  s=g.sp(400,550,'phaser').arc()

                  vs=g.gr().eB(1).arc()
                 _t(50,function(){
                     vs.cr(g.rX(),rnd()*500,'vs',
                         g.r.integerInRange(0,36))})

                  bs=g.gr().eB(1).arc()
                  _t(5,function(){
                      bs.cr(0,0,'bullet').ex(0).cWB(1)
                          .oOOB(function(b){b.kill()})})

                  cu=g.K()
                  g.kc([Spacebar])}


              function update(){

                  g.ol(bs,vs,
                      function(b,v){
                          b.kill();v.kill()},
                      null,this)

                  s.vxy(0,0)
                  if(cu.L()){s.vx(-300)}
                  if(cu.R()){s.vx(300)}

                  if(g.iD(Spacebar)){shoot()}}



              function shoot(){var b
                  if(g.n()>bTime){
                      if(b=bs.gFE(0))
                      {b.rs(s.x+6,s.y-8).vy(-300)
                          bTime=g.n(150)}}}



}







MASSVELOCITYTEST=function(){

    pG(

        function preload(){
            g.l.i('car','/assets/sprites/car90.png')
            g.l.i('baddie','/assets/sprites/space-baddie.png')
            g.l.i('face','/me.png')
            g.ARC()
            cu=g.K()},


    function create(){


        aliens=g.gr().eB(1)

        _t(50,function(){
            aliens.cr(g.rX(),g.rY(),'baddie')
                .clWB(1).bo(.8,.8).vxy(  10+rnd()*40,10+rnd()*40  )})

        p=g.sp(400,300,'car').arc().A(.5).clWB(1).bo(2).aR(1).im(1)
        m=g.sp(100,100,'me').w(200).h(200).arc().clWB(1).bo(1)

    },


    function update(){

        g.col([p,aliens],[p,m],[aliens,m ],[aliens,aliens])
        p.vxy(0,0).aV(0)
        if(cu.L()){p.aV(-200)}
        if(cu.R()){p.aV(200)}
        if(cu.U()){p.vCF(g.vFA(p.angle,300))}}


 )}










MASSVELOCITYTEST1=function(){ z()



    game = Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {  g=$G(game)

        g.l.i('car', '/assets/sprites/car90.png')
        g.l.i('baddie', '/assets/sprites/space-baddie.png')
        g.l.i('me', '/me.png')

    }
    function create(){g=$G(game).ARC()
        aliens=g.gr().eB(1)
        _t(50,function(){
            aliens.cr(g.rX(),g.rY(),'baddie')
                .clWB(1)
                .bo(.8,.8).vxy(10+rnd()*40, 10+rnd()*40)})

        p=g.sp(400,300,'car').A(.5).arc()
            .clWB(1)
            .bo(2).aR(1).im(1)
        m=g.sp(100,100,'me').arc()
            .clWB(1)
            .bo(1)
        cu=g.K()}


    function update(){

        g.col([p,aliens],[p,m],[aliens,m ],[aliens,aliens])

        p.vxy(0,0).aV(0)

        if(cu.left.isDown){p.aV(-200)}
        if(cu.right.isDown){p.aV(200)}
        if(cu.up.isDown){
            p.vCF(g.vFA(p.angle,300))}}

    function render(){}
}


THRUST=function(){z()



    pG(

    function preload(){
        g.bn(0,0,1920,1200).P2().ru(1.2)
        g.l.i('stars','/assets/misc/starfield.jpg')
        g.l.i('ship','/assets/sprites/thrust_ship2.png')
        g.l.i('jets','/assets/sprites/jets.png')},

    function create(){
        isThrusting=false
        starfield=g.tSp(0,0,800,600,'stars').fTC(1)
        trail=g.em(0,0,1000).mP('jets').rt(0,0).a(1,0,6000).sc(1,0,1,0,6000)
        p=g.sp(200,200,'me').w(80).h(80).p2()
        g.cm.f(p)
        cu=g.K()
    },

    function update(){
        isThrusting=false
        if(cu.L()){p.rtL(100)} else if(cu.R()){p.rtR(100)} else{p.sZR()}
        if(cu.U()){p.thrust(400); isThrusting=true} else if(cu.D()){p.rv(400)}
        if(!g.lX()){starfield.tilePosition.x+=(p.vx()*16)*g.t.physicsElapsed}
        if(!g.lY()){starfield.tilePosition.y+=(p.vy()*16)*g.t.physicsElapsed}
        trail.eXY(p.x,p.y)
        var px=p.vx()*10,py=p.vy()*10;px *=-1;py *=-1
        trail.nPS(px, py).mPS(px, py)
        if(isThrusting||sqr(p.vx()*p.vx()+p.vy()*p.vy())>10){trail.start(true,3000,8)}}
    )

}

MAGGOTS=function(){

    pG(
    function preload(){

        g.l.i( 'maggot', '/assets/sprites/maggot.png')

        pBoundsPad=100

        pBnds= Rectangle(
            -pBoundsPad, -pBoundsPad, 800+pBoundsPad*2, 600+pBoundsPad*2)

        tick=0},



    function create(){

        batch=g.spB()

        var total=(g.renderType===Phaser.WEBGL)?1000:100

        for(var i=0;i<total;i++){

            var p=batch.create(g.rX(),g.rY(),'m')

            p=sSp(p).w(20).h(200)


            .A(.5).sc(.8+rnd()*.3)
                .dr(rnd()*PI*2).tSp(rnd()-.8).sp((2+rnd()*2)*.2).os(rnd()*100)


        }

    },


    function update(){

        batch.forEach(updateMaggot, this,false)
        tick+=0.1
    })


    function updateMaggot(p){ p=sSp(p)
        p.scale.y = 0.95 +  sin(tick + p.offset) * 0.05
        p.direction += p.turningSpeed * 0.01;
        p.p.x +=  sin(p.direction) * (p.speed * p.scale.y);
        p.p.y +=  cos(p.direction) * (p.speed * p.scale.y);
        p.rotation = -p.direction +  PI;

        // wrap the dudes by testing their bounds..

        if(p.p.x < pBnds.x){p.p.x += pBnds.width}
        if(p.p.x > pBnds.x + pBnds.width){p.p.x -= pBnds.width}
        if(p.p.y < pBnds.y){p.p.y += pBnds.height}
        if(p.p.y > pBnds.y + pBnds.height){p.p.y -= pBnds.height}


    }

}

MAGGOTS1=function(){z()

 game= Game(800,600, Phaser.AUTO, 'phaser-example',{preload: preload, create: create, update: update })

    function preload(){g=$G(game)

        g.l.i( 'maggot', '/assets/sprites/maggot.png')

        pBoundsPad=100


        pBnds=new Phaser.Rectangle(
            -pBoundsPad,
            -pBoundsPad,
                800+pBoundsPad*2,
                600+pBoundsPad*2)

        tick=0

    }



    function create(){

        batch=g.spB()

        var total=(g.renderType===Phaser.WEBGL)?1000:100

        for(var i=0;i<total;i++){
            var p=batch.create(g.rX(),g.rY(),'maggot')

            p.anchor.set(.5)
            p.scale.set(.8 + rnd()*.3)
            p.direction = rnd()*PI*2
            p.turningSpeed = rnd()-.8
            p.speed=(2+rnd()*2)*.2
            p.offset=rnd()*100}}


    function update(){

        batch.forEach(updateMaggot, this,false)
        tick+=0.1
    }


    function updateMaggot(p){ p=sSp(p)
        p.scale.y = 0.95 +  sin(tick + p.offset) * 0.05
        p.direction += p.turningSpeed * 0.01;
        p.p.x +=  sin(p.direction) * (p.speed * p.scale.y);
        p.p.y +=  cos(p.direction) * (p.speed * p.scale.y);
        p.rotation = -p.direction +  PI;

        // wrap the dudes by testing their bounds..

        if(p.p.x < pBnds.x){p.p.x += pBnds.width}
        if(p.p.x > pBnds.x + pBnds.width){p.p.x -= pBnds.width}
        if(p.p.y < pBnds.y){p.p.y += pBnds.height}
        if(p.p.y > pBnds.y + pBnds.height){p.p.y -= pBnds.height}


    }

}



MOVEAROUNDWORLD=function(){z()


    pG(


        function preload(){
        g=$G(game).bc('#007236').bn(-2000,-2000,4000,4000)

        g.l.i('mush', '/assets/sprites/mushroom2.png')
        g.l.i('p', '/assets/sprites/sonic_havok_sanity.png')},


    function create(){

        g.tx(
            600,800,"-phaser-",
            {font:"32px Arial",fill:"#330088",align:"center"})


        d=g.sp0('m').A()

        d2=g.sp(-500,-500,'p').A()

        _t(100,
            function(){
                g.spR('mush')
            })

        cu=g.K()

        //g.cm.f(d2)
       // d2.checkWorldBounds=true
    },


    function update(){

        //d.angle +=1000 //d2.x+=10;d2.y+=10

        if(cu.U()){
            if(cu.UU()){d.angle++}
            else{g.cm.y-=4}}

        if(cu.D()){
            if(cu.DD()){d.angle--}
            else{g.cm.y+=4}}

        if(cu.L()){
            if(cu.LL()){g.W.rotation-=.05}
            else{g.cm.x-=4}}

        if(cu.R()){
            if(cu.RR()){g.W.rotation+=0.05}
            else{g.cm.x+= 4}

        }},

    function render(){

        g.db.cameraInfo(g.cm, 32, 32)})


}


BRINGCHILDTOP=function(){

    z()

    game=Game(800, 600, Phaser.CANVAS, 'phaser-example',
        {
            preload:preload,
            create:create,
            render:render
        })

               function preload() {  g=$G(game)

                   g.l.i('atari1', '/assets/sprites/atari130xe.png')
                   g.l.i('atari2', '/assets/sprites/atari800xl.png')
                   g.l.i('atari4', '/assets/sprites/atari800.png')
                   g.l.i('sonic', '/assets/sprites/sonic_havok_sanity.png')
                   g.l.i('duck', '/assets/sprites/darkwing_crazy.png')
                   g.l.i('firstaid', '/assets/sprites/firstaid.png')
                   g.l.i('diamond', '/assets/sprites/diamond.png')
                   g.l.i('mushroom', '/assets/sprites/mushroom2.png')}

               function create(){
                   _t(20,

                       function(){

                       g.sp(
                           g.rX(),g.rY(),
                           g.rnd.pick(g.imageKeys())
                       )
                           .iE().drg()
                   })
               }

                function render(){g.db.inputInfo(32,32)}
           }


TWEENRELATIVE=function(){z()

        game= Game(800,600,Phaser.CANVAS,'phaser-example', {
            preload: preload,
            create: create,
            render: render })


        function preload() { g=$G(game).bc('yellow')

            g.l.i('p','/assets/sprites/phaser1.png')
            g.l.ss('a','/assets/sprites/arrows.png',23,31)}

        function create(){

            a1=g.sp(100,100,'a',0)
            a2=g.sp(400,100,'a',1)

            s=g.sp(100,164,'p').iE(1).oID(function(){

                if(s.x===100){
                    g.tw(s).t({x:'+300'},2000,None,true)}
  
                if(s.x===400){
                    g.tw(s).t({x:'-300'},2000,None,true)}})}
 
        function render(){

            if(s.x===100||s.x===400){
                g.db.t('Click sprite to tween',32,32)}
            g.db.t('x: ' + a1.x, a1.x, a1.y - 4)
            g.db.t('x: ' + a2.x, a2.x, a2.y - 4)}
}


WORLDSPRITE=function(){z()


    game= Game(800, 600, Phaser.CANVAS, 'phaser-example', {
              preload: preload, create: create, update: update, render: render })

        function preload(){
            g=$G(game).bn(0, -500, 1920, 1200)
            g.l.i('backdrop','/assets/pics/remember-me.jpg');
            g.l.i('card','/assets/sprites/mana_card.png')
            cu=g.K()
        }

        function create(){

            g.sp0('backdrop')
            p=g.sp(200,200,'card').fw()//g.f(p)

            }


        function update(){
            if(cu.L()){p.x-=4}
            if(cu.R()){p.x+=4}
            if(cu.U()){p.y-=4}
            if(cu.D()){p.y+=4}}

        function render(){
            g.db.cameraInfo(g.cm, 500, 32);
            g.db.spriteCoords(p, 32, 32);
            //g.db.physicsBody(p.body);

        }
}

FIXEDTOCAMERA=function(){z()
       game = Game(800, 600, Phaser.CANVAS, 'phaser-example',
           {preload: preload, create: create, update: update, render : render });

        function preload() {  g=$G(game).bc('#007236').bn(-1000, -1000, 2000, 2000)
            g.l.i('mushroom', '/assets/sprites/mushroom2.png')
            g.l.i('sonic', '/assets/sprites/sonic_havok_sanity.png')
            g.l.i('phaser', '/assets/sprites/phaser1.png')}


        function create() {


            _t(200,function(){g.spR('mushroom')})

            g.tx(0,0,"this text scrolls\nwith the background",
                {font:"32px Arial",fill:"#f26c4f",align:"center"})

            logo1=g.sp0('phaser').fTC(1)

            logo1.cameraOffset.setTo(100,100)

            logo2=g.sp0('phaser').fTC(1)

            logo2.cameraOffset.setTo(500,100)

            t=g.tx(0,0,"this text is fixed to the camera",
                {font: "32px Arial", fill: "#ffffff", align: "center" })

            t.fixedToCamera=true
            t.cameraOffset.setTo(200, 500)

            g.tw(logo2.cameraOffset).t({y:400},2000,$E.Back.InOut, true,0,2000,true)

            cu=g.K()}
        function update(){
            if (cu.U()){
                g.cm.y -= 4}
            if (cu.D()){
                g.cm.y += 4}
            if (cu.L()){
                g.cm.x -= 4}
            if (cu.R()){
                g.cm.x += 4}}
        function render(){g.db.cameraInfo(g.camera, 32, 32)}
}





CANNONBALLS=function(){

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {

        game.load.image('arrow', '/assets/sprites/arrow.png');
        game.load.image('chunk', '/assets/sprites/chunk.png');
        game.load.spritesheet('bullets', '/assets/sprites/balls.png', 17, 17);

    }

    var cannon;
    var bullets;
    var angle = 0;
    var fireRate = 100;
    var nextFire = 0;

    function create() {

        game.stage.backgroundColor = '#2d2d2d';

        game.physics.startSystem(Phaser.Physics.P2JS);

        game.physics.p2.gravity.y = 170;
        game.physics.p2.restitution = 0.8;
        game.physics.p2.friction = 0.1;

        bullets = game.add.group();
        bullets.createMultiple(500, 'bullets', 0, false);

        cannon = game.add.sprite(50, 500, 'arrow');
        cannon.anchor.set(0, 0.5);

    }

    function fire() {

        if (game.time.now > nextFire)
        {
            nextFire = game.time.now + fireRate;

            var bullet = bullets.getFirstExists(false);

            if (bullet)
            {
                bullet.frame = game.rnd.integerInRange(0, 6);
                bullet.exists = true;
                bullet.position.set(cannon.x, cannon.y);

                game.physics.p2.enable(bullet);

                bullet.body.rotation = cannon.rotation + game.math.degToRad(-90);

                var magnitude = 500;
                var angle = bullet.body.rotation + Math.PI / 2;

                bullet.body.velocity.x = magnitude * Math.cos(angle);
                bullet.body.velocity.y = magnitude * Math.sin(angle);
            }
        }

    }

    function update() {

        var dx = game.input.activePointer.worldX - cannon.x;
        var dy = game.input.activePointer.worldY - cannon.y;
        cannon.rotation = Math.atan2(dy, dx);

        if (game.input.activePointer.isDown)
        {
            fire();
        }

    }

    function render() {

    }

}


PIXELPICKSCROLLING=function(){z()

       game =  Game(800, 600, Phaser.CANVAS, 'phaser-example',
           {preload: preload, create: create,  update: update,
               render: render });

       function preload() {
           camSpeed=4
           g=$G(game).ARC().bn(0,0, 4000, 2000)

           g.l.ss('mummy', '/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18)
           g.l.i('stars', '/assets/misc/starfield.jpg')}





       function create() {



           //  Scrolling background
           s = g.tSp(0, 0, 4000, 600, 'stars')
            b=g.sp(0, 300, 'mummy').arc()


           b.scale.set(10)
           b.smoothed = false
           b.an.a('walk')
           b.play('walk', 5, true)


           b.vxy(50, 0)

           //  Listen for input events on this sprite
           b.inputEnabled = true

           //  Check the pixel data of the sprite
           b.input.pixelPerfectClick=true

           b.events.onInputDown.add(tint,this)}

       function tint() {b.tint=rnd()*0xffffff}

       function update(){

           if (g.iD(Left)){
               g.cm.x-=camSpeed
               if(!g.cm.atLimit.x){
                   s.tilePosition.x += camSpeed}}

           if (g.iD(Right)){
               g.cm.x += camSpeed;
               if (!g.cm.atLimit.x){s.tilePosition.x -= camSpeed}}

           if(g.iD(Up)){
               g.cm.y -= camSpeed;
               if(!g.cm.atLimit.y){s.tilePosition.y += camSpeed}}

            if(g.iD(Down)){g.cm.y += camSpeed;

               if (!g.cm.atLimit.y){
                   s.tilePosition.y -= camSpeed
               }
            }

       }




       function render(){g.db.spriteInputInfo(b, 32, 32)}
}




INPUTPRIORITY=function(){pG(

            function(){
                g.l.i('manga','/assets/pics/manga-girl.png')
                g.l.i('disk','/assets/sprites/copy-that-floppy.png')
                g.l.i('card','/assets/sprites/mana_card.png')},

            function(){
               g.sp(100,100,'manga').iE(1).drg().pr(2).drag()
               g.sp(200,200,'disk').iE(1).pr(1).drag()
               g.sp(300,300,'card').iE(1).pr(0).drag()}

    )}

SNAPONDRAG=function(){z()
      game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

    function preload(){g=$G(game)

        g.l.i('grid', '/assets/tests/debug-grid-1920x1920.png')
     g.l.i('atari1', '/assets/sprites/atari130xe.png')
     g.l.i('atari2', '/assets/sprites/atari800xl.png')}

    function create(){

        g.sp(0,0,'grid')
        atari1=g.sp(128,128,'atari1').iE(1).drg(1).snp(32,32,true,true)
        atari2=g.sp(256,256,'atari2').iE(1).drg(1).snp(32,32,false,true)

        //  enableDrag parameters =
        // (lockCenter, bringToTop, pixelPerfect,
        // alphaThreshold, boundsRect, boundsSprite)

        //  Enable snapping. For the atari1 sprite it will snap
        // as its dragged around and on release.
        //  The snap is set to every 32x32 pixels.

        //  For the atari2 sprite it will snap only when released, not on drag.

    }
}

CALLALLANIMATIONS=function(){z()
         game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create })
         function preload(){g=$G(game)
             g.l.ss('coin','/assets/sprites/coin.png',32,32)}
         function create(){
             coins=g.gr()
             _t(5000,function(){coins.crR('coin',0)})
             coins.cA('an.add','an','spin',[0,1,2,3,4,5],10,true).cA('an.play','an','spin')}}


CALLALL=function(){z()



    game=Game(800, 600, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create, render: render });

              function preload() {g=$G(game)

                  g.l.ss('item', '/assets/buttons/number-buttons-90x90.png', 90, 90)
                  g.l.i('reviveBtn', '/assets/buttons/revive-button.png')}

              function create(){

                    _t(3,function(i){
                        g.sp(290,98*(i+1),'item',i).iE(1)
                            .oIU(function(i){i.kill()})

                        g.sp(388,98*(i+1),'item',i+3).iE(1)
                            .oIU(function(i){i.kill()})})

                  g.bt(270,400,'reviveBtn',function(){
                      g.cA('revive')},this,0,0,0)}

              function render(){

                  game.debug.text('Tap or click an item to kill it', 160, 500);
                  game.debug.text('Press the Revive button to revive them all.', 160, 520);

              }
}


DISPLAYORDER=function(){z()

         game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

        function preload() {  g=$G(game)

            g.l.i('atari1', '/assets/sprites/atari130xe.png')
            g.l.i('atari2', '/assets/sprites/atari800xl.png')
            g.l.i('card', '/assets/sprites/mana_card.png')}

        function create() {

            items=g.gr()

            items.cr(64,100,'atari1')
            card=items.cr(240,80,'card')
            items.cr(280,100,'atari2')


            g.oT1(function rc(){
                    card.k()

                g.oT1(function(){

                        items.gFD().re()

                    },this)
                },this)}
    }

EXTENDINGAGROUP=function(){z()


           MonsterGroup = function(g,im,act){

               Phaser.Group.call(this, g)

               for (var i = 0; i < 30; i++){
                   var s=this.create(g.rX(),g.rY(),im)
                   if(act=='bounce'){g.tw(s).to({y:s.y-100},2000,$E.Elastic.Out,true,0,1000, true)}
                   else if(act=='slide'){g.tw(s).to({x:s.x+200},4000,$E.Elastic.Out,true,0,1000,true)}}}

           MonsterGroup.prototype=Object.create(Phaser.Group.prototype)
           MonsterGroup.prototype.constructor=MonsterGroup

            game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create })


           function preload(){g=$G(game)

               g.l.i('ufo', '/assets/sprites/ufo.png');
               g.l.i('baddie', '/assets/sprites/space-baddie.png')}

           function create() {

               customGroup1 = new MonsterGroup(g, 'ufo', 'bounce');
               customGroup2 = new MonsterGroup(g, 'baddie', 'slide');

           }}

GETFIRSTDEAD=function(){z()

pG(

    function preload(){g.l.ss('veg', '/assets/sprites/fruitnveg32wh37.png', 32, 32)},

    function create(){

        veg=game.gr().mult(20,'veg',0,false)

        g.rp(Second,20,function(){
            var i=veg.gFD(1)
            if(i){i.rs().fr(g.rI(0,36))



            }

        },this)},



    function update(){},

    function render() {
        g.db.text('One item will be resurrected every second', 32, 32);
        g.db.text('Living: ' + veg.cL() + '   Dead: ' + veg.cD(), 32, 64)}
)}


XXGROUPTRANSFORM=function(){z()

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

    var robot;

    function preload() {

        game.load.image('eye', '/assets/sprites/robot/eye.png');
        game.load.image('body', '/assets/sprites/robot/body.png');
        game.load.image('arm-l', '/assets/sprites/robot/arm-l.png');
        game.load.image('arm-r', '/assets/sprites/robot/arm-r.png');
        game.load.image('leg-l', '/assets/sprites/robot/leg-l.png');
        game.load.image('leg-r', '/assets/sprites/robot/leg-r.png');

    }

    function create() {

        game.stage.backgroundColor = '#124184';

        // Use groups of sprites to create a big robot.
        // Robot itself, you can subclass group class in a real game.
        robot = game.add.group();

        // Robot components.
        robot.create(90, 175, 'arm-l');
        robot.create(549, 175, 'arm-r');
        robot.create(270, 325, 'leg-l');
        robot.create(410, 325, 'leg-r');
        robot.create(219, 32, 'body');
        robot.create(335, 173,'eye');

        //  Make them all input enabled
        robot.setAll('inputEnabled', true);

        //  And allow them all to be dragged
        robot.callAll('input.enableDrag', 'input');

    }

    function render() {

        game.debug.text('The robot is a group and every component is a sprite.', 16, 20);
        game.debug.text('Drag parts to re-position them. ', 16, 40);

    }


               }


RECYCLING=function(){z()
     game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });



    function preload() {g=$G(game)

        g.l.i('baddie', '/assets/sprites/space-baddie.png');
        g.l.ss('button', '/assets/buttons/baddie-buttons.png', 224, 70)}

    function create() {

        enemies=g.gr()
        _t(8,function(){enemies.cr(360+rnd()*200, 120+rnd()*200, 'baddie')}) // Since the getFirstExists() which we'll use for recycling // cannot allocate new objects, create them manually here.

        g.bt(16,50,'button', function createBaddie(){// Recycle using getFirstExists(false)// Notice that this method will not create new objects if there's no one // available, and it won't change size of this group.
            var enemy = enemies.gFE(0)
            if(enemy){enemy.revive()}},this,0,0,0)

        g.bt(16,130,'button',function killBaddie() {
            var baddie=enemies.gFA(1)
            if(baddie){baddie.k()}},this,1,1,1)}




    function render() {

        g.db.text('Recycle baddies from a group using getFirstExists.', 16, 24);
        g.db.text('Notice that you cannot add more than 8 baddies since we only create 8 instance.', 16, 36);
        g.db.text('Living baddies: ' + (enemies.countLiving()), 340, 420);

    }
}

SWAPCHILDREN=function(){z()



                 game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

                function preload() {g=$G(game)

                    g.l.i('atari1', '/assets/sprites/atari130xe.png');
                   g.l.i('atari2', '/assets/sprites/atari800xl.png');

                }

                var atari1;
                var atari2;

                function create() {

                    //  Items are rendered in the depth order in which they are added to the Group
                    atari1 = g.sp(100, 100, 'atari1');
                    atari2 = g.sp(250, 90, 'atari2');

                    g.oT(swapSprites, this);

       }

                function swapSprites() {

                    //The 2 Sprites are in the global world Group (World class extends the Group class), but this will work for any Group:

                    game.world.swap(atari1, atari2)

                }

                function render(){

                    game.debug.text('Tap screen to swap the children and therefore swap their indexes.', 10, 280);

                }}

REMOVEBETWEEN=function(){  z()


        game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

       function preload() {  g=$G(game)

           g.l.i('wasp', '/assets/sprites/wasp.png');
           g.l.i('sonic', '/assets/sprites/sonic_havok_sanity.png');
           g.l.i('phaser', '/assets/sprites/phaser.png')}

       var sprites;

       function create() {

           sprites = g.gr()

           //  First we'll create 10 'wasp' sprites
           for (var i = 0; i < 10; i++){sprites.cr(g.rX(), g.rY(), 'wasp')}

           //  Next we'll create 10 'sonic' sprites
           for (var i = 0; i < 10; i++){sprites.cr(g.rX(), g.rY(), 'sonic')}

           //  Finally we'll create 10 'phaser' sprites
           for (var i = 0; i < 10; i++){sprites.create(g.rX(), g.rY(), 'phaser')}

           this.input.onDown.addOnce(remove, this);

       }

       function remove() {

           //  This will remove all of the 'sonic' sprites from the Group
           //  because we're removing all sprites between indexes 10 through to 19
           sprites.removeBetween(10, 19);

       }

       function render() {

           game.debug.text('Group size: ' + sprites.total, 32, 32);

       }
   }

REMOVE=function(){z()

             game= Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });



             function preload() {g=$G(game)

                 g.l.ss('item','/assets/buttons/number-buttons-90x90.png', 90, 90);
                 g.l.i('rect','/assets/tests/200x100corners.png')}


             function create(){

                 items=g.gr()

                 var item;

                 for (var i=0;i<6;i++) {
                     // Directly create sprites from the group.
                     item = items.cr(90, 16 + 90 * i, 'item', i).nm('block' + i).iE(1).drag()

                     item.input.enableSnap(90, 90, false, true)

                     item.oDSS(function(item,pointer){
                         if(item.x<90){item.x=90}
                         if(item.x>400){items.remove(item)}
                     }, this)
                 }

                  g.sp(390, 0, 'rect').sc(2,3)

             }

             function render(){

                 game.debug.text('Group size: ' + items.total, 74, 580);
                 game.debug.text('Drop here to remove item from the Group', 394, 24);

             }





         }

BRINGGROUPTOTOP=function(){z()

             game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

            function preload() {g=$G(game)

                g.l.i('beast', '/assets/pics/shadow_of_the_beast2_karamoon.png');
                g.l.i('snot', '/assets/pics/nslide_snot.png');
                g.l.i('atari1', '/assets/sprites/atari130xe.png');
                g.l.i('sonic', '/assets/sprites/sonic_havok_sanity.png');
                g.l.i('coke', '/assets/sprites/cokecan.png');
                g.l.i('disk', '/assets/sprites/oz_pov_melting_disk.png')}


            function create(){


                g.sp(0,0,'beast')
                g1=g.gr() //will sit above the background image
                g2=g.gr() //will sit above Group 1


                //Now let's create some random sprites and
                // enable them all for drag and 'bring to top'

              _t(10,function(i){
                    g1.a(g.spR('atari1').nm('atari'+i).iE(1).drg())
                    g2.a(g.spR('sonic').nm('sonic'+i).iE(1).drg())
                })

                //  Add 2 control sprites into each group
                // - these cannot be dragged
                // but should be bought to the top each time

                coke=g1.cr(100,100,'coke')
                disk=g2.cr(400,300,'disk')

                //  Create a foreground image -
                // everything should appear behind this,
                // even when dragged

                snot=g.sp(g.cX(),g.h(),'snot').A(0.5, 1)

                //  You can click and drag any sprite
                // but Sonic sprites should always appear above the Atari sprites
                //  and both types of sprite should only ever appear
                // above the background and behind the

            }

            function update(){
                if(g.jR(One)){coke.bTT()}
                if(g.jR(Two)){disk.bTT()}}

            function render() {
                game.debug.inputInfo(32, 32);
            }
        }

MULTIPLEANIMS=function(){z()


           game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

            function preload() { g=sPhG(game)

                //  Here we load the Starling Texture Atlas and XML file
                g.l.atlasXML('seacreatures', '/assets/sprites/seacreatures.png',
                                                '/assets/sprites/seacreatures.xml');
                //	Here is the exact same set of animations but as a JSON file instead
                // g.l.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

                //	Just a few images to use in our underwater scene
                g.l.i('undersea', '/assets/pics/undersea.jpg')
                g.l.i('coral', '/assets/pics/seabed.png')}



            function create() {

                g.a.image(0, 0, 'undersea');

                jellyfish = g.a.sp(670, 20, 'seacreatures');

                //	In the texture atlas the jellyfish uses the frame names blueJellyfish0000 to blueJellyfish0032
                //	So we can use the handy generateFrameNames function to create this for us.
                jellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('blueJellyfish', 0, 32, '', 4), 30, true);
                jellyfish.animations.play('swim');

                //	Let's make some more sea creatures in the same way as the jellyfish

                crab = g.a.sp(550,480,'seacreatures')
                crab.animations.add('swim',
                    Phaser.Animation.generateFrameNames('crab1',0,25,'',4),30,true)
                crab.animations.play('swim')

                greenJellyfish = g.a.sp(330,100,'seacreatures')
                greenJellyfish.animations.add('swim',Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
                greenJellyfish.animations.play('swim')

                octopus=g.a.sp(160,400,'seacreatures')
                octopus.animations.add('swim',
                    Phaser.Animation.generateFrameNames('octopus',0,24,'',4),30,true)
                octopus.animations.play('swim')

                purpleFish = g.a.sp(800,413,'seacreatures')
                purpleFish.animations.add('swim',
                    Phaser.Animation.generateFrameNames('purpleFish',0,20,'',4),30,true)
                purpleFish.animations.play('swim')

                seahorse=g.a.sp(491,40,'seacreatures')
                seahorse.animations.add('swim',
                    Phaser.Animation.generateFrameNames('seahorse',0,5,'',4),30,true)
                seahorse.animations.play('swim')

                squid=g.a.sp(610,215,'seacreatures','squid0000')

                stingray=g.a.sp(80,190,'seacreatures')
                stingray.animations.add('swim',Phaser.Animation.generateFrameNames('stingray',0,23,'',4), 30, true);
                stingray.animations.play('swim')

                flyingfish=g.a.sp(60,40,'seacreatures','flyingFish0000')


                g.a.image(0,466,'coral')

                // to: function ( properties, duration, ease, autoStart, delay, repeat, yoyo ) {

                g.a.tween(purpleFish).to({x:-200},7500,
                    $E.Quadratic.InOut,true,0,1000,false)
                g.a.tween(octopus).to({ y: 530 }, 2000,
                    $E.Quadratic.InOut, true, 0, 1000, true)
                g.a.tween(greenJellyfish).to({ y: 250 }, 4000,
                    $E.Quadratic.InOut, true, 0, 1000, true)
                g.a.tween(jellyfish).to({ y: 100 }, 8000,
                    $E.Quadratic.InOut, true, 0, 1000, true)

            }}



COMBINEDTWEENS=function(){z()




       game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {preload:preload,create: create });

    function preload() {  g=$G(game)

        g.l.ss('pig', '/assets/sprites/invaderpig.png', 124, 104)
        g.l.i('starfield', '/assets/misc/starfield.jpg')
        g.l.i('mushroom', '/assets/sprites/mushroom2.png')}

    function create() {

        g.tSp(0,0,800,600,'starfield')
        p=g.sp(-50,200,'pig',1).sc(0.5,0.5)
        m=g.sp(380,200,'mushroom').A()

        g.tw(p).t({x:150},1000,$E.Bounce.Out).oC(firstTween,this).s()}

    function firstTween(){
        g.tw(m.scale).t({x:2,y:2},1000,None).oC1(theEnd,this).s()}

    function theEnd(){
        g.tw(p).t({x:-150},1000,$E.Bounce.Out).s()}
}




