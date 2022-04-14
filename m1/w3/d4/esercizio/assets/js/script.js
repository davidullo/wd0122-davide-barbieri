// PUNTO 1
// - Applicare metodi per maiuscolo e minuscolo
let saluto = "Ciao Flavio, un saluto da Davide!";
let Minuscolo = saluto.toLowerCase();
let Maiuscolo = saluto.toUpperCase();
console.log(Maiuscolo);
console.log(Minuscolo);
// - Suddividere in elementi e selezionarne due
let salutoSplittato = saluto.split(' ');
console.log(salutoSplittato);
let primaParola = salutoSplittato[0];
let secondaParola = salutoSplittato[3];
console.log(primaParola, secondaParola);
// - I due selezionati saranno concatenati in una stringa
let unicaStringa = primaParola + ' ' + secondaParola;
console.log(unicaStringa);
// PUNTO 2
// - Crea un array di persone
let persone = [
    'Davide',
    'Marco',
    'Roberto',
    'Ivan',
    'Renato'
]
console.log(persone.length);
// PUNTO 3
// Leggi il terzo elemento
console.log(persone[2])
// PUNTO 4
// Passa all'array un valore tramite una variabile, e leggi la lunghezza dell'array
let aggiungiPersona = persone.push('Lorenzo');
console.log(persone, persone.length);
// PUNTO 5
// Crea una funzione dove utilizzerai valori numerici tratti da un array
function contaPersone() {
    console.log('Al momento il tuo array contiene ' + (persone.length) + ' persone che conosci, e la terza persona è ' + persone[2] + '.');
}
console.log(contaPersone());
// PUNTO 6
// Usa push/pop, e shift/unshift
persone.push('Francesco');
console.log(persone);
console.log("Francesco è comparso alla fine dell'array");
persone.pop();
console.log(persone);
console.log("Francesco ora è scomparso dalla fine dell'array");
persone.shift();
console.log(persone);
console.log("Davide ora è scomparso dall'inizio dell'array");
persone.unshift('Alessandro');
console.log(persone);
console.log("Alessandro è ora comparso all'inizio dell'array");