CONTACTEVENTS=function(){
    result='Move with the cursors'

    pG(

    function preload(){g=$G(game).P2().ru(.9)
        g.l.i('contra2','/assets/pics/contra2.png')
        g.l.i('block','/assets/sprites/block.png')
        g.l.i('wizball','/assets/sprites/wizball.png')
        g.l.i('t1','/assets/sprites/tetrisblock1.png')
        g.l.i('t2','/assets/sprites/tetrisblock2.png')
        g.l.i('t3','/assets/sprites/tetrisblock3.png')
        g.l.ph('physicsData','/assets/physics/sprites.json')
        dats.pop();dats.pop()


        g.l.ph('dat','',{'shape':[{
            "density": 2, "friction": 0, "bounce": 0,
            "filter": {"categoryBits": 1, "maskBits": 65535 },
            "shape": dats}]})},


    function create(){
        g.sp(200,200,'contra2').p2(1).clS().lP('physicsData', 'contra2')
        g.sp(500,500,'wizball').p2(1).sC(45)
        g.sp(100,450,'t1').p2(1).clS().lP('physicsData', 'tetrisblock1')
        g.sp(300,450,'t2').p2(1).clS().lP('physicsData', 'tetrisblock2')
        g.sp(650,350,'t3').p2(1).clS().lP('physicsData', 'tetrisblock3')

       m=g.sp(650,350,'m').p2(1)

         if(_z(dats)){m.clS().lP('dat', 'shape')}

        b=g.sp(500,200,'block').p2()

        b.oBC(function(body, shapeA, shapeB, equation){result = 'You last hit: '+body.sprite.key})

        cu=g.K()},


    function update(){
        b.sZV()
        if(cu.L()){b.mL(200)}
        if(cu.R()){b.mR(200)}
        if(cu.U()){b.mU(200)}
        if(cu.D()){b.mD(200)}},

    function render(){g.db.text(result,32,32)})

}


CONTACTEVENTS1=function(){z()

    game=Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
    result='Move with the cursors'

    function preload(){g=$G(game).P2().ru(.9)
        g.l.i('contra2','/assets/pics/contra2.png')
        g.l.i('block','/assets/sprites/block.png')
        g.l.i('wizball','/assets/sprites/wizball.png')
        g.l.i('t1','/assets/sprites/tetrisblock1.png')
        g.l.i('t2','/assets/sprites/tetrisblock2.png')
        g.l.i('t3','/assets/sprites/tetrisblock3.png')
        g.l.ph('physicsData','/assets/physics/sprites.json')



        cu=g.K()
    }


    function create(){







        g.sp(500,500,'wizball').p2().sC(45)

        g.sp(200,200,'contra2').p2().clS().lP('physicsData', 'contra2')

        g.sp(100,450,'t1').p2().clS().lP('physicsData', 'tetrisblock1')
        g.sp(300,450,'t2').p2().clS().lP('physicsData', 'tetrisblock2')
        g.sp(650,350,'t3').p2().clS().lP('physicsData', 'tetrisblock3')

        b=g.sp(500,200,'block').p2().oBC(function(body, shapeA, shapeB, equation){
            result = 'You last hit: '+body.sprite.key})}



    function update(){
        b.sZV()
        if(cu.L()){b.mL(200)}
        if(cu.R()){b.mR(200)}
        if(cu.U()){b.mU(200)}
        if(cu.D()){b.mD(200)}}

    function render(){g.db.text(result,32,32)}

}




CRATES=function(){z()


    pG(function(){g.l.i("crate", "/me.png")},


    function onCreate() {

        g.P2()

        g.physics.p2.gravity.y = 250

        g.oD(function addRemove(ptr){

            var bodyClicked = g.physics.p2.hitTest(ptr.position);

            if(bodyClicked.length==0){

                g.physics.p2.enable(
                    g.sp(ptr.position.x, ptr.position.y, "crate")
                )}

            else{bodyClicked[0].parent.sprite.kill()}}, this)
    })




}


TOTEM=function(){z()
     game = new Phaser.Game(728,640,Phaser.CANVAS,"",{preload:onPreload, create:onCreate});

    function onPreload(){g=$G(game)
        g.l.i("grass", "/grass.png");
        g.l.i("1x1_destroy", "/1x1_destroy.png");
        g.l.i("4x1_destroy", "/4x1_destroy.png");
        g.l.i("2x1_solid", "/2x1_solid.png");
        g.l.i("3x1_destroy", "/3x1_destroy.png");
        g.l.i("4x2_solid", "/4x2_solid.png");
        g.l.i("totem", "/totem.png");
        g.l.i("sensor", "/sensor.png")}


    function onCreate(){

        g.P2(250).bn( Rectangle(-300,0,1328,640) )

        g.sp(364, 608, "grass").p2().nm('grass').uBr(1).stc(1)
        g.sp(460, 544, "1x1_destroy").p2()
        g.sp(268, 544, "1x1_destroy").p2()
        g.sp(364, 480, "4x1_destroy").p2()
        g.sp(364, 416, "2x1_solid").p2().uBr(1)
        g.sp(332, 352, "3x1_destroy").p2()
        g.sp(364, 256, "4x2_solid").p2().uBr(1)

        totem = g.sp(364,128, "totem").p2().uBr(1)

        sensor=g.sp(-96,320, "sensor").p2().nm('sensor').stc(1)
        sensor.body.data.shapes[0].sensor=true

        sensor=g.sp(824,320, "sensor").p2().nm('sensor').stc(1)
        sensor.body.data.shapes[0].sensor=true


        totem.body.onBeginContact.add(checkTotemCollision, this)

        g.oD(function destroyBlock(ptr){
            var bodyClicked = g.physics.p2.hitTest(ptr.position)
            if(bodyClicked.length!=0){
                if(!bodyClicked[0].parent.sprite.unbreakable){
                    bodyClicked[0].parent.sprite.kill()}}
        }, this)}



    function checkTotemCollision(body, shapeA, shapeB, equation){
        style={font: "65px Arial", fill: "#ff0044", align: "center" }
        if(body){
            if(body.sprite.name=="sensor"){
               g.tx(364,90, "Oh, no!! Out of the stage", style).A()
                totem.body.onBeginContact.remove(checkTotemCollision, this)}

            if(body.sprite.name=="grass"){
              g.tx(364,90, "Oh, no!! On the floor!!", style).A()
                totem.body.onBeginContact.remove(checkTotemCollision, this)}}
    }



}


