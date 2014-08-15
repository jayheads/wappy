//random helpers


iV=function(){ return $('input').val() }// # ?

pD=function(e){ return e.preventDefault(true) }





//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
add=function rc(M,a){var g=G(arguments)

    if(g.n){M.E()}
    if(A(a)){
        _e(a,function(v){rc( O(v)?v.n :v) })}

    else{_e(g,function(v){M($br(),msg(v))})}}

//runs a fn on the qq of all obs of certain class
all=function(s,f){
    _e($('.'+s),function(m){f(qq(m))})
}




//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?

getMessages = gMsgs=function rc(u,M){
    qJ(u,
        function(d){ add(M,d)
        all('msg', function(m){
            m.$$(pof('/nMsg',{n:m.T()},rc))})})}





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


    var theSpan = _s(),  theTextInput=tx(),

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

textAreaInputSpan=ip1=function(buttonText,url,func){

    url=url||'/';

    func=func||home

    var theSpan=_s(),

        theTextArea=ta(),

        theButton=$button(buttonText, function(){

            qP(url, dV(theTextArea), func)

        })

    return theSpan(theTextArea, theButton)}




//tx and ta
textAndTextAreaSpan=ip2=function(buttonText,url,func){

    url=url||'/'; func=func||home

    var theSpan=_s(),
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

        h1(h1Title),


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
                qP(url, _.defaults(dataValue(theTextInput),defaults), func)
            }))}

    if(ob.inputType == 'textArea') {

        var theTextAreaInput = ta()

        theDiv(
            theTextAreaInput,
            $button(buttonText, function () {
                qP(url, _.defaults(dataValue(theTextAreaInput),defaults), func)})
        )}

    if(ob.inputType == 'textAndTextArea') {

        var theTextInput = tx(),
            theTextAreaInput = ta()

        theDiv(theTextInput, theTextAreaInput)

        theDiv(

            $button(buttonText, function () {
                qP(url,
                    _.defaults(dataValue(theTextInput,theTextAreaInput), defaults),
                    func)}))}


    //z(); theDiv.a()

    return theDiv}




joinSelf = function(){

    kk.emit( 'joinRoom',  _username )

}




sendMessage =iMsg=function( toWho, message ){



    kk.emit(  'sendMessage',  {  m: message,  t:toWho,  f:_username  }  )

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




$win = win = function(  a, c,  id ){//title/ob?,color,id

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






//    _d( h1('hello') ).a()

//    <div> <h1> hello </h1>  </div>




privateChatBox = priv=function(a){
    ChatBox(a);
    kk.emit('j',a)}



ChatBox=chatBox = cbox =function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'



    var theTextInput = tx(),

        theSendButton = $button('send', function(){

            kk.emit('chatx', {

                t:title,

                n:_username,

                m: theTextInput.V()

            })}),

        thePicButton=$button('pic',function(){  pop('pic select')  }),

        thePopButton=$button('pop', function(){kk.emit('p', theTextInput.V(),t)}),


        theMessages = di( 'cbi' ).s({overflow:'auto', C:'x'}),


        usrB=_d()

        theWindow = $win('chatroom: '+title).id(id).s({

            'min-width':600,  'min-height':400, 'background-color': color

        })(

            row(col(8,

            theMessages,

            theTextInput,

            theSendButton,
                    thePopButton,
            thePicButton

                ),

                col(4, $h5('users:'), usrB)))



    return $w['chat_'+title]={

        u:function(u){
            if(A(u)){


                _.each(u, function(u){

                    usrB(

                        $h5(u).$(function(){

                                $.post('/mug', {u:u},

                                function(m){

                                    var s,d


                            $win(

                                $div()(

                                    $br(),

                                    $hr(),

                                    $h3('User: '+u),

                                    $br(),

                                    xc().w(300).h(300).font(m),

                                    s=h1(),

                                    d=_d(),

                                    ms=ta().c('w','z'),

                                    btMail(ms, u),

                                    btChat(u, ms),



                                    $button('full',function(){
                                        $l('/wap/profiles/'+ u)
                                        window.location='/wap/profiles/'+ u
                                    })

                                ))
                                    stat(u,d)

                                    prof(u,d) }

                            ) }


                        ))
                })}

        else { usrB($h5('no users'))}},

        w: theWindow,

        t: function(){return theWindow.toggle()},



        b:function(m){  theMessages($h5(m).s({c:'w'}))  },

        s:function(m){  theMessages($h5(m).s({c:'z'}))  }}

}














_pop=function(){

    var modalContent = MCT() // <div class="modal-content"></div>

    _.each(arguments,  function(a){

             modalContent( S(a)? $div()(a): a )  })


    return MFADE( MDIALOG( modalContent ))

}









pop=function(a, o){

    if(S(o)){ return pop(o, { t: a } ) }





    var g=G(arguments),

        modalBody,

        a = a||'pop pop',

        m = _pop( modalBody = MBODY(h2(a))),

        theModal = m

    o=ob(o)


    if(!o.h){theModal.m()}


    if(o.t){

        modalBody.a(


            hr().c( o.hc|| 'z')
                .s({height: 2}),


            h1(o.t).s('c', o.tc||'z').q,


            '-')

    }




    if(o.b){

        modalBody.a( $button(o.b) )}


    if(o.d){     theModal.drg() }


    if(o.a){   theModal.s( {opacity: o.a} ) }


    if(o.c){

        if(o.c=='*'){ I( function(){ modalBody.c() }, 100) }

        else { theModal.s({c: o.c}) }
    }



    if(o.C){ modalBody.s({C:o.C})}


    if(o.bc) {theModal.s({C:o.bc})}

    return theModal}








dang=function(t,e){//random cool text input/alert

    var g=G(arguments),f

    if(g.n){

        f=_s().xb()(

            h2(g.f).k('a ad') //alert-danger

        ).pp()} else {

        f=form()(
            dv(['b'],t).font(30),
            tx(),
            sp(' ')

        ).font(20).k('tc').c('o')}

    if(F(e)){f.o('s',e)}

    if(g.p){f.drg().s({nw:200})}

    return f}


