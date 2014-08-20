//changed for git stake
//more

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


$password=function(){
   return $input().type('password').class('form-control')
}

lc=function(a){
    if(D(a)){  $w.location=a  }; return $w.location
}


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




renderGuestPage =guest=function(){ z('r')

  var container=ContainerDiv(

      HeaderDiv(

            $ul().k("nav nav-pills pull-right")(
                $liA('home').k('active'),
                $liA('About'),
                $liA('Contact')),
            $h1('jason yanofski presents..')

      ),


      JumbotronDiv(
          'a graphics-based real-time social gaming creativity web app','woo hoo!',
          ButtonLarge('log in', LoginForm),
          $span(' '),
          ButtonLarge('sign up', SignUpForm)
      ).cen(),


      ROW(    $h1('fun!'),  $div()(   $h4('graphics'),  $pg('cool cool cool'),  $h4('social'),      $pg('cool cool')  ))  //,  FT('&copy;2013')

    )

    container.pp().drg().c('o').s('a', .9).t(100).l(100)}


renderHomePage   = home=function(){

    WappyNav( $r() ) //load navigator

    $.getJSON('/loggedIn',

        function(username){

            $('#uname').text(username) //.append(data)

            _username = username
        })


        //update user name on UI dash  //qi('uname').jLoad('/lgd')



    if( $w[ app=uC(app) ] ){  $w[app]()  }  // should be passed in?
}



SignUpForm = function(){ var username, password,  submit, form

    username= $div().k('form-group')($label('uname: ','uname'),  TextInput().k('form-control').at({type:'text'})().id('uname')).f(20).nm('u')

    password= $div().k('form-group')( $label('pword: ','pword'), $password().id('pword') ).f(20).nm('p')

    submit= $input().V('sign up').type('submit').f(16)

    form = $form().c('o').P(4)( username, password, submit ).o('s', function( q, e ){  e.e.preventDefault() //pD(e.e)

        $.post('/user', {

                u: username.ch(1).V(),
                p: password.ch(1).V()
            },

            function(username){

            if(username === 'guest'){ qi('mod').m(); pop('try again.. idiot') }

            else { renderHomePage(); pop( 'welcome ' + username + '!' )   }  //WAPNAV() //qi('username').jLoad( '/loggedIn' )//uplog()

        })

    })

    pop( form ).id('mod').drg()

    //return formObject
}

SignUpForm2 = function(){




    var formObject={

        username: $div().k('form-group')($label('uname: ','uname'),  TextInput().k('form-control').at({type:'text'})().id('uname')).f(20).nm('u'),

        password: $div().k('form-group')( $label('pword: ','pword'), $password().id('pword') ).f(20).nm('p'),

        submit:   $input().V('sign up').type('submit').f(16)   ,

        verify: function(){ return {  u: qq( formObject.username.ch(1) ).V(), p: qq( formObject.password.ch(1) ).V()  }}
    }


    formObject.form = $form().c('o').P(4)(  formObject.username,   formObject.password,  formObject.submit  )

    pop(formObject.form).id('mod').drg()



    formObject.form.o('s', function( q, e ){  e.e.preventDefault() //pD(e.e)

        $.post('/user',  formObject.verify(),  function(username){

                if(username === 'guest'){ qi('mod').m(); pop('try again.. idiot') }

                else { renderHomePage(); pop( 'welcome ' + username + '!' )   }  //WAPNAV() //qi('username').jLoad( '/loggedIn' )//uplog()

            })

    })


    //return formObject
}













verifyLogin=function(username){

    if(username==='guest'){

        //close the login form
        qi('mod').m()


        //pop a UI alert message
        pop('try again.. idiot')

    }

    else {


        renderHomePage()

        pop( 'welcome '+ username + '!' )
    }
}


 LoginForm= function(){

    var username, password, f

    pop(

        f = $form().P(4).c('g')(



            username=$div().k('form-group')(

                $label('username: ','username'),

                $textInput().id('username')

                ).f(20).nm('username'),



            password=$div().k('form-group')(

                $label('password: ', 'password'),

                $password().id('password')

            ).f(20).nm('p'),


            $input().V('log in').type('submit').f(16)



        ).o('s',   function(q, e){

                e.e.preventDefault() // pD(e.e)

                if(username){

                    $.post(  '/login',

                    {
                        username: qq( username.ch(1) ).V(),

                        password: qq( password.ch(1) ).V()

                    },   verifyLogin)   }
            })

    ).drg().id('mod')

}





logOut = function(){qJ('/logOut',guest)} // fresh() ? problem?  // function(){guest()})//uplog()//qi('uname').jLoad('/lgd')

getUsers =  function(func){

  $.get('/users', func)

}//usrs =






//Us =function(f){  qJ('/gU',  f||function(u){_e(u,function(u){card(u)})})}  //'with users' [show their cards]

getBuds = buds=function(func){ qG('/buds', func) }

removeUser = rmU=function(a,b){

    if(S(a)){rmU({u:a},b)};qP('/rmU',a,b)}


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

            $$:logOut

        }).$()

}//depr?


lgrBarX=function(){
    di('lgr').pp().c('b').o({
        $: function(d){  qi('log').jLoad('/loggedIn') },
        $$:logOut
    })(sp('log: '),log())}//depr?










