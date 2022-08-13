function nekaFunkcija() {
    console.log("Zdravo bre");
    document.body.innerHTML = `Zdravo bre`
}
nekaFunkcija();


function zaposleni (ime, prezime, godine) {
    console.log(`Korisnik ${ime} ${prezime} ima ${godine} godina`);
    document.body.innerHTML += `<p>Korisnik ${ime} ${prezime} ima ${godine} godina.</p>`
}
zaposleni ("Miki", "Mikic", 30);
zaposleni ("Vlasta", "Vasic", 65);
zaposleni ("Robi", "Kovac", 45);


function zbir (m, n) {

    let rezultat = m + n;
    console.log(rezultat);
    document.body.innerHTML += `rezultat je ${rezultat}<br>`
}
zbir(22, 33);

let m = 55;
let n = 66;
zbir(m, n);

//3 Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n){
    if(n % 2 != 0) {
    return true;
    } else {
        return false;
    }
}
console.log(neparan(30));

//4 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.


function maks2 (m, n){
    if (m > n) {
        return m;
    } else {
        return n
    }
}

console.log(maks2 (13, 6));

function maks4 (m, n, o, p) {
    let a1 = maks2 (m, n);
    let a2 = maks2 (o, p);
    let a3 = maks2(a1, a2);
    return a3;
}
console.log(maks4(2, 9, 8, 7));

function maks8(a, b, c, d, e, f, g, h) {
    function maks2(a, b) {
        if(a > b) {
            return a;
        } else {
            return b;
        }
    }
    function maks4(a, b, c, d) {
        let a1 = maks2 (a, b);
        let a2 = maks2 (c, d);
        let aR = maks2 (a1, a2);
        return aR;
    }
    let b1 = maks4(a, b, c, d);
    let b2 = maks4(e, f, g, h);
    let bR = maks2(b1, b2)
    return bR;
}
console.log(maks8(122, 2, 12, 4, 5, 6, 7, 8));

//5 Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(putanjaDoSlike){
    document.body.innerHTML += `<img src="${putanjaDoSlike}">`
}
slika("cvetic.png")

//6 Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function parColor(color) {
    document.body.innerHTML += `<p style="color: ${color};">lorem ipsum lalala lalla lalala lalala lalala lalala lalal</p>`
}
parColor("#123456");

//7 Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
    switch(n) {
        case 1:
            console.log("ponedeljak");
            break
        case 2:
            console.log("utorak");
            break
        case 3:
            console.log("sreda");
            break
        case 4:
            console.log("cetvrtak");
            break
        case 5:
            console.log("petak");
            break
        case 6:
            console.log("subota");
            break
        case 0:
        case 7:
            console.log("nedelja");
            break
        default:
            console.log('Unet je pogresan dan')
    }
}
sedmiDan(3)

//8 Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m) {
    brojac = 0;
    for(let i = n; i <= m; i++) {
        if(i % 3 == 0){
        brojac+=1;
    }
}
document.body.innerHTML += `<p>Broj brojeva od n do m koji su deljivi sa 3 je ${brojac}</p>`;
}
deljivSaTri(2, 99);

//9 Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    suma = 0;
    for(let i = n; i <= m ; i++) {
        suma+=i;
    }
    console.log(suma);
}
sumiraj(2, 10);

//10 Napraviti funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function pomnozi(n, m) {
    proizvod = 1;
    for(let i = n; i <= m; i++) {
        proizvod*=i;
    }
    console.log(proizvod);
}
pomnozi(2, 15);

//11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sredina(n, m) {
    let brojac = 0;
    let suma = 0;
    
    for(let i = n; i <= m; i++) {
        suma+=i;
        brojac++;    
    }
    let arSr = suma / brojac;
    return arSr;
}
sredina(2, 6);

//12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function sredina3(n, m) {
    let brojac = 0;
    let suma = 0;
    for(let i = n; i <= m; i++) {
        if( i % 10 == 3){
            suma+=i;
            brojac++;
        }
    }
    let arSr = suma / brojac;
    console.log(arSr);
}
sredina3(2, 23);

//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function ceoBroj(n) {
    document.body.innerHTML +=`<p style="font-size: ${n}px">lorem lorem lorem lorem lorem</p>.`
}
ceoBroj(22);