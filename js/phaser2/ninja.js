

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

IMPACTEVENTS=function(){z()

    game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {g=$G(game).P2().ru(.9)

        g.l.i('stars', '/assets/misc/starfield.jpg');
        g.l.ss('ship', '/assets/sprites/humstar.png', 32, 32);
        g.l.i('panda', '/assets/sprites/spinObj_01.png')
        g.l.i('sweet', '/assets/sprites/spinObj_06.png')

    }



    function create() {


        starfield = g.tSp(0, 0, 800, 600, 'stars').fTC(1)
        panda = g.sp(g.rX(), g.rY(), 'panda').p2().sR(40, 40, 0, 0);
        sweet = g.sp(g.rX(), g.rY(), 'sweet').p2().sR(40, 40, 0, 0);
        ship = g.sp(200, 200, 'ship').p2().sc(2).sm(0)

        ship.an.add('fly', [0,1,2,3,4,5], 10, true);
        ship.play('fly');

        //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging

        ship.sC(28).fRt(1)

        g.f(ship)


        //  Here we create a Body specific callback.
        //  Note that only impact events between the ship and the panda are used here,
        // the sweet/candy object is ignored.

        ship.cBC(panda,

            function hitPanda(body1, body2) {

            //  body1 is the space ship (as it's the body that owns the callback)
            //  body2 is the body it impacted with, in this case our panda
            //  As body2 is a Phaser.Physics.P2.Body object, you access its own (the sprite) via the sprite property:
            body2.sprite.alpha -= 0.1},

            this)


        //  And before this will happen, we need to turn on impact events for the world
        game.sIE(1)


        cu  = g.K()

    }



    function update(){

        ship.sZV()

        if(cu.L()){ship.mL(200)}
        if(cu.R()){ship.mR(200)}
        if(cu.U()){ship.mU(200)}
        if(cu.D()){ship.mD(200)}

        if (!g.lX()){starfield.tX(ship.vx()*16 * g.pE())}
        if (!g.lY()){starfield.tY(ship.vy()*16 * g.pE())}

    }

    function render() {g.db.text('Collide with the Panda!', 32, 32)}

}

NINJATILEMAP=function(){


pG(
    function preload(){
        g.Nj()
        g.l.tm('map','/assets/tilemaps/maps/ninja-tilemap.json', null, Phaser.Tilemap.TILED_JSON)
        g.l.i('ball','/assets/sprites/shinyball.png')
        g.l.i('sky','/assets/skies/sky2.png')
        g.l.i('kenney','/assets/tilemaps/tiles/kenney.png')
        cu=g.K()},

    function create(){
        sky=g.im0('sky').fTC(1)
        tiles=g.cTm(
            map=g.tm('map').aTSI('kenney'),
            layer=map.cL('Tile Layer 1','+'),
            slopeMap={'32':1,'77':1,'95':2,'36':3,'137':3,'140':2})
        p=g.sp(50,50,'me').w(80).h(80)//'ball'
        p.eC(p.w()/2).bo(.5) //g.physics.ninja.enableCircle(p, p.width / 2)
        g.f(p)},


    function update(){
       _e(tiles,
           function(t){
               p.cCVT(t.tile)})//for(var i=0;i< tiles.length;i++){p.cCVT(tiles[i].tile)}
        if(cu.L()){p.mL(20)}
        if(cu.R()){p.mR(20)}
        if(cu.U()){p.mU(20)}
        if(cu.D()){p.mD(20)}
    })


}

NINJAIMPACT=function(){z()


    game=new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

    function preload(){g=$G(game)

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
      game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload(){
        g=$G(game)
        g.Nj()
        cu=g.K()
        g.l.i('block','/assets/sprites/block.png')
        g.l.ss('ninja-tiles',
            '/assets/physics/ninja-tiles128.png', 128, 128, 34)}

    function create(){
        p=g.sp(100,450,'block').nm('blockA')
        b=g.sp(600,450,'block').nm('blockB').tn(rnd()*0xffffff)
        g.physics.ninja.enableAABB([p,b])}

    function update(){
        g.colN(p,b)
        if(cu.L()){p.mL(20)}
        if(cu.R()){p.mR(20)}
        if(cu.U()){p.mU(30)}}

    function render(){

        g.db.text('left: ' + p.body.touching.left, 32, 32);
        g.db.text('right: ' + p.body.touching.right, 256, 32);
        g.db.text('up: ' + p.body.touching.up, 32, 64);
        g.db.text('down: ' + p.body.touching.down, 256, 64);

    }}

AABBTILE=function(){ z()

      game= Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload(){
        g=$G(game).Nj()
        g.l.i('block', '/assets/sprites/block.png')
        g.l.ss('ninja-tiles', '/assets/physics/ninja-tiles128.png',128,128,34)
        cu=g.K()
    }

    function create(){

        sp1=g.sp(600,100,'block').nm('blockA')

        g.physics.ninja.enableAABB(sp1) // Enable ninja on the sprite and creates an AABB around it

        t=g.sp(300,480,'ninja-tiles', 5)

        g.ph.ninja.enableTile(t, t.frame)


    }



function update(){
    g.physics.ninja.collide(sp1,t)
    if(cu.L()){sp1.mL(20)}
    else if(cu.R()){sp1.mR(20)}
    if(cu.U()){sp1.mU(30)}}


function render(){

    g.db.t('left: '+sp1.b.t.left,32,32)
    g.db.t('right: '+sp1.b.t.right,256,32)
    g.db.t('up: ' +sp1.b.t.up,32,64)
    g.db.t('down: '+sp1.b.t.down,256,64)}}

NINJALAB=function(){z()

    game =  Game(
        800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {
g=$G(game).Nj()
        g.l.ss('ninja-tiles',
            '/assets/physics/ninja-tiles32.png', 32, 32, 34);
        game.load.json('level', '/assets/physics/ninja-test-level.json')
        g.l.i('ball', '/assets/sprites/shinyball.png')
        g.l.i('sky', '/assets/skies/sky2.png')

    }


    function create() {

         sky = g.im0(0, 0, 'sky').fTC(1)



        s = g.sp(100, 0, 'ball');

        //  Enable the physics body for the Ninja physics system
        g.physics.ninja.enableCircle(s, s.width / 2)

        //	A little more bounce
        s.body.bounce = 0.5;

        //  We'll just create the tiles from the JSON data
        var layer = game.cache.getJSON('level').layers[0];
        var i = 0;
        var data = layer.data;
        var width = layer.width;
        var height = layer.height;

        //	Resize the world to match
        game.world.setBounds(0, 0, width * 32, height * 32);

        tiles = g.gr();

        var tile;

        for (var y = 0; y < height; y++){
            for (var x = 0; x < width; x++)
            {
                if (data[i] > 0)
                {
                    tile = tiles.cr(x * 32, y * 32, 'ninja-tiles', data[i] - 1);
                    g.physics.ninja.enableTile(tile, tile.frame);
                }

                i++;
            }
        }

        cu = g.K()

        g.f(s)

    }

    function update() {

        g.colN(s, tiles)

        if(cu.L()){s.mL(20)}
        if(cu.R()){s.mR(20)}
        if(cu.D()){s.mD(20)}
        if(cu.U()){s.mU(20)}

    }

    function render() {
    }
}

