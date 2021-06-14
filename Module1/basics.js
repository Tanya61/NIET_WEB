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
console.log(a);
//const block scoped and constant

const pi = 3.14;
console.log(pi);

//pi=200; //Type error Assignment to a const vriable

let b = "lkasjdlsndf";
let c = "dfjsfjfyriuow";
let d = true;
let e = 3.4536;
let f = undefined;
//Non primtive => Objects arrays

//Arrys => dynamic
let movies = ["Winter Soldier", "Caption America",123,""];
//push, pop, unshift, shift, splice

//console.log(movies[2]);
movies.pop();
movies.push("ENDGAME");
movies.unshift("The First Avenger");//append at the start of the array
//console.log(movies);

movies.splice(2,1);

movies[100] = "find me";
console.log(movies);

// let moveis = [] // new Array();

// Object => key values ka pair
// let avenger = {};  // new Object();

// keys are always unique
// Values may be duplicate
let avenger = {
    "full name" : "Steve Rogers",
    place : "Queens",
    skills: [
        "Martial Arts",
        "Taekwondo",
        {
            BestFriend: [
                { name : "Bucky", skills:[]},
                { name : "Natasha", skills:["Fighting","asdas","sajsdlk"]},
            ],
        },
    ],
    movies: ["The First Avenger","Winter Soldiers"],
    age:200,
    
};

console.log(avenger.skills[2]["BestFriend"][1].skills[0].substring(4));

// dot notation => literal check
// console.log(avenger.place);
// console.log(avenger.movies);
// avenger["skills"];

// bracket notation
// let key = "age";

// console.log( avenger[key]  );