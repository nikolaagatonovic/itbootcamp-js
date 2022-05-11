//1. Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

let redni = 8;

switch (redni) {
    case 1:
        console.log(`Ponedeljak`);
        break;
    case 2:
        console.log(`Utorak`);
        break;
    case 3:
        console.log(`Sreda`);
        break;
    case 4:
        console.log(`Cetvrtak`);
        break;
    case 5:
        console.log(`Petak`);
        break;
    default:
        console.log(`Vikend`);
}

//2. Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 1;

switch (ocena) {
    case 1:
        console.log(`Nedovoljan`);
        break;
    case 2:
        console.log(`Dovoljan`);
        break;
    case 3:
        console.log(`Dobar`);
        break;
    case 4:
        console.log(`Vrlo dobar`);
        break;
    case 5:
        console.log(`Odlican`);
        break;
    
}

//3. Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

let unetiBroj = 4;

switch (unetiBroj) {
    case 0:
        console.log(`Nula`);
        break
    case 2:
        console.log(`Dva`);
        break
    case 4:
        console.log(`Cetiri`);
        break
    case 6:
        console.log(`Sest`);
        break
    case 8:
        console.log(`Osam`);
        break
    default:
        console.log(`Pogresan unos`);
}

//4. Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let broj1 = 3;
let broj2 = 43;
let operacija = "m"

switch(operacija) {
    case "s":
        console.log(broj1 + broj2);
        break
    case "0":
        console.log(broj1 - broj2);
        break
    case "m":
        console.log(broj1 * broj2);
        break
    case "d":
        console.log(broj1 / broj2);
        break
}

//5. Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let danasnjiDatum = new Date();
let tacnoVreme = danasnjiDatum.getDay()
switch(tacnoVreme) {
    case 0, 6:
        console.log("Vikend je");
        break;
    case 1:
        console.log(`Do vikenda je ostalo 5 dana`);
        break;
    case 2:
        console.log(`Do vikenda je ostalo 4 dana`);
        break;
    case 3:
        console.log(`Do vikenda je ostalo 3 dana`);
        break
    case 4:
        console.log(`Do vikenda je ostalo 2 dana`);
        break
    case 5:
        console.log(`Do vikenda je ostalo 1 dana`);
        break
}

//6. Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let kojiMesec = danasnjiDatum.getMonth();
switch(kojiMesec) {
    case 0:
        console.log(`Januar je`);
        break;
    case 1:
        console.log(`Februar je`);
        break;
    case 2:
        console.log(`Mart je`);
        break;
    case 3:
        console.log(`April je`);
        break;
    case 4:
        console.log(`Maj je`);
        break;
    case 5:
        console.log(`Jun je`);
        break;
    case 6:
        console.log(`Jul je`);
        break;
    case 7:
        console.log(`Avgust je`);
        break;
    case 8:
        console.log(`Septembar je`);
        break;
    case 9:
        console.log(`Oktobar je`);
        break;
    case 10:
        console.log(`Novembar je`);
        break;
    case 11:
        console.log(`Decembar je`);
        break;
}

//7. Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.
kojiMesec = 1//danasnjiDatum.getMonth();
let kojaGodina = 2012;//danasnjiDatum.getFullYear();
switch (kojiMesec){
    case 0:
        console.log(`31 dan`);
        break;
    case 1:
        switch ((kojaGodina % 400 == 0) || (kojaGodina % 100 !== 0 && kojaGodina % 4 == 0)) {
            case true:
        console.log(`29 dana`);
        break;
        default: 
        console.log(`28 dana`);
        break
        }
        break
    case 2:
        console.log(`31 dan`);
        break;
    case 3:
        console.log(`April je`);
        break;
    case 4:
        console.log(`31 dan`);
        break;
    case 5:
        console.log(`Jun je`);
        break;
    case 6:
        console.log(`31 dan`);
        break;
    case 7:
        console.log(`31 dan`);
        break;
    case 8:
        console.log(`Septembar je`);
        break;
    case 9:
        console.log(`31 dan`);
        break;
    case 10:
        console.log(`Novembar je`);
        break;
    case 11:
        console.log(`31 dan`);
        break;
}

//8. Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.

let boja = "blue";
switch(boja) {
    case "red":
        document.body.innerHTML += `<p style="color: red">lorem ipsum dolor sit amet</p>`
        break;
    case "green":
        document.body.innerHTML += `<p style="color: green">lorem ipsum dolor sit amet</p>`
        break;
    case "blue":
        document.body.innerHTML += `<p style="color: blue">lorem ipsum dolor sit amet</p>`
        break;
    default:
        document.body.innerHTML += `<p style="color: yellow">lorem ipsum dolor sit amet</p>`
}