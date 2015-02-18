


loc=$w.location
loc.h=loc.href
loc.hn=loc.hostname
loc.ha=loc.hashn
loc.H=loc.host
loc.p=loc.port
loc.pn=loc.pathname
loc.P=loc.protocol
loc.s=loc.search
loc.rl=loc.reload
loc.H=loc.host
loc.rp=loc.replace
loc.a=loc.assign


hst=$w.history
hst.b=hst.back
hst.f=hst.forward
hst.g=hst.go
hst.l=hst.length
nvg=navigator
nvg.o=nvg.onLine

rl=function(){$w.location=$w.location}
rL=function(){location.reload(true)}

scr=function(a){var s=screen

    if(a){return {w:s.width,       h:s.height,
        aw:s.availWidth,  ah:s.availHeight,
        at:s.availTop,    al:s.availLeft}}

    var o={w:W(),h:H()}

    o.c=o.w+', '+o.h,o.t='screen size: '+ o.c

    return o}


wnd=function(a){
    var g=G(arguments),a=g[0]
    if(g.n){return a.close()}
    return $w.open()}

makeAllExtLinksOpenInNewWindows=function(){$("a[href^='http://']").attr('target','_blank')}



accessParentFrame=function(){
    frames[0].parent===$w}
accessChildFrame=function(){
    frames[0].window.location.reload}
accessTopFrame=function(){
    $w.frames[0].window.top===$w.top}

accessFrameByName=function(f){$w.frames[f]===$w.frames[0].location.reload}

cssRst=function(){
    sty({'*':{m:0,p:0},  //css reset
        'html,body':{h:'100%', w:'100%'},
        canvas:{d:'b'}})}


dH=function(a){qq(a).h($(document).height())}


open=function(c){
    $w.open(_S(c),
        'new_window','width=310,height=30')}






ssS=sessionStorage
sR=function(a){var i=ssS.getItem(a)
    ssS.removeItem(a)
    return i}
sS=function(a,b){ssS.setItem(a,b); return ssS}
sG=function(a){return ssS.getItem(a)}
sL=function(){return ssS.length}
sX=function(){ssS.clear();return ssS}
lcS=localStorage
lR=function(a){var i=lcS.getItem(a)
    lcS.removeItem(a)
    return i}
lS=function(a,b){lcS.setItem(a,b); return lcS}
lG=function(a){return lcS.getItem(a)}
lL=function(){return lcS.length}
lX=function(){lcS.clear();return lcS}



cou=function(a){return $w.URL.createObjectURL(a)}

jsBlob=function(f){
    return new Blob(['('+f.toString()+')()'],{
        type:"text/javascript"})}

wrk=function(a){
    a=cou(jsBlob(a))
    var g=G(arguments),
        w= g.P? new Worker(a):new sharedWorker(a)
    w.t=w.terminate
    w.pm=w.postMessage
    w.m=function(f){w.onmessage=f}
    return w}


work=function(){

    w=wrk(function(){
        postMessage('hi')})

    w.m(function(e){
        $l('Worker said: '+e.data)})}







//move to sys
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



MOBILECENTER=function(){


    z()

    $('body').C('u')


    d = $.div('o', 400, 200).A().drag().pad( 20 ).A(

        dd = $.div( 'u',  200 , 100 ).xCenter(),

        $.div( 'g',  100 , 80).xCenter( )

    ).P('r')


}
MOBILETIPS=function(){

    z()

    $('body').C('u')

    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()


    d = $.div('o', 400, 200).A().drag().pad( 20 )

    d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

    d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

    d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

    d1 = $.div('p', 400, 200).A().drag().pad( 20 )

    d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

    d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

    d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

    d2 = $.div('g', 400, 200).A().drag().pad( 20 )

    d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


}
