//1. Kreiranje XML objekta
let request = new XMLHttpRequest();

//2. Postavljanje osluskivaca
request.addEventListener('readystatechange', () => {
    if(request.readyState == 4 && request.status == 200) {
        //Ako je sve OK
        console.log(request.responseText);
     }
     else if(request.readyState == 4) {
        console.log('Ne mogu da dohvatim podatke ');
     }
});

//3. Otvaranje zahteva
request.open('GET', '../JSON/todos.json');

//4. Saljemo zahtev
request.send();

let myFunc = callbackFunction => {
    let value1 = 5;
    let value2 = 6
    callbackFunction(value1, value2);
}

//myFunc ocekuje funkciju kao argument
//Kada pozivamo funkciju myFunc ona ocekuje da joj se prosledi druga funkcija. Mi joj prosledjujemo realizaciju callbackfunction (telo funkcije);

//Ono sto prosledimo gore u zagrade postaje parametar ove dole callback funkcije
myFunc((val1, val2) => {
    console.log(val1 + val2);
});
