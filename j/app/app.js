lc=function(a){if(D(a)){$w.location=a}; return $w.location}

pof=function(a,b,c){return function(){qP(a,b,c)}} //an api shortcut

qPd=function(u,o){qP(u,o,function(da){d=da})  }// to test qP
qJ=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.getJSON(u,d,g.P?f:function(ss){
        _e(ss,function(s){f(s,ss)})})}
qP=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.post(u,d,g.P?f:function(ss){
        _e(ss,function(s){f(s,ss)})})}
qG=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.get(u,d,g.P?f:function(ss){
        _e(ss,function(s){f(s,ss)})})}

load=function(a){lc('/wap/'+a)}

guest=function(){z('r')
    CT(

        HD(
            ul().k('n np pr')(
                lik('home','+'),
                lik('About'),
                lik('Contact')),
            h1('jason yanofski presents..')),

        JT(
            'a graphics-based real-time social gaming creativity web app','hack-and-tell!',bt('log in',lI,'+'),sp(' '),
            bt('sign up',sU,'+'),
            '+'),

        ROW(
            h1('fun!'),
            _d()(h4('graphics'),
                pg('cool cool cool'),
                h4('social'),
                pg('cool cool'))),

        FT('&copy;2013')
    ).pp().drg().c('o').s('a',.9).t(100).l(100)}
home=function(){
    WAPNAV('o')
    qi('uname').T(usr)  //qi('uname').jLoad('/lgd')
    if($w[app=uC(app)]){$w[app]()}}
sU=function(){
   var nU=function(a,b,c){//new user
        if(S(a)){return nU({u:a,p:b},c)}
        qP('/nU',a,b)}


    var f={

        u:fg(lb('uname: ','uname'), fc().id('uname'))
            .f(20).nm('u'),
        p:fg(lb('pword: ','pword'), fc('p').id('pword'))
            .f(20).nm('p'),
        s: sm('sign up!').f(16),  //~m


        v:function(){
            return {u:qq(f.u.ch(1)).V(), p:qq(f.p.ch(1)).V()}}}


    f.f=_f().P(4).c('o')(
        f.u,
        f.p,
        f.s)

    pop(f.f).id('mod').drg()

    f.f.o('s', function(q,e){pD(e.e)

        qP('/nU', f.v(),

            function(d){

                if(d==='guest'){
                    qi('mod').m()
                    pop('try again.. idiot')}

                else {

                    home()

                    WAPNAV()

                    pop('welcome '+d+'!')
                    qi('uname').jLoad('/lgd')//uplog()


                }})})

    return f}
lI=function(){var u,p,s,f,

        verifyLogin=function(d){
            if(d==='guest'){qi('mod').m();pop('try again.. idiot')}
            else{home();pop('welcome '+d+'!')}}

    pop(

        f=_f().P(4).c('g')(

                u=fg(lb('uname: ','uname'),fc().id('uname')).f(20).nm('u'),
                p=fg(lb('pword: ','pword'),fc('p').id('pword')).f(20).nm('p'),
                s=sm('log in!').f(16))

            .o('s',function(q,e){
                pD(e.e)
                if(u){qP(
                    '/li',
                    {u:qq(u.ch(1)).V(),p:qq(p.ch(1)).V()},
                    verifyLogin
                )}})


    ).drg().id('mod')

    return {}}
lO=function(){qJ('/lo',guest)} // fresh() ? problem?  // function(){guest()})//uplog()//qi('uname').jLoad('/lgd')

usrs=function(f){qG('/users',f)}
Us=function(f){

    qJ('/gU',

        f||function(u){_e(u,function(u){card(u)})})}  //'with users' [show their cards]
buds=function(f){qG('/buds',f)}

rmU=function(a,b){if(S(a)){rmU({u:a},b)};qP('/rmU',a,b)}

fresh=function(){z();WAPNAV()}



$(function(){
    qJ('/lgd',
        function(d){
            usr=d
            if(d=='guest'||!d){guest()}
            else{
                ke('id', usr)
                joinSelf()
                wM(function(m){mug=m})
                home()
            }})})














// OLD

//qGetLoadFunc=function(a,b){return function(){qJ(a,  function(d){  qi(b)(d) })}} //no idea who is using this
//make a function appends result of jGET-url-a to EL-id=b
//its like load?  it says to id-get
//something(b), and put some server data(a) in it
//lgdIntoUname=uplog=   qGetLoadFunc('/lgd','uname') // qi('uname').jLoad('/lgd')

//lgd=function(f){qJ('/lgd',f||pop)}



lgr=function(){

    var log=function(c){
        return sp('?').id('log')
            .c(c||'g')
            .M(10).P(10)}

    dva(3).id('lgr').c('b').pp()(

            sp('log: '),

            log()

        ).o({

            $:
                function(d){  qi('log').jLoad('/lgd') },

            $$:lO

        }).$()

}//depr?

lgrBar=function(){
    di('lgr').pp().c('b').o({
        $: function(d){  qi('log').jLoad('/lgd') },
        $$:lO
    })(sp('log: '),log())}//depr?





mDiv=function(){z()  /////////////////////

    dv()(

        h1('hi'),
        h2('yo')

    ).a()


}







