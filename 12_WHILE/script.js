let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive "i" nakon petlje jednaka je ${i}`);

//Ispisati brojeve od 1 do 20:

//Svaki u istom redu
i = 1;
let row = [];
while (i <= 20) {
    row.push(i++)
}
console.log.apply(console, row);

//ILI

i = 1;
let res = "";
while(i <= 20) {
    res = res + i + " ";
    i++;
}
console.log(res);

//Svaki u novom redu
i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

//Ispisati brojeve od 20 do 1.
i = 20;
while(i >= 1) {
    console.log(i);
    i--;
}

//Ispisati parne brojeve od 1 do 20.
i = 0;
    while (i <= 20) {
        if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//ILI
i = 1;
while(i <= 10){
    console.log(2 * i);
    i++;
}

//ILI
i = 2;
while(i <= 20) {
    console.log(i);
    i+=2;
}

//Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
// document.body.innerHTML += <p>Paragraf</p>

i = 1;
let n = 6;

while(i <= n) {
    if(i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red">Prvi paragraf</p>`
    } else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: green">Drugi paragraf</p>`
    } else {
        document.body.innerHTML += `<p style="color: blue">Treci paragraf</p>`
    }
    i+=1;
}

//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

let slicica = "slika1.jpg"
i = 1;
nn = 7;

while(i <= nn){
    if (i % 2 == 1) {
        document.body.innerHTML += `<img src="slika1.jpg" class="okvir1">`;
    } else {
        document.body.innerHTML += `<img src="slika1.jpg" class="okvir2">`;
    }
    i+=1
}

// Ciklicno prikazivanje 3 slike

i = 1;
let nm = 7

while (i <= nm) {
    let ost = i % 3; //BITNO JE DA STOJI UNUTAR WHILE-A!!
    if (ost % 2 == 0) {
        document.body.innerHTML += `<img src="img/${ost}.png" class="okvir1">`;
    } else {
        document.body.innerHTML += `<img src="img/${ost}.png" class="okvir2">`;
    }
    i+=1;
}

//Odrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0
while(i <= 100 ) {
    suma += i;
    i += 1;
}
console.log(suma);

//Odrediti sumu brojeva od 1 do n

suma = (n * (n + 1)) / 2 // samo onda kada krece od jedinice

//ILI

i = 1;
suma = 0;
n = 200;
while(i <= n) {
    suma += i;
    i++
}
console.log(suma);

//Odrediti sumu brojeva od n do m
n = 1;
m = 200;
suma = 0;
while(n <= m) {
    suma += n;
    n++
}
console.log(suma);

//Odrediti proizvod brojeva od n do m
n = 1;
m = 5;
let proizvod = 1;
while(n <= m) {
    proizvod *= n;
    n++
}
console.log(proizvod);

//Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 2;
m = 5;
let suma1 = 0;
let suma2 = 0;
while(n <= m) {
    if (n % 2 == 0) {
        suma1 += n**2;
    } else {
        suma2 += n**3;
    }
    n++
}
console.log(suma1);
console.log(suma2);


//Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 7;
i = 1;
brDeljivih = 0;
while(i <= k) {
    if (k % i == 0){
    brDeljivih = brDeljivih + 1;
    }
    i++
}
console.log(suma);

//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
i = 1;
n = 13;
if (n>=i) { 
while (i <= n) {
    if (n / i !== 1) {
        if ( n % i == 0) {
            console.log(`Broj je slozen`);
            break
        } 
    } else {
        console.log(`Broj je prost`);
    }
    i++
}
}
else {
    if (n>=0){
    console.log (`ukuco si 0 ili 1 to nije ni prosto ni slozeno sta si zamislio da ce da se desi majke ti`)
}
else {
    console.log(`broj je slozen jer su svi negativni brojevi slozeni poy`);
}
}

//ILI

n = 1;
i = 2;
while ((i < n) && (n % i != 0)) {
    console.log(`Broj ${n} je prost`);
    i++;
}

//ILI
// odredjivanje sa koliko brojeva je deljiv n
n = 4;
i = 1;
brDeljivih = 0;
while(i <= n) {
    if (n % i == 0){
    brDeljivih = brDeljivih + 1;
    }
    i++
}
console.log(brDeljivih);

if(brDeljivih > 2) {
    console.log(`Broj ${n} nije prost`);
} else {
    console.log(`Broj ${n} je prost`);
}

// ILI
n = 4;
i = 2;

while(i < n){
    if(n % i == 0) {
        console.log(`Broj ${n} nije prost`);
        break;
    }
    i++
}

if (i == n) {
    console.log(`Broj ${n} je prost`);
}

//ILI
n = 4;// Broj cija se parnost ispituje
i = 2; // Brojac koji ide po potencijalnim deliocima broja n
while(i <= n / 2){
    if(n % 1 == 0) {
        console.log(`Broj ${n} nije prost`);
        break; // prekid izvrsenje petlje u kojoj se nasao
    }
    i++;
}
if (i > n / 2) {
    console.log(`Broj ${n} je prost`);
}

//ILI
n = 4;
i = 2;
let prime = true; // Indikator (flag) da li je broj n prost
while(prime && (i <= n / 2)) {
    if (n % i == 0) {
        prime = false;
    }
    i++;
}
if (prime) {
    console.log(`Broj ${n} je prost`);
} else {
    console.log(`Broj ${n} nije prost`);
}