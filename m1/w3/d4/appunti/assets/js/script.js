let arr = [1, 2, 3, 4]
console.log(arr, arr.length);
console.log([5, 6, 7, 8], [5, 6, 7, 8].length); // posso creare array al volo senza creare una variabile

let pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]

console.log(pizze);
console.log(pizze[0]);

pizze[0] = 'Capricciosa';
console.log(pizze[0])

// voglio interagire con il primo "ul" che sta nell html
let ul = document.querySelector('ul');
console.log(ul.innerHTML);
console.log(ul.innerText);

let [pizza1, pizza2, pizza3] = pizze;

// metodi

let frase = 'La mia pizza preferita è la Diavola';
let indice = frase.indexOf('Diavola');
console.log(indice);

if (indice != -1) {
    console.log("trovato");
} else {
    console.log("non trovato");
}

// Riordinare la
let nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana',
]
nomi.sort(); // riordino in ordine alfabetico
console.log(nomi);

// aggiungere e rimuovere elementi di un array

nomi.push('Ivona'); //  aggiunge all'array ciò che sta tra parentesi, all'ultimo posto 
console.log(nomi);

let nomeEliminato = nomi.pop() // toglie l'ultimo elemento dell'array (nota che nn va specificato cosa togliere)
console.log('Hai eliminato il nome di ' + nomeEliminato);
// è possibile assegnare ad una variabile il risultato di pop(), in questo modo otterremo una copia di ciò che abbiamo eliminato

nomi.splice(2, 1) // significa che a partire dalla posizione 2 (tenendo conto del fatto che è 0-based quindi il primo è 0, e anche che l'elemento dell'indicie di partenza è compreso nell'eliminazione), ne elimina 1 (di elementi dell'array)
//array.splice(indiceDiPartenza, numeroElementiDaEliminare)
console.log(nomi)

nomi.splice(2, 1, 'Ledio') // il 3° elemento è facolativo, e viene aggiunto al posto dell'eliminato
console.log(nomi)

nomi = ['Mario', 'Zaria', 'Luca', 'Massimo', 'Adriana',]
let nomi2 = ['Francesco', 'Simone', 'Pasquale']
let nomi3 = ['Ivona', 'Leopoldo', 'Chiara',]

console.log(nomi)

let unito = nomi.concat(nomi2, nomi3) // concatena il contenuto di concat (ovvero gli array nomi2 e nomi3) su "nomi". L'array "nomi" non viene comunque distrutto, esiste ancora, solo che quelli concatenati li troviamo nell'array "unito"
console.log(unito)

let x = [1, 2, 3, 4, 'ciao', [4, 8, 96, ['a', 'b', 'c'], 'ciao']]
console.log(x[2])
console.log(x[5][2])
console.log(x[5][3][0]) // vai a leggere dentro x, trovami l'index numero 5, è un array quindi prendimi l'elemento numero 3, anche questo è un array, quindi per prendere l'elemento a scrivi 0.

// ----- split e join

frase = "La mia pizza preferita è la Diavola";
let arrFrase = frase.split(' '); // splitta la stringa (in questo caso dove c'è lo spazio) e crea un array 
console.log(arrFrase);

console.log(arrFrase[0]);


let citta = 'Roma,Milano,Napoli,Firenze';
let arrayCitta = citta.split(','); // splitta dove c'è la virgola
console.log(arrayCitta);

let nuovoArrayCitta = ['Roma', 'Milano', 'Napoli', 'Firenze'];
let nuovaStringaCitta = nuovoArrayCitta.join(); // crea una stringa da un array
// let nuovaStringaCitta = nuovoArrayCitta.join(', '); // mettendo un parametro in join possiamo aggiungere quello che vogliamo, tipo uno spazio
console.log(nuovaStringaCitta);

// per incrementare un numero possiamo usare l'operatore ++ per aumentare di un'unità

let numero = 1;
console.log(numero);

// aumentiamo di 1: il primo aumenta solo di un'unità, mentre nel secondo e terzo caso si può cambiare il numero di cui incrementare
numero++ // incremento di 1 il valore della variabile numerica
numero = numero + 1 // sovrascrivo il valore di x con il suo valore +1
numero += 1 // aggiungo 1 al valore della variabile

console.log(numero);

// decremento di 1
numero--
numero = numero - 1
numero -= 1

console.log(numero);

// -- arrotondare: con round viene arrotondato all'intero più vicino. nel caso di metà perfetta arrotonda per eccesso (tipo con 5.5)

let n1 = 5.3;
let n2 = 5.5;
console.log(Math.round(n2));

// con ceil arrotondiamo sempre per eccesso

let n3 = 0.01
console.log(Math.ceil(n3));

// -----  esempio con Oggetto Math

let ringraziamenti = ['Grazie', 'Grazie mille', 'Tante grazie', 'Ti ringrazio', 'Wow grazie']
let punteggiatura = [' ', '!!', '!']
let smile = [' ', '😃', '😊']

// let rand = Math.random() // genera numero da 0 a 1

// console.log(rand) // esce un numero decimale

// let rand1 = Math.floor(Math.random() * 3) // con floor si approssima al livello inferiore. Mettiamo *3 perché vogliamo che arrivi fino a 2 (partendo da 0)
// let rand2 = Math.floor(Math.random() * 3)
// let rand3 = Math.floor(Math.random() * 3)

// possiamo anche creare una funzione personalizzata per la lunghezza di ogni array, in questo modo non dobbiamo aggiornare manualmente il codice.
function generaRandom(arrValori) {
    return Math.floor(Math.random() * arrValori.length)
}

let rand1 = generaRandom(ringraziamenti)
let rand2 = generaRandom(punteggiatura)
let rand3 = generaRandom(smile)

let fraseRand = ringraziamenti[rand1] + punteggiatura[rand2] + ' ' + smile[rand3];
console.log(fraseRand);

let target = document.querySelector('#grazie')
target.innerHTML = fraseRand;