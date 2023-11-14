"use strict";

let pizzaPrice = 200;
let empanadaPrice = 300;
let promoPrice = 400;

document.querySelector("#calculate-prices").addEventListener("click", function(){

    let pizzas = document.querySelector("#quantityP").value;
    let quantityP = pizzas * pizzaPrice;

    let empanadas = document.querySelector("#quantityE").value;
    let quantityE = empanadas * empanadaPrice;

    let priceWithoutDiscount = quantityP + quantityE;

    if(pizzas > 2){
        document.querySelector("#price-without-discount").classList.add("red");
        if (empanadas > pizzas){
            document.querySelector("#price-without-discount").classList.add("blue");
        }
    }
    document.querySelector("#price-without-discount").innerHTML = priceWithoutDiscount;

    let promoQuantity = 0;
    if(pizzas == empanadas){
        promoQuantity = pizzas || empanadas;
    }
    let priceWithDiscount = promoQuantity * promoPrice;
    document.querySelector("#total-order").innerHTML = priceWithDiscount;

    let difference = 0;
    if(priceWithDiscount > 0){
        difference = priceWithoutDiscount - priceWithDiscount;
    }
    document.querySelector("#discount").innerHTML = difference;

    if(pizzas != empanadas){
        document.querySelector("#total-order").innerHTML = priceWithoutDiscount;
    }
});
