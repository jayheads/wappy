//nav
$.container=function(){return $.div().K('container')}
$.iconBar=function(){return $.span().K("icon-bar")}
$.caret=function(){return $.span().K("caret")}
$.fn.toggle=function(a){return this.attr("data-toggle", a)}
$.fn.target=function(a){return this.attr("data-target", a)}

$.liAWap = function(a){   return $.liA(a,   function(){   $w.location='/wap/'+a   }   )   }

$.dropdownToggle = function(a){
    return $.a( a ).K("dropdown-toggle").toggle("dropdown").A(  $.caret()  )

}
$.dropdownMenu=function(){

   var menu= $.ul().K("dropdown-menu")

    _.each(arguments,
        function(arg){
        menu.A( $.liAWap(arg) )})

    return menu}

$.nav=function(){
  var nav = $.ul().K("nav navbar-nav")
    _.each(arguments, function(arg){ nav.A( arg ) })
    return nav}
$.navRight=function(){
    var nav = $.ul().K("nav navbar-nav navbar-right")
    _.each(arguments, function(arg){ nav.A( arg ) })
    return nav}

$.navbar=function(){return $.div().K("navbar navbar-default").A($.div().K("container-fluid"))}

$.dropdown=function(a,b){var toggle=$.dropdownToggle(a)
    var menu= $.dropdownMenu.apply(this, b)
  return  $.li().K("dropdown").A(toggle, menu)}




$.navbarHeader=function(brand){

   return $.div().K("navbar-header").A(

        $.button().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(

            $.span("Toggle navigation").K("sr-only"),

            $.iconBar(),$.iconBar(),$.iconBar()),

        $.a(brand).K("navbar-brand")

    )

}

$.navbarCollapse=function(){
  return  navbarCollapse= $.div().K("navbar-collapse collapse")

}




NEWMODAL=function(){


}







PHASER=function(){}












BOOK=function(){

    format()


    s1( h1('BOOK').o(ldr('book')) ,


    i=tx(),
        bt('new book',function(){
            qP('/newBook',{n:i.V()},ldr('book'))}),
        hr())



    qJ('/books',function(bs){

        s1(h3('books:'))

        _e(bs,


        function(b){
            s1( _s()('x').o(function(){  qP('/delBook',{b: b._id},ldr('book'))}),

                bt(b.name,function(){


            s2(h2('CHAPTER: '+b.name),
                ci=tx(),
                bt('new chapter',
                    function(){qP('/newChapter',{
                        t:ci.V(),
                        b:b._id
                    },function(){chVw(b,c)})}),hr())


                qJ('/chapters',{b:b._id},



                    function(cs){


                    _e(cs,function(c){
                        s2(bt(c.title,
                            function(){
                                chVw(b,c)}),  br(2))})})

        }),br(2))})})





    chVw=function(b,c){s2.E()
         s1.E();
        s1( h1('BOOK').o(ldr('book')) )

        qJ('/chapters',{b:b._id},

            function(cs){
                s1(h3('chapters:'))

                s2(h3('pages:'))

                _e(cs,function(c){



                    s1( _s()('x').o(function(){

                        qP('/delChapter',{c: c._id},
                            function(){chVw(b,c)})
                    }),
                        bt(c.title, function(){chVw(b,c)}), br(2))})})


        s2(h1('chapter: '+c.title))

        s2( pi=tx(),
            bt('new page',
                function(){qP('/newPage',{
                    n:pi.V(), c:c._id
                })}),hr())



        qJ('/pages', {c:c._id},

            function(ps){
                p=ps
                _e(ps,function(p){
                s2(bt(p.name,

                    function(){
                        pgVw(b,c,p)}),  br(2)  )})})
}}






pgVw=function(b,c,p){s1.E();s2.E()
    s1( h1('BOOK').o(ldr('book')) )

    s1( h1('CHAPTER '+ c.title).o(
        function(){chVw(b,c )}

    ) )

    qJ('/pages',{c: c._id},

        function(ps){
            s1(h3('pages'))

            _e(ps,function(p){

                s1(
                bt(p.name,function(){
                secVw(c)}), br(2)
            )})})



    s2(h1('page: '+p.name))

    qJ('/sections',{
            book:b._id,
            chapter:c._id,
            page:p._id},

        function(sc){
            _e(sc,function(s){
                s2(bt(s.section,function(){

                secVw(b,c,p)

                }),  br(2)  )})})
}





jde=function(a){return new C$.DOMElement(a)}

O$=function(d,s){


    var o=Do(

        jde(d.q[0])

    )

    if(s){o.ap(s)}

    return o}































ELEMENTS=function(){

    d=dv('r',400,400).a()
    d(tx())
    s=St(1000).a()
    de=O$(d,s)

    tw(de, [{x:300,y:300},2000])

    tw([de,'l'],
        [{r:360, sx:.5, sy:.5},8000],
        {r:0},
        [{r:360, sx:1, sy:1},8000]
    )



}



SITE=function(){}

