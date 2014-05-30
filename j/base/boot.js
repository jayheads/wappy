//bs
elip=function(a){return a+'&hellip;'}
ex=function(){return '&times;'}


//"<div class="form-group"></div>"
fg=function(a){
    return _a(dk('fg'),
        G(arguments))}



//put items in a qq(div).k(row)

row=function(n){

    var g=G(arguments),
        d=dk('row')

    _e(g,function(v){
        d(v)
    })

    return d}



//pass in size, and then args(contents) as a list (or as an array)
col=function(){var g=G(arguments),
    d=dk('m'+g[0]),

    iter=A(g[1])?
        g[1]:g.r

    _e(iter,function(v){
        d(v)})

    return d}



       //backhead


row2=function(a,b){return row(col(6,a),col(6,b))}
row3=function(a,b,c){return row(col(4,a),col(4,b),col(4,c))}
row4=function(a,b,c,d){return row(col(3,a),col(3,b),col(3,c),col(3,d))}
row84=function(a,b){return row(col(8,a),col(4,b))}

row48=function(a,b){return row(col(4,a),col(8,b))}//
row39=function(a,b){return row(col(3,a),col(9,b))}//

row210=function(a,b){return row(col(2,a),col(10,b))}//
row111=function(a,b){return row(col(1,a),col(11,b))}//


//row48([4],[ 8 ])
                 //row39([3],[ 9 ])

push4=function(a){return row48([],a)}
push3=function(a){return row39([],a)}
push2=function(a){return row210([],a)}
push1=function(a){return row111([],a)}



row93=function(a,b){return row(col(9,a),col(3,b))}
row363=function(a,b,c){
    return row(col(3,a),col(6,b),col(3,c))}

ROW=function(a,b,c,d){
    var g=G(arguments),

        z=g.z



    if(z==1){return row(col(12,a))}

    if(z==2){return g.p?row93(a,b)
        :g.n? row39(a,b)
        :row2(a,b)}

    if(z==3){return g.n?row363(a,b,c):row3(a,b,c)}

    if(z==4){return row4(a,b,c,d)}

}




FT=function(){var g=G(arguments),j=dk('F')
    _e(g,function(v){if(S(v)){v=pg(v)}
        j(v)})
    if(g.p){j.cen()}
    return j.id('footer')}

HD=function(){
    var g=G(arguments),
        j=dk('H')
    _e(g,function(v){if(S(v)){v=h3(v)}
        j(v)})
    if(g.p){j.cen()}
    return j.id('header').mb(20)}

JT=function(){var g=G(arguments),j=dk('j')
    j(h1(g.f))
    _e(g.r,function(v){if(S(v)){v=h3(v)}
        j(v)})
    if(g.p){j.cen()}
    return j.id('jumbo')}

tn=function(a){var d=dk('tn')
    _e(arguments,function(a){
        if(S(a)){a=im(a)}
        d(a)})
    return dk('x2 s1')(d)}

tnr=function(g){z()
    var g=G(arguments),r=row()
    _e(g,function(a){r(tn(a))})
    return r.a()}

tnt=function(n){var a=[]
    _t(n||20,function(){a.push('me')})
    _a(tn,a)}










//pils
pil=function(o){var g=G(arguments),p=ul();p.k('n np');p.c('y')
    if(O(o)){_e(o,function(v,k){var l=A(k)?lik(k[0],'+'):lik(k);l.o('$',v);p(l)})}
    else{_e(g,function(v){if(A(v)){p(lik(v[0],'+'))} else{p(lik(v))}})};return p}

//login pils
logi=function(){pil({'log in':lI,'log out':lO}).pp()}


gl=function(){var g=G(arguments),str,
    s=_s().k('glyphicon').k('glyphicon-'+oO('gl',g[0]))
    if(O(g[1])){s.a(g[1])}
    if(S(g[1])){s(g[1])}
    if(g.n){s.pp(_s().T('-'))}
    return s}


MFOOT=function(){var g=G(arguments), d=_d().k('mf');_e(g, function(v){d(v)});return d}
MBODY=function(){var g=G(arguments), d=_d().k('mb');_e(g,function(v){d(v)});return d}
MHEAD=function(){var g=G(arguments),d=_d().k('mh');_e(g,function(v){d(v)});return d}
MCT=function(){var g=G(arguments), d=_d().k('mc');_e(g,function(v){d(v)});return d}
MDIALOG=function(){var g=G(arguments),d=_d().k('md');_e(g,function(v){d(v)});return d}
MFADE=function(){var g=G(arguments), d=_d().k('m f');_e(g,function(v){d(v)});return d}
MODAL=function(a,b,c){var ft=MFOOT(bt({t:'close'}).at({t:'submit',dd:'modal'}))
    if(c){ft(c)};return MFADE(MDIALOG(MCT(
        MHEAD(bt({t:ex}).k('close').at({dd:'modal'}),h4(a).k('mt')),
        MBODY(b),ft)))}










