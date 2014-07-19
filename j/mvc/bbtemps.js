



TP=function(){

    c1=tp("hello: <%= n %>")(  {n:'moe'} )

    c1b=tp("hello: <%= n %>")(  {n:'moe'} )

    c2=tp(

        "<% _e(people, function(n){%> <li><%= n %></li>  <% })%>",
        {people:['moe','curly','larry']})

    c3= tp( "<b>  <%- v %>  </b>",   {v: '<script>'})


}

Temp=function(i,h){
    var s=''

    if(A(h)){

        _e(h,function(h){s += h.oh()})
    }


    return qq(
        $("<script type='text/template'>"+s+"</script>")

    ).id(i).a()}


temp=function(a,b){

    return _.template( $('#'+a).html(), ob(b))

}



QT=function(){z()

// this will be an attempt to make
// underscore templates, but via qq

    qT=function(f,o,e){
        return f(ob(o),
                e||_d())
    }

//a sample template
    lii=function(o,e){

        return e(
            li(o.me),
            li(o.me) )

    }





//return [li(o.me), li(o.me)]

    e= qT( lii, {me:'jason'} ).a()



}


