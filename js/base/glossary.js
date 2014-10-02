$J=JSON
$A=Array
$B=Boolean
$N=Number
$O=Object
$F=Function
$S=String
$w=window
$$w=$($w)
s$=S




A=function(a,b,c){
    return U(b)?_.isArray(a)
        :$(a).append(b,c)//
}

AA=function(a){return A(a)&&A(a[0])}

B=function(a){return _.isBoolean(a)}


_a=function(a,b,c,d,e){//U(a)? qq('a')
    return  F(a)? a.apply(c||a,b)
        :S(a)? a.split(b||'/').pop()// after('/')


        :0//:a.animate(b,c,d,e)//
}


_b=function(a,b,c){
    return  U(a)? qq($('body'))//--
        :F(a)?_.bind(a,b,c)//
        :S(a)? a.split(b||'.')[0] //before('.')
        :_.bindAll(a,b,c)//
}


C=function c(a){
    if(O(a=E(a)||a)){
        return a.canvas?a.canvas
            :_h('Canvas',_g(a))?_g(a):0}}


_C=function(a,b){
    return U(a)? _c()[0]
        :A(a)? _.compact(a)//dep
        :a.connect(b)}




_c=function(a,b){

    if(N(a)){
        clearInterval(a)}

     return U(a)? qq('c').k('can')
         .at({w:100,h:100})
        :b?(A(a)?a:[a]).concat(b)
        :O(a)? a.children()
        :0}









//cL=function(a){console.log(a);return a}





D=function(a,b,c){
    return U(b)? !U(a)
        :_a(_.defaults,arguments)}




//logic
df=function(a,b){a=ob(a)
    return G(arguments).p? D(a, oO(b||''+'D'))
        :D(a)?a :b}

Du=function(a){return _h(a,'data:')}









E=function E(a,b,c){
    if(S(b)){return  s$(a).endsWith(b)   }
    if(F(b)){return _.every(a,b,c) }
    if(O(a)){

        a=O(a.e)? a.e
            :O(a.c)? a.c
            :a

        a=$(a)[0]
        if (_.isElement(a)){return a}}}






_e=function e(p,q,w){
    var eW=function (a,b){return l$(a,_z(b))==b}
    if(U(p)){return qq('li')}
    if(U(q)){return p.empty()}
    if(F(p)){p=O(p)}
    return (S(p) && S(q))? eW(p,q)
    :S(q)? e(p,function(v,k){eval(q)}, w)
    :_.each(p,q,w)}







_F=function(a){if (A(a)){return _.flatten(a)}}


F=function f(a,b,c){
    if(D(b)){return _.filter(a,b,c)}
    if(_.isFunction(a)){return a.prototype||true}}



_f=function(a, b, c){

    return U(a)? qq('f') // need to deprecate this

        :F(b)? _.find(a,b,c)

            :_.first(a,b)

}










_g=function(a){
    if(A(a)){a=_f(a)};
    return F(a)?a

        : O(a)?(a.target? a.target: Q(a)[0])

        :a

}



G=function(a){
    if(!_.isArguments(a)){return}
        var p, n, m,d
        a=_.toArray(a)
        if(_l(a)==='+'){p=a.pop()}
        if(_l(a)==='-'){n=a.pop()}
        if(_l(a)==='*'){m=a.pop()}
        if(_l(a)==='/'){d=a.pop()}

    return D(a,{

        z: a.length,
        f:_f(a),
        l:_l(a),
        r:_r(a),
        i:_i(a),
        p:p,
        P:!p,
        m:m,
        M:!m,
        d:d,
        D:!d,
        n:n,
        N:!n

    })}








_h=function _h(a,b,c){
    if(O(b)){return _h(_S(b),a)}
    if(S(a)){return s$(a).contains(b,c)}
    if(O(a)){
        if(U(b)){
            return a.height?(F(a.height)?a.height():a.height):F(a.h)?a.h():N(a.h)?a.h:false}
        if(N(b)){
            if(F(a.height)){a.height(b);return a}
            if(N(a.height)){a.height=b;return a}
            if(F(a.h)){a.h(b);return a}
            if(N(a.h)){a.h=b;return a}}
        return A(a)? _.contains(a,b): _.has(a,b)}
    if(U(a)){

        return qq($('html'))

    }}




H=function(a){
    var oH=function(a){
    if(O(a=a||$$w)){return Q(a).outerHeight()}}
    a=a||$$w;return N(a)? W()/a:oH(Q(a))}


_I=function(a,b){return U(a)?new Image()
    :U(b)?_.invert(a)
    :_a(_.intersection,arguments)}



I=function(a,b){if(N(b)){return setInterval(_v(a),b)}
    if(_h('Image',E(a))){return E(a)}}




tUd=function(){var g=G(arguments)
    _e(g,function(g){g=undefined})}



_i=function(a,b){
    return U(a)?qq('i'):
    A(a)?_.initial(a,b):pI(a)
}



is=function(a){return function(b){return b===a}}

io$=function f(a,b,c){return a.indexOf(b,(c<0?c+_z(a):c))}





J=function(a,b,c){
    if(S(a)){return $.getJSON(a,b,c)};
    return $J.stringify(a)}


_j=function(a,b){return(a||[]).join(b||' ')}



K=function(a,b,c){return N(a)? I(b, a*1000)
    : N(b)? I(a, b): _.keys(a)}


_k=function(a){return O(a) && a.complete}

L=function(a,b){var g=G(arguments)
    return S(b)? (g.N?  s$(a).ensureLeft(b).s
        :s$(a).chompLeft(b).s):0}

$l=function(a){var g=G(arguments)
    _e(g,function(a){

        console.log(
            Q(a)?_o(Q(a))
            :F(a)?_S(a)
            :O(a)?J(a)
            :a
        )
    })

    return a}


ll=function(a,b){
    if(S(b)){console.log(a+': '+b)}
    else {
        $l(a+' ->')
        $l(b)}
    return b}

lC=function(a){return S(a)? a.toLowerCase()
    :A(a)? _m(a,function(a){return lC(a)}):a }
Lc=function(a){if(S(a)){return s$(a).isLower()}}




_l=function(a,b){

    if(F(b)){$(a).load(b);return a}
    return _.last(a,b)}


_m=function(a,b,c){return F(b)? _.map(a,b,c)
        :A(a)?_.min(a):function(z){return z*a}}


N=_.isNumber



Nn=_.isNan

M=nN=function(w){return $B($N(w))}

O=function(a,b){if(_.isUndefined(b)){
    return _.isObject(a)}
    if(O(a)){return _a(_.extend, arguments)}}


ob=function(o){
    var g=G(arguments);
    return !O(o)? {}
        :g.p? o.clone()
        :o}






oOo=function oOo(a,b){
    if(U(b)){return _I(lC(V(oO(a))))}
    if(oOo(a)[lC(b)]){return b}}
Oo=_.defaults(function o(a,b){
    if(D(b)){return o[a] && ( o[a][b] || oOo(a,b))}},ooo)
oO=_.defaults(function oO(a,b,c){
    return U(a)?  _.keys(f)
        :'*'==b?  $r(a)
        :D(c)  ?    oO(oO(c,a), b)
        :U(b)  ?    D(function(x,y){return oO(a,x,y)},oO[a]||{})
        :(oO[a]&&oO[a][b])?
        oO[a][b]
        :b},ooo)
oC=function(c){return oO('c',c)}
oK=function(a){return oO('k',a)}
oT=function(a){return oO('t',a)}
oE=function(a){return oO('e',a)}
oI=function(a){return oO('i',a)}
oS=function(a){return oO('s',a)}
$o=function o(a,b,c){return U(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
oQ=function(f,m){$(function(){Q(m||mf,f)})}


ok=function(a){return a||'ok'}



_P=function(a,b,c){
    return  S(a)?$J.parse(a,b)
        :$(a).prepend(b,c)}



P=function(a){
    return O(a)&&!F(a)&&!A(a)&&!(E(a))}


_p=function(a,b,c){

    if(U(a)){return qq('p')}

    return(c===0)?function(c,d){return a(c,b,d)}
        :F(a)?_a(_.partial,arguments)
        :O(a)?(G(arguments).N?$(a).parents(f)
        :$(a).parent(f))
        :S(b)?(S(a,b)?a:b+a)
        :nN(a)?a+'px'
        :a}





Q=function Q(a){if(O(a)){if(s$(_S(a)).contains('Window')||a[0]
    && s$(_S(a[0])).contains('Window')){return $$w}
        return a.name==='q'? Q(a.q)
        :E(a)? $(E(a))
        :0}}




R=function(a,b){

    var g=G(arguments)

    return( S(a) &&S (b) )? ( g.N? s$(a).ensureRight(b).s

        : s$(a).chompRight(b).s    )

        : N(b)? _.range(a, b)

        : N(a)? (g.P? _.range(a):  _.range(1,(a||10)+1)   )

        : new XMLHttpRequest()

}

chompRight=function(a,b){return s$(a).chompRight(b).s }

ensureRight=function(a,b){return s$(a).ensureRight(b).s}

Range=function(a,b){

    var args = G(arguments)

    return N(b)? _.range(a, b)

        : args.P? _.range(a)

        :  _.range(1, (a||10) + 1 )

}










_r=function r(a,b,c,d){

    return  U(a)? rnd()
        :(F(b) && D(c))? _.reduce(a, b, c)
        :(F(a) && D(c))? _.reduceRight(a, c, b)
        :(F(a) || F(b))? r(c,a,b)
        :N(a)? _.random(a,b,c)
        :S(a)? a.replace(b||'#', c||'')
        :_.rest(a,b)
}









_S=function(a,b){return b? $S(a).split(b):a.toString()}


_s=function s(a,b,c){

    var g=G(arguments)

    if(D(g[1])){a[b]=c;return a}

    if(U(a)){return qq('s')}

    return src(a)
}




S=function(a,b,c){return U(b)? (_.isString(a)?_s().H(a):0)
    :N(b)? a.substr(b,c)
    :S(b)? s$(a).startsWith(b)
    :_.some(a, b||F,c)}



scl=function(v,a){v.x*=a;v.y*=a;return v}

sub=function(a,b){return a.o('s',b)}




tDU=function(a){return a.toDataURL()}



_t=function t(a,b,c){
     return U(a)? qq('t')
        :N(a)? _.times(a,_v(b),c)
        :D(b)? $(a).text(b)
        :S(a)?t(_b(),a)
        :$(a).text()}

tA=function(a){return O(a)?_.toArray(a):[a]}

tU=function(a){

    if(O(a) && F(a.toDataURL) ){ return a.toDataURL() }
//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
}




toUpperCase=uC=function(a){
    return S(a)? a.toUpperCase()
    :A(a)? _.map(a,function(a){return uC(a)}):a }


isUpper=Uc=function(a){
    if(S(a)){
        return s$(a).isUpper()}
}




U=function u(a,b){

    var iU = _.isUndefined;

    return iU(b)? iU(a)  : _a(_.extend, arguments)
}









_u=function(a){

    url = function(a){ return 'url("' +a+ '")' }

    return url(a)
    //return U(a)? qq('ul'): url(a)

}


V=function(a){

    if(S(a)){ a=oO(a) }

    return _.values(a)
}


_v=function(a){

    return S(a)?
    function(){$F(a)()}
    :F(a)?a:F(a.value)?a.value():a.value

}



_w=function(a,b){

    if(O(a)){

        var w=function(a,b){if(U(b)){return a.width}
        a.width=b;return a}
    if(U(b)){return F(w(a))?a.width():w(a)?w(a):F(a.w)?a.w():a.w}
    if(F(w(a))){a.width(b)}
    else if(w(a)){w(a,b)}
    else if(F(a.w)){a.w(b)}
    else {a.w=b}

    return a}}




Wd=function(a){
    if(O(a)){if(_h('Window',a)||_h('Window',a[0])){
        return window}}}


_W=function(a,b){

       if(U(b)){return a.which}
          return a.which==b
} //_.without





W=function(a){var g=G(arguments)
    var oW=function(a){if(O(a=a||$$w)){
        return Q(a).outerWidth()}}
    a=a||$$w;
    return N(a)?W()/a:oW(Q(a))}


fCC=function(a){ return $S.fromCharCode(a) }



_x=function(a, b){

    if(S(a)){return(_h(a,'.'))?a:
    R(a,b||'.png')}
}




Z=function(a){

    if(A(a)){ return _a(_.zip,arguments) }

    return $$w.resize(a||function(){co() })
}



z=function(c){
    if(c){co(c)}
    return $b().E()}



$$$ = function(a){$(_v(a))}



qx = function(a){return xx(qi(a))}





//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}

//test functions
fA=function(a){return function(){alert(a)}}
fL=function(a){return function(){$l(a)}}
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}



C$=createjs

T$=C$.Ticker

