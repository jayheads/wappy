

ACCELERATETOPOINTER=function(){z();game=Game(800,600,Phaser.CANVAS,'phaser-example',{preload:preload,create:create,update:update, render: render });
    function preload(){
        g=$G(game).ARC().bc('red')
        g.l.i('arrow','/assets/sprites/arrow.png')}

    function create(){s=g.sp(400,300,'arrow').A().arc().aR(0)}
    function update(){s.rt(
        g.mTP(s,60,g.aP(),500))}
    function render(){g.db.spriteInfo(s,32,32)

    }}
ANGULARVELOCITY=function(){z()



          game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

          function preload(){g=$G(game).ARC().bc('yellow')
            g.l.i('arrow', '/assets/sprites/arrow.png')}
 
          function create(){s=sprite = g.sp(400,300,'arrow').A().arc()}

          function update(){

              s.vxy(0,0).aV(0)
              if (game.iD(Left)){s.aV(-200)}
              if (g.iD(Right)){s.aV(200)}
              if (g.iD(Up)){g.physics.arcade.velocityFromAngle(sprite.angle, 300, sprite.body.velocity)}}

          function render() {

              g.db.spriteInfo(sprite, 32, 32);
              g.db.text('angularVelocity: ' + s.body.angularVelocity, 32, 200);
              g.db.text('angularAcceleration: ' + s.body.angularAcceleration, 32, 232);
              g.db.text('angularDrag: ' + s.body.angularDrag, 32, 264);
              g.db.text('deltaZ: ' + s.body.deltaZ(), 32, 296);

          }}
ONEWAY=function(){z()
                   game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
                   function preload(){
                       g=$G(game).ARC()
                       g.l.ss('gameboy','/assets/sprites/gameboy_seize_color_40x60.png',40,60)
                       g.l.i('atari','/assets/sprites/atari130xe.png')}
                   function create(){

                       a=g.sp(300,200,'atari').arc().cwb(1).ccU(0).ccD(0).im(1)
                       b=g.sp(350,400,'gameboy',2).arc().cwb(1).bo(1,1).vy(-200)
                       c=g.sp(0,210,'gameboy',4).arc().cwb(1).bo(1,1).vx(200)}

                   function update(){g.col(a,b).col(a,c)}
                   function render(){

                       g.db.bodyInfo(a, 16, 24);

                       // g.db.body(sprite);
                       // g.db.body(b);

                   }}














NINJATILEMAP=function(){z()

    game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update})


    function preload() {g=sPhG(game)

        game.load.tilemap('map', '/assets/tilemaps/maps/ninja-tilemap.json', null, Phaser.Tilemap.TILED_JSON)
        game.load.image('ball', '/assets/sprites/shinyball.png')
        game.load.image('sky', '/assets/skies/sky2.png')
        game.load.image('kenney', '/assets/tilemaps/tiles/kenney.png')}



    function create() {

        var sky = game.add.image(0, 0, 'sky');
        sky.fixedToCamera = true;

        //  Activate the Ninja physics system
        game.physics.startSystem(Phaser.Physics.NINJA);

        map = game.add.tilemap('map')

        map.addTilesetImage('kenney')

        layer = map.createLayer('Tile Layer 1')

        layer.resizeWorld()

        var slopeMap = { '32': 1, '77': 1, '95': 2, '36': 3, '137': 3, '140': 2 }

        tiles = game.physics.ninja.convertTilemap(map, layer, slopeMap)

        sprite1 = game.add.sprite(50, 50, 'ball')

        game.physics.ninja.enableCircle(sprite1, sprite1.width / 2)

        //  A little more bounce
        sprite1.body.bounce = 0.5

        game.camera.follow(sprite1)

        cursors = game.input.keyboard.createCursorKeys()}




    function update() {

        for (var i = 0; i < tiles.length; i++)
        {
            sprite1.body.circle.collideCircleVsTile(tiles[i].tile)}

        if (cursors.left.isDown){
            sprite1.body.moveLeft(20)}
        else if (cursors.right.isDown){
            sprite1.body.moveRight(20);}

        if (cursors.up.isDown){
            sprite1.body.moveUp(20)}
        else if (cursors.down.isDown){sprite1.body.moveUp(20)}}}



NINJAIMPACT=function(){z()


    game=new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

    function preload(){g=sPhG(game)

        g.l.ss('ninja-tiles','/assets/physics/ninja-tiles128.png',128,128,34)
        g.l.i('a','/assets/sprites/firstaid.png')}


    function create() {

        g.st.smoothed=true


        g.ph.s(Ph.Physics.NINJA) //	Activate the Ninja physics system

        // game.physics.ninja.gravity = 0.1;

        sprite1=g.a.sp(500,200,'a')


        g.ph.ninja.enableAABB(sprite1)//  Enable the physics body for the Ninja physics system

        //By default it will create an AABB body for the sprite // But you can change it to either a Tile or a Circle


        tile1=g.a.sp(0,500,'ninja-tiles',14)
        tile1.width=100
        tile1.height=100

        g.ph.ninja.enableTile(tile1, tile1.frame)

        cu=g.ip.kb.createCursorKeys()}





    function update(){

        g.ph.ninja.collide(
            sprite1,
            tile1,
            function(){g.st.backgroundColor=0xff0000},
            null,
            this)

        tile1.body.moveRight(1)

        if(cu.left.isDown){sprite1.body.moveLeft(20)} else if(cu.right.isDown){sprite1.body.moveRight(20)}
        if(cu.up.isDown){sprite1.body.moveUp(20)} else if(cu.down.isDown){sprite1.body.moveUp(20)}
}}




AABBAABB=function(){z()

// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
      game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {g=sPhG(game)

        game.load.image('block', '/assets/sprites/block.png')
        game.load.spritesheet('ninja-tiles',
            '/assets/physics/ninja-tiles128.png', 128, 128, 34)}


    function create() {

        game.physics.startSystem(Phaser.Physics.NINJA);

        sprite1 = game.add.sprite(100, 450, 'block');
        sprite1.name = 'blockA';

        b = game.add.sprite(600, 450, 'block');
        b.name = 'blockB';
        b.tint = Math.random() * 0xffffff;

        game.physics.ninja.enableAABB([sprite1, b])
        cursors=game.input.keyboard.createCursorKeys()}





    function update(){

        game.physics.ninja.collide(sprite1, b);


        if(cursors.left.isDown){sprite1.body.moveLeft(20)}
        else if (cursors.right.isDown){sprite1.body.moveRight(20)}

        if (cursors.up.isDown){sprite1.body.moveUp(30)}}

    function render() {

        g.db.text('left: ' + sprite1.body.touching.left, 32, 32);
        g.db.text('right: ' + sprite1.body.touching.right, 256, 32);
        g.db.text('up: ' + sprite1.body.touching.up, 32, 64);
        g.db.text('down: ' + sprite1.body.touching.down, 256, 64);

    }}


AABBTILE=function(){ z()

      game=new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload(){g=sPhG(game)
        g.l.i('block', '/assets/sprites/block.png')
        g.l.ss('ninja-tiles', '/assets/physics/ninja-tiles128.png',128,128,34)}



    function create(){
        g.ph.s(pNinja)

        sp1=g.a.sp(600,100,'block')
        sp1.name='blockA'
        g.ph.ninja.enableAABB(sp1) // Enable ninja on the sprite and creates an AABB around it
        sp1=sPhSp(sp1)

        t=g.a.sp(300,480,'ninja-tiles', 5)
        g.ph.ninja.enableTile(t, t.frame)

        cu=g.ip.kb.ck()
        cu=sCu(cu)}



function update(){
    g.ph.ninja.collide(sp1,t)
    if(cu.L.isDown){sp1.b.mL(20)}
    else if(cu.R.isDown){sp1.b.mR(20)}
    if(cu.U.isDown){sp1.b.mU(30)}}


function render(){

    g.db.t('left: '+sp1.b.t.left,32,32)
    g.db.t('right: '+sp1.b.t.right,256,32)
    g.db.t('up: ' +sp1.b.t.up,32,64)
    g.db.t('down: '+sp1.b.t.down,256,64)}}


NINJALAB=function(){z()

    var game = new Phaser.Game(
        800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {

        game.load.spritesheet('ninja-tiles',
            '/assets/physics/ninja-tiles32.png', 32, 32, 34);
        game.load.json('level', '/assets/physics/ninja-test-level.json')
        game.load.image('ball', '/assets/sprites/shinyball.png')
        game.load.image('sky', '/assets/skies/sky2.png')

    }


    function create() {

        var sky = game.add.image(0, 0, 'sky');
        sky.fixedToCamera = true;

        //	Activate the Ninja physics system
        game.physics.startSystem(Phaser.Physics.NINJA);

        sprite1 = game.add.sprite(100, 0, 'ball');

        //  Enable the physics body for the Ninja physics system
        game.physics.ninja.enableCircle(sprite1, sprite1.width / 2);

        //	A little more bounce
        sprite1.body.bounce = 0.5;

        //  We'll just create the tiles from the JSON data
        var layer = game.cache.getJSON('level').layers[0];
        var i = 0;
        var data = layer.data;
        var width = layer.width;
        var height = layer.height;

        //	Resize the world to match
        game.world.setBounds(0, 0, width * 32, height * 32);

        tiles = game.add.group();

        var tile;

        for (var y = 0; y < height; y++)
        {
            for (var x = 0; x < width; x++)
            {
                if (data[i] > 0)
                {
                    tile = tiles.create(x * 32, y * 32, 'ninja-tiles', data[i] - 1);
                    game.physics.ninja.enableTile(tile, tile.frame);
                }

                i++;
            }
        }

        cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(sprite1);

    }

    function update() {

        game.physics.ninja.collide(sprite1, tiles);

        if (cursors.left.isDown)
        {
            sprite1.body.moveLeft(20);
        }
        else if (cursors.right.isDown)
        {
            sprite1.body.moveRight(20);
        }

        if (cursors.up.isDown)
        {
            sprite1.body.moveUp(20);
        }
        else if (cursors.down.isDown)
        {
            sprite1.body.moveUp(20);
        }

    }

    function render() {
    }
}

