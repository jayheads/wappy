
xx=function xx(c,w,h,t,l){

    if(C(c)){c=C(c)}
    else if(!S(c)){return xx($r(),c,w,h,t)}

    else{

        var g=G(arguments),
            can=_c()

            c=g[0]
            w=g[1]
            h=g[2]
            t=g[3]
            l=g[4]

        w=w||4
        h=(h||w)
        if(h<10){h*=100}
        if(w<10){w*=100}
        can.s({C:c, a:.6}).at({w:w, h:h}).a()


        if(g.N){

            l=l||3
            t=(t||l)
            if(l<10){l*=100}
            if(t<10){t*=100}
            can.p('a').drg().l(l).t(t)}


        c=can}



    var x=function x(a,b){

        var g=G(arguments)
            if(F(a)){return a}
            if(A(a)){return x.p(a[0])}
            if(O(a)){x.p(g.f);if(!b){return x.x}
                x.res=_a(x.m,g.r,x);return x}
            if(S(a)){x.res=_a(x.m, g);return x}
            return x.res}

    x.c=c
    x.x=X(x.c)
    x.p=xP(x.x)
    x.m=xM(x.x)


    //inherit from q
    x.q=qq(x.c)
    x.o=function(a,b,c){x.q.o(a,b,c);return x}
    x.a=function(){x.q.a();return x}
    x.ox=function(){return x.q.q.offset().left}
    x.oy=function(){return x.q.q.offset().top}


    x.id=function(a){
        if(U(a)){return x.q.id()}
        x.q.id(a)
    return x}//////////////////////



    x.l=function(n){if(!n){
        return osl(x.q)}
        return _i(n-x.l())}


    x.t=function(y){if(!y){
        return ost(y.q)}
        return _i(y-x.t())}


    //remove
    x.rm=function(){qq(x.c).X()}



    //save
    x.snap=x.saveImage=x.sv=function(){sv(x)}//b


//SAVE/RESTORE
    x.saveState=x.S=function(){
        x.x.save();return x}


    x.restoreState=x.R=function(){
        x.x.restore();return x}

    //back color
    x.backgroundColor=x.bc=function(c){var g=G(arguments),c=g[0]
        if(g.n){c='X'}
        x.q.c(c);return x}//b



    //DRAWING
    x.dI=function(i){var g=G(arguments);
        g[1]=g[1]||0;g[2]=g[2]||0;
        _a(x.m,_c('d',g))}

    x.d=function(i){
        var g=G(arguments),i=g[0]
        im(i,function(i){g[0]=i;_a(x.dI,g)})}

    x.Cd=function(a,X,Y){
        im(a, function(i){x.d(i, X- i.w()/2, Y-i.h()/2)})}

    x.dC=function f(i,X,Y){
        im(i,function(i){
            x.d(i, (x.w()/2)-(i.w()/2), (x.h()/2)-(i.h()/2))})
        return x}


    //fit
    x.fit=x.f=function f(a,X,Y){
        a||'me'
        X=X||0
        Y=Y||0

        x.d(a,X,Y,x.w(),x.h())

        return x}

    x.me=function me(n){//randomly draw my face
        var g=G(arguments),n=g[0]||200
        if(x.me.d){
            clearInterval(x.me.d);x.me.d=false}
        else{x.me.d=I(function(){
            x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
        return x}
    x.me.d=false

    x.mug=function(m){
        qP('/mug',{u:m},
            function(m){x.fit(m)})
        return x}

    x.crop=function rc(x1,y1,x2,y2){
        if(A(x1)){
            return rc(
                x1[0],x1[1],
                    x1[2]-x1[0],
                    x1[3]-x1[1])}
        return x.d(x,x1,y1,x2,y2,
            0,0,x.w(),x.h())}




    //get data url
    x.du=x.u=function(){return tU(x.c)}

    x.img=new Image()
    x.img.src=x.u()


    // DIMS
    x.w=function(w){var g=G(arguments)
        if(U(w)){return _w(x.c)}
        if(g.N){var u=x.u()}
        _w(x.c,w)
        if(g.N){x.fit(u)}
        return x}

    x.h=function(h,z){
        if(!h){return _h(x.c)}
        if(!z){var u=x.u()}
        _h(x.c, h)
        if(!z){x.fit(u)}
        return x}

    x.wh=function(w,h){if(!w){
        return $V(x.w(),x.h())}
        var u=x.u()
        x.w(w)
        x.h(h||w)
        x.fit(u)
        return x}

    x.Z=function(w,h){w=w||5;return x.wh(w*100,(h||w)*100)}

    //COPY/PASTE
    x.copy=x.C=function(){x.img.src=x.u();return x}
    x.paste=x.P=function(){var g=G(arguments)
        if(g.N){x.X()}
        if(g.p){x.f(x.img)}
        else {x.d(x.img)}}


    //fill rect
    x.fillRect=x.fr=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||x.w()
        d=d||x.h()
        x.m('fr',a,b,c,d)
        return x}

    //clear screen [+ fill with color || run fx]
    x.X=function(a){
        if(S(a)){x.fs(a);return x.fr()}
        x.x.clearRect(0,0,x.w(),x.h())
        if(F(a)){a()}
        return x}

    x.cfr=function(a){
        var g=G(arguments)
        x('S')
        x({f:_a(tCl,g)},'fr',0,0,x.w(),x.h())
        x('R')
        return x}



    // FONT/TEXT
    //set font
    x.fo=function(f){x.x.font=$f(f)
        return x}
    x.tx=function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X

        if(g.n){x.x.strokeText(t,X,Y)}
        else if(g.p){x.tx(t,X,Y,'-');x.tx(t,X,Y)}
        else x.x.fillText(t,X,Y)

        return x}
    x.ftc=function(t,p2){return x.ft(t,x.w()/2-x.mt(t)/2,p2)}
    x.Text=function(a,b,c){var g=G(arguments),
        f=function f(a,b){if(S(a)&&U(b)){f.tt=a}}
        if(g.p){return{f:a,fo:b,tb:c}}
        f.x=ca(a,b,c)
        if(U(a)){return f.x.font}
        if(S(a)){f.x.font=a}
        f.f=function(a,b){f.x.p('fo',$f(a))}

        f.t=function(a,b,c){
            if(c){f(c)
                return f.t(a,b)}

            f.x.m('ft',f.tt,a,b)}
        return f}

    //set stroke style
    x.ss=function(c){var g=G(arguments)
        if(c=g.p?$r('c',c):Oo('c',c)){x({s:c})}
        return x}
    //set fill style [+ stroke style]
    x.fs=function(c,sc){var g=G(arguments)
        if(O(c)){x.x.fillStyle=c;
            return x}
        if(c=g.p?$r('c',c):Oo('c',c)){
            x({f:c})}
        if(D(sc)){x.ss(sc)}
        return x}
    x.sfl=function(c,f,s,l){x({f:f,s:s,w:l});return x}

    /// LINES ////
    x.moveTo=x.mt=function(t){return x.x.measureText(t).width}

    x.begin=x.bg=function(p1,p2){if(A(p1)){return x.bg(p1[0],p1[1])}
        x('b')
        x('m',p1,p2)
        return x}

    x.lt=function(p1,p2){var g=G(arguments)
        if(A(p1)){
            _e(g,
                function(p){
                    x.lt(p[0],p[1])})}

        else {x('l',p1,p2)}


        x('s')

        return x}
    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ([[],[]],[[],[]] || [],[])
    x.ln=function rc(p){var g=G(arguments),p=g[0]
        if(AA(p)||(A(p)&&_z(p)==4)){_e(g,function(p){_a(rc,p)})}
        else if(A(p)){x.bg(g.f);_a(x.lt,g.r)}
        else if(N(p)){x.bg(g[0],g[1]); x.lt(g[2],g[3])   }
        return x}
    //draw horizontal line
    x.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    //draw vertical line
    x.lnv=function(X,Y,l){
        var g=G(arguments),X=g[0],Y=g[1],l=g[2],
            Y2=g.p?Y+l:g.n?Y-l:l
        return x.ln(X,Y,X,Y2)}

    //line stroke settings
    x.lW=x.lw=function(n){
        n=n||10;x({w:n});return x}

    x.ml=function(n){n=n||10;x({m:n});return x}
    x.lC=x.lc=function(n){n=n||'r';x({p:n});return x}
    x.lJ=x.lj=function(n){n=n||'r';x({j:n});return x}

    //x.to=function(a,b,c){if(N(b)){o.m('l',a,b)};if(N(c)){o.m('a2',arguments)}}


    /// CIRCLES/CURVES ///
    x.cir=function(X,Y,R,fs,ss){
        var g=G(arguments),
            X=g[0]||200,
            Y=g[1]||200,
            r=g[2]||1,
            fs=g[3],
            ss=g[4]
        x('b')('a',X,Y,r,0,7,false)
        x.fs(fs)
        x.ss(ss)
        x('s')('f')
        return x}

    x.curve=function f(a,b,c,d,e,f){
        var g=G(arguments)
        if(N(e)){x('z',a,b,c,d,e,f)}
        else{x('q',a,b,c,d)}
        if(g.N){x('s')}}
    x.pip=function(c,a,b){
        return x('ip',a,b)}
    x.a2=function a2(X){var g=G(arguments)
        if(A(X)){return _a(a2(x), X)}
        x('a2',g[0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)
        x('s')
        return x}


    /// EVENTS ///
    x.$=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.click(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.$$=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.dblclick(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.$$x=function(f){
        x.q.q.dblclick(function(e){
            f(cX(e)-osl(x.q.q),
                    cY(e)-ost(x.q.q))})}
    x.MV=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.mouseover(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.MO=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.mouseout(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.ME=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}
        x.q.q.mouseenter(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.ML=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}
        x.q.q.mouseleave(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.MU=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.mouseup(function(e){
            f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))

        })}
    x.MM=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.mousemove(function(e){f( cX(e)-osl(x.q.q), cY(e)-ost(x.q.q))})}
    x.MD=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}

        x.q.q.mousedown(function(e){
            f(cX(e)-osl(x.q.q),
                    cY(e)-ost(x.q.q))})}


    x.clip=function(){x.x.clip();return x}
    x.closePath=x.cp=function(){x.x.closePath();return x}

    x.dots=function(){
        x.DOTS=[]
        x.dats=[]
        x.$(function(X,Y){
            x.cir(X,Y)
            x.DOTS.push([X,Y])
            x.dats.push(pI(X))
            x.dats.push(pI(Y))
            x.ln(x.DOTS)})

        x.$$(function(X,Y){var du

            x.S()
            x.closePath()
            x.q.off()
            x.q.c('X')

            du=x.du()

            x.X()
            x.clip()
            x.fit(du)
            x.bc('w')})

        return x}



// GRADIENTS


    acs=function acs(g,n,s){
        // pass only a gradient -> function with gradient curried
        // add a color stop to a gradient
        if(U(n)){return _p(acs,g)}
        g.addColorStop(n,oO('c',s))
        return g}

    sGr=function(g){
        g.a=function(n,c){acs(g,n,c);return g}
        return g}

    x.lg=function(a,b,c,d){

        a=a||0
        b=b||0
        c=c||x.w()
        d=d||x.h()
        return sGr(
            x.x.createLinearGradient(a,b,c,d))

    }
    x.rg=function rg(){
        var g=G(arguments)
        g[0]=g[0]||10
        g[1]=g[1]||10
        g[2]=g[2]||100
        g[3]=g[3]||(g[2]+100)
        g[4]=g[4]||g[0]
        g[5]=g[5]||g[1]
        g[6]=g[6]||g[3]
        return x('rg',
            g[0],g[1],g[2],
            g[3],g[4],g[5],g[6]).res}

    x.createPat=x.cPt=function(c,im,b){
        return xM(c)('p',im,oO('pt',b||'r'))}//=createPattern

    x.grad=function(g,s,w,h){ //depr?
        var fn=_z(g)==4?lG:rG;
        g=_a(fn,_c(x.x,g))
        if(O(s)){_e(s,function(v,k){var o=S(v)?{k:k, v:v}:{k:v, v:k}
            acs(g,o.k ,$r('c',o.v))})}
        x({f:g})
        x.fr()
        return g}

    x.grad2=function(a,b,c,d,e,f){var g=G(arguments), gr

        if(!N(a)){
            return x('p',a,pt[b]||null)} //pattern

        if(f){g=x('rg', g)} else if(d){gr=x('rg',G); return acs(gr,a,b)}

        if(!N(a)){return x.x.createPattern(a,oO('pt',b)||null)}

        if(f){g=x.x.createRadialGradient(a,b,c,d,e,f)} else if(d){g=x.x.createLinearGradient(a,b,c,d)}

        return g.addColorStop(a,b)}
    x.sampRadGrad=x.grr=function(g){
        g=g||x.rg()

        var s=acs(g)
        s(0,'r')
        s(0.05,'b')
        s(0.05,'b')
        s(0.1,'r')
        s(0.1,'r')
        s(0.15,'b')
        s(0.15,'b')
        s(0.2,'r')
        s(0.5,'y')
        s(1,'b')

        x({f:g})
        x.fr()}
    x.sampLinGrad=x.gr=function(g){
        g=g||x.lg()

        var s=acs(g)

        s(0,'r')
        s(0.05,'b')
        s(0.05,'b')
        s(0.1,'r')
        s(0.1,'r')
        s(0.15,'b')
        s(0.15,'b')
        s(0.2,'r')
        s(0.5,'y')
        s(1,'b')

        x({f:g})

        x.fr()

        return x}
    x.IntervalGrad=x.gra=function(){var a=0, b=1000
        I(.02, function(){
            a+=1; b-=2;
            x.gr([200,200,a,290,270,b],
                {y:.1,r:.3,V:1})})}


    // PROPS

    //alpha
    x.op=function(n){x({a:n||.5})
        return x}

    // global comp

    gCo=function(c){return _p(xP(c),'g')}
    x.gc=gCo(x.c)

    x.shadow=x.sd=function(){

    }





    //TRANSFORM
    //scale MULTIPLIER
    x.scale=x.sc=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.scale(X,Y)}

    x.translate=x.tr=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}


    x.rotate=x.rt=function(r){var g=G(arguments),
        r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)}
    x.transform=x.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('t',a,c,e,b,d,f)}
    x.setTransform=x.stf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('st',a,c,e,b,d,f)}




    // PIXEL-DATA
    x.getData=x.gD=function(X,Y,w,h){
        var g=G(arguments),
            X=g[0]|| 0,
            Y=g[1]|| 0,
            w=g[2]||x.w(),
            h=g[3]||x.h(),
            d=x('G',X,Y,w,h).res
        d.h=d.height
        d.w=d.width
        d.d=d.data
        return d}
    x.putData=x.pD=function(d,X,Y){
        X=X||0
        Y=Y||0
        return x('P',d,X,Y)}
    //get [-> X()] -> put
    x.getPut=x.gp=function(a,X,Y){
        var g=G(arguments),
            a=g[0],X=g[1],Y=g[2],
            d=_a(x.gD,a,x)
        if(g.n){x.X()}
        return x.pD(d,X,Y)}
    x.pX=0
    x.pY=0
    x.sX=function(n){x.pX=n;return x}
    x.sY=function(n){x.pY=n;return x}

    x.bigX=function(r){x.ln([0,0],[x.w(),x.h()],[0,x.w()],[x.h(),0])}
    x.com=function(){_e(arguments,function(b){if(!A(b)){b=[b]}
        _a(x,b)})
        return p}
    //x.line=function(a,b,c,d){var p1=a, p2=b;return x.com('b',['m',p1[0],p1[1]],['l',p2[0],p2[1]],'s')}
    x.sun=function(a,b,s){
        s=s||1;x.gr([[a||0,b||a||0],
                    s*100,s*500],{'y':0,1:tCl('p',0)},
            600,600)}
    x.ball=function(b){b=b||{}
        var dir = b.d||false,
            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com(
            'b',['a',px,py,rad,0,per,dir],
            {f:fs,s:ss,w:lw},'f','s')}


//give scale cos(rads), skew:sin(rads)  ??
    x.norm=function(){return x('sc', x.w()/10, x.h()/10)}




    return x}



X=function X(c){

    if(O(c)){//if(c.name='x'){return c.x}

        if(c.canvas){return c}
        if(C(c)){return C(c).getContext('2d')}

        if(c.x){return X(c.x)}
        if(c.q){return X(c.q)}
    }
}






rt=function(a,b){
    if(U(b)){return a.rotation}
    a.rotation=b
    return a}




smoothWithStop=function(){
    d=dv().id('test').a()(y=cx('x',40).q.k('box'))

    $('#test').hover(function(){$('.box').stop().fadeTo(200,1)},
        function(){$('.box').stop().fadeTo(200,0)})}


BIG=function(){z()



    d=dv().id('test').a()(y=cx('x',40).q.k('box'))



    d2=dv().id('debug').a()



    //x=cx('y',1000,800).a()
   // x.$$(function(){x.f('me')})









}





notAnim=function(a){return a.filter(':not(:animated)')}
notAnim.t=function(){var s=1000,m=function(n){return {marginLeft:n}},n=0
    d=dv().id('test').a()(y=cx('x',40).q.k('box'))
    d2=dv().id('debug').a()
    $('#test').click(function(){notAnim($('.box')).animate(m(-10),s,
        function(){$('#debug').append('<p>start..'+(n++)+'<p>')})
        .animate(m(10),s).animate(m(-10),s).animate(m(10),s).animate(m(-10),s).animate(m(-10),s)
        .animate(m(0),s,function(){$('#debug').append('<p>fin..<p>')})})}




HSP=horizSlidPanels=function(){z()


    // rather than worry about synchronization between each panel
    //we will take last li in ul.k(panels) and position it to top right
    //of ul - this way,  when he sum width of all the panels occasionally
    //adds to greater than 100 percent of the ul as they animate..
    //the last li never breaks to the next line

    var s=200

    d=_d().k('container')(
      _d().k('panels')(sp('1'),  sp('2'),  sp('3'), sp('4'), sp('5')),
      _d().k('panels')(sp('A'),  sp('B'),   sp('C'),  sp('D'),  sp('E'))).a()
    $('span').css({width:'100px',fontSize:'40px'})
      if(_z($('div.panels'))){
          $('div.panels span:last-child').addClass('last')
          $('div.panels span').hover(
              function(){$(this).stop().animate({width:'110px',fontSize:'50px'},s)
                      .siblings('span').stop().animate({width:'90px',fontSize:'30px'})},
              function(){$(this).stop().animate({width:'90px',fontSize:'30px'})})}}


tree=function(){z();var s=200
    d=_d().k('container')(

        pg().k('tree_controls')(

            lk('expand all').k('expand_all'),
            lk('collapse all').k('collapse_all')
        )).a()


    quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"

    ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"

    sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"


    pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+ "</ul></li></ul>"



    q=qq( $(pri) )
    d(q)


    if(_z($('ul.tree'))){
        $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function(){



            if($(this).hasClass('expand_all')){$l('ex_all')

                $(this).parent('p').next('ul').find('a.tree_trigger').addClass('trigger_expanded')
                return false}

            else {$l('!ex_all')

                $(this).parent('p').next('ul').find('a.tree_trigger')
                .removeClass('trigger_expanded').end()
                .find('ul').removeClass('tree_expanded')}
            this.blur();return false

        })


        $(document).on('click',function(){

            if( $(this).hasClass('tree_trigger') ){

                          if($(this).next('ul').is(':hidden')){
                              $(this).addClass('trigger_expanded').next('ul').addClass('tree_expanded')}

                          else {$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')}
                          this.blur()
                          return false
                     }})








        $('ul.tree li:last-child').addClass('last')

        $('ul.tree_expanded').prev('a').addClass('trigger_expanded')


    }



}



spi=function(i){return sp().id(i)}


CAN=function(){var picHolder

    format()

    s2(picHolder=spi('pics'))


    eaI(function(v){

        picHolder(

            xc(v.d, 1,

                function(){

                qi('mouse').V('click').q.change()

                mug=v.d

            }))})




    s2(x=cx('y',1000,800))

    I(function(){x.bc()},10000)


    s1(

        lb('mouse'),


        sel('none','click','enter','leave','move').id('mouse').o(

            function(s){

             x.q.ub()

                if(s=='click'){
                    x.$(function(X,Y){
                    x.Cd(mug,X,Y)
                })}


                if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
                if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
                if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

                    x.MU(function(){x.q.ub('mousemove')})}


        }),



        lb('global comp'),
        _a(sel,V(oO('g'))).o(function(v){x.gc(v)}),

        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),


        bt('SAVE(sv)',function(){x.sv()}),br(2),

        bt('CUT(dots)',function(){
            x.q.q.unbind()
            qi('mouse').v('none')
            x.dots()}),br(2),


        bt('RESTORE(R)',
            function(){x.R()}),br(2),

        bt('bc:change background color',function(){x.bc()}),br(2),

        bt('cir:make circle',function(){x.cir(100,100,100)}),br(2),

        bt('d:draw',function(){x.d($w['mug']||'me')}),br(2),
        bt('dC:draw center',function(){x.dC($w['mug']||'me')}),br(2),

        bt('me',function(){x.me()}),br(2),



        bt('sh1',function(){x.ln(sh1)}),br(2),
        bt('sh2',function(){x.ln(sh2)}),br(2),
        bt('tictactoe',function(){x.ln(tictactoe)}),br(2),


        br(2),
        bt('gr',function(){
            x.gr()
        }),br(2),



        bt('grr',function(){x.grr()}),br(2),
        bt('xxx',function(){xxx('barney')}),br(2),

        bt('bads',function(){bad(x,200,8)  }),br(2),

        bt('coins',function(){coin(x,200,8)  }),br(2))}

tCl=function(n1,n2,n3,n4){
    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :$r('c',n1)}







FAN=function(){

    x=cx('y',1000,800).a()
    y=cx('x',400).a()
    x.$$(function(){x.f('me')})
    x.f('me')

    guidewires=false
    dragging=false
    mousedown={}
    loc={}

    restoreDrawingSurface=function(){}
    updateRubberband=function(m){x.ln(mousedown.x,mousedown.y,m.x, m.y)}
    drawGuidewires=function(){}

    x.MD(function(X,Y){
        dragging=true
        mousedown={x:X,y:Y}})


    x.MM(function(X,Y){

        if(dragging){
            restoreDrawingSurface()
            updateRubberband({x:X,y:Y})}

        if(guidewires){drawGuidewires(loc.x,loc.y)}

    })



    x.MU(function(X,Y){dragging=false
        restoreDrawingSurface()
        updateRubberband({x:X,y:Y})})
}
RUB=function(){z()
    x=cx('y',1000,800).a()
    y=cx('x',400).a()
    x.$$(function(){x.f('me')})
    x.f('me')



    guidewires=false
    dragging=false
    mousedown={}
    loc={}
     rr=null
    data=null



    x.MD(function(X,Y){
        data=x.gD()
        dragging=true
        mousedown={x:X,y:Y}})

    x.MM(function(X,Y){var m={x:X,y:Y},d=mousedown
        if(dragging){x.pD(data)
            x.ln(
                [d.x,d.y,d.x,m.y],
                [d.x,d.y,m.x,d.y],
                [m.x,m.y,m.x,d.y],
                [m.x,m.y,d.x,m.y])}})

    x.MU(function(X,Y){dragging=false
        var d=mousedown,x1,x2,y1,y2
        if(X>d.x){x1=d.x;x2=X} else{x1=X; x2=d.x}
        if(Y>d.y){y1=d.y;y2=Y} else{y1=Y;y2=d.y}

        rr=[x1,y1, x2, y2]

        x.pD(data)

        x.crop(rr)
        data=x.gD()})}
PAN=function(){
    z()
    x=cx('y',1000,800).a()
    y=cx('x',400).a()
    x.$$(function(){x.f('me')})
    x.f('me')}
TEXT=function(){z();x=cx('y',1000,800).a()


    x.$$(function(){x.X()})}
TRANS=function(){


    z()
    x=cx('y',1000,800).a()
    y=cx('x',400).a()
    x.$$(function(){x.f('me')})
    x.f('me')


    identity=function(x){
        x.stf(1,0,0,1,0,0)}


     rotate=function(x,a){
         identity(x)
         x.rt(tRad(a))}

    rotateByAngle=function(px,py,a){var x,y

        x=(px*cos(a))-(py*sin(a))
        y=(py*cos(a))+(px*sin(a))}

    rotateAroundZero=function(px,py,r){var x, y,a='angle'

        x=(px * cos(PI/4))-(py*(sin(PI/4)))
        y=(py * cos(PI/4))+(px*(sin(PI/4)))}


   transformEquations=['x=ax+cy+e','y=bx+dy+f']

    //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
    //x=x+e,y=y+f
    //to scale, use a,d and set others to 0
}


makeGrad=function(){z()
    x=xx(6)

    gg=x.lg(50,50,50,100).a(.5,'b').a(.8,'y')

    x({f:gg})
    x.fr(10,30,500,900)}





can=function(r,w,h,t,l){var g=G(arguments),
    c=_c()
    if(!S(g[0])){return g.p? can('X',r,w,h,t,'+')
        :g.n? can('X',r,w,h,t,'-')
        :can('b',r,w,h,t)}
    if(!N(w)){w=200}
    if(!N(h)){h=w}
    c.at({w:w,h:h}).s({C:r})
    if(g.n){c.a()}
    if(g.p){c.a().drg().t(t).l(l)}
    return c}


cx=function(r,w,h){var g=G(arguments)
    if(g.p){return can('z',(r||4)*100,'+')}
    return xx(_a(can,arguments))}//==cV=function(r){r=r||4; return can('z',(r||4)*100,'+')}



//get first/last canvas/stage/xx
c0=function(){var g=G(arguments),
    c=$('canvas')[0]
    return g.n? xx(c):g.p?St(c):c}
c00=function(){var g=G(arguments),c=_l($('canvas'))
    return g.n? xx(c):g.p?St(c):c}
ci=function(a){return qq(_c()).id(a)}




xc=function(i,z,f){var x=xx(_c()).bc('X')
    if(i){x.f(i)}
    if(z){x.Z(z)}
    if(f){x.o(f)}
    return x}

c1=function(m){return cx().bc('-').Z(1).mug(m)}

//makes image but as a CANVAS :)

xxx=function(a){var x=xx()
    a=a||'me'
    x.bc('-')
    im(a,function(i){x.w(i.w());x.h(i.h());x.d(i)})
    return x}






scaleImCen=function(c,i,s){var o=xx(c),w=c.w,h=c.h
    o('d',i, w*s/-2+w/2, h*s/-2+w/2+h/2, w*s, h*s)}
bad=function(x,n,n1){

    if(N(n1)){var a=[]
        _t(n1,function(){a.push(bad(x,n))})
        return a}

    if(N(n)){return bad(x).du(n)}
    var b={
        x:_r(1200), y:_r(600), r:15,
        dx: _r(10)-5, dy: _r(10)-5}

    b.d=function(){
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.cir(b.x,b.y, b.r,'g','z')

        x.cir(b.x,b.y, 15,'o','z')

        return b}


    b.u=function(){

        b.r *= 1.005
        b.x=wrp(0,1200,20)(b.x+b.dx)
        b.y=wrp(0,600,20)(b.y+b.dy)
        return b}


    b.du=function(n,n2){
        if(N(n)){
            return I(function(){
                b.du()},n)}
        return b.d().u()}

    return b}
coin=function(x,n,n1){

    if(N(n1)){
        var a=[];_t(n1,function(){
            a.push(coin(x,n))});return a}

    if(N(n)){return coin(x).du(n)}

    var c={
        x:_r(0,1200),
        y:_r(0,600),
        r:10,
        dx:_r(0,10)-5,
        dy:_r(0,10)-5}

    c.d=function(){
        x.cir(c.x,c.y,c.r,'b','y')
        return c}

    c.u=function(){
        c.x=wrp(0,1200,20)(c.x+c.dx)
        c.y=wrp(0,600,20)(c.y+c.dy)
        return c}

    c.du=function(n,n2){
        if(N(n)){return I(function(){c.du()},n)}
        return c.d().u()}

    return c}
tictactoe=[[[200,0],[200,600]],[[400,0],[400,600]],[[0,200],[600,200]],[[0,400],[600,400]]]
vec=function(x,y){
    var v=function v(){}
    v.x= x||2
    v.y =y||2
    v.sq=function(){return sq(v.x, v.y)}
    v.l=function(){return sqr( v.sq() )}
    v.a=function(a){var g=G(arguments)
        if(g.n){a=(inv(a))}
        v.x+= a.x;
        v.y+= a.y;
        return v}
    v.s=function(a){v.x*= a;
        v.y*= a;
        return v}
    v.u=function(){v.x= v.x/v.l();
        v.y=v.y/v.l() }
    v.n=function(){v.x*=-1;  v.y*=-1}
    v.p=function(a){return (v.x*a.x)+(v.y*a.y)}
    v.r=function(a){
        v.x=v.x*cos(a)-v.y*sin(a)
        v.y=v.x*sin(a)+v.y*cos(a)
        return v}
    v.toString=function(){
        return '('+tFx(v.x)+','+ tFx(v.y)+')'}
    v.v=v.toString
    return v}
vkl=function(a){return new Function("v","k","l","l[k]="+s)}

pxChangeData=function(d,s){_e(_d(d),function(v,k,l){vkl(s)(v,k,l)})}

pxChangeData2=function(d,s){$m(_d(d),"l[k]="+s)}

fade=function(im){
// sets every fourth value to 50..
// after the manipulation, reset the data
// and put the imagedata back to the canvas
    var imD=_d(im), l=_z(imD)
    for(var i=7;i<l;i+=4){imD[i]=80}
    return _d(im, imD  ) }
pixelz=function(){
    var d=x('G', 0,0,300,300)
    d.d=d.data
    for (var i=0;i < _l(d.d);i+=4){
        d[i]=255-d[i]
        d.d[i+1]=255-d.d[i+1]
        d.d[i+2]=255-d.d[i+2]
        d.d[i+3]=255;}

    x('P', d,0,0)

    x('P', d, 200,200);

    for (var i=0;i<_l(d.d);i+=4){
        d.d[i]=255-d.d[i]
        d.d[i+1]=255-d.d[i+1];
        d.d[i+2]=255-d.d[i+2]
        d.d[i+3]=255
    }}
CUTX=function(i){
    return function(sx,sy){
        return function(sw,sh){
            return function(c){
                return function(dw,dh){
                    return function(dx,dy) {
                        c.x.drawImage(i,sx,sy,sw,sh,dx,dy,dw,dh)}}}}}}
LEFT = function(S){return CUTX(S)(0,0)(S.width/2,S.height)}
drawMy= function(a){cutter(a)(0,0)(a.w,a.h)}


state=0
sh1=[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]]
sh2=[[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]],[[8,13],[12, 13]],[[9,14],[9,18]],[[10,14],[10,18]]]
hits=function(){
    _e(Cs,function(c,C){
        if(xyc(c.x,c.y,g)){
            delete Cs[C];
            g.c+=1}})

    _e(As,function(a,A){
        if (xyc(g.x,g.y,a)){g.h-=1}

        _e(Bs,function(b,B){
            if (xyc(b.x,b.y,a)){delete Bs[B]
                delete As[A]
                As.push(bad())}})})}




startGameX=function(st){

    z('w')
    st=st||St('b',500).a().t()

    game=true

    Cs=[]
    As=[]
    Bs=[]
    g=Guy()
    Bm('guy',function(guy){st.a(guy=a);xy(guy,200)})
    _t(10,function(){Cs.push(coin())})
    _t(15,function(){As.push(bad())})}


updateGameX=function(){if(game){
    g.dx += cap(-5,5)( (e.x()-g.x)/300 )
    g.dy += cap(-5,5)( (e.y()-g.y)/300 )
    bul(g.x,g.y,g.dx,g.dy)}
else{
    alert('game over!')
    if((e.x>450)&&(e.y>290)
        &&(e.x<450 + textWidth)
        &&(e.y<290 + textHeight)){reload()}}
    x=xx().w(800).h(600).$(function(X,Y){
        g.dx+=cap(-5,5)((X-g.x)/300)
        g.dy+=cap(-5,5)((Y-g.y)/300)
        bul(g.x,g.y,g.dx,g.dy)})
    b=bad(x).d()
    c=coin(x).d()
    g=guy(x)
    I(function(){x.X(); b.u().d();g.u().d()}, 30)
    ball={x:1, y:0, vx:0, vy:0}
    _e($d(cat(Bs,Cs,As)),function(a){a.d()
        a.u()})
}


updateScreenX=function(){
    updateBall()
    x.X();x('b')('m',0,500)('l', 300,600)('s')
    drawBall()}


updateBallX= function(){
    sXY(guy,.001,'-')
    XY(guy,0.5,'+')
    XY(ball,ball.vx,ball.vy,'+')
    ball.vy+=.04}
drawBallX =function d(px,py){
    px=px||ball
    if(O(px)){return d(px.x, px.y)}
    x('b')
    x.cir(px,py,2);
    x('f')}







ISOMETRIC=function(){z()}
STORAGE=function(){ z()

    saveFromLocStor=function(){i=ta().id('input')
        i.q.value=localStorage.getItem('myText')||''
        i.o('u',function(){localStorage.setItem('mytext', i.value)},false)}

   readDatFromOtherPageLoc=function(){
              //put windows side by side and watch one update the other
       i=qi('input')
       I(function(){

           i.q.value=localStorage.getItem('myText')||''
       },50) }


    saveFromSesStor=function(){i=ta().id('input')
        i.q.value=sessionStorage.getItem('myText')||''
        i.o('u',function(){sessionStorage.setItem('mytext', i.value)},false)}



}