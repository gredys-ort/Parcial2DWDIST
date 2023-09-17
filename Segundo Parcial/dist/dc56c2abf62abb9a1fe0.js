// Importa la función de generación de contraseñas desde el módulo passwordGenA.js
import { generatePassword } from '../aggregator.js';

// Obtén referencias a los elementos del DOM
const lengthInput = document.getElementById('length');
const useLettersCheckbox = document.getElementById('useLetters');
const useNumbersCheckbox = document.getElementById('useNumbers');
const useSymbolsCheckbox = document.getElementById('useSymbols');
const generateButton = document.getElementById('generateButton');
const passwordResult = document.getElementById('passwordResult');

// Agrega un controlador de eventos al botón de generación de contraseñas
generateButton.addEventListener('click', () => {
    // Obtén las preferencias del usuario
    const length = parseInt(lengthInput.value);
    const useLetters = useLettersCheckbox.checked;
    const useNumbers = useNumbersCheckbox.checked;
    const useSymbols = useSymbolsCheckbox.checked;

    // Genera la contraseña utilizando la función importada
    const newPassword = generatePassword(length, useLetters, useNumbers, useSymbols);

    // Muestra la contraseña generada en el párrafo
    passwordResult.textContent = newPassword;
});

// Inicializa la página con una contraseña generada
generateButton.click(); // Simula un clic en el botón para generar una contraseña inicial
