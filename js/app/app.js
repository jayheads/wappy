
appInit = function(){

    $.getJSON('/loggedIn',

        function(username){
            $l('username: '+username)
            if(username=='guest' || !username){ renderGuestPage(); return }

        _username   =usr= username

        socket.emit('id', username)

        socket.emit( 'joinRoom',  _username )

         $.get('/getMug', function(m){ _userMug = mug = m  } )

        renderHomePage()

    })
}

$( appInit )



$password=function(){return $input().type('password').class('form-control')}//dep

lc=function(a){if(D(a)){  $w.location=a  }; return $w.location}//dep

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


renderGuestPage = function(){z('r')
  var container= $.containerDiv().A(
      $.headerDiv().A(
          $.ul().K( "nav nav-pills pull-right" ).A(
              $.lIA('home').K('active'),
              $.lIA('About'),
              $.lIA('Contact')),
          $.h1( 'jason yanofski presents..' )),
      $.Jumbo(
          'a graphics-based real-time social gaming creativity web app','woo hoo!').A(
          $.buttonL('log in', LoginForm ).C('y','b'),
          $.span(' '),
          $.buttonL('sign up', SignUpForm).C('b','y')),
      $.row(
          $.h1('fun!'),
          $.div().A(
              $.h4('graphics'),
              $.p('cool cool cool'),
              $.h4('social'),
              $.p('cool cool'))))
    container.drag().C('o').opacity(.9).top(100).left(100)}


Y={}

Y.run=function(app){

    if( $w[ app = uC(app) ] ){  $w[app](); return true  }

    return false}


renderHomePage =  home= function(){

    WappyNav( $r() ) //load navigator
    Y.run( wappyApp )
    $.getJSON('/loggedIn', function(username){$('#uname').text( _username  = username)})

}



SignUpFormX = function(){ var username, password,  submit, form

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

SignUpForm = function(){

    var username= $.div().K('form-group').A(
            $.label('username: ','username'),
            $.input().K('form-control').id('uname')).fontSize(20).name('username'),

        password= $.div().K('form-group').A(
            $.label('password: ','password'),
            $.password().id('password')).fontSize(20).name('password'),

        submit= $.button('sign up').type('submit').fontSize(16),

        verify= function(){
            return {
                u:  username.find('input').val(),
                p:  password.find('input').val()}
        },

    form = $.form().C('o').pad(4).A(   username, password, submit  )
    v=verify

    u= username

    $.pop(   form).id('mod').drag()


    form.submit(function(e){

        e.preventDefault()

        $.post('/user', {
                u:  username.find('input').val(),
                p:  password.find('input').val()},

            function(username){

                if(username==='guest'){ $('#mod').modal(); $.pop('try again.. idiot') }

                else { renderHomePage();  $.pop( 'welcome ' + username + '!' )   }
  })

    })

    //return formObject
}



LoginForm=function(){

    var verifyLogin=function(username){
         if(username==='guest'){ $('#mod' ).modal('toggle'); pop('try again.. idiot')}
         else {renderHomePage(); pop( 'welcome '+ username + '!' )}}


     var form=$.form().C('g').pad(4).A(

            $.formGroupDiv().A(

                $.label('username: ','username'),
                $.textInput('username')  ),

         $.formGroupDiv().A(
             $.label('password: ', 'password'),
             $.passwordInput('password')),

         $.submitInput( 'log in' ))

     form.submit(function(e){
         e.preventDefault()
         $.post('/login', $l(form.serializeJSON()),
             verifyLogin) })

    $.pop( form ).drag().id('mod')

}

logOut = function(){

    $.getJSON('/logOut', renderGuestPage())

} // fresh() ? problem?  // function(){guest()})//uplog()//qi('uname').jLoad('/lgd')




getUsers =  function(func){ $.get('/users', func) }//usrs =



//Us =function(f){  qJ('/gU',  f||function(u){_e(u,function(u){card(u)})})}  //'with users' [show their cards]

getBuds = buds=function(func){$.get('/buds', func) }


removeUser = rmU=function(a,b){

    if(S(a)){rmU({u:a},b)}
    $.post('/rmU',a,b)

}


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



jQuery.fn.centerOnWindow = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px" )
    return this}

$.fn.xCenter=function(){

   return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}


MOBILECENTER=function(){


    z()

    $('body').C('u')


    d = $.div('o', 400, 200).A().drag().pad( 20 ).A(

        dd = $.div( 'u',  200 , 100 ).xCenter(),

        $.div( 'g',  100 , 80).xCenter( )

    ).P('r')


}
MOBILETIPS=function(){

    z()

    $('body').C('u')

    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()


    d = $.div('o', 400, 200).A().drag().pad( 20 )

    d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

    d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

    d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

    d1 = $.div('p', 400, 200).A().drag().pad( 20 )

    d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

    d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

    d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

    d2 = $.div('g', 400, 200).A().drag().pad( 20 )

    d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


}





