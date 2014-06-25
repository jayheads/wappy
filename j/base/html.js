 bd=function(){return qq($('body'))}

did=function(a){return document.getElementById(a||'canvas')}
xid=function(a){return did(a).getContext("2d")}
dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}

$d=function(a){return $(document)}

$b=function $b(a,b){var B=qq($('body'))

    if(U(a)){return B}
    if(E(a)){B(a);return a}
    return S(a)? B.c(a,b)
        :O(a)? B.s(a)
        :B}


co=function co(a,b){
    return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}



_o=function(a,b,c){
    if(A(a)){return _e(a,"cL(E(v).outerHTML)")}
    return U(a)?
        qq('op')
        :E(a)? cL(E(a).outerHTML)
        :a.open(b,c)
}




_q=function(a){return $('<ol>') }


rq=function(s){return s+' &raquo'}
dgM=function(a){return a.at({dg:'modal'})}
 tN=function(a){return a.tagName}



thead=function(){return _a( qq($('<thead>')),arguments)}
tbody=function(){return _a( qq($('<tbody>')),arguments)}


_B=function(){


    var g=G(arguments),
        s=qq($('<strong>'))


    _e(g,function(g){
        s(g)
    })


return s}

ifra=function(){return qq('I')}

_y=function(a){return qq('sl')}

hr=function(c,h,w){var e=qq('hr');
    if(N(c)){return hr('z',c,h)}
    e.h(h||2);e.c(c||'z');
    if(w){e.w(w)};return e}



h1=function(){
    var g=G(arguments),
        h=qq($('<h1>'))

    _a(h,g)

    return h}
h2=function(){var g=G(arguments),h= qq($('<h2>'));_a(h,g);return h}
h3=function(){var g=G(arguments),h= qq($('<h3>'));_a(h,g);return h}
h4=function(){var g=G(arguments),h= qq($('<h4>'));_a(h,g);return h}
h5=function(){var g=G(arguments),h= qq($('<h5>'));_a(h,g);return h}
h6=function(){var g=G(arguments),h= qq($('<h6>'));_a(h,g);return h}

br=function(a){var s=sp();_t(a||1,function(){s($('<br>'))});return s}

pg=function(a){var g=G(arguments),p=_p()
    _e(g,function(v){if(A(v)){p.k(v[0])} else{ if(S(v)){v=sp(v)};p(v)}});return p}




sp=function(){

    var g=G(arguments),
        s=qq('s'),
        str=''

    _e(g,function(v){
        if(A(v)){s.k(v[0])}
        else if(S(v)){str+=v}
        else {s.a(v)}})

    if(str){s.T(str)}

    return s}


sc=function(a,b){return qq($('<section>')).id(a).s(b)}








//header
hd=function(n,v){return ip('h',v).nm(n)}

//footer
ft=function(){
    return qq('F')}

//well
well=function(a){
    return row().k('well')(a)}



li=function(){var g=G(arguments),
    l=qq('li')

    //klass or add
    _e(g,function(v){if(A(v)){l.k(v[0])}else{l(v)}})
    if(g.p){l.k('A')}//active
    if(g.n){l.k('dd')}//dropdown
    return l}

lk=function(a,f){
    var g=G(arguments),
        a=g[0],f=g[1],
        l=qq('a').id(a)(a)

    if(F(f)){l.o(f)}else{l.hr(f||'#')}
    if(g.n){l.dd()}
    if(g.p){l=li(l)}
    if(g.m){l=li(l).k('A')}
    return l}

ul=function(){
    var tLi=function(a){
        var iLi=function(a){return _h('HTMLLIElement', E(a))}
        return iLi(a)?a:li(a)}

    var g=G(arguments),
        e=qq('ul')
    _e(g,function(v){if(A(v)){e.k(v[0])}
        else{e(tLi(v))}})
    if(g.n){e.k('ddm')}//dropdown menu
    if(g.p){e.k('n nbn')}//navbar nav
    return e}

lik=function(a,b){//dep by li (+/*)
    var g=G(arguments),
        a=g[0], b=g[1],l=lk(a,b,'+')
    if(g.p){l.k('A')}
    return l}

ol=function(o,b){var g=G(arguments),
    e=qq('o')
    _e(g,function(v){
        if(A(v)){
            e.k(v[0])}
        else {e(v)}})
    return e}

td=function(){return qq('td')}

 tr=function(){return qq('tr')}

bo=function(a,k){
    var g=G(arguments),
        h=g.p?'&nbsp;'+a:a;
    return qq('B').H(h).k(k)}


ifra=function(){z()
    d=dva()
    ifr=qq($('<iframe>'))
    ifr.w(1000).h(1000).c('b')
    ifr.q[0].src='http://www.playboy.com'
    d(ifr).P(30)}


