lc=function(a){if(D(a)){$w.location=a}
        return $w.location}




load=function(app){
   lc('/wap/'+app)}



ldr=function(a){return function(){load(a)}}


sv=function(x,f){

    qP('/nImg',

        {d:xx( C(x) ).u()},

        f)}


lgd=function(f){qJ('/lgd',f||pop)};   $(function(){lgd(onLoad)})



lgr=function(){

    dva(3).id('lgr').c('b').pp()(  sp('log: '),log()  )
        .o({

            $:qji('/lgd','log'),
            $$:lO

        }).$()

}



lgrBar=function(){
    di('lgr').pp().c('b').o({
        $:qji('/lgd', 'log'),
        $$:lO})(sp('log: '),log())
}



   fresh=function(){

       z()
       WAPNAV()
   }





//make a function appends result of jGET-url-a to EL-id=b
//its like load?  it says to id-get
//something(b), and put some server data(a) in it
qGetLoadFunc=qji=function(a,b){

    return function(){

        qJ(a,
            function(d){
            qi(b)(d)
    })}}


uplog=qGetLoadFunc('/lgd','uname')



onLoad=function(d){
    //uC,usr,guest,home

    $l(
        usr=d)

    $l(
        app=uC(app))

    if(usr=='guest'||!usr){guest()} else{home()}

}











home=function(){//WAPNAV,uplog,app,joinSelf
    WAPNAV('o')
    uplog()
    if($w[app]){$w[app]()}
    ke('id',usr)
    joinSelf()
    wM(function(m){mug=m})}

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

            bt('sign up', sU, '+'),

            '+'),





        ROW(
            h1('fun!'),
            _d()(h4('graphics'),
                pg('cool cool cool'),
                h4('social'),
                pg('cool cool'))),


        FT(
            '&copy;2013')


    ).pp().drg().c('o').s('a',.9).t(100).l(100)}


uname=function(){return fg(lb('uname: ','uname'),fc().id('uname'))}

pword=function(){return fg(lb('pword: ','pword'),fc('p').id('pword'))}


lI=function(){

    var f={

        u:uname().f(20).nm('u'),
        p:pword().f(20).nm('p'),//
        s:sm('log in!').f(16),

        v:function(){

            return {

                u:qq(f.u.ch(1)).V(),p:qq(f.p.ch(1)).V()

            }}}


    f.f = _f().P(4).c('g')(f.u,f.p,f.s)

    pop(f.f).id('mod').drg()

    f.f.o('s',

        function(q,e){
            var v=f.v()
            pD(e.e)

        if(v.u){



                vv=v




            qP('/li',v,

                function(d){

                if(d==='guest'){   qi('mod').m();    pop('try again.. idiot')   }
                else{  home();  pop('welcome '+d+'!')  }

            })}

    }) //~f
    return f}






sU=function(){

    var f={

        u:uname().f(20).nm('u'),
        p:pword().f(20).nm('p'),

        s: sm('sign up!').f(16),  //~m

        v:function(){

            return {
            u:qq(f.u.ch(1)).V(),
            p:qq(f.p.ch(1)).V()}

        }


    }






    f.f=_f().P(4).c('o')(f.u,f.p,f.s) //~c

    pop(f.f).id('mod').drg() //POP

    f.f.o('s',  function(q,e){

        pD(e.e)


        qP('/nU',
            f.v(),

            function(d){

                if(d==='guest'){
                    qi('mod').m()
                    pop('try again.. idiot')
                }

                else {

                    home()

                    WAPNAV()

                    pop('welcome '+d+'!')

                    uplog()

                }})})   //~f

    return f}
















log=function(c){
    return sp('?').id('log')
        .c(c||'g')
        .M(10).P(10)}



lO=function(){qJ('/lo',function(){
    uplog();guest()})
}



nU=function(a,b,c){//new user
    if(S(a)){return nU({u:a,p:b},c)}
    qP('/nU',a,b)}




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






//api shortcuts
pof=function(a,b,c){
    return function(){
        qP(a,b,c)}}



usrs=function(f){qG('/users',f)}
buds=function(f){qG('/buds',f )}




rmU=function(a,b){
    if(S(a)){rmU({u:a},b)}
    qP('/rmU',a,b)
}





Us=function(f){

    qJ('/gU',

        f||function(u){

        _e(u,function(u){
            card(u)})})}  //'with users' [show their cards]






// to test qP
qPd=function(u,o){  qP(u,o,function(da){d=da})  }










mDiv=function(){z()  /////////////////////

    dv()(

        h1('hi'),
        h2('yo')

    ).a()


}







