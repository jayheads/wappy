
TANKS=function(){z()

    EnemyTank=function(index,game,player,bs){

        var x=g.rX(),
            y=g.rY(),
            t=this

        t.g=t.game=g

        t.health = 3
        t.player = player
        t.bs = bs
        t.fireRate = 1000
        t.nextFire = 0
        t.alive = true

        t.shadow=g.sp(x,y,'enemy','shadow')
        t.tank=g.sp(x,y,'enemy','tank1')
        t.turret=g.sp(x,y,'enemy','turret')

        t.shadow.anchor.set(.5)
        t.tank.anchor.set(.5)
        t.turret.anchor.set(.3,.5)

        t.tank.name = index.toString()
        g.ph.enable(t.tank, pArcade)
        t.tank.body.immovable = false
        t.tank.body.collideWorldBounds = true
        t.tank.body.bounce.setTo(1, 1)

        t.tank.angle = g.rnd.angle()

        g.physics.arcade.velocityFromRotation(
            t.tank.rotation, 100, t.tank.body.velocity)}


    EnemyTank.prototype.damage=function(){
        var t=this
        t.health-=1
        if(t.health<= 0){
            t.alive=false
            t.shadow.kill()
            t.tank.kill()
            t.turret.kill()
            return true}
        return false}

    EnemyTank.prototype.update=function(){

        var t=this
        t.shadow.x=t.tank.x
        t.shadow.y=t.tank.y
        t.shadow.rotation = t.tank.rotation;

        t.turret.x = t.tank.x;
        t.turret.y = t.tank.y;
        t.turret.rotation = t.game.physics.arcade.angleBetween(t.tank, t.player);

        if(t.game.physics.arcade.distanceBetween(t.tank,t.player)<300){
            if(t.game.time.now > t.nextFire && t.bs.countDead()>0){
                t.nextFire = t.game.time.now + t.fireRate;

                var b=t.bs.getFirstDead();

                b.reset(t.turret.x, t.turret.y);

                b.rotation =
                    t.game.physics.arcade.moveToObject(b,t.player,500)}}}


    game=Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload(){g=$G(game)

        g.l.at('tank','/assets/games/tanks/tanks.png', '/assets/games/tanks/tanks.json')
        g.l.at('enemy','/assets/games/tanks/enemy-tanks.png', '/assets/games/tanks/tanks.json')
        g.l.i('logo','/assets/games/tanks/logo.png')
        g.l.i('bullet','/assets/games/tanks/bullet.png')
        g.l.i('earth','/assets/games/tanks/scorched_earth.png')
        g.l.ss('kaboom', '/assets/games/tanks/explosion.png', 64, 64, 23)}

    var land,shadow,tank,turret,enemies,enemyBullets,
        enemiesTotal = 0,enemiesAlive = 0,explosions,
        logo,currentSpeed = 0,cu,bs,fireRate = 100,nextFire = 0;

    function create () {

        //  Resize our game world to be a 2000 x 2000 square
        g.bn(-1000, -1000, 2000, 2000);

        //  Our tiled scrolling background
        land = g.tSp(0,0,800,600,'earth')
        land.fixedToCamera = true;

        //  The base of our tank
        tank = g.sp(0, 0, 'tank', 'tank1').A().arc()

        tank.an.a('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);

        //  This will force it to decelerate and limit its speed

        tank.body.drag.set(0.2);
        tank.body.maxVelocity.setTo(400, 400);
        tank.clWB(1)

        //  Finally the turret that we place on-top of the tank body
        turret = g.sp(0,0,'tank','turret').A()

        //  The enemies bullet group
        enemyBullets = g.gr().eB(1).pBT(pArcade)

        enemyBullets.mult(100, 'bullet')

        enemyBullets.sA('anchor.x', 0.5).sA('anchor.y', 0.5)
            .sA('outOfBoundsKill', true).sA('checkWorldBounds', true);


        enemies=[]

        enemiesTotal=20
        enemiesAlive=20

        for(var i = 0; i < enemiesTotal; i++){
            enemies.push(new EnemyTank(i, g, tank, enemyBullets))}

        //  A shadow below our tank
        shadow=g.sp(0,0,'tank','shadow').A()


        //  Our bullet group
        bs = g.gr().eB(1)

        bs.physicsBodyType = pArcade;
        bs.mult(30, 'bullet', 0, false)
            .sA('anchor.x', 0.5)
            .sA('anchor.y', 0.5)
            .sA('outOfBoundsKill', true)
            .sA('checkWorldBounds', true)

        //  Explosion pool
        explosions = g.gr();

        for(var i = 0; i < 10; i++){
            var explosionAnimation = explosions.cr(0, 0, 'kaboom', [0], false).A()

            explosionAnimation.an.a('kaboom')}

        tank.bringToTop()
        turret.bringToTop()

        logo = g.sp(0,200,'logo')
        logo.fixedToCamera=true

        g.f(tank).oD(removeLogo, this)
        g.cm.deadzone= Rectangle(150, 150, 500, 300)
        g.cm.focusOnXY(0,0)

        cu=g.K()}

    function removeLogo(){

        game.oDR(removeLogo, this);

        logo.kill()}

    function update () {

        g.ol(enemyBullets, tank, bulletHitPlayer, null, this);

        enemiesAlive=0

        for (var i=0; i < enemies.length; i++){if (enemies[i].alive)
        {
            enemiesAlive++;
            g.col(tank, enemies[i].tank);
            g.ol(bs, enemies[i].tank, bulletHitEnemy, null, this);
            enemies[i].update()}}

        if (cu.L()){tank.angle -= 4}
        if (cu.R()){tank.angle += 4}

        if (cu.U()){currentSpeed = 300}//  The speed we'll travel at

        else{if (currentSpeed > 0){currentSpeed -= 4}}

        if (currentSpeed > 0){
            game.physics.arcade.velocityFromRotation(
                tank.rotation, currentSpeed, tank.body.velocity)}

        land.tilePosition.x = -game.camera.x;
        land.tilePosition.y = -game.camera.y;

        //  Position all the parts and align rotations
        shadow.x=tank.x
        shadow.y=tank.y
        shadow.rotation=tank.rotation

        turret.x=tank.x
        turret.y=tank.y
        turret.rotation = game.physics.arcade.angleToPointer(turret)
        if (game.input.activePointer.isDown){fire()}}


    function bulletHitPlayer (tank, bullet){bullet.kill()}

    function bulletHitEnemy (tank, bullet) {

        bullet.kill();

        var destroyed = enemies[tank.name].damage();

        if (destroyed){
            var explosionAnimation = explosions.getFirstExists(false);
            explosionAnimation.reset(tank.x, tank.y);
            explosionAnimation.play('kaboom', 30, false, true)}}

    function fire () {

        if (g.n() > nextFire && bs.countDead() > 0){
            nextFire = g.n(fireRate)

            var bullet = bs.getFirstExists(false);

            bullet.reset(turret.x, turret.y);

            bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, game.input.activePointer, 500);}}

    function render () {

        // g.db.t('Active Bullets: ' + bs.countLiving() + ' / ' + bs.length, 32, 32);
        g.db.t('Enemies: ' + enemiesAlive + ' / ' + enemiesTotal, 32, 32);

    }}
BREAKOUT=function(){z()



    ballOnPaddle = true
    lives = 3
    score = 0

    game =  Game(800, 600, Phaser.AUTO, 'phaser-example',
        {preload: preload, create: create, update: update })

    function preload() {   g=$G(game).ARC()

        g.l.at('breakout', '/assets/games/breakout/breakout.png', '/assets/games/breakout/breakout.json');
        g.l.i('starfield', '/assets/misc/starfield.jpg')}




    function create() {



        //  We check bounds collisions against all walls other than the bottom one
        game.physics.arcade.checkCollision.down = false;

        s = g.tSp(0, 0, 800, 600, 'starfield');

        bricks = g.gr().eB(1).arc()



        for (var y = 0; y < 4; y++){
            for (var x = 0; x < 15; x++)
            {brick = bricks.cr(120 + (x * 36), 100 + (y * 52),
                'breakout', 'brick_' + (y+1) + '_1.png');
                brick.body.bounce.set(1)
                brick.body.immovable=true}}

        paddle = g.sp(g.cX(), 500, 'breakout', 'paddle_big.png').A().arc()
        paddle.body.collideWorldBounds = true;
        paddle.body.bounce.set(1);
        paddle.body.immovable = true;

        ball = g.sp(g.cX(), paddle.y - 16, 'breakout', 'ball_1.png').A().chWB(1).arc()

        ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1);

        ball.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);

        ball.events.onOutOfBounds.add(ballLost, this)

        scoreText = game.add.text(32, 550, 'score: 0', { font: "20px Arial", fill: "#ffffff", align: "left" });
        livesText = game.add.text(680, 550, 'lives: 3', { font: "20px Arial", fill: "#ffffff", align: "left" });
        introText = game.add.text(game.world.centerX, 400, '- click to start -', { font: "40px Arial", fill: "#ffffff", align: "center" });
        introText.anchor.setTo(0.5, 0.5)

        game.input.onDown.add(releaseBall,this)}

    function update () {

        //  Fun, but a little sea-sick inducing :) Uncomment if you like!
        // s.tilePosition.x += (game.input.speed.x / 2);

        paddle.body.x = game.input.x;

        if (paddle.x < 24){paddle.x = 24} else if (paddle.x > game.width - 24){paddle.x = game.width - 24}

        if (ballOnPaddle)
        {ball.body.x = paddle.x}

        else{
            g.col(ball, paddle, ballHitPaddle, null, this)
            g.col(ball, bricks, ballHitBrick, null, this)} }

    function releaseBall () {

        if (ballOnPaddle){
            ballOnPaddle=false
            ball.body.velocity.y=-300
            ball.body.velocity.x=-75
            ball.animations.play('spin')
            introText.visible=false}}

    function ballLost(){
        lives--
        livesText.text='lives: '+lives
        if(lives===0){gameOver()}
        else{ballOnPaddle=true
            ball.reset(paddle.body.x+16,paddle.y-16)
            ball.animations.stop()}}

    function gameOver(){
        ball.body.velocity.setTo(0,0)
        introText.text='Game Over!'
        introText.visible=true}

    function ballHitBrick (_ball,_brick){
        _brick.kill()
        score+=10
        scoreText.text='score: '+score
        //  Are they any bricks left?
        if (bricks.countLiving()==0){
            //  New level starts
            score += 1000;
            scoreText.text = 'score: ' + score;
            introText.text = '- Next Level -';
            //  Let's move the ball back to the paddle
            ballOnPaddle = true;
            ball.body.velocity.set(0);
            ball.x = paddle.x + 16;
            ball.y = paddle.y - 16;
            ball.animations.stop();
            //  And bring the bricks back from the dead :)
            bricks.callAll('revive')}}

    function ballHitPaddle (_ball,_paddle) {

        diff=0

        if(_ball.x < _paddle.x){
            //  Ball is on the left-hand side of the paddle
            diff = _paddle.x - _ball.x;
            _ball.body.velocity.x = (-10 * diff)}
        else if (_ball.x > _paddle.x){
            //  Ball is on the right-hand side of the paddle
            diff = _ball.x -_paddle.x;
            _ball.body.velocity.x = (10 * diff)}
        else{
            //  Ball is perfectly in the middle
            //  Add a little random X to stop it bouncing straight up!
            _ball.body.velocity.x = 2 + rnd() * 8}}}


GENMATCH=function(){z()

    game =  Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

    var GEM_SIZE=64
    var GEM_SPACING=2
    var GEM_SIZE_SPACED=GEM_SIZE+GEM_SPACING
    var BOARD_COLS
    var BOARD_ROWS
    var MATCH_MIN = 3 // min number of same color gems required in a row to be considered a match

    var gems;
    var selectedGem;
    var selectedGemStartPos;
    var selectedGemTween;
    var tempShiftedGem;
    var tempShiftedGemTween;
    var allowInput;

    function preload(){g=$G(game)
        g.l.ss("GEMS", "/assets/sprites/diamonds32x5.png", GEM_SIZE, GEM_SIZE)}

    function create(){

        // fill the screen with as many gems as possible
        BOARD_COLS =  floor(g.w() / GEM_SIZE_SPACED);
        BOARD_ROWS =  floor(g.h() / GEM_SIZE_SPACED);
        gems=g.gr()
        for (var i = 0; i < BOARD_COLS; i++) {
            for (var j = 0; j < BOARD_ROWS; j++) {
                var gem = gems.cr(i * GEM_SIZE_SPACED, j * GEM_SIZE_SPACED, "GEMS")
                    .iE(1).oID(selectGem)

                randomizeGemColor(gem)

                setGemPos(gem,i,j) // each gem has a position on the board
            }}


        // currently selected gem starting position. used to stop player form moving gems too far.
        selectedGemStartPos={x:0,y:0}

        // used to disable input while gems are dropping down and respawning
        allowInput=true}

    function update(){

        // when the mouse is released with a gem selected
        // 1) check for matches
        // 2) remove matched gems
        // 3) drop down gems above removed gems
        // 4) refill the board


        if(g.jR()){

            if(selectedGem != null){
                checkAndKillGemMatches(selectedGem)
                if(tempShiftedGem!= null){checkAndKillGemMatches(tempShiftedGem)}
                removeKilledGems()



                g.ev((dropGemDuration=dropGems()) * 100, refillBoard); // delay board refilling until all existing gems have dropped down

                allowInput = false
                selectedGem = null
                tempShiftedGem = null}}

        // check if a selected gem should be moved and do it

        if (selectedGem != null) {

            var cursorGemPosX = getGemPos(g.mX())
            var cursorGemPosY = getGemPos(g.mY())

            if (checkIfGemCanBeMovedHere(selectedGemStartPos.x, selectedGemStartPos.y, cursorGemPosX, cursorGemPosY)) {
                if (cursorGemPosX != selectedGem.posX || cursorGemPosY != selectedGem.posY) {

                    // move currently selected gem
                    if (selectedGemTween != null){game.tweens.remove(selectedGemTween)}
                    selectedGemTween = tweenGemPos(selectedGem, cursorGemPosX, cursorGemPosY);
                    gems.bringToTop(selectedGem);

                    // if we moved a gem to make way for the selected gem earlier, move it back into its starting position
                    if (tempShiftedGem != null) {
                        tweenGemPos(tempShiftedGem, selectedGem.posX , selectedGem.posY);
                        swapGemPosition(selectedGem, tempShiftedGem)}

                    // when the player moves the selected gem, we need to swap the position of the selected gem with the gem currently in that position
                    tempShiftedGem = getGem(cursorGemPosX, cursorGemPosY);
                    if (tempShiftedGem == selectedGem) {
                        tempShiftedGem = null;
                    } else {
                        tweenGemPos(tempShiftedGem, selectedGem.posX, selectedGem.posY);
                        swapGemPosition(selectedGem, tempShiftedGem)
                    }}}}}


// fill the screen with as many gems as possible


// select a gem and remember its starting position
    function selectGem(gem, pointer) {
        if (allowInput) {
            selectedGem = gem;
            selectedGemStartPos.x = gem.posX;
            selectedGemStartPos.y = gem.posY}}


// find a gem on the board according to its position on the board
    function getGem(pX,pY){
        return gems.iterate(
            'id',
            calcGemId(pX,pY),
            ReturnChild)}



    function getGemPos(coord){return floor(coord/GEM_SIZE_SPACED)}// convert world coordinates to board position


// set the position on the board for a gem
    function setGemPos(gem,posX,posY){
        gem.posX=posX
        gem.posY=posY
        gem.id=calcGemId(posX,posY)}

// the gem id is used by getGem() to find specific gems in the group
// each position on the board has a unique id
    function calcGemId(posX, posY){return posX+posY * BOARD_COLS}

// since the gems are a spritesheet, their color is the same as the current frame number
    function getGemColor(gem){return sSp(gem).fr()}

// set the gem spritesheet to a random frame
    function randomizeGemColor(gem){gem=sSp(gem)
        gem.fr(g.rI(0,gem.frT()-1))}



// gems can only be moved 1 square up/down or left/right
    function checkIfGemCanBeMovedHere(fromPosX, fromPosY, toPosX, toPosY) {
        if (toPosX < 0 || toPosX >= BOARD_COLS || toPosY < 0 || toPosY >= BOARD_ROWS) {return false}
        if (fromPosX == toPosX && fromPosY >= toPosY - 1 && fromPosY <= toPosY + 1) {return true}
        if (fromPosY == toPosY && fromPosX >= toPosX - 1 && fromPosX <= toPosX + 1) {return true}
        return false}


// count how many gems of the same color lie in a given direction
// eg if moveX=1 and moveY=0, it will count how many gems of the same color lie to the right of the gem
// stops counting as soon as a gem of a different color or the board end is encountered
    function countSameColorGems(startGem, moveX, moveY) {
        var curX = startGem.posX + moveX,
            curY = startGem.posY + moveY,
            count = 0;

        while (curX >= 0 && curY >= 0 && curX < BOARD_COLS && curY < BOARD_ROWS && getGemColor(getGem(curX, curY)) == getGemColor(startGem)) {
            count++;
            curX += moveX;
            curY += moveY}
        return count;
    }

// swap the position of 2 gems when the player drags the selected gem into a new location
    function swapGemPosition(gem1,gem2){
        var tempPosX = gem1.posX;
        var tempPosY = gem1.posY;
        setGemPos(gem1, gem2.posX, gem2.posY);
        setGemPos(gem2, tempPosX, tempPosY)}

// count how many gems of the same color are above, below, to the left and right
// if there are more than 3 matched horizontally or vertically, kill those gems
// if no match was made, move the gems back into their starting positions
    function checkAndKillGemMatches(gem, matchedGems) {

        if (gem != null) {

            var countUp = countSameColorGems(gem, 0, -1);
            var countDown = countSameColorGems(gem, 0, 1);
            var countLeft = countSameColorGems(gem, -1, 0);
            var countRight = countSameColorGems(gem, 1, 0);

            var countHoriz = countLeft + countRight + 1;
            var countVert = countUp + countDown + 1;

            if (countVert >= MATCH_MIN) {
                killGemRange(gem.posX, gem.posY - countUp, gem.posX, gem.posY + countDown)}

            if (countHoriz >= MATCH_MIN) {
                killGemRange(gem.posX - countLeft, gem.posY, gem.posX + countRight, gem.posY)}

            if (countVert < MATCH_MIN && countHoriz < MATCH_MIN) {
                if (gem.posX != selectedGemStartPos.x || gem.posY != selectedGemStartPos.y) {
                    if (selectedGemTween != null){game.tweens.remove(selectedGemTween)}
                    selectedGemTween = tweenGemPos(gem, selectedGemStartPos.x, selectedGemStartPos.y);

                    if (tempShiftedGem != null){tweenGemPos(tempShiftedGem, gem.posX, gem.posY)}

                    swapGemPosition(gem, tempShiftedGem)}}}}



// kill all gems from a starting position to an end position

    function killGemRange(fromX, fromY, toX, toY) {
        fromX = clmp(fromX, 0, BOARD_COLS - 1)
        fromY = clmp(fromY , 0, BOARD_ROWS - 1)
        toX = clmp(toX, 0, BOARD_COLS - 1)
        toY = clmp(toY, 0, BOARD_ROWS - 1)
        for (var i=fromX;i<=toX;i++){
            for(var j=fromY;j<=toY;j++){
                getGem(i,j).kill()}}}



// move gems that have been killed off the board
    function removeKilledGems(){gems.forEach(function(gem){if (!gem.alive){setGemPos(gem, -1,-1)}})}



// animated gem movement
    function tweenGemPos(gem, newPosX, newPosY, durationMultiplier) {
        if (durationMultiplier == null) {durationMultiplier = 1}
        return g.tw(gem)
            .t({x: newPosX  * GEM_SIZE_SPACED, y: newPosY * GEM_SIZE_SPACED},
                100 * durationMultiplier,  None, true)}


// look for gems with empty space beneath them and move them down
    function dropGems() {
        var dropRowCountMax = 0;
        for (var i = 0; i < BOARD_COLS; i++) {
            var dropRowCount = 0;
            for (var j = BOARD_ROWS - 1; j >= 0; j--) {
                var gem = getGem(i,j)
                if(gem==null){dropRowCount++}
                else if(dropRowCount>0){
                    setGemPos(gem, gem.posX, gem.posY + dropRowCount);
                    tweenGemPos(gem, gem.posX, gem.posY, dropRowCount)}}

            dropRowCountMax = max(dropRowCount, dropRowCountMax)}

        return dropRowCountMax}


// look for any empty spots on the board and spawn new gems in their place that fall down from above
    function refillBoard() {
        var maxGemsMissingFromCol = 0;
        for (var i=0;i < BOARD_COLS; i++) {
            var gemsMissingFromCol = 0;
            for (var j = BOARD_ROWS - 1; j >= 0; j--) {
                var gem = getGem(i,j)
                if (gem == null) {
                    gemsMissingFromCol++
                    gem = gems.getFirstDead()
                    gem.reset(i * GEM_SIZE_SPACED, -gemsMissingFromCol * GEM_SIZE_SPACED);
                    randomizeGemColor(gem)
                    setGemPos(gem, i, j)
                    tweenGemPos(gem, gem.posX, gem.posY, gemsMissingFromCol * 2)}}
            maxGemsMissingFromCol = max(maxGemsMissingFromCol, gemsMissingFromCol)}

        g.ev(maxGemsMissingFromCol*2*100, function(){allowInput=true})}

    // when the board has finished refilling, re-enable player input

}


