<static> accel :me.Vector2d



    <static> alive :Boolean : true


        <static> canBreakTile :Boolean  : false

            <static> collidable :Boolean
            flag to enable collision detection for this object : true


    <static, readonly> disableTopLadderCollision :Boolean
                    equal true if the entity can go down on a ladder



        <static, readonly> falling :Boolean
                        falling state of the object
                        true if the object is falling
                        false if the object is standing on something



            <static> friction
                            entity current friction




                <static> gravity :Number : 0.98




                    <static, readonly> jumping :Boolean
                                    jumping state of the object




                        <static> maxVel :me.Vector2d



                            <static, readonly> onladder :Boolean
                                            equal true if the entity is on a ladder


                                <static, readonly> onslope :Boolean
                                                equal true if the entity is standing on a slope



                                    <static> renderable :me.Renderable
                                                    The entity renderable object (if defined)



                                        <protected, static> shapes :Object[]
                                                        Entity collision shapes
                                                        (RFU - Reserved for Future Usage)
                                                        Source:
                                                        entity/entity.js, line 365
                                                            <static> type :String
                                                            define the type of the object
                                                            default value : none
                                                            Source:
                                                            entity/entity.js, line 333



                                         <static> vel :me.Vector2d
                                                                entity current velocity
                                                                Source:
                                                                entity/entity.js, line 418
                                                                alpha :Number
                                                                Define the renderable opacity
                                                                Inherited From:
                                                                me.Renderable#alpha
                                                                Source:
                                                                renderable/base.js, line 126
                                                                See:
                                                                me.Renderable#setOpacity
                                                                me.Renderable#getOpacity
                                                                Methods




                                             <static> addShape(shape)
                                                                    add a collision shape to this entity<
                                                                    Parameters:
                                                                    Name	Type	Description
                                                                    shape	me.objet	a shape object
                                                                    Source:
                                                                    entity/entity.js, line 622
                                                                        <static> angleTo(entity) → {Number}
                                                                        return the angle to the specified entity
                                                                        Parameters:
                                                                        Name	Type	Description
                                                                        entity	me.ObjectEntity	Entity
                                                                        Source:
                                                                        entity/entity.js, line 874
                                                                        Returns:
                                                                        angle in radians
                                                                        Type
                                                                        Number




               <static> angleToPoint(vector) → {Number}

               return the angle to the specified point

               Parameters:

               Name	Type	Description

               vector	me.Vector2d	vector

               Returns:

               angle in radians

               Type

               Number



















                   <static> collide(multiple) → {me.Vector2d}
                                                                                Checks if this entity collides with others entities.
                                                                                Parameters:
                                                                                Name	Type	Argument	Default	Description
                                                                                multiple	Boolean	 <optional>
                                                                                false	check for multiple collision
                                                                                Source:
                                                                                entity/entity.js, line 1102
                                                                                Returns:
                                                                                collision vector or an array of collision vector (if multiple collision)me.Rect#collideVsAABB
                                                                                Type
                                                                                me.Vector2d

                   Example
                                                                                // update player movement
                                                                                this.updateMovement();

                                                                                // check for collision with other objects
                                                                                res = this.collide();

                                                                                // check if we collide with an enemy :
                                                                                if (res && (res.obj.type == me.game.ENEMY_OBJECT))
{
    if (res.x != 0)
    {
    // x axis
    if (res.x<0)
    console.log("x axis : left side !");
    else
    console.log("x axis : right side !");
    }
                                                                                else
  {
      // y axis
      if (res.y<0)
      console.log("y axis : top side !");
      else
      console.log("y axis : bottom side !");
      }
                                                                                }
                                                                                    <static> collideType(type, multiple) → {me.Vector2d}
                                                                                    Checks if the specified entity collides with others entities of the specified type.
                                                                                    Parameters:
                                                                                    Name	Type	Argument	Default	Description
                                                                                    type	String			Entity type to be tested for collision
                                                                                    multiple	Boolean	 <optional>
                                                                                    false	check for multiple collision
                                                                                    Source:
                                                                                    entity/entity.js, line 1142
                                                                                    Returns:
                                                                                    collision vector or an array of collision vector (multiple collision)me.Rect#collideVsAABB
                                                                                    Type
                                                                                    me.Vector2d
                                                                                        <static> distanceTo(entity) → {Number}
                                                                                        return the distance to the specified entity
                                                                                        Parameters:
                                                                                        Name	Type	Description
                                                                                        entity	me.ObjectEntity	Entity
                                                                                        Source:
                                                                                        entity/entity.js, line 840
                                                                                        Returns:
                                                                                        distance
                                                                                        Type
                                                                                        Number
                                                                                            <static> distanceToPoint(vector) → {Number}
                                                                                            return the distance to the specified point
                                                                                            Parameters:
                                                                                            Name	Type	Description
                                                                                            vector	me.Vector2d	vector
                                                                                            Source:
                                                                                            entity/entity.js, line 857
                                                                                            Returns:
                                                                                            distance
                                                                                            Type
                                                                                            Number
                                                                                                <protected, static> doClimb(up)
                                                                                                helper function for platform games:
                                                                                                make the entity move up and down
                                                                                                only valid is the player is on a ladder
                                                                                                Parameters:
                                                                                                Name	Type	Description
                                                                                                up	Boolean	will automatically flip vertically the entity sprite
                                                                                                Deprecated:
                                                                                                Yes
                                                                                                Source:
                                                                                                entity/entity.js, line 774
                                                                                                Example
                                                                                                if (me.input.isKeyPressed('up'))
{
    this.doClimb(true);
    }
                                                                                                else if (me.input.isKeyPressed('down'))
{
    this.doClimb(false);
    }
                                                                                                    <protected, static> doJump()
                                                                                                    helper function for platform games:
                                                                                                    make the entity jump
                                                                                                    Deprecated:
                                                                                                    Yes
                                                                                                    Source:
                                                                                                    entity/entity.js, line 806
                                                                                                        <protected, static> doWalk(left)
                                                                                                        helper function for platform games:
                                                                                                        make the entity move left of right
                                                                                                        Parameters:
                                                                                                        Name	Type	Description
                                                                                                        left	Boolean	will automatically flip horizontally the entity sprite
                                                                                                        Deprecated:
                                                                                                        Yes
                                                                                                        Source:
                                                                                                        entity/entity.js, line 750
                                                                                                        Example
                                                                                                        if (me.input.isKeyPressed('left'))
{
    this.doWalk(true);
    }
                                                                                                        else if (me.input.isKeyPressed('right'))
{
    this.doWalk(false);
    }
                                                                                                            <protected, static> draw(context)
                                                                                                            object draw
                                                                                                            not to be called by the end user
                                                                                                            called by the game manager on each game loop
                                                                                                            Parameters:
                                                                                                            Name	Type	Description
                                                                                                            context	Context2d	2d Context on which draw our object
                                                                                                            Source:
                                                                                                            entity/entity.js, line 1176


                                                                                                                <static> flipX(flip)
                                                                                                                Flip object on horizontal axis
                                                                                                                Parameters:
                                                                                                                Name	Type	Description
                                                                                                                flip	Boolean	enable/disable flip
                                                                                                                Source:
                                                                                                                entity/entity.js, line 711
                                                                                                                    <static> flipY(flip)
                                                                                                                    Flip object on vertical axis
                                                                                                                    Parameters:
                                                                                                                    Name	Type	Description
                                                                                                                    flip	Boolean	enable/disable flip
                                                                                                                    Source:
                                                                                                                    entity/entity.js, line 730
                                                                                                                        <protected, static> forceJump()
                                                                                                                        helper function for platform games:
                                                                                                                        force to the entity to jump (for double jump)
                                                                                                                        Deprecated:
                                                                                                                        Yes
                                                                                                                        Source:
                                                                                                                        entity/entity.js, line 825
                                                                                                                            <protected, static> onCollision(res, obj)
                                                                                                                            onCollision Event function
                                                                                                                            called by the game manager when the object collide with shtg
                                                                                                                            by default, if the object type is Collectable, the destroy function is called
                                                                                                                            Parameters:
                                                                                                                            Name	Type	Description
                                                                                                                            res	me.Vector2d	collision vector
                                                                                                                            obj	me.ObjectEntity	the other object that hit this object
                                                                                                                            Source:
                                                                                                                            entity/entity.js, line 647
                                                                                                                                <static> onDestroyEvent()
                                                                                                                                OnDestroy Notification function
                                                                                                                                Called by engine before deleting the object
                                                                                                                                Source:
                                                                                                                                entity/entity.js, line 1215
                                                                                                                                    <protected, static> setFriction(x, y)
                                                                                                                                    set the entity default friction
                                                                                                                                    Parameters:
                                                                                                                                    Name	Type	Description
                                                                                                                                    x	Number	horizontal friction
                                                                                                                                    y	Number	vertical friction
                                                                                                                                    Source:
                                                                                                                                    entity/entity.js, line 697
                                                                                                                                        <protected, static> setMaxVelocity(x, y)
                                                                                                                                        cap the entity velocity to the specified value
                                                                                                                                        Parameters:
                                                                                                                                        Name	Type	Description
                                                                                                                                        x	Number	max velocity on x axis
                                                                                                                                        y	Number	max velocity on y axis
                                                                                                                                        Source:
                                                                                                                                        entity/entity.js, line 683
                                                                                                                                            <protected, static> setVelocity(x, y)
                                                                                                                                            set the entity default velocity
                                                                                                                                            note : velocity is by default limited to the same value, see setMaxVelocity if needed
                                                                                                                                            Parameters:
                                                                                                                                            Name	Type	Description
                                                                                                                                            x	Number	velocity on x axis
                                                                                                                                            y	Number	velocity on y axis
                                                                                                                                            Source:
                                                                                                                                            entity/entity.js, line 664
                                                                                                                                                <static> updateColRect(x, w, y, h)
                                                                                                                                                specify the size of the hit box for collision detection
                                                                                                                                                (allow to have a specific size for each object)
                                                                                                                                                e.g. : object with resized collision box :

                                                                                                                                                Parameters:
                                                                                                                                                Name	Type	Description
                                                                                                                                                x	Number	x offset (specify -1 to not change the width)
                                                                                                                                                w	Number	width of the hit box
                                                                                                                                                y	Number	y offset (specify -1 to not change the height)
                                                                                                                                                h	Number	height of the hit box
                                                                                                                                                Source:
                                                                                                                                                entity/entity.js, line 605
                                                                                                                                                    <static> updateMovement() → {me.Vector2d}
                                                                                                                                                    handle the player movement, "trying" to update his position
                                                                                                                                                    Source:
                                                                                                                                                    entity/entity.js, line 965
                                                                                                                                                    Returns:
                                                                                                                                                    a collision vector
                                                                                                                                                    Type
                                                                                                                                                    me.Vector2d
                                                                                                                                                    Example
                                                                                                                                                    // make the player move
                                                                                                                                                    if (me.input.isKeyPressed('left'))
{
    this.vel.x -= this.accel.x * me.timer.tick;
    }
                                                                                                                                                    else if (me.input.isKeyPressed('right'))
{
    this.vel.x += this.accel.x * me.timer.tick;
    }
                                                                                                                                                    // update player position
                                                                                                                                                    var res = this.updateMovement();

                                                                                                                                                    // check for collision result with the environment
                                                                                                                                                    if (res.x != 0)


                                                                                                                                                    // x axis
{if (res.x<0) {console.log("x axis : left side !")} else   {console.log("x axis : right side !")   }


else if(res.y != 0)
{
    // y axis
    if (res.y<0)
    console.log("y axis : top side !");
    else
    console.log("y axis : bottom side !");

    // display the tile type
    console.log(res.yprop.type)
    }

 // check player status after collision check
var updated = (this.vel.x!=0 || this.vel.y!=0);



Type Definitions : onTileBreak - a callback when an entity break a tile
