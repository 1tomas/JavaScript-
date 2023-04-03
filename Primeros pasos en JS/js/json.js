let botonAdd = document.querySelector("#btnAdd");
botonAdd.addEventListener("click", agregar);

let botonSum = document.querySelector("#btnSum");
botonSum.addEventListener("click", sumar);


//arreglo
let compras = [];

function agregar() {

  let producto = document.querySelector('#producto').value;
  let precioUnitario = parseInt(document.querySelector('#preciounit').value);
  let cant = parseInt(document.querySelector('#cant').value);

//cree un objeto con el .value de "producto", "precioUnitario", "cant" y depsues 
//multiplique el precio de cada producto x cantidad de productos
  let objeto = {
    "producto": producto,
    "preciounitario": precioUnitario,
    "cantidad": cant,
    "totalItem": precioUnitario*cant
  }


  compras.push(objeto);
  console.table(compras);
  imprimir();
  borrarInput();
}


function imprimir(){
  let listado =  document.querySelector("#lista");
  listado.innerHTML = "";
  for(let agregado of compras)
  listado.innerHTML +="<li>" + agregado.producto +  " Cantidad: " + agregado.cantidad + " Precio: " + agregado.preciounitario + "</li>" ;
}

function borrarInput(e){
  producto.value = "";
  document.querySelector('#preciounit').value = "";
  cant.value = "";
}

function sumar() {
  console.log("Funcion Sumar");
  let total = 0;
  for (let maximo = 0; maximo <  compras.length; maximo++) {
    let r = compras[maximo];
    console.log(r);
    total += r.totalItem;
    
  }
  let max = compras[0].totalItem;
  for (let r of compras) {
    if(max <  r.totalItem)
      max = r.totalItem;
  }
  document.querySelector("#total").innerHTML =
    "Total: $" + total ;
    " Maximo: $" + max;
}
