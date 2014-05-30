

RANKY=function(tp){

    format()


    s1(h1('topics!'), ipt('new topic','post', '/tpc') ,
        h4('recent: '))


    qG('/tpc',

        function(t){

            s1(bt(t.t,  function(){  ranky(t)   }),br(2))

        },'+')



}
 ranky=function(t){var dd

    s2.E()

    s2(h1('topic page: '+ t.t),
        bt('live chat',function(){ priv(t.t) }),

        ipt('new item',

            'post','/itm', {t: t.t},function(){


                qG('/tpc1', {t: t.t},function(t){

                    ranky(t)})}, '-'),

        dd=dv())


    _e(t.i,function(i){
        if(O(i)){dd( h1(i.t),
                h4('score: '+i.s),
                bt('up',function(){qP('/vte',{t: t.t,i: i.t,dr:'u'})}),



                bt('down',function(){
                    qP('/vte',{t: t.t, i: i.t,dr:'d'},

                        function(){ranky(t)})}))}})}




OBJECT=function(){

       format()

    s1('your objects',br(2),

        t=tx(),
        bt('new object',function(){

            qP('/newObj',
                {t: t.V()})

        }))



    qG('/objs',function(o){

         _e(o,function(o){

             s1(
                 h2(o.t).o(function(){

                     s2.E(h1(o.t), tt=tx(),


                     bt('new sub-object',function(){  qP('/newObj',  {t: tt.V()})

                     }))}))

             _e(o.i,function(i){ s1(h3(i)) })

         })

    })



}