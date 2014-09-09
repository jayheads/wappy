SL=function(b,b2){
    var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),
    d=oE('d'),pm=oE('pm'),b2=b2||b

    return b.on(d,
        function(e){var bx=b2.x-rX(e),by=b2.y-rY(e)
            b.on(pm, function(e){
                    if(g.P){b2.x=bx+rX(e)}
                    if(g.N){b2.y=by+rY(e)}})})}





LS=function(b,b2){var g=G(arguments),
    b=bj(g[0]),
    b2=bj(g[1]),
    d=oE('d'),
    pm=oE('pm'),
    b2=b2||b

    return b.on(d, function(e){
        var bx=b2.x+rX(e), by=b2.y+rY(e)

            b.on(pm, function(e){

                if(g.P){b2.x=bx-rX(e)}
                if(g.N){b2.y=by-rY(e)}

            })})}




RT=function(b,b2){
    var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),d=oE('d'),pm=oE('pm'),b2=b2||b
    if(g.p){b.rgc('+')}

    return b.on(d,function(e){var X=rX(e),Y=rY(e),r=rt(b2)

             b.on(pm,function(e){rt(b2,r-((rY(e)-Y)/500)-((rX(e)-X)))})})}

SC=function(b,b2){
    var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),
        d=oE('d'),pm=oE('pm'),b2=b2|| b,
        cp=function(n){return n<.2?.2:n>2?2:n}



   return b.on(d,

       function(e){var X=rX(e),Y=rY(e),sx=cX(b2),sy=cY(b2)

           b.on(pm,

               function(e){if(g.n){cXY(b2,cp(sx+((rX(e)-X)/200)),cp(sy-((rX(e)-X)/200)))}

               else if(g.p){
                   cXY(b2,sx+((rX(e)-X)/50),sy-((rY(e)-Y)/50))
                   cXY(b2,sy-((rY(e)-Y)/50)),sx+((rX(e)-X)/50)}

               else{cXY(b2,sx-((rX(e)-X)/50),sy-((rY(e)-Y)/50))}})}

   )}


SK=function(b){var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),d=oE('d'),pm=oE('pm'),b2=b2||b

    return b.on(d,
        function(e){
            var X=rX(e),Y=rY(e)
            b.on(pm,function(e){
                kXY(b2,(rY(e)-Y)*.5,
                    rX(e)-X*.5)})})}


TR=function(b,b2,m){var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),
    b2=b2||b,m=g[2]||'SL',pu=oE('pu')
    if(m=='SL'){SL(b,b2);m='SC'}
    else if(m=='SC'){SC(b,b2);m='RT'}
    else if(m=='RT'){RT(b,b2);m='SL'}
    return b.on(pu,function(e){Do(b).O();TR(b,b2,m)})}








reggy=function(o,s){
    s=s||o.pa('+')

    s.bm('me',  function(b){
        b.wh(40)
        I(function(){b.xy(  o.x()+o.rx(), o.y()+o.ry() )},  100)}  )}




rg1=function(b,s){s=s||b.pa('+')
    s.bm('me',function(r){  r.wh(40)
        I(function(){   r.xy(
            b.x()+b.rx(),

            b.y()+b.ry() )

        },  100)}  )}


rg2=function(b,s){ s=s||b.pa('+')

    s.bm('me',  function(r){  r.wh(40)

        I(function(){r.xy( b.x()+b.rx(),  b.y()+b.ry())},
            100)})}






KK=function(b,b2){
    var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),
        d=oE('d'),pm=oE('pm'),b2=b2||b
    b=g[0];
    SL(b);RT(b,b2)
    if(g.p){b.rgc('+')}
    if(g.N){reggy(b,b2)}}


RK=function(b,b2,m){
    var g=G(arguments),b=bj(g[0]),b2=bj(g[1]),
        d=oE('d'),pm=oE('pm'),b2=b2|| b,
        m=g[2]||'RT'


    //if(g.p){var s=St('y',1000)
    //    _t(b||5,function(i){s.a().bm(
    //        function(bm){bm.xy(i*50);TR(bm)})});return s}

    if(m=='RT'){RT(b,b2);m='SK'}
    else if(m=='SK'){SK(b,b2);m='RT'}

    return b.on(oE('pu'),function(e){Do(b).O();RK(b,b2,m)})}


sot=function(a){

    I(function(){     a.sC(function(f,s,op){ return f.x>s.x?1:f.x< s.x?-1:0}) },100)
}





