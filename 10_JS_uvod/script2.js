let x = Math.PI;
console.log(x);

let ime = "Nikola"
let prezime = "Agatonovic"
let imePrezime = ime + " " + prezime;
console.log(imePrezime);
console.log(ime.length + prezime.length);

let p = 7;

p += 3;
console.log(p);

p -= 5;
console.log(p);

p+=p;
console.log(p);

p++
console.log(p);

x = 7;
y = 3;
ost = -3 % 3;
console.log(ost);

//Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let s = 12;
let m = 35;
let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " + odPonoci + " minuta");

let doPonoci = 1440 - odPonoci;
console.log(`Do ponoci je ostalo ${doPonoci} minuta`);

//Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

let satiOdPonoci = (odPonoci - m) / 60;
console.log(`Od ponoci je proslo tacno ${satiOdPonoci} sati i ${m} minuta`);
//ILI
console.log(`Od ponoci je proslo ${(odPonoci - m) / 60} sati i ${odPonoci % 60} minuta;`);
//ILI
let satiOdPonoci2 = Math.floor(odPonoci / 60);
let minutiOdPonoci2 = odPonoci % 60;
console.log(`Od ponoci je proslo ${satiOdPonoci2} sati i ${minutiOdPonoci2} minuta`);


//Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 256;
let novcanica = 500;
let kusur = novcanica - cenaRobe;
console.log(`Prodavacica treba vratiti kusur od ${kusur} dinara`);

//Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.

// let trenutnoVreme = new Date()
// console.log(trenutnoVreme);

let datum = new Date();
let minuti = datum.getMinutes();
console.log(minuti);
let sati = datum.getHours();
console.log(sati);

let trenutnoVreme = `${sati}:${minuti}`
console.log(trenutnoVreme);

//Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd. Konverzija valute iz evra u dinare (i obrnuto).

let dan = datum.getDate();
let mesec = datum.getMonth();
let godina = datum.getFullYear();

console.log(`${dan}.${mesec + 1}.${godina}`);
console.log(`${godina}.${mesec+1}.${dan}`);

//Konverzija valute iz evra u dinare (i obrnuto).
 let euro = 88;
 let dinar = 200;
 let dolar = 33;
 let euroDinar = euro * 117;
 let dinarEuro = dinar / 117;
 let dolarEuro = dolar / 1.5;
 let euroDolar = euro * 1.5;
 console.log(`${euro} eura iznosi ${euroDinar} dinara`);
 console.log(`${dinar} dinara iznosi ${dinarEuro} eura`);
 console.log(`${euro} eura iznosi ${euroDolar} dolara`);
 console.log(`${dolar} dolara iznosi ${dolarEuro} eura`);

 //Temperatura iz Celzijusa u Farenhajte i obrnuto. Temperatura iz Celzijusa u Kelvine i obrnuto.

 let tempCelzijus = 1;
 let tempFarenhajt = 1;
 let tempKelvin = 1;

 console.log(`Temperatura od ${tempCelzijus} celzijusa iznosi ${tempCelzijus * 1.8 + 32} farenhajta odnosno ${tempCelzijus + 273.15} kelvina`);

 console.log(`Temperatura od ${tempFarenhajt} farenhajta iznosi ${(tempFarenhajt - 32) * 5/9} celzijusa odnosno ${(tempFarenhajt - 32) * 5/9 + 273.15} kelvina`);

 console.log(`Temperatura od ${tempKelvin} kelvina iznosi ${tempKelvin - 273.15} celzijusa odnosno ${(tempKelvin - 273.15) * 9/5 + 32} farenhajta`);