


WappyNav = WAPNAV=function(a){
    var g=G(arguments),
        a=g[0];if(a){co(a)}

    if(g.N){z()}


    StandardNavbar(

        Nav(

            Dropdown(
               Glyph('p','-create'),

                'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase',
                'transform' ,'can','big','rub','fan','trans','pan','text',

                '+'),



            Dropdown(
                Glyph('tw','-animate'),
                'tween','tweenart', 'easing', 'pack','sprite',

                '+'),



            Dropdown(
                Glyph('tw','-play'), 'shooty', 'bod',  'connect','matrix', 'space', 'ship',
                'circle','hit','boxes','solar','canon','fullcan',

                '+'),





            Dropdown(
                Glyph('glass','-work'), 'knocks', 'book','site','sorty','elements' ,'api' ,'object',
                '+'),



            Dropdown(Glyph('glass','-share'), 'users', 'status' , 'messages','posts','chatbox','universe','ranky',

                'profiles',
                '+'),



            Dropdown(

                Glyph('glass','-demo'),

                 'grid', 'bowl','tangle',
                'corners','borders',    'gamer',     'box2d', 'wheel','heads','melon','meltut','gquery',

                '+')

        ),




        NavRight(



            Dropdown(

                Glyph('user', _s().id('uname') ,  '-'),


                $liA( 'view' ),


             //   $liA(   Glyph('zoom-in','profile').o(  ldr('profile')  )  ),


               $liA( 'logout').o(lO)

        )


        ),

        search()
    )


}

$LiALoader = function(a){  return $liA(a, function(){load(a)}   )   }

Dropdown = DropdownMenu =  function(){   var args=G(arguments),theInnerUl, theOuterLi


    theInnerUl = ul().k('dropdown-menu')


    _.each(args.r,
        function(arg){
            if(
                S(arg)){
                arg=args.p?

                    $LiALoader(arg)   // $liA(arg, function(){load(arg)}   )

                    :

                    $liA(arg) } // *****




            theInnerUl( arg ) })



    theOuterLi = li().k('dropdown')(
        $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})
        (args.f,  _s().k('caret')))



    return theOuterLi( theInnerUl )


}


//just pass in the contents of the collapsable part
StandardNavbar = NAV=function(a,b,c,d){

    return navbar(

                navHeader(),

                $div().k('collapse navbar-collapse').id('navbar').apply(0, G(arguments))

    ).pp()

}

DropdownA = DropdownToggleA=tog=function(a,b){

    return    $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})  //lk('-')

        ( Glyph(b),   bo(a, '+'),  _s().k("caret") )

}

SearchRight = search=function(){

    return _f().k("navbar-form navbar-right").at({r:'search'})

        (
            $div().k('form-group')(

                ip().k('form-control').ph('search')
            ),


    SubmitButton( Glyph('search') )


        )

}

Nav=function(){

    var g=G(arguments),

    u= $ul().k("nav navbar-nav")

    if(g.n){ u.k('navbar-right') }

    return _a(u,g)

}

NavRight=function(){

    var g=G(arguments),  u= $ul().k("nav navbar-nav").k('navbar-right')

    return _a(u,g)

}


ib=function(n){var s=_s();_t(n||1,function(){s(sp(['ib']))});return s}

navHeaderx=function(a){

    a=a||'me'
    return dk('nbh')(bt().k('nbg').at({dg:'#navbar',dt:'collapse'})(
            sp(['sr'],'toggle nav'),'',ib(4)),
        lk('wappy',function(){

            $w.location='/wap'
        }).k('nbB'))
}



navHeader=function(a){
    iconBar = function(num){// ib =


        var theSpan = _s()


        _.times(num||1,   function(){

            theSpan(  $span(['icon-bar'])  )

        })

        return theSpan

    }
    a = a || 'me'


    var theDiv= dk( 'navbar-header' )

    //   <button data-toggle="collapse"  data-target="#navbar" style="background-color: CornflowerBlue;
    //  color: Yellow;" class="btn btn-mini navbar-toggle" type="button">ok</button>"

    var theBrand = lk('wappy'  ,  function(){$w.location='/wap'}  ).k('navbar-brand') // navbar-brand


    var theButton = bt().k('navbar-toggle')
        .at({  'data-target': '#navbar',  'data-toggle':'collapse'  })(
        $span(['sr-only'],'toggle nav'),     '',     iconBar(4)  )

    return theDiv(theButton, theBrand)
}



Navbar = function(){  //   var navbar=function(){   return _a(   $div().k(  'navbar   navbar-default  navbar-inverse   navbar-fixed-top'   ).at({   role:   'naviation'   }), G(arguments)  )    } //  var navCollapse= _a( $div().k('collapse navbar-collapse').id('navbar'),   G(arguments))

    var navbar=function(){return $div().k('navbar navbar-default navbar-inverse navbar-fixed-top')
        .at({role: 'naviation'})}

    return navbar()(

        navHeader(),

        NavCollapse(G(arguments))
    )
}


NavCollapse = function(a){
    return $div().k('collapse navbar-collapse').id('navbar')
        .apply(0, a)}








navbar=function(){

    var g=G(arguments)

    return _a(_d().k('nb nbd nbi nbft').at({r:'naviation'}),g)

}










//ldr=function(a){ return function(){  load(a)}}
//waps=function(){var g=G(arguments), gly=gl(g.f[0], g.f[1]),w=_m(g.r,$LiALoader),args=[gly].concat(w); return _a(Dropdown,w )}
//car=function(){ return _s().k('caret')  }//__  =function(){ return li().k('divider')   }

