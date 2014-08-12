

//if empty, return qq-label
// lb(label-text=, for=)

lb=function lb(l,f,n,p){

    var g=G(arguments),
        sl=qq('lb'),
        st;if(!g[0]){return sl}


    sl.at({for:f}).k('ctl').H(l)
    if(!g[2]){return sl}




    st=tx().at({id:f,n:n,ph:p||'...'})

    if(g.N){
        st.k('fc')
    }

    return sp()(sl,st)

}





//el
_n=function(a){if(U(a)){return qq('b')}}//btn
_N=function(a){if(U(a)){return qq('N')}}//nav




$form=function(){
    return qq('f')
}


fc=function(a){
    return ip(a).k('fc')}

form=function(c,a){

    var g=G(arguments),c=g[0],a=g[1],
    f=$form().k('f').at({r:'form'})

    if(g.N){f.at({m:'post'})}

    if(D(c)){f.c(c)}

    if(a){f.at({a:a})}

    return f

}






fo=function(a){var g=G(arguments),f=form()
    if(a=='i'){return fo(['fi fg'])}
    if(a=='f'){return fo(['w']).at({m:false,a:false}) }
    if(a=='r'){return fo(['nbf nbr'])}

    _e(g,function(v){
        if(A(v)){f.k(v[0])}
        else{f(v)}
    })

    if(g.p){f(sm().v('ok'))}
    return f.c('b')}





$input = ip=function(typ, val, C, c){

    var g=G(arguments),


        i=qq('i').at({

            type: typ || 't',

            value: val

        })


    if(g.p){  i.k('form-control') }

    if(C){ i.s('C', C) }

    if(c){ i.s('c', c) }


    return i

    //"<input type="text">"
}








tx=function(){
    var g=G(arguments),t=ip()


    if(N(g[0])){t.w(g[0])}
   else{t.ph(g[0])}


    t.id(g[1])
    if(g.N){t.k('fc')}

    return t}








//password
pw=function(p){return ip('p')}


//range
rg=function(){return ip('g')}





//text area.. +- k='fc', specify rows, cols, C,c
ta=function(r,c,Cl,cl){
    _ta=function(){return qq($('<textarea>'))}


    var g=G(arguments),t=_ta()

    Cl=Cl||'x'
    cl=cl||'z'
    if(g.N){t.k('fc')}
    if(N(r)){t.at({R:r})}
    if(N(c)){t.at({C:c})}
    return t.c(Cl,cl)}






//radiobtns

gCh=function(n){
  var i=$("input[type='radio'][name="+n+"]:checked")
    return i.val()}


rb=function(n,v,l){
    var g=G(arguments),
        checked,n=g[0],v=g[1],l=g[2]

    if(A(v)){v=v[0];checked=true}

        var I=n+'-'+ v,
            V='&nbsp'+v+'&nbsp',
            r=ip('r').nm(n).v(v).id(I)

    if(checked){r.at({checked:'checked'})}

    return l?sp()(r,lb(l,I))
      :g.p?sp(br(),r,lb(V,I))
      :g.N?sp(r,lb(V,I))
      :r}


rbg=function(n,v){var g=G(arguments),n=g[0],v=g[1],s=sp()
       if(g.p){_e(v,function(v){s(rb(n,v,'+'))})}
     else{_e(v,function(v){s(rb(n,v))})}
       return s.id(n)}


//checkboxes
cb=function(n,v,l){
    var g=G(arguments),
        checked,n=g[0],v=g[1],l=g[2]

    if(A(v)){v=v[0];checked=true}

    var I=n+'-'+ v,
        V='&nbsp'+v+'&nbsp',
        r=ip('c').nm(n).v(v).id(I)

    if(checked){r.at({checked:'checked'})}

    return l?sp()(r,lb(l,I))
        :g.p?sp(br(),r,lb(V,I))
        :g.N?sp(r,lb(V,I))
        :r}

cbg=function(n,v){var g=G(arguments),n=g[0],v=g[1],s=sp()
    if(g.p){_e(v,function(v){s(cb(n,v,'+'))})}
    else{_e(v,function(v){s(cb(n,v))})}
    return s.id(n)}
cbx=function(n,v,i){var g=G(arguments),
    c=ip('c'),
    s=_s()

    if(A(g[0])){
        _e(g,function(ar){
            s(_a(cb,ar),lb(ar[1],ar[2]))})
    return s(br())}

    n=g[0]||'',v=g[1]||'',i=g[2]||''
    c.id(i).nm(n).v(v)
    return g.n? dk('cb')(lb()(n).pp(cb()))
        :g.p?c.po('c',true):c}
cbl=function(n,v,i){var g=G(arguments)
    return sp(
        _a(cb,g),
        lb(v,i))}


cb2=function(m,b,v){

    var c=ip('c'),p=pg( sp(m), c.b('c',b) )
    if(v){c.v(v)}

    return p}




SPAM=function(){
    z()


    c=cb2('Send me spam','wantsSpam').a()


    vm = {wantsSpam: ko.o(true)}

    ko.ab(vm)

}


SPAM2=function(){z()




    c=cb2('Send me spam','wantsSpam').a()



    _d().b('vs','wantsSpam')(



          'Preferred flavors of spam:',
    _d()(cb2('Cherry','flav','cherry')),
    _d()(cb2('Almond','flav','almond')),
    _d()(cb2('Glut','flav','glut'))


       ).a()


    vm={

        wantsSpam:ko.o(true),
        flav:ko.oa(["cherry","almond"])}

    ko.ab(vm)

    //viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox

}


messages=[




    {

        message:'zi',


        score:100,


        responses:[

            {response:'good coder',
                comments:[{comment:'..eh'}]},
            {response:'cool girl'}
        ]

    },







    {message:'yano',

        score:3,

        responses:[

        {response:'is cool guy',
            comments:[

            {comment:'hi'},
            {comment:'hello'}]},

        {response:'a'},
        {response:'b'},
        {response:'fun'}]},


    {message:'is awesome',score:0,responses:[
        {response:'afsdafsd'}]},



    {message:'lame',score:20,responses:[
        {response:'weird',comments:[
            {comment:'not!!!!1'}]},
        {response:'lamer',comments:[
            {comment:'fuck ya'}]}]},


    {message:'rocks',score:4,responses:[]}



]







DIRT=function(){z()
     p1=push1
    p2=push2
    newComment=function(comments,comment){comments.push({comment:comment})}

    spb=function(a){return sp().b('t',a)}




   _d().c('z').mg(20).fe('m')(

        h1().s('c','y')(

            spb('message'),sp(' '),
            spb('score'),

            p1(h2(
                tx(400),bt('new r'))),

            h2().feD('responses').s('c','r')(

                p1(spb('response')),
                p2(h4(tx(400),bt('new c'))),

                h4().s('c','b').feD('comments')(p2(spb('comment'))))),

        br(),  br()

        ).a()



    vm={
        m:ko.oa(messages)
        ,responses:ko.oa([{response:'one'},{response:'two'}])
    }


    ko.ab(vm)




    f=function(){vm.p.push({f:'jason',l:'yano'})}
}







BLM=function(){

    var o={}

    o.itemToAdd=ko.o('')

    o.allItems=ko.oa(['a','b','c'])

    o.selectedItems=ko.oa(['d'])

    o.addItem=function(){
        if(o.itemToAdd()!=''//&& o.allItems.indexOf(o.itemToAdd())<0
            )
        {
            o.allItems.push(o.itemToAdd());
            o.itemToAdd('')}
    }


    o.removeSelected=function(){
        o.allItems.removeAll(o.selectedItems())
        o.selectedItems([])}

    o.sortItems=function(){o.allItems.sort()}
    return o}


  BETTERLIST=function(){z()

      _d()(
      fo().b('S','addItem')(
          sp('add item'),

          tx().b({
              v:'itemToAdd'//,vu:'afterkeydown'
          }),

          sm('add').b('ea','itemToAdd().length>0')),


          _d()(
              sp('Your values:'),
              sel().h(5).b({
                  o:'allItems',
                  so:'selectedItems'
              })

          ),

      _d()(

          bt('remove').b({
              c:'removeSelected',
              ea:'selectedItems().length>0'}),

          bt('sort').b({
              c:'sortItems',
              ea:'allItems().length>1'}))

          ).a()

      ko.ab(o=BLM())}





FOREACH=function(){z()

          _d().b('fe','p')(

              pg(

                  sp().b('t','f'),
                  sp(' '),
                  sp().b('t','l'))

          ).a()


vm={
              p:ko.oa([
              {f:'B',l:'Bb'},
            {f:'C',l:'Cc'},
            {f:'D',l:'Dd'}])
}
      ko.ab(vm)




      f=function(){vm.p.push({f:'jason',l:'yano'})}
  }







SEL=function(n,i){
    var g=G(arguments),

        s=_y().nm(n).id(i)

    if(g.N){s.k('fc')}
    if(g.p){s.at({mutiple:true})}

    return s}
OP=function(){
    var g=G(arguments),
        o=_o()(g[0])
    o.V(g[0])
    if(g.p){ o.at({selected:true})}

    return o}
sel=function(){var g=G(arguments),

    s=_s(),sl  //if(!A(g.f)){g.unshift( ['select'] )}

      if(A(g.f)){
    sl=_a(SEL,g.f)
    _e(g.r,function(v){
        if(S(v)){v=OP(v)};
        sl(v)})  }

    else{
          sl=_a(SEL)
    _e(g,function(v){
        if(S(v)){v=OP(v)};
        sl(v)})  }



sl.V=function(v){

    if(U(v)){return sl.q.val()}
       sl.q.val(v)
    return sl}


    sl.o=function(f){f=f||alert

        sl.q.change(function(){ f(sl.V()) })
   return sl }

    return sl}


selects=function(f){var s=$(oT('sl'))
    if(f){s.on(oE('/'), f)}
    return s}

boxes=function(f){var b=$("input[type='checkbox'],input[type='radio']")
    if(f){b.on(oE('$'),f)}
    return b}

inputs=function(f){selects(f);boxes(f)}


testForm=function(){

    return _f()(

        sel(['single'], 'Single', 'Single2'),

        sel(['multiple','+'], 'Multiple', 'Multiple2','Multiple3' ),

        cb(['check','check1', 'ch1'],['check', 'check2', 'ch2','+']),

        rb(['radio','radio1', 'r1', '+'],['radio', 'radio2', 'r2'],'+'),

        sm())

}




txb=function(a,f){var g=G(arguments),a=g[0],f=g[1],
        t=tx(),
        b=bt(a,function(){f(t.V())}),
        d=dv()(t,b)
    return d.a()}
ASH1=function(){


    z()

    a={}

    ash=function(){return JSON.stringify(a)}

    t=txb('ash',function(n){a[n]=[];ashy()}

    )
}
ashy1=function(a){

       a=a||$w['a']||[]

       d=_d()(br(3))

       _e(a,


           function(v,k){


           d(
               h3(k),
               br(2),
               dd=_d(),
               txb('b',function(aa){
                   a[k].push(aa)}))

               _e(v,
                   function(v){

                   dd(
                   _d()(h4(v).c('r','w')).o(function(){

                       ashy(a[k])

                   })

                   )
               })



           })

       w=win(d)
   }

jS=function(a){
    return JSON.stringify(a)}















ASH=function(){z()

    a=aaa()

    //ash=function(){return JSON.stringify(a)}

    t=txb('ash',
        function(n){
            a.c.push(aaa(n))
            ashy()
        })}




ashy=function(a){

    a=a||$w['a']||[]

    d=_d()(br(3))

    _e(a,


        function(v,k){


            d(
                h3(k),
                br(2),
                dd=_d(),
                txb('b',function(aa){

                    a[k].push(aa)

                }))

            _e(v,
                function(v){

                    dd(
                        _d()(h4(v).c('r','w')).o(function(){

                            ashy(a[k])

                        })

                    )
                })



        })

    w=win(d)
}








//_.find(a,function(a){return a.a==2})




as=function(t){
    var o=O(t)?t:{
        t:t||'test',
        c:[]
    }

    o.j=function(){$l(jS(o));return o}


    o.n=function(a){


        _e(G(arguments),function(a){
            o.c.push(as(a))
        })

        return o}



    o.a=function(a,b){
        var z=o.g(a)
        if(z){
            z.c.push(as(b))}
        return o}


    o.g=function(a){

        if(S(a)){
            return as(_.find(o.c,function(c){
                return c.t==a }))}

        var g=G(arguments),
            ar=o.g(g.f)
        _e(g.r,function(a){if(ar){ar=ar.g(a)}})}




    o.l=function(){

        d=_d().a()(
            h1(o.t),

            txb('new',function(a){ o.n(a) }),
            br(3))

        _e(o.c,

            function(c){
                d(h3(c.t))
                _e(c.c,function(c){
                    d(h4(c.t))})
                d(br(2))})


        w=win(d)}

    return o

}

