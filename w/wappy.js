_ = require('./us')
F = _.isFunction
S = _.isString
U = _.isUndefined
D = function(a,b){return !U(a)}
A = _.isArray
O = _.isObject
G = function(a){
    if(!_.isArguments(a)){return}
    var p, n, m,d
    a=_.toArray(a)

    if(_.last(a)==='+'){p=a.pop()}
    if(_.last(a)==='-'){n=a.pop()}
    if(_.last(a)==='*'){m=a.pop()}
    if(_.last(a)==='/'){d=a.pop()}

    return D(a,{
        z: a.length,
        f: _.first(a),l: _.last(a),
        r: _.rest(a),i: _.initial(a),
        p:p,
        P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n

    })
}
$l = function(a,b){cL=function(a){console.log(a);return a}
    if(!b){return cL(a)} cL('{'+a+':'+b+'}');return b}
$d = function(a,b){cD=function(a){console.dir(a);return a}
    if(!b){return cD(a)} cL(a);return cD(b)}
$l('------- wappy --------')
http = require('http')
path = require('path')
fs = require('fs')


mongoose  =   require('mongoose')
models = $m = require('./models')
mongoose.connect("mongodb://localhost/brain", function(){ $l('mongo connected') })
require('./mong')

express = require('express')
mongoStore = new(require('connect-mongo')(express))({db:'brain'})

a = express()

$l('env: ' + a.get('env'))

a.l = a.locals

a.r = a.router

middleware   = $w = w =  require('./MW')

a.set('port', process.env.PORT||4000)

a.set('view engine' ,'jade')

console.log('dirname: '+ __dirname)

a.set('views' , __dirname + '/../views/')

a.use( express.logger('dev') )

if(a.get('env')=="development"){
    a.use(express.errorHandler())}


cookieParser =  express.cookieParser('xyz')



a.use(
    express.bodyParser(
        {
            keepExtensions:true,
            uploadDir:__dirname+"/public/uploads"
        }
    ))


a.use(cookieParser)

a.use(express.session({

    store:mongoStore,

    secret:'xyz'

}))


//a.use(  require('connect-flash')())


a.use(express.favicon())

a.use(middleware)




//render a jade page

a.get(

    '/render/:page',

    function(req, res, next){
        res.render(req.params.page)}
    )




require('../routes/routes')()

require('../routes/social')()

//require('../routes/bookRoutes')()

require('../routes/restRoutes')()

a.use(a.router)

fileDirs = [

    '/public/deps',// css, fonts, js (bs, cjs, jq, string, us)


    '/public/deps/css',

    '/public/deps/js',

    '/public/pics',
    '/public/graphics',
    '/public/uploads',


    //front-end js
    '/../js',
    '/../js/create',
    '/../js/app',
    '/../js/apps',
    '/../js/lib',
    '/../js/base',
    '/../js/phaserjs',
    '/../js/phaser2',
    '/../js/melon',
    '/../js/mvc',
    '/../js/three',
    '/../js/box2d',
    '/../js/beta',
    '/../js/g'

]

$l('dirname: '+__dirname)

_.each(fileDirs, function(dir){

   a.use(
       express.static(
           path.join(__dirname, dir)
       ))

})


httpServer = http.createServer(a)


$l('host: '+ a.get('env'))


httpServer.listen(80, function(){$l('server listening on port 80')} )


io =  require('socket.io').listen(httpServer)

io.set('log level', 1)

sio = require('session.socket.io')


require('./sockets')(
    io,
    new sio(io,mongoStore,cookieParser)
)



