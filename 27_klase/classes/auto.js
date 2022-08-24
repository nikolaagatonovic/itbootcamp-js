export class Auto {
    constructor(b, m, k) {
        this.boja = b;
        this.marka = m;
        this.krov = k;
    }

    sviraj() {
        console.log(`Beep!`);
    }

    set boja(x) {
        this._boja = x;
    }
    set marka(x) {
        this._marka = x;
    }
    set krov(x) {
        if(x === true || x === false) {
            this._krov = x;
        } else {
            this._krov = true;
        }
    }

    get boja() {
        return this._boja;
    }
    get marka() {
        return this._marka;
    }
    get krov() {
        return this._krov;
    }
}
