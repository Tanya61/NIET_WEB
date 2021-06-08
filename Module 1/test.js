//top to bottom compile
//left to right
console.log("Hello World!!!");

//JavaScript datatype
//Number , boolean , String, undefined, Object(Array,object)

//declaration and initialisation of a variable

//ES6 syntax => let and const

//block scoped

//if(true){
//    let a=10;
//}

//console.log(a); Not defined//Reference error

let a=10;//It takes undefined
//console.log(a);
a=100;
if(true){
    let a=200;
    console.log(a);
}
cosole.log(a);
//const block scoped and constant

const pi = 3.14;
console.log(pi);

pi=200; //Type error Assignment to a const vriable

//Non primtive => Objects arrays

//Arrys => dynamic
let movies = ["Winter Soldier", "Caption America",123];
console.log(movies);

