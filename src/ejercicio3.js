// clonar un arreglo
let clonarArreglo = [1, 2, 3, 4, 5, 6];

let clonarArreglo2 = { ...clonarArreglo };
console.log(clonarArreglo2);

//clonar un odjeto

let clonarObjeto = {
  nombre: "padro",
  edad: 22,
};

let clonarObjeto2 = { ...clonarObjeto };

console.log(clonarObjeto2);

// sumar

function sumar(...numeros) {
  let total = 0;
  for (const suma of numeros) {
    total += suma;
  }
  return total;
}
console.log(sumar(1, 2, 3, 4, 5));

//saludar

function saludar(nombre) {
  console.log(`hola ${nombre}`);
}

console.log(saludar('Carlos'))

// NO MODIFICAR
// export { clonarArreglo, clonarObjeto, sumar, saludar };
