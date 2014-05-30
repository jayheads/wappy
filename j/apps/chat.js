

CHATBOX=function(){

    chats=dva(2).l(900).auto().P(10).c('bb')(

        // bt('chat',ff('CHT.t()')).M(40),
        // bt('frog chat',   ff('gc.t()')  ).M(40),
        // bt('taxi chat',  ff('yc.t')  ).M(40),




        bt('general',function(){ priv('general')  }).M(40),
        bt('fun',function(){ priv('fun')  }).M(40),
        bt('sexy',function(){ priv('sexy')  }).M(40),


        t=tx(),


        bt('private', function(){
            priv(t.V())}).M(40))





}














SORTY=function(){format()

    s1(
        h1('your sorts'),

        ipt('new sort',
            'post',
            '/srt',
            '-'

        ),


        h4('recent: '))


    qG('/srt',function(t){
        d1(bt(t.t,function(){sorty(t.t)}),
        br(2))},'+')

    s2(im('me'))}
