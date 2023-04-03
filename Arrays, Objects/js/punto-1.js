"use strict";

let precioP = 200; 
let precioE = 300;
let precioPromo = 400;


document.querySelector("#calcular-precios").addEventListener("click", function(){

    let pizzas = document.querySelector("#cantidadP").value;
    let cantidadP = pizzas*precioP;

    let empandas = document.querySelector("#cantidadE").value;
    let cantidadE = empandas*precioE;

    
    let precioSinDescuento = cantidadP + cantidadE;
    if(pizzas > 2){
        document.querySelector("#precio-sin-descuento").classList.add("rojo");
        if (empandas > pizzas){
            document.querySelector("#precio-sin-descuento").classList.add("azul");
        }
    }
    document.querySelector("#precio-sin-descuento").innerHTML = precioSinDescuento;
   

    let cantidadPromo = 0;
    if(pizzas == empandas){
        cantidadPromo = pizzas || empandas;
    }
    let precioConDescuento = cantidadPromo*precioPromo;
    document.querySelector("#total-pedido").innerHTML = precioConDescuento;

    let diferencia = 0;
    if(precioConDescuento > 0){
        diferencia = precioSinDescuento-precioConDescuento;
    }
    document.querySelector("#descuento").innerHTML = diferencia;

    if(pizzas != empandas){
        document.querySelector("#total-pedido").innerHTML = precioSinDescuento;
    }

});