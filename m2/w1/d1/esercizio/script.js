let dataAttuale = new Date();
console.log(dataAttuale);

let dataNascita = new Date(1994, 3, 26);
console.log(dataNascita);

console.log(dataNascita.getFullYear());

console.log('----- inizio -----')

let listaMesi = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
]

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

/* PRIMO metodo */

setInterval(aggiornaData, 1000);

function aggiornaData() {
    const dataCorrente = new Date()
    document.querySelector('.giorno .campo').innerHTML = dataCorrente.getDate();
    document.querySelector('.mese .campo').innerHTML = listaMesi[dataCorrente.getMonth()];
    document.querySelector('.anno .campo').innerHTML = dataCorrente.getFullYear();
    document.querySelector('.ora .campo').innerHTML = dataCorrente.getHours();
    document.querySelector('.minuto .campo').innerHTML = dataCorrente.getMinutes();
    document.querySelector('.secondo .campo').innerHTML = dataCorrente.getSeconds();
};

/* Fine PRIMO metodo */

/* SECONDO metodo */

// setInterval(function () {
//     document.querySelector('.giorno .campo').innerHTML = dataAttuale.getDate();
//     document.querySelector('.mese .campo').innerHTML = listaMesi[dataAttuale.getMonth()];
//     document.querySelector('.anno .campo').innerHTML = dataAttuale.getFullYear();
//     document.querySelector('.ora .campo').innerHTML = dataAttuale.getHours();
//     document.querySelector('.minuto .campo').innerHTML = dataAttuale.getMinutes();
//     document.querySelector('.secondo .campo').innerHTML = dataAttuale.getSeconds();
// }, 1000);

/* Fine SECONDO metodo */

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

console.log(dataAttuale.toLocaleDateString('it-IT', options));