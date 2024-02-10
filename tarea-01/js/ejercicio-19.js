const precio = parseInt(prompt('Ingrese el precio de su articulo'));
const impuesto = parseInt(prompt('Ingrese el impuesto del articulo'));

let subTotal;
let total;
subTotal = (precio * impuesto) / 100;
total = precio + subTotal;
console.log(subTotal);
console.log(`El total a pagar por su articulo es ${total}`);