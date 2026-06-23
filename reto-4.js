console.log("%cReto 2 · Reto 3 · El despacho a domicilio", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Define clasificarNota(nota)
function clasificarNota(nota) {
  if (nota >= 4.0) {
    return "Aprobado";
  }

  return "Reprobado";
}

// Pruébala con 5.5, 3.9 y 4.0
console.log("5.5 ->", clasificarNota(5.5));
console.log("3.9 ->", clasificarNota(3.9));
console.log("4.0 ->", clasificarNota(4.0));

console.log("")