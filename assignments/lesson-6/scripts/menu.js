function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function getDate() {
    document.write(new Date().toLocaleDateString());
}