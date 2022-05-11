let a = 34;
let b = 33;
if (a < b) {
    console.log(`${a} je manje od ${b}`);
} else if (a > b) {
    console.log(`${a} je vece od ${b}`);
} else {
    console.log(`Brojevi su jednaki`);
}

//Za dva uneta broja ispisati koji je veći a koji je manji.
let br1 = 33;
let br2 = 44;

if (br1 > br2) {
    console.log(`${br1} je veci od ${br2}`);
} else if (br2 > br1) {
    console.log(`${br2} je veci od ${br1}`);
} else {
    console.log(`Brojevi su jednaki`);
}

//Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temp = 44;

if (temp >= 0) {
    console.log(`Temperatura je u plusu`);
} else {
    console.log(`Temperatura je u minusu`);
};

//U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.
let pol = "muski";
let muski = "muski.jpg"
let zenski = "zenski.jpg"

if (pol == "muski") {
    document.body.innerHTML += `<img src=${muski}>`;
} else if (pol == "zenski") {
    document.body.innerHTML += `<img src=${zenski}>`;
} else {
    document.body.innerHTML += `<p>Odabrali ste nepostojeci pol</p>`;
}

//U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.
let danasnjiDan = new Date();
console.log(danasnjiDan);

if (danasnjiDan < 12) {
    console.log(`Trenutno je prepodne`);
} else if (danasnjiDan == 12) {
    console.log(`Tacno je podne`);
} else {
    console.log(`Trenutno je poslepodne`);
}

// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let godinaRodjenja = 2004;

if (godinaRodjenja > 2004) {
    console.log(`Osoba je maloletna`);
} else {
    console.log(`Osoba je punoletna`);
}

// Odrediti najveći od tri uneta broja
let d = 54;
let e = 224;
let f = 325;

if (d > e) {
    if (d > f) {
        console.log(`Broj ${d} je najveci`);
    } else {
        console.log(`Broj ${f} je najveci`);
    }
}
if (e > d) {
    if (e > f) {
        console.log(`Broj ${e} je najveci`);
    } else {
        console.log(`Broj ${f} je najveci`);
    }
}

//ILI

let g = 222;
let h = 222;
let i = 222;
let maks = g;

if (maks < h) {
    maks = h;
}
if (maks < i) {
    maks = i;
}
console.log(maks);

//ILI

let maxVr = Math.max(g, h, i);

if (g == maxVr) {
    console.log(`Najveci je ${g}`);
} else if (h == maxVr) {
    console.log(`Najveci je ${h}`);
} else if (i == maxVr) {
    console.log(`Najveci je ${i}`)
} if (g == h || g == i || h == i) {
    console.log(`Brojevi su jednaki`);
}

/* Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.
Za više od 50 poena učenik dobija ocenu 6,
za više od 60 poena učenik dobija ocenu 7,
za više od 70 poena učenik dobija ocenu 8,
za više od 80 poena učenik dobija ocenu 9 i
za više od 90 poena učenik dobija ocenu 10.
*/
let brojBodova = -90;

if (brojBodova > 100) {
    console.log(`Unet neispravan broj bodova`);
} else if (brojBodova >= 90) {
    console.log(`Ocena je 10`);
} else if (brojBodova >= 80) {
    console.log(`Ocena je 9`);
} else if (brojBodova >= 70) {
    console.log(`Ocena je 8`);
} else if (brojBodova >= 60) {
    console.log(`Ocena je 7`);
} else if (brojBodova >= 50) {
    console.log(`Ocena je 6`);
} else if (brojBodova < 50) {
    console.log(`Ispit nije polozen`);
}

// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.
let danUNedelji = danasnjiDan.getDate();

if (danUNedelji == 0 || danUNedelji == 6) {
    console.log(`Neradni je dan`);
} else if (danUNedelji > 0 || danUNedelji < 6) {
    console.log(`Radni dan je`);
}

// Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim  slučajevima ispisati dobro veče.
let vremeSada = danasnjiDan.getTime();

if (vremeSada >= 12 && vremeSada < 18) {
    console.log(`Dobar dan`);
} else if (vremeSada >= 18) {
    console.log(`Dobro vece`);
} else {
    console.log(`Dobro jutro`);
}

//Uporediti dva uneta datuma i ispisati koji od njih je raniji.
let nekiDatum1 = "2022/04/11";
let nekiDatum2 = "2022/25/22";

if (nekiDatum1 > nekiDatum2) {
    console.log(`nekiDatum1 je veci`);
} else if (nekiDatum2 > nekiDatum1) {
    console.log(`nekiDatum2 je veci`);
} else {
    console.log(`Datumi su jednaki`);
}

//Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
let sat = danasnjiDan.getHours();
console.log(sat);

if (sat < 9) {
    console.log(`Firma ne radi`);
} else if (sat >= 17) {
    console.log(`Firma ne radi`);
} else {
    console.log(`Firma radi`);
}

//Knjiga ima n poglavlja (broj n unosite sami). Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana. Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.

let poglavlja = 23;
let procitanoPrvog = 9;
let procitanoDrugog = procitanoPrvog + 2;
let preostalaPoglavlja = poglavlja - (procitanoPrvog + procitanoDrugog);
console.log(preostalaPoglavlja);

//Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno. Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.

let pera = 200;
let mika = 2200;
let dobijenKusur = 100;
let cenaDzempera = (pera + mika - dobijenKusur) / 2;
console.log(`Cena jednog dzempera je ${cenaDzempera} dinara`);
let mikinKusur = mika - cenaDzempera;
console.log(`Mika treba da dobije ${mikinKusur} dinara`);
let perinKusur = pera - cenaDzempera;
if (perinKusur < 0) {
    console.log(`Pera treba da doplati jos ${perinKusur - 2 * perinKusur} dinara`);
} else {
    console.log(`Pera treba da dobije ${perinKusur} dinara`);
}

//Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
let lekarPrviStart = 10;
let lekarPrviKraj = 13;
let lekarDrugiStart = 12;
let lekarDrugiKraj = 15;

if (lekarPrviKraj <= lekarDrugiStart) {
    console.log(`Nema preklapanja`);
} else if (lekarDrugiKraj <= lekarPrviStart) {
    console.log(`Nema preklapanja`);
} else {
    console.log(`Smene se preklapaju`);
}

//Za uneti broj ispitati da li je paran ili nije.
let xx = -2;
if (xx % 2 == 0) {
    console.log(`Broj je deljiv sa 2`);
} else {
    console.log(`Broj nije deljiv sa 2`);
}

//Za uneti broj ispisati da li je deljiv sa 3 ili ne.
let cc = 34;
if (cc % 3 == 0) {
    console.log(`Broj je deljiv sa tri`);
} else {
    console.log(`Broj nije deljiv sa tri`);
}

//Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
let tt = 122;
let ii = 22;
let oo = 10;
let maksimum = tt;
let sredina = ii;
let minimum = oo;
let zbir = tt + ii + oo;
if (ii > maksimum) {
    maksimum = ii;
}
if (oo > maksimum) {
    maksimum = oo;
}
if (ii < minimum) {
    minimum = ii;
}
if (tt < minimum) {
    minimum = tt;
}

sredina = zbir - maksimum - minimum;
console.log(`Najveci je ${maksimum}, srednji je ${sredina}, najmanji je ${minimum}`);

let hhh = 7;
console.log(hhh % 1);

//Za učitani broj ispitati da li je ceo.

let pp = 5;

if (pp % 1 == 0) {
    console.log(`Broj je ceo`);
} else {
    console.log(`Broj nije ceo`);
}

//Učitati dva cela broja i ispitati da li je veći od njih paran. 
let yy = 3;
let uu = 43;

if (yy > uu) {
    if (yy % 2 == 0) {
        console.log(`Broj ${yy} je paran`);
    } else {
        console.log(`Broj ${yy} je neparan`);
    }
}

if (uu > yy) {
    if (uu % 2 == 0) {
        console.log(`Broj ${uu} je paran`);
    } else {
        console.log(`Broj ${uu} je neparan`);
    }
}

//Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.

let temper = -5;
if (temper < -15) {
    console.log(`Ekstremna temperatura`);
} else if (temper > 40) {
    console.log(`Ekstremna temperatura`);
} else {
    console.log(`Normalna temperatura`);
}

//Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako je deljiva sa 100 ali nije sa 400.

let blabla = 1988;
if (blabla % 400 == 0) {
    console.log(`Godina je prestupna`);
    } else if (blabla % 100 !== 0) {
        if (blabla % 4 == 0) {
        console.log(`Godina je prestupna`);
        }
} else {
    console.log(`Godina nije prestupna`);
}

//Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let sadaSati = 19;
let kojiDan = 5;

if (kojiDan == 0 || kojiDan == 6) {
    if (sadaSati >=10 && sadaSati < 18) {
        console.log(`Butik radi`);
    } else {
        console.log(`Butik ne radi`);
    }
} else if (kojiDan < 6 && kojiDan > 0) {
    if (sadaSati < 9 || sadaSati >= 20) {
     console.log(`Butik ne radi`);
    } else {
        console.log(`Butik radi`);
    } 
}

//Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve vi n određujete sami. 
//Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
//Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena. 

let v = 30;
let n = 1;
let kapacitet = Math.floor(v / 3);

if (kapacitet < n) {
    document.body.innerHTML += `<p style="color: red">NE. Iz lokala treba da izadje ${n - kapacitet} gostiju</p>`
} else {
    document.body.innerHTML += `<p style="color: green">DA</p>`
}

//Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let godinaSada = danasnjiDan.getFullYear();
let godisteOsobe = 2005;
let godineOsobe = godinaSada - godisteOsobe;
if (godineOsobe >= 18) {
    console.log(`Osoba je punoletna`);
} else {
    console.log(`Osoba je maloletna`);
}

//Ministarstvo zdravlja jedne zemlje je povodom pandemije virusa donelo sledeću odredbu: "Ukoliko je procenat pozitivno testiranih stanovnika u odnosu na ukupno testirane stanovnike u jednom danu veći od 30%, i ako je pored toga i procenat pozitivno testiranih stanovnika veći od 10% ukupnog broja stanovnika te zemlje, automatski se uvodi vanredno stanje." Za proizvoljno unete vrednosti: ukupan broj stanovnika zemlje, ukupan broj testiranih u jednom danu i ukupan broj pozitivno testiranih u tom danu, na ekranu crvenom bojom ispisati VANREDNO STANJE, ukoliko treba automatski uvesti vanredno stanje prema odredbi koju je ministarstvo donelo (u suprotnom ne ispisivati ništa).
let ukTestUDanu = 1000;
let pozTestUDanu = 100;
let ukupanBrStan = 1000;

if (pozTestUDanu > (ukTestUDanu * 0.3)) {
        document.body.innerHTML += `<p style="color: red">Vanredno stanje</p>`
} else if (pozTestUDanu > (ukupanBrStan * 0.1)) {
        document.body.innerHTML += `<p style="color: red">Vanredno stanje</p>`
}

//Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

let unesiPol = "z";
let unesiGodine = 22;

if (unesiPol == "m" && unesiGodine >= 18) {
    console.log(`Osoba je musko i punoletna je`);
} else if (unesiPol == "m" && unesiGodine < 18) {
    console.log(`Osoba je musko i maloletna je`);
} else if (unesiPol == "z" && unesiGodine >=18) {
    console.log(`Osoba je zensko i punoletna je`);
} else {
    console.log(`Osoba je zensko i maloletna je`);
}

//Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 
let aaa = 2;
let bbb = 4;
let ccc = 6;

let maxxx = aaa;
let middd = bbb;
let minnn = ccc;
let zbirrr = aaa + bbb + ccc;

if (bbb > maxxx) {
    maxxx = bbb
} if (ccc > maxxx) {
    maxxx = ccc
} 

if (bbb < minnn) {
    minnn = bbb
} if (aaa < minnn) {
    minnn = aaa;
}

middd = zbirrr - maxxx - minnn;

console.log(`Najveci je ${maxxx}, srednji je ${middd}, najmanji je ${minnn}`);

//Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru). Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let opetGodina = 2016;

if ((opetGodina % 4 == 0) && ((opetGodina % 100 !== 0) || (opetGodina % 400 == 0))) {
    console.log(`Godina je prestupna`);
} else {
    console.log(`Godina nije prestupna`);
}

//Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let kojeVreme = 9;
let kojiJeDan = 6;

if ((kojeVreme >= 9 && kojeVreme < 20) && (kojiJeDan > 0 && kojiJeDan < 6)) {
    console.log(`Butik je otvoren`);
} else if ((kojeVreme >= 10 && kojeVreme < 18) && (kojiJeDan == 0 || kojiJeDan == 6)) {
    console.log(`Butik je otvoren`);
} else {
    console.log(`Butik je zatvoren`);
}