let voce = ["jagoda", "jabuka", "malina"];
console.log(voce);
console.log(voce[2]);

voce[2] = "tresnja";
console.log(voce);

//Ispis elemenata niza
console.log(voce[0], voce[1], voce[2]);

//Ispis elemenata niza koriscenjem petlje
for (let i = 0; i < voce.length; i++) {
    console.log(voce[i]);
}
console.log(voce.length);

let razno = [3, -15.5, false, "bla bla bla", ["a", "b", "c"]];
console.log(razno);

//2. Odrediti zbir elemenata celobrojnog niza
let brojevi = [150, 140, 360, 120, 180];
let suma = 0;
for(let i = 0; i < brojevi.length; i++) {
    suma += brojevi[i];
}
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.
let brojevi2 = [11, 2, 4, 6];
let proizvod = 1;
for(let i = 0; i < brojevi2.length; i++) {
    proizvod *= brojevi2[i];
}
console.log(proizvod);

//4. Odrediti srednju vrednost elemenata celobrojnog niza.
let brojevi3 = [3, 33, 555, 14];
suma = 0;
for(let i = 0; i < brojevi3.length; i++) {
    suma += brojevi3[i];
}
let arsr = suma / brojevi3.length;
console.log(`Aritmeticka sredina je ${arsr}`);

//ILI

let aritmeticka = brojevi3 => {
    let suma = 0;
    let brojac = 0;
    for(let i = 0; i < brojevi3.length; i++) {
        suma += brojevi3[i];
        brojac++
    }
    return suma/brojac;
}
console.log(aritmeticka([2, 3, 4, 5, 6]));
console.log(aritmeticka(brojevi2));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let brojevi4 = [3222, 55, -22, 124, 23, 553];
let najveci = 0;
 for(let i = 0; i < brojevi4.length; i++) {
    if (brojevi4[i] > najveci) {
        najveci = brojevi4[i];
    }
 }
 console.log(najveci);

 //ILI

 let maxvr = brojevi4[0];
 for(let i = 0; i < brojevi.length; i++) {
     if(maxvr < brojevi4[i]) {
         maxvr = brojevi4[i];
     }
 }
 console.log(maxvr);

 //6. Odrediti minimalnu vrednost u celobrojnom nizu.
let brojevi5 = [33, -234, 2, -334, -34, 555];
let najmanji = 0;
for(let i = 0; i < brojevi5.length; i++) {
    if(brojevi5[i] < najmanji) {
        najmanji = brojevi5[i];
    }
}
console.log(najmanji);

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let brojevi6 = [23, 12, -333, 4345, -33];
maxvr = brojevi6[0];
let index = 0;
for(let i = 0; i < brojevi6.length; i++) {
    if(maxvr < brojevi6[i]) {
        maxvr = brojevi6[i]
        index = i;
    }
}
console.log(index);

//8. Odrediti indeks minimalnog elementa celobrojnog niza.

let brojevi7 = [3, 6, 33, -3, 345, 5];
let minvr = brojevi7[0];
index = 0;
for(let i = 0; i < brojevi7.length; i++) {
    if(minvr > brojevi7[i]) {
        minvr = brojevi7[i];
        index = i
    }
}
console.log(index);


//9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brojevi8 = [2, 3, 5333, 3432, 32, -2, -22];
suma = 0;
brojac = 0;
srvr = suma / brojevi8.length;
for(let i = 0; i < brojevi8.length; i++) {
    suma += brojevi8[i];
    if(srvr > brojevi8[i]) {
        brojac++;
    }
}
console.log(suma / brojevi8.length);
console.log(brojac);

//10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

let brojevi9 = [2, 3, -5, 77, -222, -223, -2, 3223];
suma = 0;
for(let i = 0; i < brojevi9.length; i++) {
    if(brojevi9[i] >= 0) {
        suma += brojevi9[i];
    }
}
console.log(suma);

//11. Odrediti broj parnih elemenata u celobrojnom nizu.

let brojevi10 = [2, 5, 234, 13, 27, 9, 4];
brojac = 0;
for(let i = 0; i < brojevi10.length; i++) {
    if(brojevi10[i] % 2 == 0) {
        brojac++
    }
}
console.log(brojac);

//12. Odrediti broj parnih elemenata sa neparnim indeksom.

let brojevi11 = [2, 3, 4, 4, 4, 6];
brojac = 0;
index = 0;
for(let i = 0; i < brojevi11.length; i++) {
    index = i;
        if(index % 2 !== 0 && brojevi11[i] % 2 == 0) {
            brojac++ 
    }
}
console.log(brojac);