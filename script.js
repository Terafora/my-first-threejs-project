import * as THREE from 'three';

//Canvas
const canvas = document.querySelector('canvas.webgl');

//Scene
const scene = new THREE.Scene();

//Objects
const group = new THREE.Group();
group.position.z = -1;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);

cube1.position.set(1.5, 1, 1);

group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.set(-1.5, -1, -1);
group.add(cube3);

//Position
/*
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

mesh.position.set(0.7, -0.6, 1);
*/

//Scale
/*
mesh.scale.x = 0.5;
mesh.scale.y = 1.5;
mesh.scale.z = 0.75;

mesh.scale.set(0.5, 1.5, 0.75);
*/

//Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

//Sizes
const sizes = {
    width: 800,
    height: 600
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
camera.position.z = 3;
camera.position.y = 0.8;
camera.position.x = 1;
camera.rotateOnAxis(new THREE.Vector3(-0.5, 0.5, 0), 0.5);
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

// Animation function
/*
const animate = () => {
    // Rotate the cube
    mesh.rotation.x += 0.01; // Adjust X-axis rotation
    mesh.rotation.y += 0.01; // Adjust Y-axis rotation

    // Render the updated scene
    renderer.render(scene, camera);

    // Call animate again on the next frame
    requestAnimationFrame(animate);
};

// Start the animation loop
animate();
*/