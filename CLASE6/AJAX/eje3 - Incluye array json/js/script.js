//Ajax sirve para enviar datos al servidor de forma asincronica

window.addEventListener("load", () => {
  document.getElementById("btlTraer").addEventListener("click", TraerTexto);
});

function TraerTexto() {
  // alert("hola");

  let xhr = new XMLHttpRequest(); //objeto peticion

  xhr.onreadystatechange = () => {
    //valores del readystate
    //0
    //1 envio peticion
    //2 ???
    //3 una parte de la respuesta
    //4 ya esta la respuesta

    if (xhr.readyState == 4) {
      // ya llego la respuesta.
      let info = document.getElementById("info");
      if (xhr.status == 200) {
        //200 -> OK
        // 4xx -> cosas que no se encontraron (404 Not found)
        // 5xx -> problemas con el servidor

        //aca va el codigo que maneja la peticion cuando todo esta OK

        //el timeout es para ver el spinner nada más, simula la demora de una petición más grande
        setTimeout(() => {
          //convertir un string  de json en objeto
          let lista = JSON.parse(xhr.responseText);
          // for(in) trae los indices, for(of) los valores de esos indices
          info.innerHTML = "";
          for (persona of lista) {
            info.innerHTML += `Id: ${persona.id} Nombre: ${persona.nombre} Género: ${persona.genero} Email: ${persona.email} <hr/>`;
          }

          // si la peticion tarda más que lo esperado se corta
          clearTimeout(tiempo); // si se cumple antes de llegar al final, no pasa nada. sino no funciona
        }, 3000);
      } else {
        console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
      }
    } else {
      info.innerHTML = '<img src="./images/spinner.gif" alt="spinner" />';
    }
  };
  //recibe 3 argumentos, metodo de envio, url, que sea asincrono (true)
  xhr.open("GET", "./personas.json", true);
  xhr.send();

  var tiempo = setTimeout(() => {
    xhr.abort(); // cierra la peticion
    info.innerHTML = "Servidor ocupado. Intente mas tarde";
  }, 4000);
}
