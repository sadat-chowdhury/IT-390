// flips an image 2 times horizonally
window.onload = function() {
    const image = document.getElementById("flipImage");
    setTimeout(() => {
        image.classList.add("scale-x-[-1]");
    }, 500);
    setTimeout(() => {
        image.classList.remove("scale-x-[-1]");
    }, 1000);
};