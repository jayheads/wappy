
/////////////////////////////////////////////////////// instant messages

InstantMessage = function(messageObject){  //=imBox

    var theTextInput = $textInput()

    var instantMessage = $win()(

        $h3( 'instant message from ' + messageObject.from ),

        $h4( 'message: ' + messageObject.message ),

        theTextInput,

        $button( 'reply' , function(){

            socket.emit( 'sendPrivateMessage' , {

                message: theTextInput.V() ,

                toWho: messageObject.from ,

                from: _username }) }) )


    instantMessagesObject[messageObject.from]=instantMessage

    return instantMessage

}

socket.on('receivePrivateMessage',
    function(messageObject){
    var iMsg = instantMessagesObject[messageObject.from]
    if(iMsg){ iMsg($h4(messageObject.message)) } else {InstantMessage(messageObject)}
})



///////////////////////////////////////////////////////   chatrooms

socket.on('receiveChatMessage', function(data){

    $l( data.username+': '+ data.message)
    chatRoomsObject[data.chatRoomName].write( data.username+': '+ data.message)

})



socket.on('roomUpdate', function(update){

    var room = chatRoomsObject[ update.room ]

    if(room){ room.updateUsersDiv(  update.users)  }

})





