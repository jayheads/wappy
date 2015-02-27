TALKJS=function(){  $('body').empty()

    score=0; shots=0

    world = b2.makeWorld({
        grav:0,
        walls:0,
      debug:false
    })

    player = world.addMe().K('player').stat().XY(500,300)

    _.times(500, function(){ world.addCirc() })

    $.kD('space', function(){
        setInterval(function(){
            player.shoot(); shots++ }, 200)
        setTimeout(function(){

            //$.pop(score).click(function(){window.location=window.location})

        }, 10000)})

    //cjs.watchKeys()
    cjs.tick(function(){player.XY(500,300)

        if(cjs.Keys.left){player.rot(player.rot()-8)}
        if(cjs.Keys.right){player.rot( player.rot()+ 8 )}


        world.eachBody(function(body){
            if(body.K()!='player' &&  body.K()!='bullet')
                if(cjs.Keys.up){
                    var vec= player.GetWorldVector(b2.V(0, -100))
                    body.impulse(-vec.x/50, -vec.y/50 )}})})

    world.contactBegin(function(cx){
        if(cx.isBetween('ball','bullet')){
            score++; cx.a().setDestroy();
            cx.b().setDestroy()
        }}).startKilling()
}




