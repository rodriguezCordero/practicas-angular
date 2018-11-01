/*function saludar(nombre:string){
    console.log("Hola "+ nombre);
}

var wolverine = {nombre: "Logan"};

saludar(wolverine.nombre);*/
/*let mensaje = "hola";

    if(true){
        let mensaje = "adios";
    }
    
    console.log(mensaje);*/
/*const OPCIONES = "todas";

    if(true){
        const OPCIONES = "ninguna";
    }
*/
/*
let nombre:string;
nombre = "Alberto";

let numero:number;
numero = 123;

let booleano:boolean;
booleano = false;

let hoy:Date;
hoy = new Date();

hoy = new Date('2020-10-21');


let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
    nombre: "Jose",
    apellido: "Rodriguez"
};

spiderman = {
    nombre: "Alberto",
    apellido: "Cordero",
};*/
/*
let nombre:string = "Alberto";
let apellido:string = "Rodriguez";
let edad:number = 31;

let texto:string = `Hola,
${nombre}
${apellido};
tienes ${edad} años de edad`;

function getNombre(){
    return "Jose Alberto";
}

let texto2:string = ` ${getNombre()}`;

console.log(texto2);
*/
/*
 //Funciones, con parametros por default y opcionales

function activar( quien:string,
                  objecto:string= "señal",
                  momento?:string){
                  
    let mensaje:string;
                  
    if(momento){
        mensaje = ` ${quien} activó la ${objecto} en la ${momento}`;
    }else{
        mensaje = ` ${quien} activó la ${objecto}`;
    }
                  
    
    console.log(mensaje);
}

activar("Alberto","señal","tarde");
*/
//Funciones de flechas
var miFincion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFincion("normal"));
console.log(miFuncionF("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion2(3, 5));
console.log(miFuncion2F(5, 7));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("Alberto"));
console.log(miFuncion3F("jose"));
