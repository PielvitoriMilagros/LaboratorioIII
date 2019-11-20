let mensaje:string;  // Si no le pongo el tipo con dos puntos, adopta el primero que le asigno
//let mensaje:string | number;
//let mensaje:any;
mensaje = "Hola Mundo";
console.log(mensaje);

// Array

let vector:number[] = [1,2,3,4];

// Tupla
let tupla:[number,string] = [1,"Ironman"];

// Enum
enum Eheroe{
    Xmen,
    Avenger
}
console.log("Enum..");
console.log(Eheroe.Avenger); // --> Esto devuelve 1
console.log(Eheroe[Eheroe.Avenger]);  // --> Esto devuelve Avenger

for(let key in Eheroe){
    console.log(key);
}   // --> Esto devuelve los indices y los contenidos


// Funciones
let funcionEnviarMision = function(heroe?:string):string{
    return heroe + " enviado.";
}

console.log(funcionEnviarMision("Spiderman"));
console.log(funcionEnviarMision());