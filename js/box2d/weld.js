b2d.weld=function(a,b,   ancA, ancB, ang, c,d){

     // can set 2 local anchor points and a reference angle

    var jd =  new b2d.Joints.b2WeldJointDef()
    jd.bodyA=a
    jd.bodyB=b


     if(N(ancA)){
         ancA=V(ancA,ancB)
         ancB=V(ang,c)
         ang=d
     }

     if(ancA){jd.localAnchorA = ancA.div()}

     if(ancB){jd.localAnchorB = ancB.div()}

     if(N(ang)){jd.referenceAngle = Math.toRadians(ang) }

     return jd

 }

WELDS=function(){W()


    w.weld(

            w.S(100,100,'r',30),

            w.D(100,100, 'b', 30),

        0,0)



    w.weld( w.S(200,100,'x',30), w.D(200,100,'v',30),0,10)
   w.weld( w.S(300,100,'l',30), w.D(300,100,'x',30),0,-10)

    w.weld( w.S(400,100,'g',30), w.D(400,100,'x',30),10,10)



/*
    w.J(weld(w.S(500,100,'x',30), w.D(500,100,'v',30),10,-10))
    w.J(weld(w.S(600,100,'x',30), w.D(600,100,'v',30),10,-20))
    w.J(weld(w.S(700,100,'x',30), w.D(700,100,'v',30),10,-30))
    w.J(weld(w.S(800,100,'x',30), w.D(800,100,'v',30),-10,-40))
    w.J(weld(w.S(900,100,'x',30), w.D(900,100,'v',30),-10,-50))

    w.J(weld(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)) //
    w.J(weld(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10))
    w.J(weld(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10))
    w.J(weld(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10))
    w.J(weld(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10))
    w.J(weld(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20))
    w.J(weld(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30))
    w.J(weld(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40))
    w.J(weld(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50))

    w.J(weld(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0))

     w.weld( w.D(200,500,'x',30), w.S(200,500,'v',30) ) //


    w.weld(
        w.D(300,500, 'o', 30),
        w.D(300,500,'g', 50,50),

        V(0,-10)
    )

    w.weld(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
    w.weld(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
   w.weld(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
   w.weld(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
  w.weld(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
   w.weld(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
*/
}
REWELDING=function(){W().C('p')

     j = w.weld(
         w.B(100,200,'x', 100,200).rest(1),
         w.B(200,100, 'u', 200,100).rest(1)
     )

     I(2, function(){
         if(j.destroyed){  j = j.form() }
         else { j.destroy() }
     })

 }

GLUEBALLS=function(){w=W(0).Y(500)


     w.glueBall = function(x,y){var w=this

         var bl = w.B(x,y,'z',20).K('bl')

         w.beg(function(cx){
             cx.with('bl', function(othF){var bl=this.B()
                 if(!bl.GetJointList()){
                     bl.glue( othF.B() )
                 }
             })})

         return bl}


     bl = w.glueBall(400, 500)

     w.glueBall(300, 500)
     w.glueBall(400, 300)
     w.glueBall(300, 100)
     w.glueBall(400, 200)
     w.glueBall(100, 300)
     w.glueBall(300, 300)


 }
LUMPS=function(){W(0).Y()

     y.coll(w.left, function(){var yx= y.X(),yy= y.Y()

             T(function(){w.S(yx, yy, 'b', 10)})


         })



 }

