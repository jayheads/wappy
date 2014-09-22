


TWEENBOX=function(){z()

    stage = dragStage()

    stage.bm('me', function(bm){

        SL(bm)

        tw(

            [bm,'l'],

            {x:0, sxy:.7,r:0},

            [ {x:300,sxy:2.3,r:0}, 1000 ],

            [ {x:0,sxy:.7,r:-30,a:.5},3000])



        EaselTween(

            [bm,'l'  ],

            {  x:0,   sxy:.7,  r:0  },

            [ { x:300, sxy:2.3,  r:0 }, 100 ],  [ {  x:0,  sxy:.7, r:-30,  a:.5 }, 100]


        )


        //  EaselTween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])

    })


    dragStage().bm('me', function(bm){

        b=bm
        SL(bm)

        bm.rgc('+')

        scaleShake(bm)
        rotateShake(bm)

    })

}

