
TILECALLBACKS=function(){pG(


    function(){

        g.l.tm('map','/assets/tilemaps/maps/tile_collision_test.json',null,TiledJSON)

        g.l.i('ground_1x1','/assets/tilemaps/tiles/ground_1x1.png')

        g.l.i('phaser','/assets/sprites/arrow.png')

        g.l.ss('coin','/assets/sprites/coin.png',32,32)

        cu=g.K()

    },



    function(){g.ARC()

        m=g.tm('map').aTSI('ground_1x1').aTSI('coin')
            .sCB(1,12)
            .sTIC(26,hitCoin,this)
            .sTLC(2,0,10,10, hitCoin, this)



        l=m.cL('Tile Layer 1','+')


        s=g.sp(260,100,'phaser').arc().bZ(16,16,8,8).fw().A() // s.anchor.set(.5)

        s.health=1000
        coins=0


        //  s.body.maxAngular=500 //We'll set a lower max angular velocity here to keep it from going totally nuts
        //  s.body.angularDrag=50 //Apply a drag otherwise the sprite will just spin and never slow down

        // g.f(s)
    },


    function(){

        g.col(s,l,function(){
            s.health-=2

            if(s.health<0){s.k()}

        })


        s.vxy(0,0).aV(
            cu.L()?-200:cu.R()?200:0
        ).vFA(200)},


    function(){

        game.debug.text('health: '+s.health, 450, 60);
        game.debug.text('coins: '+coins, 300, 60);

        g.db.body(s)})




    hitCoin=function(sprite,tile){
        if(tile.alpha==1){coins++}
        tile.alpha=.2
        l.dirty=true
        return false}

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
    facing='left'
    jumpTimer=0


    pG(

        function preload(){

            g.l.tilemap('level1', '/assets/games/starstruck/level1.json',  null,  Phaser.Tilemap.TILED_JSON)

            g.l.image('tiles-1', '/assets/games/starstruck/tiles-1.png')
            g.l.spritesheet('dude', '/assets/games/starstruck/dude.png', 32, 48)
            g.l.spritesheet('droid', '/assets/games/starstruck/droid.png', 32, 32)
            g.l.image('starSmall', '/assets/games/starstruck/star.png')
            g.l.image('starBig', '/assets/games/starstruck/star2.png')
            g.l.image('background', '/assets/games/starstruck/background2.png')},

        function create(){

            game.physics.startSystem(pArcade)

            game.stage.backgroundColor='#000000'


            bg=game.add.tileSprite(0,0,800,600,'background')
            bg.fixedToCamera = true

            map=game.add.tilemap('level1')
            map.addTilesetImage('tiles-1')

            map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ])

            layer=map.createLayer('Tile Layer 1')

            layer.resizeWorld()

            game.physics.arcade.gravity.y=250


            player=g.sp(132,32, 'me').w(60).h(60)


            game.physics.enable(player, pArcade);

            player.body.bounce.y = 0.2
            player.body.collideWorldBounds = true
            player.body.setSize(20, 32, 5, 16)

            player.animations.add('left', [0,1,2,3],10, true)
            player.animations.add('right', [5,6,7,8],10, true)
            player.animations.add('turn', [4],20,true)

            game.camera.follow(player)
            cu=game.input.keyboard.createCursorKeys()
            jumpButton=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)},
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
                jumpTimer = game.time.now + 750}})




}
STARSTRUCK1=function(){z()
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
