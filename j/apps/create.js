
eaI=function(f){imgs(function(i){_e(i,f)})}

sav=function(s,a){return function(){s.sv(a)}}





EDIT=function(){

    s=St(800);

    var d=_d()

    CT(d,s).o('$$',sav(s, 'edit'))


    eaI(function(v){

        d(

            xc(
                v.d,
                1,
                function(){s.bm(v.d,TR,'+')}))})

    return s}













AVATAR=function(){var s=St(400),d=_d();
    CT(d,s).o('$$',
        sav(s,'avatar') )
    eaI(function(v){
        d(xc(v.d,1,function(){ s.bm(v.d,TR,'+')}))})
    return s}




PAINT=function(){
    var r='#0FF',sz=2,oX=0,oY=0

    s=St(800).a()

    s.a(TX('finger paint','y',24,100))


    s.a(sh=Hx())

    s.mg(function(m){m.xy(200)})


    s.o({

            D:function(q,e){sz=10},

            U:function(q,e){sz=2;r=HSL()},

            M:function(q,e){

                oX=e.X;oY=e.Y

                if(oX){sh.gs(r).gss(sz,'round')
                .mt(oX,oY).lt(e.X,e.Y)}}})}
FILTERS=function(){
    s=St(1000).a()
    wMb(function(b){b.xy(-100,-50)
        b.cc().clMF('a','+').clMF('w','+')
        SL(b)},s)

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


TRANSFORM=function(){format()

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
        b.xy(400,400).rgc('+');TR(b)},s)

        wMb(function(b){
        b.xy(150,150).rgc('+');TR(b)},s)
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


 bt('skew',function(){

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



    bt('register',function(){
        s.ch('-')

        wMb(function(b,s){TR(b); rg1(b); reggy(b)}, s)

        wMb(function(b,s){TR(b); b.rgc(); rg1(b);  reggy(b)}, s)}),
        br(2))}




SHOWCASE=function(){format()
    s2(_s().id('pics'))
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

