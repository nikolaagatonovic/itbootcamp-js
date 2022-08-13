let pr = 4;
let pr2 = 50;
if(pr < 10) {
    pr = "0" + pr;
}
if(pr2 < 10) {
    pr2 = "0" + pr2;
}
console.log(pr); //poziv funkcije log
console.log(pr2);//poziv funkcije log

//Definicija funkcije (telo funkcije).
function mojaFunkcija() {
    console.log("Zdravo svete!");
}

console.log("Neki tekst pre poziva funkcije")
// Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije")

function korisnik (ime, prezime)
{
    console.log(`Korisnik ${ime} ${prezime}`);
}
korisnik ("Ana", "Anisic");
korisnik ("Bojana", "Bojic");
korisnik ("Vuk", "Vukovic");

function korisnik2 (ime, god)
{
    console.log(`${ime} ${god} godina`);
}
korisnik2 ("Ana", 18);
korisnik2 ("Bojana", 23);
korisnik2 ("Vuk", 21);

function zbir(a, b)
{
    let rez = a + b;
    console.log(rez);
}
zbir(5, 10);
let a = 2;
let b = 7;
zbir(a, b);

//Funkcija koja ispisuje zbir svoja dva parametra
function zbir1(a, b) {
    let rez = a + b;
    console.log(rez);
}

zbir1(5, 6);
a = -3;
b = 7;
zbir1(a, b);

//3 Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n)
{
    if (n % 2 != 0){
        return true;
    } else {
        return false;
    }
}
console.log(neparan(70));
console.log


//4 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(a, b)
{
    if (a > b){
    return a;
    } else {
    return b;
    }
}
console.log(maks2(10,11));

//5 Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(url)
{
    document.body.innerHTML+=`<img src=${url}>`;
}
let url = `https://www.novosti.rs/upload/images/2017/01/27n/zelezara.jpg`;
slika(url);

//6 Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function pColor(color)
{
    document.body.innerHTML+=`<p style="color: ${color};"> paragraf</p>`;
}
pColor("red");

//7 Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n)
{
    switch(n) {
        case 1:
            console.log("ponedeljak")
            break
        case 2:
            console.log("utorak")
            break
        case 3:
            console.log("sreda")
            break
        case 4:
            console.log("cetvrtak")
            break
        case 5:
            console.log("petak")
            break
        case 6:
            console.log("subota")
            break
        case 0:
        case 7:
            console.log("nedelja")
            break
        default:
            console.log("Neodgovarajuci unos")
            break      
    }
}
sedmiDan(3);

//8 Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m)
{
    suma = 0;
    for(i = n; i <= m; i++){
        if(i % 3 == 0){
            suma += 1;
        }
    }
    document.body.innerHTML += `<p>Broj brojeva od n do m koji su deljivi brojem 3 je ${suma}</p>`;
}
deljivSaTri(2, 13);

//9 Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m)
{
    suma = 0;
    for(i = n; i <= m; i++){
        suma+=i;
    }
    document.body.innerHTML += `<p>Suma brojeva od n do m iznosi ${suma}</p>`;
}
sumiraj(2, 3);

//10 Napraviti funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function pomnozi(n, m)
{
    proizvod = 1;
    for(i = n; i <= m; i++){
    proizvod*=i;
}
document.body.innerHTML += `<p>Proizvod brojeva od n do m iznosi ${proizvod}</p>`;
}
pomnozi(2, 6);

//11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arSredina(n, m)
{
    suma = 0;
    let ukupanBroj = 0;
    for(i = n; i <= m; i++){
        suma+=i;
        ukupanBroj++;
    }
    sredina = suma / ukupanBroj;
    return sredina;
}
arSredina(2, 8);

//12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
function arSredina(n, m)
{
    suma = 0;
    ukupanBroj = 0;
    for(i = n; i <= m; i++){
        if(i % 10 == 3){
        suma+=i;
        ukupanBroj++;
        }
    }
    sredina = suma / ukupanBroj;
    return sredina;

}
arSredina(2, 13);

//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function ceoBroj(n)
{
    document.body.innerHTML += `<p style="font-size: ${n}px;"> tekst sa drugacijim fontom</p>`
}
ceoBroj(34);


