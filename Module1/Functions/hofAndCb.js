//High order Function 
//Those function which accept function as a parameter

//Callback Function
//Those function which are passed as a argument in HOF


function getFirstName(fullName){
    //Steve Rogers
    //Split Function
    fullName = fullName.split(" "); //Split whenever there is split in fullname
    return fullName[0];
    //["Steve", "Rogers"]; this will happen after split
}
function getLastName(fullName){
    fullName = fullName.split(" "); //Split whenever there is split in fullname
    return fullName[1];
}

function callMe(fullName, fun){
    let name = fun(fullName);
    console.log(name);
}

callMe("Steve Rogers", getFirstName);
callMe("Tony Stark", getLastName);