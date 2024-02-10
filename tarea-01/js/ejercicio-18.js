const tanque1 = parseInt(prompt('Ingrese la cantidad de litros de agua'));
const tanque2 = parseInt(prompt('Ingrese la cantidad de yardas cubicas de agua'));

function metrosCub(litro) {
    return litro / 1000;
}

function yardasMetros(yardas) {
    return (yardas * 0.7646);
}

function sumarMetros(total) {
    return (metrosC + metrosC1)
}

function porcienT(setenta) {
    return setenta * 0.75;
}
function porcienTos(veiticin) {
    return veiticin * 0.25;
}

function piesC(pie) {
    return pie * 35.315;
}
const metrosC = metrosCub(tanque1);
const metrosC1 = yardasMetros(tanque2);
const sumaMe = sumarMetros();
const porciento = porcienT(sumaMe);
const residuo = porcienTos(sumaMe);
const pieC = piesC(porciento);
const pieCu = piesC(residuo);

console.log(`Cantidad de agua del tanque 1 en metros cubicos: ${metrosC}`);
console.log(`Cantidad de agua del tanque 2 en metros cubicos: ${metrosC1.toFixed(3)}`);
console.log(`Cantidad de agua total es  ${sumaMe.toFixed(3)} metros cubicos`);
console.log(`El 75% de consumo de agua para el uso domestico es  ${porciento.toFixed(3)} metros cubicos`);
console.log(`El 25% de consumo de agua para riego es  ${residuo.toFixed(3)} metros cubicos`);
console.log(`El 75% de consumo de agua para el uso domestico es  ${pieC.toFixed(3)} pies cubicos`);
console.log(`El 25% de consumo de agua para riego es  ${pieCu.toFixed(3)} pies cubicos`);