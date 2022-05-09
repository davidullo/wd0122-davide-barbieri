class Automobile {
    constructor(_pippo, _colore) {
        this.marca = _pippo
        this.colore = _colore
        this.ruote = 4;
        this.prezzo = 10000;
    }

    sconto(percentuale) {
        this.prezzo = (this.prezzo / 100) * (100 - percentuale)
    }
}

let mercedes = new Automobile('Mercedes', 'Nero')

console.table(mercedes);
mercedes.sconto(40);
console.table(mercedes);

let ferrari = new Automobile('Ferrari', 'Rossa')
let lamborghini = new Automobile('Lamborghini', 'Gialla')

// Utilizzo l'accesso ad Automobile, utilizzo il metodo "prototype" e inietto a tutti gli oggetti di quella classe, una nuova proprietà con un valore (coppia chiave-valore)
Automobile.prototype.brandProtetto = true;

console.table([ferrari, lamborghini]);
console.table(ferrari.brandProtetto);