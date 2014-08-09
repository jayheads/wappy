tweens={}
tweens.rpunch=function(arm){

    //arm=arm|| c1.g('arm')

    tw(arm,
        [{r:100,sx:-1 },800],
        [{r:-20,sx:-2,sy:2},400,'eO'],
        [{r:0,sy:1,sx: -.8},200])
}
tweens.lpunch=function(lf){

    tw(lf,

        [{r:10,s:1},800],

        [{r:-140,s:2.5}, 600, 'eO'],

        [{s:.8, r:0}, 1600])

}

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






cycle=function(){

    var cont=Ct()

    cont.mg(function(mug){

            mug.sxy(.4)


        cont.b('uni', function(bitmap){

                bitmap.nm('uni').sx(-.8).xy(-20, 200).rxy(240, 80)

                TR(mug, cont)

                RT(bitmap, cont)

            })

        })


    return cont}



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





cycle2=function(){

    var cont=Ct()

    var qu=Ql().c(graphics).l([
        {id:"mug", src:"/getMug" },
        {id:"uni", src:"/uni.png"}])


    function graphics(){

        mug=cont.bData(qu.gR("mug")).sxy(.4)

        TR(mug, cont)

        tw([mug,'l'],
            [{y:-10},200],
            [{y:10},200],
            [{y:0},200])

        bitmap=cont.b(qu.gR("uni")).nm('uni').sx(-.8).xy(-20, 200).rxy(240, 80)
        RT(bitmap, cont)
    }


    return cont}








flame=function(){

    var c=Ct().fn(SL)


    c.bm('flame',

        function(b){

            tweens.shakeY(b)

            wMb(function(b){

                c.a(b)
                b.rgc()
                tweens.shakeX( tweens.rott(b) )

                c.b('flame', tweens.shakeX)

            })


            c.o('$$',function(){

                c.b('flame',
                    function(b){
                        b.sxy(.2)
                        tweens.prod1(b)})

                c.b('flame',

                    function(b){
                        b.sxy(.2)
                        tweens.prod2(b)



                    })})})


    return c}






bod1=function(){

        var outerCont=Ct(), innerCont=Ct()

        SL(outerCont)

        outerCont(innerCont)


        outerCont.mg(

            function(m){m.sxy(.4);SL(m,outerCont)


            outerCont.b('arm',function(b){

                b.n('arm')
                b.sx(-.8).xy(140,100).rxy(200,80)

                RT(b)

                b.o('$$',function(){tweens.rpunch(b)})

            })



            innerCont.rx(40).ry(100).x(40).y(120)

            innerCont.b('uparm', function(b){

                b.n('lu')

                b.sx(.8).xy(80,180).rxy(200,80)

                RT(b,innerCont)})

            innerCont.b('forearm',  function(b){

                b.n('lf')

                b.sx(.8).xy(-100,140).rxy(20,120)

                RT(b)


                innerCont.o('$$',function(){tweens.lpunch(b)


                })


            })})


    return outerCont}




bod2=function(){

    var c1=Ct(), cL=Ct()



    c1.mg(function(m){ SL(m,c1);m.sxy(.4); c1.cI(m,0) })

    c1.b('arm',function(b){//arm=b;
        b.n('arm');   b.sx(-.8).xy(140,100).rxy(200,80)
        RT(b)
        b.o('$$',function(){tweens.rpunch(b)})})

    cL.bm('uparm',
        function(b){//lu=b
            b.n('lu')
            RT(b, cL)
            b.sx(.8).xy(80,180).rxy(200,80)

            cL.o('$$',
                function(){
                    tweens.lpunch(cL)})

            cL.xy(140,100).rxy(100,100)})



    cL.bm('forearm',
        function(b){//lf=b
            b.n('lf')
            b.sx(.8).xy(-100,140).rxy(20,120)
            RT(b)






        })


    return c1.a(cL)}







BOD=function(){z()

    var b1=bod1(),

        b2=bod2().xy(300),
        f=flame().xy(300,500),
        cyc=cycle().x(400),


        cyc2=cycle2().x(800)

    stage=St(2000).a()

    stage.a(b1)

    stage.a(f)

    stage.a(b2)

    stage.a(cyc)

    stage.a(cyc2)



}




