//fetch vraca promise - asocijacija na promise je then i catch
//upada u catch granu samo ako je doslo do network error-a
//sled od 4 koraka:
// 1. fetch .json fajla
// 2. return response.json() koji je promise
// 3. uzeti podatke iz response.json
// 4. catch error

fetch("../JSON/todos.json").then(response => {
    //response je objekat koji nisi sa sobom veliki broj atributa
    console.log("resolved", response);
    return response.json();// response.json() je promise i zbog toga opet moramo da radimo then i catch
    // u ovom slucaju response je samo parametar, moze da se zove bilo kako
}).then(data => {
    console.log("resolved 1", data);
}).catch(err => {
    console.log("rejected", err);
});

//ASYNC & AWAIT

//Asinhrona fja se prosledjuje kao parametar i ima zagrade ()
//Asinhrona fj ispred zagrada mora da ima async
let getTodos = async () => {
    let response = await fetch("../JSON/todos.json"); //Fetch vraca response zbog cega smo ranije koristili then i catch
    //Await - "Cekaj" / Zaustavi izvrsavanje koda u ovoj niti dok god se ne izvrsi komanda koja je iza Await.
    //Await iskljucivo u asinhronoj fji
    // console.log(response);

    //Ispisivanje statusa
    if(response.status != 200){
        throw new Error("Ne mogu da dohvatim podatke");
    }
    else {
        let data = await response.json(); // reponse.json() vraca promise
    }
   //Ovo iznad je primer sa if-om

    //Sa ovim delom krece tek kada su izvrsene prethodne linije u potpunosti
    response = await fetch("../JSON/fruits.json");
    data = await response.json();

    return data; //vracam promise, sto znaci da cu za njega morati da radim .then i .catch.
}
// getTodos().then(data => {
//     console.log("resolved", data);
// }).catch(err => {
//     console.log(err);
// })

console.log(1);
console.log(2);
getTodos() //ovo ce se izvrsiti asinhrono u odnosu na console logove
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err));
console.log(3);
console.log(4);