// div in div


dragFrame=function(a){a=a||$div()

   var theDiv =$div().c('b').drg().P(10).a()

    //stopPropogation
    a.o('d',  function(q, e){ e.sp() })

    theDiv(a)

return theDiv

}








dragStage=function(x, y){

    var canvas = $can('g', 400)

    var stage = new createjs.Stage( canvas.canvas )

    dragFrame(canvas)

    c=canvas
    s=stage

    return SuperStage(stage)
}




ImagesDiv=function(stage) {
    theDiv = $div().a().drg().c('y')
    eaI(function (img) {
        theDiv($imageSizeFuncCan(img.d, 1, function () {
            stage.bm(img.d, function (bm) {

                SL(bm.sxy(.4))

            }, '+')
        }))
    })
}

FANTASTIC=function(x,y){


    z()


    canvas = $can('g', 400)

    stage = SuperStage( new createjs.Stage( canvas.canvas ))

    frame = dragFrame( theSpan=$span() )

    theSpan($button('X', function(){frame.X() }),

        $button('pics',  function(){ ImagesDiv(stage)  }),

        $button('transform'),  $button('text'),

        $button('paint', function(){

             _paintColor='#0FF'

            var size=10,oX=0,oY= 0,shape

            var paintStage = dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(stage.du(), function(m){

                m.xy(40).sxy(.4)

                stagePainter(paintStage)


            })



        }),


        $button('cut'),

        $button('save')   )

    theSpan( $br(), canvas )

    theSpan($div()(

        $button('clear', function(){stage.rm()}) ,

        $button('flat', function(){

           stage.rm()

           stage.bm( stage.du(), function(bm){


               SL(bm)

           })

       }),

       $button('clone', function(){



          var newSpan= $span()

          var newStage= dragStage( newSpan )



           newStage.bm( stage.du(), function(bm){
               SL(bm)

           })

       }),

       $button('recur',function(){

           stage.bm( stage.du(), function(bm){

               bm.sxy(.4)
               SL(bm)

           })
       }),

       $button('copy', function(){

           _copy=stage.du()



       }),


        $button('paste',function(){   stage.bm( _copy, function(bm){   SL(bm)  })  }),


        $button('replace',function(){

            stage.rm()
            stage.bm( _copy, function(bm){ SL(bm) })

        })



    )).$$(


       function(){ $('button').toggle() }
    )




}





DIVDIV=function(){z()


    dragFrame( $div().c('r').h(100).w(100)  )

    d = dragFrame(  c = $can('g').fit('me') )

    c.$( function(){      c.fit('guy')      })

}





COLOR=function(){z()

    colorPicker =  $(' <input id="color" name="color" type="color">').appendTo($('body'))

    colorPicker.change(function(){


        $l(colorPicker.val())

    })

}



