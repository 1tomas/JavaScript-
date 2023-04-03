"use strict";

document.querySelector('#btn-agregar').addEventListener('click', agregar);
document.querySelector('#btn-reset').addEventListener('click', reset);
document.querySelector('#btn-borrar-ultimo').addEventListener('click', borrarUltimo);
document.querySelector('#btn-sortear').addEventListener('click', sortear)


let nombres = [];

function agregar() {
    let input = document.getElementById('nombre');
    let nombreNuevo = input.value;
    
    nombres.push(nombreNuevo);
    mostrar();  
    input.value = "";
}

function mostrar (){
let lista = document.querySelector('.listado');
lista.innerHTML = "";

for (let agregado of nombres){
    lista.innerHTML += '<li>' + agregado + '</li>';
}

}

function reset (){
    nombres = [];
    mostrar();
} 

function borrarUltimo (){
    nombres.pop();
    mostrar();
}

function sortear(){
    let random = Math.floor(Math.random()*nombres.length);

    document.getElementById('resultado').innerHTML = nombres[random];
}