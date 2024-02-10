const nombre = prompt('Ingrese su primer Nombre');
const nombre2 = prompt('Ingrese su segundo Nombre');
const apellido = prompt('Ingrese su primer Apellido');
const apellido2 = prompt('Ingrese su Segundo Apellido');

let nombreCompleto = nombre +' '+ nombre2 +' '+ apellido +" "+ apellido2;
console.log(nombreCompleto);
console.log(`Su nombre es ${nombre} ${nombre2} ${apellido} ${apellido2}`);