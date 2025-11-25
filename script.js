const light = document.getElementById('headlight');

document.addEventListener('mousemove', (e) => {
    light.style.left = e.clientX + 'px'; // horizontal position
    light.style.top = e.clientY + 'px'; // vertical position
});