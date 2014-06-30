
_can=function(){
    return qq($("<canvas>"))
}



sCan=function(can){

    can=can || _can().c('b')

    can=qq(can)

    can.cx=X(can)

    can.pC=xP(can.cx)
    can.mC=xM(can.cx)


    //can.l=function(n){if(!n){return osl(can.q)};return _i(n-can.l())}
    //can.t=function(y){if(!y){return ost(can.q)};return _i(y-can.t())}
    //can.rm=function(){qq(x.c).X()}
    //can.backgroundColor= can.bc=function(c){var g=G(arguments),c=g[0];if(g.n){c='X'};can.q.c(c);return can}//b

    can.sv  =can.snap= can.saveImage= function(){sv(x)}//b

    can.S   =can.saveState= function(){can.cx.save();return can}

    can.R   =can.restoreState= function(){
        can.cx.restore();
        return can}


    //DRAWING
    can.dI=function(i){
        var g=G(arguments);
        g[1]=g[1]||0;g[2]=g[2]||0;
        _a(can.mC,_c('d',g))}


   can.d=function(i){
        var g=G(arguments),i=g[0]
        im(i,function(i){
            g[0]=i;
            _a(can.dI,g)})}
   can.dC=function f(i,X,Y){

        if(U(X)){//draw img in center of can
            im(i,function(i){can.d(i, (can.w()/2)-(i.w()/2), (can.h()/2)-(i.h()/2))})}

        else {//draw it by specifying location of its center
            Y=Y||X
            im(i, function (i) {can.d(i, X - i.w() / 2, Y - i.h() / 2)})}

        return can}


    //fit
    can.f= can.fit=function f(a,X,Y){
        a||'me'
        X=X||0
        Y=Y||0

        can.d(a,X,Y, can.w(),can.h())

        return can}


    can.me=function me(n){//randomly draw my face
        var g=G(arguments),n=g[0]||200
        if(x.me.d){
            clearInterval(x.me.d);x.me.d=false}
        else{x.me.d=I(function(){
            x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
        return x}

    can.me.d=false
    can.mug=function(m){
        qP('/mug',{u:m},
            function(m){x.fit(m)})
        return x}

    can.crop=function rc(x1,y1,x2,y2){
        if(A(x1)){
            return rc( x1[0],x1[1], x1[2]-x1[0], x1[3]-x1[1])}
        return x.d(x,x1,y1,x2,y2,
            0,0,x.w(),x.h())}


    //get data url
    can.du=can.u=function(){return tU(can.el)}

    can.img=new Image()
    can.img.src=can.u()

    // DIMS
    can.w=function(w){
        var g=G(arguments)

        if(U(w)){return _w(can.el)}

        if(g.N){var u=can.u()}
        _w(can.el,w)
        if(g.N){can.fit(u)}
        return can}


    can.h=function(h,z){
        if(!h){return _h(can.el)}
        if(!z){var u=can.u()}
        _h(can.el,h)
        if(!z){can.fit(u)}
        return can}


    can.wh=function(w,h){if(!w){
        return $V(can.w(),can.h())}
        var u=can.u()
        can.w(w)
        can.h(h||w)
        can.fit(u)
        return can}

    can.Z=function(w,h){w=w||5;return can.wh(w*100,(h||w)*100)}


    //COPY/PASTE
    can.C= can.copy=function(){
        can.img.src=can.u();
        return can}

    can.P=can.paste=function(){
        var g=G(arguments)
        if(g.N){can.clr()}
        if(g.p){can.f(can.img)}

        else {can.d(can.img)}}

    //fill rect
    can.fillRect=can.fr=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||can.w()
        d=d||can.h()
        can.mC('fr',a,b,c,d)
        return can}

    //clear screen [+ fill with color || run fx]
    can.clr=function(a){
        if(S(a)){can.fs(a);return can.fr()}
        can.cx.clearRect(0,0,can.w(),can.h())
        if(F(a)){a()}
        return can}

    can.cfr=function(a){
        var g=G(arguments)
        can('S')
        can({f:_a(tCl,g)},'fr',0,0,can.w(),can.h())
        can('R')
        return can}


    /// EVENTS ///
    can.$=function(f){
        var cX=function(e){return e.clientX},
            cY=function(e){return e.clientY}
        x.q.q.click(function(e){f(mX(e)-osl(x.q.q),mY(e)-ost(x.q.q))})}

    can.$$=function(f){x.q.q.dblclick(function(e){
        f(mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}




    can.MV=function(f){

        x.q.q.mouseover(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.MO=function(f){

        x.q.q.mouseout(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.ME=function(f){
        x.q.q.mouseenter(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.ML=function(f){
         x.q.q.mouseleave(function(e){f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}

    can.MU=function(f){

        x.q.q.mouseup(function(e){
            f( mX(e)-osl(x.q.q),
                    mY(e)-ost(x.q.q)
            )})}

    can.MM=function(f){
        x.q.q.mousemove(function(e){
            f( mX(e)-osl(x.q.q), mY(e)-ost(x.q.q))})}



    can.MD=function(f){
        can.q.mousedown(function(e){
            f(mX(e)-osl(can.q), mY(e)-ost(can.q))
        })}
    return can}




    mX=function(e){return e.clientX},
    mY=function(e){return e.clientY}





can2=function(){

    // FONT/TEXT
    //set font
    can.fo=function(f){x.x.font=$f(f);return x}

    can.tx=function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X

        if(g.n){x.x.strokeText(t,X,Y)}
        else if(g.p){x.tx(t,X,Y,'-');x.tx(t,X,Y)}
        else x.x.fillText(t,X,Y)

        return x}
    can.ftc=function(t,p2){return x.ft(t,x.w()/2-x.mt(t)/2,p2)}
    can.Text=function(a,b,c){var g=G(arguments),
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
    can.ss=function(c){var g=G(arguments)
        if(c=g.p?$r('c',c):Oo('c',c)){x({s:c})}
        return x}

    //set fill style [+ stroke style]
    can.fs=function(c,sc){var g=G(arguments)
        if(O(c)){x.x.fillStyle=c;
            return x}
        if(c=g.p?$r('c',c):Oo('c',c)){
            x({f:c})}
        if(D(sc)){x.ss(sc)}
        return x}
    can.sfl=function(c,f,s,l){x({f:f,s:s,w:l});return x}

    /// LINES ////
    can.moveTo=x.mt=function(t){return x.x.measureText(t).width}
    can.begin=x.bg=function(p1,p2){if(A(p1)){return x.bg(p1[0],p1[1])}
        x('b')
        x('m',p1,p2)
        return x}

    can.lt=function(p1,p2){var g=G(arguments)
        if(A(p1)){
            _e(g,
                function(p){
                    x.lt(p[0],p[1])})}

        else {x('l',p1,p2)}


        x('s')

        return x}
    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ([[],[]],[[],[]] || [],[])
    can.ln=function rc(p){var g=G(arguments),p=g[0]
        if(AA(p)||(A(p)&&_z(p)==4)){_e(g,function(p){_a(rc,p)})}
        else if(A(p)){x.bg(g.f);_a(x.lt,g.r)}
        else if(N(p)){x.bg(g[0],g[1]); x.lt(g[2],g[3])   }
        return x}
    //draw horizontal line
    can.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    //draw vertical line
    can.lnv=function(X,Y,l){
        var g=G(arguments),X=g[0],Y=g[1],l=g[2],
            Y2=g.p?Y+l:g.n?Y-l:l
        return x.ln(X,Y,X,Y2)}

    //line stroke settings
    can.lW=x.lw=function(n){
        n=n||10;x({w:n});return x}

    can.ml=function(n){n=n||10;x({m:n});return x}
    can.lC=x.lc=function(n){n=n||'r';x({p:n});return x}
    can.lJ=x.lj=function(n){n=n||'r';x({j:n});return x}

    //x.to=function(a,b,c){if(N(b)){o.m('l',a,b)};if(N(c)){o.m('a2',arguments)}}


    /// CIRCLES/CURVES ///
    can.cir=function(X,Y,R,fs,ss){
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

    can.curve=function f(a,b,c,d,e,f){
        var g=G(arguments)
        if(N(e)){x('z',a,b,c,d,e,f)}
        else{x('q',a,b,c,d)}
        if(g.N){x('s')}}
    can.pip=function(c,a,b){
        return x('ip',a,b)}
    can.a2=function a2(X){var g=G(arguments)
        if(A(X)){return _a(a2(x), X)}
        x('a2',g[0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)
        x('s')
        return x}





    can.clip=function(){x.x.clip();return x}
    can.closePath= can.cp=function(){x.x.closePath();return x}

    can.dots=function(){
        can.DOTS=[]
        can.dats=[]
        can.$(function(X,Y){
            x.cir(X,Y)
            x.DOTS.push([X,Y])
            x.dats.push(pI(X))
            x.dats.push(pI(Y))
            x.ln(x.DOTS)})

        can.$$(function(X,Y){var du

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

    can.lg=function(a,b,c,d){

        a=a||0
        b=b||0
        c=c||x.w()
        d=d||x.h()
        return sGr(
            x.x.createLinearGradient(a,b,c,d))

    }

    can.rg=function rg(){
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

    can.createPat=x.cPt=function(c,im,b){
        return xM(c)('p',im,oO('pt',b||'r'))}//=createPattern

    can.grad=function(g,s,w,h){ //depr?
        var fn=_z(g)==4?lG:rG;
        g=_a(fn,_c(x.x,g))
        if(O(s)){_e(s,function(v,k){var o=S(v)?{k:k, v:v}:{k:v, v:k}
            acs(g,o.k ,$r('c',o.v))})}
        x({f:g})
        x.fr()
        return g}

    can.grad2=function(a,b,c,d,e,f){var g=G(arguments), gr

        if(!N(a)){
            return x('p',a,pt[b]||null)} //pattern

        if(f){g=x('rg', g)} else if(d){gr=x('rg',G); return acs(gr,a,b)}

        if(!N(a)){return x.x.createPattern(a,oO('pt',b)||null)}

        if(f){g=x.x.createRadialGradient(a,b,c,d,e,f)} else if(d){g=x.x.createLinearGradient(a,b,c,d)}

        return g.addColorStop(a,b)}

    can.sampRadGrad=x.grr=function(g){
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
    can.sampLinGrad=x.gr=function(g){
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
    can.IntervalGrad=x.gra=function(){var a=0, b=1000
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

    can.shadow=x.sd=function(){

    }





    //TRANSFORM
    //scale MULTIPLIER
    can.scale=x.sc=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.scale(X,Y)}

    can.translate=x.tr=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}


    can.rotate=x.rt=function(r){var g=G(arguments),
        r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)}
    can.transform=x.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('t',a,c,e,b,d,f)}
    can.setTransform=x.stf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('st',a,c,e,b,d,f)}




    // PIXEL-DATA
    can.getData=x.gD=function(X,Y,w,h){
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
    can.putData=x.pD=function(d,X,Y){
        X=X||0
        Y=Y||0
        return x('P',d,X,Y)}
    //get [-> X()] -> put
    can.getPut=x.gp=function(a,X,Y){
        var g=G(arguments),
            a=g[0],X=g[1],Y=g[2],
            d=_a(x.gD,a,x)
        if(g.n){x.X()}
        return x.pD(d,X,Y)}
    can.pX=0
    can.pY=0
    can.sX=function(n){x.pX=n;return x}
    can.sY=function(n){x.pY=n;return x}

    can.bigX=function(r){x.ln([0,0],[x.w(),x.h()],[0,x.w()],[x.h(),0])}
    can.com=function(){_e(arguments,function(b){if(!A(b)){b=[b]}
        _a(x,b)})
        return p}
    //x.line=function(a,b,c,d){var p1=a, p2=b;return x.com('b',['m',p1[0],p1[1]],['l',p2[0],p2[1]],'s')}
    can.sun=function(a,b,s){
        s=s||1;x.gr([[a||0,b||a||0],
                    s*100,s*500],{'y':0,1:tCl('p',0)},
            600,600)}
    can.ball=function(b){b=b||{}
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
    can.norm=function(){return x('sc', x.w()/10, x.h()/10)}





return can}










 cv=function(){}

 cva=function(){}

 $c=function(){}




