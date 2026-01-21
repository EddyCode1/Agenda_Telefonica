const contactos = [
    { nombre: "Max Verstappen", telefono: "8556-1234", email: "mv@gmail.com", direccion: "Mónaco", foto: "../images/max_verstappen.png" },
    { nombre: "Aby pulling", telefono: "2059-5678", email: "ap@gmail.com", direccion: "Reino Unido.", foto: "../images/abbi_pulling.png" },
    { nombre: "Álvaro Díaz", telefono: "5555-9012", email: "ad@gmail.com", direccion: "Puerto Rico", foto: "../images/alvaro_diaz.png" },
    { nombre: "Robert Downey Jr.", telefono: "3602-9911", email: "rd@gmail.com", direccion: "Estados Unidos", foto: "../images/RobertDowney.png" },
    { nombre: "Mon Laferte", telefono: "3201-1032", email: "ml@gmail.com", direccion: "Mexico", foto: "../images/MonLaferte.png" },
    { nombre: "Kévin Estre", telefono: "7982-0482", email: "ke@gmail.com", direccion: "Austria", foto: "../images/Kevin_Estre.png" },
    { nombre: "Maggie Lindemann", telefono: "8145-2687", email: "mgl@gmail.com", direccion: "Estados Unidos", foto: "../images/Maggie_Lindemann.png" },
    { nombre: "Noah Sebastian", telefono: "9845-1547", email: "ns@gmail.com", direccion: "Estados Unidos", foto: "../images/Noah_Sebastian.png" },
    { nombre: "De la rose", telefono: "7841-12046", email: "dr@gmail.com", direccion: "Puerto Rico", foto: "../images/De_la_Rose.png" }
];

const lista = document.getElementById("listaContactos");

contactos.forEach(contacto => {
    const li = document.createElement("li");

    // Creamos un contenedor tipo div en lugar de button para mejor control de capas
    const card = document.createElement("div");
    card.classList.add("album-container");

   card.innerHTML = `
    <div class="vinyl">
        <img src="${contacto.foto}" alt="${contacto.nombre}">
    </div>

    <div class="album-cover">
        <div class="album-data">
            <span class="v-nombre">${contacto.nombre}</span>
            <span class="v-telefono">${contacto.telefono}</span>
        </div>
    </div>
`;

    // Evento para ir a detalles (cumpliendo con el requerimiento funcional)
    card.addEventListener("click", () => {
        localStorage.setItem("contactoSeleccionado", JSON.stringify(contacto));
        window.location.href = "detallesContacto.html";
    });

    li.appendChild(card);
    lista.appendChild(li);
});
