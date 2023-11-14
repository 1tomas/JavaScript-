"use strict";

let buyers = [];

let form = document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault();
});

let button = document.querySelector("#btn-submit").addEventListener("click", submit);

let buttonA = document.querySelector(".btn-view-a").addEventListener("click", function(){
    let listB = document.querySelector(".listB");
    listB.classList.add("hide");
    let list = document.querySelector(".list");
    list.classList.remove("hide");
});

let buttonB = document.querySelector(".btn-view-b").addEventListener("click", function(){
    let list = document.querySelector(".list");
    list.classList.add("hide");
    let listB = document.querySelector(".listB");
    listB.classList.remove("hide");
});

let btnTotal = document.querySelector("#btn-total").addEventListener("click", total);

function submit(){
    let select = document.querySelector("#type").value;
    let description = document.querySelector("#description").value;
    let name = document.querySelector("#name").value;
    let cost = parseInt(document.querySelector("#cost").value); 

    let record = {
        "buyer":{
            "select":select,
            "description":description,
            "name":name,
            "cost":cost,
        }
    };
    buyers.push(record); 
    print();
}

function print(){
    let list = document.querySelector(".list");
    list.innerHTML = "";
    let listB = document.querySelector(".listB");
    listB.innerHTML = "";

    for (let i of buyers) {
        if(i.buyer.select == "A"){
            list.classList.remove("hide");
            list.innerHTML += `<li>Invoice A:
            ${i.buyer.select}
            ${i.buyer.description}-${i.buyer.name}-${i.buyer.cost}</li>`;
        } else {
            listB.classList.remove("hide");
            listB.innerHTML += `<li>Invoice B:
            ${i.buyer.select}
            ${i.buyer.description}-${i.buyer.name}-${i.buyer.cost}</li>`;
        }
    }
}

function total(){
    let total = 0;
    for (let i = 0; i < buyers.length; i++) {
        total += buyers[i].buyer.cost;
    }
    console.log(total);
    document.getElementById("invoiced").innerHTML = total;
}
