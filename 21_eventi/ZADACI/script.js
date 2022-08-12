//Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.  Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.querySelector("#brojac");
let br = 1;
btnBrojac.addEventListener("click", () => {
    console.log(br);
    br++;
});

//Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBrojac1 = document.getElementById('brojac1');
let pIspisBrojaca1 = document.getElementById('ispisBrojaca1');

let br1 = 0;
pIspisBrojaca1.innerHTML = br1; //ispisivanje odmah vrednosti na ekran

btnBrojac1.addEventListener('click', () => {
    br1++;
    // pIspisBrojaca1.innerHTML += `${br1}, `;
    pIspisBrojaca1.innerHTML = `${br1}`;
});

/*Napraviti dugme + i dugme -. 
Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.*/



let dugmePlus = document.getElementById('plus');
let dugmeMinus = document.getElementById('minus');
let ispisBrojaca = document.getElementById('spanBrojac')
let brojac = 0;

spanBrojac.innerHTML = brojac;

dugmePlus.addEventListener('click', () => {
    brojac++;
    ispisBrojaca.innerHTML = brojac;
});
dugmeMinus.addEventListener('click', () => {
    brojac--;
    if(brojac < 0) {
        brojac = 0;
        }
    ispisBrojaca.innerHTML = brojac;
});



//Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

//Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.


let dugmeee = document.getElementById('btnIme');
let paraggg = document.getElementById('paraIme')

dugmeee.addEventListener('click', () => {
let inputtt = document.querySelector('input').value;
paraggg.innerHTML = `Zdravo  ${inputtt}`   
});

dugmeee.addEventListener('dblclick', () => {
alert('Nije dozvoljen dupli klik')
})

//Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.

//drugi nacin
let inputPrezime = document.getElementById('prezime');
let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
let pIspisiPrezime = document.getElementById('prikaziPrezime');

btnPosaljiPrezime.addEventListener('click', e => {
    e.preventDefault();
    pIspisiPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`
});

//Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.

let kvadrat = document.getElementById('btnKvadriranje');
let deljenje = document.getElementById('btnDeljenje');
let inpKvadrat = document.getElementById('inputKvadriranje');
let inpDeljenje = document.getElementById('inputDeljenje');
let paraKvadrat = document.getElementById('ispisKvadriranje');
let paraDeljenje = document.getElementById('ispisDeljenje');
let povrsinaKruga = document.getElementById('btnPovrsinaKruga');
let inpPovrsina = document.getElementById('inputPovrsinaKruga')
let paraPovrsina = document.getElementById('ispisPovrsina');

kvadrat.addEventListener('click', e => {
    e.preventDefault();
    paraKvadrat.innerHTML = inpKvadrat.value ** 2;
})

deljenje.addEventListener('click', e => {
    e.preventDefault();
    paraDeljenje.innerHTML = inpDeljenje.value / 2;
})

povrsinaKruga.addEventListener('click', e => {
    e.preventDefault();
    paraPovrsina.innerHTML = inpPovrsina.value ** 2 * Math.PI;
})