
chatRoomsObject={}




ChatRoom=function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'

    var theTextInput = $textInput(),


        theSendButton = $button('send', function(){

            socket.emit('sendChatMessage', {

                chatRoomName: title,
                username: _username,
                message: theTextInput.V()
            })

        }),




        thePicButton=$button('pic',function(){  pop('pic select')  }),


        thePopButton=$button('pop', function(){ socket.emit('p', theTextInput.V(), title)}),


        theMessages = $div().id( 'cbi' ).s({overflow:'auto', C:'x'}),


        usersInRoomBox= $div()


    theWindow = $win('chatroom: '+title).id(id).s({

        'min-width':600,  'min-height':400, 'background-color': color

    })



    theWindow(

        row(

            col(8,

                theMessages,
                theTextInput,
                theSendButton,
                thePopButton,
                thePicButton ),

            col(4, $h5('users:'), usersInRoomBox)))


    var updateUsersDiv=function(u){

        usersInRoomBox.E()

        if(A(u)){ _.each(u, function(u){

                usersInRoomBox(

                    $h5(u).$(

                        function(){

                            $.post('/mug', {u: u},

                                function(m){

                                    var theH1=$h1(),

                                        theDiv=$div(),

                                        fullProfileButton=$button('full', function(){
                                                $l('/wap/profiles/'+ u);
                                                window.location='/wap/profiles/'+ u
                                            })


                                    $win(
                                        $div()(
                                            $br(),
                                            $hr(),
                                            $h3('User: '+u),
                                            $br(),
                                            xc().w(300).h(300).font(m),
                                            theH1,
                                            theDiv,
                                            ms = ta().c('w','z'),
                                            $mailButton(ms, u),
                                            $chatButton(u, ms),
                                            fullProfileButton)
                                    )



                                    showStatus(u, theDiv)

                                    makeProfile(u, theDiv) }

                            )}  )

                )})}


        else { usersInRoomBox($h5('no users'))}

    }



   var chatController=  {

        u: updateUsersDiv,
        updateUsersDiv: updateUsersDiv,


        w: theWindow,
        window: theWindow,


        t: function(){return theWindow.toggle()},
        toggle: function(){return theWindow.toggle()},

        b:function(m){  theMessages($h5(m).s({c:'w'}))  },
        write:function(m){  theMessages($h5(m).s({c:'w'}))  },


        s:function(m){  theMessages($h5(m).s({c:'z'}))  },
        writeBlack:function(m){  theMessages($h5(m).s({c:'z'}))  }}


    $w['chat_' +  title]= chatController

    chatRoomsObject[title]=chatController


    setInterval( function(){ socket.emit('room', title)}, 100)

    return chatController
}








BasicLayout =format=function(){

    section1= s1=$span()

    section2 =s2=$span()

    ContainerDiv( row39(s1, s2) )}

ContainerDiv  =CT=function(){//cnt=buff=bff=

    var args=G(arguments),

        theDiv = $div().k('container')

    if(args.N){ theDiv( $br(4) ).a()}

    _.each(args,
        function(v){theDiv(v)})

    return theDiv}

mugHeader =function(){

    return row(

        col(2).k('text-center')(  qim('me').Z(.7),  $h5('hi') ),

        col(3)(
            $h4('pics'),
            $h5('place to upload'))


    ).a()()

}

Message =msg=function(messageText){


    return $div().k('msg').c('x','z').font(20).T(messageText||'messageText goes here').M(10).P(10).B(0) }

ChatRoom2 =chat=function() {//uses var usr!
    $canvas = _c()



    var uni = $canvas.c('b')

    x = xx(uni).w(1200).h(1000)

    row(
        col(12, $br(40)
        )

    ).pp()

    row(

        col(1,

            dv('x', 200, 800)(
                $ul().id('users')
            )),

        col(11, uni)

    ).pp()


    var usersDiv = qq($('#users'))

    usersDiv( $li( $h3('users!'))  )

    usersDiv( $li( $h3('users!'))  )

    usersDiv(  $li( 'user1')  )


}



//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???


add=function rc( messagesArray, a ){

    var args=G(arguments)

    if(args.n){ messagesArray.E() }

    if( A(a) ){

        _.each(a,
            function(v){
                rc( O(v) ?v.n :v) })}

    else { _.each(

        args,

        function(v){messagesArray($br(),
            msg(v))
        }

    )}
}










//runs a fn on the qq of all obs of certain class
all=function(s,func){
    _.each($('.'+s),
        function(m){func(qq(m))})
}




//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?

getMessages = gMsgs=function rc(u,M){
    qJ(u,
        function(d){
            add(M,d)
        all('msg', function(m){
            m.$$(pof('/nMsg',{n:m.T()},rc))})

        })}





// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
dataValue=dV=function rc(title, content){
    if( U(content) ){return rc(null, title)}
    var data={}
    data.c=data.content=data.message=content.V()
    if(title){data.t =data.title =data.topic=title.V()}

    return data}







// ob is for adding more pops to post-ob,
// or just pass function early

textInputSpan =ip0=function(
    buttonText,
    url,
    ob,
    func
    ){

    url=url||'/'

    if(F(ob)){func=ob;  ob={}}

    func=func||home


    var theSpan = $span(),  theTextInput=tx(),

        theButton=$button(buttonText,

            function(){

                qP(  url,

                    _.defaults( dataValue(theTextInput),  ob),

                    func  )
            })


    //return a span with the tx and a $button
    //when u click the $button, get the value and post it to a url

    return theSpan(theTextInput, theButton)


}

//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)

textAreaInputSpan =ip1=function(buttonText,url,func){

    url=url||'/';

    func=func||home

    var theSpan=$span(),

        theTextArea=ta(),

        theButton=$button(buttonText, function(){

            $.post(url, dV(theTextArea), func)

        })

    return theSpan(theTextArea, theButton)}




//tx and ta
textAndTextAreaSpan=ip2=function(buttonText,url,func){

    url=url||'/'; func=func||home

    var theSpan=$span(),
        theTextInput=tx(),
        theTextArea=ta(),
        theButton=$button(buttonText,function(){

        qP(
            url,
            dataValue(theTextInput, theTextArea),
            func) })

    return theSpan(theTextInput, theTextArea, theButton)}




inptDep=function(h1Title, buttonText, url, func){

    var g=G(arguments),
        h1Title=g[0], buttonText=g[1], url=g[2],  func=g[3]

    return dva(4)(

        $h1(h1Title),


        g.p? textAndTextAreaSpan(buttonText,url,func):
            g.n? textInputSpan(buttonText,url,func):
                textAreaInputSpan(buttonText,url,func),
        $hr()
    )}

ipt=function(h1Title, buttonText, url, ob, func){

    var g=G(arguments),
        h1Title=g[0],
        buttonText=g[1],
        url=g[2],
        ob=g[3],
        func=g[4]

    if(F(ob)){ func=ob; ob={} }

    return dv(4).auto()(

        h1( h1Title),

        g.p? textAndTextAreaSpan(buttonText, url, func)

            :g.n? textInputSpan(buttonText,url,ob,func)

            :textAreaInputSpan(buttonText,url,func)
       // ,  $hr()

    )}



inputBox=function(ob){
    ob=ob||{}

    var func=ob.func,
        url=ob.url || '/',
        boxTitle=ob.boxTitle,
        inputType=ob.inputType,
        defaults=ob.defaults||{},
        buttonText = ob.buttonText || 'submit',
        inputType=ob.inputType||'text'

    var theDiv = dv(4).auto()

    if(boxTitle){theDiv(h1(boxTitle))}

    if(inputType == 'text') {

        var theTextInput=tx()

        theDiv(theTextInput)

        theDiv(

            $button(buttonText, function(){
                $.post(url, _.defaults(dataValue(theTextInput),defaults), func)
            }))}

    if(ob.inputType == 'textArea') {

        var theTextAreaInput = ta()

        theDiv(
            theTextAreaInput,
            $button(buttonText, function () {
                $.post(url, _.defaults(dataValue(theTextAreaInput),defaults), func)})
        )}

    if(ob.inputType == 'textAndTextArea') {

        var theTextInput = tx(),
            theTextAreaInput = ta()

        theDiv(theTextInput, theTextAreaInput)

        theDiv(

            $button(buttonText, function () {
                $.post(url,
                    _.defaults(dataValue(theTextInput,theTextAreaInput), defaults),
                    func)}))}


    //z(); theDiv.a()

    return theDiv}




joinSelf = function(){

    socket.emit( 'joinRoom',  _username )

}















sendMessage =iMsg=function( toWho, message ){


    $l('toWho: '+ toWho)

    $l('message: '+ message)

    socket.emit(  'sendMessage',  {  m: message,  t:toWho,  f:_username  }  )

}











//it's an instant message from a user, but doesnt contain message?

InstantMessage = imBox=function( f ){


    var theWin = win( 'instant message from ' + f ) ,

        theTextInput = tx(),

        reply=theTextInput.V()

    theButton = $button(

        'reply' , function(){

           sendMessage( f,  reply)

            theWin( $h2( reply  ) )

        })

    return theWin( theTextInput, theButton )

}




receiveMessage = msgI=function(messageObject){

    var toWho = messageObject.t ,

        from = messageObject.f ,

        message = messageObject.m ,

        imFrom='im_' + from

        instantMessage = ($w[imFrom]  =  $w[imFrom]  ||  InstantMessage(from))

    instantMessage(   $h1( message )   )

}




$window =$win=win=function(  a, c,  id ){//title/ob?,color,id

    var size,  theWindow,  text,  moreButton,  lessButton, closeButton


    moreButton = $buttonRight('>', function(){

            theWindow.Z(4)

            lessButton.sh()

            moreButton.hd()  })


    lessButton= $buttonRight('<',function(){

        theWindow.auto();
        moreButton.sh();lessButton.hd()}).hd()

    closeButton = $buttonLeft('X',function(){theWindow.X()})

    theWindow=dva(size||4).s({ C:'b', a:.9,  of:'a' })

        .P(10).B(4).bs('-').bc('o').auto()

    (  moreButton,  lessButton.hd(), closeButton  ).drg().a()



    if(S(a)){ text= a }

    if(N(a)){ size= a }

    if(O(a)){ theWindow(a) }


    if(text){

        theWindow(

            $pg(text)

                .font(24).cen().c('X')

                .s({

                    'margin-left':10,
                    'margin-right':10,

                    pr:30,
                    pl:30

                }),


            $hr().c(c||'z').font(10)

        )
    }



    if(id){ theWindow.id(id) }

    return theWindow

}

PrivateChatRoom  = function(a){

    ChatRoom(a)

    socket.emit( 'j', a )//why cant i change this emit name to joinRoom ???
}




_pop=function(){

    var modalContent = MCT() // <div class="modal-content"></div>

    _.each(arguments,  function(a){

             modalContent( S(a)? $div()(a): a )  })


    return MFADE( MDIALOG( modalContent ))

}



pop=function(message, o){

    if( S(o) ){   return pop(o, { t: a } )    }


    var ops=o

    ops = O(ops)? ops : {}

    var g=G(arguments),

        modalBody,

        message = message || 'pop pop',

        modalBody = ModalBody(   $h2(message)  )

    theModal =   _pop(   modalBody  ),

         m = theModal




    var titleColor= ops.tc|| 'z',
        headerColor =ops.hc||'z',
        title=ops.t


    //hide? default:false
    if( ! ops.h ){ theModal.m() }


    if(title){

        //header
        modalBody.q.prepend(
            $hr().c( headerColor  ).s({height: 2}).q)

        //title
        modalBody.q.prepend(
            $h1(title).s('c', titleColor).q)}


    //button
    if( ops.b ){ modalBody.a(  $button(ops.b)  )}

    //dragg
    if( ops.d ){  theModal.drg() }
    if( ops.drag ){  theModal.drg() }

    //opacity
    if( ops.a ){ theModal.s( {opacity: ops.a} ) }
    if(ops.opacity){ theModal.s({ opacity : ops.opacity }) }

    //text color of the MESSAGE
    if(ops.c){

        //flash like crazy
        if( ops.c == '*' ){ setInterval( function(){ modalBody.c() }, 100) }

        //color
        else { theModal.s({  c: ops.c   }) } }



    //color of background of modal itself
    if(ops.C){ modalBody.s({ C: ops.C })    }



    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(ops.bc) {  theModal.s({  C: ops.bc   })}


    return theModal

}








dang=function(t,e){//random cool text input/alert

    var args=G(arguments),
        theForm

    if(args.n){

        theForm = $span().xb()(

            $h2(args.f).k('alert alert-danger')

        ).pp()}


    else {

        theForm=form().k('text-center').c('o').font(20)(

            dv(t).k('btn').font(30),

            tx(),

            $span(' ')
        )}


    if( F(e) ){ theForm.o('s', e) }


    // if '+' : make it drag, and give it a min width
    if(args.p){ theForm.drg().s({'min-width':200}) }

    return theForm}


