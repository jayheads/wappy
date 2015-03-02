TALKJS=function(){  $('body').empty()

    score=0; shots=0

    world = b2.makeWorld({
        grav:0,
        walls:0,
      debug:false
    })

   p= w.addMe().K('player').stat().XY(500,300)



    _.times(500, function(){ w.addCirc() })



    $.space(function(){//can double on on shots!!!
        setInterval(function(){p.shoot(); shots++ }, 200)})  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)


    w.begin(function(cx){
        if(cx.with('ball','bullet')){
            score++;
            cx.destroy()}})

    cjs.tick(function(){
        p.XY(500,300)
        if(cjs.Keys.left){p.rot(p.rot()-8)}
        if(cjs.Keys.right){p.rot( p.rot()+8)}
        if(cjs.Keys.up){
            w.each(function(body){
                if(body.not('bullet', 'player')){
                    body.I(p.worldVec(0,-100).div(-50))}})}})

    w.startKilling()
}




