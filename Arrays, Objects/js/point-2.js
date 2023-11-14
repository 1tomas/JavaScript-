"use strict";

document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault();
});

document.querySelector("#btn-print").addEventListener("click", function(){
    let description = document.querySelector("#input-description").value;
    let cost = parseInt(document.querySelector("#input-cost").value);
    let month = parseInt(document.querySelector("#input-month").value);

    let data = {
        "description": description,
        "cost": cost,
        "month": month,
    };
    
    rent.push(data);
    print();
    console.log(rent);
});

let rent = [];

function print() {
    let list = document.querySelector(".list");
    list.innerHTML = ""; 
    for(let i of rent){
        if(i.month > 12){
            list.innerHTML +=`<li>Description: ${i.description
            } Cost: ${i.cost} <span class="purple"> Month: the month limit is 12 </span></li>`;
            rent.pop();
        } else {
            list.innerHTML +=`<li>Description: ${i.description
        } Cost: ${i.cost} Month: ${i.month}</li>`;
        }
    }
}

document.querySelector("#btn-highlight").addEventListener("click", function(){
    let aux = 0;
    let iAux = 0;

    for(let i = 0; i < rent.length; i++){
        if (rent[i].cost > aux){
            iAux = i;
            aux = rent[i].cost; 
        }
    }
    let highlighted = document.querySelector("#highlighted");
    highlighted.classList.add("red");
    highlighted.innerHTML = 
        `<li>${rent[iAux].description}
            ${rent[iAux].cost}
            ${rent[iAux].month}</li>`;
});
