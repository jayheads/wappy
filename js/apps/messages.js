navtabs=function(){
    return ul().k('n nt')
}



$.navTabs=function(){ return $.ul().K("nav nav-tabs")  }




$autoDiv= auto=function(){
    var args=G(arguments),
        theDiv=$div().auto()

    _.each(args, function(arg){ theDiv(arg) })

    return theDiv}




showTab =shw=function(a){

    qi(a).q.tab('show')

    //return a
}

firstChild =ch$ =function(a){  a.ch(0).$()  }


Tab =tab=function(tabText, func){
    var args=G(arguments), tabText=args[0], func=args[1],

        theLi= $liA(tabText,
            function(){ showTab(tabText); func()  } )


    theLi.load=function(){ showTab(tabText); func()  }

    if(args.m){  theLi.k('active')  }

    return theLi}

$password=function(){return ip().type('password').k('form-control')}

tabs=function(a){

    var g=G(arguments),

        a=g[0],

    d,

    u

    d=$autoDiv(

        u=navtabs(),

        TABS= $span()
    )


    if(A(a)){ a= _a(tab, a) }

    u(a)

    _.each(g.r,

        function(a){

            if( A(a) ){a = _a(tab, a)};

            u(a)

        })


    d.load=function(){ch$(a); return d}

    d.c('X')

    return d

}



$.tab=function(tabText, func){

    var args=G(arguments), tabText=args[0], func=args[1],

        theLi= $liA(

            tabText,

            function(){ showTab( tabText ); func()  }
        )


    theLi.load=function(){ showTab(tabText); func()  }

    if(args.m){  theLi.k('active')  }

    return theLi}

$.tabs=function(a){

    var   u = $.ul().K("nav nav-tabs"),

    d = $.div().WH('auto').A(  u,     TABS= $.span()   )

    if( A(a) ){ a =   _a(tab, a) }

    u.A( a )

    _.each(_.rest(arguments),  function(a){   if( A(a) ){a = _a(tab, a)};   u.A(a)  })

    d.load = function(){ ch$(a); return d }

   return d.C('X')

}




MESSAGES=function(){format()

    tab1=[

        'received',

        function(){

        TABS.E(

            $h1('Messages'),
            $br()
        )


        qG('/gMsg', function(m){


                TABS(


                    row(

                        col(2, c1(m.fr)),
                        col(10,

                            $button(m.fr,

                                function(){
                                    from = m.fr;
                                    tab3.load()
                                }),

                            $h4(dtt(m.dt)).k('pull-right'),
                            $h5(m.m))
                    ),$hr()
                )


            },


            '+')


        },

        '*']


    tab2=['sent', function(){

        TABS.E()(
            $h1('Messages'),
            $br())

        qG('/MsgS',function(m){mm=m;

            var ms=$textarea(),
                c=cx().bc('-').Z(1)

            $.post(
                '/mug',{u:m.to},

                function(mug){c.f(mug)}
            )


            TABS(row(
                col(2,c),
                col(10,

                    $button('to: '+m.to,

                        function(){

                            from=m.to;
                            tab3.load()}

                    ),

                    $h4(dt(m.dt).dt()).k('pull-right'),
                    $h5(m.m))),$hr())
        },
            '+')
    }]


    tab3 = tab('convo',

        function(){

        var ms=ta()

        u=$w['from']||'b'

        TABS.E()(

            $h1('convo with '+u)

        )

        TABS(

            $h1('Messages'), $br()
        )

        qG('/gMsgW', {u:u},

            function(m){
                var c=cx().bc('-').Z(1)

                $.post('/mug',
                        {u:m.fr},
                        function(m){c.f(m)})

                TABS(row(col(2,c),
                        col(10,
                            $h6('from: '+m.fr),
                            $h4(dt(m.dt).dt() ).k('pull-right'),
                            $h5(m.m))),
                        $hr())},
            '+')

        TABS(ms,

            $button('new message',

                function(){

                $.post('/sMsg',   {m:ms.V(), to:from})

            }),

            $br(2)
        )

    })

    tab4 = [ 'requests', function(){


        TABS.E(
            $h1('Buddy requests'),
            $br()
        )



        //buddy requests
        qG('/gRq',function(msgs){

            _.each(msgs,  function(msg){


                TABS(

                    $div()(

                        $h6( 'from ' + msg.fr + ' on ' + msg.dt ),

                        $h5( msg.m ) ,

                        $button('accept',  function(){  $.post( '/yRq',  { u: msg.fr }  )}),

                        $button('deny'),

                       $hr() ) )




            })})

    } ]

    s2( t = tabs( tab1, tab2, tab3, tab4 ) )

    t.load()

}











PILLS=function(){z()

   pills= $.ul().K("nav nav-pills").A(

        $.li().K('active').A(    $.a('home').toggle('tab')     ),

        $.li().A(  $.a('profile').K('profile')  ),

        $.li().A( $.a('messages') ) )


    div=$.div('b').WH('auto').pad(40).drag()

    content = $.div('y',300).pad(40).mar(40)

    div.A( pills , content)


    $('a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })


   // $('a:first').tab('show')


    $('a.profile').on('shown.bs.tab', function(e){

       content.empty()

        content.A(
            $.div().text('asfdasfdfasd')
        )

    })


    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){

       // alert('yay')

        ee=e.target
        e.target // activated tab
        e.relatedTarget // previous tab
    })



}