let codigocaptcha;
codigocaptcha= Math.floor(Math.random() * 999);

let numcaptcha= document.getElementById("numcaptcha");

numcaptcha.innerText= codigocaptcha;

let captchavalid= document.getElementById("captchavalid");

let btnsend= document.getElementById("btnsend");
btnsend.addEventListener("click", validacioncaptcha);


function validacioncaptcha(){
  if(numcaptcha.innerText == writecaptcha.value){

    let correcto = document.getElementById("captchavalid");
    correcto.innerText = "Captcha Correcto";
    document.getElementById("person").value ="";
    document.getElementById("email").value ="";
    document.getElementById("textarea").value ="";
    
  }
  else{

    let incorrecto = document.getElementById("captchavalid");
    incorrecto.innerText = "Captcha Incorrecto";

    numcaptcha.innerText= codigocaptcha;

  }
}