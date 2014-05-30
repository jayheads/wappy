    $d=console.dir;


    //Cs=[];for(var i=0;i<10;i++){Cs.push(Coin(c))};

    //As=[];for(var i=0;i<5;i++){As.push(Alien(c))};
    Bs=[];


function shoot(){
    game=true
    g=guy=H()
    g.g.f('blue').s('yellow').dc(0,0,20)
    g.x=0
    g.y=0
    g.dx=0
    g.dy=0
    g.h=1000
    c.a(g)
    c.t()

    c.$(function(x,y){
        if(!game){dead()}
        else{
            g.dx+=(x-g.x)/100
            g.dy+=(y-g.y)/100
            Bullet(g)
        }})

        //$l('x:',x);$l('y:',y);$l('gx:',g.x);$l('gy:',g.y);//

    oT(function(){
        _e(Bs,function(b){
            b.scaleX*=1.02;b.scaleY*=1.02
        })
        g.x=wrp(0,c.w(),0)(g.x+=g.dx)
        g.y=wrp(0,c.h(),0)(g.y+=g.dy)})}
    $(shoot)

  _e(cat(Bs,Cs,As),function(a){
      a.d()
      a.u()})
    g.d()
    g.u()
    })


function dead(){alert('game over!')
    if((e.x>450)&&(e.y>290)&&(e.x<450+textWidth)&&(e.y<290+textHeight)){
            location.reload(true)}}

Bullet=function(){

    c.b('me',
        function(b){
        //b.g.s('yellow').f('black').dc(0,0,8);
         b.x=g.x
         b.y=g.y
         b.dx=g.dx*-1
         b.dy=g.dy*-1
         b.u=function(){
         b.x-=b.dx
             b.y-=b.dy}
         Bs.push(b)

        b.scaleX*=.1
        b.scaleY*=.1
        c.a(b)},1)

}


  Coin=function(C){var c=Circ(10);c.d=function(){C.O(c.x,c.y,c.r,'black','yellow')};c.u=function(){c.x=wrp(0,1200,20)(c.x+c.dx);c.y=wrp(0,600,20)(c.y+c.dy)};return c}


   Alien=function(c){
       var a=Circ(10)
       a.d=function(){
           c.O(a.x,a.y, a.r,'green','black')
           c.O(a.x,a.y,10,'orange','black')}
     a.u=function(){
         a.r*=1.001
         a.x=wrp(0,1200,20)(a.x+a.dx)
         a.y=wrp(0,600,20)(a.y+a.dy)}
       return a}



  hits=function(){
      _e(Cs,function(c,C){
          if(xyc(c.x,c.y,g)){delete Cs[C]
              g.c+=1}})
     _e(As,function(a,A){
         if (xyc(g.x,g.y,a)){g.h-=1}
         _e(Bs,function(b,B){
             if (xyc(b.x,b.y,a)){
                 delete Bs[B]
                 delete As[A]
                 As.push(new Alien)}})})}


Circ=function(r,a,b){
    return {

        x:  _.r(0, a|| 1200),
        y:  _.r(0, b|| 600),
        dx: _.r(0, 10) - 5,
        dy: _.r(0, 10) - 5,
        r:r
    }}
