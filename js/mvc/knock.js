ko.ab=ko.applyBindings
ko.o=ko.observable
ko.c=ko.computed
ko.oa=ko.observableArray
ko.ut=ko.utils
ko.ut.af=ko.u.arrayFilter



KNOCKS0=function(){

    format()


    s2(   h1('KNOCKOUT'),


        pg('F: ',  _B().b('t','f')),
        pg('L: ',   _B().b('t','l')),
        pg('F: ',   ip().b('V','f')),
        pg('L: ',   ip().b('V','l')).id('l'),
        pg('L: ',  _B().b('t','fl')),

        bt('caps').b('$','capL'))



    vm={}
    vm.f=ko.o('j')
    vm.l=ko.o('y')

    vm.fl=ko.c(function(){
        return vm.f()+' '+vm.l()
    })

    vm.capL=function(){
        vm.l(uC(vm.l()))
    }

    ko.ab(vm)

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