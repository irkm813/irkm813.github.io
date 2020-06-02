var kep = document.querySelector("#kepem");
var utesszam = document.querySelector("#utesszam").innerHTML;

kep.addEventListener("click", function(){
    utesszam++;
    document.querySelector("#utesszam").innerHTML = utesszam;
});