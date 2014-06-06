Ph=Phaser
pArcade=Ph.Physics.ARCADE
pNinja=Ph.Physics.NINJA
One=Phaser.Keyboard.ONE
Two=Phaser.Keyboard.TWO
None=Phaser.Easing.Linear.None
$E=Phaser.Easing
Second=Phaser.Timer.SECOND
ReturnChild=Phaser.Group.RETURN_CHILD
clmp=Phaser.Math.clamp
floor=Phaser.Math.floor
Spacebar= Phaser.Keyboard.SPACEBAR
TopDown=Phaser.Camera.FOLLOW_TOPDOWN

TiledJSON= Phaser.Tilemap.TILED_JSON
Up=Ph.Keyboard.UP
Left=Ph.Keyboard.LEFT
Down= Phaser.Keyboard.DOWN
Right=Phaser.Keyboard.RIGHT

Rectangle=function(a,b,c,d){return new Phaser.Rectangle(a,b,c,d)}


Game=function(a,b,c,d,e,f,g){return new Phaser.Game(a,b,c,d,e,f,g)}

$G=function(g){
    g.ph=g.physics

    g.ph.ac=g.ph.arcade
    g.ph.s= g.ph.sS= g.ph.startSystem
    g.ph.e= g.ph.enable

    g.ip=g.input
    g.ip.kb= g.ip.keyboard
    g.ip.kb.ck= g.ip.kb.createCursorKeys

    //g.a=g.add
    //g.a.sp= g.a.sprite
    //g.a.spB= g.a.spriteBatch
    //g.a.gr= g.a.group
    //g.a.t= g.a.text
    //g.a.tm= g.a.tilemap
    //g.a.em= sEm(g.a.emitter)

    g.W=g.world
    g.l=g.load
    g.l.i= function(a){

        if(O(a)){
            _e(a,function(v,k){ g.l.i(k,v) })
            return g}

        _a(g.load.image,arguments,g.load)

        return g}
    g.l.ss= g.l.spritesheet
    g.l.a= g.l.at= g.l.atlas
    g.l.ph= g.l.physics
    g.l.tm= g.l.tilemap


    g.st= g.stage
    g.t= g.time
    g.db= g.debug
    g.db.spI= g.db.spriteInfo
    g.db.t= g.db.text
    g.r= g.rnd
    g.cm= g.camera
    g.cm.f= g.cm.follow

    g.f=function(a){
       g.camera.follow(a)

    return g}

    g.ccU=   function(a){g.physics.arcade.checkCollision.up= a?true:false;return g}
    g.ccD= function(a){g.physics.arcade.checkCollision.down=a?true:false;return g}
    g.ccL= function(a){g.physics.arcade.checkCollision.left=a?true:false;return g}
    g.ccR=  function(a){g.physics.arcade.checkCollision.right=a?true:false;return g}




    g.bc=function(a){g.stage.backgroundColor=a;return g}
    g.n=function(a){var n=g.time.now; if(N(a)){n+=a}; return n}
    g.lX=function(){return g.camera.atLimit.x}
    g.lY=function(){return g.camera.atLimit.y}
    g.bn=function(a,b,c,d){g.world.setBounds(a,b,c,d); return g}


    g.w=function(a){if(U(a)){return g.world.width}
        g.world.width=a;return g
    }

    g.wr=function(){
        _a(g.world.wrap,arguments, g.world);return g
    }
    g.h=function(a){if(U(a)){return g.world.height}
        g.world.height=a;return g
    }
    g.rX=function(){return g.W.randomX}
    g.rY=function(){return g.W.randomY}
    g.cX=function(){return g.W.centerX}
    g.cY=function(){return g.W.centerY}

    g.ARC=function(a){
        if(O(a)){ g.physics.enable(a,pArcade);return g }
        g.ph.s(pArcade)
        if(N(a)){g.ph.arcade.gravity.y=a}
        return g}
    g.ru=function(a){g.ph.p2.restitution=a; return g}

    g.rp=function(){

       _a(g.time.events.repeat,arguments, g.time.events)

        return g}
    g.anB=function(){return _a(g.physics.arcade.angleBetween,arguments, g.physics.arcade)}


    g.col=function(a){
        if(A(a)){_e(arguments,function(ag){_a(g.physics.arcade.collide, ag, g.physics.arcade)})}
        else{_a(g.physics.arcade.collide, arguments, g.physics.arcade)}
        return g}

    g.colN=function(a){
        if(A(a)){_e(arguments,function(ag){
            _a(g.physics.ninja.collide, ag, g.physics.ninja)})}
        else{_a(g.physics.ninja.collide, arguments, g.physics.ninja)}
        return g}


    g.vFA= g.vfa=function(a,b){return g.physics.arcade.velocityFromAngle(a,b)}

    g.vFR= g.vfa=function(a,b){return g.physics.arcade.velocityFromRotation(a,b)}

    g.ol=function(){_a(g.physics.arcade.overlap  ,arguments, g.physics.arcade); return g}

    g.mTO=   function(){return _a(g.physics.arcade.moveToObject,arguments, g.physics.arcade)}
    g.rI=function(){
        return _a(g.rnd.integerInRange,arguments, g.rnd)
    }

    g.mTP= g.mtp= function(){return _a(g.physics.arcade.moveToPointer,arguments, g.physics.arcade)}

    g.dTP=function(a){return g.physics.arcade.distanceToPointer(a)}

    g.pE=function(){return  g.time.physicsElapsed}

    g.P2=function(){g.physics.startSystem(Phaser.Physics.P2JS); return g}

    g.Nj=function(){
        g.physics.startSystem(Phaser.Physics.NINJA); return g}

    g.cA=function(){
        _a(g.world.callAll, arguments, g.world);return g
    }

    g.K= g.keys= function(){return sCu(g.ip.kb.createCursorKeys())}
    g.k=function(a){ return g.ip.kb.addKey(a) }
    g.iD=function(a){return g.ip.kb.isDown(a)}


    g.aP=function(){return g.input.activePointer}
    g.aPD=function(){return g.input.activePointer.isDown }
    g.iX=function(){return g.input.activePointer.worldX}
    g.iY=function(){return g.input.activePointer.worldY}

    g.mX=function(){return g.input.mousePointer.x}
    g.mY=function(){return g.input.mousePointer.y}





    g.iK=g.imK= g.imageKeys=function(){return g.cache.getKeys(Phaser.Cache.IMAGE)}


    g.sp=g.spr=g.sprite=function(){var s= _a(g.add.sprite , arguments, g.add); return sSp(s)}

    g.spR=function(a){
        return  g.sp(g.rX(),g.rY(), a)}

    g.tm=function(){
        var s= _a(g.add.tilemap , arguments, g.add); return sTM(s)}


    g.im=function(){
        var s= _a(g.add.image , arguments, g.add);
        return sIm(s)}


    g.cT= g.cTM= g.cTm=function(){

       return _a(g.physics.ninja.convertTilemap,arguments,
            g.physics.ninja)
}

    g.im0=function(a){
                var s= g.im(0,0,a)
                return s}



    g.sp0=function(a){
        return  g.sp(0,0, a)
    }

    g.eA=function(){
        g.physics.arcade.enable(g.W,true)

    return g}

    g.jR=function(){
            _a(game.input.keyboard.justReleased,arguments,game.input.keyboard)
    return g}


    g.tx=function(){var t= _a(g.add.text, arguments, g.add); return sTx(t)}

    g.bt=function(){
        var b=_a(g.add.button,arguments,g.add)
    return sBt(b)}


    g.gr=g.group=function(){return sGr(g.add.group())}
    g.tw=function(){var w= _a(g.add.tween,arguments,g.add);return sTw(w)}
    g.tSp=function(){var ts=_a(g.add.tileSprite,arguments, g.add); return sTS(ts)}

    g.spB=function(){
        var ts=_a(g.add.spriteBatch,arguments, g.add); return sSB(ts)}

    g.em=function(){var e=_a(g.add.emitter,arguments, g.add); return sEm(e)}



    g.ru=function(a){
        if(U(a)){return g.physics.p2.restitution}
        g.physics.p2.restitution = a;return g}


    g.oD=function(){
        _a(g.input.onDown.add, arguments, g.input.onDown)
        return g}

    g.oDR=function(){
        _a(g.input.onDown.remove, arguments, g.input.onDown)
        return g}

    g.oT=function(){
        _a(g.input.onTap.add,arguments,g.input.onTap)
        return g}


    g.oT1=function(){
        _a(g.input.onTap.addOnce,arguments,g.input.onTap)
        return g}


    g.lp=function(){

        _a(g.time.events.loop, arguments, g.time.events)

        return g
    }



    g.aTP=function(a){
        return    g.physics.arcade.angleToPointer(a)

    }
    g.ev=function(){
        _a(g.time.events.add, arguments, g.time.events);return g}


g.sIE=function(a){
    g.physics.p2.setImpactEvents(a?true:false)

    return g}

    return g}





sSp=function(s){

    //p2


    s.sC=function(){_a(s.body.setCircle,arguments, s.body)
        return s}

    s.fR= s.fRt=function(a){
        s.fixedRotation=a?true:false
    return s}

    s.clS=function(){s.body.clearShapes();return s}
    s.lP=function(){

        _a(s.body.loadPolygon,arguments, s.body)
    return s}

    s.oBC=function(a,b){

       s.body.onBeginContact.add(a,b||this)

        return s}


    //

s.cCVT=function(){
    _a(s.body.circle.collideCircleVsTile, arguments,s.body.circle)
return s}
    s.p= s.ps= s.po= s.position

    s.bTT=function(){
            _a(s.bringToTop,arguments,s)
    return s}
    s.k=function(){s.kill();return s}
    s.drg=function(){
        s.input.enableDrag(false, true)
        return s}

     s.drag=function(){
        s.input.enableDrag()
        return s}


    s.fw=function(){
        s.game.camera.follow(s)
        return s}
    s.snp=s.snap=function(a,b,c,d){s.input.enableSnap(a,b,c,d);return s}



    s.rs=function(a,b){

        if(U(a)){return s.rs(s.game.world.randomX, s.game.world.randomY      )}
        if(O(a)){return s.rs(a.body.x, a.body.y)}

        s.reset(a,b)
        return s}



    s.sm=function(a){
        s.smoothed=a?true:false
        return s}

    s.sR=function(a,b,c,d){
        s.body.setRectangle(a,b,c,d)
        return s}

    s.im= s.imm=function(a){
        s.body.immovable= a?true:false;

        return s}




    s.aR=function(a){s.body.allowRotation= a?true:false;return s}

    s.mvs=function(a){s.body.moves = a?true:false;return s}

    s.bZ=function(a,b,c,d){s.body.setSize(a,b,c,d);return s}

    s.cWB=s.chWB=function(a){s.checkWorldBounds= a?true:false;return s}
    s.ipS=function(){s.input.start(0,true); return s}


    s.clWB =function(a){s.body.collideWorldBounds= a?true:false;return s}

    s.vs=  function(a){s.visible= a?true:false;return s}

    s.ex=  function(a){
        s.exists=a?true:false;
        return s}



    s.A=function(a,b){
        s.anchor.setTo(
            N(a)?a:.5,
            N(b)?b:.5
        );return s
    }


    s.rt=s.r= function(a){if(U(a)){return s.rotation};s.rotation=a;return s}
    s.w=function(a){if(U(a)){return s.width};s.width=a;return s}
    s.h=function(a){if(U(a)){return s.height};s.height=a;return s}
    s.al= s.a=  s.op=function(a){if(U(a)){return s.alpha};s.alpha=a;return s}

    s.ang=function(a){if(U(a)){return s.angle};s.angle=a;return s}
    s.nm=function(a){if(U(a)){return s.name};s.name=a;return s}
    s.tn=function(a){if(U(a)){return s.tint};s.tint=a;return s}

    s.pr=function(a){
        if(U(a)){return s.input.priorityID}
        s.input.priorityID=a;
        return s}




    s.rL= s.rtL=function(a){s.body.rotateLeft(a);return s}
    s.rR= s.rtR=function(a){s.body.rotateRight(a);return s}
    s.sZR=function(){s.body.setZeroRotation();return s}
    s.sZV=function(){s.body.setZeroVelocity();return s}


    s.mL=function(){s.body.moveLeft(200);return s}
    s.mR=function(){s.body.moveRight(200);return s}
    s.mU=function(){s.body.moveUp(200);return s}
    s.mD=function(){s.body.moveDown(200);return s}

    s.mTP=function(a){

        s.game.physics.arcade.moveToPointer(s,a)
        return s

    }


    s.vxy= s.v= function(a,b){
        if(O(a)){return s.vxy(a.x, a.y)}
        s.body.velocity.setTo(a,b);return s
    }



    s.vFA=function(n){

        s.vxy(s.game.physics.arcade
            .velocityFromAngle(s.ang(), n))


        return s}

    s.vx=function(a){if(U(a)){return s.body.velocity.x};s.body.velocity.x=a;return s}
    s.vy=function(a){if(U(a)){return s.body.velocity.y};s.body.velocity.y=a;return s}
    s.aV=function(a){s.body.angularVelocity=a;return s}

    s.bo=function(a,b){
        if(!b){s.body.bounce=a}
        else{s.body.bounce.setTo(a,b)}
        return s}

    s.bX=function(a){
        if(U(a)){return s.body.bounce.x}
        s.body.bounce.x=a;return s
    }

    s.bY=function(a){
        if(U(a)){return s.body.bounce.y}
        s.body.bounce.y=a;
        return s
    }

    s.ccU= s.cU = s.colU = function(a){s.body.checkCollision.up= a?true:false;return s}
    s.ccD=s.cD=s.colD=function(a){s.body.checkCollision.down=a?true:false;return s}
    s.ccL=s.cL=s.colL=function(a){s.body.checkCollision.left=a?true:false;return s}
    s.ccR= s.cR=s.colR=function(a){s.body.checkCollision.right=a?true:false;return s}

    s.eC=function(rad,children){
        s.game.physics.ninja.enableCircle(s, rad,children)
    return s}


    s.dr=function(a ){s.direction=a;return s}

    s.sp=function(a){s.speed=a;return s}
    s.tSp=function(a){s.turningSpeed=a;return s}
    s.os=function(a){s.offset=a;return s}


    s.sc=function(a,b){s.scale.setTo(a,b);return s}

    s.arc=function(){s.game.physics.enable(s,pArcade);return s}

    s.p2=function(){
        game.physics.p2.enable(s);return s}


s.fr=function(a){

    if(U(a)){return s.frame}
    s.frame=a;return s
}

    s.fT= s.frT=function(){
        return s.animations.frameTotal
    }

    s.vCF=function(a){s.body.velocity.copyFrom(a); return s}

    s.aGr=function(a){s.body.allowGravity=a?true:false;return s}
    s.thrust= s.thr= s.th=function(a){s.body.thrust(a);return s}
    s.rv= s.rev=function(a){s.body.reverse(a);return s}
    s.re=function(){s.revive();return s}

s.cBC=function(){
    _a(s.body.createBodyCallback,arguments, s.body)
return s}


    s.rtP=function(){

        s.rt(s.game.physics.arcade.angleToPointer(s))

    return s}



    s.iE=s.ipE=function(){s.inputEnabled=true;return s}
    s.oR=function(f){s.events.onRevived.add(f,this);return s}
    s.oRFG=function(f){s.events.onRemovedFromGroup.add(f,this);return s}
    s.oOOB=function(f){s.events.onOutOfBounds.add(f,this);return s}
    s.oK=function(f){s.events.onKilled.add(f,this);return s}

    s.oIU=function(){
        _a(s.events.onInputUp.add, arguments, s.events.onInputUp)
        return s}




    s.oIV=function(f){s.events.onInputOver.add(f,this);return s}
    s.oIO=function(f){s.events.onInputOut.add(f,this);return s}

    s.oID=function(f){s.events.onInputDown.add(f,this);return s}

    s.oEB=function(f){s.events.onEnterBounds.add(f,this);return s}

    s.oDS=function(f){s.events.onDragStart.add(f,this);return s}
    s.oDSS=function(f){s.events.onDragStop.add(f,this);return s}

    s.oAS=function(f){s.events.onAnimationStart.add(f,this);return s}
    s.oAL=function(f){s.events.onAnimationLoop.add(f,this);return s}
    s.oAC=function(f){s.events.onAnimationComplete.add(f,this);return s}
    s.oATG=function(f){s.events.onAddedToGroup.add(f,this);return s}

    s.an= s.animations
    s.an.a= s.an.add
    s.an.p= s.an.play
    s.an.s= s.an.stop
    return s}


sGr=function(gr){

    gr.cA=function(){
        _a(gr.callAll, arguments, gr);return gr
    }
    gr.fEA=function(){
        _a(gr.forEachAlive,arguments,gr)
        return gr}

    gr.ea=function(){_a(gr.forEach,arguments,gr);return gr}

    gr.gFE =function(a){
        var s=gr.getFirstExists(a?true:false);
        return sSp(s)}

    gr.gFA =function(a){
        var s=gr.getFirstAlive(a?true:false);
        return sSp(s)}


    gr.cL=gr.countLiving
    gr.cD=gr.countDead

    gr.gFD =function(){
        var s=gr.getFirstDead();return sSp(s)}


    gr.mult=  gr.make=function(){
        _a(gr.createMultiple, arguments, gr);return gr}

    gr.cr=function(){return sSp(_a(gr.create,arguments,gr))}
       gr.crR=function(c,d,e){
           return gr.cr(gr.game.world.randomX,gr.game.world.randomY,c,d,e)
       }
    gr.eB=function(a){if(a){gr.enableBody=true} else{gr.enableBody=false};return gr}

    gr.pBT=function(a){gr.physicsBodyType=a;return gr}

    gr.sA=function(){_a(gr.setAll, arguments,gr);return gr}

    gr.arc=function(){gr.physicsBodyType = Phaser.Physics.ARCADE;return gr}

     gr.a=function(){
          return _a(gr.add,arguments,gr)
     }

    return gr}





sTw=function(w){
    w.t= w.to

    w.oC=function(){
        _a(w.onComplete.add,arguments,w.onComplete)

    return w}

    w.oC1=function(){
        _a(w.onComplete.addOnce,arguments,w.onComplete)

        return w}
    w.s=function(){
        _a(w.start,arguments,w)

        return w}

    w.oL=function(){
        _a(w.onLoop.add,arguments,w.onLoop)

        return w
    }

return w}

sCu=function(c){

    c.u=  c.up
    c.d=  c.down
    c.l= c.left
    c.r= c.right

    c.U=function(){return c.u.isDown}
    c.D=function(){return c.d.isDown}
    c.L=function(){return c.l.isDown}
    c.R=function(){return c.r.isDown}

    c.UU=function(){return c.u.shiftKey}
    c.DD=function(){return c.d.shiftKey}
    c.LL=function(){return c.l.shiftKey}
    c.RR=function(){return c.r.shiftKey}


    return c}


sEm=function(e){

         e.mP=function(a){e.makeParticles(a);return e}

         e.r=e.rt=function(a,b){e.setRotation(a,b);return e}

         e.g=e.grv=function(a){e.gravity=a;return e}


         e.a= e.al=function(){_a(e.setAlpha,arguments,e);return e}


         e.sc=function(){_a(e.setScale,arguments,e);return e}
         e.eX=function(a){e.emitX=a;return e}
         e.eY=function(a){e.emitY=a;return e}


         e.eXY=function(a,b){e.emitX=a;e.emitY=b;return e}
         e.nPS=function(a,b){e.minParticleSpeed.set(a,b);return e}
         e.mPS=function(a,b){e.maxParticleSpeed.set(a,b);return e}


             e.s=function(){_a(e.start,arguments,e);return e}



             return e}



sTS=function(ts){
    ts.f= ts.ftc = ts.fTC=function(a){ts.fixedToCamera=a?true:false;return ts}

    ts.tX=ts.tpX=function(a){
        if(U(a)){return ts.tilePosition.x}
        ts.tilePosition.x+=a;return ts
    }

    ts.tY=ts.tpY=function(a){
        if(U(a)){return ts.tilePosition.y}
        ts.tilePosition.y+=a;return ts
    }



    return ts}

sTM=function(m) {

    m.aTSI = m.aTI = function (a) {
        m.addTilesetImage(a)
        return m}


    m.cL=function(a,b){var l=m.createLayer(a)
        if(b=='+'){l.resizeWorld()}
        return l}


    m.sCB=function(){
        _a(m.setCollisionBetween,arguments,m)
        return m}


    m.sTIC=function(){
        _a(m.setTileIndexCallback ,arguments,m)
        return m}

    m.sTLC=function(){
        _a(m.setTileLocationCallback  ,arguments,m)
        return m}

    return m}


sBt=function(b){return b}
sSB=function(b){return b}

sTx=function(t){
    t.t= t.tx=  function(a){if(U(a)){return t.text}t.text=a;return t}

    t.vs=  function(a){t.visible= a?true:false;return t}

    t.A=function(a,b){t.anchor.setTo(N(a)?a:.5,N(b)?b:.5);return t}
    return t}

sIm=function(i){

    i.fTC=function(a){
        i.fixedToCamera=a?true:false
    return i}

    return i}



pG=function(preload,create,update,render){

    update=update||function(){}
    render=render||function(){}

z()
    wM(function(m){
        g=game=Game(800,600, Phaser.CANVAS, 'phaser-example',{

            preload:function(){g=$G(g)
                g.cache.addImage('me',m,im(m))
                g.cache.addImage('m',m,im(m))

                preload()},
            create:function(){create()},
            update:function(){update()}
                , render:render
            }
        )
    })}


DATAURL=function(){z()




    bTime=0
    shoot=function(){var b
        if(g.n()>bTime){
            if(b=bs.gFE(0))
            {b.rs(s.x+6,s.y-8).vy(-300)
                bTime=g.n(150)}}}

    wM(


        function(m){

            g=Game(800,600, Phaser.CANVAS, 'phaser-example',

                {
                    preload:function(){

                        g=$G(game).bc('red')


                        g.l.i('phaser', '/assets/sprites/phaser-dude.png')

                        g.l.i('bullet', '/assets/misc/bullet0.png')
                        g.l.ss('vs', '/assets/sprites/fruitnveg32wh37.png', 32, 32)

                        g.cache.addImage('me', m, im(m))} ,
                    create: function(){

                        s=g.sp(400,520,'me').arc().w(80).h(80)

                        vs=g.gr().eB(1).arc()
                        _t(50,function(){
                            vs.cr(g.rX(),rnd()*500,'vs',
                                g.r.integerInRange(0,36))})

                        bs=g.gr().eB(1).arc()
                        _t(5,function(){
                            bs.cr(0,0,'bullet').ex(0).cWB(1)
                                .oOOB(function(b){b.kill()})})

                        cu=g.K()
                        g.kc([Spacebar])},
                    update: function(){

                        g.ol(bs,vs,
                            function(b,v){
                                b.kill();v.kill()},
                            null,this)

                        s.vxy(0,0)
                        if(cu.L()){s.vx(-300)}
                        if(cu.R()){s.vx(300)}

                        if(g.iD(Spacebar)){shoot()}}

                })


        })


}


STATES=function(){z()

    di('game_div').a().s({w:400, margin:'auto', mt:50})
    // game=new Phaser.Game(400,490,Phaser.AUTO,'')
    game= Game(400,490,Phaser.AUTO,'game_div')

    state={}
    state.main=function(){} // Creates a new 'main' state that wil contain the game

    state.main.prototype={

        preload:function(){g.l.i('hello',src('me'))},
        create:function(){ this.hello_sprite=game.add.sprite(250,300,'hello')},
        update:function(){this.hello_sprite.angle+=1}}// Function called 60 times per second


    game.state.add('main', state.main)
    game.state.start('main')}
