T=function(a,b){return setTimeout(_v(a),b)}


dateTime=dt=function(a){var d=new Date(a)

    d.y=d.getFullYear

    d.d=d.getDate
    d.D=d.getDay
    d.M= d.getMinutes

    d.m= d.getMonth

    d.date=function(){
        return d.d()+'/'+ d.m()+'/'+ d.y()
    }

    d.time=function(){
        return d.h()+':'+ d.M()
    }
    d.dt=function(){return d.date()+' '+ d.time()}


    d.ms= d.getMilliseconds
    d.h= d.getUTCHours

    d.s= d.getSeconds


    //d.tm= d.getTime
    //d.gto= d.getTimezoneOffset
    d.udt= d.getUTCDate
    d.gud= d.getUTCDay

    d.ufy= d.getUTCFullYear


    d.gh= d.getHours

    d.gms= d.getUTCMilliseconds
    d.um= d.getUTCMinutes
    d.um= d.getUTCMonth
    d.us= d.getUTCSeconds
    return d
}

     dtt=function(a){

         return dt(a).dt()
     }







//time
f30=function(f){K(f,1000/30)}

sec=function(f){return T(f,1000)}





keep=function(f){I(f,50)}

T$ = createjs.Ticker


STOP=function(){
    T$.removeAllEventListeners()
}



tt=function(a,b,c){

    var g=G(arguments),
    t=true,
    f=false,
    a=g[0],
    b=g[1],
    c=g[2]

    if(F(a)){

        return aEL(T$,'tick',
        g.N? a
            :function(e){

            if(!e.paused){ a(e) }
        })

    }



    if(O(a)){
        return aEL(T$,'tick',a)}

    if(a=='?'){return !T$.getPaused()}
    if(a=='p'){T$.setPaused(f);return tt('?')}

    if(a=='s'){T$.setPaused(t);
        return tt('?')}

    if(a=='g'){return tt(

        tt('?')? 's': 'p'

    )}


    if(a=='@'){
        return T$.init()}

    if(a=='!'){
        return T$.reset()}

    if(a=='e'){return T$.getEventTime(g.p?t:f)}

    if(a=='t'){return T$.getTime(g.p?t:f)}

    if(a=='#'){return T$.getTicks(g.n?t:f)}

    if(a=='md'){return t$.maxDelta}

    if(a=='M'){return T$.timingMode}

    if(a=='i'){
        if(N(b)){T$.setInterval(g.m?b*1000:b)
            return tt('i')}
        if(U(b)){return T$.getInterval()}}

    if(a=='f'){
        if(N(b)){T$.setFPS(b);return tt}
        if(U(b)){return T$.getFPS()}}

    if(a=='r'){if(b>10){
        tt('f',b)} else {tt('i',b,'*')}}


    if(a=='m'){
        return N(b)?T$.getMeasuredFPS(b)
            :T$.getMeasuredFPS()}

    if(a=='tk'){return Ed(T$)}

}







tick=function(e){j.y(e.delta/1000*100,'-' )}


ts2 = function(s, j, pxPerSec){
    var fn=function(s,e){

        if(!N(j.ts)){j.ts=0;j.lts=e.ts}

        else{j.ts= e.ts-j.lts;j.lts=e.ts

            j.y((j.ts/1000) * pxPerSec,'-')  }}

    return s.t(fn)}


he2=function(e){

    j.x( (e.d/1000) * 5,'-' )

}
onTick=function TT(f){var fn
    fn=T$.on('tick',function(e){f(sJE(e))})
    return function(){T$.off('tick',fn)
        return _p(TT,f)}}




