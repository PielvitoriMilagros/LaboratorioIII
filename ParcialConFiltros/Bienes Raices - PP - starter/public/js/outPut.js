"use strict";
var Anuncio = /** @class */ (function () {
    function Anuncio(id, titulo, descripcion, transaccion, precio, num_wc, num_dormitorio, num_estacionamiento) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.transaccion = transaccion;
        this.precio = precio;
        this.num_wc = num_wc;
        this.num_dormitorio = num_dormitorio;
        this.num_estacionamiento = num_estacionamiento;
    }
    Object.defineProperty(Anuncio.prototype, "Titulo", {
        get: function () { return this.titulo; },
        // Setters & Getters
        set: function (e) { this.titulo = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Descripcion", {
        get: function () { return this.descripcion; },
        set: function (e) { this.descripcion = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Transaccion", {
        get: function () { return this.transaccion; },
        set: function (e) { this.transaccion = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Precio", {
        get: function () { return this.precio; },
        set: function (e) { this.precio = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Num_wc", {
        get: function () { return this.num_wc; },
        set: function (e) { this.num_wc = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Num_dormitorio", {
        get: function () { return this.num_dormitorio; },
        set: function (e) { this.num_dormitorio = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Num_estacionamiento", {
        get: function () { return this.num_estacionamiento; },
        set: function (e) { this.num_estacionamiento = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Anuncio;
}());
//# sourceMappingURL=outPut.js.map