
MAR=function(){z()
   // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

    d=_d().w(500).h(500).c('b').id('content').a()



    MyApp=new Bb.Ma.Application()


    MyApp.addRegions({
        mainRegion: "#content"})


    AngryCat=bbM({})


    AngryCats=bbC({  model:AngryCat  })


   //Temp(  'angry_cats-template', [thead()( tr().k('header')( th()('Name') ) ),  tbody()]  ).a()



    scrp('angry_cat-template')(

        td()('%= name')

    ).a()



    catV=Bb.Ma.IV.extend({
        template: "#angry_cat-template",
        tagName: 'tr',
        className: 'angry_cat'})



    catsV=Bb.Ma.CpV.extend({

       tagName: "table",

       id: "angry_cats",

       className: "table-striped table-bordered",

       template: "#angry_cats-template",

       itemView: catV,

        appendHtml: function(colV, itemV){
            colV.$("tbody").append(itemV.el)}})


    MyApp.addInitializer(

        function(ops){
        MyApp.mainRegion.show(new catsV(
            {collection:ops.cats}))}

    )



    MyApp.start({cats:new AngryCats([
            {name:'Wet Cat' },
            {name:'Bitey Cat'},
            {name:'Surprised Cat'}])})






}



MARTREE=function(){z()

    scrp("node-template",
         "<li><%= nodeName %></li>").a()

    di("tree").a()

    // ul {list-style: disc; padding-left: 10px; margin-left: 10px; }

   TreeView=Backbone.Marionette.CompositeView.extend({


       template: "#node-template",


       tagName: "ul",


       initialize: function(){
            // grab the child collection from the parent model
            // so that we can render the collection as children
            // of this parent node
            this.collection=this.model.nodes},



       appendHtml: function(collectionView, itemView){
            // ensure we nest the child list inside of
            // the current list item
            collectionView.$("li:first").append(itemView.el)}
   })

// The tree's root: a simple collection view that renders
// a recursive tree structure for each item in the collection


  TreeRoot = Backbone.Marionette.CollectionView.extend(

      {itemView: TreeView}

  )



}

BOOKSTORE=function(){z()



}



