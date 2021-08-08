let AllAlignOptions = document.querySelectorAll(".align span");
let AllStyleOptions = document.querySelectorAll(".text-style span");

let leftAlign = AllAlignOptions[0];
let centerAlign = AllAlignOptions[1];
let rightAlign = AllAlignOptions[2];

leftAlign.addEventListener("click", function(){
    if(lastCell){
        lastCell.style.textAlign = "left";
        let address = lastCell.getAttribute("data-address");
        dataObj[address].align = "left";
    }
});

centerAlign.addEventListener("click", function(){
    if(lastCell){
        lastCell.style.textAlign = "center";
        let address = lastCell.getAttribute("data-address");
        dataObj[address].align = "center";
    }
});

rightAlign.addEventListener("click", function(){
    if(lastCell){
        lastCell.style.textAlign = "right";
        let address = lastCell.getAttribute("data-address");
        dataObj[address].align = "right";
    }
})

let boldText = AllStyleOptions[0];
let italicsText = AllStyleOptions[1];
let ulineText = AllStyleOptions[2];

boldText.addEventListener("click", function(){
    if(lastCell){
        lastCell.style.fontWeight = "bold";
    }
});

italicsText.addEventListener("click", function(){
    if(lastCell){
        lastCell.style.fontStyle = "italic";
    }
});

ulineText.addEventListener("click", function(){
    if(lastCell){
        lastCell.style.textDecoration = "underline";
    }
})