"use strict";
var mensaje; // Si no le pongo el tipo con dos puntos, adopta el primero que le asigno
//let mensaje:string | number;
//let mensaje:any;
mensaje = "Hola Mundo";
console.log(mensaje);
// Array
var vector = [1, 2, 3, 4];
// Tupla
var tupla = [1, "Ironman"];
// Enum
var Eheroe;
(function (Eheroe) {
    Eheroe[Eheroe["Xmen"] = 0] = "Xmen";
    Eheroe[Eheroe["Avenger"] = 1] = "Avenger";
})(Eheroe || (Eheroe = {}));
console.log("Enum..");
console.log(Eheroe.Avenger); // --> Esto devuelve 1
console.log(Eheroe[Eheroe.Avenger]); // --> Esto devuelve Avenger
for (var key in Eheroe) {
    console.log(key);
} // --> Esto devuelve los indices y los contenidos
// Funciones
var funcionEnviarMision = function (heroe) {
    return heroe + " enviado.";
};
console.log(funcionEnviarMision("Spiderman"));
console.log(funcionEnviarMision());
/// <reference path="hello.ts" />
var msj;
msj = "GoodBye";
console.log(msj);
//# sourceMappingURL=output.js.map