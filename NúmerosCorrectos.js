var numero = prompt("Por favor, ingresa un número:");

numero = parseFloat(numero);

if (numero > 0) {
    
  console.log("El número ingresado es positivo.");
  alert("El número ingresado es positivo.");
} else if (numero < 0) {

  console.log("El número ingresado es negativo.");
  alert("El número ingresado es negativo.");
} else {

  console.log("El número ingresado es igual a cero.");
  alert("El número ingresado es igual a cero.");
}