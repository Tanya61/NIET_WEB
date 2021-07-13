let rowNumSec = document.querySelector(".row-num-sec");
let formulaBarSelectedCellArea = document.querySelector(".selected-cell");
let lastCell;
let cellSec = document.querySelector(".cell-sec");
let columnTagsSection = document.querySelector(".column-tag-sec");

cellSec.addEventListener("scroll", function(e){
    rowNumSec.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;
    columnTagsSection.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
})

for(let i=1;i<=100;i++){
    let div = document.createElement("div");
    div.innerText = i;
    div.classList.add("row-number");
    rowNumSec.append(div);
}



for(let i=0;i<26;i++){
    let ASCII = 65+i;
    let reqAlphabet = String.fromCharCode(ASCII);
    let div = document.createElement("div");
    div.innerText = reqAlphabet;
    div.classList.add("column-tag");
    columnTagsSection.append(div);
}

for(let i=1;i<=100;i++){
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    
                       //i = 1 [A1,B1..........Z1]
                       //i = 2 []
                       //.
                       //.
                       //i = 100 [A100.........z100]
    for(let j=0;j<26;j++){      //i = 100   j = 25  asciiCode = 65+25=90  alpha = z  cellAdd = Z100
        // A to Z
        let AsciiCode = 65+j;
        let reqAlphabet = String.fromCharCode(AsciiCode);
        let cellAdd = reqAlphabet+i;

        let cellDiv = document.createElement("div");
        cellDiv.setAttribute("contentEditable", true);
        cellDiv.classList.add("cell");
        cellDiv.setAttribute("data-address", cellAdd);
        cellDiv.addEventListener("click", function(e){
            if(lastCell){
                lastCell.classList.remove("cell-selected");
            }
            e.currentTarget.classList.add("cell-selected");
            lastCell = e.currentTarget;

            let currCellAddress = e.currentTarget.getAttribute("data-address");
            formulaBarSelectedCellArea.innerText = currCellAddress;
        });
        rowDiv.append(cellDiv);
    }
    cellSec.append(rowDiv);
}