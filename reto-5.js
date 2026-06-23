console.log("%cReto 5 · La caja fuerte (scope)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Define secreto() con una variable LOCAL llamada clave, y devuélvela
function secreto() {
  let clave = "dino-123";
  return clave;
}

// Invócala y muestra el resultado (esto SÍ funciona)
let valorSecreto = secreto();
console.log("La clave secreta es: ",valorSecreto);

// Ahora intenta mostrar clave directamente afuera y ejecuta
//console.log(clave);

// ¿Qué error aparece? Explícalo en un comentario.
// Error: ReferenceError: clave is not defined
// Esto pasa porque 'clave' fue declarada con let dentro de la función secreto(),
// así que solo existe en el scope local de esa función.
// Fuera de la función esa variable no está definida.

console.log("")