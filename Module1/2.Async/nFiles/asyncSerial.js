let fs = require("fs");
let files = ["../f1.txt", "../f2.txt", "../f3.txt"];
function asyncserial(files,i){
    if(i>=files.length){
        return;
    }
    fs.readFile(files[i],function(error,data){
        console.log(data+"");
        asyncserial(files,i+1);
    });
    
}
asyncserial(files,0);