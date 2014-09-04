
aEL=function(a,b,c,d){return a.addEventListener(b,c,d)}

Y=function(a){return $$w.scroll(a||function(){co()})}


_D=function(o,f){
    var d=$(document)
     return U(o)?d:d.on(oE(o),_v(f))}


m$=function(f){return _D('$',f)}

m$$=function(f){return _D('$$',f)}




kD=function(a,b,c){var g=G(arguments),a=g[0],b=g[1]

    if(U(b)){return _D('kd',function(e){
        _v(a)(g.n?_W(e):fCC(_W(e)))})}


    kD(function(e){
        if(e==(a=='l'?'37':a=='u'?'38':a=='r'?'39':a=='d'?'40'
                :a=='s'?'32':a=='e'?13:0)){
            _v(b)(c)} },'-')}





kU=function(a,b){ var g=G(arguments),a=g[0],b=g[1]


    if(U(b)){
        return _D('ku',  function(e){
            _v(a)( g.n? _W(e) : fCC(_W(e)))})}


    kU(function(e){
        if(e==(
            a=='l'?'37':a=='u'?'38':a=='r'?'39':a=='d'?'40'
                :a=='s'?'32':a=='e'?13:0

            )){_v(b)()} },'-')}


iR=function(e){return _W(e,39)}
iU=function(e){return _W(e,38)}
iD=function(e){return _W(e,40)}
iL=function(e){return _W(e,37)}
toR=function(q,n){
    n=N(n)?n:10
    if(Q(q)){
        q=qq(q);
        return q.l(q.l()+n)}
    return q.x(n,'+')}
toU=function(q,n){n=N(n)?n:10
    if(Q(q)){q=qq(q);return q.t(q.t()-n)}
    return q.y(n,'-')}
toD=function(q,n){n=N(n)?n:10
    if(Q(q)){q=qq(q);return q.t(q.t()+n)}
    return q.y(n,'+')}
toL=function(q,n){

    n=N(n)?n:10

    if(Q(q)){
        q=qq(q)
        return q.l(q.l()-n)}

    return q.x(n,'-')

}




key=function(q){var g=G(arguments),q=g[0]
    if(g.P){kD('l', toL,q); kD('r', toR,q)}
    if(g.N){kD('u', toU,q);kD('d',toD,q)}}



txtKey=function(){

    qi('txt').o('kp',function(q,e){
        qi('spn').T(qi('spn').T()+e.k)})
    qk('txt').o('ku',function(q,e){
        if(e(13)){$l('enter')}})
    qi('txt').o('kd',function(e){
        result=(e(48,'+')&&e(57,'-'))||(e(96,'+')&&e(105,'-')||e(8))})}

ipKU=function(f){
    return qq($('input[type=text]')[0]).o('ku',f)}

upOrDown=function(){
    ipKU(function(e){
    $l(e(38)?'up': e(40)?'down':0)})}

multEvents=function(){
    $('input').on('keydown keypress',
        function(e){
            $l(e.type+':'+e.k+'('+ e.w+')')})}


hideOnKeyDown=function(a){
    qq($d()).o('kd',function(e){
        if(e(27)){
            a.hide()
        }})}


moveElemUp=function(a){
    q=qq(a)
    q.t(q.t()-100)}





sE=function(e){
    var f=function(a){var g=G(arguments)
        return g.p?f.w>=a:g.n?f.w<=a:f.w==a}

    f.e=e
    f.w=e.which
    f.k=fCC(f.w)
    f.A=e.altKey
    f.b=e.bubbles
    f.C=e.ctrlKey
    f.c=e.cancelable
    f.d=e.data
    f.sp=function(){e.stopPropagation()}
    f.pd=e.preventDefault
    f.dp=e.isDefaultPrevented
    f.oe=e.originalEvent
    f.g=e.target
    f.gr=e.relatedTarget
    f.gc=e.currentTarget
    f.gd=e.delegateTarget
    f.M=e.metaKey
    f.p=e.eventPhase
    f.S=e.shiftKey
    f.t=e.type
    f.T=e.timeStamp
    f.px=e.pageX
    f.py=e.pageY
    f.ox=e.offsetX
    f.oy=e.offsetY
    f.cx=e.clientX
    f.cy=e.clientY
    f.sx=e.screenX
    f.sy=e.screenY
    return f}






ee=function ee(element, mouseEvent, func){



    //some partial application
    if(U(mouseEvent)){ return _.partial(ee, element)}

    // can imply '$' (click)
    if( F(mouseEvent) || (S(mouseEvent)&&!(Oo('e', mouseEvent)))){  return ee( element, '$', mouseEvent )}


    //can pass an object of events
    if(O(mouseEvent)){
        _.each(mouseEvent, function(v, k){

            ee(element, k, v)})

        return element}


    _.each(mouseEvent.split(' '), function(mouseEvent){

        element.q.on( oO('e',mouseEvent),

                function(eventObject){

                    var qqTarget = qq(this)

                    eventObject = sE(eventObject)

                    eventObject.x = eventObject.px - qqTarget.x()

                    eventObject.y = eventObject.py - qqTarget.y()

                    func(qqTarget, eventObject)

                })
        })

    return element}





$h=function(a,b){
    var h=qq($('html'))
    if(D(a)){h.o(a,b)}
    return h}






MM=function(a){ return qq($('html')).o('mousemove', a)}

MU=function(a){return qq($('html')).o('mouseup', a)}

MD=function(a){return qq($('html')).o('mousedown', a)}




drg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

        var offset = $(this).offset(),

        deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
                 .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}



touchDrg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('touchstart',

        function(e){ $l('touchstart')

        var offset = $(this).offset(),
            deltaX = e.originalEvent.touches[0].pageX- offset.left,
            deltaY = e.originalEvent.touches[0].pageY - offset.top


            $l(deltaX + ' : ' + deltaY)

            $('html').on( 'touchmove' , function( e ){ $l('touchmove')

            q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
            .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

    })

    return qq(element)

}





TOUCHSTART=function(){

    z()

    d= $div().w(100).h(200).c('r').a()

    touchDrg(d)
}



EASELTOUCH=function(){z()

    stage = SuperStage(500).a()

    createjs.Touch.enable( stage.ob )

    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)

    $div().w(10000).h(10).c('r').a()

}





botWinScroll=function(){dv().s({p:'f',b:0,l:0,w:'100%',h:'30%', nh:110,mh:318,z:4  })().a()}




parallax=function(){z()
   var l=function(i){return dk('layer').s({w:'100%',h:256,p:'a'}).id(i)},
       t=function(a,b){return 'transparent url('+a+'.png)' +b+'% 0px'}
   l('back').s({bg:t('me',10)}).a()
   l('front').s({bg:t('guy',60)}).a()}


jslay=function(){z()

    var l=function(i){return dk('layer').s({w:'100%',h:256,p:'a'}).id(i)},
        t=function(a){return 'transparent url('+a+'.png)'},
        b=l('back').s({bg:t('me')}).a(),
        f=l('front').s({bg:t('guy')}).a()
       speed=0
          xp=0

    $(document).mousemove(function(e){
        speed=e.pageX-(W()/2)
        speed /= (W()/2)
        $l(speed)})

   $(document).mouseout(function(e){speed=0})


    I(function(){xp+=speed
        b.q.css({backgroundPosition: xp+'px 0px'})
        f.q.css({backgroundPosition: (xp*3)+'px 0px'})},30)}



fadeWhite=function f(a){z()
    c=cx().a().cir(10,10,10)
    a=U(a)?0.2:parseFloat(a)+.02
    c.fs('w').op(a).fr()
  if(a<1){T(function(){f(a)},30)}}

////




dh=function(c,i){c.dI(i, -i.width/2, -i.h/2)}

fuzzy=function(range,base){return (base||0)+(_r()-.5)*range*2}
v2=function(x,y){

    var v={x:x,y:y}
    v.muls=function(n){return v2(v.x*n, v.y*n)}
    v.imuls=function(n){v.x*=n;v.y*=n;return v}
    v.mul=function(vv){return v2(v.x*vv.x, v.y*vv.y)}
    v.imul=function(v){v.x*=vv.x;v.y*=vv.y;return v}
    v.divs=function(n){return v2(v.x/n, v.y/n)}
    v.div=function(n){ return v2( v.x/vv.x,v.y/vv.y)  }
    v.adds=function(n){return v2(v.x+n,v.y+n)}
    v.iadds=function(n){v.x+=n;v.y+=n;return v}
    v.add=function(vv){return v2(v.x+vv.x, v.y+vv.y)}
    v.iadd=function(v){v.x+=vv.x;v.y+=vv.y;return v}
    v.subs=function(n){return v2(v.x-n, v.y-n)}
    v.isub=function(n){v.x-=n;v.y-=n;return v}
    v.sub=function(vv){return v2(v.x-vv.x, v.y-vv.y)}
    v.isub=function(v){v.x-=vv.x;v.y-=vv.y;return v}
    v.set=function(x,y){v.x=x;v.y=y}

    return v}


particle=function(pos){
    var p={}

    p.p=pos
    p.v=v2(0,0)
    p.pars=alive

    p.u=function(td){
        p.p.iadd(p.v.muls(td))}
    return p}





