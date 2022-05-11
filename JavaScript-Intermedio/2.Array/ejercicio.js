/*
Ejercicios de array
1.Muestra los numeros pares del siguiente array 
[0,1,2,3,4,5,6,7,8,9,10,11,12]

2. Suma todos los numeros del array 
[º,1,2,3,4,5,6,7,8,9,10,11,12]
*/

var num = [0,1,2,3,4,5,6,7,8,9,10,11,12]
for (var i = 0; i <= num.length; i+=1){
    if (i % 2 == 0){
        console.log(i)
    }
}

var numero = [0,1,2,3,4,5,6,7,8,9,10,11,12]
var total = 0;
for (var i = 0; i < numero.length; i+=1){
    total += numero[i];
}
console.log("El total es: " + total);