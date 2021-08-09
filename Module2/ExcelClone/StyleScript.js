let AllAlignOptions = document.querySelectorAll(".align span");
let AllStyleOptions = document.querySelectorAll(".text-style span");
let AllColorOptions = document.querySelectorAll(".color span");

let menuBarOption = document.querySelectorAll(".menu-bar div");
let fileOptions = menuBarOption[0];

let body = document.querySelector("body");

let leftAlign = AllAlignOptions[0];
let centerAlign = AllAlignOptions[1];
let rightAlign = AllAlignOptions[2];

let bgColorPicker = AllColorOptions[0];
let fontColorPicker = AllColorOptions[1];

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
});

bgColorPicker.addEventListener("click", function(){
    let colorPickerElement = document.createElement("input");
    colorPickerElement.type = "color";
    body.append(colorPickerElement);
    colorPickerElement.click();

    colorPickerElement.addEventListener("input", function(e){
        console.log(e.currentTarget.value);
        if(lastCell){
            lastCell.style.backgroundColor = e.currentTarget.value;
            let address = lastCell.getAttribute("data-address");
            dataObj[address].bgColor = e.currentTarget.value;
        }
    });
});

fontColorPicker.addEventListener("click", function(){
    let colorPickerElement = document.createElement("input");
    colorPickerElement.type = "color";
    body.append(colorPickerElement);
    colorPickerElement.click();

    colorPickerElement.addEventListener("input", function(e){
        console.log(e.currentTarget.value);
        if(lastCell){
            lastCell.style.color = e.currentTarget.value;
            let address = lastCell.getAttribute("data-address");
            dataObj[address].color = e.currentTarget.value;
        }
    });
});

fileOptions.addEventListener("click", function(){
    let isOpen = fileOptions.getAttribute("data-open");
    if(isOpen == "true"){
        fileOptions.setAttribute("data-open", "false");
        document.querySelector(".file-drop-down").remove();
    }
    else{
        fileOptions.setAttribute("data-open", "true");

        let dropDown = document.createElement("div");
        dropDown.innerHTML = "<p>Save</p><p>Clear</p>";

        let AllOptions = dropDown.querySelectorAll("p");
        
        AllOptions[0].addEventListener("click", function(){
            localStorage.setItem("sheet", JSON.stringify(dataObj));

        });

        AllOptions[1].addEventListener("click", function(){
            localStorage.setItem("sheet", "");
        });

        dropDown.classList.add("file-drop-down");
        fileOptions.append(dropDown);
    }
})