module.exports=function(){

    $a=a;  a.p=a.post;  a.g= a.get;

    //$N=Number

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

        if(!F(f)){f=pjd(f)}


        $m[model].create(o,f)

    }




    //it performs a find on a model, and returs results sorted by 'dt:-1'
    //date time from most recently stamped

    rec=function(model,criteria,func){

        func= F(func)
             ?func
             :function(err,data){

            func.j(data)
        }



        $m[model].find(criteria)
            .sort({dt:-1})
            .execFind(func)

    }


    rec1=function(a,b,f){

        $m[a].findOne(b).sort({dt:-1}).execFind(f)}



    f1=function(m,o,f){

        if(!F(f)){f=pjd(f)}

        $m[m].findOne(o,f)
    }




    fById=function(m,o,f){

        $m[m].findById(o,

            F(f)? f:

                pjd(f)
        )}




    ALL=function(r,m){

        $a.g(r, function(req, res){

            all(m, res)    })
    }





    rmById=function(m,i,f){

        if(O(i)){i= i._id}

        if(!F(f)){f=pjd(f)}

        $m[m].findByIdAndRemove(

            i,

            f
        )
    }






    remove=function(m,o,f){
        $m[m].remove(o,f)}





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






        $m['user'].create(req.b, function(err,u){ if(err){

                $l(err.code==11000?'!!':'!'); $d(err)
                res.j('error'); next(err)}

            else {

                //set session u=u.u (user name= user.username)
                req.s.u=u.u

                //set session li=true (loggedIn=true)
                req.s.li=true

                //save session and send back a json obj of username -so a string? huh?
                req.s.save(function(){
                    res.j(u.u)})
            }



        })

    })


    //get all users //sends user list
    //delete user
    $a.post('/rmU', function(req, res, next){


            //remove( 'user', req.b,  pjd(res) )

        $m['user'].remove(req.b, pjd(res))

    })
    //create(post new) user
    //trims it down so you only get the username, mugId, and userId

    $a.get('/gU', function(req, res, next){

        $m['user'].find(

            function(err, user){

                if(user){
                    res.j(_.map(user, function(user){

                return {

                    u:user.u,  m:user.m,   i:user.i

                }

            }))}})


    })


    ALL('/users', 'user')




    //login


    $a.post('/li',

        function(req,res,next){


        $m['user'].findOne(

            {

                u : req.body.u ,

                p : req.body.p

            },


            function(err, user){

                if(err){next(err)}

                if(!user){

                    res.j('guest')
                }

                else {

                    req.session.username = req.session.u = user.u

                    req.session.loggedIn = req.session.li = true

                    req.session.save(function(){

                        res.json(user.u)//username

                    })}

            })



        })





    //logout (a command)
    $a.get('/lo', $w.u, function(req,res){

        req.s.u=null

        req.s.li=false

        req.s.save(function(){

            res.j('false')

        })})
    //is logged in?

    $a.get('/loggedIn', $w.u, function(req, res){
        res.j(req.u)
    })


    ////
    ////
    ////IMAGE FILES and CUTOUTS
    //upload photo (png?)
//upload pic

    $a.post('/upl', $w.u,  function(req,res,next){

            if(req.f.png){req.f.i=req.f.png}


            var imgFile=req.f.i,

                op=imgFile.path


           $m['pic'].create(

               {
                   u:req.I,
                   n:imgFile.name,
                   s:imgFile.size,
                   m:imgFile.lastModifiedDate,
                   e:pt.e(imgFile.path)||'.png'
               },

               function(err, img){

                   img.p = path.resolve(

                       imgFile.path,

                       '../../p/',

                       img._id.toString()

                   )

                       + img.e  //$d(i.p)


                   fs.readFile(imgFile.path,  function(err, file){

                       fs.writeFile(

                           img.p,

                           file,

                           function(err){
                               img.save(
                                   function(err){

                       if(err){next(err)}
                       else {res.d('back')}

                   }



                               )})})}

           )



        })




    //remove a pic
    $a.post('/rmP', function(req,res){

        $m['pic'].remove(req.b, function(err, data){
            res.j(data)
        })

    })





    //get all pics(files) (everyone's)
    $a.get('/pix', function(req, res){  // all('pic', res)

        $m['pic'].find(

            function(err, data){

                res.json(data)

            })

    })






    //find all User's pics
    $a.get('/mypix', $w.u, function(req,res){


        $m['pic'].find(

            { u: req.I },

            function(err, data){
                res.j(data)
            })

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

            fById('img',  $l(req.U.m),

                function(err, data){
                    $l(data)

                    if(O(data)){
                        res.j(data.d)
                    }})

        })

    //change a user's mug (dataUrl id)
    //make this an oid?



    $a.post('/chMg', $w.u, function(req,res){

        req.U.m = req.b.m

        req.U.save(

            pjd(res,'m')

        )})   //function(z,u){   p.j(u.m)  } //update/change which pic/img is their designated mug pic/img
    //


    //get a sp. user's mug data-Url
    $a.post('/mug', function(req, res){

        f1('user',   req.b,

                function(err, u){  //$l(u)

                    fById('img',  u.m,  pjd(res, 'd'))

                })})



                //function(z,d){  p.j(d.d) }//get a user's durl by a username id

////////////////
    //////
    ////
    ///














}


