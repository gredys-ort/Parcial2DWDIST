import { agregarTarea } from "../aggregator.js";

document.addEventListener("DOMContentLoaded", function () {
    // Tomamos los elementos
    var inputTarea = document.getElementById("tarea");
    var btn = document.getElementById("agregar");
    var listado = document.getElementById("listado");
    var cantidad = document.getElementById("cantidad");

    // Variable que lleva la cantidad de tareas
    var total = 0;

    // Asigna la función al evento click del botón
    btn.onclick = function () {
        agregarTarea(inputTarea, listado, cantidad, total); // Llamamos a la función aquí
    };
});
