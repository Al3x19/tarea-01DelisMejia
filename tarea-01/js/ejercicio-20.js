const kilometros = parseInt(prompt('Ingrese los kilometros recorridos en el viaje'));
const combustible = parseInt(prompt('Ingrese el consumo de combustible'));

let consumoTotal;

consumoTotal = combustible / kilometros;

console.log(`El consumo de combustible por kilómetro es: ${consumoTotal} litros/km`);


