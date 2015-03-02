Array.prototype.sensor=function(kind){
    this.isSensor=kind||true
    return this}

BOBOM=function(){b2d.level(); _.times(30, function(){ w.bobom() })}

VORTEXOK=function(){

    b2d.levelJet()

    moveB=function(){  b.linVel(0,-5) }
    moveX=function(){  bx.linVel(0,-5) }

    b = w.ball(100,100,10)
    bx = w.box(50,100,14)

    w.stat(600, 200, b2d.circ(200).sensor(true)  ).K('vortex')

    //this happens every RE-ENTRY into sensor (when)
    w.when('vortex', 'player', moveX)

    //this happens repeadly until sensor exited
    w.while('vortex',  moveB)

    $l('right now ball goes up on coll with vortex.  but what about continued pressure?',
        'something with trig?', 'fixed.. (see code)')}
VORTEX=function(){

    b2d.levelJet()

    w.rectStat(200,250,200,20)
    floor.kill()


    _.times(20, function(){w.ball(100,100,10)})

    vort = w.stat(600, 200, b2d.circ(200).sensor(true)  ).K('vortex')

    w.while('vortex','player', function(){
            w.each('ball',

                function(b){ b.towards(600, 200) }
            )}





    )

    $l('game: get rid of balls.  u can leave nest, but must return to claim victory')
}
KINGOFMES=function(){z()

    //all jumping together???!

    //w= b2d.mW()


    b2d.level()

    _.times(5, function(){

        w.addMe(2.5).X(400)
            .trig('feet', function(){this.I(20, 100)})

        w.addMe(2.5).X(100)
            .trig('feet', function(){this.I(-20, 100)})

    })


}
HAT=function(){   // could i automatically have body listen to their sensors?

    b2d.level()

    w.ball().rest(.3)

    p.XY(400, 150)
        .trig('right')
        .trig('left')
        .trig('hat', function(){
            this.bindSprite('guy')
        })

    $.space(function(){
        if(p.trig.right){p.I(100,  -400)}
        if(p.trig.left){ p.I(-100, -400)}
    })
}
