let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let divIspis = document.getElementById('ispis');
let clockPeriod = null;

b3.addEventListener("click", () => {
    if(clockPeriod == null) {
        clockPeriod = setInterval (() => {
        let datum = new Date();
        let sati = datum.getHours();
        let minuti = datum.getMinutes();
        let sekundi = datum.getSeconds();
        divIspis.innerHTML = `${sati}:${minuti}:${sekundi}`
        }, 1000);
    }
});

b4.addEventListener("click", () => {
    clearInterval(clockPeriod);
    clockPeriod = null;
})

let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let input = document.getElementById('inputTajmer')
let startnaVrednost = null;
input.value = 0;

b5.addEventListener('click', () => {
    if(startnaVrednost == null) {
        startnaVrednost = setInterval (() => {
            input.value++
        }, 1000)
    }
})

b6.addEventListener('click', () => {
    clearInterval(startnaVrednost);
    startnaVrednost = null;
})
