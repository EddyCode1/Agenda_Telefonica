const contacto = JSON.parse(localStorage.getItem("contactoSeleccionado"));

if (!contacto) {
    window.location.href = "contactos.html";
}

document.getElementById("nombre").textContent = contacto.nombre;
document.getElementById("telefono").textContent = contacto.telefono;
document.getElementById("email").textContent = contacto.email;
document.getElementById("direccion").textContent = contacto.direccion;
document.getElementById("foto").src =
    contacto.foto;
