import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

import OrbitControls from "orbit-controls-es6";

// Scene
const scene = new THREE.Scene();
// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

// Geometry

const halo = new THREE.Mesh(
  new THREE.SphereGeometry(12, 6, 10, 0, 1, 3, 6.29),
  new THREE.MeshBasicMaterial({
    color: 0x34ebdb,
    wireframe: true,
  })
);

scene.add(halo);

// halo.position.z = 20;
// halo.position.setX(-10);

//KnotTaurus
const torusknotgeometry = new THREE.TorusKnotGeometry(5, 0.5, 103, 7, 12, 9);
const material2 = new THREE.MeshStandardMaterial({
  color: 0x6203fc,
  // wireframe: true,
});
const torusKnot = new THREE.Mesh(torusknotgeometry, material2);
scene.add(torusKnot);

torusKnot.position.z = 20;
torusKnot.position.setX(10);

// Taurus
const geometry = new THREE.TorusBufferGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  //   // wireframe: true (MeshBasicMaterial),
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

// Star Generation
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Scene Background
const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

// Avatar
const pedroTexture = new THREE.TextureLoader().load("pedro.PNG");

const pedro = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: pedroTexture })
);

scene.add(pedro);

// Moon

const moonTexture = new THREE.TextureLoader().load("neptune1989.jpg");

// Load Normal onto the photo
// const normalTexture = new THREE.TextureLoader().load("normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    // normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

//Scroll
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  pedro.rotation.y += 0.01;
  pedro.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation and Render
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  halo.rotation.x += 0.01;
  halo.rotation.y += 0.005;
  halo.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  controls.update();

  renderer.render(scene, camera);
}
animate();
