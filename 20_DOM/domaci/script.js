/*
Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
Naziv knige,
Autora knjige,
Putanja do sličice,
Polje – indikator da li je knjiga pročitana ili ne.
Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.
U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
Ukoliko je knjiga pročitana, boja teksta treba da bude plava, a ako nije, boja teksta treba da bude siva.
*/

let knjiga1 = {
    naziv: "Robinson Kruso",
    autor: "Danijel Defo",
    slika: "slika1.jpg",
    procitana: true,
}

let knjiga2 = {
    naziv: "Tom Sojer",
    autor: "Mark Tven",
    slika: "slika2.jpg",
    procitana: true,
}

let knjiga3 = {
    naziv: "Hajduci",
    autor: "Branislav Nusic",
    slika: "slika3.jpg",
    procitana: false,
}

let knjige = [knjiga1, knjiga2, knjiga3];

let domaci = document.getElementById('domaci')
let tabela = document.createElement('table');


for(let i = 0; i < knjige.length; i++) {
    let img = document.createElement('img')
    img.src = knjige[i].slika;
    img.style.width = '200px'

    let p = document.createElement('p')
    p.innerHTML = knjige[i].naziv + "<br>" + "<i>by </i>" + knjige[i].autor;

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    tabela.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(img);
    td2.appendChild(p)

    if(knjige[i].procitana == true) {
        tr.style.backgroundColor = "lightblue"
    } else {
        tr.style.backgroundColor = "lightgrey"
        }
}

domaci.appendChild(tabela)