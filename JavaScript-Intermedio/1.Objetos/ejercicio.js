/*Imaginemos que vamos a desarrollar un juego, y 
debemos crear un objeto Jugador que tenga una propiedad fuerza
que incialmente tenga el valor 1, un metodo incrementarFuerza que 
nos permita incrementar en 1 la fuerza del jugador y un metodo 
consultarFuerza que nos muestre un mensaje con la fuerza 
del jugador 
*/

var Jugador = {
    fuerza : 1,
    incrementarFuerza: function(){
        //this.fuerza += 1; //sumar +1 a fuerza
        this.fuerza = this.fuerza +1;
    },
    consultarFuerza: function(){
        console.log("la fuerza del jugador es: " + this.fuerza)

    }
}

Jugador.consultarFuerza(); //para ver la fuerza inicial
Jugador.incrementarFuerza() //para incrementar la fuerza
Jugador.consultarFuerza() //la fuerza valdra 2