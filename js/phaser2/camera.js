


A Camera is your view into the game world.
    It has a position and size and renders only those objects within its field of view.
    The game automatically creates a single Stage sized camera on boot.
    Move the camera around the world with Phaser.Camera.x/y

    new Camera(game, id(for future with mult. cams), x, y, width, height)


width/height
Gets or sets the cameras width.
    The Cameras width.
    By default this is the same as the Game size and should not be adjusted for now.



atLimit //	boolean Whether this camera is flush with the World Bounds or not.


bounds	Phaser.Rectangle
The Rectangle in which the Camera is bounded. Set to null to allow for movement anywhere.
    The Camera is bound to this Rectangle and cannot move outside of it.
    By default it is enabled and set to the size of the World.
    The Rectangle can be located anywhere in the world and updated as often as you like.
    If you don't wish the Camera to be bound at all then set this to null. ' +
'The values can be anything and are in World coordinates, with 0,0 being the center of the world.





deadzone //Phaser.Rectangle - Moving inside this Rectangle will not cause camera moving.



displayObject //	PIXI.DisplayObject -The display object to which all game objects are added. Set by World.boot



 
scale //Phaser.Point The scale of the display object to which all game objects are added. Set by World.boot

target	//Phaser.Sprite - If the camera is tracking a Sprite, this is a reference to it, otherwise null. Default Value: null




view	Phaser.Rectangle
Camera view. The view into the world we wish to render (by default the game dimensions).

The x/y values are in world coordinates, not screen coordinates,
    the width/height is how many pixels to render.
    Objects outside of this view are not rendered if set to camera cull.



visible //true - Whether this camera is visible or not
 


    
x/y number Gets or sets the cameras x/y position.
The Cameras x/y coordinate. This value is automatically clamped if it falls outside of the World bounds.


 
//////////////////////
    //////////
//////////////////////

checkWorldBounds() //ensure the camera doesn't venture outside of the game world.


follow(target, style) //Tells this camera which sprite to follow.
target	Phaser.Sprite | Phaser.Image | Phaser.Text - The object you want the camera to track. Set to null to not follow anything.
    style	number	 <optional>
Leverage one of the existing "deadzone" presets. If you use a custom deadzone, ignore this parameter and manually specify the deadzone after calling follow().

unfollow()//Sets the Camera follow target to null, stopping it from following an object if it's doing so.


focusOn(displayObject) //Move the camera focus on a display object instantly. object Must have visible x/y properties.
focusOnXY(x,y) //Move the camera focus on a location instantly.


setBoundsToWorld() //Update the Camera bounds to match the game world.

setPosition(x,y)
A helper function to set both the X and Y properties of the camera at once
without having to use game.camera.x and game.camera.y.

setSize(width,height) //desired width/height) //Sets the size of the view rectangle



update() //Update focusing and scrolling.
reset() //Resets the camera back to 0,0 and un-follows any object it may have been tracking.

  