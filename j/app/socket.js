socket = kk=io.connect("http://localhost")

var e=function(a,b){return kk.emit(a,b)},

    o=function(a,b){return kk.on(a,b)},

    b=function(a,b){return kk.broadcast.emit(a,b)

    }



socket.on(  'a',function(a){alert(a)})
socket.on(  'alert',  function(a){alert(a)})




//socket.on('l',function(d){  $l(d)  })
socket.on('log',function(d){  $l(d)  })

//socket.on('d',function(d){$l('SERVER: %j',d)})
socket.on('dir',function(d){$l('SERVER: %j',d)})

socket.on( 'dpop', function(d,n){ dud(d, n)  })

socket.on( 'dudPop', function(d,n){ dud(d, n)  })



socket.on('notice', function (d) {  $l('SERVER NOTICE: %s', d);  })

socket.on('p',function(e){pop(e)})

socket.on('pop',function(e){pop(e)})
socket.on('roo',function(d){roo=d})  // ?


//socket.on('res', function(d){ res = d })  // ?



socket.on('newImgAck', function(d){ xx().f(d.u) })

socket.on('im', function(d){ xx().f( d ) })

//dnm = function(d){ return  d.n+': '+ d.m }


socket.on('newChat', function(d){ CH.b(d.n+': '+ d.m) })
socket.on('youChat', function(d){ CH.s(d.n+': '+ d.m) })
socket.on('chatx',function(d){ $w['chat_'+ d.t].s( d.n+': '+ d.m)})

//socket.on('frog',function(){pop('frog')})



////////////////////////////////////////////
// universe

socket.on('bub',function(data){ //$l('bub: '+ d)

    if(
        getGuy(data.u)

        ){

        SpeechBubble(data.t, data.x, data.y)
    }
})

socket.on('upd', function(guy){ updateGuy(guy) })

socket.on('updateGuy', function(guy){ updateGuy(guy) })

socket.on('accept', function(data){


    if(_username == data.t){

        startUniverse(data.f)

        // here u should really just be able to 'addUser'

    }


})



socket.on('invite', function(invitation){  //dd=invitation

    if(_username == invitation.t){

        fetchMugByUsername(  invitation.f,

            function(userMug){

              var p = pop(


                    $div()(

                        $img(userMug).w(200).h(200),

                        $h1('chat with '+ invitation.f+'?'),

                        $button('ya',function(){  p.m()



                            startUniverse( invitation.f )

                            //so u are just adding them in?
                            // ah the function also supposedly takes into account the app not even being open
                            // i could nix that for now



                            accept(invitation.f)

                        }),

                        $button('na', function(){p.m()} )



                    )

          )

            })}

})

////////////////////////////////////////////




socket.on('sendMessage', function(message){ receiveMessage(message) })



socket.on('inRm',function(u){
    $l('inRm')
    var rm='chat_'+u.r

    uu=u.u
    ru=rm


    if($w[rm]){$w[rm].u(u.u)}

    else{$l('no room: '+rm)}

})




ke=function(a,b,c){ socket.emit(a,b,c) }




//sop=function(m,u){ socket.emit('p',m,u)  }




socketEmit = em=function(a,b){  socket.emit('e',  a,  b)  }







// o('popbox', function(o){poppy(o);qi('popbox').m()})

// o('v',function(d){VAR=d})

// o('user-message',function(d){$l(d);e('chat-message',d)})
//o('eG', nP)
// o('mU',function(m){uM(m)})// uM(m);
// o('map',function(m){uM(m)})
// o('fc',function(fc){xy(gx.me, fc) })
//o('map',function(gA){_e(gA,function(g){_e(sArray,function(g){c.a(p.me)})});xy(p.me,200,100);xy(p.me,f)})


//*** ??? confusing!!!
upop=function(image,  size){

    image= X(image) ? image.u() : image

    size=size||300

    return xx().w(size).h(size).fit(image )

}







sendPopBox=function(){

    $('.pop').click(function(){

        socket.emit( 'pop',

            { t: qk( 'pt' ).v, b: qk( 'pb' ).v
        })
    })
}

//kf=function(a,b,c){return function(){socket.emit(a,b,c)}}


$emitButton =bte=function(a,b){return $button(
    a, function(){ socket.emit(b) }
)}


connectChannel=chan=function(channel,func){
    var theChannel= io.connect('http://localhost/'+ channel)
    if(func){theChannel.on('connect',func)}
    return theChannel}



chaz=function(){

    var b1=$emitButton('msg', 'chat'),

        b2=$button('room', function(){

            var theChannel = connectChannel('chat',
                ffl('chat') // wtf is ffl ???
            )

            theChannel.on('al', pop)

        })


    dva()(b1,b2).lt(300)

}



dud=function(d,n){

    $.post('/dud', {d:d},

        function(u){   upop(u,n)  })

}







//sk-send du of your (first) can-el
du=function(){var u=c0().toDataURL();socket.emit('du',u);return u}

