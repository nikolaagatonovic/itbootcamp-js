/*
Dohvatiti sve <li> elemente sa stranice.
Svakom <li> elementu iz liste dodati Event Listener
(Hint: proći petljom po listi <li> elemenata koje ste dohvatili i svakom od njih dodati Event Listener)
Kada se klikne na <li> precrtati tekst 
u elementu na koji je kliknuto
Kada se ponovo klikne na precrtani 
<li> element, „otprecrtati ga“
*/

let li = document.getElementById('lista');
let dugme = li.getElementsByTagName('button');
for(let i = 0; i < dugme.length; i++) {
    dugme[i].addEventListener('click', e => {
        e.preventDefault()
        dugme[i].classList.toggle('saLinijom')
    })
}

//ILI

// let elementiListe = document.querySelectorAll('li');
// elementiListe.forEach(li => {
//     li.addEventListener('click', e => {
//         if(li.style.textDecoration == "none") {
//             li.style.textDecoration = 'line-through';
//         } else {
//             li.style.textDecoration = 'none';
//         }
//     })
// })