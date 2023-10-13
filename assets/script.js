let butterfly = document.querySelector(".butterfly");
let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;

butterfly.addEventListener('mousemove', () => {
    let butterflyPos = butterfly.getBoundingClientRect();
    let pos = newPosition(butterflyPos.width, butterflyPos.height);
    butterfly.style.top = pos.y + "px";
    butterfly.style.left = pos.x + "px";
});

function newPosition(butterflyWidth, butterflyHeight) {
    let maxX = viewWidth - butterflyWidth;
    let maxY = viewHeight - butterflyHeight;

    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);

    return { x: newX, y: newY };
}
