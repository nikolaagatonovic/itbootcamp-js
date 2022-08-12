// let li = document.getElementById('lista');
// let dugme = document.querySelectorAll('li');
// for(let i = 0; i < dugme.length; i++) {
//     dugme[i].addEventListener('click', e => {
//         //e.preventDefault()
//         dugme[i].classList.toggle('saLinijom')
//     })
// }

// let dugme2 = document.getElementById('dodajObavezu');
// let izInputa = document.getElementById('dodaj');
// dugme2.addEventListener('click', e => {
//     //e.preventDefault();
//      li.innerHTML += `<li>${izInputa.value}</li>`;
//      izInputa.value = "";
// })

//DOM
let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let inputNoviZadatak = document.querySelector('#unesi');
//let btnDodaj = document.querySelector('#dodaj');
let radioDodajNaPocetak = document.querySelector("#dodajNaPocetak");
let radioDodajNaKraj = document.querySelector("#dodajNaKraj");

//1. nacin
//Kad dodamo novi list item nece raditi jer taj novi item nece imati event listener koji je vezan na njega
// liZadaci.forEach(li => {
//     li.addEventListener('click', e => {
//         console.log(e);
//         console.log(e.target);
//         e.target.remove();
//     });
// });

//2. nacin
ulZadaci.addEventListener('click', e => {
    console.log('Kliknuto na UL');
    if(e.target.tagName == 'LI') {
        console.log('Kliknuto na LI');
        e.target.remove();
    }
})

inputNoviZadatak.addEventListener('keyup', e => {
if(e.keyCode == 13) {
    let noviZadatak = inputNoviZadatak.value;
    if(noviZadatak == "" || noviZadatak == null) {
        alert('Mora biti unet barem jedan karakter')
    } else {
    let liNoviZadatak = document.createElement('li');
    liNoviZadatak.textContent = noviZadatak;
    if(radioDodajNaPocetak.checked) {
        ulZadaci.prepend(liNoviZadatak);
    } else {
        ulZadaci.append(liNoviZadatak)
    }
    inputNoviZadatak.value = "";
        }
    }
});

