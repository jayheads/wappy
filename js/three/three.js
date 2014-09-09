$3=THREE

makeScene=function(){ z()
    ren=renderer=new $3.WebGLRenderer()
    ren.setSize(W(),H())
    document.body.appendChild(ren.domElement)
    return new THREE.Scene()}
tV=function(a,b,c){return new THREE.Vector3(a,b,c)}
tC=function(a){return new THREE.Color(a)}

MeshBM=MBM=function(a){return new $3.MeshBasicMaterial(a)}


MeshFM=MFM=function(a){return new $3.MeshFaceMaterial(a)}


RAF=requestAnimationFrame

pCam=function(a,b,c,d){return new $3.PerspectiveCamera(a,b,c,d)}

Mesh=function(a,b){return new $3.Mesh(a,b)}

CubeGeo=function(a,b,c){return new $3.CubeGeometry(a,b,c)}

Face3=function(a,b,c){return new THREE.Face3(a,b,c)}

Face4=function(a,b,c,d){return new THREE.Face4(a,b,c,d)}

Geo=function(){return new THREE.Geometry()}
CylGeo=function(a,b,c,d,e){return new THREE.CylinderGeometry(a,b,c,d,e)}
VertexColors=THREE.VertexColors
DoubleSide=THREE.DoubleSide



THRE=function(){scene=makeScene()

    cam=pCam(75,W()/H(),0.1,1000)

    cam.position.z=10


    scene.add(
        cube=Mesh(
            CubeGeo(1,2,3),
            MeshBM({color:'red'})
        ))


    render=function(){RAF(render)
        cube.rotation.x+=0.2
        cube.rotation.y+=0.1
        cam.position.z-=.01
        ren.render(scene,cam)}
    render()}






THREEE=function(){scene=makeScene()

    cam=pCam(45,W()/H(),1,100)
    cam.position.set(0,0,10)
    cam.lookAt(scene.position)
    scene.add(cam)

    triGeo=Geo()

    triGeo.vertices.push(
        tV(0,1,0),
        tV(-1,-1,0),
        tV(1,-1,0))

    triGeo.faces.push(
        Face3(0,1,2))



    vC=triGeo.faces[0].vertexColors
    vC[0]=tC('red')
    vC[1]=tC('yellow')
    vC[2]=tC('blue')


    triMesh=Mesh(
        triGeo,
        MBM({
            vertexColors:VertexColors,
            side:DoubleSide}))
    triMesh.position.set(-1.5,0,4)
    scene.add(triMesh)



    sqGeo=Geo()
    sqGeo.vertices.push(
        tV(-1,1,0),
        tV(1,1,0),
        tV(1,-1,0),
        tV(-1,-1,0))

    sqGeo.faces.push(Face4(0,1,2,3))

    sqMesh=Mesh(
        sqGeo,
        MBM({
            color:'green',
            side:DoubleSide}))

    sqMesh.position.set(1.5,0,4)
    scene.add(sqMesh)



    render=function(){RAF(render)
        triMesh.rotation.y += .1
        sqMesh.rotation.x -= .075
        renderer.render(scene,cam)}

    render()}










 THREEEE=function(){



     scene=makeScene()

     cam = pCam(45,W()/H(),1,100)//Parameters for the perspective  // camera are   // ... field of view (FOV), // ... aspect ratio (usually set to the quotient of canvas width to canvas height)// ... near and   // ... far.

     // Near and far define the cliping planes of the view frustum. Three.js provides an  example (http://mrdoob.github.com/three.js/examples/ -> canvas_camera_orthographic2.html), which allows to play around with these  parameters.

     cam.position.set(0,0,10) // The camera is moved 10 units towards the z axis to allow looking to the center of  the scene.

     cam.lookAt(scene.position)

     scene.add(cam)



                          // To create a pyramid, we use THREE.CylinderGeometry. By its five parameters, we are able to create the geometry of the pyramid (subtype of a cylinder).
                         // Parameter 1 'radiusTop': Controls the radius of the upper end of the cylinder. If we set to to '0', we have a cone.
                          // Parameter 2 'radiusBottom': Controls the radius of the lower end.
                         // Parameter 3 'height': Sets the height of the cylinder.
                          // Parameter 4 'segments': Number of segments, forming the cylindrical shell. To create a pyramid, we choose '4'.
                           // Parameter 5 'openEnded': Allows to have open ends ('true') or closed ends ('false')  of the cylindern. Since the pyramid shall have a bottom face, we set it to 'false'.


     pyrGeo = CylGeo(0,1.5,1.5,4,false)

     // Coloring the faces with vertex colors is a bit tricky, but allows us to see how to
                           // loop through the faces and check whether they have three or four vertices.
                          // With a simple 'for'-loop we run through all faces, which are accessed by their index.
                          // The 'instanceof' operator gives the possibility to check, whether the current face is
                         // a THREE.Face4 or THREE.Face3. Depending on its object type, we set three or four
                         // vertex colors. For THREE.Face4 we switch the colors of vertex 1 and 2 for every
                           // second face because we want the lower vertices having the same colors as the
                          // neighbour face. Vertex 0 and 3 are the upper vertices, which are always red.


         for(i = 0; i < pyrGeo.faces.length; i++){

             if(pyrGeo.faces[i] instanceof THREE.Face4){

                 pyrGeo.faces[i].vertexColors[0] = tC(0xFF0000);

                                     if((i%2)==0){
                                         pyrGeo.faces[i].vertexColors[1]=tC(0x00FF00)
                                         pyrGeo.faces[i].vertexColors[2]=tC(0x0000FF)}

                                     else{
                                         pyrGeo.faces[i].vertexColors[1]=tC(0x0000FF)
                                         pyrGeo.faces[i].vertexColors[2]=tC(0x00FF00)}

                                     pyrGeo.faces[i].vertexColors[3] = tC(0xFF0000)}

                                 else {
                                          pyrGeo.faces[i].vertexColors[0] = tC(0xFF0000)
                                          pyrGeo.faces[i].vertexColors[1] = tC(0x00FF00)
                                          pyrGeo.faces[i].vertexColors[2] = tC(0x0000FF)}}

                          // To activate the vertex color, we have to set 'vertexColors' attribute to
                           // 'THREE.VertexColors'. Otherwise they won't be displayed.
                          // Create a basic material, supporting vertex colors. Activate the 'doubleSided'
                          // attribute to force the rendering of both sides of each face (front and back).
                         // This prevents the so called 'backface culling'. Usually, only the side is
                          // rendered, whose normal vector points towards the camera. The other side is not
                          // rendered (backface culling). But this performance optimization sometimes leads
                          // to wholes in the surface. When this happens in your surface, simply set
                          // 'doubleSided' to 'true'.


                       // Create a mesh and insert the geometry and the material. Translate the whole mesh
                      // by -1.5 on the x axis and by 4 on the z axis. Finally add the mesh to the scene.

     pyrMesh=Mesh(
         pyrGeo,
         MeshBM({
             vertexColors: VertexColors,
             side: DoubleSide}))
     pyrMesh.position.set(-.5,.5,4)
     scene.add(pyrMesh)


     cubeMesh=Mesh(// Create a mesh and insert the geometry and the material. Translate the whole mesh // by 1.5 on the x axis and by 4 on the z axis and add the mesh to the scene.
         CubeGeo(1.5,1.5,1.5),// Create the cube // Parameter 1: Width  // Parameter 2: Height  // Parameter 3: Depth
         MeshFM(
             cubeMaterials=[ // Applying different materials to the faces is a more difficult than applying one  material to the whole geometry. We start with creating an array of THREE.MeshBasicMaterial. Define six colored materials
                 MBM({color:0xFF0000}),MBM({color:0x00FF00}),MBM({color:0x0000FF}), MBM({color:0xFFFF00}),MBM({color:0x00FFFF}),MBM({color:0xFFFFFF})]))   // Create a MeshFaceMaterial, which allows the cube to have different materials on each face
     cubeMesh.position.set(1.5,0,4)
     scene.add(cubeMesh)



     render=function(){RAF(render)
         pyrMesh.rotation.y+=0.1
         cubeMesh.rotateOnAxis(tV(1,1,1).normalize(),.075)// Decrease the rotation of the cube
         ren.render(scene,cam)} // Map the 3D scene down to the 2D screen (render the frame)

     render()

 }

Texture=function(a){return new THREE.ImageUtils.loadTexture(src(a))}


THRE5=function(){scene=makeScene()


    cam=pCam(45,W()/H(),1,100)
    cam.position.set(0,0,10)
    cam.lookAt(scene.position)
    scene.add(cam)


    cubeMesh=Mesh(
        CubeGeo(2,2,2),
        MBM({
            map:Texture('me'),
            side:DoubleSide
        }))


    cubeMesh.position.set(0,0,4)
    scene.add(cubeMesh)

    xRot=0;yRot=0;zRot=0
    render=function(){RAF(render)
        xRot+=.03;yRot+=.02;zRot+=.04
        cubeMesh.rotation.set(xRot,yRot,zRot)
        ren.render(scene,cam)}

    render()}





THREEx={}




Detector={

            canvas:!!window.CanvasRenderingContext2D,
            webgl: (function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
            workers: !! window.Worker,
            fileapi: window.File && window.FileReader && window.FileList && window.Blob,

            getWebGLErrorMessage: function () {

                var element = document.createElement( 'div' );
                element.id = 'webgl-error-message';
                element.style.fontFamily = 'monospace';
                element.style.fontSize = '13px';
                element.style.fontWeight = 'normal';
                element.style.textAlign = 'center';
                element.style.background = '#fff';
                element.style.color = '#000';
                element.style.padding = '1.5em';
                element.style.width = '400px';
                element.style.margin = '5em auto 0';

                if (!this.webgl ) {

                    element.innerHTML = window.WebGLRenderingContext ? [
                        'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                        'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join( '\n' ) : [
                        'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                        'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join( '\n' )}

                return element},

            addGetWebGLMessage: function ( parameters ) {

                var parent, id, element;

                parameters=parameters||{}

                parent = parameters.parent !== undefined ? parameters.parent : document.body
                id = parameters.id !== undefined ? parameters.id : 'oldie'

                element=Detector.getWebGLErrorMessage()
                element.id=id

                parent.appendChild(element)}}

        Stats=function(){var h,a,n=0,o=0,i=Date.now(),u=i,p=i,l=0,q=1E3,r=0,e,j,f,b=[[16,16,48],[0,255,255]],m=0,s=1E3,t=0,d,k,g,c=[[16,48,16],[0,255,0]];h=document.createElement("div");h.style.cursor="pointer";h.style.width="80px";h.style.opacity="0.9";h.style.zIndex="10001";h.addEventListener("mousedown",function(a){a.preventDefault();n=(n+1)%2;n==0?(e.style.display="block",d.style.display="none"):(e.style.display="none",d.style.display="block")},!1);e=document.createElement("div");e.style.textAlign=
            "left";e.style.lineHeight="1.2em";e.style.backgroundColor="rgb("+Math.floor(b[0][0]/2)+","+Math.floor(b[0][1]/2)+","+Math.floor(b[0][2]/2)+")";e.style.padding="0 0 3px 3px";h.appendChild(e);j=document.createElement("div");j.style.fontFamily="Helvetica, Arial, sans-serif";j.style.fontSize="9px";j.style.color="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";j.style.fontWeight="bold";j.innerHTML="FPS";e.appendChild(j);f=document.createElement("div");f.style.position="relative";f.style.width="74px";f.style.height=
            "30px";f.style.backgroundColor="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";for(e.appendChild(f);f.children.length<74;)a=document.createElement("span"),a.style.width="1px",a.style.height="30px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+b[0][0]+","+b[0][1]+","+b[0][2]+")",f.appendChild(a);d=document.createElement("div");d.style.textAlign="left";d.style.lineHeight="1.2em";d.style.backgroundColor="rgb("+Math.floor(c[0][0]/2)+","+Math.floor(c[0][1]/2)+","+Math.floor(c[0][2]/2)+")";d.style.padding=
            "0 0 3px 3px";d.style.display="none";h.appendChild(d);k=document.createElement("div");k.style.fontFamily="Helvetica, Arial, sans-serif";k.style.fontSize="9px";k.style.color="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";k.style.fontWeight="bold";k.innerHTML="MS";d.appendChild(k);g=document.createElement("div");g.style.position="relative";g.style.width="74px";g.style.height="30px";g.style.backgroundColor="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";for(d.appendChild(g);g.children.length<74;)a=document.createElement("span"),
            a.style.width="1px",a.style.height=Math.random()*30+"px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+c[0][0]+","+c[0][1]+","+c[0][2]+")",g.appendChild(a);return{domElement:h,update:function(){i=Date.now();m=i-u;s=Math.min(s,m);t=Math.max(t,m);k.textContent=m+" MS ("+s+"-"+t+")";var a=Math.min(30,30-m/200*30);g.appendChild(g.firstChild).style.height=a+"px";u=i;o++;if(i>p+1E3)l=Math.round(o*1E3/(i-p)),q=Math.min(q,l),r=Math.max(r,l),j.textContent=l+" FPS ("+q+"-"+r+")",a=Math.min(30,30-l/
            100*30),f.appendChild(f.firstChild).style.height=a+"px",p=i,o=0}}};


THREE.OrbitControls = function(object,domElement) {

            this.object = object
            this.domElement = (domElement!==undefined) ? domElement : document;

            // API

            this.enabled = true;

            this.center = new THREE.Vector3();

            this.userZoom = true;
            this.userZoomSpeed = 1.0;

            this.userRotate = true;
            this.userRotateSpeed = 1.0;

            this.userPan = true;
            this.userPanSpeed = 2.0;

            this.autoRotate = false;
            this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

            this.minPolarAngle = 0; // radians
            this.maxPolarAngle = Math.PI; // radians

            this.minDistance = 0;
            this.maxDistance = Infinity;

            // 65 /*A*/, 83 /*S*/, 68 /*D*/
            this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40, ROTATE: 65, ZOOM: 83, PAN: 68 };

            // internals

            var scope = this;

            var EPS = 0.000001;
            var PIXELS_PER_ROUND = 1800;

            var rotateStart = new THREE.Vector2();
            var rotateEnd = new THREE.Vector2();
            var rotateDelta = new THREE.Vector2();

            var zoomStart = new THREE.Vector2();
            var zoomEnd = new THREE.Vector2();
            var zoomDelta = new THREE.Vector2();

            var phiDelta = 0;
            var thetaDelta = 0;
            var scale = 1;

            var lastPosition = new THREE.Vector3();

            var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
            var state = STATE.NONE;

            // events

            var changeEvent = { type: 'change' };


            this.rotateLeft = function ( angle ) {

                if ( angle === undefined ) {

                    angle = getAutoRotationAngle();

                }

                thetaDelta -= angle;

            };

            this.rotateRight = function ( angle ) {

                if ( angle === undefined ) {

                    angle = getAutoRotationAngle();

                }

                thetaDelta += angle;

            };

            this.rotateUp = function ( angle ) {

                if ( angle === undefined ) {

                    angle = getAutoRotationAngle();

                }

                phiDelta -= angle;

            };

            this.rotateDown = function ( angle ) {

                if ( angle === undefined ) {

                    angle = getAutoRotationAngle();

                }

                phiDelta += angle;

            };

            this.zoomIn = function ( zoomScale ) {

                if ( zoomScale === undefined ) {

                    zoomScale = getZoomScale();

                }

                scale /= zoomScale;

            };

            this.zoomOut = function ( zoomScale ) {

                if ( zoomScale === undefined ) {

                    zoomScale = getZoomScale();

                }

                scale *= zoomScale;

            };

            this.pan = function ( distance ) {

                distance.transformDirection( this.object.matrix );
                distance.multiplyScalar( scope.userPanSpeed );

                this.object.position.add( distance );
                this.center.add( distance );

            };

            this.update = function () {

                var position = this.object.position;
                var offset = position.clone().sub( this.center );

                // angle from z-axis around y-axis

                var theta = Math.atan2( offset.x, offset.z );

                // angle from y-axis

                var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

                if ( this.autoRotate ) {

                    this.rotateLeft( getAutoRotationAngle() );

                }

                theta += thetaDelta;
                phi += phiDelta;

                // restrict phi to be between desired limits
                phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

                // restrict phi to be betwee EPS and PI-EPS
                phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

                var radius = offset.length() * scale;

                // restrict radius to be between desired limits
                radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

                offset.x = radius * Math.sin( phi ) * Math.sin( theta );
                offset.y = radius * Math.cos( phi );
                offset.z = radius * Math.sin( phi ) * Math.cos( theta );

                position.copy( this.center ).add( offset );

                this.object.lookAt( this.center );

                thetaDelta = 0;
                phiDelta = 0;
                scale = 1;

                if(lastPosition.distanceTo(this.object.position ) > 0 ) {

                    this.dispatchEvent(changeEvent)

                    lastPosition.copy(this.object.position)}}


            function getAutoRotationAngle(){return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed}

            function getZoomScale(){return Math.pow( 0.95, scope.userZoomSpeed)}

            function onMouseDown(event){

                if(scope.enabled===false)return;
                if(scope.userRotate===false)return;

                event.preventDefault();

                if(state===STATE.NONE){
                    if ( event.button === 0 )
                        state = STATE.ROTATE;
                    if ( event.button === 1 )
                        state = STATE.ZOOM;
                    if ( event.button === 2 )
                        state = STATE.PAN;
                }


                if ( state === STATE.ROTATE ) {

                    //state = STATE.ROTATE;

                    rotateStart.set( event.clientX, event.clientY );

                } else if ( state === STATE.ZOOM ) {

                    //state = STATE.ZOOM;

                    zoomStart.set( event.clientX, event.clientY );

                } else if ( state === STATE.PAN ) {

                    //state = STATE.PAN;

                }

                document.addEventListener( 'mousemove', onMouseMove, false );
                document.addEventListener( 'mouseup', onMouseUp, false )}

            function onMouseMove( event ) {

                if ( scope.enabled === false ) return;

                event.preventDefault();



                if ( state === STATE.ROTATE ) {

                    rotateEnd.set( event.clientX, event.clientY );
                    rotateDelta.subVectors( rotateEnd, rotateStart );

                    scope.rotateLeft( 2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed );
                    scope.rotateUp( 2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed );

                    rotateStart.copy( rotateEnd )}
                else if (state===STATE.ZOOM ) {

                    zoomEnd.set( event.clientX, event.clientY );
                    zoomDelta.subVectors( zoomEnd, zoomStart );

                    if (zoomDelta.y > 0 ) {

                        scope.zoomIn();

                    } else {

                        scope.zoomOut();

                    }

                    zoomStart.copy( zoomEnd );

                } else if ( state === STATE.PAN ) {

                    var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
                    var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

                    scope.pan( new THREE.Vector3( - movementX, movementY, 0 ) );

                }

            }

            function onMouseUp( event ) {

                if ( scope.enabled === false ) return;
                if ( scope.userRotate === false ) return;

                document.removeEventListener( 'mousemove', onMouseMove, false );
                document.removeEventListener( 'mouseup', onMouseUp, false );

                state=STATE.NONE}


    onMouseWheel=function(event){

                if(scope.enabled===false){return}
                if(scope.userZoom===false){return}

                var delta=0

                if(event.wheelDelta) {delta=event.wheelDelta} // WebKit / Opera / Explorer 9


                else if(event.detail){delta=-event.detail}// Firefox
                if(delta>0){scope.zoomOut()}
                else {scope.zoomIn()}}


    onKeyDown=function(event){
                if(scope.enabled===false){return}
                if(scope.userPan===false){return}
                switch(event.keyCode){

                    /*case scope.keys.UP:
                     scope.pan( new THREE.Vector3( 0, 1, 0 ) );
                     break;
                     case scope.keys.BOTTOM:
                     scope.pan( new THREE.Vector3( 0, - 1, 0 ) );
                     break;
                     case scope.keys.LEFT:
                     scope.pan( new THREE.Vector3( - 1, 0, 0 ) );
                     break;
                     case scope.keys.RIGHT:
                     scope.pan( new THREE.Vector3( 1, 0, 0 ) );
                     break;
                     */
                    case scope.keys.ROTATE:
                        state = STATE.ROTATE;
                        break;
                    case scope.keys.ZOOM:
                        state = STATE.ZOOM;
                        break;
                    case scope.keys.PAN:
                        state = STATE.PAN;
                        break}}

          onKeyUp=function( event ) {

                switch ( event.keyCode ) {

                    case scope.keys.ROTATE:
                    case scope.keys.ZOOM:
                    case scope.keys.PAN:
                        state = STATE.NONE;
                        break}}


            this.domElement.addEventListener('contextmenu', function(event){event.preventDefault(); }, false );
            this.domElement.addEventListener('mousedown',onMouseDown,false)
            this.domElement.addEventListener('mousewheel',onMouseWheel,false)
            this.domElement.addEventListener('DOMMouseScroll', onMouseWheel,false ); // firefox
            window.addEventListener('keydown',onKeyDown, false );
            window.addEventListener('keyup',onKeyUp,false)}

        THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );




        /**
         * - NOTE: it would be quite easy to push event-driven too
         *   - microevent.js for events handling
         *   - in this._onkeyChange, generate a string from the DOM event
         *   - use this as event name
         */
        THREEx.KeyboardState	= function()
        {
            // to store the current state
            this.keyCodes	= {};
            this.modifiers	= {};

            // create callback to bind/unbind keyboard events
            var self	= this;
            this._onKeyDown	= function(event){ self._onKeyChange(event, true); };
            this._onKeyUp	= function(event){ self._onKeyChange(event, false);};

            // bind keyEvents
            document.addEventListener("keydown", this._onKeyDown, false);
            document.addEventListener("keyup", this._onKeyUp, false);
        }

        /**
         * To stop listening of the keyboard events
         */
        THREEx.KeyboardState.prototype.destroy	= function()
        {
            // unbind keyEvents
            document.removeEventListener("keydown", this._onKeyDown, false);
            document.removeEventListener("keyup", this._onKeyUp, false);
        }

        THREEx.KeyboardState.MODIFIERS	= ['shift', 'ctrl', 'alt', 'meta'];
        THREEx.KeyboardState.ALIAS	= {
            'left'		: 37,
            'up'		: 38,
            'right'		: 39,
            'down'		: 40,
            'space'		: 32,
            'pageup'	: 33,
            'pagedown'	: 34,
            'tab'		: 9
        };

        /**
         * to process the keyboard dom event
         */
        THREEx.KeyboardState.prototype._onKeyChange	= function(event, pressed)
        {
            // log to debug
            //console.log("onKeyChange", event, pressed, event.keyCode, event.shiftKey, event.ctrlKey, event.altKey, event.metaKey)

            // update this.keyCodes
            var keyCode		= event.keyCode;
            this.keyCodes[keyCode]	= pressed;

            // update this.modifiers
            this.modifiers['shift']= event.shiftKey;
            this.modifiers['ctrl']	= event.ctrlKey;
            this.modifiers['alt']	= event.altKey;
            this.modifiers['meta']	= event.metaKey;
        }

        /**
         * query keyboard state to know if a key is pressed of not
         *
         * @param {String} keyDesc the description of the key. format : modifiers+key e.g shift+A
         * @returns {Boolean} true if the key is pressed, false otherwise
         */




        THREEx.KeyboardState.prototype.pressed=function(keyDesc){
            var keys= keyDesc.split("+");

            for(var i=0;i<keys.length;i++){
                var key=keys[i],pressed;

                if(THREEx.KeyboardState.MODIFIERS.indexOf(key)!==-1){pressed=this.modifiers[key]}
                else if(Object.keys(THREEx.KeyboardState.ALIAS).indexOf(key)!=-1){pressed=this.keyCodes[THREEx.KeyboardState.ALIAS[key]]}
                else {pressed=this.keyCodes[key.toUpperCase().charCodeAt(0)]}
                if(!pressed){return false}}
            return true}



        THREEx.FullScreen=THREEx.FullScreen||{};

        /**
         * test if it is possible to have fullscreen
         *
         * @returns {Boolean} true if fullscreen API is available, false otherwise
         */
        THREEx.FullScreen.available=function(){return this._hasWebkitFullScreen || this._hasMozFullScreen}

        /**
         * test if fullscreen is currently activated
         *
         * @returns {Boolean} true if fullscreen is currently activated, false otherwise
         */
        THREEx.FullScreen.activated	= function()
        {
            if( this._hasWebkitFullScreen){return document.webkitIsFullScreen}
            else if( this._hasMozFullScreen){return document.mozFullScreen}
            else{console.assert(false)}}

        /**
         * Request fullscreen on a given element
         * @param {DomElement} element to make fullscreen. optional. default to document.body
         */
        THREEx.FullScreen.request=function(element){
            element	= element	|| document.body;
            if( this._hasWebkitFullScreen ){element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}
            else if( this._hasMozFullScreen){element.mozRequestFullScreen()}
            else{console.assert(false)}}

        /**
         * Cancel fullscreen
         */

        THREEx.FullScreen.cancel=function(){
            if(this._hasWebkitFullScreen ){document.webkitCancelFullScreen()}
            else if( this._hasMozFullScreen ){document.mozCancelFullScreen()}
            else{console.assert(false)}}

        // internal functions to know which fullscreen API implementation is available
        THREEx.FullScreen._hasWebkitFullScreen	= 'webkitCancelFullScreen' in document	? true : false;
        THREEx.FullScreen._hasMozFullScreen	= 'mozCancelFullScreen' in document	? true : false;

        /**
         * Bind a key to renderer screenshot
         * usage: THREEx.FullScreen.bindKey({ charCode : 'a'.charCodeAt(0) });
         */

        THREEx.FullScreen.bindKey	= function(opts){
            opts		= opts		|| {};
            var charCode	= opts.charCode	|| 'f'.charCodeAt(0);
            var dblclick	= opts.dblclick !== undefined ? opts.dblclick : false;
            var element	= opts.element

            var toggle	= function(){
                if( THREEx.FullScreen.activated() ){
                    THREEx.FullScreen.cancel()}

                else{THREEx.FullScreen.request(element)}}


            var onKeyPress=function(event){if(event.which !== charCode ){return}; toggle()}.bind(this);

            document.addEventListener('keypress', onKeyPress, false);

            dblclick && document.addEventListener('dblclick', toggle, false);

            return {
                unbind	: function(){
                    document.removeEventListener('keypress', onKeyPress, false);
                    dblclick && document.removeEventListener('dblclick', toggle, false);

                }}}







        // This THREEx helper makes it easy to handle window resize.
        // It will update renderer and camera when window is resized.
        //
        // # Usage
        //
        // **Step 1**: Start updating renderer and camera
        //
        // ```var windowResize = THREEx.WindowResize(aRenderer, aCamera)```
        //
        // **Step 2**: Start updating renderer and camera
        //
        // ```windowResize.stop()```
        // # Code

        //


        /**
         * Update renderer and camera when the window is resized
         *
         * @param {Object} renderer the renderer to update
         * @param {Object} Camera the camera to update
         */

        THREEx.WindowResize=function(renderer,camera){
            var callback=function(){

                renderer.setSize( window.innerWidth, window.innerHeight );

                camera.aspect	= window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix()}
            // bind the resize event

            window.addEventListener('resize', callback, false);
            // return .stop() the function to stop watching window resize
            return {stop: function(){window.removeEventListener('resize',callback)
                }}}








        THRE2=function(){z()




            init=function(){


                scene=new THREE.Scene()


                // CAMERA // set the view size in pixels (custom or according to window size) // var SCREEN_WIDTH = 400, SCREEN_HEIGHT = 300;

                  SCREEN_WIDTH = W()
                  SCREEN_HEIGHT = H()
                // camera attributes






                // add the camera to the scene
                scene.add(

                    camera=new THREE.PerspectiveCamera(
                        VIEW_ANGLE=45,
                        ASPECT=SCREEN_WIDTH/SCREEN_HEIGHT,
                        NEAR=0.1,
                        FAR=20000)



                )

                // the camera defaults to position (0,0,0)
                // 	so pull it back (z = 400) and up (y = 100) and set the angle towards the scene origin

                camera.position.set(0,150,400)
                camera.lookAt(scene.position)


                //////////////
                // RENDERER //
                //////////////

                // create and start the renderer; choose antialias setting.
                if(Detector.webgl){renderer = new THREE.WebGLRenderer( {antialias:true} )}
                else{renderer = new THREE.CanvasRenderer()}

                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

                // attach div element to variable to contain the renderer
                container = document.getElementById( 'ThreeJS' );
                // alternatively: to create the div at runtime, use:
                //   container = document.createElement( 'div' );
                //    document.body.appendChild( container );

                // attach renderer to the container div
                container.appendChild( renderer.domElement );

                ////////////
                // EVENTS //
                ////////////


                // automatically resize renderer
                THREEx.WindowResize(renderer, camera);
                // toggle full-screen on given key press
                THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

                //////////////
                // CONTROLS //
                //////////////

                // move mouse and: left   click to rotate,
                //                 middle click to zoom,
                //                 right  click to pan
                controls = new THREE.OrbitControls( camera, renderer.domElement );

                ///////////
                // STATS //
                ///////////

                // displays current and past frames per second attained by scene
                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.bottom = '0px';
                stats.domElement.style.zIndex = 100;
                container.appendChild( stats.domElement );


                 light = new THREE.PointLight(0xffffff);

                light.position.set(0,250,0);
                scene.add(light);
                 ambientLight = new THREE.AmbientLight(0x111111); // scene.add(ambientLight);


                // GEOMETRY  // most objects displayed are a "mesh": //  a collection of points ("geometry") and //  a set of surface parameters ("material")



                sphereGeometry=new THREE.SphereGeometry(50,32,16)// Sphere parameters: radius, segments along width, segments along height



                sphereMaterial = new THREE.MeshLambertMaterial({color: 0x8888ff})  // use a "lambert" material rather than "basic" for realistic lighting. //   (don't forget to add (at least one) light!)
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
                sphere.position.set(100, 50, -50)
                scene.add(sphere)



                cubeMaterialArray=[] // Create an array of materials to be used in a cube, one for each side // order to add materials: x+,x-,y+,y-,z+,z-
                cubeMaterialArray.push(new THREE.MeshBasicMaterial({color:0xff3333}))
                cubeMaterialArray.push(new THREE.MeshBasicMaterial({color:0xff8800}))
                cubeMaterialArray.push(new THREE.MeshBasicMaterial({color:0xffff33}))
                cubeMaterialArray.push(new THREE.MeshBasicMaterial({color:0x33ff33}))
                cubeMaterialArray.push(new THREE.MeshBasicMaterial({color:0x3333ff}))
                cubeMaterialArray.push(new THREE.MeshBasicMaterial({color:0x8833ff}))
                cubeMaterials=new THREE.MeshFaceMaterial(cubeMaterialArray)



                // Cube parameters: width (x), height (y), depth (z),
                //        (optional) segments along x, segments along y, segments along z
                cubeGeometry=new THREE.CubeGeometry( 100, 100, 100, 1, 1, 1 );
                // using THREE.MeshFaceMaterial() in the constructor below
                //   causes the mesh to use the materials stored in the geometry
                cube=new THREE.Mesh( cubeGeometry, cubeMaterials );
                cube.position.set(-100, 50, -50);
                scene.add( cube );

                // create a set of coordinate axes to help orient user
                //    specify length in pixels in each direction

                axes=new THREE.AxisHelper(100);
                scene.add(axes)





              addFloor=function(){

                // note: 4x4 checkboard pattern scaled so that each square is 25 by 25 pixels.
                floorTexture = new THREE.ImageUtils.loadTexture('images/checkerboard.jpg')
                floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
                floorTexture.repeat.set( 10, 10 );

                // DoubleSide: render texture on both sides of mesh
                floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
                floorGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);

                floor=new THREE.Mesh(floorGeometry, floorMaterial);

                floor.position.y = -0.5;

                floor.rotation.x = Math.PI / 2;

                scene.add(floor)}
               addSky=function(){

                // SKY //


                // recommend either a skybox or fog effect (can't use both at the same time) // without one of these, the scene's background color is determined by webpage background

                // make sure the camera's "far" value is large enough so that it will render the skyBox!

                skyBoxGeometry=new THREE.CubeGeometry(10000,10000,10000)

                // BackSide: render faces from inside of the cube, instead of from outside (default).

                skyBoxMaterial=new THREE.MeshBasicMaterial({color:0x9999ff, side:THREE.BackSide})


                skyBox=new THREE.Mesh(skyBoxGeometry, skyBoxMaterial)

                // scene.add(skyBox);


                scene.fog=new THREE.FogExp2(0x9999ff,0.00025)} //fog must be added to scene before first render




         animate=function(){requestAnimationFrame( animate );
                render();update()}







            update=function(){

             delta=clock.getDelta() // delta = change in time since last call (in seconds)

                // functionality provided by THREEx.KeyboardState.js

                keyboard=THREEx.KeyboardState
                if(keyboard.pressed("1")){document.getElementById('message').innerHTML = ' Have a nice day! - 1'}
                if(keyboard.pressed("2")){document.getElementById('message').innerHTML = ' Have a nice day! - 2 '}

                controls.update();
                stats.update()}



            render=function(){renderer.render(scene,camera)}

        }

        }






