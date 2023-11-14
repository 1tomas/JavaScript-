let addButton = document.querySelector("#btnAdd");
addButton.addEventListener("click", add);

let sumButton = document.querySelector("#btnSum");
sumButton.addEventListener("click", sum);

// Array
let purchases = [];

function add() {
  let product = document.querySelector('#producto').value;
  let unitPrice = parseInt(document.querySelector('#preciounit').value);
  let quantity = parseInt(document.querySelector('#cant').value);

  // Created an object with the .value of "product", "unitPrice", "quantity", and then
  // multiplied the price of each product by the quantity of products
  let object = {
    "product": product,
    "unitPrice": unitPrice,
    "quantity": quantity,
    "totalItem": unitPrice * quantity
  }

  purchases.push(object);
  console.table(purchases);
  display();
  clearInput();
}

function display() {
  let list = document.querySelector("#lista");
  list.innerHTML = "";
  for (let added of purchases)
    list.innerHTML += "<li>" + added.product + " Quantity: " + added.quantity + " Price: " + added.unitPrice + "</li>";
}

function clearInput() {
  document.querySelector('#producto').value = "";
  document.querySelector('#preciounit').value = "";
  document.querySelector('#cant').value = "";
}

function sum() {
  console.log("Sum Function");
  let total = 0;
  for (let maximum = 0; maximum < purchases.length; maximum++) {
    let r = purchases[maximum];
    console.log(r);
    total += r.totalItem;
  }
  let max = purchases[0].totalItem;
  for (let r of purchases) {
    if (max < r.totalItem)
      max = r.totalItem;
  }
  document.querySelector("#total").innerHTML = "Total: $" + total + " Maximum: $" + max;
}
