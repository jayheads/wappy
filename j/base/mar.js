
MAR=function(){
   // http://davidsulc.com/blog/2012/04/15/a-simple-backbone-marionette-tutorial/

    d=_d().w(500).h(500).c('b').id('content').a()


    MyApp=new Bb.Ma.Application()

    MyApp.addRegions({mainRegion: "#content"})

    AngryCat=Bb.M.e({})

    AngryCats=Bb.C.e({model:AngryCat})

    scrp('angry_cats-template')(
        thead()(tr().k('header')(th()('Name'))),
        tbody()).a()

    scrp('angry_cat-template')(td()('%= name')).a()

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


    MyApp.addInitializer(function(ops){
        MyApp.mainRegion.show(new catsV(
            {collection:ops.cats}))})


    $(function(){
        MyApp.start({cats:new AngryCats([
            {name:'Wet Cat' },
            {name:'Bitey Cat'},
            {name:'Surprised Cat'}])})})



}