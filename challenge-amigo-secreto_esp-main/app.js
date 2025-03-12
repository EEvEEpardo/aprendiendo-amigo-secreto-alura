// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const numeros = "0123456789";

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
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
    
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }
    
    let sorteados = [...amigos];
    let resultado = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let posibles = sorteados.filter(a => a !== amigos[i]);
        
        if (posibles.length === 0) {
            return sortearAmigo(); // Si no hay opciones, rehacer el sorteo
        }
        
        let indice = Math.floor(Math.random() * posibles.length);
        resultado[amigos[i]] = posibles[indice];
        sorteados.splice(sorteados.indexOf(posibles[indice]), 1);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    for (const [amigo, asignado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}