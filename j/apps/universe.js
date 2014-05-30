mugb=function(u,f){ qP('/dud', {d:u.m}, f) }

pMug=function(u,f){ qP('/mug', {u:u}, function(m){ if(m){f(m)} } ) }




UNIVERSE=function(){

    plyr=function(b){

        bm=b

        b.rgc().xy(600).sxy(.4);

        b.o('$$',function(bm){
            bm.XX()
            ke('X',usr)
        }) //only works local

        return b}

    UNI=function(f){if($w['uni']){f()}else{UNIVERSE(f)}}


    accept=function(t){
        ke('bc',
            'accept',
            {f:usr,t:t})}

    bub=function(t,x,y){var g=G(arguments), c=Ct()//Ct$()

        if(!$w['uni']){return}

        t=g[0]||'hi!'
        x=g[1]||you.x()
        y=g[2]||you.y()

        uni.a(c)

        c.a(cir(x-150,y-150,100,'w'))
        c.a(cir(x-50,y-50,30,'w'))
        c.a(cir(x-20,y-20,10,'w'))
        c.a(TX(t).x(x-200).y(y-200))  //c=Do(c)

        T(function(){c.X()},10000)
        tw(c,[{a:0,sxy:.1,x:x-250,y:y-250},20000])
        if(g.p){ke('bub',{t:t,x:x,y:y,u:usr})}

        return c}



    loc=function(){var y

        if($w['you']){

            y=you;return {u:usr, x:y.x(), y:y.y()}

        }}





    gg=function(a){
        var guy=false
        a=O(a)?a.u:a
        _e(guys,function(g){
            if(g.u==a){guy=g}
        })
        return guy}




    upd=function(u){
        if(u){gg(u.u).b.x(u.x).y(u.y) }
        else{ke('bc','upd',loc())}}

    addGuy=function(u,b){
        guys.push({u:u,b:b})
        uni.a(plyr(b))}

    ply=function(u){
        if(!gg(u)){
            pMug(u,function(m){
            UNI(function(){
                Bm(m,function(b){
                    addGuy(u,b)
                })})})}}


    invite=function(t){ke('bc','invite',{f:usr,t:t})}


    guys=[]


    var fn=function(b,s){uni=s
        you=plyr(b).fn(SL)
        guys.push({u:usr,b:you})

        I(upd,100)

        usrs(function(u){

            var rw=row().a()
            _e(u,function(u){

                mugb(u,function(m){
                    rw(
                        tn(pg(u.u),br(),m)
                            .o(function(){
                                invite(u.u)}))
                })
            })


            dv('b',1000,'auto').pp()(
                br(3),

                tx('...', 'tx'),
                bt('send',function(){ bub(qi('tx').V(), '+')}))

        })}


    wMs(fn,1000,800,'/beach.jpg')}


