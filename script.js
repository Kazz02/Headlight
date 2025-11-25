const light = document.getElementById('headlight');

function updateLightPosition(x,y) {
    light.style.left = x + 'px';
    light.style.top = y + 'px';
}

// Listens to mouse
document.addEventListener('mousemove', (event) => {
    updateLightPosition(event.clientX, event.clientY);
});

// Listens to touch
document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    updateLightPosition(touch.clientX, touch.clientY);
}, { passive: false });