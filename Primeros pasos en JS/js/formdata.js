'use strict';

let form = document.querySelector('#form');
form.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    // Get all the form data
    let formData = new FormData(form);
    
    // Get the data entered in the form based on the name attribute of each input
    let email = formData.get('email');
    let name = formData.get('name');
    let password = formData.get('password');
    console.log(email, name, password)
    document.querySelector("#login-result").innerHTML = "Login with email: " + email + ", Name: " + name + ", Password: " + password;
}
