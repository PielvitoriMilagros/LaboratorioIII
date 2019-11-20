function crearTabla(array) {
    var tabla = document.createElement("table");

    //    tabla.className = 'tabla';
    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse:collapse');
    tabla.setAttribute('width', '700px');

    let cabecera = document.createElement("tr");

    for (atributo in array[0]) {
        let th = document.createElement("th");
        th.textContent = atributo;      // el primer atributo del primer objeto de mi array
        cabecera.appendChild(th);       // Mete dentro del tr, el th
    }

    tabla.appendChild(cabecera);

    for (i in array) {
        var fila = document.createElement("tr");
        var unObjeto = array[i];

        for (j in unObjeto) {
            var celda = document.createElement("td");
            celda.setAttribute('style', 'text-align:center');
            // Se puede hacer de ambas formas
            //            var dato = document.createTextNode(unObjeto[j]);
            //            celda.appendChild(dato);
            celda.textContent = unObjeto[j];
            fila.appendChild(celda);

        }
        tabla.appendChild(fila);
    }

    return tabla;



}