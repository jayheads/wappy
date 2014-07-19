ROUTE=function(){z()

   r=bbR({

        R:{"*x":"d"}

    })()

    r.oR('d',function(a){alert(a)})//#hello -> 'hello'
    r.oR('e',function(a){alert(a)})//#e -> 'e' (could do '/#/e')

    bbH()
}
ROUTEPAMS=function(){z()

    rtr=bbR({

        R:{

            '':'home',
            'view':'v',
            'new': 'nn',
            ':id': 'en',
            'posts/:id':'gPo',

            '*acts':'dfR',

            'download/*path': 'dlF',

            ':route/:action': 'ldV'

        },

        home:function(){al('home')},
        v:function(){al('image')} ,
        nn:function(){},
        en:function(id){al(id)}
    })


    r=rtr()

    r.oR('dfR',al)
    r.oR('gPo',function(id){al('gPo# '+id)})
    r.oR('gPo', function(){alert(3)}) //both routes fire!

    r.oR('dlF', al)
    r.oR('ldV', function(rt,ac){al(rt+'_'+ac)})

    bbH()  // or Bb.h.s({pushState: true})

}
ROUTENAV=function(){z()

    Rt=bbR({

        routes:{
            'po/:id'  :  'gp',
            '*a'      :  'dr'},

        dr:function(a){al(a)},

        gp:function(id){al('Get post '+id)}

    })


    r=Rt()
    bbH()
    bt('hi', function(){r.n('po/2', {t:1}) }).a()}


BBVIEW=function(){z()

    di('div1').a().w(500).h(500).c('r')

    ListView=bbV({

        el: $('#div1')[0],

        I:function(){this.R()},

        R:function(){
            //this.$el.append("<ul><li> hello </li></ul>")
            qq(this.$el)("<ul><li> hello </li></ul>")
        }

    })

    v= ListView()

}










BACKSET=function(){z()
    d=dva(400)
    Sid=bbM({

        promptColor:function(){
            this.s({
                co : pr('color:')
            }) }
    })

    sb=Sid()

    sb.on('change:co', function(mod, col){ d.c($l(col)) })

    sb.s({co:'w'})

    sb.promptColor()

}




//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})

BACKMOD=function(){


    Person=bbM({
        i:function(){alert("Welcome")}})

    person=Person({})

    person.s({name:"Thomas",age:67})


    z()
    dva(300).id('sb')

    Sidebar=bbM({
        fn:function(){
            return this.s({c:prompt("c?")})}})

    Sidebar()
        .oC('c',
        function(m,c){
            qi('sb').c(c)
        })
        .s({c:'w'}).fn()

}


BACKCOL=function(){z()

    baddies=bbC().oA(
        function(s){
            alert("new baddie: "+ s.g("n"))})

    baddies.a([{n:"bad1"}, {n:"bad2"}])

}




BACKCOL2=function(){

    Friend=bbM({
        d:{lame:true}
    })

    f1=Friend({name:"Thomas", age:67})

    f2= Friend({game:'jigo'})

    f2.s({name:"Rigo", age:7})

    f2.s('mame','hah')

    c=bbC()

    f1=c.a(f1)

    f2=c.a(f2)

    c.rm(f1)
}



BACKVAL=function(){

    Person=bbM({

        d:{lame:true},

        i:function(){var t=this

            t.on('error',
                function(m,e){alert(3); $l(e)})


            t.on('change:name',
                function(m,e){alert(3); $l(e)})

        },

        v:function(at){
            if(at.name=='rigo'){
                return "name can't be rigo!"}}

    })


    p=Person({name:"rigo", age:7})

    //c=bbC({m:Person})
    //p1=c.a(person1)
    //p2=c.a(person2)
    //c.rm(p1)
}




BACKDEMO=function(){z()


    Temp('task', [

        lb('Task: '),
        tx().id('task_desc'),
        bt('add task').id('btn')   ])


    di('container').a()

    bbR({


        R:{
            '':'first',
            'first':'first',
            'second':'second'},

        first:function(){$l('first')},
        second:function(){
            new Task()
            $l('second')}

    })()

    bbH()


    Task=bbV({

        el: $('#container'),

        i: function(){this.r()},

        r: function(){this.$el.html( temp('task') )},

        e: {'click button': 'add'},

        add: function(){ alert( qiv('task_desc') + ' task added' )}

    })



}


MOD=function(){

    m=bbM({n:'j'})


    Donut = bbM({

        d:{
            n:null,
            sparkles:false,
            cream_filled:false},

        u:function(){var t=this
            return t.id?'/donuts/'+t.id:'/donuts'}

    })




    bostonCream=Donut({
        n:'Boston Cream',
        cream_filled:true
    })


    bostonCream.s({sprinkles:true})

    bostonCream.S() //save

    Donuts=bbC({

        m:Donut,

        url:"/donuts"

    })

    donuts=Donuts()

    donuts.fetch()// donuts.at(0); -> gets donuts by index.
    // donuts.get(0); -> gets donuts by id.
    // donuts.each(function(d){$l(d.get("name"))})
    // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
    // donuts.map(function(d){return d.get("name")})

    DonutShop=bbM({

        defaults:{n:"Untitled"},

        initialize:function(){var t=this

            t.donuts=Donuts()
            t.donuts.url='donut_shops/'+t.id+"/donuts"}
    })

    donutShop.oA(function(donut){
        alert("added "+donut.get("name"))})


    lemonFilled = donutShop.donuts.a({
        n:"Lemon Filled"
    })


    a=Eve()

    a.o("fun:had",function(){alert("wee!")});

    a.e("fun:had")//it'll alert "wee!"


}
