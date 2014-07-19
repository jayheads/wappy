C$  =createjs

T$  =C$.Ticker

SS$  =function(a){return new C$.SpriteSheet(a)}

S$  =function(a){return new C$.Stage(a)}

Q$  =function(){return new C$.LoadQueue(true)}

W$  =C$.Tween

Ct$  =function(a){return new C$.Container(a)}

D$   =function(){return C$.DOMElement}
G$   =function(a){return new C$.Graphics(a)}

J$  =function(a){
    if(a.images){a=SS$(a)}
    return new C$.Sprite(a)}

H$  =function(a){return new C$.Shape(a)}

B$=function(a){return new C$.Bitmap(a)}

//is display obj?
iDo  =function(a){return O(a) && O(a.parent)}




//if an obj...
//if it has an 'ob' pop, return that.  o/w return it, as is
bj=function(a){

    if(O(a)){

        return O(a.ob)?a.ob:a

    }

}//return a??



rX =function(a){return a.rawX}
rY =function(a){return a.rawY}


gMg=function(f){
    //should it try websocket first?
    qG('/gMg',
        f)

}//get YOUR mug id



wM=function(f){

    //f=f||function(m){ mg=m }//run function with YOUR mug-data-url

    gMg(function(m){

        qP( '/dud', {d:m}, f )


    })
}





wMD=function(f){

    f=f||function(m){mg=m}//run function with YOUR mug-data-url

    gMg(function(m){
        qP('/dats',
            {d:m},
            f)
    })

}




wMb=function(f,s){
    var g=G(arguments),f=g[0],s=g[1]

    wM(function(a){

        Bm(a, function(b){

            if(s){s.a(b)} // if stage passed, add bm to stage

                f(b,s) //run cb, and pass it bm and stage

        })
    })

    return s}


//with mug, after creating and putting it on a stage
wMs=function(f,w,h,bg){ var g=G(arguments)

    f=g[0]
    w=g[1]
    h=g[2]
    bg=g[3]

    s =St(

            w||1000,

            h||800,

        '+'

    )


    if(g.p){  s.drg()  }

    if(g.n){s2(s)}

    if(bg){ s.bgi(bg) }

    return wMb(f, s)

}







bm=function(i,s){

    var b=Do( B$(src(i)) )

    if(O(s)){
        s.a(b)
    }

return b}



Bm=function(a,b){


//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object
// will be constructed and assigned to the .image property.

    if(O(a)&&S(a.d)){a=a.d}

    im(a,function(i){

        var bm=B$(i),
            g=Do(bm)

        if(F(b)){b(g,bm)}

        if(S(b)){$w[b]=g}})

    return a}




 Pt=function(x,y){


     if(U(x)){

         return new C$.Point}

     if(O(x)&&O(y)){
         return new C$.Point(
        x.x+y.mx()>>1,
            x.y+y.my()>>1

     )}


     if(O(x)){

         return new C$.Point(
             x.mx(),
             x.my()
         )}

     return new C$.Point(x,y)

 }




mxy=function(o,s){

    xy(o,
        s.mx(),
        s.my()
    )

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