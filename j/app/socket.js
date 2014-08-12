kk=io.connect("http://localhost")

var e=function(a,b){return kk.emit(a,b)},

    o=function(a,b){return kk.on(a,b)},

    b=function(a,b){return kk.broadcast.emit(a,b)

    }



kk.on(  'a',function(a){alert(a)})
kk.on(  'alert',  function(a){alert(a)})




kk.on('l',function(d){  $l(d)  })
kk.on('log',function(d){  $l(d)  })





kk.on( 'dpop', function(d,n){ dud(d,n)  })

kk.on( 'dudPop', function(d,n){ dud(d,n)  })



kk.on('d',function(d){$l('SERVER: %j',d)})
kk.on('dir',function(d){$l('SERVER: %j',d)})

kk.on('notice', function (d) {  $l('SERVER NOTICE: %s', d);  })

kk.on('p',function(e){pop(e)})
kk.on('pop',function(e){pop(e)})


kk.on('roo',function(d){roo=d})  // ?

kk.on('res', function(d){res=d})  // ?


kk.on('newImgAck', function(d){xx().f(d.u)})


kk.on('im', function(d){ xx().f( d ) })




dnm=function(d){ return  d.n+': '+ d.m }



kk.on('newChat',
    function(d){

        CH.b(dnm(d))

    })

kk.on('youChat',
    function(d){CH.s(dnm(d))})


kk.on('chatx',function(d){


    $w['chat_'+ d.t].s( dnm(d)

    )

})





kk.on('bub',
    function(d){
        $l('bub: '+d)




if(gg(d.u)){bub(d.t, d.x, d.y)}})

kk.on('frog',function(){pop('frog')})



kk.on('upd', function(guy){ upd(guy)})


kk.on('updateGuy', function(guy){ updateGuy(guy)})





kk.on('accept',function(d){
    dd=d

    if(usr == d.t){ startUniverse(d.f)  }

})






kk.on('invite',function(invitation){

    dd=invitation

    if(usr==invitation.t){


        fetchMugByUsername(

            invitation.f,


            function(userMug){

                pop(


                    $div()(

                        im(userMug).w(200).h(200),

                        h1('chat with '+ invitation.f+'?'),




                        $button('ya',function(){

                            pop.m()

                            startUniverse(invitation.f)

                            accept(invitation.f) }),


                        $button('na', function(){} )



                    )

          )})}

})





kk.on('iMsg',function(m){msgI(m)})



kk.on('inRm',function(u){
    $l('inRm')
    var rm='chat_'+u.r

    uu=u.u
    ru=rm


    if($w[rm]){$w[rm].u(u.u)}

    else{$l('no room: '+rm)}

})




ke=function(a,b,c){kk.emit(a,b,c)}


sop=function(m,u){
    ke('p',m,u)}




em=function(a,b){ke('e',a,b)}







// o('popbox', function(o){poppy(o);qi('popbox').m()})

// o('v',function(d){VAR=d})

// o('user-message',function(d){$l(d);e('chat-message',d)})
//o('eG', nP)
// o('mU',function(m){uM(m)})// uM(m);
// o('map',function(m){uM(m)})
// o('fc',function(fc){xy(gx.me, fc) })
//o('map',function(gA){_e(gA,function(g){_e(sArray,function(g){c.a(p.me)})});xy(p.me,200,100);xy(p.me,f)})


upop=function(u,n){
    var x=xx()
    if(n){x.wh(n)}
    x.f(X(u)?u.u():u)
    return x}




sendPopBox=function(){
    qk('pop').o(function(){
        ke('pop',{
            t:qk('pt').v,
            b:qk('pb').v})})
}



kf=function(a,b,c){
    return function(){ke(a,b,c)}}


bte=function(a,b){return bt(a,kf(b))}


chan=function(a,f){var c= io.connect('http://localhost/'+a)
    if(f){c.on('connect',f)}
    return c}


chaz=function(){

    var b1=bte('msg', 'chat'),

        b2=$button('room', function(){

            var theChannel = chan('chat', ffl('chat'))

            theChannel.on('al', pop)

        })


    dva()(b1,b2).lt(300)

}



dud=function(d,n){  qP('/dud', {d:d}, function(u){   upop(u,n)  })}



//sk-send du of your (first) can-el
du=function(){var u=c0().toDataURL();ke('du',u);return u}

