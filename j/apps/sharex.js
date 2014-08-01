
johnX=function(){

    var o={}

    o.d=3

    o.a=function(){o.d++}

    o.g=function(){return o.d}

    return o}


fredX=function(){
    var o = john();

    o.m =function(){o.d--}
    return o
}



REQUESTSX=function(){var c=CT(),d=dv('y',800,600)
    c(d(h1('Buddy requests'),br(),
        MB=_d().w(600).h(500)( )).$$(function(){d.drg()}))
    qG('/gRq',function(msgs){_e(msgs,function(msg){MB(_d()(
        h6('from '+msg.fr+' on '+msg.dt),
        h5(msg.m),
        bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})}
USERSX=function(){

    CT(h1('Users: '),br(),rr=row())
    usrs(function(u){




        _e(u,function(u){  qP('/dud',{d:u.m}, function(m){
            rr(tn(pg(u.u),br(),m).o(function(){
                win(_d()(br(),hr(),h3('User: '+ u.u), br(),
                    xc().w(300).h(300).f(m), s=h1(),  d=_d(),
                    ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
                    bt('chat',function(){iMsg(u.u,ms.V())}),
                    bt('buddy-request',function(){qP('/sRq',{to:u.u})})))

                prof(u.u, d)

                wUSt(u.u,function(s){
                    d(h1('STATUS: '+s))
                    d(bt('comment',function(){iMsg(u.u,ms.V())}),
                        bt('see feed',function(){iMsg( u.u, ms.V())}),
                        bt('see blog',function(){BLOG(u.u)}),
                        bt('challenge',function(){qP('/sRq',{to:u.u})}))})}))})})})



    tab1=['users',function(){


    }]

    tab2=['a',function(){}]
    tab3=['a',function(){}]
    tab4=['a',function(){}]

    s2(t=tabs(tab1,tab2,tab3,tab4))
    t.load()

}





BLOGX=function(u){

    z()
    WAPNAV()

    format()

    s1(h1('user '+u+' blog'))


    qG('/pstu',{u:u}, function(i){blp(i, s2, '+')},'+')}

