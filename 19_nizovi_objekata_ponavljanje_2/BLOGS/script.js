

let blog1 = {
    title: "Musaka od tikvica",
    likes: 105,
    dislikes: 31
};

let blog2 = {
    title: "Lazanja",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Zapecena boranija!",
    likes: 60,
    dislikes: 32
};

let blogsArr = [blog1, blog2, blog3];

// Ispis objekat iz niza objekata
blogsArr.forEach(element => {
    console.log(element);
});

// Ispis naslova iz niza blogova
console.log(blog1.title);

blogsArr.forEach(element => {
    console.log(element.title);
});

console.log(blogsArr[0]); //Vraca objekat na 0. poziciju u nizu
console.log(blogsArr[0].title); // Vraca naslov objekta na 0. poziciju u nizu
for (let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

//Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca ukupan broj lajkova
let sumaLajkova = nizObj => {
    let ukupnoLajkova = 0;

    nizObj.forEach(obj => {
        ukupnoLajkova += obj.likes;
    });

    return ukupnoLajkova;
}
console.log(sumaLajkova(blogsArr));

//Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca prosecan broj lajkova
let prosekLajkova = nizObj => {
    let sum = sumaLajkova(nizObj);
    let br = nizObj.length
    return sum / br;
}
console.log(prosekLajkova(blogsArr));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let visePozitivnih = nizObj => {
    let lista = "<ul>";
    nizObj.forEach( obj => {
        if(obj.likes > obj.dislikes) {
            lista += `<li>${obj.title}</li>`;
            console.log(obj.title);
        }
    });
    lista += "</ul>";
    document.body.innerHTML += lista;
}
visePozitivnih(blogsArr);

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploVisePoz = nizObj => {
    nizObj.forEach(obj => {
        if(obj.likes > obj.dislikes * 2) {
            console.log(obj.title);
        }
    });
}
duploVisePoz(blogsArr);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let saUzv = nizObj => {
    nizObj.forEach(obj => {
        if(obj.title.endsWith("!")) {
            console.log(obj.title);
        }
    });
}
saUzv(blogsArr);

let rec = "Hello!";
let poslednjiKarakter = rec[rec.length - 1];
console.log(poslednjiKarakter); // pokazuje koji je to karakter po redu od nazad.

let poslednjiKarakter2 = rec.slice(-1); // pokazuje poslednjih toliko karaktera koliki je broj, od nazad. Ako se upise pozitivan broj onda od napred skida karaktere i prikazuje preostala slova.
console.log(poslednjiKarakter2);

