
//img
crs=function(a){return _b(_a(a,'/'),'.png')}


src=function f(e){

    var _src=function(a){ return _p(_x(a),'/') }

    //if(Q(e)){$l('q');e=$(e)[0]}

    if(e.image){   e=e.image}

    if(C(e)){  e=C(e)}
    if(e.src){  e=e.src}
    if(e.toDataURL){  e=tDU(e)}

    return Du(e)? e :S(e)? _src(e):0}



sI=function(i){i=i||_I()

    i.s=function(a){
        i.l=a;
        if(U(a)){return i.src}
        i.src=_s(a);
        return i}

    i.r=function(a){
        _l(i,function(i){a(sI(_g(i)))})}

    i.w=function(n){var g=G(arguments)
        if(U(n)){return i.width}
        i.i()
        i.q.w(n)
        return i}

    i.h=function(n){
        if(U(n)){return i.height}
        i.i();
        i.q.h(n);
        return i}


    i.i=function(){
        i.q.w(i.q.w())
        i.q.h(i.q.h())
        return i}

    i.q=qq(i)

    return i}




$img = im=function(a,b){

    var g=G(arguments), i=sI()


    //_k -> obj and complete
    if(_k(E(a))){
        a=sI(E(a))
        if(b){b(a)}
        return a}


    //this is for when returning the mug
    //it is a dataUrl, but for some reason,
    //i must run parseJSON on it
    // if( (a).indexOf('data') ){a= $.parseJSON(a)}


    if(b){i.r(b)}

    i.s(a||(g.N?'me':''))

    if(g.p){$b(i)}

    return i}




im.i=function(){i=im('+')}
im.ig=function(s){return qq('I',{},{s:_s(s||'me')}).a().drg()}



ime=imageSized=function(a,w,h){w=w||50; h=h||w
    return im(a||'me').w(w).h(h)}

gfi=getFirstImage=function(){return qq($('img')[0])}
pim=popImage=function(a){
    a=a||'me'
    pop(
    im(a),{t:h3(a)})}
dim=draggableImage=function(){var g=G(arguments)
    g[0]=g[0]||'me';return _a(qim,g).drg()}


pics=function(f){qG('/myPix',f)}

imgs=function(f){
    qJ('/img',f)
}



qim=function(a,z,f){

// puts im on screen, chose Z and onClick

    var i=qq(im(a))
    if(N(z)){i.Z(z)}
    if(f){i.o(f)}
    return i.a()}


del = function(item, url){

    return $button('X',

        function(q){

            $.post(url, {_id: item._id})


            //if(q){
                q.XX()
            //}
        })

}




adr=function(p){return p._id+p.e}




ci=function(i){return _c().id(i)}

xi=function(i){return xx(ci(i))}


fit=function(a,b,c){
    return xi().bc(c||'w').Z(b||7).f(a||'me')}




cut=function(m){//fresh()
    z()
    format()

   var x=xi('cut').bc('w').Z(7).f(m||'me')

       // var x=fit(m,7).id('cut')



    x.dots()

    s1(

        $button('save sprite',function(){
            sv(x);fresh();EDIT()}),br(2),

        $button('restart cut',function(){cut(m)}),br(2),

        $button('file uploads',

            function(){$w.location='/wap/uploads' }


        ))








    s2( h2('click to start cut-out..'),
        dv('o',500,200).pp()(x))
}










UPLOADS=function(){format()

    var top = 80

    s1(
        h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..'))

    $.get('/myPix',

        function(pics){

            _.each(pics, function(pic){

                var fileName = pic._id + pic.e,

                    picDiv=function(top){

                        return dva('b',100,100, top, 200,'-').k('pic').P(16).auto().drg()}


                $b()(

                    picDiv(top)(

                        qim(fileName, 1.2, function(){ cut(fileName) }),



                $button('X', function( qEl ){ //del(p,'/rmP')

                    $.ajax({
                        data: pic,
                        url: '/pic',
                        type: 'DELETE',
                        success: function (result){  qEl.XX() }  })   })




                ))

                top += 220

            })

        })}












CUTOUTS=function(){format()

    var mug=function(f){
        wM(function(m){
            $win(
                $div()($br(),$hr(),
                    $h3('User: '+ usr),
                    $br(),

                    xc().w(400).h(400).fit(m)))})}


    s1($h4('click a pic to select it as your mug, or the x to delete it'))






    $.getJSON('/img', function(cutouts){

        var top = 80

        var highlight=function(q){

            qe('pic', function(q){q.c('b')})

            q.pa().c('y')

        }

        _.each(cutouts, function(cutout){

            dva('b',100, 100, top, 200, '-' ).k('pic')(

                qim(cutout.d, 1, function(q){

                    $.post('/changeMug', { m: cutout._id } ) ////****************

                    highlight(q)

                    mug() }),





                $button('X', function( qEl ){ //del(p, '/rmI')

                        $.ajax({
                            data: cutout,
                            url: '/img',
                            type: 'DELETE',
                            success: function (result){  qEl.XX() }  })   })


            ).drg()

            top += 220

        })})

}



$fileUpload = fup=function(labelText, text){

    var theFormGroup = fg(
        $label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).k('ctl').f(20),
        ip('file').id('upl').nm('i'))




    if(text){

        theFormGroup(

            pg(['help-block'], text) )}

    return theFormGroup }

//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>





UPLOAD=function(){

    pop(

        form().mpfd().act('/pic')(   $fileUpload(''),  $input().k("show").ty('submit').V('ok')  ),

        {t: 'upload a new pic'}

    ).drg()

}








// ***
sv=function( x, func ){

    $.post('/img', {

        d: xx( C( x ) ).u(),

        dats: x.dats

    }, func ) }











//old
card=function f(a,b){ //to see a users profile

    if(O(a)){return f(a.u,a.m)}

    return dva(3).o( '$$', 'q.X()' ).c('y').cen()(

        $h3(a||'anon'),
        $img(b||'me').w(200).h(200)

    ).a()()

}




shUcards=function(){z();var t=100
    usrs(function(u){
        _e(u,function(u){
            qP('/dud',{d: u.m},function(m){
                _d().p('a').lt(t).c('r').a().drg()(
                    h2(u.u),im(m).w(200).h(200))
                t+=20})})})}


