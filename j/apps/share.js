
//used for LISTING things (blog posts, etc)
blp=function(s,d){

    var g=G(arguments),   s=g[0],   d=g[1],


        theSpan = $span()

    if(g.p){

        theSpan(

            $button('topic: '+ s.t,  function(){  topic=s.t;  tab4.load()  }   ),

            $h5( dt(s.dt).dt() ),

            $h3( s.c)

        )}


    else if(g.n){

        theSpan(
            $button('user: '+s.u, function(){from=s.u;tab3.load()}),

            $br(),

            $button('topic: '+s.t, function(){topic=s.t;tab4.load()}),

            $h5(  dt(s.dt).dt()  ),

            $h3(s.c))
    }

    else if(g.d){

        theSpan(

            $button('user: '+s.u,function(){from=s.u;tab3.load()}),
            $br(),


            $h5(s.dt), $h3(s.c))}

    else {

        theSpan(

            $h4( dt(s.dt).dt() ),

            $h1(s.c)
        )

    }





    if(s.du){
        theSpan(

            cx(400).f(s.du).bc('-')

    )}


    theSpan($hr())

    return D(d)? d(theSpan): theSpan

}






//api calls
withStatus = wUSt=function(user,func){//with first status?

    qG('/sts1',

        {u: user},

        function(status){ func(status.c) })
}




$mailButton = btMail=function(message, user){

   return $button('mail',

       function(){

           $.post('/sMsg',

               {

               m: message.V(), to: user.u

           }

           )})

}





$chatButton  =function(username, message){ //= btChat  //_$username,  messageTextarea


    mmm=message

    return $button('chat',


        function(){

        $l('send message')

        //$l('message: '+ message.V())

        $l('toWho: '+ username)

        $l('from: '+ _username)


           // mo= {  message: message.V(),  toWho:username,  from:_username  }

            socket.emit('sendPrivateMessage',

            {  message: message.V(),  toWho:username,  from:_username  }

        )


    })

}








$buddyRequestButton =btRq=function(user){

    return $button('buddy-request',

        function(){

            $.post('/sRq', {to:user.u})

        })}






$postsButton =btPst=function(){return $button('see posts', function(){})  }


c3=function(a){return xc().w(300).h(300).f(a) }












POSTS=function(){format()

    s1(

        //dd= ipt('new post', 'post', '/pst',  home, '+'),

        dd=inputBox({

            boxTitle:'new post',
            url:'/pst',
            buttonText:'post',
            func:home,
            inputType:'textAndTextArea'
        }),



        $h2('attach:'),


        $button('pic', function(){

            m=pop(

                ps=_d()( h3('pic select')  )

            )



            imgs( function(p){  _e(p, function(p){


                ps(
                    qq(
                        im(p.d)
                    ).Z(1).o(

                            function(){

                                attached.E( qq( im(p.d) ).Z(2) )

                                m.q.modal( 'hide' )

                            }
                        )
                    )


                    })

                })

        }),

        attached=_d()
    )



    tab2=[

        'buds',

        function(){  TABS.E( h1('bud posts') )  }

    ]



    tab1=['all',

        function(){

            TABS.E(h1('public posts'))

            qG('/psts', function(i){  blp(i, TABS, '-')}, '+')

        }
    ]



    tab3=tab('user',function(){
        u=$w['from']||'a'

        s1.E(sp('topics: '))
        TABS.E(h1('user '+u+' blog'))

        qG('/pstu',{u:u},
            function(i){ //ii=i
                blp(i, TABS, '+') },'+')})


    tab4=tab('topic',function(){

        TOPIC=$w['topic']||'fantasy'

        TABS.E(h1('posts on '+TOPIC+' topic'))

        qG('/pstt', {t:TOPIC},  function(i){  blp(i, TABS, '/') },'+')})



    tab5=['yours',

        function(){

            TABS.E(h1('your posts'))

            qG('/pst', function(i){blp(i,TABS,'+')},'+')

        }]


    s2(t=tabs(tab1,tab2,tab3,tab4,tab5))

    t.load()

}






USERS=function(){format()

    s1(
        $h1('filter'),
        $h1('order'),
        $h1('view'))

    tab1=['users',function(){


        TABS.E(
            $h1('Users: '),
            $br())

        getUsers(  function(u){

            _.each(u,function(u){

                $.post('/dud', { d: u.m },

                    function(m){

                TABS(

                    tn(
                        $pg(u.u),

                        $br(), m ).$( function(){

                            window.location='/wap/profiles/'+ u.u;//return

                    })

                )})})})
    }]

    tab2=['buds',function(){


        TABS.E(h1('Buds: '),
            br())

        buds(function(u){

            b=u; rr=row()
            _e(u,function(u){qP('/dud',{d:u.m},function(m){
                TABS(tn(pg(u.u),br(),m).o(function(){win(_d()(br(),hr(),
                    h3('User: '+ u.u),
                    br(),
                    xc().w(300).h(300).f(m),
                    d=_d(),
                    ms=$textarea().c('w','z') ,
                    bt('send message',function(){

                        qP('/sMsg',{m:ms.V(),  to:u.u})

                    }),
                    bt('send buddy request')))
                    prof(u.u, d)}))})})

            })

    }]


    tab3=tab('user2',function(){TABS.E()(h1('users'))})

    tab4=['user',function(){

        from=$w['from']||'b'

        TABS.E()(h1('page: '+from))

        TABS(

            $pg('about'),
            $pg('activity'),
            $pg('buds'),
            $pg('posts'),
            $pg('relations')


        )

    }]

    s2(t=tabs(tab1,tab2,tab3,tab4))
    t.load()}




makeProfile = prof=function(user, theDiv){

    user=user || 'a'


    $.post('/gPf', {u:user}, function(data){

        if(O(data)){ theDiv = theDiv||dva(3)

        theDiv(  h4('things i like'), $h5(data.things),

            $h4('words that describe me'),  $h5(data.words),

            $h4('more about me..'),   $h5(data.about),

            $h4('what i want..'),  $h5(data.want),

            $h4('my best feature'),   $h5(data.best))

    }})




}





showStatus =stat=function(user, theDiv){

    withStatus(user,

        function(status){
            theDiv( $h3('STATUS: '+ status))
        })

}

PROFILES=function(){

    format()

    _$username =u=pam

    s1(   $h1(pam),   statusSpan = $span(),   image = $img()   )

    withStatus( _$username, function(status){  _$username( $h3('STATUS: '+ status))  })

    $.post(  '/mug',  {u: _$username||'a'}, function(data){  // user 'a' ????? is this just MOCKED?

        image.src = data

        qq(image).wh(200)

    })




    s1(

        messageTextarea=$textarea().c('w','z'),

       $chatButton( _$username,  messageTextarea)


    )



    tab1=tab('about',function(){
        TABS.E();prof(u,TABS)})

    tab2=tab('pics',function(){TABS.E()

        imgs(function(p){
            _e(p,function(p){  TABS(  qq(im(p.d)).Z(1).o(  function(){  } )
                ) })})

    })

    tab3= tab('blog',function(){

            TABS.E()

            qG('/pstu',{u:u},  function(i){  blp(i, TABS, '+') },'+')
    })

    tab4=tab('buds',function(){ TABS.E() })

    tab5=tab('groups',function(){ TABS.E() })

    tab6=tab('mail',function(){

        //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )

         from=u

        var messageTextarea=$textarea()

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

        TABS(messageTextarea, bt('new message',function(){qP('/sMsg',{m:messageTextarea.V(),to:from})}),br(2))





    })

    s2(theTabs=tabs(tab1,tab2,tab3,tab4,tab5,tab6))

    theTabs.load()

    //s2( br(), d=_d() )




}

STATUS=function(o){var things, words,about,want,best

    format()


    s1(

        ipt(
            'status',
            'post',
            '/sts',
            function(){}
        )
    )



Status=function(i){
    return _s()(

        h5( dt(i.dt).dt() ),
        h3( i.c),
        hr()

    )
}



    tab1=tab('status', function(){


            TABS.E(h1('status'), hr())

            qGE('/sts', function(i){

                  TABS( Status(i) )

                })

        })






    tab2=['profile',function(){

        TABS.E(

            h1('profile')

        )


        f=fo(

            lb('things you like'),

            things=tx('things you like..'),

            br(),
            lb('words that describe you'),
            words=tx('words that describe you'),


            br(),
            lb('about you'),
            about=$textarea(),


            br(),
            lb('what you want'),
            want=$textarea(),


            br(),
            lb('your best feature'),
            best=tx('..')

        )

        if(O(o)){

            things.V(o.things)
            words.V(o.words)
            about.V(o.about)
            want.V(o.want)
            best.V(o.best)

        }

        else {

            f(bt('submit',

                function(){

                pro={things:things.V(),words:words.V(),about:about.V(),want:want.V(),best:best.V()}

                qP('/uPf',pro)}))}

        TABS(f)

    }]



    s2(t=tabs(tab1,tab2))


    t.load()

}



//avail=bbM({url:'/sts'})

//avails=bbC({model:avail, url:'/sts'})





