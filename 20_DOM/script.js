// U DOM-u svaki html element je jedan JS objekat

console.log(document);
console.log(typeof document);

console.log(document.URL); // string
console.log(document.body);// objekat iz DOM stabla
console.log(document.documentElement); // objekat iz DOM stabla

console.log(document.anchors);//HTMLCollection
console.log(document.links);//HTMLCollection

let r1 = document.getElementById('div1');
console.log(r1); // objekat koji ima navedeni ID

let r2 = document.getElementsByClassName("container");
console.log(r2);// HTMLCollection svih objekata koji imaju navedenu klasu

let r3 = document.getElementsByTagName("div");
console.log(r3);// HTMLCollection svih objekata koji imaju navedeni tag name

let r4 = document.getElementsByName("link")
console.log(r4);// NodeList svih objekata koji imaju navedeni name atribut

/*
HTMLCollection ne poseduje forEach metodu!
r2.forEach(obj => {
    console.log(obj);
});
*/

// Prolazak kroz elemente HTMLCollection for petljom
for(let i = 0; i < r2.length; i++) {
    console.log(r2[i]);
}
//Moze se HTMLCollection konvertovati u Array, pa onda za Array koristiti forEach petlja.
let r2Array = Array.from(r2);
r2Array.forEach(obj => {
    console.log(obj);
});

//Elementima NodeList-e moze se pristupiti preko for i preko forEach petlje
r4.forEach(obj => {
    console.log(obj);
});

for(let i = 0; i < r4.length; i++) {
    console.log(r4[i]);
}

let r5 = document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem => {
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7);

// document.getElementsByName("link");
let r8 = document.querySelectorAll('[name="link"]');
console.log(r8);

// document.getElementsById("div1")
let r9 = document.querySelector("#div1"); //querySelector UVEK vraca objekat
console.log(r9);

let r10 = document.querySelectorAll("#div1");
console.log(r10); // querySelectorAll UVEK vraca Nodelist cak i kada se ta lista sastoji od jednog elementa

//Dohvatiti prvi paragraf na stranici.
let r11 = document.querySelector("p");
console.log(r11);

//Dohvatiti prvi div tag sa klasom „error“.
let r12 = document.querySelector(".error")
console.log(r12);

//Dohvatiti poslednji red u tabeli.
let r13 = document.querySelector('table')



//Menjanje elemenata iz HTML-a
console.log(r1.id);
console.log(r1.href);
console.log(r1.innerHTML);
r1.innerHTML = "Sadrzaj div elementa je tekst dodat iz JS-a";

let prviLink = document.querySelector("a");
prviLink.href = "http://www.wikipedia.com/"

prviLink.setAttribute('target', '_blank');
//prviLink.target = "_blank";
prviLink.setAttribute('href', "http://www.wikipedia.org");
prviLink.innerHTML = "Wikipedia";

// prviLink.style.color = "red";
// prviLink.style.backgroundColor = "blue";
// prviLink.style.textDecoration = "none";
// prviLink.style.border = "4px solid black";

prviLink.setAttribute("style", "color: red; background-color: blue; text-decoration: none; border: 4px solid black");

// Postaviti crveni border svim linkovima na stranici;
r7.forEach(link => {
    link.style.border = "4px solid violet"
});

// Drugi nacin
let linkovi = document.getElementsByTagName("a");
for(let i = 0; i < linkovi.length; i++) {
    linkovi[i].style.border = "3px solid green"
}

// Selektovati sve paragrafe i svakom od njih dodati tekst VAZNO!
let paragrafi = document.querySelectorAll("p");
paragrafi.forEach(paragraf => {
    paragraf.innerHTML += "Vazno!"
});


// divovima sa klasom "error" dodati po jedan naslov h1
let errorDiv = document.querySelectorAll("div.error");
errorDiv.forEach(er => {
    er.innerHTML += `<h1>Greska</h1>`;
});

// u svakom i-tom paragrafu dodati broj i^2, za svako i = 1, 2, 3... n
for(let i = 0; i < paragrafi.length; i++) {
    paragrafi[i].innerHTML += (i+1)**2;
}

//Svim slikama dodati alternativni tekst.
let tekst = document.querySelectorAll("img")
tekst.forEach(ispis => {
    ispis.setAttribute('alt', "slika facebook logo-a");
});

//svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom.
paragrafi.forEach(paragraf => {
    paragraf.setAttribute("style", "color:violet;")
});


// Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju.
let sviParagrafi = 0;
for(let i = 0; i < sviParagrafi.length; i++) {
    if(i % 2 == 0) {
        sviParagrafi[i].style.color = "green";
    } else {
        sviParagrafi[i].style.color = "red";
    }
}

// Svim linkovima na stranici postaviti padding na 5px, font na 18px i text decoration na none
for(let i = 0; i < linkovi.length; i++) {
    linkovi[i].style.padding = `5px`;
    linkovi[i].style.fontSize = `18px`;
    linkovi[i].style.textDecoration = `none`;
    // parnim linkovima staviti zelenu pozadinu i ljubicastu boju teksta a neparnim plavu pozadinu i belu boju teksta
    if(linkovi[i] % 2 == 0) {
        linkovi[i].style.color = `purple`;
        linkovi[i].style.backgroundColor = `lightgreen`;
    } else {
        linkovi[i].style.color = `white`;
        linkovi[i].style.backgroundColor = `darkblue`;
    }
}

//Svim slikama na stranici koje su sa ekstenzijom png postaviti okvir na debljinu 2px i crvenu boju
let slike = document.querySelectorAll(`img.png`);
slike.forEach(img => {
    img.style.border = `2px solid red`;
});

//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
// for(let i = 0; i < linkovi.length; i++) {
//     if(linkovi[i].href == 'target', '_blank'){
//         linkovi[i].setAttribute("target", "_top")
//     } else {
//         linkovi[i].href = 'target', '_blank'
//     }
// };

linkovi = document.querySelectorAll("a");
linkovi.forEach(link => {
    if(link.target === "_blank") {
        link.target = "_top";
    } else {
        link.target = "_blank";
    }
});

//Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
// U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

let imena = ["Stefan", "Mladen L", "Jelena V", "Stefan Dj", "Dusan M"];
imena.forEach(ime => {
    if(ime[0] == "S") {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
    } else {
        document.body.innerHtml += `<a href="#">${ime}</a>`
    }
})

let result = "<ul>";
imena.forEach((ime, i) => {
    if(i % 2 == 0) {
        result += `<li style = "color: blue">${ime}</li>`;
    } else {
        result += `<li style = "color: red">${ime}</li>`
    }
});
result += "</ul>";
document.body.innerHTML += result;

//Dohvatanje roditeljskog cvora

linkovi = document.querySelectorAll("a");

linkovi.forEach(link => {
    console.log(link.parentNode);
    link.parentNode.style.border = "2px solid red";
});

//Dohvatanje deteta nekog cvora
let prviDiv = document.querySelector("div.container");
prviDiv.childNodes.forEach(child => {
    console.log(child);
});

let n = prviDiv.childNodes.length;
for(let i = 0; i < n; i++){
    console.log(prviDiv.childNodes[i]);
}

let link1 = prviDiv.childNodes[1];
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);

link1.nextSibling.nextSibling.style.fontSize = "24px";

//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

sviParagrafi = 0;
for(let i = 0; i < sviParagrafi.length; i++) {
    if(i % 2 == 0) {
        sviParagrafi[i].element.classList.add('.error');
    } else {
        sviParagrafi[i].element.classList.add('.success');
    }
}


let noviParagraf = document.createElement("p");
noviParagraf.classList.add("klasa");
noviParagraf.id = "aj-di";
noviParagra.textContent = `Tekst novog paragrafa`;

let noviDiv = document.getElementById("div2");
//document.body.appendChild(noviParagraf)

let noviLink = document.createElement("a");
noviLink.textContent = "Klikni me";
noviLink.href="http://www.google.com"
noviParagraf.appendChild(noviLink);
//noviDiv,innerHTML += `<p class="Klasa" id="aj-di"> Tekst novog paragrafa</p>;