let i;
for(i = 1; i <= 5; i++) {
    console.log(`Na redu je broj: ${i}`);
}
console.log(`Vrednost promenljive i jednaka je: ${i}`); //i = 6, undefined

//SCOPE (oblast vazenja)
//let (oblast vazenja unutar bloka u kojem je deklarisana)
// var (oblast vazenja unutar funkcije)

/*
let i; // globalna promenljiva koja vazi za ceo js fajl
var j; // globalna promenljiva koja vazi za ceo js fajl

if(i != j) {
    let k; // lokalna promeljiva koja vazi samo unutar if-a
    var m; // globalna promenljiva koja vazi za ceo js fajl
}*/

// Ispisati parne brojeve od 1 do 20
// Prvi nacin
for(i = 1; i<= 20; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

// Drugi nacin
for(i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Neparni brojevi 
for(i = 1; i <= 20; i += 2) {
    console.log(i);
}

// 1 Ispisati brojeve od 1 do 20 
for(i = 1; i <= 20; i += 1) {
    console.log(i);
}

// 2. Ispisati brojeve od 20 do 1 
for(i = 20; i >= 1; i -= 1) {
    console.log(i);
}

// 4. Ispisati dvostruku vrednost brojeva od 5 do 15
// for(i = 5; i <= 15; i += 1) {
//     console.log(i);
// }

// 5) Odrediti sumu brojeva od 1 do n
n = 3;
i = 1;
let suma =0;
while(i <= 3) {
    suma += i;
    i += 1;
}
console.log(suma);

//6) Odrediti sumu brojeva od n do m 


/* Pre for-petlje: proizvod = 1;
i = 8; proizvod = 8;
i = 9; proizvod = 8 * 9;
i = 10; proizvod = 8 * 9 * 10;
.....
i = 15; proizvod = 8 * 9 * 10 * ... 14 * 15
*/

// 15) Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n = 2;
m = 20;
i = n;
suma = 0;
for(i = n; i<=m; i++) {
    if(i % 10 == 4) {
        suma += i;
    }
    i++;
}
console.log(suma);

// 16) Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 7;
m = 10;
a = 7;
suma = 0;
i = n;

for(i = n; i <= m; i++) {
    if(i % a != 0) {
        suma += i;
    }
}
console.log(suma);

// 17) Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 7;
m = 28;
a = 7;
proizvod = 1;

for(i = n; i <= m; i++) {
    if(i % a == 0) {
        proizvod *= i;
    }
    i++;
}
console.log(`Proizvod brojeva koji su deljivi brojem ${a} je ${proizvod}`);

//18

/* // 1. Nacin */

let redovi = 6;
let tabela = `<table>`;
for(i=1; i<=redovi; i++) {
    if(i % 2 == 0) {
        tabela +=
    `
            <tr class="boja1">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
    else {
        tabela +=
        `
        <tr class="boja2">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;

//////////////////////////

let element = document.getElementById("naslov");
element.innerHTML += "****";

// 18) Drugi nacin

let hmtlTabela = document.getElementById("mojaTabela");
for(i = 1; i <= redovi; i++){
    if(i % 2 == 0) {
    hmtlTabela.innerHTML +=
    `
        <tr class="boja1">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>

    `;
}
else {
    hmtlTabela.innerHTML +=
    `
        <tr class="boja2">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>

    `;
}
}

// 19) Koristeci for petlju kreirati neuredjenu listu sa ugnjezdenim elementima kao sto je prikazano na slici sa desne strane.

let brLI = 10;
let lista = `<ul>`;
for (i=1; i <= brLI; i++) { 
    lista += `<li>Element ${i}</li> `;
    if (i % 3 == 2) {
        i++;
        lista += 
        `
        <ul>
            <li class="ljubicasti">Element ${i}</li>
        </ul>
        `;
    }
    lista += `</li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista;

let lista1 = `<ul>`;
for(i=1; i <= brLI; i++){
    if(i % 3 == 0) {
        lista1 +=
        `
        <ul>
            <li class="ljubicasti">Element ${i}</li>
        </ul>
        `;
    }
    else {
        lista1 += `<li>Element ${i}</li> `;
    }
}
lista1 += `</ul>`;
document.body.innerHTML += lista1;

// 20) Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

redovi = 8;
let ukupanBroj = 64;
let divovi = `<div>`;
    for(i = 1; i <= ukupanBroj; i++) {
        divovi+= `<span>${i}</span>`;
    }
divovi += `</div>`;
document.body.innerHTML += divovi;