GROUPVSGROUP=function(){z()
              game=Game(800, 600, Phaser.CANVAS, 'phaser-example', {preload:preload, create:create, update:update})
              function preload(){  g=$G(game).bc('red')

                g.l.i('phaser', '/assets/sprites/phaser-dude.png');
               g.l.i('bullet', '/assets/misc/bullet0.png');
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
                  g.ol(bs,vs,function(b,v){b.kill();v.kill()},null,this)
                  s.vxy(0,0)
                  if(cu.L()){s.vx(-300)}
                  if(cu.R()){s.vx(300)}
                  if(g.iD(Spacebar)){shoot()}}

              function shoot(){var b
                  if(g.n()>bTime){
                      if(b=bs.gFE(0))
                      {b.rs(s.x+6,s.y-8).vy(-300)
                          bTime=g.n(150)}}}}
THRUST=function(){z()

    isThrusting=false
    game=Game(800,600,Phaser.AUTO,'phaser-example',{preload:preload,create:create,update:update,render:render})

    function preload(){g=$G(game).bn(0,0,1920,1200)
        g.l.i('stars','/assets/misc/starfield.jpg')
        g.l.i('ship','/assets/sprites/thrust_ship2.png')
        g.l.i('jets','/assets/sprites/jets.png')}

    function create(){
        starfield=g.tSp(0,0,800,600,'stars').fTC(1)
        trail=g.em(0,0,1000).mP('jets').rt(0,0).a(1,0,6000).sc(1,0,1,0,6000)
        g.P2().ru(1.2)
        p=g.sp(200,200,'ship').p2()
        g.cm.f(p)
        cu=g.K()}

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

    function render(){

        // g.db.t(p.body.velocity.x * 10, 32, 32);
        // g.db.t(p.body.velocity.y * 10, 32, 48);

    }}
MASSVELOCITYTEST=function(){ z()



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
PLATFORMERBASICS=function(){z()



       game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

        function preload() {  g=$G(game).ARC(250)

            g.l.ss('dude', '/assets/games/starstruck/dude.png', 32, 48);
          g.l.i('background', '/assets/games/starstruck/background2.png')}


        facing = 'l';
        jumpTimer = 0;


        function create() {
            g.tSp(0, 0, 800, 600, 'background')

            p = g.sp(32, 32, 'dude').arc().clWB(1).bZ(20, 32, 5, 16);
            p.body.bounce.y=0.2
            p.an.a('l', [0, 1, 2, 3], 10, true)
            p.an.a('t', [4], 20, true)
            p.an.a('r', [5, 6, 7, 8], 10, true)

            cu=g.K()
            jumpButton=g.k(Spacebar)}

        function update() {

            p.vx(0)

            if (cu.L()){ p.vx(-150); if (facing != 'l'){ p.an.p('l'); facing='l'}}
            else if(cu.R()){p.vx(150); if (facing != 'r'){ p.an.p('r'); facing = 'r'}}
            else {if(facing != 'i'){p.an.s(); if(facing == 'l'){p.frame=0} else {p.frame=5}; facing='i'}}
            if (jumpButton.isDown && p.body.onFloor() && g.n()>jumpTimer){ p.vy( -250);jumpTimer = g.n(50)}

        }



        function render(){

            // game.debug.text(game.time.physicsElapsed, 32, 32);
            // game.debug.body(p);
            // game.debug.bodyInfo(p, 16, 24);

        }
    }






STARSTRUCK=function(){z()
    game=new Phaser.Game(800,600,Phaser.CANVAS,'phaser-example',{
        preload:preload,
        create:create,
        update:update,
        render:render})


    facing='left'
    jumpTimer=0


    function preload(){var g=$G(game)
        g.l.tilemap('level1',
            '/assets/games/starstruck/level1.json',
            null,
            Phaser.Tilemap.TILED_JSON)

        g.l.image('tiles-1', '/assets/games/starstruck/tiles-1.png')
        g.l.spritesheet('dude', '/assets/games/starstruck/dude.png', 32, 48)
        g.l.spritesheet('droid', '/assets/games/starstruck/droid.png', 32, 32)
        g.l.image('starSmall', '/assets/games/starstruck/star.png')
        g.l.image('starBig', '/assets/games/starstruck/star2.png')
        g.l.image('background', '/assets/games/starstruck/background2.png')}

    function create(){

        game.physics.startSystem(pArcade)

        game.stage.backgroundColor='#000000'

        bg=game.add.tileSprite(0,0,800,600,'background')
        bg.fixedToCamera = true

        map=game.add.tilemap('level1')
        map.addTilesetImage('tiles-1')

        map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ])

        layer=map.createLayer('Tile Layer 1')

        // layer.debug = true  //Un-comment this on to see the collision tiles

        layer.resizeWorld()

        game.physics.arcade.gravity.y=250
        player=game.add.sprite(32,32, 'dude')
        game.physics.enable(player, pArcade);

        player.body.bounce.y = 0.2
        player.body.collideWorldBounds = true
        player.body.setSize(20, 32, 5, 16)

        player.animations.add('left', [0,1,2,3],10, true)
        player.animations.add('right', [5,6,7,8],10, true)
        player.animations.add('turn', [4],20,true)

        game.camera.follow(player)
        cu=game.input.keyboard.createCursorKeys()
        jumpButton=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)}



    function update(){game.physics.arcade.collide(player,layer)

        //

        player.body.velocity.x=0

        if(cu.left.isDown){player.body.velocity.x = -150;
            if(facing != 'left'){player.animations.play('left');facing = 'left'}}

        else if (cu.right.isDown){
            player.body.velocity.x = 150;
            if (facing != 'right'){
                player.animations.play('right');
                facing = 'right'}}
        else{
            if (facing != 'idle'){player.animations.stop();
                if (facing == 'left'){player.frame = 0}
                else{player.frame=5}
                facing='idle'}}

        if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer){
            player.body.velocity.y = -250;
            jumpTimer = game.time.now + 750}}

    function render(){

        // g.db.t(game.time.physicsElapsed, 32, 32);
        // g.db.body(player);
        // g.db.bodyInfo(player, 16, 24);

    }}







STATES=function(){z()

        di('game_div').a().s({w:400, margin:'auto', mt:50})
        // game=new Phaser.Game(400,490,Phaser.AUTO,'')
        game= Game(400,490,Phaser.AUTO,'game_div')

        state={}
         state.main=function(){} // Creates a new 'main' state that wil contain the game

         state.main.prototype={

            preload:function(){g.l.i('hello',src('me'))},
            create:function(){ this.hello_sprite=game.add.sprite(250,300,'hello')},
            update:function(){this.hello_sprite.angle+=1}}// Function called 60 times per second


        game.state.add('main', state.main)
        game.state.start('main')}


MAGGOTS=function(){z()



 game=new Phaser.Game(
        800,600,
        Phaser.AUTO,
        'phaser-example',
     {preload: preload, create: create, update: update })

    function preload() {g=$G(game)

        g.l.i(
            'maggot',
            '/assets/sprites/maggot.png'
        )}

     
        pBoundsPad=100,
        pBnds=new Phaser.Rectangle(
            -pBoundsPad,
            -pBoundsPad,
            800+pBoundsPad*2,
            600+pBoundsPad*2) 

        tick=0

    function create(){

        batch=g.a.spB()

        var total=(g.renderType===Phaser.WEBGL)?5000:100
        for(var i=0;i<total;i++){
            var p=batch.create(
                g.w.randomX,
                g.w.randomY,
                'maggot')

            p.anchor.set(.5) 
            p.scale.set(.8 + rnd()*.3)
            p.direction = rnd()*PI*2
            p.turningSpeed = rnd()-.8
            p.speed=(2+rnd()*2)*.2
            p.offset=rnd()*100}}


    function update(){
        batch.forEach(updateMaggot,

            this,false);tick+=0.1}


    function updateMaggot(p){
        p=sPhSp(p)

        p.scale.y = 0.95 +  sin(tick + p.offset) * 0.05
        p.direction += p.turningSpeed * 0.01;
        p.p.x +=  sin(p.direction) * (p.speed * p.scale.y);
        p.p.y +=  cos(p.direction) * (p.speed * p.scale.y);
        p.rotation = -p.direction +  PI;

        // wrap the dudes by testing their bounds..
        
        if (p.p.x < pBnds.x)
            p.p.x += pBnds.width;
        else if (p.p.x > pBnds.x + pBnds.width)
            p.p.x -= pBnds.width;

        if (p.p.y < pBnds.y)
            p.p.y += pBnds.height;
        else if (p.p.y > pBnds.y + pBnds.height)
            p.p.y -= pBnds.height}

}
















SWAPTILES=function(){z()

              game=new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
                preload:preload,
                  create:create,
                  update:update,
                  render:render})

          function preload(){g=sPhG(game)

              g.l.tilemap('desert', '/assets/tilemaps/maps/desert.json', null,
                  Phaser.Tilemap.TILED_JSON);
              g.l.i('tiles', '/assets/tilemaps/tiles/tmw_desert_spacing.png');
              g.l.i('car', '/assets/sprites/car90.png')}

          function create(){

              map=g.a.tilemap('desert')
              map.addTilesetImage('Desert','tiles')
              layer=map.createLayer('Ground')
              layer.resizeWorld()
              sprite=g.a.sp(450,80,'car')
              sprite.anchor.setTo(.5,.5)
              g.ph.enable(sprite,pArcade)

              g.cm.f(sprite)

              cu=g.ip.kb.createCursorKeys()

              g.ip.onDown.addOnce(swapTiles,this)}

          function swapTiles(){map.swap(30,31)}

          function update(){
              sprite.body.velocity.x=0
              sprite.body.velocity.y=0
              sprite.body.angularVelocity=0
              if(cu.left.isDown){
                  sprite.body.angularVelocity=-200}
              else if(cu.right.isDown){
                  sprite.body.angularVelocity=200}
              if(cu.up.isDown){
                  sprite.body.velocity.copyFrom(
                      g.ph.ac.velocityFromAngle(
                          sprite.angle,
                          300))}}


          function render(){

              g.db.t('Click to swap tiles', 32, 32, 'rgb(0,0,0)');
              g.db.t('Tile X: ' + layer.getTileX(sprite.x), 32, 48, 'rgb(0,0,0)')
              g.db.t('Tile Y: ' + layer.getTileY(sprite.y), 32, 64, 'rgb(0,0,0)')

          }}









LAUNCHER=function(){z()
    catchFlag = false
    launchVelocity = 0


    game =  Game( 800, 600, Phaser.CANVAS, 'phaser-example', {
                 preload: preload,
                 create: create,
                 update: update,
                 render: render})




         function preload() {  g=$G(game).bc('#0072bc').ARC(200)

                g.l.i('analog', '/assets/tests/fusia.png')
              g.l.i('arrow', '/assets/sprites/longarrow2.png')
              g.l.i('ball', '/assets/sprites/pangball.png')}



          function create(){


              gx=g.a.graphics(0,0)
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

              Xvector=(arrow.x-ball.x) * 3;
              Yvector=(arrow.y-ball.y) * 3;
              ball.aGr(1).vxy(Xvector, Yvector)}




          function update() {

              arrow.rt( g.anB(arrow, ball) )

              if (catchFlag==true){
                  //  Track the ball sprite to the mouse


                  ball.x=g.iX()
                  ball.y=g.iY()

                  arrow.al(1)
                  analog.al(.5).rt(arrow.rt()-3.14/2).h(g.dTP(arrow))


                  launchVelocity=analog.h()}}


          function render() {

              g.db.text("Drag the ball and release to launch", 32, 32);

              g.db.bodyInfo(ball, 32, 64);

              // g.db.spriteInfo(ball, 32, 64);
              // g.db.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);

          }}






PFALL=function(){z()

    game=Game(800,600, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create, update: update, render: render })

    function preload(){
        g=$G(game).bc('#007236').bn(
            -2000,-2000,
            4000,4000)

        g.l.i('m', '/assets/sprites/mushroom2.png')
        g.l.i('p', '/assets/sprites/sonic_havok_sanity.png')}


    function create() {
        g.a.t(600,800,"-phaser-",{font:"32px Arial",fill:"#330088",align:"center"})

        d=sSp(g.a.sp(0,0,'p')).A()
        _t(100,function(){g.a.sp(g.rX(),g.rY(),'m')})

        cu=g.K()

        g.cm.f(d)

        d.checkWorldBounds=true}


    function update(){

        d.angle +=1000
        d.y+=10

        if(cu.up.isDown){d.y-=20}
        if(cu.left.isDown){d.x-=10}
        if(cu.right.isDown){d.x+=10}
    }


    function render(){

        g.db.cameraInfo(g.cm, 32, 32)}}




MOVEAROUNDWORLD=function(){z()

    game=Game(800,600, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create, update: update, render: render })

    function preload(){
        g=$G(game).bc('#007236').bn(-2000,-2000,4000,4000)
        g.l.i('m', '/assets/sprites/mushroom2.png')
        g.l.i('p', '/assets/sprites/sonic_havok_sanity.png')}


    function create() {
        g.a.t(600,800,"-phaser-",{font:"32px Arial",fill:"#330088",align:"center"})

        d=sSp(g.a.sp(0,0,'p')).A()

        d2=sSp(g.a.sp(-500,-500,'p')).A()
       _t(100,function(){
           g.a.sp(g.rX(),g.rY(),'m')})

        cu=g.K()

        //g.cm.f(d2)
       // d2.checkWorldBounds=true
    }


    function update(){

        d.angle +=1000

        d2.x+=10
        d2.y+=10
        if(cu.U()){
            if(cu.up.shiftKey){d.angle++}
            else{g.cm.y-=4}}

        if(cu.D()){
            if(cu.down.shiftKey){d.angle--}
            else{g.cm.y+=4}}

        if(cu.L()){
            if(cu.left.shiftKey){g.w.rotation-=.05}
            else{g.cm.x-=4}}

        if(cu.R()){
            if(cu.right.shiftKey){g.w.rotation+=0.05}
            else{g.cm.x+= 4}

        }}


    function render(){

        g.db.cameraInfo(g.cm, 32, 32)}}




BRINGCHILDTOP=function(){z()
                 game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

               function preload() {  g=$G(game)

                   g.l.i('atari1', '/assets/sprites/atari130xe.png')
                   g.l.i('atari2', '/assets/sprites/atari800xl.png')
                   g.l.i('atari4', '/assets/sprites/atari800.png')
                   g.l.i('sonic', '/assets/sprites/sonic_havok_sanity.png')
                   g.l.i('duck', '/assets/sprites/darkwing_crazy.png')
                   g.l.i('firstaid', '/assets/sprites/firstaid.png')
                   g.l.i('diamond', '/assets/sprites/diamond.png')
                   g.l.i('mushroom', '/assets/sprites/mushroom2.png')}

               function create() {
                   _t(20,function(){
                       g.sp(g.rX(),g.rY(),g.rnd.pick(g.imageKeys()))
                           .iE().drg()})}

               function render(){g.db.inputInfo(32,32)}
           }



TANKS=function(){z()

       EnemyTank=function(index,game,player,bs){

           var x=g.w.randomX,
               y=g.w.randomY,
               t=this

           t.g=t.game=g

           t.health = 3
           t.player = player
           t.bs = bs
           t.fireRate = 1000
           t.nextFire = 0
           t.alive = true

           t.shadow=g.a.sp(x,y,'enemy','shadow')
           t.tank=g.a.sp(x,y,'enemy','tank1')
           t.turret=g.a.sp(x,y,'enemy','turret')

           t.shadow.anchor.set(.5)
           t.tank.anchor.set(.5)
           t.turret.anchor.set(.3,.5)

           t.tank.name = index.toString()
           g.ph.enable(t.tank, pArcade)
           t.tank.body.immovable = false
           t.tank.body.collideWorldBounds = true
           t.tank.body.bounce.setTo(1, 1)

           t.tank.angle = g.rnd.angle()

           g.ph.ac.velocityFromRotation(t.tank.rotation, 100, t.tank.body.velocity)}


    EnemyTank.prototype.damage=function(){
        var t=this
        t.health-=1
        if(t.health<= 0){
               t.alive=false
               t.shadow.kill()
               t.tank.kill()
               t.turret.kill()
               return true}
           return false}

       EnemyTank.prototype.update=function() {

           var t=this
           t.shadow.x=t.tank.x
           t.shadow.y=t.tank.y
           t.shadow.rotation = t.tank.rotation;

           t.turret.x = t.tank.x;
           t.turret.y = t.tank.y;
           t.turret.rotation = t.game.physics.arcade.angleBetween(t.tank, t.player);

           if(t.game.physics.arcade.distanceBetween(t.tank,t.player)<300){
               if(t.game.time.now > t.nextFire && t.bs.countDead()>0){
                   t.nextFire = t.game.time.now + t.fireRate;

                   var b=t.bs.getFirstDead();

                   b.reset(t.turret.x, t.turret.y);

                   b.rotation =
                       t.game.physics.arcade.moveToObject(b,t.player,500)}}}


        game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

       function preload(){g=$G(game)

           g.l.at('tank','/assets/games/tanks/tanks.png', '/assets/games/tanks/tanks.json')
           g.l.at('enemy','/assets/games/tanks/enemy-tanks.png', '/assets/games/tanks/tanks.json')
           g.l.i('logo','/assets/games/tanks/logo.png')
           g.l.i('bullet','/assets/games/tanks/bullet.png')
           g.l.i('earth','/assets/games/tanks/scorched_earth.png')
           g.l.ss('kaboom', '/assets/games/tanks/explosion.png', 64, 64, 23)}

       var land,shadow,tank,turret,enemies,enemyBullets,enemiesTotal = 0,enemiesAlive = 0,explosions,logo,currentSpeed = 0,cu,bs,fireRate = 100,nextFire = 0;

       function create () {

           //  Resize our game world to be a 2000 x 2000 square
           g.w.setBounds(-1000, -1000, 2000, 2000);

           //  Our tiled scrolling background
           land = g.a.tSp(0, 0, 800, 600, 'earth');
           land.fixedToCamera = true;

           //  The base of our tank
           tank = g.a.sp(0, 0, 'tank', 'tank1');
           tank.anchor.setTo(0.5, 0.5);
           tank.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);

           //  This will force it to decelerate and limit its speed
           game.physics.enable(tank, pArcade);
           tank.body.drag.set(0.2);
           tank.body.maxVelocity.setTo(400, 400);
           tank.body.collideWorldBounds = true;

           //  Finally the turret that we place on-top of the tank body
           turret = g.a.sp(0,0,'tank','turret')
           turret.anchor.setTo(0.3, 0.5);

           //  The enemies bullet group
           enemyBullets = game.add.group();
           enemyBullets.enableBody = true;
           enemyBullets.physicsBodyType = pArcade;
           enemyBullets.createMultiple(100, 'bullet');

           enemyBullets.setAll('anchor.x', 0.5);
           enemyBullets.setAll('anchor.y', 0.5);
           enemyBullets.setAll('outOfBoundsKill', true);
           enemyBullets.setAll('checkWorldBounds', true);


           enemies=[]

           enemiesTotal=20
           enemiesAlive=20

           for(var i = 0; i < enemiesTotal; i++){enemies.push(new EnemyTank(i, game, tank, enemyBullets))}

           //  A shadow below our tank
           shadow=game.add.sprite(0,0,'tank','shadow')
           shadow.anchor.setTo(.5,.5)

           //  Our bullet group
           bs = game.add.group();
           bs.enableBody = true;
           bs.physicsBodyType = pArcade;
           bs.createMultiple(30, 'bullet', 0, false)
           bs.setAll('anchor.x', 0.5)
           bs.setAll('anchor.y', 0.5)
           bs.setAll('outOfBoundsKill', true)
           bs.setAll('checkWorldBounds', true)

           //  Explosion pool
           explosions = game.add.group();

           for(var i = 0; i < 10; i++){
               var explosionAnimation = explosions.create(0, 0, 'kaboom', [0], false);
               explosionAnimation.anchor.setTo(.5,.5)
               explosionAnimation.animations.add('kaboom')}

           tank.bringToTop()
           turret.bringToTop()

           logo = g.a.sp(0,200,'logo')
           logo.fixedToCamera=true

           g.input.onDown.add(removeLogo, this);

           g.cm.f(tank)
           g.cm.deadzone=new Ph.Rectangle(150, 150, 500, 300);
           g.cm.focusOnXY(0,0)

           cu=g.ip.kb.ck()}

       function removeLogo(){
           game.input.onDown.remove(removeLogo, this);
           logo.kill()}

       function update () {

           g.ph.ac.overlap(enemyBullets, tank, bulletHitPlayer, null, this);

           enemiesAlive=0

           for (var i=0; i < enemies.length; i++){if (enemies[i].alive)
               {
                   enemiesAlive++;
                   g.ph.ac.collide(tank, enemies[i].tank);
                   g.ph.ac.overlap(bs, enemies[i].tank, bulletHitEnemy, null, this);
                   enemies[i].update()}}

           if (cu.left.isDown){tank.angle -= 4}
           else if (cu.right.isDown){tank.angle += 4}

           if (cu.up.isDown){currentSpeed = 300}//  The speed we'll travel at

           else{if (currentSpeed > 0){currentSpeed -= 4}}

           if (currentSpeed > 0){game.physics.arcade.velocityFromRotation(tank.rotation, currentSpeed, tank.body.velocity)}

           land.tilePosition.x = -game.camera.x;
           land.tilePosition.y = -game.camera.y;

           //  Position all the parts and align rotations
           shadow.x=tank.x
           shadow.y=tank.y
           shadow.rotation=tank.rotation

           turret.x=tank.x
           turret.y=tank.y
           turret.rotation = game.physics.arcade.angleToPointer(turret)
           if (game.input.activePointer.isDown){fire()}}

       function bulletHitPlayer (tank, bullet){bullet.kill()}

       function bulletHitEnemy (tank, bullet) {

           bullet.kill();

           var destroyed = enemies[tank.name].damage();

           if (destroyed){
               var explosionAnimation = explosions.getFirstExists(false);
               explosionAnimation.reset(tank.x, tank.y);
               explosionAnimation.play('kaboom', 30, false, true)}}

       function fire () {

           if (game.time.now > nextFire && bs.countDead() > 0){
               nextFire = game.time.now + fireRate;

               var bullet = bs.getFirstExists(false);

               bullet.reset(turret.x, turret.y);

               bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, game.input.activePointer, 500);}}

       function render () {

           // g.db.t('Active Bullets: ' + bs.countLiving() + ' / ' + bs.length, 32, 32);
           g.db.t('Enemies: ' + enemiesAlive + ' / ' + enemiesTotal, 32, 32);

       }}


BREAKOUT=function(){z()



    ballOnPaddle = true
    lives = 3
    score = 0

        game =  Game(800, 600, Phaser.AUTO, 'phaser-example',
            { preload: preload, create: create, update: update });

      function preload() { var g=$G(game)

          g.l.at('breakout', '/assets/games/breakout/breakout.png', '/assets/games/breakout/breakout.json');
          g.l.i('starfield', '/assets/misc/starfield.jpg')}




      function create() {

          game.physics.startSystem(pArcade);

          //  We check bounds collisions against all walls other than the bottom one
          game.physics.arcade.checkCollision.down = false;

          s = game.add.tileSprite(0, 0, 800, 600, 'starfield');

          bricks = game.add.group();
          bricks.enableBody = true;
          bricks.physicsBodyType = pArcade;



          for (var y = 0; y < 4; y++){
              for (var x = 0; x < 15; x++)
              {brick = bricks.create(120 + (x * 36), 100 + (y * 52),
                  'breakout', 'brick_' + (y+1) + '_1.png');
                  brick.body.bounce.set(1)
                  brick.body.immovable=true}}

          paddle = g.a.sp(g.w.centerX,
              500, 'breakout', 'paddle_big.png');
          paddle.anchor.setTo(0.5, 0.5);

          game.physics.enable(paddle, pArcade);

          paddle.body.collideWorldBounds = true;
          paddle.body.bounce.set(1);
          paddle.body.immovable = true;

          ball = game.add.sprite(game.world.centerX, paddle.y - 16, 'breakout', 'ball_1.png');
          ball.anchor.set(0.5);
          ball.checkWorldBounds = true;

          game.physics.enable(ball, pArcade);

          ball.body.collideWorldBounds = true;
          ball.body.bounce.set(1);

          ball.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

          ball.events.onOutOfBounds.add(ballLost, this)

          scoreText = game.add.text(32, 550, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
          livesText = game.add.text(680, 550, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
          introText = game.add.text(game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
          introText.anchor.setTo(0.5, 0.5)

          game.input.onDown.add(releaseBall,this)}

      function update () {

          //  Fun, but a little sea-sick inducing :) Uncomment if you like!
          // s.tilePosition.x += (game.input.speed.x / 2);

          paddle.body.x = game.input.x;

          if (paddle.x < 24){paddle.x = 24} else if (paddle.x > game.width - 24){paddle.x = game.width - 24}

          if (ballOnPaddle)
          {ball.body.x = paddle.x}
          else{
              game.physics.arcade.collide(ball, paddle, ballHitPaddle, null, this)
              game.physics.arcade.collide(ball, bricks, ballHitBrick, null, this)} }

      function releaseBall () {

          if (ballOnPaddle){
              ballOnPaddle=false
              ball.body.velocity.y=-300
              ball.body.velocity.x=-75
              ball.animations.play('spin')
              introText.visible=false}}

      function ballLost(){
          lives--
          livesText.text='lives: '+lives
          if(lives===0){gameOver()}
          else{ballOnPaddle=true
              ball.reset(paddle.body.x+16,paddle.y-16)
              ball.animations.stop()}}

      function gameOver(){
          ball.body.velocity.setTo(0,0)
          introText.text='Game Over!'
          introText.visible=true}

      function ballHitBrick (_ball,_brick){
          _brick.kill()
          score+=10
          scoreText.text='score: '+score
          //  Are they any bricks left?
          if (bricks.countLiving()==0){
              //  New level starts
              score += 1000;
              scoreText.text = 'score: ' + score;
              introText.text = '- Next Level -';
              //  Let's move the ball back to the paddle
              ballOnPaddle = true;
              ball.body.velocity.set(0);
              ball.x = paddle.x + 16;
              ball.y = paddle.y - 16;
              ball.animations.stop();
              //  And bring the bricks back from the dead :)
              bricks.callAll('revive')}}

      function ballHitPaddle (_ball,_paddle) {

          diff=0

          if(_ball.x < _paddle.x){
              //  Ball is on the left-hand side of the paddle
              diff = _paddle.x - _ball.x;
              _ball.body.velocity.x = (-10 * diff)}
          else if (_ball.x > _paddle.x){
              //  Ball is on the right-hand side of the paddle
              diff = _ball.x -_paddle.x;
              _ball.body.velocity.x = (10 * diff)}
          else{
              //  Ball is perfectly in the middle
              //  Add a little random X to stop it bouncing straight up!
              _ball.body.velocity.x = 2 + rnd() * 8}}}









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
            g.db.t('x: ' + a2.x, a2.x, a2.y - 4)}}




WORLDSPRITE=function(){z()


    game= Game(800, 600, Phaser.CANVAS, 'phaser-example', {
              preload: preload, create: create, update: update, render: render })

        function preload(){ g=$G(game)

            g.l.i('backdrop','/assets/pics/remember-me.jpg');
            g.l.i('card','/assets/sprites/mana_card.png')}

        function create() {

            g.bn(0, -500, 1920, 1200)

            g.a.sp(0,0,'backdrop')

            p = g.a.sp(200, 200, 'card')

            g.cm.f(p)

            cu=g.K()
        }

        function update(){

            if(cu.left.isDown){
                p.x-=4}
            if(cu.right.isDown){
                p.x+=4}
            if(cu.up.isDown){
                p.y-= 4}
            if (cu.down.isDown){
                p.y += 4}
        }

        function render(){
            g.db.cameraInfo(g.cm, 500, 32);
            g.db.spriteCoords(p, 32, 32);
            //g.db.physicsBody(p.body);

        }
}





FIXEDTOCAMERA=function(){z()
       game = Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render : render });

        function preload() {  g=$G(game).bc('#007236')

            g.l.i('mushroom', '/assets/sprites/mushroom2.png')
            g.l.i('sonic', '/assets/sprites/sonic_havok_sanity.png')
            g.l.i('phaser', '/assets/sprites/phaser1.png')}


        function create() {

            g.bn(-1000, -1000, 2000, 2000)

            _t(200,function(){g.a.sp(g.rX(), g.rY(),'mushroom')})

            g.a.t(0,0,"this text scrolls\nwith the background",
                {font:"32px Arial",fill:"#f26c4f",align:"center"})

            logo1=g.a.sp(0,0,'phaser')
            logo1.fixedToCamera=true
            logo1.cameraOffset.setTo(100,100)

            logo2=g.a.sp(0,0,'phaser')
            logo2.fixedToCamera=true
            logo2.cameraOffset.setTo(500,100)


            var t=g.a.t(0,0,"this text is fixed to the camera",
                {font: "32px Arial", fill: "#ffffff", align: "center" });
            t.fixedToCamera=true
            t.cameraOffset.setTo(200, 500);

            g.tw(logo2.cameraOffset).t({y:400},2000,
                $E.Back.InOut, true,0,2000,true)

            cu=g.ip.kb.ck()}

        function update() {

            if (cu.up.isDown){g.cm.y -= 4}
            else if (cu.down.isDown){g.cm.y += 4}

            if (cu.left.isDown){g.cm.x -= 4}
            else if (cu.right.isDown)
            {game.cm.x += 4}}

        function render() {

            g.db.cameraInfo(game.camera, 32, 32)}
}







MULTIBALL=function(){z()

       game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render })

      function preload() {

          g=$G(game).bc('#2d2d2d').ARC(1400)

          g.l.i('atari', '/assets/sprites/atari130xe.png')
          g.l.ss('bs', '/assets/sprites/balls.png', 17, 17)}



    function create(){


        bs=g.group().make(250,'bs',0,false)


        p=g.a.sp(300,450,'atari')


        //  Enable physics on everything added to the world so far
        // the true parameter makes it recurse down into children

        g.ph.arcade.enable(
            g.w,
            true
        )



        sSp(p)

        p.b.allowGravity=0
        p.b.immovable=true
        cu=g.K()
        g.t.events.loop(150,fire,this)
        g.a.t(16,16,'Left/Right to move',{font:'18px Arial',fill:'#ffffff'})}


      function fire(){var b=bs.getFirstExists(false)
          if(b){
              b.frame=g.rnd.integerInRange(0,6)
              b.exists=true
              b.reset(g.w.randomX,0)
              b.body.bounce.y=0.8
          }}



      function reflect(a,b){
          if (b.y>(p.y+5)){return true}
          else{
              b.body.velocity.x=  p.body.velocity.x
              b.body.velocity.y*= -(b.body.bounce.y)
              return false}}



      function update(){

          g.ph.arcade.collide(p,bs,
              null,reflect,this)

          p.b.v.x=0

          if (cu.left.isDown){p.b.v.x=-200}
          else if (cu.right.isDown){p.b.v.x=200}

          bs.forEachAlive(checkBounds,this)}





      function checkBounds(b){if(b.y>500){b.kill()}}

      function render(){}}





PIXELPICKSCROLLING=function(){z()

       game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', {
           preload: preload, create: create, update: update, render: render });

       function preload() {g=$G(game)

           g.l.ss('mummy', '/assets/sprites/metalslug_mummy37x45.png', 37, 45, 18)
           g.l.i('stars', '/assets/misc/starfield.jpg')}


        camSpeed = 4


       function create() {

           game.ARC()


           game.bn(0,0, 4000, 2000)

           //  Scrolling background
           s = g.a.tileSprite(0, 0, 4000, 600, 'stars');

           g.ARC(b=sSp(g.a.sp(0, 300, 'mummy')))


           b.scale.set(10)
           b.smoothed = false
           b.an.a('walk')
           b.an.p('walk', 5, true)


           b.b.v.setTo(50, 0)

           //  Listen for input events on this sprite
           b.inputEnabled = true

           //  Check the pixel data of the sprite
           b.ip.pixelPerfectClick=true

           b.events.onInputDown.add(tint,this)}

       function tint() {b.tint=rnd()*0xffffff}

       function update() {

           if (g.iD(Left)){
               g.cm.x-=camSpeed
               if(!g.cm.atLimit.x){s.tilePosition.x += camSpeed}}

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



LAUNCHERFOLLOW=function(){z()

                  game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

                  function preload(){g=sPhG(game)

                      g.l.i('background','/assets/misc/starfield.jpg')
                      g.l.i('player','/assets/sprites/phaser-dude.png')
                      g.l.i('analog', '/assets/tests/fusia.png')
                      g.l.i('arrow', '/assets/sprites/longarrow2.png')}


                   catchFlag = false
                 launchVelocity = 0

                  function create() {

                      g.ph.startSystem(pArcade)

                      g.world.setBounds(0, 0, 3400, 1000);
                      g.add.tileSprite(0, 0, 3400, 1000, 'background')

                      analog = g.add.sprite(200, 450, 'analog')
                      analog.width = 8;
                      analog.rotation = 220;
                      analog.alpha = 0;
                      analog.anchor.setTo(0.5, 0.0);

                      arrow = g.add.sprite(200, 450, 'arrow')
                      arrow.anchor.setTo(0.1, 0.5)
                      arrow.alpha = 0;

                      p = g.add.sprite(150, 320, 'player')

                      g.ph.enable([p], pArcade);

                      p.anchor.set(0.5);
                      p.body.collideWorldBounds = true;
                      p.body.bounce.set(0.9);
                      p.body.drag.set(20, 20);

                      // Enable input.
                      p.inputEnabled = true;
                      p.input.start(0, true);
                      p.events.onInputDown.add(set);
                      p.events.onInputUp.add(launch);

                      g.camera.follow(p, Phaser.Camera.FOLLOW_TOPDOWN)}

                  function set(p,pointer){
                      catchFlag=true
                      g.camera.follow(null)
                      p.body.moves = false
                      p.body.velocity.setTo(0,0)
                      arrow.reset(p.x, p.y)
                      analog.reset(p.x, p.y)}

                  function launch() {

                      catchFlag = false;
                      p.body.moves = true;
                      g.camera.follow(p, Phaser.Camera.FOLLOW_TOPDOWN);

                      arrow.alpha = 0;
                      analog.alpha = 0;

                      Xvector = (arrow.x - p.x) * 3
                      Yvector = (arrow.y - p.y) * 3

                      p.body.velocity.setTo(Xvector, Yvector)}

                  function update() {

                      arrow.rotation = g.ph.arcade.angleBetween(arrow, p);

                      if (catchFlag == true){
                          //  Track the ball sprite to the mouse
                          p.x = g.input.activePointer.worldX;
                          p.y = g.input.activePointer.worldY;

                          arrow.alpha = 1;
                          analog.alpha = 0.5;
                          analog.rotation = arrow.rotation - 3.14 / 2;
                          analog.height = g.ph.arcade.distanceBetween(arrow, p);
                          launchVelocity = analog.height}}

                  function render() {

                      g.db.text("Drag the sprite and release to launch", 32, 32, 'rgb(0,255,0)');
                      g.db.cameraInfo(g.camera, 32, 64);
                      g.db.spriteCoords(p, 32, 150);
                      g.db.text("Launch Velocity: " + parseInt(launchVelocity), 550, 32, 'rgb(0,255,0)')}}









ANGLEPOINTER=function(){z()


    g= Game(800,600,Phaser.CANVAS,'phaser-example',{
        preload:preload,
        create:create,
        update:update,
        render:render})


    function preload(){

        g=$G(g).bc('blue').ARC()
        g.l.i('ar','/assets/sprites/arrow.png')}

    function create(){


           s=sSp(g.a.sp(400,300,'ar')).A()
    }

    function update(){

        s.rotation=g.ph.ac.angleToPointer(s)}

    //This will update the sprite.rotation so that it points
    // to the currently active pointer //
    // On a Desktop that is the mouse, on mobile the most recent finger press.


    function render(){
        g.db.spI(s,32,32)}
}



        INPUTPRIORITY=function(){z()

            var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

            function preload() {

                g.l.i('manga', 'assets/pics/manga-girl.png');
                g.l.i('disk', 'assets/sprites/copy-that-floppy.png');
                g.l.i('card', 'assets/sprites/mana_card.png');

            }

            function create() {

                game.stage.backgroundColor = '#4b0049';

                //  Note the input.priorityID values below.

                //  Even though the card and disk sprites visually appear on-top of the manga sprite,
                //  because they have lower priorityIDs the manga sprite gets priority in all input events.

                //  Without the priorityID, input priority is given to the sprite at the top of the display list
                //  (in this case to card).

                var manga = game.add.sprite(100, 100, 'manga');
                manga.inputEnabled = true;
                manga.input.enableDrag();
                manga.input.priorityID = 2;

                var disk = game.add.sprite(200, 200, 'disk');
                disk.inputEnabled = true;
                disk.input.enableDrag();
                disk.input.priorityID = 1;

                var card = game.add.sprite(300, 300, 'card');
                card.inputEnabled = true;
                card.input.enableDrag();
                card.input.priorityID = 0;

            }

            function render() {

                game.debug.text("Drag the Sprites", 32, 32);

            }
        }

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


SHOOTPOINTER=function(){z()

       var game = Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

       function preload() {g=sPhG(game)

           g.l.i('ar', '/assets/sprites/arrow.png');
           g.l.i('bullet', '/assets/sprites/purple_ball.png')}


    fireRate=100
    nextFire=0

       function create(){

           g.ARC()


           bs=g.a.gr()

           bs.enableBody = true
           bs.physicsBodyType = pArcade

           bs.createMultiple(50,'bullet')


           bs.setAll('checkWorldBounds', true)
           bs.setAll('outOfBoundsKill', true)

           sp=g.a.sp(400,300,'ar')
           sp.anchor.set(.5)
           g.ph.enable(sp,pArcade)
           sp.body.allowRotation=false}


       function update(){

           sp.rotation = g.ph.ac.angleToPointer(sp);
           if (g.ip.activePointer.isDown){fire()}

       }


       function fire(){
           if(
               g.t.now>nextFire && bs.countDead()>0
               ){

               nextFire=g.t.now + fireRate
               var b=bs.getFirstDead()

               b.reset(sp.x-8, sp.y-8)
               g.ph.ac.moveToPointer(b,300)}}



       function render(){
           g.db.t('Active Bullets: '+bs.countLiving()+'/'+bs.total,32,32)
           g.db.spI(sp, 32, 450)}}



CSVCOLLIDE=function(){z()

       game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

       function preload() {  g=sPhG(game)

           g.l.tilemap('map','/assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
           g.l.i('tiles','/assets/tilemaps/tiles/catastrophi_tiles_16.png')
           g.l.ss('player','/assets/sprites/spaceman.png',16,16)}



       function create() {


           map = g.a.tilemap('map', 16, 16) //  Because we're loading CSV map data we have to specify the tile size here or we can't render it


           map.addTilesetImage('tiles')//  Now add in the tileset
           layer = map.createLayer(0);
           layer.resizeWorld();
           map.setCollisionBetween(54, 83)//  This isn't totally accurate, but it'll do for now

           // layer.debug = true//  Un-comment this on to see the collision tiles



           p = g.a.sp(48,48,'player',1)
           g.ph.enable(p, pArcade)

           p=sPhSp(p)
           p.an.a('left', [8,9], 10, true)
           p.an.a('right', [1,2], 10, true)
           p.an.a('up', [11,12,13], 10, true)
           p.an.a('down', [4,5,6], 10, true)



           p.b.setSize(10, 14, 2, 1);

           g.cm.f(p);

           //  Allow cu to scroll around the map
           cu = g.ip.kb.createCursorKeys();

           var help = g.a.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
           help.fixedToCamera = true;

       }

       function update() {

           g.ph.ac.collide(p, layer);

           p.b.v.set(0)

           if(cu.left.isDown){
               p.b.velocity.x = -100;
               p.p('left')}
           else if (cu.right.isDown)
           {
               p.body.velocity.x = 100;
               p.play('right')}
           else if (cu.up.isDown){
               p.body.velocity.y = -100;
               p.play('up')}
           else if (cu.down.isDown){
               p.body.velocity.y = 100;
               p.play('down')}
           else
           {p.animations.stop()}}

       function render(){

           // g.db.body(p);

       }}






CALLALLANIMATIONS=function(){z()
         game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create })
         function preload(){g=$G(game)
             g.l.ss('coin','/assets/sprites/coin.png',32,32)}
         function create(){
             coins=g.gr()
             _t(5000,function(){coins.crR('coin',0)})
             coins.cA('an.add','an','spin',[0,1,2,3,4,5],10,true).cA('an.play','an','spin')}}


CALLALL=function(){z()


               game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

              function preload() { g=$G(game)

                  g.l.ss('item', '/assets/buttons/number-buttons-90x90.png', 90, 90)
                  g.l.i('reviveBtn', '/assets/buttons/revive-button.png')}

              function create(){

                    _t(3,function(i){
                        g.sp(290,98*(i+1),'item',i).iE(1).oIU(kill)
                        g.sp(388,98*(i+1),'item',i+3).iE(1).oIU(kill)})

                  g.bt(270,400,'reviveBtn',function(){g.cA('revive')},this,0,0,0)}

              function kill(i){i.kill()}




              function render(){

                  game.debug.text('Tap or click an item to kill it', 160, 500);
                  game.debug.text('Press the Revive button to revive them all.', 160, 520);

              }
}




DISPLAYORDER=function(){z()

         game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

        function preload() {  g=$G(game)

            game.load.image('atari1', '/assets/sprites/atari130xe.png')
            game.load.image('atari2', '/assets/sprites/atari800xl.png')
            game.load.image('card', '/assets/sprites/mana_card.png')}



        function create() {

            items=g.gr()
            items.cr(64,100,'atari1')
            card=items.cr(240,80,'card')
            items.cr(280,100,'atari2')

            g.oT1(function(){
                    card.kill()
                    g.oT1(function(){
                        items.getFirstDead().revive()},this)
                },this)}
    }




EXTENDINGAGROUP=function(){z()


           MonsterGroup = function(g,im,act){
               Phaser.Group.call(this,g)
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


 game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload(){  g=$G(game)

        g.l.ss('veg', '/assets/sprites/fruitnveg32wh37.png', 32, 32)}

    function create(){
        veg=game.gr().mult(20,'veg',0,false)
        g.rp(Second,20,resurrect,this)}

    function resurrect(){
        var i=veg.getFirstDead()
        if(i){i.reset(g.rX(),g.rY());i.frame = g.rI(0,36)}}

    function update(){}

    function render() {
        game.debug.text('One item will be resurrected every second', 32, 32);
        game.debug.text('Living: ' + veg.countLiving() + '   Dead: ' + veg.countDead(), 32, 64)}
}





GROUPTRANSFORM=function(){z()


              game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });



                   function preload(){  g=$G(game)

                       game.load.image('eye', '/assets/sprites/robot/eye.png');
                       game.load.image('body', '/assets/sprites/robot/body.png');
                       game.load.image('arm-l', '/assets/sprites/robot/arm-l.png');
                       game.load.image('arm-r', '/assets/sprites/robot/arm-r.png');
                       game.load.image('leg-l', '/assets/sprites/robot/leg-l.png');
                       game.load.image('leg-r', '/assets/sprites/robot/leg-r.png');

                   }

                   function create() {

                      // game.stage.backgroundColor = '#124184';

                       // Use groups of sprites to create a big robot.
                       // Robot itself, you can subclass group class in a real game.
                       robot = g.gr()

                       // Robot components.
                       robot.cr(90, 175, 'arm-l');
                       robot.cr(549, 175, 'arm-r');
                       robot.cr(270, 325, 'leg-l');
                       robot.cr(410, 325, 'leg-r');
                       robot.cr(219, 32, 'body');
                       robot.cr(335, 173,'eye');


                       robot.setAll('inputEnabled',true)
                       robot.callAll('input.enableDrag','input')

                   }

                   function render() {

                       game.debug.text('The robot is a group and every component is a sprite.', 16, 20);
                       game.debug.text('Drag parts to re-position them. ', 16, 40);

                   }

               }


RECYCLING=function(){z()
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

    var enemies;

    function preload() {

        game.load.image('baddie', '/assets/sprites/space-baddie.png');
        game.load.spritesheet('button', '/assets/buttons/baddie-buttons.png', 224, 70);

    }

    function create() {

        // Create a enemies group to store the baddies
        enemies = game.add.group();

        // Create some enemies.
        for (var i = 0; i < 8; i++)
        {
            // Since the getFirstExists() which we'll use for recycling
            // cannot allocate new objects, create them manually here.
            enemies.create(360 + Math.random() * 200, 120 + Math.random() * 200, 'baddie');
        }

        // Create buttons to create and kill baddies.
        game.add.button(16, 50, 'button', createBaddie,this, 0, 0, 0);
        game.add.button(16, 130, 'button', killBaddie,this, 1, 1, 1);

    }

    function killBaddie() {

        var baddie = enemies.getFirstAlive();

        if (baddie)
        {
            baddie.kill();
        }

    }

    function createBaddie() {

        // Recycle using getFirstExists(false)
        // Notice that this method will not create new objects if there's no one
        // available, and it won't change size of this group.
        var enemy = enemies.getFirstExists(false);

        if (enemy)
        {
            enemy.revive();
        }

    }

    function render() {

        game.debug.text('Recycle baddies from a group using getFirstExists.', 16, 24);
        game.debug.text('Notice that you cannot add more than 8 baddies since we only create 8 instance.', 16, 36);
        game.debug.text('Living baddies: ' + (enemies.countLiving()), 340, 420);

    }
}
TILECALLBACKS=function(){z()

    var m,l,s,cu,

        g=new Phaser.Game(800,600,Phaser.CANVAS,'phaser-example',{
            preload:function(){
                g.load.tilemap('map','/assets/tilemaps/maps/tile_collision_test.json',null,
                    Phaser.Tilemap.TILED_JSON)
                g.load.image('ground_1x1','/assets/tilemaps/tiles/ground_1x1.png')
                g.load.image('phaser','/assets/sprites/arrow.png')
                g.load.spritesheet('coin','/assets/sprites/coin.png',32,32)},

            create:function(){g=sPhG(g)

                g.p.startSystem(pArcade)
                m=g.a.tilemap('map')
                m.addTilesetImage('ground_1x1')
                m.addTilesetImage('coin')
                m.setCollisionBetween(1,12)
                m.setTileIndexCallback(26, hitCoin, this) //This will set Tile ID 26 (the coin) to call the hitCoin function when collided with
                m.setTileLocationCallback(2, 0, 1, 1, hitCoin, this) //This will set the map location 2, 0 to call the function
                l=m.createLayer('Tile Layer 1')
                l.resizeWorld()
                s=g.a.sprite(260,100,'phaser')
                s.anchor.set(.5)
                g.p.enable(s)

        s.body.setSize(16,16,8,8)
        s.body.maxAngular=500 //We'll set a lower max angular velocity here to keep it from going totally nuts
        s.body.angularDrag=50 //Apply a drag otherwise the sprite will just spin and never slow down

        g.c.follow(s)

        cu=g.i.keyboard.createCursorKeys()}, update:function(){

        g.p.arcade.collide(s,l)

        s.body.velocity.x=0
        s.body.velocity.y=0
        s.body.angularVelocity=0

        if (cu.left.isDown){s.body.angularVelocity=-200}
        else if (cu.right.isDown){s.body.angularVelocity=200}

        if(cu.up.isDown){
            g.p.arcade.velocityFromAngle(s.angle, 200, s.body.velocity)}},
            render:function(){g.db.body(s)} })










  hitCoin=function(sprite,tile){tile.alpha=.2
                  l.dirty=true
                  return false}






}


SWAPCHILDREN=function(){z()



                 game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

                function preload() {g=$G(game)

                    game.load.image('atari1', '/assets/sprites/atari130xe.png');
                    game.load.image('atari2', '/assets/sprites/atari800xl.png');

                }

                var atari1;
                var atari2;

                function create() {

                    //  Items are rendered in the depth order in which they are added to the Group
                    atari1 = game.add.sprite(100, 100, 'atari1');
                    atari2 = game.add.sprite(250, 90, 'atari2');

                    game.input.onTap.add(swapSprites, this);

       }

                function swapSprites() {

                    //The 2 Sprites are in the global world Group (World class extends the Group class), but this will work for any Group:
                    game.world.swap(atari1, atari2);

                }

                function render () {

                    game.debug.text('Tap screen to swap the children and therefore swap their indexes.', 10, 280);

                }}



REMOVEBETWEEN=function(){  z()


        game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

       function preload() {  g=$G(game)

           game.load.image('wasp', '/assets/sprites/wasp.png');
           game.load.image('sonic', '/assets/sprites/sonic_havok_sanity.png');
           game.load.image('phaser', '/assets/sprites/phaser.png')}

       var sprites;

       function create() {

           sprites = game.add.group();

           //  First we'll create 10 'wasp' sprites
           for (var i = 0; i < 10; i++)
           {
               sprites.create(game.world.randomX, game.world.randomY, 'wasp');
           }

           //  Next we'll create 10 'sonic' sprites
           for (var i = 0; i < 10; i++)
           {
               sprites.create(game.world.randomX, game.world.randomY, 'sonic');
           }

           //  Finally we'll create 10 'phaser' sprites
           for (var i = 0; i < 10; i++)
           {
               sprites.create(game.world.randomX, game.world.randomY, 'phaser');
           }

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

             game=new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });



             function preload() {g=$G(game)

                 game.load.spritesheet('item', '/assets/buttons/number-buttons-90x90.png', 90, 90);
                 game.load.image('rect', '/assets/tests/200x100corners.png')}


             function create() {

                 // Create item container group.
                 items = game.add.group();

                 // Add some items and add them to the container group,
                 // then you can drag and drop them to remove.
                 var item;

                 for (var i = 0; i < 6; i++)
                 {
                     // Directly create sprites from the group.
                     item = items.create(90, 16 + 90 * i, 'item', i);

                     item.name = 'block' + i;

                     // Enable input detection, then it's possible be dragged.
                     item.inputEnabled = true;

                     // Make this item draggable.
                     item.input.enableDrag();

                     // Then we make it snap to 90x90 grids.
                     item.input.enableSnap(90, 90, false, true);

                     // Add a handler to remove it using different options when dropped.
                     item.events.onDragStop.add(dropHandler, this);
                 }

                 // Create a rectangle drop it at this rectangle to
                 // remove it from origin group normally or
                 // cut it from the group's array entirely.
                 var rect = game.add.sprite(390, 0, 'rect');
                 rect.scale.setTo(2.0, 3.0);

             }

             function render() {

                 game.debug.text('Group size: ' + items.total, 74, 580);
                 game.debug.text('Drop here to remove item from the Group', 394, 24);

             }

             function dropHandler(item, pointer) {

                 if (item.x < 90)
                 {
                     item.x = 90;
                 }
                 else if (item.x > 400)
                 {
                     //  Remove the item from the Group.
                     items.remove(item);
                 }

             }

         }
MARIO=function(){z()

    game= Game(800, 600, Phaser.AUTO, 'phaser-example', {
        preload:preload,
        create:create,
        update:update
    })




            function preload(){
                g=$G(game)
                g.st.backgroundColor='#787878'
                g.l.tilemap('mario', '/assets/tilemaps/maps/super_mario.json',
                    null, Phaser.Tilemap.TILED_JSON)
                g.l.i('tiles', '/assets/tilemaps/tiles/super_mario.png')
                g.l.i('player', '/assets/sprites/phaser-dude.png')}


            function create(){

                m=g.a.tm('mario')
                m.addTilesetImage('SuperMarioBros-World1-1', 'tiles')
                l=m.createLayer('World1')
                 l.resizeWorld()
                cu=g.K()}

            function update(){
                if(cu.left.isDown){g.cm.x-=8}
                if(cu.right.isDown){g.cm.x += 8}
                //if(cu.up.isDown){g.cm.y-=8}
                //if(cu.down.isDown){g.cm.y += 8}
                }
}



CONTACTEVENTS=function(){z()

    game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
    result='Move with the cursors'

    function preload(){g=$G(game).P2().ru(.9)
        g.l.i('contra2','/assets/pics/contra2.png')
        g.l.i('block','/assets/sprites/block.png')
        g.l.i('wizball','/assets/sprites/wizball.png')
        g.l.i('t1','/assets/sprites/tetrisblock1.png')
        g.l.i('t2','/assets/sprites/tetrisblock2.png')
        g.l.i('t3','/assets/sprites/tetrisblock3.png')
        g.l.ph('physicsData','/assets/physics/sprites.json')}

    function create(){
        g.sp(200,200,'contra2').p2().clS().lP('physicsData', 'contra2')
        g.sp(500,500,'wizball').p2().sC(45)
        g.sp(100,450,'t1').p2().clS().lP('physicsData', 'tetrisblock1')
        g.sp(300,450,'t2').p2().clS().lP('physicsData', 'tetrisblock2')
        g.sp(650,350,'t3').p2().clS().lP('physicsData', 'tetrisblock3')
        b=g.sp(500,200,'block').p2().oBC(function(body, shapeA, shapeB, equation){result = 'You last hit: '+body.sprite.key})
        cu=g.K()}

    function update(){b.sZV()
        if(cu.L()){b.mL(200)}
        if(cu.R()){b.mR(200)}
        if(cu.U()){b.mU(200)}
        if(cu.D()){b.mD(200)}}

    function render(){g.db.text(result,32,32)}

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



GENMATCH=function(){
       var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
           preload: preload, create: create, update: update });

       var GEM_SIZE = 64,
           GEM_SPACING = 2,GEM_SIZE_SPACED = GEM_SIZE + GEM_SPACING,BOARD_COLS, BOARD_ROWS,MATCH_MIN = 3
            // min number of same color gems required in a row to be considered a match

       var gems,selectedGem,selectedGemStartPos,selectedGemTween,
           tempShiftedGem,tempShiftedGemTween,allowInput;

       function preload() {
           g.l.spritesheet("GEMS", "/assets/sprites/diamonds32x5.png", GEM_SIZE, GEM_SIZE)}

       function create() {

           // fill the screen with as many gems as possible
           spawnBoard();

           // currently selected gem starting position. used to stop player form moving gems too far.
           selectedGemStartPos = { x: 0, y: 0 };

           // used to disable input while gems are dropping down and respawning
           allowInput = true}

       function update() {

           // when the mouse is released with a gem selected
           // 1) check for matches
           // 2) remove matched gems
           // 3) drop down gems above removed gems
           // 4) refill the board

           if (game.input.mousePointer.justReleased()) {

               if (selectedGem != null) {

                   checkAndKillGemMatches(selectedGem);

                   if (tempShiftedGem != null) {
                       checkAndKillGemMatches(tempShiftedGem);
                   }

                   removeKilledGems();

                   var dropGemDuration = dropGems();
                   game.time.events.add(dropGemDuration * 100, refillBoard); // delay board refilling until all existing gems have dropped down

                   allowInput = false;

                   selectedGem = null;
                   tempShiftedGem = null}}

           // check if a selected gem should be moved and do it

           if (selectedGem != null) {

               var cursorGemPosX = getGemPos(game.input.mousePointer.x);
               var cursorGemPosY = getGemPos(game.input.mousePointer.y);

               if (checkIfGemCanBeMovedHere(selectedGemStartPos.x, selectedGemStartPos.y, cursorGemPosX, cursorGemPosY)) {
                   if (cursorGemPosX != selectedGem.posX || cursorGemPosY != selectedGem.posY) {

                       // move currently selected gem
                       if(selectedGemTween != null){game.tweens.remove(selectedGemTween)}
                       selectedGemTween = tweenGemPos(selectedGem, cursorGemPosX, cursorGemPosY);
                       gems.bringToTop(selectedGem);

                       // if we moved a gem to make way for the selected gem earlier, move it back into its starting position
                       if(tempShiftedGem != null) {
                           tweenGemPos(tempShiftedGem, selectedGem.posX , selectedGem.posY);
                           swapGemPosition(selectedGem, tempShiftedGem)}

                       // when the player moves the selected gem, we need to swap the position of the selected gem with the gem currently in that position
                       tempShiftedGem = getGem(cursorGemPosX, cursorGemPosY);
                       if(tempShiftedGem == selectedGem){tempShiftedGem = null} else {
                           tweenGemPos(tempShiftedGem, selectedGem.posX, selectedGem.posY);
                           swapGemPosition(selectedGem, tempShiftedGem)}}}}}

// fill the screen with as many gems as possible
       function spawnBoard() {
           BOARD_COLS = Phaser.Math.floor(game.world.width / GEM_SIZE_SPACED);
           BOARD_ROWS = Phaser.Math.floor(game.world.height / GEM_SIZE_SPACED);
           gems = game.add.group();
           for (var i = 0; i < BOARD_COLS; i++) {
               for (var j = 0; j < BOARD_ROWS; j++) {
                   var gem = gems.create(i * GEM_SIZE_SPACED, j * GEM_SIZE_SPACED, "GEMS");
                   gem.inputEnabled = true
                   gem.events.onInputDown.add(selectGem);
                   randomizeGemColor(gem)
                   setGemPos(gem, i, j) // each gem has a position on the board
               }}}

// select a gem and remember its starting position
       function selectGem(gem, pointer) {
           if (allowInput) {
               selectedGem = gem;
               selectedGemStartPos.x = gem.posX;
               selectedGemStartPos.y = gem.posY}}

// find a gem on the board according to its position on the board
       function getGem(posX, posY){return gems.iterate("id", calcGemId(posX, posY), Phaser.Group.RETURN_CHILD)}

// convert world coordinates to board position
       function getGemPos(coordinate){return Phaser.Math.floor(coordinate / GEM_SIZE_SPACED)}

// set the position on the board for a gem
       function setGemPos(gem, posX, posY) {
           gem.posX = posX; gem.posY = posY;
           gem.id = calcGemId(posX, posY)}

// the gem id is used by getGem() to find specific gems in the group
// each position on the board has a unique id
       function calcGemId(posX, posY){return posX + posY * BOARD_COLS}

// since the gems are a spritesheet, their color is the same as the current frame number
       function getGemColor(gem) {return gem.frame}

// set the gem spritesheet to a random frame
       function randomizeGemColor(gem) {gem.frame = game.rnd.integerInRange(0, gem.animations.frameTotal - 1)}

// gems can only be moved 1 square up/down or left/right
       function checkIfGemCanBeMovedHere(fromPosX, fromPosY, toPosX, toPosY) {
           if (toPosX < 0 || toPosX >= BOARD_COLS || toPosY < 0 || toPosY >= BOARD_ROWS){return false}
           if (fromPosX == toPosX && fromPosY >= toPosY - 1 && fromPosY <= toPosY + 1){return true}
           if (fromPosY == toPosY && fromPosX >= toPosX - 1 && fromPosX <= toPosX + 1){return true}
           return false}

// count how many gems of the same color lie in a given direction
// eg if moveX=1 and moveY=0, it will count how many gems of the same color lie to the right of the gem
// stops counting as soon as a gem of a different color or the board end is encountered
       function countSameColorGems(startGem, moveX, moveY) {
           var curX = startGem.posX + moveX,
               curY = startGem.posY + moveY,
               count = 0;
           while (curX >= 0 && curY >= 0 && curX < BOARD_COLS && curY < BOARD_ROWS && getGemColor(getGem(curX, curY)) == getGemColor(startGem)) {
               count++;
               curX += moveX;
               curY += moveY}
           return count}

// swap the position of 2 gems when the player drags the selected gem into a new location
       function swapGemPosition(gem1, gem2) {
           var tempPosX = gem1.posX, tempPosY = gem1.posY
           setGemPos(gem1, gem2.posX, gem2.posY)
           setGemPos(gem2, tempPosX, tempPosY)}

// count how many gems of the same color are above, below, to the left and right
// if there are more than 3 matched horizontally or vertically, kill those gems
// if no match was made, move the gems back into their starting positions
       function checkAndKillGemMatches(gem, matchedGems) {

           if(gem!=null){

               var countUp = countSameColorGems(gem, 0, -1),
                   countDown = countSameColorGems(gem, 0, 1),
                   countLeft = countSameColorGems(gem, -1, 0),
                   countRight = countSameColorGems(gem, 1, 0),
                   countHoriz = countLeft + countRight + 1,
                   countVert = countUp + countDown + 1;

               if (countVert >= MATCH_MIN){killGemRange(gem.posX, gem.posY - countUp, gem.posX, gem.posY + countDown)}
               if (countHoriz >= MATCH_MIN){killGemRange(gem.posX - countLeft, gem.posY, gem.posX + countRight, gem.posY)}
               if (countVert < MATCH_MIN && countHoriz < MATCH_MIN) {
                   if (gem.posX != selectedGemStartPos.x || gem.posY != selectedGemStartPos.y) {
                       if (selectedGemTween != null){game.tweens.remove(selectedGemTween)}
                       selectedGemTween = tweenGemPos(gem, selectedGemStartPos.x, selectedGemStartPos.y);
                       if (tempShiftedGem!=null){tweenGemPos(tempShiftedGem, gem.posX, gem.posY)}
                       swapGemPosition(gem, tempShiftedGem)}}}}

// kill all gems from a starting position to an end position
       function killGemRange(fromX, fromY, toX, toY) {
           fromX = Phaser.Math.clamp(fromX, 0, BOARD_COLS - 1);
           fromY = Phaser.Math.clamp(fromY , 0, BOARD_ROWS - 1);
           toX = Phaser.Math.clamp(toX, 0, BOARD_COLS - 1);
           toY = Phaser.Math.clamp(toY, 0, BOARD_ROWS - 1);
           for (var i = fromX; i <= toX; i++) {
               for (var j = fromY; j <= toY; j++) {
                   var gem = getGem(i, j);
                   gem.kill()}}}

// move gems that have been killed off the board
       function removeKilledGems(){gems.forEach(function(gem){if(!gem.alive){setGemPos(gem,-1,-1)}})}

// animated gem movement
       function tweenGemPos(gem, newPosX, newPosY, durationMultiplier) {
           if(durationMultiplier==null){durationMultiplier=1}
           return game.add.tween(gem).to({x: newPosX  * GEM_SIZE_SPACED, y: newPosY * GEM_SIZE_SPACED},
               100 * durationMultiplier, $E.Linear.None, true)}

// look for gems with empty space beneath them and move them down
       function dropGems(){var dropRowCountMax=0
           for(var i=0;i<BOARD_COLS;i++){var dropRowCount=0;
               for (var j = BOARD_ROWS-1; j >= 0; j--){var gem=getGem(i, j);
                   if(gem == null){dropRowCount++} else if (dropRowCount > 0) {
                       setGemPos(gem, gem.posX, gem.posY + dropRowCount);
                       tweenGemPos(gem, gem.posX, gem.posY, dropRowCount)}}
               dropRowCountMax = Math.max(dropRowCount, dropRowCountMax)}
           return dropRowCountMax}

// look for any empty spots on the board and spawn new gems in their place that fall down from above
       function refillBoard() {
           var maxGemsMissingFromCol = 0;
           for (var i = 0; i < BOARD_COLS; i++) {
               var gemsMissingFromCol = 0;
               for (var j = BOARD_ROWS - 1; j >= 0; j--) {
                   var gem = getGem(i, j);
                   if (gem == null) {
                       gemsMissingFromCol++;
                       gem = gems.getFirstDead();
                       gem.reset(i * GEM_SIZE_SPACED, -gemsMissingFromCol * GEM_SIZE_SPACED);
                       randomizeGemColor(gem);
                       setGemPos(gem, i, j);
                       tweenGemPos(gem, gem.posX, gem.posY, gemsMissingFromCol * 2)}}
               maxGemsMissingFromCol = Math.max(maxGemsMissingFromCol, gemsMissingFromCol)}
           game.time.events.add(maxGemsMissingFromCol * 2 * 100, boardRefilled)}

// when the board has finished refilling, re-enable player input
       function boardRefilled(){allowInput = true}}


SNOW=function(){z()
    //  This example was created by Jens Anders Bakke

    game = new Phaser.Game(800, 600, Phaser.AUTO,
        'phaser-example', { preload: preload, create: create });

    function preload(){g=$G(game)

        g.l.i('sky', '/assets/skies/sky3.png');
        g.l.ss('snowflakes', '/assets/sprites/snowflakes.png', 17, 17);
        g.l.ss('snowflakes_large', '/assets/sprites/snowflakes_large.png', 64, 64);

    }

    max = 0;

    update_interval = 4 * 60;
    i = 0;

    function create() {

        game.add.image(0, 0, 'sky');

        back_emitter = game.add.emitter(game.world.centerX, -32, 600);
        back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        back_emitter.maxParticleScale = 0.6;
        back_emitter.minParticleScale = 0.2;
        back_emitter.setYSpeed(20, 100);
        back_emitter.gravity = 0;
        back_emitter.width = game.world.width * 1.5;
        back_emitter.minRotation = 0;
        back_emitter.maxRotation = 40;

        mid_emitter = game.add.emitter(game.world.centerX, -32, 250);
        mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        mid_emitter.maxParticleScale = 1.2;
        mid_emitter.minParticleScale = 0.8;
        mid_emitter.setYSpeed(50, 150);
        mid_emitter.gravity = 0;
        mid_emitter.width = game.world.width * 1.5;
        mid_emitter.minRotation = 0;
        mid_emitter.maxRotation = 40;

        front_emitter = game.add.emitter(game.world.centerX, -32, 50);
        front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
        front_emitter.maxParticleScale = 1;
        front_emitter.minParticleScale = 0.5;
        front_emitter.setYSpeed(100, 200);
        front_emitter.gravity = 0;
        front_emitter.width = game.world.width * 1.5;
        front_emitter.minRotation = 0;
        front_emitter.maxRotation = 40;

        changeWindDirection();

        back_emitter.start(false, 14000, 20)
        mid_emitter.start(false, 12000, 40)
        front_emitter.start(false, 6000, 1000)}

    function update() {

        i++;

        if (i === update_interval){
            changeWindDirection()
            update_interval = Math.floor(rnd()*20)*60; // 0 - 20sec @ 60fps
            i=0}}

    function changeWindDirection() {

        var multi=Math.floor((max + 200) / 4),
            frag=(Math.floor(rnd() * 100) - multi);

        max+=frag
        if(max>200){max=150}
        if(max<-200){max=-150}

        setXSpeed(back_emitter, max)
        setXSpeed(mid_emitter, max)
        setXSpeed(front_emitter, max)}

    function setXSpeed(emitter, max) {

        emitter.setXSpeed(max - 20, max);
        emitter.forEachAlive(setParticleXSpeed, this, max)}

    function setParticleXSpeed(particle, max){
        particle.body.velocity.x = max - Math.floor(rnd()*30)}}





FIRESTARTER=function(){z()


      game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {g=$G(game).ARC(150).ccL(0).ccR(0)

        g.l.i('space', '/assets/misc/starfield.jpg');
        g.l.i('fire1', '/assets/particles/fire1.png');
        g.l.i('fire2', '/assets/particles/fire2.png');
        g.l.i('fire3', '/assets/particles/fire3.png');
        g.l.i('smoke', '/assets/particles/smoke-puff.png');
        g.l.ss('ball', '/assets/particles/plasmaball.png', 128, 128)}


    function create() {

        g.tSp(0, 0, g.w(), g.h(), 'space');

        e=g.em(g.cX(), g.cY(), 400).mP( [ 'fire1', 'fire2', 'fire3', 'smoke' ] ).grv(200).al(1, 0, 3000).sc(0.8, 0, 0.8, 0, 3000).s(false, 3000, 5)


        s=g.sp(0,300,'ball',0).arc()
        s.an.a('pulse')
        s.bZ(80,80,0,0).clWB(1).bo(1).v(300, 200).iE(1).drg(1)
            .oDS(function(){s.mvs(0)}, this).oDSS(function(){s.mvs(1)},this).A()
            .play('pulse',30,true)

        createText(16,16,'If you can catch the fireball, drag it around')}

    function update(){
        e.nPS(s.vx()*-1, s.vy()*-1).mPS(s.vx()*-1, s.vy()*-1).eX(s.x).eY(s.y)
        // emitter.forEachExists(game.world.wrap, game.world);
        g.wr(s, 64)}

    function createText(x, y, string) {

        var text = g.tx(x, y, string);
        // text.anchor.set(0.5);
        // text.align = 'center';

        //  Font style
        text.font = 'Arial Black';
        text.fontSize = 20;
        // text.fontWeight = 'bold';
        text.fill = '#ffffff';
        text.setShadow(2, 2, 'rgba(0, 0, 0, 0.7)', 2);

        return text;

    }


    function render() {

        // game.debug.bodyInfo(s, 32, 32);

    }

}






CLICKBURST=function(){z()

    game=Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create })

    function preload() { g=$G(game).ARC().bc(0x337799)

        g.l.i('diamond','/assets/sprites/diamond.png')}

    function create(){

        em=g.em(0,0,100).mP('diamond').grv(200)
        g.oD(particleBurst, this)}

    function particleBurst(pointer) {

        //  Position the emitter where the mouse/touch event was
        em.x = pointer.x;
        em.y = pointer.y;

        //  The first parameter sets the effect to "explode" which means all particles are emitted at once
        //  The second gives each particle a 2000ms lifespan
        //  The third is ignored when using burst/explode mode
        //  The final parameter (10) is how many particles will be emitted in this single burst
        em.start(true, 2000, null, 10);

    }}

