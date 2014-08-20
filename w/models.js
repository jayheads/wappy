var S=String, N=Number, O=Object, D=Date, t=true,


    oid = mongoose.Schema.Types.ObjectId,



    OID=function(ref){

        var g=G(arguments),

        o={
            type:oid,
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

        u:{type:S, required:true},   //username
        p:S,    //password
        pf:O,   //profile

        m:{     //mug

            type:S,

            default:'/me.png'
        },

        buds:[S]  // array of usernames?

    },




     pic:{

         u:{
             type:oid,
             ref:'user',
             required:true
         },

         m:D,

         d:{type:Date, default:Date.now},

         s:N,

         n:S,

         o:S,

         e:S, //ext?

         p:S
     },




     img:{u:S, m:D, d:S, n:S, dats:[N]},

     guy:{n:{type:S, required:true}, m:S,  x:N, y:N}, //map:{n:S, guys:O},

    //book:{u:{type:oid,ref:'user',required:t},t:S,c:[chapter]},


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
        type:oid,
        ref:'user'
    }

})



//chapter schema
chapterSch=mongoose.s({
    book:{
        type:oid,
        ref:'Book'
    },
    content:S,
    title:S

})





//page schema
pageSch=mongoose.s({

    chapter:{
        type:oid,
        ref:'Chapter'
    },  content:S,  name:S

})




sectionSch=mongoose.s({page:{
    type:oid,
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


        u:{type:oid,
            ref:'user',required:t}},

    teachyBook:{
        u:{type:oid,ref:'user',required:t},
        t:S,p:[page]},


    pets:[{k:{type:String, required:true},
        n:{type:S,default:'none'},
        age:{type:S,default:'?'}}]






   }