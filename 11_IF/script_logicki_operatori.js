let a = 5;

if(a > 0 && a < 10) {//Konjunkcija (a>0) i (a<10)
    console.log("Oba logicka uslova su zadovoljena");
}
else {
    console.log("Barem jedan uslov nije zadovoljen:");
}

let b = 13;

if((b < 0) || (b > 15)) {
    console.log("Barem jedan logicki uslov je zadovoljen");
}
else {
    console.log("Nijedan logicki uslov nije zadovoljen");
}

let c = -3;
if(!(c < 0)) { // NEGACIJA : nije (c < 0)
    console.log(`Broj ${c} je nenegativan`);
}
else {
    console.log(`Broj ${c} je negativan`);
}

// Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan
let pol = "m";
let godine = 18;
if (pol == "m" &&  godine>= 18) 
{
     console.log("Muško punoletan");
}
else if (pol == "m" && godine<18) 
{
     console.log("Muško maloletan");
}
else if (pol == "z" &&  godine>=18) 
{
     console.log("Zensko punoletan");
}
else
{
     console.log("Zensko maloletan");
}

// Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 
let j = 9;
let k = 17;
let l = 28;
if (j > k && j > l) {
    console.log("j je najveci broj")
}
else if (k > j && k > l) {
    console.log("k je najveci broj")
}
else if (l > k && l > j) {
    console.log("l je najveci broj")
}

// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = 50;
if ((temp > 40) || (temp < -15)) {
    console.log("ekstremna temperatura")
}

// Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
let datum = new Date();
let trenutnaGodina = datum.getFullYear();
if ( trenutnaGodina % 4 == 0) {
    console.log("godina je prestupna")
}
