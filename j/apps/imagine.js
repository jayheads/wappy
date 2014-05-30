cycle=function(){
    var c1=Ct()



    // s.a(c1)

    c1.mg(function(mg){m=mg

        m.sxy(.4)

        //c1.cI(m,0)

        c1.bm('uni',

            function(b){
                b.n('uni')
                b.sx(-.8).xy(-20,200).rxy(240,80)
                TR(m,c1)
                RT(b,c1)})})

    return c1}







flame=function(){var c=Ct().fn(SL)


    c.bm('flame',function(b){shY(b)

            wMb(function(b){

                c.a(b);b.rgc()
                shX(rott(b))
                c.b('flame',shX)

            })

            c.o('$$',function(){
                c.b('flame',
                    function(b){
                        b.sxy(.2)
                        prod(b)})


                c.b('flame',
                    function(b){
                        b.sxy(.2)
                        prod(b,'-')



                    })})})


    return c}



bod1=function(){
        var c1=Ct(),
            cL=Ct()


        SL(c1)

        c1(cL)


        c1.mg(function(m){m.sxy(.4);SL(m,c1)
            c1.b('arm',function(b){

                b.n('arm')

                b.sx(-.8).xy(140,100).rxy(200,80)
                RT(b)

                b.o('$$',function(){rpunch(b)})


            })
            cL.rx(40).ry(100).x(40).y(120)
            cL.b('uparm', function(b){

                b.n('lu')

                b.sx(.8).xy(80,180).rxy(200,80)

                RT(b,cL)})
            cL.b('forearm',  function(b){

                b.n('lf')

                b.sx(.8).xy(-100,140).rxy(20,120)

                RT(b)


                cL.o('$$',function(){lpunch(b)


                })


            })})


    return c1}

bod2=function(){

    var c1=Ct(), cL=Ct()



    c1.mg(function(m){ SL(m,c1);m.sxy(.4); c1.cI(m,0) })

    c1.b('arm',function(b){//arm=b;
        b.n('arm');   b.sx(-.8).xy(140,100).rxy(200,80)
        RT(b)
        b.o('$$',function(){rpunch(b)})})

    cL.bm('uparm',
        function(b){//lu=b
            b.n('lu')
            RT(b, cL)
            b.sx(.8).xy(80,180).rxy(200,80)

            cL.o('$$',
                function(){
                    lpunch(cL)})

            cL.xy(140,100).rxy(100,100)})



    cL.bm('forearm',
        function(b){//lf=b
            b.n('lf')
            b.sx(.8).xy(-100,140).rxy(20,120)
            RT(b)






        })


    return c1.a(cL)}

rpunch=function(arm){arm=arm||c1.g('arm')
    tw(arm,
        [{r:100,sx:-1 },800],
        [{r:-20,sx:-2,sy:2},400,'eO'],
        [{r:0,sy:1,sx: -.8},200])}


lpunch=function(lf){tw(lf,
        [{r:10,s:1},800],
        [{r:-140,s:2.5},600,'eO'],
        [{s:.8,r:0},1600])}



BOD=function(){
    var b1=bod1(),
        b2=bod2().xy(300),
        f=flame().xy(300,500),
        cyc=cycle().x(400)
    s=St(2000).a()
    s.a(b1)
    s.a(f)
    s.a(b2)
    s.a(cyc)}




