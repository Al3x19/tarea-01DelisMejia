const piess = parseInt(prompt('Ingrese la cantiad en pies')); 

const metros = parseInt(prompt('Ingrese la cantiad en metros')); 

function convertirMetrosAPulgadas(metros) {
    return metros * 39.3701;
}

function convertirMetrosAPies(metros) {
    return metros * 3.28084;
}

function convertirMetrosAYardas(metros) {
    return metros * 1.09361;
}

function convertirMetrosAMillas(metros) {
    return metros * 0.000621371;
}

const pulgadas = convertirMetrosAPulgadas(metros);
const pies1 = convertirMetrosAPies(metros);
const yardas = convertirMetrosAYardas(metros);
const millas = convertirMetrosAMillas(metros);

function convertirPiesAPulgadas(pies) {
    return pies * 12;
}

function convertirPiesAYardas(pies) {
    return pies / 3;
}

function convertirPiesAMetros(pies) {
    return pies * 0.3048;
}

function convertirPiesAMillas(pies) {
    return pies / 5280;
}

const pulgadas1 = convertirPiesAPulgadas(piess);
const pies2 = convertirPiesAYardas(piess);
const yardas1 = convertirPiesAMetros(piess);
const millas1 = convertirPiesAMillas(piess);

console.log(metros + " metros equivale a:");
console.log(pulgadas.toFixed(2) + " pulgadas");
console.log(pies1.toFixed(2) + " pies");
console.log(yardas.toFixed(2) + " yardas");
console.log(millas.toFixed(6) + " millas");

console.log('----------------------------');

console.log(piess + " pies equivale a:");
console.log(pulgadas1.toFixed(2) + " pulgadas");
console.log(pies2.toFixed(2) + " pies");
console.log(yardas1.toFixed(2) + " yardas");
console.log(millas1.toFixed(6) + " millas");

let sumaPulg = pulgadas + pulgadas1;
let sumaPies = pies1 + pies2;
let sumaYardas = yardas + yardas1;
let sumaMillas = millas + millas1;
console.log('----------------------------');

console.log('La suma equivale');
console.log(`${sumaPulg.toFixed(2)} Pulgadas`);
console.log(`${sumaPies.toFixed(2)} Pies`);
console.log(`${sumaYardas.toFixed(2)} Yardas`);
console.log(`${sumaMillas.toFixed(2)} Millas`);
