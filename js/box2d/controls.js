
b2.controls=function(){}



// measure side ways??


b2.controls.thrust=function(p){var vec

    if(cjs.Keys.left){p.rot(p.rot()-8)}
    if(cjs.Keys.right){p.rot( p.rot()+ 8 )}

    if(cjs.Keys.up){
        vec = p.GetWorldVector( b2.V(0,-100) )
        p.impulse(vec.x/40, vec.y/40 )}

    if(cjs.Keys.down){
        var vec= p.GetWorldVector(b2.V(0,-100))
        p.impulse(-vec.x/100, -vec.y/100 )}

}







b2.controls.thrustGrav=function(p){var vec
    if(cjs.Keys.left){
        p.impulse(0,-5)
        p.rot(p.rot()-8)}
    if(cjs.Keys.right){
        p.impulse(0,-5)
        p.rot( p.rot()+ 8 )}

    if(cjs.Keys.up){
        vec = p.GetWorldVector( b2.V(0,-100) )

        p.impulse(vec.x/20, vec.y/20 )


    }

    if(cjs.Keys.down){
        var vec= p.GetWorldVector(b2.V(0,-100))
        p.impulse(-vec.x/100, -vec.y/100 )}}



b2.controls.slidey=function(p){
    // if on ground
    if(b2.onGround){

        // if pushing jump
        if(cjs.Keys.up){
            if (cjs.Keys.right) {p.impulse(2, -6)}
            else if (cjs.Keys.left) {p.impulse(-2, -6)}
            else{p.impulse(0, -14)}}

        // if not pushing jump
        else {
            if(cjs.Keys.left) { p.dir(0);p.impulse(-10, -10)}
            if(cjs.Keys.right){ p.dir(1); p.impulse(10, -10)}}}


    // if in air !!!
    else {
        if (cjs.Keys.left){p.dir(0);p.impulse(-1,0)}
        if (cjs.Keys.right){p.dir(1);p.impulse(1,0)}}
    return p}




b2.controls.standard=function(p){
    // if on ground
    if(b2.onGround){
        // if jumping

        if(cjs.Keys.up){
            if (cjs.Keys.right) {p.impulse(2, -6)}
            else if (cjs.Keys.left) {p.impulse(-2, -6)}
            else{p.impulse(0, -14)}}
        // if not jumping
        else {
            if(cjs.Keys.left) { p.dir(0);p.impulse(-2, 0)}
            if(cjs.Keys.right){ p.dir(1); p.impulse(2, 0)}}}

    // if in air !!!
    else {
        if (cjs.Keys.left){p.dir(0);p.impulse(-1,0)}
        if (cjs.Keys.right){p.dir(1);p.impulse(1,0)}}
    return p}


b2.controls.feet=function(p){
    if(b2.onGround){p.impulse(20,0)}
    else {p.impulse(-20,0)}}
b2.controls.jumpjumpjump=function(p){
    if (b2.onGround){p.impulse(0, -22)}
    if (cjs.Keys.right) {  p.impulse(2,  0) }
    else if (cjs.Keys.left) { p.impulse( -2,0)}}
b2.controls.basic=function(p){
    if(b2.onGround){
    if (cjs.Keys.up){p.impulse(0, -14)}}
    if (cjs.Keys.right) {  p.impulse(3,  0) }
     if (cjs.Keys.left) { p.impulse( -3,0)}}
b2.controls.getup=function(p){
    if(b2.onGround){
        if (cjs.Keys.up){p.impulse(0, -10)}}


    if (cjs.Keys.right) {  p.impulse(4,  1) }
    if (cjs.Keys.left) { p.impulse( -4,1)}


}


b2.controls.jumper=function(p){
    p.rot(0)
    if(cjs.Keys.left){p.impulse(-4,0)}
    if(cjs.Keys.right){p.impulse(4,0)}
    if(cjs.Keys.up){p.impulse(-0,-22)}
    if(cjs.Keys.down){p.impulse(0,22)}
    return p}

b2.controls.symmetrical=function(p){

    if(cjs.Keys.left){p.impulse(-20,0)}
    if(cjs.Keys.right){p.impulse(20,0)}
    if(cjs.Keys.up){p.impulse(-0,-20)}
    if(cjs.Keys.down){p.impulse(0,20)}

    return p}
b2.controls.trickJump=function(p){
    if(b2.onGround){
        if(cjs.Keys.up){
            if (cjs.Keys.right) {p.impulse(0, -10)}
            else if (cjs.Keys.left) {p.impulse(0, -10)}
            else {p.impulse(0, -30)}}
        else {$l('on ground and not jumping')
            if (cjs.Keys.left) {p.direction(0); p.impulse(-15, 0)}
            if (cjs.Keys.right) {p.direction(1);p.impulse(15, 0) }}}
    else {
        if (cjs.Keys.left) { p.dir(0);p.impulse(-1, 0)}
        if (cjs.Keys.right) {p.direction(1); p.impulse(1, 0)}}
    return p}
b2.controls.hoppy=function onEachTick(pl){
    if(b2.onGround){
        if(cjs.Keys.left){pl.impulse(-3, -12)}
        if(cjs.Keys.right){pl.impulse(3, -12)}}
    else{if(cjs.Keys.down){pl.impulse(0, 20)}}}



TESTPLAYER=function(control){z()
    control= _pam.toLowerCase() || control||'hoppy'
    w = b2.mW().random(3)
    p = w.player(control)}


