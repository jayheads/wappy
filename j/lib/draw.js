ast=function(x,y,r,vx,vy){var s=$w['s']||St(1000)

    x=x||_r(s.w()+20)
    y=y||_r(s.h()+20)
    r=r||_r(10)+5
    vx=vx||_r(100)/25-2
    vy=vy||_r(100)/25-2

    var a={}

    a.c=cir({
        x:0, y:0, r:r, fc:'w'
    }).xy(x,y).dx(vx).dy(vy)

    a.r=r
    a.gl= a.c.gl
    a.x= a.c.x
    a.y= a.c.y
    a.XX= a.c.XX

    a.a=function(){s.a(a.c)}

    a.p=function(){aA.push(a)}

    a.u=function(){
        a.c.x(a.c.dx(),'+')
        a.c.y(a.c.dy(),'+')
        if(a.c.ax){a.c.dx(a.c.dx()+a.c.ax)}
        if(a.c.ay){a.c.dy(a.c.dy()+a.c.ay)}

        if(a.c.x()>s.w()||a.c.x()<0 ){
            a.c.dx('-')
            a.c.ax*=-1}

        if(a.c.y()>s.h()||a.c.y()<0 ){
            a.c.dy('-')
            a.c.ay*=-1}}

    a.c.cc(-20,-20,40,40)

    return a}

sun=function(){return xx().bc('X').f('sun')}

wB=function(f){qG('/ball',f)}


bl=function(d,y){

    ball=$w['ball']||dva()

    var b=function(b){ball.lt(b.x,b.y)}

    if(U(d)){wB(b)}

    else{if(N(d)){d={x:d,y:N(y)?y:d}}
        qP('/ball',d,function(){
            wB(b)})}}


cage=function c(n){
    var g=G(arguments),n=g[0]
    r=( _r(100) )*( _r(1)?1:-1 )

    if(N(n)){
        return g.p? n+r
            : g.n? n*r*.01
            :n*r}

    return g.n?r*.01:r}



sunIn=function(){return pntInCir(lsun.cx(),lsun.cy(),{
    x:sun.x()+(sun.w()/2),y:sun.y()+(sun.h()/2),r:sun.h()/2})}

mugIn=function(){return pntInCir(lsun.cx(),lsun.cy(),{
    x:mug.x()+(mug.w()/2),y:mug.y()+(mug.h()/2),r:mug.h()/2})}


guy2=function(x,y){return circle('r',32,x,y)}

mon=function(x,y,vx,vy){
    var b=circle('g',40,x,y)
    if(N(vx)){b.dx(vx)}
    if(N(vy)){b.dy(vy)}
    return b.mv('+')}

mon2=function(st,x,y,vx,vy){st.bm(function(b){
    if(N(vx)){b.dx(vx)};if(N(vy)){b.dy(vy)}
    st.a(b.xy(x,y).mv('+').bnc())})}


hit=function(j,b){ var g=G(arguments),
    w=j.w(),h=j.h(),x=j.x(),
    y=j.y(), bx=b.cx(),
    by=b.cy(),
    res=((bx>x&&bx<x+w)&&(by>y&&by<y+h))
    if(g.n){if(res){j.X()}}
    return res}

kill=function(b){
    var s=b.st(),ch=s.ob.children;
    _e(ch,function(c){
        if(b.ob!=c){
            hit(Do(c),b,'-')}})}


inSt=function(j){var x=j.x(), y=j.y(), s=j.st(),
    w=s.w()-100, h=s.h()-100,
    b=x>0&&x<w&&y>0&&y<h,g=G(arguments)
    if(g.n){if(!b){g[0].X()}}
    return b}








game=function(){z('w')
    st=St().t().a()
    g=guy(100,100)
    st.a(g)
    g.ctr().wrp()
    st.o('sd',function(){st.a(bul(g))})
    mon2(st,100,100,2,4)}


butt=function(){
    wMb(function(bm){j=bm; j.xy(300)
        j.sxy(.2)
        SL(j); s=St(600).a(j)
        gun(s,j)
        ROW(s,_d()(b1=bt('start!',function(){f=j.o('t',function(b,ev){e=ev
            $l(ev.d)
            b.x(10,'+')})}),b2=bt('stop!',function(){
            if(F($w['f'])){j.O('t',f)}})),'+').a()})}

butt2=function(){Bm('me',function(bm){
    j=bm;f=j.o(function(b){b.x(10,'+')})
        ROW(s=St(600).a(j),
            _d()(b1=bt('start!',f),
                b2=bt('stop!',function(){
                    j.O(f)})),'+').a() })}
// wMb(function(b){SL(b.wh(60).xy(100,400),'-')},s)//  wMb(function(b){SL(b.wh(60).xy(400,100),'+')},s)


guy2=function(x){
    var g={ x:200,y:200,r:20,

        dx:1,dy:1, c:0, h:1000,

        d:function(){
            var t=this;x.cir(t.x,t.y,t.r,'b','y')},
        u:function(){
            var t=this
            t.x=wrp(0,1200,20)(t.x+t.dx)
            t.y=wrp(0,600, 20)(t.y+t.dy)}}
    g.d()
    return g}


bul2=function(x,y,dx,dy){
    var t=this
    t.dx*=-5;
    t.dy*=-5;
    t.r=8;

    t.d=function(){
        c.O(t.x,t.y,t.r,'pink','white')}

    t.u=function(){
        t.x-=t.dx
        t.y-=t.dy}

    Bs.push(t)}


wrp=function(a,b,c){c=c||0
    return function(d){
        return d<a?b-c:d>b?a+c:d}}













wG=function(f){qG('/gz',function(g){f(g)})}





FLASH=function(){z()


    tl=dva().auto()

    tl(
        can('b',500,500) ,br()
    )

    _t(24,

        function(x){

        tl(
            dv(10).H(x+1).s({y:'ib'})

        )

    })





                  }




