
eachImage = eaI=function(f){


    $.getJSON('/img',
        function(i){ _.each(i, f) } )



}




sav=function(stage,a){
    return function(){ stage.sv(a) }
}



EDIT0=function(){

    stage = St(800)

    var imgHolder = $div()

    CT(   imgHolder,     stage   ).o( '$$', sav(stage, 'edit'))

    eaI(function( img ){

        imgHolder(

            $imageSizeFuncCan(

                img.d,  1,   function(){
                    stage.bm(   img.d,

                        function(bm){
                            //bm.rgc('+');
                            TR(bm);

                        },    '+'  ) }

            )
        )

    })

    return stage}



EDIT1=function(){

    stage = St(800)

    var imgHolder = $div()

  container=  CT(   imgHolder,     stage   )

        container.o( '$$', sav(stage, 'edit'))

    eaI(function( img ){

        imgHolder.A(

            $.canvas('X',100, 100).fit(img.d).click(function(){


                stage.bm(   img.d,

                    function(bm){    bm.rCenter('+'); TR(bm)  }   ) })


        )

    })

    return stage}





PROPBOX=function(){

    var imagesDiv=$div()

    dA=$divA('y',200)(
        $span('prop box'),
        $hr(),
        $span('selected cutout:')

    )



    stage = SuperStage(800)

    littleStage = SuperStage(80)

    dA(littleStage)

    CT(imagesDiv, stage).o( '$$', sav(stage, 'edit') )

    eaI(function(image){

        imagesDiv(

            xc(  image.d, 1,

                function(){ stage.bm(

                    image.d,

                    function(bm){

                        TR(bm)


                        ///hmmm only clicks once?
                        //does this relate to the draggable stage problem?
                        bm.$(function(){
                            $l('new selection')
                            b=bm
                            littleStage.ch('-')
                            clone=Do( bm.ob.clone() )
                            littleStage.a( clone )

                            clone.xy(50).sxy(.1)
                        })


                    }



                , '+' )}     )

        )})

    return stage}








AVATAR=function(){
z()
    //the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div

    //  s=St(400)

    stage  = dragStage()

    //d = qq( stage.ob.canvas )

    d = $div().drg().c('x')

    //d2=$div().drg().w(500).h(500).c('o')

    //CT(d, stage).o('$$',  sav(stage,'avatar') )

    eaI( function(img){

        d(
            xc(img.d, 1, function(){

                stage.bm(img.d, TR, '+' )  //.rgc('+')

            })
        )
    })

    //d2( stage )

}

EDIT=function(){

    container=$.containerDiv()
    imgHolder = $.div()
    stage=createjs.stage(800).tick()

    container.A(
        imgHolder,
        stage.canvas
    )

    $.getJSON('/img', function(i){ _.each(i,

            function(img){

                var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!

                can.click(function(){
                    stage.bm(img.d, function(bm){
                                bm.rCenter().X(400).Y(400)
                                TR(bm)})

                        })

                imgHolder.A( can )


            }) } )

    container.dblclick(function(){
        $.post(
            '/img',
            {d: stage.canvas.toDataURL()},  //, dats: x.dats
            function(){window.location=window.location})
    })

    return stage}




PAINT1=function(){z()
    var r='#0FF',
        size=2,oX=0,oY= 0,shape

    //stage = SuperStage(400).a()

   var stage = dragStage()

    stage.a(

        EaselText('finger paint','b', 30, 100, 10)

    )


    stage.mug(function(m){

        m.xy(40).sxy(.4)

        stage.a( shape = Hx() )

    })



    stage.o({

            D: function(q, e){ size=10 },

            U: function(q, e){ size=2; r=HSL() },

            M: function(q, e){

                oX=e.X; oY=e.Y

                if( oX ){

                    shape.gs( r )

                    shape.gss( size , 'round' )

                    shape.mt( oX, oY )

                    shape.lt( e.X , e.Y )
                }
            }

    })




}



stagePainter=function(stage){


    stage.a(  shape = Hx()  )

    stage.o({

        D: function (q, e) {
            size = 10
        },

        U: function (q, e) {
            size = 0;
        },

        M: function (q, e) {

            oX = e.X;

            oY = e.Y

            if (oX && size) {

                shape.gs(_paintColor)

                shape.gss(size, 'round')

                shape.mt(oX, oY)

                shape.lt(e.X, e.Y)
            }
        }})
    colorPicker = $(' <input   type="color">').appendTo($('body'))

    colorPicker.on('input', function () {
        _paintColor = $l(colorPicker.val())
    })
}

PAINT=function(){z()
    var r='#0FF',  size=10,oX=0,oY= 0,shape

    var stage = dragStage()

   // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

    stage.mug(function(m){

        m.xy(40).sxy(.4)

        stagePainter(stage)


    })







}






TextAdder2=function(stage){

    var form= $form().a().c('x').P(10).w(300).drg()

    form(

        $textInput().id('text'),

        $button(  'for text',   function(){
            var val = $l( $('#text').val()  )

            $('#text').val('')

            var theText= EaselText(val,'w', 30, 100, 10)
            SL(theText)


            stage.a( theText )


        }))




    return form }


TextAdder=function(stage){

    var form= $form().a().c('x').P(10).w(300).drg()

    form(

        $textInput().id('text'),

        $button(  'for text',   function(){
            var val = $l( $('#text').val()  )

            $('#text').val('')


            var _text=EaselText(val,'w', 30, 100, 10)

            var theText=  EaselContainer().a( _text)


            theText.dO=_text
            SL(theText)


            stage.a(theText)

            selected(theText)

        }))




    return form }



EDITOR=function(){z()
    var r='#0FF',  size=2,oX=0,oY= 0,shape

    var stage = dragStage()

    imgHolder = $div().a().drg().c('y')


    eaI(function( img ){

        imgHolder(  $imageSizeFuncCan(

                img.d,     1,      function(){  stage.bm(   img.d,

                    function(bm){
                        SL(bm.sxy(.4))
                    }


                    ,  '+'  ) } //rgc



            )
        )

    })

    TextAdder2(stage)












}




rotateShake = function(bm){EaselTween(  [bm,'l'  ],  {r:0},  [ {  r:1}, 1],  [ { r:-1 },1]) }
scaleShake = function(bm){EaselTween(  [bm,'l'  ],  {sxy:1},  [ {  sxy:.95}, 1],  [ { sxy:1.05 },1] ) }


selected=function(bm){

    //SL(bm)

    bm.$(function(){

        createjs.Tween.removeAllTweens()

        bitmap=bm

        scaleShake(bm.dO)  })
}








SELECTED=function(){z()


    stage = dragStage()

    stage.wBm('coin',  function(bm){
        coin=bm;
        SL(coin)
        selected(bm)

    })



    stage.wBm('sun', function(bm){

        sun=bm;
        SL(bm)
        selected(bm)

    })



    TextAdder(stage)


    stage.wBm('me', function(bm){

        me=bitmap=bm

        SL(bm)

        bm.rgc('+')

        scaleShake(bm)
        //rotateShake(bm)

        selected(bm)

        stage.wBm('flame', function(bm){ flame=bm; SL(bm);selected(bm) })

        stage.wBm('guy', function(bm){ guy=bm;SL(bm); selected(bm) })

    })






    theImagesDiv = $div().a().drg().c('y')

    loadImagesDiv=function() {

        theImagesDiv.E()

        eaI(function (img) {

            theImagesDiv(
                $imageSizeFuncCan(
                    img.d, 1, function () {


                        stage.wBm(img.d, function (bm) {

                            SL(bm.sxy(.4));
                            bm.rgc('+');
                            selected(bm)
                        })


                    })
            )})}


loadImagesDiv()

    d=$divA(500).c('y')(

        $button('freeze',  createjs.Tween.removeAllTweens ),
        $button('right', function(){ bitmap.x( bitmap.x() +10)  }),
        $button('left', function(){  bitmap.x( bitmap.x() -10)  }),
        $button('up', function(){    bitmap.y( bitmap.y() -10)  }),
        $button('down', function(){  bitmap.y( bitmap.y() +10)  }),
        $br(),

        //fix
        $button('bigger', function(){   bitmap.sxy(1.1, '*') }),
        $button('smaller', function(){  bitmap.sxy(  .9,'*' )  }),
        //

        $button('wider',   function(){  bitmap.sx( bitmap.sx() * 1.1 )  }),
        $button('thinner', function(){  bitmap.sx( bitmap.sx() * .9 )  }),

        $button('taller',  function(){  bitmap.sy( bitmap.sy() *1.1 ) }),


        $button('shorter', function(){  bitmap.sy( bitmap.sy() *.9)  }),

        $br(),

        $button('CW',  function(){  bitmap.rt(bitmap.rt() + 10) }),
        $button('CCW', function(){  bitmap.rt(bitmap.rt() -10)  }),
        $br(),

        $button('get index', function(){

        pop('index: ' + stage.ix(bitmap)  )

        }),


        $button('set index to 3', function(){

            stage.ix(bitmap, 3)
            pop('index: ' +  stage.ix(bitmap) )

        }),


        $button('z-up',  function(){

            stage.ix(bitmap, stage.ix(bitmap)+1)

        }),

        $button('z-down', function(){   stage.ix(bitmap, stage.ix(bitmap)-1) }),

        $button('remove', function(){

            stage.rm(bitmap)

        }),


        $button('clone', function(){

            stage.a(


                EaselContainer().a(

                    SuperDisplayObject( bitmap.ob.clone() )
                )
            )

        }),

        $br(),


        $button('save', function(){

            stage.sv(function(){loadImagesDiv()})

        }),


        $button('paint', function(){ stagePainter(stage) }),
        $button('', function(){  })




    )







}



INDEXX=function(){z()

    s=dragStage().bm('me',function(bm){b=bm


        SL(b)

        _.times(10,  function(){s.bm('guy',SL)  })

        s.ix(b, 3)
    })



}








FILTERS=function(){

    s=St(1000).a()

    wMb(

        function(b){

            b.xy(-100,-50)

            b.cc().clMF('a','+').clMF('w','+')

            SL(b)

        },

        s

    )



    wMb(function(b){b.xy(400,0).cc()
        SL(b)
        b.fl([aMF(Gx().lf(trx(1,0),[0,1],0,0,300,300)
            .dr0(400).H().cc(400).cc('*'))
        ]).cc(400)},s)


    wMb(function(b){
        b.xy(100,300).cc();SL(b)
        b.cc().fl([ clF(.3,1,.3,1,0,0,0,0) ]).cc('+')},s)


    wMb(function(b){
        var ag=0,rg=20,sp=0.04;
        b.xy(500,300).cc();SL(b)
        tt(function(e){
            v=sin(ag+=sp)*rg;b.cc('+').fl([blF(v,v,2)]) })},s)}






TRANSFORM = function(){format()

    wMs(function(b,s){
        b.xy(0,0)
        b.rgc('+')
        TR(b)

        wMb(function(b){b.xy(50,50).rgc('+');TR(b)},s)

        wMb(function(b){b.xy(100,100).rgc('+');TR(b)},s)

        wMb(function(b){
        b.xy(200,200).rgc('+');TR(b)},s)

        wMb(function(b){
        b.xy(300,300).rgc('+');TR(b)},s)

        wMb(function(b){
        b.xy(400,400).rgc('+');TR(b)
        },s)

        wMb(function(b){
            b.xy(150,150).rgc('+');TR(b)
        }, s)

        wMb(function(b){
        b.xy(250,250).rgc('+');TR(b)},s)

        wMb(function(b){
        b.xy(350,350).rgc('+');TR(b)},s)},'-')

    s1(bt('rotate',function(){

        s.ch('-')


        wMb(
            function(b,s){

                s.M(50); //b=Do(bj(b))

                RT(b.xy(400))

                wMb(function(b){b.xy(300).al(.5)
                        RT(b,'-')}
                    ,s)

                wMb(function(b){
                        KK(b.xy(200).sxy(1.4),'+')}
                    ,s)

                wMb(function(b){
                        KK(b.xy(100).sxy(.6))}
                    ,s)},s)


    }),br(2),


 $button('skew',function(){

     s.ch('-')

     wMb(function(b,s){

         s.mg(function(b,s){

             SK( b.xy(300).rgc('+').sxy(1.5))

             s.w(2000).h(2000)

         })


         //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)

         }

         ,s)
 }),br(2),



    $button('register',function(){

        s.remove()

        wMb(function(b,s){TR(b); rg1(b); reggy(b)}, s)

        wMb(function(b,s){TR(b); b.rgc(); rg1(b);  reggy(b)}, s)}),
        $br(2))}


SHOWCASE=function(){format()

    s2( $span().id('pics'))

    s2( x=cx('y',500,500) )

    x.q.cen()

    eaI(function(v){qi('pics')(xc(v.d,1,function(){
        x.X();
        x.f(v.d)

         url$=v.d}))})


    s2(br(2), lb('caption'),
        cap$=tx().w(500))


  s1(

      br(2),
      lb('category'),



      cat$=tx().w(200),br(2),





      bt('post',function(){

      o={

          t:cat$.V(),
          c:cap$.V(),
          du:url$}
       qP('/pst',o,function(){pop('posted')})

      }),br(2),

      bt('make a showcase',function(){}),br(2),

      bt('submit to ranky',function(){}),br(2)

  )



}

