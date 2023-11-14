"use strict";

const url = 'https://62c47b6cabea8c085a76d1f2.mockapi.io/reserva';
let id = 0;
const table = document.querySelector("#see");
let page = 1;
let limit = 5;

async function viewTable() {
    try {
        let answers = await fetch(`${url}?page=${page}&limit=${limit}`);
        let dat = await answers.json();

        table.innerHTML = "";
        for (let client of dat) {
            let clientData = client.data;
            let clientMail = client.email;
            let clientAlbum = client.album;
            id = client.id;

            table.innerHTML += `
                <tr>
                    <td>${clientData}</td>
                    <td>${clientMail}</td>
                    <td>${clientAlbum}</td>
                    <td><button data-delete=${client.id} class="btn-delete"><i class="fas fa-trash-alt"></i></button></td>
                    <td><button data-edit=${client.id} class="btn-edit"><i class="fas fa-edit"></i></button></td>
                </tr>`;

            document.querySelectorAll(".btn-delete").forEach((boton) => {
                boton.addEventListener("click", deleteRow);
            });
            document.querySelectorAll(".btn-edit").forEach((boton) => {
                boton.addEventListener("click", editRow);
            });
        }

    } catch (error) {
        console.log(error);
    }
}
viewTable();

document.querySelector("#form-values").addEventListener("submit", insertClient);

async function insertClient(e) {
    e.preventDefault();
    let clientData = document.getElementById('data').value;
    let clientMail = document.getElementById('email').value;
    let clientAlbum = document.getElementById('album').value;

    let reserve = {
        "data": clientData,
        "email": clientMail,
        "album": clientAlbum,
    };

    try {
        let answers = await fetch(`${url}?page=${page}&limit=${limit}`, {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(reserve),
        });

        if (answers.status === 201) {
            document.querySelector("#message").innerHTML = "Se ha creado un nuevo cliente";
        }

    } catch (error) {
        console.log(error);
    }
    viewTable();
}

async function deleteRow() {
    try {
        let answers = await fetch(`${url}/${id}`, {
            "method": "DELETE",
            "mode": 'cors',
        });
        if (answers.status === 200) {
            document.querySelector("#message").innerHTML = "Se ha eliminado con éxito";
        }
    } catch (error) {
        console.log(error);
    }
    viewTable();
}

async function editRow(e) {
    e.preventDefault();
    let clientData = document.getElementById('data').value;
    let clientMail = document.getElementById('email').value;
    let clientAlbum = document.getElementById('album').value;
    let reserve = {
        "data": clientData,
        "email": clientMail,
        "album": clientAlbum,
    };

    try {
        let answers = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": { "content-type": "application/json" },
            "mode": 'cors',
            "body": JSON.stringify(reserve),
        });
        if (answers.status === 200) {
            document.querySelector("#message").innerHTML = "Se ha modificado con éxito";
        }

    } catch (error) {
        console.log(error);
    }
    viewTable();
}

document.querySelector("#btn-filter").addEventListener("click", search);

async function search() {
    let filter = document.querySelector("#searcher").value;
    let filterOptions = document.querySelector("#options").value;

    if (filter !== "") {
        let answers = await fetch(`${url}?${filterOptions}=${filter}`);
        let data = await answers.json();
        seeFilter(data);
    }
}

function seeFilter(data) {
    table.innerHTML = "";
    for (let client of data) {
        let clientData = client.data;
        let clientMail = client.email;
        let clientAlbum = client.album;
        id = client.id;

        table.innerHTML += `
            <tr>
                <td>${clientData}</td>
                <td>${clientMail}</td>
                <td>${clientAlbum}</td>
                <td><button data-delete=${client.id} class="btn-delete"><i class="fas fa-trash-alt"></i></button></td>
                <td><button data-edit=${client.id} class="btn-edit"><i class="fas fa-edit"></i></button></td>
            </tr>`;

        document.querySelectorAll(".btn-delete").forEach((boton) => {
            boton.addEventListener("click", deleteRow);
        });
        document.querySelectorAll(".btn-edit").forEach((boton) => {
            boton.addEventListener("click", editRow);
        });
}
}

document.querySelector("#next").addEventListener("click", function (e) {
    pagina++;
    if (pagina > 1) {
        viewTable();
    }
});

document.querySelector("#previous").addEventListener("click", function (e) {
    pagina--;
    if (pagina == 1) {
        viewTable();
    }
});

document.querySelector("#three").addEventListener("click", mostrarTres);

async function mostrarTres() {
    let clientData = client.data;
    let clientMail = client.email;
    let clientAlbum = client.album;
    let preload = [
        {
            "data": clientData,
            "email": clientMail,
            "album": clientAlbum,
        },
        {
            "data": clientData,
            "email": clientMail,
            "album": clientAlbum,
        },
        {
            "data": clientData,
            "email": clientMail,
            "album": clientAlbum,
        }
    ];

    try {
        for (let index = 0; index < precarga.length; index++) {
            await fetch(`${url}`, {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(preload[index]),
            });
        }
    } catch (error) {
        console.log(error);
    }
    viewTable();
}

