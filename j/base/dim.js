//dims

offset=os=function(element){

    if(C(element)){element=C(element)};

    return $(element||'body').offset()

}



offsetLeft=osl=function(el){return offset(el).left}

offsetTop=ost=function(el){return offset(el).top}


//dims
iW=function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
iH=function(a){if(O(a=a||$$w)){return Q(a).innerHeight()}}

_z=function z(a,b,c){

    return U(b)?_.size(a)
        :N(b)?_z(a)==b
        :_z(a)==_z(b)}







//log dims of something
owh=function(d){
    return d.o('$$', function(){
        d.w()+' '+ d.h()})}



osP=function(a){return O(a) && a.offsetParent}
osT=function(a){return O(a) && a.offsetTop}
osL=function(a){return O(a) && a.offsetLeft}




marb=function(){

    nCs=10
    nRs=15
    brZ=30

    grW=nCs*brZ
    grH=nRs*brZ
    cnW=grW+1
    cnH=grH+1
    store=null
    grid=null
    slBrCl=null
    curBt=null

    z();cnt(

        sc('grid-container',{w:300,mr:50,fl:'l'})(

            ci('grid'),
            fo(
                bti('clear','clear-track'),
                bti('save','save-track',{fl:'r'}),
                ip().id('track-name').ph('track name').s({fl:'r'})
            )
        ),


        sc('bricks-container',{w:100,mr:50,fl:'l'})(

            fo(bti('square','square-brick'),
                bti('triangle','triangle-brick'),
                bti('circle','circle-brick'),
                bti('curve','curve-brick' )
            )),

        sc('tracks-container',{w:300,fl:'l',m:0})(

            h1('saved tracks').s({m:0}))

    )}

//cW=function(){return document.body.clientWidth }
//cH=function(){return document.body.clientHeight }




FULLCAN=function(){z()
    $h().s({h:'100%',of:'h'})()
    $b().s({m:0, g:0,h:'100%'})()

    var s='Click or tap the screen to start the game',
        fo='bold 16px Arial',
        x=cx('x',
            W(), H())


    x.fs(x.lg().a(0,'y').a(1,'z')).fr().fs('y').fo(fo).ftc(s, 30).a()



    im('me',function(i){var i=qq(i),origW=i.w() ,ig

        i.w($M.round((50*cW())/100))
        i.h($M.round((i.w()*i.h())/ origW) )

        ig={i:i, x:x.w()/2-i.w()/2,
            y:x.h()/2-i.h()/2 }

        x.d(ig.i, ig.x, ig.y)



    })



}

