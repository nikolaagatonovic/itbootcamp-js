let igrac1 = {
    imePrezime: "Dejan Bodiroga ",
    visina: 2.00,
    timovi: ["Proleter", "Zadar", "Real Madrid", "Panathinaikos", "Barcelona"]
}

let igrac2 = {
    imePrezime: "Sasa Djordjevic ",
    visina: 2.80,
    timovi: ["Partizan", "Barcelona", "Real Madrid", "Olimpia"]
}

let igrac3 = {
    imePrezime: "Zeljko Rebraca ",
    visina: 3.80,
    timovi: ["Partizan", "Benetton", "Panathinaikos", "Detroid Pistons", "Atlanta Hawks", "LA Clippers"]
}


let igraci = [igrac1, igrac2, igrac3]

let prosecnaVisina = igraci => {
    let ukupnoVisina = 0;
    let brojac = 0;
    igraci.forEach(igrac => {
        ukupnoVisina += igrac.visina;
        brojac++
    });
    let prosek = ukupnoVisina / brojac
    return prosek
}
console.log(prosecnaVisina(igraci));

let igraliZaTim = (igraci, nazivTima) => {
    let brojac = 0;
    igraci.forEach(igrac => {
        igrac.timovi.forEach(tim => {
            if(tim == nazivTima) {
                brojac++
            }
        })
    })
    return brojac
}
console.log(igraliZaTim(igraci, "Barcelona"));

let najmanjeTransfera = igraci => {
    let najmanje = igraci[0].timovi.length
    igraci.forEach(igrac => {
        if(najmanje > igrac.timovi.length) {
            najmanje = igrac.timovi.length;
        }
    });
    console.log(najmanje);
    igraci.forEach(igrac => {
        if(najmanje == igrac.timovi.length) {
            console.log(igrac.imePrezime);
        }
    });
}
najmanjeTransfera(igraci);

let visiTimPodela = igraci => {
    let prviTim = 0;
    let drugiTim = 0;
        igraci.forEach((igrac, index) => {
            if(index < (igraci.length / 2)) {
                prviTim += igrac.visina;
            }
            if(index >= (igraci.length / 2)) {
                drugiTim += igrac.visina
            }
        });
        if(prviTim > drugiTim) {
            document.body.innerHTML += ("Visi je prvi tim");
        } else if (drugiTim > prviTim) {
            document.body.innerHTML += ("Visi je drugi tim");
        } else {
            document.body.innerHTML += ("Oba tima su u proseku iste visine");
        }
};
visiTimPodela(igraci)

let trenerVidi = igraci => {
    let najvisi = igraci[0].visina;
    let brojac = 1;
    igraci.forEach(igrac => {
        if(najvisi < igrac.visina) {
            najvisi = igrac.visina;
            brojac++
        }
    })
    return brojac
}
console.log(trenerVidi(igraci))