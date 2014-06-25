
_d=function(a,b){
    var g=G(arguments),
        d=qq('d')

    _e(g.r, function(g){ d(g) })

    return d}


di=function(i){return _d().id(i)}

dk=function(k,C,c,f,h){
    var g=G(arguments),k=g[0],C=g[1],c=g[2],f=g[3],
        d=_d().k(k)
    if(c){d.c(C,c)} else if(C){d.c(C)}
    if(f){d.f(f)}
    if(h){d.H(h)}
    if(g.p){d.a()()}
    return d}

dz=function(z,C,c,f,h){
    var g=G(arguments),z=g[0],C=g[1],c=g[2],f=g[3],h=g[4]
    d=_d().Z(z)
    d.c(C,c)
    if(f){d.f(f)}
    if(h){d.H(h)}
    if(g.p){d.a()()}
    return d}



ddd=function(){z()
    d=dva(500)(
        e=dv(100),
        c=sCan()

    )
}
dv=function f(r,w,h,p){

//div -auto- (padding 10)
//can specify width (or w/h)
//can pass all pams in array, and then pass contents

    var g=G(arguments),
        r=g[0],w=g[1],
        h=g[2],p=g[3],
        d=_d()

    if(A(g.f)){return _a(_a(f,g.f),  g.r)}
    if(!S(r)){return f($r(),r,w,h,p)}

    d.c(r)

  //if(U(w)){return d.auto()}

    if(N(w)){d.w(w)}
    if(N(h)){d.h(h)}
    d.P(N(p)?p:10)

    return d}





//color, width, height, left, top
dva=function f(r,w,h,l,t){
    var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],
        d

    if(!S(r)){
        return g.n?

            f($r(),r,w,h,l,'-')
            :g.p?f($r(),r,w,h,l,'+')
            :f($r(),r,w,h,l)}


    d=_d().p('a').c(r).a()


    if(g.p){
        if(w){d.l(w)}
        if(h){d.t(h)}
        d.P(16)
        return d.auto()}


    w=w||1
    h=h||w
    d.w(w)
    d.h(h)

    l=l||0
    t=t||l
    d.l(l)
    d.t(t)


    if(g.N){d.drg()}
    return d}





dvd=function(){

    return _a(dva, arguments).drg()
}


//color, width, height, left, top
dva1=function f(r,w,h,l,t){var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
    if(!S(r)){
        return g.n?

            f($r(),r,w,h,l,'-')
            :g.p?f($r(),r,w,h,l,'+')
            :f($r(),r,w,h,l)}


    d=_d().p('a').c(r).a()

    if(g.p){
        if(w){d.l(w)}
        if(h){d.t(h)}
        d.P(16)
        return d.auto()}


    w=w||1
    h=h||w
    d.w(w*100)
    d.h(h*100)

    l=l||0
    t=t||l
    d.l(l*100)
    d.t(t*100)


    if(g.N){d.drg()}
    return d}






da=function(a,b){

    if(U(b)){return a.data};
    a.data=b;
    return a }
