window.addEventListener("load", () => {
  
  document.forms[0].addEventListener('submit',enviarDatos);

});

function enviarDatos(e) {

  e.preventDefault();
  let data = traerDatos(e.target); // con target tenemos la referencia de quien emitio: el formulario

  let xhr = new XMLHttpRequest(); //objeto peticion

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) { // ya llego la respuesta.
      let info = document.getElementById("info");
      if (xhr.status == 200) {
        setTimeout(() => {
          info.innerText = xhr.responseText;

          clearTimeout(tiempo); // si se cumple antes de llegar al final, no pasa nada. sino no funciona
        }, 1000);
      } else {
        console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
    } else {
      info.innerHTML = '<img src="./images/spinner.gif" alt="spinner" />';
    }
  };
  //recibe 3 argumentos, metodo de envio, url, que sea asincrono (true)
  xhr.open("POST", "./servidor.php", true);
  xhr.setRequestHeader('Content-type','Application/x-www-form-urlencoded');
  // En el POST los datos viajan dentro del send
  xhr.send(data);

  var tiempo = setTimeout(() => {
    xhr.abort(); // cierra la peticion
    info.innerHTML = "Servidor ocupado. Intente mas tarde";
  }, 3000);
}


function traerDatos(form){
  let nombre = form.nombre.value;
  let apellido = form.apellido.value;

  return `nombre=${nombre}&apellido=${apellido}`;


}

