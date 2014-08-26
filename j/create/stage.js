sss=function(){var g=G(arguments)

    z()


    s = St(600).a()


    if(g.f){

        s.a(g.f)

        _e(g.r,

            function(v){ if(F(v)){ v(g.f) }  })
    }

    return s}


stg=function(){

    var g=G(arguments)

    c=Ct().fn( SL )

    s=St(1000)(
        c
    )

    ct=CT(s)

    _e(g,function(g){ c(g) })

    return c}



tSt=function(s){

    if(!O(s)){return}
    if(iSt(s.ob)){return s}
    if(iSt(s)){return St(s)}
}


ap=function(a,s){

    if(tSt(s)){tSt(s)(a)}
    if(iCt(s)){s(a)}

    return a}



iSt=function(a){if(D(a)){return F(a.update)}}

iCt=function(a){
    if(!O(a)){return}
    if(a.ob){return iCt(a.ob)}
    if(D(a)){return F(a.addChild)}
}




EaselContainer=Ct=function(o){var g=G(arguments),o=g[0]
    if(!iCt(o)){
        return g.p?

            Ct(Ct$(),'+'):Ct(Ct$())}

    o=Do(g.f,function o(){var g=G(arguments)
        _e(g,function(v){o.a(v)})
        return o})

    o._ch=o.ob.children


    o.a=function(a,b){var g=G(arguments),a=g[0],b=g[1];if(U(a)){o.Q().a();return o}
        if(A(a)){_e(a,  function(v){  o.b(v,function(a){  SL(a)}) }); return o}
        a=bj(a)
        if(N(b)){o.ob.addChildAt(a,b)}
        o.ob.addChild(a)
        return o}

    o.wC=function(f){
        //iterates over Do(children)
        var a=arguments,g=G(arguments),f=g[0]
        if(F(f)){_e(o.ch(),f);return o }
        if(S(f)){o.wC(function(b){
            if(D(_r(a)[0])){_a(b[f],_r(a))}
            else{b[f]()}});return o}
        return o}


    o.ch=function(a,b){var g=G(arguments),a=g[0],b=g[1]
        if(g.n){
            if(U(a)){o.ob.removeAllChildren()}
            if(O(a)){o.ob.removeChild(bj(a))}
            if(N(a)){o.ob.removeChildAt(a)}
            return o}
        if(F(a)){o.ob.sortChildren(a);return o}
        if(U(a)){return _m(o._ch,Do)}
        if(a=='#'){return o.ob.getNumChildren()}
        if(a=='?'){return o.ob.contains(bj(b))}
        if(N(b)){o.ob.swapChildrenAt(a,b);return o}//*** bottom-most=0

        if(N(a)){return Do(o.ob.getChildAt(a))}//***

        if(O(b)){return o.ob.swapChildren(a,b)}

        if(N(b)){

            o.ob.setChildIndex(bj(a), b)
        }



        if(O(a)){return o.ob.getChildIndex(bj(a))}

        if(S(a)){return Do(o.ob.getChildByName(a))}

        return o}



    o.mC=function(m){var g=G(arguments),m=g[0]
        if(U(m)){return o.ob.mouseChildren}
        o.ob.mouseChildren=g.n?false:true
        return o}

    o.tC=function(m){var g=G(arguments),m=g[0]
        if(U(m)){return o.ob.tickChildren}
        o.ob.tickChildren=g.n?false:true
        return o}


    o.uP=function(x,y,f){var g=G(arguments),x=g[0],y=g[1],f=g[2],ob
        if(O(x)){return o.uP(x.X, x.Y)}
        if(g.p){return _m(o.ob.getObjectsUnderPoint(x,y),Do)}
        ob=o.ob.getObjectUnderPoint(x,y)
        if(ob){ob=Do(ob)}
        return ob}


    o.bgi=function(a){

        o.bm(a, function(b){ o.ch(b, 0) }) //o.ob.setChildIndex(b.ob,0)


        return o}



    o.b =o.bm=function(a,b){

        var g=G(arguments),
            a=g[0],b=g[1]

        if(A(a)){
            _e(a,function(v){
                o.b(v,function(a){
                    if(g.p){SL(a)}})})
            return o}


        //this is for when returning the mug
        //it is a dataUrl, but for some reason,
        //i must run parseJSON on it

   //    if(S(a)){ if( a.indexOf('data') ){ a= im($.parseJSON(a)) }}


        if(I(a)){
            a=B$(a)

            o.ob.addChild(a)

            return Do(a)
        }


        if( O(a) && S(a.d) ){ a=a.d } // ?

        if( O(a) ){

            a=bj(a)

            if(N(b)){o.ob.addChildAt(a,b)}

            o.ob.addChild(a)

            return o}


        if(S(a)){} //this is where you pass lambda?


        Bm(a, function(bm){

            if(g.N){o.a(bm)}

            if(S(b)){$w[b]=bm}

            if(F(b)){b(bm)}

            if(g.p){bm.rgc('+')}

        })

        return o}


    o.bData=function(data){
       return o.b(im(  $.parseJSON(data) ))
    }


    o.mg=function(f){

        wMb(function(m){

            o.b(m)
            f(m,o)
        })

        return o}

    _e(g.r, function(v){o.b(v)})

    if(g.p){SL(o)}

    return o}




//stage has no size.. it is just associated with a canvas
//s.o('e', f) -> on mouse enter canvas



St=function(n1,n2,c){

    var g=G(arguments),

        st=iCt(g[0])?g[0]:
            C(g[0])?S$(C(g[0])):
                S$(C(_a(can,g))),

        o=Ct(st)

    o.st=o.ob //o.st=st

    o.C=o.ob.canvas

    o.X=xx(o.C)

    o.Q=qq(o.C)


    o.u=function(a){
        if(U(a)){st.update()}

        if(a==='!'){st.clear()}
        if(a==='0'){st.autoClear = false}
        if(a==='1'){st.autoClear = true}
        return o}


    o.du=function(){return o.ob.toDataURL()}

    o.mx=function(){return o.ob.mouseX}
    o.my=function(){return o.ob.mouseY}


    // pass nothing: if mouseInBounds (is mouse over CANVAS), get x,y. o/w get false
    // +: mouseMoveOutside=true
    // -: mouseMoveOutside=true
    // ?: is mouseMoveOutside
    // num: enableMouseOver(num)

    o.M=function(a){var g=G(arguments), a=g[0]

        if(U(a)){

            if(g.p){//error? cant be pos if undef?
                o.ob.mouseMoveOutside=true;return o}

            if(g.n){
                o.ob.mouseMoveOutside=false;return o}

            if(o.ob.mouseInBounds){
                return {x:o.mx(),y:o.my()}}

            return false}

        //if(a=='?'){return o.ob.mouseMoveOutside}

        if(N(a)){o.ob.enableMouseOver(a)
            return o}}
    o.nS=function(a){
        if(U(a)){return o.ob.nextStage}
        o.ob.nextStage=a;
        return o}
    o.tOU=function(a){if(U(a)){return o.ob.tickOnUpdate}
        o.ob.tickOnUpdate=a;return o}//x
    o.hE=function(a){if(U(a)){
        return o.ob.handleEvent}
        o.ob.handleEvent=a;
        return o}//x

    o.eDE=function(){//this is a function
        var g=G(arguments)
        o.ob.enableDOMEvents(g.n?false:true)
        return o}

    o.c=function(c){
        if(U(c)){return o.X.bc()}
        o.X.bc(c);return o}

    o.w=function(a){if(U(a)){return o.X.w()}
        o.X.w(a)
        return o}

    o.h=function(a){if(U(a)){return o.X.h() }
        o.X.h(a)
        return o}

    o.wh=function(w,h){
        if(N(w)){o.w(w);o.h(N(h)?h:w);return o}
        return {w:o.C.width,h:o.C.height}}


    o.drg=function(){
        //this drags the canvas, not just the stage
        o.Q.drg();return o}




    o.op=function(a){o.Q.op(a);return o}

    o.hide=function(){
        _e(ob.children,
            function(a){Do(a).vs('-')
            });return o}

    o.ts=function(j,f){

        return o.t(function(o,e){

            if(!N(j.ts)){j.ts=0
                j.lts=e.ts}


            else{
                j.ts=e.ts-j.lts
                j.lts=e.ts
                f(j.ts)}

        })}

    o.sv=function(f){sv(o.X);if(f){if(S(f)){f=ldr(f)};sec(f)};return o}





    //add a container to a stage, and then run function:
    //f(container, stage)
    //option: make container draggable
    o.ct=function(f){
        var g=G(arguments),
        f=g[0],

        c=Ct()

        o.a(c)

        f(c,o)

        if(g.p){SL(c)}
        return o}



    o.bgi=function(a){o.bm(a,function(b){
        o.ob.setChildIndex(b.ob, 0)});return o}

    o.D=function(a,b,c,d){

        return o.o('D',a,b,c,d)

    }



    if(g.M){o.t()}

    if(g.n){z()}

    if(g.p){o.a()}

    return o}





///////////////////////////////


fromSt=function(){
         var o ={}
         o.bFit=function(a,pc,f){   pc=pc||1; o.b(a, {x:o.w()*pc,  y:o.h()*pc},f);    return o}
         o.bPerc=function(a,b,c){  var b=b||1; o.b(a,{x:t.w()*b, y:t.h()*b}, c); return o};

         o.wow=function(){  Bm(x,function(b){o.a(b); TR(b)}); return o}
         o.addShape=function(a,b,c){var h=H(); o.a(h); if(S(a)){h.g.f(a)};
             if(F(a)){a(h.g,h,t)}; if(F(b)){b(h.g,h,t)}; return h}



     }
fromCont=function(){o={}


     o.perc=function(a,b,c){
         bmFit=function(a,pc,f){pc=pc||1
             o.b(a,{x:o.w()*pc,y:o.h()*pc},f)
             return o}

         b=b||1
         o.b(a, {x:o.w()*b,y:o.h()*b}, c)
         return o}
     o.dr=function(){return o.a(_a(rct,arguments))}
     o.TR=function(b){

         o.bm(TR, b||'me')
         return o}
     o.SL=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             SL(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.SK=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             SK(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.RT=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             RT(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.SC=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             SC(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.magic=function(){
         return o.SC().SL().RT() }

     o.b1=function(a,f,v,p,FF){var g=G(arguments)

    a=a||o

    if(D(v)){ v=adj($V(v)) }


    if(p=='c'){p=[(o.w()-v.x)/2,(o.h()-v.y)/2]}



    Bm(_s(a),
        function(b,x){

            o.a(

                $do(

                    xym(b, $V(p)),f))
            o.U()
            _e(FF, function(f){b[f]()})

        },
        v)
    return o}
o.B2=function(a){
    im(a,function(i){
        o.a(b=sDo(B$(i)))})}
 }