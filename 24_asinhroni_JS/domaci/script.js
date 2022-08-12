//1. Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
//2. Ispisati u konzoli one korisnike čiji website ima domen „.com“.
//3. Ispisati korisnike čije ime sadrži reč „Clementin“.
//4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
//5. Ispisati sve različite gradove u kojima rade ovi korisnici.
//6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.


let request = new XMLHttpRequest();
let osobeSajt = new Set();
let osobeIme = new Set();
let gradovi = new Set();
let osobeNeg = new Set();
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        data.forEach(user => {
            if(user.website.includes('.com')) {
                osobeSajt.add(user.name);
                gradovi.add(user.address.city);
            }
            if(user.name.includes('Clementin')) {
                osobeIme.add(user.name);
                gradovi.add(user.address.city);
            }
            if(user.company.name.includes('Group') || user.company.name.includes("LLC")){
                gradovi.add(user.address.city);
            }
            if(user.address.geo.lat && user.address.geo.lng < 0) {
                osobeNeg.add(user.name)
            }
        });
        console.log(`Osobe ciji je domen .com`);
        console.log(osobeSajt);
        console.log("-------------------------------");
        console.log(`Osobe sa kljucnim recima`);
        console.log(osobeIme);
        console.log("-------------------------------");
        console.log(`Gradovi svih ovih osoba`);
        console.log(gradovi);
        console.log("-------------------------------");
        console.log(`Gradovi sa negativnim vrednostima`);
        console.log(osobeNeg);
    } else if(request.readyState === 4) {
        console.log('Nemoguce dobiti odgovor od servera');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.send();
