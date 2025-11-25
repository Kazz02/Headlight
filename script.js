const light = document.getElementById('headlight');

let mouseX = 0;
let mouseY = 0;
let lightX = 0;
let lightY = 0;

const speed = 0.1;

function animateLight() {
    let distX = mouseX - lightX;
    let distY = mouseY - lightY;

    lightX = lightX + (distX * speed);
    lightY = lightY + (distY * speed);

    light.style.left = lightX + 'px';
    light.style.top = lightY + 'px';

    requestAnimationFrame(animateLight);
}

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    mouseX = touch.clientX;
    mouseY = touch.clientY;
}, { passive: false });

animateLight();