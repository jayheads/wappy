

WAPNAV=function(a){

    var g=G(arguments), a=g[0]

    if(a){co(a)}; if(g.N){z()}

    Navbar(

     Nav(
         
         
         Dropdown(
    
             Glyphicon('p', '-create'),
                
             'upload','uploads','cutouts', 
             'edit', 'avatar','paint', 
             'filters','showcase',
             'transform' ,'can','big',
             'rub','fan','trans',
             'pan',
             'text'),
         
         
         
         Dropdown(

             Glyphicon('tower', ' animate'),

             'tween',  'tweenart', 'easing',
             'pack',  'sprite'),
         
         Dropdown(Glyphicon('tower','-play'),
                'shooty', 'bod',  'connect', 'matrix', 'space', 'ship', 'circle','hit','boxes','solar','canon','fullcan'),

         Dropdown(Glyphicon('glass','-work'),
                'knocks', 'book','site','sorty','elements' ,'api' ,'object'),

         Dropdown(Glyphicon('glass','-share'),
                'users', 'status' , 'messages','posts','chatbox','universe','ranky', 'profiles'),

         Dropdown(Glyphicon('glass','*demo*'),
                'grid', 'bowl','tangle',  'corners','borders',    'gamer',     'box2d', 'wheel','heads','melon','meltut','gquery')  //,lik(gl('t','-clear'),home)
        ),

        search(),

        NavRight(
            dropdownList(

                Glyphicon('user',  _s().id('uname') ,  '-'),

                lik('view'),

                lik(Glyphicon('zoom-in','profile').o(  function(){  $w.location='/wap/'+'profile'   }   )  ),// ldr('profile')

                lik('logout').o(lO))) //.k('navbar-right')

    ).pp()


}





//Loader = ldr = function(a){   return function(){  $w.location='/wap/'+a   }}  //never called?





navListItem =  function(a){//wap =

    return lik(a, function(){$w.location = '/wap/'+a} )

}






dropdownList =  function(){

    var args=G(arguments),   theUnorderedList= ul().k(''),  theListItem = li().k('dropdown-menu')


    theListItem(


        $a().k('ddt').at({'dt':'dropdown'})

        ( args.f,

        //"<a data-toggle="dropdown" class="dropdown-toggle" href="#"></a>"
        //|| menu,

            $span(['caret'])   )

    )



    _.each(args.r,  function(val){

            theUnorderedList(

                !S(val)
                    ? val
                    : args.p
                    ? navListItem (val)
                    : lik(val)

            )})

    return theListItem( theUnorderedList )

}




Dropdown = dropdownListNavItem =  function(){

    var g=G(arguments),

        theUnorderedList=ul('-'),

        theListItem = li().k('dropdown')


    theListItem(


        lk('-')( g.f, //"<a data-toggle="dropdown" class="dropdown-toggle" href="#"></a>"

            //|| menu,

            $span(['caret'])   )

    )

    _.each(g.r, function(val){

        theUnorderedList(S(val)?  navListItem (val) : val) })

    return theListItem( theUnorderedList )

}





// waps=function(){  var g = G(arguments),   gly = Glyphicon(g.f[0], g.f[1]),  apps = _.map(g.r, navListItem),  args = [gly].concat(apps); return _a( dropdownList, apps )}


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


NavCollapse = function(a){
  return $div().k('collapse navbar-collapse').id('navbar')
        .apply(0, a)}



Navbar = function(){  //   var navbar=function(){   return _a(   $div().k(  'navbar   navbar-default  navbar-inverse   navbar-fixed-top'   ).at({   role:   'naviation'   }), G(arguments)  )    } //  var navCollapse= _a( $div().k('collapse navbar-collapse').id('navbar'),   G(arguments))

    var navbar=function(){return $div().k('navbar navbar-default navbar-inverse navbar-fixed-top')
        .at({role: 'naviation'})}

    return navbar()(

        navHeader(),
        NavCollapse(G(arguments))
    )
}







//"<a data-toggle="dropdown" class="dropdown-toggle" href="#"></a>"
//dropdownTab = tog=function(text, glyph){return lk('-')(     Glyphicon(glyph),   bold(text,'+'),   car() ) }

//caretSpan = car= function(){  return $span(['caret'])  }
// __=function(){    return li(['divider']) }


search=function(){

    var theForm= $form().k('navbar-form  navbar-right').at({ role:'search' })


    return theForm(

        $div().k('form-group')(

            $input().k('form-control').ph('search')

        ),



        //$submitButton  .. _button
        $button(   Glyphicon('search')   ).ty('submit')


    )




}





Nav =   bar=function(){

    var args = G(arguments),

        theUnorderedList = ul().k('nav navbar-nav')


    if(args.n){   theUnorderedList.k('navbar-right') }


    return _a(theUnorderedList, args)

}






NavRight =  function(){

    var args = G(arguments),

        theUnorderedList = ul().k('nav navbar-nav navbar-right')


    return _a(theUnorderedList, args)

}


////




//
DropdownA = function(name){


    return $a().k('dropdown-toggle').at({'data-toggle':'dropdown'})

    (name,  $span().k('caret')  )   // href="#"


}

//   DropdownA(g.f)



DropdownList= dropdownList =  function(){

    var args=G(arguments),   theUnorderedList , theListItem





    theListItem = li().k('dropdown-menu')(



        $a().k('dropdown-toggle').at({'data-toggle':'dropdown'}) // href="#"

        ( args.f,  $span(['caret']) )


    )


    theUnorderedList= ul().k('')

    _.each(args.r,  function(val){

        theUnorderedList(

            !S(val)
                ? val
                : args.p
                ? navListItem (val)
                : lik(val)

        )})


    return theListItem( theUnorderedList )

}




Dropdown = dropdownListNavItem =  function(){

    var g=G(arguments),

        theUnorderedList=ul('-'),

        theListItem = li().k('dropdown')


    theListItem(


        lk('-')( g.f, //"<a data-toggle="dropdown" class="dropdown-toggle" href="#"></a>"

            //|| menu,

            $span(['caret'])   )

    )

    _.each(g.r, function(val){

        theUnorderedList(S(val)?  navListItem (val) : val) })

    return theListItem( theUnorderedList )

}



