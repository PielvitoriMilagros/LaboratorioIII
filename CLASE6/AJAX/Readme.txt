copiar dentro de hdoc toda la carpeta ajax
arrancar Xaamp y apache. Poner en google localhost/ruta_despues_de_htdocs

Para poder correr un servidor node tengo que tenerlo iinstalado
Google: nodejs.org


Click derecho en donde estè el server.js - Open in terminal - node server --> Iniciar el servidor. Tiene que tener todo el server modules.

localhost:3000/traerPersonas --> VA a devolver un array de objeto personas

En el alta de personas, ponemos POST en el postman y y en el body, como raw:
{
"nombre":"Jorge",
"apellido":"Gimenez",
"edad":30
}

va xhr.setrequestheader("content.type","aplication/json"); --> Lo escribió en el pizarrón

Para que funcione, arriba a la derecha, al lado del raw, se pone JSON en lugar de text

Cargo personas y despuès con get y con traerPersonas, veo lo que fui cargando

xhr.send(JSON.stringify(Persona));	--> Pasar el objeto de javascript a JSON, a texto.

Para borrar, con POST le tengo que pegar a bajaPersona
Como x-www-form-urlencoded le paso la key id y el value 20001

Para modificar, se tiene que mandar el POST con TODOS los datos de persona, y el id también
