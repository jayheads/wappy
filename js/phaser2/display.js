

ACTIONONCLICK=function(){z()


    game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create })

     function preload(){g=$G(game)

         g.l.ss('button', '/assets/buttons/button_sprite_sheet.png', 193, 71)
         g.l.i('background','/assets/misc/starfield.jpg')}


     function create() {background = g.tSp(0, 0, 800, 600, 'background')

       g.bt(g.cX()-95, 400, 'button',
           function(){background.visible =! background.visible},
           this,2,1,0)}
 }

 BUTTONSCALE=function(){z()

         game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

       function preload(){g=$G(game)

           g.l.ss('button','/assets/buttons/button_sprite_sheet.png',193,71)

           g.l.i('sky0','/assets/skies/space2.png')
           g.l.i('sky1','/assets/skies/cavern1.png')
           g.l.i('sky2','/assets/skies/chrome.png')
           g.l.i('sky3','/assets/skies/fire.png')
           g.l.i('sky4','/assets/skies/fog.png')
           g.l.i('sky5','/assets/skies/sky1.png')
           g.l.i('sky6','/assets/skies/toxic.png')}


       function create() {

           background = g.sp(0,0,'sky0')
           background.name = 'background';

           //  Standard button (also used as our pointer tracker)
           button1 = g.bt(100, 100, 'button', changeSky, this, 2, 1, 0)
           button1.name = 'sky1'
           button1.anchor.setTo(0.5, 0.5);

           //  Rotated button
           button2 = g.bt(330, 200, 'button', changeSky, this, 2, 1, 0)
           button2.name = 'sky2';
           button2.angle = 24;
           button2.anchor.setTo(0.5, 0.5);

           //  Width scaled button
           button3 = g.bt(100, 300, 'button', changeSky, this, 2, 1, 0)
           button3.name = 'sky3';
           button3.width = 300;
           button3.anchor.setTo(0, 0.5);
           // button3.angle = 0.1;

           //  Scaled button
           button4 = g.bt(300, 450, 'button', changeSky, this, 2, 1, 0)
           button4.name = 'sky4';
           button4.scale.setTo(2, 2);

           //  Shrunk button
           button5 = g.bt(100, 450, 'button', changeSky, this, 2, 1, 0)
           button5.name = 'sky5';
           button5.scale.setTo(0.5, 0.5);

           //  Scaled and Rotated button
           button6 = g.bt(570, 200, 'button', changeSky, this, 2, 1, 0); // anchor 0.5
           button6.name = 'sky6';
           button6.angle = 32;
           button6.scale.setTo(2, 2);
           button6.anchor.setTo(0.5, 0.5);

           //  works regardless of world angle, parent angle or camera position
           // game.world.setBounds(0, 0, 2000, 2000);
           // game.world.angle = 10;
           // game.camera.x = 300;

       }

       function changeSky(button){background.loadTexture(button.name)}

       function render(){}
   }


CHANGINGTHEFRAMES=function(){z()



          game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

         function preload() {  g=$G(game)

             g.l.ss('button', '/assets/buttons/number-buttons-90x90.png', 90,90);
             g.l.i('background','/assets/misc/starfield.jpg')}

         function create() {

             //  Setting the background colour
             game.stage.backgroundColor = '#182d3b';

             // The numbers given in parameters are the indexes of the frames, in this order: over, out, down
             button = g.bt(g.cX(), g.cY(), 'button', actionOnClick, this, 1, 0, 2)

             //  setting the anchor to the center
             button.anchor.setTo(0.5, 0.5);}

         function actionOnClick(){

             //  Manually changing the frames of the button,
             // i.e, how it will look when you play with it
             button.setFrames(4, 3, 5)

         }}

ROTATEDBUTTONS=function(){z()



     game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create,update : update });

    function preload() {   g=$G(game)

        g.l.ss('button', '/assets/buttons/button_sprite_sheet.png', 193, 71)
        g.l.i('background','/assets/misc/starfield.jpg')}


    function create() {


        //	The numbers given in parameters are the indexes of the frames, in this order: over, out, down
        button=g.bt(g.cX(), g.cY(), 'button', actionOnClick, this, 2, 1, 0);

        //	Set the anchor of the sprite in the center, otherwise it would rotate around the top-left corner
        button.anchor.setTo(0.5, 0.5);

    }

    function actionOnClick(){alert("Though I'm turning around, you can still click on me")}

    function update(){button.angle += 1}
}

RASTERBOUNCE=function(){z()




   game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

     function preload() {  g=$G(game)

         g.l.i('raster', '/assets/demoscene/raster-blue.png')}


   pos = [];

     function create() {

         //  Generate our motion data
         data = game.make.tween({ y: 0 }).to( { y: 300 }, 1000, Phaser.Easing.Sinusoidal.In).yoyo(true).generateData(60);

         //  A group of rasters
         rasters = g.gr()

         //  The total number + spacing between each one

         total=8; offset=4;

         for(var i=0;i<total;i++){
             var raster=rasters.cr(0, 0, 'raster')
             raster.width=800
             raster.alpha=(i+1)*(1/total)
             pos.push(i*offset)}}

     function update() {

         rasters.resetCursor();

         for (var i = 0; i < rasters.total; i++)
         {
             pos[i]++;

             if(pos[i]===_z(data)){pos[i]=0}

             rasters.cursor.y = 100+data[pos[i]].y
             rasters.next()}}
}


 ALPHAMASK=function(){z()


      game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

     function preload(){g=$G(game)

         g.l.i('pic', '/assets/pics/questar.png')
         g.l.i('mask', '/assets/pics/mask-test2.png')}

     function create() {

         game.stage.backgroundColor = 0x4d4d4d;

         g.tx(64, 10, 'Source image', { font: '16px Arial', fill: '#ffffff' })
         game.add.image(64, 32, 'pic')

         g.tx(400, 10, 'Alpha mask', { font: '16px Arial', fill: '#ffffff' })
         g.add.image(400, 32, 'mask');

         //	Create a new bitmap data the same size as our picture
         var bmd = g.make.bitmapData(320, 256);

         //	And create an alpha mask image by combining pic and mask from the cache
         bmd.alphaMask('pic', 'mask')

         //	A BitmapData is just a texture. You need to apply it to a sprite or image
         //	to actually display it:
         g.add.image(g.cX(), 320, bmd).anchor.set(0.5,0)}
 }
 FLOODFILL=function(){z()

     game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

     function preload() {     g=$G(game)

         g.l.i('pic', '/assets/pics/hotshot-chaos_in_tokyo.png');

     }

    dropTime = 0;

     function create() {

         g.stage.backgroundColor = '#2d2d2d';

         bmd = game.make.bitmapData(game.cache.getImage('pic').width, game.cache.getImage('pic').height);

         g.stage.smoothed = false;

         var s = g.sp(g.cX(), g.cY(), bmd)
         s.anchor.set(0.5)
         s.scale.set(2)

         area = new Phaser.Rectangle(0,bmd.height,bmd.width,1)
         dropTime = g.n(250)}

     function update () {

         if (area.y > 0 && g.n() > dropTime){
             for(var y=0;y<area.y;y++){bmd.copyPixels('pic', area, 0, y)}
             area.y--
             dropTime=g.n(25)}

     }}

 BITMAPDATAPIXEL=function(){z()

      game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create })

     function preload(){g=$G(game)

         g.l.i('wheel', '/assets/pics/color_wheel_swirl.png')}


     function create() {

         bmd = g.make.bitmapData(800,600)

         bmd.draw('wheel',-200,-100)

         bmd.update()

         g.sp(0,0,bmd)

         tooltip=g.make.bitmapData(64,64)
         sprite=g.sp(0, 0, tooltip)

         g.input.setMoveCallback(updateTooltip,this)

     }

     function updateTooltip (pointer, x, y) {

         if (x >= 0 && x <= bmd.width && y >= 0 && y <= bmd.height){
             var color = bmd.getPixelRGB(x, y);

             tooltip.fill(0,0,0)
             tooltip.context.fillStyle=color.rgba
             tooltip.context.fillRect(1,1,62,62)

             sprite.x=x
             sprite.y=y}

     }}


 BITMAPDATAPROCESS=function(){z()

       game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

     function preload() { g=$G(game)
         g.l.i('crystal', '/assets/pics/cougar_dragonsun.png')}



     function create(){
         bmd=g.make.bitmapData(724, 566)
         bmd.draw('crystal')
         bmd.update()
         g.sp(0,0,bmd)
         g.input.onDown.add(startProcess,this)}


     function startProcess(){bmd.processPixelRGB(forEachPixel, this)}

     function forEachPixel (pixel) {

         /**
          * This callback will be sent a single object with 6 properties: `{ r: number, g: number, b: number, a: number, color: number, rgba: string }`.
          * Where r, g, b and a are integers between 0 and 255 representing the color component values for red, green, blue and alpha.
          * The `color` property is an Int32 of the full color. Note the endianess of this will change per system.
          * The `rgba` property is a CSS style rgba() string which can be used with context.fillStyle calls, among others.
          * The callback must return either `false`, in which case no change will be made to the pixel, or a new color object.
          * If a new color object is returned the pixel will be set to the r, g, b and a color values given within it.
          */

         //	The incoming pixel values
         var r = pixel.r;
         var g = pixel.g;
         var b = pixel.b;

         //	And let's mix them up a bit
         pixel.r = b;
         pixel.g = g;
         pixel.b = r;

         return pixel}

 }

 BITMAPDATAWOBBLE=function(){z()



     game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

     function preload(){g=$G(game)
         g.l.i('ball','/assets/sprites/shinyball.png')}

     var bmd;

     var waveSize = 8,wavePixelChunk = 2,waveData,waveDataCounter;

     function create(){

         //	Create our BitmapData object at a size of 32x64
         bmd = g.add.bitmapData(32, 64)

         //  And apply it to 100 randomly positioned sprites
         for (var i = 0; i < 100; i++){g.spR(bmd)}

         //  Populate the wave with some data
         waveData = g.math.sinCosGenerator(32, 8, 8, 2)}

     function update(){

         bmd.clear()
         updateWobblyBall()}

//  This creates a simple sine-wave effect running through our BitmapData.
//  This is then duplicated across all 100 sprites using it,
// meaning we only have to calculate it and upload it to the GPU once.

     function updateWobblyBall(){

         var s = 0;
         var copyRect = { x: 0, y: 0, w: wavePixelChunk, h: 32 };
         var copyPoint = { x: 0, y: 0 };

         for (var x = 0; x < 32; x += wavePixelChunk){
             copyPoint.x = x;
             copyPoint.y = waveSize + (waveSize / 2) + waveData.sin[s];

             bmd.context.drawImage(g.cache.getImage('ball'),
                 copyRect.x, copyRect.y, copyRect.w, copyRect.h,
                 copyPoint.x, copyPoint.y, copyRect.w, copyRect.h)

             copyRect.x += wavePixelChunk

             s++}

         //	Now all the pixel data has been redrawn we render it to the BitmapData object.
         //	In CANVAS mode this doesn't do anything, but on WebGL it pushes the new texture to the GPU.
         //	If your game is exclusively running under Canvas you can safely ignore this step.

         bmd.render()

         //	Cycle through the wave data - this is what causes the image to "undulate"

         g.math.shift(waveData.sin)

         waveDataCounter++

         if (waveDataCounter==_z(waveData)){waveDataCounter=0}

     }}

 CACHEDBITMAPDATA=function(){z()



    game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

     function preload() {}

     function create() { g=$G(game)

         game.stage.backgroundColor = '#003663';

         //	Create our bitmapData which we'll use as a Sprite texture
         var bmd = game.add.bitmapData(32, 32);

         //	Fill it
         var grd = bmd.context.createLinearGradient(0, 0, 0, 32);

         grd.addColorStop(0, '#8ED6FF');
         grd.addColorStop(1, '#004CB3');
         bmd.context.fillStyle = grd;
         bmd.context.fillRect(0, 0, 32, 32);

         //	Put the bitmapData into the cache
         game.cache.addBitmapData('blueShade', bmd);

         //	Now let's make some sprites using this texture, one every second
         game.physics.startSystem(Phaser.Physics.ARCADE);

         //	This one is just for reference (next to the instructions text)
         game.add.sprite(8, 8, game.cache.getBitmapData('blueShade'));

         //	And these move :)
         createBox();

         game.time.events.repeat(Phaser.Timer.SECOND, 20, createBox, this);

         game.input.onDown.add(updateBitmapDataTexture, this);

     }

     function createBox() {

         var sprite = game.add.sprite(game.world.randomX, game.world.randomY, game.cache.getBitmapData('blueShade'));

         game.physics.arcade.enable(sprite);

         sprite.body.collideWorldBounds = true;
         sprite.body.bounce.set(1);
         sprite.body.velocity.x = game.rnd.realInRange(-200, 200);
         sprite.body.velocity.y = game.rnd.realInRange(-200, 200);

     }

     function updateBitmapDataTexture() {

         //	Get the bitmapData from the cache. This returns a reference to the original object
         var bmd = game.cache.getBitmapData('blueShade');

         //	Modify it slightly. This has a direct result, because it's a reference to the cached object we don't need to write it back to the cache again

         var grd = bmd.context.createLinearGradient(0, 0, 0, 32);

         grd.addColorStop(0, generateHexColor());
         grd.addColorStop(1, generateHexColor());
         bmd.context.fillStyle = grd;
         bmd.context.fillRect(0, 0, 32, 32);

         //	All sprites using this texture will update at the next render
         bmd.dirty = true;

     }

     function generateHexColor() {
         return '#' + ((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16);
     }

     function render() {

         game.debug.text('Click to regenerate the texture', 48, 30);

     }
 }

 EXTRACTMASK=function(){z()


     // var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
     var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

     function preload() {  g=$G(game)

         g.l.i('font', '/assets/demoscene/knighthawks.png');

     }

     var font;
     var mask;

     function create() {

         font=g.make.bitmapData(320,150)
         mask=g.make.bitmapData(320,150)

         mask.fill(50,50,50)

         font.draw('font')

         font.update()

         g.sp(0, 0, font)
         g.sp(0, 150, mask)

         g.input.onDown.addOnce(getMask, this)

     }

     function getMask(){font.extract(mask, 237, 0, 140)}
 }

 GRAPHICS=function(){z()



              game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { create: create });

                function create(){ g=$G(game)

                     gx = g.add.graphics(0,0)

                    // set a fill and line style
                    gx.beginFill(0xFF3300)
                    gx.lineStyle(10, 0xffd900, 1)

                    // draw a shape
                    gx.moveTo(0,50)
                    gx.lineTo(250,50)
                    gx.lineTo(100,100)
                    gx.lineTo(250,220)
                    gx.lineTo(50,220)
                    gx.lineTo(0,50)
                    gx.endFill()

                    // set a fill and line style again
                    gx.lineStyle(10, 0xFF0000, 0.8)
                    gx.beginFill(0xFF700B, 1)

                    // draw a second shape
                    gx.moveTo(210,300)
                    gx.lineTo(450,320)
                    gx.lineTo(570,350)
                    gx.lineTo(580,20)
                    gx.lineTo(330,120)
                    gx.lineTo(410,200)
                    gx.lineTo(210,300)
                    gx.endFill()

                    // draw a rectangle
                    gx.lineStyle(2, 0x0000FF, 1)
                    gx.drawRect(50, 250, 100, 100)

                    // draw a circle
                    gx.lineStyle(0)
                    gx.beginFill(0xFFFF0B,0.5)
                    gx.drawCircle(470,200,100)

                    gx.lineStyle(20,0x33FF00)
                    gx.moveTo(30,30)
                    gx.lineTo(600,300)

                }}

 FULLSCREEN=function(){z()


     var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

     function preload() { g=$G(game)

         g.l.i('dragon', '/assets/pics/cougar_dragonsun.png');

     }

     function create() {

         var sprite = game.add.sprite(g.cX(),g.cY(),'dragon')
         sprite.anchor.set(0.5);


         // Stretch to fill
         g.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT

         // Keep original size
         // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

         // Maintain aspect ratio
         // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

         g.input.onDown.add(gofull,this)}

     function gofull(){g.scale.startFullScreen()}

     function update(){}

     function render(){

         game.debug.text('Click / Tap to go fullscreen', 270, 16);

     }
 }

 RENDERCRISP=function(){  z()

     var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

     function preload() { g=$G(game)

       g.l.i('boss', '/assets/misc/boss1.png')
       g.l.i('melon', '/assets/sprites/melon.png')
        g.l.ss('button', '/assets/buttons/button_sprite_sheet.png', 193, 71)}


     function create() {

         boss = g.sp(g.cX(),g.cY(),'boss').A()


         melon = g.sp(500,g.cY(),'melon').A()


         //  For browsers that support it, this keeps our pixel art looking crisp (works across Canvas and WebGL)

         //  You can either set smoothing on a specific sprite, like this:
         // boss.smoothed = false;

         //  Or across the whole stage, like this:
         g.stage.smoothed=false

         //  Zoom in each time we press the button
         button = g.bt(32, 32, 'button', clickedIt, this, 2, 1, 0)}

     function clickedIt() {

         boss.scale.x += 0.5
         boss.scale.y += 0.5
         melon.scale.x += 0.5
         melon.scale.y += 0.5

     }
 }


 RENDERTEXTUREMIRROR=function(){z()

    game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

     function preload() {  g=$G(game)

         g.l.i('ball', '/assets/sprites/pangball.png');

     }

     var ball;
     var texture;

     function create() {

         //	Here we'll create a renderTexture the same size as our game
         texture = game.add.renderTexture(800, 600, 'mousetrail');

         //	This is the sprite that will be drawn to the texture
         //	Note that we 'make' it, not 'add' it, as we don't want it on the display list.
         ball = game.make.sprite(0, 0, 'ball')
         ball.anchor.set(0.5)

         //	This is the sprite that is drawn to the display. We've given it the renderTexture as its texture.
         g.sp(0,0,texture)

     }



     function update() {

         if (!g.input.activePointer.position.isZero())

         {
             //	This time we'll draw the ball sprite twice, in a mirror effect
             texture.renderXY(ball, g.input.activePointer.x, g.input.activePointer.y, true)
             texture.renderXY(ball, g.input.activePointer.x, 600 - g.input.activePointer.y, false)
         }

     }




 }

 RENDERTEXTURESTARFIELD=function(){z()


         game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

       function preload() { g=$G(game)

           g.l.i('star', '/assets/sprites/bullet.png');

       }

       var star;
       var texture1;
       var texture2;
       var texture3;
       var stars = [];

       function create() {

           //	This is the sprite that will be drawn to the texture
           //	Note that we 'make' it, not 'add' it, as we don't want it on the display list
           star = game.make.sprite(0, 0, 'star');

           //	For this effect we'll create a vertical scrolling starfield with 300 stars split across 3 layers.
           //	This will use only 3 textures / sprites in total.
           texture1 = game.add.renderTexture(800, 600, 'texture1');
           texture2 = game.add.renderTexture(800, 600, 'texture2');
           texture3 = game.add.renderTexture(800, 600, 'texture3');

           game.add.sprite(0, 0, texture1);
           game.add.sprite(0, 0, texture2);
           game.add.sprite(0, 0, texture3);

           var t = texture1;
           var s = 4;

           //	100 sprites per layer
           for (var i = 0; i < 300; i++)
           {
               if (i == 100)
               {
                   //	With each 100 stars we ramp up the speed a little and swap to the next texture
                   s = 6;
                   t = texture2;
               }
               else if (i == 200)
               {
                   s = 7;
                   t = texture3;
               }

               stars.push( { x: game.world.randomX, y: game.world.randomY, speed: s, texture: t });
           }

       }

       function update() {

           for (var i = 0; i < 300; i++)
           {
               //	Update the stars y position based on its speed
               stars[i].y += stars[i].speed;

               if (stars[i].y > 600)
               {
                   //	Off the bottom of the screen? Then wrap around to the top
                   stars[i].x = game.world.randomX;
                   stars[i].y = -32;
               }

               if (i == 0 || i == 100 || i == 200)
               {
                   //	If it's the first star of the layer then we clear the texture
                   stars[i].texture.renderXY(star, stars[i].x, stars[i].y, true);
               }
               else
               {
                   //	Otherwise just draw the star sprite where we need it
                   stars[i].texture.renderXY(star, stars[i].x, stars[i].y, false);
               }
           }

       }}


 RENDERTEXTURETRAIL=function(){z()



       game =  Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

     function preload(){   g=$G(game)

         g.l.i('mushroom', '/assets/sprites/mushroom2.png')}


     function create() {

         //	Here we'll create a renderTexture the same size as our game
         texture = g.add.renderTexture(800, 600, 'mousetrail');

         //	This is the sprite that will be drawn to the texture
         //	Note that we 'make' it, not 'add' it, as we don't want it on the display list
         mushroom=g.make.sprite(0, 0, 'mushroom');
         mushroom.anchor.set(0.5);

         //	This is the sprite that is drawn to the display. We've given it the renderTexture as its texture.
         g.sp(0,0,texture)

     }

     function update() {

         if(!g.input.activePointer.position.isZero())
         {
             //	Here we draw the mushroom sprite to the renderTexture at the pointer coordinates.
             //	The 'false' parameter 2nd from the end tells it not to clear itself, causing the trail effect you see.
             //	The final 'true' parameter tells it to render sprites even with visible false set.
             texture.render(mushroom, g.input.activePointer.position, false)
         }

     }}