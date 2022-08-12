//Postupak dohvatanja click eventa
//1. Dohvatiti dugme
let btn = document.querySelector('button');

//2. Dodati event listener na zeljeni element (on aktivno slusa sve sto se dogadja nad tim elementom)
//btn.addEventListener('naziv eventa', funkcija koja se realizuje)
btn.addEventListener('click', () => {
    console.log('jednostruki klik');
});

///////////////////////////////

//1. Dohvatimo element
let dupliKlik = document.querySelector("#dupliKlik");

//2. Dodati event listener
dupliKlik.addEventListener('dblclick', () => {
    console.log('Dvostruki klik');
});