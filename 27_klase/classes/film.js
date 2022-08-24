export class Film {
    constructor(naslov, reziser, godina) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godina = godina;
    }

    set naslov(x) {
        this._naslov = x;
    }
    set reziser(x) {
        this._reziser = x;
    }
    set godina(x) {
        if(x > 1966) {
            this._godina = x;
        } else {
            this._godina = 1800;
        }
    }

    get naslov() {
        return this._naslov
    }
    get reziser() {
        return this._reziser
    }
    get godina() {
        return this._godina
    }

    stampaj() {
        console.log(`${this.naslov}`);
    }
}

