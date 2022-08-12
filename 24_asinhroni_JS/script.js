let request = new XMLHttpRequest();
/*
request.addEventListener('readystatechange', () => {
    if(request.readyState == 1) {
        console.log("Uspostavljena konekcija");
    } else if(request.readyState == 2) {
        console.log("Poslat zahtev serveru");
    } else if(request.readyState == 3) {
        console.log("Odgovor je u statusu preuzimanja");
    } else if(request.readyState == 4) {
        console.log("Preuzet odgovor sa servera u potpunosti");
        console.log(request.responseText);
    }
});
*/
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) { //status == 200 proverava i javlja da li postoji greska u putanji
        let odgovor = request.responseText; //odgovor je uvek string
        let odgovorJS = JSON.parse(odgovor);
        console.log(odgovor);
        console.log(odgovorJS);
    } else if(request.readyState === 4) {
        console.log('Nemoguce dobiti odgovor od servera');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/5'); // Uspostavljanje konekcije
request.send(); // slanje HTTP zahteva

console.log('Nesto posle 1');
console.log('Nesto posle 2');

//Domaci 16
