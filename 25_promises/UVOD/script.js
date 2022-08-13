// 1. Kreiranje XML objekta
let request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if(request.readyState == 4 && request.status == 200){
        //Ako je sve ok
        console.log(request.responseText);
    } else if(request.readyState == 4) {
        console.log("Ne mogu da dohvatim podatke");
    }
});

//2. Otvaranje kreiranog zahteva
request.open("GET", "./JSON/todos.json");

//3. Saljemo request
request.send();

//PRIMER CALLBACK FUNKCIJE

// Funkcija myFunc prima kao parametar drugu fju (callbackFunction)
// myFunc moze da poziva funkciju koja joj je prosledjena kao parametar i da joj prosledjuje argumente
let myFunc = callbackFunction => {
    let value1 = 5;
    let value2 = 6;
    callbackFunction(value1, value2);
}

//Kada pozivamo fju myFunc ona ocekuje da joj se prosledi druga fja tj mi joj prosledjujemo realizaciju callbackFunction(telo fje)
myFunc((val1, val2) => {
    console.log(val1 + val2);
});

