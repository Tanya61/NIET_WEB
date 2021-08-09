let a = [1,2,3];
let b = [4,5];

let c = [...a, ...b];
let d = [...a, ...a, ...a];

console.log(a);
console.log(b);
console.log(c);
//console.log(d);

//Ques 1
let arr = [1,2,4,5];
let a1 = arr.slice(0,2);
let a2 = arr.slice(2,4);

let ans = [...a1, 3, ...a2];
console.log(ans);

//Ques 2
let o1 = {a:1, b:2};
let o2 = {c:3};
let o3 = {...o1, ...o2, ...o1, ...o2};//ans will not repeat as key-value pairs are always unique in object
console.log(o3);