import {  sumar, restar, multiplicar, dividir  } from "../aggregator.js";




const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");
const respuesta = document.getElementById("Respuesta");

// Agregar controladores de eventos a los botones
botonSumar.addEventListener("click", hacerSuma);
botonRestar.addEventListener("click", hacerResta);
botonMultiplicar.addEventListener("click", hacerMultiplicar);
botonDividir.addEventListener("click", hacerDividir);

const inputN1 = document.getElementById("n1");
const inputN2 = document.getElementById("n2");

function hacerSuma () {
const resultado = sumar(parseInt(inputN1.value) , parseInt(inputN2.value));
  respuesta.innerHTML = `El resultado es: ${resultado}`;
};
function hacerResta (){
  const resultado = restar( parseInt(inputN1.value) , parseInt(inputN2.value));
  respuesta.innerHTML = `El resultado es: ${resultado}`;
};
function hacerMultiplicar () {
  const resultado = multiplicar(parseInt(inputN1.value) , parseInt(inputN2.value));
  respuesta.innerHTML = `El resultado es: ${resultado}`;
};
function  hacerDividir  () {
  const resultado = dividir( parseInt(inputN1.value) , parseInt(inputN2.value));
  respuesta.innerHTML = `El resultado es: ${resultado}`;
};
