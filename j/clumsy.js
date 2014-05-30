me.g.w=me.g.world
me.g.w.a=me.g.w.aC=me.g.w.addChild
me.v= me.video
BirdEntity=me.ObjectEntity.extend({

    init:function(x,y){var t=this

        t.parent(x,y,{
            image:me.loader.getImage('clumsy'),
            width:85,
            height:60,
            spritewidth:85,
            spriteheight:60})

        t.alwaysUpdate=true
        t.gravity=0.2
        t.gravityForce=0.01

        t.maxAngleRotation=tRad(30)
        t.maxAngleRotationDown=tRad(90)

        t.renderable.addAnimation("flying",[0,1,2])
        t.renderable.addAnimation("idle",[0])
        t.renderable.setCurrentAnimation("flying")

        t.animationController=0

        // manually add a rectangular collision shape
        t.addShape(new me.Rect(mV(5,5),70,50))

        // a tween object for the flying physic effect
        t.flyTween = new me.Tween(t.pos);
        t.flyTween.easing(me.Tween.Easing.Exponential.InOut)


    },

    update: function(dt) {// mechanics
              var t=this
        if (game.data.start) {
            if (me.input.isKeyPressed('fly')) {t.gravityForce = 0.01;

                var currentPos = t.pos.y
                // stop the previous one
                t.flyTween.stop()
                t.flyTween.to({y: currentPos - 72}, 100)
                t.flyTween.start()

                t.renderable.angle = -t.maxAngleRotation} else {
                t.gravityForce += 0.2;
                t.pos.y += me.timer.tick * t.gravityForce;
                t.renderable.angle += tRad(3) * me.timer.tick;
                if (t.renderable.angle > t.maxAngleRotationDown)
                    t.renderable.angle = t.maxAngleRotationDown}}

        var res = me.g.collide(t)

        if(res){
            if(res.obj.type != 'hit') {
                me.device.vibrate(500);
                me.state.change(me.state.GAME_OVER);
                return false}
            // remove the hit box
            me.g.w.removeChildNow(res.obj);
            // the give dt parameter to the update function
            // give the time in ms since last frame
            // use it instead ?
            game.data.steps++
            me.audio.play('hit')}

        else {
            var hitGround = me.g.viewport.height - (96 + 60);
            var hitSky = -80; // bird height + 20px
            if (t.pos.y >= hitGround || t.pos.y <= hitSky) {
                me.state.change(me.state.GAME_OVER)
                return false}}

        return t.parent(dt)}

})
PipeEntity = me.ObjectEntity.extend({
    init: function(x, y) {
        var t=this


        t.parent(x, y, {
             image: me.loader.getImage('pipe'),
            width: 148, height: 1664,
            spritewidth: 148, spriteheight: 1664 })


        t.alwaysUpdate = true
        t.gravity = 5
        t.updateTime = false
    },

    update: function(dt) { var t=this

        t.pos.add(new me.Vector2d(-t.gravity * me.timer.tick, 0))
        if (t.pos.x < -148){me.g.w.removeChild(t)}
        return true}})
PipeGenerator = me.Renderable.extend({
    init: function() {  var t=this
        t.parent(mV(), me.g.viewport.width, me.g.viewport.height)
        t.alwaysUpdate = true;
        t.generate = 0;
        t.pipeFrequency = 92;
        t.pipeHoleSize = 1240;
        t.posX = me.g.viewport.width;
    },

    update: function(dt){var t=this
        if (t.generate++ % t.pipeFrequency == 0){
            var posY = rnd(me.v.getHeight() - 100,200)
            var posY2 = posY - me.video.getHeight() - t.pipeHoleSize,
                pipe1 = new me.pool.pull("pipe", t.posX, posY),
                pipe2 = new me.pool.pull("pipe", t.posX, posY2),
                hitPos = posY - 100,
                hit = new me.pool.pull("hit", t.posX, hitPos)
            pipe1.renderable.flipY()
            me.g.w.aC(pipe1, 10)
            me.g.w.aC(pipe2, 10)
            me.g.w.aC(hit, 11)}
        return true}})
mV=function(x,y){return new me.Vector2d(x,y) }
  HitEntity = me.ObjectEntity.extend({


      init:function(x,y){var t=this

          t.parent(x,y,{
              image:me.loader.getImage('hit'),
              width:148,height:60,
              spritewidth:148,spriteheight:60})


          t.alwaysUpdate=true

          t.gravity=5

          t.updateTime=false

          t.type='hit'
          t.renderable.alpha=0
          t.ac=mV(-t.gravity,0)},

    update: function(){var t=this

        t.pos.add(t.ac);
        if(t.pos.x<-148){
            me.g.world.removeChild(t)}
        return true}

  })
Ground = me.ObjectEntity.extend({

      init:function(x,y){var t=this

        t.parent(x,y,{
            image:me.loader.getImage('ground'),
            width:900,height:96 })

        t.alwaysUpdate=true
        t.gravity=0
        t.updateTime=false
        t.accel=mV(-4,0)},


    update: function(){var t=this
        t.pos.add(t.accel);
        if(t.pos.x<-t.renderable.width){
            t.pos.x=me.v.getWidth()-10}
        return true}

  })
TheGround=Object.extend({

    init:function(){   var t=this
        t.ground1 = new Ground(0,me.v.getHeight()-96)
        t.ground2 = new Ground(me.v.getWidth(),me.v.getHeight() - 96)
        me.g.w.aC(t.ground1, 11)
        me.g.w.aC(t.ground2, 11)},

    update: function(){return true}
})