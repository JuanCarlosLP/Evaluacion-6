// Descripcion 
// El metodo findIndex() ejecuta la funcion de callback una vez por cada indice del array hasta que encuentre uno donde callback devuelva un valor verdadero (eso es, un valor que fuerza un true)
// si dicho elemento es encontrado, findIndex() inmediatamente devuelve el indice del elemento. Si la funcion callback, nunca devuelve un valor verdadero ( o el tamaño del array es 0), findIndex devuelve -1 
// 
// Ejemplo 
// El siguente ejemplo encuentra el indice de un elemento en el array que sea numero primero ( o devuelve -1 si no hay ningun numero primo).

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
    return false;
    } else {
     start++;
     }
     }
     return element > 1;
     }
     
     console.log([4, 6, 8, 12].findIndex(isPrime)); // -1 no encontrado
     console.log([4, 6, 7, 12].findIndex(isPrime)); // 2 
