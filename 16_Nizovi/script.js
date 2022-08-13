/*
i = indeks
nizBrojeva[i] = element
*/


let voce = ["jagoda", "jabuka", "malina", "kupina", "ananas", "breskva"];
console.log(voce);
console.log(voce[2]);

voce[2] = "tresnja";
console.log(voce);

//Ispis elemenata niza
console.log(voce[0], voce[1], voce[2]);

//Ispis elemenata niza koriscenjem petlje
for(let i = 0; i < voce.length; i++) {
    console.log(voce[i]);
}

console.log(voce.length);

voce = ["kajsija", "dunja", "visnja"];
console.log(voce);


let razno = [3, -15, false, "blabla"];
console.log(razno);

//2. Odrediti zbir elemenata celobrojnog niza
let brojevi = [150, 140, 360, 120, 180];
let suma = 0;
for(let i =0; i < brojevi.length; i++) {
    suma+=brojevi[i];
}
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.
let elementi = [2, 5, 6];
let proizvod = 1;
for (let i = 0; i < elementi.length; i++) {
    proizvod*=elementi[i];
}
console.log(proizvod);

//4. Odrediti srednju vrednost elemenata celobrojnog niza.
suma = 0;
for(let i =0; i < elementi.length; i++) {
    suma+=elementi[i];
}
let srVrednost = suma /elementi.length;
console.log(srVrednost)

//5.Odrediti maksimalnu vrednost u celobrojnom nizu.
let maksVr = brojevi[0];
for(let i = 0; i < brojevi.length; i++) {
    if(maksVr < brojevi[i]) {
        maksVr = brojevi[i];
    }
}
console.log(maksVr);

//6 Odrediti minimalnu vrednost u celobrojnom nizu.
let minVr = brojevi[0];
for(let i = 0; i < brojevi.length; i++) {
    if(minVr > brojevi[i]) {
        minVr = brojevi[i];
    }
}
console.log(minVr);

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
// 1. nacin
let indeks = 0;
for(let i=0; i<brojevi.length; i++) {
    if(maksVr == brojevi[i]) {
        indeks = i; // bez break ispisuje poslednji index maksimalnog elementa
        break; // sa break ispisuje prvi index maksimalnog elementa
    }
}
console.log(indeks);
//2. nacin
let maksVrednost = brojevi[0];
let maksIndeks = 0;
for(let i=0; i<brojevi.length; i++) {
    if(brojevi[i] >= maksVrednost) {
        //>= daje poslednji indeks dok > daje prvi indeks
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }
}
console.log(maksIndeks);

//8 Odrediti indeks minimalnog elementa celobrojnog niza.
indeks = 0;
for(let i=0; i<brojevi.length; i++) {
    if(minVr == brojevi[i]) {
        indeks = i;
        break; 
    }
}
console.log(indeks);

//9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let niz2 = [22, 33, 44];
let srVr = 0;
let brojElemenata = 0;
for (i = 0; i < niz2.length; i++) {
    if (niz2[i] > srVr) {
        brojElemenata++;
    }
}
console.log(brojElemenata);

//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
suma = 0;
brojElemenata = 0;
for(i = 0; i < niz2.length; i++) {
    if (niz2[i] > 0){
        brojElemenata++;
        suma+=niz2[i];
    }
}
console.log(suma);

//11. Odrediti broj parnih elemenata u celobrojnom nizu.
brojac = 0;
for(i = 0; i < brojevi.length; i++){
    if(brojevi[i] % 2 == 0){
        brojac++;
    }
}
console.log(brojac);

//12. Odrediti broj parnih elemenata sa neparnim indeksom.
brojevi = [150, 140, 360, 120, 180, 193];
brojElemenata = 0;
for(i = 0; i < brojevi.length; i++){
    if(brojevi[i] % 2 == 0 && i % 2 != 0){
        brojElemenata++
    }
}
console.log(brojElemenata);

//13. Izračunati sumu elemenata niza sa parnim indeksom.
niz3 = [12, 32, 31, 1, 33];
suma = 0;
for (i = 0; i < niz3.length; i++) {
    if(i % 2 == 0){
        suma+=niz3[i];
    }
}
console.log(suma);

//14. Promeniti znak svakom elementu celobrojnog niza.
for(let i = 0; i < niz3.length; i++) {
    niz3[i] = -niz3[i];
}
console.log(niz3);

//15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
for(let i = 0; i < niz3.length; i++) {
    if(i % 2 == 0){
    niz3[i] = -niz3[i];
    }
}
console.log(niz3);

//16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let namirnice = ["banane", "jabuke", "hleb", "krompir"];
let lista = `<ul>`;
for(let i = 0; i < namirnice.length; i++){
    lista += `<li>${namirnice[i]}</li>`;
}
lista += `</ul>`;

document.body.innerHTML += lista;

//17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let timovi = ["tim1", "tim2", "tim3", "tim4"];
let tabela = `<table>`;
for(let i = 0; i < timovi.length; i++)
{
    tabela += `<tr><td>${timovi[i]}</td></tr>`;
}
tabela +=`</table>`;

document.body.innerHTML += tabela;

//18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike = [`<img src="img/slika1.png">`, `<img src="img/slika2.png">`, `<img src="img/slika3.png">`];
for(let i = 0; i < slike.length; i++){
    document.body.innerHTML += `${slike[i]}`;
}
//19. Ispisati dužinu svakog elementa u nizu stringova. 

elementi = ["element1", "element11", "element111", "element1111"];
for(let i = 0; i < elementi.length; i++){
    console.log(elementi[i].length)
}

//20. Odrediti element u nizu stringova sa najvećom dužinom.
let najDuz = elementi[0];
for (let i = 0; i < elementi.length; i++){
    if(najDuz < elementi[i]) {
        najDuz = elementi[i];
    }
}
console.log(najDuz);

//21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
elementi = ["element1", "element11", "element111", "element1111"];
suma = 0;
for(let i = 0; i < elementi.length; i++) {
    suma += elementi[i].length;
}
let prosek = suma / elementi.length;

console.log(`Prosecna duzina stringova je ${prosek}.`)

let duziElementi = 0;
for (let i = 0; i < elementi.length; i++){
    if(elementi[i].length > prosek){
        duziElementi++;
    }
}
console.log(`Broj stringova cija duzina je veca od prosecne duzine je ${duziElementi}`);

//22. Odrediti broj elemenata u nizu stringova koji sadrze slovo "a".
namirnice = ["banane", "jabuke", "hleb", "krompir"]
element = "";
let brojNamirnica = 0;
for(let i = 0; i < namirnice.length; i++){
    element+=namirnice[i];
    for(let g = 0; g < element.length; g++){
        if(element[g] == "a"){
            brojNamirnica++;
            break;
        }
    }
}
console.log(brojNamirnica);

// 2. NACIN
let brStringovaSaSlovomA = 0;
for(let i = 0; i < namirnice.length; i++) {
    let rec = namirnice[i];
    if(rec.includes("a") || rec.includes("A")) {
        brStringovaSaSlovomA++;
    }
}
console.log(brStringovaSaSlovomA);

//3. NACIN
brStringovaSaSlovomA2 = 0;
for(let i = 0; i < namirnice.length; i++) {
    let rec = namirnice[i];
    for(let j = 0; j < rec.length; j++) {
        if(rec[j] == "a" || rec[j] == "A") {
            brStringovaSaSlovomA2++;
            break;
        }
    }
}
console.log(brStringovaSaSlovomA2);
//23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
