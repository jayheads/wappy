bDf=function(){return new b2BodyDef}

//super body wrapper!
//depends on a body.. it only extends it with mets!
sBd=function(b){


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




    //get fixture list
    b.gFL=function(){return sFx(b.GetFixtureList())}



    //  get/set type
    b.T= b.ty=function(a){
        if(U(a)){return b.GetType()}
        b.SetType(a)
        return b}



    // set/get transform
    b.tf=  function(a){

        if(U(a)){  return b.GetTransform() }

        b.SetTransform(a)
        return b}








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

        return b};

    b.XY=function(x,y){//dep

        b.position.x= (x?x:r10())/30
        b.position.y= (y?y:r10())/30
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



    // get/set user data
    b.uD=function(a){
        if(U(a)){return b.GetUserData()}
        b.SetUserData(a);
        return b}
    //user data first fixture?
    b.uDF=function(a){
        var f= b.gFL()
        if(U(a)){return f.GetUserData()}
        f.SetUserData(a);
        return b}




    //apply impulse. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aI  = function(v,c,c2){
        if(N(c)){return b.aI(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyImpulse(v,c)
        return b}

    //apply force. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.aF  = function(v,c,c2){
        if(N(c)){return b.aF(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyForce(v,c)
        return b}

    return b}

sBdD=function(d){d=d||bDf()
    d.act=function(a){
        d.active=a?true:false
    return d}
    d.aS=function(a){
        d.allowSleep=a?true:false
        return d}
    d.ang=function(a){
        if(U(a)){return d.angle}
        d.angle=a
        return d} //The world angle of the body in radians.
    d.aD=function(a){
        if(U(a)){return d.angularDamping}
        d.angularDamping=a
        return d}
    d.aV=function(a){
        if(U(a)){return d.angularVelocity}
        d.angularVelocity=a
        return d}
    d.awake=function(a){
        d.active=a?true:false
        return d}
    d.bull=function(a){
        d.bullet=a?true:false
        return d}
    d.fR=function(a){
        d.fixedRotation=a?true:false
        return d}
    d.iS=function(a){if(U(a)){return d.insertiaScale}
        d.insertiaScale=a
        return d}
    d.lD=function(a){
        if(U(a)){return d.linearDamping}
        d.linearDamping=a
        return d}
    d.lV=function(a){
        if(U(a)){return d.linearVelocity}
        d.linearVelocity=a
        return d}



    //position
    d.p=d.ps= d.xy=function(x,y){

        var g=G(arguments),
            x=N(x)?x:r10()*60,
            y=N(y)?y:r10()*60

        if(O(x)){
            d.position=x;return d
        }

        d.position.Set(x/30,y/30)
        return d}



   // d.xy=function(x,y){return d.ps(bV(x/30, y/30))}
    //  get/set type

    d.T=  function(a){
        if(U(a)){return d.type}
        d.type=a
        return d}


    d.D=d.uD=function(a){
        d.active=a?true:false
        return d}
return d}


dBD=function(x,y){return sBdD().T(2).xy(N(x)?x:300,N(y)?y:300)}
sBD=function(x,y){return sBdD().T(0).xy(N(x)?x:300,N(y)?y:300)}
kBD=function(x,y){return sBdD().T(1).xy(N(x)?x:300,N(y)?y:300)}









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


