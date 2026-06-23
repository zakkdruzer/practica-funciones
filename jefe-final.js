console.log("%cJefe Final · Boleta de la cafetería", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) subtotal(precio, cantidad = 1)
function subtotal(precio, cantidad = 1) {
  return precio * cantidad;
}

// Prueba rápida
// console.log(subtotal(2500, 2)); // 5000
// console.log(subtotal(2500));    // 2500 (usa cantidad = 1)

// 2) aplicarIva(monto)
function aplicarIva(monto) {
  return monto * 1.19;
}

// Prueba rápida
// console.log(aplicarIva(5000)); // 5950

// 3) aplicarDescuento(monto, porcentaje = 0)
function aplicarDescuento(monto, porcentaje = 0) {
  return monto - monto * (porcentaje / 100);
}

// Prueba rápida
// console.log(aplicarDescuento(2142, 10)); // 1927.8
// console.log(aplicarDescuento(2142));     // 2142 (sin descuento)

// 4) generarBoleta(producto, precio, cantidad, descuento)
//    -> debe USAR las tres funciones de arriba
function generarBoleta(producto, precio, cantidad, descuento = 0) {
  // Paso 1: subtotal
  const base = subtotal(precio, cantidad);

  // Paso 2: aplicar IVA
  const conIva = aplicarIva(base);

  // Paso 3: aplicar descuento
  const total = aplicarDescuento(conIva, descuento);

  // Opcional: formato con separador de miles chileno
  const totalFormateado = "$" + total.toLocaleString("es-CL"); // [web:131][web:136]

  // Texto final (tú puedes ajustar el formato)
  if (descuento > 0) {
    return `${producto} x${cantidad} (${descuento}% dcto) = ${totalFormateado}`;
  }

  return `${producto} x${cantidad} = ${totalFormateado}`;
}

// Prueba con dos compras distintas (una con descuento)
console.log(generarBoleta("Café", 2500, 2));
console.log(generarBoleta("Té", 1800, 1, 10));

console.log("")