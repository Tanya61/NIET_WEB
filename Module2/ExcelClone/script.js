let rowNumSec = document.querySelector(".row-num-sec");
let formulaBarSelectedCellArea = document.querySelector(".selected-cell");
let lastCell;
let dataObj = {};
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

//inside this nested for loop we are creating individual cells UI + cell obj
for(let i=1;i<=100;i++){
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    
                       
    for(let j=0;j<26;j++){      //i = 100   j = 25  asciiCode = 65+25=90  alpha = z  cellAdd = Z100
        // A to Z
        let AsciiCode = 65+j;
        let reqAlphabet = String.fromCharCode(AsciiCode);
        let cellAdd = reqAlphabet+i;

        dataObj[cellAdd] = {
            value: undefined,
            formula: undefined,
            upstream : [],
            downstream : [],
        };

        let cellDiv = document.createElement("div");

        cellDiv.addEventListener("input", function(e){
            
            let currCellAddress = e.currentTarget.getAttribute("data-address");

            let currCellObj = dataObj[currCellAddress];
            currCellObj.value = e.currentTarget.innerText;
            currCellObj.formula = undefined;

            //1- Loop on upstream
            //2- for each cell go to its downstream and remove ourself
            //3- apni upstream ko empty array krdo

            let currUpstream = currCellObj.upstream;
            for(let k=0;k<currUpstream.length;k++){
                //removefromdownstrean(parent, child)
                removeFromDownstream(currUpstream[k], currCellAddress);
            }
            currCellObj.upstream = [];
            console.log(currCellObj);
        });

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
// C1 = Formula(2*A1)
// A1 = parent
// C1 = child

//is function kisi ki upstream se mtlb nhi hai
//iska bs itna kaam h ki parent do and child do , aur mai parent ki downstream se child ko hta dunga
//taki unke bichka connection khtm hojai
//taki agr parent update ho to connection khtm hone ke baad child update na ho

function removeFromDownstream(parentCell, childCell){
    //1- fetch parent cell's downstream

    let parentDownstream = dataObj[parentCell].downstream;

    //2- filter kro childCell ko parent ki downstream se
    let filterDownstream = [];

    for(let i=0;i<parentDownstream.length;i++){
        if(parentDownstream[i] != childCell){
            filterDownstream.push(parentDownstream[i]);
        }
    }

    //3- filtered upstream ko wapis save krwado dataObj me req cell me
    dataObj[parentCell].downstream = filterDownstream;
}