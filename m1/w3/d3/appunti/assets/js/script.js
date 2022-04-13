let num = 5;
let str = 'test';
let bool = true;
let arr = [];
let obj = {};

console.log(
    typeof num,
    typeof str,
    typeof bool,
    typeof arr,
    typeof obj
);

if (typeof num == 'number') {
    console.log('è un numero')
}

let num1 = 1;
let num2 = '1';

console.log(num1 == num2); // vero anche se i tipi di dato sono diversi, ma i valori sono uguali
console.log(num1 === num2); // falso perché devono essere identici anche i tipi di dato
console.log(num1 != num2); // falso perché il valore è diverso
console.log(num1 !== num2); // falso perché devono essere diversi anche i tipi di dati

// Operatore di coalescenza (||). Si legge "Età sarà uguale al dato inserito dall'utente, ma se l'utente non inserisce nulla allora età sarà 0"
let eta = prompt('Scrivi la tua età') || 0;

// OPERATORE TERNARIO. Il ? significa "cosa succede in caso la condizione sia true" (tradotto leggendo diremo "allora"). I : significa altrimenti
// let conferma = prompt('Scrivi la tua età') >= 18 ? 'Sei maggiorenne' : 'Sei minorenne'
// document.write(conferma)

let conferma = eta >= 18 ? 'Sei maggiorenne' : 'Sei minorenne'
document.write(conferma)

