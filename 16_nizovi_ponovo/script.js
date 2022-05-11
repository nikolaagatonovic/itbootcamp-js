//1. Ispisati sve elemente niza od 5 stringova.

let niz = ['jedan', 'dva', 'tri', 'cetiri', 'pet'];
for (let i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

//2. Odrediti zbir elemenata celobrojnog niza.

let zbir = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}
console.log(zbir([1, 2, 3, 4, 5]));

//3. Odrediti proizvod elemenata celobrojnog niza.

let proizvod = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i]
    }
    return proizvod;
}
console.log(proizvod([1, 2, 3, 4, 5]));

//4. Odrediti srednju vrednost elemenata celobrojnog niza.

let srvr = niz => {
    let suma = 0;
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        brojac++;
    }
    return suma / brojac
}
console.log(srvr([1, 2, 3]));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maks = niz => {
    let maxvr = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (maxvr < niz[i]) {
            maxvr = niz[i];
        }
    }
    return maxvr
}
console.log(maks([1, 2, 3, 4, 5]));

//6. Odrediti minimalnu vrednost u celobrojnom nizu.

let min = niz => {
    let minvr = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (minvr > niz[i]) {
            minvr = niz[i];
        }
    }
    return minvr
}
console.log(min([1, 2, 3, 4, 5]));

// //7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let indeksMaks = niz => {
    let maxvr = niz[0];
    let ind = 0;
    for (let i = 0; i < niz.length; i++) {
        if (maxvr <= niz[i]) {
            maxvr = niz[i]
            ind = i;
        }
    }
    return ind;
}
console.log(indeksMaks([11, 4421, 32, 43, 54, 65, 5, -44]));

//8. Odrediti indeks minimalnog elementa celobrojnog niza.

let indeksMin = niz => {
    let minvr = niz[0];
    let ind = 0;
    for (let i = 0; i < niz.length; i++) {
        if (minvr >= niz[i]) {
            minvr = niz[i];
            ind = i;
        }
    }
    return ind
}
console.log(indeksMin([17, -299, -8883, 4, -335, 0, -8]));

//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let veciodsrvr = niz => {
    let brojac = 0;
    let brojac2 = 0;
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        brojac++;
    }
    let srvr = suma / brojac;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > srvr) {
            brojac2++
        }
    }
    return brojac2
}
console.log(veciodsrvr([1, 2, 3, 4, 50]));

//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

let pozitivni = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] >= 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(pozitivni([1, 2, -3, 4, 5, 6]));

//11. Odrediti broj parnih elemenata u celobrojnom nizu.

let parni = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            brojac++;
        }
    }
    return brojac
}
console.log(parni([1, 2, 3, 4, 5]));

//12. Odrediti broj parnih elemenata sa neparnim indeksom.

let parnisneparnim = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 !== 0 && niz[i] % 2 == 0) {
            brojac++;
        }
    }
    return brojac;
}
console.log(parnisneparnim([1, 2, 3, 4, 5, 4, 5, 4]));

//13. Izračunati sumu elemenata niza sa parnim indeksom.

let sumaparni = niz => {
    let suma = 0;
    let index = 0;
    for (let i = 0; i < niz.length; i++) {
        index = i;
        if (index % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma
}
console.log(sumaparni([2, 2, 3, 4, 5, 6]));

//14. Promeniti znak svakom elementu celobrojnog niza.

let promena = niz => {
    for (let i = 0; i < niz.length; i++) {
        niz[i] *= -1;
    }
    return niz;
}
console.log(promena([1, -2, -3, 4, 5, 6]));

//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promenineparnom = niz => {
    let index = 0;
    for (let i = 0; i < niz.length; i++) {
        index = i;
        if (index % 2 == 0 && niz[i] % 2 !== 0) {
            niz[i] *= -1;
        }
    }
    return niz;
}
console.log(promenineparnom([1, 2, 3, 4, -7, -7, 8, 8, 8, 8]));

//16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = niz => {
    let lista = `<ul>`;
    for (let i = 0; i < niz.length; i++) {
        lista += `<li>${niz[i]}</li>`
    }
    lista += `</ul>`
    document.body.innerHTML += lista;
}
kupovina(["jabuke", "mleko", "plazma", "slanina"]);

//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let imena = niz => {
    let tabela = `<table>`
    for (let i = 0; i < niz.length; i++) {
        tabela += `<tr><td>${niz[i]}</td></tr>`
    }
    tabela += `</table>`
    document.body.innerHTML += tabela;
    return niz
}
imena(["bulls", "celtics", "hornets", "pacers"]);

//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let slicice = niz => {
    let slike = "";
    for (let i = 0; i < niz.length; i++) {
        slike += `<img src="${niz[i]}">`
    }
    document.body.innerHTML += slike;
}
slicice(["slika1.png", "slika2.png", "slika3.png"]);

//19. Ispisati dužinu svakog elementa u nizu stringova. 

let duzinaelem = niz => {
    for(let i = 0; i < niz.length; i++) {
        console.log(niz[i].length);
    }
    return niz
}
duzinaelem(["jabuka", "nar", "breskva"]);

//20. Odrediti element u nizu stringova sa najvećom dužinom.

let duzinaNajveceg = niz => {
    let najduzi = niz[0];
    for(let i = 0; i < niz.length; i++) {
        if(najduzi.length < niz[i].length) {
            najduzi = niz[i];
        }
    }
    return najduzi
}
console.log(duzinaNajveceg(["loptica", "bazen", "tobogan", "digitron", "guma"]));

//21.Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let stringVeci = niz => {
    let duzSvih = 0;
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        duzSvih += niz[i].length;
    }
    let sredina = duzSvih / niz.length;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].length > sredina) {
            brojac++;
        }
    }
    return brojac
}
console.log(stringVeci(["loptica", "bazen", "tobogan", "digitron", "guma"]));

//22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
let slovoA = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].includes("a") || niz[i].includes("A")) {
            brojac++
        }
    }
    return brojac
}
console.log(slovoA(["loptica", "bazen", "tobogan", "digitron", "guma"]));

//ILI
//Ovaj nacin vraca koliko ukupno ima datih karaktera unutar niza OSIM ako se stavi BREAK
let slovoA2 = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        let rec = niz[i];
        for(let j = 0; j < rec.length; j++) {
            //rec[j] je karakter tj slovo u reci
            if(rec[j] == "a" || rec[j] == "A") {
                brojac++
                break
            }
        }
    }
    return brojac
}
console.log(slovoA2(["loptica", "bazen", "tobogan", "digitron", "guma"]));

//23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
let pocinjeA = niz => {
    let brojac = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i].startsWith("a")) {
            brojac++
        }
    }
    return brojac
}
console.log(pocinjeA(["loptica", "bazen", "tobogan", "digitron", "alpaka"]));

//24. 
let prepletiNizove = (nizA, nizB) => {
    let nizC = [];
    for(let i = 0; i < nizA.length; i++) {
        nizC[i * 2] = nizA[i];
        nizC[i * 2 + 1] = nizB[i]
    }
    return nizC
}
console.log(prepletiNizove(["loptica", "bazen", "tobogan", "digitron", "alpaka"], ["bulls", "celtics", "hornets", "pacers", "lakers"]));

//25.
let pomnoziNizove = (nizA, nizB) => {
    return nizA.map((_a, index) => nizA[index] * nizB[index]) //a je vrednost, index je index
}
console.log(pomnoziNizove([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// ako se neki parametar ne koristi stavi se crta

//26
let nekaFormula = niz => {
    return niz
    .filter((_b, index) => index < (niz.length / 2))
    .map((x, index) => (x + niz[niz.length - 1 - index]) / 2 )
}
console.log(nekaFormula([1, 2, 34, 23, 4, 20]));