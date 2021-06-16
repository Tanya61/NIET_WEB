let fs = require("fs");

fs.readFile("./f1.txt",function(err,data){
    console.log(data+"");
    fs.readFile("./f2.txt",function(err,data){
        console.log(data+"");
        fs.readFile("./f3.txt",function(err,data){
            console.log(data+"");
        });
    });
});

//Order of o/p can't change here
