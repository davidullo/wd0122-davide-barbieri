function aggiungiNumero(bottone) {
    let numero = bottone.innerHTML; // Prelevo un attributo
    // querySelector prende gli elementi attraverso css. I getElementBy... sono antiquati
    let display = document.querySelector('#display'); // Seleziono l'elemento che voglio modificare
    // Se voglio scrivere dentro un input, innerHTML o innerText non funzioneranno!
    display.value += numero; // Mi aggancio all'elemento contenuto nella variabile display per modificarne l'attributo value, provocando l'apparizione dei numeri. += significa "concatena" in questo caso.
    bottone.blur()
}

function risultato() {
    let display = document.querySelector('#display');
    let totale = eval(display.value);
    display.value = totale;
}

function cancella() {
    let display = document.querySelector('#display');
    display.value = '';
}

function moltiplicazione() {
    let display = document.querySelector('#display');
    display.value += '*'
}

// Inizio suono
function play() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.volume = 0.1;
}
// Fine suono

// Input text già selezionato al caricamento della pagina.
window.onload = document.getElementById('display').select();

// PARTE SPERIMENTALE

// cancellare con C o backspace. Non implementato perché non funziona più result
// document.addEventListener('keyup', function (evento) {
//     if (evento.key == 'backspace' || 'c') {
//         cancella()
//     }
// })

// let campo = document.querySelector('#bottone-uguale')
// Al click su campo, fai questo (la funzione qui si chiama callback)
document.addEventListener('keyup', function (eventoRisultato) {
    if (eventoRisultato.key == 'Enter') {
        risultato()
    }
})

// test

// Funzione dark-mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// let bottoni = document.querySelectorAll('button')

// bottoni[0].addEventListener('click', sfondoRosso)
// bottoni[1].addEventListener('click', sfondoRosso)
// bottoni[2].addEventListener('click', sfondoRosso)
// bottoni[3].addEventListener('click', sfondoRosso)
// bottoni[4].addEventListener('click', sfondoRosso)

// function sfondoRosso() {
//     this.style.backgroundColor = 'red'
// }

// cancellare l'ultimo carattere se si scrivono più segni sul display. NON FUNZIONA
// let schermo = document.querySelector('#document')
// if (schermo = '+' || '-' || '*' || '/' + '+' || '-' || '*' || '/') {
//     schermo = schermo.length - 1
// } else {

// }