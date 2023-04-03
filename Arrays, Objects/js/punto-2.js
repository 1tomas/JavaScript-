"use strict"

document.querySelector("#formulario").addEventListener("submit",function(e){
    e.preventDefault();
});

document.querySelector("#btn-imprimir").addEventListener("click", function(){
    let descripcion = document.querySelector("#input-descripcion").value;
    let costo = parseInt(document.querySelector("#input-costo").value);
    let mes = parseInt(document.querySelector("#input-mes").value);

    let datos = {
        "descripcion": descripcion,
        "costo": costo,
        "mes": mes,

    }
    alquiler.push(datos);
    imprimir();
    console.log(alquiler);
});

let alquiler = []


function imprimir(){

    let lista = document.querySelector(".listado");
    lista.innerHTML = ""; 
    for(let i of alquiler){
        if(i.mes > 12){
            lista.innerHTML +=`<li>Descripcion:${i.descripcion
            } Costo:${i.costo} <span class="violeta"> Mes: el limite del mes es 12 </span></li>`;
            alquiler.pop();
        }else{
            lista.innerHTML +=`<li>Descripcion:${i.descripcion
        } Costo:${i.costo} Mes:${i.mes}</li>`;
        }
  
    }
};

document.querySelector("#btn-destacar").addEventListener("click", function(){
    let aux = 0;
               
    let iAux = 0;

    for(let i = 0; i < alquiler.length;i++){

       if (alquiler[i].costo > aux){
        iAux = i;
        aux = alquiler[i].costo; 
       }
   
    }
    let destacado = document.querySelector("#destacado");
    destacado.classList.add("rojo")
    destacado.innerHTML =
                       `<li>${alquiler[iAux].descripcion}
                           ${alquiler[iAux].costo}
                            ${alquiler[iAux].mes}</li>`;

});