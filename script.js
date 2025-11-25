const light = document.getElementById('headlight');

// current position of the light
let currentX = 0;
let currentY = 0;

// target position of the light 
let mouseX = 0;
let mouseY = 0;

document.addeEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Move the current position 10% of the way towards the target position
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    light.style.left = currentX + 'px';
    light.style.top = currentY + 'px';

    requestAnimationFrame(animate); // repeats the animation on the next frame
}

animate();