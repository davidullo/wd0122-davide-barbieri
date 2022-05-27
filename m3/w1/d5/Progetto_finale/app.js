"use strict";
class FirstUser {
    constructor(nome, numeroTelefono, carica) {
        this.numeroChiamate = 0;
        this.costoAlMinuto = 0.20;
        this.nome = nome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
    }
    ricarica(quantita) {
        this.carica += quantita;
    }
    chiamata(minuti) {
        let costoChiamata = minuti * 0.20;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class SecondUser {
    constructor(nome, numeroTelefono, carica) {
        this.numeroChiamate = 0;
        this.costoAlMinuto = 0.20;
        this.nome = nome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
    }
    ricarica(quantita) {
        this.carica += quantita;
    }
    chiamata(minuti) {
        let costoChiamata = minuti * 0.20;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class ThirdUser {
    constructor(nome, numeroTelefono, carica) {
        this.numeroChiamate = 0;
        this.costoAlMinuto = 0.20;
        this.nome = nome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
    }
    ricarica(quantita) {
        this.carica += quantita;
        console.log(`L'utente ${utente3.nome} ha effettuato una ricarica di ${quantita}€. Credito residuo: ${utente3.carica}€.`);
    }
    chiamata(minuti) {
        // let costoAlMinuto: any = 0.20; // mettendo il tipo number restituisce errore
        let costoChiamata = minuti * this.costoAlMinuto; // aggiungere il metodo .toFixed(2) per arrotondare a 2 decimali: dà problemi con i calcoli.
        if (this.carica >= this.costoAlMinuto) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log(`L'utente ${utente3.nome} ha effettuato ${utente3.numeroChiamate} chiamate. Credito residuo: ${utente3.carica}€.`);
        }
        else {
            console.log(`Credito insufficiente! Credito residuo: ${utente3.carica}€.`);
        }
    }
    numero404() {
        console.log(`Credito residuo di ${utente3.nome}: ${utente3.carica}€.`);
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Hai azzerato le chiamate di ${utente3.nome}: ${utente3.numeroChiamate} chiamate.`);
    }
}
// parametri > nome, numero, credito.
let utente1 = new FirstUser('Davide Barbieri', 123456789, 10);
let utente2 = new SecondUser('Mario Rossi', 987654321, 20);
let utente3 = new ThirdUser('Alice Bianchi', 321654987, 5);
// Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate
console.log(utente1);
utente1.chiamata(2);
utente1.chiamata(8);
utente1.chiamata(5);
utente1.chiamata(2);
// Decommentare sotto per azzerare le chiamate
// utente1.azzeraChiamate()
utente1.chiamata(2);
utente1.chiamata(7);
console.log(`L'utente ${utente1.nome} ha effettuato ${utente1.numeroChiamate} chiamate. Credito residuo: ${utente1.carica}€.`);
console.log('------------------');
console.log(utente2);
utente2.chiamata(5);
utente2.chiamata(11);
utente2.chiamata(7);
utente2.chiamata(9);
// Decommentare sotto per azzerare le chiamate
// utente2.azzeraChiamate()
utente2.chiamata(1);
utente2.chiamata(8);
utente2.chiamata(17);
utente2.chiamata(3);
console.log(`L'utente ${utente2.nome} ha effettuato ${utente2.numeroChiamate} chiamate. Credito residuo: ${utente2.carica}€.`);
console.log('------------------');
console.log(utente3);
utente3.chiamata(2);
utente3.chiamata(3);
utente3.chiamata(5);
// Decommentare sotto per azzerare le chiamate
// utente3.azzeraChiamate()
utente3.chiamata(2);
utente3.chiamata(7);
console.log(`L'utente ${utente3.nome} ha effettuato ${utente3.numeroChiamate} chiamate. Credito residuo: ${utente3.carica}€.`);
console.log('------------------');
let btnChiamata = document.getElementById('chiamata');
if (btnChiamata != null) {
    btnChiamata.addEventListener('click', function () {
        utente3.chiamata(1);
    });
}
let btnRicarica = document.getElementById('ricarica');
if (btnRicarica != null) {
    btnRicarica.addEventListener('click', function () {
        utente3.ricarica(5);
    });
}
let btnCredito = document.getElementById('credito');
if (btnCredito != null) {
    btnCredito.addEventListener('click', function () {
        utente3.numero404();
    });
}
let btnAzzera = document.getElementById('azzera');
if (btnAzzera != null) {
    btnAzzera.addEventListener('click', function () {
        utente3.azzeraChiamate();
    });
}
//# sourceMappingURL=app.js.map