document.addEventListener("DOMContentLoaded", () => {
    const nombreGuardado = localStorage.getItem("nombreUsuario");
    const contenedorNombre = document.getElementById("nombre-perfil");

    if (nombreGuardado) {
        contenedorNombre.innerText = nombreGuardado.toUpperCase();
    } else {
        contenedorNombre.innerText = "ARTISTA DESCONOCIDO";
    }
});