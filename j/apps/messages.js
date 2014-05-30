
navtabs=function(){return ul().k('n nt')}

auto=function(){var g=G(arguments),d=dv().auto()
    _e(g,function(g){d(g)})
    return d}

shw=function(a){qi(a).q.tab('show');return a}

ch$=function(a){

    a.ch(0).$()

}



tab=function(a,f){
    var g=G(arguments),a=g[0],f=g[1],

        l=lk(a,function(){f(shw(a))},'+')

    l.load=function(){f(shw(a))}

    if(g.m){l.k('A')}

    return l}





tabs=function(a){var g=G(arguments),a=g[0],d,u

    d=auto(
        u=navtabs(),
        TABS=_s())

    if(A(a)){a=_a(tab,a)};u(a)
    _e(g.r,function(a){if(A(a)){a=_a(tab,a)};u(a)})

    d.load=function(){ch$(a);return d}

    d.c('X')
    return d}


MESSAGES=function(){format()
    tab1=['received', function(){

        TABS.E(
            h1('Messages'),
            br())


        qG('/gMsg',
            function(m){

                TABS(
                    row(col(2,c1(m.fr)),

                        col(10,
                            bt(m.fr,
                                function(){from=m.fr;
                                tab3.load()}),

                            h4(dtt(m.dt)).k('pr'),
                            h5(m.m))),
                    hr())},


            '+')




        },'*']
    tab2=['sent',function(){TABS.E()(h1('Messages'),br())

        qG('/MsgS',function(m){mm=m;
            var ms=ta(),c=cx().bc('-').Z(1)
            qP('/mug',{u:m.to},function(m){c.f(m)})
            TABS(row(
                col(2,c),
                col(10,
                    bt('to: '+m.to,
                        function(){
                        from=m.to;tab3.load()}),

                    h4(dt(m.dt).dt()).k('pr'),
                    h5(m.m))),hr())
        },'+')}]
    tab3=tab('convo',function(){
        var ms=ta()

        u=$w['from']||'b'
        TABS.E()(h1('convo with '+u))
        TABS(h1('Messages'),br())

        qG('/gMsgW',{u:u},
            function(m){var c=cx().bc('-').Z(1)
                    qP('/mug',{u:m.fr},function(m){c.f(m)})

                TABS(row(col(2,c),
                        col(10,
                            h6('from: '+m.fr),
                            h4(dt(m.dt).dt() ).k('pr'),
                            h5(m.m))),
                        hr())},'+')

        TABS(ms, bt('new message',function(){qP('/sMsg',{m:ms.V(),to:from})}),br(2))

    })
    tab4=['requests',function(){


        TABS.E(h1('Buddy requests'),br() )

        qG('/gRq',function(msgs){
            _e(msgs,function(msg){
               TABS(_d()(
            h6('from '+msg.fr+' on '+msg.dt),
            h5(msg.m),
            bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})

    }]

    s2(t=tabs(tab1,tab2,tab3,tab4))
    t.load()}













