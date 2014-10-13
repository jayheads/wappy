module.exports=function() { $a = a




    $a.get('/avail', function(req, res){  $m.avail.find(function(err, avails){  res.j(  $l(avails)   )   })  })


    $a.post('/avail', function(q,p,n){    l('pposting..');l(q.b)


        $m.avail.create({c: q.b.c},   function(z,course){  if(z){l(z)} else {p.j(course)}   })})


    $a.put('/avail/:id', function(q,p,n){

        l(q.params)
        l(q.b)

        $m.avail.findByIdAndUpdate(

            q.params.id,

            {c: q.b.c},

            function (z, avail) {if(z){l(z)} else {p.j(avail)}}
        )

    })

    $a.del('/avail/:id', function(q,p,n) {l(q.params)
        $m.avail.findByIdAndRemove(q.params.id,
            function (z, avail) {if(z){l(z)} else {p.j(avail)}})})

    $a.put('/sts/:id', function(q,p,n){

        l('q.b: ')
        l(q.b)

        $m.sts.findByIdAndUpdate(q.b.id,

            {c:q.b.c},

            function(){  l('puuuuuuuut id'+ q.b.id)   })


    })

    $a.put('/sts',  function(q,p,n){  l('puuuuuuuut')  })

    $a.delete('/sts',  function(q,p,n){   l('deeeeel')  })

    $a.put('/api/products/:id', function ( q, p) {

        return ProductModel.findById(q.params.id,

            function(z, prod){

                prod.title =  q.b.title

                prod.description =  q.b.description

                prod.style =  q.b.style

                prod.images =  q.b.images

                prod.categories =  q.b.categories

                prod.catalogs =  q.b.catalogs

                prod.variants =  q.b.variants

                return prod.save(function(z){
                    if(!z){l("updated")}else{l(z)}
                    return p.send(prod)})

            })
    })






}