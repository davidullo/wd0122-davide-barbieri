// FUNZIONE CHE CALCOLA UN RANGE DI ANNI
function calcAge1(birthYear) {
    return 2060 - birthYear;
}
console.log('FUNZIONE RANGE ANNI: Avrai ' + calcAge1(1994) + ' anni');

// FUNZIONE FRECCIA => INVOCARE E MOSTRARE OUTPUT
const calcAge3 = birthYear => 2030 - birthYear;
const age3 = calcAge3(1994);
console.log('FUNZIONE FRECCIA: Nel 2030 avrai ' + age3 + ' anni');

// FUNZIONE DENTRO FUNZIONE
function closure(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}
let risultato = closure(7)(11)(9)
console.log('FUNZIONE DENTRO FUNZIONE: il risultato è ' + risultato);

// UTILIZZARE DEGLI OPERATORI (SPECIALMENTE QUELLI DI COMPARAZIONE)
const age = 27;
const drink = age >= 18 ? `vino 🍷` : `acqua 💧`;
let drink2;
if (age >= 18) {
    drink2 = `vino 🍷`;
} else {
    drink2 = `acqua 💧`
}
console.log(`OPERATORE DI COMPARAZIONE (cambiare età per cambiare risultato): Mi piace bere ${age >= 18 ? `vino 🍷` : `acqua 💧`}`);