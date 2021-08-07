let rowNumSec = document.querySelector(".row-num-sec");
let formulaBarSelectedCellArea = document.querySelector(".selected-cell");
let lastCell;
let dataObj = {};
let cellSec = document.querySelector(".cell-sec");
let columnTagsSection = document.querySelector(".column-tag-sec");
let formula_input = document.querySelector(".formula-input-sec");

formula_input.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        console.log("now evaluting");

        let typedFormula = e.currentTarget.value;
        console.log(typedFormula);
        if(!lastCell) return;

        console.log("not returned");
        let selectedCellAdd = lastCell.getAttribute("data-address");
        let CellObj = dataObj[selectedCellAdd];

        CellObj.formula = typedFormula;

        let upstream = CellObj.upstream;

        for(let i=0; i<upstream.length; i++){
            removeFromDownstream(upstream[i], selectedCellAdd);
        }

        CellObj.upstream = [];
        let formulaArr = typedFormula.split(" ");
        let cellsInFormula = [];

        for(let i=0;i<formulaArr.length;i++){
            if(formulaArr[i]!="+" && formulaArr[i]!="-" && formulaArr[i]!="*" && formulaArr[i]!="/" && isNaN(formulaArr[i])){
                cellsInFormula.push(formulaArr[i]);
            }
        }
        for(let i=0;i<cellsInFormula.length;i++){
            AddToDownstream(cellsInFormula[i],selectedCellAdd);
        }
        CellObj.upstream = cellsInFormula;

        let valObj = {};

        for(let i=0;i<cellsInFormula.length;i++){
            let cellValue = dataObj[cellsInFormula[i]].value;
            valObj[cellsInFormula[i]] = cellValue;
        }
    
        //a1+b1
        for(let key in valObj){
            typedFormula = typedFormula.replace(key, valObj[key]);
        }
    
        //20 + 10
        let newValue = eval(typedFormula);

        lastCell.innerText = newValue;

        CellObj.value = newValue;

        let downstream = CellObj.downstream;
        for(let i=0;i<downstream.length;i++){
            updateCell(downstream[i]);
        }

        dataObj[selectedCellAdd] = CellObj;
    }
});

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
    
                       
    for(let j=0;j<26;j++){      

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


            let currDownstream = currCellObj.downstream;

            // C1(20) => [E1]  E1 (2*C1) [40]

            for(let i=0;i<currDownstream.length;i++){
                updateCell(currDownstream[i]);
            }

            dataObj[currCellAddress] = currCellObj;
            console.log(dataObj);
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

if(localStorage.getItem("sheet")){
    console.log(1);
    dataObj = JSON.parse(localStorage.getItem("sheet"));

    for(let x in dataObj){
        let cell = document.querySelector(`[data-address = '${x}']`);
        if(dataObj[x].value) cell.innerText = dataObj[x].value;
    }
}

/* Assigned value task
dataObj["A1"].value = 20;
dataObj["A1"].downstream = ["B1"];
dataObj["B1"].formula = "2 * A1";
dataObj["B1"].upstream = ["A1"];
dataObj["B1"].value = 40;

let a1cell = document.querySelector("[data-address = 'A1']");
let b1cell = document.querySelector("[data-address = 'B1']");

a1cell.innerText = 20;
b1cell.innerText = 40;
*/

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

function updateCell(cell){
    let cellObj = dataObj[cell];
    let upstream = cellObj.upstream; // [(A1-20), B1-10]
    let formula = cellObj.formula; //A1 + B1

    // upstream me jobhi cell hai unke objects me jaunga whase unki value lekr aunga 
  // wo sari values mai ek object me key value pair form me store krunga where key being the cell address 


  // {
  //   A1:20,
  //   B1:10
  // }

    let valObj = {};

    for(let i=0;i<upstream.length;i++){
        let cellValue = dataObj[upstream[i]].value;
        valObj[upstream[i]] = cellValue;
    }

    //a1+b1
    for(let key in valObj){
        formula = formula.replace(key, valObj[key]);
    }

    //20 + 10
    let newValue = eval(formula);

    let cellOnUi = document.querySelector(`[data-address = '${cell}']`);
    cellOnUi.innerText = newValue;

    dataObj[cell].value = newValue;
    let downstream = cellObj.downstream;

    for(let i=0;i<downstream.length;i++){
        updateCell(downstream[i]);
    }
}

function AddToDownstream(parent, child){
    // child ko parent ki downstream me add krna hai
    dataObj[parent].downstream.push(child);
}