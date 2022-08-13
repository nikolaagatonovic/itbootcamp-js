let nekaFunkcija = () => {
    console.log("nesto");
}
nekaFunkcija();

let zaposleni = (ime, prezime, godine) => {
    console.log(`Korisnik ${ime} ${prezime} ima ${godine} godina.`);
}
zaposleni("Rista", "Ristic", 60);


let zbir = (m, n) => {
    let rezultat = m + n;
    document.body.innerHTML = `Rezultat je ${rezultat}`;
}
zbir(3, 8);



let neparan = n => {
    if(n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
console.log(neparan(30));

let neparan2 = n => ( n % 2 != 0);
console.log(neparan2(30));

let maks2 = (m, n) => {
    if (m > n) {
        return m;
    } else {
        return n;
    }
}
console.log(maks2(22, 44));

let maks4 = (m, n, o, p) => {
    let a1 = maks2 (m, n);
    let a2 = maks2 (o, p);
    let a3 = maks2 (a1, a2);
    return a3;
}

//5 Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = (putanjaDoSLike) => {
    document.body.innerHTML += `<p><img src=${putanjaDoSLike}></p>`
}
slika("cvetic.png")

//6 Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let parColor = (color) => {
    document.body.innerHTML += `<p style="color:${color};">lalal lalala lalala la al aal alalala</p>`
}
parColor("e3e3e3");

//8 Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.
let deljivSaTri = (n, m) => {
    let brojac = 0;
    for(let i = n; i <= m; i++){
        if(i % 3 == 0) {
            brojac++;
        }
    }
    return brojac;      
}
console.log(deljivSaTri(2, 20));
