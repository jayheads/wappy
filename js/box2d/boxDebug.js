

p=b2.Dynamics.b2DebugDraw.prototype

p.sprite = p.spr = function(spr){//p.sp=p.sSp=p.sS=p.ss=
    //it is looking for canvas/context?
    if(U(spr)){return this.GetSprite()}
    this.SetSprite(spr)
    return this}
p.scale = p.drawScale =p.dS= function(scale){
    if(U(scale)){return this.GetDrawScale()}
    this.SetDrawScale(scale)
    return this}
p.alpha = p.fillAlpha = p.fA= function(a){
    if(U(a)){return this.GetFillAlpha()}
    this.SetFillAlpha(a)
    return this}
p.line =p.lineThickness =p.lT= function(lt){
    if(U(lt)){return this.GetLineThickness()}
    this.SetLineThickness(lt); return this}
p.flags = p.fl =  function(flags){
    if(U(flags)){return this.GetFlags()}
    this.SetFlags(flags);return this}


b2.debugDraw=function(sprite, scale){ //=DebugDraw=dbD
    var dd = new b2.DebugDraw(), d=dd  //dbD =DebugDraw =bDD=b2DD=
    if(sprite){dd.sprite(sprite)}
    if(scale){dd.scale(scale)}
    return dd}




