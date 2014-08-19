


Hx=function(a,b){

    if(O(a)){return Do(H$(a))}

    var h=Do(H$())

    h.g=h.ob.graphics

    if(S(a)){h.g.f(a)}
    if(F(b)){b(h.g, h)}
    if(iSt(b)){b.a(h)}


    h.f= h.fC=function(a){
        h.g.f(oC(a))
        return h}



    h.s= h.sC=function(a){h.g.s(oC(a))
        return h}

    h.clr=function(){h.g.clear()
        return h}
    h.c= h.cir=function(x,y,r,c,d){
        if(!N(r)){return h.c(0,0,x,y,r)}
        if(c){h.f(c)}
        if(d){h.s(d)}
        h.g.dc(x,y,r);
        return h}


    h.r= h.rec=function l(x,y,wd,ht,fc,sc){
        if(!N(wd)){return l(0,0,x,y,wd,ht)}
        x=x||0;y=y||0;wd=wd||100; h=h||wd;
        fc=oC(fc||'x');
        sc=oC(sc||'y')
        if(fc){h.f(fc)}
        if(sc){h.s(sc)}
        h.g.r(x,y,wd,ht)
        return h}


    h.ss=function(a,b,c,d){
        h.g.ss(a,b,c,d);return h
    }

    return h}









rct=function l(x,y,w,h,fc,sc){

    if(!N(w)){return l(0,0,x,y,w,h)}

    x=x||0;
    y=y||0;
    w=w||100;
    h=h||w;

    fc=oC(fc||'x');
    sc=oC(sc||'y')

    var sh=Hx()//.fn(SL)

    sh.g.f(fc).s(sc).r(x,y,w,h)

    return sh}






Gx=function(st){

    var g=G$()

    g.fs=function(a,b){
        g.f(oC(a))

        if(S(b)){g.s(oC(b))}
        return g}

    g.d=function(s){g.draw(st||s)}

    g.dr0=function(w,h){
        w=N(w)?w:100
        h=N(h)?h:w
        g.dr(0,0,w,h)

        return g }

    g.H=function(){return Hx(g)}

    return g}



EaselCircle = cir=function p(x,y,r,fc,sc){var gx=Gx()

    if(O(x)){
        return p(
            x.x,
            x.y,
            x.r,
            x.fc,
            x.sc)}

    r=N(r)?r:8;
    x=N(x)?x:100;
    y=N(y)?y:100

    gx.ss(r/8).fs(fc,sc||'z').dc(0,0,r)


    return Hx( gx ).xy(x||100,y||100)}





//canon
ball=function(z,fc,sc){

    var b=cir(0,0,z,fc,sc)

    b.r=z
    b.d=z+z

    b.T=function(a){
        if(U(a)){return b.y()-b.r}
        b.y(a+ b.r);return b}
    b.B=function(a){if(U(a)){return b.y()+b.r}
        b.y(a-b.r);return b}
    b.L=function(a){if(U(a)){return b.x()-b.r}
        b.x(a+b.r);return b}
    b.R=function(a){if(U(a)){return b.x()+b.r}
        b.x(a- b.r);return b}
    b.F=1
    b.fall=function(r){b.t(function(){
        if(r){if(ballBox(b,r)){b.F=0}else{b.F=1}}
        if(b.F){b.y(10,'+')}
    })}
    return b}



box=function(w,h,fc,sc){
    w=w||200;
    h=h||w

    var b=rct(
        0-w/2,0-h/2,w,h,fc,sc)

    b.wr=w/2
    b.hr=h/2
    b.wd=w
    b.hd=h


    b.T=function(a){
        if(U(a)){return b.y()-b.hr}
        b.y(a+ b.hr);
        return b}


    b.B=function(a){
        if(U(a)){return b.y()+b.hr}
        b.y(a-b.hr);
        return b}


    b.L=function(a){
        if(U(a)){return b.x()-b.wr}
        b.x(a+b.wr);
        return b}


    b.R=function(a){if(U(a)){return b.x()+b.wr}
        b.x(a- b.wr);return b}


    b.fall=function(){

        b.t(function(){
            if(b.F){b.y(40,'+')}  //****
            if(ballBox(b,r)){b.F=0}})}

    return b}
ballBox=function(bl,bx,buff){ buff=buff||100
    var b= bl.B()>=bx.T()  && bl.T()<=bx.T()+buff  &&

        bl.x()>=bx.L()  &&   bl.x()<=bx.R()

    if(b){bl.B(bx.T())}

    return b}

EaselText = TX=function(a,r,f,x,y){var g=G(arguments),

    t=Do(new C$.Text(
        g[0],
        (N(f)?g[2]+'px Arial':g[2])||'20px Arial',
        oC(g[1]||'z')))

    t.xy(N(g[3])?g[3]:100,
         N(g[4])?g[4]:N(g[3])?g[3]:  100)

    t.bl=function(b){

        if(U(b)){return t.ob.textBaseline}

        t.ob.textBaseline=b;return t}

    if(g.N){t.bl('alphabetic')}

    if(g.p){TR(t)}

    return t}



//shooty  //b=circle('w', 8, j.x()+75, j.y())
circle2=function p(r,z,x,y){
    var gx=Gx()

    if(!S(r)){
        return p('r',r,z,x)}
    z=N(z)?z:32;
    x=N(x)?x:100;
    y=N(y)?y:100
    gx.ss(z/8).fs(r,'z').dc(0,0,z)

    return Hx( gx ).xy(x||100,y||100)}
cir0=function l(x,y,r,fc,sc){var h=Hx()
    if(O(x)){return l(x.x,x.y,x.r,x.fc,x.sc)}
    x=x||0;
    y=y||0;
    r=r||8

    fc=fc||'w';
    sc=sc||'z';

    h.c(x,y,r,fc,sc)

    SL(h)

    return h}
