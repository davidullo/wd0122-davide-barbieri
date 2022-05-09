// abbiamo già creato un oggetto scrivendo "let oggetto = {}"
// 1) Creo un oggetto e lo valorizzo a mano
let oggetto = {
    nome: 'Mario'
}
// una funzione che crea oggetti, per convenzione, ha l'iniziale in maiuscolo (es. sotto)
// I due sistemi di sotto servono a creare serie di oggetti. Sono come dei libretti di istruzioni che servono a creare oggetti tutti identici, come se fossero stampini

// 2) Costruttore dell'oggetto
function CostruttoreOggetto() {
    this.nome = 'Mario';
}
// con "new" si avvia la funzione che, in questo caso, crea l'oggetto
let oggetto2 = new CostruttoreOggetto();

// 3) Classe. Questo è un metodo più nuovo che si avvicina agli altri linguaggi di programmazione.
class ClasseOggetto {
    constructor() {
        this.nome = 'Mario';
    }
}

console.log(oggetto);

// QUI "CREIAMO" LO STAMPINO
class Automobile { // class serve per creare costruttori
    constructor(_pippo, _colore) { // è un metodo che viene invocato nel momento in cui istanzio la classe
        this.marca = _pippo
        this.colore = _colore
        this.ruote = 4;
    }
}

// QUI "USIAMO" LO STAMPINO
let mercedes = new Automobile('Mercedes', 'Nero') // "mercedes" andrà al posto di _pippo
let apecar = new Automobile('Piaggio', 'Giallo')

apecar.ruote = 3;

console.table(apecar);
console.table(mercedes);

let fiat = new Automobile('', '');
fiat.marca = 'Fiat'
fiat.colore = 'Bianco'

console.table(fiat);

// Parentesi quadre

let pizza = {
    gusto: 'Margherita',
    0: 'Margherita',
    1: 'Napoletana' // se abbiamo degli oggetti con proprietà che iniziano con numeri o che contengono caratteri non permessi, avremo problemi chiamando le proprietà col ".", dovremo quindi utilizzare le parentesi
}

// pizza.0 non funzionerebbe
pizza['0']

pizza['gusto'] // si può fare, ma la sintassi corretta è quella sotto
pizza.gusto // questa è la sintassi corretta
// Usiamo la sintassi con parentesi quadre solo quando ci sono delle proprietà che non possono essere richiamate col "."

// Una funzione messa dentro un oggetto si chiama "metodo"

