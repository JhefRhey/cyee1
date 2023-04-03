function ramdom (number) {
    return Math.floor(Math.random() * number);
}
const btn = document.querySelector("button");
const body = document.querySelector("body");
function btnHandler() {
    const ramdomRGB = `rgb(${ramdom(255)}, ${ramdom(255)}, ${ramdom(255)})`;
    body.style.backgroundColor = ramdomRGB;
}

btn.addEventListener("click", btnHandler );