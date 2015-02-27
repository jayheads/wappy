Array.prototype.sensor=function(kind){
    this.isSensor=kind||true
    return this}

PLAYERFOOT=function(){z()

    //all jumping together???!

    w= b2d.mW()


    _.times(5, function(){

        w.addMe().X(400)
            .trig('feet', function(){
                this.I(20, -100)})
        w.addMe().X(100)
            .trig('feet', function(){
                this.I(-20, -100)})

    })


}
BOBOM=function(){

    //a bomb!!
    b2d.bobom=function(){
        var bobom = w.A( b2d.dynamic(), [ [60], ['bobomWick',90,15,30,0].sensor() ])
            .listener('bobomWick', function(){this.destroy()})
        return bobom}




    z()
    w= b2d.mW()
    _.times(12, b2d.bobom)}
HAT=function(){z()  // could i automatically have body listen to their sensors?

    w= b2d.mW()

    w.ball()

    p = w.addMe(7).X(400)
        .trig('right').trig('left')
        .trig('hat', function(){this.bindSprite('guy')})

    $.space(function(){
        if(p.trig.right){p.I(100,  -400)}
        if(p.trig.left){ p.I(-100, -400)}
    })
}




