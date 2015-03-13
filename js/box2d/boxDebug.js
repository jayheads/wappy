

dd= p=b2d.Dynamics.b2DebugDraw.prototype

dd.sprite = dd.spr = function(spr){  //it is looking for  a context?
    if(U(spr)){return this.GetSprite()}
    this.SetSprite( spr )
    return this}

dd.scale = dd.drawScale =p.dS= function(scale){
    if(U(scale)){return this.GetDrawScale()}
    this.SetDrawScale(scale)
    return this}

dd.alpha = dd.fillAlpha = dd.fA= function(a){
    if(U(a)){return this.GetFillAlpha()}
    this.SetFillAlpha(a)
    return this}

dd.line =dd.lineThickness =dd.lT= function(lt){
    if(U(lt)){return this.GetLineThickness()}
    this.SetLineThickness(lt); return this
}


dd.flags = p.fl =  function(flags){var DD=b2DebugDraw
    if(U(flags)){return this.GetFlags()}
    if(flags=='*'){
        flags=  (DD.e_shapeBit|DD.e_jointBit|DD.e_pairBit|DD.e_aabbBit|DD.e_centerOfMassBit|DD.e_controllerBit)}
    this.SetFlags(flags);return this}








b2d.debugDraw = function(sprite, scale, flags, alpha,line){

    var dd = new b2d.DebugDraw()

    //can pass in either canvas or context
     if($.isCan(sprite)){ sprite = sprite.ctx() }

    if(sprite){dd.sprite( sprite ) }

    if(scale){ dd.scale(scale) }

    if(flags){ dd.flags(flags)}

     dd.alpha( N(alpha)?alpha:0.5 )

    // dd.line( N(line)? line :1 )
   // dd.SetLineThickness(1)


    return dd}




