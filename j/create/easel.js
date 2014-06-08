C$=createjs;
T$=C$.Ticker


//easel
SS$=function(a){return new C$.SpriteSheet(a)}
S$=function(a){return new C$.Stage(a)}
rX=function(a){return a.rawX}
rY=function(a){return a.rawY}
Q$=function(){return new C$.LoadQueue(true)}

W$=C$.Tween


iDo=function(a){return O(a) && O(a.parent)}
bj=function(a){if(O(a)){return O(a.ob)?a.ob:a}}//return a??

gMg=function(f){
    qG('/gMg',f)}//get YOUR mug id


wM=function(f){
    f=f||function(m){mg=m}//run function with YOUR mug-data-url
    gMg(function(m){
        qP('/dud',{d:m},f)})}



wMD=function(f){
    f=f||function(m){mg=m}//run function with YOUR mug-data-url
    gMg(function(m){
        qP('/dats',{d:m},f)})
}




Ct$=function(a){
    return new C$.Container(a)}

cX=function(a,b){
    if(U(b)){
        return a.scaleX}
    a.scaleX=b
    return a}

cY=function(a,b){
    if(U(b)){
        return a.scaleY}
    a.scaleY=b
    return a}


cXY=function(a,x,y){
    y=N(y)?y:x
    cX(a,x)
    cY(a,y)
    return a}


D$=function(){return C$.DOMElement}
G$=function(a){return new C$.Graphics(a)}
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
J$=function(a){if(a.images){a=SS$(a)}
    return new C$.Sprite(a)}

H$=function(a){return new C$.Shape(a)}

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

wMb=function(f,s){var g=G(arguments),f=g[0],s=g[1]
    wM(function(a){Bm(a, function(b){if(s){s.a(b)}
                f(b,s)})});
    return s}


wMs=function(f,w,h,bg){
    var g=G(arguments);f=g[0];w=g[1];h=g[2];bg=g[3]
    s=St(w||1000,h||800,'+')

    if(g.p){s.drg()}
    if(g.n){s2(s)}
    if(bg){s.bgi(bg)}
    return wMb(f,s)}


B$=function(a){return new C$.Bitmap(a)}


bm=function(i,s){
   var b=Do(B$(src(i)))

    if(O(s)){s.a(b)}

return b}





Bm=function(a,b){


//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object
// will be constructed and assigned to the .image property.

    if(O(a)&&S(a.d)){a=a.d}

    im(a,function(i){
        var bm=B$(i),g=Do(bm)
        if(F(b)){b(g,bm)}
        if(S(b)){$w[b]=g}})
    return a}


 Pt=function(x,y){
    if(U(x)){return new C$.Point}
    if(O(x)&&O(y)){ return new C$.Point(
        x.x+y.mx()>>1,x.y+y.my()>>1)}
    if(O(x)){return new C$.Point(x.mx(),x.my())}
    return new C$.Point(x,y)}


 mxy=function(o,s){xy(o,s.mx(),s.my());return o}






