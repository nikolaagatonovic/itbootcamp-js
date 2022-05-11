let ispisKonzola = poruka => {
    console.log(poruka);
}

let ispisStranica = poruka => {
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}

let ispisNiza = (niz, callback) => {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += niz[i] + "";
    }
    callback(poruka)
}

let a = ["lorem", "ipsum"];
ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);