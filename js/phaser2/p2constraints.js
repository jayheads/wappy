LOCKC =function(){z()
  game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });


function preload() {
    g=$G(game).P2()

    g.l.i('vu', '/assets/sprites/vu.png')
    g.l.i('ball', '/assets/sprites/arrow.png')
    g.l.i('sky', '/assets/skies/cavern2.png')
    cu=g.K()}


function create(){g.im(0,0,'sky')
    b=g.sp(400, 200, 'ball').iE(1).drg()

   s=g.sp(400, 200, 'ball').p2(1).iE(1).drg()
   v=g.sp(400, 300, 'vu').p2(1).iE(1).drg()

     g.cLC(s,v,[0,200],0)
}


function update(){m100(cu,s)}}



SPRING =function(){z()
    game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });


    function preload() {g=$G(game).P2()

        g.l.i('vu', '/assets/sprites/vu.png')
        g.l.i('ball', '/assets/sprites/arrow.png')
        g.l.i('sky', '/assets/skies/cavern2.png')
        cu=g.K()
    }


    function create(){g.im(0,0,'sky')


        s=g.sp(400, 200, 'ball').p2(1)
        v=g.sp(400, 300, 'vu').p2(1)


        g.cS(s,v,150,5,1)}

    function update(){
        m100(cu,s)}


}



REVC=function(){z()

    game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });


    function preload(){g=$G(game).P2()

        g.l.i('vu', '/assets/sprites/vu.png')
        g.l.i('ar', '/assets/sprites/arrow.png')
        g.l.i('sky', '/assets/skies/cavern2.png')
        cu=g.K()}


    function create() {

        g.im(0,0,'sky')

        s=g.sp(400,200,'ar').p2(1)//.cCl(true,true)
        v=g.sp(400,300,'vu').p2(1)//.cCl(true,true)

        cons=g.cRC(s,[50,100],v,[0,0],{})

    }


    function update(){

        if(cu.U()){s.rL(50) }
        if(cu.D()){s.rR(50)}

        if(cu.L()){ s.mL(50)}
        if(cu.R()){ s.mR(50)}

    }


}


DISTC=function(){


    pG(


    function preload() {

        game.load.image('atari', '/assets/sprites/cokecan.png');
        game.load.image('ball', '/assets/sprites/red_ball.png');
        game.load.image('sky', '/assets/skies/cavern2.png');

    },



    function create() {

        game.add.image(0, 0, 'sky');

        //	Enable p2 physics
        game.physics.startSystem(Phaser.Physics.P2JS);

        //  Add 2 sprites which we'll join with a spring

        sprite1 = g.sp(400, 300, 'ball').p2(1)

        sprite2 = g.sp(400, 400, 'atari').p2(1)



        var constraint = game.physics.p2.createDistanceConstraint(sprite1, sprite2, 150);

        text = game.add.text(20, 20, 'move with arrow keys', { fill: '#ffffff' });

        cursors = game.input.keyboard.createCursorKeys();

    },

    function update() {

        sprite1.body.setZeroVelocity();

        if (cursors.left.isDown)
        {
            sprite1.body.moveLeft(400);
        }
        else if (cursors.right.isDown)
        {
            sprite1.body.moveRight(400);
        }

        if (cursors.up.isDown)
        {
            sprite1.body.moveUp(400);
        }
        else if (cursors.down.isDown)
        {
            sprite1.body.moveDown(400);
        }

    })

}

CHAIN=function(){z()

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

    function preload() {
        game.load.image('clouds', '/assets/misc/clouds.jpg');
        game.load.spritesheet('chain','/assets/sprites/chain.png',16,26);
    }



    function create() {
        game.add.tileSprite(0, 0, 800, 600, 'clouds');
        game.physics.startSystem(Phaser.Physics.P2JS);  //activate physics
        game.physics.p2.gravity.y = 1200;  //realistic gravity

        createRope(40,400,100);  // (length, xAnchor, yAnchor)
    };



    function createRope(length, xAnchor,yAnchor){
        var lastRect;  //if we created our first rect this will contain it
        var height = 20;  //height for the physics body - your image height is 8px
        var width = 16;   //this is the width for the physics body.. if to small the rectangles will get scrambled together
        var maxForce =20000;  //the force that holds the rectangles together
        for(var i=0; i<=length; i++){
            var x = xAnchor;                 // all rects are on the same x position
            var y = yAnchor+(i*height);               // every new rects is positioned below the last
            if (i%2==0){newRect = game.add.sprite(x, y, 'chain',1);}   //add sprite (and switch frame every 2nd time)
            else {newRect = game.add.sprite(x, y, 'chain',0); lastRect.bringToTop();}  //optical polish
            game.physics.p2.enable(newRect,false);      // enable physicsbody
            newRect.body.setRectangle(width,height);    //set custom rectangle

            if (i==0){newRect.body.static=true; }  //anchor the first one created
            else{
                newRect.body.velocity.x =200;   //give it a push :) just for fun
                newRect.body.mass =  length/i;  // reduce mass for evey rope element
            }
            //after the first rectangle is created we can add the constraint
            if(lastRect){game.physics.p2.createRevoluteConstraint(newRect, [0,-10], lastRect, [0,10], {maxForce:maxForce})}
            lastRect = newRect;
        };
    }

}