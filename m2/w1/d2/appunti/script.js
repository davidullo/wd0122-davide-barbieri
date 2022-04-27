/*

// L'array è un ottimo contenitore ma non è descrittivo (samsung è 0, galaxy è 1, e così via)
let cellulare = [
    'samsung',
    'galaxy s7 edge',

]

// descrivo in maniera precisa uno smartphone
let smartphone = {
    Marca: 'Samsung',
    Modello: 'Galaxy S7 Edge',
    Prezzo: 150,
    accendi: function () {
        // fa qualcosa. In questo caso la funzione si chiama "metodo"
    }
}

// ----- Lettura e scrittura degli oggetti -----

let j = {} // Questo è un oggetto vuoto
// let k = new Array()

let pizza = {
    gusto: 'Margherita',
    tipo: 'Napoletana',
    prezzo: 5,
    dettagli: function () {
        console.log('La pizza Margherita costa 5€');
    }
}
// accediamo in lettura ad una proprietà dell'oggetto
console.log(pizza.gusto);

pizza.gusto = 'Diavola' // Riassegniamo un valore alla proprietà "gusto"

console.log(pizza.gusto);

console.log(pizza);

pizza.dettagli() // Questo è un metodo

function dettagli() {
    console.log('è una funzione differente');
}

dettagli() // Questa è una funzione

//pizza.dettagli() e dettagli() sono due cose DIFFERENTI.

// ----- COSTRUTTORE DELL'OGGETTO -----

// Per convenzione, se la prima lettera è maiuscola significa che è una CLASSE (un oggetto)
// Nel costruttore ci vogliono gli "=" anziché i ":"
// function Pizza() {
//     this.gusto = 'Margherita',
//         this.tipo = 'Napoletana',
//         this.prezzo = 5,
//         this.dettagli = function () {
//             console.log('La pizza Margherita costa 5€');
//         }
// }

// function Pizza(g, tipo = 'Napoletana', p = 5) // In questo modo, i parametri preimpostati diventano opzionali e sovrascriveranno quelli preimpostati (come con margherita2)

// Il this appartiene all'oggetto che viene generato, tipo nel caso della margherita diventa "margherita.gusto"
function Pizza(g, t, p) {
    this.gusto = g
    this.tipo = t
    this.prezzo = p
    this.sconto = 0
    this.dettagli = function () {
        console.log('La pizza ' + this.gusto + ' costa ' + this.prezzo + '€');
    }
    this.prova = function () {
        this.dettagli() // posso lanciare un metodo all'interno dell'oggetto a cui appartiene
    }

}
// Quindi serve a creare tante istanze dello stesso oggetto!

let margherita = new Pizza('Margherita', 'Napoletana', 5) // Queste variabili sono istanze della classe pizza
let margherita2 = new Pizza('Margherita', 'Pinsa', 7)
let diavola = new Pizza('Diavola', 'Napoletana', 1)

console.log(margherita);
// margherita2.tipo = 'Romana'
console.log(margherita2);
margherita.dettagli()
diavola.sconto = 5
console.log(diavola)
diavola.dettagli()


Pizza.prototype.disponibilita = true // tutti gli oggetti della classe Pizza hanno ora una nuova proprietà chiamata "disponibilita"
Pizza.prototype.prova = function () {
    this.dettagli()
}

// Il metodo sopra è un po' vecchiotto

// Il seguente metodo è quello nuovo

class Pizza {
    constructor(g, tipo = 'Napoletana', p) {
        this.gusto = g
        this.tipo = tipo
        this.prezzo = p
        this.sconto = 0
    }

    dettagli() {
        console.log('La pizza ' + this.gusto + ' costa ' + this.prezzo + '€')
    }
}

let margherita = new Pizza('Margherita', 'Romana', 6)
console.log(margherita)

// Sistema furbo per oggetti che hanno tanti argomenti
class Prova {
    constructor(obj) {
        this.gusto = obj.gusto || 'Margherita'
        this.tipo = obj.tipo || 'Napoletana'
        this.prezzo = obj.prezzo || 5
        this.sconto = 0
    }
}

let info = {
    gusto: 'Diavola',
    tipo: 'Napoletana',
    prezzo: 6
}
let prova = new Prova(info)

// Quindi con il parametro "info" dentro new Prova andiamo a dire al constructor di scambiare "obj" con "info" e quindi tutte le proprietà di info con lo stesso nome vengono sovrascritte. Con l'operatore di coalescenza || gli diciamo "metti obj.proprietà, ma se non specificato metti quest'altra proprietà"

// Ereditarietà

class Persona {
    constructor(n, c, a) {
        this.nome = n
        this.cognome = c
        this.anni = a
    }

    presentazione() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni} anni`
    }

    static mostraOra() {
        console.log(new Date())
    }
}

let persona = new Persona('Mario', 'Rossi', 30);
console.log(persona.presentazione())

// Crea una classe Studente partendo (o "estendendo") dalla classe Persona
class Studente extends Persona {
    constructor(n, c, a, materie) {
        super(n, c, a) // attiva il costruttore della classe genitore valorizzando di fatto le proprietà ed eventualmente lancianco le stesse funzioni. Quindi super passa n, c ed a AL costruttore
        this.materie = materie
    }

    presentazione() {
        return super.presentazione() + ' e sto studiando le seguenti materie: ' + this.materie
    }

}

let studente = new Studente('Davide', 'Barbieri', 28, ['HTML', 'CSS', 'JS'])
console.log(studente.presentazione())

// utilizziamo le callbacks

function scrivi(testo, callback) {
    let testoDefinitivo = callback(testo)
    document.write(testoDefinitivo);
}

function grassetto(t) {
    return '<b>' + t + '</b>'
}
function corsivo(t) {
    return '<i>' + t + '</i>'
}

scrivi('ciao', grassetto)
scrivi('ciao', corsivo)

// fine callback

// La "promise" è un costrutto di JS che permette di gestire un dato che arriverà più tardi e che non è ancora disponibile (da qui Promise, nel senso che "ti prometto che il dato arriverà"). Es. ordino la pizza e siccome so che arriverà dico già "mangiala" con "then". .then serve per gestire le promise

let promise = new Promise(function (resolve, reject) {
    let password = 'password'
    if (password == 'password') {
        resolve('accesso consentito')
    } else {
        reject('accesso NON consentito')
    }
})

promise.then(function (s) {
    console.log(s);
}, function (e) {
    console.log(e);
})

let timer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('ok');
    }, 5000)
})

console.log(1)
timer.then(function (data) { // timer fai quello che vuoi e fai scorrere tutto, ma dopo (then) fai questo
    console.log(data);
})
console.log(2)

*/

// funzioni asincrone (async)

function prom() {

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('ok');
        }, 5000)
    })
}

async function scrivi() {
    let res = await prom().then(res => res) // attendi che prom() faccia il suo lavoro e poi fai la funzione freccia
    console.log(res);
}