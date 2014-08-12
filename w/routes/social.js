module.exports=function(){

    $a=a;  a.p=a.post;  a.g= a.get;





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
    $a.post('/pst', $w.u, function(req, res){

        cre(

            'pst',   {  u:req.u,  t:req.b.t,  c:req.b.c,  du:req.b.du  },

            res
        )


    })



    //get all posts
    $a.get('/psts',  $w.u,  function(req, res){

        rec( 'pst', {}, res )

    })



    //get User posts (by unsername)
    $a.get('/pst', $w.u, function(req, res){

        rec( 'pst',  {u: req.u},  res )

    })







    //User recent post(s?)
    $a.get('/pstu', $w.u, function(req,res){ //$l(req.q)
        rec('pst', {u: req.q.u}, res)
    })



    //rescent post(s?)
    $a.get('/pstt', $w.u,function(req,res){ //$l(req.q)

        rec('pst', {t: req.q.t},  res)

    })





    // $a.g('/wap/profile/:u', function(q,p,n){ p.j(q.params.u)  })
    $a.get('/profile/:u?', function(q,p,n){$l(q.params)

        p.j(q.params.u)})





    $a.post('/uPf', $w.u, function(req, res){

        req.U.pf=req.b

        req.U.save(

            pjd(res)
        )

    })









    //get a sp. user's profile (object)
    $a.post('/gPf',  $w.u, function(req, res){

        $l(req.body)




        f1(

            'user',

            {u:req.body.u},

            function(err, user){ $l(user)
                if(user.pf){ user.pf.u = user.u }
                res.j(user.pf)
            })





    })







    //send request from User to sp. user

    $a.post('/sRq', $w.u, function(req, res){

        $m['req'].create(

            {
                to: req.body.to,

                fr: req.u

            },

            res
        )


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






    $a.post('/sMsg',$w.u,function(req,res){

        cre('msg',{
            m: req.b.m,
            to: req.b.to,
            fr: req.u
        },
            res

        )})



    $a.get('/MsgS',$w.u, function(q,p,n){

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



    $a.get('/gMsg', $w.u, function(req,res,next){

        var o = {}

        o.map = function(){
            emit(this.fr, {

                m:this.m,

                dt:this.dt

            })}


        o.reduce = function(k, vals){ var d

            vals.forEach(function(v){


                if(!d){

                    d={dt: v.dt,  m: v.m, fr:k }  }


                else if(v.dt> d.dt){

                    d={  dt: v.dt,  m: v.m, fr:k }

                } })

            return d  }


        $m.msg.mapReduce(o,

            function(err, r){

                res.j($l(

                    _.map($l(r), function(val){

                        return val.value})

                ))



            })
    })






    // get mail FROM User, TO a sp. user
    $a.get('/gMsgF', $w.u, function(req,res,next){

        $m.msg.find({ to: req.u, fr: req.q.u },

            pjd(res)

        )

    })






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




    ////
    ////
    ///


    $a.get('/ball', function(req, res){ res.j(ball) })


    $a.post('/ball',function(q,p){
        l(q.b)
        ball.x=Number(q.b.x)
        ball.y=Number(q.b.y)
        p.j(ball)})



    $a.get('/gz',function(req,res){

        res.j(gz)

    })



    $a.get('/wap/workerFile', function(req,res){

        res.send('/workerFile.js')

    })








}


