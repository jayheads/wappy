format=function(){
    s1=_s();s2=_s();
    CT(ROW(s1, s2,'-'))}



CT=function(){//cnt=buff=bff=

    var g=G(arguments),
        c=_d().k('ct')

    if(g.N){
        c( br(4) ).a()}

    _e(g,function(v){c(v)})

    return c}








mugHeader=function(){

    return row(


        col(2).k('tc')(  qim('me').Z(.7),  h5('hi') ),

        col(3)(h4('pics'),h5('place to upload'))


    ).a()()

}

msg=function(a){a=a||'hi'
    return dk('msg','x','z',20, a,'+')
    .M(10).P(10).B(0)}



chat=function(){//uses var usr!

    var uni=_c().c('b')

    x=xx(uni).w(1200).h(1000)

    row(col(12,br(40))).pp()

    row(

        col(1,dv('x',200,800)(ul().id('users'))),
        col(11,uni)


    ).pp()


    usr=function(a){ qi('users')(li(a)) }


    usr(h3('users!'))
    usr(h3('users!'))
    usr('user1')}

