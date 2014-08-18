//changed for git stake

$(function(){


    $.getJSON('/loggedIn', {},

        function(username){

            _username   =usr=username

            if(username=='guest' || !username){ renderGuestPage() }

            else {

                kk.emit('id', username)

                joinSelf()

                wM(function(m){ _userMug= mug = m})

                renderHomePage()

            }
        })
})




lc=function(a){
    if(D(a)){
        $w.location=a}; return $w.location}

pof=function(a,b,c){return function(){qP(a,b,c)}} //an api shortcut

qPd=function(u,o){qP(u,o,function(da){d=da})  }// to test qP


qJ=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.getJSON(u,d,g.P?f:function(ss){
        _e(ss,function(s){f(s,ss)})})}

qJE=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.getJSON(u,d, function(ss){
        _e(ss,function(s){f(s,ss)})})}

qP=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.post(u,d,g.P?f:function(ss){
        _e(ss,function(s){f(s,ss)})})}


qPE=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.post(u,d, function(ss){
        _e(ss,function(s){f(s,ss)})})}

qG=function rc(u,d,f){
    var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.get(u,d,g.P?f:function(ss){
        _e(ss,function(s){f(s,ss)})})}


qGE=function rc(u,d,f){
    var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.get(u,d,function(ss){
        _e(ss,function(s){f(s,ss)})})}


ldr=function(a){return function(){$w.location='/wap/'+a }} //never called?



load=function(a){  $w.location='/wap/'+a }




renderGuestPage=launchGuest = guest=function(){ z('r')

  var container=ContainerDiv(

      HeaderDiv(
            $ul().k("nav nav-pills pull-right")(
                $liA('home').k('active'),
                $liA('About'),
                $liA('Contact')),
            $h1('jason yanofski presents..')),
      JumbotronDiv(
          'a graphics-based real-time social gaming creativity web app','woo hoo!',
          ButtonLarge('log in', LoginForm),
          $span(' '),
          ButtonLarge('sign up', SignUpForm)
      ).cen(),

      ROW(    $h1('fun!'),  $div()(   $h4('graphics'),  $pg('cool cool cool'),  $h4('social'),      $pg('cool cool')  ))  //,  FT('&copy;2013')

    )

    container.pp().drg().c('o').s('a', .9).t(100).l(100)}


renderHomePage =launchHome = home=function(){

    WappyNav($r()) //load navigator

    qJ('/loggedIn', function(data){ $('#uname').text(_username).append(data) }) //update user name on UI dash  //qi('uname').jLoad('/lgd')

    if( $w[ app=uC(app) ] ){  $w[app]()  }  // should be passed in?
}



SignUpForm=signUpForm  = sU=function(){

    var newUser=function(a,b,c){

        if(S(a)){return newUser({u:a,p:b},c)}

        qP('/nU',a,b)}




    var f={

        u: $div().k('form-group')(

            $label('uname: ','uname'),

            TextInput().k('form-control').at({type:'text'})().id('uname')

        )

            .f(20).nm('u'),



        p: $div().k('form-group')(

            $label('pword: ','pword'),

            fc('p').id('pword')

        ).f(20).nm('p'),


        s:   $input().V('sign up').ty('submit').f(16)   ,



        v:function(){

            return {

                u:qq(f.u.ch(1)).V(),

                p:qq(f.p.ch(1)).V()

            }

        }
    }


    f.f= _f().P(4).c('o')(

        f.u,
        f.p,
        f.s

    )



    pop(f.f).id('mod').drg()

    f.f.o('s', function(q,e){pD(e.e)


        qP('/nU', f.v(),


            function(d){


                if(d === 'guest'){

                    qi('mod').m()

                    pop('try again.. idiot')

                }


                else {

                    home()

                    WAPNAV()

                    pop( 'welcome ' + d + '!' )

                    qi('uname').jLoad( '/lgd' )//uplog()


                }

            })})

    return f}

LogInForm= LoginForm=logInForm = lI = function(){

    var u, p, s, f,

        verifyLogin=function(d){

            if(d==='guest'){

                //close the login form
                qi('mod').m()


                //pop a UI alert message
                pop('try again.. idiot')

            }

            else {


                home()

                pop('welcome '+d+'!')
            }
        }



    pop(

        f = _f().P(4).c('g')(

                u=fg(

                    $label('uname: ','uname'),

                    fc().id('uname')

                ).f(20).nm('u'),



            p=fg(  lb('pword: ', 'pword'),  fc('p').id('pword')  ).f(20).nm('p'),


            s =   $input().V('log in').ty('submit').f(16)



        )

            .o('s',

            function(q,e){ // pD(e.e)

                if(u){  qP(  '/li',

                    {
                        u: qq( u.ch(1) ).V(),

                        p: qq( p.ch(1) ).V()

                    },   verifyLogin)   }
            })




    ).drg().id('mod')



    return {}

}

logOut =lO=function(){qJ('/lo',guest)} // fresh() ? problem?  // function(){guest()})//uplog()//qi('uname').jLoad('/lgd')

getUsers = usrs=function(f){ qG('/users', f)}

//Us =function(f){  qJ('/gU',  f||function(u){_e(u,function(u){card(u)})})}  //'with users' [show their cards]

getBuds = buds=function(f){qG('/buds',f)}

removeUser = rmU=function(a,b){if(S(a)){rmU({u:a},b)};qP('/rmU',a,b)}


clearApps = fresh=function(){ z();WappyNav() }








// OLD

//qGetLoadFunc=function(a,b){return function(){qJ(a,  function(d){  qi(b)(d) })}} //no idea who is using this
//make a function appends result of jGET-url-a to EL-id=b
//its like load?  it says to id-get
//something(b), and put some server data(a) in it
//lgdIntoUname=uplog=   qGetLoadFunc('/lgd','uname') // qi('uname').jLoad('/lgd')

//lgd=function(f){qJ('/lgd',f||pop)}



lgrX=function(){

    var log=function(c){
        return sp('?').id('log')
            .c(c||'g')
            .M(10).P(10)}

    dva(3).id('lgr').c('b').pp()(

            sp('log: '),

            log()

        ).o({

            $:
                function(d){  qi('log').jLoad('/loggedIn') },

            $$:lO

        }).$()

}//depr?


lgrBarX=function(){
    di('lgr').pp().c('b').o({
        $: function(d){  qi('log').jLoad('/loggedIn') },
        $$:lO
    })(sp('log: '),log())}//depr?










