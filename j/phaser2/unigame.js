
UNIGAME=function(){z()

    isThrusting=false
    fireRate=100
    nextFire=0

    pG(

        function preload(){
            g.bn(0,0,1420,700).P2().ru(1.2)

            g.l.i('stars','/assets/misc/starfield.jpg')
            g.l.i('ship','/assets/sprites/thrust_ship2.png')
            g.l.i('jets','/assets/sprites/jets.png')
            g.l.i('bullet', '/assets/sprites/purple_ball.png')
            g.l.i('jason','/me.png')

        },

        function create(){cu=g.K()


            starfield=g.tSp(0,0,800,600,'stars').fTC(1)

            trail=g.em(0,0,1000).mP('jets').rt(0,0).a(1,0,6000).sc(1,0,1,0,6000)

            p=g.sp(200,200,'me').w(80).h(80).p2().fw()

            j=g.sp(200,300,'jason').arc().clWB(1).bo(.9).sc(1)

            bs=g.gr().arc().eB(1).mult(50,'bullet')
                .sA('checkWorldBounds',true)
                .sA('outOfBoundsKill',true)


        },

        function update(){
            isThrusting=false

            g.col(bs,j,function(){

                j.scale.x= j.scale.x -.01
                j.scale.y= j.scale.y -.01

            })



            if(cu.L()){p.rtL(100)} else if(cu.R()){p.rtR(100)} else{p.sZR()}
            if(cu.U()){p.thrust(400); isThrusting=true} else if(cu.D()){p.rv(400)}
            if(!g.lX()){starfield.tilePosition.x+=(p.vx()*16)*g.pE()}
            if(!g.lY()){starfield.tilePosition.y+=(p.vy()*16)*g.pE()}

            trail.eXY(p.x,p.y)

            var px=p.vx()*10,py=p.vy()*10;px *=-1;py *=-1

            trail.nPS(px, py).mPS(px, py)

            if(isThrusting||sqr(p.vx()*p.vx()+p.vy()*p.vy())>10){trail.start(true,3000,8)}


            if(g.aPD()){

                if(
                    g.n()>nextFire && bs.cD()>0){
                    nextFire=g.n(fireRate)
                    bs.gFD().rs(p).mTP(500)

                }}

        }
    )

}


FLAPPYYOU=function(){


    giveGravity=function(s){s.body.gravity.y=1000}

    goAway=function(s){
        s=sSp(s)
        g.tw(s).to({
            alpha:0,height:0,width:0,
            x:s.x+30,y:s.y+30},200,qIn,true)}

    die=function(s){
        s.vx(-200)
        g.tw(s).to({angle:90,x:400},1000,qIn,true)}

    flyIn=function(s){
        g.tw(s).to({y:250,x:100,angle:0},1000,qOut,true)
         .onComplete.add(giveGravity)}


    collisionHappened=function(){
        noscore=true
        showFinalScore()
        die(bird)
        pipes.forEach(goAway)
        g.input.onDown.removeAll()}




    jump=function(){
        if(bird.flyingIn){bird.flyingIn.stop();giveGravity(bird)}
        bird.vy(-350)
        g.tw(bird).to({height:40},100,None,true).to({height:50},100,None,true)
        if(bird.angling){bird.angling.stop()}
        bird.angling=g.tw(bird).to({angle:-10},80,None,true).to({angle:50},2000,None,true)}









    restartGame=function(){
    window.localStorage.setItem('flabbyBird',highScore)
    g.time.events.remove(pipeAdder)}

    addOnePipe=function(x,y){


        pipe=sSp(pipes.getFirstDead()).arc().w(100).h(100).rs(x,y).vx(-200)

        pipe.outOfBoundsKill=true

    return pipe}

    addRowOfPipes=function(){
    var hole = Math.floor(rnd() * 5) + 1;
    for (var i = 0; i < 8; i++) {
        if (i != hole && i != hole + 1) {nextPipe =  addOnePipe(400, i * 60 + 10)}}}

    addToScore=function(){if (noscore === false) {labelScore.content = ++score;

        if (score == highScore) {labelHighScore.moveScore = g.tw(labelHighScore).to({ x: 20 }, 300,
            Phaser.Easing.Sinusoidal.In, true)}

        if (score>=highScore){labelHighScore.content=highScore=score}}}



    showFinalScore=function(){

    text=score>=highScore?labelHighScore:labelScore

    otherText=text===labelScore?labelHighScore:labelScore

    if(text.moveScore){text.moveScore.stop()}

    style=text.style
    style.font = '80px Arial'
    text.setStyle(style)


        g.tw(text).to({x: 200 - ((text.width + 40) / 2),y: 245 - ((text.height + 40) / 2)}, 150, qOut, true);


        g.tw(otherText).to({alpha:0},50,None, true)
}


 pG(

     function preload(){
           g.ARC()
            g.l.i('bird', '/me.png')
            g.l.i('pipe', '/me.png')},

     function create(){
            noscore=false

         bird=g.sp(0, 0, 'bird').arc().w(100).h(100).ang(70).A(-0.2, 0.5)

         flyIn(bird)
            bird.body.bounce.setTo(1, 1)
            downHandler = g.input.onDown.add( jump, this)
            pipes = g.gr().mult(20,'pipe');
            pipeAdder=g.lp(1500,addRowOfPipes, this)
            highScore=window.localStorage.getItem('flabbyBird')||0
            score=0
            style = {font: '40px Arial',fill: '#ffffff',stroke: '#000000',strokeThickness: 5}
            labelScore =  g.tx(20, 20,  score, style);
            highScoreStyle = {font: '40px Arial', fill: '#D2BE27',stroke: '#000000',strokeThickness: 5}
            labelHighScore = g.tx(320, 20,  highScore, highScoreStyle)
            currentPipe = null;
            nextPipe = null},

     function update(){


             if(currentPipe==null){currentPipe=nextPipe}
             if(currentPipe!=null&&currentPipe.x<100){
                 addToScore()
                 currentPipe=nextPipe}

            if(!bird.inWorld){restartGame()}
            else{g.col(bird,  pipes, collisionHappened, null, this)}})

    }
FLAPPYYOU1=function(){
    z()

//     var col = require('rancol');

        game = Game(400, 490, Phaser.AUTO, 'game')


        giveGravity = function (s) {s.body.gravity.y = 1000;}


        goAway = function (s){s=sSp(s)
            s.game.add.tween(s).to({
                alpha: 0,
                height: 0,
                width: 0,
                x: s.x + 30,
                y: s.y + 30
            }, 200, Phaser.Easing.Quadratic.In, true);}

        die = function (s) {
            s.body.velocity.x = -200;
            s.game.add.tween(s).to({angle: 90,x: 400}, 1000, Phaser.Easing.Quadratic.In, true)}


        flyIn = function (s) {
            s.flyingIn = s.game.add.tween(s).to({
                y: 250
            }, 1000, Phaser.Easing.Quadratic.Out, true);

            s.flyingIn.onComplete.add(giveGravity.bind(this, s));

            g.tw(s).to({
                x: 100,
                angle: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true)}

        var gameState = {}

        gameState.main = function () {};
        gameState.main.prototype = {

            preload: function () {g=this.g=$G(this.game).ARC()
                //this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
                // this.game.stage.scale.setShowAll();
                //this.game.stage.scale.refresh();

                this.game.load.image('bird', '/me.png');
                this.game.load.image('pipe', '/me.png');
            },

            create: function () {
                this.noscore = false;
                this.bird = g.sp(0, 0, 'bird').arc().w(100).h(100)
                this.bird.angle = 70
                this.bird.anchor.setTo(-0.2, 0.5);

                flyIn(this.bird)

                this.bird.body.bounce.setTo(1, 1);

                this.downHandler = this.game.input.onDown.add(this.jump, this);

                this.pipes = g.gr()

                this.pipes.mult(20, 'pipe');

                this.pipeAdder = this.game.time.events.loop(1500, this.addRowOfPipes, this)

                this.highScore = window.localStorage.getItem('flabbyBird')||0
                this.score = 0
                var style = {font: '40px Arial',fill: '#ffffff',stroke: '#000000',strokeThickness: 5}

                this.labelScore = this.g.tx(20, 20, this.score, style);

                var highScoreStyle = {
                    font: '40px Arial',
                    fill: '#D2BE27',
                    stroke: '#000000',
                    strokeThickness: 5}

                this.labelHighScore = this.game.add.text(320, 20, this.highScore, highScoreStyle);
                this.currentPipe = null;
                this.nextPipe = null},

            update:function(){
                this.checkPipes()
                if(!this.bird.inWorld) {this.restartGame()}
                else{g.col(this.bird, this.pipes, this.collisionHappened, null, this)}},


            collisionHappened: function(){
                this.noscore = true
                this.showFinalScore()
                die(this.bird)
                this.pipes.forEach(goAway);
                this.game.input.onDown.removeAll()},

            checkPipes: function(){
                if (this.currentPipe== null) {this.currentPipe = this.nextPipe}
                if (this.currentPipe!= null && this.currentPipe.x < 100) {
                    this.addToScore()
                    this.currentPipe=this.nextPipe}},


            jump:function(){
                if (this.bird.flyingIn) {
                    this.bird.flyingIn.stop();
                    giveGravity(this.bird);
                }

                this.bird.body.velocity.y = -350;
                this.game.add.tween(this.bird)
                    .to({ height: 40 }, 100, Phaser.Easing.Linear.None, true)
                    .to({ height: 50 }, 100, Phaser.Easing.Linear.None, true);


                if (this.bird.angling) {
                    this.bird.angling.stop();
                }

                this.bird.angling = this.game.add.tween(this.bird)
                    .to({ angle: -10 }, 80, Phaser.Easing.Linear.None, true)
                    .to({ angle: 50 }, 2000, Phaser.Easing.Linear.None, true);
            },

            restartGame:function(){
                window.localStorage.setItem('flabbyBird', this.highScore);
                this.game.time.events.remove(this.pipeAdder);
                this.game.state.start('main');
            },

            addOnePipe:function(x,y){
                var pipe =  sSp(this.pipes.getFirstDead()).arc().w(100).h(100)

                pipe.reset(x, y);
                pipe.body.velocity.x = -200;
                pipe.outOfBoundsKill = true;

                return pipe;
            },

            addRowOfPipes:function(){
                var hole = Math.floor(Math.random() * 5) + 1;
                for (var i = 0; i < 8; i++) {
                    if (i != hole && i != hole + 1) {
                        this.nextPipe = this.addOnePipe(400, i * 60 + 10);
                    }
                }
            },

            addToScore:function(){
                if (this.noscore === false) {
                    this.labelScore.content = ++this.score;

                    if (this.score == this.highScore) {
                        this.labelHighScore.moveScore = this.game.add.tween(this.labelHighScore).to({ x: 20 }, 300, Phaser.Easing.Sinusoidal.In, true);
                    }

                    if (this.score >= this.highScore) {
                        this.labelHighScore.content = this.highScore = this.score;
                    }
                }
            },

            showFinalScore:function(){
                var text = this.score >= this.highScore ? this.labelHighScore : this.labelScore;
                var otherText = text === this.labelScore ? this.labelHighScore : this.labelScore;

                if (text.moveScore) {
                    text.moveScore.stop();
                }

                var style = text.style;
                style.font = '80px Arial';
                text.setStyle(style);

                text.game.add.tween(text).to({
                    x: 200 - ((text.width + 40) / 2),
                    y: 245 - ((text.height + 40) / 2)
                }, 150, qOut, true);

                otherText.game.add.tween(otherText).to({
                    alpha: 0
                }, 50,  None, true);
            }
        }

        game.state.add('main', gameState.main);
        game.state.start('main')


}





SPACEGAME=function(){z()

     game=Game(640,480,Phaser.CANVAS,"",{preload:preload, create:create, update:update})

    spikesAmount=8
    xSpeed=4
    jumpHeight=40
    jumpWidth=120
    jumpRotation=180
    jumpTime=0
    isJumping=false
    degToRad=0.0174532925
    flY=[92,184,276,368,460]
    cFl=0
    flH=20
    lSt=0
    lEnd=640



        function preload(){g=$G(game)
            g.l.i("square","/me.png")
            g.l.i("spike","/guy.png")}

        function create(){

            var fl=g.gx(0,0).lS(flH,
                0x440044,1)

           
            _t(_z(flY),function(i){
                fl.mT(lSt,flY[i]+flH/2).lT(lEnd,flY[i]+flH/2)})

            p=g.sp(lSt,flY[cFl]-g.gI("square").height/2,"square").A()

            spikesGroup=g.gr()

            _t(spikesAmount,function(i){

                spikesGroup.add(

                    g.sp(

                            flr(rnd()*400)+120,

                            flY[ flr(rnd()*_z(flY)) ]  -  g.gI("spike").height/2,

                        "spike"

                    ).A()
                )})


            g.oD(function jump(){if(!isJumping){jumpTime=0; isJumping=true}

            }, this)}




        
    function update(){
   
            
        mod=cFl%2 
        
        p.x += xSpeed*(1 - 2*mod)
        
        
            if(p.x>lEnd&&mod==0||p.x<lSt&&mod==1){cFl++;  // move onto next floor
                // if we just finished the lowest floor...
                if(cFl>_z(flY)-1){cFl=0}// start the game again
                 
                mod=cFl%2
             
                isJumping=false;
                p.rotation=0;
                p.x=lEnd*mod+lSt*(1-mod);
                p.y=flY[cFl]-g.gI("square").height/2}

            if(isJumping) {
                // calculating the number of frames we will be jumping
                jumpFrames=jumpWidth/xSpeed;
                // calculating how many degrees should the square rotate at each frame
               degreesPerFrame=jumpRotation/jumpFrames*(1-2*mod);
                // calculating how may radians we have to apply to sine trigonometry function to simulate player jump

                radiansPerFrame=(180/jumpFrames)*degToRad
                // anohter frame jumping...
                jumpTime++;
                // updating rotation
                p.angle+=degreesPerFrame;
                // updating y position
                p.y=flY[cFl]-g.gI("square").height/2-jumpHeight*Math.sin(radiansPerFrame*jumpTime);
                // if we jumped enough...
                if(jumpTime==jumpFrames) {
                    // ... just stop jumping
                    isJumping=false;
                    p.y=flY[cFl]-g.gI("square").height/2}}


        g.ol(p,spikesGroup,function(){$l('col!')
                mod=cFl%2
                isJumping=false
                p.rotation=0
                p.x=lEnd*mod+lSt*(1-mod)
                p.y=flY[cFl]- g.gI("square").height/2
        })}

    
    
    


        

}







