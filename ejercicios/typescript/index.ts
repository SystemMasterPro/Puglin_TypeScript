// Boolean
let muted: boolean = true;
muted = false;
// Numeros
let numerador = 42;
let denominador = 6;
let resultado = numerador / denominador;
// String 
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;
// console.log(saludo);
// Arreglos
let people: string[] = [];
people = ["Isabel", "Raul"];
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push(900);
peopleAndNumbers.push("Richard");
// console.log(peopleAndNumbers);
// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Amarillo',
}
let colorFavorito: Color = Color.Verde
// console.log(colorFavorito);
// Any
let comodin: any = "Joker";
comodin = { type: "Wilcard" }
// Object
let someObject: object = {
    type: "Object"
}
// Funciones
// ***************************************
function add(a: number, b: number): number {
    return a + b;
}
// console.log(add(25, 5));
// ***************************************
function createAdder(a: number) : (number) => number {
    return function (b: number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlus = addFour(6);
// console.log(fourPlus);
// ***************************************
function fullName(firstName: string, lastName: string = "Jimenez"): string {
    return `${firstName} ${lastName}`;
}
const richard = fullName("Richard");
// console.log(richard);
// Interfaces
// ***************************************
interface Rectangulo {
    ancho: number;
    alto: number;
    color : Color
}
let rect: Rectangulo = {
    ancho: 4,
    alto: 10,
    color: Color.Verde
}
function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}
const areaRect = area(rect)
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}
console.log(rect.toString());

