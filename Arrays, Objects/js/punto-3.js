"use strict";

let compradores = [];

let form = document.querySelector("#formulario").addEventListener("submit", function(e){
    e.preventDefault();
})

let boton = document.querySelector("#btn-enviar").addEventListener("click", enviar)

let botonA = document.querySelector(".btn-vera").addEventListener("click", function(){
    let listaB = document.querySelector(".listaB");
    listaB.classList.add("ocultar")
    let lista = document.querySelector(".lista");
    lista.classList.remove("ocultar")
})
let botonB = document.querySelector(".btn-verb").addEventListener("click", function(){
    let lista = document.querySelector(".lista");
    lista.classList.add("ocultar")
    let listaB = document.querySelector(".listaB");
    listaB.classList.remove("ocultar")
})

let btnTotal = document.querySelector("#btn-total").addEventListener("click", total)

function enviar(){
    let select = document.querySelector("#tipo").value;
    let descripcion = document.querySelector("#descripcion").value;
    let nombre = document.querySelector("#nombre").value;
    let costo = parseInt(document.querySelector("#costo").value); 

    let registro = {
        "comprador":{
            "select":select,
            "descripcion":descripcion,
            "nombre":nombre,
            "costo":costo,
        }
    }
    compradores.push(registro); 
    imprimir()
  
}

function imprimir(){

    let lista = document.querySelector(".lista");
    lista.innerHTML = "";
    let listaB = document.querySelector(".listaB");
    listaB.innerHTML = "";

    for (let i of compradores) {
           if(i.comprador.select == "A"){
            lista.classList.remove("ocultar")
            lista.innerHTML += `<li>Lista A:
            ${i.comprador.select}
            ${i.comprador.descripcion}-${i.comprador.nombre}-${i.comprador.costo}</li>`;

           }else{
            listaB.classList.remove("ocultar")
            listaB.innerHTML += `<li>Lista B:
            ${i.comprador.select}
            ${i.comprador.descripcion}-${i.comprador.nombre}-${i.comprador.costo}</li>`;
           }

    }
   
};

function total(){
    let total = 0;
    for (let i = 0; i < compradores.length; i++) {
        total += compradores[i].comprador.costo;
    }
    console.log(total);
    document.getElementById("facturado").innerHTML = total;
}