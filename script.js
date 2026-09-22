console.log("ELECTROWAVE EPK cargado correctamente");
const titulo = document.querySelector("#inicio h1");
console.log(titulo);
titulo.textContent = "ELECTROWAVE";
titulo.classList.add("titulo-activo");
const botonListen = document.querySelector('#inicio a[href="#music"]');
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
    menu.classList.toggle("menu-abierto");
});
const menuLinks = document.querySelectorAll("nav ul a");
menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
    menu.classList.remove("menu-abierto");
});
});
botonListen.addEventListener("click", function () {
    console.log("El usuario hizo clic en Listen Now");
});