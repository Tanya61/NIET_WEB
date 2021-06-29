let div = document.querySelector("div");
let h1 = document.querySelector("h1");
div.addEventListener("click", function(){
    let oldval = h1.innerText;
    let c = Number(oldval.split(" ")[2]);
    c++;
    console.log(c);
    let newval = "Box Clicked "+ c + " times";
    h1.innerText = newval;
})