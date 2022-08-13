// 1. Zadatak. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.querySelector("#brojac");
let br = -3;
btnBrojac.addEventListener('click', () => {
    console.log(br);
    br++;
    
});

// 2. Zadatak.  Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBrojac1 = document.getElementById("brojac1");
let pIspisBrojaca1 = document.getElementById("ispisBrojaca1");
let br1 = 0;

pIspisBrojaca1.innerHTML = br1; // Kada definisemo br1, ispisemo njegovu vrednost na ekranu

btnBrojac1.addEventListener("click", () => {
    br1++;
    // pIspisBrojaca1.innerHTML += `${br1} `;
    pIspisBrojaca1.innerHTML = br1; // Svaki put kada kliknemo ispisemo novu vrednost brojaca br1.
});

// 3. Zadatak. Napraviti dugme + i dugme -.Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1. Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
let brojacMinus = document.getElementById("brojacMinus");
let brojPlus = document.getElementById("brojacPlus");
let brojRez = document.getElementById("brojacRez");

let rez = 0;
brojRez.innerHTML = rez;

brojacPlus.addEventListener("click", () => {
    brojRez.style.color = "black";
    rez++;
    brojRez.innerHTML = rez;
});

brojacMinus.addEventListener("click", () => {
    brojRez.style.color = "black";
    rez--;
    if (rez < 0) {
        rez = 0;
        brojRez.style.color ="blue"
    }
    brojRez.innerHTML = rez;
});
// 4. Zadatak. Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

//. 5. Zadatak. Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let btnPosalji = document.getElementById("posalji");
let inputIme = document.getElementById("ime");
let pPrikaziIme = document.getElementById("prikaziIme");

// let ime = inputIme.value; ne pise se ovde nego uvek ispod da ne bi bilo prazno polje izmedju svakog unosa

btnPosalji.addEventListener("click", () => {
    let upisanoIme = inputIme.value;
    // console.log(upisanoIme); ovo ne treba jer se ispisuje u paragrafu
    pPrikaziIme.innerHTML = `Zdravo ${upisanoIme}`
});

// 6. Zadatak. Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
btnPosalji.addEventListener("dblclick", () => {
    let upisanoIme = inputIme.value;
    alert(`Hello ${upisanoIme}`);
    
})

// 5. Zadatak DRUGI NACIN
let inputPrezime = document.getElementById("prezime");
let btnPosaljiPrezime = document.getElementById("posaljiPrezime");
let pPrikaziPrezime = document.getElementById("prikaziPrezime");

btnPosaljiPrezime.addEventListener("click", e => {
    e.preventDefault();
    console.log(e);
    pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value};`

});


// 7. Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.

let kvadriraj = document.getElementById("kvadriraj");
let prepolovi = document.getElementById("prepolovi");
let btnKvadriraj = document.getElementById("btnKvadriraj");
let btnPrepolovi = document.getElementById("btnPrepolovi");
let btnPovrsinaKruga = document.getElementById("btnPovrsinaKruga")

btnKvadriraj.addEventListener("click", () => {
    kvadratBroja.innerHTML = kvadriraj**2;
});

//PRIMER
let fora = document.getElementById("forma");
let inputJelo = document.getElementById("jelo");
let inputPice = document.getElementById("pice");
let pIspis = document.getElementById("ispis")

forma.addEventListener("submit", e => {
    e.preventDefault();
    pIspis.innerHTML = 
    `<ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno pice: ${inputPice.value}</li>
    </ul>`;
    // forma.reset();//ovo resetuje sva polja u datoj formi
});