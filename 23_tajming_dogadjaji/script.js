/*function test() {
    console.log('Pozvana je funkcija test');
}

console.log("Prva linija koda");
console.log("Druga linija koda");
setTimeout(test, 5000); //test je callback funkcija (jer se prosledjuje kao parametar drugoj funkciji pa zato nema zagrade); Ovo je poziv setTimeout funkcije a ne test funkcije


*/
let dugme = document.getElementById('btn1');
let dugme2 = document.getElementById('btn2');
let dugme3 = document.getElementById('btn3')
dugme.addEventListener('click', function() {
    console.log(this)
});

dugme2.addEventListener('click', () => {
    console.log(this);
});

dugme3.addEventListener('click', klik);

function klik(){
    console.log(this);
}

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let divIspis = document.getElementById('ispis');
let clock = null;


b1.addEventListener('click', () => {
    if(clock === null);
    clock = setTimeout(function() {
        let trenutnoVreme = new Date();
        let sati = trenutnoVreme.getHours();
        let minuti = trenutnoVreme.getMinutes();
        let sekundi = trenutnoVreme.getSeconds();
        divIspis.innerHTML = `${sati}:${minuti}:${sekundi}`;
        clock = null;
    }, 2000)
});

b2.addEventListener('click', () => {
    clearTimeout(clock);
    clock = null;
});
/*
let clockInterval = null;

console.log('Prva linija koda');
console.log('Druga linija koda');
clockInterval = setInterval(() => {
    console.log("Poziv callback funkcije");
}, 1000);
console.log('Cetvrta linija koda');
console.log('Peta linija koda');

setTimeout(() => {
    clearInterval(clockInterval)
}, 5000);
console.log('Sedma linija koda');
console.log('Osma linija koda');
*/

let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let divIspis2 = document.getElementById('ispis2');
let clockPeriod = null; 

b3.addEventListener('click', () => {
    if(clockPeriod === null) {
    clockPeriod = setInterval(() => {
        let datum = new Date();
        let sati = datum.getHours();
        let minuti = datum.getMinutes();
        let sekundi = datum.getSeconds();
        divIspis2.innerHTML = `${sati}:${minuti}:${sekundi}`;
    }, 1000 / 5);
    }
});

b4.addEventListener('click', () => {
    clearInterval(clockPeriod);
    clockPeriod = null;
});

//Napraviti dva dugmeta i input kao na slici.
//Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde.
//Klikom na dugme „Stop“ pauzira se odbrojavanje.

let b5 = document.getElementById('b5');
let span = document.getElementById('span');
let b6 = document.getElementById('b6');
let brojac = 0;
let brojanje = null;


b5.addEventListener('click', () => {
    if(brojanje === null) {
        brojanje = setInterval(() => {
            brojac++;
            span.value += brojac;
        }, 1000);
    }
});

b6.addEventListener('click', () => {
    clearInterval(brojanje);
    brojanje = null;
});