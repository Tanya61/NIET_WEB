const fs = require("fs");

let f1sPromise = fs.promises.readFile("./f1.txt");

f1sPromise.then(function(data){
    console.log(data+"");
    let f2sPromise = fs.promises.readFile("./f2.txt");

    f2sPromise.then(function(data){
        console.log(data+"");
        let f3sPromise = fs.promises.readFile("./f3.txt");

        f3sPromise.then(function(data){
            console.log(data+"");
        });
    });
});

//promise hell