

WappyNav = WAPNAV=function(a){

    var g=G(arguments),

        a=g[0];

    if(a){co(a)}

    if(g.N){z()}


    StandardNavbar(

        Nav(
            DropdownLoader(Glyph('picture','create'),
                    'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase','transform' ,'can','big','rub','fan','trans','pan','text' ),

            DropdownLoader(Glyph('tower','animate'),
                    'tween','tweenart', 'easing', 'pack','sprite'),

            DropdownLoader(
                Glyph('tw','play'),
                'shooty', 'bod',  'connect','matrix', 'space', 'ship',
                'circle','hit','boxes','solar','canon','fullcan' ),

            DropdownLoader(Glyph('glass','work'), 'dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object' ),

            DropdownLoader(Glyph('glass','share'),
                'users', 'status' , 'messages','posts','chatbox','universe','ranky','profiles' ),

            DropdownLoader(Glyph('glass','demo'),
                 'grid', 'bowl','tangle','corners','borders', 'gamer', 'box2d', 'wheel','heads','melon','meltut','gquery')
        ),


        NavRight(
            Dropdown(
                Glyph('user',_s().id('uname'),'-'),
                $liA('view' ),   //   $liA(   Glyph('zoom-in','profile').o(  ldr('profile')  )  ),
                $liA('logout').o(lO))),


        SearchNavRight()
    )


}


NavHeader=function(){

    _IconBars=function(num){
        var theSpan = _s()
        _.times(num||1, function(){ theSpan( $span().k('icon-bar') ) })
        return theSpan}

    var theButton = $button().k('navbar-toggle').at({'data-target':'#navbar','data-toggle':'collapse'})
    ( //button contents:
        '',  //not sure why should be necessary. w/o it -> 'ok'
        $span('toggle nav').k('sr-only'),
        _IconBars(4) )

    var theBrand = $a('wappy', function(){$w.location='/wap'}).k('navbar-brand')

    return $div().k('navbar-header')(theButton, theBrand) }
Nav=function(){return $ul().k("nav navbar-nav").apply(0, G(arguments))}
NavRight=function(){

    return $ul().k("nav navbar-nav navbar-right").apply(0, G(arguments))

}
Dropdown=function(){  // DropdownMenu =

    DropdownToggle0 =   function(dropdownName, glyphicon){

        return    $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})

        ( Glyphicon(glyphicon),  $bold('&nbsp;'+ dropdownName),  _s().k("caret") )}


    var args=G(arguments),  theInnerUl, theOuterLi


    theInnerUl = ul().k('dropdown-menu')


    _.each(args.r,
        function(arg){
            if(
                S(arg)){
                
                arg=args.p?

                    LiALoader(arg)   // $liA(arg, function(){load(arg)}   )

                    :   $liA(arg) } // *****
 
            theInnerUl( arg ) })



    theOuterLi = li().k('dropdown')(
        
        $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})
            (args.f,  _s().k('caret'))

    )



    return theOuterLi( theInnerUl )


}
DropdownLoader=function(){

    LiALoader = function(a){  return $liA(a, function(){load(a)}   )   }


    var args=G(arguments),  theInnerUl, theOuterLi


    theInnerUl = ul().k('dropdown-menu')


    _.each(args.r,
        function(arg){
            if(
                S(arg)){

                arg=LiALoader(arg)   // $liA(arg, function(){load(arg)}   )

            } // *****




            theInnerUl( arg ) })



    theOuterLi = li().k('dropdown')(

        $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})
        (
            args.f,

            _s().k('caret')

        )

    )



    return theOuterLi( theInnerUl )

}
// just pass in the contents of the collapsable part
StandardNavbar=function(){


   var navbar =  $div().k('navbar navbar-default navbar-inverse navbar-fixed-top').at({role:'naviation'})

    //NavCollapse = function(a){return $div().k('collapse navbar-collapse').id('navbar').apply(0, a)}


    return navbar(

        NavHeader(),

        $div().k('collapse navbar-collapse').id('navbar').apply(0, G(arguments))

    ).pp()

}
SearchNavRight =  function(){

    return $form().k("navbar-form navbar-right").at({role:'search'})

        (
            $div().k('form-group')
                (
                    TextInput().k('form-control').ph('search')
                ),


            SubmitButton( Glyphicon('search') )
        )

}







