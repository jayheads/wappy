
makeMan= function(a){return Mf.apply(this,map(a.images, function(i){return crs(i)}))}
Sp=function(ss, fun, stg){


    var spr =function(x){
        var  gts="gotoAndStop",gtp="gotoAndPlay", av="advance", ga="getAnimation", gA="getAnimations",gfb="getFrameBounds", gnf= "getNumFrames",
            fr="framerate",ca="currentAnimation",  caf="currentAnimationFrame", cf="currentFrame",
            ae='animationend';


        var o=Do(x);


        o.p=function(a){
            if(a){
                x[gtp](a)}
            else{
                x.play()};
            return o}


        o.s=function(a,b){
            if(a){
                x[gts](a)}
            else{
                x.stop()};
            return o}

        o.av=function(a){x[av](a*1000);return o}

        o.end=function(a){
            o.o(ae,a);
            return o}

        o.pa=function(a){
            if(!a){
                return x[pa]}
            x[pa]=a;
            return o}

        o.rate=function(a){
            if(!a){
                return x[fr]}
            x[fr]=a;
            return o}

        o.cf=function(a){
            if(!a){
                return x[cf]}
            x[cf]=a;
            return o}

        o.ca=function(a){
            if(!a){
                return x[ca]}
            x[ca]=a;
            return o}

        o.caf=function(a){if(!a){
            return x[caf]}
            x[caf]=a;
            return o};


        return o};






    return Ql(
        {

            m:makeMan(ss),

            c:function(i){
                var s=J$(SS$(ss));
                if(stg){stg.a(s)};
                if(fun){fun(spr(s),s)}}   // ,s

        })}
fu= function(a){
    if(F(a.obj)){a=a.obj()}
    return a}
tw=function rc(a){

    var fn=function(a,b){W$.get(a).to(b)}

    return function r(b){
        fn(fu(a),b)
        return r
    }
}
y=function(a){

    return fn=function f(b){
        W$.get(a).to(b)
        return f}

}

$(function(){Bm('guy',function(gg){stg.a(g=gg)// z=tw(g)
    a=1
    w=W$.get(g.obj(), {loop:true, onChange:function(){a= w.position}}
    ).to({x:170},5000).to({x:0},5000)})})






sEd=function(a){
    a.dE=function(a,b,c){this.dispatchEvent(a,b,c);return this}
    a.eL=function(a,b,c){var t=this;
        if(b==="undefined"){return t.hasEventListener(a)}
        else t.addEventListener(a,b,c);return t}
    a.O=function(a,b,c){this.on(a,b,c);
        return this};
    a.F=function(a,b,c){var t=this;
        if(b!=="undefined"){t.removeEventListener(a,b,c)}
        else{t.removeAllEventListeners(a)}
        return t}
    a.tS=function(){return this.toString()}
    return a}
sDo=function(o){o=sEd(o);
    o.mh=function(a,b,c){return this[dOMets[a]](b,c)}
    o._=function(a,b){var t=this,p={};
        if(iO(a)){return this.set(a)}
        if(a===undefined){_.e(dOPops,function(a,b){p[b]=t[a]});return p}
        if(b===undefined){return t[dOPops[a]]}
        if(iS(a))[dOPops[a]]=b;if(iO(a)){t.set(a)}
        return t}
    o.$=function(a){var t=this;
        t.on('click',function(){a(t)});
        return t}
    o.$$=function(a){var t=this;
        t.on('dblclick',function(){
            a(t)});return t}
    o.$$$=function(a){var t=this;t.O('tick',a);return t}
    o.oM=function(a,b){var t=this;
        if(a=='d'){t.O('mousedown',b)};
        if(a=='o'){t.O('mouseout',b)};
        if(a=='m'){t.O('pressmove',b)};
        if(a=='v'){t.O('mouseover',b)};
        if(a=='u'){t.O('pressup',b)};
        if(a=='ro'){t.O('rollout',b)};
        if(a=='r'){t.O('rollover',b)};
        return t}
    o.cl=o.clone;
    o.hT=o.hitTest;
    o.sT=o.setTransform;


    o.CC=function(){var t=this,g=arguments;
        if(a===undefined){t.uncache()}
        else if(b===undefined){t.updateCache(a)}
        else {t.cache.apply(t,g)}
        return t}
    o.bn=function(a,b,c,d){var t=this;
        if(a===undefined){return t.getBounds}
        t.setBounds(a,b,c,d);return t}
    o.X=function(a){this.updateContext(a);return this}
    o.w=function(){return this.bn().width*t.scaleX};
    o.h=function(){return this.bn().height*t.scaleY}
    o.t=function(x,y){var t=this,v=$V(x,y);t.x=v.x;t.y=v.y;return t}
    o.z=function(c){return this.c(c.w()/2,c.h()/2)}
    o.c=function(x,y){var t=this;
        if(!x){return $V(t.x+t.w()/2,t.y+t.h()/2)};
        t.t(x-t.w()/2, y-t.h()/2);return t}
    o.T=function(a,b){this.translate(a,b);return this}
    o.K=function(a,b){var t=this;t.skewX=a;t.skewY=b||a;return t}
    o.S=function(a,b){var t=this;t.scaleX=a;t.scaleY=b|a;return t}
    o.hyp=function(a){var t=this;hyp(a|c,t);return t}
    o.mag=function(a){var t=this;
        if(a=='k'){SK(t)};
        if(a=='c'){SC(t)};
        if(a=='r'){RT(t)};
        if(a=='l'){SL(t)};
        return t}
    return o}
sCt=function(c){c=sDo(c);
    c.a=function(a,b){ var t=this;
        if(iN(b)){t.addChildAt(a,b)}
        else{t.addChild(a)}
        return t}
    c.hd=function(){var t=this;
        _.e(t.children,function(b){b.visible=false});
        return t}
    c.gCh=function(a,b){var t=this;
        if(iO(a)){return t.getChildIndex(a)}
        if(iN(b)){return t.getObjectUnderPoint(a,b)}
        if(iN(a)){return t.getChildAt(a)}
        if(iS(a)){return t.getChildByName(a)}
        if(iO(a)&&iN(b)){t.setChildIndex(a,b)}
        return t}
    c.Ch=function(a,b){
        if(a===undefined){return t.getNumChildren()};
        if(iF(a)){t.sortChildren(a)};
        if(iN(b)){t.swapChildrenAt(a,b)}
        if(iO(b)){return t.swapChildren(a,b)}
        else if(iO(a)){return t.contains(a)}
        return t}
    c.rCh=function(a,b){ var t=this;
        if(a===undefined){t.removeAllChildren()}//()
        if(iO(a)){t.removeChild(a)};      //o
        if(iN(a)){t.removeChildAt(a)}  //n
        return t}
    c.oUP=function(a,b){return this.getObjectsUnderPoint(a,b)}

    c.mCh=function(a){var t=this;
        if(is===undefined(a)){return t.mouseChildren}
        t.mouseChildren=a;return t}
    return c}
sS=function(s, $c){
    s=sCt(s);

    s.u=s.toDataURL;
    s.U=function(a){var t=this;
        if(a===undefined){t.update()}
        if(a==='!'){t.clear()}
        if(a==='0'){t.autoClear=false}
        if(a==='1'){t.autoClear=true};return t}
    s.eMV=function(a){this.enableMouseOver(a);return this}
    s.eMO=function(a){this.mouseMoveOutside(a);return this}
    s.eDE=function(a){this.enableDOMEvents(a);return this}
    s.nSt=function(a){var t=this;
        if(is===undefined(a)){return t.nextStage}
        t.nextStage=a;return t}
    s.tOU=function(a){var t=this;
        if(is===undefined(a)){return t.tickOnUpdate}
        t.tickOnUpdate=a;return t}
    s.mMO=function(a){var t=this;
        if(is===undefined(a)){return t.mouseMoveOutside}
        t.mouseMoveOutside=a;return t}
    s.mX=function(){return this.mouseX}
    s.mY=function(){return this.mouseY}
    s.mB=function(){return this.mouseInBounds}
    s.aH=function(a,b,c){var t=this,h=H();
        t.a(h);
        if(iS(a)){h.g.f(a)};
        if(iF(a)){a(h.g,h,t)};
        if(iF(b)){b(h.g,h,t)};
        return h}

    s.b=function(a,f,v,p,F){var t=this;
        //a=a||t;

        if(v!==undefined){v=$V(v);if(v.x<=10){v.x*=100};
            if(v.y<=10){v.y*=100}}
        if(p==='c'){p=[($c.w()-v.x)/2,($c.h()-v.y)/2]};p=$V(p);
        B(a,function(b,t){
            b.x=p.x;b.y=p.y;$do(b,f);t.a(b);
            _.e(F,function(f){b[f]()})},v);
        return t}

    s.bF=function(a,pc,f){
        pc=pc||1//?
        var t=this;
        t.b(a,{x:t.w()*pc,y:t.h()*pc},f);
        return t
    }
    s.percent=function(a,b,c){var t=this,b=b||1;
        t.b(a,{x:t.w()*b,y:t.h()*b},c);
        return t};
    s.wow=function(){var t=this;
        B(t,function(b){t.S.a(b);
            TR(b)});
        return t}//t()
    return s}
tB=function(a){
    if(iI(a)){a=B$(a)};
    if(iB(a)){
        a=sDo(a);
        a.i=a.image};
    return a}
xB=function f(a,b,c,d){

    if(c){
        I(a,function(i){
            var c=C(c);
            c.X.fD(i);
            f(c.C,b,null,d)
        });
        return}

    if(iI(i)){
        if(i.src){
            return $do($do(tB(a),b),d)
        }}

    I(a,function(i){
        f(i,b,null,d)
    });

    return}


B=function(a,b){
    I(a,function(i){

        var bm=sDo(B$(i));

        if(iO(b)){b.addChild(b)};
        if(iS(b));W[b]=bm;
        if(iF(b)){b(bm)}

    })}
//nLoad=function(a){return !iB(tB(a))}
// a _  $ $$ bn cl c CC Ch draw em eL F gCh K h hit i-img mh mt mCh n-name O rCh S tf tk tS T u U w X x/y:(x/y), z
B2=function(a,s){
    I(a,function(i){
        b=sDo(B$(i));
        if(s){s.addChild(b)}})}
tk=function(a){
    if(iS(a)){a=new Function(a)}
    T.on('tick',a);
    return T}
advanced=function(){
    animation=function(){
        sAN=function(a,b){a=sDo(a)
            gS="gotoAndStop",gP="gotoAndPlay",sPa="setPaused",sPo="setPosition";
            a.p=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](false)} else {t.play()}
                if(b!==undefined){
                    if(t[gP]) {t[gP](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            a.s=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](true)} else {t.stop()}
                if(b!==undefined){
                    if(t[gS]) {t[gS](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            return t}
        sSp=function(s){s=sAN(s);
            s.gt=function(){var t=this;
                return {
                    a: t.getAnimation(),
                    A: t.getAnimations(),
                    f: t.getFrame(),
                    fb: t.getFrameBounds(),
                    nf: t.getNumFrames(),
                    fr: framerate}}
            s.$$$=function(a){t.on('complete',a)}
            return s}
        sTW=function(W){W=sAn(W)
            W.pos=function(a,b){var t=this;
                if(a===undefined){return t.position}
                setPosition(a,b);return t}
            W.iGP=function(a){var t=this,iGP="ignoreGlobalPause";
                if(a===undefined){return t[iGP]}
                t[iGP]=a;return t}
            W.dur=function(a){var t=this,d="duration";
                if(a===undefined){return t[d]}
                t[d]=a;return t}
            W.lp=function(a){var t=this;
                if(a===undefined){return t.loop}
                t.loop=a;return t}
            return W}
        sTw=function(w){w=sTW(w)
            w.cl=w.call; w.gt=w.get; w.wt=w.wait;w.st=w.set;
            w.tw=function(a){var t=this;
                if(a===undefined){return t.hasActiveTweens }
                return t}
            w.rm=function(a){
                var t=this;
                if(a===undefined){t.removeAllTweens }
                t.removeTweens(a);
                return t}
            w.tg=function(){return this.target}
            w.tk=function(a,b){this.tick(a,b);return this}
            return w}
        sTl=function(l){l=sTW(l);
            l.ad=function(a,b){var t=this;
                if(iS(a)){t.addLabel(a,b)}
                if(iO(a)){t.addTween(a,b)}
                return t}
            l.cL=function(){return t.getCurrentLabel()}
            l.lb=function(a){var t=this;
                if(a===undefined){return t.getLabels()}
                if(iO(a)){t.setLabels(a);return t}
                if(iN(a)||iS(a)){return resolve(a)}
                return t}
            l.rm=function(a){this.removeTween(a);return this}
            l.uD=function(a){var t=this;
                if(a===undefined){t.updateDuration()}
                if(iN(a)){t.tick(a)}
                return t}
            return l}
        sMc=function(m){var t=this,m=sAN(sCt(m));
            m.tl=sTl(m.timeline);
            m.lb=m.getLabels;m.cL=m.getCurrentLabel;

            m.sP=function(a){var t=this,sp="startPosition";
                if(a===undefined){return t[sp]}; t[sp]=a;return t}

            m.mo=function(a){var t=this;
                if(a===undefined){return t.mode};t.mode=a;return t}

            m.lp=function(a){var t=this;
                if(a===undefined){return t.loop};t.loop=a;return t}

            m.aR=function(a){var t=this,r="autoReset";
                if(a===undefined){return t[r]};t[r]=a;return t}

            m.aE=function(a){var t=this,e="actionsEnabled";
                if(a===undefined){return t[e]};t[e]=a;return t}

            return m}
    };animation();





    sEd=function(a){
        a.dE=function(a,b,c){this.dispatchEvent(a,b,c);return this}
        a.eL=function(a,b,c){var t=this;
            if(b==="undefined"){return t.hasEventListener(a)}
            else t.addEventListener(a,b,c);return t}
        a.O=function(a,b,c){this.on(a,b,c);
            return this};
        a.F=function(a,b,c){var t=this;
            if(b!=="undefined"){t.removeEventListener(a,b,c)}
            else{t.removeAllEventListeners(a)}
            return t}
        a.tS=function(){return this.toString()}
        return a};




    T=function f(a,b,c){

        // var iSt=function(a){return c$(_ts(a),"Stage")}
        //  var tSt=function f(a){var s; if(iSt(a)){return a};if(a['S']){return f(a['S'])};return a}

        var gT="getTime",
            gET="getEventTime",
            tM="timingMode",
            gTk="getTicks";

        if(iN(a)){
            if(a>10){T$.setFPS(a)}
            else{T$.setInterval(a*1000)}};

        if(iF(a)||iO(a)){
            T$.on('tick',a);
            $l('o')};

        //if(iS(a)&&_.z(a)>3){return f(new Function('e',"var a=arguments,t=this;"+a+";return t"))}


        if(a===undefined){T$.setPaused(false)};
        if(a==='!'){T$.setPaused(true)};
        if(a==='~'){if(f('@').p){f(0)}else{f()}};
        if(a==='*'){T$.reset()};
        if(a==='#'){T$.init()}
        if(a==='%'){if(b){T$[tM]=b};return T$[tM]};

        if(a==='@'){var o={
            TIME:T$[gT](false),
            RUNTIME:T$[gT](true),
            EVENT:T$[gET](false),
            RUNEVENT:T$[gET](true),
            TICKS:T$[gTk](),
            RUNTICKS:T$[gTk](true),
            FPS:T$.getFPS(),
            INT:T$.getInterval(10),
            playing:!T$.getPaused()}
            $l(o);
            return o} //should be default

        if(a==='@@'){f('#');
            var o={mF:T$.getMeasuredFPS(1),
                mI:T$.getMeasuredTickTime(10)}
            $l(o);return o}

        if(a==='$'){
            T.eL('tick',a)}
    };



    sDo=function(o){o=sEd(o);
        o.mh=function(a,b,c){return this[dOMets[a]](b,c)}
        o._=function(a,b){var t=this,p={};
            if(iO(a)){return this.set(a)}
            if(a===undefined){_.e(dOPops,function(a,b){p[b]=t[a]});return p}
            if(b===undefined){return t[dOPops[a]]}
            if(iS(a))[dOPops[a]]=b;if(iO(a)){t.set(a)}
            return t}
        o.$=function(a){var t=this;
            t.on('click',function(){a(t)});
            return t}
        o.$$=function(a){var t=this;
            t.on('dblclick',function(){
                a(t)});return t}
        o.$$$=function(a){var t=this;t.O('tick',a);return t}
        o.oM=function(a,b){var t=this;
            if(a=='d'){t.O('mousedown',b)};
            if(a=='o'){t.O('mouseout',b)};
            if(a=='m'){t.O('pressmove',b)};
            if(a=='v'){t.O('mouseover',b)};
            if(a=='u'){t.O('pressup',b)};
            if(a=='ro'){t.O('rollout',b)};
            if(a=='r'){t.O('rollover',b)};
            return t}
        o.cl=o.clone;
        o.hT=o.hitTest;
        o.sT=o.setTransform;


        o.CC=function(){var t=this,g=arguments;
            if(a===undefined){t.uncache()}
            else if(b===undefined){t.updateCache(a)}
            else {t.cache.apply(t,g)}
            return t}
        o.bn=function(a,b,c,d){var t=this;
            if(a===undefined){return t.getBounds}
            t.setBounds(a,b,c,d);return t}
        o.X=function(a){this.updateContext(a);return this}
        o.w=function(){return this.bn().width*t.scaleX};
        o.h=function(){return this.bn().height*t.scaleY}
        o.t=function(x,y){var t=this,v=$V(x,y);t.x=v.x;t.y=v.y;return t}
        o.z=function(c){return this.c(c.w()/2,c.h()/2)}
        o.c=function(x,y){var t=this;
            if(!x){return $V(t.x+t.w()/2,t.y+t.h()/2)};
            t.t(x-t.w()/2, y-t.h()/2);return t}
        o.T=function(a,b){this.translate(a,b);return this}
        o.K=function(a,b){var t=this;t.skewX=a;t.skewY=b||a;return t}
        o.S=function(a,b){var t=this;t.scaleX=a;t.scaleY=b|a;return t}
        o.hyp=function(a){var t=this;hyp(a|c,t);return t}
        o.mag=function(a){var t=this;
            if(a=='k'){SK(t)};
            if(a=='c'){SC(t)};
            if(a=='r'){RT(t)};
            if(a=='l'){SL(t)};
            return t}
        return o};
    sCt=function(c){c=sDo(c);
        c.a=function(a,b){ var t=this;
            if(iN(b)){t.addChildAt(a,b)}
            else{t.addChild(a)}
            return t}
        c.hd=function(){var t=this;
            _.e(t.children,function(b){b.visible=false});
            return t}
        c.gCh=function(a,b){var t=this;
            if(iO(a)){return t.getChildIndex(a)}
            if(iN(b)){return t.getObjectUnderPoint(a,b)}
            if(iN(a)){return t.getChildAt(a)}
            if(iS(a)){return t.getChildByName(a)}
            if(iO(a)&&iN(b)){t.setChildIndex(a,b)}
            return t}
        c.Ch=function(a,b){
            if(a===undefined){return t.getNumChildren()};
            if(iF(a)){t.sortChildren(a)};
            if(iN(b)){t.swapChildrenAt(a,b)}
            if(iO(b)){return t.swapChildren(a,b)}
            else if(iO(a)){return t.contains(a)}
            return t}
        c.rCh=function(a,b){ var t=this;
            if(a===undefined){t.removeAllChildren()}//()
            if(iO(a)){t.removeChild(a)};      //o
            if(iN(a)){t.removeChildAt(a)}  //n
            return t}
        c.oUP=function(a,b){return this.getObjectsUnderPoint(a,b)}

        c.mCh=function(a){var t=this;
            if(is===undefined(a)){return t.mouseChildren}
            t.mouseChildren=a;return t}
        return c};
    sS=function(s, $c){
        s=sCt(s);

        s.u=s.toDataURL;
        s.U=function(a){var t=this;
            if(a===undefined){t.update()}
            if(a==='!'){t.clear()}
            if(a==='0'){t.autoClear=false}
            if(a==='1'){t.autoClear=true};return t}
        s.eMV=function(a){this.enableMouseOver(a);return this}
        s.eMO=function(a){this.mouseMoveOutside(a);return this}
        s.eDE=function(a){this.enableDOMEvents(a);return this}
        s.nSt=function(a){var t=this;
            if(is===undefined(a)){return t.nextStage}
            t.nextStage=a;return t}
        s.tOU=function(a){var t=this;
            if(is===undefined(a)){return t.tickOnUpdate}
            t.tickOnUpdate=a;return t}
        s.mMO=function(a){var t=this;
            if(is===undefined(a)){return t.mouseMoveOutside}
            t.mouseMoveOutside=a;return t}
        s.mX=function(){return this.mouseX}
        s.mY=function(){return this.mouseY}
        s.mB=function(){return this.mouseInBounds}
        s.aH=function(a,b,c){var t=this,h=H();
            t.a(h);
            if(iS(a)){h.g.f(a)};
            if(iF(a)){a(h.g,h,t)};
            if(iF(b)){b(h.g,h,t)};
            return h}

        s.b=function(a,f,v,p,F){var t=this;
            //a=a||t;

            if(v!==undefined){v=$V(v);if(v.x<=10){v.x*=100};
                if(v.y<=10){v.y*=100}}
            if(p==='c'){p=[($c.w()-v.x)/2,($c.h()-v.y)/2]};p=$V(p);
            B(a,function(b,t){
                b.x=p.x;b.y=p.y;$do(b,f);t.a(b);
                _.e(F,function(f){b[f]()})},v);
            return t}

        s.bF=function(a,pc,f){
            pc=pc||1//?
            var t=this;
            t.b(a,{x:t.w()*pc,y:t.h()*pc},f);
            return t
        }
        s.percent=function(a,b,c){var t=this,b=b||1;
            t.b(a,{x:t.w()*b,y:t.h()*b},c);
            return t};
        s.wow=function(){var t=this;
            B(t,function(b){t.S.a(b);
                TR(b)});
            return t}//t()
        return s};
    tB=function(a){
        if(iI(a)){a=B$(a)};
        if(iB(a)){
            a=sDo(a);
            a.i=a.image};
        return a};
    xB=function f(a,b,c,d){

        if(c){
            I(a,function(i){
                var c=C(c);
                c.X.fD(i);
                f(c.C,b,null,d)
            });
            return}

        if(iI(i)){
            if(i.src){
                return $do($do(tB(a),b),d)
            }}

        I(a,function(i){
            f(i,b,null,d)
        });

        return}
    B=function(a,b){
        I(a,function(i){

            var bm=sDo(B$(i));

            if(iO(b)){b.addChild(b)};
            if(iS(b));W[b]=bm;
            if(iF(b)){b(bm)}


        })}
//nLoad=function(a){return !iB(tB(a))}
// a _  $ $$ bn cl c CC Ch draw em eL F gCh K h hit i-img mh mt mCh n-name O rCh S tf tk tS T u U w X x/y:(x/y), z


    animation=function(){

        sAN=function(a,b){a=sDo(a)
            gS="gotoAndStop",gP="gotoAndPlay",sPa="setPaused",sPo="setPosition";
            a.p=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](false)} else {t.play()}
                if(b!==undefined){
                    if(t[gP]) {t[gP](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            a.s=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](true)} else {t.stop()}
                if(b!==undefined){
                    if(t[gS]) {t[gS](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            return t}






        sSp=function(s){s=sAN(s);
            s.gt=function(){var t=this;
                return {
                    a: t.getAnimation(),
                    A: t.getAnimations(),
                    f: t.getFrame(),
                    fb: t.getFrameBounds(),
                    nf: t.getNumFrames(),
                    fr: framerate}}
            s.$$$=function(a){t.on('complete',a)}
            return s}


        sTW=function(W){W=sAn(W)
            W.pos=function(a,b){var t=this;
                if(a===undefined){return t.position}
                setPosition(a,b);return t}
            W.iGP=function(a){var t=this,iGP="ignoreGlobalPause";
                if(a===undefined){return t[iGP]}
                t[iGP]=a;return t}
            W.dur=function(a){var t=this,d="duration";
                if(a===undefined){return t[d]}
                t[d]=a;return t}
            W.lp=function(a){var t=this;
                if(a===undefined){return t.loop}
                t.loop=a;return t}
            return W}


        sTw=function(w){w=sTW(w)
            w.cl=w.call; w.gt=w.get; w.wt=w.wait;w.st=w.set;
            w.tw=function(a){var t=this;
                if(a===undefined){return t.hasActiveTweens }
                return t}
            w.rm=function(a){
                var t=this;
                if(a===undefined){t.removeAllTweens }
                t.removeTweens(a);
                return t}
            w.tg=function(){return this.target}
            w.tk=function(a,b){this.tick(a,b);return this}
            return w}









        sTl=function(l){l=sTW(l);
            l.ad=function(a,b){var t=this;
                if(iS(a)){t.addLabel(a,b)}
                if(iO(a)){t.addTween(a,b)}
                return t}
            l.cL=function(){return t.getCurrentLabel()}
            l.lb=function(a){var t=this;
                if(a===undefined){return t.getLabels()}
                if(iO(a)){t.setLabels(a);return t}
                if(iN(a)||iS(a)){return resolve(a)}
                return t}
            l.rm=function(a){this.removeTween(a);return this}
            l.uD=function(a){var t=this;
                if(a===undefined){t.updateDuration()}
                if(iN(a)){t.tick(a)}
                return t}
            return l}







        sMc=function(m){var t=this,m=sAN(sCt(m));
            m.tl=sTl(m.timeline);
            m.lb=m.getLabels;m.cL=m.getCurrentLabel;

            m.sP=function(a){var t=this,sp="startPosition";
                if(a===undefined){return t[sp]}; t[sp]=a;return t}

            m.mo=function(a){var t=this;
                if(a===undefined){return t.mode};t.mode=a;return t}

            m.lp=function(a){var t=this;
                if(a===undefined){return t.loop};t.loop=a;return t}

            m.aR=function(a){var t=this,r="autoReset";
                if(a===undefined){return t[r]};t[r]=a;return t}

            m.aE=function(a){var t=this,e="actionsEnabled";
                if(a===undefined){return t[e]};t[e]=a;return t}

            return m}
    };







// x.clTx=function(d){var t=this;t.p().p(100,100).t(200,100).t(150,300).p('!');return t}
//c.ppp=function(x,y){this.dc(x,y);$P.push({x:x,y:y})}//sy(c,'white','black',3);
//c.cut2=function(p){var p=p||$P,p1=p.shift(),t=this;t.P(p1.x,p1.y);_.each(p,function(p){t.k(p.x,p.y)});t.P(0);p=[];return t}//x.fill()?
//c.cut3=function(){return this.clPath().C().J().I()};
// c.id=function(o){var t=this,a=_.rs(arguments);var gp=function(c,d){return this.p(this.g(c),d)},cp2=function(y,d){return this.p(cD(y.g(),d))}
// if(o=='g'){t.dat=t.X.gd.apply(t.X,a)};if(o=='p'){t.X.pd.apply(t.X,a)}}
//c.cp=function(y,d){return this.P(cD(y.g(),d))}
//c.gp=function(c,d){return this.P(this.g(c),d)};



    $(function(){

        // s=c.s; T.p();T.o(s);
        // B('me',function(b){s.a(b);z=b},2,[400,40])

        // if(v){I(a,function(i){B(C(v).d.m(i),f,null,n)})}
        //d=c.d;$l('d!')
        //d.s('white').p().p(0,0).l(300,30).s();
        // d.s('white').p(400,0).l(300,800).s().p().p(500,0).l(600,800).s('red').s()
        //.b();d.m(0,0);d.l(300,300);d.s();
        //g=G(c);
        //g.s('blue').f('pink').drawRoundRect(10,10,400,400,10).drawRoundRectComplex (700,100,500,300,1,2,20,50).d()
        //g.s('red').f('geen').ss(10).drawPolyStar( 200,300,50, 8,10, 30).d()

    })


//o.ON=function(a,b){this.al(a,b);return this}
//o.F=function(){var t=this;t.ral();return t}
//g.pp=function(x,y){this.dc(x,y);$P.push({x:x,y:y})}//sy(c,'white','black',3);
//g.clPath=function(p){p=p||$P;var p1=p.shift(),t=this;t.g.moveTo(p1.x,p1.y);
// _.each(p,function(p){t.g.lineTo(p.x,p.y)});t.g.closePath();p=[];return t}//x.fill()?
//g.cut=function(){return this.X().clPath().C().J().I()}

//$t="tick";//function $p(a){return '/png/'+a+'.png'}
//function txt(a,x,y,z,r){c.t();var tt=new cj.Text(a||"YANO", z||"50px ariel", r||"blue");tt.textBaseline="alphabetic";tt.x=x||100;tt.y=y||100;c.a(tt);return tt}
//function sE(e){return e}
// t.m=function(a){if(a){T.timingMode=a;return this};return T.timingMode}
//t.a=o.a;
//t.o=function(r){var t=this;t.on('$t',r);return t};
//t.oT=function(f){T.a('tick',function(){f()})};
//t.tO=function(f){T$.a(f)};//if(c){t.a("tick",c.s)};
//function fS(a,f){if(!iS(a)){return a};return f(a)}


    $l('movie')



    Mc=function(m){var  o=Anim(m), x=o.x,


        mo="mode",    ae="actionsEnabled" ,

        ar="autoReset",  gcl="getCurrentLabel",

        gts="gotoAndStop",  gtp="gotoAndPlay",

        bd= "buildDate", cf="currentFrame", lp="loop",

        pa="paused",  stP="startPosition",  ind="INDEPENDENT" ,

        SF="SINGLE_FRAME",    sy="SYNCHED",tl="timeline" ;

        o.p=function(a,b){x.play();return o}
        o.s=function(a,b){x.stop();return o}

        o.tl=function(){ Tl(x[tl]);return o}

        o.lb=function(){return x[gl](); return o}

        x.cL=function(){return x[gcl]()}

        o.sP=function(a){if(U(a)){return x[sP]};
            x[sP]=a;  return o}

        o.mo=function(a){if(U(a)){return x[m]};
            x[mo]=a;  return o}
        o.lp=function(a){if(U(a)){return x[l]}; x[lp]=a;  return o}

        o.aR=function(a){ if(U(a)){return x[ar]};  x[ar]=a; return o}

        o.aE=function(a){if(U(a)){return x[ae]}; x[ae]=a; return o}
        return m}
