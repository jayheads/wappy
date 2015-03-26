 b2d.weld=function(a,b, ancA, ancB, ang, c,d){

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
BWELD=function(){w=b2d.W()


j = w.weld(

    w.box(100,200, 100,200).rest(1),
    w.box(200,100, 200,100).rest(1)

)


    setInterval(function(){
        if(j.destroyed){
            j = j.form()
        }
     else { j.destroy() }
    },2000)

}





WELD = function(){w=b2d.W({
   // w:0,
    g:0 })

   //  j= w.weld(    w.ball(200,200,40).den(1),    w.box(200,220,40, 100).den(1)   )



    w.ball(100, 100, 20)
    w.ball(200, 100, 20)
    w.ball(300, 100, 20)
    w.ball(400, 100, 20)

//    w.ball(500, 100, 20).den(1).warp2()

    w.beg(function(cx){
      //  w.weld(cx.a(), cx.b(), V(50,50) ,V(-50,-50))
    })
    //connect the centers - center in local coordinate - relative to body is 0,0
   // joint_def.localAnchorA = V(-0.5, -0.5);
    //joint_def.localAnchorB = V(0.5, 0.5);

    //difference in angle of each body
  //  joint_def.referenceAngle = 0 * Math.PI/3

    //add the joint to the world
  //  w.CreateJoint(joint_def)

}



WELD3 = function(){w=b2d.W()


    b= w.bump(500,400,40).den(1)
    b2= w.ball(500,400,40).den(1)

jd=b2d.weld(b,b2)

    jd.localAnchorA = V(.3,.3)
   jd.localAnchorB = V(0,0)
   jd.referenceAngle = Math.toRadians(0)

   j= w.J(jd)
}



b2d.weldJoint =   Welding = weld=function(a,b,c,d,e,f,g){
    c=c||0;d=d||0; e=e||0; f=f||0

    return WeldJoint(a, b, V(c/30,d/30), V(e/30, f/30), g||10)

}




WELD1=function(){w=b2d.W()
/*
    w.J(

        b2d.weld(

            w.bumper(100,100),

            w.ball(100,100),0,0
        )
    )

    w.J(b2d.weld( w.circStat(200,100), w.ball(200,100),0,10))
    w.J(b2d.weld( w.bumper(300,100), w.ball(300,100),0,-10))

    w.J(
        b2d.weld( w.bumper(400,100), w.ball(400,100),10,10)
    )



    w.J(weld(w.baa(500,100), w.ba(500,100),10,-10))
    w.J(weld(w.baa(600,100), w.ba(600,100),10,-20))
    w.J(weld(w.baa(700,100), w.ba(700,100),10,-30))
    w.J(weld(w.baa(800,100), w.ba(800,100),-10,-40))
    w.J(weld(w.baa(900,100), w.ba(900,100),-10,-50))

    w.J(weld(w.baa(100,200,10), w.bi(100,200),0,0)) //
    w.J(weld(w.baa(200,200), w.bi(200,200),0,10))
    w.J(weld(w.baa(300,200), w.bi(300,200),0,-10))
    w.J(weld(w.baa(400,200), w.bi(400,200),10,10))
    w.J(weld(w.baa(500,200), w.bi(500,200),10,-10))
    w.J(weld(w.baa(600,200), w.bi(600,200),10,-20))
    w.J(weld(w.baa(700,200), w.bi(700,200),10,-30))
    w.J(weld(w.baa(800,200), w.bi(800,200),-10,-40))
    w.J(weld(w.baa(900,200), w.bi(900,200),-10,-50))

    w.J(weld(w.ba(100,500), w.bi(100,500),0,0))
*/
     w.weld( w.ba(200,500,10), w.bi(200,500) ) //


    w.weld(w.ba(300,500), w.bi(300,500),V(0,-10))
   w.weld(w.ba(400,500), w.bi(400,500), V(10,10))
    w.weld(w.ba(500,500), w.bi(500,500),V(10,-10))
   w.weld(w.ba(600,500), w.bi(600,500),10,-20)
   w.weld(w.ba(700,500), w.bi(700,500),10,-30)
  w.weld(w.ba(800,500), w.bi(800,500),-10,-40)
   w.weld(w.ba(900,500), w.bi(900,500),-10,-50)

}


 GLUE=function(){w=b2d.W({g:0})


     /*

      b= w.B(300,200, 40,140,20,0,20).stat()

      b2= w.B(400,400, 140,40).stat()

      b.glue(b2)

      setTimeout(function(){    b.dyn();  b2.dyn()  },1000)

      */

     w.glueBall = function(x,y){var w=this
         var bl = w.B(x,y,20).K('bl')
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

     y = w.ship()

 }
 GLUE2=function(){w=b2d.W({g:0})


     /*

      b= w.B(300,200, 40,140,20,0,20).stat()

      b2= w.B(400,400, 140,40).stat()

      b.glue(b2)

      setTimeout(function(){    b.dyn();  b2.dyn()  },1000)

      */



     y = w.ship()

     w.beg(function(cx){

         cx.with('ship','wall', function(){

             w.B(y.X(), y.Y(), 30).stat()

         })

     })

 }

