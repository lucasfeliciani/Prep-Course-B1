// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
  var acumulador = 0;
    for ( i = 0; i < 11; i++) {
       acumulador = acumulador + i;
    }
          return acumulador;
        }
        console.log(imprimirSumaNumeros);
      
function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = []
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 == 0) {
      pares.push(array[i])
        
          }
        }
        return pares;  
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var cuadrado = 0;
  for(var i = 0; i < array.length; i++){
    cuadrado.push(math.pow (array[i])) ;
        
          }
    return cuadrado ;
  }
  console.log(elevaAlCuadrado)
  
  
function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
