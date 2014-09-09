cl=function(db,b){var c=db.collection(b)
    c.f=function(a){var f=c.find(a)
        f.ta=f.toArray
        return f}
    c.fta=function(a,f){if(F(a)){f=a;a={}}
        return c.f(a).ta(f)}
    c.i=c.insert
    c.r=c.remove
    c.u=c.update
    c.c=c.count
    c.X=function(){db.close}
    return c}

require('mongodb').MongoClient.connect(MURL='mongodb://127.0.0.1:27017/test',

     function(z,db){if(z){throw z}

        var c=cl(db,'obs')

         c.fta(//   {n:'jason'},

             function(z,r){$l(r);c.X()})})


 
dbInsert=function(){var c=cl(db,'obs')
       c.i({n:'rigo', g:'shmigo'}, {n:'jason',g:'shmason',
               kids:[{s:0},{s:1}]},
           function(z,d){
               c.c(function(z,c){l('count: '+c)})
               c.fta({n:'jason'},function(z,r){l(r);c.X()})})}



dbRemove=function(){var c=cl(db,'obs')
    c.r({},function(z,d){
            c.c(function(z,c){l('count: '+c)})
            c.fta({n:'jason'},
                function(z,r){l(r);c.X()})})}

dbUpdate=function(){var c=cl(db,'obs')
    c.u({n:'jason'},  {$set: {a:{n:'ya',g:'na'}}},
        function(z,d){
            c.c(function(z,c){l('count: '+c)})
            c.fta({n:'jason'  },function(z,r){
                l(r); c.X()})})}