export class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    stampaj() {
        console.log(`${this.ime}, ${this.visina}cm, ${this.tezina}kg.`);
    }

    bmi() {
        return this.tezina / ((this.visina / 100)**2);
    }

  kritican() {
        if(this.bmi() < 15 || this.bmi() > 40) {
            return true;
        } else {
            return false;
        }
    }

    set ime (value) {
        this._ime = value
    }
    set visina (value) {
        if(value >= 0 && value <= 250){
        this._visina = value
        } else {
            console.log(`Uneta neodgovarajuca visina`);
        }
    }
    set tezina (value) {
        if(value >= 0 && value <= 550) {
        this._tezina = value
        } else {
            console.log(`Uneta neodgovarajuca tezina`);
        }
    }

    get ime () {
        return this._ime;
    }
    get visina () {
        return this._visina;
    }
    get tezina () {
        return this._tezina;
    }
}