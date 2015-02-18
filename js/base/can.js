canvasPlayground=function(){z()
    m= $.canvas(800).A().fit('me')
    g= $.canvas('b',600).A().fit('guy')}


superCanvasGradient =function(el){

    var addColorStop = function rc( gradient, stop, color ){

        // pass only a gradient -> function with gradient curried
        // add a color stop to a gradient

        if(U(stop)){
            return _.partial(rc, gradient)}

        gradient.addColorStop(stop, oO('c', color))

        return gradient}
    var SuperGradient = function(gradient){

      gradient.stop = function(stop,color){

            addColorStop(gradient, stop,color);

            return gradient
        }


        gradient.stops= function(stopObject){

            _.each(stopObject,

                function(v, k){

                        var o = S(v)? {k:k, v:v} : {k:v, v:k}

                        addColorStop(gradient, o.k , $r('c', o.v))

                    })
        }

        return gradient}

    el.linearGradient = el.lG = el.createLinearGradient = function(a,b,c,d){

        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()

        return SuperGradient(

            this.context.createLinearGradient(a, b, c, d)

        )

    }
    el.linGradBlackToWhite = function(){


        grd = this.linearGradient(0,0,this.W(),0)
        grd.stop(0,"black").stop(1,"white")
        this.fillStyle(grd)

        this.fillRect();
    }
    el.linGradDiagnal = function(grd){

        grd= grd || this.lG()

        grd.stop(0,'r')
        grd.stop(.1,'r')
        grd.stop(.15,'b')
        grd.stop(.2,'r')
        grd.stop(.5,'y')
        grd.stop(1,'b')

        this.fillStyle(grd)
        this.fillRect()

        return this}
    el.radialGradient = el.rG = el.createRadialGradient =  function rg(){
        var g=G(arguments)
        g[0]=g[0]||  200
        g[1]=g[1]||  200
        g[2]=g[2]||  100
        g[3]=g[3]||  250
        g[4]= g[4]|| 250
        g[5]= g[5]|| 800
        return this.context.createRadialGradient(  g[0],  g[1],   g[2],  g[3], g[4],  g[5] )
    }
    el.radGradSample=function(){

        var grd = this.rG()

        addColorStop(grd, 0, 'r')
        addColorStop(grd,.15, 'b')
        addColorStop(grd,.2, 'r')
        addColorStop(grd,.5, 'y')
        addColorStop(grd, 1, 'b')

      this.fillStyle(grd)
      this.fillRect()
    return this}
    el.growingSun=function(){var that = this

        var a=0,
            b=1000,
            grd

        var func =  function(){

            a += 1
            b -= 2

           grd = that.rG( 200, 200, a, 290, 270, b)
           grd.addColorStop(.1,'Yellow')
            grd.addColorStop(.3,'Red')
           grd.addColorStop(1, 'Violet')

          //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )

           that.fillStyle( grd )
            that.fillRect()


        }

        setInterval(func, 100)

    }


    //
    //

    el.pattern = el.createPattern = function(im, pat){
        //im = im || $.img('me')[0]
        var pattern  = this.context.createPattern( im,  pat || 'repeat' )
        return pattern }
    el.testPattern=function(){
        var that =this
        $.img('me',function(img) {
                  var pattern = that.pattern(img[0],'repeat')
                  that.fillStyle(pattern).fillRect()})





    }



}
testGrad=function(){z()

    c = $.canvas('y', 500).A()

    g = c.context.createLinearGradient(50, 0, 500, 100)

    g.addColorStop(.2, 'orange')
    g.addColorStop(.6, 'red')

    g.addColorStop( .8,'green')
//
    c.fillColor('blue')

    c.context.fillStyle = (g)

    c.fillRect()}
testGrad2=function(){z()
    x= $.canvas(600).A()

    gg= x.lg(50,50,50,100).a(.5,'b').a(.8,'y')

    x.fill(gg)
    x.fr(10,30,500,900)
}




superCanvasPixels=function(el){
    el.gD=el.getData = function(x,y,w,h){
        //historic.. dont delete ! data = x('G', X, Y, w, h).res



        var g=G(arguments),

            x=g[0] || 0,
            y=g[1] || 0,
            w=g[2] || this.W(),
            h=g[3] || this.H(),

            data = this.context.getImageData(x,y,w,h)

       // data.h = data.height
       // data.w = data.width
       // data.d = data.data

        return data}
    el.pD=el.putData=function(data,x,y){
        x=x||0
        y=y||0
        this.context.putImageData(data, x, y)
        return this}
    el.gP=el.getPut=function(a,x,y){
        var g=G(arguments),

            a=g[0],
            x=g[1],
            y=g[2],

            data=this.gD.apply(this.context, a)
        if(g.n){this.clear()}
        return x.pD(data,x,y)

    }
    el.pixelsNegative=function(){


        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
            data = imgData.data



        for (var i=0;i<data.length; i+=4){
           data[i]   =  255 - data[i];
           data[i+1] =  255 - data[i+1]
           data[i+2] =  255 - data[i+2]
           data[i+3] =  255
        }

        this.pD(imgData) //  this.pD(data,0,0)


    }



    el.pixelsInvert=function(){

        var imgData = this.gD(),
            data = imgData.data


        for (var i = 0; i < data.length; i += 4) {
            data[i]     = 225 - data[i];
            data[i + 1] = 225 - data[i + 1]
            data[i + 2] = 225 - data[i + 2]

        }

        this.pD(imgData)


    }

    el.pixelsGrayscale=function(){

        var imgData = this.gD(),
            data = imgData.data


        for (var i = 0; i < data.length; i += 4) {
            var avg = (data[i] + data[i +1] + data[i +2]) / 3;
            data[i]     = avg
            data[i + 1] = avg
            data[i + 2] = avg
        }

        this.pD(imgData) //  this.pD(data,0,0)


    }



    el.pixelsFade=function( ){


        var imgData = this.gD(),
            data = imgData.data

        for(var i=7; i<_.size(data) ; i+=4){data[i] = 90}

        this.pD(imgData)

    return el}}
pixelTest=function(){canvasPlayground()

 get = function(){

     d = m.getData(0,0,400,200)}

   // g.putData(d, 0, 100)

put=function(){
    g.context.putImageData(d,200,200)}

putget=function(){

    get()
    put()}

    putget()

    change=function(num){
      get()

      data = d.data

      _.each(data, function(pixel, index){

          d.data[index] = pixel + (num ||100)

      })

      put()
      }
    anim=function(){

        num = 0

        setInterval(

            function(){
                change(num)
                num += -1},

        100)

    }

}






superCanvasTransform=function(el){

//give scale cos(rads), skew:sin(rads)  ??
    el.norm=function(){
        el.context.scale( this.W()/10, this.H()/10)
        return this}


   el.scale=el.sc=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.scale(X,Y)}
 el.translate=el.tr=function(X,Y){var g=G(arguments),
        X=g[0]||1,Y=g[1]||X
        x.x.translate(X,Y)}
 el.rotate=el.rt=function(r){
        var g=G(arguments),
            r=g[0]||1
        //r=pi(-6)*r
        //x.fr(0,0,1,1)
        //x({f:$r('c')
        x.x.rotate(r)
    }
el.transform=el.tf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('t',a,c,e,b,d,f)}
   el.setTransform=el.stf=function rc(a,c,e,b,d,f){var g=G(arguments)
        if(g.p){return rc(2,0,0,2,0,0)}
        return x('st',a,c,e,b,d,f)}



return el}
TRANS=function(){

    z()

    x = $.canvas('yellow', 1000,800).A()
    y = $.canvas('purple', 400).A()

    x.$$(function(){
        x.fit('me')})

    x.fit('me')


    identity=function(x){
        x.stf(1,0,0,1,0,0)
    }

    rotate=function(x,a){
        identity(x)
        x.rt(tRad(a))}

    rotateByAngle=function(px,py,a){var x,y

        x=(px*cos(a))-(py*sin(a))
        y=(py*cos(a))+(px*sin(a))}

    rotateAroundZero=function(px,py,r){var x, y,a='angle'

        x=(px * cos(PI/4))-(py*(sin(PI/4)))
        y=(py * cos(PI/4))+(px*(sin(PI/4)))}


    transformEquations=['x=ax+cy+e','y=bx+dy+f']

    //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
    //x=x+e,y=y+f
    //to scale, use a,d and set others to 0
}


superCanvasText=function(el){

    el.font=function(font){
        this.context.font = $l( HTML5.font(font) )
        return this}

    el.strokeText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],

            X=g[1]||100,
            Y=g[2]||X

        this.context.strokeText(t,X,Y)

        return this}
    el.fillText = function(t,X,Y){
        var g=G(arguments),
            t=g[0],
            X=g[1]||100,
            Y=g[2]||X
         if(g.p){
            this.tx(t,X,Y,'-')
            this.tx(t,X,Y)}
        else this.context.fillText(t,X,Y)
        return this}
    el.measureText = el.measure = function(t){
        return this.context.measureText(t)
    }
    el.textWidth = function(t){return parseInt(this.measureText(t).width)}
    el.centerHorizontalText=function(text, height){

        this.fillText(  text,
                this.W()/2 - this.textWidth(text)/2,
            height
        )

    return this}



}


superCanvasDraw=function(el){

    //this just a simple proxy to drawImage // dont use?
    el.drawImage = el.dI=function(i){

        var args=G(arguments)

        args[1] = args[1]||0
        args[2] = args[2]||0

        el.context.drawImage.apply(el.context, args)

    }

    //this will create the image (from string), and then draw it
    el.draw=function(img){

        var args=G(arguments),  img = args[0]

        $.img(img, function(i){

            args[0] = i[0]

            el.drawImage.apply(el, args)

        })

    }

    el.fit=function f(img, x,y) {

        img = img || 'me'

        x = x||0


        y = y||0

        this.draw(img, x, y, this.W(), this.H())

        //el.draw(img, X, Y, el.width(), el.height())
        return this

    }

    el.drawMug = el.me = function me(interval){
    //randomly draw my face

        var that = this, g=G(arguments), args= g,

            interval = args[0] || 200

        if(that.drawMug.shouldDrawId){

            clearInterval(that.drawMug.shouldDrawId)

            that.drawMug.shouldDrawId = false}

        else{

            that.drawMug.shouldDrawId =  setInterval(function(){

                that.draw(  window['mug']||'me',  _.random( that.W()-200 ),  _.random( that.W()-200 )  )

            }, interval)}

        return this}
    el.drawMug.shouldDrawId = false

    el.fitMug = el.mug= function(user){

        var that=this

        $.post('/mug', { u: user },  function(userMug){  that.fit(userMug)  })

        return this}

    el.crop=function rc(x1,y1,x2,y2){

        if(A(x1)){

            return rc(
                x1[0],x1[1],
                    x1[2]-x1[0],
                    x1[3]-x1[1]
            )
        }

        return this.draw(x, x1, y1, x2, y2,
            0,0, this.W(), this.H())}
    el.crop2=function rc(x1,y1,x2,y2){
        if(A(x1)){return rc( x1[0],x1[1], x1[2]-x1[0], x1[3]-x1[1])}

        return el.draw(
            el.toDataURL(),
            x1,y1,x2,y2,
            0,0, this.W(),this.H()
        )

    }



    el.scaleImCen=function(img, s ){

        var  w= this.W(),  h= this.H(), s= s||1

        this.draw(img,

                w * s/-2 + w/2,
                h * s/-2 + h/2//+ w/2
            ,

                w * s,
                h * s)
    }
    el.scaleImCenSpiralMe=function(){
        var scaleNum = 1,
            that =this

        _.times(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }
    el.scaleImCenSpiral=function(){

        var scaleNum = 1,
            that =this

        _.times(100, function(){

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }

    el.dC=function f(i,x,y){

        var that = this

        i = i||'me'
        x= x||100
        y=y||100


        if(U(x)){//draw img in center of can
            $.img(i,function(i){
                that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

        else {//draw it by specifying location of its center
            y=y||x
            $.img(i, function (i) {
                that.draw(i, x - i.W() / 2, y - i.H() / 2)})}

        return this}
    //draw it where u say, but as if its reg point was its center
    el.drawRegCenter=el.dC2=  function f(i,x,y){var that =this
        $.img(i,function(i){
            that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
        return this}
    el.Cd=function(a, x,y){
        var that = this

        a= a||'me'
        x= x||100
        y=y||100

        $.img(a,

            function(img){

                that.drawImage(


                    img.src,
                        x- img.W()/2,
                        y-img.H()/2
                )
            })

    }

    return this}








superCanvasPath=function(el){



    el.s = el.ss=el.strokeColor=setStrokeColor=function(c){
        el.context.setStrokeColor(oO('c',c))
        return el}

    el.f = el.fs = el.fillColor=setFillColor=function(c){
        el.context.setFillColor( oO('c',c) )
        return el}

     el.fillStyle=function(fs){
        if(U(fs)){return this.context.fillStyle}
        this.context.fillStyle = fs
        return this

    }


    el.fsX=function(c,sc){var g=G(arguments)
        if(O(c)){x.x.fillStyle=c;
            return x}
        if(c=g.p?$r('c',c):Oo('c',c)){
            x({f:c})}
        if(D(sc)){x.ss(sc)}
        return x}

    el.sfl=function(c,f,s,l){
        x({f:f,s:s,w:l});return x
    }

    el.fill=function(){
        el.context.fill()
        //el.stroke()
        return el
    }
    el.stroke=function(){
        el.context.stroke()
        //el.stroke()
        return el
    }

    el.closePath=function(){
        el.context.closePath()
        return el}


    el.beginPath=el.begin =function(x, y){

        el.context.beginPath()

        if(N(x)){el.moveTo(x,y)}

        if(A(x)){el.moveTo(x[0],x[1])}

        return el}

    el.moveTo=function(x,y){
        el.context.moveTo(x,y)
        return el
    }

    el.lineTo=function(x,y){

        if(A(x)){

            _.each(arguments,
                function(x){
                    el.lineTo(x[0],x[1])
                })}

        el.context.lineTo(x,y)
        return el
    }

    el.clip=function(){
        el.context.clip()
        return el}

    el.fillRect=el.fr =function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||el.W()
        d=d||el.H()

        el.context.fillRect(a,b,c,d)
        return this}


    //clear screen [+ fill with color || run fx]

    el.clear = el.clearRect=function(a,b,c,d){
        if(S(a)){
            el.fillStyle(a);
            return el.fillRect()}
        a=a||0
        b=b||0
        c=c||el.W()
        d=d||el.H()
        el.context.clearRect(a,b,c,d)

       // if(F(a)){a()}
        return el
    }

    el.horizontalLine=el.lnh=function(X,Y,l){var g=G(arguments),X=g[0],Y=g[1],l=g[2],
        X2=g.p?X+l:g.n?X-l:l
        return x.ln(X,Y,X2,Y)}
    el.verticalLine= el.lnv=function(X,Y,len){

        var g=G(arguments),

            X=g[0],

            Y=g[1],

            len=g[2],

            Y2 = g.p ? Y + len
                : g.n ? Y - len
                : len

        return x.ln( X, Y , X, Y2 )
    }


    //curves
    el.arc=function(a,b,c,d,e,f,g){
        el.context.arc(a,b,c,d,e,f,g)
        return el
    }
    el.arcTo = el.a2=function a2(X){
        var g=G(arguments)

        if(A(X)){return _a( a2(x), X)

        }

        this.arcTox([0]||50,g[1]||40,g[2]||100,g[3]||100,g[4]||30)

        this.stroke()
        return this}
    el.bezierCurveTo=function(a,b,c,d,e,f,g){
        this.context.quadraticCurveTo(a,b,c,d,e,f,g)
    return this}
    el.quadraticCurveTo=function(a,b,c,d,e,f,g){



            this.context.quadraticCurveTo(a,b,c,d,e,f,g)


        return el}
    el.curveTo=function(a,b,c,d,e,f,g){

        if(N(e)){
            return this.bezierCurveTo(a,b,c,d,e,f)
        }

        else return this.quadraticCurveTo(a,b,c,d,e,f,g)


    }

    el.circle =el.cir=function(X,Y,R,fs,ss){
        var g=G(arguments),
            X=g[0]||200,
            Y=g[1]||200,
            r=g[2]||1,
            fs=g[3],
            ss=g[4]
        el.beginPath()
        el.arc(X,Y,r,0,7,false)

        el.fillColor(fs)
        el.strokeColor(ss)
        el.stroke().fill()
        return el}


   //rect
    el.fillRect=el.fr=function(a,b,c,d){
        a=a||0
        b=b||0
        c=c||this.W()
        d=d||this.H()
        this.context.fillRect(a,b,c,d)

        return this}
    el.colorFillRect = el.cfr=function(a){
        var args=G(arguments)
        this.save()
        this.setFillColor( toColor.apply(null, args) )
        this.fillRect(0, 0, this.W(),this.H() )
        this.restore()
        return this
    }
    el.roundRect= function(X, y, width, height, radius){

        el = this.context
        el.beginPath()
        el.moveTo(X + radius, y);
        el.lineTo(X + width - radius, y);
        el.quadraticCurveTo(X + width, y, X + width, y + radius);
        el.lineTo(X + width, y + height - radius);
        el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
        el.lineTo(X + radius, y + height);
        el.quadraticCurveTo(X, y + height, X, y + height - radius);
        el.lineTo(X, y + radius);
        el.quadraticCurveTo(X, y, X + radius, y);
        el.closePath();

        el.fill()
        return el}
    el.roundRect.test=function(){
        el.roundRect(100,100,200,400,20)
    }


    //draw line ( [x,y],[x,y] || x,y,x,y )
    //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
    //fresh start
    el.ln =el.line = function rc(p){

        var args = G(arguments),    p=args[0]


        if(N(args[0])){
            el.begin(args[0], args[1])
            el.lineTo(args[2], args[3])
            el.stroke()
            return el}


        if( A(args[0]) && N(args[0][0]) ){

            el.begin(args.f)

            _.each(args.r, function(p){
                el.lineTo(p[0],p[1])
            })

            el.stroke()
            return el}



        if(AA(p)){

            _.each(args,
                function(p){

                    el.line.apply(null, p)

                })}





        el.stroke()
        return el}



    el.fitEx=function(){
      this.ln([0,0],[this.W(),this.H()],[0,this.W()],[this.H(),0])
    }


    el.sun=function(a,b,s){
        s=s||1;

        this.rG([[a||0,b||a||0],
                    s*100,s*500],

            {'y':0,1:tCl('p',0)},
            600,600)
    }
    el.ball=function(b){b=b||{}
        var dir = b.d||false,
            px  = b.x||100, py  = b.y||100, rad = b.r||100,

            per = b.p||Math.PI* 2,

            ss = $r('c', b.s) ,
            fs = $r('c', b.f),
            lw = D(b.l)? b.l: 4

        return x.com(
            'b',['a',px,py,rad,0,per,dir],
            {f:fs,s:ss,w:lw},'f','s')}


    el.pointInPath = el.pip=function(c,a,b){
        return this.context.isPointInPath(a,b)
    }
    el.paperBag= function(x, y, width, height, blowX, blowY){

        x=x||100
        y=y||100
        width = width||100
        height = height ||100
        blowX = blowX || 100
        blowY = blowY || 100
        var lx, ly;
        this.beginPath();
        this.moveTo(x, y);
        this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
        this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
        this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
        this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

        return this}

    return el}


//can.ln(tictactoe)
tictactoe=[
    [[200,0],[200,600]],
    [[400,0],[400,600]],
    [[0,200],[600,200]],
    [[0,400],[600,400]]
]


sh1=[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]]
sh2=[[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]],[[8,13],[12, 13]],[[9,14],[9,18]],[[10,14],[10,18]]]




superCanvasEvents=function(el){

    el.$=function(func){
        el.click(function(e){

            func(  e.pageX - offset(this).left,
                    e.pageY - offset(this).top)

        })}
    el.$$=function(func){

        el.dblclick(function(e){

            func(  e.pageX - offset(this).left,
                    e.pageY - offset(this).top)

        })}

    el.over = el.MV=function(func){

        el.mouseover(function(e){


            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

    el.out =el.MO=function(func){

        el.mouseout(function(e){


            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

    el.enter = el.ME=function(func){

        el.mouseenter(function(e){

            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

    el.leave = el.ML=function(func){

        el.mouseleave(function(e){

            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

    el.up = el.MU=function(func){

        el.mouseup(function(e){

            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

    el.move = el.MM=function(func){

        el.mousemove(function(e){

            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

    el.down = el.MD=function(func){

        el.mousedown(function(e){

            func(e.pageX-offset(this).left,
                    e.pageY-offset(this).top)
        })
    }

}
superCanvasShadow=function(el){


    el.shadowColor=function(color){

        if(U(color)){
            return this.context.shadowColor
        }


        this.context.shadowColor=oO('c', color)

        return this}

    el.shadowBlur=function(blurNumber){

        if(U(blurNumber)){
            return this.context.shadowBlur}

        this.context.shadowBlur=blurNumber
        return this}

    el.shadowOffsetX=function(offsetX){
        if(U(offsetX)){
            return this.context.shadowOffsetX}
        this.context.shadowOffsetX=offsetX
        return this}

    el.shadowOffsetY=function(offsetY){
        if(U(offsetY)){
            return this.context.shadowOffsetY}
        this.context.shadowOffsetY=offsetY
        return this}

    el.shadow=function(color, x,y, num){

        el.shadowColor(color)

        el.shadowOffsetX(x).shadowOffsetY(y)

        el.shadowBlur(num)

    return el}



}


testShadow=function(){z()

    c = $.canvas('b', 700).A()

    c.draw('me', 100,100)

    c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

    c.draw('me', 200,200)

    c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)

    c.shadowColor('g')
    c.draw('me', 0,300)

    c.shadow('p', 30,200, 20)
    c.draw('guy', 400,200)

}


superCanvas=function(el){

//to be called internally by $.canvas
//works on FIRST canvas in jquery obj

    el.canvas = $(el)[0]
    el.context = el.canvas.getContext('2d')
    el.stage = new createjs.Stage(el.canvas)


    superCanvasDraw(el)

    el.W=function(width){
        var args=G(arguments)
        width = args[0]
        if(U(width)){return this.attr('width')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('width', width)
        if(args.N){this.fit(dataUrl)}
        return this}
    el.H=function(height){
        var args=G(arguments)
        height = args[0]
        if(U(height)){return this.attr('height')}
        if(args.N){var dataUrl = this.toDataURL()}
        this.attr('height', height)
        if(args.N){this.fit(dataUrl)}
        return this}
    el.WH=function(w, h){

        if(U(w)){
            var width=this.W(),
                height=this.H()
            return {
                width:width,  w:width,
                height:height, h:height}}

        h = h||w

        return this.W(w).H(h)}
    el.Z=function(d){d=d||5;return this.WH(d*100,d*100)}
    el.offsetLeft  =el.l=function(theOffset){

        if(!theOffset){

            return offsetLeft(x.q)}

        return parseInt( theOffset - x.offsetLeft() )};

    //  el.ox=function(){return x.q.q.offset().left}
    el.offsetTop   =el.t=function( y ){ if( !y ){ return offsetTop( y.q ) }; return parseInt( y - x.offsetTop() ) };

    //  el.oy=function(){return x.q.q.offset().top}

    el.copy= function(){
        el.img.src( el.toDataURL() )
        return el}
    el.paste= function(){
        var g=G(arguments)
        if(g.N){el.clearRect()}
        if(g.p){el.fit(el.img)}
        else {
            el.draw(el.img.src())
        }
    }

    el.save=function(){
        el.context.save()
        return el
    }
    el.restore=function(){
        el.context.restore()
        return el
    }

    //dont mix up with element/jquery alpha
    //maybe opacity for element and alpha for canvas?
    el.globalAlpha = el.alpha = el.op=function(alpha){
        if(U(alpha)){return this.context.globalAlpha}
        this.context.globalAlpha = alpha

    return this}

    el.comp = el.globalCompositionOperation = el.gc = function(compOp){
        if(U(compOp)){
            return this.context.globalCompositeOperation}
        this.context.globalCompositeOperation = oO('g', compOp)
        return this}



    //normal prop (as methods)
    el.lineWidth=function(w){
        if(U(w)){return el.context.lineWidth}
        el.context.lineWidth=w
        return el
    }
    el.lineCap=function(w){
        if(U(w)){return el.context.lineCap}
        el.context.lineCap=w
        return el
    }
    el.lineJoin=function(w){
        if(U(w)){return el.context.lineJoin}
        el.context.lineJoin=w
        return el
    }

    el.URL = el.dataURL = el.toDataURL=function(){
        return el.canvas.toDataURL()
    }


    //wap specific
    el.snap = function (  func ){

        pams = {

            d: el.toDataURL(),

            dats: el.dats

        }

        $.post('/img', pams, func )

    }

    el.img = $.img()

    el.img.src( el.toDataURL() )



    el.dots=function(){

        el.copy()
        el.DOTS=[]
        el.dats=[]

        el.$(function(x,y){

            x=parseInt(x)
            y=parseInt(y)

            el.circle(x, y)
            el.DOTS.push( [ x,y ] )

            el.dats.push( x)
            el.dats.push( y )

            el.line( el.DOTS )

        })

        el.$$(function(X,Y){var du
            //el.C('X')
            el.off('click')
            el.closePath()  //el.paste() // el.copy()  //el.save()
            el.clear() //du = el.toDataURL()
            el.clip()
            el.paste() //el.fit(du)
        })

        return el}

     el.me=function me(n){//randomly draw my face
         var g=G(arguments),n=g[0]||200
         if(x.me.d){
             clearInterval(x.me.d);x.me.d=false}
         else{x.me.d=I(function(){
             x.d($w['mug']||'me',_r(x.w()-200),_r(x.w()-200))},n) }
         return x}
     el.me.shouldDrawMeId=false
     el.mugX=function(m){
         qP('/mug',{u:m},
             function(m){x.fit(m)})
         return x}







    superCanvasGradient(el)
    superCanvasPixels(el)
    superCanvasText(el)
    superCanvasTransform(el)
    superCanvasPath(el)
    superCanvasEvents(el)
    superCanvasShadow(el)
     return el}



CAN=function(){var picHolder

    format()

    s2(picHolder= $.span().id('pics'))

    $.getJSON('/img',   function(i){ _.each(i, withImage  ) } )

    function withImage(img){

        dataUrl = img.d

        can =   $.canvas(100, 100)

        can.click(function(){

            var mouse = $('#mouse')

            mouse.val('click')

            mouse.change()

            mug = img.d   })


        picHolder.A(can)
        can.fit(dataUrl)

    }





    s2(
        x = canvas = $.canvas('yellow',1000,800))



    setInterval(function(){

        //  x.bc()

    }, 10000)




    s1(

        $.label('mouse'),

        /*
         $.sel('none','click','enter','leave','move').id('mouse').o(

         function(s){

         x.q.ub()

         if(s=='click'){
         x.$(function(X,Y){
         x.Cd(mug,X,Y)
         })}


         if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
         if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
         if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

         x.MU(function(){x.q.ub('mousemove')})}


         }),


         */
        $.label('global comp'),

        sel.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),

        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),


        $.button('SAVE(sv)',function(){
            x.sv()
        }),

        $.br(2),

        $.button('CUT(dots)',

            function(){

                x.q.q.unbind()

                qi('mouse').v('none')

                x.dots()   }),

        $.br(2),

        $.button('RESTORE(R)',
            function(){x.R()}),

        $.br(2),

        $.button('bc:change background color',function(){x.bc()}),$.br(2),

        $.button('cir:make circle',function(){x.cir(100,100,100)}),$.br(2),

        $.button('d:draw',function(){x.d($w['mug']||'me')}),$.br(2),
        $.button('dC:draw center',function(){x.dC($w['mug']||'me')}),$.br(2),

        $.button('me',function(){x.me()}),

        $.br(2),

        $.button('sh1',function(){x.ln(sh1)}),
        $.br(2),

        $.button('sh2',function(){x.ln(sh2)}),
        $.br(2),

        $.button('tictactoe',function(){
            x.ln(tictactoe)
        }),
        $.br(4),


        $.button('sampLinGrad',function(){

            x.sampLinGrad()

        }),




        $.br(2),



        $.button('sampRadGrad', function(){

            x.sampRadGrad()

        }),


        $.br(2),


        $.button('xxx',function(){
            xxx('barney')}), $.br(2),

        $.button('bads',function(){
            bad(x,200,8)  }), $.br(2),

        $.button('coins',
            function(){

                coin(x,200,8)
            }),    $.br(2)
    )



}







FAN=function(){

    x=$.canvas('y',1000,800).A()
    y=$.canvas('x',400).A()

    x.$$(function(){x.fit('me')})

    x.fit('me')

    guidewires=false
    dragging=false
    mousedown={}
    loc={}

    restoreDrawingSurface=function(){}

    updateRubberband=function(m){
        x.ln(mousedown.x,
            mousedown.y,
            m.x,
            m.y)
    }


    drawGuidewires=function(){}

    x.MD(function(X,Y){
        dragging=true
        mousedown={x:X,y:Y}})


    x.MM(function(X,Y){

        if(dragging){
            restoreDrawingSurface()
            updateRubberband({x:X,y:Y})}

        if(guidewires){drawGuidewires(loc.x,loc.y)}

    })



    x.MU(function(X,Y){dragging=false
        restoreDrawingSurface()
        updateRubberband({x:X,y:Y})})
}
RUB=function(){ z()

    can = $.canvas('yellow', 1000, 800).A()

    can.$$( function(){ can.fit('me') } )

    can.fit('me')

    guidewires = false
    dragging = false
    mousedown = {}

    loc = {}

    rr = null

    data = null

    can.MD(function(x, y){

        data = can.gD()

        dragging = true

        mousedown = { x:x, y:y }

    })


    can.MM(function(X,Y){
        var m={x:X, y:Y},

            d=mousedown

        if(dragging){

            can.pD(data)

            can.ln(d.x, d.y, d.x, m.y)
            can.ln(d.x, d.y, m.x, d.y)
            can.ln(m.x, m.y, m.x, d.y)
            can.ln(m.x, m.y, d.x, m.y)

        }


    })
    can.MU(function(X,Y){

        dragging = false

        var d = mousedown, x1, x2, y1, y2

        if(X > d.x){ x1 = d.x; x2 = X } else {x1=X; x2=d.x}

        if(Y > d.y){ y1 = d.y; y2 = Y } else {y1=Y; y2=d.y}

        rr=[x1,y1, x2, y2]

        can.pD(data)

        can.crop(rr)

        data=can.gD()})

}




toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}

$.imageSizeFuncCan = function(image, size, func){//xc=

    var x = $.canvas(100, 100).C('X')

    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }

    return x}





bad=function(x,n,n1){

    if(N(n1)){var a=[]
        _t(n1,function(){a.push(bad(x,n))})
        return a}

    if(N(n)){return bad(x).du(n)}
    var b={
        x:_r(1200), y:_r(600), r:15,
        dx: _r(10)-5, dy: _r(10)-5}

    b.draw=function(){
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.cir(b.x,b.y, b.r,'g','z')

        x.cir(b.x,b.y, 15,'o','z')

        return b}


    b.update=function(){

        b.r *= 1.005

        b.x = wrp(0,1200,20)(b.x+b.dx)

        b.y = wrp(0,600,20)(b.y+b.dy)

        return b}


    b.drawUpdate = b.du=function(n,n2){
        if(N(n)){
            return setInterval(function(){  b.du() },  n)
        }

        return b.draw().update()
    }

    return b}
coin=function(x,n,n1){

    if(N(n1)){
        var a=[];
        _.times(n1,function(){
            a.push(coin(x,n))});
        return a
    }

    if(N(n)){return coin(x).du(n)}

    var c={
        x:_r(0,1200),
        y:_r(0,600),
        r:10,
        dx:_r(0,10)-5,
        dy:_r(0,10)-5}

    c.draw=function(){
        x.cir(c.x,c.y,c.r,'b','y')
        return c}

    c.update=function(){
        c.x=wrp(0,1200,20)(c.x+c.dx)
        c.y=wrp(0,600,20)(c.y+c.dy)
        return c}

    c.drawUpdate=function(n,n2){
        if(N(n)){return setInterval(function(){c.drawUpdate()}, n)}
        return c.draw().update()}

    return c}
//bluecircle game function //never used
coinHits=function(){

    _.each(CoinsArray,

        function(coin, coinId){

            //??? hitTest?
            if( xyc( coin.x, coin.y, game )){

                delete CoinsArray[coinId]

                game.coinScore += 1
            }
        })




    _.each(
        As,function(a,A){

            if (
                xyc(g.x,g.y,a)){
                g.h-=1}

            _.each(Bs,function(b,B){

                if (xyc(b.x,b.y,a)){
                    delete Bs[B]

                    delete As[A]

                    As.push(bad())}})

        })

}
startGame=function(st){

    z('w')
    st=st||St('b',500).a().t()

    game=true

    Cs=[]
    As=[]
    Bs=[]
    g=Guy()
    Bm('guy',function(guy){st.a(guy=a);xy(guy,200)})
    _t(10,function(){Cs.push(coin())})
    _t(15,function(){As.push(bad())})}
updateGame=function(){if(game){
    g.dx += cap(-5,5)( (e.x()-g.x)/300 )
    g.dy += cap(-5,5)( (e.y()-g.y)/300 )
    bul(g.x,g.y,g.dx,g.dy)}
else{
    alert('game over!')
    if((e.x>450)&&(e.y>290)
        &&(e.x<450 + textWidth)
        &&(e.y<290 + textHeight)){reload()}}
    x=xx().w(800).h(600).$(function(X,Y){
        g.dx+=cap(-5,5)((X-g.x)/300)
        g.dy+=cap(-5,5)((Y-g.y)/300)
        bul(g.x,g.y,g.dx,g.dy)})
    b=bad(x).d()
    c=coin(x).d()
    g=guy(x)
    I(function(){x.X(); b.u().d();g.u().d()}, 30)
    ball={x:1, y:0, vx:0, vy:0}
    _e($d(cat(Bs,Cs,As)),function(a){a.d()
        a.u()})
}
updateScreen=function(){
    updateBall()
    x.X();x('b')('m',0,500)('l', 300,600)('s')
    drawBall()}
updateBall= function(){
    sXY(guy,.001,'-')
    XY(guy,0.5,'+')
    XY(ball,ball.vx,ball.vy,'+')
    ball.vy+=.04}
drawBall =function d(px,py){

    px = px||ball

    if(O(px)){ return d(px.x, px.y) }

    x('b')

    x.cir(px,py,2);

    x('f')
}

FULLCAN=function(){z()
    $h().s({h:'100%',of:'h'})()
    $b().s({m:0, g:0,h:'100%'})()

    var s='Click or tap the screen to start the game',
        fo='bold 16px Arial',
        x=cx('x',
            W(), H())


    x.fs(x.lg().a(0,'y').a(1,'z')).fr().fs('y').fo(fo).ftc(s, 30).a()



    im('me',function(i){var i=qq(i),origW=i.w() ,ig

        i.w($M.round((50*cW())/100))
        i.h($M.round((i.w()*i.h())/ origW) )

        ig={i:i, x:x.w()/2-i.w()/2,
            y:x.h()/2-i.h()/2 }

        x.d(ig.i, ig.x, ig.y)



    })



}
