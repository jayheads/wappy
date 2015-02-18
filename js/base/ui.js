 chatRoomsObject={}


 //makes auto top-spacing (for navbar not to block)
 $.containerDiv =  function(){

     var args = G(arguments),
        theDiv = $.div().K('container')

     if(args.N){ theDiv.A( $.br(4) ).A() }

     _.each(arguments, function(v){

         theDiv.A(v)
     })

     return theDiv
 }

 $.format=function(){

     section1 =s1 = $.span()

     section2 =s2 = $.span()

    $.containerDiv(

        $.row(

            $.xs(3).A(section1),

            $.xs(9).A(section2)


        )
    )

}

testFormat=function(){
    z()

    $.format()

    s1.A($.imgResponsive('chicks') )

    s2.A($.img('me'), $.img('guy'))

}

BasicLayoutX =formatX=function(){

    section1= s1=$span()

    section2 =s2=$span()

    ContainerDiv( row39(s1, s2) )}

ContainerDivX  = CTX = function(){

    var args = G(arguments),

        theDiv = $div().k('container')

    if(args.N){ theDiv( $br(4) ).a() }

    _.each(args,  function(v){ theDiv(v) } )

    return theDiv

}

mugHeaderX =function(){

    return row(

        col(2).k('text-center')(  qim('me').Z(.7),  $h5('hi') ),

        col(3)(
            $h4('pics'),
            $h5('place to upload'))


    ).a()()

}

Message =msgX=function(messageText){


    return $div().k('msg').c('x','z').font(20).T(messageText||'messageText goes here').M(10).P(10).B(0) }

//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???


addX=function rc( messagesArray, a ){

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
allX=function(s,func){
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

            m.$$(pof('/nMsg',{n:m.T()},rc))

        })

        })}

// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
dataValue=  dV=function rc(title, content){

    if( U(content) ){return rc(null, title)}

    var data = {}

    data.c = data.content = data.message = content.V()

    if(title){
        data.t = data.title = data.topic = title.V()
    }

    return data
}

// ob is for adding more pops to post-ob,
// or just pass function early

textInputSpan  =ip0= function(   buttonText,  url,  ob,  func ){

    url=url||'/'

    if(F(ob)){func=ob;  ob={}}

    func=func||home


    var theSpan = $.span(),
        theTextInput= $.input(),

        theButton= $.button(buttonText,

            function(){

               $.post(
                   url,
                    _.defaults( dataValue(theTextInput),  ob),
                    func  )
            })


    //return a span with the tx and a $button
    //when u click the $button, get the value and post it to a url

    return theSpan.A(theTextInput, theButton)


}

//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)

textAreaInputSpanX =ip1=function(buttonText,url,func){

    url=url||'/';

    func=func||home

    var theSpan=$span(),

        theTextArea=ta(),

        theButton=$button(buttonText, function(){

            $.post(url, dV(theTextArea), func)

        })

    return theSpan(theTextArea, theButton)}
//tx and ta
textAndTextAreaSpanX =ip2=function(buttonText,url,func){

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

 iptX=function(h1Title, buttonText, url, ob, func){

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

    )
 }

 inputBox1=function(ob){
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

} //unnecessary
sendMessage =iMsg=function( toWho, message ){


    $l('toWho: '+ toWho)

    $l('message: '+ message)

    socket.emit(  'sendMessage',  {  m: message,  t:toWho,  f:_username  }  )

}

$.win= $.window=function(  a, c,  id ){

    var size,
        theWindow,
        text,
        moreButton,
        lessButton,
        closeButton


    moreButton = $.buttonRight('>', function(){
        theWindow.WH(400)
        lessButton.show()
        moreButton.hide()
        })


    lessButton = $.buttonRight('<', function(){
        theWindow.WH('auto')
        moreButton.show()
        lessButton.hide()
    }).hide()

    closeButton = $.buttonLeft('X',function(){ theWindow.remove() })

    theWindow=$.divA(size||400)


        theWindow.C('b').opacity(.9).overflow('auto')

        theWindow.pad(10).borderWidth(4).borderStyle('dashed')

            theWindow.WH('auto').A(  moreButton,  lessButton.hide(), closeButton  ).drag().A()

    if(S(a)){ text= a }

    if(N(a)){ size= a }

    if(O(a)){ theWindow.A(a) }


    if(text){

        theWindow.A(

            $.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30),
            $.hr().col(c||'z').fontSize(10)

        )}


    if(id){ theWindow.id(id) }

    return theWindow

}
$winX= function(  a, c,  id ){//title/ob?,color,id

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

$.pop=function(message, ops){

    if( S(ops) ){ return $.pop(ops, { title: message } )    }

    ops = O(ops)? ops : {}


        message = message || 'pop pop'


        modalBody = $.modalBody().A( $.h2( message ) )

        theModal =  $.modalFade().A(  $.modalDialog().A(

            $.modalContent().A( modalBody)

        ) )


    if(!ops.hide){ theModal.modal() }
    if(ops.title){


        modalBody.prepend(
            $.h1(ops.title).col(ops.titleColor||'z'),

            $.hr().C( ops.headerColor||'z'  ).css('height', 2)



        )
    }
    if(ops.button ){ modalBody.A( $.button( ops.button )  )}
    if(ops.drag ){  theModal.drag() }
    if(ops.opacity ){ theModal.opacity( ops.opacity ) }


    //text color of the MESSAGE
    if(ops.col){  theModal.col( ops.col)}

    //color of background of modal itself
    if(ops.C){
        //flash like crazy
        if( ops.C == '*' ){ setInterval( function(){ modalBody.C( $r() ) }, 100) }

        else { modalBody.C( ops.C ) }
    }



    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(ops.backgroundColor) {  theModal.C( ops.backbroundColor)  }
    return theModal}

$.dangMessage=function(msg){


    var theForm = $.span().delButton()

        theForm.A(   $.h2(msg).K('alert alert-danger')  )

    return theForm.prependTo('body')}
$.floatingInput=function(text, func){

    var args=G(arguments),

        theForm=$.form().K('text-center').C('o').fontSize(20).drag().minW(200 )

    theForm.A(

        $.button(text).type('submit'),
        $.input()

    )

    if( F(func) ){ theForm.submit(func) }


    return theForm}

