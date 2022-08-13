// DOM
let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll("li");
let inputNoviZadatak = document.querySelector("#unesi")
// let btnDodaj = document.querySelector('#dodaj');
let radioDodajNaPocetak = document.querySelector("#dodajNaPocetak")

//1. NACIN - Kada dodamo novi li nece raditi jer taj novi li nece imati event listener koji je vezan za njega
// liZadaci.forEach(li => {
//     li.addEventListener("click", e => {
//         console.log(e);
//         console.log(e.target);
//         e.target.remove();
//     });
// });

//2. NACIN
ulZadaci.addEventListener('click', e => {
    console.log("Kliknuto na UL");
    if(e.target.tagName == 'LI') {
        console.log("Kliknuto na LI");
        e.target.remove();
    }
});

inputNoviZadatak.addEventListener("keyup", e => {
    if(e.keyCode == 13) {
        let noviZadatak = inputNoviZadatak.value;

        if(noviZadatak = "" || noviZadatak == null) {
        alert("Morate uneti novi zadatak");
        } 
        else {
            let liNoviZadatak = document.createElement("li");
            liNoviZadatak.textContent = noviZadatak;
            if (radioDodajNaPocetak.checked) {
                ulZadaci.prepend(liNoviZadatak);
            } 
            else {
                ulZadaci.appendChild(liNoviZadatak);
            };
            inputNoviZadatak.value = "";
        }
    }
});