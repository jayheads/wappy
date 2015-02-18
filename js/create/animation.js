


p = cjs.Sprite.prototype

p = cjs.SpriteSheet.prototype

p.addFlipped=function(a, b, c){

    cjs.SpriteSheetUtils.addFlippedFrames(this,  a||true, b||false, c||false )

    return this}

p = cjs.MovieClip.prototype


cjs.sprite = $sprite =function(spriteSheet){
//EaselSprite= J$=

    if( spriteSheet.images ){

        spriteSheet = new cjs.SpriteSheet(spriteSheet)   }

    return new cjs.Sprite( spriteSheet )

}
cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)} //= SS$

$spriteX = function(dataObjOrSprite){//EaselSpriteSheet = jss=
    var spriteSheet
    if( dataObjOrSprite.images ){ // then it is a dataObj
        spriteSheet = new cjs.SpriteSheet( dataObjOrSprite )}
    else {//it must be a sprite sheet already
        spriteSheet = dataObjOrSprite}
    return new cjs.Sprite(spriteSheet)}

Timeline = EaselTimeline = Tl=function(l){

    l=sTW(l)

    l.ad=function(a,b){var t=this;
        if(iS(a)){t.addLabel(a,b)}
        if(iO(a)){t.addTween(a,b)}
        return t}

    l.currentLabel = l.cL=function(){return this.getCurrentLabel()}


    l.labels = l.lb=function(a){
        var t=this;
        if(U(a)){return this.getLabels()}
        if(O(a)){this.setLabels(a);return this}
        if(N(a) || S(a)){return resolve(a)}
        return this
    }



    l.remove = l.rm = function(a){ this.removeTween(a); return this }


    l.duration = l.uD=function(a){

        if( U(a) ){ this.updateDuration() }

        if( N(a) ){ this.tick(a) }

        return this
    }


    return l

}
SuperTimeline =sTl=function(l){

    l =sTW(l)

    l.ad=function(a,b){var t=this;
        if(iS(a)){t.addLabel(a,b)}
        if(iO(a)){t.addTween(a,b)}
        return t}

    l.cL=function(){return t.getCurrentLabel()}

    l.lb=function(a){var t=this;
        if(a===undefined){return t.getLabels()}
        if(iO(a)){t.setLabels(a);return t}
        if(iN(a)||iS(a)){return resolve(a)}
        return t}

    l.rm=function(a){this.removeTween(a);return this}

    l.uD=function(a){var t=this;
        if(a===undefined){t.updateDuration()}
        if(iN(a)){t.tick(a)}
        return t}
    return l}
TIMELINE=function(){z()

    s =  createjs.stage(500).A().tick()

    s.bm('me', function(bm) {

        s.bm('guy', function (guy) {

            g = guy
            b = bm


            timeline = new createjs.Timeline()

            tween = EaselTween(
                bm, [{sx: 2}, 10000 ])

            tween2 = EaselTween(
                bm, [   {sy: 2}, 10000  ])

            tween3 = EaselTween(
                guy, [{r: 20},10000], [{r: 0},10000]   )

            //the tweens dont have stops!
            stop = function(){  tween.stop(); tween2.stop()  }

            timeline.addTween(tween)
            //   timeline.addTween(tween2)
            timeline.addTween(tween3)

        })   })



}
