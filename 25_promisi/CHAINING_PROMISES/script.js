// let getTodos = resource => {

// //1. Kreiranje XML objekta
// let request = new XMLHttpRequest();

// //2. Otvaranje zahteva
// request.open('GET', resource);

// //3. Saljemo zahtev
// request.send();


// return new Promise( (resolve, reject) => {
//         request.addEventListener('readystatechange', () => {
//             if(request.readyState == 4 && request.status == 200) {
//                 //Ako je sve OK
//                 //console.log(request.responseText);
//                 //callback(request.responseText, undefined);
//                 resolve(request.responseText)
//             }
//             else if(request.readyState == 4) {
//                 //console.log('Ne mogu da dohvatim podatke ');
//                 //callback(undefined, "Ne mogu da dohvatim podatke");
//                 reject("Ne mogu da dohvatim podatke");
//             } 
//         });
//     });
// }

// getTodos("../JSON/fruits.json").then(data => {
//     console.log('Promise fruits resolved', data);
//     return getTodos("../JSON/vegetables.json");
// }).then(data => {
//     console.log("Promise vegetables resolved", data);
//     return getTodos("../JSON/cereals.json")
// }).then(data => {
//     console.log("Promise cereals resolved", data)
// }).catch(err => {
//     console.log('Promise rejected', err);
// })


// console.log("KRAJ");

// let getSomething = nekiResurs => {
//     let nekiZahtev = new XMLHttpRequest();
//     nekiZahtev.open("GET", nekiResurs)
//     nekiZahtev.send();

//    return new Promise((resolve, reject) => {
//         nekiZahtev.addEventListener(('readystatechange'), () => {
//             if(nekiZahtev.readyState === 4 && nekiZahtev.status === 200) {
//                 resolve(nekiZahtev.responseText)
//             } else if(nekiZahtev.readyState === 4) {
//                 reject("Ne mogu da dohvatim podatke zbog greske u putanji")
//             }
//         })
//     })
// }

// getSomething("../JSON/fruits.json").then(data => {
//     console.log("Promise fruits resolved", data);
//     return getSomething("../JSON/vegetables.json")
// }).then(data => {
//     console.log('Promise vegetables resolved', data);
//     return getSomething("../JSON/cereals.json")
// }).then(data => {
//     console.log("Promise cereals resolved", data);
// }).catch(err => {
//     console.log("Promise rejected", err);
// })

// let getSomething = resurs => {
//     let zahtev = new XMLHttpRequest();
//     zahtev.open("GET", resurs);
//     zahtev.send();

// return new Promise((resolve, reject) => {
//     zahtev.addEventListener('readystatechange', () => {
//             if(zahtev.readyState === 4 && zahtev.status === 200) {
//                 resolve(zahtev.responseText)
//             } else if(zahtev.readyState === 4) {
//                 reject('Ne mogu da dohvatim podatke')
//             }
//         })
//     })
// }

// getSomething('../JSON/fruits.json').then(data => {
//     console.log('Promise fruits resolved', data);
//     return getSomething('../JSON/vegetables.json')
// }).then(data => {
//     console.log('Promise vegetables resolved', data);
//     return getSomething('../JSON/cereals.json')
// }).then(data => {
//     console.log('Promise cereals resolved', data);
// }).catch(err => {
//     console.log("Promise rejected", err);
// })

fetch("../JSON/todos.json").then(response => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log('resolved 1', data);
}).catch(err => {
    console.log('rejected', err);
});

//ASYNC AWAIT

let getList = async () => {
    let response = await fetch("../JSON/todos.json");

    if (response.status != 200) {
        throw new Error("Ne mogu da dohvatim podatke");
    } else {
        let data = await response.json();
    }

    response = await fetch("../JSON/fruits.json");
    data = await response.json();

    return data;
}

console.log(1);
console.log(2);
getList()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err));
console.log(3);
console.log(4);