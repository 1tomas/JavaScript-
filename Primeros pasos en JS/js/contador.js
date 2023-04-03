
"use strict";

let btnSumar = document.getElementById("btn-sumar");
btnSumar.addEventListener("click", function (e) {SumarCantidad(+1) });

let btnRestar = document.getElementById("btn-restar");
btnRestar.addEventListener("click", function (e) { SumarCantidad(-1) });


let calorias = 0;
SumarCantidad(0); 

function SumarCantidad(nuevas){
    calorias += nuevas;
    let nodoTotal = document.getElementById("txtTotal");
    nodoTotal.innerHTML = calorias;
}

let btn = document.getElementById("btn-sumar-input");
btn.addEventListener("click", SumarInput);

function SumarInput() {
    //lee el nombre
    let nodoInput =  document.getElementById("calorias");
    let nuevasCalorias = parseInt(nodoInput.value);
    SumarCantidad(nuevasCalorias);
}
