TWEEN=function(a){//combo/complex/anim/tween



    //wMs looks like it makes/appends a stage, gives it a bitmap
    //based on your mug, and pass it to a callback

    wMs(

        function(b){


        TR(b)

        tw(

            [b,'l'],

            {x:0,sxy:.7,r:0},

            [ {x:300,sxy:2.3,r:0}, 1000 ],

            [ {x:0,sxy:.7,r:-30,a:.5},3000])

        })




    // i think the + makes this draggable

    wMs(function(b){

        tw([b,'l'],
            {x:0,sxy:.7,r:-2},
            [{x:300,sxy:2.3,r:0,a:.2,kx:60},3000],
            [{x:320,a:1,sxy:2,r:-1},1000],

            [{rx:100},1000],
            [{ry:100},1000],

            [{r:50,x:1400,y:300},3000],

            [{r:200,x:1000,y:200,sxy:1},3000],

            [{r:100,x:300, ky:-100},1000],

            [{rx:30,ry:30, r:150,x:500 },2000],

            [{rx:20,ry:50,r:100,x:500,kx:300 },2000],

            [{kxy:0,x:320,y:0,rxy:0,sxy:2,r:-1},3000])},

        '+')}

TWEENART=function(a){


    //wMb makes bitmap mug and passes it to a callback
    //optionally? can pass a stage to append it to before the callback runs
    wMb(

        function(b,s){
            b.xy(300);
            b.rgc(); //centers it's reg point?
            SK(b)

            tw(
                [b,'l'],


                {sxy:.5},

                [{sxy:.7},500],

                [{sxy:.5},500]


            )





            wMb(function(b){s.a(b)//manual add necessary?

                b.xy(200);b.rgc();
                b.wh(200);
                SL(b);

            tw([b,'l'],{r:0},[{r:360},1000])

            wMb(function(b){s.a(b);
                b.rgc();b.xy(600);SC(b)

                tw([b,'l'],{kxy:0},
                    [{kxy:20},500],
                    [{kxy:0},500])
            })})},

    EDIT()

    )

}


EASING=function(){


    stage=St(1000,10000).a()

    stage.mug(

        function(b){
            b.sxy(.2).xy(50,100)

            tw([b,'l'],
                [{x:800},2000],
                [{x:50},2000]
        )})




    eas=function(y,e){

       stage.mug(

           function(b){

               b.sxy(.2).xy(50,y)

               tw([b,'l'], [{x:800},2000,e],  [{x:50},2000,e])

               b.$(function(){    pop(e + ' : ' + oO('E',e))   })
       })}




    eas(300,'bO'); eas(500,'bI'); eas(700,'bIO')
    eas(900,'bnO');eas(1100,'bnI');eas(1300,'bnIO')
    eas(1500,'cO'); eas(1700,'cI');eas(1900,'cIO')
    eas(2100,'eO');eas(2300,'eI');eas(2500,'eIO')
    eas(2700,'qO');eas(2900,'qI');eas(3100,'qIO')
    eas(3900,'qnO');eas(4100,'qnI'); eas(4300,'qnIO')
    eas(4500,'sO');eas(4700,'sI');eas(4900,'sIO')
    eas(5100,'qdO');eas(5300,'qdI'); eas(5500,'qdIO')}




SPRITE=function(sprite){

    sprite=sprite||SS

    var g=G(arguments),

        stage = SuperStage(  'o', 400 ).a().drg().op(.7),

        sprite = SuperSprite(

            EaselSpriteSheet( sprite )

        ).xy(10),



        controls={
            jump:function(){ sprite.play('jump') },
            explode:function(){ sprite.play('explode') },
            spin:function(){ sprite.play('spin') },
            stop:function(){ sprite.stop() },
            play:function(){ sprite.play() } }

    stage.a( sprite)

    $divA('y',460, 80,200, 300).padding(20).op(.9)(

        $span(' '),
        $button('spin',function(){    controls.spin() }), $span(' '),
        $button('jump',function(){    controls.jump() }),$span(' '),
        $button('explode',function(){   controls.explode()  }),  $span(' '),
        $button('play',function(){   controls.play()  }),  $span(' '),
        $button('stop',function(){   controls.stop()  }),   $span(' '),
        $button('meta', function(){ SPRITE() })

    )

    s = sprite
    return  controls}






PACK = function(){

    stage = SuperStage(800).op(.7).a().t()


    sprite = SuperSprite( EaselSpriteSheet(Pack) )

        .rgc().xy( 400, 460 ).sxy(1.2).fn( TR ).ap( stage )
        .frameRate(6).play()

}







//make movie
MOVIE=function(){wap()

    var s=St(800),  d=_d(),c
    fn=function(){}

    imgs(function(i){

        _e(i,function(v){
            v=v.d
            d(xc(v,1,
                function(){

                    s.bm(v,function(b){
                        bb=b
                        TR(b);
                        //fn(b)

                        b.o('$',function(q){
                            fn(q)
                        })

                    },'+')


                }))})

        c=cnt(

            ROW(
                _d()(d,s),

                _d()(

                    $button('shake',function(){
                        fn=function(b){
                            W$.get(b.obj(),{loop:true})

                                .to(ww({x:b.x()},500))
                                .to(ww({x:b.x()+100}),500)
                                .to(ww({x:b.x()}),500)

                        }}),


                    $button('rotate',function(){fn=function(b){W$.get(b.obj(),{loop:true})
                        .to(ww({kxy:0})).to(ww({kxy:20}),500).to(ww({kxy:0}),500)}}),


                    $button('size',function(){fn=function(b){W$.get(b.obj(),{loop:true})
                        .to(ww({sxy:1})).to(ww({sxy:1.3}),500).to(ww({sxy:1}),500)}})







                )))


        //c.o('$$',function(){  s.sv(ART)})



    })






    return s}


STAGE=function(){z()

    m$$("location=location")

    s=St(600).a().rgc().drg().xy(300)
    s.bm('chicks')
    s.bm('me',function(mm){
        m=mm
        m.rgc()
             m.xy(300)

        tw(s, [{r:-10000 },300000])
        tw(m, [{r:100000 },300000])


    })

    s.bm('guy',function(){})



}

spinner=function(){

    s=St('p',1000).a().rgc('+')//.drg()

    tw(s, [{r:-10000 },300000])

    s.bm('me',function(mm){m=mm
        m.rgc().xy(500)
SL(m)
    })


}


SPINNER=function(){z()
    spinner()
}



RECTS=function(){z()

    s=St(500).a()  //.drg()

    //m$$("s.a(rct(30,30,30,30))")  //r=rct(30,30,'r'); TR(r)

    //h.fC('o'); h.sC('z')


    x=20
    y=20

    h0=Hx().rec(-20,-20,x+40,y+40,'y','y')
    h1=Hx().rec(-10,-10,x+20,y+20,'z','z')
    h2=Hx().rec(0,0,x,y,'o','z')

    s.a(h0).a(h1).a(h2)


    SL(h2)
    SL(h2,h1)
    SL(h2,h0)

RT(h1)
    RT(h1,h2)
    RT(h1,h0)


    SC(h0)
    SC(h0,h2)
    SC(h0,h1)
    a=function(){
        x+=20; y+=20
        h1.clr()
        h2.clr()

        h1.rec(-10,-10,x+20,y+20,'z','z')

        h2.rec(0,0,x,y,'o','X')
    }

    //h.rec(50,50,30,30,'z','o')





}



