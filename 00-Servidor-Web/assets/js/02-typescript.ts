console.log("Hola Typescript");

// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
var nombres = "harryson";
nombres = "A";
nombres = 'C';
// nombres = 1;
var nombreTS = "";
console.log(typeof nombres, "nombres");
var numeros = 1;
var numerosTS = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
var booleanos = true;
var booleanosTS = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
var nulos = null;
var nulosTS = null;
console.log(typeof nulos, "nulos");
var arreglos = [];
var arreglosTS = [];
var arreglosTS2 = [];
console.log(typeof arreglos, "arreglos");
var objetos = {};
var objetosTS = {};
console.log(typeof objetos, "objetos");
var undefineds = undefined;
var undefinedsTS = undefined;
console.log(typeof undefineds, "undefineds");


// Truty y Falsy
let trutyFalsy:any;
trutyFalsy = "";
if(trutyFalsy){ // ""
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = "a";
if(trutyFalsy){ // "a"
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = -1;
if(trutyFalsy){ // -1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 0;
if(trutyFalsy){ // 0
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 1;
if(trutyFalsy){ // 1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = null;
if(trutyFalsy){ // null
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = {};
if(trutyFalsy){ // {}
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = [];
if(trutyFalsy){ // []
    console.log("Truty");
}else{
    console.log("falsy");
}

const harryson:any =  {
    "nombre" : "Harryson",
    'apellido': 'Montesdeoca',
    edad: 22,
    hijos: 0,
    casado: false,
    zapatos: undefined,
    ropa: {
        color: "gris",
        talla: 38
    },
    mascotas: ['Dante', 'Kyara', 'Dante'],
};
console.log(harryson);
// Acceder a las propiedades
harryson.nombre // "harryson"
harryson["apellido"] // "Montesdeoca"
// Modificar (reasignar)
harryson.nombre = "Ariel";
harryson["nombre"] = "Ariel";
// harryson = {}; ERROR
// Crear atributos
harryson.sueldo = 1.2;
harryson["gastos"] = 0.8;
// Eliminar propiedades
harryson.nombre = undefined;
delete harryson.nombre;

// Variables por valor o por referencia
// Variables por valor
// Primitivas: number string boolean
let edadharryson = 33;
let edadMontesdeoca = edadharryson; // CLONANDO el primitivo
console.log(edadharryson); // 33
console.log(edadMontesdeoca); // 33
edadharryson = edadharryson + 1;
console.log(edadharryson); // 34
console.log(edadMontesdeoca); // 33

// Variables por referencia
// Object: {} []
let notas = {
    total: 10,
};
let notas2doBim = notas; // REFERENCIA
notas2doBim.total = notas2doBim.total + 1;
console.log(notas); // {total: 11}
console.log(notas2doBim); // {total: 11}
// Como clonar
let notasClonadasUno = Object.assign({}, notas); // obj
let arregloACopiar = [1,2,3];
let arregloClonado = Object.assign(
    [], arregloACopiar
); // arr
notasClonadasUno.total = notasClonadasUno.total + 1;
console.log(notas); // {total: 11}
console.log(notas2doBim); // {total: 11}
console.log(notasClonadasUno); // {total: 12}

// Arreglos
const arregloEjemplo = [1,2,3,4,5];
// for of (obtenemos el VALOR)
for (let valorDelArreglo of arregloEjemplo){
    console.log('Valor:', valorDelArreglo);
}
// for in (obtenemos el INDICE)
for (let indiceDelArreglo of arregloEjemplo){
    console.log('Indice: ', indiceDelArreglo);
    console.log('Valor: ', arregloEjemplo[indiceDelArreglo]);
}
// Anadir al FINAL un elemento
arregloEjemplo.push(6); // [1,2,3,4,5,6]
// Eliminar el ultimo elemento
arregloEjemplo.pop();  // [1,2,3,4,5]
// Anadir al principio del arreglo
arregloEjemplo.unshift(0); // [0,1,2,3,4,5]
// Eliminar y agregar elementos
// splice   - indice donde empezar
//          - numero elementos a eliminar
//          - elemento a anadir
arregloEjemplo.splice(
    0, // empezamos en el indice 0
    3, // eliminamos 3 elementos
    3,4,5
);  //  [0,1,2,3,4,5] -> arreglo original
//      [0,1,2] -> eliminados
//      [3,4,5,3,4,5] Arreglo final

// Operadores trabajar con arreglos

// find
// findIndex
// foreach
// map
// filter
// some
// every
// reduce

// Funciones
function soloNumeros(a,b,c){
    return a-b+c;
}
function soloNumerosTs(
    a:number,b:number,c:number
): number {
    return a-b+c;
}
function soloImprimir(texto:string):void{
    console.log(texto);
}
function soloImprimir2(texto:string):undefined{
    console.log(texto);
}
// Funciones nombrada
function nombreDeMiFuncion(){}
// Funciones anonimas
const funcionSinNombre = function(){};
nombreDeMiFuncion();
funcionSinNombre();
[].forEach(function(){});
// Fat Arrow Function 
const funcionFatArrow = (
    a:number, b:number
):number => {
    return a+b;
};
const functionFatArrowSinParametros = ()=>{
    console.log('Sin parametros');
};
const functionFAOmitirReturn = (a,b) => a + b;
const unSoloParametroSinParentesis = a => a * a;
// Parametros infinitos
function sumarNumeros (
    ...todosNumeros:number[]
): number{
    let total = 0;
    for (let valorNumero of todosNumeros){
        total = total + valorNumero;
    }
    return total;
}
sumarNumeros(1,2,3,4,5,2,1,2,3,4,5);

// Destructuracion

// Destructuracion de objetos
const harrysonDest = {
    nombre: "harryson",
};
const BelenDest = {
    nombre: "Belen",
    apellido: "Raura",
};
// merge de las dos variables (orden importa)
const harrysonBelenDest = {
    ...harrysonDest,
    ...BelenDest,
};
// { nombre: "Belen", apellido: "Raura"}
const BelenharrysonDest = {
    ...BelenDest,
    ...harrysonDest,
};
// { nombre: "harryson", apellido: "Montesdeoca"}
const overrideDest = {
    ...BelenharrysonDest,
    ...harrysonDest,
    nombre: 'edadMontesdeoca',
};
// Destructuracion de arreglos
const arregloDestUno = [1,2,3];
const arregloDestDos = [4,5,6];
// Merge
const arregloUnoDosDest = [
    ...arregloDestUno,
    ...arregloDestDos,
]; // [1,2,3,4,5,6]
const arregloDosUnoDest = [
    ...arregloDestUno,
    ...arregloDestDos,
]; // [4,5,6,1,2,3]
// La destructuracion es una forma de clonacion
const objetoACopiar = {a:1};
const objetoCopiadoA = {...objetoACopiar};