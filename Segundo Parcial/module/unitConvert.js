// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Función para convertir de Fahrenheit a Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Exportar las funciones para su uso en otros archivos
  export { celsiusToFahrenheit, fahrenheitToCelsius };