let codigocaptcha;
codigocaptcha= Math.floor(Math.random() * 999);

let numcaptcha= document.getElementById("numcaptcha");

numcaptcha.innerText= codigocaptcha;

let captchavalid= document.getElementById("captchavalid");

let btnsend= document.getElementById("btnsend");
btnsend.addEventListener("click", validacioncaptcha);


function validacioncaptcha(){
  if(numcaptcha.innerText == escribircaptcha.value){

    let correcto = document.getElementById("captchavalid");
    correcto.innerText = "Captcha Correcto";
    document.getElementById("persona").value ="";
    document.getElementById("email").value ="";
    document.getElementById("textarea").value ="";
    
  }
  else{

    let incorrecto = document.getElementById("captchavalid");
    incorrecto.innerText = "Captcha Incorrecto";

    numcaptcha.innerText= codigocaptcha;

  }
}