"use strict";
console.log('test');
class Car {
    constructor(mod, mar, col, p) {
        this.scontoRivenditore = 30;
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }
    dettagliAuto() {
        return this.modello + " " + this.marca + " " + this.colore;
    }
    set cambiaScontoRivenditore(n) {
        this.scontoRivenditore = n;
        // return '' // i setter non possono restituire un valore
    }
    get prezzoFinale() {
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }
    // public prezzoFinale(): number {
    //     return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100)
    // }
    static nazione() {
        console.log('Italia');
    }
}
let fiat = new Car('500', 'Fiat', 'Grigio', 10000);
fiat.cambiaScontoRivenditore = 20; // il setter (di cambiaScontoRivenditore) modifica anche le proprietà con accesso privato o protetto
console.log(fiat.prezzoFinale);
// console.log(fiat.modello, fiat.scontoRivenditore); // non posso accedere alle proprietà protette o private
console.log(fiat);
// fiat.nazione() // non posso usarlo così, perché non è legato all'oggetto, ma alla classe, infatti...
Car.nazione(); // ... così funzionerà
// le proprietà statiche possono avere a che fare solo con metodi statici, e viceversa. Vanno quindi insieme.
//enumeratori
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
console.log(Months);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
let colore = Color.Bianco;
//funzioni e oggetti
const states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    if (!c) { // !c significa "se c manca..."
        return a + b;
    }
    else {
        return a + b + c;
    }
}
class Veicoli {
    constructor(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
}
let apecar = new Veicoli(3, 'Piaggio', '', 1500, 'apecar');
class Cars extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(4, marca, modello, prezzo, 'Automobile');
        this.autoradio = true;
        this.costoPieno = 75; // private non permette scrittura/lettura dall'esterno, ma che relega la proprietà alla sola classe in cui è stata scritta.
    }
}
let auto = new Cars('Fiat', '500', 1500);
console.log(auto);
class electricCars extends Cars {
    cambiaCostoPieno() {
        // this.costoPieno = 30; // la proprietà costoPieno non è accessibile dalla sottoclasse
    }
}
class Bici extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(2, marca, modello, prezzo, 'Bicicletta');
    }
}
let autoElettrica = new electricCars('Fiat', '500 elettrica', 1500);
console.log(autoElettrica);
//# sourceMappingURL=app.js.map