MovieClip = EaselMovieClip = Mc=function(m){var t=this,

    m = sCt( sDo(m) )

    gS="gotoAndStop",
        gP="gotoAndPlay",
        sPa="setPaused",
        sPo="setPosition";


    m.play = m.p=function(a,b){

        var t=this;

        if(this.setPaused) {this.setPaused(false)} else { this.play() }

        if( D(b) ){

            if(this.gotoAndPlay) {this.gotoAndPlay(a)}

            if(this.setPosition) {this.setPosition(a,b)}

            return this}
    }


    m.stop = m.s=function(a,b){var t=this;
        if(t[sPa]) {t[sPa](true)} else {t.stop()}
        if(b!==undefined){
            if(t[gS]) {t[gS](a)}
            if(t[sPo]) {t[sPo](a,b)}
            return t}}


    m.tl= sTl( m.timeline )


    m.lb=m.getLabels;

    m.cL=m.getCurrentLabel;

    m.sP=function(a){
        if(U(a)){
            return this.startPosition};
        this.startPosition=a;
        return this}



    m.mo=function(a){
        if(U(a)){return this.mode}
        this.mode=a;
        return tthis}



    m.lp=function(a){ //loop
        if(U(a)){ return this.loop }
        this.loop=a
        return this}


    m.aR=function(auto){

        if(U(auto)){ return this.autoReset }
        this.autoReset = auto
        return this}


    m.actions = m.aE = function(enabled){

        if( U(enabled) ){ return this.actionsEnabled }

        this.actionsEnabled = enabled

        return this
    }



    return m}



//old?
SuperMovieClip = sMc = function(m){


    var t=this,

    //very old?
        m = sAN( sCt(m) )


    m.tl=sTl(m.timeline)

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
MovieClip2 = Mc= function(m){

    var  o=Anim(m),   x=o.x,

        mo="mode",    ae="actionsEnabled" ,

        ar="autoReset",  gcl="getCurrentLabel",

        gts="gotoAndStop",  gtp="gotoAndPlay",

        bd= "buildDate", cf="currentFrame", lp="loop",

        pa="paused",  stP="startPosition",  ind="INDEPENDENT" ,

        SF="SINGLE_FRAME",   sy="SYNCHED",tl="timeline" ;

    o.P = o.p=function(a,b){ x.play(); return o}

    o.S = o.s=function(a,b){ x.stop(); return o}

    o.tl = function(){   Tl( x.timeline )

        return o

    }


    o.label = o.lb=function(){return x.getCurrentLabel(); return o}

    x.cL=function(){return x[gcl]()}

    o.sP=function(a){if(U(a)){return x[sP]};
        x[sP]=a;  return o}

    o.mo=function(a){if(U(a)){return x[m]};
        x[mo]=a;  return o}
    o.lp=function(a){if(U(a)){return x[l]}; x[lp]=a;  return o}

    o.aR=function(a){ if(U(a)){return x[ar]};  x[ar]=a; return o}

    o.aE=function(a){if(U(a)){return x[ae]}; x[ae]=a; return o}
    return m}




