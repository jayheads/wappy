ext=function(o){
    o.e=o.extend
    return o}
pr=prompt
tp= _.template

Bb=Backbone
Bb.M=ext(Bb.Model)
Bb.R=ext(Bb.Router)
Bb.C=ext(Bb.Collection)
Bb.h=Bb.history
Bb.h.s=Bb.h.start

Bb.Ma=Bb.Marionette
Bb.Ma.IV=Bb.Ma.ItemView
Bb.Ma.CV=Bb.Ma.CollectionView
Bb.Ma.CpV=Bb.Ma.CompositeView


ROUTE=function(){//   Also note that routes interpret anything after "#" //  tag in the URL. All links in your application should target "#/action" or "#action".//      (Appending a forward slash after the hashtag looks a bit nicer //  e.g. http://example.com/#/user/help)

 
    apRTR=Bb.R.e({

        routes:{
            '':'home',
            'view':'v',
            'new': 'nn',
            ':id': 'en',
            'posts/:id':'gPo', // <a href="http://example.com/#/posts/121">Example</a>
            '*acts':'dfR', // matches http://example.com/#anything-here
            'download/*path': 'dlF',   // <a href="http://example.com/#/download/user/images/hey.gif">Download</a>
            ':route/:action': 'ldV'},

        home:function(){al('home')},
        v:function(){al('image')} ,
        nn:function(){},
        en:function(id){}})  // <a href="http://example.com/#/dashboard/graph">Load Route/Action View</a>


    apRtr=new apRTR


    apRtr.on('route:dfR',al)
    apRtr.on('route:gPo',function(id){al('gPo#'+id)})
    apRtr.on('route:gPo',al) // 121 // Note the variable in the route definition being passed in here
    apRtr.on('route:dlF', al) // user/images/hey.gif
    apRtr.on('route:ldV', function(rt,ac){al(rt+'_'+ac)})  // dashboard_graph


    Bb.h.s()            // or Bb.h.s({pushState: true})

 // Start Backbone history a necessary step for bookmarkable URL's  // Notice the change in the url
   // Most conventional frameworks allow you to define routes that contain a
   /// mix of static and dynamic route parameters.
     //   For example you might want to retrieve a post with a variable id
   // with a friendly URL string. Such that your URL would look like
   // "http://example.com/#/posts/12".
     //   Once this route was activated you would want to access the id given in the URL string. // This example is implemented below.  //Post 120 Post 130
   // Notice the change in the urlDynamic Routing Cont. ":params" and "*splats"
  //  Backbone uses two styles of variables when implementing routes. First there are ":params" which match any URL components between slashes. Then there are "splats" which match any number of URL components. Note that due to the nature of a "splat" it will always be the last variable in your URL as it will match any and all components.
    //    Any "*splats" or ":params" in route definitions are passed as arguments (in respective order) to the associated function. A route defined as "/:route/:action" will pass 2 variables (“route” and “action”) to the callback function. (If this is confusing please post a comment and I will try articulate it better) Here are some examples of using ":params" and "*splats"
}
ROUTE1=function(){z()



    AR=Bb.R.e({

                 routes:{

                     'po/:id':'gp',
                     '*actions':'dr'

                 }



    })

    ar=new AR



    ar.on('route:dr',function(a){ al(a)})

    ar.on('route:gp',function(id){al('Get post '+id)})


    Bb.h.s()

}
ROUTE2=function(){z()



    AR=Bb.R.e({

        routes:{
            'po/:id'  :  'gp',
            '*a'      :  'dr'
        },

        dr:function(a){al(a)},

        gp:function(id){al('Get post '+id)}

    })


    ar=new AR
    Bb.h.s()

    bt('hi',function(){

        ar.navigate('po/2', {trigger:true})

    }).a()


}


f=function($){
        ListView=Backbone.View.extend({
            el:$('body'),
            initialize: function(){_.bindAll(this,'render'); this.render()},
            render: function(){$(this.el).append("<ul> <li>hello world</li> </ul>")}})
        var listView = new ListView()}


BACK=function(){


$w.sb=sidb()

  d=dva()

sb.on('change:co',
    function(m,c){
        alert(c)
        d.c('v')
    })



sb.set({co:'w'})

sb.c()

      Sid=Bb.M.e({c:function(){
          this.set({color:pr('enter color:')})
      }})

      sidb=function(){return new Sid}


  }

//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})




TP=function(){




    c1=tp("hello: <%= n %>")(  {n:'moe'} )

    c1b=tp("hello: <%= n %>")(  {n:'moe'} )


    c2=tp(

       "<% _e(people, function(n){%> <li><%= n %></li>  <% })%>",
       {people:['moe','curly','larry']})



   c3= tp( "<b>  <%- v %>  </b>",   {v: '<script>'})











}




MOD=function(){

    m=Bb.M.e({

        n:'jason'

    })




 Donut=Backbone.Model.extend({

     defaults:{
         name:null,
         sparkles:false,
         cream_filled:false},

     url:function(){return this.id?'/donuts/'+this.id:'/donuts'}})


    bostonCream=new Donut({
        name:'Bostan Cream',
        cream_filled:true
    })


    bostonCream.set({sprinkles:true})

    bostonCream.save()

    Donuts=Backbone.Collection.extend({
        model:Donut,
        url:"/donuts"})

    donuts=new Donuts
    donuts.fetch()// donuts.at(0); -> gets donuts by index.
  // donuts.get(0); -> gets donuts by id.
  // donuts.each(function(d){$l(d.get("name"))})
  // donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
  // donuts.map(function(d){return d.get("name")})

    DonutShop=Backbone.Model.extend({
        defaults:{name:"Untitled"},
        initialize:function(){this.donuts=new Donuts
            this.donuts.url='donut_shops/'+this.id+"/donuts"}})

    donutShop.donuts.fetch()
    donutShop.donuts.bind("add",function(donut){
        al("added "+donut.get("name"))})


    lemonFilled=donutShop.donuts.add({name:"Lemon Filled"})

    application={}
    _(application).extend(Backbone.Events)
    application.bind("fun:had",function(){al("wee!")});
    application.trigger("fun:had")//it'll alert "wee!"


}



