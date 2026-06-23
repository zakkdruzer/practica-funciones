console.log("%cReto 2 · La calculadora reutilizable", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

let numero1 = 6
let numero2 = 7

// Define multiplicar(a, b)
function multiplicar(a, b) {
  return a * b;
}

// Guarda multiplicar(6, 7) en una variable y muéstrala
let resultado = multiplicar(6, 7);
console.log("Resultado:", resultado);

// Luego muestra su doble usando esa misma variable
console.log("El doble:", resultado * 2);

console.log("")