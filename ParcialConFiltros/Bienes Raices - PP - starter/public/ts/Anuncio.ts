class Anuncio
{
    protected titulo:string;
    protected descripcion:string;
    protected transaccion:string;
    protected precio:number;
    protected num_wc:number;
    protected num_dormitorio:number;
    protected num_estacionamiento:number;
    protected id:any;

    constructor(id:any,titulo:string,descripcion:string,transaccion:string,precio:number,num_wc:number,num_dormitorio:number,num_estacionamiento:number) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.transaccion = transaccion;
        this.precio = precio;
        this.num_wc = num_wc;
        this.num_dormitorio = num_dormitorio;
        this.num_estacionamiento= num_estacionamiento;
    }

    // Setters & Getters

    set Titulo(e:string){this.titulo = e};
    get Titulo():string{return this.titulo;};

    set Descripcion(e:string){this.descripcion = e};
    get Descripcion():string{return this.descripcion;};

    set Transaccion(e:string){this.transaccion = e};
    get Transaccion():string{return this.transaccion;};

    set Precio(e:number){this.precio = e};
    get Precio():number{return this.precio;};

    set Num_wc(e:number){this.num_wc = e};
    get Num_wc():number{return this.num_wc;};

    set Num_dormitorio(e:number){this.num_dormitorio = e};
    get Num_dormitorio():number{return this.num_dormitorio;};

    set Num_estacionamiento(e:number){this.num_estacionamiento = e};
    get Num_estacionamiento():number{return this.num_estacionamiento;};


}
