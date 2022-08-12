let blog1 = {
    title: 'Musaka od tikvica',
    likes: 105,
    dislikes: 61
};

let blog2 = {
    title: 'Lazanja!',
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: 'Zapecena boranija',
    likes: 60,
    dislikes: 32
};

// ispis objekata iz niza objekata
let blogsArr = [blog1, blog2, blog3]
blogsArr.forEach(element => {
    console.log(element);
})

// ispis naslova iz odredjenog bloga u nizu
console.log(blog1.title);

// ispis naslova svih elemenata iz niza blogsArr
blogsArr.forEach(element => {
    console.log(element.title);
})

// ispis naslova iz niz blogova for petljom
console.log(blogsArr[0]) // objekat na nultoj poziciji
console.log(blogsArr[0].title); // naslov objekta na nultoj poziciji
for(let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca ukupan broj lajkova.

let sumaLajkova = nizObjekata => {
    let lajkovi = 0;
    nizObjekata.forEach(objekat => {
        lajkovi += objekat.likes;
    });
    return lajkovi;
}
console.log(sumaLajkova(blogsArr))

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca prosecan broj lajkova.

let prosekLajkova = nizObjekata => {
    let suma = sumaLajkova(nizObjekata)
    let prosek = suma / blogsArr.length
return prosek;
}
console.log(prosekLajkova(blogsArr));


//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let visePozitivnih = nizObjekata => {
    let lista = `<ul>`;
    nizObjekata.forEach(objekat => {
        if(objekat.likes > objekat.dislikes) {
            lista += `<li>${objekat.title}</li>`;
            console.log(objekat.title);
        }
    });
    lista = `</ul>`;
    document.body.innerHTML += lista;
}
visePozitivnih(blogsArr)

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVisePoz = nizObjekata => {
    nizObjekata.forEach(objekat => {
        if(objekat.likes / 2 > objekat.dislikes) {
            console.log(objekat.title);
        }
    })
}
duploVisePoz(blogsArr)

//Napisati arrow funkciju kojoj se prosledjuje niz objekata a ona ispisuje sve naslove koji se zavrsavaju uzvicnikom

let saUzvicnikom = nizObjekata => {
    let nekiObjekat;
    nizObjekata.forEach(objekat => {
        if(objekat.title.endsWith("!")) {
            nekiObjekat = objekat.title
        }
    })
    return nekiObjekat
}
console.log(saUzvicnikom(blogsArr))