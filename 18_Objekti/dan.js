let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [-10, -15, -17, -21, -18, -21, -13, 11],
    prosecna: function(){
        let suma = 0;
        this.temperature.forEach( temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    },
// 2. Metoda Prebrojava i vraca koliko merenja je bilo sa natprosecnom temperaturom.
natprosecna: function() {
    let avg = this.prosecna();
    let br = 0;
    this.temperature.forEach(element => {
        if(element > avg) {
            br++;
        }
    });
    return br;
},


// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
maksimalna: function() {
    let maks = this.temperature[0];
    //Preko for petlje
    // for(let i = 0; i < this.temperature.length. i++){
    //     if(maks < this.temperature[i]) {
    //         maks = this.temperature[i];
    //     }
    // }
    //Preko forEach petlje
    this.temperature.forEach(element => {
        if(maks < element) {
            maks = element;
        }
    })
    return maks;
    },
    brojMaksimalnih: function(){
        let maks = this.maksimalna();
        let brMaks = 0;
        this.temperature.forEach(element => {
            if(element == maks) {
                brMaks++;
            }
        });
        return brMaks;
    },
//4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
izmedjuDve: function (temp1, temp2) {
    //Ukoliko je temp1 vece od temp2 treba da zamene mesta.
    if(temp1 > temp2) {
        let tmp = temp1;
        temp1 = temp2;
        temp2 = temp1;//temporary - pomocna promenljiva
    }
    let br = 0;
    this.temperature.forEach(element => {
        if(element > temp1 && element < temp2) {
            br++;
        }
    });
    return br;
},
//5.
vecinomNatprosecna: function(){
        let avg = this.prosecna();
        let iznad = this.natprosecna();
        let ispod = this.temperature.length - iznad;
        return iznad > ispod;
        // if(iznad > ispod) {
        //     return true;
        // } else {
        //     return false;
        // }
    },
//6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

ledenDan: function() {
    // Prvi nacin
    // let leden = true;
    // this.temperature.forEach(element => {
    //     if(element >= 0) {
    //         leden = false;
    //     }
    // });
    // return leden;

    // Drugi nacin
    // for(let i = 0; i< this.temperature.length; i++) {
    //     if(this.temperature[i] >= 0) {
    //         return false;
    //     }
    // }
    // return true;
    // Treci nacin
    let leden = true;
    for(let i = 0; i < this.temperature.length; i++) {
        if(this.temperature[i] >= 0) {
            leden = false;
            break;
        }
    }
    return leden;
},

//7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
tropskiDan: function(){
let tropski = true;
for(let i = 0; i < this.temperature.length; i++){
    if(this.temperature[i] < 24) {
        tropski = false;
        break;
        }
    }
    return tropski;
},

//8.Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
nepovoljanDan: function(){
    let nepovoljan = true;
    for(let i = 0; i < this.temperature.length; i++){
        
    }
}
};
//1. Metoda: Odredjuje prosecnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());

//2. Metoda: Prebrojava i vraca koliko merenja je bilo sa natprosecnom temperaturom
console.log(dan.natprosecna());

// 3. Metoda: Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.brojMaksimalnih());

//4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.izmedjuDve(16, 20));
console.log(dan.izmedjuDve(20, 16))

//5. Metoda: Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
console.log(dan.vecinomNatprosecna());

//6. Metoda: Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.ledenDan());

//7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropskiDan());