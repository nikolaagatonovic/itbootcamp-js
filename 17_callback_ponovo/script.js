function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let nekiDiv = document.getElementById("prviDiv");
    nekiDiv.innerHTML += poruka + `<br>`;
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " ";
    }
    cb(poruka)
}

let a = [5, -9, 11, 8, 2, 1]
let b = ["Nikola", "Suzana", "Marko", "Milos"];
let c = ["slika1.png", "slika2.png", "slika3.png"]

ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisKonzola)
ispisNiza(b, ispisStranica)

ispisNiza(a, par => {
    console.log(par);
    console.log(a);
});

ispisNiza(a, par => {
    let nekiDiv = document.getElementById("prviDiv");
    nekiDiv.innerHTML += par + `<br>`
});

a.forEach(elem => {
    console.log(`Element: ${elem}`);
})

a.forEach((elem, i) => {
    console.log(`Index: ${i}, Element: ${elem}`);
});

function ispis(poruka) {
    console.log(`Element niza je: ${poruka}`);
}
a.forEach(ispis);
//forEach petlja poziva cb funkciju za svaki elem niza. a prosledjuje taj elem niza kao parametar cb funkciji. Npr. za niz a = [5, 6, 7], a.forEach poziva:
// ispis(5)
// ispis(6)
// ispis(7)
b.forEach(ispis);

//

a.forEach(e => {
    console.log(`Element niza je: ${e}`);
});

b.forEach((e, i) => {
    console.log(`Element ${e} sa indeksom ${i}`);
})

//Ispis elemenata niza sa parnim indeksom
a.forEach((e, i) => {
    if(i % 2 == 0) {
        console.log(`${e}`);
    }
});

//ZADACI IZ NIZOVA

//1. Ispisati sve elemente niza od 5 stringova.

a.forEach(e => {
    console.log(e);
});

//2. Odrediti zbir elemenata celobrojnog niza.
let suma = 0;
a.forEach(e => {
    suma += e;
});
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.
let proizvod = 1;
a.forEach(e => {
    proizvod *= e;
});
console.log(proizvod);

//4. Odrediti srednju vrednost elemenata celobrojnog niza.
let srvr = suma / a.length;
console.log(srvr);

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let najveci = a[0];
a.forEach(e => {
    if(najveci < e) {
        najveci = e;
    }
});
console.log(najveci);

//6. Odrediti minimalnu vrednost u celobrojnom nizu.
let najmanji = a[0];
a.forEach(e => {
    if(najmanji > e) {
        najmanji = e;
    }
});
console.log(najmanji);

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
let ind = 0;
najveci = a[0];
a.forEach((e, i) => {
    if(najveci < e) {
        najveci = e;
        ind = i;
    }
});
console.log(ind);

//8. Odrediti indeks minimalnog elementa celobrojnog niza.
ind = 0;
najmanji = a[0];
a.forEach((e, i) => {
    if(najmanji > e) {
        najmanji = e;
        ind = i;
    }
});
console.log(ind);

//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brojac = 0;
a.forEach((e, i) => {
    if(e > srvr) {
        brojac++
    }
});
console.log(brojac);

//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
suma = 0;
a.forEach(e => {
    if(e >= 0) {
        suma += e;
    }
})
console.log(suma);

//11. Odrediti broj parnih elemenata u celobrojnom nizu.
brojac = 0;
a.forEach(e => {
    if(e % 2 == 0) {
        brojac++
    }
});
console.log(brojac);

//12. Odrediti broj parnih elemenata sa neparnim indeksom.
brojac = 0;
a.forEach((e, i) => {
    if(i % 2 !== 0 && e % 2 == 0) {
        brojac++
    }
});
console.log(brojac);

//13. Izračunati sumu elemenata niza sa parnim indeksom.
suma = 0;
a.forEach((e, i) => {
    if(i % 2 == 0) {
        suma += e;
    }
});
console.log(suma);

//14. Promeniti znak svakom elementu celobrojnog niza.
a.forEach(e => {
    e *= -1;
    console.log(e);
});

//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
a.forEach((e, i) => {
    if(i % 2 == 0 && e % 2 !== 0) {
        e *= -1;
    }
    console.log(e);
});

//16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let lista = `<ul>`
b.forEach(e => {
    lista += `<li>${e}</li>`
});
lista += `</ul>`
document.body.innerHTML += lista;

//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let kupovina = b => {
let tabela = `<table>`
b.forEach(e => {
    tabela += `<tr><td>${e}</td></tr>`
});
tabela += `</table>`
return tabela
}
document.body.innerHTML += kupovina(b);

//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let nekeSlike = c => {
let slika = "";
c.forEach(e => {
    slika += `<img src=${e}>`;
});
return slika
}
document.body.innerHTML += nekeSlike(c)

//18b. U nizu stringova ispisati sve one koji sadrze:
//- maksimalnu duzinu
//- minimalnu duzinu

let imena = ["Stefan", "Milica", "Djordje", "Milijana", "Ana", "Nenad", "Vuk", "Vladimir"];

let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if(maxDuzina < elem.length) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina
}
console.log(maxDuzinaNiza(imena))

let ispisStringSvojstvo = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem => {
        if(elem.length == md) {
            console.log (elem);
        }
    });
}

let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if(minDuzina > elem.length) {
            minDuzina = elem.length
        }
    });
    return minDuzina
}

ispisStringSvojstvo(imena, maxDuzinaNiza);
ispisStringSvojstvo(imena, minDuzinaNiza); 
// let ispisStringMinDuzina = niz => {
//     let md = minDuzinaNiza(niz);
//     niz.forEach(elem => {
//         if(elem.length == md) {
//             console.log(elem);
//         }
//     })
// }
// ispisStringMinDuzina(imena)
