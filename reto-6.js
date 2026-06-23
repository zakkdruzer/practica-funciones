console.log("%cReto 6 · El portero del evento", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) Define esMayorDeEdad(edad) -> true / false
function esMayorDeEdad(edad) {
  return edad >= 18;
}

// 2) Define mensajeAcceso(edad) que USE esMayorDeEdad
function mensajeAcceso(edad) {
  if (esMayorDeEdad(edad)) {
    return "Acceso permitido";
  }

  return "Acceso denegado";
}

// 3) Prueba mensajeAcceso con 20 y con 15
console.log("20 ->", mensajeAcceso(20));
console.log("15 ->", mensajeAcceso(15));

console.log("")