
bt=function(t,f,C,c){
    var g=G(arguments),
        t=g[0],f=g[1],C=g[2],c=g[3],
        t=t||'ok',
        k=g.p?'bl':'bm',
        C=C||'b',
        c=c||'y'

    b=_n().ty('b').k('b').k(k).c(C,c)

    b(t)
    if(f){b.o(f)}
    if(g.n){b.dd()}//dropdown
    return b}








bti=function(a,b,s){return bt(a).id(b).s(s)}





//floating div of buttons
bts=function(a,b){
    var g=G(arguments),d=dva(2)

    if(g.p){return bts(['start',a],['stop',b]).auto()}
    _e(g,function(v){v=A(v)?v:[v]
        d(bt(v[0],v[1]).k(g.p?('fc'):'').M(4))})
    return d}




//button group, and button-group-vertical(+)
btg=function(a){
    var g=G(arguments),
        a=g[0],
        b=dk(g.p?'bgv':'bg')

    if(g.n){return bt('-')(
        a||'menu'+' ',car())}

    _e(g,function(v){
        b(S(v)?bt(v):A(v)?bt(v[0],v[1]):v)})
    return b}



//nice button dropdown menu.. gotta fix
btd=function(a){var g=G(arguments),a=g[0],

    b=btg()(btg(a,'-')),

    u=ul('-')

    _e(g.r,function(v){
        if(S(v)){v=lik(v)}
        u(v)});return b(u)}




//bt: green/white, block-float left
btr=function(t,f,C,c){return bt(t,f,C,c)
    .s({C:'g',c:'w',y:'b',fl:'r'})}





//bt: green/white, block -float left
btl=function(t,f,C,c){return bt(t,f,C,c)
    .s({C:'g',c:'w',y:'b',fl:'l'})}


sm=function(a){
    var g=G(arguments)
    if(g.p){return _n().ty('s').k('b bdf').T(ok(a)) }
    return ip('s').k('s').v(ok(a))}


fSm=function(){return qq($('.submit'))}



VERT=function(){z()

    row2( im('me') ,im('me') ) .a()




}