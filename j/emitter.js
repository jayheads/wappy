

SNOW=function(){z()
    //  This example was created by Jens Anders Bakke

    game = new Phaser.Game(800, 600, Phaser.AUTO,
        'phaser-example', { preload: preload, create: create });

    function preload(){g=$G(game)

        g.l.i('sky', '/assets/skies/sky3.png');
        g.l.ss('snowflakes', '/assets/sprites/snowflakes.png', 17, 17);
        g.l.ss('snowflakes_large', '/assets/sprites/snowflakes_large.png', 64, 64);

    }

    max = 0;

    update_interval = 4 * 60;
    i = 0;

    function create() {

        game.add.image(0, 0, 'sky');

        back_emitter = game.add.emitter(game.world.centerX, -32, 600);
        back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        back_emitter.maxParticleScale = 0.6;
        back_emitter.minParticleScale = 0.2;
        back_emitter.setYSpeed(20, 100);
        back_emitter.gravity = 0;
        back_emitter.width = game.world.width * 1.5;
        back_emitter.minRotation = 0;
        back_emitter.maxRotation = 40;

        mid_emitter = game.add.emitter(game.world.centerX, -32, 250);
        mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
        mid_emitter.maxParticleScale = 1.2;
        mid_emitter.minParticleScale = 0.8;
        mid_emitter.setYSpeed(50, 150);
        mid_emitter.gravity = 0;
        mid_emitter.width = game.world.width * 1.5;
        mid_emitter.minRotation = 0;
        mid_emitter.maxRotation = 40;

        front_emitter = game.add.emitter(game.world.centerX, -32, 50);
        front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
        front_emitter.maxParticleScale = 1;
        front_emitter.minParticleScale = 0.5;
        front_emitter.setYSpeed(100, 200);
        front_emitter.gravity = 0;
        front_emitter.width = game.world.width * 1.5;
        front_emitter.minRotation = 0;
        front_emitter.maxRotation = 40;

        changeWindDirection();

        back_emitter.start(false, 14000, 20)
        mid_emitter.start(false, 12000, 40)
        front_emitter.start(false, 6000, 1000)}

    function update() {

        i++;

        if (i === update_interval){
            changeWindDirection()
            update_interval = Math.floor(rnd()*20)*60; // 0 - 20sec @ 60fps
            i=0}}

    function changeWindDirection() {

        var multi=Math.floor((max + 200) / 4),
            frag=(Math.floor(rnd() * 100) - multi);

        max+=frag
        if(max>200){max=150}
        if(max<-200){max=-150}

        setXSpeed(back_emitter, max)
        setXSpeed(mid_emitter, max)
        setXSpeed(front_emitter, max)}

    function setXSpeed(emitter, max) {

        emitter.setXSpeed(max - 20, max);
        emitter.forEachAlive(setParticleXSpeed, this, max)}

    function setParticleXSpeed(particle, max){
        particle.body.velocity.x = max - Math.floor(rnd()*30)}}
FIRESTARTER=function(){z()


    game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {g=$G(game).ARC(150).ccL(0).ccR(0)

        g.l.i('space', '/assets/misc/starfield.jpg');
        g.l.i('fire1', '/assets/particles/fire1.png');
        g.l.i('fire2', '/assets/particles/fire2.png');
        g.l.i('fire3', '/assets/particles/fire3.png');
        g.l.i('smoke', '/assets/particles/smoke-puff.png');
        g.l.ss('ball', '/assets/particles/plasmaball.png', 128, 128)}


    function create() {

        g.tSp(0, 0, g.w(), g.h(), 'space');

        e=g.em(g.cX(), g.cY(), 400).mP( [ 'fire1', 'fire2', 'fire3', 'smoke' ] )
            .grv(200).al(1, 0, 3000).sc(0.8, 0, 0.8, 0, 3000).s(false, 3000, 5)


        s=g.sp(0,300,'ball',0).arc()
        s.an.a('pulse')
        s.bZ(80,80,0,0).clWB(1).bo(1).v(300, 200).iE(1).drag(1)
            .oDS(function(){s.mvs(0)}, this).oDSS(function(){s.mvs(1)},this).A()
            .play('pulse',30,true)

        createText(16,16,'If you can catch the fireball, drag it around')}

    function update(){
        e.nPS(s.vx()*-1, s.vy()*-1).mPS(s.vx()*-1, s.vy()*-1).eX(s.x).eY(s.y)
        // emitter.forEachExists(game.world.wrap, game.world);
        g.wr(s, 64)}

    function createText(x, y, string) {

        var text = g.tx(x, y, string);
        // text.anchor.set(0.5);
        // text.align = 'center';

        //  Font style
        text.font = 'Arial Black';
        text.fontSize = 20;
        // text.fontWeight = 'bold';
        text.fill = '#ffffff';
        text.setShadow(2, 2, 'rgba(0, 0, 0, 0.7)', 2);

        return text;

    }


    function render() {

        // game.debug.bodyInfo(s, 32, 32);

    }

}
CLICKBURST=function(){z()

    game=Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create })

    function preload() { g=$G(game).ARC().bc(0x337799)

        g.l.i('diamond','/assets/sprites/diamond.png')}

    function create(){

        em=g.em(0,0,100).mP('diamond').grv(200)
        g.oD(particleBurst, this)}

    function particleBurst(pointer) {

        //  Position the emitter where the mouse/touch event was
        em.x = pointer.x;
        em.y = pointer.y;

        //  The first parameter sets the effect to "explode" which means all particles are emitted at once
        //  The second gives each particle a 2000ms lifespan
        //  The third is ignored when using burst/explode mode
        //  The final parameter (10) is how many particles will be emitted in this single burst
        em.start(true, 2000, null, 10);

    }}


