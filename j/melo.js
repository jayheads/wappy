
var g_resources = [

    {name: "industrial-tileset32x32",type: "image",src:  "data/industrial-tileset32x32.png"},
    {name: "area01",type: "tmx",src:  "data/area01.tmx"},
    {name: "robot", type: "image", src:  "data/robot.png"},
    {name: "spinning_coin_gold",type: "image",src: "data/spinning_coin_gold.png"},
    {name: "32x32_font",type: "image",
        src: "data/32x32_font.png"},

    {name: "wheelie_right",type: "image",src: "data/wheelie_right.png"
    }]

 jsApp	={


    onload: function()
    {if (!me.video.init('jsapp', 640, 480, false, 1.0)){
            alert("Sorry but your browser does not support html 5 canvas.");
            return}


        me.audio.init("mp3,ogg")


        me.loader.onload = this.loaded.bind(this)


        me.loader.preload(g_resources)


        me.state.change(me.state.LOADING);
    },


    loaded: function()
    {

        me.state.set(me.state.PLAY, new PlayScreen());


        me.entityPool.add("mainPlayer", PlayerEntity);
        me.entityPool.add("CoinEntity", CoinEntity);
        me.entityPool.add("EnemyEntity", EnemyEntity);


        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.X,     "jump", true);
        me.input.bindKey(me.input.KEY.Z,     "flip", true);

        // start the game
        me.state.change(me.state.PLAY);
    }}


 PlayScreen = me.ScreenObject.extend(
    {onResetEvent: function()
        {me.levelDirector.loadLevel("area01")

            // add a default HUD to the game mngr
            me.game.addHUD(0,430,640,60)

            // add a new HUD item
            me.game.HUD.addItem("score", new ScoreObject(620, 10));

            // make sure everything is in the right order
            me.game.sort();
        },


        /* ---

         action to perform when game is finished (state change)

         ---	*/
        onDestroyEvent: function()
        {
            // remove the HUD
            me.game.disableHUD();
        }
    });


//bootstrap :)
window.onReady(function()
{
    jsApp.onload();
});

  PlayerEntity = me.ObjectEntity.extend({


    init: function(x, y, s) {
        var t=this
        t.parent(x, y, s);

       t.setVelocity(6, 15);

        // adjust the bounding box
        t.updateColRect(19, 20, 1, 62);
        t.speed = 10;

        // set the display to follow our position on both axis
        me.game.viewport.follow(
            t.pos, me.game.viewport.AXIS.BOTH);

    },

    update: function() {

        if (me.input.isKeyPressed('left'))
        {

            this.flipX(true);

            this.vel.x -= this.accel.x * me.timer.tick;
        }
        else if (me.input.isKeyPressed('right'))
        {

            this.flipX(false);

            this.vel.x += this.accel.x * me.timer.tick;
        }
        else
        {
            this.vel.x = 0;
        }

        if (me.input.isKeyPressed('jump'))
        {
            // make sure we are not already jumping or falling
            if (true) //!this.jumping && !this.falling)
            {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                if (this.gravity > 0)
                {
                    console.error("Normal jump");
                    this.vel.y = -this.maxVel.y * me.timer.tick;
                }
                else
                {
                    console.error("Flipped jump");
                    this.vel.y = this.maxVel.y * me.timer.tick;
                }
                // set the jumping flag
                this.jumping = true;
            }

        }

        if (me.input.isKeyPressed('flip'))
        {
            // set current vel to the maximum defined value
            // gravity will then do the rest
            this.gravity = -this.gravity;
            this.flipY(this.gravity < 0);
        }

        // check & update player movement
        this.updateMovement();

        // check for collision
        var res = me.game.collide(this);

        if(res){
            // if we collide with an enemy
            if (res.obj.type == me.game.ENEMY_OBJECT) {
                // check if we jumped on it
                if ((res.y > 0) && ! this.jumping) {
                    // bounce (force jump)
                    this.falling = false;
                    this.vel.y = -this.maxVel.y * me.timer.tick;
                    // set the jumping flag
                    this.jumping = true;

                } else {
                    // let's flicker in case we touched an enemy
                    this.flicker(45);
                }
            }
        }

        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }

        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
    }

});


  EnemyEntity = me.ObjectEntity.extend({
    init: function(x, y, s) {
        // define this here instead of tiled
        s.image = "wheelie_right";
       s.spritewidth = 64;

        // call the parent constructor
        this.parent(x, y, s);

        this.startX = x;
        this.endX = x + s.width -s.spritewidth;
        // size of sprite

        // make him start from the right
        this.pos.x = x + s.width -s.spritewidth;
        this.walkLeft = true;

        // walking & jumping speed
        this.setVelocity(4, 6);

        // make it collidable
        this.collidable = true;


        this.type=me.game.ENEMY_OBJECT},

    onCollision: function(res,obj){
        if(this.alive&&(res.y>0)&&obj.falling){
            this.flicker(45)


            me.game.HUD.updateItemValue("score",1000)


        }

    },


    update: function() {

        if (!this.visible)
            return false;

        if(this.alive){
            if(this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft=false}

            else if(!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft=true}

            this.flipX(this.walkLeft);
            this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick
                :this.accel.x * me.timer.tick}

        else{this.vel.x=0}

        // check and update movement
        this.updateMovement()

        if (this.vel.x!=0 || this.vel.y!=0) {

            this.parent()
            return true}
        return false}})





CoinEntity=me.CollectableEntity.extend({

    init:function(x,y,s){this.parent(x,y,s)},

    onCollision:function(){
        me.game.HUD.updateItemValue("score",250)
        this.collidable=false
        me.game.remove(this)}})





 ScoreObject=me.HUD_Item.extend({
     init:function(x,y){var t=this
      t.parent(x,y)
   t.font=new me.BitmapFont("32x32_font",32)},
    draw: function(cx,x,y) {var t=this
       t.font.draw(cx,t.value,t.pos.x+x,t.pos.y+y)}})