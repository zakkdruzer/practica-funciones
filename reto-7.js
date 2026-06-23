console.log("%cReto 6 · El portero del evento", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Define crearTarjeta(nombre, cargo) con una función interna formatear()
function crearTarjeta(nombre, cargo) {
  function formatear() {
    return nombre + " — " + cargo;
  }

  return formatear();
}

// Prueba crearTarjeta con un nombre y un cargo
console.log(crearTarjeta("Ada Lovelace", "Programadora"));

// Intenta llamar formatear() afuera: ¿qué error sale?
// console.log(formatear());