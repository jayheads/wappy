qM=function(a){return $m('q',$(a))}

clo=function(a){return qq(qq(a).q.clone())}

eq=function(a,b){return $(a).eq(b)}



qq=function(e,b,c,d){

    if(O(e)){

        if(e.name==='q'){return e}

        if(e.name==='x'){e=e.c}

        if(E(e)){e=Q(e)}}

    else {e=$('<'+oO('t', e||'d')+'>'+(b||'')+'</>')}

    var q=function q(a,b){var g=G(arguments)
        if(N(a)){return q.wh(a*100,(b||a)*100)}
        if(U(a)){return q.O()}
        if(P(a)){return q.s(a).at(b)}
        if(A(a)){q.res=_a(q.m,arguments)
            return q}
        _e(g,function(a){if(S(a)){q.H(a)}
            if(O(a)){q.a(a)}})
        return q}


    q.jq=q.q=Q(e)

    q.el=q.e=q.q[0]

    q.css=q.s=function(a,b){q.res=ss(q.q,a,b);return q}

    q.method=q.m=qM(q.q)

    q.on=q.o=function(){
        _a(ee(q),
            arguments);return q  }


    q.po=function(a,b){
        q.res=pp(q.q, a,b)
        return q}



    q.append=q.a=function(a,b){var g=G(arguments), a=g[0], b=g[1]

        if(a===2){
            q.q.appendTo(Q(b||bd()))

            if(g.p){q.p('s')}
            return q}

        if(g.n){
            if(U(a)){
            bd().prepend(q.q);return q}
            if(A(a)){_e(a,q.a(a))}
            else {_e(g,function(a){
                if(a.ob && iSt(a.ob)){ a=a.Q}
                q.q.prepend(Q(a))
            })}}

        else{

            if(U(a)){

                bd().q.append(q.q);return q}

            if(A(a)){_e(a,q.a(a))}

            else{
                _e(g,function(a){
                if(a.ob && iSt(a.ob)){ a=a.Q}
                q.q.append(Q(a))})}}

        if(g.p){ qq(a).p('s')  }

        return q}
    q.prependTo=q.p2=function(a){q.q.prependTo($(a||'body'));return q}
    q.prepend=q.pp=function(a){
        if(U(a)){return q.p2()}
        q.q.prepend(Q(a))
        return q}



    //q.d=function(){return q.pp()()}

    q.opacity=q.op=function(a){
        if(N(a)){q.s('a',a)};
        return q}




    q.id=function(a){return q.at({id:a})}

    q.unbind=q.ub=function(f){q.q.unbind();return q}

    q.hide=q.hd=function(){q.q.hide();return q}
    q.show=q.sh=function(){q.q.show();return q}
    q.toggle=q.tg=function(){q.q.toggle();return q}

    q.empty=q.E=function(){var g=G(arguments)
        q.q.empty();
        _e(g,function(g){q(g)})
        return q}





    q.off=q.F=function(){
       q.q.off()
    return q}


    q.remove=q.X=function(){q.q.remove();return q}
    XX=function(q){q.X()}//remove me
    q.XX=function(){q.pa().X();return q}



    q.delBt=q.xb=function(){//x button!!!
        q.pp(
            _d()(bt('x',function(){q.X()},'-').k('pr').M(20)))
        return q}


    q.O=function(){
        _o(q);
        return q}



    q.class=q.k=function(a){ kl(q)(a); return q}

    q.backgroundColor=q.c=function c(a,b){var g=G(arguments),
        s=q.s, i=is(a)
        if(i(0)){return s('c', b||'z')}
        if(i('*')){return q.c($r())}
        if(i('**')){return q.s('c', $r() )}
        if(i('***')){return q.c($r(), $r() )}
        if(U(b)){q.s('C', $r('c',a));return q}
        q.s({C:a,c:b})
        return q}

    q.w=function(w,b){
        if(U(w)){return q.q.width()}
        if(w==='+'){return q.w(q.w()+b)}
        if(w==='*'){return q.w(q.w()*b)}
        if(w==='%'){return q.w(q.w()*b *.01)}
        q.q.width(w)
        //q.q.width((w<10)?w*100:w)
        return q}


    q.h=function(h,b){
        if(U(h)){return q.q.height()}
        if(h==='+'){return q.h( q.h()+b ) }
        if(h==='*'){return q.h( q.h()*b) }
        if(h==='%'){return q.h( q.h()*b *.01 ) }
        q.q.height(h)
        //q.q.height(  (h<10)?h*100:h)
        return q}

    q.wh=function(a,b){return q.w(a).h(b)}

    q.full=function(){q.wh(W(),H())}//make something full height

    q.Z=function(w,h){w=w||5;
        return q.wh(w*100,(h||w)*100)}

    q.siz=function(z,b){
        if(U(z)){return q.ch().size()}
        if(z==='-'){return {w:q.q.width(), h:q.q.height()  }}
        if(z==='+'){q.w(q.w()+b); q.h(q.h()+b)}
        if(z==='*'){q.w(q.w()*b); q.h(q.h()*b)}
        if(z==='%'){q.w(q.w()*b*.01); q.h(q.h()*b*.01)}
        q.h(b||z)
        q.w(z)
        return q}


    q.auto=function(){return q.w('auto').h('auto')}

    q.top=q.t=function(a){if(U(a)){return q.q.position().top}  //_i(q.pt())
        q.s('t',a)
        return q}


    q.left=q.l=function(a){
        if(U(a)){return q.q.position().left  //_i(q.pl())

        }
        q.s('l',a);return q}



    q.leftTop=q.lt=function(a,b){b=b||a
        q.l(a).t(b)
        return q}


    q.right=q.r=function(a){if(U(a)){return _i(q.q.right())}
        q.s('r',a);return q}


    q.bottom=q.bo=function(a){if(U(a)){
        return _i(q.q.bottom())}
        q.s('b',a);return q}



    q.x=q.osl=function(x){if(U(x)){return q.q.offset().left}
        return _i(x-q.x())}//used in drg //q.osl=function(){return q.q.offset().left}


    q.y=q.ost=function(y){if(U(y)){return q.q.offset().top}
        return _i(y-q.y())}//used in drg//q.ost=function(){return q.q.offset().top}


    //get position
    q.position= q.ps=function(){return q.q.position()}
    q.positionLeft=q.psl=function(){return q.ps().left}
    q.positionTop=q.pst=function(){return q.ps().top}

    q.z=function(a){var g=G(arguments),
        n=N(a)?a:g.p?100:g.n?-100:S(a)?eval('q.z()'+a):false
        return N(n)?q.s('z',n):q.s('z').res}//z-index

    q.position2=q.p=function(a,l,t){
        if(U(a)){return ss(q,'p')}
        q.s('p',a);if(l){q.l(l)};if(t){q.t(t)}
        return q}//position



    q.display=q.dp= q.dy=function(a,l,t){
        if(U(a)){return ss(q,'y')}
        q.s('y',a);return q}//display



    q.parent=q.pa=function(){return qq(q.q.parent())}

    q.children=q.ch=function c(a){
        if(N(a)){return qq(c()[a||0])}
        return q.q.children(a)}

    q.children2=q._c=function(){return _c(q.q)}//children


    q.forEach=q.fe=function(a){return q.b('fe',a)}

    q.forEachData=q.feD=function(a){return q.fe('$data.'+a)}

    q.serialize=q.ser=function(){var g=G(arguments)
        if(g.N){return q.q.serializeArray()}
        return q.q.serialize()}



    qit=function(a,b){a=a||'result'
        var q=qi(a)

        if(q.q){
            if(U(b)){return q.T()}
            if(S(b)){q.T(b)}
            if(O(b)){q.T(b.ser('-'))}
            return q}}


    q.$=function(f){if(f){return q.o('$',f)}
        q.q.click();return q}

    q.$$=function(f){if(f){return q.o('$$',f)}
        q.q.dblclick();
        return q}

    q.bind=function(a){return _.bind(q.c[a],q.c)}

    q.ngModel=function(m){q.at('ng-model',m)
        return q}
    q.ngCont=function(m){
        q.at('ng-controller',m)
        return q}
    q.ngSwitch=function(m){q.at('ng-switch',m)
        return q}
    q.ngClick=function(m){q.at('ng-click',m)
        return q}
    q.ngRepeat=function(m){q.at('ng-repeat',m)
        return q}
    q.ngShow=function(m){q.at('ng-show',m)
        return q}
    q.ngIf=function(m){q.at('ng-if',m)
        return q}
    q.ngSubmit=function(m){q.at('ng-submit',m)
        return q}

    q.jLoad=function(a){qJ(a,function(d){q(d)})
        return q}






    q.innerHTML=q.ih=function(){return q.q[0].innerHTML}

    q.outerHTML=q.oh=function(){return q.q[0].outerHTML}

    q.outerHTML2= q.H=function(t){
        if(t==='e'){q.res=q.q[0];return q}
        if(t==='o'){q.res=q.outerHTML;return q}

        if(U(t)){return q.q.html()}

        q.q.html(t)
        return q}


    q.text=q.T=function(t){
        if(U(t)){return q.q.text()}
        q.q.text(t)
        return q}//text



    q.knockoutBind=q.b=function(a,b){
        var o=[]

        if(O(a)){
            _e(a,function(v,k){o.push(oO('b',k)+':'+v)})
            q.at({b:o.join()})}


        else{

            q.at({b:oO('b',a)+':'+b})}


        return q}
    q.knockoutBind2=q.bd=function(a){var g=G(arguments),a=g[0]
        if(g.p){a='text: '+a}
        if(g.n){a='click: '+a}
        if(g.m){a='value: '+a}
        if(g.d){a='checked: '+a}
        q.at({b:a})
        return q}




    q.pt=function(a){if(U(a)){return ss(q,'gt')};q.s('gt',a);return q}
    q.pb=function(a){if(U(a)){return ss(q,'gb')};q.s('gb',a);return q}
    q.pl=function(a){if(U(a)){return ss(q,'gl')};q.s('gl',a);return q}
    q.pr=function(a){if(U(a)){return ss(q,'gr')};q.s('gr',a);return q}

    q.mt=function(a){if(U(a)){return ss(q,'mt')};return q.s('mt',a)}
    q.mb=function(a){if(U(a)){return ss(q,'mb')};return q.s('mb',a)}
    q.ml=function(a){if(U(a)){return ss(q,'ml')};return q.s('ml',a)}
    q.mr=function(a){if(U(a)){return ss(q,'mr')};return q.s('mr',a)}


    q.bt=function(a){if(U(a)){return ss(q,'bt')};q.s('bt',a);return q}
    q.bb=function(a){if(U(a)){return ss(q,'bb')};q.s('bb',a);return q}
    q.bl=function(a){if(U(a)){return ss(q,'bl')};q.s('bl',a);return q}
    q.br=function(a){if(U(a)){return ss(q,'br')};q.s('br',a);return q}

    q.margin=q.M=function(a){return q.mt(a).mb(a).ml(a).mr(a)}
    q.margin2=q.mg=function(a){if(U(a)){return ss(q,'g')};q.s('g',a);return q}

    q.padding=q.P=function(a){return q.pt(a).pb(a).pl(a).pr(a)}

    q.border=q.B=function(a){return q.bt(a).bb(a).bl(a).br(a)}
    q.border2=q.bd=function(a,b,c){
        if(N(a)&&U(b)){return q.s({dw:a})};
        return q.s('d',OL(a,b,c))}


    q.outline=q.ol=function(a){return q.s('o',OL(a||'m'))}


    q.borderWidth=q.bw=function(a){return q.s({dw:a})}
    q.borderStyle=q.bs=function(a){return q.s({ds:a})}
    q.borderColor=q.bc=function(a){return q.s({dc:a})}

    q.font=q.f=function(a){if(N(a)){return q.s('fz',a)}
        return q.s('f',FO(a))}//font

    q.overflowAuto=function(){}

    q.cen=function(){return q.k('tc')}

    q.type=q.ty=function(t){return q.at({
        type:oO('i',t)})}//type

    q.name=q.nm=function(a){return q.at({name:a})}

    q.href=q.hr=function(a){return q.at({href:a})}

    q.attribute=q.at=function(a,b){q.res=aa(q.e,a,b)   // get/set attr//for,name,id,val, etc...
        return q}

    q.value=q.v=q.V=function(a){var g=G(arguments),a=g[0],v=q.q.val()
        if(U(a)){if(g.N){q.q.val('')};return v}
        q.q.val(a)
        return q}//q.vx=

    q.modalToggle=q.m=function(a){q.q.modal(a||'toggle');return q}

    q.multipartFormData=q.mpfd=function(){return q.at({enctype:'multipart/form-data'})}

    q.action=q.act=function(a){return q.at({a:a||'/upl'})}

    q.dropDown= q.dd=function(a){return q.k('ddt').at({'dt':'dropdown'})}

    q.src=function(){return q.src}

    q.fadeOut=q.fO=function(n,f){q.q.fadeOut(n,f);return q}
    q.fadeIn=q.fI=function(n,f){q.q.fadeIn(n,f);return q}
    //fO=function(a){Q(a).fadeOut(b,c)}
    //fI=function(a){Q(a).fadeIn(b,c)}

    q.fadeOutIn=q.OI=function(n1,n2){q.q.fadeOut(n1).fadeIn(n2||n1);return q}
    q.slideUp=q.sU=function(n,f){q.q.slideUp(n,f);return q}
    q.slideDown=q.sD=function(n,f){q.q.slideDown(n,f);return q}

    q.h1=function(a){q.j({h:'100%'})}
    q.w1=function(a){q.j({w:'100%'})}
    q.wh1=function(a){q.j({h:'100%',w:'100%'})}


    q.animate=q.j=function(b,c){
        if(N(b)){q.q.delay(b);return q}
        b=qs(b)
        if(D(c)){q.q.animate(b,c)}
        else {q.q.animate(b)}
        return q}

    q.jj=function(a,b){var i=is(a),
            m=i('t')?'toggle'
                :i('s')?'hide'
                :i('h')?'show'
                :i('sd')?'slideDown'
                :i('su')?'slideUp'
                :i('fo')?'fadeOut'
                :i('fi')?'fadeIn'
                :0

        if(m){q.q[m](b);return q}}



    //q.anims=[q.slU,q.slD,q.slT,q.fI,q.fO,q.fT]
    //q.anim=function(b,c){return N(c)? q.q.animate(qs(b),c*1000): q.q.animate(qs(b)) }
    /////////

    q.placeholder=q.ph=function(a){return q.at({ph:a})}//set placeholder

    q.drg=function(){drg(q);return q}


    q.backgroundImage=q.bgi=function(a){////////
        q.s('bi',_s(a,'+'));return q}



    q.data= q.da=function(a,b){q.at('data-'+a,b)}

    //q.sp=function(a,b,c){return q.a(sp(a,b,c))}
    //q.dv=function(a,b,c,d){return q.a(dv(a,b,c,d))}

    q.contents=q.ct=function(a,b){return q.q.contents(b)}

    //append to an element 1 or more image els

    q.image=q.i=function(){var g=G(arguments)
        _e(g,function(i){q(im(i))})
        return q}

    q.setBackgroundImage=q.bi=function(a){//set background image
        var u=function(a){
            return 'url("'+ src(a) +'")'}
        q.s({bi:u(a)})
        return q}

    q.positionBackgroundImage=q.bp=function(x,y){
        var g=G(arguments),x=g[0],y=g[1]
        x=N(x)?x:0
        y=N(y)?y:0
        q.s({bp:x+'px '+y+'px'})
        return q}

    q.setFrame= q.fr=function(n,w){
        if(O(n)){q.bp(n.n,n.w)}
        else{q.bp(n*w)}
        return q}

    q.animateFrames=q.anf=function(n,w){
        var c=0
        n=n||10
        w=w||20
        I(function(){q.fr(c,w)
            c= (c+1) % n},1000)}


    if(O(b)){q.s(b)}
    if(O(c)){q.at(c)}
    if(S(d)){q.H(d)}
    if(F(d)){q.$(d)}
    return q}




JQANIM=function(){z()

    a=dva().bi('chicks').anf()

    anim=function(o){o=ob(o)

        return {
            u:o.u||'chicks',
            n:o.n||1,
            w:o.w||64,
            r:o.r||60,
            c:o.c||0,
            l:o.l||false}}



    an=function(q,a){

        if(q.han){
            cI(q.han)}

        if(a.u){q.bi(a.u)}

        if(a.n>1){
            q.han=I(function(){
                    a.c++
                    if(!a.l && a.c>a.n ){
                        cI(q.han);
                        q.han=false}
                    else{a.c%=a.n}
                    q.fr(a)},
                a.r)}}
}





cI=clearInterval






qi=function(a,b){
    var q=qq($('#'+a))
    if(S(b)){eval('q.'+b)}
    if(O(b)){q(b)}
    return q}


clk=function(a){return qi(a).$()}


qk=function(a,b){
    var q=qq($('.'+a)[0])
    if(S(b)){eval("q."+b)}
    if(O(b)){q(b)}
    return q}

qe=function(a,f){_e(
    $('.'+a),
    function(q){f(qq(q))})}



