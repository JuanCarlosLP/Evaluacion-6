// JavaScript Array Map Method
// El metodo map() crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
});

// doubles es ahora [2, 10, 20, 30]
// numbers permanece [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
  return.Math.sqrt(num);
  });
  
  // roots is ahora [1, 2, 3]
  // numbers permance [1, 4, 9]

// sintaxis 
// var nuevo_array = arr.map(function callback(currentValue, index, array) { 
// elemento devuelto de nuevo_array 
// }[, thisArg])

// Parametros 

// callback; funcion que producira un elemento nuevo array, recibe tres argumentos:
// currentValue; El elemento actual del array que se esta procesando
// Index; El indice del elemento acutal dentro del array-
// Array; El array sobre el que se llama "map"
// thisArg; opcional. Valor a usar como "this" al ejecutar callback

// Descripcion 
// "map" llama a la funcion "callback" provista una vez por elemento de un array, en orden, y construye un nuevo array con los resutaldos. 
