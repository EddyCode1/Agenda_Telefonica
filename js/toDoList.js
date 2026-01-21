let tareas = [];
let indiceEdicion = null;

function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.sort((a, b) => a.prioridad - b.prioridad);

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.className = `tarea prioridad-${tarea.prioridad}`;

        const trackId = (index + 1).toString().padStart(2, '0');

        li.innerHTML = `
            <span><strong>${trackId}.</strong> ${tarea.texto} 
                <small style="opacity:0.6">[${obtenerPrioridadTexto(tarea.prioridad)}]</small>
            </span>
            <div class="acciones">
                <button onclick="editarTarea(${index})">✏️</button>
                <button onclick="eliminarTarea(${index})">🗑️</button>
            </div>
        `;

        lista.appendChild(li);
    });
}

function agregarTarea() {
    const texto = document.getElementById("tareaInput").value;
    const prioridad = document.getElementById("prioridadInput").value;

    if (texto.trim() === "") {
        alert("La tarea no puede estar vacía");
        return;
    }

    if (indiceEdicion === null) {
        tareas.push({ texto, prioridad });
    } else {
        tareas[indiceEdicion] = { texto, prioridad };
        indiceEdicion = null;
    }

    limpiarFormulario();
    renderizarTareas();
}

function editarTarea(index) {
    document.getElementById("tareaInput").value = tareas[index].texto;
    document.getElementById("prioridadInput").value = tareas[index].prioridad;
    indiceEdicion = index;
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
}

function limpiarFormulario() {
    document.getElementById("tareaInput").value = "";
    document.getElementById("prioridadInput").value = "1";
}

function obtenerPrioridadTexto(valor) {
    if (valor == 1) return "Alta";
    if (valor == 2) return "Media";
    return "Baja";
}
