let fs = require("fs");
let extensions = require("./extensions");

//google find skill
//fs function which gives content of a directory
let testFolderPath = "./TestFolder";
let contents = fs.readdirSync(testFolderPath);
//console.log(contents);

for(let i=0;i<contents.length;i++){
    let file = contents[i];
    sortFile(file);
}
function sortFile(file){
    let ext = file.split(".")[1];
    //console.log(ext);
    let Foldername = getFolderName(ext);
    //console.log(ext,Foldername);
    let folderPath = testFolderPath + "/" + Foldername;
    if(!fs.existsSync(folderPath)){
        //folder doesn't exists create folder
        fs.mkdirSync(folderPath);
    }
    //move file
    //copy file
    let sourcefilepath  = testFolderPath+"/"+file;
    let destfilepath = folderPath + "/"+ file;
    fs.copyFileSync(sourcefilepath, destfilepath);
    //delete file
    fs.unlinkSync(sourcefilepath);

}

function getFolderName(ext){
    let folderName;
    for(let key in extensions){
        if(extensions[key].includes(ext)){
            folderName = key;
            return folderName;
        }
    }
}