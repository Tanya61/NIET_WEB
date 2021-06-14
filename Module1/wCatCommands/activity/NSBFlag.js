function applySflag(data){
    let dataComp = data.split("\r\n");
    console.log(dataComp);
    let sFlagData = [];
    let nonEmptyFound = false;
    for(let i=0;i<dataComp.length;i++){
        if(dataComp[i]!=''){
            sFlagData.push(dataComp[i]);
            nonEmptyFound=true;
        }
        else if(dataComp[i]=='' && dataComp[i-1]!='' && nonEmptyFound){
            sFlagData.push(dataComp[i]);
        }
    }
    let sFlagString = sFlagData.join("\r\n");
    return sFlagString;
}

function applyNflag(data){
    let dataComps = data.split("\r\n");
    let count =1;
    for(let i=0;i<dataComps.length;i++){
        //1. Hey, I am f1
        dataComps[i] = `${count}.${dataComps[i]}`; //string interpolation
        count++;
    }
    //console.log(dataComps);
    let nFlagString = dataComps.join("\r\n");
    return nFlagString;
}

function applyBflag(data){
    let dataComps = data.split("\r\n");
    let count =1;
    for(let i=0;i<dataComps.length;i++){
        //1. Hey, I am f1
        if(dataComps[i]!=''){
            dataComps[i] = `${count}.${dataComps[i]}`; //string interpolation
            count++;
        }
        
    }
    //console.log(dataComps);
    let bFlagString = dataComps.join("\r\n");
    return bFlagString;
}
module.exports.applySflag = applySflag;
module.exports.applyNflag = applyNflag;
module.exports.applyBflag = applyBflag