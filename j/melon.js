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

me.v=me.video
me.p=me.plugin
me.ld=me.levelDirector
me.ld.ll=me.ld.loadLevel

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
                         this.flicker(45)}}}


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


mBF=function(a,b){return new me.BitmapFont(a,b)}

mRD=rend=function(o){return me.Renderable.extend(o)}

mOE=function(o){return me.ObjectEntity.extend(o)}

mOC=function(o){return me.ObjectContainer.extend(o)}
mSO=function(o){return me.ScreenObject.extend(o)}
mEO=me.g.ENEMY_OBJECT
iEO=function(r){return r&& r.obj.type==mEO}



MELTUT=function(){z();d=dv().a().id('jsapp')
    resources=[
        rsc("area01_level_tiles"),
        rsc("metatiles32x32"),
        rsc("gripe_run_right"),
        rsc("wheelie_right"),




       rsc("spinning_coin_gold"),

        rsc("32x32_font"),


        rsc("area01_bkg0"),  rsc("area01_bkg1"),

        rsc('area01', 'area01.tmx','tmx'),
        rsc('area02', 'area02.tmx','tmx')


    ]

    game={

        data:{score:999},

        onload:function(){
            if(!me.v.init("screen",480,320,true,'auto')){
                alert('z!');return}

            if(document.location.hash==="#debug"){
                $w.onReady(function(){
                    me.p.register.defer(debugPanel,"debug")})}
            //me.audio.init("mp3,ogg")
            me.l.onload=this.loaded.bind(this)
            me.l.preload(resources)
            me.s.change(me.s.LOADING)},

        loaded:function(){
            me.s.set(me.s.PLAY, new game.PlayScreen())

            me.s.set(me.s.MENU, new game.TitleScreen())

            me.ep.add("player", game.PlayerEntity)
            me.ep.add("EnemyEntity", game.EnemyEntity)
            me.i.bk(me.i.K.L,"left");
            me.i.bk(me.i.K.R,"right");
            me.i.bk(me.i.K.X,"jump", true)
            me.i.bk(me.i.K.UP,"jump", true)

            me.s.change(me.s.PLAY)}}

    game.PlayScreen=mSO({

        onResetEvent:function(){
            me.ld.ll('area01')
            game.data.score=0
            this.HUD=new game.HUD.Container()
            me.g.world.addChild(this.HUD)

        },


        onDestroyEvent:function(){
            me.g.world.removeChild(this.HUD)}})

    game.PlayerEntity=mOE({

        init:function(x,y,s){var t=this
            t.parent(x,y,s)
            t.setVelocity(3,15)

            me.g.viewport.follow(
               t.pos,
               me.g.viewport.AXIS.BOTH
            )},


        update:function(){var t=this

            if(me.i.k('left')){
                t.flipX(true)
                t.vel.x-=t.accel.x*me.timer.tick}


            else if(me.i.k('right')){
                t.flipX(false)
                t.vel.x+=t.accel.x*me.timer.tick}

            else{t.vel.x=0}

            if(me.i.k('jump')){
                if(!t.jumping&&
                    !t.falling){
                t.vel.y=-t.maxVel.y*me.timer.tick;t.jumping=true}}
            t.updateMovement()
            var res=me.game.collide(t)


            if(iEO(res)){
                    if(res.y>0 && !t.jumping){// check if we jumped on it

                        // bounce (force jump)
                        t.falling=false;
                        t.vel.y=-t.maxVel.y*me.timer.tick;
                        t.jumping=true}
                    else{t.renderable.flicker(45)}

                }

            // update animation if necessary
            if(t.vel.x!=0||t.vel.y!=0){t.parent();return true}// update object animation
            return false}// else inform the engine we did not perform any update (e.g. position, animation)

    })


    game.EnemyEntity=mOE({


        init: function(x, y, s) {var t=this
            // define this here instead of tiled
            s.image="wheelie_right";s.spritewidth=64;
            t.parent(x,y,s)

            t.startX=x
            t.endX=x+s.width-s.spritewidth;

            t.pos.x = x + s.width - s.spritewidth;
            t.walkLeft = true;

            t.setVelocity(4, 6)
            t.collidable=true;// make it collidable
            t.type=me.game.ENEMY_OBJECT},



        onCollision: function(r,o) { var t=this

            game.data.score += 250;
            if (t.alive && (r.y > 0) && o.falling) {
                t.renderable.flicker(45)}},


        update: function() {var t=this

            if(!t.inViewport){return false}
            if(t.alive){
                if (t.walkLeft && t.pos.x <= t.startX) {t.walkLeft = false}
                else if (!t.walkLeft && t.pos.x >= t.endX) {t.walkLeft = true}
                t.flipX(t.walkLeft);
                t.vel.x += (t.walkLeft) ? -t.accel.x * me.timer.tick : t.accel.x * me.timer.tick}

            else {t.vel.x = 0}
            t.updateMovement();
            if (t.vel.x!=0 || t.vel.y!=0) {t.parent(); return true}
            return false;}



    })
    game.HUD=game.HUD||{}
    game.HUD.Container=mOC({
        init:function(){var t=this
            t.parent()
            t.isPersistent=true
            t.collidable= false
            t.z=Infinity
            t.name="HUD"
            t.addChild(
                new game.HUD.ScoreItem(200,100))}})
    game.HUD.ScoreItem=rend({

        init:function(x,y){var t=this
            t.parent(mV(x,y),10,10)
            t.font=mBF("32x32_font",32)
            t.font.set("right")
            t.score=-1;
            t.floating=true},

        update:function(){var t=this
            if(t.score!==game.data.score){t.score=game.data.score
                return true}
            return false},

        draw:function(cx){var t=this
            t.font.draw(cx,
                game.data.score,
                t.pos.x,
                t.pos.y)}})

    game.TitleScreen=mSO({

        init:function(){var t=this

            t.parent(true)
            t.title=null
            t.font=null
            t.scrollerfont=null
            t.scrollertween=null
            t.scroller="A SMALL STEP TUTORIAL";
            t.scrollerpos=600},

        onResetEvent:function(){var t=this
            if(t.title==null){
                t.title=me.loader.getImage("title_screen")
                t.font=mBF("32x32_font",32)
                t.scrollerfont=mBF("32x32_font",32)}
            t.scrollerpos=640;
            t.scrollertween=new me.Tween(this).to({
                scrollerpos:-2200},10000).onComplete(
                    t.scrollover.bind(t)).start()
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

    $w.onReady(function onReady(){
        game.onload()
        if(me.device.isMobile && !navigator.isCocoonJS) {

            // Prevent the webview from moving on a swipe

            $w.document.addEventListener("touchmove", function (e) {
                e.preventDefault();
                $w.scroll(0,0);return false},false)
            // Scroll away mobile GUI
            (function(){$w.scrollTo(0,1);
                me.video.onresize(null)}).defer();
            me.event.subscribe(me.event.WINDOW_ONRESIZE,function(e){$w.scrollTo(0,1)})}

    })


}


