export class Boja {
    constructor(talDuzina, zasicenje, intenzitet) {
        this.talDuzina = talDuzina;
        this.zasicenje = zasicenje;
        this.intenzitet = intenzitet;
    }
    set talDuzina(talDuzina) {
        this._talDuzina = talDuzina;
    }
    set zasicenje(zasicenje) {
        this._zasicenje = zasicenje;
    }
    set intenzitet(intenzitet) {
        this._intenzitet = intenzitet;
    }

    get talDuzina() {return this._talDuzina};
    get zasicenje() {return this._zasicenje};
    get intenzitet() {return this._intenzitet};

}