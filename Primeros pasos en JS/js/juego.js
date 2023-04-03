
"use strict";

// event listener al boton"jugar"
let btn=document.querySelector('#btn-play').addEventListener("click",jugar);
// o tambien asi btn.addEventListener("click",jugar);

// declarando el arreglo con tres elementos
let opciones=["piedra","papel","tijera", "lagarto", "spock"];

function jugar(){
    // cree una funcion llamada jugar que se activa con un click
    // le digo que cuando se ejecute, ejecute la variable que genera un numero del 0 al 3 
    let random = Math.floor(Math.random() * opciones.length ); 
    // creo una variable que accede a mi arreglo a traves del resultado de otra variable 
    let opcion = opciones[random]; 
    // una vez echo todo eso le digo que imprima la variable OPCION
    // que de resultado tiene alguna de las OPCIONES  
    document.querySelector('.result').innerHTML= opcion; }
    