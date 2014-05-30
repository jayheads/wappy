_p= _.partial
//610 417 7304

USERS=[]

module.exports=function(io,K){kk=io.sockets


    sK=function(k){
        k.e=k.emit
        k.o=k.on
        k.j=k.join
        k.b=k.broadcast
        k.b.e=k.b.emit

        return k}

    sKK=function(kk){
        kk.o=kk.on
        kk.i=function(a){
            var r=kk.in(a)
            r.e=r.emit
            return r}
        kk.s=function(a){
            var r=kk.socket(a)
            r.e=r.emit
            return r}}


    em=function(k,b,d,e,f){
        if(U(b)){return _p(em,k)}
        k.emit(b,d,e,f)}

    bc=function(k,b,d,e,f){if(U(b)){return _p(bc,k)}
        k.broadcast.emit(b,d,e,f)}

    jn=function(k,b,d){if(U(b)){return _p(bc,k)}
        k.join(b,d)}

    sKK(kk) //man=kk.manager

    sockets=kk.clients
    rooms=kk.manager.rooms

    room=function(r){
        return rooms['/'+r]}


    kk.on('connection',function(k){//k=sK(k)
        //ke=function(a,b,c){k.emit(a,b,c)}
        //kke=function(a,b,c){kk.emit(a,b,c)}
        //kb=function(a,b){sK(k);k.b.e(a,b)}


        //l('k!')
        //em(k)('l','jason')

        k.on('p',function(d,u){
            return U(u)?
            bc(k)('p',d):
            kk.in(u).emit('p',d)})





        k.on('l',function(d){
            d=d||'ping';
            em(k)('l', 'sent: '+l(d))})





        k.on('iMsg',function(m){
            kk.in(m.t).emit('iMsg',m)
        })


        k.on('e',function(d,a,b,c){ em(k)(d,a,b,c)})
        k.on('bc',function(d,a,b,c){bc(k)(d,a,b,c)})

        k.on('upop',function(d,n){
            bc(k)('upop',d,n)})
        k.on('dpop',function(d,n){
            bc(k)('dpop',d,n)})


        k.on('bub',function(d,n){bc(k)('bub',d,n)})



        k.on('id',function(d){

            em(k)('l',k.id)

            $l(k.id)

            USERS[k.id]=d

            $l(USERS)
            $l(USERS[k.id])
        })





        k.on('chat',function(d){
            k.broadcast.emit('newChat',{n:d.n,m:d.m})
            k.emit('youChat',{n:d.n,m:d.m})})


        ////

        k.on('j',
            function(r){

            k.join(r)

            k.emit('inRm', {
                r:r,u: _.map( room(r), toU)
            })

        })// kk.in(r).emit('l','frog')



        k.on('chatx', function(d){

            $l(d);

            kk.in(d.t).emit('chatx', d)

        })


        ////



        k.on('red',function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog'
           kk.in(r).emit(e,d)})


        k.on('x',function(m){k.emit.to('sex').emit('l',m||'sexy')
            kk.in('sex').emit('l',m||'sexy')})


        k.on('kk',
            function(d){
                em(k)('res',
                    kk.clients(''))})


        k.on('r',function(d){
            em(k)('res',
                d?room[d]
                    :rooms())})

        k.on('who',function(u){


             $l( toU(u))

        })

        toU=function(u){return USERS[u]}

        k.on('rm',function(r){


            $l(room(r))

            k.emit('inRm', {
                r:r, u: _.map( room(r),toU )
            })
        })


        k.on('du',function(d){
            em(k)('im',d);
            bc(k)('im',d);
            $m.img.create({})
        })



        k.on('newImg',function(d){
            $m.img.create(d,function(z,d){
                em(k)('newImgAck',d)})})


        io.of('/chat').on('connection',function(d){l('new chatter')})


        k.on('chat', function(d){em(k)('chat','cool')})


        k.on('in',function(d){var rm,guy
            if(A(d)){room=rooms[roomName(d)]
                if(!room){em('res','-')}
                else {guy=guy||k.id;em(k)('res', room[guy]?true:false) }}
            else{rm=room(d)
                if(!rm){em(k)('res','-')}
                else{em(k)('res',rm[k.id]?true:false)}}})})


    Rooms=function(){


    var usernames={},rooms=['Lobby']

    io.sockets.on('connection', function(k) {

        k.on('adduser', function(un) {
            k.username=un
            k.room = 'Lobby'
            usernames[un]=un
            k.join('Lobby');
            k.emit('updatechat', 'SERVER', 'you have connected to Lobby')
            k.broadcast.to('Lobby').emit('updatechat', 'SERVER',
                un + ' has connected to this room')
            k.emit('updaterooms', rooms, 'Lobby')
        })
        k.on('create', function(room) {
            rooms.push(room)
            k.emit('updaterooms', rooms, k.room)
        })
        k.on('sendchat', function(data) {
            io.sockets["in"](k.room).emit('updatechat',
                k.username, data)
        })
        k.on('switchRoom', function(newroom) {
            var oldroom
            oldroom = k.room
            k.leave(k.room)
            k.join(newroom)
            k.emit('updatechat', 'SERVER',
                'you have connected to ' + newroom);
            k.broadcast.to(oldroom).emit('updatechat',
                'SERVER', k.un + ' has left this room');
            k.room = newroom;
            k.broadcast.to(newroom).emit('updatechat',
                'SERVER', k.un + ' joined');
            k.emit('updaterooms', rooms, newroom);
        })
        k.on('disconnect', function(){
            delete usernames[k.un]
            io.sockets.emit('updateusers', usernames)

            k.broadcast.emit('updatechat',
                'SERVER', k.username + ' has disconnected')
            k.leave(k.room)
        })
    })


    }

}


