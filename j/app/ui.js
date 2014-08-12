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

    else{_e(g,function(v){M(br(),msg(v))})}}

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

        theButton=bt(buttonText,

            function(){

                qP(  url,

                    _.defaults( dataValue(theTextInput),  ob),

                    func  )
            })


    //return a span with the tx and a bt
    //when u click the bt, get the value and post it to a url

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

        theButton=bt(buttonText, function(){

            qP(url, dV(theTextArea), func)

        })

    return theSpan(theTextArea, theButton)}




//tx and ta
textAndTextAreaSpan=ip2=function(buttonText,url,func){

    url=url||'/'; func=func||home

    var theSpan=_s(),
        theTextInput=tx(),
        theTextArea=ta(),
        theButton=bt(buttonText,function(){

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
        hr()
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
       // ,  hr()

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

            bt(buttonText, function(){
                qP(url, _.defaults(dataValue(theTextInput),defaults), func)
            }))}

    if(ob.inputType == 'textArea') {

        var theTextAreaInput = ta()

        theDiv(
            theTextAreaInput,
            bt(buttonText, function () {
                qP(url, _.defaults(dataValue(theTextAreaInput),defaults), func)})
        )}

    if(ob.inputType == 'textAndTextArea') {

        var theTextInput = tx(),
            theTextAreaInput = ta()

        theDiv(theTextInput, theTextAreaInput)

        theDiv(

            bt(buttonText, function () {
                qP(url,
                    _.defaults(dataValue(theTextInput,theTextAreaInput), defaults),
                    func)}))}


    //z(); theDiv.a()

    return theDiv}






joinSelf=function(){ke('j',usr)}


iMsg=function(t,m){ke('iMsg',{m:m,t:t,f:usr})}

imBox=function(f){
    var w=win('instant message from '+f) ,
        t=tx(), b=bt('reply',  function(){iMsg(f,t.V());w(h2(t.V())) })
    return w(t,b)}



msgI=function(m){

    var t=m.t, f=m.f, m=m.m,

        w=$w['im_'+f]=$w['im_'+f]||imBox(f);

    w(h1(m))
}




win = function(  a, c,  id ){//title/ob?,color,id

    var size,  theWindow,  text,  moreButton,  lessButton, closeButton


    moreButton = btr('>', function(){

            theWindow.Z(4)

            lessButton.sh()

            moreButton.hd()  })


    lessButton= btr('<',function(){

        theWindow.auto();
        moreButton.sh();lessButton.hd()}).hd()

    closeButton = btl('X',function(){theWindow.X()})



    theWindow=dva(size||4).s({ C:'b', a:.9,  of:'a' })

        .P(10).B(4).bs('-').bc('o').auto()


    (  moreButton,  lessButton.hd(), closeButton  ).drg().a()



    if(S(a)){ text= a }

    if(N(a)){ size= a }

    if(O(a)){ theWindow(a) }


    if(text){

        theWindow(

            pg(text)

                .f(24).cen().c('X')

                .s({

                    'margin-left':10,
                    'margin-right':10,

                    pr:30,
                    pl:30

                }),


            hr().c(c||'z').f(10)

        )
    }



    if(id){ theWindow.id(id) }

    return theWindow

}






//    _d( h1('hello') ).a()

//    <div> <h1> hello </h1>  </div>




privateChatBox = priv=function(a){
    chatBox(a);
    ke('j',a)}

chatBox = cbox =function(t,c,i){

    t=t||'chatbox';c=c||'b';i=i||'cbo';
    var chI=tx(),

        chS=bt('send',function(){
            ke('chatx',{t:t,n:usr,m:chI.V()})}),

        pcS=bt('pic',function(){pop('pic select')}),
        ppS=bt('pop',function(){ke('p',chI.V(),t)}),


        chM=di('cbi').s({of:'a',C:'x'}),

        usrB=_d()

        w=win('chatroom: '+t).id(i).s({
            nw:600,nh:400,C:c})(

            row(col(8,

            chM,
            chI,
            chS, ppS,
            pcS),
                col(4,h5('users:'),usrB)))



    return $w['chat_'+t]={

        u:function(u){
            if(A(u)){


                _e(u, function(u){

                    usrB(

                        h5(u).o(function(){

                                qP('/mug', {u:u},

                                function(m){var s,d


                            win(
                                _d()(
                                    br(),hr(),
                                    h3('User: '+u)
                                     ,  br(),
                                     c3(m),
                                    s=h1(),
                                    d=_d(),
                                    ms=ta().c('w','z'),

                                    btMail(ms,u),

                                    btChat(u,ms),



                                    bt('full',function(){
                                        $l('/wap/profiles/'+ u)
                                        window.location='/wap/profiles/'+ u
                                    })

                                ))
                                    stat(u,d)

                                    prof(u,d) }

                            ) }


                        ))
                })}

        else{usrB(h5('no users'))}},

        w:w,
        t:ff('w.tg()'),
        b:function(m){chM(h5(m).s({c:'w'}))},
        s:function(m){chM(h5(m).s({c:'z'}))}}
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
            dv(['b'],t).f(30),
            tx(),
            sp(' ')

        ).f(20).k('tc').c('o')}

    if(F(e)){f.o('s',e)}

    if(g.p){f.drg().s({nw:200})}

    return f}


