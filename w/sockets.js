
USERS=[]

module.exports=function(io, K){

  sockets =  kk = io.sockets


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
        if(U(b)){return _.partial(em,k)}
        k.emit(b,d,e,f)}

    bc=function(k,b,d,e,f){if(U(b)){return _.partial(bc,k)}
        k.broadcast.emit(b,d,e,f)}

    jn=function(k,b,d){if(U(b)){return _.partial(bc,k)}
        k.join(b,d)}

    sKK(kk) //man=kk.manager

  //  sockets = kk.clients

    clients = sockets.clients

    rooms = kk.manager.rooms

    room = function(theRoom){ return rooms['/'+theRoom] }


    sockets.on('connection',function(k){//k=sK(k)
        //ke=function(a,b,c){k.emit(a,b,c)}
        //kke=function(a,b,c){kk.emit(a,b,c)}
        //kb=function(a,b){sK(k);k.b.e(a,b)}


        //l('k!')
        //em(k)('l','jason')

        k.on('p', function(d, u){

            return U(u)?

            k.broadcast.emit('p', d) :

            sockets.in(u).emit('p', d)

        })





        k.on('l',function(d){
            d=d||'ping';
            k.emit('l', 'sent: '+l(d))})





        k.on('iMsg', function(message){

            sockets.in(message.t).emit('iMsg', message)


        })




        k.on('e',function(d,a,b,c){ k.emit(d,a,b,c)})

        k.on('bc',function(d,a,b,c){k.broadcast.emit(d,a,b,c)})

        k.on('upop',function(data,n){
            k.broadcast.emit('upop',data,n)})

        k.on('dpop',
            function(data,n){
           k.broadcast.emit('dpop',data,n)})


        k.on('bub',
            function(d,n){k.broadcast.emit('bub',d,n)})



        k.on('id',function(d){

       k.emit('l',k.id)

            $l(k.id)

            USERS[k.id]=d

            $l(USERS)
            $l(USERS[k.id])
        })





        k.on('chat',function(data){

            k.broadcast.emit('newChat',{n:data.n,m:data.m})

            k.emit('youChat', {n:data.n,m:data.m})

        })


        ////

        k.on('j',
            function(theRoom){

            k.join(theRoom)

            k.emit('inRm', {

                r:theRoom,

                u: _.map( room(theRoom), getSocketUser)
            })

        })





        // kk.in(r).emit('l','frog')



        k.on('chatx', function(data){ $l(data)

            sockets.in(data.t).emit('chatx', data)

        })



        k.on('red',function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog'
           sockets.in(r).emit(e,d)})


        k.on('x',function(m){k.emit.to('sex').emit('l',m||'sexy')
            sockets.in('sex').emit('l',m||'sexy')})


        k.on('kk',
            function(data){
                k.emit('res',
                    sockets.clients(''))
            })


        k.on('r', function(data){

            k.emit('res',
                data?room[data]
                    :rooms())
        })





        k.on('who',function(u){


             $l( getSocketUser(u))

        })


        getSocketUser =toU=function(u){return USERS[u]}




        k.on('rm', function(theRoom){


            $l(room(theRoom))

            k.emit('inRm', {

                r: theRoom,
                u: _.map( room(theRoom), getSocketUser )

            })

        })


        k.on('du',function(data){

            k.emit('im', data)

            k.broadcast.emit('im', data)

            $m.img.create({})

        })



        k.on('newImg',function(d){
            $m.img.create(d,function(z,d){
                k.emit('newImgAck',d)})})


        io.of('/chat').on('connection',function(d){l('new chatter')})


        //k.on('chat', function(d){  k.emit('chat', 'cool')  })


        k.on('in',function(d){var rm,guy
            if(A(d)){room=rooms[roomName(d)]

                if(!room){ em('res','-') }

                else {guy=guy||k.id;

                    k.emit('res', room[guy]?true:false) }}

            else { rm = room(d)

                if(!rm){ k.emit('res', '-') }

                else { k.emit('res', rm[k.id]? true: false ) }

            }


        })})


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


