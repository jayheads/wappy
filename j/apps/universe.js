fetchMugByMugId=mugb=function(user, func){

    qP('/dud', {d: user.m}, func)

}

fetchMugByUsername = pMug=function(user, func){

    qP('/mug', {u:user}, function(mug){

    if(mug){ func(mug) }

    })

}



UNI = function(func){

    if($w['uni']){ func() }

    else { UNIVERSE(); func() }

}



UNIVERSE=function(){

    guysArray=guys=[]

    acceptUniverseInvitation = accept=function(toWho){

        kk.emit('bc',  'accept',  {f:_username, t:toWho})
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

        if(g.p){

            kk.emit('bub',
                {t:t,x:x,y:y,u:_username})}

        return c}
    getGuy=  function(username){

        var theGuy=false

        username = O(username)? username.u: username

        // now a is username

        _.each(guysArray, function(guy){

            if(guy.u == username){theGuy = guy}

        })

        return theGuy}
    guyLocation=function(){

        if($w['you']){ return { u:_username,  x: you.x(), y: you.y()} }

   }

    updateGuy =  function(user){



        if(user){  getGuy( user.u ).b.x(user.x).y(user.y) }


        else {  kk.emit('bc', 'upd',  guyLocation()  )  }

    }


    addGuy=function(username, bitmap){

        guysArray.push(  {u: username, b: bitmap}  )

        bitmap.rgc().xy(600).sxy(.4);

        bitmap.o('$$', function(bm){   bm.XX(); kk.emit('X', _username)})

        uni.a(bitmap)}


    startUniverse = function(username){//ply=

        if(!getGuy(username)){  fetchMugByUsername(username,

                function(userMug){

                    UNI(  function(){

                            Bm( userMug,

                                function( bitmap ){  addGuy(username, bitmap)  }
                            )}

                    )

                }


            )}

  }


    invite=function(toWho){  kk.emit('bc','invite',   {f: _username, t: toWho})  }

    
    var onMugReady=function(b,s){
        uni=s

        b.rgc().xy(600).sxy(.4);

        b.o('$$', function(bm){   bm.XX(); kk.emit('X', _username)})


        you=b.fn(SL)



        guysArray.push({u:_username, b:you})

        I(updateGuy,100)

        getUsers(  function(users){

            var theRow=row().a()

            _.each(users,  function(user){  fetchMugByMugId(  user,   function(userMug){

                theRow(

                    Thumbnail(   $pg(user.u),   $br(), userMug).$(   function(){ invite(user.u)   })
                )

            })   })


            dv('b', 1000, 'auto').pp()(

                $br(3),

                tx('...', 'tx'),

                $button('send', function(){

                    SpeechBubble(  qi('tx').V()

                    ,

                    '+')

                }))

        })}






    wMs(onMugReady,
        1000,
        800,
        '/beach.jpg')

}


