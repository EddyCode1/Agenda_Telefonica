function guardarNombre() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("¡Alto ahí, artista! Necesitamos tu nombre para el pase VIP.");
        return; // Detiene la ejecución si no hay nombre
    }

    // 1. Guardamos en el almacenamiento local
    localStorage.setItem("nombreUsuario", nombre);
    
    // 2. Redirigimos desde aquí
    // Verifica si la carpeta es '../pages/contactos.html' o solo 'pages/contactos.html'
    window.location.href = "pages/contactos.html"; 
}