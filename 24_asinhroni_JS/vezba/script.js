let zahtev = new XMLHttpRequest();

// zahtev.addEventListener('readystatechange', () => {
//     if(zahtev.readyState == 1) {
//         console.log('Uspostavljena konekcija');
//     } else if (zahtev.readyState == 2) {
//         console.log('Poslat zahtev serveru');
//     } else if (zahtev.readyState == 3) {
//         console.log('Odgovor je u statusu preuzimanja');
//     } else if (zahtev.readyState == 4) {
//         console.log('Preuzet odgovor sa servera u potpunosti');
//         console.log(zahtev.responseText);
//     }
// });

zahtev.addEventListener("readystatechange", () => {
    if(zahtev.readyState === 4) {
        let odgovor = zahtev.responseText;
        //Odgovor je uvek string
        let odgovorJS = JSON.parse(odgovor);
        // console.log(odgovor);
        console.log(odgovorJS);
        //Sada ovaj odgovorJS mozemo da provlacimo kroz forEach petlju i dolazimo do objekata koje zelimo
    }
})

zahtev.open("GET", "https://jsonplaceholder.typicode.com/users/4")
zahtev.send();