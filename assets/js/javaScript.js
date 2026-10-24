
const ventana = document.querySelector(".ventanaEmergente");
const botonCerrar = document.querySelector(".cerrarVentana");
const botonAceptar = document.querySelector(".aceptarCookies");


if (localStorage.getItem("cookiesAceptadas") === "true") {
    ventana.style.display = "none";
}

botonCerrar.addEventListener("click", function () {
    ventana.style.display = "none";
});

botonAceptar.addEventListener("click", function () {
    localStorage.setItem("cookiesAceptadas", "true");

    ventana.style.display = "none";
});