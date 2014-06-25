me.i=me.input
me.i.bk=me.i.bindKey
me.i.k=me.i.isKeyPressed
me.i.K=me.i.KEY
me.i.K.L=me.i.K.LEFT
me.i.K.R=me.i.K.RIGHT
me.i.K.S=me.i.K.SPACE
me.l=me.loader
me.s=me.state

me.ep=me.entityPool
me.ep.a=me.ep.add
me.g=me.game
me.g.rm=me.g.remove
me.oe=me.ObjectEntity
me.oe.e=me.oe.extend
me.ce=me.CollectableEntity
me.ce.e=me.ce.extend
me.so=me.ScreenObject
me.so.e=me.so.extend


still=function(t){return t.vel.x!=0||t.vel.y!=0}
upM=function(t){t.updateMovement();return t}
out=function(t){return !t.inViewport}

flick=function(t,n){return t.renderable.flicker(n)}
      ssw=function(x,s){return x+s.width-s.spritewidth}

bouncyBadGuy=function(){


game.EnemyEntity=me.ObjectEntity.extend({

    init:function(x,y,s){var t=this
        s.image='wheelie_right'
        s.spritewidth=64
        t.parent(x,y,s)
        t.startX=x
        t.endX=ssw(x,s)
        t.pos.x=ssw(x,s)
        t.walkLeft=true
        t.setVelocity(4,6)
        t.collidable=true
        t.type=me.game.ENEMY_OBJECT},

    onCollision:function(r,o){var t=this
        if(t.alive&&(r.y>0)&& o.falling){flick(t,45)}},

    update:function(){var t=this
        t.wL=function(a){if(U(a)){
            return t.walkLeft}
            t.walkLeft=a;return t}


        if(out(t)){return false}

        if(t.alive){
            if(t.wL()&&t.pos.x<=t.startX){t.wL(false)}
            else if(!t.wL()&&t.pos.x>=t.endX){t.wL(true)}
            t.flipX(t.wL())
            var a=accel.x*me.timer.tick
            t.vel.x+=t.wL()?-1*a:a}

        else{t.vel.x=0}


        upM(t)


        if(still(t)){t.parent();return true}

        return false}})}



mR=function(v,w,h){return new me.Rect(v,w,h)}

mV=function(x,y){return new me.Vector2d(x,y)}
rsc=function(n,s,t){
    t=t||'image'
    s=s||n
    var r={name:n, src:src(s),type:t}
    return r}

MELON=function(){z()

//info= _d().id('info').s({mt:100})(_d()(game_state=   _d().id('game_state')('state'),instructions= _d().id('instructions')('instructions')).f(14).s({ta:'l'})).a()

    d=dv().a().id('jsapp')





    resources=[
        rsc('mel',
            'mel.tmx',
            'tmx'),
        rsc('levelSprites'),
        rsc('player'),
        rsc('collision'),
        rsc('titleScreen'),
        rsc('badGuy'),
        rsc('coin'),
        rsc('boots')]





    PlayScreen=me.so.e({

        onResetEvent:

            function(){

                me.levelDirector.loadLevel('mel')

                me.i.bk(me.i.K.L,'left')

                me.i.bk(me.i.K.R,'right')

                me.i.bk(me.i.K.S,'jump')}

    })


    PlayerEntity=me.oe.e({

        init:function(x,y,s){
            var t=this;
            t.parent(x,y,s)

            me.g.viewport.follow(t.pos,
                me.g.viewport.AXIS.BOTH)

            t.setVelocity(3,12)

        g=t},



         update:function(){var t=this

             if(me.i.k('left')){t.doWalk(true)}
             else if(me.i.k('right')){t.doWalk(false)}

             if(me.i.k('jump')){t.doJump()}

              me.g.collide(t)

             t.updateMovement()


             // check for collision
             //var res=me.game.collide(this)

             if(false && res){

                 // if we collide with an enemy

                 if(res.obj.type==me.game.ENEMY_OBJECT) {
                     // check if we jumped on it

                     if ((res.y > 0) && ! this.jumping) {
                         // bounce (force jump)
                         this.falling = false;
                         this.vel.y = -this.maxVel.y * me.timer.tick;
                         // set the jumping flag
                         this.jumping = true}

                     else {
                         // let's flicker in case we touched an enemy
                         this.flicker(45)
                     }
                 }
             }

             if(t.bottom>490){t.gameOver()}

             if(t.vel.x!=0||t.vel.y!=0){t.parent(t);return true}

             return false},

        gameOver:function(){me.s.change(me.s.MENU)}})
    CoinEntity=me.ce.e({

        init:function(x,y,s){this.parent(x,y,s)},

        onCollision:function(r,o){var t=this
            t.collidable=false
            me.g.rm(t)}})
    BootsEntity=me.ce.e({
        init:function(x,y,s){this.parent(x,y,s)},
        onCollision:function(r,o){var t=this
            t.collidable=false
            me.g.rm(t)
            o.gravity=o.gravity/2
            oo=o}})
     jump=function(t){
         t.falling = false;
         t.vel.y= -t.maxVel.y * me.timer.tick;
         // set the jumping flag
         t.jumping = true}
    EnemyEntity=me.oe.e({

        init:function(x,y,s){var t=this

            s.image='badGuy'
            s.spritewidth=16

            t.parent(x,y,s)
            t.startX=x
            t.endX=x + s.width-s.spritewidth
            t.pos.x=t.endX
            t.walkLeft=true
            t.setVelocity(.2)
            t.collidable=true},

        onCollision:function(r,o){var t=this

           // if(t.alive&&(r.y>0)&&o.falling){  t.flicker(45) }


                o.gameOver()},




        update:function(){var t=this
            //if(!t.visible){return false}

            t.wL=function(a){if(U(a)){
                return t.walkLeft}
                t.walkLeft=a;return t}


            if(t.alive){

                if(t.wL() && t.pos.x <= t.startX){

                    t.wL(false)}

                else if(

                    !t.wL() &&t.pos.x >= t.endX){

                    t.wL(true)

                }

                t.doWalk(t.wL())}

            else{t.vel.x=0}


            t.updateMovement()

            if(t.vel.x!=0||t.vel.y!=0){t.parent(t)
                return true}

            return false}})
    bK=function(k,f){me.i.bk(me.i.KEY[k],f,true)}



    TitleScreen=me.so.e({

        init:function(){
            this.parent(true)

            bK('SPACE','jump')
            bK('UP','jump')
           // me.i.bk(me.i.KEY.SPACE,'jump',true)

           // me.i.bk(me.i.KEY.UP,'jump',true)


        },

        onResetEvent:function(){var t=this
            if(t.title==null){
                t.title=me.l.getImage('titleScreen')}},


        update:function(){if(me.i.k('jump')){
             me.s.change(me.s.PLAY)}
             return true},


        draw:function(cx){cx.drawImage(this.title,50,50)}})
    jsApp={

        onload:function(){

            if(!me.video.init('jsapp',320,240,true,2)){alert('z!');return}


            me.l.onload=this.loaded.bind(this)
            me.l.preload(resources)
            me.s.change(me.s.LOADING)},


        loaded:function(){

            me.ep.a('player',PlayerEntity)
            me.ep.a('coin',CoinEntity)
            me.ep.a('EnemyEntity',EnemyEntity)
            me.ep.a('boots',BootsEntity)


            me.s.set(me.s.PLAY, new PlayScreen())
            me.s.set(me.s.MENU, new TitleScreen())
            me.s.transition('fade','#2FA2C2', 250)
            me.s.change(me.s.MENU)}}
    $(function(){jsApp.onload()})}




MELTUT1=function(){
    z();d=dv().a().id('jsapp')


    game={
        data:{score:0},

        onload:function(){
            if(!me.video.init("screen",480,320,true,'auto')){alert('z!');return}
            //if(document.location.hash==="#debug"){$w.onReady(function(){me.plugin.register.defer(debugPanel,"debug")})}
            //me.audio.init("mp3,ogg")
            me.l.onload=this.loaded.bind(this)
            me.l.preload(game.resources)
            me.s.change(
                me.s.LOADING)
        },

        loaded:function(){
            me.s.set(me.s.MENU,
                new game.TitleScreen())
            me.s.set(me.s.PLAY,
                new game.PlayScreen())
            me.s.change(me.s.PLAY)}}

    game.resources=[rsc("area01_level_tiles"),rsc('area01','area01.tmx','tmx')]


    game.TitleScreen=me.ScreenObject.extend({

        init:function(){this.parent(true)
            this.title=null
            this.font=null
            this.scrollerfont=null
            this.scrollertween=null
            this.scroller="A SMALL STEP TUTORIAL";
            this.scrollerpos=600},

        onResetEvent:function(){
            if(this.title==null){
                this.title=me.loader.getImage("title_screen")
                this.font=new me.BitmapFont("32x32_font",32)
                this.scrollerfont=new me.BitmapFont("32x32_font",32)}
            this.scrollerpos=640;
            this.scrollertween=new me.Tween(this).to({
                scrollerpos:-2200},10000).onComplete(
                    this.scrollover.bind(this)).start()
            me.input.bindKey(me.input.KEY.ENTER,"enter",true)
            //me.audio.play("cling")
        },

        scrollover:function(){this.scrollerpos = 640; this.scrollertween.to({scrollerpos: -2200}, 10000).onComplete(this.scrollover.bind(this)).start()},
        update:function(){

            if (me.input.isKeyPressed('enter')) {
                me.state.change(me.state.PLAY)}
            return true},


        draw:function(context){
            context.drawImage(this.title, 0, 0);

            this.font.draw(context, "PRESS ENTER TO PLAY", 20, 240);
            this.scrollerfont.draw(context,
                this.scroller, this.scrollerpos, 440)},


        onDestroyEvent:function(){
            me.input.unbindKey(me.input.KEY.ENTER);


            this.scrollertween.stop()}


    })





    game.PlayScreen=me.ScreenObject.extend({

        onResetEvent:function(){
            me.levelDirector.loadLevel('area01')
            game.data.score=0
            this.HUD=new game.HUD.Container()
            me.g.world.addChild(this.HUD)},

        onDestroyEvent:function(){me.g.world.removeChild(this.HUD)}})




    game.PlayerEntity=me.ObjectEntity.extend({

        init: function(x, y, settings) {this.parent(x, y, settings);

            // set the default horizontal & vertical speed (accel vector)
            this.setVelocity(3, 15);

            // set the display to follow our position on both axis
            me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH)},


        update: function() {if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick}
        else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick} else {
            this.vel.x = 0}
            if (me.input.isKeyPressed('jump')) {
                // make sure we are not already jumping or falling
                if (!this.jumping && !this.falling) {
                    // set current vel to the maximum defined value
                    // gravity will then do the rest
                    this.vel.y = -this.maxVel.y * me.timer.tick;
                    // set the jumping flag
                    this.jumping=true}}
            this.updateMovement();
            if (this.vel.x!=0 || this.vel.y!=0) {this.parent();return true}
            return false}})


    game.HUD=game.HUD||{}

    game.HUD.Container=me.ObjectContainer.extend({
        init: function(){var t=this
            t.parent()
            t.isPersistent=true
            t.collidable = false
            t.z = Infinity
            t.name = "HUD"
            t.addChild(new game.HUD.ScoreItem(5,5))}})

    game.HUD.ScoreItem=me.Renderable.extend({

        init:function(x,y){this.parent(mV(x,y),10,10)

            this.score = -1;
            this.floating=true},

        update:function(){if(this.score!==game.data.score){this.score=game.data.score;return true}

            return false},

        draw:function(ctx){}})



}


MELTUT=function(){

    z();d=dv().a().id('jsapp')


    game={
        data:{score:0},

        onload:function(){

            if(!me.video.init("screen",480,320,true,'auto')){
                alert('z!');return}
            if(document.location.hash==="#debug"){
                $w.onReady(function(){me.plugin.register.defer(
                    debugPanel,"debug")})}

            me.l.onload=this.loaded.bind(this)
            me.l.preload(game.resources)
            me.s.change(me.s.LOADING)},

        loaded:function(){
            $l('loaded')
            me.s.set(me.s.PLAY, new game.PlayScreen())
            me.s.change(me.s.PLAY)}

    }



    game.resources=[
        rsc("area01_level_tiles"),
        rsc("metatiles32x32"),

        rsc('area01', 'area01.tmx','tmx')

    ]



    game.PlayScreen=me.ScreenObject.extend({

        onResetEvent:function(){

            me.levelDirector.loadLevel('area01')

        }



    })



    window.onReady(function onReady() {
        game.onload();

        // Mobile browser hacks
        if (me.device.isMobile && !navigator.isCocoonJS) {
            // Prevent the webview from moving on a swipe
            window.document.addEventListener("touchmove", function (e) {
                e.preventDefault();
                window.scroll(0, 0);
                return false;
            }, false);

            // Scroll away mobile GUI
            (function () {
                window.scrollTo(0, 1);
                me.video.onresize(null);
            }).defer();

            me.event.subscribe(me.event.WINDOW_ONRESIZE, function (e) {
                window.scrollTo(0, 1);
            });
        }
    });


}

