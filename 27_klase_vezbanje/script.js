/*1. Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.*/
import { Boja } from "./classes/boja.js"

let boja1 = new Boja(100, 33, 221);
let boja2 = new Boja(110, 33, 221);
let boja3 = new Boja(120, 33, 221);

let nizBoja = [boja1, boja2, boja3]

let ispitajSlicnost = (a, b) => {
        if(a.talDuzina == b.talDuzina && a.zasicenje == b.zasicenje && a.intenzitet == b.intenzitet) {
            console.log('Boje su iste');
        } else {
            console.log('Boje su razlicite');
        }
}
ispitajSlicnost(boja3, boja2)

let srednjaTalDuzina = () => {
    let talasna = 0;
    nizBoja.forEach(b => {
        talasna += b.talDuzina;
    })
    return talasna / nizBoja.length;
}
console.log(srednjaTalDuzina());

/*2. Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godinu.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.*/
import { Datum } from "./classes/datum.js";

let datum1 = new Datum(22, 5, 2015);
let datum2 = new Datum(22, 5, 2015);

let ranijiDatum = (a, b) => {
    if((a.godina > b.godina) || (a.godina == b.godina && a.mesec > b.mesec) || (a.godina > b.godina && a.mesec > b.mesec && a.dan > b.dan)) {
       console.log("Prvi datum je veci");
    } else if((b.godina > a.godina) || (b.godina == a.godina && b.mesec > a.mesec) || (b.godina > a.godina && b.mesec > a.mesec && b.dan > a.dan)) {
        console.log("Drugi datum je veci");
    } else if (a.godina == b.godina && a.mesec == b.mesec && a.dan == b.dan) {
        console.log("Datumi su jednaki");
    }
}
ranijiDatum(datum1, datum2)

/*3. Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.
*/
import { Radnik } from "./classes/radnik.js";

let radnik1 = new Radnik("Petar", 75000);
let radnik2 = new Radnik("Danilo", 75000);
let radnik3 = new Radnik("Jasmina", 60000);

let nizRadnika = [radnik1, radnik2, radnik3]

let maksPlata = () => {
    let prviRadnik = nizRadnika[0].plata;
    nizRadnika.forEach(r => {
       if(prviRadnik < r.plata) {
        prviRadnik = r.plata;
       }
    });
    return prviRadnik;
}
console.log(maksPlata());

let maksPlataOsoba = () => {
    nizRadnika.forEach(r => {
        if(r.plata == maksPlata()) {
            console.log(r.ime, r.plata);
        }
    })
}
maksPlataOsoba()

/*4. Kreirati klasu Autobus koja ima podatke o registarskom broju autobusa i o broju sedišta u autobusu.
Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
Napraviti odgovarajuće getere i setere.
Napraviti metodu koja ispisuje podatke o autobusu.
Napraviti niz autobusa.
Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.
Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.
Napraviti funkciju ljdi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.*/
import { Autobus } from "./classes/autobus.js";

// let autobus1 = new Autobus("NS1245", 50);
// let autobus2 = new Autobus("NS2222", 120);
// let autobus3 = new Autobus("NS1112", 150);
// let autobus4 = new Autobus("N77722", 20);

// autobus1.podaci();

// let nizAutobusa = [autobus1, autobus2, autobus3, autobus4];

// let ukupnoSedista = () => {
//     let sedista = 0;
//     nizAutobusa.forEach(a => {
//         sedista += a.brSedista;
//     })
//     return sedista
// }
// console.log(ukupnoSedista());



// let ljudi = (a) => {
//     return a <= ukupnoSedista()
// }
// console.log(ljudi(241));
// console.log(ukupnoSedista());

// let maksSedista = () => {
//     let maks = nizAutobusa[0];
//     nizAutobusa.forEach(c => {
//         if(maks.brSedista < c.brSedista) {
//             maks.brSedista = c.brSedista
//             maks.podaci()
//         }
//     });
//     return maks
// }
// maksSedista();


let autobus1 = new Autobus('NS2245', 50);
let autobus2 = new Autobus('NS2222', 120);
// let autobus3 = new Autobus('NS1112', 150);
// let autobus4 = new Autobus('N77722', 20);

autobus1.podaci();

let nizAutobusa = [autobus1, autobus2];

const ukupnoSedista = busArr => {
  return busArr.reduce((acc, obj) => {
    return acc + obj._brSedista;
  }, 0);
};
console.log(ukupnoSedista(nizAutobusa), 'ukupnoSedista');
const maksSedista = busArr => {
  const maxSedista = busArr.sort((a, b) => b._brSedista - a._brSedista)[0];
  return maxSedista.podaci();
};
maksSedista(nizAutobusa);

const ljudi = (brLjudi, busArr) => brLjudi <= ukupnoSedista(busArr);

console.log(ljudi(241, nizAutobusa));
console.log(ljudi(170, nizAutobusa));
