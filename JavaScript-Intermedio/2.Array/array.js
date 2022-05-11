var colores = ["verde", "azul", "rojo"];

console.log(colores); //imrpime todo 
console.log(colores[1]) //imprime el azul
console.log(colores[0]) //imprime el verde
console.log(colores[2]) //imprime el rojo
console.log(colores[3]) //error undefined


//agregar nuevo elementos (push) un nuevo color con el metodo push()
colores.push("negro")

console.log(colores);
console.log(colores[3]) //ahora tiene el valor de negro
