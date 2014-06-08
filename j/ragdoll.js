
P2SHAPES=function(){pG(

    function(){
        g.P2(1000)
        g.l.i('guy','/guy.png')
        g.l.i('me','/me.png')
        cu= g.K()},


    function(){


        m0=g.sp(120,220,'me').A().sc({x:.5,y:.5}).iE(1).drg()



        m1=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60)

        m2=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60)

        m3=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60)
        m4=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60)

       // tim=g.sp(150,320,'guy').A().sc().p2(1).sc({x:.5,y:.5}).fR(1).sC(40)
       // mug=g.sp(120,220,'m').A().sc().p2(1).sc({x:.2,y:.2}).fR(1).sR(200,200)


        g.cS(m1,m2,10,200,1)

        g.cS(m2,m3,10,200,10)
        g.cS(m3,m4,10,200,10)

        },


    function(){
        if (cu.L()){m1.mL(100)}
        if (cu.R()){m1.mR(100)}
        if (cu.U()){m1.mU(100)}}


)}


P2SHAPES2=function(){pG(

    function(){
        g.P2(1000)
        g.l.i('guy','/guy.png')
        g.l.i('me','/me.png')
        cu= g.K()},


    function(){

        head=g.sp(120,220,'me').A().sc().p2().sc({x:.8,y:.8}).fR(1).sC(60).cCl()
        torso=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()
        pelvis=g.sp(120,220,'me').A().sc().p2().sc({x:.6,y:.6}).fR(1).sC(60).cCl()

        armlu=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()
        armll=g.sp(120,220,'guy').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()

        armru=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()
        armrl=g.sp(120,220,'guy').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()

        leglu=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()
        legll=g.sp(120,220,'guy').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()

        legru=g.sp(120,220,'me').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()
        legrl=g.sp(120,220,'guy').A().sc().p2().sc({x:.5,y:.5}).fR(1).sC(60).cCl()

        g.cRC(head,[50,100],torso,[0,10],{})
        g.cRC(torso,[50,100],pelvis,[0,10],{})

        g.cRC(torso,[50,100],armlu,[0,0],{})
        g.cRC(torso,[50,100],armru,[0,0],{})
        g.cRC(pelvis,[50,100],leglu,[0,0],{})
        g.cRC(pelvis,[50,100],legru,[0,0],{})


        g.cRC(armlu,[50,100],armll,[0,0],{})
        g.cRC(armru,[50,100],armrl,[0,0],{})

        g.cRC(leglu,[50,100],legll,[0,0],{})
        g.cRC(legru,[50,100],legrl,[0,0],{})


    },


    function(){
        if (cu.L()){head.mL(200)}
        if (cu.R()){head.mR(200)}
        if (cu.U()){head.mU(200)}}


)}

PHYSDAT=function(){

  // dats= [677,34, 293, 524, 17, 18, 666, 26, 666, 26]

    pG(


        function(){

            cu= g.K()
            g.P2( )
            g.l.i('me','/me.png')

            g.l.physics('dat','',{'shape':[{

                "density": 2, "friction": 0, "bounce": 0,
                "filter": { "categoryBits": 1, "maskBits": 65535 },
                "shape": dats}]})

        },

        function(){

          //  m=g.sp(120,220,'me').A().p2(1).fR(1).sC(60)
            m=g.sp(200,200,'m').p2(1).clS().lP('dat', 'shape')

            mm=g.sp(400,400,'m').p2(1).clS().lP('dat', 'shape')
        },


        function(){



            if (cu.L()){m.mL(100)}
            if (cu.R()){m.mR(100)}
            if (cu.U()){m.mU(100)}
            if (cu.D()){m.mD(100)}


        }



    )}







RAGDOLL=function(){z()


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

RAGDOLL1=function(){

    var OTHER =     pow(2,1),
        BODYPARTS =  pow(2,2),
        GROUND =     pow(2,3),
        bodyPartShapes = []

    var shouldersDistance = 0.5,
        upperArmLength = 0.4,
        lowerArmLength = 0.4,
        upperArmSize = 0.2,
        lowerArmSize = 0.2,
        neckLength = 0.1,
        headRadius = 0.25,
        upperBodyLength = 0.6,
        pelvisLength = 0.4,
        upperLegLength = 0.5,
        upperLegSize = 0.2,
        lowerLegSize = 0.2,
        lowerLegLength = 0.5;



    bodyPartShapes.push(
        headShape=      new p2.Circle(.25),
        upperArmShape = new p2.Rectangle(.4,.2),
        lowerArmShape=  new p2.Rectangle(.4,.2),
        upperBodyShape= new p2.Rectangle(.5,.6),
        pelvisShape=    new p2.Rectangle(.5,.4),
        upperLegShape=  new p2.Rectangle(.2,.5),
        lowerLegShape=  new p2.Rectangle(.2,.5)
    )



    for(var i=0; i<bodyPartShapes.length; i++){
        var s = bodyPartShapes[i]
        s.collisionGroup = BODYPARTS;
        s.collisionMask =  GROUND||OTHER}

    //var world = new p2.World({doProfiling:true, gravity : [0,-10]}) // world.solver.iterations = 100 //  world.solver.tolerance = 0.002;




    // Lower legs
    var lowerLeftLeg = new p2.Body({
        mass: 1,
        position: [-shouldersDistance/2,lowerLegLength / 2]})


    var lowerRightLeg = new p2.Body({
        mass: 1,
        position: [shouldersDistance/2,lowerLegLength / 2]})

    lowerLeftLeg.addShape(lowerLegShape);
    lowerRightLeg.addShape(lowerLegShape);

    world.addBody(lowerLeftLeg)
    world.addBody(lowerRightLeg)

    // Upper legs
    var upperLeftLeg = new p2.Body({mass: 1,position: [-shouldersDistance/2,lowerLeftLeg.position[1]+lowerLegLength/2+upperLegLength / 2]})

    var upperRightLeg = new p2.Body({
        mass: 1,
        position: [shouldersDistance/2,lowerRightLeg.position[1]+lowerLegLength/2+upperLegLength / 2]})

    upperLeftLeg.addShape(upperLegShape);
    upperRightLeg.addShape(upperLegShape);
    world.addBody(upperLeftLeg);
    world.addBody(upperRightLeg);

    // Pelvis
    var pelvis = new p2.Body({
        mass: 1,
        position: [0, upperLeftLeg.position[1]+upperLegLength/2+pelvisLength/2],
    })


    pelvis.addShape(pelvisShape);
    world.addBody(pelvis);

    // Upper body
    var upperBody = new p2.Body({
        mass: 1,
        position: [0,pelvis.position[1]+pelvisLength/2+upperBodyLength/2]})

    upperBody.addShape(upperBodyShape);
    world.addBody(upperBody);

    // Head
    var head = new p2.Body({
        mass: 1,
        position: [0,upperBody.position[1]+upperBodyLength/2+headRadius+neckLength]})

    head.addShape(headShape);
    world.addBody(head);

    // Upper arms
    var upperLeftArm = new p2.Body({
        mass: 1,
        position: [-shouldersDistance/2-upperArmLength/2, upperBody.position[1]+upperBodyLength/2]})


    var upperRightArm = new p2.Body({
        mass: 1,
        position: [shouldersDistance/2+upperArmLength/2, upperBody.position[1]+upperBodyLength/2]})


    upperLeftArm.addShape(upperArmShape);
    upperRightArm.addShape(upperArmShape);
    world.addBody(upperLeftArm);
    world.addBody(upperRightArm);

    // lower arms
    var lowerLeftArm = new p2.Body({
        mass: 1,
        position: [ upperLeftArm.position[0] - lowerArmLength/2 - upperArmLength/2,
            upperLeftArm.position[1]]})

    var lowerRightArm = new p2.Body({
        mass: 1,
        position: [ upperRightArm.position[0] + lowerArmLength/2 + upperArmLength/2,
            upperRightArm.position[1]]})


    lowerLeftArm.addShape(lowerArmShape);
    lowerRightArm.addShape(lowerArmShape);
    world.addBody(lowerLeftArm);
    world.addBody(lowerRightArm);




    // Neck joint
    var neckJoint = new p2.RevoluteConstraint(head,      [0,-headRadius-neckLength/2],  upperBody, [0,upperBodyLength/2]);
    neckJoint.upperLimitEnabled = true;
    neckJoint.upperLimit = Math.PI / 8;
    neckJoint.lowerLimitEnabled = true;
    neckJoint.lowerLimit = -Math.PI / 8;
    world.addConstraint(neckJoint);




    // Knee joints
    var leftKneeJoint = new p2.RevoluteConstraint(  lowerLeftLeg,  [0, lowerLegLength/2],
        upperLeftLeg,  [0,-upperLegLength/2]);
    var rightKneeJoint= new p2.RevoluteConstraint(  lowerRightLeg, [0, lowerLegLength/2],
        upperRightLeg, [0,-upperLegLength/2]);
    leftKneeJoint .upperLimitEnabled = rightKneeJoint.upperLimitEnabled = true;
    leftKneeJoint.upperLimit = rightKneeJoint.upperLimit = Math.PI / 8;
    leftKneeJoint.lowerLimitEnabled = rightKneeJoint.lowerLimitEnabled = true;
    leftKneeJoint.lowerLimit = rightKneeJoint.lowerLimit = -Math.PI / 8;
    world.addConstraint(leftKneeJoint);
    world.addConstraint(rightKneeJoint);




    // Hip joints
    var leftHipJoint = new p2.RevoluteConstraint(  upperLeftLeg,  [0, upperLegLength/2],
        pelvis,        [-shouldersDistance/2,-pelvisLength/2]);
    var rightHipJoint= new p2.RevoluteConstraint(  upperRightLeg, [0, upperLegLength/2],
        pelvis,        [shouldersDistance/2,-pelvisLength/2]);
    leftHipJoint .upperLimitEnabled = rightHipJoint.upperLimitEnabled =  true;
    leftHipJoint.upperLimit =         rightHipJoint.upperLimit =         Math.PI / 8;
    leftHipJoint.lowerLimitEnabled =  rightHipJoint.lowerLimitEnabled =  true;
    leftHipJoint.lowerLimit =         rightHipJoint.lowerLimit =        -Math.PI / 8;
    world.addConstraint(leftHipJoint);
    world.addConstraint(rightHipJoint);



    // Spine
    var spineJoint = new p2.RevoluteConstraint(pelvis,    [0,pelvisLength/2],
        upperBody, [0,-upperBodyLength/2]);
    spineJoint.upperLimitEnabled = true;
    spineJoint.upperLimit = Math.PI/8
    spineJoint.lowerLimitEnabled = true;
    spineJoint.lowerLimit = -Math.PI/8
    world.addConstraint(spineJoint);



    // Shoulders
    var leftShoulder = new p2.RevoluteConstraint(  upperBody,     [-shouldersDistance/2, upperBodyLength/2],
        upperLeftArm,  [upperArmLength/2,0]);
    var rightShoulder= new p2.RevoluteConstraint(  upperBody,     [shouldersDistance/2,  upperBodyLength/2],
        upperRightArm, [-upperArmLength/2,0]);
    leftShoulder.upperLimitEnabled =  rightShoulder.upperLimitEnabled =  true;
    leftShoulder.lowerLimitEnabled =  rightShoulder.lowerLimitEnabled =  true;
    leftShoulder.upperLimit =         Math.PI / 3;
    rightShoulder.upperLimit =        Math.PI / 3;
    leftShoulder.lowerLimit =         -Math.PI / 3;
    rightShoulder.lowerLimit =        -Math.PI / 3;
    world.addConstraint(leftShoulder);
    world.addConstraint(rightShoulder);

    // Elbow joint
    var leftElbowJoint = new p2.RevoluteConstraint(lowerLeftArm,  [lowerArmLength/2, 0],
        upperLeftArm,  [-upperArmLength/2,0]);
    var rightElbowJoint= new p2.RevoluteConstraint(lowerRightArm, [-lowerArmLength/2,0],
        upperRightArm, [upperArmLength/2,0]);
    leftElbowJoint .upperLimitEnabled = rightElbowJoint.upperLimitEnabled =  true;
    leftElbowJoint.upperLimit =         rightElbowJoint.upperLimit =         Math.PI / 8;
    leftElbowJoint.lowerLimitEnabled =  rightElbowJoint.lowerLimitEnabled =  true;
    leftElbowJoint.lowerLimit =         rightElbowJoint.lowerLimit =        -Math.PI / 8;
    world.addConstraint(leftElbowJoint);
    world.addConstraint(rightElbowJoint);

    // Create ground
    var planeShape = new p2.Plane();
    var plane = new p2.Body({position:[0,-1]})

    plane.addShape(planeShape);
    planeShape.collisionGroup = GROUND;
    planeShape.collisionMask =  BODYPARTS||OTHER
    world.addBody(plane);


  //var demo = new PixiDemo(world)
  //demo.newShapeCollisionGroup = OTHER
  //demo.newShapeCollisionMask =  BODYPARTS||OTHER||GROUND

}

PROBANDO=function(){
z()

     game = new Phaser.Game(700, 600, Phaser.AUTO, 'caja', { preload: preload, create: create, update: update, render: render });

    function preload() {g=$G(game)
        game.load.image('green', '/guy.png')}

    var verde=null,mouse=null,cuerpo=null;

    function create() {
        game.physics.startSystem(Phaser.Physics.P2JS);

        game.stage.backgroundColor = '#2d2d2d';

        game.physics.p2.gravity.y = 20;


        verde = game.add.group();
        crear(5)


        cuerpo = game.physics.p2.createBody();

        game.input.onDown.add(click, this);
        game.input.onUp.add(out, this);


    };


    function click(pointer){
//var bodies = game.physics.p2.getBodies();

        var anyB = game.physics.p2.hitTest(pointer.position);

        var posicion = [game.physics.p2.pxmi(pointer.x), game.physics.p2.pxmi(pointer.y)]

        var body;

        /*
         if(anyB.length === 0 ){
         // console.log("nada");
         }
         body=anyB.shift();*/

        while(anyB.length > 0){
            body = anyB.shift();
            //console.log(body)
            if(body.motionState == 2)
                body = null;
            else
                break}

        if(body){
            var localP= p2.vec2.create();
            body.toLocalFrame(localP,posicion);
            game.physics.p2.addBody(cuerpo);
            mouse = game.physics.p2.createRevoluteConstraint(cuerpo,posicion,body,localP);
        }}

    function out(){
        game.physics.p2.removeConstraint(mouse);
        mouse = null;
        game.physics.p2.removeBody(cuerpo)}

    function update() {
        verde.forEachAlive(function(a){
            a.body.applyForce([0,5,0])
            a.body.angularForce =15;

        },this)}



    function crear(){
        for (var x = 0; x < 5; x++)
        {
            for (var y = 0; y < 4; y++)
            {
                var gem = verde.create(200+x*60,200+y*50,"green",true);
                game.physics.p2.enable(gem,false);
                var body = gem.body.data;
                body.mass = 5;
                //body.velocity =[0,500]

            };
        };

    };



    function render(){}



}


BALLS=function(){
    var disturb = true, // Add some noise in circle positions
        N = 15,         // Number of circles in x direction
        M = 15,         // and in y
        r = 0.07,       // circle radius
        d = 2.2;        // Distance between circle centers

    var world = new p2.World({
        doProfiling:true,
        gravity : [0,-5],
        broadphase : new p2.SAPBroadphase(),
    });

    // Set stiffness of all contacts and constraints
    world.setGlobalStiffness(1e8);

    // Max number of solver iterations to do
    world.solver.iterations = 20;

    // Solver error tolerance
    world.solver.tolerance = 0.02;

    // Enables sleeping of bodies
    world.enableBodySleeping = true;

    // Create circle bodies
    var shape = new p2.Circle(r);
    for(var i=0; i<N; i++){
        for(var j=M-1; j>=0; j--){
            var x = (i-N/2)*r*d+(disturb ? Math.random()*r : 0);
            var y = (j-M/2)*r*d;
            var p = new p2.Body({
                mass: 1,
                position: [x, y],
            });
            p.addShape(shape);
            p.allowSleep = true;
            p.sleepSpeedLimit = 1;  // Body will feel sleepy if speed<1 (speed is the norm of velocity)
            p.sleepTimeLimit = 1;   // Body falls asleep after 1s of sleepiness
            world.addBody(p);
        }
    }

    // Compute max/min positions of circles
    var xmin = (-N/2 * r*d),
        xmax = ( N/2 * r*d),
        ymin = (-M/2 * r*d),
        ymax = ( M/2 * r*d);

    // Create bottom plane
    var planeShape = new p2.Plane();
    var plane = new p2.Body({
        position : [0,ymin],
    });
    plane.addShape(planeShape);
    world.addBody(plane);

    // Left plane
    var planeLeft = new p2.Body({
        angle: -Math.PI/2,
        position: [xmin, 0]
    });
    planeLeft.addShape(planeShape);
    world.addBody(planeLeft);

    // Right plane
    var planeRight = new p2.Body({
        angle: Math.PI/2,
        position: [xmax, 0]
    });
    planeRight.addShape(planeShape);
    world.addBody(planeRight);

    // Start demo
    var demo = new PixiDemo(world);

}