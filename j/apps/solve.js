
//brilliant demo
MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    s=St(1600,1000).a()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    s.o('e',co)




    //make a container
    s.ct(function(c,s){



        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

        c.b('me',
            function(b){
                b.sxy(.2).xy(100,80)
                b.o('$',fL('lit'),'/')  //on click, log('lit'), just once (remove listener)!

        })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        c.b('me',function(b){
            b.sxy(.4).xy(100,180)

            b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop

        })






        c.b('me',function(b){
            b.sxy(1.5)
            b.o('$',fL('big'))  //on click, log('big')

 })

        //on click, log('con')
        c.o('$',  fL('con'))

    })



    s.ct(

        function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.x(200)


            c.mg(
                function(b){
                    b.sxy(.8).xy(200,80)
                })


            c.mg(
                function(b){
                    b.sxy(.8).xy(100,280)
                })


            c.mg(
                function(b){
                    b.sxy(.8).xy(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

        c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
        c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
        c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
        c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

        }

    ).MV(40)





    s.ct(function(c,s){

        c.x(700)
        c.mg(function(b){b.sxy(.8).xy(200,80)})
        c.mg(function(b){b.sxy(.8).xy(100,280)})
        c.mg(function(b){b.sxy(.8).xy(340,180)})

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)



        c.o('v',function(g,e){
            $l('v')
            g.sxy(.01,'+')})

        c.o('rv',function(g,e){
            $l('rv')
            g.sxy(.01,'+')})

        c.o('o',function(q,e,g){ })
        c.o('ro',function(q,e,g){ })


        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40)




    s.ct(function(c,s){

        c.x(1400)

        c.b('me',function(b){


            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit=b.sxy(.2).xy(100,80)
            SL(b,c)





            c.b('me',function(b){
//big me will scale the little me
                big=b.sxy(2).xy(100,180)
                SC(b,lit)

                c.b('me',function(b){ b.sxy(.6).xy(150,180)
                    SL(b)
                    RT(b,big) })
            })

        })


//guy slides stage
        c.b('guy',function(b){
            b.sxy(.4).xy(100,180)
            SL(b,s)
        })



    })




}





//SPACE BOWLING
BOWL=function(){




    s=St(1000).a()

    //append a container to the stage
    c=Ct().ap(s)

    plX=s.w()/2
    plY=150
    plR=100

    plr=75 // this seems to determine the radius of the 'cluster' of balls
    oRng=8 //outer ring

    nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    cr=cir(plX,plY,plR,'y').ap(c) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp=plr/(nRng-1)


    aA=[]

   var ast=function(x,y,r,m,f){

        var a={

            x:x, y:y, r:r,  m:m,  f:f,

            vX:0, vY:0, player:false}

        return a}


    _t(nRng, function(r){

        var crR=0,
            ang=0,
            rngR=0

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

            aA.push( ast(x,y,10,5,0.95) )



            cir(x,y,10,'z').ap(c)


        })

    })}





CONNECT=function(){
    m$$('location=location')
    z()
    n=0
    s=St(1000).a()
   p=cir(240,240,300,'u','x').ap(s).xy(520,500).rxy(100) //g.$(function(){g.sxy(1.5)}); g.$$(function(){g.sxy(.5)})


    c=Ct().ap(s)

    s.D(function(g,e){if(!e.u(s)){$l(n++)}})


    g=cir(140,140,200,'g','x').ap(c).xy(320,300).rxy(100) //g.$(function(){g.sxy(1.5)}); g.$$(function(){g.sxy(.5)})
    y=cir(100,100,100,'y','x').ap(c).xy(250)

    r=cir(110,110,40,'r','x').ap(c)

    o=cir(220,120,20,'o','x').ap(c)

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




TANGLE=function(){
    z()

    a=dva(50,50,50)
    b=dva(100,100,100,100)
    c=dva(200,200,200,200)
    d=dva(400,400,400,400)

    y=function(aa,bb,cc,dd){if(bb){bb.a(aa,'+')}
        if(dd){dd.a(cc,'+')}}
}



BORDERS=function(){

   change=function(){

           qim('me').a().bc('g').bs('-')

           .j({bt:40},1000).j({bb:40},1000).j({bl:40},1000)
           .j({br:40},1000).j({gt:40},1000).j({gb:40},1000)
           .j({gl:40},1000).j({gr:40},1000).j({mt:40},1000)
           .j({mb:40},1000).j({ml:40},1000).j({mr:40},1000)
           .j({mt:0},1000).j({mb:0},1000).j({ml:0},1000).j({mr:0},1000)
           .j({gt:0},1000).j({gb:0},1000).j({gl:0},1000).j({gr:0},1000)
           .j({bt:0},1000).j({bb:0},1000).j({bl:0},1000).j({br:0},1000)
   }


    m$$(
        function(){
        z();_.times(10,change)}
    )

    _.times(10, change)
}








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













