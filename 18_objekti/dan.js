let dan = {
    datum: "2021/05/17",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperature: [30, -35, 35, 39, 38, -35, 34, 39, 39, 28],
    prosecna: function () {
        let suma = 0;
        this.temperature.forEach(temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    },
    //2. Metoda: Prebrojava i vraca koliko merenja je bilo sa natprosecnom temperaturom.
    natprosecna: function () {
        let avg = this.prosecna();
        let brojac = 0;
        this.temperature.forEach(elem => {
            if (elem > avg) {
                brojac++;
            }
        });
        return brojac;
    },
    //3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna: function () {
        let maks = this.temperature[0]
        this.temperature.forEach(elem => {
            if (maks < elem) {
                maks = elem;
            }
        });
        return maks
    },

    kolikoMaksimalnih: function() {
        let brojac = 0;
        this.temperature.forEach(elem => {
            if (this.maksimalna() == elem) {
                brojac++
            }
        });
        return brojac
    },

    //4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    izmedju: function (prva, druga) {
        let brojac = 0;
        this.temperature.forEach(elem => {
            if (prva < elem && druga > elem) {
                brojac++;
            }
        });
        return brojac
    },
    //5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
    iznadProseka: function () {
        if (this.natprosecna() > this.temperature.length / 2) {
            return true
        } else {
            return false
        }
    },
    //6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    // leden: function() {
    //     let ledenDan = true;
    //     this.temperature.forEach(elem => {
    //         if(elem > 0) {
    //             ledenDan = false;
    //         }
    //     });
    //     return ledenDan
    // },

    //ILI - bolje preko FOR
    // leden: function() {
    //     for(let i = 0; i < this.temperature.length; i++) {
    //         if(this.temperature[i] > 0) {
    //             return false;
    //         }
    //     }
    //     return true
    // },

    //ILI

    leden: function () {
        let leden = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] > 0) {
                leden = false;
                break
            }
        }
        return leden
    },
    //7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    // tropski: function() {
    //     let topaoDan = true;
    //     this.temperature.forEach(elem => {
    //         if(elem < 24) {
    //             topaoDan = false;
    //         }
    //     });
    //     return topaoDan
    // },
    tropski: function () {
        let topaoDan = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] < 24) {
                topaoDan = false;
            }
        };
        return topaoDan
    },
    //8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    // nepovoljan: function() {
    //     let razlika = this.temperature[0];
    //     let losDan = false;
    //     this.temperature.forEach(elem => {
    //         if(Math.abs(razlika - elem) > 8) {
    //             losDan = true;
    //         }
    //         razlika = elem;
    //     })
    //     return losDan
    // }
    nepovoljan: function () {
        let razlika = this.temperature[0];
        let losDan = false;
        for (let i = 0; i < this.temperature.length; i++) {
            if (Math.abs(razlika - this.temperature[i]) > 8) {
                losDan = true;
            }
            razlika = this.temperature[i];
        };
        return losDan
    },
    //9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati metod koji vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajen: function () {
        let cudanDan = false;
        if (this.kisa == true && this.temperature.forEach(elem => {
            if (elem < -5) {
                cudanDan = true;
            }
        })); else if (this.oblacno == true && this.temperature.forEach(elem => {
            if (elem > 25) {
                cudanDan = true;
            }
        })); else if (this.kisa == true && this.sunce == true && this.oblacno == true) {
                cudanDan = true;
            }
            return cudanDan; 
    },
    //10. Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) vrednosti temperature iz datog niza temperatura. 
    //Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
    //Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom.
    minimalna: function() {
        let najmanja = this.temperature[0];
        this.temperature.forEach(elem => {
            if(najmanja > elem) {
                najmanja = elem;
            }
        });
        return najmanja;
    },

    domaci: function() {
        let lista = `<ul>`
        this.temperature.forEach(elem => {
            if(elem == this.maksimalna()){
            lista += `<li style="color: red">${elem}</li>`
            }
            if(elem == this.minimalna()){
            lista += `<li style="color: blue">${elem}</li>`
            }
        });
        lista += `</ul>`
        document.body.innerHTML += lista;
        return lista
    }
};
//1.
console.log(dan.prosecna());
//2.
console.log(dan.natprosecna());
//2,5
console.log(dan.kolikoMaksimalnih());
//3.
console.log(dan.maksimalna());
//4.
console.log(dan.izmedju(9, 19));
//5.
console.log(dan.iznadProseka());
//6.
console.log(dan.leden());
//7.
console.log(dan.tropski());
//8.
console.log(dan.nepovoljan());
//9.
console.log(dan.neuobicajen());
//10.
console.log(dan.minimalna());
dan.domaci();