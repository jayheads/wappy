allowGravity//true
allowRotation//true

bottom //<readonly> The bottom value of this Body (same as Body.y + Body.height)
center //center	Phaser.Point //The center coordinate of the Physics Body.
right<readonly> number //The right value of this Body (same as Body.x + Body.width)

angle  //<readonly> //The angle of the Body in radians as calculated by its velocity, //rather than its visual angle.
newVelocity<readonly>Phaser.Point
preRotation<readonly> number //previous rotation of the physics body.
prev<readonly> Phaser.Point previous position of the physics body.
    speed<readonly> The speed of the Body as calculated by its velocity.

acceleration
angularAcceleration // 0
angularDrag // 0
angularVelocity //0

blocked // An object containing on which faces this Body is blocked from moving, if any.// For example if blocked.up is true then the Body cannot move up.

bounce //The elasticitiy of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.

deltaMax //Phaser.Point The Sprite position is updated based on the delta x/y values. You can set a cap on those (both +-) using deltaMax.
maxAngular //1000//maximum angular velocity in pixels per second sq. that the Body can reach.
maxVelocity //maximum velocity in pixels per second sq. that the Body can reach.

facing //number A const reference to the direction the Body is traveling or facing.

width/height
halfHeight/	halfWidth//calculated height / 2 of the physics body.
sourceHeight/sourceWidth<readonly> un-scaled original size.

mass //1

position
x/y
offset //Phaser.Point //offset of the Physics Body from the Sprite x/y position.

rotation

velocity


    overlapX/overlapY
When this body collides with another, the amount of overlap is stored here.
    The amount of horizontal/vertical overlap during the collision.



    phase //Is this Body in a preUpdate (1) or postUpdate (2) state?

immovable // boolean //false - An immovable Body will not receive any impacts from other bodies.

moves //boolean //true
If you have a Body that is being moved around the world via a tween or a Group motion,
    but its local x/y position never actually changes,
    then you should set Body.moves = false to move it manually.
    Otherwise it will most likely fly off the screen.
    If you want the physics system to move the body around,
    then set moves to true.



    tilePadding Phaser.Point
If this is an especially small or fast moving object
then it can sometimes skip over tilemap collisions if it moves through a tile in a step.
    Set this padding value to add extra padding to its bounds when checking for tile collision.
    tilePadding.x applied to its width, y to its height.

    drag	Phaser.Point  //drag applied to the motion of the Body.


embedded boolean //Body embed value.
If a body is overlapping with another body,
    but neither of them are moving (maybe they spawned on-top of each other?)
this is set to true.







    game

gravity Phaser.Point
A local gravity applied to this Body.
    If non-zero this over rides any world gravity,
    unless Body.allowGravity is set to false.


    touching
This object is populated with boolean values when the Body collides with another.
    touching.up = true means the collision happened to the top of this Body for example.


wasTouching //An object containing previous touching results.
This object is populated with previous touching values from the bodies previous collision.




    checkCollision //An object containing allowed collision.
Set the checkCollision properties to control which
directions collision is processed for this Body.
    For example checkCollision.up = false means
it won't collide when the collision happened while moving up.



collideWorldBounds //boolean Should the Body collide with the World bounds?
A Body can be set to collide against the World bounds automatically
and rebound back into the World if this is set to true.
    Otherwise it will leave the World.

    customSeparateX/Y
This flag allows you to disable the custom x separation that takes place by
Physics.Arcade.separate.
    Used in combination with your own collision processHandler
you can create whatever type of collision response you need.
    Use a custom separation system or the built-in one? //false

    //////////////////////////////////////////


checkWorldBounds()<protected>Internal method.

deltaX() → {number}//delta x value. The difference between Body.x now and in the previous step.
deltaY() → {number} Returns the delta y value. The difference between Body.y now and in the previous step.
deltaZ() → {number} Returns the delta z value. The difference between Body.rotation now and in the previous step.
deltaAbsX() → {number}//absolute delta x value.
deltaAbsY() → {number}//absolute delta y value.


reset(x,y)//Resets all Body values (velocity, acceleration, rotation, etc)
destroy() //Removes this bodies reference to its parent sprite, freeing it up for gc.

hitTest(x, y) // {boolean}True if the given coordinates are inside this Body, otherwise false.


onFloor() // {boolean} Returns true if the bottom of this Body is in contact with either the world bounds or a tile.
onWall() // {boolean} //Returns true if either side of this Body is in contact with either the world bounds or a tile.


setSize(width, height, offsetX, offsetY)
You can modify the size of the physics Body to be any dimension you need.
    So it could be smaller or larger than the parent Sprite.
    You can also control the x and y offset,
    which is the position of the Body relative to the top-left of the Sprite.
Parameters:width,height,offsetX	number, offsetY	number//The X offset of the Body from the Sprite position.


    <protected> updateBounds()


