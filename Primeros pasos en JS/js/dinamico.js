"use strict";

document.querySelector('#btn-add').addEventListener('click', add);
document.querySelector('#btn-reset').addEventListener('click', reset);
document.querySelector('#btn-delete-last').addEventListener('click', deleteLast);
document.querySelector('#btn-draw').addEventListener('click', draw);

let names = [];

function add() {
    let input = document.getElementById('name');
    let newName = input.value;
    
    names.push(newName);
    display();  
    input.value = "";
}

function display() {
    let list = document.querySelector('.list');
    list.innerHTML = "";

    for (let added of names){
        list.innerHTML += '<li>' + added + '</li>';
    }
}

function reset() {
    names = [];
    display();
} 

function deleteLast() {
    names.pop();
    display();
}

function draw() {
    let random = Math.floor(Math.random()*names.length);

    document.getElementById('result').innerHTML = names[random];
}
