show=function(a){a=a||'welcome'
    $b().H('')(h1(a))}


PEOPLE=function(){$l('people');z()
    Quiz0=function(title){

   this.title=title

}
    Person0=function(o){

        this.name=o.name
        this.age=o.age
        this.job=o.job

        //this.work=function(){}
    }
    Person0.prototype.work=function(){return this.name + ' is working'}


    Person=bbM({
        I:function(){}, // this.oV(function(mod, err){$l(err)})
        D:{name:'john doe', age:30, job:'worker'},
        V:function(ats){if(ats.age <0){return 'age below zero, stupid!'}},
        work:function(){return this.g('name')+' is working'}})

    p=Person({name:'yano', age:34})

    p.oV(function(mod,z){$l(z)})

    personView=bbV({
        t:'li',
        k:'person',
        i:'some-person',

        I:function(){this.R()},

        T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),

        R:function(){var t=this


           //this works, but doesnt use a template
           // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))

            t.H(t.T(t.J()))
        }

    })

    v=personView({m:p})


    peopleCol=bbC({m:Person } )

    //pC=new peopleCol()
    //pC.add(p)


    pC=  peopleCol([

        {name:'rigo',age:29},
        {name:'jan',age:2},
        {name:'sal',job:'graphics'}

    ])



    pC.at(1).s('name', 'joejoe')


    peopleView=bbV({

        t:'ul',

        I:function(){
            $l('hi')
            $l(this.cl)
        },


        R:function(){//var t=this

            this.cl.each(

                function(person){

                    //$l(person.get('name'))

                    var v=personView({m: person})

                    //$l(v.el)

                    this.$el.append(v.el)

                       //t.q( v.el  )

            }, this)
        }

    })



   pcv=peopleView({cl:pC})



    pcv.R()

    $b()(pcv.el)

    //$b()(pcv.q)




}
TASKS=function(){z()

 Ap={M:{}, C:{}, V:{}}


    Ap.M.Task=bbM({})

    task1=Ap.M.Task({
        title:'go to the store',
        priority:4})

    task2=Ap.M.Task({
        title:'go to the park',
        priority:3})


    Ap.V.Task=bbV({
     t:'li',
     R:function(){
         return this.H(
             this.g('title'))
     }
    })


    taskView=Ap.V.Task({m:task})


    Ap.C.Tasks=bbC({m:Ap.M.Task})

    tasks=Ap.C.Tasks([
        {title:'hi'},
        {title:'bye'}])


    Ap.V.Tasks=bbV({
        t:'li',
        R:function(){
            this.cl.each(
                function(t){
                    var v=Ap.V.Task({m:t})
                    this.$el.append(v.el)},

                this)

            $b()(this.el)
        }
    })


    tasksV=Ap.V.Tasks({cl:tasks})


}


ITEMS=function(){z()


    Router = bbR({


        R:{
            '':'welcome',

            'itemlist':'showItemList',
            'j':'j'

        },

        welcome:function(){
           show('welcome')
        },

        j:function(){},

        showItemList:function(){
            show('show item list')
        }


    })

    router=Router()



    Ap={
        M:{},V:{},C:{}
    }



    Ap.M.item = bbM({})


    i1=Ap.M.item({ n:'jason', g:'mason' })

    i1.oR('j',function(){show('j')})



    bbH()

}

TWEETS=function(){}





AVAIL1=function(){z()

    tx('new avail').id('newAvail').a()

    bt('ok',function(){
        Ap.M.Avail({c:qiv('newAvail')}).save()
        v.render()}).a()

    di('availsDiv').a()



    Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return _d().w(400).h(100).M(20).c('g')(
            h4(model.g('c')).id('avail').c('y','r'),
            br(),sp('delete').id('deleteAvail'),
            sp(' '),sp('edit').id('editAvail'),
            sp(' '),cb2().id('selAvail')).q}

    Ap.M.Avail=bbM({urlRoot: '/avail'})

    Ap.C.Avails=bbC({model: Ap.M.Avail, url: '/avail'})


    Ap.V.Avail=bbV({

        R:function(){
            this.$el.append( Ap.T.Avail(this.model) )
            return this},

        events:{
            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'},

        changeAvail:function(){
            qq( this.$el.find('#avail') ).at('contenteditable','false')
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()},

        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},

        editAvail:function(){
            qq(this.$el.find('#avail')).at('contenteditable','true')}

    })


    Ap.V.Avails =bbV({
        el:'#availsDiv',
        I:function(){this.render()},

        R:function(){
            var t=this

            t.collection.fetch({

                success:function(){

                    t.$el.html('')

                    t.$el.append("<h1>Avails List</h1>")

                    t.collection.each(function(m){
                        t.$el.append( Ap.V.Avail({model:m}).render().el )
                        return t},t)

                }})
        }})



    avs=Ap.C.Avails()

    v=Ap.V.Avails({collection:avs})//.render()

    avs.on('destroy',function(aa){$l('destroy!!!!')})



}





AVAIL=function(){z()

    tx('new avail').id('newAvail').a()


    bt('ok',function(){

       var m= Ap.M.Avail({
           c:qiv('newAvail') })

        m.save()

        m.on('destroy', function(){
            alert('i am the model and i was destroyed')

        })

        v.render()

    }).a()

    di('availsDiv').a()



    Ap={ M:{},C:{},V:{},T:{} }

    Ap.T.Avail=function(model){
        return _d().w(400).h(100).M(20).c('g')(

            h4(model.g('c')).id('avail').c('y','r'),

            br(),   sp('delete').id('deleteAvail'),
            sp(' '), sp('edit').id('editAvail'),
            sp(' '), cb2().id('selAvail')).q}


    Ap.M.Avail=bbM({urlRoot: '/avail'})

    Ap.C.Avails=bbC({model: Ap.M.Avail, url: '/avail'})

    Ap.V.Avail=bbV({

        R:function(){
            this.q(Ap.T.Avail(this.model) )
            return this
        },


        events:{

            'click #deleteAvail':'deleteAvail',
            'click #editAvail':'editAvail',
            'blur #avail':'changeAvail'
        },


        changeAvail:function(){
            qq( this.$el.find('#avail') ).cE(0)
            var newAvail=this.$el.find('#avail').text()
            this.model.s('c', newAvail)
            this.model.save()
        },


        deleteAvail:function(){
            this.model.destroy()
            this.$el.remove()},


        editAvail:function(){

          qq(this.$el.find('#avail')).cE(1)

        }

    })


    Ap.V.Avails =bbV({

        el:'#availsDiv',

        I:function(){this.render()},

        R:function(){var t=this

            t.collection.fetch({

                success:function(){

                    t.q.H('')

                    t.q(h1('Avails List'))

                    t.e(
                        function(m){
                        t.q(
                            Ap.V.Avail({m:m}).r().el )
                        return t},t)

                }})
        }})



    avs=Ap.C.Avails()


    avs.on('destroy',

        function(j){
            alert('i am col and i was destroyed')

            v.trigger('modelDeleted')

        })





    v=Ap.V.Avails({cl:avs})


    v.on('modelDeleted', function(){alert('modDel')})


    a=bbM({

        defaults:{ prop:3 },

        test:function(){ console.log( this.get('prop') ) },




        test2:function(a){


            console.log(

                (function(){return this.get('prop')}) ()

            )


        },


        happy:function(a){

            this.test2(a)
        }

    })


    f=a()


}

//f.happy('prop')











BBSORT=function(){


    Chapter  = Backbone.Model

    chapters = new Backbone.Collection

    chapters.comparator =
        //'page'
        function(a){return _z(a)}

    chapters.add(
        new Chapter({page: 9, title: "The End"}))


    chapters.add(
        new Chapter({page: 5, title: "The Middle"}))


    chapters.add(
        new Chapter({page: 1, title: "The Beginning"}))



    $l(chapters.pluck('title'))


}


