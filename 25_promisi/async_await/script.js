//fetch vraca promise - asocijacija na promise je then i catch
//upada u catch granu samo ako je doslo do network errora

//1. fetch .json fajla
//2. return response.json() koji je promise;
//3. uzeti podatke iz response.json
//4. catch error
 
fetch("./JSON/todos.json").then(response => {
    //reponse je objekat koji nosi sa sobom veliki broj atributa
    console.log("resolved", response);
    return response.json(); // response.json() je promise i zbog toga opet moramo da radimo then i catch
}).then(data => {
    console.log("resolved 1", data);
}).catch(err => {
    console.log("rejected", err);
});

//Async & await 

//asinhrona funkcija se prosledjuje kao parametar i ima zagrade ()
//asinhrona funkcija ispred () mora da ima async
//kao rezultat vraca promise
let getTodos = async() => {
    let response = await fetch("../JSON/todos.json");
    //fetch vraca response zbog kojeg smo ranije koristili then i catch
    //await - "Cekaj" - zaustavi izvrsavanje koda u ovoj niti dokle god se ne izvrsi komanda koja je iza awaita
    //await iskljucivo u asinhronoj funkciji
    // console.log(response);
    let data = await response.json(); //response().json vraca promise 

    //sa ovim delom krece tek kada su izvrsene prehodne linije u potpunosti  
    response = await fetch("../JSON/fruits.json");
    data = await response.json()
    return data; //vracam primise sto znaci da cu za njega morati da radim .then i .catch
 }
 getTodos()
    .then(data => console.log("resolved", data))
    .catch(err => console.log("rejected", err))