

CHATROOMS= function(){

    chats= $.divA('o', 200, 200).drag().left(400).WH('auto').pad(10).C('bb').A().A(

        $.button('general',function(){ PrivateChatRoom('general')  }).mar(40),
        $.button('fun',function(){ PrivateChatRoom('fun')  }).mar(40),
        $.button('sexy',function(){ PrivateChatRoom('sexy')  }).mar(40),

        theTextInput= $.input().K('form-control'),

        $.button('PrivateChatRoomate', function(){  PrivateChatRoom(theTextInput.val())   }).mar(40))

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
