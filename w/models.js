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

    ashSM = mongoose.Schema({

        v:String,    //?

        ch:[{}]  //children

    }),


    sort = mongoose.Schema({

        name:String,
        title:String,

        content:{type:Object, default:{}}

    }),


    term=mongoose.Schema({

        term:String,
        meaning:String,

        stamp:{type:Date, default:Date.now}

    }),

    page = mongoose.Schema({

        name: String,

        sections:[{

            header: String,

            content: String

        }]

    }),

    chapter=mongoose.Schema({

        name: String,  //name

        pages:[{   //pages

            header:String,  //header

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

         user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},
         //user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required:true},

         date: {type:Date, default: Date.now},

         modified: Date,

         size: Number,

         name: String,

         ext: String

     },


     img:{

         u:String,  username:String,

         date:Date,

         d:String,  data:String,

         name:String,

         dats:[Number], physicsData:[Number]

     },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    thing:{   name: String,  age: Number   },


     guy:{n:{type:S, required:true}, m:S,  x:N, y:N}, //map:{n:S, guys:O},

    //book:{u:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:t},t:S,c:[chapter]},


     sort:{ username:{type:S, required:true},   datetime:{type:Date, default:Date.now},
         title:S, items: {type:[{}], default:[]}},


     status:{datetime:{type:Date, default:Date.now},  username:{type:String, required:true},  content:String},


     availability: {content:String},


     post:{

         datetime:{type:Date, default:Date.now},  username:{type:String, required:true},
         title:String, content:String, dataUrl:String
     },


     //message
     msg:{fr:{type:String, required:true}, to:{type:String, required:true}, dt:{type:Date, default:Date.now},  m:S,  c:S},
     message:{
         from:{type:String, required:true},
         to:{type:String, required:true},
         datetime:{type:Date, default:Date.now},
         topic:String,
         content:String
     },


     //buddy request
     buddyRequest:{from:{type:String, required:true},  to:{type:String, required:true}, datetime:{type:Date, default:Date.now}},


     //topic
     topic:{

         topic:String,  //topic
         items:{type:[{}], default:[]}
     },


     Topic:{},

     Message:{

         topic:String,

         message:String,

         score:Number

     },

     Comment:{},




     course:{
         title:String,
         url:String
     }

 }


cL('models:')

var $m= {}

for(var model in MODELS){

    $m[model] =  mongoose.model(

        cL(model),

        mongoose.Schema( MODELS[model] )
    )


}






bookSchema=mongoose.Schema({

    name: String,

    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }

})
chapterSchema=mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    content:S,
    title:S

})
pageSchema=mongoose.Schema({

    chapter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    },  content:S,  name:S

})
sectionSchema=mongoose.Schema({page:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Page'
},content:String,heading:String})




Book=mongoose.model('Book', bookSchema)
Chapter=mongoose.model('Chapter', chapterSchema)
Page=mongoose.model('Page', pageSchema)
Section=mongoose.model('Section', sectionSchema)


Profile = mongoose.model('Profile',
    mongoose.Schema({

        username:String,
    about:String,
    lookFor:String
}))




module.exports = $m



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

            realName:{type:String},

            age:{type:Number},

            sex:{},

            desc:{type:String},

            fun:{type:[String]}

        },
        default:{rlN:'lulu',age:100,
            sex:'M',desc:'silly',fun:[]}},

        user:{type:mongoose.Schema.Types.ObjectId,
            ref:'user',required:true}},

    teachyBook:{
        user:{type:mongoose.Schema.Types.ObjectId,
            ref:'user',required:true},
        title:String,
        pages:[page]
    },


    pets:[{kind:{type:String, required:true},
        name:{type:String,default:'none'},
        age:{type:String,default:'?'}}]






   }