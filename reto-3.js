console.log("%cReto 3 · El despacho a domicilio", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Define calcularEnvio(distancia, costoPorKm) con costoPorKm = 500 por defecto
function calcularEnvio(distancia, costoPorKm = 500) {
  return distancia * costoPorKm;
}

// Prueba 1: 10 km SIN pasar el costo (usa 500)
let envioDefecto = calcularEnvio(10);
console.log("Envío (costo por defecto):", envioDefecto);

// Prueba 2: 10 km pasando 800
let envio800 = calcularEnvio(10, 800);
console.log("Envío (costo 800):", envio800);

console.log("")