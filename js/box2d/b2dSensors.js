Array.prototype.sensor=function(kind){
    this.isSensor=kind||true
    return this}


SENSOR=function(){w=b2d.W().chalk(
    'box goes up on coll with vortex, and right AFTER',
    'ball goes up with continued pressure')

    y=w.ship()


    b = w.ball(100,100,40)
    x = w.box(50,100,60,60)

    w.stat(1000, 200, b2d.circ(500).sensor(true)  ).K('vortex')

    moveX = function(){ x.vY(-20) }
    moveB = function(){ b.vY(-20) }



   // w.when('vortex', 'ship', moveX)      //this happens every RE-ENTRY into sensor (when)
    y.when('vortex', moveX, function(){ x.vX(20)  })      //this happens every RE-ENTRY into sensor (when)

   // w.while('vortex', 'ship', moveB)       //this happens repeadly until sensor exited
    y.while('vortex',  moveB)

}









VORTEX=function(){w=b2d.W()
    y = w.ship()
    w.rectStat(200,250,400,20)
    w.rectStat(400,250,20,40)
    _.times(20, function(){w.ball(100,100,10)})

    vort = w.stat(600, 200, b2d.circ(200).sensor(true)  ).K('vortex')
    func=function(){  w.each('ball', function(b){ b.towards(600, 200) } )}

    //w.while('vortex', 'ship', func)
    y.while('vortex', func)

}






KINGOFMES=function(){  w= b2d.W({g:10}).debug()

    //all jumping together???!



    w.roof.kill()
    w.left.kill()
    w.right.kill()
    w.s.sXY(.8).X(100)
    _.times(15, function(){

        w.addMe(900,100, 5).trig('feet', function(){var p=this

            p.B().rot(0).lV(-2,-10)  }
        ).angDamp(50)//.fixRot()

       w.addMe(300, 100, 5).trig('feet', function(){
           this.B().rot(0).lV(2,-10) }).angDamp(50)//.fixRot()

    })



    w.C('r')


}






HAT=function(){   // could i automatically have body listen to their sensors?

    w=b2d.W()
    w.ball().rest(.3)
    p=w.addMe(400, 150, 5)

    p.trig( 'right' )
    p.trig( 'left' )

    $.space(function(){
        if(p.trig.right){ p.I(100, -400)}
        if(p.trig.left){  p.I(-100, -400)}
    })

    p.trig('hat',
        function(){
            p.bindSprite('guy')
        })
}






