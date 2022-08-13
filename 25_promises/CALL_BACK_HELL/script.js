let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if(request.readyState == 4 && request.status == 200){
            //Ako je sve ok
            //console.log(request.responseText);
            callback(request.responseText, undefined);
        } else if(request.readyState == 4) {
            //console.log("Ne mogu da dohvatim podatke");
            callback(undefined, "Ne mogu da dohvatim podatke!");
        }
});

    //2. Otvaranje kreiranog zahteva
    request.open("GET", resource);

    //3. Saljemo request
    request.send();

}

//getTodos("../JSON/todos.json", () => {});

//CALLBACK HELL
getTodos("../JSON/todos.json",(data, err) => {
    console.log("Callback okinuta");
    //Ako je err == true, ispisati tu gresku
    if(err == true) {
        console.log(err); //Ispisuje gresku
    } else {
        console.log(data); //Ispisuje podatke sa kojima mozemo dalje da raspolazemo
        // Nakon sto se ucita todos.json, neka se ucita fruits.json
        getTodos("../JSON/fruits.json", (data, err) => {
            if(err) {
                console.log(err);
            } else {
                console.log(data);
                //Nakon sto se ucita fruits.json, ucitati vegetables.json
                getTodos("../JSON/vegetables.json", (data, err) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        getTodos("../JSON/cereals.json", (data, err) => {
                            if(err){
                                console.log(err);
                            } else {
                                console.log(data);
                            }
                        });
                    }
                });
            }
        });
    }
});

console.log("KRAJ");