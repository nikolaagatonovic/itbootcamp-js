//1. Ispisati brojeve od 1 do 20
let i
for (i = 1; i <= 20; i++) {
    console.log(i);
}

//2. od 20 do 1
for (i = 20; i >= 1; i--) {
    console.log(i);
}

//3. Ispisati parne brojeve od 1 do 20;
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } 
}

//ILI

for (i = 2; i <= 20; i += 2) {
    console.log(i);
}

//3.b. Ispisati neparne brojeve od 1 do 20
for (i = 1; i <= 20; i +=2){
    console.log(i);
}

//4. Ispisati dvostruku vrednost brojeva od 5 do 15
for(i = 5; i <= 15; i++) {
console.log(i*2);
}

//5. Odrediti sumu brojeva od 1 do n;
let n = 5;
let suma = 0;
for(i = 1; i <= n; i++) {
    suma+=i;
}
console.log(suma);

//6. Odrediti sumu brojeva od n do m
n = 3;
let m = 5;
suma = 0;
for(i = n; i <= m; i++ ) {
    suma += i;
}
console.log(suma);

//7. Odrediti proizvod brojeva od n do m
n = 3;
m = 7;
let proizvod = 1;
for (i = n; i <= m; i++) {
    proizvod *= i;
}
console.log(proizvod);

//8. Odrediti sumu kvadrata brojeva od n do m *
n = 3;
m = 20;
suma = 0;
for(i = n; i <= m; i++) {
    suma += i**2;
}
console.log(suma);

//9. Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
n = 4;
let slika;
for (i = 1; i <= n; i++) { 
        document.body.innerHTML += `<img src="img/${i % 3}.png">`;
      console.log(i);
}

document.body.innerHTML += `<hr>`

//ILI
for (i = 0; i < n; i++) {
    let k = i % 3; // k = 0, 1, 2, 0, 1, 2 ....
    document.body.innerHTML += `<img src="img/${k}.png">`;
} // Ako bi slike bile imenovane 1.png, 2.png 3.png onda bi bilo {k+1}

document.body.innerHTML += `<hr>`

//ILI
n = 4;
for (i = 1; i <= n; i++) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<img src="img/1.png">`
    } else if ( i % 3 == 2) {
        document.body.innerHTML += `<img src="img/2.png">`
    } else {
        document.body.innerHTML += `<img src="img/0.png">`
    }
}
document.body.innerHTML += `<br>`


//10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
n = 20;
m = 100;
proizvod = 1;
for (i = n; i <= m; i++) {
    if (i % 11 == 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

//ILI
proizvod = 1;
for (i = 22; i <= 100; i+=11) {
    proizvod *= i;
}
console.log(proizvod);

//11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
n = 5;
m = 150;
let brDeljivih = 0;
for (i = n; i <= m; i++) {
    if (i % 13 == 0) {
        brDeljivih += 1;
    }
}
console.log(brDeljivih);

//12. Ispisati aritmetičku sredinu brojeva od n do m.
n = 1;
m = 100;
suma = 0;
brDeljivih = 0;
for (i = n; i <= m; i++) {
    suma += i;
    brDeljivih +=1
}
console.log(suma);
console.log(brDeljivih);
let arsr = suma / brDeljivih;
console.log(arsr);

//13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
n = -2;
m = 90;
brPozitivnih = 0;
brNegativnih = 0;
for (i = n; i <= m; i++) {
    if (i >= 0) {
        brPozitivnih ++;
    } else {
        brNegativnih ++;
    }
}
console.log(brPozitivnih);
console.log(brNegativnih);

//14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
n = 5;
m = 50;
brojac = 0;
for(i = n; i <= m; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        brojac++
    }
}
console.log(brojac);

//15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n = 4;
m = 24;
suma = 0;
brojac = 0
for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        brojac++;
        suma += i;
        console.log(i);
    }
}
console.log(brojac);
console.log(suma);

//16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 3;
m = 12;
a = 4;
suma = 0;
for (i = n; i <= m; i++) {
    if (i % a !== 0) {
    suma += i;
    }
}
console.log(suma);

//17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 3;
m = 8;
a = 2
proizvod = 1;
for (i = n; i <= m; i++) {
    if (i % a == 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

//18. Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“. Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

let tabela = document.getElementById("mojaTabela")
let redovi = 5;
for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        tabela.innerHTML += 
        `<tr class="boja1">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    } else {
        tabela.innerHTML += 
        `<tr class="boja2">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `;
    }
}

//19. Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let lista = document.getElementById("mojaLista")
let stavke = 6;
for (i = 1; i <= stavke; i++) {
    if (i % 3 == 0) {
        lista.innerHTML +=
    `
    <ul>
        <li class="crven">Element ${i}</li>
    </ul>
    `;
    } else {
        lista.innerHTML += `<li>Element ${i}</li>`;
    }
}

//20. Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

let brSpan = 64;
for (i = 1; i <= brSpan; i++) {
        document.body.innerHTML += `<span>${i}</span>`;
    if (i % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}


//Domaci 9. Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su. Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem 3 i neparni su (to su brojevi 3 i 15) Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3 (3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.
n = 1
m = 30;
let brDelioca = 0;
for (i = n; i <= m; i++) {
    if ((i % 3 == 0) && (i % 2 !== 0)) {
        brDelioca++;
    }
}
console.log(brDelioca);

// Domaci 10.1.
/*Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.

Ulaz (vrednosti koje samostalno dodeljujete promenljivama) : 
Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i pocMinLek1)
Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i krajMinLek1)
Početak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i pocMinLek2)
Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek2 i krajMinLek2)

Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
Početak radnog vremena prvog lekara (izraženo u satima i minutima)
Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
Početak radnog vremena drugog lekara (izraženo u satima i minutima)
Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.*/

let pocSatLek1 = 19;
let pocMinLek1 = 0;
let krajSatLek1 = 20;
let krajMinLek1 = 00;

let pocSatLek2 = 11;
let pocMinLek2 = 00;
let krajSatLek2 = 20;
let krajMinLek2 = 00;

// let zajVremeSat = krajSatLek1 - pocSatLek2;
// let zajVremeMin = krajMinLek1 - pocMinLek2;
// let zajVremeSat2 = krajSatLek2 - pocSatLek1;
// let zajVremeMin2 = krajMinLek2 - pocMinLek1;

let pocLek1 = pocSatLek1 * 60 + pocMinLek1;
let pocLek2 = pocSatLek2 * 60 + pocMinLek2;
let krajLek1 = krajSatLek1 * 60 + krajMinLek1;
let krajLek2 = krajSatLek2 * 60 + krajMinLek2;

let poruka = "Vremena doktora se ne preklapaju";
let rezultat = poruka;

if (pocLek1 < pocLek2 && krajLek1 < krajLek2) {
    rezultat = krajLek1 - pocLek2;
} else if ((pocLek1 < pocLek2 && krajLek1 > krajLek2) || (pocLek1 == pocLek2 && krajLek1 > krajLek2) || (pocLek1 < pocLek2 && krajLek1 == krajLek2)) {
    rezultat = krajLek2 - pocLek2;
} else if (pocLek2 < pocLek1 && krajLek2 < krajLek1) {
   rezultat = krajLek2 - pocLek1;
} else if ((pocLek2 < pocLek1 && krajLek2 > krajLek1) || (pocLek2 == pocLek1 && krajLek2 > krajLek1) || (pocLek2 < pocLek1 && krajLek2 == krajLek1)) {
    rezultat = krajLek1 - pocLek1;
} else if (pocLek1 == pocLek2 && krajLek1 == krajLek2) {
    rezultat = krajLek2 - pocLek2 || krajLek1 - pocLek1;
} else {
    rezultat = poruka;
}


let vrednost = Math.floor(rezultat / 60) + " sata i " + rezultat % 60 + " minuta"
if (rezultat <= 0) {
    vrednost = poruka
}

if (pocSatLek1 < 10) {
    pocSatLek1 = '0'+ pocSatLek1;
}
if (pocMinLek1 < 10) {
    pocMinLek1 = '0'+ pocMinLek1;
}
if (krajSatLek1 < 10) {
    krajSatLek1 = '0'+ krajSatLek1;
}
if (krajMinLek1 < 10) {
    krajMinLek1 = '0'+ krajMinLek1;
}
if (pocSatLek2 < 10) {
    pocSatLek2 = '0'+ pocSatLek2;
}
if (pocMinLek2 < 10) {
    pocMinLek2 = '0'+ pocMinLek2;
}
if (krajSatLek2 < 10) {
    krajSatLek2 = '0'+ krajSatLek2;
}
if (krajMinLek2 < 10) {
    krajMinLek2 = '0'+ krajMinLek2;
}

document.body.innerHTML += `<div>Radno vreme prvog lekara je od: <b>${pocSatLek1}:${pocMinLek1}</b> - <b>${krajSatLek1}:${krajMinLek1}</b></div>`
document.body.innerHTML += `<div>Radno vreme drugog lekara je od: <b>${pocSatLek2}:${pocMinLek2}</b> - <b>${krajSatLek2}:${krajMinLek2}</b></div>`
document.body.innerHTML += `<div>Zajednicko vreme oba lekara je: <b>${vrednost}</b></div>`;

//Domaci 10.3.
//A. Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.

let randomBroj = 333333332;
suma = 0;
while(randomBroj) {
    suma += randomBroj % 10;
    randomBroj = Math.floor(randomBroj / 10);
}
console.log(suma);

//B. Odrediti proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3, a potom od njega oduzeti zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7:
/*Koristeći while petlju
Koristeći for petlju*/

//While


// For
n = 2;
m = 7;
proizvod = 1;
for (i = n; i <= m; i++) {
    if (i % 7 == 0 && i % 3 !== 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

zbir = 0;
for(i = n; i <= m; i++) {
    if (i % 3 == 0 && i % 7 !== 0) {
        zbir += i;
    }
}
console.log(zbir);

console.log(proizvod - zbir);

//C. Odrediti sumu kubova neparnih brojeva od n do m:
//Koristeći while petlju
n = 1;
m = 5;
i = n;
suma = 0;
while(i <= m) {
    if (i % 2 !== 0) {
        suma += i**3;
    }
    i++
}
console.log(suma);

//Koristeći for petlju
n = 1;
m = 10;
suma = 0;
for(i = n; i <= m; i++) {
    if (i % 2 !== 0) {
        suma += i**3;
    }
}
console.log(suma);

//Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.

brSpan = 64;
for (i = 1; i <= brSpan; i++) {
    // if (i  % 2 !== 0) {
    if (Math.floor((i - 1) / 8) % 2 == 0) {
        document.body.innerHTML += `<span class="neparni-red">${i}</span>`;
    } else {
        document.body.innerHTML += `<span class="parni-red">${i}</span>`;
    }
    if (i % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
