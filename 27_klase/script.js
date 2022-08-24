import {Auto} from "./classes/auto.js"
import {Knjiga} from "./classes/knjiga.js"
import {Film} from "./classes/film.js"
import {Pacijent} from './classes/pacijent.js'
import {Tarantula} from './classes/tarantula.js'

//Auto

let auto1 = new Auto('red', 'Fiat');
console.log(auto1);
console.log(auto1._boja);
console.log(auto1["_boja"]);
auto1.sviraj();

let auto2 = new Auto(["red", "orange", "yellow"], "Opel");
console.log(auto2._marka);
auto2.sviraj();

let auto3 = new Auto("blue", "Toyota");
auto3.sviraj();

let automobili = [auto1, auto2, auto3];
console.log(automobili);

//Knjiga

let knjiga1 = new Knjiga("Slepi casovnicar", "Ricard Dokins", 2012, 650, 1200);
let knjiga2 = new Knjiga("Silmarilion", "Dzon Ronald Ruel Tolkin", 2015, 450, 1900);
let knjiga3 = new Knjiga("Putevi slave", "Henfri Kob", 1950, 100, 900);
let knjiga4 = new Knjiga("Evolucija coveka", "vise autora", 2018, 700, 9000);
knjiga4.stampajSve()
console.log(knjiga2.obimna());
console.log(knjiga4.skupa());
console.log(knjiga2.dugackoIme());

let nizKnjiga = [knjiga1, knjiga2, knjiga3]
nizKnjiga.forEach(knjiga => {
    if(knjiga.dugackoIme()) {
        console.log(knjiga.autor);
    }
    if(knjiga.skupa() && knjiga.obimna()){
        console.log(knjiga.naslov);
    }
    knjiga.stampajSve()
})

let ukupnaCena = () => {
    let uk = 0;
    nizKnjiga.forEach(k => {
        uk += k.cena
    })
    return uk
}
console.log(`Ukupna cena svih knjiga iz niza je: ${ukupnaCena(nizKnjiga)} dinara`);

let prosekCena = () => {
    let ukupna = ukupnaCena(nizKnjiga);
    let brojKnjiga = nizKnjiga.length;
    return ukupna / brojKnjiga
}
console.log(`Prosecna cena knjiga iz niza iznosi: ${prosekCena(nizKnjiga)} dinara`);

let cenaStranice = () => {
    let brojStranica = 0;
    let ukupna = ukupnaCena(nizKnjiga)
    nizKnjiga.forEach(k => {
        brojStranica += k.brojStrana;
    })
    console.log(brojStranica);
    return ukupna / brojStranica
}
console.log(`Prosecna cena stranice svih knjiga iz niza bila bi: ${cenaStranice(nizKnjiga)} dinara`);

//Film

let film1 = new Film("Odiseja u svemiru", "Stenli Kjubrik", 1968)
let film2 = new Film("Dobar Los Zao", "Serdjo Leone", 1966)
let film3 = new Film("Kum", "Frensis Ford Kopola", 1972)

console.log(`Naslov filma: ${film1.naslov}, od rezisera ${film1.reziser}, izasao je ${film1.godina} godine`);
console.log(`Naslov filma: ${film2.naslov}, od rezisera ${film2.reziser}, izasao je ${film2.godina} godine`);
console.log(`Naslov filma: ${film3.naslov}, od rezisera ${film3.reziser}, izasao je ${film3.godina} godine`);

film1.stampaj();
film2.stampaj();
film3.stampaj();

//Pacijent

let pacijent1 = new Pacijent('Milan', 188, 110)
let pacijent2 = new Pacijent('Dragoslav', 180, 100)
let pacijent3 = new Pacijent('Ana', 160, 53)

let nizPacijenata = [pacijent1, pacijent2, pacijent3]
console.log(pacijent1);

pacijent1.stampaj()
pacijent1.bmi()


let minTezina = () => {
    let min = nizPacijenata[0].tezina;
    nizPacijenata.forEach(pacijent => {
    if(min > pacijent.tezina) {
        min = pacijent.tezina;
        }
    });
    return min 
}
console.log(minTezina(nizPacijenata));

let najlaksiPacijent = () => {
    let najlaksi = minTezina(nizPacijenata)
    nizPacijenata.forEach(pacijent => {
        if(pacijent.tezina == najlaksi) {
            console.log(`${pacijent.ime}, ${pacijent.visina}, ${pacijent.tezina}`);
        }
    })
}
najlaksiPacijent()

let najvecaBMI = () => {
    let prvi = nizPacijenata[0]
    nizPacijenata.forEach(p => {
        if(prvi < p.bmi()) {
            prvi = p.bmi()
        }
    })
    return prvi
}
console.log(najvecaBMI());

let imaSlovoA = () => {
   let lala = []
   nizPacijenata.forEach(p => {
    if(p.ime.includes('a') || p.ime.includes('A')) {
        lala += " " + p.ime;
        }
   })
   return lala
}
console.log(imaSlovoA())

let srVisina = () => {
    let visina = 0;
    nizPacijenata.forEach(p => {
        visina += p.visina;
    })
    return visina / nizPacijenata.length;
}
console.log(srVisina());

console.log(pacijent3.kritican());
nizPacijenata.forEach(pacijent => {
    console.log(`${pacijent.ime}: ${pacijent.bmi()}`);
})
//return `${pac.ime}, ${pac.visina}, ${pac.tezina}`
//Tarantula


let tarantula1 = new Tarantula("Brachypelma", "crno-crvena", "16", false);
let tarantula2 = new Tarantula("Chromatopelma", "plavo-crvena", "15", false);
let tarantula3 = new Tarantula("Theraphosa", "braon", "23", false);
let tarantula4 = new Tarantula("Pterinochillus", "oranz", "13", true);
let tarantule = [tarantula1, tarantula2, tarantula3, tarantula4];
console.log(tarantule);