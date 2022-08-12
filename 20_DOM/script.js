// U DOM-u svaki HTML element je jedan JS objekat.
console.log(document);
console.log(typeof document);

console.log(document.URL);
console.log(document.body);
console.log(document.documentElement);

console.log(document.anchors);
console.log(document.links);

let r1 = document.getElementById("div1");
console.log(r1);

let r2 = document.getElementsByClassName("container");
console.log(r2);

let r3 = document.getElementsByTagName("div");
console.log(r3);

let r4 = document.getElementsByName("link") //svi elementi sa name="link" atributom 
console.log(r4);

//for petlja moze ali ne moze forEach za HTMLCollection
for(let i = 0; i < r2.length; i++) {
    console.log(r2[i]);
}

//Moze se HTMLCollection konvertovati u Array pa onda za Array koristiti forEach petlju
let r2array = Array.from(r2);
r2array.forEach(obj => {
    console.log(obj);
})

//Elementima Nodelist moze se pristupiti i preko for i preko forEach liste.
r4.forEach(obj => {
    console.log(obj);
});

for(let i = 0; i < r4.length; i++) {
    console.log(r4[i]);
}

let r5 = document.querySelector(".container"); //vraca samo div jer je prvi element koji ima ovu klasu
console.log(r5);

let r6 = document.querySelectorAll(".container"); //vraca sve
console.log(r6);

r6.forEach(elem => {
    console.log(elem);
})

let r7 = document.querySelectorAll("a");
console.log(r7);

//document.getElementByName("link");
let r8 = document.querySelectorAll("[name='link']");
console.log(r8);

//document.getElementById("div");
let r9 = document.querySelector("#div1"); //querySelector UVEK vraca objekat
console.log(r9);

let r10 = document.querySelectorAll("#div1"); //querySelectorAll UVEK vraca Nodelist, cak i kada se ta lista sastoji od samo jednog elementa
console.log(r10);

//VEZBE
//Dohvatiti prvi paragraf na stranici.
let r11 = document.querySelector("p");
console.log(r11);

//Dohvatiti prvi div tag sa klasom „error“.
let r12 = document.querySelector("div.error");
console.log(r12);

//Dohvatiti poslednji red u tabeli.
let r13 = document.querySelector('table tr:last-child');
r13 = document.querySelector('table tr:last-of-type');
console.log(r13);

//Dohvatiti sve linkove na stranici.
let r14 = document.querySelectorAll('a');
console.log(r14);

//Dohvatiti sve slike na stranici.
let r15 = document.querySelectorAll('img')
console.log(r15);


//Menjanje elemenata iz HTML-a
console.log(r1.id);
console.log(r1.href);
console.log(r1.innerHTML);
r1.innerHTML = "Sadrzaj div elementa je tekst dodat iz JS-a";

let prviLink = document.querySelector('a');
prviLink.href = 'http://www.wikipedia.org/'

prviLink.setAttribute('target', '_blank');

prviLink.setAttribute('href', 'http://www.wikipedia.org');
prviLink.innerHTML = "Wikipedia";

prviLink.style.color = 'red';
prviLink.style.textDecoration = 'none';
prviLink.style.border = '4px solid black';
prviLink.style.backgroundColor = 'blue';

prviLink.setAttribute('style', 'color: pink; background-color: blue; text-decoration: none, border: 3px solid black;')

r1.style.color = 'green';

// Postaviti crveni border svim linkovima na stranici
r7.forEach(link => {
    link.style.border = "3px solid red";
});

// Drugi nacin
let linkovi = document.getElementsByTagName('a');
for(let i = 0; i < linkovi.length; i++) {
    linkovi[i].style.border = '2px solid green';
}

//1. Selektovati sve paragrafe i u svakom od njih pridodati tekst "VAZNO!!!"


let r16 = document.querySelectorAll("p")
for(let i = 0; i < r16.length; i++) {
    r16[i].innerHTML += "VAZNO!!!"
}
//ILI
r16.forEach(paragraf => {
    paragraf.innerHTML += "Vazno!"
})
//ILI
r16 = document.getElementsByTagName("p")
for(let i = 0; i < r16.length; i++) {
    r16[i].innerHTML += "Vazno!!!!!"
}

//2. Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine sa tekstom "Greska"
let r17 = document.querySelectorAll('div.error');
for(let i = 0; i < r17.length; i++) {
    r17[i].innerHTML += "<h1>Greska</h1>"
}
//ILI
r17.forEach(div => {
    div.innerHTML += "<h2>Greska 2</h2>"
})
//Da bude iznad paragrafa
r17.forEach(div2 => {
    div2.innerHTML = "<h2>Greska 3</h2>" + div2.innerHTML;
})

//3. Neka je n broj paragrafa u datom dokumentu. U svakom i-tom paragrafu dodati broj i2, za svako i = 1, 2, ..., n.
let r18 = document.querySelectorAll('p')
for(let i = 0; i < r18.length; i++) {
    r18[i].innerHTML += (i + 1) ** 2;
}
console.log(r18);

//ILI
r18.forEach((par, i) => {
    par.innerHTML += (i + 1) ** 2;
});

//4. Svim slikama dodati alternativni tekst
let r19 = document.querySelectorAll("img");
r19.forEach(elem => {
    elem.setAttribute('alt', 'nananan')
});

//Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
let r20 = document.querySelectorAll('p');
r20.forEach(parag => {
    parag.style.color = "crimson"
});

//Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju a svim neparnim crvenu.
let r21 = document.querySelectorAll('p');
for(let i = 0; i < r21.length; i++) {
    if(i % 2 == 0) {
        r21[i].style.backgroundColor = "green";
        r21[i].style.color = "orange";
    } else {
       r21[i].style.backgroundColor = "purple"
       r21[1].style.color = "wheat"
    }
}

//Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none. Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.

let r22 = document.querySelectorAll('a[href]')
r22.forEach((link, i) => {
    link.setAttribute('style', 'padding: 5px; font-size: 18px; text-decoration: none');
    if(i % 2 == 0) {
        link.style.backgroundColor = "rose";
        link.style.color = "blue";
    } else {
        link.style.backgroundColor = "lightBlue";
        link.style.color = "wheat";
    }
});

//Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
let r23 = document.querySelectorAll("img")
r23.forEach(slika => {
    if(slika.src.endsWith("png")) {
        slika.setAttribute('style', 'border: 2px solid red');
    }
})
//ILI
let r23a = document.querySelectorAll("img.png")
r23a.forEach(slika => {
    slika.style.border ="2px solid brown"
})
//ILI
let r23b = document.querySelectorAll('img');
r23b.forEach(slika => {
    if(slika.src.includes('png') || slika.src.includes('PNG')) {
        slika.style.border = '2px solid turquoise'
    }
})
//ILI
let r23c = document.querySelectorAll("img[src*='.png']")
r23c.forEach(slika => {
    slika.style.border = '5px solid darkgreen'
})
//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
let r24 = document.querySelectorAll('a');
for(let i = 0; i < r24.length; i++) {
    if(r24[i].target == '_blank') {
        r24[i].target = '_top'
    } else {
        r24[i].target = '_blank'
    }
}

//Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati: Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici. U listi kao stavke liste, naizmenično stavke liste obojiti sa dve različite boje. U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

let nekiNiz = ["Stefan S.", "Mladen L.", "Jelena V.", "Stefan Dj.", "Dusan M."]
nekiNiz.forEach(ime => {
    if(ime.startsWith("S")) {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`
    } else {
        document.body.innerHTML += `<a href="#">${ime}</a>`
    }
})

let result = "<ul>";
nekiNiz.forEach((ime, index) => {
    if(index % 2 == 0) {
        result += `<li style="color: blue">${ime}</li>`;
    } else {
        result += `<li style="color: pink">${ime}</li>`
    }
});
result += `</ul>`;
document.body.innerHTML += result;

//Dohvatanje roditeljskog cvora
r24 = document.querySelectorAll('a')
r24.forEach(link => {
    console.log(link.parentNode); 
    link.parentNode.style.border = '2px solid red'
});

//Dohvatanje deteta nekog cvora
let prviDiv = document.querySelector('div.container');
prviDiv.childNodes.forEach(child => {
    console.log(child);
});

let n = prviDiv.childNodes.length;
for(let i = 0; i < n; i++) {
    console.log(prviDiv.childNodes[i]);
}

let link1 = prviDiv.childNodes[1];
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);
link1.nextSibling.nextSibling.style.fontSize = '24px';

//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let r25 = document.querySelectorAll('p');
r25.forEach((paragraf, index) => {
    if(index % 2 == 0) {
    paragraf.classList.add('error')
} else {
    paragraf.classList.add('success')
    }
});

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
let r26 = document.querySelectorAll('p')
r26.forEach((paragraf, index) => {
    if(index % 3 == 0) {
        paragraf.style.fontSize = "15px";
    } else if(index % 3 == 1) {
        paragraf.style.fontSize = "20px";
    } else if (index % 3 == 2) {
        paragraf.style.fontSize = "25px";
    }
});

//Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
 //if(p.textContent.includes(’success’))
let r27 = document.querySelectorAll('p');
r27.forEach(paragraf => {
    if(paragraf.textContent.includes("error")) {
        paragraf.classList.add("error")
    } else if (paragraf.textContent.includes("success")) {
        paragraf.classList.add("success")
    }
})

//Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
let r28 = document.querySelectorAll('p');
r28.forEach(paragraf => {
    paragraf.classList.toggle('error')
});


let noviParagraf = document.createElement('p');
noviParagraf.classList.add('klasa');
noviParagraf.id = 'aj-di';
noviParagraf.textContent = 'Tekst novog paragrafa';

let noviDiv = document.getElementById('div2');
noviDiv.appendChild(noviParagraf);

let noviLink = document.createElement('a');
noviLink.textContent = "Klikni me";
noviLink.href='http://www.google.com';
noviParagraf.appendChild(noviLink)
noviParagraf.removeChild(noviLink)

let izracunaj = (a, b) => {
    while(a > 0) {
        a = a - b;
        b = b + 15;
    }
    return a + b;
}
console.log(izracunaj(35, 5));

//Dodati novi div tag dokumentu.
let josNovijiDiv = document.createElement('div')
josNovijiDiv.innerHTML = 'Ovo je najnoviji div';
document.body.appendChild(josNovijiDiv);

//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.
let ulLista = document.createElement('ul');
ulLista.innerHTML = `<li>prva stavka</li><li>druga stavka</li><li>treca stavka</li>`
noviDiv.appendChild(ulLista);

// Iz ul liste izbaciti prvu stavku.
ulLista.removeChild(ulLista.firstElementChild)

//U ul listi zameniti drugu stavku liste.
let novaStavka = document.createElement('li');
novaStavka.innerHTML = "sad je ovo prva stavka"

ulLista.replaceChild(novaStavka, ulLista.firstElementChild)

//Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

let sadrzajSlika = document.createElement('img')
sadrzajSlika.src = "slika3.png";
ulLista.appendChild(sadrzajSlika)

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
    slika: "1.jpg",
    procitana: true,
}

let knjiga2 = {
    naziv: "Tom Sojer",
    autor: "Mark Tven",
    slika: "2.jpg",
    procitana: true,
}

let knjiga3 = {
    naziv: "Hajduci",
    autor: "Branislav Nusic",
    slika: "3.jpg",
    procitana: false,
}

let knjige = [knjiga1, knjiga2, knjiga3];

let domaci = getElementById('domaci')
let tabela = document.createElement('table');


for(let i = 0; i < knjige.length; i++) {
    let img = document.createElement('img')
    img.src = knjige[i].slika;
    img.style.width = '200px'

    let p = document.createElement('p')
    p.textContent = knjige[i].naziv + " " + knjige[i].autor;

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    tabela.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(img);
    td2.appendChild(p)

    // knjige.forEach(knjiga => {
    //     if(knjiga.procitana == true) {
    //         p.style.backgroundColor = "blue"
    //     } else {
    //         p.style.backgroundColor = "lightgrey"
    //     }
    // })
}
domaci.appendChild(tabela)

document.body.innerHTML = 'jddjjdjd'