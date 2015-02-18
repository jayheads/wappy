ko.ab=ko.applyBindings
ko.o=ko.observable
ko.c=ko.computed
ko.oa=ko.observableArray
ko.ut=ko.utils
ko.ut.af=ko.u.arrayFilter



KNOCKS0=function(){

    format()


    s2(
        $.h1('KNOCKOUT'),


        $.p('F: ',  _B().b('t', 'first') ),
        $.p('L: ',   _B().b('t', 'last') ),
        $.p('F: ',   ip().b('V', 'first') ),
        $.p('L: ',   ip().b('V', 'last') ).id('last'),
        $.p('L: ',  _B().b('t', 'firstLast') ),

        $.button('caps').b('$','capL')

    )



    vm = {}

    vm.first = ko.observable('j')

    vm.last = ko.observable('y')

    vm.firstLast = ko.computed(function(){
        return vm.first() + ' ' + vm.last()
    })

    vm.capL = function(){
        vm.last( uC(vm.last()) )
    }

    ko.applyBindings(vm)

}

KNOCKS1=function(){format()

    s2(

        h2('Your seat reservations'),

    _t()(

          thead()(

              tr()(
                th('Passenger name'),
                  th('Meal'),
                  th('Surcharge'),
                th(''))
          ),tbody( ).b('fe','seats')(

            tr()(

                td().b('t','n'),

                td().b('t','m().mn'),

                td()(
                   // sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
                ),

                td().b('t','m().p')

            ))),


        bt('reserve').b('$','add')
    )








    AM=[
        {mn:"fries",p:10},

        {mn:"fish",p:20},

        {mn:"noodles",p:30}
    ]


    sR=function(n,m){

        return {
            n:n,
            m:ko.o(m)
        }}



    vm={}

    vm.seats=ko.oa([
        sR('Jo',AM[0]), sR('Bo',AM[1])
    ])



    vm.add=function(){
        vm.seats.push(
            sR('', AM[2])
        )}






    ko.ab(vm)


}


Task=function(d){

    return {

        t:ko.o(d.t),
        iD:ko.o(d.iD)
    }
}


TLVM=function(){

    var o={

        ts:ko.oa([]),

        nT:ko.o()

    }

    o.inc=ko.c(function(){
        return ko.ut.af(
            o.ts(),
            function(t){return !t.iD()}
        )
    })


    o.aT=function(){
        o.ts.push(Task({t:o.nT()}))
        o.nT("")}

    o.rmT=function(t){ o.ts.remove(t) }


    qJ('/ts', function(d){

        o.ts(

            $.map(d,

                function(i){
                    return Task(i)})
        )

    })


    return o}



KNOCKS4=function(){format()

    s2(
        h3('Tasks'),

        _f().b("S", "aT")(

            "Add task: ",

            ip().b('v','nT').ph("What?"),

            bt('Add').at('t','s')

          ),

        ul(
            li()(
                cb().b('ch', 'iD' ),
                ip().b("value:t, disable:iD"),
                lk('Del').b('ch', '$parent.rmT' )
            )
            
        ).b("foreach:ts, visible:ts().length>0"),

          sp("You have"),
          _B("&nbsp;").b('t', "inc().length"),
          sp("inc task(s)"),
          sp("- beer!").b("visible: inc().length==0")
    )


    ko.ab( TLVM() )

}



//
KNOCKS=function(){z()

    format()


       s2(
           ul().k('fs').b('E',"fs")(
               li().b(
                   "text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
               )

           )

       )

       MVM=function(){

           var o={}

           o.fs=['I','A','Se','Sp']

           o.chFI=ko.o()

           o.gtf=function(f){ o.chFI(f) }

           return o}



       ko.ab( MVM() )

   }





script=scrp=function(i){
    return qq( $("<script type='text/html'>") ).id(i)
}




KOTEMP=function(){z()

    format()

    s2(


        ip('r').at({name:'choices', value:'summary'}).b('ch','selectedView'), sp('summary'),

        ip('r').at({name:'choices',value:'details'}).b('ch','selectedView'), sp('details'),

        hr(),

        _d().b('T', "{name: templateToUse, foreach: articles }"),


        script("summary")(_d().b('t','title')),

        script('details')(

            _d()(

                h2().b('t','title'),
                pg().b('t','content'),
                bt('edit').b('$','$parent.selectedArticle') )
        ),


        script('edit')(

            _d()( ip().b('v','title'),
            br(),
            ip().b('v','content'))

        ))


    viewModel={


        articles: [
         {id: 1,title: "Article One",content: "Content for article one."},
         {id: 2,title: "Article Two",content: "Content for article two."},
         {id: 3,title: "Article Three",content: "Content for article three."}
        ],

     selectedView: ko.o("summary"),
     selectedArticle: ko.o()}


    viewModel.templateToUse=function(i){

        return i===this.selectedArticle()?
            'edit'
            :this.selectedView()

    }.bind(viewModel)


    ko.ab(viewModel)


}

//??
KOTEMP2=function(){z()

    _b()(

        scrp('tt')(
            h1('afsdfds')
        ),


        _d().b('T', "{name:'tt'}")


    )

    ko.ab({})


}





//this example works
KOVIS=function(){format()


    s2(
        h1('you should seee if true!!!!').b('vs','ssm')
    )


    ko.ab(

        vm={ ssm:ko.o(true) }

    )




//vm.ssm(false); // ... now it's hidden
//vm.ssm(true); // ... now it's visible again


}

//works
KOEACH=function(){format()


    s2(

       _t()(

           thead()(

               tr()(
                   th()('First name'),
                   th()('Last name')
               )

           ),


           tbody().b('E', 'people')(

               tr()(
                   td().b('t','fn'),
                   td().b('t','ln'))

           )


       )

    )





    ko.ab({

        people:[
            {fn:'B',ln:'Bert'},
            {fn:'Ch',ln:'Char'},
            {fn:'De',ln:'Dent'}
        ]

    })



}


//works
KOEACH2=function(){

    format()


    s2(
        h4('People'),

        ul().b('E', 'people')(

            li()(

                sp('pos/name: '),
                sp().b('t','$index'),
                sp().b('t','n'),

                lk(' X').b('$','$parent.rem')

            )
        ),


              bt('add').b('$', 'add')


    )

          vm=function(){

              var o={}

              o.people=ko.oa([{n:'B'},{n:'Ch'},{n:'De'}])

              o.add=function(){o.people.push({n: "New at "+new Date()})}

              o.rem=function(){o.people.remove(this)}

          return o}







              ko.ab( vm()
              )
 }


//basic databinding example
ZI=function(){

    z()

    d=dva('b',100,300).b('t', 'name')



        i=ip().b('v','name').a()

     vm={  name: ko.o('zi')  }

    ko.ab(vm)

}


//ko
cbKO = cb2=function(m, binding, val){

    var cbox = $.input().type('checkbox'),

        pg = $.p().A(

            $.span().A(m),

            cbox.koBind('checkbox', binding)
        )

    if(val){cbox.val(val)}

    return pg}
SPAM=function(){
    z()

    c = cbKO('Send me spam','wantsSpam').A()

    vm = {wantsSpam: ko.o(true)}

    ko.applyBindings( vm )

}
SPAM2=function(){z()

    cbKO('Send me spam','wantsSpam').A()

    $.div().koBind('vs','wantsSpam')(

        'Preferred flavors of spam:',
        $.div().A(cbKO('Cherry','flav','cherry')),
        $.div().A(cbKO('Almond','flav','almond')),
        $.div().A(cbKO('Glut','flav','glut'))

    ).A()

    vm={

        wantsSpam:ko.o(true),
        flav:ko.oa(["cherry","almond"])}

    ko.applyBindings(vm)

    //viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox

}
$.fn.bindKOEach = fe   = forEach=function(a){return this.bindKO('fe',a)}
$.fn.bindKOEachData = feD  = forEachData=function(a){return this.bindKOEach('$data.'+a)}
$.fn.bindKO = b =   knockoutBind=function(a,b){

    var o=[]

    if(O(a)){

        _.each(a, function(v,k){

            o.push(oO('b', k) + ':'+ v )

        })

        this.attr({'data-bind': o.join()})

    }


    else {

        this.attr({

            b: oO('b', a)+':'+b

        })}


    return this}
//dep
bd = knockoutBind2=function(a){var g=G(arguments),a=g[0]
    if(g.p){a='text: '+a}
    if(g.n){a='click: '+a}
    if(g.m){a='value: '+a}
    if(g.d){a='checked: '+a}
    q.attr({'data-bind':a})
    return q}
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
KOMASTERPIECE = DIRT=function(){z()


    p1=push1

    p2=push2

    newComment=function(comments,comment){comments.push({comment:comment})}

    TextBindingSpan = spb=function(a){

        return $.span().b('text', a)

    }


    $.div('black').mg(20).fe('m')(

        $.h1().C('y','c')(

            TextBindingSpan('message'),

            $.span(' '),

            TextBindingSpan('score'),

            p1($.h2(

                $.input(400),

                $.button('new r')

            )),


            $.h2().feD('responses').C('r').A(

                p1.A(TextBindingSpan('response')),

                p2.A(

                    $.h4(
                        $.input(400), $.button('new c'))

                ),

                $.h4().C('b').feD('comments').A(
                    p2.A(

                        TextBindingSpan('comment'))))),


        $.br(),

        $.br()

    ).A()



    vm = {
        m:ko.oa(messages),
        responses:ko.oa([{response:'one'},{response:'two'}])
    }


    ko.applyBindings(vm)




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



