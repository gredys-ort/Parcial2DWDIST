// Función para agregar una tarea
function agregarTarea(inputTarea, listado, cantidad, total) {
    // Controlamos si el campo está vacío
    if (inputTarea.value == "") {
        return;
    }
    // Tomamos el valor del campo
    var elemento = inputTarea.value;
    // Creamos un elemento li
    var li = document.createElement("li");
    // Agregamos el texto al elemento li
    li.textContent = elemento;
    // Agregamos el li al listado
    listado.appendChild(li);
    // Incrementamos la cantidad de tareas
    total++;
    cantidad.innerHTML = total;

    // Agregamos el botón eliminar a cada elemento del listado
    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);

    // Agregamos la funcionalidad para eliminar del listado el elemento
    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    // Limpiamos el campo
    inputTarea.value = "";
}

// Exporta la función
export { agregarTarea };
