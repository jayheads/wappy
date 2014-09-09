ugun=function(j){


        var bul=function(j){

        var s=j.pa('+'),
            w=s.w(),h=s.h(),

          b = cir( j.x()+75, j.y(),8,'w')


       //x,y,r,c


       j.pa('+').a(b)
        b.fn=
            s.ts(b,
                function(t){
                    b.y(t/5 ,'-')
                })


        onTick(function(){
            if(b.y()<200||b.y()>h){
                $l('miss');b.XX();
                b.fn()  }})

        return b}
    kD('s',function(){
        var b =  bul(j)
 })}



sbul=function(j){var s=j.pa('+'),
        w=s.w(),h=s.h(),
        x=j.x(),y=j.y(),
        dx=j.dx(),  dy=j.dx(),

        b=cir(x,y,8,'r')

    s.a(b)


    b.fn=s.ts(b, function(t){  $l(t)
                b.y(dy,'+')
                b.x(dx,'+') })


   // b.dy(j.dy())
   // b.dx(j.dx())

    //  b.fn= s.ts(b,function(t){b.y(t/5 ,'-')})


   // b.mv('+')

    // b.p()

    return b}
sgun=function(j){kD('s',function(){sbul(j)})}














gy=function(x,y,dx,dy,r,c){
    r=r||10
    c=c||'o'
    x=x||300
    y=y||300
    dx=dx||1;dy=dy||1

    var g=cir(100,100,r,c,'r').dx(dx).dy(dy).xy(x,y)

    g.cc(-r-10,-r-10, r*2+20, r*2+20)

    g.p=function(){


        g.f=K(function(){
            if(g.x()<0||g.y()<0||g.x()>800||g.y()>600){
            g.XX();g.s()}
            else{ g.x(g.dx(),'+').y(g.dy(),'+')}
        },200);
        return g}

    g.s=function(){ clearInterval(g.f)}

    g.r=r



    return g}






CIRCLE2=function(){format();s=St(800,600);s1(s)

    aA=[];  bL=Ct();s.a(bL)

    g=gy(300,300,1,1,40,'y'); s.a(g); g.p()


    g.wrp()

    s.o('D', function(s,e){
            g.dx((e.X-g.x())/10,'+')
            g.dy((e.Y-g.y())/10,'+')
            if(g.dx()>10){g.dx(10)}
            if(g.dy()>10){g.dy(10)}

        })
    kD('s',function(){  var bg=gy( g.x(), g.y(),g.dx(), g.dy()); bL.a(bg); bg.p() })


    newAst=function(){var a=ast(); a.a(); a.p()   }

     _t(10, newAst)



    s.t(function(){
        _e(aA,function(a,k){   a.u()


                _e(bL.ch(),  function(b){
                    l=b.gl( a.x(),a.y()); if(b.ht(l.x,l.y) ){a.XX(); $l('HIT')} })

                   l=g.gl(a.x(), a.y())


                   if(g.ht(l.x,l.y) ){   $l('hit');co()  }   })  })



}




CIRCLE=function(){format();
    s=St(800,600);s1(s)


    tt('f',30)



    s.a(bL=Ct())


    s.a(g=gy(300,300,1,1,40,'y'));g.p();g.wrp()


    aA=[];
    _t(10,newAst)

    s.o('D',
        function(s,e){
        var bg=gy(g.x(),g.y(),g.dx(),g.dy())
        bL.a(bg);bg.p()
        g.dx((e.X-g.x())/10,'+')
        g.dy((e.Y-g.y())/10,'+')
        if(g.dx()>10){g.dx(10)}
        if(g.dy()>10){g.dy(10)}})


    s.t(function(){
        var gx=g.x(),
            gy=g.y()

        _e(aA,
            function(a,k){

            var ax=a.x(), ay=a.y()

            a.u()

           _e(bL.ch(),
               function(b){
                   var bx= b.x(),by= b.y();
                   if(ax > bx-10&& ax<bx+10&&ay>by-10&&ay()<by+10){
                       co()
                       a.XX();//aA[k]=null;_.compact(aA)
                   }


               })



          if(ax>gx-40&&ax<gx+40&&ay>gy-40 && ay<gy+40){g.al(.01,'-')}




        })})}



newAst=function(){
    var a=ast();a.a();a.p()


}


pntInCir=function(x,y,c){var X,Y,R; X=c.x;Y=c.y;R=c.r
    return x<X +R &&x >X -R  &&y< Y+R  &&y >Y-R}
