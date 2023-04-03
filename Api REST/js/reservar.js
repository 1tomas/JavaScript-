"use strict"

const url = 'https://62c47b6cabea8c085a76d1f2.mockapi.io/reserva';
let id = 0;
const tabla = document.querySelector("#ver");
let page = 1;
let limit = 5;

async function mostrarTabla(){
    try{
        let res = await fetch (`${url}?page=${page}&limit=${limit}`);
        let i = await res.json();

        
        tabla.innerHTML = "";
        for (let cliente  of i) {
            let datos = cliente.datos;        
            let mail = cliente.mail;
            let disco = cliente.disco;
            id = cliente.id;

                tabla.innerHTML += `
                                    <tr>
                                        <td>${datos} </td>
                                        <td>${mail}</td>
                                        <td>${disco}</td>
                                        <td><button data-eliminar=${cliente.id} class="btn-eliminar"><i class="fas fa-trash-alt"></button></td>
                                        <td><button data-editar=${cliente.id} class="btn-editar"><i class="fas fa-edit"></i></button></td>
                                    </tr>`;
                
                                    document.querySelectorAll(".btn-eliminar").forEach((button) => {
                                        button.addEventListener("click", eliminarFila)
                                    });
                                    document.querySelectorAll(".btn-editar").forEach((button) => {
                                        button.addEventListener("click", editarFila)
                                    });
        
    }
            
    }
        catch(error){
            console.log(error);
        }   
}
mostrarTabla();


document.querySelector("#formulario-valores").addEventListener("submit", agregarCliente);
    
async function agregarCliente(e){
    e.preventDefault();
    let datos = document.getElementById('datos').value;
    let mail = document.getElementById('mail').value;
    let disco = document.getElementById('disco').value;

    let reserva = {
        "datos" : datos,
        "mail": mail,
        "disco":disco,
    }
 
    try{
        let res = await fetch (`${url}?page=${page}&limit=${limit}`, {
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(reserva)
        });
        
        if (res.status === 201){
            document.querySelector("#mensaje").innerHTML = "Se ha creado un nuevo cliente";
        }
          
    }catch(error){
        console.log(error);
    } 
    mostrarTabla();
}


async function eliminarFila(){  

    
    try{
        let res = await fetch (`${url}/${id}`,{
            "method": "DELETE",
            "mode": 'cors',
        });
        if (res.status === 200){
            document.querySelector("#mensaje").innerHTML = "Se ha eliminado con exito";
        }
    }
    catch(error){
        console.log(error);
    }   
    mostrarTabla();
}


async function editarFila(e){
    e.preventDefault();
    let datos = document.getElementById('datos').value;
    let mail = document.getElementById('mail').value;
    let disco = document.getElementById('disco').value;
    let reserva = {
        "datos" : datos,
        "mail": mail,
        "disco":disco,
    }
    try{
        let res = await fetch (`${url}/${id}`, {
            "method": "PUT",
            "headers": {"content-type": "application/json"},
            "mode": 'cors',
            "body": JSON.stringify(reserva)
        });
        if (res.status === 200){
            document.querySelector("#mensaje").innerHTML = "Se ha modificado con exito";
        }
          
    }
    catch(error){
        console.log(error);
    }   
     mostrarTabla();
}

document.querySelector("#btn-filtro").addEventListener("click", filtrarBusqueda);
async function filtrarBusqueda(){

    let filtro = document.querySelector("#buscador").value;
    let filtroOpciones =  document.querySelector("#opciones").value;    

    if(filtro != ""){

        let res = await fetch (`${url}?${filtroOpciones}=${filtro}`);
        let i = await res.json();
        mostrarFiltro(i);
    }
}

function mostrarFiltro(i){
    tabla.innerHTML = "";
    for (let cliente  of i) {
        let datos = cliente.datos;        
        let mail = cliente.mail;
        let disco = cliente.disco;
        id = cliente.id;
        
        tabla.innerHTML += `
                                <tr>
                                    <td>${datos} </td>
                                    <td>${mail}</td>
                                    <td>${disco}</td>
                                    <td><button data-eliminar=${cliente.id} class="btn-eliminar"><i class="fas fa-trash-alt"></button></td>
                                    <td><button data-editar=${cliente.id} class="btn-editar"><i class="fas fa-edit"></i></button></td>
                                </tr>`;

                                document.querySelectorAll(".btn-eliminar").forEach((button) => {
                                    button.addEventListener("click", eliminarFila)
                                });
                                document.querySelectorAll(".btn-editar").forEach((button) => {
                                    button.addEventListener("click", editarFila)
                                });
    }
}

document.querySelector("#next").addEventListener("click",function(e){
    page++
    if(page>1){
        mostrarTabla()
    }
})
document.querySelector("#previous").addEventListener("click",function(e){
    page--
    if(page==1){
        mostrarTabla()
    }
})

document.querySelector("#tres").addEventListener("click", mostrarTres);
async function mostrarTres(){
    let datos = document.getElementById('datos').value;
    let mail = document.getElementById('mail').value;
    let disco = document.getElementById('disco').value;
    let precarga = [
        {
            "datos" : datos,
            "mail": mail,
            "disco":disco,
        },
        {
            "datos" : datos,
            "mail": mail,
            "disco":disco,
        },
        {
            "datos" : datos,
            "mail": mail,
            "disco":disco,
        }
    ];

    try{
        for(let indice = 0; indice < precarga.length; indice++){
            await fetch (`${url}`,{
                "method": "POST",
                "headers": {"content-type": "application/json"},
                "body": JSON.stringify(precarga[indice]),
            });
            
        }
    }catch(error){
        console.log(error);
    }
    mostrarTabla();
}