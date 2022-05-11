//Imenovana funkcija
function suma(a, b) {
    return a + b;
}
console.log(suma(1, 2));

//Anonimna funkcija
let suma2 = function(a, b) {
    return a + b;
}
console.log(suma(3, 4));

//Arrow funkcija
let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(4, 6));

let hello = () => {
    console.log(`Hello world`);
}
hello();

//

let korisnik = (ime) => {
    console.log(`Hello ${ime}!`);
}
korisnik("Stefan")
korisnik("Jelena")

//

let korisnik2 = (ime, godine) => {
    if (godine < 18) {
        let ispis = `Korisnik ${ime} je maloletno lice`;
        document.body.innerHTML += `<p style="color: green">${ispis}</p>`
    } else {
        let ispis = `Korisnik ${ime} je punoletno lice`;
        document.body.innerHTML += `<p style="color: blue">${ispis}</p>`
    }
}
korisnik2("Nikola", 18)
korisnik2("Jelena", 17)

//

//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = (n) => {
    if (n % 2 == 0) {
        return false
    } else {
        return true
    }
}
console.log(neparan(14));

//ILI

let neparan2 = (n) => (n % 2 == 1);
console.log(neparan2(14));

//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (n, m) => {
    if (n > m) {
        return n;
    } else {
        return m
    }
}
console.log(maks2(2, 6));

let maks4 = (n, m, o, p) => {
    return maks2(maks2(n, m), maks2(o, p))
}
console.log(maks4(1111, 222, 3, 22));

//ILI

let maks5 = (a, s, d, f) => maks2(maks2(a, s), maks2(d, f));
console.log(maks5(1, 6, 8, 32));

//ILI

let maks6 = (a, s, d, f) => maks2(maks2(maks2(a, s), d), f)
console.log(maks6(22, 44, 66, 12));

//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = (url) => {
    document.body.innerHTML += `<img src="${url}">`
}
slika("https://image.shutterstock.com/image-photo/orchid-mantis-pink-260nw-769945792.jpg")

//ILI

let slika2 = putanja => `<img src="${putanja}">`
document.body.innerHTML += slika2("slika3.png")

//Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let color = (a) => {
    document.body.innerHTML += `<p style="color: ${a}">lorem ipsum dolor sit amet</p>`
}
color("rgb(145, 122, 23)")

//Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno novca zaraditi, ukoliko svakog meseca budete dobijali povišicu. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

// function praksa(n, a) {
//     let d = 3000;
//     let suma = 0;
//     for (let i = 0; i < n; i++) {
//             a += d;
//             suma += a;
//         }
//         console.log(suma);
//     }
// praksa(3, 30000);

let praksa = (n, a) => {
    let d = 3000;
    let suma = 0;
    for (let i = 0; i < n; i++) {
        a += d;
        suma += a;
        }
        return suma;
    }
console.log(praksa(3, 30000));

//16. Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

let most = (t, p, n) => {
    if (t <= p) {
        console.log(`Cekanje je 0 sekundi`);
    } else if (t > p) {
        let vreme = (p + n) - t;
        if (vreme < 0) {
            console.log(`Cekanje je 0 sekundi`);
        } else
        console.log(`Cekanje je ${vreme} sekundi`);
    }
}
most(15, 14, 45)

//ILI
let polaz = (t, p, n) => {
    if (p >= t || p + n <= t) {
        return 0;
    } else {
        return p + n - t //math.abs pretvara negativan broj u pozitivan
    }
}
console.log(`Polazak sa starta treba biti ${polaz(15, 14, 45)} sekundi nakon pocetka merenja vremena`)