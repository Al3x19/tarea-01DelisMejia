const numero = parseInt(prompt('Ingrese un numero'))
function numPrimo(val) {
    if (val <= 1) {
        return false;
    }
    for (let i = 2; i <= val / 2; i++) {
        if (val%i===0) {
            return false;
        }
    }
    return true;
}
if (numPrimo(numero)) {
    
    console.log(`El numero |${numero}| es primo`);

}else{
    console.log(`El numero |${numero}| no es primo  `);
}