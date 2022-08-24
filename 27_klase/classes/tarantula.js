export class Tarantula {
    constructor(rod, boja, velicina, jakOtrov) {
        this.rod = rod;
        this.boja = boja;
        this.velicina = velicina;
        this.jakOtrov = jakOtrov;
    }

    getRodAndJakOtrov() {
        console.log(`${this.rod} - ${this.jakOtrov}`);
    }

    get rod() {return this._rod;}
    set rod(r) {this._rod = r;}

    get boja() {return this._boja;}
    set boja(b) {this._boja = b;}

    get velicina() {return this._velicina;}
    set velicina(v) {this._velicina = v;}

    get jakOtrov() {return this._jakOtrov;}
    set jakOtrov(j) {this._jakOtrov = j}
}
