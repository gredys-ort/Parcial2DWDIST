// Importa las funciones de conversión desde el módulo unitConvert.js
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../aggregator.js";

// Obtén referencias a los elementos del DOM
const temperatureInput = document.getElementById('temperature');
const inputUnitSelect = document.getElementById('inputUnit');
const outputUnitSelect = document.getElementById('outputUnit');
const convertButton = document.getElementById('convertButton');
const resultParagraph = document.getElementById('result');

// Agrega un controlador de eventos al botón de conversión
convertButton.addEventListener('click', () => {
    // Obtén el valor ingresado en el campo de temperatura
    const temperature = parseFloat(temperatureInput.value);

    // Obtén las unidades de entrada y salida seleccionadas
    const inputUnit = inputUnitSelect.value;
    const outputUnit = outputUnitSelect.value;

    // Realiza la conversión basada en las unidades seleccionadas
    let result;
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        result = celsiusToFahrenheit(temperature);
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        result = fahrenheitToCelsius(temperature);
    } else {
        result = temperature; // Si las unidades son iguales, no se realiza la conversión
    }

    // Muestra el resultado en el párrafo de resultado
    resultParagraph.textContent = `El resultado es: ${result.toFixed(2)}`;
});

// Agrega un controlador de eventos al botón de reinicio
clearButton.addEventListener('click', () => {
    // Limpia los campos de entrada y resultado
    temperatureInput.value = '';
    resultParagraph.textContent = 'El resultado se mostrará aquí.';
});