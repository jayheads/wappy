var S=String, N=Number, O=Object, D=Date, t=true,

    oid=$g.s.Types.ObjectId,
    OID=function(r){var g=G(arguments),
        o={type:oid,ref:r}
        if(g.p){o.required=t}
        return o},

    OBD={type:O,default:{}},
    ARD={type:[{}],default:[]},
    DATE={type:Date,default:Date.now},
    ND={type:N,default:0},
    SQ={type:S,required:t},


    ashSM=$g.s({
        v:S,
        ch:[{}]}),

    sort=$g.s({
        n:S,
        t:S,
        ct:OBD}),


    term=$g.s({

        t:S,
        meaning:S,
        st:DATE
    }),


    page=$g.s({
        n:S,
        s:[{ h:S, ct:S  }]}),


    chapter=$g.s({

        n:S,
        p:[{h:S,v:S}]

    })//default:{s:[{h:'sec1',v:'myS'}]}




 MODELS={

    user:{u:SQ,p:S,pf:O,
        m:{type:S,default:'/me.png'},
        buds:[S]},
    pic:{u:OID('user','+'),m:D, d:DATE, s:N, n:S, o:S, e:S, p:S},
    img:{u:S, m:D, d:S, n:S},
    guy:{n:SQ, m:S,  x:N, y:N}, //map:{n:S, guys:O},
    //book:{u:{type:oid,ref:'user',required:t},t:S,c:[chapter]},
    srt:{ u:SQ,   dt:DATE,  t:S, i: ARD},
    sts:{dt:DATE,  u:SQ,  c:S},
    pst:{dt:DATE,  u:SQ,  t:S, c:S, du:S},
    msg:{fr:SQ, to:SQ, dt:DATE,  m:S,  c:S},
    req:{fr:SQ,  to:SQ, dt:DATE},
    tpc:{t:S,i:ARD}}


cL('models:')

var $m={}
for(var m in MODELS){$m[m]=$g.m(cL(m),$g.s(MODELS[m]))}







bookSch=$g.s({
    name:S,
    author:OID('user')

})

chapterSch=$g.s({
    book:OID('Book'),
    content:S,
    title:S})

pageSch=$g.s({
    chapter:OID('Chapter'),
    content:S,name:S})


sectionSch=$g.s({page:OID('Page'),content:S,heading:S})




Book=$g.m('Book',bookSch)
Chapter=$g.m('Chapter',chapterSch)
Page=$g.m('Page',pageSch)
Section=$g.m('Section',sectionSch)








module.exports=$m



old={ sorty:{type:O,default:{}},
    term:[term],

    topic:{n:SQ,
        vws:ND,
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






    pets:[{k:SQ,
        n:{type:S,default:'none'},
        age:{type:S,default:'?'}}]






   }