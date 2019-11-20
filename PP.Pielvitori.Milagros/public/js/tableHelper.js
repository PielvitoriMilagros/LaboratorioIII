//funciones utiles:
//document.createElement("elemento")
//setAttribute('atributo', 'valor');
//appendChild(child);
//createTextNode(valor);

function crearTabla(array){
    var tabla = document.createElement("table");
    var cabecera = document.createElement("tr");
    tabla.className = tabla;


    for(let atributo in array[0]){
        let th = document.createElement("th");
        th.textContent = atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for(let i in array){
        var fila = document.createElement("tr");
        var objeto = array[i];
        for(j in objeto){
            var td = document.createElement("td");
            td.textContent = objeto[j];
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }
    return tabla;
    
}
