// ispis brojeva od 1 do 5

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i nakon while petlje jednaka eL ${i}`);

// 1) Ispisati brojeve od 1 do 20:
// Svaki u istom redu
// Svaki u novom redu
let m = 1;
while(m <= 20) {
    console.log(m);
    m++;
}

let p = 20;
while(p <= 1);
    console.log(p);
    p--;

//4) Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
document.body.innerHTML += `<h1>While petlja</h1>`
i = 1;
let n = 15;
while( i <= n) {

    /*  0%3 = 0
        1%3 = 1
        2%3 = 2
        3%3 = 0
        4%3 = 1
        5%3 = 2
    */
    if(i % 3 == 1) {
    document.body.innerHTML += `<p style ="color: red;">Ovo je ${i}. paragraf</p>`;
    }
    else if(i % 3 == 2) {
        document.body.innerHTML += `<p style ="color: green;">Ovo je ${i}. paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style ="color: blue;">Ovo je ${i}. paragraf</p>`;
    }

    i += 1;
}

// 5) Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
i = 1;
n = 6;
while( i <=n) {
    /*
    1 % 2 = 1
    2 % 2 = 0
    3 % 2 = 1
    4 % 2 = 0
    5 % 2 = 1
    ...
    */
   if(i % 2 == 1) {
    document.body.innerHTML +=`<img src="cvetic.png" class="okvir1">`;
   }
   else {
    document.body.innerHTML +=`<img src="cvetic.png" class="okvir2">`;
   }
    i+=1;
}

// 6. Odrediti sumu brojeva od 1 do 5.
i = 1;
let suma =0;
while(i <= 5) {
    suma += i;
    i += 1;
}
console.log(suma);

/*
Odrediti proizvod brojeva od 1 do 5*/
i = 1;
let proizvod = 1; //Neutral za mnozenje je pocetna vrednost
n = 5;
while(i <= n){
    proizvod *= i;
    i += 1;
}
console.log(proizvod);
// Ciklicno prikazivanje 3 slike
i = 1;
n = 7;
while(i <= n) {
       /*
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    5 % 3 = 2
    6 % 3 = 0
    7 % 3 = 1
    ...
    */
   let ost = i % 3;
   document.body.innerHTML += `<img src="img/${ost}.png">`;
    i +=1;
}

// 7) Odrediti sumu brojeva od 1 do n
i = 1;
n = 55;
let suma2 = 0;
while(i <= n) {
    suma2 += i;
    i += 1;
}
console.log(suma);

// 8) Odrediti sumu brojeva od n do m
n = 14;
m = 18;
let suma3 = 0;
while(n <= m) {
    suma3 += n;
    n += 1;
}

// 9) Odrediti proizvod brojeva od n do m
n = 60;
m = 70;
let proizvod2 = 1;
while (n <= m) {
    proizvod2 *= n;
    n += 1;
}
console.log(proizvod2);

// 10) Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
