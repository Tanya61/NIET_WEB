let fs = require("fs");
//object destructing
let { applySflag, applyBflag, applyNflag} = require("./NSBFlag");
let input = process.argv.slice(2);

let files =[];
let flags = [];

for(let i=0;i<input.length;i++){
    if(input[i].startsWith("-")){
        if(!flags.includes(input[i])) flags.push(input[i]);
    }
    else{
        if(!files.includes(input[i])) files.push(input[i]);
    }
}

//console.log(files)
//console.log(flags)

let data = "";
for(let i=0;i<files.length;i++){
    let fileData = fs.readFileSync(files[i]);
    data+=i==files.length-1?fileData:fileData+"\r\n";

}

if(flags.includes("-s")){
    //data s flagged
    data = applySflag(data);
}

if(flags.includes("-n")&&flags.includes("-b")){
    if(flags.indexOf("-n")<flags.indexOf("-b")){
        data = applyNflag(data);
    }
    else{
        data = applyBflag(data);
    }
}
else if(flags.includes("-n")){
    data = applyNflag(data);
}
else if(flags.includes("-b")){
    data = applyBflag(data);
}
console.log(data);