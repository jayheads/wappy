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

        cu=g.K()


        throwA(m)

    },


    function update(){
        throwB(m)
        b.sZV()
        if(cu.L()){b.mL(200)}
        if(cu.R()){b.mR(200)}
        if(cu.U()){b.mU(200)}
        if(cu.D()){b.mD(200)}



    },

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







throwA=function(m){
    mouseBody=new Phaser.Physics.P2.Body(g)
    g.physics.p2.addBody(mouseBody)
    //g.W.addBody(mouseBody)
    mouseBody.mass=1
    cons=g.cRC(mouseBody,[0,0],m,[0,0],{})
    m.events.onInputDown.add(function(){
        mouseBody=new Phaser.Physics.P2.Body(g)

        g.physics.p2.addBody(mouseBody)

        //g.W.addBody(mouseBody)
        mouseBody.mass=1
        cons.bodyA=mouseBody


    })
    m.events.onInputUp.add(function(){
        var x=mouseBody.velocity.x, y=mouseBody.velocity.y

        //g.W.removeChild(mouseBody.p) //mouseBody.destroy()
        m.body.velocity.x=   vx*-10
        m.body.velocity.y=   vy*-10



    })
}


throwB=function(m) {
    if (m.mDown) {
        //m.body.x=(g.input.x) //m.body.y=(g.input.y)
        vx = mouseBody.velocity.x
        vy = mouseBody.velocity.y
        m.body.x = (g.input.x + m.delX)
        m.body.y = (g.input.y + m.delY)
    }
}




CRATE=function(){z()


    pG(function(){
            g.l.i("me", "/me.png")
            g.l.i("tim", "/guy.png")
        },

    function onCreate(){

        g.P2()
        g.physics.p2.gravity.y=250
        m=g.sp(100,100, "me").p2()
        t=g.sp(100,100, "tim").p2()

throwA(m)


    },


    function onUpdate(){


throwB(m)

      // $l(mouseBody.velocity.x)

    }



    )




}





CRATES=function(){z()


    pG(function(){  g.l.i("crate", "/me.png")},

        function onCreate(){

            g.P2()
            g.physics.p2.gravity.y=250


            g.oD(

                function(ptr){

                    $l('d')

                    var bodyClicked=g.physics.p2.hitTest(
                        ptr.position)

                    if(bodyClicked.length==0){

                        g.physics.p2.enable(
                            g.sp(
                                ptr.position.x,
                                ptr.position.y,
                                "crate")
                        )}



                    else{

                        b=bodyClicked[0].parent.sprite
  //b.kill()

                    }}, this)


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



CONTACTEVENTSTHROW=function(){


    pG(

        function preload(){

            g.P2().ru(.9)

            g.l.i('block',
                  '/assets/sprites/block.png')

            g.l.ph('physicsData',
                   '/assets/physics/sprites.json')

            cu=g.K()},



        function create(){


            b=g.sp(500,200,'block').p2()

            g.oD(function(){

                ap=g.input.activePointer;
                b.x=ap.x

            })




           mouseBody=new Phaser.Physics.P2.Body(g);

            b.iE(true)
            b.events.onInputDown.add(function(event){

                $l('hi')

                e1=event
                // Convert the canvas coordinate to physics coordinates

  //              var position=getPhysicsCoord(event) // Check if the cursor is inside the box

//                var hitBodies = world.hitTest(position, [boxBody])

            //    if(hitBodies.length){

                // Move the mouse body to the cursor position

                   mouseBody.x =b.x
                   mouseBody.y= b.y

                    // Create a RevoluteConstraint. // This constraint lets the bodies rotate around a common point

                  localPointInBox=[0,0]
                    //boxBody.toLocalFrame(localPointInBox, position)

                   // mouseConstraint=new g.physics.p2.RevoluteConstraint(

                        //    mouseBody, [0,0],  boxBody, localPointInBox)

                        mouseConstraint=g.cRC(mouseBody,[0,0],b,[0,0],{})

                    //g.physics.p2.addConstraint(mouseConstraint)


            }, this)




            b.events.onInputDown.add(function(){


            }, this)


        },


        function update(){

            //b.sZV()

             ap=g.input.activePointer;
           // $l(ap.x)
            b.x=ap.x

            if(cu.L()){b.mL(200)}
            if(cu.R()){b.mR(200)}
            if(cu.U()){b.mU(200)}
            if(cu.D()){b.mD(200)}




        })

}





getPhysicsCoord=function(mouseEvent){
    var rect=canvas.getBoundingClientRect(),
        x=mouseEvent.clientX - rect.left,
        y=mouseEvent.clientY - rect.top

    x = (x-w/2) / scaleX
    y = (y-h/2) / scaleY

    return [x,y]
}



P2THROW=function(){z()

    var   w, h
    scaleX = 50
    scaleY = -50

    c=cx(900).a()

    canvas=c.c
    ctx=c.x

    c.lW(0.05)



    boxShape=new p2.Rectangle(2,1)

    boxBody=new p2.Body({  mass:1,  position:[0,3], angularVelocity:1})

        boxBody.addShape(boxShape)
        world.addBody(boxBody)

        // Add a plane
        planeShape = new p2.Plane()
        planeBody=new p2.Body()
        planeBody.addShape(planeShape)
        world.addBody(planeBody)


        // Create a body for the cursor

    mouseBody=new p2.Body()

    world.addBody(mouseBody)

        canvas.addEventListener(
            'mousedown',
            function(event){

            // Convert the canvas coordinate to physics coordinates

                var position=getPhysicsCoord(event)

            // Check if the cursor is inside the box

            var hitBodies = world.hitTest(position, [boxBody])

            if(hitBodies.length){

                // Move the mouse body to the cursor position
                mouseBody.position[0] = position[0]
                mouseBody.position[1] = position[1]

                // Create a RevoluteConstraint.
                // This constraint lets the bodies rotate around a common point
                var localPointInBox = [0, 0];
                boxBody.toLocalFrame(localPointInBox, position);

                mouseConstraint = new p2.RevoluteConstraint(mouseBody, [0, 0], boxBody, localPointInBox);

                world.addConstraint(mouseConstraint);
            }
        }

        )

        // Sync the mouse body to be at the cursor position

        canvas.addEventListener('mousemove', function(event){
            var position=getPhysicsCoord(event);
            mouseBody.position[0] = position[0];
            mouseBody.position[1] = position[1]
        })


        // Remove the mouse constraint on mouse up
        canvas.addEventListener('mouseup', function(event){
            world.removeConstraint(mouseConstraint)
            mouseConstraint=null

        })

    animate()
// Convert a canvas coordiante to physics coordinate


    getPhysicsCoord=function(mouseEvent){
        var rect=canvas.getBoundingClientRect(),
            x=mouseEvent.clientX - rect.left,
            y=mouseEvent.clientY - rect.top

        x = (x-w/2) / scaleX
        y = (y-h/2) / scaleY

        return [x,y]
    }





    function drawbox(){

        ctx.beginPath()

        var x = boxBody.position[0],
            y = boxBody.position[1]

        ctx.save()

        ctx.translate(x, y)
        // Translate to the center of the box


        ctx.rotate(boxBody.angle)
         // Rotate to the box body frame


        ctx.rect(-boxShape.width/2,
                -boxShape.height/2, boxShape.width,
            boxShape.height)


        ctx.stroke()
        ctx.restore()

    }
    function drawPlane(){
        var y=planeBody.position[1]
        c.mt(-w,y).lt(w,y)
       }



    function render(){

        ctx.clearRect(0,0,w,h)

        ctx.save();
        ctx.translate(w/2, h/2); // Translate to the center
        ctx.scale(scaleX, scaleY);


        drawbox();
        drawPlane();

        ctx.restore();
    }




    function animate(){
        requestAnimationFrame(animate)
        world.step(1/60);
        render()}



}