/*Se pide un ejercicio que imprima un mensaje con la fecha
de hoy con el siguiente formato
Hola, hoy es XX del mes XXXX del año YYYY
*/

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

console.log("Hola Hoy es " + day + "del mes " + month + "del año" + year)