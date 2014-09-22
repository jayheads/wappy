//UNIVERSAL FUNCTIONS
twX=function(a){if(U(a)){return W$.removeAllTweens()};
    W$.removeTweens(bj(a))}
hAT=function(a){return W$.hasActiveTweens(bj(a))}
avT=function(a,b){return W$.tick(a,b)}
////


ww=function(o){var w={}
    if(N(o.x)){w.x=o.x}
    if(N(o.y)){w.y=o.y}
    if(N(o.xy)){w.x=w.y=o.xy}
    if(N(o.sx)){w.scaleX=o.sx}
    if(N(o.sy)){w.scaleY=o.sy}
    if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
    if(N(o.s)){w.scaleX=w.scaleY=o.s}
    if(N(o.kx)){w.skewX=o.kx}
    if(N(o.ky)){w.skewY=o.ky}
    if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
    if(N(o.k)){w.skewX=w.skewY=o.k}
    if(N(o.r)){w.rotation=o.r}
    if(N(o.a)){w.alpha=o.a}
    if(N(o.rx)){w.regX=o.rx}
    if(N(o.ry)){w.regY=o.ry}
    if(N(o.rxy)){w.regX=w.regY=o.rxy}
    if(N(o.gy)){w.regY=o.ry}
    if(N(o.gxy)){w.regX=w.regY=o.rxy}
    if(N(o.g)){w.regX=w.regY=o.g}
    if(o.v==0){w.visible=false}
    if(o.v==1){w.visible=true}
    return w}




Ea = function(e){ return createjs.Ease[ oO( 'E', e ) ] }

tweenGet = twg=function(a){
    //this returns tween-get on a display obj
    //you can optionally pass an array (ob, op1, op2..)
    return A(a) ? W$.get( bj(a[0] ),

        tweenPops.apply( this, _.rest(a) )

    )

        :createjs.Tween.get( bj(a) )}
tweenPops = twp = function(){

    var g=G(arguments),

        o={}

    _.each(g, function(p){

        if( p=='l' ){ o.loop = true }

        if( p=='t' ){ o.useTicks = true }

        if( p=='i' ){ o.ignoreGlobalPause = true }

        if( p=='o' ){ o.override = true }

        if( p=='p' ){ o.paused = true }

        if( N(p) ){ o.position = p }

        if( F(p) ){ o.onChange = p }

    })

    return o}




EaselTween=tw=function(a, b){  var displayObject = a

    if( U(b) ){ return tweenGet( displayObject ) }

    //first arg passed to twg, and then rest of args are 'to' pams

    var  g = G(arguments)

    displayObject = tweenGet ( g[0] )

    _.each(g.r, function(b){

        //can pass obj, time ,ease
        if( A(b) ){

            if( b[2] ){

                displayObject = displayObject.to( ww(b[0]), b[1], Ea(b[2])  )

            }

            //can pass obj, time
            else if(b[1]){

                //can set pops to another obj??
                if(O(b[1])){
                    displayObject = displayObject.set( ww(b[0]), bj(b[1]) )}

                else{ displayObject=displayObject.to( ww(b[0]), b[1]) }
            }


            else{ displayObject = displayObject.tick(a[0]) }

        }

//can pass a function and it will run when it's its turn
        else if( F(b)  ){ displayObject = displayObject.call(b, []) }


        //make it wait, optionally pass in true! ?

        else if(   N( b )){

            if(b<0){
                // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                displayObject=displayObject.wait(b * -1, true) }

            else{displayObject= displayObject.wait(b) }
        }



        //for playing/stopping?
        else if( O(b) && b.length == 1 ){

            if( b.p ){ displayObject = displayObject.play( b.p )}

            else if( b.s ){   displayObject = displayObject.stop( b.s )}}

        else { displayObject = displayObject.to( ww(b) )  }

    })

    return Tw( displayObject )

}



Tw =function(tween){

    var g=G(arguments),  w=tween

    //w.target


    //use when returned
   // w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
   // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}


    //use in queue
    w.then=function(tweens, a, b){ return this.to( ww(tweens),a,b ) }

    w.pos = w.ps=function(a,b){


            //get or set position of tween (in time in ms)// see w.dr


        if( U(a) ){return w.position}

        if(b=='n'){b=createjs.Tween.NONE}//0

        if(b=='l'){b=createjs.Tween.LOOP}//1 default

        if(b=='r'){b=createjs.Tween.REVERSE}//2

        w.setPosition( a, acm(b) )



        //default is loop, can use r|n
        return w}


    //total time duration
    w.dur =w.dr= function(a){
        //get time of tween in ms
        //duration:read only
        if(U(a)){return w.duration}}


    w.tk=function(a){w.tick(a); return w }


    w.ignore = w.iGP=function(a){
        if(U(a)){return w.ignoreGlobalPause}
        w.ignoreGlobalPause=a;return w}

    w.setLoop = w.lp=function(a){
        if(U(a)){return w.loop}
        w.loop=a;  return w}

    //w.psv=function(){ return w.passive}
    //Read-only. Indicates the tween's current position is within a passive wait.

    w.Plugin =function(a,b){

        var g=G(arguments),a=g[0],b=g[1]

        if(U(a)){ return g.p? w.pluginData.data: w.pluginData}

        if(U(b)){ w.pluginData=a;return w}
        w.pluginData[a]=b
        return w }

    return w}





TWEENPOS1=function(){z()

   s = SuperStage(500).A()

    s.bm('me',function(bm){b=bm

        s.bm('guy',function(guy){g=guy

            guy.xy(200)

            w0 = EaselTween(guy,   [{r:3000}, 100000]  )

            w = EaselTween(bm,  [{sx:3}, 1000]) .wait(1000)
                .pause(w0)
                .then({sy:3}, 4000)
                .play(w0)
                .then({sy:.3}, 4000)


    })
    })
}

TWEENPOS=function(){z()

    s = SuperStage(500).A()



    s.bm('me',  function(bm){b=bm;


        s.bm('guy',     function(guy){

            g = guy

            guy.xy(200)

            w0 = EaselTween(guy, [ {r:90}, 100 ] ).pause().then({r: 3000}, 100000)

            w = EaselTween(bm, [{sx:3}, 10000] ).play( w0 )   })

    })





}
















tweens={}

tweens.rpunch=function(arm){

    //arm=arm|| c1.g('arm')

    return tw(arm,
        [{r:100,sx:-1 },800],
        [{r:-20,sx:-2,sy:2},400,'eO'],
        [{r:0,sy:1,sx: -.8},200])}

tweens.lpunch=function(lf){

    return tw(lf,

        [{r:10,s:1},800],

        [{r:-140,s:2.5}, 600, 'eO'],

        [{s:.8, r:0}, 1600])

}

tweens.shakeY=function(a){

    return EaselTween(
        a,

        [
            {r:180,y:200,sxy:.5},
            500
        ]
    )(

        [a,'l'],
        [ {y:-10}, 500 ],
        [ {y:10}, 500 ],
        [ {y:-10}, 500 ]
    )

}




tweens.shakeX=function(a){return EaselTween(
    a,

    [
        {r:180, y:200, sxy:.5},  500
    ]

)(
    [a,'l'],
    [{x:-20},50],
    [{x:20},50],
    [{x:-20},50]

)}






tweens.rott=function(a){

    return EaselTween(
        a,

         [    {r:180, y:200, sxy:.5},   500    ]
    )
}






tweens.prod1=function(a){return tw(

    a,
    {x:-100,y:200},
    [{x:10,s:.5,y:-200},500],
    [{x:100,s:1.2,y:200,a:.5},10000,'eO'],
    {a:0})}

tweens.prod2=function(a){

    return tw(
        a,
        {x:100,y:200},
        [{x:10,s:.5,y:200},500],
        [{x:-100,s:1.2,y:200,a:.5},10000,'eO'],
        {a:0}
    )
}



