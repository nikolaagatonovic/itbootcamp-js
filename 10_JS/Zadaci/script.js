console.log("Zadaci - dodela vrednosti")

// Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
let s = 12;
let m = 15;
let odPonoci = s*60 + m;
console.log("Od ponoci je proslo: ", odPonoci);

let doPonoci = 24*60 - odPonoci;
console.log("Do ponoci je preostalo: ", doPonoci);

// 2. Zadatak: Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
//1. Nacin
let minOdPonoci = 61;
let h = Math.floor(minOdPonoci / 60); //Math.round zaokruzuje na najpribliznije, Math.floor zaokruzuje na donji ceo broj, Math.ceil zaokruzuje na gornji ceo broj.
let min = minOdPonoci % 60;
console.log(h + ":" + min);

//2. Nacin
min = minOdPonoci % 60;
h = (minOdPonoci - min) / 60;
console.log(h + ":" + min);


//3. Zadatak: Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
let cenaRobe = 120;
let novcanica = 200;
let razlika = novcanica - cenaRobe;
console.log ("Kusur koji kasir treba da vrati: ", razlika)

// 4. Zadatak: Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.


let datum = new Date(); //Objekat koji vraca datum
console.log(datum);
let danUNedelji = datum.getDay();//Vraca dan u nedelji (od 0 do 6 pri cemu je 0 nedelja)
console.log(danUNedelji);
let danUMesecu = datum.getDate(); //Vraca dan u mesecu
console.log(danUMesecu);

let trenutnoSati = datum.getHours();
let trenutnoMinuta = datum.getMinutes();
let trenutnoOdPonoci = trenutnoSati*60 + trenutnoMinuta;
console.log(trenutnoOdPonoci);

// 5. Zadatak: Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

// 6. Zadatak: Konverzija valute iz evra u dinare (i obrnuto).
// Evro u dinare
let novacEvri = 200;
let kursEvra = 117.2;
let evriUDinare = novacEvri * kursEvra;
console.log(evriUDinare);

// Dinari u evre
let novacDinari = 2000;
let dinariUEvre = novacDinari / kursEvra;
console.log(dinariUEvre);