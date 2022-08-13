/* function test() {
    console.log("Pozvana je funkcija test");
}

console.log("Prva linija koda");
console.log("Druga linija koda");
//window.setTimeout(...)
setTimeout(test, 3000); // test je callback funkcija // 8. linija koda je poziv setTimeout funkcije a ne test.
console.log("Cetvrta linija koda");
console.log("Peta linija koda");
*/

/* let datum = {
    kisa: false,
    sunce: true,
    datum: "2021/05/31",
    neobicanDan: function() {
        this // this je u anonimnoj fji objekat koji je pozvao tu metodu
    },
    neobicanDan: () => {
        this.sunce (window.sunce) // this je u arrow fji window objekat datum.sunce
    
    }
}
*/
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function() {
    console.log(this); //btn1
});

btn2.addEventListener("click", () => {
    console.log(this); //window
});

btn3.addEventListener("click", klik);

function klik() {   //imenovana fja
    console.log(this); // ?
}

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let divIspis = document.getElementById("ispis");
let clock = null;

b1.addEventListener('click', () => {
    if(clock === null) {
        clock = setTimeout(function() {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            let milisekunde = datum.getMilliseconds();
            divIspis.innerHTML += `${sati}:${minuti}:${sekunde}:${milisekunde}`;
            clock = null;
        }, 2000);
    }
});

b2.addEventListener("click", () => {
    clearTimeout(clock);
    clock = null;
})

/*
let clockInterval = null;

console.log("Prva linija koda");
console.log("Druga linija koda");

clockInterval = setInterval(() => {
    console.log("Poziv callback fje");
}, 1000);
console.log("Cetvrta linija koda");
console.log("Peta linija koda");

setTimeout(() => {
    clearInterval(clockInterval);
}, 5000);
console.log("Sedma linija koda");
console.log("Osma linija koda");
*/

let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let divIspis2 = document.getElementById('ispis2')
let clockPeriod = null;

//

b3.addEventListener("click", () => {
    if(clockPeriod === null) {
        clockPeriod = setInterval(() => {
        let datum = new Date();
        let sati = datum.getHours();
        let minuti = datum.getMinutes();
        let sekundi = datum.getSeconds();
        divIspis2.innerHTML = `${sati}:${minuti}:${sekundi}`;
        }, 1000 / 5); // 5 puta u sekundi otkucava clockPeriod
    }
});

b4.addEventListener("click", () => {
    clearInterval(clockPeriod);
    clockPeriod = null;
});
