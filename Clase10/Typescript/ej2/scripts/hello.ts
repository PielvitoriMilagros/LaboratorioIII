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

// Parametros REST
// los tres puntos hacen una copia desreferenciada
let funcionEnviarMision2 = function(...heroes:string[]):void{
    for(let i=0;i<heroes.length;i++){
        console.log(heroes[i] + " enviado a mision 2");
    }
}

funcionEnviarMision2("Batman","Ironman","Hulk");

// Funcion flecha
let funcionEnviarMision3 = (heroe:string="Black Widow"):string=>{
    return heroe + " enviado a mision 3";
}
console.log(funcionEnviarMision3());


//Tipo en el objeto - NO RECOMENDADO
let flash:{nombre:string,edad:number,poderes:string[],getNombre:()=>string} =
{
    nombre:"Barry Allen",
    edad:24,
    poderes:["Correr","Viajar en el tiempo"],
    getNombre(){
        return this.nombre;
    }
}

//Tipo personalizado
type Heroe = {nombre:string,edad:number,poderes?:string[],getNombre:()=>string};
let ironman:Heroe = {
    nombre:"Tony Stark",
    edad:24,
    getNombre:function(){return this.nombre;}
}
console.log(ironman.getNombre());

// Interfaces
interface IHeroe{
    nombre:string,
    poder?:string,
    mostrar?():string
}

let Wolverine:IHeroe = {
    nombre: "James"
}

console.log(Wolverine);
console.log(Wolverine.nombre);

// Interface en clases
class Avenger implements IHeroe{
    nombre:string = "Un avenger";
}

class Mutante implements IHeroe{
    nombre:string = "Un mutante";
}

let unAvenger = new Avenger();
let unMutante = new Mutante();

console.log("Avenger: " + unAvenger.nombre);
console.log("Mutante: " + unMutante.nombre);

//Interface en una función
interface IfuncDosNumeros{
    (num1:number,num2:number):number;
}
let miFuncion:IfuncDosNumeros;
miFuncion = (num1,num2)=>num1+num2;
console.log(miFuncion(2,3));


// Clases
class Avenger2 implements IHeroe{
    nombre:string = "un avenger";
    constructor(nombre:string){
        this.nombre = nombre;
    }
}
let av2 = new Avenger2("Hulk");
console.log("Clase: " + av2.nombre);

//Clase con atibuto privado

/* PALABRAS RESERVADAS
constructor
get
set

*/ 
class Avenger3{
    private _nombre:string = "un avenger";
    private _edad:number = 0;
    constructor(nombre:string){
        this._nombre = nombre;
    }
    get edad():number{return this._edad;}
    set edad(e:number){this._edad = e;}

    public mostrar = ()=> this._nombre;
}

let av3 = new Avenger3("IronMan");
console.log("Clases 2: "+av3.mostrar());
av3.edad = 35;
console.log("Clases 2: "+av3.edad);

//Clases con metodos estaticos
class Xmen{
    static nombre_de_clase = "ClaseXmen";
}
console.log(Xmen.nombre_de_clase);

// Herencia
class AvengerHeredado extends Avenger2{

}
let avher = new AvengerHeredado("Pantera Negra");
console.log(avher.nombre);

// Herencia 2
class AvengerHeredado2 extends Avenger2{
    edad:number=0;
    constructor(nombre:string,edad:number){
        super(nombre);
        this.edad = edad;
    }
}
let avher2:AvengerHeredado2 = new AvengerHeredado2("Avenger Heredado",32);
console.log(avher2.nombre + " " + avher2.edad);

//En el parcial va a haber una interfaz, una clase, y algo que hereda de esa clase


//Namespaces
namespace Funciones{
    export function f1(){
        console.log("Yo soy f1");
    }
    export function f2(){
        console.log("Yo soy f2");
    }
}
Funciones.f1();
Funciones.f2();

// No funciona y en la consola escribimos npm i @types/jquery
/* Es necesario bajar la liberia de JQuery e instalarla
con lo de arriba solo me bajo las definiciones
npm i jquery
tengo que agregar en mi html ./scripts/node_modules/jquery/dist/jquery.min.js
*/
$(function(){
    console.log("ready");
})


