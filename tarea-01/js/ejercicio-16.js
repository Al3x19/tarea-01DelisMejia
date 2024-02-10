const atleta = parseInt(prompt('Ingrese el tiempo del atleta numero 1 en minutos'));
const atleta2 = parseInt(prompt('Ingrese el tiempo que se tardo el segundo atleta en minutos'));


let horas, horas1, segundos, segundos1;

horas = (atleta / 60);
horas1 = (atleta2 / 60);

segundos = (horas * 3600);
segundos1 = (horas1 * 3600);

console.log(`El tiempo que se tardo el primer participante  en HORAS equivale a: ${horas.toFixed(2)} | Horas `);
console.log(`El tiempo que se tardo el primer participante  en MINUTOS equivale a: ${atleta.toFixed(2)} | Minutos `);
console.log(`El tiempo que se tardo el primer participante  en SEGUNDOS equivale a: ${segundos.toFixed(2)} | Segundos `);

console.log('----------------------------------------------------------------');

console.log(`El tiempo que se tardo el segundo  participante  en HORAS equivale a: ${horas1.toFixed(2)} | Horas `);
console.log(`El tiempo que se tardo el SEGUNDO participante  en MINUTOS equivale a: ${atleta2.toFixed(2)} | Minutos `);
console.log(`El tiempo que se tardo el primer participante  en SEGUNDOS equivale a: ${segundos1.toFixed(2)} | Segundos`);
