function Persona(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function(){
        return "Hola, me llamo " + this.nombre;
    }
};

var p1 = new Persona("Jose","Alvarez",34);
var p2 = new Persona("Ana","Gonzalez",20);

Persona.prototype.altura=1.50;

p1.altura=1.70;

console.log(p1.altura);
console.log(p2.altura);

//***********************************************/

var x;

function foo(){
    console.log("Hola mundo");
}

x=foo;

x();
foo();

//***********************************************/

var x;

function foo(a,b,c){
    console.log(a , b , c);
}

x=foo;

x(23,12);

//***********************************************/
//Toda funcion en javascript tienen un 'arguments' que muestra como array pero es un OBJETO
var x;

function foo(a,b,c){
    console.log(arguments);
}

x=foo;

x(23,12);

//***********************************************/

var x;

function foo(a,b,c){
    console.log(arguments.length);
}

x=foo;

x(23,12);