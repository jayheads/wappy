

CHATROOMS=CHATBOX=function(){

    chats=dva(2).l(900).auto().P(10).c('bb')(

        $button('general',function(){ PrivateChatRoom('general')  }).M(40),
        $button('fun',function(){ PrivateChatRoom('fun')  }).M(40),
        $button('sexy',function(){ PrivateChatRoom('sexy')  }).M(40),

        theTextInput=tx(),


        $button('PrivateChatRoomate',  function(){  PrivateChatRoom(theTextInput.V())
        
        }).M(40))

}














SORTY=function(){format()

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
        br(2))},'+')

    s2(im('me'))}
