// 1. Definición de contactos fijos (No se pueden eliminar)
const favoritosFijos = [
    { nombre: "Max Verstappen", telefono: "8556-1234", email: "mv@email.com", foto: "../images/max_verstappen.png" },
    { nombre: "Mon Laferte", telefono: "3201-1032", email: "ml@email.com", foto: "" },
    { nombre: "Noah Sebastian", telefono: "9845-1547", email: "ns@email.com", foto: "" }
];

// 2. Carga de contactos añadidos manualmente
let favoritosDinamicos = JSON.parse(localStorage.getItem("fav_dinamicos")) || [];

// 3. Referencia a la lista completa de contactos (Lista Maestra) para el modal
const listaMaestra = [
    { nombre: "Max Verstappen", telefono: "8556-1234", email: "mv@email.com", foto: "../images/max_verstappen.png" },
    { nombre: "Aby pulling", telefono: "2059-5678", email: "ap@email.com", foto: "../images/abbi_pulling.png" },
    { nombre: "Álvaro Díaz", telefono: "5555-9012", email: "ad@email.com", foto: "../images/alvaro_diaz.png" },
    { nombre: "Adam Sandler", telefono: "3602-9911", email: "as@email.com", foto: "" },
    { nombre: "Mon Laferte", telefono: "3201-1032", email: "ml@email.com", foto: "" },
    { nombre: "Kévin Estre", telefono: "7982-0482", email: "ke@email.com", foto: "" },
    { nombre: "Maggie Lindemann", telefono: "8145-2687", email: "mgl@email.com", foto: "" },
    { nombre: "Noah Sebastian", telefono: "9845-1547", email: "ns@email.com", foto: "" },
    { nombre: "De la rose", telefono: "7841-12046", email: "dr@email.com", foto: "" }
];

const contenedorFavoritos = document.getElementById("contenedorFavoritos");

function renderizarFavoritos() {
    contenedorFavoritos.innerHTML = "";
    const todosLosFavs = [...favoritosFijos, ...favoritosDinamicos];

    todosLosFavs.forEach((contacto, index) => {
        const li = document.createElement("li");
        li.classList.add("item-favorito");

        // Estructura de vinilo con CLASES UNICAS para favoritos
        const cardFav = document.createElement("div");
        cardFav.classList.add("fav-album-wrapper");

        cardFav.innerHTML = `
            <div class="fav-vinyl">
                <img src="${contacto.foto || '../images/placeholder.png'}" alt="${contacto.nombre}">
            </div>
            <div class="fav-cover">
                <div class="fav-info">
                    <span class="fav-nombre">${contacto.nombre}</span>
                    <span class="fav-tel">${contacto.telefono}</span>
                </div>
            </div>
        `;

        // Evento para ver detalle
        cardFav.addEventListener("click", () => {
            localStorage.setItem("contactoSeleccionado", JSON.stringify(contacto));
            window.location.href = "detallesContacto.html";
        });

        // Botón eliminar exclusivo
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("fav-btn-eliminar");
        btnEliminar.onclick = (e) => {
    e.stopPropagation();

    if (index < favoritosFijos.length) {
        alert("Este contacto es fijo y no puede eliminarse.");
        return;
    }

    quitarDeFavoritos(index);
};


        li.appendChild(cardFav);
        li.appendChild(btnEliminar);
        contenedorFavoritos.appendChild(li);
    });
}

// Lógica para quitar favoritos (Solo funcional para los añadidos manualmente)
window.quitarDeFavoritos = (index) => {
    if (index >= favoritosFijos.length) {
        const indexReal = index - favoritosFijos.length;
        favoritosDinamicos.splice(indexReal, 1);
        localStorage.setItem("fav_dinamicos", JSON.stringify(favoritosDinamicos));
        renderizarFavoritos();
    } else {
        alert("Este contacto es fijo y no puede eliminarse.");
    }
};

// ... Lógica del Modal para añadir nuevos ...
document.getElementById("btnAbrirModal").onclick = () => {
    const selector = document.getElementById("listaSeleccionNombres");
    selector.innerHTML = "";
    listaMaestra.forEach(c => {
        const item = document.createElement("li");
        item.innerHTML = `<button onclick="agregarNuevoFavorito('${c.nombre}')">${c.nombre}</button>`;
        selector.appendChild(item);
    });
    document.getElementById("modalSelectorFavoritos").style.display = "flex";
};

window.agregarNuevoFavorito = (nombre) => {
    const contacto = listaMaestra.find(c => c.nombre === nombre);

    const yaExiste =
        favoritosFijos.some(f => f.nombre === nombre) ||
        favoritosDinamicos.some(f => f.nombre === nombre);

    if (yaExiste) {
        alert("Este contacto ya está en favoritos");
        return;
    }

    favoritosDinamicos.push(contacto);
    localStorage.setItem("fav_dinamicos", JSON.stringify(favoritosDinamicos));
    renderizarFavoritos();
    document.getElementById("modalSelectorFavoritos").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarFavoritos();
});
