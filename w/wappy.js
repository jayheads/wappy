q=require
_=q('./us')

_e=_.e=_.each

F= _.isFunction
S=_.isString
U=_.isUndefined
D=function(a,b){return !U(a)}
A=_.isArray
O=_.isObject

_l=_.last
_f=_.first
_r=_.rest
_i=_.initial


G=function(a){
    if(!_.isArguments(a)){return}
    var p, n, m,d
    a=_.toArray(a)

    if(_l(a)==='+'){p=a.pop()}
    if(_l(a)==='-'){n=a.pop()}
    if(_l(a)==='*'){m=a.pop()}
    if(_l(a)==='/'){d=a.pop()}

    return D(a,{
        z: a.length,
        f: _f(a),l: _l(a),r: _r(a),i: _i(a),
        p:p,P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n


    })}

cL=function(a){console.log(a);return a}
cD=function(a){console.dir(a);return a}
$l=function(a,b){if(!b){return cL(a)} cL('{'+a+':'+b+'}');return b}
$d=function(a,b){if(!b){return cD(a)} cL(a);return cD(b)}

l=function(a,b){
    var l=function(a){cL(a);return a}
    if(b){l('{'+a+':'+b+'}');return b}
    return l(a)}

_S=function(a){return a.toString()}

smile=function(){l(':) 8080')}



ls=function(a,b,c){
    return c?
        a.listen(b,c)
       :a.listen(b)}


s=function s(kO,v){
    if(O(kO)){
        _e(kO,function(v,k){

            s(k,v)})
    return}
    a.set(kO,v)}


g=function g(u,f){return f?a.get(u,f):a.get(u)}


po=function(a){return a.post(a)}


u=function u(i){
    if(A(i)){
        _e(i,u)}
    a.use(i)}





l('------- wappy --------')



gz={health:100, x:5000,  y:5000}



$g = db = d =  q('mongoose')


$g.s=$g.Schema
$g.m=$g.model
$g.c=$g.connect

$m=q('./models')

//$t=q('./task')


$g.c("mongodb://localhost/brain",smile)


q('./mong')








ht=h=q('http')

ht.s=ht.createServer

pt=p=q('path')
pt.b=pt.basename
pt.j=pt.join
pt.e=pt.extname
pt.r=pt.resolve


fs=f=q('fs')
fs.rds=fs.readdirSync
fs.r=fs.rf=fs.readFile
fs.w=fs.wf=fs.writeFile
fs.ul=fs.unlink
fs.rn=fs.rename


e=q('express')
e.eh=e.errorHandler
e.l=e.logger
e.cp=e.cookieParser
e.bp=e.bodyParser
e.s=e.session
e.f=e.favicon
e.st=e.static

st=new(q('connect-mongo')(e))({db:'brain'})


a=e()
a.l=a.locals
a.r=a.router

$w=w=q('./MW')

s({'port'        :process.env.PORT||4000,
   'view engine' :'jade',
   'views'       :__dirname+'/../v/'})

u(e.l('dev'))

if(g('env')=="development"){u(e.eh())}

cp=e.cp('xyz')

u([e.bp({keepExtensions:true,
   uploadDir:__dirname+"/p/u"}),
   cp,e.s({store:st,secret:'xyz'}),
   q('connect-flash')(),e.f(),w])

g('/w/:p',function(q,p,n){p.r('p/'+q.p('p'))})

//_e(['r/ACCOUNTS','r/worky'],
// function(a){q('./../'+a)()})


q('./routes')()
q('./bookRoutes')()
q('./restRoutes')()




u(a.r)



_e([

    '/p/d',// css, fonts, js (bs, cjs, jq, string, us)
    '/p/d/css', //css
    'p/d/js', //js
    '/p/p',  //user pics
    '/p/g', //graphics
    '/p/u',
    '/../j', //front-end js
    '/../j/create',
    '/../j/app',
    '/../j/apps',
    '/../j/lib',
    '/../j/base',
    '/../j/phaserjs',
    '/../j/phaser2',
    '/../j/melon',
    '/../j/mvc',
    '/../j/three',
    '/../j/box2d',
    '/../j/beta',
    '/../j/g'

],function(a){

    u(e.st(p.j(__dirname, a)))

})



SV=h.s(a)

ls(SV,8080,smile)


ball={x:100,y:100}

io=ls(q('socket.io'),SV);io.set('log level',1)
sio=q('session.socket.io')

q('./sockets')(io,new sio(io,st,cp))








//setManifest=function(){MF=[]

//mfO=function(p){return "{src:'/" + pB(p)  + "', id:'"  + pB(p).split('.')[0] + "'}"}
//_e(fDS("./p/g"), function(p){MF.push(mfO(p))})

//$a.l.mf = "["+MF.join()+"]"}

//setManifest()

