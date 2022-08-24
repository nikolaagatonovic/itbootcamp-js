export class Knjiga {
    constructor(naslov, autor, godina, brojStrana, cena) {
        this.naslov = naslov;
        this.autor = autor;
        this.godina = godina; 
        this.brojStrana = brojStrana;
        this.cena = cena;
    }

    set naslov(naslov) {
        this._naslov = naslov;
    }
    set autor(autor) {
        this._autor = autor;
    }
    set godina(godina) {
        this._godina = godina;
    }
    set brojStrana(brojStrana) {
        this._brojStrana = brojStrana;
    }
    set cena(cena) {
        this._cena = cena;
    }

    get naslov() { return this._naslov};
    get autor() { return this._autor};
    get godina() { return this._godina};
    get brojStrana() { return this._brojStrana};
    get cena() {return this._cena};

    stampajSve() {
        console.log(`${this.naslov}, ${this.autor}, ${this.godina}, ${this.brojStrana} str, ${this.cena} rsd`);
    }

    obimna() {
        return this.brojStrana > 600
    }

    skupa() {
        return this.cena > 8000
    }

    dugackoIme() {
        return this.autor.length > 18 
    }
}

