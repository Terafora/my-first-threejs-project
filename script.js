import * as THREE from 'three';

//Canvas
const canvas = document.querySelector('canvas.webgl');

//Scene
const scene = new THREE.Scene();

//Objects
const cube = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(cube, material);
scene.add(mesh);

//Sizes
const sizes = {
    width: 800,
    height: 600
};

//Camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 1, 1000);
camera.position.z = 3;
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

// Animation function
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