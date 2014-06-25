TWEEN=function(a){//combo/complex/anim/tween



    //wMs looks like it makes/appends a stage, gives it a bitmap
    //based on your mug, and pass it to a callback

    wMs(

        function(b){


        TR(b)

        tw(

            [b,'l'],

            {x:0,sxy:.7,r:0},
            [{x:300,sxy:2.3,r:0},1000],
            [{x:0,sxy:.7,r:-30,a:.5},3000])

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

            tw([b,'l'],
                {sxy:.5},
                [{sxy:.7},500],
                [{sxy:.5},500])

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


    s=St(1000,10000).a()

    s.mg(

        function(b){
            b.sxy(.2).xy(50,100)
            tw([b,'l'],
                [{x:800},2000],
                [{x:50},2000]
            )})




    eas=function(y,e){

       s.mg(

           function(b){

               b.sxy(.2).xy(50,y)

               tw([b,'l'],
               [{x:800},2000,e] ,
               [{x:50},2000,e])
       }
       )
   }

    eas(300,'bO'); eas(500,'bI'); eas(700,'bIO')
    eas(900,'bnO');eas(1100,'bnI');eas(1300,'bnIO')
    eas(1500,'cO'); eas(1700,'cI');eas(1900,'cIO')
    eas(2100,'eO');eas(2300,'eI');eas(2500,'eIO')
    eas(2700,'qO');eas(2900,'qI');eas(3100,'qIO')
    eas(3900,'qnO');eas(4100,'qnI'); eas(4300,'qnIO')
    eas(4500,'sO');eas(4700,'sI');eas(4900,'sIO')
    eas(5100,'qdO');eas(5300,'qdI'); eas(5500,'qdIO')}


SPRITE=function(sprite){sprite=sprite||SS

    var g=G(arguments),
        st=St('X',400).a().drg().op(.7),
        s=spr(jss(sprite)).xy(10),
        ctr

    st.a(s)


    //if(g.p){St().a().drg().t().a(s.p());return s}

    ctr={

        j:function(){s.p('jump')},
        e:function(){s.p('explode')},
        r:function(){s.p('spin')},
        s:function(){s.s()},
        p:function(){s.p()},
        t:function(a,b){ W$.get(bj(s)).to(a,b) }

    }


    dva(6)(

        sp(' '),
        bt('spin',function(){  ctr.r() }),sp(' '),
        bt('jump',function(){  ctr.j() }),sp(' '),
        bt('explode',function(){  ctr.e()  }),  sp(' '),
        bt('play',function(){  ctr.p()  }),  sp(' '),
        bt('pause',function(){  ctr.s()  }),   sp(' '),
        bt('meta',SPRITE)

    ).c('y').h(80).w(460).a().t(200).l(300).P(20).op(.9)

    return ctr}




PACK=function(){


    s=St(800).a().t().op(.7) // s.qC().l(100);s.qC().t(100)


    p = spr(jss(Pack)).rgc().xy(10).fn(TR).p()
        .fr(6).xy(400,460).sxy(1.2).ap(s)


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

                    bt('shake',function(){
                        fn=function(b){
                            W$.get(b.obj(),{loop:true})

                                .to(ww({x:b.x()},500))
                                .to(ww({x:b.x()+100}),500)
                                .to(ww({x:b.x()}),500)

                        }}),


                    bt('rotate',function(){fn=function(b){W$.get(b.obj(),{loop:true})
                        .to(ww({kxy:0})).to(ww({kxy:20}),500).to(ww({kxy:0}),500)}}),


                    bt('size',function(){fn=function(b){W$.get(b.obj(),{loop:true})
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