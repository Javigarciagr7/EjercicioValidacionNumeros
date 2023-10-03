//Javier García Rodríguez
//https://github.com/Javigarciagr7/EjercicioValidacionNumeros.git

var numero = prompt("Por favor, ingresa un número:");

numero = parseFloat(numero);

if (numero > 0) {

  console.log("El número ingresado es positivo.");
  alert("El número ingresado es positivo.");
} else if (numero < 0) {

  console.log("El número ingresado es negativo.");
  alert("El número ingresado es negativo.");
} else if (numero == 0){
    console.log("El número ingresado es 0.");
    alert("El número ingresado es 0.");
} else {
  console.log("No se ha ingresado ningún número");
  alert("Introduzca un número.");
}