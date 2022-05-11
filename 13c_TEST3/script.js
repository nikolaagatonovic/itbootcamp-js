//1 Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u konzoli. Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst „Radno vreme još uvek nije počelo“. Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst „Radno vreme je već završeno“.

let sadaSati = 16;
let sadaMinuta = 20;
// let danasnjiDatum = new Date();
// let sati = danasnjiDatum.getHours();
// let minuti = danasnjiDatum.getMinutes();
let dan = 2;//danasnjiDatum.getDay();
let sadaVreme = sadaSati * 60 + sadaMinuta;

 if ((dan > 0 && dan < 6) && sadaSati < 9) {
     console.log(`Radno vreme jos uvek nije pocelo`);
} else if ((dan > 0 && dan < 6) && sadaSati >= 17) {
     console.log(`Radno vreme je vec zavrseno`);
} else if (((dan > 0 && dan < 6) && (sadaSati > 9 && sadaSati < 17))) {
     console.log(`Do kraja radnog vremena ostalo je ${Math.floor((17 * 60 - sadaVreme) / 60)} sati i ${Math.floor((17 * 60 - sadaVreme) % 60)} minuta`);
} else {
    console.log(`Vikend je`);
} 

//Prilikom transporta buketa cveća u drugi grad, potrebno je platiti poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na cenu izračunate poštarine po sledećoj tarifi:
//➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na pošiljku preko 2kg pošta daje popust od 10%.
//➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika je cena poštarine bez popusta i sa popustom.
//Ispis treba da bude u formatu:
//Cena bez popusta je _____ dinara.
//Cena sa popustom je _____ dinara.

let postarina = 5;
let tezina = 1000;
let cena = postarina * tezina;
if (tezina >= 1000 && tezina <= 2000) {
    console.log(`Cena bez popusta je ${cena} dinara.`);
    console.log(`Cena sa popustom je ${cena * 0.95} dinara`);
} else if (tezina > 2000) {
    console.log(`Cena bez popusta je ${cena} dinara`);
    console.log(`Cena sa popustom je ${cena * 0.9} dinara`);
}

//Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u radnji.
//➢ Primer 1:
//○ Broj ruža u cvećari 101
//○ Broj redovnih kupaca 25
//○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po 5 ruža).
//➢ Primer 2:
//○ Broj ruža u cvećari 100
//○ Broj redovnih kupaca 25
//○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po 4 ruže)

let dostupnoRuza = 28;
let brojKupaca = 4;
let brojac = 0;
let i = brojKupaca;
while (i <= dostupnoRuza) {
if (dostupnoRuza % brojKupaca !== 0){
    dostupnoRuza++;
    brojac++;
    }
    i++
}
    console.log(`Broj ruza koje treba da dokupi je ${brojac}`);
    
//Zadatak 4
//➢ Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m odredite sami. U konzoli ispisati:
//● U prvom redu ispisati sumu
//● U drugom redu ispisati broj brojeva
//● U trećem redu ispisati proizvod sume i broja brojeva

let n = 4;
let m = 21;
let suma = 0;
brojac = 0;
for (i = n; i <= m; i++) {
    if (i % 7 == 0 && i % 2 !== 0) {
        suma += i;
        brojac++
    }
}
console.log(suma);
console.log(brojac);
console.log(suma * brojac);

//Zadatak 5
//➢ Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i m).
//➢ Rezultat računanja ispisati u konzoli.

n = 2;
m = 18;
let zbir1 = 0;
let zbir2 = 0;
for (i = n; i <= m; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        zbir1 += i;
    }
    if (i % 10 == 3) {
        zbir2 += i;
    }
}
console.log(zbir1 - zbir2);