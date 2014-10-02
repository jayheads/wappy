QUEUE=function(){z()

    s=St(500).a()

    queue=new createjs.LoadQueue()
    queue.on("complete", handleComplete, this)
    queue.loadManifest([{id:"myImage", src:"/me.png"}])

    function handleComplete(){
        image=queue.getResult("myImage")
        s.b(image)}
}
QUEUEMUG=function(){z()

    s=St(500).a()

    qu=Ql().c(graphics, this).l([
        {id:"mug", src:"/getMug" },
        {id:"me",src:"/me.png"}])


    function graphics(){

        mug=s.bData( qu.gR("mug")  ).fn(SL)

        me=s.b( qu.gR("me") ).fn(SL)}

}
mugCont=function(stage){

    var cont=Ct()

    var qu=Ql().c(onMug).l([   {id:"mug", src:"/getMug" }  ])


    function onMug(){
        cont.mug= cont.bData(qu.gR("mug")).rgc('+')
        cont.flame=function(){cont.desuit()
            cont.a(
                cont.suit= Ct().b('flame', function(flame){  }))}
        cont.uni=function(){
            cont.desuit()
            cont.a(

                cont.suit= Ct().b('uni', function(uni){
                    uni.x(200).y(200)
                    cont.mug.sxy(.2).x(300)

                }))}
        cont.guy=function(){cont.desuit()
            cont.a( cont.suit=Ct().b('guy', function(guy){  }))}
        cont.desuit=function(){

            cont.mug.sxy(1).xy(200)

            if(cont.suit){
                cont.suit.XX()
                cont.suit=null
            }
        }}
    return cont}
CONTMUG=function(){z()

    s=St(1000).a()

    s.a(  m=mugCont()  ).rgc('+')

    SL(m)

}

Cycle1=function(){

    var cont=new createjs.Container()

    cont.mug(

        function(mug){

        mug.sXY(.4)


        cont.bm('uni',

            function(bitmap){

            bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)

                bitmap.name='uni'
            TR(mug, cont)

            RT(bitmap, cont)

        })

    })

    return cont}
Cycle2=function(){

    var cont= new createjs.Container()

    var qu =  new createjs.LoadQueue().complete( graphics ).manifest([

        {id:"mug", src:"/getMug" },
        {id:"uni", src:"/uni.png"}

    ])

    function graphics(){


        cont.bm(
            qu.getResult("uni"),
            function(b){bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80) })
        bitmap.name=('uni')
        cont.bm(
              $img($.parseJSON(qu.getResult("mug"))),
              function(b){mug =b.sXY(.4)})

        SL(mug, cont)

        EaselTween([mug,'l'],   [{y:-10},200],   [{y:10},200],  [{y:0},200])

    }


    return cont}
CYCLE=function(){z()
    s= $stage(800, 800).A().tick()
   c1=Cycle1()
    c2=Cycle2()
    s.A( c1, c2 )}

Flame1=function(){

    var c=new createjs.Container().drag()

    c.bm('flame',

        function(b){

             tweens.shakeY(b)

            c.mug(function(b){

                b.rCenter()

                tweens.shakeX( tweens.rott(b) )

                    c.bm('flame', tweens.shakeX)

                })

            c.on('dblclick',function(){

                c.bm('flame',
                    function(b){
                        b.sXY(.2)
                        tweens.prod1(b)})

                c.bm('flame',

                    function(b){
                        b.sXY(.2)
                        tweens.prod2(b)



                    })})

        })


    return c}
FLAME=function(){
    s= $stage(800, 800).A().tick()
    f=Flame1().X(300)
    s.A(  f )
}

Bod2=function(){

    var c1=new createjs.Container(),

        cL=new createjs.Container()


    c1.mug(function(m){

        SL(m, c1)
        m.sXY(.4);

        c1.cI(m, 0)

    })


    c1.bm('arm',function(b){//arm=b;
        b.name = 'arm';
        b.sX(-.8).X(140).Y(100).rX(200).rY(80)

        RT(b)

        b.on('dblclick',function(){tweens.rpunch(b)})})

    cL.bm('uparm',
        function(b){//lu=b
            b.name=('lu')
            RT(b, cL)
            b.sX(.8).X(80).Y(180).rX(200).rY(80)

            cL.on('dblclick',
                function(){
                    tweens.lpunch(cL)})

            cL.X(140).Y(100).rX(100).rY(100)
        })



    cL.bm('forearm',

        function(b){//lf=b
            b.name = ('lf')

            b.sX(.8).X(-100).Y(140).rX(20).rY(120)

            RT(b)

        })


    return c1.A(cL) }
Bod1=function(){

    var  outerCont = new createjs.Container().drag()

    var  innerCont= new createjs.Container()


    outerCont.A( innerCont )

    outerCont.mug(

        function(m){
            m.sXY(.4)

            SL(m, outerCont)


            outerCont.bm('arm', function(b){

                b.name = 'arm'

                b.sX(-.8).X(140).Y(100).rX(200).rY(80)

                RT(b)

                b.on('dblclick',function(){  tweens.rpunch(b)  })

            })

            innerCont.rX(40).rY(100).X(40).Y(120)

            innerCont.bm('uparm', function(b){

                b.name  = 'lu'

                b.sX(.8).X(80).Y(180).rX(200).rY(80)

                RT(b,innerCont)})

            innerCont.bm('forearm',  function(b){

                b.name='lf'

                b.sX(.8).X(-100).Y(140).rX(20).rY(120)

                RT(b)


                innerCont.on('dblclick', function(){tweens.lpunch(b)


                })


            })

        }  )

    return b=outerCont}
BODS=function(){ z()

    s= $stage(800, 800).A().tick()
    b1 = Bod1()
    b2=Bod2()
    s.A(   b1  )
    s.A(   b2 )
}

BOD=function(){z()
    s= $stage(800, 800).A().tick()

    var b1=Bod1(),

        b2=Bod2().X(300).Y(300),

        f=Flame1().X(300).Y(500),

        cyc=Cycle1().X(400),

        cyc2=Cycle2().X(500)



    s.A(b1, f, b2, cyc, cyc2)



}