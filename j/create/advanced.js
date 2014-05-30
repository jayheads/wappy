handleFileLoad=function(e){
    if (e.item.type=="image"){
        images[e.item.id]=e.result}}

handleComplete()=function(){
    expRt = new lib.bubbles4()
    stg=St(c)
    stg.a(expRt)
    stg.u()
    T$.setFPS(30)
    T$.ael("tick", stg)}


Tl=function(l){l=sTW(l);
    l.ad=function(a,b){var t=this;
        if(iS(a)){t.addLabel(a,b)}
        if(iO(a)){t.addTween(a,b)}
        return t}
    l.cL=function(){return t.getCurrentLabel()}
    l.lb=function(a){var t=this;
        if(U(a)){return t.getLabels()}
        if(iO(a)){t.setLabels(a);return t}
        if(iN(a)||iS(a)){return resolve(a)}
        return t}
    l.rm=function(a){this.removeTween(a);return this}
    l.uD=function(a){var t=this;
        if(U(a)){t.updateDuration()}
        if(iN(a)){t.tick(a)}
        return t}
    return l}

tch=function(s){
    C$.Touch.enable(s.ob); return s}


Mc=function(m){var t=this,

    m=sCt(sDo(m))

    gS="gotoAndStop",
        gP="gotoAndPlay",
        sPa="setPaused",
        sPo="setPosition";


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


    m.tl=sTl(m.timeline);
    m.lb=m.getLabels;
    m.cL=m.getCurrentLabel;

    m.sP=function(a){var t=this,sp="startPosition";
        if(U(a)){return t[sp]}; t[sp]=a;return t}

    m.mo=function(a){var t=this;if(U(a)){return t.mode};t.mode=a;return t}

    m.lp=function(a){var t=this;if(U(a)){return t.loop};t.loop=a;return t}

    m.aR=function(a){var t=this,r="autoReset";if(U(a)){return t[r]};t[r]=a;return t}

    m.aE=function(a){var t=this,e="actionsEnabled";if(U(a)){return t[e]};t[e]=a;return t}

    return m}