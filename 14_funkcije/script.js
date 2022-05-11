// function mojaFunkcija () {
//     console.log("Zdravo svete");
// }
// mojaFunkcija();

function mojaFunkcija(tekst) {
    console.log(tekst);
}
mojaFunkcija("Zdravo svete")
let tekst = "Hello World"
mojaFunkcija(tekst)

//Definicija druge funkcije
function ispisiTekst(tekst) {
    console.log("Ispisujem tekst: " + tekst);
}

//Pozivi funkcije
ispisiTekst('ITBootcamp'); //Prilikom poziva prosledjuje se neka vrednost 
ispisiTekst("Pera Peric");
ispisiTekst("25")

function test(x) {
    if(x % 2 == 0) {
        var y = "Paran";
    } else {
        var z = "Neparan";
    }
    console.log(x);
    console.log(y);
    console.log(z);
}
test(4)

//definicija funkcije
function korisnik(ime, prezime) {
    console.log(`Korisnik: ${ime} ${prezime}`);
}

//poziv funkcije
korisnik("Pera", "Peric");

//Napisati funkciju koja ispisuje ime i prezime korisnika (koji se prosledjuju kao parametri), kao i info da li je prezime korisnika dugacko (ako ima vise od 10 karaktera)

function osoba(ime, prezime) {
    if (prezime.length >= 10) {
        console.log(`Korisnik ${ime} ${prezime} ima dugacko prezime`);
    } else {
        console.log(`Korisnik ${ime} ${prezime} ima kratko prezime`);
    }
}
osoba("Jelena", "Janosevic");
osoba("Nikola", "Agatonovic");

//Funkcija za ispis sa prosledjene dve numericke vrednosti
function zbir(a, b) {
    rez = a + b;
    console.log(rez);
}
zbir(2, 5)
let a = 3;
let b = 8;
zbir(a, b);

function proizvod(a, b) {
    return a * b;
    //console.log("Hello world");
}

// return ima dvojaku ulogu:
//1. VRACA vrednost funkciji
//2. PREKIDA izvrsenje funkcije

console.log(proizvod(5, 6));

//1 Napisati funkciju "pozdrav" kojoj se prosledjuje ime i prezime a funkcija ispisuje pozdrav. na primer za uneto ime Jelena i prezime Matejic funkcija ispisuje Zdravo Jelena Matejic

function pozdrav(ime, prezime) {
    console.log(`Pozdrav ${ime} ${prezime}`);
}
pozdrav("Jelena", "Matejic")

//2. Napisati funkciju zbir koja racuna zbir dva realna broja. Sta bi trebalo izmeniti da bi se dobila razlika, proizvod ili kolicnik dva broja?

function zbir(broj1, broj2) {
    console.log(`${broj1 + broj2} `);
    console.log(`${broj1 - broj2} `);
    console.log(`${broj1 * broj2} `);
    console.log(`${broj1 / broj2} `);
}
zbir(2, 5)

//3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(neparan(23))


//4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(n, m) {
    if (n > m) {
        return n;
    } else {
        return m;
    } 
}
maks2(3, 3)

function maks4(a, b, c, d) {
    let m1 = maks2(a, b);
    let m2 = maks2(c, d);
    let m3 = maks2(m1, m2);
    return m3
}
maks4(2, 5, 6, 7)

//ILI

function max4(a, b, c, d) {
    return maks2(maks2(a, b), maks2(c, d));
}

//ILI

function maxxx4(a, b, c, d) {
    let m4 = maks2(a, b);
    let m5 = maks2(m4, c);
    let m6 = maks2(m5, d);
    return m6;
}

console.log(maxxx4(4, -6, 10, 3));
//5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slikica(slika) {
    document.body.innerHTML += `<img src="${slika}"></img>`
}
slikica("slika2.png");
//ILI
function slikica2(url) {
    document.body.innerHTML += `<img src="${url}" style="width: 600px">`;
}
let url = "https://c.files.bbci.co.uk/A139/production/_123837214_mediaitem123834363.jpg"

slikica2(url);

//6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function color(nekaBoja) {
        document.body.innerHTML += `<p style="color: ${nekaBoja}">Lorem ipsum dolor sit amet</p>`
}
color("green");

//DOMACI 
//1.Zadatak
//Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m. Pozvati funkciju i njen rezultat ispisati u konzoli.
function suma(n, m) {
    let suma2 = 0;
    for(let i = n; i <= m; i++) {
        suma2 += i**3;
    }
    console.log(suma2);
}
suma(2, 3)

//2.Zadatak
//Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja. Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba.  Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

function godine(godinaRodjenja) {
    let danasnjiDatum = new Date();
    let sadaGodina = danasnjiDatum.getFullYear();
    let razlika = sadaGodina - godinaRodjenja;
    return razlika
}
console.log(godine(1988));

//3.Zadatak
//Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.

function deljiv(n, m, k) {
    let brojac = 0;
    for (let i = n; i <= m; i++) {
        if (i % k == 0) {
            brojac++;
        }
    }
    document.body.innerHTML += `${brojac} brojeva je deljivo brojem ${k}`
}
deljiv(2, 22, 6);

//7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
    switch(n) {
        case 0:
            console.log("Nedelja");
            break;
        case 1:
            console.log("Ponedeljak");
            break
        case 2:
            console.log("Utorak");
            break
        case 3:
            console.log("Sreda");
            break
        case 4:
            console.log("Cetvrtak");
            break
        case 5:
            console.log("Petak");
            break
        case 6:
            console.log("Subota");
            break;
        default:
            console.log(`Pogresan unos`);
    }
}
sedmiDan(2)

//8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m) {
    let brojac = 0;
    for(let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            brojac++;
        }
    }
    console.log(`Brojeva deljivih sa tri od ${n} do ${m} ima ukupno ${brojac}`);
}
deljivSaTri(2, 21)


//9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    console.log(suma);
}
sumiraj(2, 4)

//10. Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function pomnozi(n, m) {
    let proizvod = 1;
    for (i = n; i <= m; i++) {
        proizvod *= i;
    }
    console.log(proizvod);
}
pomnozi(2, 10)

//11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arit(n, m) {
    let suma = 0;
    let brojac = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
        brojac++;
    }
    console.log(suma / brojac);
}
arit(2, 6)

//12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function artri(n, m) {
    let suma = 0;
    let brojac = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            brojac++;
            suma += i;
        }
    }
    console.log(suma / brojac);
}
artri(1, 14)

//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function nekiFont(n) {
    document.body.innerHTML += `<p style="font-size: ${n}px">Lorem ipsum dolor sit amet lalala</p>`
}
nekiFont(23)

//14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function ponovo(n, m) {
    for (let i = n; i <= m; i++) {
        document.body.innerHTML += `<p style="font-size: ${i}em">Lorem ipsum dolor sit met hohoho ohoho</p>`
    }
}
ponovo(2, 3)

//15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami. Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

function praksa(n, a) {
    let d = 3000;
    let i = 1;
    while(i <= n ) {
        if (i % 2 == 0) {
            a += d;
            console.log(a)
        } else {
            a == a
            console.log(a)
        }
        i++;
        //console.log(a)
    }
}
praksa(6, 30000);

//16. Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

function most(t, p, n) {
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
most(35, 10, 12)