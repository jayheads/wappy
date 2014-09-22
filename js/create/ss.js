

EaselSpriteSheet = jss=function(a){ a=a||$w['ss']; return EaselSprite(SS$(a)) }



Sp=function(ss,f,st){

    return Ql({m:makeMan(ss),c:function(i){var s=jss(s)

        if(st){st.a(s)}

        if(f

            ){

        f( SuperSprite(s), s )

    }}})}




SuperSprite =  function(x){

    var o = Do( x )

    o.ob = x

    o.sS = o.ss = o.ob.spriteSheet

    o.numFrames=o.nF=function(){return o.sS.getNumFrames()}

    o.getAnim=o.gA=function(a){

        return U(a)? o.sS.getAnimations()
            :
            o.sS.getAnimation(a) }




    //set/get NEXT animation on an animation
    o.next=o.gAN =function(anim1, nextAnim){

        var g=G(arguments),  anim1 =g[0],  nextAnim=g[1],

            theAnim=o.gA(anim1)



        //if you just pass in the anim1 string
        if(U(nextAnim)){

            //set its next to itself
            if(g.p){theAnim.next= theAnim; return o}

            //set its next to false
            if(g.n){theAnim.next=false; return o}

            //get its next
            return theAnim.next}

        theAnim.next = nextAnim

        //loop the TWO anims
        if(g.p){  o.gA(nextAnim).next=anim1  }

        return o}


    o.play =o.p=function( a, b ){

        var g=G(arguments),
            a=g[0],
            b=g[1],
            l=g.f,
            n

        if(U(a)){ o.ob.play(); return o }

        if(U(b)){

            if(g.n){o.next(a, false)}

            if(g.p){o.next(a, a)}

            o.ob.gotoAndPlay(a)

            return o
        }

        _.each(g.r, function(a){
            o.next( l, a )
            l=a
        })

        o.next( g.l, g.isPlaying ? false : g.f )

        o.play( g.f )

    }


    o.stop= o.s=function(a){ if(D(a)){ o.ob.gotoAndStop(a)}else{o.ob.stop()};return o}

    o.isPlaying= o.P=function(){return !o.ob.paused}

    o.frame= o.currentFrame=o.cF = o.cf=function(num){

        var args=G(arguments),   num=args[0]


        if(args.p){
            return o.frame(
                    o.frame() + ( N(num) ? num : 1 )
            )}


        if(args.n){
            return o.frame(
                    o.frame() - ( N(num) ? num : 1 )
            )}


        if( U(num) ){ return o.ob.currentFrame }


        $l(num)

        return o.isPlaying()? o.play(num) : o.stop(num)
    }

    o.anim =o.cA = o.ca = function(a){ return U(a)?

        o.ob.currentAnimation :

        o.isPlaying()? o.play( a ) : o.stop(a)

}

    o.advance= o.av=function(a){ o.ob.advance(a); return o }

    o.oC= o.cm=function(a){ o.ob.on('complete',a) }

    //will run each loop
    o.oAe= o.ae=function(a){ o.o('animationend',a);return o }

    o.rate =o.fR= o.frameRate=o.fr=function(a){var g=G(arguments),a=g[0]
        if(g.p){return o.fr(o.fr()+(N(a)?a:1))}
        if(g.n){return o.fr(o.fr()-(N(a)?a:1))}
        if(g.m){return o.fr(o.fr()*(N(a)?a:2))}
        if(g.d){return o.fr(o.fr()/(N(a)?a:2))}

        if(U(a)){return o.ob.framerate}
        $l(a)
        o.ob.framerate=a;
        return o}


    o.cAF= o.caf=function(a){
        if( U(a) ){
            return o.ob.currentAnimationFrame
        }
    }



    return o}









SS={

    "framerate":24,


    "images":["/guy_0.png", "/guy_1.png"],


    "frames":[

        [2, 2, 1024, 512, 0, 0, 0],
        [1030, 2, 1024, 512, 0, 0, 0],
        [2058, 2, 1024, 512, 0, 0, 0],
        [2, 518, 1024, 512, 0, 0, 0],
        [1030, 518, 1024, 512, 0, 0, 0],
        [2058, 518, 1024, 512, 0, 0, 0],
        [2, 1034, 1024, 512, 0, 0, 0],
        [1030, 1034, 1024, 512, 0, 0, 0],
        [2058, 1034, 1024, 512, 0, 0, 0],
        [2, 1550, 1024, 512, 0, 0, 0],
        [1030, 1550, 1024, 512, 0, 0, 0],
        [2058, 1550, 1024, 512, 0, 0, 0],
        [2, 2066, 1024, 512, 0, 0, 0],
        [1030, 2066, 1024, 512, 0, 0, 0],
        [2058, 2066, 1024, 512, 0, 0, 0],
        [2, 2582, 1024, 512, 0, 0, 0],
        [1030, 2582, 1024, 512, 0, 0, 0],
        [2058, 2582, 1024, 512, 0, 0, 0],
        [2, 3098, 1024, 512, 0, 0, 0],
        [1030, 3098, 1024, 512, 0, 0, 0],
        [2058, 3098, 1024, 512, 0, 0, 0],
        [2, 2, 1024, 512, 1, 0, 0],
        [1030, 2, 1024, 512, 1, 0, 0],
        [2058, 2, 1024, 512, 1, 0, 0],
        [2, 518, 1024, 512, 1, 0, 0],
        [1030, 518, 1024, 512, 1, 0, 0],
        [2058, 518, 1024, 512, 1, 0, 0],
        [2, 1034, 1024, 512, 1, 0, 0],
        [1030, 1034, 1024, 512, 1, 0, 0],
        [2058, 1034, 1024, 512, 1, 0, 0],
        [2, 1550, 1024, 512, 1, 0, 0],
        [1030, 1550, 1024, 512, 1, 0, 0],
        [2058, 1550, 1024, 512, 1, 0, 0],
        [2, 2066, 1024, 512, 1, 0, 0],
        [1030, 2066, 1024, 512, 1, 0, 0],
        [2058, 2066, 1024, 512, 1, 0, 0],
        [2, 2582, 1024, 512, 1, 0, 0],
        [1030, 2582, 1024, 512, 1, 0, 0],
        [2058, 2582, 1024, 512, 1, 0, 0],
        [2, 3098, 1024, 512, 1, 0, 0]],

    "animations":{
        "explode": {"frames": [34, 35, 36, 37, 38, 39], "speed": 0.1},
        "spin": {"frames": [25, 26, 27, 28, 29, 30, 31, 32, 33], "speed": 1},
        "jump": {  "frames": [ 0,  1,  2,   3,  4,  5,  6,  7,  8, 9,  10, 11, 12,  13,  14,
            15,  16,  17,  18,  19,   20,  21,   22, 23,24],  "speed": 1} }


}

Pack={
    "framerate":24,
    "images":[
    "/pack_0.png",
    "/pack_1.png",
    "/pack_2.png",
    "/pack_3.png",
    "/pack_4.png",
    "/pack_5.png",
    "/pack_6.png",
    "/pack_7.png",
    "/pack_8.png",
    "/pack_9.png",
    "/pack_10.png",
    "/pack_11.png",
    "/pack_12.png",
    "/pack_13.png",
    "/pack_14.png",
    "/pack_15.png",
    "/pack_16.png",
    "/pack_17.png",
    "/pack_18.png"
],
    "frames":[
    [2, 2, 512, 512, 0, -3, -1],
    [518, 2, 512, 512, 0, -3, -1],
    [1034, 2, 512, 512, 0, -3, -1],
    [2, 518, 512, 512, 0, -3, -1],
    [518, 518, 512, 512, 0, -3, -1],
    [1034, 518, 512, 512, 0, -3, -1],
    [2, 1034, 512, 512, 0, -3, -1],
    [518, 1034, 512, 512, 0, -3, -1],
    [1034, 1034, 512, 512, 0, -3, -1],
    [2, 2, 512, 512, 1, -3, -1],
    [518, 2, 512, 512, 1, -3, -1],
    [1034, 2, 512, 512, 1, -3, -1],
    [2, 518, 512, 512, 1, -3, -1],
    [518, 518, 512, 512, 1, -3, -1],
    [1034, 518, 512, 512, 1, -3, -1],
    [2, 1034, 512, 512, 1, -3, -1],
    [518, 1034, 512, 512, 1, -3, -1],
    [1034, 1034, 512, 512, 1, -3, -1],
    [2, 2, 512, 512, 2, -3, -1],
    [518, 2, 512, 512, 2, -3, -1],
    [1034, 2, 512, 512, 2, -3, -1],
    [2, 518, 512, 512, 2, -3, -1],
    [518, 518, 512, 512, 2, -3, -1],
    [1034, 518, 512, 512, 2, -3, -1],
    [2, 1034, 512, 512, 2, -3, -1],
    [518, 1034, 512, 512, 2, -3, -1],
    [1034, 1034, 512, 512, 2, -3, -1],
    [2, 2, 512, 512, 3, -3, -1],
    [518, 2, 512, 512, 3, -3, -1],
    [1034, 2, 512, 512, 3, -3, -1],
    [2, 518, 512, 512, 3, -3, -1],
    [518, 518, 512, 512, 3, -3, -1],
    [1034, 518, 512, 512, 3, -3, -1],
    [2, 1034, 512, 512, 3, -3, -1],
    [518, 1034, 512, 512, 3, -3, -1],
    [1034, 1034, 512, 512, 3, -3, -1],
    [2, 2, 512, 512, 4, -3, -1],
    [518, 2, 512, 512, 4, -3, -1],
    [1034, 2, 512, 512, 4, -3, -1],
    [2, 518, 512, 512, 4, -3, -1],
    [518, 518, 512, 512, 4, -3, -1],
    [1034, 518, 512, 512, 4, -3, -1],
    [2, 1034, 512, 512, 4, -3, -1],
    [518, 1034, 512, 512, 4, -3, -1],
    [1034, 1034, 512, 512, 4, -3, -1],
    [2, 2, 512, 512, 5, -3, -1],
    [518, 2, 512, 512, 5, -3, -1],
    [1034, 2, 512, 512, 5, -3, -1],
    [2, 518, 512, 512, 5, -3, -1],
    [518, 518, 512, 512, 5, -3, -1],
    [1034, 518, 512, 512, 5, -3, -1],
    [2, 1034, 512, 512, 5, -3, -1],
    [518, 1034, 512, 512, 5, -3, -1],
    [1034, 1034, 512, 512, 5, -3, -1],
    [2, 2, 512, 512, 6, -3, -1],
    [518, 2, 512, 512, 6, -3, -1],
    [1034, 2, 512, 512, 6, -3, -1],
    [2, 518, 512, 512, 6, -3, -1],
    [518, 518, 512, 512, 6, -3, -1],
    [1034, 518, 512, 512, 6, -3, -1],
    [2, 1034, 512, 512, 6, -3, -1],
    [518, 1034, 512, 512, 6, -3, -1],
    [1034, 1034, 512, 512, 6, -3, -1],
    [2, 2, 512, 512, 7, -3, -1],
    [518, 2, 512, 512, 7, -3, -1],
    [1034, 2, 512, 512, 7, -3, -1],
    [2, 518, 512, 512, 7, -3, -1],
    [518, 518, 512, 512, 7, -3, -1],
    [1034, 518, 512, 512, 7, -3, -1],
    [2, 1034, 512, 512, 7, -3, -1],
    [518, 1034, 512, 512, 7, -3, -1],
    [1034, 1034, 512, 512, 7, -3, -1],
    [2, 2, 512, 512, 8, -3, -1],
    [518, 2, 512, 512, 8, -3, -1],
    [1034, 2, 512, 512, 8, -3, -1],
    [2, 518, 512, 512, 8, -3, -1],
    [518, 518, 512, 512, 8, -3, -1],
    [1034, 518, 512, 512, 8, -3, -1],
    [2, 1034, 512, 512, 8, -3, -1],
    [518, 1034, 512, 512, 8, -3, -1],
    [1034, 1034, 512, 512, 8, -3, -1],
    [2, 2, 512, 512, 9, -3, -1],
    [518, 2, 512, 512, 9, -3, -1],
    [1034, 2, 512, 512, 9, -3, -1],
    [2, 518, 512, 512, 9, -3, -1],
    [518, 518, 512, 512, 9, -3, -1],
    [1034, 518, 512, 512, 9, -3, -1],
    [2, 1034, 512, 512, 9, -3, -1],
    [518, 1034, 512, 512, 9, -3, -1],
    [1034, 1034, 512, 512, 9, -3, -1],
    [2, 2, 512, 512, 10, -3, -1],
    [518, 2, 512, 512, 10, -3, -1],
    [1034, 2, 512, 512, 10, -3, -1],
    [2, 518, 512, 512, 10, -3, -1],
    [518, 518, 512, 512, 10, -3, -1],
    [1034, 518, 512, 512, 10, -3, -1],
    [2, 1034, 512, 512, 10, -3, -1],
    [518, 1034, 512, 512, 10, -3, -1],
    [1034, 1034, 512, 512, 10, -3, -1],
    [2, 2, 512, 512, 11, -3, -1],
    [518, 2, 512, 512, 11, -3, -1],
    [1034, 2, 512, 512, 11, -3, -1],
    [2, 518, 512, 512, 11, -3, -1],
    [518, 518, 512, 512, 11, -3, -1],
    [1034, 518, 512, 512, 11, -3, -1],
    [2, 1034, 512, 512, 11, -3, -1],
    [518, 1034, 512, 512, 11, -3, -1],
    [1034, 1034, 512, 512, 11, -3, -1],
    [2, 2, 512, 512, 12, -3, -1],
    [518, 2, 512, 512, 12, -3, -1],
    [1034, 2, 512, 512, 12, -3, -1],
    [2, 518, 512, 512, 12, -3, -1],
    [518, 518, 512, 512, 12, -3, -1],
    [1034, 518, 512, 512, 12, -3, -1],
    [2, 1034, 512, 512, 12, -3, -1],
    [518, 1034, 512, 512, 12, -3, -1],
    [1034, 1034, 512, 512, 12, -3, -1],
    [2, 2, 512, 512, 13, -3, -1],
    [518, 2, 512, 512, 13, -3, -1],
    [1034, 2, 512, 512, 13, -3, -1],
    [2, 518, 512, 512, 13, -3, -1],
    [518, 518, 512, 512, 13, -3, -1],
    [1034, 518, 512, 512, 13, -3, -1],
    [2, 1034, 512, 512, 13, -3, -1],
    [518, 1034, 512, 512, 13, -3, -1],
    [1034, 1034, 512, 512, 13, -3, -1],
    [2, 2, 512, 512, 14, -3, -1],
    [518, 2, 512, 512, 14, -3, -1],
    [1034, 2, 512, 512, 14, -3, -1],
    [2, 518, 512, 512, 14, -3, -1],
    [518, 518, 512, 512, 14, -3, -1],
    [1034, 518, 512, 512, 14, -3, -1],
    [2, 1034, 512, 512, 14, -3, -1],
    [518, 1034, 512, 512, 14, -3, -1],
    [1034, 1034, 512, 512, 14, -3, -1],
    [2, 2, 512, 512, 15, -3, -1],
    [518, 2, 512, 512, 15, -3, -1],
    [1034, 2, 512, 512, 15, -3, -1],
    [2, 518, 512, 512, 15, -3, -1],
    [518, 518, 512, 512, 15, -3, -1],
    [1034, 518, 512, 512, 15, -3, -1],
    [2, 1034, 512, 512, 15, -3, -1],
    [518, 1034, 512, 512, 15, -3, -1],
    [1034, 1034, 512, 512, 15, -3, -1],
    [2, 2, 512, 512, 16, -3, -1],
    [518, 2, 512, 512, 16, -3, -1],
    [1034, 2, 512, 512, 16, -3, -1],
    [2, 518, 512, 512, 16, -3, -1],
    [518, 518, 512, 512, 16, -3, -1],
    [1034, 518, 512, 512, 16, -3, -1],
    [2, 1034, 512, 512, 16, -3, -1],
    [518, 1034, 512, 512, 16, -3, -1],
    [1034, 1034, 512, 512, 16, -3, -1],
    [2, 2, 512, 512, 17, -3, -1],
    [518, 2, 512, 512, 17, -3, -1],
    [1034, 2, 512, 512, 17, -3, -1],
    [2, 518, 512, 512, 17, -3, -1],
    [518, 518, 512, 512, 17, -3, -1],
    [1034, 518, 512, 512, 17, -3, -1],
    [2, 1034, 512, 512, 17, -3, -1],
    [518, 1034, 512, 512, 17, -3, -1],
    [1034, 1034, 512, 512, 17, -3, -1],
    [2, 2, 512, 512, 18, -3, -1],
    [518, 2, 512, 512, 18, -3, -1],
    [1034, 2, 512, 512, 18, -3, -1],
    [2, 518, 512, 512, 18, -3, -1],
    [518, 518, 512, 512, 18, -3, -1],
    [1034, 518, 512, 512, 18, -3, -1],
    [2, 1034, 512, 512, 18, -3, -1],
    [518, 1034, 512, 512, 18, -3, -1]
],
    "animations":{
        "b1": {"frames": [1, 2, 3, 4], "speed": 1},
        "b2": {"frames": [5, 6, 7, 8, 9], "speed": 1},
        "b3": {"frames": [10, 11, 12, 13, 14], "speed": 1},  //15

        "c1": {"frames": [16, 17, 18], "speed": 1},
        "c2": {"frames": [19, 20, 21, 22], "speed": 1},
        "c3": {"frames": [23, 24, 25, 26, 27], "speed": 1},
        "c4": {"frames": [28, 29, 30], "speed": 1},


        "s1": {"frames": [96, 97, 98, 99, 100, 101, 102, 103, 104],"speed": 1},
        "s2": {"frames": [105, 106, 107, 108, 109, 110, 111, 112, 113],"speed": 1},
        "s3": {"frames": [114, 115, 116, 117, 118, 119, 120, 121, 122],"speed": 1},
        "s4": {"frames": [123, 124, 125, 126, 127, 128, 129, 130, 131],"speed": 1},



        "e1": {"frames": [132, 133, 134, 135, 136, 137, 138, 139, 140, 141],"speed": 1},
        "e2": {"frames": [142, 143, 144, 145, 146, 147, 148, 149],"speed": 1},
        "e3": {"frames": [150,151, 152, 153, 154, 155, 156, 157, 158, 159],"speed": 1},
        "e4": {"frames": [160, 161, 162, 163, 164, 165, 166, 167, 168, 169],"speed": 1},

        "f1": {"frames": [31, 32, 33, 34, 35], "speed": 1},
        "f2": {"frames": [36, 37, 38, 39, 40, 41, 42, 43], "speed": 1},
        "f3": {"frames": [44, 45, 46, 47, 48, 49], "speed": 1},
        "f4": {"frames": [  50,    51,   52,  53, 54,  55, 56, 57,  58,   59,  60,  61,  62,  63,  64,  65,66,  67,  68,   69,  70,  71,   72,  73,   74,  75,  76 ],"speed": 1},

        "p1": {"frames": [77, 78, 79, 80, 81], "speed": 1},
        "p2": {"frames": [82, 83, 84, 85], "speed": 1},
        "p3": {"frames": [86, 87, 88, 89, 90], "speed": 1},
        "p4": {"frames": [91, 92, 93, 94, 95], "speed": 1}

    }}

Smoke={



    "framerate":24,

    "images":["/electric_0.png", "/electric_1.png", "/electric_2.png"],

    "frames":[
    [2, 2, 512, 512, 0, -58, -117],
    [518, 2, 512, 512, 0, -58, -117],
    [1034, 2, 512, 512, 0, -58, -117],
    [2, 518, 512, 512, 0, -58, -117],
    [518, 518, 512, 512, 0, -58, -117],
    [1034, 518, 512, 512, 0, -58, -117],
    [2, 1034, 512, 512, 0, -58, -117],
    [518, 1034, 512, 512, 0, -58, -117],
    [1034, 1034, 512, 512, 0, -58, -117],
    [2, 2, 512, 512, 1, -58, -117],
    [518, 2, 512, 512, 1, -58, -117],
    [1034, 2, 512, 512, 1, -58, -117],
    [2, 518, 512, 512, 1, -58, -117],
    [518, 518, 512, 512, 1, -58, -117],
    [1034, 518, 512, 512, 1, -58, -117],
    [2, 1034, 512, 512, 1, -58, -117],
    [518, 1034, 512, 512, 1, -58, -117],
    [1034, 1034, 512, 512, 1, -58, -117],
    [2, 2, 512, 512, 2, -58, -117]
],

    "animations":{


        "sizzle": {"frames": [10, 11, 12, 13, 14, 15, 16, 17, 18], "speed": 1},
        "warp": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "speed": 1}

    }





}