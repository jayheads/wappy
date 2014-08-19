fetchMugByMugId=mugb=function(user, func){ qP('/dud', {d: user.m}, func) }

fetchMugByUsername = pMug=function(user, func){

    $.post('/mug', {u:user}, function(mug){

    if(mug){ func(mug) }

    })

}




SpeechBubble =  function(text,x,y){

    var g=G(arguments),

        c=Ct()//Ct$()

    if(!$w['uni']){return}

    text =g[0]||'hi!'
    x=g[1]||you.x()
    y=g[2]||you.y()

    uni.a(c)

    c.a(EaselCircle(x-150,y-150,100,'w'))
    c.a(EaselCircle(x-50,y-50,30,'w'))
    c.a(EaselCircle(x-20,y-20,10,'w'))
    c.a(EaselText(text).x(x-200).y(y-200))  //c=Do(c)

    setTimeout(function(){c.X()},10000)
    EaselTween(c,[{a:0,sxy:.1,x:x-250,y:y-250},20000])

    if(g.p){

        socket.emit('speechBubble',  {t:text,x:x,y:y,u:_username}

        )}

    return c}


guyLocation=function(){

    if($w['you']){ return { u:_username,  x: you.x(), y: you.y()} }

}





addGuy=function(username, bitmap){

    guysArray.push(  {u: username, username:username,   b: bitmap,  bitmap:bitmap}  )

    bitmap.rgc().xy(600).sxy(.4)

    bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })

    uni.a(bitmap)}




//get guy object by username or u.username
//guy object has {u/username, x, y}
getGuy=function(username){

    var theGuy=false

    username = O(username)? username.u: username

    _.each(guysArray,

        function(guy){
            if(guy.u == username){theGuy = guy}})

    return theGuy}





//pass in a user/username to update your image of them
//or.. pass nothing to update everyone on YOU
updateGuy =  function(user){

    if(user){

        var bitmap = getGuy( user.u ).bitmap

        bitmap.x( user.x ).y( user.y )   }


    else {  socket.emit('bc', 'updateGuy',  guyLocation())  }}





invite=function(toWho){

    socket.emit('bc',

        'invite',

        {f: _username, t: toWho})

}

acceptUniverseInvitation = accept=function(toWho){

    socket.emit('bc',  'accept',  {f:_username, t:toWho})  }


UNIVERSE=function(){z()

    guysArray  =guys=[]



    startUniverse = function(username){//ply=

        if(!getGuy(username)){  fetchMugByUsername(username,

                function(userMug){

                    if(!$w['uni']){  UNIVERSE() }



                            Bm( userMug,

                                function( bitmap ){  addGuy(username, bitmap)  }
                            )



                }


            )} }





    //the invitation is BROADCASTED !!!






    var onMugReady=function(b,s){
        uni=s

        b.rgc().xy(600).sxy(.4);

        b.o('$$', function(bm){   bm.XX(); socket.emit('X', _username)})


        you=b.fn(SL)



        guysArray.push({u:_username, b:you})

        setInterval(updateGuy,100)

        getUsers(  function(users){

            var theRow=row().a()

            _.each(users,  function(user){  fetchMugByMugId(  user,   function(userMug){

                theRow(

                    Thumbnail(   $pg(user.u),   $br(), userMug).$(   function(){ invite(user.u)   })
                )

            })   })


            dv('b', 1000, 'auto').pp()(

                $br(3),

                $textInput('...', 'tx'),

                $button('send', function(){

                    SpeechBubble(  qi('tx').V()

                    ,

                    '+')

                }))  })}



    wMs(onMugReady,
        1000,
        800,
        '/beach.jpg')



}


