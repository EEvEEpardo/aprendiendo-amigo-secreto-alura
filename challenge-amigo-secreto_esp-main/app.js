let amigos = [];
//Se declara un array vacío llamado amigos. 
//Este array se usará para almacenar los nombres que se vayan agregando

function agregarAmigo() {
    const input = document.getElementById("amigo");
    //Obtiene el elemento HTML con el id "amigo" y lo almacena en la variable input
    const nombre = input.value.trim();
    //Obtiene el valor del campo de entrada, elimina los espacios en blanco al principio y al final, y lo almacena
    const listaAmigos = document.getElementById("listaAmigos");

    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
   
    amigos.push(nombre);
    //agrega el nombre al final de la lista (array)
    
    const li = document.createElement("li");
    //lista de elementos
    li.textContent = nombre;
    //texto dentro de la lista
    listaAmigos.appendChild(li);
    //agrega la lista y muestra el nombre en la página
    input.value = "";
    // borra el nombre del recuadro "escribe tu nombre" luego de ingresarlo
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }
    //Verifica si hay al menos dos amigos en la lista, en el caso contrario, muestra una alerta.
    
    let sorteados = [...amigos];
    //Crea una copia del array amigos y la almacena en la variable sorteados. 
    //Esto se hace para no modificar el array original durante el sorteo.
    let resultado = {};
    //Crea un objeto vacío llamado resultado. 
    //Este objeto se usa para guardar los resultados del sorteo.
    
    for (let i = 0; i < amigos.length; i++) {
        //Declara una variable i y la inicia en 0. i representa la posición actual en el array amigos,
        //Mientras i sea menor que la cantidad de amigos, el bucle continuará.
        let posibles = sorteados.filter(a => a !== amigos[i]);
        //Para que un amigo no se asigne a sí mismo en el sorteo.
        
        if (posibles.length === 0) {
            return sortearAmigo(); 
        //Si no hay opciones, rehace el sorteo
        //Si no hay amigos posibles para asignar, la función se llama a sí misma de forma recursiva para intentarlo de nuevo.
        }
        
        let indice = Math.floor(Math.random() * posibles.length);
        resultado[amigos[i]] = posibles[indice];
        //Asigna el amigo seleccionado aleatoriamente "(posibles[indice])" como el amigo asignado para regalar a "amigos[i]".
        sorteados.splice(sorteados.indexOf(posibles[indice]), 1);
        //Elimina el amigo asignado para que no se le asigne a otra persona.
    }
    
    mostrarResultado(resultado);
    //Llama a la función "mostrarResultado()" para mostrar los resultados del sorteo en la página web.
}

function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    for (const [amigo, asignado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} le regala a ${asignado}`;
        resultadoLista.appendChild(li);
    }
}
    for (const [amigo, asignado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}
