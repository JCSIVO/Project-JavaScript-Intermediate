/*Escribir una funcion que reciba un numero como parametro 
y devuelva un numero aleatorio entre cero y el numero del parametro
ejemoplo: CalcularAleatorio(10) ->devuelve un numero aleatorio
entre 0 y 10
*/

var aleatorio = Math.random()

function generarNumero (numeroMaximo){
    return Math.round(Math.random() * numeroMaximo);
}

//console.log(generarNumnero(100));
console.log(generarNumnero(10));

