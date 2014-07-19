
qiv=function(a){return qi(a).v()}
pr=prompt
tp= _.template


ext=function(o){
    o.e=o.extend
    return o}

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


bbR=function(o){o=ob(o)

    if(o.R){o.routes=o.R}

    var r=Bb.Router.extend(o)

    r.o=r.on

    return function(){
        var a=new r
        a.o= a.on
        a.oR=function(r,f){a.o('route:'+r, f)}
        a.n=function(frag,op){

            if(O(op)){
                if(D(op.t)){op.trigger=op.t?true:false}
                if(D(op.r)){op.replace=op.r?true:false}}

            a.navigate(frag, op)


        return a}
        return a}
}
bbH=function(){Bb.history.start()}



Eve=function(){


    var e= _({}).extend(Backbone.Events)

    e.o= e.bind
    e.e= e.trigger

    return e}

bbE=function(o){

    // "add" (model, collection, options)
    // — when a model is added to a collection.
    // "remove" (model, collection, options) — when a model is removed from a collection.
    // "reset" (collection, options) — when the collection's entire contents have been replaced.
    // "sort" (collection, options) — when the collection has been re-sorted.
    o.e= o.trigger
    o.o= o.on
    o.oA=function(a){
        return o.o('add',function(m){a(sMd(m))})}


    o.oRm=function(a,b,c){return o.o('remove',a,b,c)}
    o.oR=function(a,b,c){return o.o('reset',a,b,c)}
    o.oSo=function(a,b,c){return o.o('sort',a,b,c)}

    o.oC=function(n,f){
        if(U(f)){return o.o('change', n)};
        return o.o('change:'+n, f)} // "change" (model, options) — when a model's attributes have changed.// "change:[attribute]" (model, value, options) — when a specific attribute has been updated.

    o.oD=function(a,b,c){return o.o('destroy',a,b,c)}// "destroy" (model, collection, options) — when a model is destroyed.
    o.oQ=function(a,b,c){return o.o('request',a,b,c)}// "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
    o.oS=function(a,b,c){return o.o('sync',a,b,c)}// "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
    o.oE=function(a,b,c){return o.o('error',a,b,c)} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.

    o.oIV= o.oI= o.oV=function(a,b,c){
        return o.o('invalid',a,b,c)
    } //"invalid" (model, error, options) — when a model's validation fails on the client.


    o.oR=function(n,f){
        if(U(f)){return o.o('route', n)}
        return o.o('route:'+n, f)
    }

    //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
    //"route" (router, route, params)  — Fired by history when any route has been matched.


    o.oAl=function(f){return o.o('all', f)} //passes event name as 1st ag

    return o}



sMd=function(m){
    m.at= m.attributes

    m.s=function(a,b,c){

        if(O(a) && O(b)){
          if(b.v){b.validate= b.v?true:false}}


        if(S(a) && O(c)){
            if(c.v){c.validate= c.v?true:false}
        }

        return m.set(a,b,c)

      }



    m.g= m.get
    m.j= m.toJSON
    m.o= m.on
    bbE(m)
    return m}

bbM=function(a){a=ob(a)

    if(a.i){a.initialize=_v(a.i)}
    if(a.I){a.initialize=_v(a.I)}

    if(a.d){a.defaults=a.d}
    if(a.D){a.defaults=a.D}

    if(a.v){a.validate=a.v}
    if(a.V){a.validate=a.V}

    var m=Backbone.Model.extend(a)

    sMd(m)

    return function(a){
      var o=new m(a)

        sMd(o)

     return o}
}

bbV=function(a){a=ob(a)

    if(a.I){a.initialize = a.I}

    if(a.R){a.render = a.R}
    if(a.E){a.events = a.E}
    if(a.T){a.template = a.T}

    if(a.t){a.tagName = a.t}
    if(a.k){a.className = a.k}
    if(a.i){a.id=a.i}

    a.g=function(m){return this.model.get(m)}
    a.H=function(a){this.$el.html(a);return this}


    a.J=function(){return this.model.toJSON()}
    //a.cl= a.collection
    //a.q= qq(a.el)


    var v=Bb.View.extend(a)

    return function(a){
        a=ob(a)
        if(a.m){a.model= a.m}

        if(a.cl){
            a.collection= a.cl

        }


        var z=new v(a)
        z.cl= z.collection
        return  z

    }


}


sCl=function(c){
    c=bbE(c)
    c.a=c.add
    c.j= c.toJSON
    c.rm= c.r= c.remove
    return c}

bbC=function(a){

    //if(U(a)){var c=new Backbone.Collection; return sCl(c)}

    a=ob(a)

    if(a.m){a.model= a.m}

    var c=Backbone.Collection.extend(a)

    return function(o){o=ob(o)

        //if(o.m){o.model= o.m}

        var b=new c(o)
        o.o=o.on
        bbE(o)
        return b}

}



