function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById('container');
    // div.innerHTML = poruka; ako se brise stari zadrzaj diva
    div.innerHTML += poruka + "<br>";
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " ";
    }
    cb(poruka);//poziv callback funkcije
}

let a = [5, -9, 11, 9, 4];
let b = ["Vuk", "Nikola", "Jelena", "Jelena", "Anita"];
ispisNiza(a, ispisKonzola);// poziv fje ispisNiza
ispisNiza(a, ispisStranica);// poziv fje ispisNiza
ispisNiza(b, ispisKonzola);// poziv fje ispisNiza
ispisNiza(b, ispisStranica);// poziv fje ispisNiza

//pozivi fje preko anonimnih callback fja

ispisNiza(a, par => {
    console.log(par);
});

ispisNiza(a, function(par) {
    let div = document.getElementById("container");
    div.innerHTML += par + "<br>";
});

//forEach petlja
a.forEach(e => {
    console.log(`Element niza je: ${e}`);
})

b.forEach((e, i) => {
    console.log(`Element ${e} sa indeksom ${i}`);
})

// Ispis elemenata niza sa parnim indeksom
b.forEach((e, i) => {
    if(i % 2 == 0) {
        console.log(`Element ${e} ima paran indeks`);
    }
})

//1. Ispisati sve elemente niza od 5 stringova.
let c = ["string1", "string2", "string3", "string4", "string5"]
c.forEach(e => {
    console.log(e);
})
//2. Odrediti zbir elemenata celobrojnog niza.
// a = [22, 33, 44, 55]
// let suma = 0;
// a.forEach()

let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir;
}

console.log(zbirNiza(a));

//4. Odrediti proizvod elemenata celobrojnog niza.
let srvrNiza = niz => {
    let srvr = 0;
    niz.forEach(elem => {
        srvr += elem;
        
    });
    srvr /= niz.length
    return srvr
}

console.log(srvrNiza(a));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxNiz = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if(elem > max) {
            max = elem;
        }
    });
    return max;
}

let d = [15, 7, 8, 15, 0, 9, 15, 0, 2];
console.log(maxNiz(d)); 

/* Napisati fju koja vraca broj elemenata sa:
- maksimalnom vrednoscu
- minimalnom vrednoscu
*/

let brojMaxNiz = niz => {
    let max = maxNiz(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == max) {
            broj++
        }
    });
    return broj;
}

//16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let stavke = ["jabuke", "kruske", "visnje"];
let zaKupovinu = (lista, cb) => {
    let a = `<ul>`;
    for(let i = 0; i < lista.length; i++){
        lista += `<li>${stavke[i]}</li>`;
    }
    a = `</ul>`;
}
document.body.innerHTML += ;
// zaKupovinu(stavke, )

//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

function promeniZnakNeparnom (niz) {
    niz.forEach((element, indeks) => {
        if(indeks % 2 == 0 && element % 2 == 1) {
            niz[indeks] = -1 * element;
            //console.log(niz); Ukoliko treba da se ispise nakon svake promene znaka
        }
    });
    console.log(niz);
    return niz;
}
let rezultat3 = promeniZnakNeparnom([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(rezultat3);