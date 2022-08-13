// Postupak dodavanja click eventa:
//1. Dohvatiti dugme
let btn = document.querySelector("button");

//2. Dodati event listener na taj element (on aktivno slusa sve sto se dogadja nad tim elementom)
//btn.addEventListener ("naziv eventa", funkcija koja se realizuje kada se aktivira);
btn.addEventListener("click", () => {
    console.log("jednostruki klik");
});

/////////////////////

//1. Dohvatimo element
let dupliKlik = document.querySelector("#dupli_klik");
// ili
// let dupliKlik = document.getElementById("dupli_klik");

//2. Dodati event listener
dupliKlik.addEventListener("dblclick", () => {
    console.log("Dvostruki klik");

});

///////////////////

//2. NACIN dodavanja eventa
function klikni() {
    console.log("Kliknuto");
}

////////////////////

