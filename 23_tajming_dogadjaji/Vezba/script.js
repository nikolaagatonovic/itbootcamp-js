//Napraviti dva dugmeta i input kao na slici. Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde. Klikom na dugme „Stop“ pauzira se odbrojavanje.

let b1 = document.getElementById("start");
let b2 = document.getElementById("stop");
let inputPolje = document.getElementById('polje')
let clock = null;

inputPolje.value = 1;

b1.addEventListener("click", () => {
    if(clock === null) {
        clock = setInterval(() => {
            inputPolje.value++;
        }, 1000);
    }
});

b2.addEventListener("click", () => {
    clearInterval(clock);
    clock = null;
});