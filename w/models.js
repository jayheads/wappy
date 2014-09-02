var S=String, N=Number, O=Object, D=Date, t=true,


    oid = mongoose.Schema.Types.ObjectId,



    OID=function(ref){

        var g=G(arguments),

        o={
            type:mongoose.Schema.Types.ObjectId,
            ref:ref
        }

        if(g.p){ o.required=true}

        return o},



    OBD={type:Object, default:{}},

    ARD={type:[{}], default:[]},

    DATE={type:Date, default:Date.now},

    ND={type:Number, default:0},

    SQ={type:S, required:true},



    //ash schema?

    ashSM=mongoose.s({

        v:String,    //?

        ch:[{}]  //children

    }),


    sort=mongoose.Schema({

        n:String, //name
        t:String,  //title

        ct:{type:Object, default:{}}  //content {type:O,default:{}}

    }),


    term=mongoose.Schema({

        t:String,  //term

        meaning:String,

        st:{type:Date, default:Date.now}  //stamp

    }),




    page = mongoose.Schema({

        n: String,

        s:[{

            h: String, //header

            ct: String  //content

        }]

    }),


    chapter=mongoose.Schema({

        n: String,  //name

        p:[{   //pages

            h:String,  //header
            v:String

        }]

    })

    //default:{s:[{h:'sec1',v:'myS'}]}

 MODELS={

    user:{

        u: {type:String, required:true},     //username: {type:String, required:true},

        p: String, password: String,

        pf: Object, profile: Object,

        m: { type: String, default: '/me.png' },   mug: { type: String, default: '/me.png' },  //mugData.. no mugId
//mugData.. no mugId

        buds: [String]

    },// array of usernames?





     pic:{

         u: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},
         //user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},

         d: {type:Date, default: Date.now},
         date: {type:Date, default: Date.now},

         s: Number, score: Number,

         n: String, name: String,

         e: String, extname: String

     },





     img:{

         u:String,  username:String,

         date:Date,

         d:String,  data:String,

         name:String,

         dats:[Number], physicsData:[Number]

     },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














     guy:{n:{type:S, required:true}, m:S,  x:N, y:N}, //map:{n:S, guys:O},

    //book:{u:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:t},t:S,c:[chapter]},


     //sort
     srt:{ u:{type:S, required:true},   dt:{type:Date, default:Date.now},  t:S, i: {type:[{}], default:[]}},


     //status
     sts:{dt:{type:Date, default:Date.now},  u:{type:String, required:true},  c:S},


     //avail
     avail: {c:S},


     //post
     pst:{dt:{type:Date, default:Date.now},  u:{type:String, required:true},  t:S, c:S, du:S},


     //message
     msg:{fr:{type:String, required:true}, to:{type:String, required:true}, dt:{type:Date, default:Date.now},  m:S,  c:S},


     //buddy request
     req:{fr:{type:String, required:true},  to:{type:String, required:true}, dt:{type:Date, default:Date.now}},


     //topic
     tpc:{

         t:S,  //topic
         i:{type:[{}], default:[]}
     },


     Topic:{},

     Message:{

         topic:String,

         message:String,

         score:Number

     },

     Comment:{},




     course:{title:S, url:S}}


cL('models:')

var $m={}

for(var m in MODELS){

    $m[m] =  mongoose.m(
        cL(m),
        mongoose.s(MODELS[m])
    )


}






//book schema
bookSch=mongoose.s({

    name: String,

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }

})



//chapter schema
chapterSch=mongoose.s({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    content:S,
    title:S

})





//page schema
pageSch=mongoose.s({

    chapter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    },  content:S,  name:S

})




sectionSch=mongoose.s({page:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Page'
},content:S,heading:S})






Book=mongoose.m('Book',bookSch)
Chapter=mongoose.m('Chapter',chapterSch)
Page=mongoose.m('Page',pageSch)
Section=mongoose.m('Section',sectionSch)








module.exports=$m



old={ sorty:{type:O,default:{}},
    term:[term],

    topic:{

        n:{type:String, required:true},
        vws:{type:Number, default:0},
        sc:{type:N,default:0},

        ms:{type:[{vu:{type:S,unique:t},
            vws:{type:N,default:0},sc:{type:N,default:0} ,
            responses:{
                type:[
                    {vu:{
                        type:S,unique:t},vws:{
                type:N,default:0},

                sc:{type:N,default:0}}],
                default:[]}}],default:[]}},


    profile:{
        fields:{type:{
        rN:{type:S},
        age:{type:N},
        sex:{},
        desc:{type:S},
        fun:{type:[S]}},


        default:{rlN:'lulu',age:100,
            sex:'M',desc:'silly',fun:[]}},


        u:{type:mongoose.Schema.Types.ObjectId,
            ref:'user',required:t}},

    teachyBook:{
        u:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:t},
        t:S,p:[page]},


    pets:[{k:{type:String, required:true},
        n:{type:S,default:'none'},
        age:{type:S,default:'?'}}]






   }