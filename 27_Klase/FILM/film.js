export class Film {
    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    set naslov(x) {
        this._naslov = x;
    }

    set reziser(x) {
        this._reziser = x;
    }

    set godinaIzdanja(x) {
        if (x > 1800) {
        this._godinaIzdanja = x;
        }
    }
    set ocene(x) {
        this._ocene = x;
    }


    get naslov() {
        return this._naslov;
    }

    get reziser() {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja
    }

    get ocene() {
        return this._ocene
    }

    //metod
    stampaj() {
        console.log(this.naslov, this.reziser, this.godinaIzdanja);
    }

    prosek() {
        let prosecnaOcena = 0;
        let zbirOcena = 0;
        this.ocene.forEach((elem) => {
            zbirOcena += elem;
        });
        prosecnaOcena = zbirOcena / this.ocene.length;
        return prosecnaOcena;
    }

}

