/*

let now = new Date();
console.log(now); // data attuale
console.log(now.getDay()); // numero gg della sett. a partire da domenica (che è 0)
let future = new Date();
let futureMinutes = future.getMinutes();
future.setMinutes(futureMinutes + 15);
console.log(future);

if (now.getTime() < future.getTime()) {
    // fai qualcosa
}

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(event.toLocaleDateString('it-IT', options));

// intervalli

setInterval(function () {
    let n = new Date();
    document.querySelector('#secondi').innerHTML = n.getMinutes() + ' : ' + n.getSeconds()
}, 1000)

// ----------

// immaginiamo che al posto di "frutto" ci sia un dato inserito da un utente
let frutto = 'Arance';
switch (frutto) {
    case "Banana": // significa "se in frutto c'è Banana, allora fai questo"
        console.log('Le banane costano 0.99€ al kg');
        break; // break significa " se si verifica la condizione, non passare alle altre"
    case "Mele":
        console.log('Le mele costano 0.64€ al kg');
        break;
    case "Manghi": // togliamo di proposito il break fra manghi e papaye
        console.log("Loggo Manghi, ma tolgo il break, quindi diventa true anche tutto il resto fino a che non trovo il break");
    case "Papaye":
        console.log('I manghi e le Papaye costano 1.79€ al kg');
        break;
    default: // Si mette alla fine, per il caso in cui il frutto scelto non sia in nessun case
        console.log('Siamo spiacenti, non disponiamo di ' + frutto);
}

// -------- cicli while

// ATTENZIONE QUESTO è UN LOOP INFINITO: NON CAMBIARE IL NOME DI CONDIZIONE
// let condizione = true;
// while (condizion°) {
//     console.log('test');
// }

let x = 0;
while (x < 10) {
    console.log('test n°: ' + x);
    x++
}

let frutta = ['Mele', 'Pere', 'Banane'];
let y = 0;
while (y <= frutta.length - 1) {
    console.log(frutta[y], y);
    y++
}

// do / while. Con il do viene eseguito almento una volta, senza do (come sopra) non viene eseguito

let h = 0;

do {
    console.log('test n°: ' + h);
    h++
}
while (h > 2)

*/

// Se devo ciclare un array scelgo il forEach o il forOf. Il forOf è considerato più innovativo ed efficiente.

// con while creo la variabile fuori, con for la creo dentro

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// foreach

let pizze = ['Margherita', 'Diavola', 'Marinara']
document.write(`<ul>`)
// pizze.forEach(function (el) {
//     //el è equivalente a pizze[i] del ciclo for
//     document.write(`<li>${el}</li>`)
// })

pizze.forEach(function (el, i) {
    document.write(`<li>${i + 1} - ${el}</li>`)
})
document.write(`</ul>`)

// foreach vs map

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = []

// PRENDI NUM. e ciclalo, cioè per ogni elemento dentro num esegui questa funzione.
num.forEach(function (el) {
    console.log(el * 2);
    num2.push(el * 2)
})

console.log(num, num2);

// let numeriMoltiplicati = num.map(function () {

// })
// ripetere tanto for e foreach
// ripetere abbastanza map, filter, finder