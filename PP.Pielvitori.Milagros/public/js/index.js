//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio;

let frm;

window.addEventListener('load', inicializar);

function inicializar(e) {
    e.preventDefault();
    frm = document.forms[0];
    limpiarValues();
    frm.addEventListener('submit', manejadorSubmit);

    document.getElementById("btnEliminar").addEventListener('click', borrarAnuncio);

    document.getElementById("btnCancelar").addEventListener('click', limpiarValues);

    cargarDatos();
}

function manejadorSubmit(e) {
    e.preventDefault();
    let nuevoAnuncio = obtenerAnuncio(e.target, false);
    altaAnuncio(nuevoAnuncio);
}

function manejadorModificar(e) {
    e.preventDefault();
    let anuncio = obtenerAnuncio(e.target, true);
    modificarAnuncio(anuncio);
}


function obtenerAnuncio(frm, tieneId) {
    let id=0;
    let titulo;
    let descripcion;
    let transaccion;
    let precio;
    let num_wc
    let num_estacionamiento;
    let num_dormitorio;
    for (let element of frm.elements) {
        switch (element.name) {
            case "titulo":
                titulo = element.value;
                break;
            case "descripcion":
                descripcion = element.value;
                break;
            case "precio":
                precio = element.value;
                break;
            case "num_wc":
                num_wc = element.value;
                break;
            case "num_estacionamiento":
                num_estacionamiento = element.value;
                break;
            case "num_dormitorio":
                num_dormitorio = element.value;
                break;
            case "idAnuncio":
                if (tieneId === true) {
                    id = element.value;
                }
                break;
            case "transaccion":
                if (element.checked === true) {
                    transaccion = element.value;
                }
                break;
        }
    }
    return new Anuncio(id, titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio);

}


function setValues(e){
    let tr = e.target.parentElement ;
    let nodos = tr.childNodes;
    
    document.getElementById("idAnuncio").value = nodos[0].innerText;
    document.getElementById("idAnuncio").hidden = false;

    document.getElementById("lblId").hidden = false;
    document.getElementById("titulo").value = nodos[1].innerText;
    document.getElementById("descripcion").value = nodos[3].innerText;
    document.getElementById("precio").value = nodos[4].innerText;
    document.getElementById("num_wc").value = nodos[5].innerText;
    document.getElementById("num_estacionamiento").value = nodos[6].innerText;
    document.getElementById("num_dormitorio").value = nodos[7].innerText;
    
    if (nodos[2].innerHTML == "Venta") {
        document.getElementById("rdoVenta").checked = true;
    } else {
        document.getElementById("rdoAlquiler").checked = true;
    }

    frm.removeEventListener('submit', manejadorSubmit);
    frm.addEventListener('submit', manejadorModificar);

    document.getElementById("btnEliminar").hidden = false;
    document.getElementById("btnCancelar").hidden = false;


}


function limpiarValues() {
    document.getElementById("idAnuncio").value = "";
    document.getElementById("idAnuncio").hidden = true;
    document.getElementById("lblId").hidden = true;

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("num_wc").value = "";
    document.getElementById("num_dormitorio").value = "";
    document.getElementById("num_estacionamiento").value = "";
    document.getElementById("rdoVenta").checked = false;
    document.getElementById("rdoAlquiler").checked = false;

    frm.removeEventListener('submit', manejadorModificar);
    frm.addEventListener('submit', manejadorSubmit);

    document.getElementById("btnEliminar").hidden = true;
    document.getElementById("btnCancelar").hidden = true;

}


//////////////////////LLAMADAS AJAX/////////////////////////////////

function cargarDatos() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let objetos = JSON.parse(xhr.responseText);
            document.getElementById('divTabla').innerText = "";
            document.getElementById("divTabla").appendChild(crearTabla(objetos.data));
            let tds = document.getElementsByTagName("td");
            for (var i = 0; i < tds.length; i++) {
                let td = tds[i];
                td.addEventListener('click', setValues);
            }
        }else {
            document.getElementById("divTabla").innerText="";
            document.getElementById("divTabla").innerHTML='<img src="../img/831.gif" alt="cargando...">';
        }
    }
    xhr.open("GET", "http://localhost:3000/traerAnuncios", true);
    xhr.send();
}

function modificarAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            cargarDatos();
            limpiarValues();
        }
    }
    xhr.open('POST', 'http://localhost:3000/modificarAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}

function altaAnuncio(nuevoAnuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            cargarDatos();
            limpiarValues();
        }
    }
    xhr.open("POST", "http://localhost:3000/altaAnuncio", true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(nuevoAnuncio));
}


function borrarAnuncio() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            cargarDatos();
            limpiarValues();
        }
    }
    xhr.open('POST', 'http://localhost:3000/bajaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');
    xhr.send(obtenerId(frm));
}

function obtenerId(frm)
{
    for (element of frm.elements) {
        if (element.id === "idAnuncio") {
            let retorno = "id="+element.value;
            return retorno;
            //return `id=${element.value}`;
        }
    } 
}