
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

        if(U(b)){return _.partial(em, k)}

        k.emit(b,d,e,f)

    }




    bc=function(k, b, d, e, f){
        if(U(b)){return _.partial(bc, k)}
        k.broadcast.emit(b,d,e,f)}

    jn=function(k, b, d){
        if(U(b)){return _.partial(bc,k)}
        k.join(b,d)}

    sKK(kk) //man=kk.manager

  //  sockets = kk.clients

    clients = sockets.clients

    roomsArray =rooms = kk.manager.rooms


    room = function(theRoom){ return roomsArray['/'+theRoom]    }




    sockets.on('connection',function(k){//k=sK(k)
        //ke=function(a,b,c){k.emit(a,b,c)}
        //kke=function(a,b,c){kk.emit(a,b,c)}
        //kb=function(a,b){sK(k);k.b.e(a,b)}


        var serverSocket=k
        //l('k!')
        //em(k)('l','jason')

        serverSocket.on('p', function(d, u){

            return U(u)?

            k.broadcast.emit('p', d) :

            sockets.in(u).emit('p', d)

        })





        serverSocket.on('l',function(d){
            d=d||'ping';
            k.emit('l', 'sent: '+l(d))})





        serverSocket.on('iMsg', function(message){

            sockets.in(message.t).emit('iMsg', message)


        })




        serverSocket.on('e',function(d,a,b,c){ k.emit(d,a,b,c)})

        serverSocket.on('bc',function(d,a,b,c){k.broadcast.emit(d,a,b,c)})

        serverSocket.on('upop',function(data,n){
            k.broadcast.emit('upop',data,n)})

        serverSocket.on('dpop',
            function(data,n){
           k.broadcast.emit('dpop',data,n)})


        serverSocket.on('bub',
            function(d,n){k.broadcast.emit('bub',d,n)})



        serverSocket.on('id',function(d){

            serverSocket.emit('l',k.id)

            $l(k.id)

            USERS[k.id]=d

            $l(USERS)
            $l(USERS[k.id])
        })





        serverSocket.on('chat',function(data){

            k.broadcast.emit('newChat',{n:data.n,m:data.m})

            k.emit('youChat', {n:data.n,m:data.m})

        })


        ////
        theRoomFunction=function(theRoom){

            $l('joinRoom')

            k.join( theRoom )

            k.emit('inRoom', {   r:theRoom,  u: _.map( roomsArray[ '/' + theRoom ] , getSocketUser )

            })}



        serverSocket.on('j', theRoomFunction)

        serverSocket.on('joinRoom', theRoomFunction)




        // kk.in(r).emit('l','frog')



        serverSocket.on('chatx', function(data){ $l(data)

            sockets.in(data.t).emit('chatx', data)

        })





        serverSocket.on('red',function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog'
           sockets.in(r).emit(e,d)})


        serverSocket.on('x',function(m){k.emit.to('sex').emit('l',m||'sexy')
            sockets.in('sex').emit('l',m||'sexy')})


        serverSocket.on('kk',
            function(data){
                k.emit('res',
                    sockets.clients(''))
            })


        serverSocket.on('r', function(data){

            k.emit('res',
                data?room[data]
                    :roomsArray())
        })





        serverSocket.on('who',function(u){


             $l( getSocketUser(u))

        })


        getSocketUser =toU=function(u){return USERS[u]}




        serverSocket.on('rm',

            function(theRoom){ //$l(room(theRoom))

            k.emit( 'inRm',  {  r: theRoom, u: _.map( room(theRoom), getSocketUser )  })


            k.emit( 'inRoom',  {  r: theRoom, u: _.map( room(theRoom), getSocketUser )  })


            })


        serverSocket.on('inRoom',

            function(theRoom){ //$l(room(theRoom))

                k.emit( 'inRm',  {   u: _.map( roomsArray['/'+theRoom]     , getSocketUser), r: theRoom }  )


                k.emit( 'inRoom',  { u: _.map( roomsArray['/'+theRoom] , getSocketUser) , r: theRoom  }  )

            })










//dataUrl?
        serverSocket.on('du',  function(data){

            k.emit('im', data)

            k.broadcast.emit('im', data)

            $m.img.create({})

        })




        //CREATE AN IMAGE
        serverSocket.on('newImg', function(data){

            $m.img.create(data, function(err, image){  k.emit('newImgAck', image)   })

        })


        io.of('/chat').on('connection', function(d){ $l('new chatter') })


        //k.on('chat', function(d){  k.emit('chat', 'cool')  })


        k.on('in',

            function(data){

                var theRoom,  guy

                if(A(d)){

                    room= roomsArray[  roomName(data)  ]


                    if(!room){  l('not room !') }// em('res', '-')

                    else {
                        guy=guy||k.id;

                        k.emit('res', room[guy]?true:false) }
                }



            else {

                    theRoom = roomsArray['/'+ data]

                if(!theRoom){ $l('not room') }// k.emit('res', '-')

                else { k.emit('res', theRoom[ k.id ]? true: false ) }

            }
   })








    })




    Rooms=function(){


    //var usernames={}, $scope.$broadcast('', );
    rooms=['Lobby']

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


