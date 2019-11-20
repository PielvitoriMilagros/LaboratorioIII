var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    frm.addEventListener('submit', manejadorSubmit);
}

function manejadorSubmit(e) {
    e.preventDefault();

    let nuevoAnuncio = obtenerAnuncio(e.target);


    anuncio.push(nuevoAnuncio);
//altaAnuncio
altaAnuncio(nuevoAnuncio);

//traerAnuncio

    //******************* */

    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(anuncio));

    //  console.log(anuncio);

}


function obtenerAnuncio(frm) {
    let titulo;
    let transaccion;
    let descripcion;
    let precio;
    let num_wc;
    let num_estacionamiento;
    let num_dormitorio;

    for (elemento of frm.elements) {

        switch (elemento.name) {
            case "titulo":
                titulo = elemento.value;
                break;
            case "transaccion":
                if (elemento.checked) {
                    transaccion = elemento.value;
                }
                break;
            case "descripcion":
                descripcion = elemento.value;
                break;
            case "precio":
                precio = elemento.value;
                break;
            case "num_wc":
                num_wc = elemento.value;
                break;
            case "num_estacionamiento":
                num_estacionamiento = elemento.value;
                break;
            case "num_dormitorio":
                num_dormitorio = elemento.value;
                break;
        }

    }

    return new Anuncio(titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio);


}


function altaAnuncio(nuevoAnuncio)
{

let data = JSON.stringify(nuevoAnuncio);
//data = JSON.parse(nuevoAnuncio);

console.log(data);

  
    let xhr = new XMLHttpRequest(); //objeto peticion
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) { // ya llego la respuesta.
        let spinner = document.getElementById("spinner");
        if (xhr.status == 200) {
          setTimeout(() => {
            spinner.innerText = xhr.responseText;
  
            clearTimeout(tiempo); // si se cumple antes de llegar al final, no pasa nada. sino no funciona
          }, 1000);
        } else {
          console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
      } else {
        spinner.innerHTML = '<img src="./img/831.gif" alt="spinner" />';
      }
    };
    //recibe 3 argumentos, metodo de envio, url, que sea asincrono (true)
    xhr.open("POST", "http://localhost:3000/altaAnuncio", true);
    xhr.setRequestHeader('Content-type','Application/json');
    // En el POST los datos viajan dentro del send
    xhr.send(data);
  
    var tiempo = setTimeout(() => {
      xhr.abort(); // cierra la peticion
      spinner.innerHTML = "Servidor ocupado. Intente mas tarde";
    }, 3000);




}

