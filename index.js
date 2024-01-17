const API_URL ="http://jsonplaceholder.typicode.com";

//EJECUTAR EN UN SERVIDOR, TIPO XAMMP POR EJEMPLO


//1º OPCION UTILIZANDO CLASE XMLHTTPREQUEST
/*const xhr = new XMLHttpRequest();

function omRequestHandler(){

    //0: UNSET: no se ha llamdo al metodo open
    //1: OPENED: se ha llamado al metodo open
    //2: HEADER:RECIVED: se esta manando al metodo send
    //3: LOADING: esta cargando
    //4: DONE: se ha completado la operacion

    //status 200 respuesta correcta
    if ((this.readyState == 4) && (this.status==200)){

        //nos devuelve la respusta en formato texto
        console.log(this.response);
        //lo convertimos en formato objetos y arrays de objetos
        const data = JSON.parse(this.response)
        console.log(data);

        const HTMLResponse =document.getElementById("app");

        const plantilla =data.map(user => <li>$user.name + " " + $user.email</li>)

        HTMLResponse.innerHTML= '<ul>plantilla</ul>'

    }

}

//se queda en estado 0 porque no hemos llamado al metodo open
xhr.addEventListener("load", omRequestHandler)
//llamamos al metodo open en este caso con GET, podriamos haber utilizado GET, POST, PUT...
xhr//se activa el estado 1 
xhr.open('GET', API_URL/users);
//lamamor al metodo send para iniciar la petición, cuando se haya completado la respuesta pasara al estado 4
xhr.send();
*/

//2º OPCION UTILIZANDO CLASE FETCH
/*
fetch("http://jsonplaceholder.typicode.com/users")
    .then(( response) => response.json())
    .then(( users) => {
        const template = users.map(user => <li>user.name</li>)
        //lo estamos haciendo con string, una mejora seri + "  " + a hacerlo con nodos del DOM
        HTMLResponse.innerHTML = <ul>template</ul>
    });
*/


//3º OPCION UTILIZANDO CLASE FETCH CON NODOS DEL DOM
//TODO ESTE PROCESO NO LOS FACILICITA FRAMEWORK TIPO REACT, ANGULAR...
const HTMLResponse =document.getElementById("app");
const template =document.createElement("ul");


//fetch("http://jsonplaceholder.typicode.com/users")
fetch(`${API_URL}/users`)
    //esta promesa recibe una respuesta, como no lo devuelve de tipo texto, de esta manera no lo convierte a json
    .then(( response) => response.json())
    //otra promesa que son los datos que son los usuarios, no lo devuevle en formato objeto
    .then(( users) => {
        users.forEach (user => {
            let elem =document.createElement("li");
            //nodo de tipo texto que va a ser hijo de li
            elem.appendChild(document.createTextNode(`${user.name} <----------> ${user.email}` ));
            //nodo hijos de ul
            template.appendChild(elem);
        })

        //nodo raiz tendra un hijo que sera template
        HTMLResponse.appendChild(template);
    });