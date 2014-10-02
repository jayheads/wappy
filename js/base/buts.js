
$button = bt=function(t,f,C,c){

    var g=G(arguments),

        t=g[0]||'ok',

        f=g[1],

        C=g[2]||'b',

        c=g[3]||'y',

        buttonClass = g.p? 'btn-lg':'btn-mini'

    var button=qq('b').type('button').k('btn').k(buttonClass).c(C, c)


    button(t)

    if(f){ button.$(f) }

    if(g.n){ button.dd() }//dropdown

    return button

}



ButtonLarge = function(t,f,C,c){

    var g=G(arguments),

        t=g[0],f=g[1],C=g[2],c=g[3],

        t=t||'ok',

        k=  'btn-lg' ,

        C=C||'b',

        c=c||'y'


    b = qq('b').ty('b').k('btn').k('btn-lg').c(C, c)

    b(t)

    if(f){ b.o( f ) }

    if( g.n ){ b.dd() }//dropdown

    return b

}



SubmitButton=function(){

    var args=G(arguments),

        button = $button.apply(0, args)

   return button.type('submit')

}
















bti = function(a,b,s){ return $button(a).id(b).s( s ) }





//floating div of buttons
bts=function(a,b){
    var g=G(arguments),d=dva(2)


    if(g.p){
        return bts(['start',a],['stop',b]).auto()
    }

    _.each(g,function(v){v=A(v)?v:[v]

        d(

            $button( v[0], v[1] ).k( g.p?('fc'):'' ).M(4)

        )

    })

    return d}




//button group, and button-group-vertical(+)
btg=function(a){
    var g=G(arguments),
        a=g[0],
        b=dk(g.p?'bgv':'bg')

    if(g.n){return bt('-')(
        a||'menu'+' ',car())}

    _.each(g,function(v){
        b(S(v)?bt(v):A(v)?$button(v[0],v[1]):v)})
    return b}



//nice button dropdown menu.. gotta fix
btd=function(a){var g=G(arguments),a=g[0],

    b=btg()(btg(a,'-')),

    u=ul('-')

    _.each(g.r,function(v){

        if(S(v)){
            v=lik(v)}
        u(v)})
    return b(u)
}





//bt: green/white, block-float left
$buttonRight=btr=function(t,f,C,c){

    return bt(t,f,C,c)
    .s({
            C:'g',
            c:'w',
            y:'b',
            fl:'r'  })

}



$.buttonRight=function(text, func){

    var b = $.button(text, func).float('right')//.display('block')

    return b}

$.buttonLeft=function(text, func){

    var b = $.button(text, func).float('left')//.display('block')

    return b}


BUTTONRIGHT=function(){z()

d= $.div('b', 500, 500).drag()

    d.A(
        b=$.buttonRight('yes')
    )
}




//bt: green/white, block -float left
$buttonLeft=function(t,f,C,c){return bt(t,f,C,c)
    .s({C:'g',c:'w',y:'b',fl:'l'})}


sm=function(a){
    var g=G(arguments)

    if(g.p){

        return $button().type('submit').k('btn btn-mini button-default').T( ok(a) )
    }

    return ip('submit').k('show').v( ok(a) )

}





fSm = function(){ return qq($('.submit')) }



VERT=function(){z()

    row2( im('me') ,im('me') ) .a()




}