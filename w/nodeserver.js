
 var http=require('http')

 var filesystem=require('fs')

 var contacts=[
     {id:'1',firstName:'afsd','lastName':'afsd',
         email:'asfd',phoneNumber:'322'},
     {id:'2',firstName:'bfsd','lastName':'bfsd',
         email:'basfd',phoneNumber:'b322'}
 ]

 http.createServer(function(req,res){

     console.log(req.method + ' ' + req.url)


 }).listen(8080)