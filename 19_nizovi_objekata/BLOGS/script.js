let blog = {
    title: 'Funkcije',
    likes: 21,
    dislikes: 1
}

let blogs = [
    {title: 'Nizovi', likes: 16, dislikes: 5},
    {title: 'grananje', likes: 14, dislikes: 0}
];

console.log(blogs);

///////////////////////////

let blog1 = {
    title: 'Musaka sa tikvicama',
    likes: 105,
    dislikes: 31,
};

let blog2 = {
    title: "Lazanje!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Zapecena boranija!",
    likes: 60,
    dislikes: 32
}

let blogsArr = [blog1, blog2, blog3];

//ispis objekata iz niza objekata
blogsArr.forEach(element => {
    console.log(element);
});

//1. Napisati forEach petlju koja ispisuje sve nalsove iz niza
// Ispis naslova iz niza blogova forEach petljom
console.log(blog1.title);
blogsArr.forEach(element => {
    console.log(element.title);
})

// Ispis naslova iz niza blogova for petljom
console.log(blogsArr[0]); // Vraca objekat na nultoj poziciju u nizu
console.log(blogsArr[0].title); // Vraca naslov objekta na nultoj poziciji
for(let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

//2. Napraviti arrow fju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
let sumaLajkova = (nizObj) => {
    let ukupnoLajkova = 0;
    nizObj.forEach(obj => {
        ukupnoLajkova += obj.likes;
    });
    return ukupnoLajkova;
}
console.log(sumaLajkova(blogsArr));

//Napraviti arrow fju kojoj se prosledjuje niz objekata a ona vraca prosecan broj lajkova
let prosekLajkova = nizObj => {
    let sum = sumaLajkova(nizObj);
    let br = nizObj.length;
    return sum / br;
}
console.log(prosekLajkova(blogsArr));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let visePozitivnih = nizObj => {
    let naslovi = "";
    nizObj.forEach(obj => {
        if(obj.likes > obj.dislikes){
            naslovi += obj.title + " ";
        }
    });
    return naslovi
}
console.log(visePozitivnih(blogsArr));
//DRUGI NACIN
let viseLajkova = niz => {
    let lista = "<ul>";
    niz.forEach(element => {
        if(element.likes > element.dislikes) {
            lista += `<li>${element.title}</li>`;
            console.log(element.title);
        }
    });
    lista += "</ul>"
    document.body.innerHTML += lista;
}
viseLajkova(blogsArr);
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

visePozitivnih = nizObj => {
    let naslovi = "";
    nizObj.forEach(obj => {
        if(obj.likes > obj.dislikes*2){
            naslovi += obj.title + " ";
        }
    });
    return naslovi
}
console.log(visePozitivnih(blogsArr));

viseLajkova = niz => {
    lista = "<ul>";
    niz.forEach(element => {
        if(element.likes >= element.dislikes*2) {
            lista += `<li>${element.title}</li>`;
            console.log(element.title);
        }
    });
    lista += "</ul>"
    document.body.innerHTML += lista;
}
viseLajkova(blogsArr);


let rec = "Hello!";
let poslednjiKarakter = rec[rec.length-1]
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1);
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length - 1); //vraca karakter na odredjenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!")
console.log(poslednjiKarakter3); //! vraca true a u suprotnom false

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnik = niz => {
    niz.forEach(element => {
        let naslov = element.title;
        // 1. nacin
        // if(naslov[naslov.length-1] == "!") {
        //     console.log(naslov);
        // }
        if(naslov.endsWith("!")) {
            console.log(naslov);
        }
    });
}
uzvicnik(blogsArr);