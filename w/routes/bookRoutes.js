module.exports=function(){$a=a;a.p=a.post;a.g= a.get;




    $a.g('/ts',function(q,p,n){

        p.j([

            {t:'sss',iD:false},
            {t:'sfs',iD:true},
            {t:'ssass',iD:false},
        ])

    })




    $a.p('/newBook',$w.u,function(q,p,n){$l(bk={name:q.b.n,author:q.I})
        Book.create(bk,
            function(z,b){
                $l(z)
                p.j(b)})})



    $a.p('/delBook',
        $w.u,function(q,p,n){

                $l(q.b)

        Book.findByIdAndRemove(q.b.b,
            function(z,b){

                p.j(b)

        })

    })


    $a.p('/delChapter',
        $w.u,function(q,p,n){

            $l(q.b)

            Chapter.findByIdAndRemove(q.b.c,
                function(z,c){

                    p.j(c)

                })

        })


    $a.g('/books',$w.u,function(q,p,n){
             Book.find({author: q.I})
                 .populate('author').execFind(
                 function(z,bs){p.j(bs)})})

    $a.p('/newChapter',$w.u,function(q,p,n){
        $l(ch={title:q.b.t,book:q.b.b})
        Chapter.create(ch,function(z,c){p.j(c)})})



    $a.g('/chapters',$w.u,function(q,p,n){
        Chapter.find({book:q.q.b},
            function(z,ch){p.j(ch)})})



    $a.p('/newPage',$w.u,function(q,p,n){
        $l(pg={
            name:q.b.n, chapter:q.b.c
        })

        Page.create(pg,
            function(z,c){p.j(c)}
        )})



    $a.g('/pages',$w.u,function(q,p,n){
        Page.find({chapter:q.q.c},
            function(z,ch){p.j(ch)})})

    mUrl='mongodb://127.0.0.1:27017/test'

    MC=q('mongodb').MongoClient

    $a.post('/newObj', $w.u, function(q,p,n){

        var o={

            t:q.b.t,
            u:q.u,
            c:'',
            i:[]
        }


        $l(o)



        MC.connect(mUrl,
            function(z,db){if(z)throw z

                 var cl=db.collection('objs')

                 cl.insert(o,function(){})
                // {name:'rigo', game:'shmigo'},
                // {name:'jason',   game:'shmason',  kids:[{s:0},{s:1}]   },
                // cl.remove({},
                // function(z,d){
                //  cl.count(function(z,c){l('count: '+c)})
                // cl.find({  name:'jason'  })
                    // cl.update({name:'jason'}, {$set: {a:{name:'ya',game:'na'}}},function(z,r){
                   // .toArray(function(z,r){  l(r); db.close()  })
            // })
         })

    })



    $a.get('/objs',
        $w.u,function(q,p,n){




        MC.connect(mUrl,
            function(z,db){if(z)throw z

                var cl=db.collection('objs')

                cl.find({u:u}).toArray(function(z,r){
                    l(r);
                    p.j(r)
                    db.close()  })
                // })
            })

    })




    $a.p('/messages', function(q,p,n){

        var topic=q.body.topic
        console.log(topic)

        var message=q.body.message
        console.log(message)

        $m['Message'].create(
            {topic:topic, message:message},
            function(err, message){

                p.j(message)})

    })



    $a.g('/messages', function(q,p,n){

        var topic=  q.params['topic']
        console.log(
            topic
        )


        $m['Message'].find({},

            function(err, messages){

                if(err){console.log(err)}
                console.log(messages.length)

                p.j(messages)
            })

    })


    $a.g('/topics/:topic', function(q,p,n){

        var topic=  q.params['topic']
        console.log(
          topic
        )


        $m['Message'].find({topic:topic},

            function(err, messages){

                if(err){console.log(err)}
                console.log(messages.length)

                p.j(messages)
            })

    })






}


