//1. Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

let pilot = (a, b, c, d) => {
    let vremePoletanja = a * 60 + b;
    let vremeSletanja = c * 60 + d;
    let vremeSati = (Math.floor((vremeSletanja - vremePoletanja) / 60));
    let vremeMinuti = (vremeSletanja - vremePoletanja) % 60;
    let vremeLetenja = `Vreme letenja je ${vremeSati} sati i ${vremeMinuti} minuta`
    return vremeLetenja
}
console.log(pilot(3, 24, 2, 25));

//2. Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuke, banane) => {
    let rezultat = 0;
    if (jabuke < banane) {
    rezultat = console.log(`Od ${jabuke} jabuka i ${banane} banana moze se napraviti ${Math.floor((jabuke * 0.8) / 2)} jabana`);
    } else {
    rezultat = console.log(`Od ${jabuke} jabuka i ${banane} banana moze se napraviti ${Math.floor(banane / 3)} jabana`);
    }
    return rezultat
}
jaban(60, 60);

//ILI

function Kolicina (jab, ban){
    let neispravno = Math.floor((jab/100)*20);
    let jaban = 0;
    let ispravno = jab - neispravno;
    let Koristjab = ispravno/2;
    let Koristban = ban/3
    if( Koristban > Koristjab ){
       jaban = Koristjab;
       return Math.floor(jaban);
      }
      else if ( Koristjab > Koristban){
      jaban = Koristban;
      return Math.floor(jaban);
      }
  }
  console.log(Kolicina(60, 60));

//3. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami. Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let praksa = (n, a) => {
    let d = 10000;
    let ukupno = a;
    for(let i = 1; i < n; i++) {
        a += d;
        ukupno += a;
    }
    return ukupno
}
console.log(praksa(6, 100000));

//4. Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža od druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Odrediti dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).

let masina = (a, b, c) => {
    let d = 0;
    if ((a - b) == (b - c)) {
        d = c - (a - b);
    } else if ((a - b) == (b - c) / 2) {
        d = b - (a - b);
    } else if ((a - b) == (b - c) * 2) {
        d = a - (b - c)
    }
   return d
}
console.log(masina(2000, 1000, 500));

