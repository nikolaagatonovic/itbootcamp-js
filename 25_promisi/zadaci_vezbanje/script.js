//U svim predstojećim zadacima uzeti u obzir da je moguće i da je došlo do greške prilikom poziva fajla. Grešku do koje je došlo ispisati u konzoli.

//1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fetch)
let getVoce = async () => {
    let brojac = 0;
    let response = await fetch('../JSON/fruits.json')
    
    let data = await response.json();
    data.forEach(vocka => {
        if(vocka.name.includes("berries")) {
            console.log(vocka.name);
        };
//2. U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)
        if(!vocka.name.includes("berries")) {
            brojac++
        }
    })
    console.log(brojac);

//3. Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).


//4. Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).

    let voceDiv = document.getElementById('nekiDiv');

    response = await fetch('../JSON/fruits.json');
    data = await response.json();
    console.log("LISTA VOCA");
    data.forEach(voce => {
        console.log(voce.name);
    })
    let voceNaslov = document.createElement("h3");
    let voceStavka = document.createElement("ul");
    voceNaslov.innerHTML += `<h3>Fruits</h3>`
    data.forEach(vockica => {
        voceStavka.innerHTML += `<li>${vockica.name}</li>`
    });

    response = await fetch('../JSON/vegetables.json')
    data = await response.json();
    console.log("LISTA POVRCA");
    data.forEach(povrce => {
        console.log(povrce.name);
    })
    let povrceNaslov = document.createElement("h3");
    let povrceStavka = document.createElement("ul")
    povrceNaslov.innerHTML += `<h3>Vegetables</h3>`
    data.forEach(povrckica => {
        povrceStavka.innerHTML += `<li>${povrckica.name}</li>`

    })

    nekiDiv.appendChild(voceNaslov);
    nekiDiv.appendChild(voceStavka);
    nekiDiv.appendChild(povrceNaslov);
    nekiDiv.appendChild(povrceStavka);

    //5. Nadovezati se na prethodni zadatak i nakon ispisane liste voća u paragrafu ispisati ukupnu težina svog voća u kilogramima. Zatim, ispod liste povrća u paragrafu ispisati ukupnu težinu povrća u kilogramima. Postaviti da asinhrona funkcija vraća zbir količina voća i povrća u kilogramima. Pri pozivu asinhrone funkcije, ispisati  ovu vrednost.
   
    voceDiv.appendChild(tezinaVoca)

    return data;
}
getVoce ()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err));





