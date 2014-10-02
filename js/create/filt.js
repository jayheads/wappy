blF=function(bx,by,q){return new C$.BlurFilter(bx,by,q)}
aMF=function(mask){return new C$.AlphaMaskFilter(mask)}

trx=function(n){var g=G(arguments),a=[]
    //for making mask filter
    if(g.n){return 'rgba(0,0,0,'+g[0]||0 +')'}
    _e(g,function(n){
        a.push(trx(n,'-'))})
    return a}

clF=function(a,b,c,d,e,f,g){return new C$.ColorFilter(a,b,c,d,e,f,g)}

clMF=function(m){return new C$.ColorMatrixFilter(m)}



CM=function(){
    var c=new createjs.ColorMatrix()
    c.b=c.adjustBrightness
    c.c=c.adjustColor
    c.C=c.adjustContrast
    c.h=c.adjustHue
    c.s=c.adjustSaturation
    c.cl=c.clone
    c.cc=c.concat
    c.m=c.copyMatrix
    c.r=c.reset
    c.A=c.toArray
    c.S=c.toString
    return c}




blr=function(){

    wMb(function(b){
        var ag=0,rg=100,sp=0.04
        z()
        s=St(500).drg().a().c('x').a(b.xy(100).cc())
        tt(function(e){v=sin(ag+=sp)*rg
            b.cc('+').fl([blF(v,v,2)])
            s.u(e)})
    })}



msk=function(){
    sss=function(){var args=G(arguments)

        z()


        stage = SuperStage(600).a()


        if(args.f){

            stage.a(args.f)

            _.each(args.r,
                function(arg){

                    if( F(arg) ){ arg(args.f) }

                })
        }

        return stage}



    wMb(function(b){

        sss(b, TR)


        b.fl([

            aMF(Gx().lf(trx(1,0),[0,1],0,0,200,200).dr0(400).H().cc(400).cc('*'))

        ]).cc(400)})}






clr=function(r){var ag=0,rg=100,sp=0.04
    wMb(function(b){z();s=St(500).drg().a().c('X').a(b.xy(100))
        b.cc().fl([r=='g'? clF(.3,1,.3,1,0,0,0,0)
            :r=='b'? clF(.3,.3,1,1,0,0,0,0)
            :r=='r'? clF(1,.1,1,1,0,0,0,0)
            :r=='rg'? clF(1,1,.1,1,1,1,20,0)
            :clF(1,.1,1,1,0,0,0,0)]).cc('+')
    })}



cmx=function(){
    var g=G(arguments);g[0]=g[0]||'a'

    wMb(function(b){b.xy(100).cc();_e(g,function(mf){b.clMF(mf,'+')})},

        St(500).drg().a().c('X') )}




