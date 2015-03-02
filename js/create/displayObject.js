
//DISPLAY OBJECT /////////////////////////////////////////////////////////////////////
p=cjs.DisplayObject.prototype

p.$=p.click=function(func){

    return this.on('click', func)
}

p.$$=p.dblclick=function(func){

    return this.on('dblclick', func)
}
p.kX=function(skewX){
    if(U(skewX)){return this.skewX}
    this.skewX=skewX;return this
}

p.kY=function(skewY){
    if(U(skewY)){return this.skewY}
    this.skewY=skewY;return this
}
p.kXY=function(x,y){

    y=N(y)?y:x

    return this.kX(x).kY(y)}


p.remove=function(){
    this.parent.removeChild(this)
    return this}

//can add easing :)
p.X=function(x,duration){
    var g=G(arguments)
    if(U(x)){return this.x}
    if(g.p){
        x = this.x+x }
    else if(g.n){$l('n')
        x=this.x-x}
    else if(g.m){$l('m')
        x=this.x*x}
    else if(g.d){$l('d')
        x=this.x/x}


    if(N(duration)){
        tw([this], [{x:x}, duration ])
    }

    else{this.x=x}
    return this}

testX=function(){z()
    s=cjs.stage(800,400).tick().A()
    s.bm('me', function(bm){b=bm})}

//make same same x
p.Y=function(y,duration){
    var g=G(arguments)
    if(U(y)){return this.y}
    if(g.p){
        y = this.y+y }
    else if(g.n){
        y=this.y-y}
    else if(g.m){
        y=this.y*y}
    else if(g.d){
        y=this.y/y}


    if(N(duration)){
        tw([this], [{y:y}, duration ])
    }

    else{this.y=y}
    return this}

p.XY=function(x,y){
    if(U(x)){return {x:this.x, y:this.y}}
    if(U(y)){y=x};
    return this.X(x).Y(y)}
p.Xx=function(a){
    var g=G(arguments)
    if(U(a)){return ob.x}

    if(g.p){ ob.x = ob.x+a }

    else if(g.n){ob.x=ob.x-a}
    else if(g.m){ob.x=ob.x*a}
    else if(g.d){ob.x=ob.x/a}
    else{ob.x=a}

    return o}
p.grow = function(){ this.tween( [{sxy:10},10000]);return this }
p.drag = function(){

    SL(this)

    return this}
p.rotate = function(){

    RT(this)

    return this}
p.bounds=function(a,b,c,d) {
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this

}




p.opacity=function(alpha){
        if(U(alpha)){return this.alpha}
        this.alpha=alpha;return this}




setter=function(pop){
    return function(pop){
        if(U(pop)){return this[pop]}
        this[pop]=pop; return this}}










p.transform=function(pam){

    if( O(pam) && F(pam.getTransform) ){

        pam = pam.getTransform()
    }

    if(A(pam)){
        this.setTransform.apply(this, pam)
return this
    }

    this.setTransform.apply(

        this,  G(arguments))

    return this
}


p.sX=function(scaleX){
    this.scaleX=scaleX;return this}
p.sY=function(scaleY){
    this.scaleY=scaleY;return this}
p.sXY=function(x,y){if(U(y)){y=x};  return this.sX(x).sY(y)}



p.rX=function(regX){


    var g=G(arguments), regX=g[0]

    if(U(regX)){return this.regX}

    //if(g.p){this.rX( this.regX + regX  )}

    this.regX=regX;
    return this}


p.rY=function(regY){var g=G(arguments),regY=g[0]

    //if(g.p){this.Y( this.y + (regY - this.regY)  )}
    if(U(regY)){return this.regY}
    this.regY=regY;return this
}


p.rXY=function(x,y){y=N(y)?y:x
    return this.rX(x).rY(y)}



p.rZero=function(a){
    var g=G(arguments),

        x=this.W()/2,
        y=this.H()/2

    if(g.p){

        this.rX( 0, '+')

        //this.X(a, this.regX()-a, '+')

        this.rY( 0, '+')

    }


    else {

        this.rX( 0 )
        this.rY( 0 )   }

    return this}
p.rCenter=function(){
    var g=G(arguments),

        x=this.W()/2,
        y=this.H()/2

    if(g.p){

        this.rX( x,  '+' )
        this.rY( y,  '+' )

    }

    else {
        this.rX( x )
        this.rY( y )
    }

    return this}

p.rgc=function(){var g=G(arguments),

    x=this.W()/2,
    y=this.H()/2

    if(g[0]===0){
        if(g.p){this.rXY(0,0,'+')}
        else{this.rXY(0,0)}
    }

    else{
        if(g.p){this.rXY(x,y,'+')}
        else{this.rXY(x,y)
        }}

    return this}



p.warpX=function(low,high,cush){var that = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){that.x =warp(that.x)})


    return this}
p.warpY=function(low,high,cush){var that = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){that.y =warp(that.y)})
    return this}


p.tween = function(){

   var args = G(arguments), tween

    args.unshift(this)

    __tween = tween = cjs.tween.apply(null, args)


return tween}

p.tweenLoop = function(){

   var args = G(arguments),tween

    args.unshift([this, 'l'])

    tween = __tween = cjs.tween.apply(null, args)

return tween}


p.flash = function(){var that=this


       this.opacity(0)
        setTimeout(function(){
            that.opacity(1)}, 300)

return this}

p.spin = function(){this.tweenLoop([{r:360}, 4000]); return this}

p.getSetRotation = p.rT = p.rt = function(rotation){
    var args=G(arguments);
    rotation = args[0]

    if( args.p ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation + rotation )  }
    if( args.n ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation - rotation )  }

    if(U(rotation)){return this.rotation}
    this.rotation = rotation
    return this}

p.underMouse = function( ){

    var stage = this.getStage()
    if(stage.mouseInBounds){

        var pt = this.globalToLocal(stage.mouseX, stage.mouseY)

        return this.hitTest(pt.x, pt.y)
    }

}



p.move=function(){
    return this.X(this.vx||0,'+').Y(this.vy||0,'+')}

p.accelerate=function(){
    return this.vX(this.ax||0,'+').vY(this.ay||0,'+')}

p.jerk=function(){
    return this.aX(this.jx||0,'+').aY(this.jy||0,'+')}


p.warp=function(n){n=n||0
    var stage = this.getStage()
    this.warpX(0, stage.W(), n)
    this.warpY(0, stage.H(), n)
    return this}



p.vX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
p.vY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
p.vXY=function(x,y){return this.vX(x).vY(y)}
p.aX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
p.aY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
p.jX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
p.jY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}


p.N=function(name){
    if(U(name)){return this.name}
    this.name=name;return this
}


p.bounce=function(n){  n=N(n)?n:0
    var that=this,

        stage = this.getStage() ,
        h=stage.H(),
        w=stage.W()

    cjs.tick(

        function(){var x=that.x, y=that.y

            if(x > w - that.W() - n  || x <(n ) ){ that.vX('-') }

            if(y> h - that.H() -n|| y<(n )){ that.vY('-')  }

        })


    return this}
p.shootBullet = function(){
    var shooter = this
    var stage = shooter.getStage()

    var bullet = cjs.circle()

    var x = shooter.x //shooter.cX()
    var y = shooter.y //shooter.cY()


    bullet.XY(  x, y   )


    stage.A(bullet)


    bullet.startMoving(

            (shooter.vx||1)*1.5, (shooter.vy||1) *1.5
    )



}

p.centerX= p.cX=function(a){
    if(U(a)){return this.x + this.W()/2 }

    return this.X( a- this.W()/2)
}
p.centerY= p.cY = function(a){
    if(U(a)){return this.y + this.H()/2 }

    return this.Y( a- this.H()/2)
}

p.toR =p.moveRight=function(num){
    num=num||20
    this.X(num,'+')
    return this}
p.toL = p.moveLeft=function(num){
    num=num||20
    this.X(num,'-')
    return this}
p.toU =p.moveDown=function(num){num=num||20
    this.Y(num,'-')
    return this}
p.toD =p.moveDown=function(num){num=num||20

    this.Y(num,'+')
    return this}
p.keyControls = function(num){
    var args=G(arguments),
        that=this

    if(args.P){
        $.kD('left', function(){that.toL(num)})
        $.kD('right', function(){that.toR(num)})}

    if(args.N){
        $.kD('up', function(){that.toU(num)})
        $.kD('down',   function(){that.toD(num)} )}
}






p.hitByBullet = function(bullet){var args=G(arguments), bullet=args[0],

    didHit = Math.pointInRectangle(
        bullet.cX(),
        bullet.cY(),

        {x:this.cX(),y:this.cY(),w:this.W(),h:this.H()}

    )

    if(args.n){

        if(didHit){
            this.remove()
        }}

    return didHit}
//chick for hits and remove if a hit
p.killAllIAmHitting = function(){
    var that=this,
        stage = this.getStage()

    _.each(stage.children, function(obj){

        if(that != obj){

            obj.hitByBullet(that, '-')

        }})

}
p.makeMeAKiller =function(){
    var that = this
    cjs.tick(function(){
        that.killAllIAmHitting()
    })
    return this}








p.inStage =  function(){var args=G(arguments),
    x= this.x,
    y= this.y,
    stage = this.getStage(),
    w=stage.W()-100,
    h=stage.H()-100,
    withinStage = x>0 && x<w && y>0 && y<h

    if(args.n){
        if(!withinStage){this.remove()}}

    return withinStage}



testInStage = function(){

    s = cjs.stg()

    s.bm('me', function(b){me=b

        me.startMoving(10, 10)

        cjs.tick(function(){ $l(me.inStage()) })

    })

}




p.W=function(a){
    if(U(a)){ return this.getBounds().width * this.scaleX  }
    this.sX(  this.scaleX * a / this.W() )
    return this}
p.H=function(a){

    if(U(a)){ return this.getBounds().height * this.scaleY  }

    this.sY( this.scaleY * a / this.H() )

    return this

}
p.WH=function(w,h){return this.W(w).H(h||w)}
p.startMoving=function(x,y){

    if(x){this.vX(x)}
    if(y){this.vY(y)}
    var that=this
    cjs.Ticker.on('tick', function(){
        that.X(  that.X() + (that.vx ||0)  )
        that.Y(  that.Y() + (that.vy ||0)  )
    })

    return this}


p.brake=function(){

    this.vx = this.vy = 0

}

p.toFront = function(){

    numChildren = this.parent.children.length

    this.parent.setChildIndex(this,numChildren-1)

    return this
}


p.bindBody=function(body){
var that=this

    cjs.tick(function(){

        body.X(that.X( ) )
         body.Y(that.Y() )

        body.rT( that.rT() )
    })

return this}
p.getTransform=function(){

    return [
        this.x,this.y,this.scaleX,this.scaleY,
        this.rotation,this.skewX,this.skewY,
        this.regX,this.regY

    ]
}

p.a2=function(toWhat){

    toWhat.A( this )

return this}










MATRIXX=function(){z()

    s = cjs.stage( 900, 900  ).A()


    s.bm('me', function(bm){

        b=bm.sX(4)
        TR(b)

        //m= b.getMatrix()

       // t = b.getTransform()

        s.bm('guy', function(guy){

            g = guy

           //


            cjs.tick(function(){
                g.transform(b)
            })
        })


    })




}

SETTRANSFORM=function(){

    s = cjs.stage(800).A()
    s.bm('me',function(me){
        b=me


        b.setTransform(0,0,2,.5,0,40,4,2,3)

        //x,y,a

        m = b.getMatrix()

        function tf(a,b,c,d,e,f,g,h,i){
            return this.x=a||0,
                this.y=b||0,
                this.scaleX=null==c?1:c,
                this.scaleY=null==d?1:d,
                this.rotation=e||0,
                this.skewX=f||0,
                this.skewY=g||0,
                this.regX =h||0,
                this.regY =i||0,
                this}




    })



}