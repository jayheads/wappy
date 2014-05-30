Ph=Phaser
pArcade=Ph.Physics.ARCADE
pNinja=Ph.Physics.NINJA
One=Phaser.Keyboard.ONE
Two=Phaser.Keyboard.TWO
None=Phaser.Easing.Linear.None
$E=Phaser.Easing
Second=Phaser.Timer.SECOND

Spacebar= Phaser.Keyboard.SPACEBAR

Up=Ph.Keyboard.UP
Left=Ph.Keyboard.LEFT
Down= Phaser.Keyboard.DOWN
Right=Phaser.Keyboard.RIGHT

Game=function(a,b,c,d,e,f,g){return  new Phaser.Game(a,b,c,d,e,f,g)}

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
    g.st= g.stage
    g.t= g.time
    g.db= g.debug
    g.db.spI= g.db.spriteInfo
    g.db.t= g.db.text
    g.r= g.rnd
    g.cm= g.camera
    g.cm.f= g.cm.follow




    g.bc=function(a){g.stage.backgroundColor=a;return g}
    g.n=function(a){var n=g.time.now; if(N(a)){n+=a}; return n}
    g.lX=function(){return g.camera.atLimit.x}
    g.lY=function(){return g.camera.atLimit.y}
    g.bn=function(a,b,c,d){g.world.setBounds(a,b,c,d); return g}


    g.w=function(a){if(U(a)){return g.world.width}
        g.world.width=a;return g
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
    g.vFA= g.vfa=function(a,b){return g.physics.arcade.velocityFromAngle(a,b)}
    g.ol=function(){_a(g.physics.arcade.overlap  ,arguments, g.physics.arcade); return g}

    g.mTO=   function(){return _a(g.physics.arcade.moveToObject,arguments, g.physics.arcade)}
    g.rI=function(){
        return _a(g.rnd.integerInRange,arguments, g.rnd)
    }

    g.mTP= g.mtp= function(){return _a(g.physics.arcade.moveToPointer,arguments, g.physics.arcade)}

    g.dTP=function(a){return g.physics.arcade.distanceToPointer(a)}


    g.P2=function(){g.ph.s(Phaser.Physics.P2JS); return g}

    g.cA=function(){
        _a(g.world.callAll, arguments, g.world);return g
    }

    g.K= g.keys= function(){return sCu(g.ip.kb.createCursorKeys())}
    g.k=function(a){ return g.ip.kb.addKey(a) }
    g.iD=function(a){return g.ip.kb.isDown(a)}


    g.aP=function(){return g.input.activePointer}
    g.iX=function(){return g.input.activePointer.worldX}
    g.iY=function(){return g.input.activePointer.worldY}

    g.iK=g.imK= g.imageKeys=function(){return g.cache.getKeys(Phaser.Cache.IMAGE)}


    g.sp=g.spr=g.sprite=function(){var s= _a(g.add.sprite , arguments, g.add); return sSp(s)}

    g.spR=function(a){
          return  g.sp(g.rX(),g.rY(), a)
    }

    g.jR=function(){
            _a(game.input.keyboard.justReleased,arguments,game.input.keyboard)
    return g}
    g.tx=function(){var t= _a(g.add.text, arguments, g.add); return sTx(t)}

    g.bt=function(){
        return _a(g.add.button,arguments,g.add)
    }

    g.gr=g.group=function(){return sGr(g.add.group())}
    g.tw=function(){var w= _a(g.add.tween,arguments,g.add);return sTw(w)}
    g.tSp=function(){var ts=_a(g.add.tileSprite,arguments, g.add); return sTS(ts)}

    g.em=function(){var e=_a(g.add.emitter,arguments, g.add); return sEm(e)}

    g.oT1=function(){
    _a(g.input.onTap.addOnce,arguments,g.input.onTap)
    return g}


    g.oD=function(f){g.input.onDown.add(f,this);return s}

    g.ru=function(a){

        if(U(a)){return g.physics.p2.restitution}
        g.physics.p2.restitution = a;return g
    }




    return g}

sSp=function(s){

    //p2


    s.sC=function(){_a(s.body.setCircle,arguments, s.body)
        return s}
    s.clS=function(){s.body.clearShapes();return s}
    s.lP=function(){

        _a(s.body.loadPolygon,arguments, s.body)
    return s}

    s.oBC=function(a,b){

       s.body.onBeginContact.add(a,b||this)

        return s}


    //


    s.p= s.ps= s.po= s.position

    s.bTT=function(){
            _a(s.bringToTop,arguments,s)
    return s}
    s.drg= s.drag=function(){
        s.input.enableDrag(false,true);
        return s}

    s.snp=s.snap=function(a,b,c,d){s.input.enableSnap(a,b,c,d);return s}

    s.rs=function(a,b){

        if(O(a)){
            return s.rs(a.body.x, a.body.y)}

        s.reset(a,b)

        return s}



    s.im=function(a){s.body.immovable= a?true:false;return s}

    s.aR=function(a){s.body.allowRotation= a?true:false;return s}

    s.mvs=function(a){s.body.moves = a?true:false;return s}

    s.bZ=function(a,b,c,d){s.body.setSize(a,b,c,d);return s}

    s.cWB=s.chWB=function(a){s.checkWorldBounds= a?true:false;return s}
    s.ipS=function(){s.input.start(0,true); return s}


    s.clWB =function(a){s.body.collideWorldBounds= a?true:false;return s}

    s.vs=  function(a){s.visible= a?true:false;return s}
    s.ex=  function(a){s.exists=a?true:false;return s}

    s.A=function(a,b){s.anchor.setTo(N(a)?a:.5,N(b)?b:.5);return s}
    s.rt=s.r= function(a){if(U(a)){return s.rotation};s.rotation=a;return s}
    s.w=function(a){if(U(a)){return s.width};s.width=a;return s}
    s.h=function(a){if(U(a)){return s.height};s.height=a;return s}
    s.al= s.a=  s.op=function(a){if(U(a)){return s.alpha};s.alpha=a;return s}

    s.ang=function(a){if(U(a)){return s.angle};s.angle=a;return s}
    s.nm=function(a){if(U(a)){return s.name};s.name=a;return s}


    s.rL= s.rtL=function(a){s.body.rotateLeft(a);return s}
    s.rR= s.rtR=function(a){s.body.rotateRight(a);return s}
    s.sZR=function(){s.body.setZeroRotation();return s}
    s.sZV=function(){s.body.setZeroVelocity();return s}


    s.mL=function(){s.body.moveLeft(200);return s}
    s.mR=function(){s.body.moveRight(200);return s}
    s.mU=function(){s.body.moveUp(200);return s}
    s.mD=function(){s.body.moveDown(200);return s}




    s.vxy= s.v= function(a,b){s.body.velocity.setTo(a,b);return s}
    s.vx=function(a){if(U(a)){return s.body.velocity.x};s.body.velocity.x=a;return s}
    s.vy=function(a){if(U(a)){return s.body.velocity.y};s.body.velocity.y=a;return s}
    s.aV=function(a){s.body.angularVelocity=a;return s}

    s.bo=function(a,b){s.body.bounce.setTo(a,b);return s}

    s.ccU= s.cU = s.colU = function(a){s.body.checkCollision.up= a?true:false;return s}
    s.ccD=s.cD=s.colD=function(a){s.body.checkCollision.down=a?true:false;return s}
    s.ccL=s.cL=s.colL=function(a){s.body.checkCollision.left=a?true:false;return s}
    s.ccR= s.cR=s.colR=function(a){s.body.checkCollision.right=a?true:false;return s}


    s.sc=function(a,b){s.scale.setTo(a,b);return s}

    s.arc=function(){s.game.physics.enable(s,pArcade);return s}

    s.p2=function(){
        game.physics.p2.enable(s);return s}




    s.vCF=function(a){s.body.velocity.copyFrom(a); return s}

    s.aGr=function(a){s.body.allowGravity=a?true:false;return s}
    s.thrust= s.thr= s.th=function(a){s.body.thrust(a);return s}
    s.rv= s.rev=function(a){s.body.reverse(a);return s}

    s.iE=s.ipE=function(){s.inputEnabled=true;return s}
    s.oR=function(f){s.events.onRevived.add(f,this);return s}
    s.oRFG=function(f){s.events.onRemovedFromGroup.add(f,this);return s}
    s.oOOB=function(f){s.events.onOutOfBounds.add(f,this);return s}
    s.oK=function(f){s.events.onKilled.add(f,this);return s}
    s.oIU=function(f){s.events.onInputUp.add(f,this);return s}
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

    gr.gFE =function(a){var s=gr.getFirstExists(a?true:false);return s}

    gr.mult=  gr.make=function(){_a(gr.createMultiple, arguments, gr);return gr}

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
    c.U=function(){return c.u.isDown}

    c.d=  c.down
    c.D=    function(){return c.d.isDown}
    c.l= c.left
    c.L=  function(){return c.l.isDown}
    c.r= c.right
    c.R=  function(){return c.r.isDown}
    return c}
sEm=function(e){

         e.mP=function(a){e.makeParticles(a)
             return e}

         e.r= e.rt=function(a,b){e.setRotation(a,b)
             return e}

         e.g=e.grv=function(a){e.gravity=a
             return e}


         e.a= e.al=function(){_a(e.setAlpha,arguments,e)
             return e}


         e.sc=function(){_a(e.setScale,arguments,e)
             return e}

         e.eX=function(a){e.emitX=a
             return e}

         e.eY=function(a){
             e.emitY=a
             return e}


         e.eXY=function(a,b){
             e.emitX=a
             e.emitY=b
             return e}


         e.nPS=function(a,b){
             e.minParticleSpeed.set(a,b)
             return e}


         e.mPS=function(a,b){
             e.maxParticleSpeed.set(a,b)
             return e}



return e
     }



sTS=function(ts){
    ts.f= ts.ftc = ts.fTC=function(a){ts.fixedToCamera=a?true:false;return ts}
    ts.tX=ts.tpX=function(){return ts.tilePosition.x}
    ts.tY=ts.tpY=function(){return ts.tilePosition.y}
    return ts}




sTx=function(t){
    t.t= t.tx=  function(a){if(U(a)){return t.text}t.text=a;return t}

    t.vs=  function(a){t.visible= a?true:false;return t}

    t.A=function(a,b){t.anchor.setTo(N(a)?a:.5,N(b)?b:.5);return t}
    return t}



