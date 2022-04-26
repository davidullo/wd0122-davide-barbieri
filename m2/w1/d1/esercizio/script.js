let dataAttuale = new Date();
console.log(dataAttuale);

let dataNascita = new Date(1994, 3, 26);
console.log(dataNascita);

console.log(dataNascita.getFullYear());

console.log('----- inizio -----')

console.log(dataAttuale.getDate());
console.log(dataAttuale.getMonth());
console.log(dataAttuale.getFullYear());
console.log(dataAttuale.getHours());
console.log(dataAttuale.getMinutes());
console.log(dataAttuale.getSeconds());


console.log(document.querySelector('.giorno .campo').textContent);
console.log(document.querySelector('.mese .campo').textContent);
console.log(document.querySelector('.anno .campo').textContent);
console.log(document.querySelector('.ora .campo').textContent);
console.log(document.querySelector('.minuto .campo').textContent);
console.log(document.querySelector('.secondo .campo').textContent);

console.log('----- esercizio -----');

// document.querySelector('.giorno .campo').textContent = dataAttuale.getDate()
// document.querySelector('.mese .campo').textContent = dataAttuale.getMonth()
// document.querySelector('.anno .campo').textContent = dataAttuale.getFullYear()
// document.querySelector('.ora .campo').textContent = dataAttuale.getHours()
// document.querySelector('.minuto .campo').textContent = dataAttuale.getMinutes()
// document.querySelector('.secondo .campo').textContent = dataAttuale.getSeconds()

setInterval(function () {
    document.querySelector('.giorno .campo').innerHTML = dataAttuale.getDate();
    document.querySelector('.mese .campo').innerHTML = dataAttuale.getMonth() + 1;
    document.querySelector('.anno .campo').innerHTML = dataAttuale.getFullYear();
    document.querySelector('.ora .campo').innerHTML = dataAttuale.getHours();
    document.querySelector('.minuto .campo').innerHTML = dataAttuale.getMinutes();
    document.querySelector('.secondo .campo').innerHTML = dataAttuale.getSeconds();
}, 1000)

/* Problemi:
- Il timer dei secondi non si aggiorna ogni secondo
- Sostituire il numero del mese con il relativo nome
- Chiarimento "Creare un sistema per la formattazione in formato europeo"
*/

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

console.log(dataAttuale.toLocaleDateString('it-IT', options));