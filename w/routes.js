module.exports=function(){

    $a=a;  a.p=a.post;  a.g= a.get;

    $N=Number

    //  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
   // pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
        //qU=qu= function(q){  return {u: q.u} }
 //   qqU=function(q){return {u: q.q.u}}
 //   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
    //pjd0=function(res){return function(err, data){res.json(data[0])}}
    //quc=function(q){return {u: q.u, c: q.b.c }}


    jD=pjd=function(res, str){

        return function(err, data){

            S(str)? res.json(data[str])   : res.json(data)
        }

    }
    find=function(m,o,f){

        if( !F(f) ){ f=pjd(f) }

        $m[m].find(o, f)
    }
    all=function(m,f){

        if(!F(f)){

            f=pjd(f)

        }


        $m[m].find(f)

    }
    create=function(model,req,res){

        $m[model].create(

          {u: req.u,  c: req.b.c},

            function(err, data){res.json(data)}

        )

    }
    createP=function(a){

        $a.post( '/'+a, $w.u,   function(q,p){    create(a,q,p)  })

    }
    cre=function(model, o,  f){

        if(!F(f)){  f=pjd(f)  }


        $m[model].create(o, f)

    }

    //it performs a find on a model, and returs results sorted by 'dt:-1'
    //date time from most recently stamped

    rec=function(model,criteria,func){

        func=F(func)
            ?func
            :function(err,data){res.json(data)}

        $m[model].find(criteria).sort(
            {dt:-1}).execFind(func)

    }

    rec1=function(a,b,f){

        $m[a].findOne(b).sort({dt:-1}).execFind(f)}

    f1=function(m,o,f){
        if(!F(f)){f=pjd(f)}
        $m[m].findOne(o,f)}

    fById=function(m, o, f){
        $m[m].findById(o,

            F(f)? f:

                pjd(f)
        )

    }

    ALL=function(r,m){  $a.g(r, function(q,p,n){ all(m,p)    })}


    rmById=function(m,i,f){
        if(O(i)){i= i._id}
        if(!F(f)){f=pjd(f)}
        $m[m].findByIdAndRemove(i,f)}

    remove=function(m,o,f){

        $m[m].remove(o,f)

    }







    $a.get('/', function(req,res){

        res.render('wap')

    })
    $a.get('/wap', function(req,res){

        res.render('wap')

    })
    $a.get('/wap/:app/:pam?', function(req,res){

        res.render('wap', {

            app:req.params.app,

            pam:req.params.pam

        })})





    $a.post('/nU', function(req,res,next){

        cre('user',

            req.b,

            function(err,u){

                if(err){

                    $l(err.code==11000?'!!':'!'); $d(err)


                    res.j('error'); next(err)

                } else {

                    //set session u=u.u (user name= user.username)
                    req.s.u=u.u

                    //set session li=true (loggedIn=true)
                    req.s.li=true

                    //save session and send back a json obj of username -so a string? huh?
                    req.s.save(function(){res.j(u.u)})
                }



            })
    })
    //get all users //sends user list
    //delete user
    $a.post('/rmU', function(req, res, next){

            remove( 'user', req.b,  pjd(res) )

        })
    //create(post new) user
    //trims it down so you only get the username, mugId, and userId

    $a.get('/gU', function(req, res, next){

       find('user', {}, function(err, user){

           if(user){

            res.j(_.map(user, function(user){

                return {

                    u:user.u,  m:user.m,   i:user.i

                }

            }))}})


    })

    ALL('/users', 'user')

    //login
    $a.p('/li',  function(req,res,next){

        f1('user',

            {
                u:req.b.u,
                p:req.b.p
            },


            function(err, user){

                if(err){next(err)}

                if(!user){res.j('guest')}


                //if user
                else {

                    req.s.u=user.u

                    req.s.li=true;

                    req.s.save(function(){

                        res.j(user.u)

                    })}

            }


        )})
    //logout (a command)
    $a.get('/lo', $w.u, function(req,res){

        req.s.u=null

        req.s.li=false

        req.s.save(function(){

            res.j('false')

        })})
    //is logged in?
    $a.get('/lgd', $w.u, function(req, res){
        res.j(req.u)
    })










    ////
    ////
    ////IMAGE FILES and CUTOUTS
    //upload photo (png?)
    $a.post('/upl', $w.u, function(req,res,next){

            var img=req.f.png? req.f.png: req.f.i


        cre('pic',  {u:req.I,
                n:img.name,
                s:img.size,
                m:img.lastModifiedDate,
                e:pt.e(img.path)||'.png'},  function(err, img){

               //file read
               fs.r(img.path,   function(err, file){

                        //file write
                        fs.w(//path.resolve

                            $d(pt.r(img.path,  '../../p/', img._id.toString())  +  img.e  ),

                            file,

                            function(err){

                                img.save(
                                    function(err){
                                        if(err){next(err)}
                                        else {res.d('back')}
                                    })

                            })

                })

           }

        )})
    //remove a pic
    $a.post('/rmP', function(req,res){

        remove('pic',

            req.b, res)

    }) //files
    //get all pics (everyone's)
    $a.get('/pix', function(req, res){  all('pic', res)  })
    //find all User's pics
    $a.get('/mypix',  $w.u, function(req,res){

     find('pic', {u: req.I}, res)

 })
 ///////////////////
    ////
    //
    //upload a dataUrl!!
    $a.post('/uplI', $w.u, function(req,res,next){

        //if(req.f.png){req.f.i= q.f.png}

        // var i=req.f.i

        cre('img',  {u:req.I, d:req.du},  function(err, img){

            $d(img)

            fs.r(img.path, function(err, file){


                fs.w(

                    $d(pt.r(img.path,'../../p/', img._id.toString())+img.e),

                    file,

                    function(err){

                        img.save(function(err){if(err){next(err)} else {res.d('back')}})

                    })})

        })})
    //newDataUrl but with 'dads' (see CONTACTEVENTS)
    $a.post('/nImg', $w.u,  function(req, res, next){

        cre(

            'img',

            l({u:req.u,   d:req.b.d,  dats: req.b.dats}),

            res



        ) })  //new image
    //remove an image (by id) //cutouts?
    $a.post('/rmI', function(req,res){

        rmById('img', req.b,  res)

    })
    //find all User's images
    $a.get('/img', $w.u,function(req, res){
        find('img', {u: req.u}, res)})
    ////
    ////
    ////MUGS
    //get User's image ID
    // GET MUG ID
    //return user THEIR mug ob (if im) or mugID
    //$a.g('/gMg2',$w.u,function(q,p,n){$m.img.findById(q.U.m, function(m){p.j(m)})})
    $a.get('/gMg',  $w.u,  function(req, res){

        res.j( req.U.m )

    })

    //need to deprecate
    //get a durl from an img-ob id
    $a.post('/dud',   function(req,res,next){

            fById('img', req.b.d, function(err, data){
                    if(O(data)){
                        res.j(data.d)   }  })

        })

    //** get a dataUrl from an img-ob id ++++ physics!
    //can dep by using oid's??

    $a.post('/dats', function(req,res){
        fById('img',  req.b.d, function(err, data){

            if(O(data)){
                res.j(data)
                }
            })
    })
    //get User's ACTUAL IMAGE (data-url) (by id)
    $a.get('/getMug',  $w.u,
        function(req,res,next){
            fById('img',  $l(req.U.m),  function(err, data){$l(data)
                    if(O(data)){res.j(data.d)}})})
    //change a user's mug (dataUrl id)
    //make this an oid?
    $a.post('/chMg', $w.u, function(req,res){

        req.U.m = req.b.m

        req.U.save(

            pjd(res,'m')

        )})   //function(z,u){   p.j(u.m)  } //update/change which pic/img is their designated mug pic/img
    //
    //get a sp. user's mug data-Url
    $a.post('/mug', function(req, res){  f1('user',   req.b,

                function(err, u){  //$l(u)

                    fById('img',  u.m,  pjd(res, 'd'))

                })})

                //function(z,d){  p.j(d.d) }//get a user's durl by a username id


////////////////
    //////
    ////
    ///






    //create new status
    createP('sts')
    //get status
    $a.get('/sts',  $w.u, function(req,res){
        rec('sts', {u: req.u},   res)  })
  //get most recent status
    $a.get('/sts1',  $w.u, function(req, res){//$l(req.q)
        $m.sts.findOne({u:req.q.u})
            .sort({dt:-1})
            .execFind(
            function(err,data){
                if(A(data)){
                    res.j(data[0])
                }

            })})




    //create new post
    $a.post('/pst', $w.u, function(q,p,n){

        cre(

            'pst',

            {  u:q.u,  t:q.b.t,  c:q.b.c,  du:q.b.du  },

            p
        )


    })
    //get posts
    $a.get('/psts',   $w.u,  function(req,res){

            rec('pst', {}, res)

        })
    $a.get('/pst', $w.u,  function(req,res){

            rec('pst',  {u: req.u},  res  )

        })
    $a.get('/pstu', $w.u, function(req,res){ //$l(req.q)
        rec('pst', {u: req.q.u}, res)
    })
    $a.get('/pstt', $w.u,function(req,res){ //$l(req.q)
            rec('pst', {t:req.q.t},  res)})










// $a.g('/wap/profile/:u', function(q,p,n){ p.j(q.params.u)  })
    $a.get('/profile/:u?', function(q,p,n){$l(q.params)

        p.j(q.params.u)})
    $a.post('/uPf', $w.u, function(q,p,n){
        q.U.pf=q.b;
        q.U.save( pjd(p) )})
    $a.post('/gPf',  $w.u, function(q,p,n){ $l(q.b)

        f1('user',

            {u:q.b.u},

            function(z,u){
                $l(u)
                ////******

                if(u.pf){u.pf.u=u.u}

                p.j(u.pf)

            })})







    $a.post('/sRq', $w.u, function(q,p,n){

        cre('req', {to:q.b.to,  fr:q.u}, p)

    })
    $a.post('/yRq',$w.u,function(q,p,n){(q.U.buds=q.U.buds||[]).push(q.b.u)
        f1('user',{u:q.b.u},function(z,u){(u.buds||[]).push(q.u)
            u.save()})

        q.U.save()})
    $a.get('/gRq',$w.u,function(q,p,n){find('req',{to:q.u},p)})


    $a.get('/buds',$w.u,function(req,res,next){all('user', function(err, u){

            res.j(_.filter(u, function(u){

                return _.contains(req.U.buds, u.u)}))

        })})
    $a.post('/buds',$w.u,function(req,res){

        $m.user.findOne(req.b,

            function(err, uu){

                $l(uu.u)

                all('user',  function(err, u){

                    res.j(_.filter(u, function(u){

                        return _.contains(  uu.buds,   u.u    )}))

                })

            })




    })






    $a.post('/sMsg',$w.u,function(q,p,n){cre('msg',{m: q.b.m,to: q.b.to,fr: q.u},p)})
    $a.get('/MsgS',$w.u,function(q,p,n){

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
    $a.get('/gMsg',$w.u, function(q,p,n){

        var o = {};
        o.map = function(){
            emit(this.fr, {
                m:this.m, dt:this.dt
            })}

        o.reduce = function(k, vals){

            var d

            vals.forEach(function(v){


                if(!d){d={dt: v.dt,  m: v.m, fr:k }  }

                else if(v.dt> d.dt){ d={  dt: v.dt,  m: v.m, fr:k } } })

            return d  }


        $m.msg.mapReduce(o,


            function(err, r){

                $l(r)
                r=_.map(r, function(val){return val.value})

                $l(r)

                p.j(r)



            })
    })
    // get mail FROM User, TO a sp. user
    $a.get('/gMsgF',$w.u,function(req,res,next){

        $m.msg.find({

            to:req.u,

            fr:req.q.u

        }, pjd(res))})
    //get all mail TO ===or==== FROM user
    $a.get('/gMsgW',  $w.u,  function(req, res){

        $m.msg.find(

            {$or : [ {to:req.u,  fr:req.q.u}, {to:req.q.u, fr:req.u} ]},

            pjd(res))
    })
    //get all mail sent FROM User
    $a.get('/gMsgSx', $w.u, function(req,res,next){  $l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))

        $m.msg.find( {fr:req.u},  pjd(res) )

    })






    //create new topic
    $a.post( '/tpc',    $w.u,   function(req, res){

        cre('tpc', {

                u:req.u, t:req.b.c

            },


            res) })
    //get all topics
    ALL('/tpc', 'tpc')
    //get topic 1 ? by t?
    $a.get('/tpc1', function(req, res){f1('tpc',    {t: req.q.t},    res   )})
    //post vote
    $a.post('/vte', $w.u, function(req,res){

        f1('tpc', {t:req.b.t},


            function(err, t){   // if(q.b.dr=='u'){



                //  var ti = _.map(t.i, function(i){
                //      if(O(i) && i.t==q.b.i){
                //          if(q.b.dr=='u'){i.s=i.s+1}
                //          if(q.b.dr=='d'){i.s=i.s-1}}
                //     return i})


                var ti = _.map(t.i,

                    function(i){

                        if(O(i) && i.t==req.b.i){

                            if(req.b.dr=='u'){i.s=i.s+1}

                            if(req.b.dr=='d'){i.s=i.s-1}}

                        return i
                    })

                t.i=[]

                t.i= ti;


                t.save(

                    function(err,data){


                        $l('error ob:');  $l(err)

                        $l('suc ob:');  $l(data)

                        res.j(data)

                    }


                )


            })


    })

    //get book
    $a.get('/bk', $w.u, function(req,res,next){
        rec('post', {u: req.u}, res)
    })
    //post new book
    $a.post('/nBk', $w.u,function(req,res,next){

        cre('status',{u:req.u,  t:req.b.t,  c:req.b.c},

            res)})

    //post a user's item
    $a.post('/itm',$w.u,function(req,res,next){
        f1('tpc',{t:req.b.t},function(z,d){
        d.i.push({t:req.b.c,s:0});
        d.save(pjd(res))})})

    //post a user's sort  //should refernce a parent sort?!  :)
    $a.post('/srt',$w.u, function(req,res){
        cre('srt', {u:req.u, t:req.b.c},  res)  })
    //get a user's sort!
    $a.get('/srt',  $w.u,  function(req,res){

        find('srt', {u:req.u}, res)})













    $a.get('/ball', function(req, res){ res.j(ball) })
    $a.post('/ball',function(q,p){
        l(q.b)
        ball.x=$N(q.b.x)
        ball.y=$N(q.b.y)
        p.j(ball)})
    $a.get('/gz',function(req,res){

            res.j(gz)

        })



    $a.get('/wap/workerFile', function(req,res){

        res.send('/workerFile.js')

    })








}


