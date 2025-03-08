// Flip the image twice when the page loads
window.onload = function() {
    const image = document.getElementById("flipImage");

    // First flip (after 0.5s)
    setTimeout(() => {
        image.classList.add("scale-x-[-1]");
    }, 500);

    // Second flip (after 1s)
    setTimeout(() => {
        image.classList.remove("scale-x-[-1]");
    }, 1000);
};