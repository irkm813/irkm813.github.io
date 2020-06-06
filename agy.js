var kep = document.querySelector("#kepem");
var utesszam = document.querySelector("#utesszam").innerHTML;
var audi = new Audio("sounds/roblox2.mp3");
var halott = "p2.html";

kep.addEventListener("click", function(){
    utesszam++;
    document.querySelector("#utesszam").innerHTML = utesszam;
    kep.setAttribute("src","imgs/pitbull2.png") ;
    audi.play();
    setTimeout(function(){
        kep.setAttribute("src","imgs/pitbull.png");
    },200);
    
    if(utesszam>9) {
        window.location.href= halott;
    }
});



