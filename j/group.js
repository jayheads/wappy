A Group is a container for display objects that allows for fast pooling and object recycling. 
    Groups can be nested within other Groups and have their own local transforms.

    new Group(game, parent, name, addToStage<optional>=false, enableBody, physicsBodyType)
 
    parent	Phaser.Group | Phaser.Sprite | null
The parent Group, DisplayObject or DisplayObjectContainer that this Group will be added to. 
    If undefined it will use game.world. 
    If null it won't be added to anything.
 
                                                              
addToStage	  
If set to true this Group will be added directly to the Game.Stage instead of Game.World.

    
    enableBody	boolean	 <optional>
false
If true all Sprites created with Group.create or Group.createMulitple will have a physics body created on them. Change the body type with physicsBodyType.

    physicsBodyType	number	 <optional>
0


If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.

 
Members
    <static, constant> RETURN_CHILD :number

Type:

    number
 
    <static, constant> RETURN_NONE :number

Type:

    number
 
    <static, constant> RETURN_TOTAL :number

Type:

    number
 
    <static, constant> SORT_ASCENDING :number

Type:

    number
 
    <static, constant> SORT_DESCENDING :number

Type:

    number
 
alive

Properties:

    
alive	boolean
The alive property is useful for Groups that are children of other Groups and need to be included/excluded in checks like forEachAlive.

    Default Value:
    true
 


alpha
 
  
angle - angle of rotation given in degrees, where 0 degrees = to the right.
The angle of rotation of the Group container. 
    This will adjust the Group container itself by modifying its rotation. 
    This will have no impact on the rotation value of its children, 
    but it will update their worldTransform and on-screen position.
 
 
  
cameraOffset Phaser.Point
If this object is fixedToCamera then this stores the x/y offset that its drawn at, from the top-left of the camera view.

 
classType
The type of objects that will be created when you use Group.create or Group.createMultiple. 
    Defaults to Phaser.Sprite. 
    When a new object is created it is passed the following parameters to its constructor: game, x, y, key, frame.
 
    
cursor - The current display object that the Group cursor is pointing to.
The cursor is a simple way to iterate through the objects in a Group using 
the Group.next and Group.previous functions. 
    The cursor is set to the first child added to the Group and doesn't change unless you call next, ' +
'previous or set it directly with Group.cursor.
 


 
enableBody boolean=true
If true all Sprites created by, or added to this Group, will have a physics body enabled on them. 
    Change the body type with Group.physicsBodyType.

   
 
exists	boolean=true -If exists is true the Group is updated, otherwise it is skipped.

   
    
 
fixedToCamera//boolean Set to true to fix this Group to the Camera at its current world coordinates.


    A Group that is fixed to the camera uses its x/y coordinates as offsets from the top left of the camera. 
    These are stored in Group.cameraOffset. 
    Note that the cameraOffset values are in addition to any parent in the display list. 
    So if this Group was in a Group that has x: 200, then this will be added to the cameraOffset.x

 
  
 
<readonly> length //The total number of children in this Group, regardless of their exists/alive status.


name //A name for this Group. Not used internally but useful for debugging.


physicsBodyType number
If Group.enableBody is true this is the type of physics body that is created on new Sprites. 
    Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.


rotation//angle of rotation given in radians.
The angle of rotation of the Group container. This will adjust the Group container itself by modifying its rotation. This will have no impact on the rotation value of its children, but it will update their worldTransform and on-screen position.

  

    
scale
 
    <readonly> total
 
total //total number of children in this Group who have a state of exists = true.

 

visible //The visible state of the Group. Non-visible Groups and all of their children are not rendered.


x

The x coordinate of the Group container. You can adjust the Group container itself by modifying its coordinates. This will have no impact on the x/y coordinates of its children, but it will update their worldTransform and on-screen position.

   


x/y
The y coordinate of the Group container. 
    You can adjust the Group container itself by modifying its coordinates. 
    This will have no impact on the x/y coordinates of its children, but it will update their worldTransform and on-screen position.


 
z	number
The z-depth value of this object within its Group (remember the World is a Group as well). 
    No two objects in a Group can have the same z value.


/////////
    //////
    /////////////
    //////






add(child) → {*}

Adds an existing object to this Group. The object can be an instance of Phaser.Sprite, Phaser.Button or any other display object.
    The child is automatically added to the top of the Group, so renders on-top of everything else within the Group.
    If you need to control that then see the addAt method.




addAt(child, index) → {*}





        



        
        
        
        
ascendingSortHandler(a, b)

An internal helper function for the sort process.

    Parameters:


a	object The first object being sorted.

    b	object The second object being sorted.

        
        
        
        

bringToTop(child) → {*} Returns:  The child that was moved.







        
callAll(method, context, parameter)

Calls a function on all of the children regardless if they are dead or alive (see callAllExists if you need control over that) After the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child.

    Parameters:


method	string
A string containing the name of the function that will be called. The function must exist on the child.

    context	string	 <optional>
null
A string containing the context under which the method will be executed. Set to null to default to the child.

    parameter	*	 <repeatable>
Additional parameters that will be passed to the method.

 
            
            

            
            
callAllExists(callback, existsValue, parameter<repeatable>)

Calls a function on all of the children that have exists=true in this Group.
After the existsValue parameter you can add as many parameters as you like,
which will all be passed to the child callback.

Only children with exists=existsValue will be called.









        <protected> callbackFromArray(child, callback, length)

        Returns a reference to a function that exists on a child of the Group based on the given callback array.

        Parameters:

        
        child	object
        The object to inspect.

        callback	array
        The array of function names.

        length	number
        The size of the array (pre-calculated in callAll).






        countDead() → {number}  Call this function to find out how many members of the group are dead.
        countLiving() → {number} Call this function to find out how many members of the group are alive.

        create(x, y, key, frame, exists) → {Phaser.Sprite|object}
        Automatically creates a new Phaser.Sprite object and adds it to the top of this Group.
        You can change Group.classType to any object and this call will create an object of that type instead, but it should extend either Sprite or Image.


        key	string - The Game.cache key of the image that this Sprite will use.
        frame	number | string	 <optional>  If the Sprite image contains multiple frames you can specify which one to use here.

        exists	boolean	 <optional>
            true
            The default exists state of the Sprite.

      
            Returns:

            The child that was created. Will be a Phaser.Sprite unless Group.classType has been changed.



            createMultiple(quantity, key, frame, exists)
            Automatically creates multiple Phaser.Sprite objects and adds them to the top of this Group.
            Useful if you need to quickly generate a pool of identical sprites, such as bullets.
            By default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the Group.x/y)
            You can change Group.classType to any object and this call will create an object of that type instead,
            but it should extend either Sprite or Image.
            key	string-The Game.cache key of the image that this Sprite will use.
            frame	number | string	 <optional> If the Sprite image contains multiple frames you can specify which one to use here.
                exists=false-The default exists state of the Sprite.

               





                    customSort(sortHandler, context)

                    This allows you to use your own sort handler function.
                It will be sent two parameters: the two children involved in the comparison (a and b). It should return -1 if a > b, 1 if a < b or 0 if a === b.

                        Parameters:
                        sortHandler	function Your sort handler function. It will be sent two parameters: the two children involved in the comparison. It must return -1, 1 or 0.
                        context	object The scope in which the sortHandler is called.

                      




                        descendingSortHandler(a, b) An internal helper function for the sort process.-a The first object being sorted, b The second object being sorted.

                    



                        destroy(destroyChildren, soft) Destroys this Group. Removes all children, then removes the container from the display list and nulls references.

                        Parameters

                        destroyChildren	boolean	 <optional>
                            true
                            Should every child of this Group have its destroy method called?

                            soft	boolean	 <optional>
                                false
                                A 'soft destroy' (set to true) doesn't remove this Group from its parent or null the game reference. Set to false and it does.







                            --addAll(property, amount, checkAlive, checkVisible)

                            --divideAll(property, amount, checkAlive, checkVisible)
                            --forEach(callback, callbackContext, checkExists)
                            --forEachAlive(callback, callbackContext) - can pass pams:: For example: Group.forEachAlive(causeDamage, this, 500)
                            --forEachDead(callback, callbackContext) -For example: Group.forEachDead(bringToLife, this)
                            --forEachExists(callback, callbackContext) -Group.forEachExists(causeDamage, this, 500)
                            --getAt(index) → {*} -If the index was out of bounds then this will return -1.
                            --getBottom() → {Any}
                            --getFirstAlive() → {Any} -This is handy for checking if everything has been wiped out, or choosing a squad leader, etc. The first alive child, or null if none found.
                            --getFirstDead() → {Any}
                            --getFirstExists(state) → {Any} -The first child, or null if none found.
                            --getIndex(child) → {number} -Get the index position of the given child in this Group or -1 if it's not a member of this Group. This should always match the childs z property.
                            --getRandom(startIndex, length) → {Any} Returns a member at random from the group.
                            --getTop() → {Any} Returns the child at the top of this Group. The top is the one being displayed (rendered) above every other child.
                            --hasProperty(child, key) → {boolean} Checks if the child has the given property. Will scan up to 4 levels deep only. -key: An array of strings that make up the property.
                            --moveDown(child) → {*} Moves the given child down one place in this Group unless it's already at the top. Returns: The child that was moved.
                            --moveUp(child) → {*}
                            --multiplyAll(property, amount, checkAlive, checkVisible)
                            --next() → {*} Advances the Group cursor to the next object in the Group. If it's at the end of the Group it wraps around to the first object. Returns the child the cursor now points to.
                            --previous() → {*}
                            --remove(child, destroy) → {boolean} Removes the given child from this Group. This will dispatch an onRemovedFromGroup event from the child (if it has one), reset the Group cursor and optionally destroy the child. You can optionally call destroy on the child that was removed. Returns: true if the child was removed from this Group, otherwise false.
                            --removeAll(destroy) Removes all children from this Group, setting all group properties to null. The Group container remains on the display list. destroy	boolean	 <optional>-false-You can optionally call destroy on the child that was removed.
                            --removeBetween(startIndex, endIndex, destroy) -endIndex must be higher than startIndex. If undefined this method will remove all children between startIndex and the end of the Group.-destroy	boolean	 <optional>-false -You can optionally call destroy on the child that was removed.
                            --replace(oldChild, newChild) → {*}--Replaces a child of this Group with the given newChild. The newChild cannot be a member of this Group.-Returns the oldChild that was replaced within this Group.
                            --resetCursor(index) → {*}  Sets the Group cursor to the first object in the Group.  If the optional index parameter is given it sets the cursor to the object at that index instead.  Returns: The child the cursor now points to.
                            --reverse()-Reverses all children in this Group. Note that this does not propagate, only direct children are re-ordered.
                            --sendToBack(child) → {*} Returns: The child that was moved.


                                    --iterate(key, value, returnType, callback, callbackContext) → {any}
                                    Iterates over the children of the Group.
                            When a child has a property matching key that equals the given value, it is considered as a match.
                            Matched children can be sent to the optional callback, or simply returned or counted.
                            You can add as many callback parameters as you like, which will all be passed to the callback along with the child, after the callbackContext parameter.
                                    Parameters:
                                    key	string-The child property to check, i.e. 'exists', 'alive', 'health'
                                    value	any-If child.key === this value it will be considered a match. Note that a strict comparison is used.
                                    returnType	number-How to return the data from this method. Either Phaser.Group.RETURN_NONE, Phaser.Group.RETURN_TOTAL or Phaser.Group.RETURN_CHILD.
                                    callback	function	 <optional>-null-Optional function that will be called on each matching child. Each child of the Group will be passed to it as its first parameter.
                                        callbackContext	Object	 <optional>-The context in which the function should be called (usually 'this').
                                            Returns: Returns either a numeric total (if RETURN_TOTAL was specified) or the child object.


                                            --set(child, key, value, checkAlive, checkVisible, operation, force) → {boolean}

                                                                    This function allows you to quickly set a property on a single child of this Group to a new value.
                                                                The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.

                                                                    Parameters:

                                                                    
                                                                    child	Phaser.Sprite
                                                                    The child to set the property on.

                                                                    key	string
                                                                    The property, as a string, to be set. For example: 'body.velocity.x'

                                                                    value	*
                                                                    The value that will be set.

                                                                    checkAlive	boolean	 <optional>
                                                                        false
                                                                        If set then the child will only be updated if alive=true.

                                                                        checkVisible	boolean	 <optional>
                                                                            false
                                                                            If set then the child will only be updated if visible=true.

                                                                            operation	number	 <optional>
                                                                                0
                                                                                Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.

                                                                                force	boolean	 <optional>
                                                                                    false
                                                                                    If force is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.


                                                                                    Returns:

                                                                                    True if the property was set, false if not.

                                                                                    Type
                                                                                    boolean

                                                                                --setAll(key, value, checkAlive, checkVisible, operation, force)

                                                                                    This function allows you to quickly set the same property across all children of this Group to a new value. This call doesn't descend down children, so if you have a Group inside of this Group, the property will be set on the Group but not its children. If you need that ability please see Group.setAllChildren.

                                                                                    The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.




                                                                                                    setAllChildren(key, value, checkAlive, checkVisible, operation, force)

                                                                                                    This function allows you to quickly set the same property across all children of this Group, and any child Groups, to a new value.

                                                                                                    If this Group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom. Unlike with Group.setAll the property is NOT set on child Groups itself.

                                                                                                    The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.

                                                                                                    Parameters:

                                                                                                    
                                                                                                    key	string: The property, as a string, to be set. For example: 'body.velocity.x'

                                                                                                 operation	:Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.

                                                                                                force:false- If force is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.











                                                                                                                    --setProperty(child, key, value, operation, force) → {boolean}

                                                                                                                    Sets a property to the given value on the child.
                                                                                The operation parameter controls how the value is set.
                                                                                Operation 0 means set the existing value to the given value,
                                                                                or if force is false create a new property with the given value.
                                                                                1 will add the given value to the value already present.
                                                                                2 will subtract the given value from the value already present.
                                                                                3 will multiply the value already present by the given value.
                                                                                4 will divide the value already present by the given value.

                                                                                                                    key	-An array of strings that make up the property that will be set.


                                                                                                                            Returns: True if the property was set, false if not.








                                                                                                                            --sort(index, order)
                                                                                                                            Call this function to sort the group according to a particular value and order.
                                                                                                                            For example to depth sort Sprites for Zelda-style game you might call
                                                                                                                            group.sort('y', Phaser.Group.SORT_ASCENDING) at the bottom of your State.update().

                                                                                                                            index	string	 <optional> The string name of the property you want to sort on. Defaults to the objects z-depth value.

                                                                                                                                order	number	 <optional>
                                                                                                                                    Phaser.Group.SORT_ASCENDING -The Group constant that defines the sort order. Possible values are Phaser.Group.SORT_ASCENDING and Phaser.Group.SORT_DESCENDING.








                                                                                                                                    --subAll(property, amount, checkAlive, checkVisible)
                                                                                                                               --swap(child1, child2) Swaps the position of two children in this Group. Both children must be in this Group. You cannot swap a child with itself, or swap un-parented children, doing so will return false.
                                                                                                                                --xy(index, x, y)