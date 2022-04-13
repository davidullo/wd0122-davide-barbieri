// Funzione anonima. Da sola così è inutile e da anche rrore perché non ha un nome
// function () {
//     alert("questo alert non si vedrà")
// }

// si può invocare una funzione che è scritta più in basso, per un fenomeno chiamato "hoisting" (significa "sollevare")

let bottone = document.getElementById('bottone')
bottone.onclick = miaFunzione;
// Mettendo le parentesi tonde a miaFunzione() la funzione viene invocata immediatamente, togliendole viene chiamata solo all'evento impostato

function miaFunzione() {
    console.log("funzione invocata");
}

function trasformaGrassetto(s) {
    return '<b>' + s + '</b>'
}

let saluto = 'ciao'
document.write(saluto);
document.write(trasformaGrassetto(saluto));

// ------- FUNZIONI PARAMETRICHE
// a ed b sono dei contenitori.
function getSommaPro(a, b) {
    return a + b;
}
// al posto di 3 e 6 si possono mettere anche delle variabili o addirittura delle funzioni
let res1 = getSommaPro(3, 6);
console.log(res1);

/* Esempio mio
let numero1 = prompt('Scrivi un numero');
let numero2 = prompt('Scrivi un secondo numero');
function sottrai(a, b) {
    return a - b;
}
let risultatoSottrazione = sottrai(numero1, numero2);
console.log(risultatoSottrazione);
Fine esempio mio */

// --------- FUNZIONI FRECCIA
function dividi() {
    return 20 / 2;
}
// Con la funzione freccia scompare la parola function, le graffe, etc. ed il RETURN è implicito! Il => lo traduciamo con "restituiscimi..."
let divisione = () => 20 / 2
console.log(divisione());
// nel momento in cui ho un solo parametro, anche le parentesi tonde dopo l'uguale diventano facoltative
let incrementa = a => a + 1;
console.log(incrementa(4));
// con due parametri le parentesi tonde sono obbligatorie
let divisionePro = (a, b) => a / b;
console.log(divisionePro(4, 2))
// Il return implicito non mi crea problemi se non uso la funzione per restituire dati
let divisioneProLog = (a, b) => console.log(a / b);
// Con la presenza delle graffe il return non è implicito
let divisioneProEvolution = (a, b) => {
    let res = a / b;
    document.write(res);
    return res
}