const fs = require("fs");

let f1sPromise = fs.promises.readFile("./f1.txt");
let f2sPromise = fs.promises.readFile("./f2.txt");
let f3sPromise = fs.promises.readFile("./f3.txt");

f1sPromise.then(function(data){
    console.log(data+"");
});

f1sPromise.catch(function(err){
    console.log(err);
});

f2sPromise.then(function(data){
    console.log(data+"");
});

f2sPromise.catch(function(err){
    console.log(err);
});

f3sPromise.then(function(data){
    console.log(data+"");
});

f3sPromise.catch(function(err){
    console.log(err);
});