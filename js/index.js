function guardarNombre() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("¡Alto ahí, artista! Necesitamos tu nombre para el pase VIP.");
        return; 
    }

    localStorage.setItem("nombreUsuario", nombre);
    
    window.location.href = "pages/contactos.html"; 
}