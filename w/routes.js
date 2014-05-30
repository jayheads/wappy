module.exports=function(){$a=a;a.p=a.post;a.g= a.get;

    $N=Number

   gU= agU=function(u,f){$a.g(u, $w.u ,f)}
   pU= apU=function(u,f){$a.p(u, $w.u ,f)}

    qu=function(q){return {u:q.u}}

    qbu=function(q){return {u:q.b.u}}

    pjd=function(p,s){

        return function(z,d){

           S(s)? p.j(d[s]) : p.j(d)}}

    qqU=function(q){return {u:q.q.u}}
    pjd0=function(p){return function(z,d){p.j(d[0])}}

    quc=function(q){
        return {
            u:q.u,
            c:q.b.c
        }}
    fi=find=function(m,o,f){
        if(!F(f)){f=pjd(f)}
        $m[m].find(o,f)}
    create=function(m,q,p){$m[m].create(quc(q),pjd(p))}

    all=function(m,f){
        if(!F(f)){f=pjd(f)}
        $m[m].find(f)}
    createF=function(a){return function(q,p){create(a,q,p)}}
    createP=function(a){apU('/'+a, createF(a))}
    rec=function(a,b,f){
        if(!F(f)){f=pjd(f)}

        $m[a].find(b).sort({dt:-1}).execFind(f)}


    rec1=function(a,b,f){

        $m[a].findOne(b).sort({dt:-1}).execFind(f)}

    f1=function(m,o,f){
        if(!F(f)){f=pjd(f)}
        $m[m].findOne(o,f)}
    fById=function(m, o, f){


        $m[m].findById(o,

        F(f)? f: pjd(f)

        )}
    ALL=function(r,m){  $a.g(r, function(q,p,n){ all(m,p)    })}
    qI=function(q){return  {u:q.I}}
    qU=function(q){return {u:q.u}}


    rmById=function(m,i,f){
        if(O(i)){i= i._id}
        if(!F(f)){f=pjd(f)}
        $m[m].findByIdAndRemove(i,f)}
    rem=function(m,o,f){

        $m[m].remove(o,f)}
    cre=function(m,o,f){
        if(!F(f)){f=pjd(f)}
        $m[m].create(o,f)}




    $a.g('/',function(q,p){p.r('wap')})
    $a.g('/wap',function(q,p){p.r('wap')})




    $a.g('/wap/workerFile', function(q,p){

        $l('yo')

        p.send('/workerFile.js')

    })




    $a.g('/wap/:app/:pam?',
        function(q,p){

            p.r('wap',{
                app:q.params.app,
                pam:q.params.pam

            })})





    agU('/lgd', function(q,p,n){
            p.j(q.u)  })


    $a.p('/rmU',function(q,p,n){  rem('user', q.b,  pjd(p) )})


    $a.p('/nU',function(q,p,n){cre('user',q.b,
            function(z,u){if(z){$l(z.code==11000?'!!':'!')
                    $d(z);p.j('error');n(z)}
            else{q.s.u=u.u;q.s.li=true
                    q.s.save(function(){p.j(u.u)})}})})
    $a.p('/li',  function(q,p,n){f1('user', {u:q.b.u,p:q.b.p },

        function(z,u){

            if(z){n(z)}
            if(!u){p.j('guest')} else{
                q.s.u=u.u
                q.s.li=true;
                q.s.save(function(){
                    p.j(u.u)})}})})
    agU('/lo', function(q,p,n){
        q.s.u=null
        q.s.li=false
        q.s.save(function(){
            p.j('false')
        })}) //logout

    $a.g('/gU',function(q,p,n){

       find('user',{},function(z,u){
           if(u){
            p.j(_.map(u,function(u){
                return {
                u:u.u, m:u.m, i:u.i}}))}})})//sends user list
   apU('/upl',function(q,p,n){if(q.f.png){q.f.i=q.f.png}
       var i=q.f.i, op=i.path
       cre('pic',{u:q.I,n:i.name,s:i.size,m:i.lastModifiedDate,e:pt.e(op)||'.png'},
            function(z,i){i.p=pt.r(op,'../../p/',i._id.toString())+i.e;$d(i.p)
                fs.r(op,function(z,f){fs.w(i.p,f,function(z){i.save(function(z){
                    if(z){n(z)} else{p.d('back')}})})})})})    //upload pic


    apU('/uplI', function(q,p,n){
        if(q.f.png){q.f.i=q.f.png}
        var i=q.f.i,op=i.path
         cre('img', {u:q.I,d:q.du},
            function(z,i){$d(i)
                i.p=pt.r(op,'../../p/',i._id.toString())+i.e;$d(i.p)
                fs.r(op,function(z,f){
                    fs.w(i.p,f,function(z){
                        i.save(function(z){if(z){n(z)}
                            else{p.d('back')}})})})})})

    apU('/nImg',function(q,p,n){ cre('img', {u:q.u,d:q.b.d}, p) })  //new image

    $a.p('/rmI',function(q,p,n){rmById('img',q.b,p)})  //cutouts
    $a.p('/rmP',function(q,p,n){rem('pic',q.b,p)}) //files


    $a.g('/pix',function(q,p,n){
        all('pic',p)})


 agU('/mypix', function(q,p,n){
     fi('pic', qI(q), p) })


    agU('/img',function(q,p,n){
        fi('img',qu(q),p)})



        //ART->  // send user THEIR image objects (including durls)



    agU('/gMg',function(q,p,n){p.j(q.U.m)})
    //return user THEIR mug ob (if im) or mugID
    //$a.g('/gMg2',$w.u,function(q,p,n){$m.img.findById(q.U.m, function(m){p.j(m)})})


    $a.p('/dud', function(q,p,n){
        fById('img',  q.b.d,

            function(z,d){   if(O(d)){  p.j( d.d )   }  }) })

            //get a durl from an img-ob id



    apU('/chMg',function(q,p,n){q.U.m=q.b.m;q.U.save(  pjd(p,'m') )})   //function(z,u){   p.j(u.m)  } //update/change which pic/img is their designated mug pic/img

    $a.p('/mug',
        function(q,p,n){

            f1('user', q.b,
                function(z,u){
                    $l(u)

                    fById('img', u.m,
                pjd(p,'d') )})})
                //function(z,d){  p.j(d.d) }//get a user's durl by a username id




    pU('/tpc',function(q,p,n){cre('tpc',{u:q.u,t:q.b.c},p)})
    ALL('/tpc','tpc')

    $a.g('/tpc1',function(q,p,n){f1('tpc', {t: q.q.t} ,p)})






    pU('/vte', function(q,p,n){

        f1('tpc',
            {t:q.b.t},

            function(z,t){   // if(q.b.dr=='u'){






              //  var ti = _.map(t.i, function(i){
              //      if(O(i) && i.t==q.b.i){
              //          if(q.b.dr=='u'){i.s=i.s+1}
              //          if(q.b.dr=='d'){i.s=i.s-1}}
              //     return i})


                var ti = _.map(t.i, function(i){

                    if(O(i) && i.t==q.b.i){

                        if(q.b.dr=='u'){i.s=i.s+1}

                        if(q.b.dr=='d'){i.s=i.s-1}}

                    return i
                })




                t.i=[]

                t.i= ti;

                t.save( function(z,d){

                       $l('error ob:');$l(z)
                       $l('suc ob:');$l(d)
                       p.j(d)}


                )


            })


    })


















    ALL('/users','user')
    createP('sts')
    gU('/sts',function(q,p,n){

        rec('sts',qU(q),p)})





    gU('/sts1',function(q,p,n){
                       $l(q.q)
        $m.sts.findOne(
            {u:q.q.u}).sort({dt:-1}).execFind(
            function(z,d){

                if(A(d)){p.j(d[0])}
            })


    })







    pU('/pst',function(q,p,n){

        cre('pst',{

            u:q.u,
            t:q.b.t,
            c:q.b.c,
            du:q.b.du

        },p)})








    gU('/psts',
        function(q,p,n){
            rec('pst',
                {},p)})

    gU('/pst',
        function(q,p,n){
            rec('pst',
                qu(q),p)})

    gU('/pstu',
        function(q,p,n){ $l(q.q)
            rec('pst', {u:q.q.u}, p)})


    gU('/pstt',
        function(q,p,n){ $l(q.q)
            rec('pst', {t:q.q.t}, p)})



    pU('/uPf',function(q,p,n){

        q.U.pf=q.b;
        q.U.save(pjd(p))

    })




    pU('/gPf',function(q,p,n){ $l(q.b)

        f1('user',

            {u:q.b.u},

            function(z,u){
                 $l(u)
              ////******

               if(u.pf){u.pf.u=u.u}

                p.j(u.pf)

        })})






    pU('/sRq',function(q,p,n){cre('req',{to:q.b.to,fr:q.u},p)})





    pU('/yRq',function(q,p,n){(q.U.buds=q.U.buds||[]).push(q.b.u)
        f1('user',{u:q.b.u},function(z,u){(u.buds||[]).push(q.u)
                 u.save()})

        q.U.save()})



    gU('/gRq',function(q,p,n){fi('req',{to:q.u},p)})



    gU('/buds',function(q,p,n){

        all('user',function(z,u){

                p.j(_.filter(u,function(u){

                return _.contains(q.U.buds, u.u)}))

            })})


    pU('/buds',function(q,p,n){

        $m.user.findOne(q.b,

            function(z,uu){ $l(uu.u)

            all('user',  function(z,u){

                p.j(_.filter(u, function(u){

                    return _.contains(
                        uu.buds, u.u)}))

            })

        })




    })





    pU('/sMsg',function(q,p,n){cre('msg',{m: q.b.m,to: q.b.to,fr: q.u},p)})


    gU('/MsgS',function(q,p,n){

        var o = {};
        o.map = function(){emit(this.to, {m:this.m, dt:this.dt, fr:this.fr})}


        o.reduce=function(k,vals){


            var d
            vals.forEach(function(v){


                if(!d){d={dt: v.dt,  m: v.m, to:k,fr: v.fr }  }

                else if(v.dt> d.dt){
                    d={dt:v.dt, fr: v.fr, m:v.m, to:k } } })

            return d}

        o.query={fr:q.u}



        $m.msg.mapReduce(o,

            function(z,r){//$l(r)
                // r.find().exec(     function(z,r){   p.j(r)  })

                r= _.map(r,function(v){return v.value})

                $l(r.sort({dt:1}))

                p.j(r)


            })
    })




   // $a.g('/wap/profile/:u', function(q,p,n){ p.j(q.params.u)  })



    $a.g('/profile/:u?',

        function(q,p,n){$l(q.params)

            p.j(q.params.u)


        })



    gU('/gMsg',function(q,p,n){

        var o = {};
        o.map = function(){
            emit(this.fr, {
                m:this.m, dt:this.dt})}


        o.reduce = function(k,vals){


            var d
            vals.forEach(function(v){


                if(!d){d={dt: v.dt,  m: v.m, fr:k }  }

               else if(v.dt> d.dt){ d={  dt: v.dt,  m: v.m, fr:k } } })

             return d  }



        $m.msg.mapReduce(o,


            function(z,r){$l(r)
                r=_.map(r,function(v){return v.value})
                $l(r)
                p.j(r)



            })
    })









    gU('/gMsgF',function(q,p,n){

        $m.msg.find({to:q.u,
            fr:q.q.u}, pjd(p))})



    gU('/gMsgW',function(q,p,n){

        $m.msg.find(
            {$or : [
                {to:q.u,fr:q.q.u},
                {to:q.q.u,fr:q.u}]},
            pjd(p))
    })




    gU('/gMsgSx',function(q,p,n){

        $l('gMsgS')

       // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))


      $m.msg.find(

          {fr:q.u},
          pjd(p)
      )

    })






    gU('/bk',function(q,p,n){rec('post',qu(q),p)})
    pU('/nBk', function(q,p,n){cre('status',{u:q.u,t:q.b.t,c:q.b.c},p)})

    pU('/itm',function(q,p,n){f1('tpc',{t:q.b.t},function(z,d){
        d.i.push({t:q.b.c,s:0}); d.save(pjd(p))})})



    pU('/srt', function(q,p,n){cre('srt',{u:q.u,t:q.b.c},p)})


    gU('/srt',function(q,p,n){fi('srt',{u:q.u},p)})





    $a.g('/ball',function(q,p){p.j(ball)})



    $a.p('/ball',function(q,p){
        l(q.b)
        ball.x=$N(q.b.x)
        ball.y=$N(q.b.y)
        p.j(ball)})


    $a.g('/gz',function(q,p){p.j(gz)})








}


