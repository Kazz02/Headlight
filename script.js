const light = document.getElementById('headlight');

let mouseX = 0;
let mouseY = 0;
let lightX = 0;
let lightY = 0;

let lastStarX = 0;
let lastStarY = 0;

const speed = 0.1;

// star element
function spawnStar(x, y) {
    const star = document.createElement('div');
    star.classList.add('star');

    const randomOffset = (Math.random() - 0.5) * 20; // random spread of 20px
    star.style.left = (x + randomOffset) + 'px';
    star.style.top = (y + randomOffset) + 'px';

    const scale = 0.5 + Math.random();
    star.style.transform = `scale(${scale})`;

    document.body.appendChild(star);

    // removes the star after 1 second
    setTimeout(() => {
        star.remove();
    }, 1000);
}

function animateLight() {
    let distX = mouseX - lightX;
    let distY = mouseY - lightY;

    lightX = lightX + (distX * speed);
    lightY = lightY + (distY * speed);

    light.style.left = lightX + 'px';
    light.style.top = lightY + 'px';


    // We calculate the distance between the CURRENT light position
    // and the LAST place we dropped a star.
    // Pythagorean theorem: a² + b² = c²
    const moveX = lightX - lastStarX;
    const moveY = lightY - lastStarY;
    const distanceMoved = Math.sqrt(moveX * moveX + moveY * moveY);

    // Only add a star if mouse has moved more than 30px
    if (distanceMoved > 30) {
        spawnStar(lightX, lightY);

        // updates last star position
        lastStarX = lightX;
        lastStarY = lightY;
    }

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