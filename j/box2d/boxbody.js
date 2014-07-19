







bDfX   =function rc(a,x,y){
//makes body defs (to pass to world (w.a(body def)))

    var b=a

    //check if b is an instantiated body def
    //by making sure it is an object

    if(!O(b)){

        //if it is NOT an object,
        //then it could be pams

        b=rc(new b2BodyDef)
        //insantiate a new body def

        if(N(a)){b.T(a)}
        //if a is a Number, it is actually representing a type
        //(either sB or dB)
        //so set the type

        if(N(y)){b.xy(x,y)}
        //if y is a number,
        //set the location

    }

    //assume b is an instantiated body def

    b=sBdD(b)
    return b}


