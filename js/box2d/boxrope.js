
public class rope extends Sprite {

        // ceiling

    bodyDef = new b2BodyDef()


    bodyDef.position.x = 8.5

    bodyDef.position.y = 0

    body = world.CreateBody( bodyDef )


    //make a poly fixture
    boxDef = new b2PolygonDef()

    //define rect dims
    boxDef.SetAsBox( 2, .5 )

    //set den, fric, rest
    boxDef.density = 0
    boxDef.friction = 0.5
    boxDef.restitution = 0.2

    body.CreateShape( boxDef )

    link = body

        // rope
        for ( var i = 1; i <= 10; i++ ) {

            // rope segment

        bodyDef = new b2BodyDef()
            bodyDef.position.x = 8.5
            bodyDef.position.y = i

        boxDef = new b2PolygonDef()
            boxDef.SetAsBox(0.1, 0.5)
            boxDef.density=100
            boxDef.friction=0.5
            boxDef.restitution=0.2
        body = world.CreateBody( bodyDef )


        body.CreateShape( boxDef )
            // joint


      revolute_joint.Initialize(

          link,

          body,

          bV(8.5, i -0.5)

      )


        world.CreateJoint( revolute_joint )

        body.SetMassFromShapes()

            // saving the reference of the last placed link

        link = body

        }


        // final body
        bodyDef.position.x=8.5;
        bodyDef.position.y=11;

    boxDef = new b2PolygonDef();

    boxDef.SetAsBox(0.5,0.5);

    boxDef.density=2;

    boxDef.friction=0.5;

    boxDef.restitution=0.2;


    body=m_world.CreateBody(bodyDef);

    body.CreateShape(boxDef);

    revolute_joint.Initialize(link, body, new b2Vec2(8.5, 10.5));

    m_world.CreateJoint(revolute_joint);

    body.SetMassFromShapes();


}
