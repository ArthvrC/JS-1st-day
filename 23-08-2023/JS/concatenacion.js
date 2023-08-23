//En JavaScript, la concatenación se realiza utilizando el operador de suma (+) para concatenar dos cadenas.ejemplos:


var cadena1 = "Hola";
var cadena2 = "mundo";
var resultado = cadena1 + " " + cadena2;
console.log(resultado); // Imprime: "Hola mundo"

//En el ejemplo anterior, las variables `cadena1` y `cadena2` se concatenan utilizando el operador de suma (+) y se agrega un espacio en blanco entre ellas para obtener la cadena resultante "Hola mundo"

//mas ejemplos de CC
///forzar strings

let numero1= 5;
let numero2 = 8;

let string = "" + numero1 + numero2; //la parte del codigo de "" + .... hace que podamos juntar los 2 numeros 

//otra forma de forzar string
let num1 = "3";
let num2 = "4"; //hacemos una vareable de texto y colocamos en su interior la info
let res = num1 + num2;

//uso del concat()
//con el concat si o si debemos tener un string ya que esto es un metodo de cadena
let dig1 = "4";
let dig2 = 6;

let con = dig1.concat(dig2);