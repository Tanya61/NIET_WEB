var body = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");
var text = document.getElementsByTagName("h1")[0];
var on = false;

document.getElementById("toggle").onclick =  function(){
    if(!on){
        text.classList.add("color-white");
        body.classList.add("bckgrd-black");
        circle.style.marginLeft = "100px";
        on = true;
    }
    else{
        text.classList.remove("color-white");
        body.classList.remove("bckgrd-black");
        circle.style.marginLeft = "1px";
        on = false;
    }
}