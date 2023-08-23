//1. **var:** Declara una variable.
var age = 25;

//2. **let:** Declara una variable de bloque.
if (true) {
  let x = 10;
}

//3. **const:** Declara una constante de bloque.
const PI = 3.14159;

//4. **if:** Marca un bloque de declaraciones para ser ejecutado bajo una condición.
let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot.");
}

//5. **switch:** Marca un bloque de declaraciones para ser ejecutado en diferentes casos.
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Wednesday":
    console.log("It's midweek.");
    break;
  default:
    console.log("It's another day.");
}

//6. **for:** Marca un bloque de declaraciones para ser ejecutado en un bucle.
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

//7. **function:** Declara una función.
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");


//8. **return:** Finaliza una función y retorna un valor opcional.
function add(a, b) {
  return a + b;
}

let result = add(3, 5); // result será 8


//9. **try:** Implementa manejo de errores a un bloque de declaraciones.
try {
  let x = undefinedVariable;
} catch (error) {
  console.log("An error occurred: " + error);
}

