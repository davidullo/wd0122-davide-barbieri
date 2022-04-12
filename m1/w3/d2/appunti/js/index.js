// -------- Stringhe ed escape
var saluto = "ciao";
var domanda = "Com'è oggi il tempo?";
// Con il backslash diciamo a JS di interpretare il carattere seguente come un carattere testuale, non come apice per chiudere la stringa
var domanda2 = 'Com\'è oggi il tempo?';
var html = '<div class="blocco"></div>';
// Oppure
var html2 = "<div class=\"blocco\"></div>";

var nome = 'Giovanni'; // Valore ipoteticamente definito dall'utente (in un campo di testo per es.)
var frase = "Ciao " + nome + " come stai?";
// Oppure si può fare nel modo seguente. Il backtick su mac si fa con OPTION + 9, su Windows ALT (e, da tastierino numerico) 9 + 6
var frase2 = `Ciao ${nome} come stai?`;

console.log(frase2.length);
// Con l'esempio in basso vengono restituite le lettere della frase
console.log(frase2[1]);
console.log(frase2.length);
console.log(frase[0]);
console.log(frase2[frase.length - 1]);
// Oppure length - 1 diventa una variabile
var ultimoIndice = frase.length - 1;
console.log(frase2[ultimoIndice]);

console.log('%c log colorato', 'color:red;font-size:30px'); //applicare i css ai console.log

// ---------- let e const
// const per convenzione si scrivono in maiuscolo
const PASSWORD = 'KJFOWH2938RY228';
console.log(PASSWORD);


var x = 1;

{
    console.log(x);
}

let y = 2;
{
    console.log(y);
}

{
    let y = 3;
    console.log(y);
}

// DIFFERENZA TRA LET E VAR: La let all'interno delle graffe non vale al di fuori di queste (le graffe che chiudono rappresentano un block o blocco) perciò si dice che è block-scope (perchè esiste solo in locale), mentre la var vale anche fuori di queste perché ignora la block-scope. Quindi con let possono essere create delle variabili locali

function scriviSaluto() {
    var s = 'ciao';
    document.write(s);
    return s;
}

document.write(scriviSaluto());

scriviSaluto();

// In ogni caso, le var all'interno di una funzione non possono essere chiamate al di fuori della funzione, a meno che non usiamo return

let num = 4;
let testo = '4';
let prezzo = '4€'

console.log(num + testo); // num viene trasformato in stringa
console.log(num * testo); // testo viene trasformato in numero e quindi moltiplicato
console.log(num * prezzo);

let bool = false;
let valore = "<br> il valore della variabile booleana è " + bool;
document.write(valore);

console.log(num * bool); // se convertito in numero, un valore booleano si trasforma in 0 se false, in 1 se true

let booleano = Number(true);
let errore = Number('4a')
console.log(booleano, errore);

let arr = ['a', 'b', 'c', 'd', 60];
document.write(arr); // i valori vengono concatenati in una stringa

// if = "se"; else if = "oppure se"; else = "altrimenti". L'operatore && (and) serve a mettere una seconda condizione 
// let eta = prompt('Quanti anni hai?');
// if (eta >= 18 && eta <= 120) {
//     document.write('sei maggiorenne')
// } else if (eta > 120) {
//     document.write('sei antico')
// } else {
//     document.write('sei minorenne')
// }

let eta = prompt('Quanti anni hai?');
if (eta >= 18 && eta <= 120) {
    document.write('sei maggiorenne')
} else if (eta > 120) {
    document.write('sei antico')
} else {
    location.href = 'https://it.peppapig.com/' // reindirizziamo al sito di peppa pig nel caso in cui l'utente sia minorenne
}

console.log(eta >= 18 && eta <= 120) // Questo è un modo per ricavare un booleano

let condizione = true;
// ! è l'operatore "not"
if (!condizione) {
    document.write('è vera')
}

// con == verifichiamo con un confronto, con = assegniamo un valore
let anni = 10;
if (anni == 10) {
    console.log('è vero')
}

// il || (doppio pipe) significa "or" ("oppure")

let nomi = 'Mario, Giovanni, ';
nomi += 'Carlo';
console.log(nomi);

// con += si va a modificare il valore della variabile, facendo una somma. Stesso meccanismo con -= *= /=
let conto = 5;
conto += 5;
conto += 5; // uscirà 15
console.log(conto);
