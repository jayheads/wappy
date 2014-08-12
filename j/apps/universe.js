fetchMugByMugId=mugb=function(user, func){

    qP('/dud', {d: user.m}, func)

}

fetchMugByUsername = pMug=function(user, func){

    qP('/mug', {u:user}, function(mug){

    if(mug){ func(mug) }

    })

}

SuperPlayer = PlayerBitmap=player=function(playerBitmap){

    bm = playerBitmap

    playerBitmap.rgc().xy(600).sxy(.4);

    playerBitmap.o('$$', function(bm){

        bm.XX()

        ke('X', usr)

    })

    //only works local

    return playerBitmap}


UNIVERSE=function(){


    UNI = function(func){

        if($w['uni']){func()}

        else {UNIVERSE(func)}

    }



    acceptUniverseInvitation = accept=function(t){

        ke('bc',
            'accept',
            {f:usr, t:t})
    }


    SpeechBubble = bub=function(t,x,y){var g=G(arguments), c=Ct()//Ct$()

        if(!$w['uni']){return}

        t=g[0]||'hi!'
        x=g[1]||you.x()
        y=g[2]||you.y()

        uni.a(c)

        c.a(cir(x-150,y-150,100,'w'))
        c.a(cir(x-50,y-50,30,'w'))
        c.a(cir(x-20,y-20,10,'w'))
        c.a(TX(t).x(x-200).y(y-200))  //c=Do(c)

        T(function(){c.X()},10000)
        tw(c,[{a:0,sxy:.1,x:x-250,y:y-250},20000])
        if(g.p){ke('bub',{t:t,x:x,y:y,u:usr})}

        return c}


   getGuy= gg=function(username){

        var theGuy=false

        username = O(username)? username.u: username

        // now a is username

        _.each(guys, function(guy){

            if(guy.u == username){theGuy = guy}

        })

        return theGuy}




   updateGuy = upd=function(u){

        var guyLocation=function(){

            if($w['you']){ return {u:usr,  x: you.x(), y: you.y()} }
        }

        if(u){  getGuy(u.u).b.x(u.x).y(u.y) }

        else {  ke('bc','upd',  guyLocation()  )  }

    }


    addGuy=function(u,b){
        guys.push({u:u,b:b})
        uni.a(player(b))}



    //dep???
  startUniverse = function(u){//ply=

        if(!getGuy(u)){
            pMug(u,function(m){

                UNI(function(){
                Bm(m,function(b){
                    addGuy(u,b)
                })})})}
    }



    invite=function(toWho){  ke('bc','invite',   {f: usr, t: toWho}) }

    guys=[]

    var func=function(b,s){
        uni=s
        you=player(b).fn(SL)
        guys.push({u:usr,b:you})

        I(updateGuy,100)

        usrs(


            function(users){

            var theRow=row().a()

            _.each(users,


                function(user){

                    fetchMugByMugId(

                        user,


                        function(userMug){


                            theRow(


                                Thumbnail(   pg(user.u),   $br(), userMug)


                                    .o(function(){  invite(user.u)  }))
                })
            })


            dv('b', 1000, 'auto').pp()(

                br(3),

                tx('...', 'tx'),

                $button('send', function(){   SpeechBubble(

                    qi('tx').V()

                    ,

                    '+')

                }))

        })}





    wMs(func,  1000,800,'/beach.jpg')}


