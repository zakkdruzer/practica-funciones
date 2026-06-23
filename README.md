# Práctica: Funciones en JavaScript

Colección de retos para practicar funciones en JavaScript: parámetros, valores por defecto, `return`, scope y colaboración entre funciones.

## Estructura del proyecto

- `index.html`  
- `reto-1.js` – Función `presentar`
- `reto-2.js` – Función `multiplicar`
- `reto-3.js` – Función con valor por defecto (`calcularEnvio`)
- `reto-4.js` – Clasificación de notas (`clasificarNota`)
- `reto-5.js` – Scope de variables locales (`secreto`)
- `reto-6.js` – Funciones que colaboran (`esMayorDeEdad` y `mensajeAcceso`)
- `reto-7.js` – Función anidada (`crearTarjeta` y `formatear`)
- `jefe-final.js` – Boleta de la cafetería (funciones que se componen entre sí)

## Retos

### Reto 1 – Tu primera función
Primera función sencilla que recibe un nombre y devuelve una presentación en texto.  
Objetivo: entender la diferencia entre **devolver** un valor con `return` y **mostrarlo** con `console.log`.

### Reto 2 – Calculadora reutilizable
Función que multiplica dos números y guarda el resultado en una variable para reutilizarlo sin volver a llamar a la función.  
Objetivo: almacenar el valor devuelto por una función y usarlo en más de un cálculo.

### Reto 3 – Envío con costo por defecto
Función que calcula el costo de un envío usando un **parámetro con valor por defecto** para el costo por kilómetro (`calcularEnvio(distancia, costoPorKm = 500)`).  
Objetivo: practicar parámetros opcionales y cómo cambian el comportamiento de la función.

### Reto 4 – Semáforo de notas
Función que clasifica una nota como `"Aprobado"` o `"Reprobado"` usando condicionales y **return temprano** (sin `else`).  
Objetivo: usar operadores de comparación (`>=`) y manejar casos límite como la nota 4.0.

### Reto 5 – La caja fuerte (scope)
Función que declara una variable local y la devuelve. Luego se intenta acceder a esa variable fuera de la función para provocar un `ReferenceError`.  
Objetivo: entender el **alcance (scope)** de las variables declaradas dentro de una función.

### Reto 6 – El portero del evento
Dos funciones: una decide si alguien es mayor de edad y otra muestra un mensaje de acceso usando la primera.  
Objetivo: **no repetir lógica** y reutilizar funciones dentro de otras funciones.

### Reto 7 – La fábrica de credenciales
Función que contiene otra función interna que formatea una credencial usando el nombre y el cargo.  
Objetivo: practicar **funciones anidadas** y ver que las funciones internas solo existen dentro de la función externa.

### Jefe Final – Boleta de la cafetería
Conjunto de funciones pequeñas que se combinan para calcular el total de una compra:

- `subtotal(precio, cantidad = 1)`
- `aplicarIva(monto)`
- `aplicarDescuento(monto, porcentaje = 0)`
- `generarBoleta(producto, precio, cantidad, descuento)`

Objetivo: practicar **composición de funciones**, valores por defecto, `return` en todas las funciones y evitar repetir cálculos.

## Cómo ejecutar los retos

1. Abre `index.html` en tu navegador.
2. Asegúrate de que cada archivo `reto-x.js` se cargue desde `index.html`.
3. Abre la consola del navegador (F12 → pestaña “Console”) para ver la salida de cada reto.
4. Activa o comenta los `console.log` según el reto que quieras probar.

## Puedes ver el resultado en:

https://zakkdruzer.github.io/practica-funciones/
