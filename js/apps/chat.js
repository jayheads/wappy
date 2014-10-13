

CHATROOMS= function(){

    chats= $.divA('o', 200, 200).drag().left(400).WH('auto').pad(10).C('bb').A().A(

        $.button('general',function(){ PrivateChatRoom('general')  }).mar(40),
        $.button('fun',function(){ PrivateChatRoom('fun')  }).mar(40),
        $.button('sexy',function(){ PrivateChatRoom('sexy')  }).mar(40),

        theTextInput= $.input().K('form-control'),

        $.button('PrivateChatRoomate', function(){

            PrivateChatRoom(theTextInput.val())

        }).mar(40))

}









SORTY=function(){

    format()

    s1(

        h1('your sorts'),

        ipt('new sort',
            'post',
            '/srt',
            '-'

        ),


        h4('recent: '))


    qG('/srt',function(t){

        d1($button(t.t,function(){sorty(t.t)}),

        br(2))

    },'+')

    s2(im('me'))}




ChatRoom3=function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'


    var theTextInput= $.input().K('form-control'),

        theSendButton= $.button('send', function(){

            socket.emit('sendChatMessage', {

                chatRoomName: title,   username: _username,  message: theTextInput.V()

            }) }),
        thePicButton= $.button('pic', function(){ $.pop('pic select')  }),
        thePopButton= $.button('pop', function(){ socket.emit('p', theTextInput.V(), title)}),

        theMessages = $.div().id( 'cbi' ).C('u').overflow('auto'),

        usersInRoomBox= $.div()

    theWindow = $win('chatroom: ' + title).id(id).s({'min-width':600,  'min-height':400, 'background-color': color })

    theWindow.A(

        row(

            col(8,  theMessages,   theTextInput, theSendButton,  thePopButton,  thePicButton ),

            col(4, $.h5('users:'), usersInRoomBox))
    )



    var updateUsersDiv=function(u){

        usersInRoomBox.E()

        if(A(u)){

            _.each(u,

            function(username){

                usersInRoomBox.A(  $.h5(username).click(  function(){ popUser(username) }  ) )

            })
        }


        else { usersInRoomBox.A( $.h5('no users'))}}

    var chatController={

        updateUsersDiv: updateUsersDiv,

        window: theWindow,

        toggle: function(){ return theWindow.toggle() },

        write:function(m){  theMessages.A( $.h5(m).col('w')  )  },

        writeBlack: function(m){  theMessages.A( $.h5(m).col('z')    )  }}

    chatRoomsObject[title] = chatController

    setInterval( function(){ socket.emit('room', title)}, 1000) //repeatedly emit 'room', which launches room user updates!

    return chatController}


popUser=function(username){
    alert('clicked '+username)

    $.post('/mug', {u: username},  function(userMug){

            var theH1 = $h1(),

                theDiv = $div(),

                fullProfileButton=$button('full', function(){

                    $l('/wap/profiles/'+ username);

                    window.location='/wap/profiles/'+ username

                })



            $win(

                $div()(

                    $br(), $hr(), $h3('User: '+ username),

                    $br(),

                    xc().w(300).h(300).fit( userMug ),  theH1,   theDiv,

                    ms = $textarea().c( 'w', 'z' ),

                    $mailButton( ms, username ),

                    $chatButton( username, ms ),

                    fullProfileButton  ) )




            showStatus(username, theDiv)

            makeProfile(username, theDiv) }

    )}

$.privateChatRoom  = function(roomName){


    //bug.. if they CLOSE the window...this needs to TRIGGER something
    //in this case (removal from the chatRoomsObject)..
    //but more generally, i need to allow a sophisticated options obj to $win

    if(chatRoomsObject[ roomName ]){ $l('already in this room') }

    else {

        ChatRoom3(roomName)

        socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
    }


}


