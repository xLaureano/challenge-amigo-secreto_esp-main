// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables

let amigos =[];

//funciones

function agregarAmigo() {
    let x = document.getElementById('amigo').value;
    if (x !== '') {
        amigos.push(x);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        actualizarLista();
    } else {
        alert('Por favor, inserte un nombre.');
    }
}


function actualizarLista() {
 
    let lista = document.getElementById('listaAmigos');


    lista.innerHTML = '';

 
    for (let i = 0; i < amigos.length; i++) {
       
        let li = document.createElement('li');

        
        li.innerHTML = amigos[i];

      
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length !== 0) {
      
        let aleatorio  = Math.floor(Math.random() * amigos.length);

       
        let seleccion = amigos[aleatorio];

      
        document.getElementById('resultado').innerHTML = seleccion;
    } else {
        alert('No hay amigos disponibles para seleccionar, por favor inserte un nombre.');
    }
}
