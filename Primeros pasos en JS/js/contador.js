"use strict";

let btnAdd = document.getElementById("btn-sumar");
btnAdd.addEventListener("click", function (e) {AddAmount(+1) });

let btnSubtract = document.getElementById("btn-restar");
btnSubtract.addEventListener("click", function (e) { AddAmount(-1) });

let calories = 0;
AddAmount(0); 

function AddAmount(newAmount){
    calories += newAmount;
    let totalNode = document.getElementById("txtTotal");
    totalNode.innerHTML = calories;
}

let btnInput = document.getElementById("btn-sumar-input");
btnInput.addEventListener("click", AddInput);

function AddInput() {
    // Read the input
    let inputNode =  document.getElementById("calories");
    let newCalories = parseInt(inputNode.value);
    AddAmount(newCalories);
}
