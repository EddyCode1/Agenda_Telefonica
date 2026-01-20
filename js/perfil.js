document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtenemos el nombre guardado en el Login
    const nombreGuardado = localStorage.getItem("nombreUsuario");
    const contenedorNombre = document.getElementById("nombre-perfil");

    // 2. Si existe, lo mostramos; si no, ponemos un nombre genérico
    if (nombreGuardado) {
        contenedorNombre.innerText = nombreGuardado.toUpperCase();
    } else {
        contenedorNombre.innerText = "ARTISTA DESCONOCIDO";
    }
});