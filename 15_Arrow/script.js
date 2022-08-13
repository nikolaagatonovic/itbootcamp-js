// Imenovane funkcije
function suma(a, b) { // Deklaracija  imenovane funkcije
    return a + b;
}
console.log(suma(1, 2)); // Poziv f-je: ime funkcije i prosledjivanje vrednosti

//Aninimne funkcije
let suma2 = function(a, b) { //Deklaracija anonimne funkcije
    return a + b;
}

console.log(suma2(3, 4)); // Poziv anonimne fje je preko promenljive u kojoj je sacuvana

// Arrow fje
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(4, 6));

// Arrow fja koja ispisuje "Hello world"
let hello = () => {
    console.log("Hello world");
}
hello();
hello();

//Arrow fja koja pozdravlja korisnika
let korisnik = (ime) => {
    console.log(`Zdravo ${ime}!`);
}

korisnik("Stefan");
korisnik("Stefan");
korisnik("Jelena");
korisnik("Stefan");

// Arrow fja koja ispisuje ime korisnika kao i pravni status
let korisnik2 = (ime, godine) => {
    if(godine < 18) {
        let ispis = "Korisnik " + ime + " je maloletno lice";
        document.body.innerHTML += `<p style="color: green">${ispis}</p>`;
    } else {
        let ispis = "Korisnik " + ime + " je punoletno lice";
    document.body.innerHTML += `<p style="color: yellow">${ispis}</p>`;
    }
}

korisnik2("Glorija", 28);
korisnik2("Petar", 14);

//1 Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 

let pozdrav = (ime, prezime) => {
    if(ime == "Jelena" && prezime == "Matejic") {
        let ispis = "Zdravo " + ime + " " + prezime;
        document.body.innerHTML += `<p>${ispis}</p>`;
    }
}
pozdrav("Jelena", "Matejic");

//2 Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
let zbir = (n, m) => {

}

//3 Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => 
{
    if (n % 2 != 0){
        return true;
    } else {
        return false;
    }
}
console.log(neparan(70));

//4 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a, b) =>
{
    if (a > b){
    return a;
    } else {
    return b;
    }
}
console.log(maks2(10,11));

//Funkcije do sada
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

//Anonimne fje
let suma = function(a, b){
    return a + b;
}
console.log(suma(1, 2));

//Arrow fje - skracen zapis anonimnih fja
let suma2 = (a, b) =>{
    return a + b;
}

console.log(suma2(1, 2));

//Skracena sintaksa - ako ima samo return naredba nisu potrebne viticaste zagrade.
let sum = (a, b) => {
    return a + b;
}
//je isto sto i 
let sum = (a, b) => a + b;

(singleParam) => {statements}
singleParam => {statements}

() => {statements}
(a, b, c) => {statements}
