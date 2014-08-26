
//BRAIN GAMES
MEMORY=function(){z()

    grid=[

        ['guy','me',0,0],
        [0,'me',0,0],
        [0,0,0,0],
        [0,'me','chicks','me']

    ]



wGuy=function(){
    var x=0,y=0
    _e(grid,  function(row,i){
        _e(row,function(cell,j){if(cell=='guy'){ x=j, y=i}})})


return {x:x,y:y}}


    dGuy=function(){

        var p=wGuy()

        grid[p.y][p.x]=0

        if( grid[p.y+1][p.x]=='chicks') {alert('win')}
        else if( grid[p.y+1][p.x]==0){
            grid[p.y+1][p.x]='guy'
            playerGrid()

        } else {alert('lose!')}}



    rGuy=function(){
        var p=wGuy()
        grid[p.y][p.x]=0

        if( grid[p.y][p.x+1]=='chicks') {alert('win')}
        else if( grid[p.y][p.x+1]==0) {
            grid[p.y][p.x+1]= 'guy'
            playerGrid()} else {alert('lose!')}}




    s=St(1000,1000).a()

    s.a(ct=Ct())

    _e(grid, function(row,i){
        _e(row, function(cell,j){
            ct.a(rct().xy(j*100+100,i*100+100))
                if(cell=='me'){
                    ct.b('me',
                        function(b){  b.xy(j*100+100,  i*100+100 ).sxy(.1)})}})})




    playerGrid=function(){  _e(grid, function(row,i){

        _e(row, function(cell,j){

            ct.a(rct().xy(j*100+100,i*100+100))

            if(cell=='guy'||cell=='chicks'){  ct.b(cell, function(b){ b.xy(  j*100+100,  i*100+100 ).sxy(.1)})}

        })})}


     T( function(){ ct.XX()

              s.a(ct=Ct())
             playerGrid()},  3000)




    kD('d',dGuy)

    kD('r',rGuy)



}




PINBALL=function(){
    mW({w:'makeWallsPinball'})

baa(215,520,30)

bii(215,100,100,10)
    ba(215,90)


   j1= w.j(
        rev(
            r1=baa(100,430),
            r2=bi(100,430, 100,25),
            0,0,
            40,0
        ).lm(150,250)
   )


j2= w.j(
    rev(
        r1b=baa(330,430),

        r2b=bi(330,430, 100,25),

        0,0,
        40,0

    ).lm(-70,30)
)
    bii(420,400,20,2000)

    //makeTim(10)
    //ba(300,200,50)


flip=function(){
    r2.aI(100, 0)

    r2b.aI(-100,0)
}


    kD('u',flip)
    kD('d', function(){
        ba(rnd()*300+40  ,140,20)} )
}















SLING=function(){



    startpoint={}


    slingshot=Shape.new()

     addChild(self.slingshot)


    onMouseDown=function(event){

           if(ball.hitTestPoint(event.x, event.y)){
               mouseJoint = w.j( b2.createMouseJointDef(self.ground, self.ball.body, event.x, event.y, 100000) )

               startpoint.x = event.x
               startpoint.y = event.y

           }
       }


    onMouseMove=function(event){
         if(mouseJoint !=null){

             mouseJoint.setTarget(event.x, event.y)
             slingshot.clear()
             self.slingshot.setLineStyle(5, 0xff0000, 1)
             self.slingshot.beginPath()
             self.slingshot.moveTo(self.startpoint.x, self.startpoint.y)
             self.slingshot.lineTo(event.x, event.y)
             self.slingshot.endPath()}
     }


    onMouseUp=function(event){



    if (mouseJoint != null){
            w.dJ( mouseJoint)

            mouseJoint = null

     slingshot.clear()

     strength = 1

    xVect = ( startpoint.x-event.x)*strength
    yVect = ( startpoint.y-event.y)*strength

     ball.body.applyLinearImpulse(  xVect,   yVect, ball.getX(), ball.getY())

        }
        }

}