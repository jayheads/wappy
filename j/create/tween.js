//UNIVERSAL FUNCTIONS
twX=function(a){if(U(a)){return W$.removeAllTweens()};
    W$.removeTweens(bj(a))}
hAT=function(a){return W$.hasActiveTweens(bj(a))}
avT=function(a,b){return W$.tick(a,b)}
////


ww=function(o){var w={}
    if(N(o.x)){w.x=o.x}
    if(N(o.y)){w.y=o.y}
    if(N(o.xy)){w.x=w.y=o.xy}
    if(N(o.sx)){w.scaleX=o.sx}
    if(N(o.sy)){w.scaleY=o.sy}
    if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
    if(N(o.s)){w.scaleX=w.scaleY=o.s}
    if(N(o.kx)){w.skewX=o.kx}
    if(N(o.ky)){w.skewY=o.ky}
    if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
    if(N(o.k)){w.skewX=w.skewY=o.k}
    if(N(o.r)){w.rotation=o.r}
    if(N(o.a)){w.alpha=o.a}
    if(N(o.rx)){w.regX=o.rx}
    if(N(o.ry)){w.regY=o.ry}
    if(N(o.rxy)){w.regX=w.regY=o.rxy}
    if(N(o.gy)){w.regY=o.ry}
    if(N(o.gxy)){w.regX=w.regY=o.rxy}
    if(N(o.g)){w.regX=w.regY=o.g}
    if(o.v==0){w.visible=false}
    if(o.v==1){w.visible=true}
    return w}


tw=function(a,b){if(U(b)){return twg(a)}
    //first arg passed to twg, and then rest of args are 'to' pams


    var  g=G(arguments),
        Ea=function(e){return C$.Ease[oO('E',e)]},
        twp=function(){
        var g=G(arguments),o={}
        _e(g,function(p){
            if(p=='l'){o.loop=true}
            if(p=='t'){o.useTicks=true}
            if(p=='i'){o.ignoreGlobalPause=true}
            if(p=='o'){o.override=true}
            if(p=='p'){o.paused=true}
            if(N(p)){o.position=p}
            if(F(p)){o.onChange=p}})
        return o},
        twg=function(a){
        //this returns tween-get on a display obj
        //you can optionally pass an array (ob, op1, op2..)
        return A(a)? W$.get(bj(a[0]),_a(twp,_r(a)))
            :W$.get(bj(a))},
        Tw=function(){ var g=G(arguments),

            w=function(){}

            w.tw=g[0]


            w.tg=w.tw.target//cant change


        w.p=function(){w.tw.setPaused(false);return w}
        w.s=function(){w.tw.setPaused(true);return w}
        w.ps=function(a,b){var acm=function(m){//get or set position of tween (in time in ms)// see w.dr
            var M={l:W$.LOOP,n:W$.NONE,r:W$.REVERSE};if(D(m)){return M[m]}}
            if(U(a)){return w.tw.position}
            w.tw.setPosition(a,acm(b))
            //default is loop, can use r|n
            return w}
        w.dr=function(a){
            //get time of tween in ms
            //duration:read only
            if(U(a)){return w.tw.duration}}
        w.c=function(a){w.ob.call(a);return w}
        w.g=function(a){w.ob.get(a);return w}
        w.w=function(a){w.ob.wait(a);return w}
        w.s=function(a){w.ob.set(a);return w}
        w.tk=function(a){w.tw.tick(a);return w}
        w.iGP=function(a){if(U(a)){return w.tw.ignoreGlobalPause};w.tw.ignoreGlobalPause=a;return w}
        w.lp=function(a){if(U(a)){return w.tw.loop};w.tw.loop=a;return w}
        w.psv=function(){ return w.tw.passive}//Read-only. Indicates the tween's current position is within a passive wait.


            w.plgD=function(a,b){
            var g=G(arguments),a=g[0],b=g[1];if(U(a)){return g.p? w.tw.pluginData.data: w.tw.pluginData};if(U(b)){w.tw.pluginData=a;return w};w.tw.tw.pluginData[a]=b;return w }


            return w},
        a=twg(g[0])

    _e(g.r,function(b){

        if(A(b)){
            if(b[2]){a=a.to(ww(b[0]),b[1],Ea(b[2]))}
            else if(b[1]){
                if(O(b[1])){a=a.set(ww(b[0]),bj(b[1]))}
                else{a=a.to(ww(b[0]),b[1])}}
            else{a=a.tick(a[0])}}
        else if(F(b)){a=a.call(b,[])}
        else if(N(b)){
            if(b<0){a=a.wait(b*-1,true)}
            else{a= a.wait(b)}}
        else if(_z(b)==1){
            if(b.p){a=a.play(b.p)}
            else if(b.s){a=a.stop(b.s)}}
        else{a=a.to(ww(b))}

    })

    return Tw(a)}


shY=function(a){return tw([a,'l'],
    [{y:-10},500],  [{y:10},500],  [{y:-10},500])}
shX=function(a){return tw([a,'l'],
    [{x:-20},50],[{x:20},50],[{x:-20},50])}
rott=function(a){return tw(a,
    [{r:180,y:200,sxy:.5},500])}
prod=function(a){

    if(G(arguments).N){tw(

        a,
        {x:-100,y:200},
        [{x:10,s:.5,y:-200},500],
        [{x:100,s:1.2,y:200,a:.5},10000,'eO'],
        {a:0})}


    else{tw(
        a,
        {x:100,y:200},
        [{x:10,s:.5,y:200},500],
        [{x:-100,s:1.2,y:200,a:.5},10000,'eO'],
        {a:0}
    )}


    return a}












