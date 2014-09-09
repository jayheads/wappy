
$M=Math
sin=$M.sin
ceil=$M.ceil
flr=$M.floor
pow=$M.pow
max=_M=_.max




pI=parseInt



//logic
ff=function f(a){return new $F(
    "a","b","c","d","e","var g=G(arguments),"+
        "t=this;"+a+";return t")}
ffr=function f(a){return new $F(
    "a","b","c","d","e","var g=G(arguments);return("+a+")")}

$do=function(b,f){if(F(f)){f(b)};if(S(f)){$w[f]=b};return b}

xy=function(a,x,y){
    if(U(x)){if(F(x)&&F(y)){
        return {x:a.x(),y: a.y()}}
        return {x:a.x,y:a.y}}
    if(O(x)){return xy(a,x.x,x.y) }
    y=N(y)?y:x
    if(F(x)&&F(y)){a.x(x);a.y(y)}
    else{a.x=x;a.y=y}
    return a}


XY=function(a,x,y){var g=G(arguments)
    if(g.p){a.x+=x
        a.y+=N(y)?y:x}

    return a}


xyx=function xy(o,x,y){
    if(O(x)){return xy(o,x.x,x.y)};
    o.x=x;o.y=y;
    return o}




//logic
rat=function r(f,i){

    var sampleFunc=_v('_b().c()')

    f=f||sampleFunc

    var z=function z(){

        var g=G(arguments)

        if(z.z){

            if(g.P){

                clearInterval(z.z)

                z.z=0
            }

        }

        else {

            if(g.N){

                z.z = I(f, z.i)
            }

        }


    }


    z.i=i||1000
    z.z=I(f,z.i)

    return z}










//recursive map function
//pass a function and array.  it maps the array,
// but if it finds another array, it recursively maps it

rc=function self(f,a){


    if(_.isUndefined(a)){return _.partial(self, f)}

    else return _.map(a, function(a){

        if(A(a)){return self(f,a)}

        else return f(a)

    })

}


































$r=function(a,b){a=a||'c';return Oo(a,b)
    ||V(oO(a))[_r(_z(V(a))-1)]}
//random
rnd=function(a){return $M.random(a)}


r1=rnd1=function(){return rnd()+0.1}
r10=function(){return rnd()*10}

b0=false
b1=true
oo1=0.001
yn=function(){return rnd()>0.5}
rou=$M.round

//math
tFx=function(a,b){return a.toFixed(b||3)}
unit=function(v){return {x:v.x/v.l(),y:v.y/v.l()}}

//math
ng=function(n){return n*(-1)}
adj=function(a){
    if(O(a)){adj(a.x);adj(a.y);return a}
    return a<=10?a*=100:a}

cos=$M.cos; sin=$M.sin; PI=$M.PI

  GRAV=9.81

//returns abs value of num
//returns abs value of diff of two nums

abs=function(a,b){


    return N(b)?abs(a-b):$M.abs(a)

}

//returns sum of squares
sq=function f(a){
    var g=G(arguments),  n=0

    _e(g, function(a){n += (a*a)})

    return n}


//returns sqroot of one num
//return sqroot of sum of squares
sqr=function(a,b){var g=G(arguments);return $M.sqrt(U(b)?a: _a(sq,g))}






HSL=function(a,b,c){
    if(U(a)){return HSL(rnd()*360,100,50)}
    return C$.Graphics.getHSL(a,b,c)}





$V=function v(a,b,c,d){//returns coords needed for centering

    var g=G(arguments),o,a=g[0]

    if(N(d)){
        return v((a-c)/2, (b-d)/2)  }

    if(A(a)){return _a(v,a)}

    if(O(a)){return v(F(a.x)? a.x():a.x,F(a.y)? a.y(): a.y)}

    a=a||0
    b=b||a||0
    o={x:a,y:b}

    return o}






pi=function(a){return(a<0?-1/a:a)*PI}

tRad=function(d){return d*pi(1/180)}
tDeg=function(r){return r*(180/pi(1))}
inv=function(v){return $V((-v.x),(-v.y))}
add=function(a,b){return $V(a.x+ b.x,a.y+ b.y)}
subtract=function(a,b){return $V(a.x-b.x,a.y-b.y)}


ave=function ave(a){var g=G(arguments),
    z=_z(g),  n=0;

    if(A(a)){return _a(ave,a)}

    _e(g,function(a){n+=a})

    return n/z}



xyz=function(a,b){
    a=a||{};a.x= a.x||0; a.y= a.y||0;a.z= a.z||0
    b=b||{}; b.x= b.x||0; b.y= b.y||0; b.z= a.z||0


    return sqr(   a.x-b.x,  a.y-b.y,  a.z-b.z  )}




dst =function dst(a,b){

    if(A(a) && U(b)){  return dst(a[0], a[1]) }


    if(U(b)){return  xyz( $V({}), $V(a)   )  }


    return xyz( $V(a), $V(b)   )


}









rad=function(d){var r

    if(O(d)){d= d.rt()}
    r=  d * (3.14/180)
    return r }



frict=function(v,force){
    v=v*force
    return v
}







rectHit=function(x1,y1,w1,h1,x2,y2,w2,h2){






}




circHit=function(c1,c2){
    var sum,dist,rads

    sum= sqr( c1.x()-c2.x()  ) +   sqr( c1.y()-c2.y()  )

    dist=sqrt(sum)

    rads=c1.r+c2.r

    return rads < dist

}



asin=Math.asin
acos=Math.acos
atan=Math.atan







