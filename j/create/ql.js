
Ql=function(a){

    var q=Q$()

    q.i=[]

    q.l=function(a,b,c){if(U(a)){q.load()}
    else if(A(a)){q.loadManifest(a,b,c)}
    else if(a.src){q.loadFile(a,b,c)}
    else if(S(a)){q.loadFile(_s(a),b,c)}
    else if(O(a)){
        if(a.c){q.c(a.c)}
        if(a.f){q.f(a.f)}
        if(a.m){q.l(a.m)}}
        return q}

    q.f=function(a,b,c){q.on('fileload', a, b, c)
        return q}


    q.c=function(a,b,c){q.on("complete",
        function(){a(q.i)},b,c)
        return q}

    q.gr=function(a){return q.getResult(a)}
    q.gi=function(a){return q.getItem(a)}



    //q.f(function(e){ if(e.item.type=="image"){q.i[e.item.id]=e.result}})

    q.f(function(e){
        if(e.item.type=='image'){
            q.i[ crs(e.item.id)]=e.result}})

    if(a){q.l(a)}

    return q}
Mf=function(a){var g=G(arguments),mf=[]
    _e(g, function(v){
        mf.push({

            src:_s(v),
            id:v

        })})

    return mf}
makeMan=function(a){
    return _a(Mf,_m(a.images,function(i){return crs(i)}))}
gB=function(e){
    var b=B(e.result);
    b.v=e;
    b.i=e.image;
    b.e=e.result;
    b.H=b.e.height;
    b.W=b.e.width;
    b.t=b.e.outerHTML;
    b.s=b.e.src;
    b.it=e.item;
    b.X=b.i.ext;
    b.p=b.i.src;
    b.q=e.target;
    b.r=e.rawResult;
    b.b=b.r.byteLength;
    return l(b)}
rdyBl=function(f){
    return new Function("l('mR');"+f+";}")}
bk=function(p){
    var q=Q();q.k("b=B(e.result)");q.f(p)}


