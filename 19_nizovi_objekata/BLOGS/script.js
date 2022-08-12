let blog = {
    title: "Funkcije",
    likes: 21,
    dislikes: 1
}

let blogs = [
    {title: "Nizovi", likes: 16, dislikes: 5},
    {title: "Grananje", likes: 14, dislikes: 0}
];

console.log(blogs);

////////////////////////////

let blog1 = {
    title: "Musaka od tikvica",
    likes: 105,
    dislikes: 31,
};

let blog2 = {
    title: "Lazanja!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Boranija",
    likes: 60,
    dislikes: 31
};

let blogsArr = [blog1, blog2, blog3];

//Ispis objekata iz niza objekata
blogsArr.forEach(elem => {
    console.log(elem);
});

//Ispis naslova iz niza blogova
console.log(blog1.title);
blogsArr.forEach(elem => {
    console.log(elem.title);
});

//Ispis naslova iz niza blogova for petljom
console.log(blogsArr[0]); //Vraca objekat na nultoj poziciji u nizu
console.log(blogsArr[0].title); //Vraca naslov objekta na nultoj poziciji
for(let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

//Napraviti arrow funkciju kojoj se prosedjuje niz objekata a ona vraca ukupan broj lajkova
let sumaLajkova = nizObj => {
    let ukupnoLajkova = 9;

    nizObj.forEach(elem => {
        ukupnoLajkova += elem.likes;
    });

    return ukupnoLajkova
}
console.log(sumaLajkova(blogsArr));

//Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca prosecan broj lajkova
let prosekLajkova = nizObj => {
    let sum = sumaLajkova(nizObj);
    let br = nizObj.length;
    return sum / br;
}
console.log(prosekLajkova(blogsArr));
 
//Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona ispisuje sve one naslove blogova koji imaju vise pozitivnih nego negativnih ocena.
let visePoz = nizObj => {
    let lista = "<ul>";
    nizObj.forEach(elem => {
        if(elem.likes > elem.dislikes) {
            lista += `<li>${elem.title}</li>`
            console.log(elem.title);
        }
    });
    lista += "</ul>"
    document.body.innerHTML += lista;
}
visePoz(blogsArr);

// let naslovi = "";
// naslovi += elem.title + " "

//Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona ispisuje sve one naslove blogova koji imaju najmanje duplo vise pozitivnih nego negativnih ocena.

let duploVisePoz = nizObj => {
    nizObj.forEach(elem => {
        if((elem.likes / 2) >= elem.dislikes) {
            console.log(elem.title);
        }
    });
}
duploVisePoz(blogsArr);

//Napisati arrow funkciju kojoj se prosledjuje niz objekata a ona ispisuje sve naslove koji se zavrsavaju uzvicnikom

let uzvicnik = nizObj => {
    nizObj.forEach(elem => {
        if(elem.title.endsWith("!")) {
            console.log(elem.title);
        }
    })
}
uzvicnik(blogsArr)
// ovde moze i
//let poslednjiKarakter = rec[rec.length -1]
//ILI
//let poslednjiKarakter = rec.slice(-1); upisan broj odredjuje koliko poslednjih karaktera da ispise