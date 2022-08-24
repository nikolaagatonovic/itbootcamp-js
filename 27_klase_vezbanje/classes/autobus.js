export class Autobus {
    constructor(regBroj, brSedista) {
        this.regBroj = regBroj;
        this.brSedista = brSedista;
    }

    set regBroj(regBroj) {
        this._regBroj = regBroj;
    }
    set brSedista(brSedista) {
        this._brSedista = brSedista;
    }

    get regBroj() {return this._regBroj};
    get brSedista() {return this._brSedista};

    podaci() {
        console.log(`${this.regBroj}, ${this.brSedista}`);
    }
}
