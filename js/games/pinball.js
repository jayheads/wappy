
PINBALL=function(){



    b2.mW({  walls : 'makeWallsPinball'  })

    canvas.drag()

    baa(215,520,30)

    bii(215,100,100,10)

    ball= world.ba(215,90)


    ball.bindSprite('sun', .24)

    var leftJoint = w.baa(100,430)

    var leftFlip = w.bi(100,430, 100,25)

    var rightJoint = w.baa(330,430)

    var rightFlip = w.bi(330,430, 100,25)


    j1= w.CreateJoint(

        RevoluteJointDef(  leftJoint , leftFlip ,  0,0,  40,0  ).lm(150,250)

    )




    j2= w.CreateJoint(

        RevoluteJointDef(  rightJoint ,  rightFlip ,  0, 0, 40, 0  ).lm(-70,30)

    )


    bii(420,400,20,2000)



    $('body').on('keyup',  function(){

        leftFlip.aI(100, 0);   rightFlip.aI(-100,0)

    })



    $('body').on('keydown',  function(){ ba(Math.random()*300+40  ,140,20)} )




    $('body').mousedown(function(){

        var b= ba(Math.random()*300+40,140,20)

        if(Math.random() > .9){b.bindSprite('me', .24)}

        leftFlip.aI(120, 0);
        rightFlip.aI(-120,0)

    })



    setInterval(function(){   ball.rt( ball.rt() + 10) }, 100)


    $.pop(
        $.div(  'y').A(
            $.h1('welcome to gamey pinball'),
            $.h4('just tap (anywhere) and two things will happen:  (1) new ball (2) flippers flip '),
            $.h4('goal: knockdown the fireball'),
            $.h5('click the game to start')  )

    )//.A().click(function(){ $(this).remove() })



}


