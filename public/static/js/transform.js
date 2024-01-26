const multiple = 15;
const mouseOverContainer = document.getElementsByTagName("body")[0];
const element = document.getElementById("element");
const img = document.getElementById("g-img");

function transformElement(x, y) {
    let box = element.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / multiple;
    const calcY = (x - box.x - box.width / 2) / multiple;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    
    element.style.transform = "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
    img.style = `--per: ${percentage}%`;
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
        element.style.transform = "rotateX(0) rotateY(0)";
    });
});
