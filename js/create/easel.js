C$  =createjs

T$  =C$.Ticker

SS$  =function(a){return new C$.SpriteSheet(a)}

S$  =function(a){return new C$.Stage(a)}

Q$  =function(){return new C$.LoadQueue(true)}

W$  =C$.Tween

Ct$  =function(a){return new C$.Container(a)}

D$   =function(){return C$.DOMElement}
G$   =function(a){return new C$.Graphics(a)}



 EaselSprite= J$=function(spriteSheet){

    if( spriteSheet.images ){

        spriteSheet = new createjs.SpriteSheet(spriteSheet)   }

    return new createjs.Sprite( spriteSheet )

}









H$  =function(a){ return new createjs.Shape(a) }



B$=function(a){ return new C$.Bitmap(a) }

//is display obj?
iDo  =function(a){ return O(a) && O(a.parent) }




//if an obj...
//if it has an 'ob' pop, return that.  o/w return it, as is
//so it just gets the raw (non super) display object

bj=function(a){

    if(O(a)){   return O(a.ob)?a.ob:a   }

}//return a??





rX =function(a){return a.rawX}
rY =function(a){return a.rawY}


withYourMugId = gMg=function(func){  $.get('/gMg',  func)}  //should it try websocket first?

wM = withYourMugData = getMug=function(func){  $.get('/getMug',  func)}



//dep by withYourMugData?
//wM=function(f){  withYourMugId(      function(mugId){ $.get('/mug/'+  mugId, f )   }     ) }




wMD=function(f){

    gMg(function(m){  $.post('/dats',  {d:m},  f)   })

}




wMb=function(f,stage){
    var g=G(arguments),
        f=g[0],stage=g[1]

    wM(function(a){

        SuperBitmapAsync(a, function(b){

            if(stage){stage.a(b)} // if stage passed, add bm to stage

                f(b, stage) //run cb, and pass it bm and stage

        })
    })

    return stage}






//with mug, after creating and putting it on a stage
wMs=function(func,w,h,bg){ var g=G(arguments)

    func=g[0]
    w=g[1]
    h=g[2]
    bg=g[3]

    var stage =St(  w||1000,  h||800,  '+'  )

    if(g.p){ stage.drg() }

    if(g.n){ s2(stage) }

    if( bg ){ stage.bgi( bg ) }

    return wMb(func, stage)

}







SuperBitmap = SuperBitmapSync =bm=function(img,stage){

    var superBitmap= Do(B$(src(img)))

    if(O(stage)){  stage.a(superBitmap) }

return superBitmap}




SuperBitmapAsync = Bm=function(img,func){


//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.

    if( O(img) && S(img.d) ){ img = img.d }


    $img(img, function(image){

        var bitmap = B$( image )

        var superBitmap = Do(bitmap)

        if( F(func) ){ func( superBitmap, bitmap ) }

        if( S(func) ){ $w[func] = superBitmap }

    })


    return img}





 Pt=function(x,y){


     if(U(x)){  return new C$.Point }

     if(O(x) && O(y)){
         return new C$.Point(  x.x+y.mx()>>1,  x.y+y.my()>>1

     )}


     if(O(x)){

         return new C$.Point(
             x.mx(),
             x.my()
         )}

     return new C$.Point(x,y)

 }




mxy=function(o,s){

    xy(o,   s.mx(),  s.my()  )

    return o}




cX=function(a,b){
    if(U(b)){return a.scaleX}
    a.scaleX=b
    return a}

cY=function(a,b){if(U(b)){return a.scaleY}
    a.scaleY=b
    return a}

cXY=function(a,x,y){
    y=N(y)?y:x
    cX(a,x)
    cY(a,y)
    return a}


sxy=function xy(o,x,y){o.scaleX=x;o.scaleY=y||x;return o}


kX=function(a,b){
    if(U(b)){return a.skewX}
    a.skewX=b
    return a}
kY=function(a,b){
    if(U(b)){return a.skewY}
    a.skewY=b
    return a}
kXY=function(a,x,y){
    y=N(y)?y:x
    kX(a,x)
    kY(a,y)
    return a}



gY=function(a,b){
    if(U(b)){return a.regY}
    a.regY=b
    return a}

gX=function(a,b){
    if(U(b)){return a.regX}
    a.regX=b
    return a}

gXY=function(a,x,y){
    y=N(y)?y:x
    gX(a,x)
    gY(a,y)
    return a}


Ed=function(ob){//var o=function f(){return f.main? f.main.apply(f, arguments):(f.obj||false)}
    var o={ob:ob}//o.super=true
    o.hel=function(a,b){return ob.hasEventListener(oO('e',a))}
    o.o=function(a,b,c,d,e){
        if(!Oo('e',a)){return o.o('$',a,b,c,d)}

        var f=ob.on(oE(a),
            b.handleEvent?b:b.ob?b.ob:b.st?b.st
                :function(e,data){b(o,sJE(e),e)},c,d,o,e)

        return function(){
            o.O(a,f)
            return _p(o.o,a,b,c,d,e)}}
    o.e=function(a,b,c){ob.dispatchEvent(a,b,c);return a}
    o.O=function(t,f){var g=G(arguments), t=g[0], f=g[1]

        $l('O')

        if(F(t)){$l('F(t)')
            return o.O('$',t)}

        t=oE(t)

        if(F(f)){$l('F(f)')

            if(g.p){ob.removeEventListener(t,f,true) }
            else if(g.n){ ob.removeEventListener(t,f,false) }
            else {$l('removing: ' + t + ' '+ _S(f))

                ob.removeEventListener(t,f)}}

        else {$l('!F(f)')

            if(S(t)){ob.removeAllEventListeners(t)}
            else{ob.removeAllEventListeners()}
        }

        return o}
    o.wt=function(type){return o.ob.willTrigger(type)}

    o.tick = o.t=function(a,b,c,d){if(U(a)){Ed(T$).t(o);return o};return o.o('t',a,b,c,d)}

    o.$=function(a,b,c,d){return o.o('$', a,b,c,d)}
    o.$$=function(a,b,c,d){return o.o('$$',a,b,c,d)}
    o.str=function(){return ob.toString()}
    return o}