let imena = ["Stefan", "Nikola", "Djordje", "Milijana", "Ana", "Nenad", "Vuk", "Vladimir"];

let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length > maxDuzina) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}
console.log(maxDuzinaNiza(imena));

let ispisStringSvojstvo = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem =>{
        if(elem.length == md) {
            console.log(elem);
        }
    });
}

let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina
}

ispisStringSvojstvo(imena, maxDuzinaNiza);// maxDuzinaNiza je callback funkcija
ispisStringSvojstvo(imena, minDuzinaNiza);// minDuzinaNiza je callback funkcija

// let ispisStringMaxDuzina = niz => {
//     let md = minDuzinaNiza(niz);
//     niz.forEach(elem => {
//         if(elem.length == md) {
//             console.log(elem);
//         }
//     });
// }