$l('~mw~')

Midware =  W = function(q,p,n){

    p.l  = p.locals
    p.r  = p.render

    p.s  = p.send
    p.j= p.json

    p.d  = p.redirect


    q.b  = q.body
    //q.f  = q.files
    q.n  = q.flash
    q.s  = q.session
    q.q= q.query
    q.p= function(a){return q.params[a]}

    q.pm= q.params
    q.p= q.params


    //checks session to see if user is logged in
    p.locals.loggedIn = p.locals.li=  q.li=   (q.session.u)? true: false

    n()


}



Midware.user =  W.u = function(req, res, next){

    if(req.li){

        models.user.findOne({ u: req.session.u },

            function(err, user){

                if(err){next(err)}

                if(user){


                    res.locals.user = res.locals.U = req.U = req.user= user

                    res.locals.username = res.locals.u = req.u = req.username = user.u

                    res.locals.userId = res.locals.I = req.I = req.userId = user._id

                }

                next()

            })}




    else {res.json('guest'); return}
}

 //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;           //$m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})//if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}



Midware.Pics =    W.P = function(req, res, next){


    $m.pic.find(


        {u: req.I},


        function(err, pics){

            var array =[]

            _.each(

                pics,

                function(pic){

                    array.push(

                            _S(pic._id)  +  pic.e

                    )  // $l(    )


                })


            res.l.I = array

            next()

        })

}
Midware.pic =     W.p =  function(req,res,next){

    models.pic.findById(

        req.params.p,


        function(err,i){



            if(err){next(err)}



            res.locals.i =  '/'+i._id


            req.i=i


            next()

    })


}


Midware.Books =   W.B =function(q,p,n){
    $m.book.find({u:q.I},
        function(x,B){
            if(x){n(x)};
            if(!B){'-B'}
            p.l.B=B
            n()})}


Midware.book =    W.b =function(q,p,n){



     models.book.findOne({
             u:q.I, t:q.p.t
         },


         function(err,book){if(err){n(err)}

             p.locals.b=book

             if(q.params.n){

                 var c = p.locals.n = book.c[n] }

             if(q.params.h){p.locals.h = c[n][h]}  //$l('p.l');$d(p.l)

             n()

         })}



module.exports = Midware



