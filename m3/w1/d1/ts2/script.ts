let boolean: boolean = true;
if (boolean) {
    console.log('tutto ok');

}

let eta: number = 30;
if (eta < 18) {
    console.log('sei minorenne');
} else if (eta >= 18 && eta <= 120) {
    console.log('sei maggiorenne');
} else {
    console.log('sei antico');
}

console.log(eta >= 18 && eta <= 120); // gli operatori di comparazione danno un true o false. questo è true
console.log(eta >= 18 && eta <= 20); // questo è false perché dovrebbero essere entrambe vere per dare true
console.log(eta >= 18 || eta <= 20); // questo è true perché basta che una delle due sia vera per dare vera

let b: boolean = true;
console.log(b);
console.log(!b); // l'operatore ! ('not') serve ad invertire il risultato. darà false se true, e viceversa
console.log(!(eta >= 18 && eta <= 120)); // darà false perché inverte il risultato di riga 16
