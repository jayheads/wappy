
PIXELPICKSCROLLING=function(){z()

    game =  Game(800, 600, Phaser.CANVAS, 'phaser-example',
        {preload: preload, create: create,  update: update,
            render: render });

    function preload() {
        camSpeed=4

        g = $G(game).ARC().bn(0,0, 4000, 2000)

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

    function tint() {b.tint=Math.random()*0xffffff}

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


INVADERS=function(){

    bulletTime = 0
    score = 0
    scoreString = ''
    firingTimer=0
    livingEnemies = []

    pG(function preload(){

         g.ARC()

        g.l.i('bullet', '/assets/games/invaders/bullet.png')
        g.l.i('enemyBullet', '/assets/games/invaders/enemy-bullet.png')
        g.l.i('ship', '/assets/games/invaders/player.png')
        g.l.ss('kaboom', '/assets/games/invaders/explode.png', 128, 128)
        g.l.i('starfield', '/assets/games/invaders/starfield.png')
        g.l.i('background', '/assets/games/starstruck/background2.png')
        g.l.ss('invader', '/assets/games/invaders/invader32x32x4.png', 32, 32)},

        function create() {


        //  The scrolling starfield background

        starfield = g.tSp(0, 0, 800, 600, 'starfield')

        bullets=g.gr().eB(1).pBT(0).mult(30,'bullet').sA('anchor.x', 0.5).sA('anchor.y', 1)
            .sA('checkWorldBounds',true).sA('outOfBoundsKill',true)


        enemyBullets=g.gr().eB(1).pBT(0)
            .mult(30, 'enemyBullet').sA('anchor.x', 0.5).sA('anchor.y', 1)
            .sA('outOfBoundsKill', true).sA('checkWorldBounds', true)


        player=g.sp(400, 500, 'm').A(0.5, 0.5).arc().sc(.1,.1)

            aliens=g.gr().eB(1).pBT(0)

        createAliens()


        scoreString='Score : '
        scoreText = g.tx(10,10, scoreString+score,{font: '34px Arial', fill: '#fff'})


        lives=g.gr()

        g.tx(g.w()-100,10, 'Lives : ',{font: '34px Arial', fill: '#fff'})

        stateText=g.tx(g.cX(),g.cY(),' ',{font: '84px Arial', fill: '#fff' }).A().vs(0)

        _t(3,function(i){
            lives.cr(g.w()-100+(30*i),60,'ship').A().al(.4).ang(-70)})


        explosions = g.gr().mult(30, 'kaboom').ea(setupInvader, this);


        cu = g.K()
        fireButton = g.k(Spacebar)},
    function update() {

        //  Scroll the background
        starfield.tilePosition.y += 2;

        //  Reset the player, then check for movement keys
        player.vxy(0, 0);

        if (cu.L()){player.vx(-200)} else if (cu.R()){player.vx(200)}

        //  Firing?
        if (fireButton.isDown){fireBullet()}

        if (g.n() > firingTimer){enemyFires()}

        //  Run collision
        g.ol(bullets, aliens, collisionHandler, null, this);
        g.ol(enemyBullets, player, enemyHitsPlayer, null, this);

    },
    function render() {

        // for (var i = 0; i < aliens.length; i++)
        // {
        //     game.debug.body(aliens.children[i]);
        // }

    }

    )




    function createAliens(){

        for(var y=0;y<4;y++){
            for(var x=0;x<10;x++){

                var alien=aliens.cr(x*48, y*50,'invader').A()
                alien.an.a('fly',[0,1,2,3],20,true)
                alien.play('fly')
                alien.body.moves=false
            }}

        aliens.x=100
        aliens.y=50

        //  All this does is basically start the invaders moving.
        // Notice we're moving the Group they belong to,
        // rather than the invaders directly.

        var tween=g.tw(aliens).t({x:200},2000,None,
            true,0,100,true).oL(function(){
                aliens.y+=10},this)}
    function setupInvader(i) {

        i=sSp(i).A()
        i.an.a('kaboom')}
    function collisionHandler(bullet,alien) {
        bullet.kill();alien.kill();
        score +=20
        scoreText.text=scoreString+score
        sSp(explosions.gFE(false)).rs(alien).play('kaboom',30,false,true)

        if(aliens.countLiving()==0){
            score+=1000
            scoreText.tx(scoreString+score)
            enemyBullets.callAll('kill',this)
            stateText.tx(" You Won, \n Click to restart").vs(1)
            g.oT1(restart,this)}}
    function enemyHitsPlayer(player,bullet) {

        bullet.kill()

        live = lives.getFirstAlive()

        if(live){live.kill()}

        sSp(explosions.gFE(false)).rs(player).play('kaboom', 30, false, true);


        if(lives.countLiving()<1){
            player.kill();
            enemyBullets.callAll('kill');
            stateText.tx(" GAME OVER \n Click to restart").vs(1)
            g.oT1(restart,this)}}
    function enemyFires () {

        // Grab the first bullet we can from the pool
        enemyBullet=sSp(enemyBullets.gFE(false))

        livingEnemies.length=0

        aliens.fEA(function(a){livingEnemies.push(a)})// put every living enemy in an array

        if(enemyBullet && _z(livingEnemies)>0){// fire the bullet from random enemy

            var shooter=livingEnemies[g.rI(0,_z(livingEnemies)-1)]
            g.mTO(enemyBullet.rs(shooter),player,120)
            firingTimer=g.n(2000)}}
    function fireBullet () {
        //  To avoid them being allowed to fire too fast we set a time limit
        //  Grab the first bullet we can from the pool //  And fire it
        if(g.n()>bulletTime){
            if(bullet=sSp(bullets.gFE(false))){
                bullet.rs(player).vy(-400);bulletTime=g.n(200)}}}
    function resetBullet(bullet){bullet.kill()}
    function restart(){
        stateText.vs(0)
        lives.callAll('revive');player.revive()   //  A new level starts  //resets the life count
        aliens.removeAll();createAliens()}//  And brings the aliens back from the dead :)



}


INVADERS1=function(){z()

     game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
    bulletTime = 0
    score = 0
    scoreString = ''
    firingTimer=0
    livingEnemies = []

    function preload() {g=$G(game).ARC()

        g.l.i('bullet', '/assets/games/invaders/bullet.png')
        g.l.i('enemyBullet', '/assets/games/invaders/enemy-bullet.png')
        g.l.i('ship', '/assets/games/invaders/player.png')
        g.l.ss('kaboom', '/assets/games/invaders/explode.png', 128, 128)
        g.l.i('starfield', '/assets/games/invaders/starfield.png')
        g.l.i('background', '/assets/games/starstruck/background2.png')
        g.l.ss('invader', '/assets/games/invaders/invader32x32x4.png', 32, 32)}



    function create() {


        //  The scrolling starfield background

        starfield = g.tSp(0, 0, 800, 600, 'starfield')

        bullets=g.gr().eB(1).pBT(0).mult(30,'bullet').sA('anchor.x', 0.5).sA('anchor.y', 1)
            .sA('checkWorldBounds',true).sA('outOfBoundsKill',true)


        enemyBullets=g.gr().eB(1).pBT(0)
            .mult(30, 'enemyBullet').sA('anchor.x', 0.5).sA('anchor.y', 1)
            .sA('outOfBoundsKill', true).sA('checkWorldBounds', true)


        player=g.sp(400, 500, 'ship').A(0.5, 0.5).arc()
        aliens=g.gr().eB(1).pBT(0)

        createAliens()


        scoreString='Score : '
        scoreText = g.tx(10,10, scoreString+score,{font: '34px Arial', fill: '#fff'})


        lives=g.gr()

        g.tx(g.w()-100,10, 'Lives : ',{font: '34px Arial', fill: '#fff'})

        stateText=g.tx(g.cX(),g.cY(),' ',{font: '84px Arial', fill: '#fff' }).A().vs(0)

        _t(3,function(i){
            lives.cr(g.w()-100+(30*i),60,'ship').A().al(.4).ang(-70)})

        explosions = g.gr().mult(30, 'kaboom').ea(setupInvader, this);


        cu = g.K()
        fireButton = g.k(Spacebar)}


    function createAliens(){

        for(var y=0;y<4;y++){
            for(var x=0;x<10;x++){

                var alien=aliens.cr(x*48, y*50,'invader').A()
                alien.an.a('fly',[0,1,2,3],20,true)
                alien.play('fly')
                alien.body.moves=false
            }}

        aliens.x=100
        aliens.y=50

        //  All this does is basically start the invaders moving.
        // Notice we're moving the Group they belong to,
        // rather than the invaders directly.

        var tween=g.tw(aliens).t({x:200},2000,None,
             true,0,100,true).oL(function(){
                aliens.y+=10},this)}



    function setupInvader(i) {

        i=sSp(i).A()
        i.an.a('kaboom')}



    function update() {

        //  Scroll the background
        starfield.tilePosition.y += 2;

        //  Reset the player, then check for movement keys
        player.vxy(0, 0);

        if (cu.L()){player.vx(-200)} else if (cu.R()){player.vx(200)}

        //  Firing?
        if (fireButton.isDown){fireBullet()}

        if (g.n() > firingTimer){enemyFires()}

        //  Run collision
        g.ol(bullets, aliens, collisionHandler, null, this);
        g.ol(enemyBullets, player, enemyHitsPlayer, null, this);

    }

    function render() {

        // for (var i = 0; i < aliens.length; i++)
        // {
        //     game.debug.body(aliens.children[i]);
        // }

    }

    function collisionHandler(bullet,alien) {
        bullet.kill();alien.kill();
        score +=20
        scoreText.text=scoreString+score
        sSp(explosions.gFE(false)).rs(alien).play('kaboom',30,false,true)

        if(aliens.countLiving()==0){
            score+=1000
            scoreText.tx(scoreString+score)
            enemyBullets.callAll('kill',this)
            stateText.tx(" You Won, \n Click to restart").vs(1)
            g.oT1(restart,this)}}




    function enemyHitsPlayer(player,bullet) {

        bullet.kill()

        live = lives.getFirstAlive()

        if(live){live.kill()}

        sSp(explosions.gFE(false)).rs(player).play('kaboom', 30, false, true);


        if(lives.countLiving()<1){
            player.kill();
            enemyBullets.callAll('kill');
            stateText.tx(" GAME OVER \n Click to restart").vs(1)
            g.oT1(restart,this)}}



    function enemyFires () {

        // Grab the first bullet we can from the pool
        enemyBullet=sSp(enemyBullets.gFE(false))

        livingEnemies.length=0

        aliens.fEA(function(a){livingEnemies.push(a)})// put every living enemy in an array

        if(enemyBullet && _z(livingEnemies)>0){// fire the bullet from random enemy

            var shooter=livingEnemies[g.rI(0,_z(livingEnemies)-1)]
            g.mTO(enemyBullet.rs(shooter),player,120)
            firingTimer=g.n(2000)}}



    function fireBullet () {
        //  To avoid them being allowed to fire too fast we set a time limit
        //  Grab the first bullet we can from the pool //  And fire it
        if(g.n()>bulletTime){
            if(bullet=sSp(bullets.gFE(false))){
                bullet.rs(player).vy(-400);bulletTime=g.n(200)}}}


    function resetBullet(bullet){bullet.kill()}

    function restart(){
        stateText.vs(0)
        lives.callAll('revive');player.revive()   //  A new level starts  //resets the life count
        aliens.removeAll();createAliens()}//  And brings the aliens back from the dead :)



}