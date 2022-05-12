var persona = {
    nombre : 'Jhon',
    edad : 30,
    saludar: function (){
        console.log('Hola')
        console.log(this.nombre) //acceder al atributo dentro del objeto
        console.log("Hola " + this.nombre) //imprime hola Jhon
    }
}

console.log(persona) //imprime el objeto
console.log(persona.nombre) //imprime Jhon
console.log(persona.saludar) //imprime funcion te indica que es una funcion
console.log(persona.saludar()) //imprime los valores de la funcion
persona.saludar(); //imprime el hola de nuestra funcion 