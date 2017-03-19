function initThree(){width=document.getElementById("canvas3d").clientWidth,height=document.getElementById("canvas3d").clientHeight,renderer=new THREE.WebGLRenderer({antialias:!0}),renderer.setSize(width,height),renderer.domElement.style.display="block",document.getElementById("canvas3d").appendChild(renderer.domElement),renderer.setClearColor(16777215,1),renderer.shadowMap.type=THREE.BasicShadowMap,renderer.shadowMap.enabled=!0}function initCamera(){camera=new THREE.PerspectiveCamera(45,width/height,1,5e3),camera.position.set(60,50,100),camera.up.x=0,camera.up.y=1,camera.up.z=0,camera.lookAt({x:0,y:0,z:0}),camera.matrixAutoUpdate=!1}function initScene(){scene=new THREE.Scene}function initLight(){light=new THREE.PointLight(16777215,1,0),light.position.set(100,200,100),light.castShadow=!0,light.shadow.mapSize.width=2e3,light.shadow.mapSize.height=2e3,scene.add(light),light2=new THREE.AmbientLight(2236962),scene.add(light2)}function initObject(){sphere=new THREE.Mesh(new THREE.SphereGeometry(20,20),new THREE.MeshPhongMaterial({color:2200782,specular:1118481,shininess:40})),sphere.position.set(0,0,0),sphere.castShadow=!0,scene.add(sphere),cylinder=new THREE.Mesh(new THREE.CylinderGeometry(50,50,3,30),new THREE.MeshPhongMaterial({color:2200782,specular:1118481,shininess:40})),cylinder.position.set(0,-20,0),cylinder.receiveShadow=!0,scene.add(cylinder)}function CreateBlock(a,b,c,d){var e=(new THREE.TextureLoader).load("./minecraft/textures/blocks/grass_side.png",function(a){renderer.clear(),renderer.render(scene,camera)});e.wrapS=THREE.RepeatWrapping,e.wrapT=THREE.RepeatWrapping,e.repeat.set(1,1);var f=(new THREE.TextureLoader).load("./minecraft/textures/blocks/grass_top.png",function(a){renderer.clear(),renderer.render(scene,camera)});f.wrapS=THREE.RepeatWrapping,f.wrapT=THREE.RepeatWrapping,f.repeat.set(1,1);for(var g=[],h=0;h<6;++h)2==h?g.push(new THREE.MeshLambertMaterial({map:f,color:5607424})):g.push(new THREE.MeshLambertMaterial({map:e}));var i=new THREE.Mesh(new THREE.BoxGeometry(20,20,20),new THREE.MultiMaterial(g));i.position.set(0,0,0),i.castShadow=!0,i.receiveShadow=!0,scene.add(i)}function RotationViewMatrix(a){var b=new THREE.Vector3(1,0,0),c=new THREE.Quaternion;c.setFromAxisAngle(b.normalize(),Math.PI/180*30),camera.rotation.setFromQuaternion(c)}function threeStart(){initThree(),initCamera(),initScene(),initLight(),RotationViewMatrix(),CreateBlock()}var renderer,camera,scene,light,light2,sphere,cylinder,updownRotation,leftrightRotation;