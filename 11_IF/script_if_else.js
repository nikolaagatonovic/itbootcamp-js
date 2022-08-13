 let a = 7;
 let b = 7;

 if(a == b){
     console.log("a i b su jednake vrednosti");
 }
 else {
     console.log("a i b nisu jednake vrednosti");
 }

 if(a != b) {
     console.log("a i b nisu jednake vrednosti");
 }

 else {
     console.log("a i b jesu jednake vrednosi");
 }

  //Dodavanje HTML elementa iz script fajla
 document.body.innerHTML = "<h1>Ovo je <i>if else</i> naredba grananja</h1>";
 document.body.innerHTML += "<h3>Zadaci</h3>";
  //Ukoliko dodamo otvoren tag automatski ce ga zatvoriti i obrnuto - automatski otvara zatvoren tag.
  document.body.innerHTML += "<p>";
  document.body.innerHTML += "Zadaci za vezbanje...";
  document.body.innerHTML += "</p>";

  //
 let v = 2021;
 document.body.innerHTML += 
 `<p>
     Hello...
     <span>world</span>
 </p>
 <p>
     Godina je ${v} :)
 </p>
 `;

 console.log("Vrednost promenljive v je " + v);
 console.log(`Vrednost promenljive v je ${v}`);

 let slika = "cvet.png";
 document.body.innerHTML += `<img src="${slika}">`;

//1) Za dva uneta broja ispisati koji je veći a koji je manji.

 let j = 15;
 let k = 16;
 if(j<k) {
     console.log("j je manje od k");
 }
 else{
     console.log("k nije manje od j");
 }

//2) Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

 let j1 = 15;
 if(j1 >= 0) {
     console.log("temperatura je u plusu");
 }

 else{
     console.log("temperatura je u minusu");
 }

//3) U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.




//4) U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.
let a1 = 5;
let a2 = 7;
let a3 = 3;

 let maks = a1; //Pretpostavka da je najveci 1. broj.
 if(a2 > maks) {
     maks = a2;
 }
 if(a3 > maks){
     maks = a3;
 }
 console.log(maks);

// 8) Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

 let datum = new Date();
 let dan = datum.getDay();
 let nedelja = 5;
 console.log(dan);
 if (nedelja <= dan) {
 console.log("radni dan je");
 }

 else {
     console.log("vikend je");
 }

//10) Uporediti dva uneta datuma i ispisati koji od njih je raniji.
let dat1 = "2021-04-23";
let dat2 = "2021-06-01";
if(dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}` );
}
else if(dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1} `);
}
else {
    console.log(`${dat1} i ${dat2} su isti`);
}

//2. nacin
let dan1 = 01;
let mes1 = 06;
let god1 = 2021;

let dan2 = 01;
let mes2 = 06;
let god2 = 2021;

if(god1 < god2) {
    console.log("Datum 1 je raniji");
}
else if(god2 < god1) {
    console.log ("Datum 2 je raniji")
}
/*Posto su godine iste proveravamo za mesece*/
else if(mes1 < mes2) {
    console.log("Datum 1 je raniji");
}
else if(mes2 < mes1) {
    console.log("Datum 2 je raniji");
}
//Posto su godine i meseci isti proveravamo a dane
else if(dan1 < dan2) {
    console.log("Datum 1 je raniji");
}
else if(dan2 < dan1) {
    console.log("Datum 2 je raniji");
}
/*Posto su i godine i meseci dani isti, datumi su jednaki*/
else{
    console.log("Datum 1 i datum 2 su isti");
}

 
let stepeni = -10;

if(stepeni < 0){
console.log("Ispod 0 stepeni");
}
if(stepeni < 10){
    console.log("Ispod 10 stepeni");
}
if(stepeni < 20){
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i vise stepeni");
}



if(stepeni < 0){
    console.log("Ispod 0 stepeni");
    }
else if(stepeni < 10){
        console.log("Ispod 10 stepeni");
    }
else if(stepeni < 20){
        console.log("Ispod 20 stepeni");
    }
    else {
        console.log("20 i vise stepeni");
    }

    

    let poeni = 81;

    if(poeni > 100) {
        console.log("Poeni ne mogu uzeti vrednost vecu od 100");
    }
    else if(poeni >=91) {
        console.log("Ocena 10");

    }
    else if(poeni >=91) {
        
    }
    else if(poeni >=91) {
        
    }
    else if(poeni >=91) {
        
    }
    else if(poeni >=91) {
        
    }



let pol = "m";
let god = 32;

if(pol == "z") {
    console.log("Osoba zenskog pola");
    if(god >=18){
        console.log("Osoba je punoletna");
    }
    else {
        console.log ("Osoba je maoletna");
    }
}
else {
    console.log("Osoba muskog pola");
    if(god >= 18) {
        console.log("Osoba je punoletna");
    }
    else {
        console.log("Osoba je maloletna");
    }
}

//Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.

let p1 = 14;
let k1 = 20;

let p2 = 12;
let k2 = 19;

if (k1<p2) {
    console.log("NE");
}
else if (k2<p1) {
    console.log("NE");
}
else {
    console.log("DA");
}


let broj1 = 33;
let broj2 = 3;
if ( broj1 % broj2 == 0) {
    console.log(`${broj1} je deljiv brojem ${broj2}`);
}
else {
    console.log(`${broj1} nije deljiv brojem ${broj2}`);
}

//Za uneti broj ispitati da li je paran ili nije.
let broj3 = 21;
let broj4 = 2;
if ( broj3 % broj4 == 0) {
    console.log(`${broj3} je paran broj`);
}
else {
    console.log(`${broj3} je neparan broj`);
}
//Za uneti broj ispisati da li je deljiv sa 3 ili ne.
let broj5 = 5;
let broj6 = 3;
if ( broj5 % broj6 == 0) {
    console.log(`${broj5} je deljiv sa 3`);
}
else {
    console.log(`${broj5} nije deljiv sa 3`);
}

//Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
let broj7 = 180;
let broj8 = 8;
let razlika = broj7 - broj8;
let razlika2 = broj8 - broj7;
if (broj7 > broj8) {
    document.body.innerHTML= `${razlika}`;
}
else {
    document.body.innerHTML= `${razlika2}`;
}

 //Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
let broj9 = 10;
let broj10 = 20;
if (broj9 <= 0) {
    console.log("")
}

//17. Za tri uneta broja ispisati koji od njih ne najveći, koji od njih je srednji, a koji od nih je najmanji. 
