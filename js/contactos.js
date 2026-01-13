const contactos = [
            { nombre: "Max Verstappen", telefono: "8556-1234", email: "mv@email.com" },
            { nombre: "Aby pulling", telefono: "2059-5678", email: "ap@email.com" },
            { nombre: "Álvaro Díaz", telefono: "5555-9012", email: "ad@email.com" },
            { nombre: "Adam Sandler", telefono: "3602-9911", email: "as@email.com" },
            { nombre: "Mon Laferte", telefono: "3201-1032", email: "ml@email.com" },
            { nombre: "Kévin Estre", telefono: "7982-0482", email: "ke@email.com" },
            { nombre: "Maggie Lindemann", telefono: "8145-2687", email: "mgl@email.com" },
            { nombre: "Noah Sebastian", telefono: "9845-1547", email: "ns@email.com" },
            { nombre: "De la rose", telefono: "7841-12046", email: "dr@email.com" }
        ];

        const lista = document.getElementById("listaContactos");

        contactos.forEach(contacto => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div class="nombre">${contacto.nombre}</div>
        
                <div> ${contacto.email}</div>
            `;
            lista.appendChild(li);
        });