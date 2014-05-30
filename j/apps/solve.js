BOWL=function(){
    //SPACE BOWLING

    c=Ct().ap(s=St(1000).a())

    plX=s.w()/2
    plY=150
    plR=100
    plr=75

    cr=cir(plX,plY,plR,'y').ap(c) // cr = Hx().c(plR,'y').xy(plX,plY)

    oRng=8
    nRng=3
    rngSp=plr/(nRng-1)


    aA=[]

   var ast=function(x,y,r,m,f){

        var a={

            x:x,
            y:y,
            r:r,
            m:m,
            f:f,
            vX:0,
            vY:0,
            player:false}

        return a}


    _t(nRng, function(r){ $l(r)

        var crR=0,ang=0,rngR=0

        if(r==nRng-1){crR=1}

        else{
            crR=oRng-(r*3)
            ang=360/crR
            rngR=plr-(rngSp*r)}

        _t(crR,function(a){var x=0,y=0

            if(r==nRng-1){x=plX;y=plY}

            else{

                x=plX+(rngR*cos((ang*a)*PI/180))
                y=plX+(rngR*sin((ang*a)*PI/180))-350

            }

            aA.push(
                ast(x,y,10,5,0.95)
            )

            // $l(r+' '+x + ' ' + y )

            cir(x,y,10,'z').ap(c)//


        })

    })}
CONNECT=function(){n=0
    c=Ct().ap(s=St(1000).a())
    s.D(function(g,e){if(!e.u(s)){$l(n++)}})
    g=cir(140,140,200,'g','x').ap(c).xy(320,300).rxy(100)
    g.$(function(){g.sxy(1.5)})
    g.$$(function(){g.sxy(.5)})
    y=cir(100,100,100,'y','x').ap(s).xy(250)
    r=cir(110,110,40,'r','x').ap(c)
    o=cir(120,120,20,'o','x').ap(c)
    LS(y,c)
    SL(g)
    SL(y)
    SL(r,c)
    SL(o,r)}
GRID=function(){
    dSq=function(s,x,y){
        var r=Hx().ss(5).r(5,5,70,70,$r())
        if(x){r.x(x)}
        if(y){r.y(y)}
        return ap(r,s)}

    c=Ct().ap(s=St(1000).a()).fn(SL)



    rows=5;cols=6;sqP=12;sqS=80

    _t(rows*cols,function(i){
        var sq=dSq(c)
        sq.xy((sqS+sqP)*(i%cols),(sqS+sqP)*$M.floor(i/cols))})}
MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
    s=St(1600,1000).a()
    s.o('e',function(){co()})
    s.ct(function(c,s){
        c.b('me',function(b){b.sxy(.2).xy(100,80);b.o('$',fL('lit'),'/')})
        c.b('me',function(b){b.sxy(.4).xy(100,180);b.o('$',fL('mid'),'-')})
        c.b('me',function(b){b.sxy(1.5);b.o('$',fL('big'))})
        c.o('$',fL('con'))})
    s.ct(function(c,s){var vn= 0,rvn= 0,on= 0,ron=0
        c.x(200)
        c.mg(function(b){b.sxy(.8).xy(200,80)})
        c.mg(function(b){b.sxy(.8).xy(100,280)})
        c.mg(function(b){b.sxy(.8).xy(340,180)})
        c.o('v',function(){c.x(10,'+');$l('vn: '+vn++)})
        c.o('rv',function(){c.x(20,'-');$l('rvn: '+rvn++)})
        c.o('o',function(){c.y(10,'+');$l('on: '+on++)})
        c.o('ro',function(){c.y(20,'-');$l('ron: '+ron++)})}).MV(40)
    s.ct(function(c,s){

        c.x(700)
        c.mg(function(b){b.sxy(.8).xy(200,80)})
        c.mg(function(b){b.sxy(.8).xy(100,280)})
        c.mg(function(b){b.sxy(.8).xy(340,180)})

        c.o('v',function(g,e){g.sxy(.01,'+')})
        c.o('rv',function(g,e){g.sxy(.01,'+')})



        c.o('o',function(q,e,g){ })
        c.o('ro',function(q,e,g){ }) }).MV(40)
    s.ct(function(c,s){
        c.x(1400)

        c.b('me',function(b){
            lit=b;

            b.sxy(.2).xy(100,80)

            SL(b,c)


            c.b('me',function(b){big=b;
                b.sxy(2).xy(100,180)

                SC(b,lit)

                c.b('me',function(b){ b.sxy(.6).xy(150,180)
                    SL(b)
                    RT(b,big) }) }) })


        c.b('me',function(b){b.sxy(.4).xy(100,180)
            SL(b,s) })







        c.o('$',function(){})})}
TANGLE=function(){z()
    a=dva(.5,.5,.5)
    b=dva(1,1,1,1)
    c=dva(2,2,2,2)
    d=dva(4,4,4,4)
    y=function(aa,bb,cc,dd){if(bb){bb.a(aa,'+')}
        if(dd){dd.a(cc,'+')}}}
BORDERS=function(){
   change=function(){qq(qim('me').a().bc('g').bs('-'))
           .j({bt:40},100).j({bb:40},100).j({bl:40},100)
           .j({br:40},100).j({gt:40},100).j({gb:40},100)
           .j({gl:40},100).j({gr:40},100).j({mt:40},100)
           .j({mb:40},100).j({ml:40},100).j({mr:40},100)
           .j({mt:0},100).j({mb:0},100).j({ml:0},100).j({mr:0},100)
           .j({gt:0},100).j({gb:0},100).j({gl:0},100).j({gr:0},100)
           .j({bt:0},100).j({bb:0},100).j({bl:0},100).j({br:0},100)}
    m$$(function(){z();_t(10,change)})
    _t(10,change)}
CORNERS=function(){

    q=dva(2,2,2,2 )

    q(dv('r',20,20).p('a').t(-10).l(-10),
        dv('y',20,20).p('a').bo(-10).r(-10),
        dv('g',20,20).p('a').t(-10).r(-10),
        dv('b',20,20).p('a').bo(-10).l(-10))

    i=_d().a().p('f').c('u','w')
        .f(20).s({a:.2,ta:'c'}).w('100%').t(100)

    i.H(W()+' * '+H())

    Z(function(){i.H(W()+' * '+H())})

    $h().o(function(){
        rat(function(){co()},10)})


    grow=function(d){
        d=qq(d)

        w= d.w()
        h= d.h()

        d.o('d',function(q,e){  $l('d')
            se=e
            mx=e.x
            my=e.y




            MM(function(qq,e){
                d.w(w+ e.x-mx)
                d.h(h+ e.y-my)
            })

            MU(function(h){  h.q.off() })

            qq(d.ch()).e('d',  function(q,e){    e.sp()  })

        })

    }
    grow(q)
}













