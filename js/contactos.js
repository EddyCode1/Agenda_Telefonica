const contactos = [
    { nombre: "Max Verstappen", telefono: "8556-1234", email: "mv@email.com", foto: "https://destinationformula1.com/project/max-verstappen/" },
    { nombre: "Aby pulling", telefono: "2059-5678", email: "ap@email.com", foto: "" },
    { nombre: "Álvaro Díaz", telefono: "5555-9012", email: "ad@email.com", foto: "" },
    { nombre: "Adam Sandler", telefono: "3602-9911", email: "as@email.com", foto: "" },
    { nombre: "Mon Laferte", telefono: "3201-1032", email: "ml@email.com", foto: "" },
    { nombre: "Kévin Estre", telefono: "7982-0482", email: "ke@email.com", foto: "" },
    { nombre: "Maggie Lindemann", telefono: "8145-2687", email: "mgl@email.com", foto: "" },
    { nombre: "Noah Sebastian", telefono: "9845-1547", email: "ns@email.com", foto: "" },
    { nombre: "De la rose", telefono: "7841-12046", email: "dr@email.com", foto: "" }
];

const lista = document.getElementById("listaContactos");

contactos.forEach(contacto => {
    const li = document.createElement("li");
    li.innerHTML = `
        <button class="contacto-btn">
            <div class="avatar">
                <img src="${contacto.foto}" alt="Foto de ${contacto.nombre}">
            </div>
            <div class="info">
                <div class="nombre">${contacto.nombre}</div>
                <div>${contacto.email}</div>
            </div>
        </button>
    `;
    lista.appendChild(li);
});
