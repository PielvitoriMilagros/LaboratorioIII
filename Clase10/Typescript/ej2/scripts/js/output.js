"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Parametros REST
// los tres puntos hacen una copia desreferenciada
var funcionEnviarMision2 = function () {
    var heroes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        heroes[_i] = arguments[_i];
    }
    for (var i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviado a mision 2");
    }
};
funcionEnviarMision2("Batman", "Ironman", "Hulk");
// Funcion flecha
var funcionEnviarMision3 = function (heroe) {
    if (heroe === void 0) { heroe = "Black Widow"; }
    return heroe + " enviado a mision 3";
};
console.log(funcionEnviarMision3());
//Tipo en el objeto - NO RECOMENDADO
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Correr", "Viajar en el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var ironman = {
    nombre: "Tony Stark",
    edad: 24,
    getNombre: function () { return this.nombre; }
};
console.log(ironman.getNombre());
var Wolverine = {
    nombre: "James"
};
console.log(Wolverine);
console.log(Wolverine.nombre);
// Interface en clases
var Avenger = /** @class */ (function () {
    function Avenger() {
        this.nombre = "Un avenger";
    }
    return Avenger;
}());
var Mutante = /** @class */ (function () {
    function Mutante() {
        this.nombre = "Un mutante";
    }
    return Mutante;
}());
var unAvenger = new Avenger();
var unMutante = new Mutante();
console.log("Avenger: " + unAvenger.nombre);
console.log("Mutante: " + unMutante.nombre);
var miFuncion;
miFuncion = function (num1, num2) { return num1 + num2; };
console.log(miFuncion(2, 3));
// Clases
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre) {
        this.nombre = "un avenger";
        this.nombre = nombre;
    }
    return Avenger2;
}());
var av2 = new Avenger2("Hulk");
console.log("Clase: " + av2.nombre);
//Clase con atibuto privado
/* PALABRAS RESERVADAS
constructor
get
set

*/
var Avenger3 = /** @class */ (function () {
    function Avenger3(nombre) {
        var _this = this;
        this._nombre = "un avenger";
        this._edad = 0;
        this.mostrar = function () { return _this._nombre; };
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger3.prototype, "edad", {
        get: function () { return this._edad; },
        set: function (e) { this._edad = e; },
        enumerable: true,
        configurable: true
    });
    return Avenger3;
}());
var av3 = new Avenger3("IronMan");
console.log("Clases 2: " + av3.mostrar());
av3.edad = 35;
console.log("Clases 2: " + av3.edad);
//Clases con metodos estaticos
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.nombre_de_clase = "ClaseXmen";
    return Xmen;
}());
console.log(Xmen.nombre_de_clase);
// Herencia
var AvengerHeredado = /** @class */ (function (_super) {
    __extends(AvengerHeredado, _super);
    function AvengerHeredado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AvengerHeredado;
}(Avenger2));
var avher = new AvengerHeredado("Pantera Negra");
console.log(avher.nombre);
// Herencia 2
var AvengerHeredado2 = /** @class */ (function (_super) {
    __extends(AvengerHeredado2, _super);
    function AvengerHeredado2(nombre, edad) {
        var _this = _super.call(this, nombre) || this;
        _this.edad = 0;
        _this.edad = edad;
        return _this;
    }
    return AvengerHeredado2;
}(Avenger2));
var avher2 = new AvengerHeredado2("Avenger Heredado", 32);
console.log(avher2.nombre + " " + avher2.edad);
//En el parcial va a haber una interfaz, una clase, y algo que hereda de esa clase
//Namespaces
var Funciones;
(function (Funciones) {
    function f1() {
        console.log("Yo soy f1");
    }
    Funciones.f1 = f1;
    function f2() {
        console.log("Yo soy f2");
    }
    Funciones.f2 = f2;
})(Funciones || (Funciones = {}));
Funciones.f1();
Funciones.f2();
// No funciona y en la consola escribimos npm i @types/jquery
/* Es necesario bajar la liberia de JQuery e instalarla
con lo de arriba solo me bajo las definiciones
npm i jquery
tengo que agregar en mi html ./scripts/node_modules/jquery/dist/jquery.min.js
*/
$(function () {
    console.log("ready");
});
/// <reference path="hello.ts" />
var msj;
msj = "GoodBye";
console.log(msj);
//# sourceMappingURL=output.js.map