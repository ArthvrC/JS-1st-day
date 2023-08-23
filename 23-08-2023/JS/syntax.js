//tipos de datos basicos en javascript


// STRING
// se hace con comillas asi se define que es texto " "
let string = "soy una vareable string";
// NUMBER
// no lleva comillas simplemente se escribe el numero
let numero = 7;
// BOOLEANO
// este solo devuelve 2 valores el true o false
let boolean1 = false;
let boolean2 = true;

// multi vareables
let numero1, numero2, numero3 ;
// asi se le agrega datos a dichas vareables
numero1 = 10;
numero2 = 20;
numero3 = 30;

//HOSTING:
// El hosting, o alojamiento web, se refiere al servicio que proporciona un servidor para almacenar los archivos y datos de un sitio web y hacerlo accesible a través de Internet. Al crear un sitio web, se debe contratar un servicio de hosting que proporcione un servidor donde se puedan almacenar los archivos del sitio, como HTML, CSS, JavaScript y otros archivos multimedia

// NULL:
// el null es como decir que la vareable esta vacia no vale nada pero es intencionalmente y su valor incial es vacio

let info = null;

// NaN:
// significa not a number osea que si o si nos pide escribir numero en los ejercicios
// forma correcta de hacerlo
let suma1 = 2;
let suma2 = 2;

alert(suma1 + suma2); 

// forma incorrecta de hacerlo
let sm1 = 2;
let sm2 = "e";

alert(suma1 * suma2);

// PROMPT:
// El prompt en JavaScript es una función incorporada que muestra un cuadro de diálogo al usuario, solicitando la entrada de datos. Este cuadro de diálogo generalmente contiene un mensaje y un campo de entrada donde el usuario puede ingresar información
// ejemplo

let solicitud = prompt("Como te llamas?"); //asi hacemos la solicitud de datos y si queremos ver el dato solo mandamos a llamar la vareable en la que se almaceno en este caso es la de solicitud

alert(solicitud);
