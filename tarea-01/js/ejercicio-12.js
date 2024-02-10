const numero1 = parseInt(prompt('Ingrese un valor'));
const numero2 = parseInt(prompt('Ingrese un valor'));
const operador = prompt('Ingrese la acción a realizar (+, -, /, *)');

function calculadora(numero, numeroo, operador) {
    switch (operador) {
        case '-':
            return numero - numeroo;
        case '+':
            return numero + numeroo;
        case '*':
            return numero * numeroo;
        case '/':
            if (numeroo === 0) {
                return "Error: No se puede dividir";
            }
            return numero / numeroo;
        default:
            return "Operación no válida";
    }
}

const resultado = calculadora(numero1, numero2, operador);

console.log(`El resultado es ${resultado}`);