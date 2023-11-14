"use strict";

// Event listener for the "play" button
let btn = document.querySelector('#btn-play').addEventListener("click", play);
// Alternatively, you can use: btn.addEventListener("click", play);

// Declaring an array with five elements
let options = ["rock", "paper", "scissors", "lizard", "spock"];

function play() {
    // Created a function named play that is triggered with a click
    // Instructed it that when executed, it should generate a number from 0 to 4
    let random = Math.floor(Math.random() * options.length);
    // Created a variable that accesses my array through the result of another variable
    let choice = options[random];
    // Once all of that is done, instructed it to display the variable CHOICE
    // which as a result has one of the OPTIONS
    document.querySelector('.result').innerHTML = choice;
}

    