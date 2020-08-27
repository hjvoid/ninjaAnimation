//colors
var Colors = {
    black: 0x000000,
    green: 0x948754,
    beige: 0xF4D39E,
    ochre: 0xDAA336,
    red: 0xAC4D35
};

// Initialize variables.
// var scene, camera, renderer;
// var PI = Math.PI;
// var angle = 0;
// var radius = 10;
// var newNinja;
// var planeSize = 1000;
// var cos = Math.cos;
// var sin = Math.sin;

const world = document.querySelector("body");

HEIGHT = window.innerHeight;
WIDTH = window.innerWidth;

// SCENE
scene = new THREE.Scene();

//CAMERA
camera = new THREE.PerspectiveCamera( 50, WIDTH / HEIGHT, 1, 2000 );
camera.position.x = 20;
camera.position.y = 110;
camera.position.z = 155;

//RENDERER
renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
scene.fog = new THREE.FogExp2(0x11111f, 0.006);
renderer.setClearColor(scene.fog.color);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
renderer.setSize(WIDTH, HEIGHT);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
world.appendChild(renderer.domElement);

// ORBIT CONTROLS
var controls = new THREE.OrbitControls( camera, renderer.domElement );
camera.position.set( 135, 70, 80 );
controls.update();

// Listen to the window resize.*****************************************
function handleWindowResize() {
    // If the window is resized, we have to update the camera aspect ratio.
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    };
window.addEventListener('resize', handleWindowResize, false);

//Create Ninja******************************************
// function createNinja(){
newNinja = new THREE.Group();
newNinja.castShadow = true;
// newNinja.receiveShadow = true; //default
scene.add(newNinja);
// Create the Hat.

var hatGeom = new THREE.CubeGeometry(19,8,15, 2);
var hatMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var hat = new THREE.Mesh(hatGeom, hatMaterial);
hat.name = "hat";
hat.position.y = 8;
newNinja.add(hat);

// Create the Head.
var geom = new THREE.CubeGeometry(16,8,18, 1);
var material = new THREE.MeshPhongMaterial({
    color: Colors.beige
});
var head = new THREE.Mesh(geom, material);
head.name = "head";
head.castShadow = true;
// head.receiveShadow = true;
head.position.z = 2
newNinja.add(head);

//Create the neck
var geometry = new THREE.ConeGeometry( 5, 20, 32 );
var material = new THREE.MeshPhongMaterial( {color: Colors.green} );
var neck = new THREE.Mesh( geometry, material );
neck.name = "neck"
neck.castShadow = true;
neck.position.y = 2;
newNinja.add( neck );

//Creat the Chest
var geom = new THREE.CubeGeometry(19,8,15, 2);
var material = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var chest = new THREE.Mesh(geom, material);
chest.name = "chest"
chest.castShadow = true;
// chest.receiveShadow = true;
chest.position.y = -12;
newNinja.add(chest);

//Creat the Torso
var torsoGeom = new THREE.CubeGeometry(12,8,15, 2);
var torsoMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var torso = new THREE.Mesh(torsoGeom , torsoMaterial);
torso.name = "torso"
torso.castShadow = true;
// torso.receiveShadow = true;
torso.position.y = -20;
newNinja.add(torso);

//Creat the Sword
var swordGeom = new THREE.CubeGeometry(1,48, 3, 2);
var swordMaterial = new THREE.MeshPhongMaterial({
    color: Colors.ochre,
    shininess: 2000,
});
var sword = new THREE.Mesh(swordGeom, swordMaterial);
sword.name = "sword";
sword.castShadow = true;
// sword.receiveShadow = true;
sword.position.x = 0;
sword.position.y = 0;
sword.position.z = -10;
sword.rotation.z = 10;
newNinja.add(sword);

//create the Bicep L
var bicepLGeom = new THREE.CubeGeometry(4, 7, 2, 2);
var bicepLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var bicepL = new THREE.Mesh(bicepLGeom, bicepLMaterial);
bicepL.name = "bicepL";
bicepL.castShadow = true;
// bicepL.receiveShadow = true;
bicepL.position.x = 11;
bicepL.position.y = -18;
bicepL.position.z = 0;

newNinja.add(bicepL);

//create the Bicep R
var bicepRGeom = new THREE.CubeGeometry(4, 7, 2, 2);
var bicepRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var bicepR = new THREE.Mesh(bicepRGeom, bicepRMaterial);
bicepR.name = "bicepR";
bicepR.castShadow = true;
// bicepR.receiveShadow = true;
bicepR.position.x = -11;
bicepR.position.y = -18;
bicepR.position.z = 0;
newNinja.add(bicepR);

//create elbow L
var elbowLGeom = new THREE.SphereGeometry( 2, 32, 32 );
var elbowLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var elbowL = new THREE.Mesh(elbowLGeom, elbowLMaterial);
elbowL.name = "elbowL"
elbowL.id = "elbowL";
elbowL.castShadow = true;
// elbowL.receiveShadow = true;
elbowL.position.y = -23;
elbowL.position.x = 11;
elbowL.position.z = 0;
newNinja.add(elbowL);

//creat elbow R
var elbowRGeom = new THREE.SphereGeometry( 2, 32, 32 );
var elbowRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var elbowR = new THREE.Mesh(elbowRGeom, elbowRMaterial);
elbowR.name = "elbowR"
elbowR.castShadow = true;
// elbowR.receiveShadow = true;
elbowR.position.y = -23;
elbowR.position.x = -11;
elbowR.position.z = 0;
newNinja.add(elbowR);

//create foreArm R
var foreArmRGeom = new THREE.CylinderGeometry( 2.2, 1.4, 7, 8 );
var foreArmRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var foreArmR = new THREE.Mesh( foreArmRGeom , foreArmRMaterial );
foreArmR.name = "foreArmR"
foreArmR.castShadow = true;
// foreArmR.receiveShadow = true;
foreArmR.position.y = -28.5;
foreArmR.position.x = -11;
foreArmR.position.z = 0;
newNinja.add(foreArmR);

//create foreArm L
var foreArmLGeom = new THREE.CylinderGeometry( 2.2, 1.4, 7, 8 );
var foreArmLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var foreArmL = new THREE.Mesh( foreArmLGeom , foreArmLMaterial );
foreArmL.name = "foreArmL";
foreArmL.castShadow = true;
foreArmL.position.y = -28.5;
foreArmL.position.x = 11;
foreArmL.position.z = 0;
newNinja.add(foreArmL);

//Create the shoulder L
var shoulderLGeom = new THREE.SphereGeometry( 3, 32, 32 );
var shoulderLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var shoulderL = new THREE.Mesh(shoulderLGeom, shoulderLMaterial);
shoulderL.name = "shoulderL";
shoulderL.position.y = -12;
shoulderL.position.x = 11;
shoulderL.position.z = 0;
newNinja.add(shoulderL);

// Create the shoulder R
var shoulderRGeom = new THREE.SphereGeometry( 3, 32, 32 );
var shoulderRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var shoulderR = new THREE.Mesh(shoulderRGeom, shoulderRMaterial);
shoulderR.name = "shoulderR";
shoulderR.position.y = -12;
shoulderR.position.x = -11;
shoulderR.position.z = 0;
newNinja.add(shoulderR);

//Creat the Pelvis
var pelvisGeom = new THREE.BoxGeometry( 16, 8, 11, 1);
var pelvisMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var pelvis = new THREE.Mesh(pelvisGeom, pelvisMaterial);
pelvis.name = "pelvis";
pelvis.position.y = -28.5;
newNinja.add(pelvis);

//create hand R
var handRGeom = new THREE.CubeGeometry(3, 4, 2, 2);
var handRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.beige
});
var handR = new THREE.Mesh(handRGeom, handRMaterial);
handR.name = "handR";
handR.castShadow = true;
handR.position.y = -34.5;
handR.position.x = -11.5;
handR.position.z = 0;
newNinja.add(handR);

//create hand L
var handLGeom = new THREE.CubeGeometry(4, 4, 2, 2);
var handLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.beige
});
var handL = new THREE.Mesh(handLGeom, handLMaterial);
handL.name = "handL";
handL.castShadow = true;
handL.position.y = -34.5;
handL.position.x = 11.5;
handL.position.z = 0;
newNinja.add(handL);

//create the thigh R
var thighRGeom = new THREE.CubeGeometry(7, 12, 8, 2);
var thighRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var thighR = new THREE.Mesh(thighRGeom, thighRMaterial);
thighR.name = "thighR";
thighR.position.y = -39;
thighR.position.x = -6;
thighR.position.z = 0;
newNinja.add(thighR);

//create the thigh L
var thighLGeom = new THREE.CubeGeometry(7, 12, 8, 2);
var thighLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var thighL = new THREE.Mesh(thighLGeom, thighLMaterial);
thighL.name = "thighL";
thighL.position.y = -39;
thighL.position.x = 6;
thighL.position.z = 0;
newNinja.add(thighL);

//create shin L
var shinLGeom = new THREE.CylinderGeometry( 3.2, 2.4, 10, 8 );
var shinLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var shinL = new THREE.Mesh( shinLGeom , shinLMaterial );
shinL.name = "shinL";
shinL.castShadow = true;
shinL.position.y = -50.5;
shinL.position.x = 6;
shinL.position.z = 0;
newNinja.add(shinL);

//create shin R
var shinRGeom = new THREE.CylinderGeometry( 3.2, 2.4, 10, 8 );
var shinRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var shinR = new THREE.Mesh( shinRGeom , shinRMaterial );
shinR.name = "shinR";
shinR.castShadow = true;
shinR.position.y = -50.5;
shinR.position.x = -6;
shinR.position.z = 0;
newNinja.add(shinR);

//creat foot R
var footRGeom = new THREE.CubeGeometry(7, 2, 12, 5);
var footRMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var footR = new THREE.Mesh(footRGeom, footRMaterial);
footR.name = "footR";
footR.castShadow = true;
footR.position.y = -55;
footR.position.x = -6;
footR.position.z = 1;
newNinja.add(footR);

//creat foot L
var footLGeom = new THREE.CubeGeometry(7, 2, 12, 5);
var footLMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green
});
var footL = new THREE.Mesh(footLGeom, footLMaterial);
footL.name = "footL";
footL.castShadow = true;
footL.position.y = -55;
footL.position.x = 6;
footL.position.z = 1;
newNinja.add(footL);
  
  

//PLANE******************************************************
var geometry = new THREE.PlaneGeometry( 500, 500, 1 );
var material = new THREE.MeshPhongMaterial( {color: Colors.green, side: THREE.DoubleSide, shininess: 0} );
var plane = new THREE.Mesh( geometry, material );
plane.rotation.x = 1.58;
plane.position.y = -59;
plane.receiveShadow = true;
// plane.castShadow = true;
scene.add( plane );
//************************************************************** */
// Create a DirectionalLight and turn on shadows for the light
var topLight = new THREE.DirectionalLight( 0x0341fc, 2.5, 0.5 );
// topLight.position.set( 10, 25, 10); 			
topLight.castShadow = true;            
//Set up shadow properties for the light
topLight.target = newNinja;
topLight.shadow.radius = 8;
topLight.shadow.mapSize.width = 512;  
topLight.shadow.mapSize.height = 512; 
topLight.shadow.camera.left = 256;   
topLight.shadow.camera.right = -256; 
topLight.shadow.camera.top = 256; 
topLight.shadow.camera.bottom = -256; 
topLight.shadow.camera.near = 2;
topLight.shadow.camera.far = 1000;     
scene.add( topLight );

//LIGHT TO HELP BUILD THE MODEL
// var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// light.position.set(60,60,0);
// scene.add( light );

//MOVEMENT FUNCTIONS **************************************************

function ninjaAlert(){
    //move hat
    gsap.to(newNinja.getObjectByName("hat").rotation, 1, {x:0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("hat").position, 1, {y:7.2, delay: 1, ease: "back.out(1.7)"});
    //move head
    gsap.to(newNinja.getObjectByName("head").rotation,1, {x:0.1,delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("head").position, 1, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    //move neck
    gsap.to(newNinja.getObjectByName("neck").rotation, 1, {x:0.1, delay: 1,z: -0.1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("neck").position, 1, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    //move chest
    gsap.to(newNinja.getObjectByName("chest").rotation, 1, {x:0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("chest").position, 1, {y:-12, delay: 1, ease: "back.out(1.7)"});
    //move torso
    gsap.to(newNinja.getObjectByName("torso").position, 1, {x:0.1, z: -1.3, y: -20.5, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("torso").rotation, 1, {x:0.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepL").position, 1, {x:12, y: -17, z: -2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepL").rotation, 1, {x:0.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepR").position, 1, {x:-12, y: -17, z: 2.5, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepR").rotation, 1, {x: -0.7, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("elbowR").position, 1, {x: -11.8, z: 6, y: -20, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("elbowL").position, 1, {x: 11.8, z: -3.5, y: -22, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmL").position, 1, {z: 2, y: -25, x: 12, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmL").rotation, 1, {x: -1.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmR").position, 1, {x: -11.5, z: 11, y: -18 , delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmR").rotation, 1, {x: -2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("pelvis").position, 1, {z: -2.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("pelvis").rotation, 1, {x:0.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handL").position, 1, {z: 8, y: -24, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handL").rotation, 1.5, {x: -1.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handR").position, 1, {z: 16, y: -15, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handR").rotation, 1.5, {x: -2.3, delay: 1, ease: "back.out(1.7)"});
    // gsap.to(newNinja.getObjectByName("handR").rotation, .4, {x: -2.95, repeat: 2, yoyo: true, delay: 2.5, ease: "power3.out"});
    gsap.to(newNinja.getObjectByName("thighL").position, 1, {z: -5.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighL").rotation, 1, {x:0.35, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighR").position, 1, {z: 1.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighR").rotation, 1, {x:-0.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinL").position, 1, {z: -7.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinL").rotation, 1, {x:0.55, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinR").position, 1, {z: 1.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinR").rotation, 1, {x:0.55, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("footL").position, 1, {z: -7.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("footR").position, 1, {z: 2.9, delay: 1, ease: "back.out(1.7)"});
    console.log("ninja is alert for battle");
};

function ninjaGetSword(){
    //move hat
    gsap.to(newNinja.getObjectByName("hat").rotation, 1, {x:0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("hat").position, 1, {y:7.2, delay: 1, ease: "back.out(1.7)"});
    //move head
    gsap.to(newNinja.getObjectByName("head").rotation,1, {x:0.1,delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("head").position, 1, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    //move neck
    gsap.to(newNinja.getObjectByName("neck").rotation, 1, {x:0.1, delay: 1,z: -0.1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("neck").position, 1, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    //move chest
    gsap.to(newNinja.getObjectByName("chest").rotation, 1, {x:0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("chest").position, 1, {y:-12, delay: 1, ease: "back.out(1.7)"});
    //move torso
    gsap.to(newNinja.getObjectByName("torso").position, 1, {x:0.1, z: -1.3, y: -20.5, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("torso").rotation, 1, {x:0.2, delay: 1, ease: "back.out(1.7)"});
    //biceps
    gsap.to(newNinja.getObjectByName("bicepL").position, 1, {x:12, y: -17, z: -2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepL").rotation, 1, {x:0.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepR").position, 1, {x:-12, y: -17, z: 2.5, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepR").rotation, 1, {x: -0.7, delay: 1, ease: "back.out(1.7)"});
    //elbows
    gsap.to(newNinja.getObjectByName("elbowR").position, 1, {x: -11.8, z: 6, y: -20, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("elbowL").position, 1, {x: 11.8, z: -3.5, y: -22, delay: 1, ease: "back.out(1.7)"});
    //forearms
    gsap.to(newNinja.getObjectByName("foreArmL").position, 1, {z: 2, y: -25, x: 12, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmL").rotation, 1, {x: -1.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmR").position, 1, {x: -11.5, z: 11, y: -18 , delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmR").rotation, 1, {x: -2, delay: 1, ease: "back.out(1.7)"});
    //pelvis
    gsap.to(newNinja.getObjectByName("pelvis").position, 1, {z: -2.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("pelvis").rotation, 1, {x:0.3, delay: 1, ease: "back.out(1.7)"});
    //hands
    gsap.to(newNinja.getObjectByName("handL").position, 1, {z: 8, y: -24, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handL").rotation, 1.5, {x: -1.9, delay: 1, ease: "back.out(1.7)"});
    //legs and feet
    gsap.to(newNinja.getObjectByName("thighL").position, 1, {z: -5.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighL").rotation, 1, {x:0.35, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighR").position, 1, {z: 1.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighR").rotation, 1, {x:-0.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinL").position, 1, {z: -7.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinL").rotation, 1, {x:0.55, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinR").position, 1, {z: 1.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinR").rotation, 1, {x:0.55, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("footL").position, 1, {z: -7.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("footR").position, 1, {z: 2.9, delay: 1, ease: "back.out(1.7)"});
    //arm grab
    gsap.to(newNinja.getObjectByName("bicepR").position, 1, {x:-11.5, y: -6, z: 2, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("bicepR").rotation, 1, {x:0.2, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("elbowR").position, 1, {x:-12.5, y: -0.4, z: 2.9, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("foreArmR").rotation, 1, {x:2.2, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("foreArmR").position, 1, {x:-12.5, y: 3, z: -1.2, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("handR").rotation, 1, {x:2.2, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("handR").position, 1, {x:-12.5, y: 7, z: -6.5, delay: 1, ease: "back.out(0.2)"});
    console.log("ninja is geting sword!");
};

function ninjaDrawSword(){
    //move hat
    gsap.to(newNinja.getObjectByName("hat").rotation, 1, {x:0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("hat").position, 1, {y:7.2, delay: 1, ease: "back.out(1.7)"});
    //move head
    gsap.to(newNinja.getObjectByName("head").rotation,1, {x:0.1,delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("head").position, 1, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    //move neck
    gsap.to(newNinja.getObjectByName("neck").rotation, 1, {x:0.1, delay: 1,z: -0.1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("neck").position, 1, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    //move chest
    gsap.to(newNinja.getObjectByName("chest").rotation, 1, {x:0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("chest").position, 1, {y:-12, delay: 1, ease: "back.out(1.7)"});
    //move torso
    gsap.to(newNinja.getObjectByName("torso").position, 1, {x:0.1, z: -1.3, y: -20.5, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("torso").rotation, 1, {x:0.2, delay: 1, ease: "back.out(1.7)"});
    //pelvis
    gsap.to(newNinja.getObjectByName("pelvis").position, 1, {z: -2.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("pelvis").rotation, 1, {x:0.3, delay: 1, ease: "back.out(1.7)"});
    //legs and feet
    gsap.to(newNinja.getObjectByName("thighL").position, 1, {z: -5.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighL").rotation, 1, {x:0.35, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighR").position, 1, {z: 1.2, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("thighR").rotation, 1, {x:-0.3, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinL").position, 1, {z: -7.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinL").rotation, 1, {x:0.55, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinR").position, 1, {z: 1.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("shinR").rotation, 1, {x:0.55, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("footL").position, 1, {z: -7.9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("footR").position, 1, {z: 2.9, delay: 1, ease: "back.out(1.7)"});
    //right arm
    gsap.to(newNinja.getObjectByName("shoulderR").position, 1, {x:-12.5, z: 3.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepR").position, 1, {x: -13, y: -18.5, z: 5.8, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepR").rotation, 1, {x:-.4, z: -0.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("elbowR").position, 1, {x:-13, y: -24, z: 8, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmR").position, 1, {x: -10, y:-22, z:13, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmR").rotation, 1, {x:-2, z: 0.5, delay: 1, ease: "back.out(1.7)"});
    //left arm
    gsap.to(newNinja.getObjectByName("shoulderL").position, 1, {x:12.5, z: 3.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepL").position, 1, {x:  12, y: -16, z: 9, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("bicepL").rotation, 1, {x:-1.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("elbowL").position, 1, {x:12.2, y: -18, z: 14, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("foreArmL").position, 1, {x:6.5, y: -18, z: 17, delay: 1, ease: "back.out(0.2)"});
    gsap.to(newNinja.getObjectByName("foreArmL").rotation, 1, {x:-1.8, z: -1, delay: 1, ease: "back.out(0.2)"});
    
    //hands
    gsap.to(newNinja.getObjectByName("handR").position, 1, {x: -6.8, y: -19, z: 18, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handR").rotation, 0.2, {x: -2, z: 0.65, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handL").position, 1.2, {x: 0.85, y: -17, z: 20, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("handL").rotation, 1.7, {x: -2, z: 0.65, delay: 1, ease: "back.out(1.7)"});
    //sword
    gsap.to(newNinja.getObjectByName("sword").position, 1.2, {x: -14, y: -11, z: 30, delay: 1, ease: "back.out(1.7)"});
    gsap.to(newNinja.getObjectByName("sword").rotation, 0.2, {x: -2.4, y: -38, z: -7, delay: 1, ease: "back.out(1.7)"});
};

function panCameraIntro(){
    gsap.to(camera.position, 6, {y:-1.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(camera.position, 6, {x:-1.1, delay: 1, ease: "back.out(1.7)"});
    gsap.to(camera.position, 4, {z:90, delay: 1, ease: "back.out(1.7)"});
    gsap.to(camera.position, 4, {z:180, delay: 4, ease: "back.out(1.7)"});
}

function swordSlashLeft(){
    // gsap.to(newNinja.rotation, .2, {y:1, delay: 1, ease: "back.out(1.7)"});
    // arm grab
    gsap.to(newNinja.getObjectByName("sword").rotation, {x:-11.5, delay: 1, ease: "back.out(0.2)"});

};
document.body.onkeypress = function(e){
    if(e.keyCode == 32){
        swordSlashLeft()
        console.log("pressed");
    }
}
// swordSlashLeft();


//INTRO FUNCTIONS*******************************************
setTimeout(ninjaAlert,100);
setTimeout(ninjaGetSword,2000);
setTimeout(ninjaDrawSword,2700);
panCameraIntro();


function render() {
	requestAnimationFrame(render);


	controls.update();

	renderer.render( scene, camera );

}
render();