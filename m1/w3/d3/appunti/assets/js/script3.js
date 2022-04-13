function aggiungiNumero(bottone) {
    let numero = bottone.innerHTML; // Prelevo un attributo
    // querySelector prende gli elementi attraverso css. I getElementBy... sono antiquati
    let display = document.querySelector('#display'); // Seleziono l'elemento che voglio modificare
    // Se voglio scrivere dentro un input, innerHTML o innerText non funzioneranno!
    display.value += numero; // Mi aggancio all'elemento contenuto nella variabile display per modificarne l'attributo value, provocando l'apparizione dei numeri. += significa "concatena" in questo caso.
}

function risultato() {
    let display = document.querySelector('#display');
    let totale = eval(display.value);
    display.value = totale;
}
