let anuncio = [];
crearTabla(anuncio);


function Anuncio(titulo,transaccion, descripcion,precio,num_wc,num_estacionamiento,num_dormitorio)
{
    this.titulo=titulo;
    this.transaccion=transaccion;
    this.descripcion=descripcion;
    this.precio=precio;
    this.num_wc=num_wc;
    this.num_estacionamiento=num_estacionamiento;
    this.num_dormitorio=num_dormitorio;

}

//let m1=new Mascota("bobby",3,"perro",true,false,true,"carne");