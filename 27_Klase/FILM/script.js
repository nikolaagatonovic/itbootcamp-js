import {Film} from "./film.js";

let film0 = new Film("Neki naslov", "Neki reziser", 2001, [9, 7, 9, 8.2, 6]);
console.log(film0.ocene);
film0.ocene.forEach(o => {
    console.log(o);
});

let film1 = new Film("Gladiator", "Ridley Scott", 2000, [8, 7, 9, 10]);
let film2 = new Film("Braveheart", "Mel Gibson", 1995, [8, 9, 10, 10]);
let film3 = new Film("Spartacus", "Stanley Kubrick", 1960, [7, 7, 6, 8]);

let filmovi = [film1, film2, film3];
console.log(film1.prosek());

function vekFilmova(niz, vek) {
    niz.forEach((elem) => {
        if((elem.godinaIzdanja / 100) % 1 == 0) {
            if(elem.godinaIzdanja / 100 == vek + 1) {
                console.log(elem.naslov);
                }
            } else if (Math.floor(elem.godinaIzdanja / 100 + 1) == vek) {
                console.log(elem.naslov);
        }
    });
}
vekFilmova(filmovi, 19);

function prosecnaOcena(niz) {
    let sumaOcena = 0;
    let brojac = 0;
    let prosek = 0;
    niz.forEach((elem) =>{
        elem.ocene.forEach((el) => {
            sumaOcena += el;
            brojac++;
        });
    });
    prosek = sumaOcena / brojac;
    return prosek;
}
console.log(prosecnaOcena(filmovi));

//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
let najboljeOcenjeni = niz => {
    let najbolji = niz[0]; // Cuva objekat = najbolji film
    niz.forEach(film => {
        if(film.prosek() > najbolji.prosek()) {
            najbolji = film;
        }
    });
    return najbolji;
}
console.log(`Najbolje ocenjeni`);
najboljeOcenjeni(filmovi).stampaj();

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
/*
film1 => 8.5
film2 => 7

globalni => 8

film1 - globalni = 8.5 - 8 = 0.5 = 0.5
film2 - globalni = 7 - 8 = -1 = 1
*/
// // Anitino
// let osrednjiFilm = niz => {
//     let prosekFilmova = prosecnaOcena(niz);
//     let min = Math.abs(prosekFilmova - niz[0].prosek());
//     let osrednji = niz[0].naslov;
//     niz.forEach(movie => {
//         if(Math.abs(prosekFilmova - movie.prosek()) < min) {
//             osrednji = movie.title;
//         }
//     });
//     return osrednji
// }
// console.log(osrednjiFilm(filmovi));

let osrednjiFilm = niz => {
    let najbliziObj = niz[0]; //Pretpostavka da je prvi film (objekat) najblizi generalnom proseku
    let prosecnaGlobal = prosecnaOcena(niz);
    let najbliziRazlika = Math.abs(najbliziObj.prosek() - prosecnaGlobal);

    niz.forEach(f => {
        let razlikaTekuceg = Math.abs(najbliziObj.prosek() - prosecnaGlobal); // koliko se tekuci film razlikuje od globalne prosecne oene
        if(najbliziRazlika > razlikaTekuceg) {
            najbliziRazlika = razlikaTekuceg;
            najbliziObj = f;
        }
    });
    return najbliziObj;
}

    filmovi.forEach(f => {
    console.log(f.naslov, f.prosek()); //prosek je metod pa se poziva sa zagradama
    });

console.log("Osrednji film je: " + osrednjiFilm(filmovi).naslov);

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
    let najbolji = najboljeOcenjeni(niz);
    let min = najbolji.ocene[0];
    niz.forEach(film => {
        if(film == najbolji) {
            film.ocene.forEach(ocena => {
                if(ocena < min) {
                    min = ocena;
                }
            });
        }
    });
    console.log(min);
}
najmanjaOcenaNajboljeg(filmovi)

//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = niz => {
    let minOcena = niz[0].ocene[0];
    for(let i = 0; i < niz.length; i++) {
        for(let k = 0; k < niz[i].ocene.length; k++) {
            if(niz[i].ocene[k] < minOcena){
                minOcena = niz[i].ocene[k];
            }
        }
    }
    return minOcena;
}
console.log(najmanjaOcena(filmovi));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
let iznadOcene = (niz, ocena) => {
    let boljeOcenjeni = [];

    niz.forEach(film => {
        if(film.prosek() > ocena){
            boljeOcenjeni.push(film);
        }
    });
    return boljeOcenjeni;
}
// console.log(film1.prosek(), film2.prosek(), film3.prosek());
console.log(iznadOcene(filmovi, 7));