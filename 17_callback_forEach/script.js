let ispisKonzola = poruka => {
    console.log(poruka);
}

let ispisStranica = poruka => {
    let nekidiv = document.getElementById("container");
    nekidiv.innerHTML += poruka + "<br> ";
}

let ispisNiza = (niz, callback) => {
    let poruka = "";
    for (let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " ";
    }
    callback(poruka);
}

let a = [33, 44, 44, 12, 44, 12, 0, -4, 15, -4, 3, 3, 3, 3, 6];
let b = ["Vuk", "Nikola", "Jelena", "Jelena", "Anita"]
ispisNiza(a, ispisKonzola); //poziv funkcije ispisNiza
ispisNiza(a, ispisStranica); //poziv funkcije ispisNiza
ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);

//pozivi funkcije preko anonimnih callback funkcija

//ispis u konzoli
ispisNiza(a, par => {
    console.log(par);
})

//ispis na stranici
ispisNiza(a, par => {
    let div = document.getElementById("container");
    div.innerHTML += par + "<br>";
})

a.forEach(e => {
    console.log(`Element niza je: ${e}`);
})

b.forEach((e, i) => {
    console.log(`Element ${e} sa indeksom ${i}`);
})

//ispis elemenata niza sa parnim indeksom
b.forEach((e, i) => {
    if (i % 2 == 0) {
        console.log(`Elementi sa parnim indeksom su ${e}`);
    }
})

//
// let people = ["Jelena", "Ana", "Milijana", "Milica"]

// //obicna funkcija
// people.forEach(function (person) { //promenljiva u zagradi se obicno naziva kao jednina zadate promenljive
//     console.log(person);
// })

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// };
// //arrow
// people.forEach(logPerson);
// //

// const ul = document.querySelector(".people");
// people = ["Jelena", "Ana", "Milijana", "Milica"]
// let html = ``;

// people.forEach(person => {
//     html += `<li style="color: violet">Hello ${person}</li>`
// })
// ul.innerHTML = html;

//ZADACI IZ NIZOVA

//2. Odrediti zbir elemenata celobrojnog niza

let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir
}
console.log(zbirNiza(a))

//3. Odrediti proizvod elemenata celobrojnog niza.
let proizvodNiza = niz => {
    let proizvod = 1;
    niz.forEach(elem => {
        proizvod *= elem;
    });
    return proizvod
}
console.log(proizvodNiza(a));

//4. Odrediti srednju vrednost elemenata celobrojnog niza.
let srVrNiza = niz => {
    let srvr = 0;
    niz.forEach(elem => {
        srvr += elem;
    });
    srvr /= niz.length;
    return srvr
}
console.log(srVrNiza(a));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxNiz = niz => {
    let max = [0];
    niz.forEach(elem => {
        if (max < elem) {
            max = elem;
        }
    });
    return max;
}

let c = [2, 4, 5, 6, 7]
console.log(maxNiz(c));

//min vrednost
let minNiz = niz => {
    let min = [0];
    niz.forEach(elem => {
        if (min > elem) {
            min = elem;
        }
    });
    return min;
}
console.log(minNiz(a));

//kako odrediti koliko ima elemenata sa maksimalnom vrednoscu a koliko sa minimalnom

let brojMaxNiz = niz => {
    let max = maxNiz(niz);
    let brojac = 0;
    niz.forEach(elem => {
        if (elem == max) {
            brojac++;
        }
    });
    return brojac;
}

let brojMinNiz = niz => {
    let min = minNiz(niz);
    let brojac = 0;
    niz.forEach(elem => {
        if (elem == min) {
            brojac++;
        }
    });
    return brojac;
}

//

let brojSvojstvoNiz = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let brojac = 0;
    niz.forEach(elem => {
        if(elem == s) {
            brojac++;
        }
    });
    return brojac;
}
console.log(`Broj elemenata sa maksimalnom vrednoscu jednak je: ${brojSvojstvoNiz(a, maxNiz)}`);
console.log(`Broj elemenata sa minimalnom vrednoscu jednak je: ${brojSvojstvoNiz(a, minNiz)}`);

//DOMACI BR 12

//1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća indeks minimalnog elementa ovog niza. Ukoliko ima više jednakih minimalnih elemenata, vratiti indeks bilo kog od minimalnih elemenata.

let nekaFunk = niz => {
    let minim = [0];
    niz.forEach((elem, index) => {
        if(minim > elem) {
            minim = elem;
            console.log(index);
        }
        
    })
    return index;
}
console.log(nekaFunk([2, 3, 6, 8, 6, 4, 2, 0]));