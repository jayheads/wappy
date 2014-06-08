//random helpers

iV=function(){
    return $('input').val()}

pD=function(e){
    return e.preventDefault(true)}




//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
add=function rc(M,a){var g=G(arguments)

    if(g.n){M.E()}
    if(A(a)){
        _e(a,function(v){rc( O(v)?v.n :v) })}

    else{_e(g,function(v){M(br(),msg(v))})}}

//runs a fn on the qq of all obs of certain class
all=function(s,f){_e($('.'+s),function(m){f(qq(m))})}


//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
gMsgs=function rc(u,M){
    qJ(u,
        function(d){ add(M,d)
        all('msg', function(m){
            m.$$(pof('/nMsg',{n:m.T()},rc))})})}


// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
dV=function(t,c){
    var d={}
    if(U(c)){return dV(null,t)}
    d.c=c.V()
    if(t){d.t=t.V()}
    return d}


//just tx?
ip0=function(a,u,o,f){
    u=u||'/';

    if(F(o)){f=o;o={}}
    f=f||home

    var s=_s(), c=tx(),
        b=bt(a,function(){
            qP(u, D(dV(c),o) ,f)
        })
    return s(c,b)}


//just ta
ip1=function(a,u,f){u=u||'/';f=f||home
    var s=_s(),


        c=ta(),
        b=bt(a,function(){qP(u,dV(c),f)})
    return s(c,b)}


//tx and ta
ip2=function(a,u,f){

    u=u||'/'; f=f||home

    var s=_s(), t=tx(), c=ta(), b=bt(a,function(){

        qP(u, dV(t,c), f)})

    return s(t,c,b)}

//get a [tx, bt], where bt posts tx-val to url and runs ack-fn
//get a dva with [h1, taP, hr]
inpt=function(t,a,u,f){
    var g=G(arguments),
        t=g[0], a=g[1],u=g[2], f=g[3]//ttl, butName, url, fn



    return dva(4)(
        h1(t),
        g.p?ip2(a,u,f)
            :g.n?ip0(a,u,f)
            :ip1(a,u,f),hr())}

//get a dv with [h1, taP, hr]
ipt=function(t,a,u,o,f){
    var g=G(arguments),

        t=g[0],
        a=g[1],
        u=g[2],
        o=g[3],
        f=g[4]     //ttl, butName, url, fn

    if(F(o)){f=o;o={}}

    return dv(4).auto()(
        h1(t),
        g.p?ip2(a,u,f): g.n?ip0(a,u,o,f):  ip1(a,u,f),
        hr())}

joinSelf=function(){ke('j',usr)}


iMsg=function(t,m){ke('iMsg',{m:m,t:t,f:usr})}

imBox=function(f){
    var w=win('instant message from '+f) ,
        t=tx(), b=bt('reply',  function(){iMsg(f,t.V());w(h2(t.V())) })
    return w(t,b)}



msgI=function(m){
    var t=m.t,
        f=m.f,
        m=m.m,
        w=$w['im_'+f]=$w['im_'+f]||imBox(f);
    w(h1(m))}






win=function(a,c,i){//title/ob?,color,id
    var z,w,t,bp,bm,bx

    bp=btr('>',function(){w.Z(4);bm.sh();bp.hd()})
    bm=btr('<',function(){
        w.auto();bp.sh();bm.hd()}).hd()
    bx=btl('X',function(){w.X()})
    w=dva(z||4).s({C:'b',a:.9,of:'a'})
        .P(10).B(4).bs('-').bc('o').auto()
        (bp,bm.hd(),bx).drg().a()

    if(S(a)){t=a}
    if(N(a)){z=a}
    if(O(a)){w(a)}
    if(t){
        w(
        pg(t).f(24).cen().c('X')
            .s({ml:10,mr:10,pr:30,pl:30}),
        hr().c(c||'z').f(10))
    }

    if(i){w.id(i)}
    return w
}

priv=function(a){
    cbox(a);
    ke('j',a)

}

cbox=function(t,c,i){

    t=t||'chatbox';c=c||'b';i=i||'cbo';
    var chI=tx(),

        chS=bt('send',function(){
            ke('chatx',{t:t,n:usr,m:chI.V()})}),

        pcS=bt('pic',function(){pop('pic select')}),
        ppS=bt('pop',function(){ke('p',chI.V(),t)}),


        chM=di('cbi').s({of:'a',C:'x'}),

        usrB=_d()

        w=win('chatroom: '+t).id(i).s({
            nw:600,nh:400,C:c})(

            row(col(8,

            chM,
            chI,
            chS, ppS,
            pcS),
                col(4,h5('users:'),usrB)))



    return $w['chat_'+t]={

        u:function(u){
            if(A(u)){


                _e(u, function(u){

                    usrB(

                        h5(u).o(function(){

                                qP('/mug', {u:u},

                                function(m){var s,d


                            win(
                                _d()(
                                    br(),hr(),
                                    h3('User: '+u)
                                     ,  br(),
                                     c3(m),
                                    s=h1(),
                                    d=_d(),
                                    ms=ta().c('w','z'),

                                    btMail(ms,u),

                                    btChat(u,ms),



                                    bt('full',function(){
                                        $l('/wap/profiles/'+ u)
                                        window.location='/wap/profiles/'+ u
                                    })

                                ))
                                    stat(u,d)

                                    prof(u,d) }

                            ) }


                        ))
                })}

        else{usrB(h5('no users'))}},

        w:w,
        t:ff('w.tg()'),
        b:function(m){chM(h5(m).s({c:'w'}))},
        s:function(m){chM(h5(m).s({c:'z'}))}}
}





pop=function(a,o){
    if(S(o)){return pop(o,{t:a})}

    _pop=function(){

        var m=MCT()
        _e(arguments, function(a){S(a)? m(_d()(a)): m(a) })
        return MFADE(MDIALOG(m))}


    var g=G(arguments),mm,
        a=a||'pop pop',
        m=_pop( mm=MBODY(h2(a)) )

    o=ob(o)
    if(!o.h){m.m()}
    if(o.t){mm.a(
        hr().c(o.hc||'z').s({h:2}),
        h1(o.t).s('c',o.tc||'z').q,'-')}

    if(o.b){mm.a(bt(o.b))}
    if(o.d){m.drg()}
    if(o.a){m.s({a:o.a})}

    if(o.c){
        if(o.c=='*'){I(function(){mm.c()},100)}
        else {m.s({c:o.c})}}

    if(o.C){mm.s({C:o.C})}
    if(o.bc){m.s({C:o.bc})}
    return m}


dang=function(t,e){//random cool text input/alert

    var g=G(arguments),f

    if(g.n){

        f=_s().xb()(

            h2(g.f).k('a ad') //alert-danger

        ).pp()} else {

        f=form()(
            dv(['b'],t).f(30),
            tx(),
            sp(' ')

        ).f(20).k('tc').c('o')}

    if(F(e)){f.o('s',e)}

    if(g.p){f.drg().s({nw:200})}

    return f}


