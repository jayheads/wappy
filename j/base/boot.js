//bs
elip =function(a){return a+'&hellip;'}

ex = function(){return '&times;'}




//"<div class="form-group"></div>"

FormGroup=formGroup=fg=function(a){

    return _a(  $div().k('form-group'),  G(arguments))

}



//put items in a qq(div).k(row)

Row = row=function(n){

    var theDiv=$div().k('row')

    _.each(G(arguments), function(arg){ theDiv(arg) })

    return theDiv}



//pass in size, and then args(contents) as a list (or as an array)
Col = col = function(){var args=G(arguments),

    theDiv=$div().k('m' + args[0]),

    iter = A(args[1])?  args[1] : args.r

    _e(iter, function(v){theDiv(v)})

    return theDiv}



       //backhead


row2=function(a,b){return row(col(6,a),col(6,b))}
row3=function(a,b,c){return row(col(4,a),col(4,b),col(4,c))}
row4=function(a,b,c,d){return row(col(3,a),col(3,b),col(3,c),col(3,d))}
row84=function(a,b){return row(col(8,a),col(4,b))}

row48=function(a,b){return row(col(4,a), col(8,b))}//
row39=function(a,b){return row(col(3,a), col(9,b))}//

row210=function(a,b){return row(col(2,a),col(10,b))}//
row111=function(a,b){return row(col(1,a),col(11,b))}//


//row48([4],[ 8 ])
                 //row39([3],[ 9 ])

push4=function(a){return row48([],a)}
push3=function(a){return row39([],a)}
push2=function(a){return row210([],a)}
push1=function(a){return row111([],a)}



row93=function(a,b){return row(col(9,a),col(3,b))}
row363=function(a,b,c){
    return row(col(3,a),col(6,b),col(3,c))}

$row = ROW=function(a,b,c,d){

    var g=G(arguments),

        z=g.z



    if(z==1){return row(col(12,a))}

    if(z==2){
        return g.p?row93(a,b)
        :g.n? row39(a,b)
        :row2(a,b)
    }


    if(z==3){return g.n?row363(a,b,c):row3(a,b,c)}

    if(z==4){return row4(a,b,c,d)}

}




FT=function(){

    var args = G(arguments),

        theDiv = $div().k('footer')


    _.each(args,  function(arg){

        theDiv(

            S(arg)?  pg(arg): arg

        )})

    if(args.p){theDiv.cen()}
    return theDiv.id('footer')

}



HeaderDiv=HD=function(){

    var args=G(arguments),
        theDiv=$div().k('header')

    _.each(args,function(v){
        if(S(v)){v=h3(v)}
        theDiv(v)})

    if(args.p){theDiv.cen()}
    return theDiv.id('header').mb(20)}




Jumbotron=JumbotronDiv=JT=function(){
    var args=G(arguments),

        theDiv=$div().k('jumbotron')

    theDiv(h1(args.f))

    _.each(args.r,
        function(v){

            if(S(v)){v=h3(v)}

            theDiv(v)

        })


    if(args.p){theDiv.cen()}

    return theDiv.id('jumbo')
}



Thumbnail=thumbnail = tn=function(a){

    var theDiv=$div().k('thumbnail')

    _.each(arguments, function(arg){

        theDiv(S(arg)? im(arg): arg  )

    })


    return $div().k('x2 s1')(theDiv)

}



ThumbnailRow=thumbnailRow= tnr=function(g){z()

    var theRow = row()

    _.each(G(arguments),
        function(a){
            theRow(thumbnail(a))
        })

    return theRow.a()
}


ThumbnailTimes=thumbnailTimes=tnt=function(num){
    var arr=[]
    _.times(num||20,
        function(){
            arr.push('me')})
    _a(thumbnail,arr)}










//pils
Pill=pil=function(o){var g=G(arguments),p=ul();p.k('n np');p.c('y')
    if(O(o)){_e(o,function(v,k){var l=A(k)?lik(k[0],'+'):lik(k);l.o('$',v);p(l)})}
    else{_e(g,function(v){if(A(v)){p(lik(v[0],'+'))} else{p(lik(v))}})};return p}

//login pils
LoginPill=logi=function(){pil({'log in':lI,'log out':lO}).pp()}




Glyph=Glyphicon=glyphicon=gl=function(){var g=G(arguments),str,
    s=_s().k('glyphicon').k('glyphicon-'+oO('gl',g[0]))
    if(O(g[1])){s.a(g[1])}
    if(S(g[1])){s(g[1])}
    if(g.n){s.pp(_s().T('-'))}
    return s}


ModalFooter = MFOOT=function(){

    var theDiv=$div().k('modal-footer')

    _.each(G(arguments),function(arg){theDiv(arg)})// :)

    return theDiv}


ModalBody = MBODY= function(){

    var theDiv = $div().k('modal-body')

    _.each(G(arguments),
        function(arg){theDiv(arg)})

    return theDiv}


ModalHeader = MHEAD= function(){

    var theDiv = $div().k('modal-header')

    _.each(G(arguments),
        function(arg){theDiv(arg)})

    return theDiv}
ModalContent =MCT=function(){
    var theDiv=$div().k('modal-content')

    _.each(
        G(arguments),
        function(arg){theDiv(arg)})

    return theDiv}
ModalDialog =MDIALOG=function(){
    var theDiv=$div().k('modal-dialog')
    _.each(G(arguments),function(arg){theDiv(arg)});
    return theDiv}


ModalForm =MFADE = function(){
    var theDiv=$div().k('modal form')
    _.each(G(arguments),function(arg){theDiv(arg)});
    return theDiv}






Modal = MODAL=function(a,b,contents){

    var footer=ModalFooter(

        bt({t: 'close' }).at({  type:'submit',  'data-dismiss':'modal'  }) )

    if(contents){ footer(contents) }

    return ModalForm(//Fade?

        ModalDialog(

            ModalContent(

                ModalHeader(

                    bt({t: ex}).k('close')

                        .at({'data-dismiss':'modal'}),

                    h4(a).k('modal-title')
                ),

                ModalBody(b), footer))
    )}







