



TP=function(){z()

    c1=tp("hello: <%= name %>" , {name:'moe'} )

    c1b=tp("hello: <%= name %>")(  {name:'moe'} )

    c2=tp(

        "<% _e(people, function(name){%>  " +
        "<li>  " +
        "<%= name %>  " +
        "</li>  " +
        "<% }) %>",

        {people:['moe','curly','larry']}
    )

    c3= tp( "<b>  <%- tag %>  </b>",   {tag: '<script>'})  // <%- vs <%= ?

    $b()(c2)

}






Temp=function(i,  h){
    var s=''

    if(A(h)){
        _e(h,
            function(h){
                s += h.oh()
            })
    }

    s="<script type='text/template'>"+ s +"</script>"

    $l('s: '+unescape(s))
    return qq(


        $(s)

    ).id(i).a()

}




tempScr=function(i,e){

   t=qq($(
            '<script type="text/template" id="'+i+'">'
    ))

    _e(e,
        function(e){

            t(e)
    })



    return t
}




temp=function(a,b){
    return _.template(
        $('#'+a).html(),
        ob(b))}







//QT:

// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all


    qT=function(f,o,e){
        return f(ob(o), e||_d())
    }


//a sample template
    lii=function(o,e){

        return e( li(o.me), li(o.me) )
    }

//return [li(o.me), li(o.me)]

   // e= qT( lii, {me:'jason'} ).a()


    thed=function(o,e){

        return e(

            thead()(
                tr().k('header')(
                    th()('Name'),th()('Age')
                )
            )
        )
    }



   // t=qT(thed).a()



CATZ=function(){z()



    //tempScr('cat', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()


    //tempScr('cats', [td()("<%= name =>")]).a()

    //Temp('cat1', [thead()(tr().k('header')(  th()('Name') )  ), tbody()]).a()

    //Temp('cats1', [td()( "<%= name =>" )]).a()


    d=_d().w(500).h(500).c('y').id('content').a()

    MyApp = new Backbone.Marionette.Application()

    MyApp.addRegions({mainRegion: "#content"})


    AngryCat=Backbone.Model.extend({

        rankUp: function(){
            this.set({
                rank: this.get('rank')-1
            })},

        rankDown: function(){
            this.set({rank: this.get('rank') + 1
            })}

        //,  defaults:{rank:0}
    })


    AngryCats=Backbone.Collection.extend({

        model: AngryCat,

        initialize: function(cats){
            var rank=1


           // _.each(cats, function(cat){ cat.set('rank', rank); ++rank })

            var self=this;

            MyApp.on('rank:up',function(cat){console.log('rank up');

                    if (cat.get('rank') === 1) {
                    // can't increase rank of top-ranked cat
                    return true}

                self.rankUp(cat)
                self.sort()
                self.trigger('reset')

                })
            MyApp.on('rank:down', function(cat){console.log('rank down');

                if (cat.get('rank') === self.size()) {
                    // can't decrease rank of lowest ranked cat
                    return true}

                self.rankDown(cat)
                self.sort()
                self.trigger('reset')

            })},


        rankUp: function(cat) {
            // find the cat we're going to swap ranks with

            var rankToSwap = cat.get('rank') - 1
            var otherCat = this.at(rankToSwap - 1)

            // swap ranks
            cat.rankUp()
            otherCat.rankDown()},
        rankDown: function(cat) {
            // find the cat we're going to swap ranks with
            var rankToSwap = cat.get('rank') + 1;
            var otherCat = this.at(rankToSwap - 1);
            // swap ranks
            cat.rankDown();
            otherCat.rankUp()},
        comparator: function(cat){return cat.get('rank')}})




    AngryCatView = Backbone.Marionette.ItemView.extend({

        template: "#cat_template",
        tagName: 'tr',
        className: 'angry_cat',

        events: {
            'click .rank_up': 'rankUp',
            'click .rank_down': 'rankDown'},


        rankUp: function(){
            MyApp.trigger('rank:up', this.model);
            console.log('trigger rank up')},


        rankDown: function(){
            MyApp.trigger('rank:down', this.model);
            console.log('trigger rank down')}


    })


    AngryCatsView = Backbone.Marionette.CompositeView.extend({

        tagName: "table",
        id: "angry_cats",
        className: "table-striped table-bordered",

        template: "#cats_template",

        itemView:AngryCatView,

        appendHtml: function(collectionView, itemView){
            collectionView.$("tbody").append(itemView.el)
        }

    })




    MyApp.addInitializer(

        function(options){

        angryCatsView = new AngryCatsView({collection: options.cats})


        MyApp.mainRegion.show(angryCatsView)

    })



    MyApp.start({

        cats:new AngryCats([
            {name: 'Wet Cat', img:'/me.png', rank:1},
            {name: 'Bitey Cat',img:'/guy.png',rank:2},
            {name: 'Surprised Cat',img:'/chicks.png',rank:3}
        ])

    })









}


