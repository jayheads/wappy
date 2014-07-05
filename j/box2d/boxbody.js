
//$dB=function(){return bD.t(dB)}


//super body wrapper!
//depends on a body.. it only extends it with mets!
sBd=function(b){


    //user data
    b.uD=function(a){

        var f= b.gFL()
        if(U(a)){return f.GetUserData()}
        f.SetUserData(a);
        return b}


    //create fixture
    b.cF=b.f=function(a){

        a=a||fix()

        return b.CreateFixture(a)
    }



    //get mass
    b.m  =b.gM  =function(m){if(U(m)){return b.GetMass()}}


    //get world center
    b.wC   =b.c=  b.gWC=function(){return b.GetWorldCenter()}


    //set awake
    b.aw = b.sAw  =b.a=function(){
        var g=G(arguments)
        b.SetAwake(g.n?false:true)
        return b}

    //position
    b.ps   = b.p  =function(x,y){
        var p=b.GetPosition()
        if(U(x)){return p}

        if(N(x)){
            x={x:x,y:y||p.y}}

        b.SetPosition(x)

        return b}
    b.x=function(a){
        var p= b.ps()

        if(U(a)){return p.x*30}

        b.ps(a/30, p.y)
        return b
    }
    b.y=function(a){
        var p= b.ps()

        if(U(a)){return p.y*30}

        b.ps(p.x, a/30)
        return b
    }


    //apply impulse. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aI  = b.apI=function(v,c,c2){
        if(N(c)){return b.aI(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyImpulse(v,c)
        return b}

    //apply force. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aF  =b.apF=function(v,c,c2){
        if(N(c)){return b.aF(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyForce(v,c)
        return b}


    //get fixture list
    b.gFL=function(){return sFx(b.GetFixtureList())}

    //get type
    b.gT= b.gTy= b.ty=b.GetType

    //get transform
    b.gTf= b.tf= b.GetTransform

    //angular vel
    b.aV=function(a){

        if(U(a)){return b.GetAngularVelocity()}

        b.SetAngularVelocity(a)

        return b}



    //linear vel
    b.lV=function(n1,n2){

        if(U(n1)){return b.GetLinearVelocity()}

        if(N(n1)){a=bV(n1,n2)}
        b.SetLinearVelocity(a)

        return b}



    //set fixed rotation
    b.sFR= b.fR=function(a){b.SetFixedRotation(a)
        return b}




    //get next
    b.n= b.gN=function(){return sBd(b.GetNext())}



    //destroy fixture
    b.dF=function(a){
        b.DestroyFixture(a)

        return b}



    return b}





//makes body defs (to pass to world (w.a(body def)))

bDf  =bDef=bB=b2BD=function rc(a,x,y){

    var b=a

    //check if b is an instantiated body def
    //by making sure it is an object

    if(!O(b)){


        //if it is NOT an object,
        //then it could be pams

        b=rc(new b2BodyDef)
        //insantiate a new body def

        if(N(a)){b.t(a)}
        //if a is a Number, it is actually representing a type
        //(either sB or dB)
        //so set the type

        if(N(y)){b.xy(x,y)}
        //if y is a number,
        //set the location

    }

    //assume b is an instantiated body def
    b.t=function(a){
        if(U(a)){return b.type}
        b.type=a;
        return b}

    b.aV=function(a){
        if(U(a)){return b.angularVelocity}
        b.angularVelocity=a;
        return b}
    b.aD=function(a){
        if(U(a)){return b.angularDamping}
        b.angularDamping=a;
        return b}
    b.xy=function(x,y){

        b.position.x= x? x:r10()
        b.position.y= y? y:r10()

        return b}; b.XY=function(x,y){//dep

        b.position.x= (x?x:r10())/30
        b.position.y= (y?y:r10())/30

        return b}
    //position
    b.p=b.ps=function(x,y){
        var g=G(arguments),x=x||r10(),y=y||r10()
        x/=30;y/=30
        b.position.Set(x,y);
        return b}

    //fixed rotation?
    b.fR=function(a){

        b.fixedRotation=a?true:false

        return b}

    //angle

    b.ang=b.a=function(a){
        if(U(a)){return b.angle}
        b.angle=a;
        return b}

    //user data
    b.ud=function(a){b.userData=a;return b}

    return b}





//makes a dynamic body at given x,y
dBD =dBf=function(x,y){
    return bDf(dB)
        .p(N(x)?x:300,
        N(y)?y:300)}


//makes a static body at a given x,y
sBD =sBf=function(x,y){

    return bDf(sB).p(  N(x)?x:300,  N(y)?y:300 )
}


//$sB=function(x,y){return bDf(sB,N(x)?x:300,  N(y)?y:300 )}

//$dB=function(x,y){return bDf(dB,N(x)?x:300,  N(y)?y:300 )}


